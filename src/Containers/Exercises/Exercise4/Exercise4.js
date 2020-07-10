import React, {Component} from 'react';
import '../common.css';
import {withRouter} from 'react-router-dom';
import Timer from '../../Timer/Timer';

 class Exercise4 extends Component{
   _isMounted = false;
   state = {
      text : '',
      next : false,
      start : false,
      full : false
   }

   componentDidMount(){
      this._isMounted = true;
         setTimeout(()=>{
            if(this._isMounted)
               this.setState({text:'Relax your shoulders. Rub your hands with little friction for 15 seconds until it get warm'})
            setTimeout(()=>{
               if(this._isMounted)
                  this.setState({text:'Once the hands feel warm and nice, cover the eyes placing the heels of your hands on the cheekbones resting the palm on the brow bones and letting the fingertips rest on your skull.'})
               setTimeout(()=>{
                  if(this._isMounted)
                     this.setState({text:'Feel the warmth of the hands and darkness. Notice if you see any flashes of light. Let your breath be natural and smooth. When lights and the colors fade to black open your eyes into the darkness'})
                  setTimeout(()=>{
                     if(this._isMounted)
                        this.setState({text:'START!', start:true, next:true}) 
                  },7000)
               },7000)
            },5000)
         }, 1000)
      }

   componentWillUnmount(){
      this._isMounted = false;
   }

   restartExercise =()=>{
      this.props.history.replace('/exercises');
   }

   finishedHandler =()=>{
      if(this.state.next){
         this.props.history.replace('/')
      }else{
         this.setState({next:true});
      }
   }

   fullInstructions = ()=>{
      this.setState({
         full : true
      })
   }

    render(){
      const buttonName = this.state.next ? 'FINISH' : 'SKIP'; 
      const fullInstructions = (<div className='Exercise'>
      <h3>Full Instruction</h3>
      <ol className='Ol'>
         <li>Relax your shoulders. Rub your hands with little friction for 15 seconds until it get warm</li>
         <li>Once the hands feel warm and nice, cover the eyes placing the heels of your hands on the cheekbones resting the palm on the brow bones and letting the fingertips rest on your skull.</li>
         <li>Feel the warmth of the hands and darkness. Notice if you see any flashes of light. Let your breath be natural and smooth. When lights and the colors fade to black open your eyes into the darkness</li>
      </ol>
      </div>
      ); 
      return (
         <div className='Container'>
            <div className='Exercise'>
               <h1>Rub Rub</h1>
               <p>For the last time<br/>In a stable relaxed position</p>
               <p className='Instruction'>{this.state.text}</p>
            </div>
               {this.state.start?<Timer minutes='1' seconds='10'/>:null}
               <button onClick={this.restartExercise}>RESTART</button>
               <button onClick={this.finishedHandler}>{buttonName}</button>
               <button disabled={!this.state.next}  onClick={this.fullInstructions} 
               style={{
                  marginTop :'10px'
               }}>
                  Full Instructions
               </button>
               {this.state.full ? fullInstructions : null}
         </div>
      );
    }
}

export default withRouter(Exercise4);
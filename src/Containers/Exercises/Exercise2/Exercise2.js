import React, {Component} from 'react';
import '../common.css';
import {withRouter} from 'react-router-dom';
import Timer from '../../Timer/Timer';

 class Exercise2 extends Component{
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
               this.setState({text:"Move your eyes in the shape of figure '8'. Repeat this for 5 breaths"})
               setTimeout(()=>{
                  if(this._isMounted)
                     this.setState({text:'START!',next:true, start:true}) 
               },4000)
         }, 1000)
      }

   componentWillUnmount(){
      this._isMounted = false;
   }

   nextExercise =()=>{
      this.props.history.push('/exercises/3');
   }
   prevExercise = ()=>{
      this.props.history.goBack();
   }

   fullInstructions = ()=>{
      this.setState({
         full : true
      })
   }
    render(){
      const buttonName = this.state.next ? 'NEXT' : 'SKIP';
      const fullInstructions = (<div className='Exercise'>
         <h3>Full Instruction</h3>
         <ol className='Ol'>
            <li>Move your eyes in the shape of figure '8'.</li>
            <li>Repeat this for 5 breaths</li>
         </ol>
         </div>
      );
      return (
         <div className='Container'>
            <div className='Exercise'>
               <h1>Figure 8</h1>
               <p>In a stable relaxed position</p>
               <p className='Instruction'>{this.state.text}</p>
            </div>
            {this.state.start?<Timer minutes='0' seconds='30'/>:null}
            <button onClick={this.prevExercise}>BACK</button>
            {this.state.start?
            <button onClick={this.fullInstructions}>
               Full Instructions
            </button>
            :null}
            <button onClick={this.nextExercise}>{buttonName}</button>
            {this.state.full ? fullInstructions : null}
         </div>
      );
    }
}

// In a stable relaxed postion,  move your eyes up and down , left and right, diagnally right and diagnally each for 5 breaths

export default withRouter(Exercise2);
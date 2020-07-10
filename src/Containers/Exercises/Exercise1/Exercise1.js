import React, {Component} from 'react';
import '../common.css';
import {withRouter} from 'react-router-dom';
import Timer from '../../Timer/Timer';

 class Exercise1 extends Component{
   _isMounted = false;
   state = {
      text : '',
      next : false,
      start: false,
      full : false
   }

   componentDidMount(){
      this._isMounted = true;
      this.timeOut = setTimeout(()=>{
            if(this._isMounted)
               this.setState({text:'Move your eyes up and down for 5 breaths'})
            setTimeout(()=>{
               if(this._isMounted)
                  this.setState({text:'Move your eyes left and right for 5 breaths'})
               setTimeout(()=>{
                  if(this._isMounted)
                     this.setState({text:'Move your eyes diagonally from left to right for 5 breaths'})
                  setTimeout(()=>{
                     if(this._isMounted)
                        this.setState({text:'Move your eyes diagonally from right to left for 5 breaths'})
                     setTimeout(()=>{
                        if(this._isMounted)
                           this.setState({text:'START!',next:true, start:true}) 
                     },3000)
                  },3000)
               },3000)
            },3000)
         }, 1000)
      }

   componentWillUnmount(){
      this._isMounted = false;
   }

   nextExercise =()=>{
      if(this.state.next){
         this.props.history.push('/exercises/2');
      }
      else{
         this.setState({next:true});
      }
   }

   fullInstructions = ()=>{
      this.setState({
         full : true
      })
   }

    render(){
      const fullInstructions = (<div className='Exercise' >
         <h3>Full Instruction</h3>
         <ol className='Ol'>
            <li>Move your eyes up and down for 5 breaths</li>
            <li>Move your eyes left and right for 5 breaths</li>
            <li>Move your eyes diagonally from left to right for 5 breaths</li>
            <li>Move your eyes diagonally from right to left for 5 breaths</li>
         </ol>
         </div>
      );
      const buttonName = this.state.next ? 'NEXT' : 'SKIP'; 
      return (
         <div className='Container'>
            <div className='Exercise'>
               <h1>8 Directions</h1>
               <p>In a stable relaxed position</p>
               <p className='Instruction'>{this.state.text}</p>
            </div>
         {this.state.start?<Timer minutes='0' seconds='45'/>:null}
            <button disabled={!this.state.next} onClick={this.fullInstructions} >
               Full Instructions
            </button>
         <button onClick={this.nextExercise}>{buttonName}</button>
         {this.state.full ? fullInstructions : null}
         </div>
      );
    }
}

export default withRouter(Exercise1);
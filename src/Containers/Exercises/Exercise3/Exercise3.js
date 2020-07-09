import React, {Component} from 'react';
import '../common.css';
import {withRouter} from 'react-router-dom';
import Timer from '../../Timer/Timer';


 class Exercise3 extends Component{
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
               this.setState({text:'Hold your two index fingers horizontally opposite with 2 inches gap in between also about 8 inches front of your face and eye level.'})
            setTimeout(()=>{
               if(this._isMounted)
                  this.setState({text:'Look across the room, with aware of your fingers, you will see a little hotdog in between your fingers.'})
               setTimeout(()=>{
                  if(this._isMounted)
                     this.setState({text:'The hotdog will disappear once you focus on it.'})
                  setTimeout(()=>{
                     if(this._isMounted)
                        this.setState({text:'Repeat for 10 times, 1 breath across the room and 1 breath getting rid off hotdog.', next: true})
                        setTimeout(()=>{
                           if(this._isMounted)
                              this.setState({text:'START!',next:true, start:true}) 
                        },4000)
                  },3000)
               },5000)
            },5000)
         }, 1000)
      }

   componentWillUnmount(){
      this._isMounted = false;
   }

   nextExercise =()=>{
      this.props.history.push('/exercises/4');
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
            <li>Hold your two index fingers horizontally opposite with 2 inches gap in between also about 8 inches front of your face and eye level.</li>
            <li>Look across the room, with aware of your fingers, you will see a little hotdog in between your fingers.</li>
            <li>The hotdog will disappear once you focus on it.</li>
            <li>Repeat for 10 times, 1 breath across the room and 1 breath getting rid off hotdog.</li>
         </ol>
         </div>
      ); 
      return (
         <div className='Container'>
            <div className='Exercise'>
               <h1>Hotdog</h1>
               <p>In a stable relaxed position</p>
               <p className='Instruction'>{this.state.text}</p>
            </div>
            {this.state.start?<Timer minutes='0' seconds='45'/>:null}
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

export default withRouter(Exercise3);
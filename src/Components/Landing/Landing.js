import React, {Component} from 'react';
import classes from './Landing.module.css';

class Landing extends Component{

   startExercise = ()=>{
      this.props.history.push('/exercises');
   }

   render(){
      return (
         <div className={classes.Container}>
            <div className={classes.Landing}>
               <div className={classes.Heading}>
                  <h1>Relaxeye</h1>
                  <p>Relaxe your eyes</p>
               </div>
               <p>
                  The average person looks at their smartphone '?' times per day. All that staring from frequent phone use, computer use, and TV-watching can all lead to eye strain.
               </p>
               <p>
                  Eye relaxation exercises reduce eye strain which in turn can increases the flexibility of your eye muscles.
               </p>
               <p>
                  <em>Exercise source : Youtube</em>
               </p>
               <button onClick={this.startExercise}>START</button>
            </div>
         </div>
         
      );  
   }
}
   
export default Landing;


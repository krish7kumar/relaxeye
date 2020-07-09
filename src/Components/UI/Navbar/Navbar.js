import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const navbar =()=>{
   return (
      <div className={classes.Navbar}>
         <NavLink to='/' exact >Relaxeye</NavLink>
         <ul >
            <li>
               <NavLink to='/exercises' exact 
               activeClassName={classes.LinkActive}
               className={classes.Link}>
                  1
               </NavLink>
            </li>
            <li>
               <NavLink to='/exercises/2' exact activeClassName={classes.LinkActive}
               className={classes.Link}>
                  2
               </NavLink>
            </li>
            <li>
               <NavLink to='/exercises/3' exact activeClassName={classes.LinkActive}
               className={classes.Link}>
                  3
               </NavLink>
            </li>
            <li>
               <NavLink to='/exercises/4' exact activeClassName={classes.LinkActive}
               className={classes.Link}>
                  4
               </NavLink>
            </li>
         </ul>
      </div>
   );
}

export default navbar;
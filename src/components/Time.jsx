import React from 'react';

const calcTime = (props) => {
    let time = props.time
   const hours = Math.floor(time / 60);
   const mins = time % 60;
   return `${hours}h ${mins}m`;
 }

 export default calcTime
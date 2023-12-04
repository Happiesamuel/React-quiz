import {useEffect} from 'react';

export default function Timer({dispatch,time,mode}) {
  useEffect (function(){
  const a =  setInterval(function (){
    dispatch({type:'tick'})
  },1000)
    return function () {
     clearInterval(a)  
    }
    
  },[])
  const min = Math.floor(time /60)
  const sec = Math.floor(time % 60)
   return <div className={mode?'but':'but-light'} >⏳ {min < 10 && '0'} {min} : {sec < 10 && '0'} {sec}</div>
}

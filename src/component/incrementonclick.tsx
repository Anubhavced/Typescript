import { useEffect, useState } from "react";

function IncrementOnclick() {
  const [count, setCounter] = useState<number>(0);
  const [active,setActive] = useState<boolean>(false)
  const [combine,setCombine] = useState<string | number>()

  useEffect(()=>{
    let interval:number ;
        if (active) {
             interval = window.setInterval(() => {
                setCounter(count => count + 1);
            }, 1000);
          } else if (!active && count !== 0) {
            setCounter(count);
          }
        return () => clearInterval(interval);
      
  },[active,count])

  const increment = () => {
    setCounter(count +1);
  };
  const decrement = () => {
      if(count>0 ){
    setCounter(count -1); 
      }
  }
  const timer = () =>{
    setActive(true)  ; 
  }
  const Pausetimer = () => {
    setActive(!active)  ; 
    setCounter(count) 
    setCombine(5)
  }
  const  Stoptimer = () =>{
    setCounter(0) ;
    setActive(false)
    setCombine("timer stop")
  }

  return (
    <div>
      <h2>Counter</h2>

      <div>{count}</div>
        <div>{combine}</div>
      <button onClick={increment}>Incr +</button>
      <button onClick={decrement}>Decr -</button>
      {active?<button onClick={Pausetimer}>Pause timer</button>:<button onClick={timer}>Start timer</button>}
      
      {active?<button onClick={Stoptimer}>Stop timer</button>:null}
      
    </div>
  );
}
export default IncrementOnclick;

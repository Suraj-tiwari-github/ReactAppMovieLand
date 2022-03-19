
import "./App.css";
import {useState, useEffect} from 'react';
//* learnt JSX 
//* Learnt Component.
//*  Learnt how to implement dynamic variable by using props.
//* now learning react state. state is a plain js object., In order to use the state, we need to import {useState} from "react";
//* if anything starts with use, we call it as Hook in react js.
//TODO : make sure to read main concepts. under react docs.
//* using useEffect hooks, useffect will run when the page is loaded.




// here we are adding a new component.
// now adding a props to our component.
// const Person=(props)=>{
//   return (
//   <>
//   <h1>Name: {props.name}</h1>
//   <h2>Last Name: {props.lastName}</h2>
//   <h2>Age: {props.age} </h2>
//   <h3>Package:{props.package}</h3>
//   </>
//   )

// }

const  App=() =>{

  const [counter, setCounter]=useState(0);

  useEffect(()=>{
    alert("You've changed the counter to "+ counter);
  },[counter]);

  // <> </> this is called react fragment.
  return (
    <div className="App">

      <button onClick={()=>{
        setCounter((prevCount)=>prevCount-1)
      }}>-</button>
      <h1>{counter}</h1>
      <button onClick={()=>{
        setCounter((prevCount)=>prevCount+1)
      }}>+</button>


      {/* <Person />
      <Person 
      name={'Suraj@Accenture'} 
      lastName={'Tiwari'} 
      age={22} 
      package={'6.5LPA'}
      />
      <Person name={'Suraj@Klenty'} lastName={'Tiwari'} age={22} package={'6LPA'}/> */}

      {/* we can add props, to change the value dynamically. */}
      
    </div>
  );
}

export default App;

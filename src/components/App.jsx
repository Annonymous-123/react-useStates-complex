import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

function nameUpdater(event){
  const{name,value}=event.target;
  if(name==="fName"){
    setContact((prevValue)=>{
      return(
       {fName:value,lName:prevValue.lName,email:prevValue.email} 
      );
    })
  }
   if(name==="lName"){
    setContact((prevValue)=>{
      return(
       {fName:prevValue.fName,lName:value,email:prevValue.email} 
      );
    })
  }
  if(name==="email"){
    setContact((prevValue)=>{
      return(
       {fName:prevValue.fName,lName:prevValue.lName,email:value} 
      );
    })
  }
}
  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input onChange={nameUpdater} name="fName" placeholder="First Name" />
        <input onChange={nameUpdater}name="lName" placeholder="Last Name" />
        <input onChange={nameUpdater}name="email" placeholder="Email" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

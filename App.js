
import React from 'react';
import { useState } from 'react';
import User from './User';


function App() {

  const[firstData , setFirstData]= useState('');
  const[lastData, setLastData] = useState('')
  const[emailData , setEmail] = useState('');

  const[submitted,setSubmitted]=useState(false);
  const[valid,setValid]=useState(false);

  
  const handleSubmit =(e)=>{
    e.preventDefault();

    if(firstData && lastData && emailData)
    {

      setValid(true);
      setSubmitted(true);
    }
    else
    {
      setValid(false);
      setSubmitted(false);
    }
    


  }
  return(
    

    <div className='container'>
      <form className='register-form' onSubmit={handleSubmit}> 
      {
        submitted && valid?
        <div className='success'>Success! Thankyou for Registring</div>
        :
        null

      }
    

      <input 
      value={firstData}
      type="text" 
      placeholder='First Name' 
      name="firstname" 
      onChange={(e)=>setFirstData(e.target.value)}>
      </input><br/>
      
      {
          submitted && !firstData ?
          <span>Please enter a First Name</span>:
          null

      }
      

      <input
      value={lastData}
       type="text"
        placeholder='Last Name'
         name="lastname" 
         onChange={(e)=>setLastData(e.target.value)}>
      </input><br/>
 

      {
        submitted && !lastData?
        <span>Please enter a Last Name</span>
        :null

      }
     

      <input 
      value={emailData}
      type="text" 
      placeholder='Email' 
      name="email" 
      onChange={(e)=>setEmail(e.target.value)}>
      </input><br/>

      {
        submitted && !emailData?
        <span>Please enter an Email</span>:
        null

      }

     

      <button className='submit' >Register</button>
      </form>
      
     
    </div>
      
    

  );

}


export default App;

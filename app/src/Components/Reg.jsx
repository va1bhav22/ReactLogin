import React from 'react'
import { useState } from 'react'
import "./Reg.css"
const Reg = () => {
    const[user,setuser]=useState("")
    const[email,setemail]=useState("")
    const[number,setnumber]=useState()
    const[date,setdate]=useState()
    const[pass,setpass]=useState()
    const[coonfPass,setcoonfPass]=useState()
    // let arr=JSON.parse(localStorage.getItem("regDetails"))||[];
    
    const handlesubmit=(e)=>{
       e.preventDefault()
       let obj={
        user:user,
        email:email,
        number:number,
        date:date,
        pass:pass,
        coonfPass:coonfPass
       }
       

    //    arr.push(obj)
    //    console.log(arr);
    if(pass!==coonfPass)
    {
        alert("password dosen't Match")
    }
    else{
        // localStorage.setItem("regDetails",JSON.stringify(arr))
        fetch('http://localhost:8080/data', {

      method: 'POST', 
      mode: 'cors', 
      body:JSON.stringify(obj),
      headers:{"content-type":"application/json"} 
    })
        
    }
   
       
    }
  return (
    <div className='MainContainer'>
        <form action="" onSubmit={handlesubmit}>
        <div className='UnderDiv'>
            <div>
                <input required placeholder='username' type="text" onChange={(e)=>setuser(e.target.value)} />
            </div>
            <div>
                <input required placeholder='Email' onChange={(e)=>setemail(e.target.value)} type="email" />
            </div>
            <div>
                <input placeholder='Mobile' onChange={(e)=>setnumber(e.target.value)} type="number" />
            </div>
            <div>
                <input onChange={(e)=>setdate(e.target.value)} type="date" />
            </div>
            <div>
                <input placeholder='password' onChange={(e)=>setpass(e.target.value)} type="password" />
            </div>
            <div>
                <input placeholder='Conf pass' onChange={(e)=>setcoonfPass(e.target.value)} type="password" />
            </div>
            <div>
                <input type="submit" value="Register"/>
            </div>
        </div>
        </form>
    </div>
  )
}

export default Reg
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import "./Reg.css"
// let Regdata=JSON.parse(localStorage.getItem("regDetails"))
// console.log(Regdata);
const Login = () => {
  const[user,setuser]=useState("")
  const[pass,setpass]=useState()
  const [dataApi,setApiData]= useState([]);


  const fetchData=()=>{
  
    fetch("http://localhost:8080/data")
    .then(res=>res.json()).then(res=>{
     
        setApiData(res)
    })
}

useEffect(()=>{
  fetchData()
},[])
// console.log(dataApi);

  
  const handlesubmit=(e)=>{
    e.preventDefault()
    let logObj={
      user:user,
      pass:pass
    }
    // console.log(logObj);
    const userExist = dataApi.find((item)=>item.user===user && item.pass===pass )
    // const userExist = dataApi.map((item)=>item.user===user && item.pass===pass ? :)
    console.log(userExist);
    if(userExist){
      
     alert("login")
    }
    else{
     alert("fail")
    }
   
    
   
    

  }
  return (
    <div className='MainContainer'>
       <form action="" onSubmit={handlesubmit}>
        <div className='UnderDiv'>
            <div>
                <input type="text" onChange={(e)=>setuser(e.target.value)} />
            </div>
            <div>
                <input onChange={(e)=>setpass(e.target.value)} type="pass" />
            </div>
            <div>
                <input type="submit" value="Register"/>
            </div>
            </div>
            </form>

    </div>
  )
}

export default Login
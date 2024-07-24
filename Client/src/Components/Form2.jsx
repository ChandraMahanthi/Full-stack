import axios from "axios";
import {useState}  from "react";

function Form2()
{
    let [name,setName]  = useState();
    let [phone,setPhone]= useState();
    let [email,setEmail]= useState();

    let takeName = (event)=>
    {
        setName(event.target.value);
    }
    let takeNumber = (event)=>
    {
        setPhone(event.target.value);
    }
    let takeEmail = (event)=>
    {
        setEmail(event.target.value);
    }
    let collectData = () =>
    {
        let totalData = {
            username : name,
            contact : phone,
            mailId : email
        }
        let promiseObject = axios.post("http://localhost:4000/sample",totalData);
        promiseObject.then((res)=>{
            console.log(res)
        })
        .catch((error)=>{
            console.log(error)
        })

        console.log(name,phone,email);
    }
    

    return(
        <>
        <br />
            <input type="text" onChange={takeName}/><br />
            <input type="tel" onChange={takeNumber}/><br />
            <input type="email" onChange={takeEmail}/><br />
            <button onClick={collectData}>Register</button>
        </>
 )
}

export default Form2;
import {useState} from 'react'
import axios from 'axios';
export function Form()
{
    var [name,setName]   = useState();
    var [contact,setContact] = useState();
    var [email,setEmail] = useState();

    let getName = (event)=>
    {
        setName(event.target.value);
    }
   
    let getContact = (event)=>
    {
        setContact(event.target.value);
    }
    let getMail = (event)=>
    {
        setEmail(event.target.value);
    }
    let register = ()=>
    {
        // var data = {
        //     username:name,
        //     phone:contact,
        //     email:email
        // }

    //   var promiseObj=  axios.post("http://localhost:5000/register",data)
    //   promiseObj.then((res)=>{
    //     console.log(res)
    //   }).catch((error)=>{
    //     console.log(error)
    //   })

       console.log(name,contact,email)
    }


    return(
    <>
       
            <table>
                <tr>
                    <td><label htmlFor="">Name</label></td>
                    <td><input type="text" onChange={getName} /></td>
                </tr>
                <tr>
                    <td><label htmlFor="">Phone number</label></td>
                    <td><input type="tel" onChange={getContact}/></td>
                </tr>
                <tr>
                    <td><label htmlFor="">E-mail</label></td>
                    <td><input type="email" onChange ={getMail}/></td>
                </tr>
                <tr>
                    <td><button onClick={register}>Register</button></td>
                    <td><button>Display</button></td>
                </tr>
            </table>
        
    </>        
    )
}

// export default Form

// promise
// cors
// axios
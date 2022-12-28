import { useState } from 'react';
import './welcome.css';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';

const Welcome = () => {

    const [input,setInputData] = useState({
        todo:""
    });



    const add = () =>{
        if(input){    
            alert("posted");
            axios.post('http://localhost:9000/todo',input)
            .then(function(res){
                if(res.data.message==="User Succefully Added"){
                    console.log(res);
                }
                else{
                    console.log(res)
                }});
        }
        else{
            alert("invalid input")
        }
    }

    return ( 
        <div className="welcome">
            <h1> Todo List </h1>
            <input type="text" required name="todo" value= {input.value} onChange={(e)=>setInputData({input,[e.target.name]:e.target.value})} placeholder="Add todo 👍"/>
            <i className="fa-regular fa-plus" onClick={add}></i>
           <div>

           </div>

        </div>
    )

}

export default Welcome;
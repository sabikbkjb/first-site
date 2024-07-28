import React, { useState } from "react";
// import {Link} from "react-router-dom"
import axios from "axios"
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import BASE_URL from 'process.env.BASE_URL'

function Simple() {
    const navigate = useNavigate();
    // const BASE_URL=process.env.BASE_URL
        const [data,setdata] = useState([])
    // const [res,setres]=useState('')
    
    const changeHandler = (e) => {
        const { name, value } = e.target;
        setdata({ ...data, [name]:value});
      }

    const Add=async(e)=>{
        e.preventDefault();
        
        const response = await axios.post(`https://first-site-3.onrender.com/adduser`,data);
        console.log('Form submitted:', response.data);
           const datas=response.data
           console.log(datas)
        localStorage.setItem("chat-user",JSON.stringify(datas))
         navigate('/error')
    }
    // const Add = async(e)=>{
    //     e.preventDefault();
    //     console.log(data)
    // }

    return (
        <>
          <div class="bg-gray-100 flex items-center justify-center min-h-screen w-[50vh] redmi:w-[50vh]"> 
            <div class="w-full max-w-md bg-white rounded-lg shadow-md p-8 redmi:p-5">
        <div class="flex justify-center mb-8 sm:mb-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" class="w-24 h-24"/>
        </div>
        <form onSubmit={Add}>
            <div class="mb-6 sm:mb-4">
                <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
                <input type="text" id="username" name="username" placeholder="Username" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  " value={data.username } onChange={changeHandler} required/>
            </div>
            <div class="mb-6">
                <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" id="password" name="password" placeholder="Password" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  " value={data.password} onChange={changeHandler} required/>
            </div>
          <button type="submit" class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
           Log In  
            </button> 
        </form>
        <div class="mt-6 text-center text-sm text-gray-600 ">
            {/* <p>Don't have an account? <Link to="instagram.com" class="text-blue-500 hover:text-blue-700">Sign up</Link></p> */}
          </div>
    </div>
    </div>  
    
        </>
    )
}
export default Simple

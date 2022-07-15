import React, { Component, useState } from 'react';
import axios from 'axios';
import { Navigate,useNavigate} from 'react-router-dom';
import userEvent from '@testing-library/user-event';
const url='http://localhost:8000/company/createUser';


const Contact = () => {
    const navigate = useNavigate();
    const [user,setUser] = useState([])
    const [name ,setName] = useState();
    const [phone ,setPhone]=useState();
    const [email ,setEmail]=useState();
    const [password ,setPassword]=useState();

    const  formSubmit= async (e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('name',name);
        formData.append('phone',phone);
        formData.append('email',email);
        formData.append('password',password);

    
        const user= await axios.post(url,formData)  
            navigate('/Home');
    }
    return(
        <>
        <div>
            <div className="my-5">
                <h1 className='text-center'>Add User</h1>
            </div>
            {user}
            <div className='container contact_div'>
                <div className='row'>
                    <div className='col-md-6 col-10 mx-auto'>
                        <form onSubmit={formSubmit} method="POST" encType='multipart/form-data' action='login'>
                                <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Name</label>
                                <input type="text" 
                                 class="form-control" 
                                 name="name"
                                 value={name}
                                 onChange={(e) => setName(e.target.value)}
                                 placeholder="Enter Your Name"
                                 required 
                                 />
                                </div>
                               
                                <div class="mb-3">
                                <label for="exampleFormControlInput1"   class="form-label">Phone</label>
                                <input type="number"
                                 class="form-control" 
                                 name="phone"
                                 value={phone}
                                 onChange={(e) => setPhone(e.target.value)}
                                 placeholder="Mobile Number"
                                 required  pattern="[7-9]{1}[0-9]{9}" />
                                </div>

                                <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email"
                                 class="form-control" 
                                 name="email"
                                 value={email}
                                 onChange={(e) => setEmail(e.target.value)}
                                 placeholder="Enter Your Email address" required
                                 pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
                                </div>

                                <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Password</label>
                                <input type="password"
                                 class="form-control" 
                                 name="password"
                                 value={password}
                                 onChange={(e) => setPassword(e.target.value)}
                                 placeholder="Enter Password" required
                                 />
                                </div>

                      
                                <div class="col-12">
                                    <button class="btn btn-outline-primary" x type="submit">
                                        Submit form
                                    </button>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
        </div> 
        </> 
    );

}
export default Contact;
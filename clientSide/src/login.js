import React, { useState } from 'react'
import axios from 'axios'
import { Navigate,useNavigate} from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate();
    const [email ,setEmail] = useState()
    const [password ,setPassword]= useState()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("email", email)
        formData.append("password",password)
    
        const result = await axios.post('http://localhost:8000/company/userLogin',formData).then((res) => alert(res.data.message))
        navigate('/profile')
    }
  return (
    <>
        <div>
            <div className="my-5">
                <h1 className='text-center'>Login</h1>
            </div>
            <div className='container contact_div'>
                <div className='row'>
                    <div className='col-md-6 col-10 mx-auto'>
                        <form onSubmit={handleSubmit} method="POST" encType='multipart/form-data' action='profile'>
                                <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">UserName</label>
                                <input type="text" 
                                 class="form-control" 
                                 id="exampleFormControlInput1"
                                 name="name"
                                 value={email}
                                 onChange={(e) => setEmail(e.target.value)}
                                 placeholder=" UserName"
                                 required 
                                 />
                                </div>
                               
                                <div class="mb-3">
                                <label for="exampleFormControlInput1"   class="form-label">Password</label>
                                <input type="password"
                                 class="form-control" 
                                 id="exampleFormControlInput1"
                                 name="phone"
                                 value={password}
                                 onChange={(e) => setPassword(e.target.value)}
                                 placeholder="Password"
                                 required/>
                                </div>

                                <div class="col-12">
                                    <button class="btn btn-outline-primary ml-78" type="submit">
                                        Login
                                    </button>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
        </div> 
    </>
  )
}

export default Login
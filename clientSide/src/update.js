import React, { Component, useState ,useEffect} from 'react';
import axios from 'axios';
import { Navigate,useNavigate ,Link ,useParams ,useLocation } from 'react-router-dom';


const Update = () => {
    const navigate = useNavigate();
    const {id}  =useParams()
    const location=useLocation()
    const state= location.state ;
   // console.log(params.id)
    const [user,setUser] = useState({
        name : "",
        phone : "",
        email : "" ,
        password : ""
    })


    useEffect(() => {
        async function getUser() {
         try {
          const user = await axios.get(`http://localhost:8000/company/showUser/${state.id}`)
          setUser(user.data);
         } catch (error) {
          console.log("Something is Wrong");
         }
        }
        getUser();
       }, [id]);

    const { name,phone,email,password} = user;
    function onTextChange(e){
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const updateAPIData = async (e) => {
        e.preventDefault()
        try{
            const user = await axios.put(`http://localhost:8000/company/updateUser/${state.id}`,{
                name,
                phone,
                email,
                password
            })
            navigate('/Home')
        }catch(err){
            console.log(err)
        }
    }

    return(
        <>
        <div>
            <div className="my-5">
                <h1 className='text-center'>Update Your Data</h1>
            </div>
            <div className='container contact_div'>
                <div className='row'>
                    <div className='col-md-6 col-10 mx-auto'>
                        <form onSubmit={updateAPIData} encType='multipart/form-data'>
                                <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Name</label>
                                <input type="text" 
                                 class="form-control" 
                                 name="name"
                                 value={name}
                                 onChange={(e) => onTextChange(e)}
                                 placeholder="Enter Your Name"
                                 required 
                                 />
                                </div>
                               
                                <div class="mb-3">
                                <label for="exampleFormControlInput1"   class="form-label">Phone</label>
                                <input type="text"
                                 class="form-control" 
                                 name="phone"
                                 value={phone}
                                 onChange={(e) => onTextChange(e)}
                                 placeholder="Mobile Number"
                                 required  pattern="[7-9]{1}[0-9]{9}" />
                                </div>

                                <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email"
                                 class="form-control" 
                                 name="email"
                                 value={email}
                                 onChange={(e) => onTextChange(e)}
                                 placeholder="Enter Your Email address" required
                                 pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
                                </div>

                                <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Password</label>
                                <input type="password"
                                 class="form-control" 
                                 name="password"
                                 value={password}
                                 onChange={(e) => onTextChange(e)}
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
export default Update;
import react, { Fragment, useEffect, useState } from 'react';
import { Link, Navigate,useNavigate} from 'react-router-dom';
import { Button, Modal, ModalTitle } from 'react-bootstrap'

import axios from 'axios'

const Profile = () => {
  const navigate = useNavigate();
    const [user ,setUser] = useState([])

    const handleDelete = async (id) => {
        alert(`Are you want to delete data?`);
        const data = await axios.post(`http://localhost:8000/company/deleteUser/${id}`)
    }
  

  useEffect(() =>{
    async function getUserData(){
        try{
          const user = await axios.get('http://localhost:8000/company/showUser')
          setUser(user.data);
        }catch(err){
          console.log(err)
        }
    }
    getUserData();
  },[])
  return (
    <Fragment>
 <div>
            <div className='row'>
                <div className='mt-5 mb-4'>
                  <Link to='/profile'>
                    <Button variant='primary'><i className='fa fa-plu'></i>
                        Add New User
                    </Button>
                  </Link>
                </div>
            </div>
            <div className='row'>
                <div className='table-responsive'>
                    <table className='table table-striped table-hover table-bordered'>
                        <thead>
                            <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Update</th>
                        <th>Delete</th>
                        <th>Photo</th>
                    </tr>
                    </thead>
                  <tbody>
             
                  {user.map((user) => {
                    return (
                        <>  
                        <tr>
                        <td>{user._id}</td>
                        <td>{user.name}</td>
                        <td>{user.phone}</td>
                        <td>{user.email}</td>
                        <td><button className='btn btn-primary' type="button" onClick={ function handleClick()  {
                                    navigate(`/update/${user._id}`,{state:
                                    {id:user._id}})}}>Update</button></td>
                        <td><button className='btn btn-danger' type="button" onClick={ 
                          () => handleDelete(user._id)
                        }>                 
                        Delete</button></td>
                        <td><button className='btn btn-primary' type="button" onClick={ function handleClick()  {
                                    navigate(`/images`)}}>Upload Images</button></td>
                      </tr>
                        </>
                      ) 
                })}
                 </tbody>  
            </table>
            </div>
        </div>    
        </div> 
</Fragment>     
  )
 }

export default Profile
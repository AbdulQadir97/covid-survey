import React from 'react'
import { useState } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../config/config';
import { useNavigate, Link } from 'react-router-dom';
const LoginForm = () => {
    const navigate = useNavigate()
    const [userEmail, setUserEmail] = useState('')
    const [userPass, setUserPass] = useState('')
    const loginHandler = async() => {

        try{

            const createUser = await signInWithEmailAndPassword(auth, userEmail,userPass);
            if(createUser)
            {
                
                
              navigate('../home')
        
            }
        }
        catch (error) {
            console.log(error.message)
          }


    }

    
    return (
        <div className="container my-5">
        <h4 className="text-center text-dark">Login</h4>
        <div className="row  justify-content-center">
            <div className="col-md-6 my-5">
                <div className="row form-group  my-2">

                    <div className="col-12">
                        <input 
                         type="email" 
                         className="form-control" 
                         placeholder="abc@xyz.com" 
                         required 
                         onChange={(e)=>{setUserEmail(e.target.value)}}
                         />
                    </div>
                </div>
                <div className="row form-group  my-2">

                    <div className="col-12">
                        <input 
                         type="password" 
                         className="form-control" 
                         placeholder="*******" 
                         onChange={(e)=>{setUserPass(e.target.value)}}
                          />
                    </div>
                </div>
                <div className="row form-group  my-2">
                    <div className="col-12">   
                    <button 
                    className="btn btn-warning btn-block"
                    onClick={loginHandler}
                    >Login</button>
                    </div>



                </div>
                <div class="form-group">
                        <p>

                            <small className="text-dark"> <span class="font-weight-bold">Not a Member?</span>
                                <Link to='/' className="text-primary"> Signup Now </Link></small>
                        </p>
                    </div>

            </div>


        </div>
    </div>
    )
}
export default LoginForm
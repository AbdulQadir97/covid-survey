import React from 'react'
import { useState } from 'react'
import { auth, db } from "../config/config";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { collection, setDoc, doc } from "firebase/firestore"
import { Link, useNavigate } from 'react-router-dom';


const SignupForm = () => {
    const navigate = useNavigate()
    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userPass, setUserPass] = useState('')
    const signupHandler = async () => {
        try {

            await createUserWithEmailAndPassword(auth, userEmail, userPass);
            onAuthStateChanged(auth, (userUID) => {
                console.log(userUID.uid)
                let userCollRef = collection(db, 'users')
                setDoc(doc(userCollRef, userUID.uid), { userId: userUID.uid, name: userName, email: userEmail, pass: userPass })

            })
            navigate('../login')
        }
        catch (error) {
            console.log(error.message)
        }
    }















    return (
        <div className="container my-5">
            <h4 className="text-center text-dark">Signup</h4>
            <div className="row  justify-content-center">
                <div className="col-md-6 my-5">

                    <div className="row form-group my-2">

                        <div className="col-12">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="yourname" id="username"
                                required
                                onChange={(e) => { setUserName(e.target.value) }} />
                        </div>
                    </div>
                    <div className="row form-group  my-2">

                        <div className="col-12">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="abc@xyz.com"
                                required
                                onChange={(e) => { setUserEmail(e.target.value) }}
                            />
                        </div>
                    </div>
                    <div className="row form-group  my-2">

                        <div className="col-12">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="*******"
                                onChange={(e) => { setUserPass(e.target.value) }}
                            />
                        </div>
                    </div>
                    <div className="row form-group  my-2">
                        <div className="col-12">
                            <button
                                className="btn btn-warning"
                                onClick={signupHandler}
                            >Signup</button>
                        </div>



                    </div>

                    <div class="form-group">
                        <p>

                            <small className="text-dark"> <span class="font-weight-bold">Already Member?</span>
                                <Link to='/login' className="text-primary"> Login Now </Link></small>
                        </p>
                    </div>
                </div>


            </div>
        </div>
    )
}


export default SignupForm

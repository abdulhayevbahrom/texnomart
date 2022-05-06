import React, { useState } from 'react'
import './Login.css'
import { FiX } from 'react-icons/fi'
import {axios} from 'axios'


function Login({ setLogin }) {
    const [phone, setPhone] = useState(false)
    const [signUp, setSignUP] = useState(false)
    const [phoneNumber, setPhoneNumber] = useState("+998")
    const [username, setUsername] = useState("null")
    const [surname, setSurname] =useState("null")

    const SEND = (e) => {
        e.preventDefault()
        axios
        .post('http://localhost:8000/register/register', {
          phoneNumber: phoneNumber,
          username: username,
          surname: surname
        })
  
        // .then((user) => console.log(user))
        // .catch((err) => console.error(err));

    } 
    return (
        <div className='login'>
            <div className="login_container">
                <div className="login_hdr">
                    <ul>
                        <li onClick={() => setSignUP(false)} style={!signUp ? { background: "#fff" } : { background: "#f1f1f1" }}>Kirish</li>
                        <li onClick={() => setSignUP(true)} style={signUp ? { background: "#fff" } : { background: "#f1f1f1" }}>Royxatdan o`tish</li>
                    </ul>
                    <div className="login_close">
                        <FiX onClick={() => setLogin(false)} />
                    </div>
                </div>
                {!signUp ?
                    <>{!phone ?
                        <div className="login_phoneNumber">
                            <span className='input_span'>Telefon</span>
                            <input type="tel" placeholder='+998 xxx xx xx' />
                            <button>Telefon orqali kirish</button>
                            <p onClick={() => setPhone(true)} className='changeLogin'>Login orqali kirish</p>
                        </div>
                        :
                        <div className="login_password">
                            <input type="text" placeholder='Login' />
                            <input type="text" placeholder='Parol' />
                            <button>Telefon orqali kirish</button>
                            <p onClick={() => setPhone(false)} className='changeLogin'>Telefon orqali kirish</p>
                        </div>
                    } </> :

                    <div className="signUpContainer">
                        <input type="text" value={phoneNumber} onChange={(e)=> setPhoneNumber(e.target.value)} placeholder='+998xxxxxxx'  />
                        <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)} placeholder='Ism'  />
                        <input type="text" value={surname} onChange={(e)=> setSurname(e.target.value)} placeholder='Familiya'  />
                        <button onClick={SEND}>Royxatdan o`tish</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default Login
import Link from 'next/link'
import {useState} from 'react'
import loginUser from './api/loginUser'

export default function login () {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>  
            <h1>CP.ID</h1>
            <p>Froumnya anak CP indonesia</p>

            <div className='rectangle-block'>
                <h3>Masuk</h3>
                <form onSubmit= {(e) => {
                        e.preventDefault(); 
                        loginUser(username, password);
                    }}>
                    <label>Username</label><br></br>
                    <input 
                        type="text" 
                        value={username}
                        onChange = {(e) => setUsername(e.target.value)}                        
                    ></input>
                    <br></br>
                    <label>Password</label><br></br>                    
                    <input 
                        type="password" 
                        value={password}
                        onChange = {(e) => setPassword(e.target.value)}                        
                    ></input>
                    <br></br>
                    <button type="submit">Submit</button>
                    <br></br>
                    <Link href='register'><a>Belum punya akun? Daftar</a></Link>                
                </form>

            </div>
        </>
    ); 
}
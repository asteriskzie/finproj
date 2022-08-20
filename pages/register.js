import Link from 'next/link';
import {useState} from 'react'
import {useRouter} from "next/router"

export default function Register (props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState(null);
    const router = useRouter(); 

    const handleSubmit = async (event) => {
        event.preventDefault();
        var axios = require('axios');
        var data = JSON.stringify({
            username, 
            password,
            role,
        });

        var config = {
            method: 'post',
            url: 'https://avatar.ristek.cs.ui.ac.id/auth/register',
            headers: { 
                'Authorization': 'Bearer 62fbcdaa2ea397f8deaa647e', 
                'Content-Type': 'application/json'
            },
            data : data
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                props.setUserData(response.data);     
                router.push('/')
            })
            .catch(function (error) {
                console.log(error);
                alert(error);
            });        
    }

    return (
        <>  
            <h1>CP.ID</h1>
            <p>Froumnya anak CP indonesia</p>

            <div className='rectangle-block'>
                <h3>Daftar</h3>

                <form onSubmit= {handleSubmit}>
                    <label htmlFor="username">Username</label><br></br>
                    <input 
                        type="text" 
                        value={username}
                        onChange = {(e) => setUsername(e.target.value)}                        
                        required
                    ></input>
                    <br></br>
                    <label htmlFor="password">Password</label><br></br>                    
                    <input 
                        type="password" 
                        value={password}
                        onChange = {(e) => setPassword(e.target.value)}     
                        required                   
                    ></input>
                    <br></br>
                    <label htmlFor="role">Role</label>
                    <br></br>
                    <input type="radio" id="user" name="role" onClick = {(e) => setRole("user")}></input>
                    <label htmlFor="user">User</label>
                    <input type="radio" id="admin" name="role" onClick = {(e) => setRole("admin")}></input>
                    <label htmlFor="admin">Admin</label>
                    <br></br>
                    <button type="submit">Submit</button>
                    <br></br>
                    <Link href='login'><a>Sudah punya akun? Masuk</a></Link>                   
                </form>               

            </div>
        </>
    ); 
}
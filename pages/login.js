import Link from 'next/link'
import {useState} from 'react'
import {useRouter} from "next/router"

export default function login (props) {    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter(); 

    const handleSubmit = async (event) => {
        event.preventDefault();
        var axios = require('axios');
        var data = JSON.stringify({
            username, 
            password,
        });

        var config = {
            method: 'post',
            url: 'https://avatar.ristek.cs.ui.ac.id/auth/login',
            headers: { 
                'Authorization': 'Bearer 62fbcdaa2ea397f8deaa647e', 
                'Content-Type': 'application/json'
            },
            data : data
        };

        axios(config)
            .then(function (response) {
                console.log(props);
                console.log(props.setUserData);
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
                <h3>Masuk</h3>
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
                    <button type="submit">Submit</button>
                    <br></br>
                    <Link href='register'><a>Belum punya akun? Daftar</a></Link>                
                </form>                
            </div>
        </>
    ); 
}
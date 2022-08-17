import Link from 'next/link';

export default function login () {
    return (
        <>  
            <h1>CP.ID</h1>
            <p>Froumnya anak CP indonesia</p>

            <div className='rectangle-block'>
                <h3>Daftar</h3>
                <form>
                    <label for="username">Username</label>
                    <br></br>
                    <input type="text" id="username" name="username"></input><br></br>
                    <label for="password">Password</label>
                    <br></br>
                    <input type="text" id="password" name="username"></input>
                    <br></br>
                    <label for="role">Role</label>
                    <br></br>
                    <input type="radio" id="user" name="role"></input>
                    <label for="user">User</label>
                    <input type="radio" id="admin" name="role"></input>
                    <label for="admin">Admin</label>
                    <br></br>
                    <button>Submit</button>
                    <br></br>                    
                    <Link href='login'><a>Sudah punya akun? Masuk</a></Link>                
                </form>

            </div>
        </>
    ); 
}
import Link from 'next/link';

export default function login () {
    return (
        <>  
            <h1>CP.ID</h1>
            <p>Froumnya anak CP indonesia</p>

            <div className='rectangle-block'>
                <h3>Masuk</h3>
                <form>
                    <label for="username">Username</label><br></br>
                    <input type="text" id="username" name="username"></input><br></br>
                    <label for="password">Password</label><br></br>
                    <input type="text" id="password" name="username"></input><br></br>
                    <button>Submit</button><br></br>
                    <Link href='register'><a>Belum punya akun? Daftar</a></Link>                
                </form>

            </div>
        </>
    ); 
}
import {useRouter} from "next/router"

export default function Profile (props) {
    const router = useRouter(); 

    const handleLogout = () => {
        props.setUserData([null, null, null]);
        router.push('/');    
    }

    return (
        <>  
            <div className='rectangle-block'>
                <p>username: {props.username}</p>
                <p>role: {props.role}</p>
                <button onClick={handleLogout}>Keluar</button>
            </div>
        </>
    ); 
}
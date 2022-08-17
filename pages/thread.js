import Post from '../components/post'

export default function () {
    return (
        <>
            <h2>Thread Title</h2>
            <div className='first-post'>
                <Post /> 
            </div>
            <h3>Jawaban</h3>            
            <div className='replies'>
                <Post />            
                <Post />            
                <Post />            
            </div>
        </>
    ); 
}
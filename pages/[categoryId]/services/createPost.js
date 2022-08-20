import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from "next/router"

export default function CreatePost({threadId, replyId, token}) {
    const [content, setContent] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault();
        var axios = require('axios');
        var data = JSON.stringify({
            threadId, content, replyId,            
        });

        var config = {
            method: 'post',
            url: 'https://avatar.ristek.cs.ui.ac.id/post/',
            headers: {
                'X-USER-TOKEN': token,
                'Authorization': 'Bearer 62fbcdaa2ea397f8deaa647e',
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });


    }

    return (
        <>
            <div className="rectangle-block">
                <form onSubmit={handleSubmit}>
                    <textarea placeholder="Tulis jawabanmu disini" onChange = {(e) => setContent(e.target.value)}                        
                        required></textarea>
                    <br></br>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}
//import VotePost from '../pages/[categoryId]/services/votePost';
import { useState, useEffect } from 'react'
import { useMutation } from 'react-query'

function checkLoggedIn(props) {
    return props.token != null;
}

async function VotePost(props, voteType) {
    const token = props.token; 
    const postId = props.post.id;

    var axios = require('axios');
    var data = JSON.stringify({
        postId,
        voteType
    });

    console.log(data); 

    var config = {
        method: 'post',
        url: 'https://avatar.ristek.cs.ui.ac.id/post/vote',
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

// function CreatePost({ token, threadId, content, replyId }) {
//     const createPost = useMutation(({ threadId, content, replyId }) => {
//         var axios = require('axios');
//         var data = JSON.stringify({
//             threadId, 
//             content, 
//             replyId
//         });

//         var config = {
//             method: 'post',
//             url: 'https://avatar.ristek.cs.ui.ac.id/post/',
//             headers: {
//                 'X-USER-TOKEN': token,
//                 'Authorization': 'Bearer 62fbcdaa2ea397f8deaa647e',
//                 'Content-Type': 'application/json'
//             },
//             data: data
//         };

//         axios(config)
//             .then(function (response) {
//                 console.log(JSON.stringify(response.data));
//             })
//             .catch(function (error) {
//                 console.log(error);
//             });
//     }    
//     )
// }

export default function Post(props) {
    const [content, setContent] = useState('')
    const [upvote, setUpvote] = useState(0)
    const [downvote, setDownvote] = useState(0)

    const postId = props.postId;
    const token = props.token;

    const votePost = useMutation((voteType) => {
        var axios = require('axios');
        var data = JSON.stringify({
            postId,
            voteType
        });

        var config = {
            method: 'post',
            url: 'https://avatar.ristek.cs.ui.ac.id/post/vote',
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
    });

    useEffect(() => {
        setUpvote(props.post.upvote)
        setDownvote(props.post.downvote)
    })

    return (
        <>
            <div className='rectangle-block'>
                <p>{props.post.content} {props.post.edited && <span style={{ color: 'gray' }}>edited</span>}</p>

                <div>
                    <a onClick={() => {
                        if(checkLoggedIn(props)) {
                            setUpvote(upvote+1)
                            VotePost(props, "upvote")
                        }
                    }}>Upvote </a>
                    {upvote}
                </div>

                <div onClick={() => {
                        if(checkLoggedIn(props)) {
                            setDownvote(downvote+1)
                            VotePost(props, "downvote")
                        }
                    }}>
                    <a>Downvote </a>
                    {downvote}
                </div>

                <div onClick={() => console.log("reply")}>
                    <a>Reply</a>
                </div>

                {/* 
                <div onClick={}>
                    <a>Edit</a>
                </div> */}
            </div>
        </>
    );
}   
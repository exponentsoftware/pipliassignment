import React, { useState, useEffect } from 'react';
import axios  from 'axios';

import User from './User';
import userTheme from '../themes.json';

function UserPage() {
    // eslint-disable-next-line
    const [theme, setTheme] = useState(userTheme);
    // eslint-disable-next-line
    const [change, setChange] = useState(Math.floor(Math.random() * 10));

    const [posts,setPosts]=useState([]);

    const [val, setVal] = useState('');

    const handleTheme = () => {

        setVal(theme.usertheme[change]);

    };
    
    const getPosts = async() => {
        await axios.get("https://jsonplaceholder.typicode.com/posts")
          
            .then(res => setPosts(res.data))
            .catch(error=>(console.log(error)))
    }

    const runEffect=()=>{
        handleTheme();
        getPosts();
    }
    // eslint-disable-next-line
    useEffect(() => { runEffect() }, []);

    const { bg, color, fontSize } = val;
    return (
        <User bg={bg} color={color} fontSize={fontSize} posts={posts} />
    );
}

export default UserPage;

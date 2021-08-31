import React, {useEffect } from 'react';

const Home = () => {

    useEffect (()=>{
        window.scroll(0,0)
    },[])
    return (
        <div>
            <h2>Home</h2>
        </div>
    )
}

export default Home

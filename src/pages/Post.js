import React from 'react'
import { useParams, useLocation } from 'react-router-dom'

const Post = ()=>{
    // const {id} =useParams(); 
    const item = new URLSearchParams (useLocation().search);
   return (
        <div>
            <h2>Post Id:</h2>
            <h2>{item.get("name")}</h2>
            <h2>{item.get("second")}</h2>
        </div>
    )
}
export default Post

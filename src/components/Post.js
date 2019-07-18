import React from 'react'
import { Link } from 'react-router-dom'
import useFetcher from './useFetcher'

export default function Post({ match }){

    const BASE_URL=`https://jsonplaceholder.typicode.com/posts${match.url}`;

    const {data : post , isLoading, error}= useFetcher(BASE_URL);

    if(error){
        return(
            <h1>{error}</h1>
        )
    }
   
    if(isLoading){
        return(
            <h1>Loading...</h1>
        )
    }

    return(
        <div className='post'>
            <h1>{post.title}</h1>
            <hr></hr>
            <p>{post.body}</p>
            <Link className='link' to='/'>Back</Link>
        </div> 
    );
}




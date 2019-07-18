import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';
import useFetcher from './useFetcher'

export default function PostList(){
    
    const BASE_URL='https://jsonplaceholder.typicode.com/posts';

    const {data : posts, isLoading, error}= useFetcher(BASE_URL);
    
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
        <div>
            {posts.map(post => (
                <h3 key={post.id}>
                    <Link className='link' to={`/${ post.id }`}>{post.title}</Link>
                </h3>
            ))}
        </div> 
    );
}
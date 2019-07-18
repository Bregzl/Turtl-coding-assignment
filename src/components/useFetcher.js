import { useState, useEffect } from 'react'

export default function useFetcher(url){

    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState (false);
    const [error, setError] = useState (null);

    const fetchPosts = async (nekurl) => {
        setLoading(true);
        try {
            const items = await fetch(nekurl);
            const posts = await items.json();

            if(!items.ok){
                throw new Error('Something went wrong');
            }

            setData(posts);

        } catch (e){ 
            setError(`${e.name}: ${e.message}`); 
        }

        setLoading(false);   
    };

    useEffect(() => {
       fetchPosts(url)
    },[url]);
    
    return {data, isLoading, error};
}
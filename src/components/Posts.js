import { useEffect, useState } from "react"
import Post from "./Post"
import './Posts.css'

const API_URL = 'https://jsonplaceholder.typicode.com/posts'

function Posts() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    // Immediately Invoked Function Expression — IIFE)
    useEffect(() => {
        ;(async function fetchData() {
            try {
                const res = await fetch(API_URL)
                const posts = await res.json()
                setPosts(posts)
             } catch (error) {
                 setError(error.message)
             }
             setIsLoading(false)
        })()
    }, [])

    // async await   arrow function const fetchData = async () =>...
    // useEffect(() => {
    //     async function fetchData() {
    //         try {
    //             const res = await fetch(API_URL)
    //             const posts = await res.json()
    //             setPosts(posts)
    //          } catch (error) {
    //              setError(error.message)
    //          }
    //          setIsLoading(false)
    //     }
    //     fetchData()
    // }, [])

    // Feth
    // useEffect(() => {
    //     fetch(API_URL)
    //     .then((res) => res.json())
    //     .then((posts) => setPosts(posts))
    //     .catch((error) => setError(error.message))
    //     .finally(() => setIsLoading(false))
    // }, [])

    if (error) {
        return <h1>Error: {error}</h1>
    }

    return (
        <>
            <h1 className="posts">Posts</h1>
            <hr />
            {isLoading ? <h1>Loading...</h1> : posts.map((post) => (
                <Post key={post.id} {...post} /> 
            ))}

         </>
    )
}

export default Posts
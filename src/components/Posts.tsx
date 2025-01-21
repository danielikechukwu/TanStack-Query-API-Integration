import { useQuery } from "@tanstack/react-query";

interface IData {
    userId: number,
    id: number,
    title: string,
    body: string
}

const fetchPosts = async () => {

    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    return response.json();

}

const Posts = () => {

    const { data, error, isLoading } = useQuery(['posts'], fetchPosts);

    if (isLoading)
        return <p>Loading...</p>

    if (error)
        return <p>Error: {error.message}</p>

    return (
        <ul>
            {
                data.map((post: IData) => {
                    <li key={post.id}>{post.title}</li>
                })
            }
        </ul>
    )
}

export default Posts
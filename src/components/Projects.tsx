import React, { useState } from 'react'
import { useProjects } from '../services/todo.queries';
import { IProduct } from '../interface/product';

const Projects = () => {

    const [page, setPage] = useState(1);

    const projects = useProjects(page);

    return (
        <div>

            <h4>Projects</h4>

            {
                projects.isPending ? (
                    <div>Loading...</div>
                ) : projects.isError ? (
                    <div>Error</div>
                ) : (
                    <div>
                        {projects.data.map((pjct: IProduct) => (
                            <p key={pjct.id}>{pjct.name}</p>
                        ))}
                    </div>
                )

            }
            <span>Current page: {page}</span>

            <button onClick={() => setPage((old) => Math.max(old - 1, 0))}>Pervious page</button>

            <button onClick={() => {
                if (!projects.isPlaceholderData) {
                    setPage((old) => old + 1)
                }
            }} disabled={projects.isPlaceholderData}>Next page</button>

        </div>
    )
}

export default Projects
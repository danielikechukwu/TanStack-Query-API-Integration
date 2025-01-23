import { Fragment } from "react/jsx-runtime";
import { useTodos, useTodosIds } from "../services/todo.queries"
import { useIsFetching } from "@tanstack/react-query";

export default function Todos() {

    const style = {
        border: "1px solid red",
        marginBottom: "23px"
    }

    const todosIdQuery = useTodosIds();

    const todosQueries = useTodos(todosIdQuery.data);

    // const isFetching = useIsFetching();

    if (todosIdQuery.isPending) {
        return <span>Loading...</span>
    }

    if (todosIdQuery.error) {
        return <span>An error occurred</span>
    }

    console.log(todosIdQuery.data);

    return (

        <Fragment>

            {/* <p>Query data status: {todosIdQuery.status}</p>
        <p>Query function status: {todosIdQuery.fetchStatus}</p>
        <p>Global isFetching: {isFetching}</p> */}

            {/* {todosIdQuery.data?.map((id) => (
                <p key={id}>Id : {id}</p>
            ))} */}

            <ul>

                {todosQueries.map(({ data }) => (
                    <li key={data?.id} style={style}>
                        <span>
                            <strong>Id: </strong> {data?.id}, {" "}
                            <strong>Title: </strong> {data?.title}, {" "}
                            <strong>Description: </strong> {data?.description}
                        </span>
                    </li>
                ))}

            </ul>

        </Fragment>
    );

}
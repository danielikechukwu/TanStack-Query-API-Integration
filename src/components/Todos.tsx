import { Fragment } from "react/jsx-runtime";
import { useTodos, useTodosIds } from "../services/todo.queries"
import { useIsFetching } from "@tanstack/react-query";
import { useCreateTodo } from "../services/mutations";
import { SubmitHandler, useForm } from "react-hook-form";
import { ITodo } from "../interface/todo";

export default function Todos() {

    const style = {
        border: "1px solid black",
        marginBottom: "23px"
    }

    const todosIdQuery = useTodosIds();

    const todosQueries = useTodos(todosIdQuery.data);

    const createMutation = useCreateTodo();

    const { handleSubmit, register } = useForm<ITodo>();

    // const isFetching = useIsFetching();

    const handleCreateTodoSubmit: SubmitHandler<ITodo> = (data: ITodo) => {

        createMutation.mutate(data);

    }

    if (todosIdQuery.isPending) {
        return <span>Loading...</span>
    }

    if (todosIdQuery.error) {
        return <span>An error occurred</span>
    }

    console.log(todosIdQuery.data);

    return (

        <>

            {/* <p>Query data status: {todosIdQuery.status}</p>
        <p>Query function status: {todosIdQuery.fetchStatus}</p>
        <p>Global isFetching: {isFetching}</p> */}

            {/* {todosIdQuery.data?.map((id) => (
                <p key={id}>Id : {id}</p>
            ))} */}

            <form onSubmit={handleSubmit(handleCreateTodoSubmit)}>

                <h4>New todo:</h4>
                <input type="text" placeholder="Enter title" {...register("title")} />
                <br />
                <input type="text" placeholder="Enter description" {...register("description")} />
                <br />

                <button type="submit" disabled={createMutation.isPending}>{createMutation.isPending ? "Creating..." : "Add Todo"}</button>

            </form>

            <ul>

                {todosQueries.map(({ data }, key) => (
                    <li style={style} key={key}>
                        <span>
                            <strong>Id: </strong> {data?.id}, {" "}
                            <strong>Title: </strong> {data?.title}, {" "}
                            <strong>Description: </strong> {data?.description}
                        </span>
                    </li>
                ))}

            </ul>

        </>
    );

}
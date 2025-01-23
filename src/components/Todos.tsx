import { useTodosIds } from "../services/todo.queries"

export default function Todos() {

    const todosIdQuery = useTodosIds();

    if (todosIdQuery.isPending) {
        return <span>Loading...</span>
    }

    if (todosIdQuery.error) {
        return <span>An error occurred</span>
    }

    console.log(todosIdQuery.data);



}
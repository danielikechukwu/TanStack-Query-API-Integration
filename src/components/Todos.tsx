import { useTodosIds } from "../services/todo.queries"

const Todos = () => {

    const todosIdQuery = useTodosIds();

  return (
    <div>Todos</div>
  )

}

export default Todos
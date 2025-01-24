import { useQueries, useQuery } from "@tanstack/react-query"
import { getTodo, getTodosIds } from "./todo.service"

export const useTodosIds = () => {

    return useQuery({
        queryKey: ["todos"],
        queryFn: getTodosIds
    })
}

export const useTodos = (ids: (number | undefined)[] | undefined) => {

    return useQueries({
        queries: (ids ?? []).map((id) => {

            return {
                queryKey: ["todo", {id}],
                queryFn: () => getTodo(id!)
            }
        })
    })

}
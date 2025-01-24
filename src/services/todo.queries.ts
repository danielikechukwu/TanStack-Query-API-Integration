import { keepPreviousData, useInfiniteQuery, useQueries, useQuery } from "@tanstack/react-query"
import { getProducts, getTodo, getTodosIds } from "./todo.service"
import { getProjects } from "./product.service"

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
                queryKey: ["todo", { id }],
                queryFn: () => getTodo(id!)
            }
        })
    })

}

export const useProjects = (page: number) => {

    return useQuery({
        queryKey: ["projects", { page }],
        queryFn: () => getProjects(page),
        placeholderData: keepPreviousData //helps keep previous page before new page is fetched
    })

}

export function useProducts() {

    return useInfiniteQuery({
        queryKey: ["products"],
        queryFn: getProducts,
        initialPageParam: 0,
        getNextPageParam: (lastPage, _, lastPageParam) => {

            if (lastPage.length === 0) {

                return undefined;
            }

            return lastPageParam + 1;
        },
        getPreviousPageParam: (_, __, firstPageParam) => {

            if (firstPageParam <= 1) {
                return undefined;
            }
            return firstPageParam - 1;
        }
    })
}
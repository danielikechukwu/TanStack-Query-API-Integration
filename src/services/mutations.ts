import { useMutation } from "@tanstack/react-query";
import { ITodo } from "../interface/todo";
import { createTodo } from "./todo.service";

export function useCreateTodo() {

    return useMutation({

        mutationFn: (data: ITodo) => createTodo(data),
        onMutate: () => {
            console.log("mutate");
        },

        onError: () => {
            console.log("Error occurred");
        },

        onSuccess: () => {
            console.log("Success");
        },

        onSettled: () => {
            console.log("Settled");
        }
    })
}
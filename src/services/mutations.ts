import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ITodo } from "../interface/todo";
import { createTodo, deleteTodo, updateTodo } from "./todo.service";
import { version } from "react";

export function useCreateTodo() {

    const queryClient = useQueryClient();

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

        onSettled: async (_, error) => {

            console.log("Settled");

            if (error) {
                console.log(error);
            }
            else {
                await queryClient.invalidateQueries({ queryKey: ["todos"] });
            }

        }
    })
}

export function useUpdateTodo() {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: (data: ITodo) => updateTodo(data),

        onSettled: async (_, error, variable) => {

            if (error) {
                console.log(error);
            }
            else {
                await queryClient.invalidateQueries({ queryKey: ["todos"] });
                await queryClient.invalidateQueries({ queryKey: ["todo", { id: variable.id }] });
            }
        }
    })

}

export function useDeleteTodo() {

    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: number) => deleteTodo(id),

        onSuccess: () => {
            console.log("Deleted successfully");
        },

        onSettled: async (_, error) => {

            if (error) {
                console.log(error);
            }
            else {
                await queryClient.invalidateQueries({ queryKey: ["todos"] });
            }
        }
    })
}
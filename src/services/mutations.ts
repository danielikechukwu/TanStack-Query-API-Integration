import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ITodo } from "../interface/todo";
import { createTodo } from "./todo.service";

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
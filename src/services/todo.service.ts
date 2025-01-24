import { ITodo } from "../interface/todo"
import api from "./api"

export const getTodosIds = async (): Promise<(number | undefined)[]> => {

    return (await api.get<ITodo[]>("todos")).data.map((todo) => todo.id);
    
}

export const getTodo = async (id: number): Promise<ITodo> => {

    return (await api.get<ITodo>(`todos/${id}`)).data;

}

export const createTodo = async (data: ITodo): Promise<void> => {

    await api.post("todos", data);

}

export const updateTodo = async (data: ITodo): Promise<void> => {

    await api.put(`todos/${data.id}`, data);
    
}
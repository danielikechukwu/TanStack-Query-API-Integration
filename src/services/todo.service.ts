import { ITodo } from "../interface/todo"
import api from "./api"

export const getTodosIds = async (): Promise<(number | undefined)[]> => {

    return (await api.get<ITodo[]>("todos")).data.map((todo) => todo.id);
    
}
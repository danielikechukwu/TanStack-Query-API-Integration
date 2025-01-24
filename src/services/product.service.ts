import { IProduct } from "../interface/product"
import { IProject } from "../interface/project";
import api from "./api"

export const getProjects = async (page = 1) => {

    return (await api.get<IProject[]>(`projects?_page=${page}&_limit=3`)).data;

}
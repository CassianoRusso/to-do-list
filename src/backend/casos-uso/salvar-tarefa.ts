"use server"
import { Tarefa } from "@/core/model/Tarefa";
import Id from "@/core/utils/Id";
import RepositorioTarefa from "../db/RepositorioTarefa";

export default async function salvarTarefa(tarefa: Tarefa){
    
    if(!tarefa.nome){
        throw new Error('Nome da tarefa é obrigatório')
    }

    const novaTarefa ={
        ...tarefa,
        id: Id.gerar()
    }

    const repo = new RepositorioTarefa()

    return await repo.inserir(novaTarefa)
}
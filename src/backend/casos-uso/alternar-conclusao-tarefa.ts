"use server"
import { Tarefa } from "@/core/model/Tarefa";
import RepositorioTarefa from "../db/RepositorioTarefa";

export default async function alternarConclusaoTarefa(tarefa: Tarefa){
    const repo = new RepositorioTarefa()
    const tarefaAtual = await repo.obterPorId(tarefa.id!)
    
    if(!tarefaAtual){
        throw new Error('Tarefa não encontrada')
    }
    const tarefaAtualizada = {
        ...tarefaAtual,
        status: !tarefaAtual.status
    }
    return repo.alterar(tarefaAtualizada)
}
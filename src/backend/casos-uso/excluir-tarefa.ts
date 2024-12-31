"use server"

import { Tarefa } from "@/core/model/Tarefa"
import RepositorioTarefa from "../db/RepositorioTarefa"

export default async function excluirTarefa(id: string): Promise<Tarefa> {
    const repo = new RepositorioTarefa()

    return repo.excluir(id)
}
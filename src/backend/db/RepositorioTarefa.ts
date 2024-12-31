import { Tarefa } from "@/core/model/Tarefa";
import { PrismaClient } from "@prisma/client";

export default class RepositorioTarefa{
    private db: PrismaClient

    constructor(){
        this.db = new PrismaClient()
    }

    async inserir(tarefa: Tarefa){
        return await this.db.tarefa.create({ data: tarefa as any})
    }

    async alterar(tarefa: Tarefa){
        return await this.db.tarefa.update({
            where: { id: tarefa.id }, data: tarefa
        })
    }
    
    async excluir(id: string){
        return await this.db.tarefa.delete({ where: { id }})    
    }

    async obterPorId(id: string) {
        return await this.db.tarefa.findUnique({ where: { id } })
    }
    
    async obterTodos(){
        return await this.db.tarefa.findMany()
    }

    
}
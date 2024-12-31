import { Tarefa } from "@/core/model/Tarefa"
import { IconCheck, IconTrash } from "@tabler/icons-react"

export interface TarefaItemProps{
    tarefa: Tarefa
    excluir: (id: string) => void
    alternarConclusao: (tarefa: Tarefa) => void
}

export default function TarefaItem(props: TarefaItemProps){
    return(
        <li className="flex items-center gap-3 bg-zinc-700 p-2 rounded-md cursor-pointer"  onClick={() => props.alternarConclusao(props.tarefa)}>
            <div className="flex justify-center items-center border border-zinc-400 w-6 h-6 rounded-full">
                {props.tarefa.status && (
                    <div className="flex justify-center items-center bg-green-500 w-5 h-5 rounded-full">
                        <IconCheck size={15}/>
                    </div>
                )}
            </div>
            <span className={`
                flex-1
                ${props.tarefa.status ? 'line-through text-zinc-400' : 'text-white' }    
            `}>
                {props.tarefa.nome}
            </span>
            {props.tarefa.status && (
                <IconTrash className="text-red-500 hover:text-red-400 cursor-pointer" onClick={() => props.excluir(props.tarefa.id!)} />
            )}
        </li>
    )
}
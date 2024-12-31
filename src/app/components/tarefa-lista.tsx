import { Tarefa } from "@/core/model/Tarefa"
import TarefaItem from "./tarefa-item"

export interface TarefaListaProps{
    tarefas: Tarefa[]
    excluir: (id: string) => void
    alternarConclusao: (tarefa: Tarefa) => void
}
export default function TarefaLista(props: TarefaListaProps){
    const { tarefas, excluir, alternarConclusao } = props
    return(
        <ul className="flex flex-col gap-4">
            {tarefas.map((tarefa: any) => (
            <TarefaItem 
                key={tarefa.id} 
                tarefa={tarefa} 
                alternarConclusao={ alternarConclusao }
                excluir={ excluir }/>
            ))}
        </ul>
    )
}
import { Tarefa } from "@/core/model/Tarefa";
import { IconPlus } from "@tabler/icons-react";
import { useRef, useState } from "react";

export interface TarefaFormProps{
    salvar: (tarefa: Tarefa) => Promise<void>

}
export default function TarefaForm(props: TarefaFormProps){
    const [nome, setNome] = useState<any>("");
    const refInput = useRef<HTMLInputElement>(null)

    async function submeter() { 
        await props.salvar({nome}) 
        setNome('')
        refInput.current?.focus()
    }

    return(
        <div className="flex items-center bg-zinc-900 p-2 rounded-md">
            <input type="text" value={nome} 
            ref={refInput}
            onChange={e => setNome(e.target.value)} 
            onKeyUp={e => e.key === 'Enter' && submeter()}
            className="flex-1 text-white bg-transparent outline-none px-2"/>
            <button 
                className="bg-zinc-600 p-2 rounded-md" 
                onClick={submeter}
            >
                <IconPlus/>
            </button>
        </div>
    )
}
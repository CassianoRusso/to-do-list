"use client"
import TarefaLista from "./components/tarefa-lista";
import TarefaForm from "./components/tarefa-form";
import useTarefas from "./hooks/use-tarefas";

export default function Home() {

  const {tarefas, adicionar, alternarConclusao, excluir} = useTarefas()
  
  return (
    <div className="flex flex-col gap-6 p-6">
      <h1>Lista de Tarefas</h1>      
      <TarefaForm salvar={adicionar} />
      <TarefaLista tarefas={tarefas} excluir={excluir} alternarConclusao={alternarConclusao}/>
    </div>
  );
}

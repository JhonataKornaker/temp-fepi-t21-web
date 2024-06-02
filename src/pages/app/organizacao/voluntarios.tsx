import { Handshake, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { ModalEditar } from "./modal-editar";
import { ModalAdicionar } from "./modal-adicionar";

interface Voluntario {
  id: number;
  name: string;
  dataInicio: string;
  area: string;
}

export function Voluntarios() {
  const [voluntarios, setVoluntarios] = useState<Voluntario[]>([]);

  /*//Requisição GET
  useEffect(() => { 
    const dataVoluntario = async () => {
      try {
        const response = await fetch('http:// . . .');
        const result = await response.json();
        setVoluntarios(result);
      } catch {
        console.error("Erro: ", error);
      }
    }
    dataVoluntario();
  },[]);*/

  //Adicionar Voluntarios
  const adicionarVoluntarios = (
    // Omit - Criar mesmo tipo de objeto exceto id e dataInicio
    novoVoluntario: Omit<Voluntario, "id" | "dataInicio">
  ) => {
    const dataAtual = new Date().toLocaleDateString();
    //Verifica se voluntarios esta vazia (Logica para adicionar e incrementar id)
    const id = voluntarios.length
      ? voluntarios[voluntarios.length - 1].id + 1
      : 1;
    const voluntarioDate = { ...novoVoluntario, id, dataInicio: dataAtual };
    setVoluntarios([...voluntarios, voluntarioDate]);
  };

  const removerItem = async (id: number) => {
    //Logica para remover item
    setVoluntarios(voluntarios.filter((voluntarios) => voluntarios.id !== id));

    /*//Requisição DELETE:
    try {
    // Requisição DELETE:
    const response = await fetch(`https://. . ./${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      // Se a requisição for bem-sucedida, atualizar a view:
      setVoluntarios((voluntarios) => voluntarios.filter((voluntario) => voluntario.id !== id));
      console.log('User deleted successfully');
    } else {
      console.error('Error deleting user:', response.statusText);
    }
  } catch (error) {
    console.error('Error deleting user:', error);
  }*/
  };

  const editarVoluntario = (voluntarioEditado: Voluntario) => {
    setVoluntarios(
      voluntarios.map((voluntario) =>
        voluntario.id === voluntarioEditado.id ? voluntarioEditado : voluntario
      )
    );
  }

  return (
    <>
      <div className="flex items-center gap-3">
        <Handshake />
        <h3 className="text-xl">Voluntários</h3>
      </div>
      <div className="flex justify-between mt-8 mb-4">
        <p className="text-base font-bold">Voluntários ativos</p>
        <ModalAdicionar adicionarVoluntarios={adicionarVoluntarios} />
      </div>
      {voluntarios.length > 0 ? (
        voluntarios.map((voluntario) => (
          <div key={voluntario.id} className="mb-4 p-5 bg-slate-800 rounded-md">
            <div className="flex justify-between">
              <p className="text-base">{voluntario.name}</p>
              <button
                title="Botao Lixeira"
                onClick={() => {
                  removerItem(voluntario.id);
                }}
              >
                <Trash2 className="text-red-600 size-4 font-bold" />
              </button>
            </div>
            <div className="flex bg-customBackground ps-5 pt-3 pb-3 mt-4 rounded-md gap-6">
              <div>
                <p className="text-xs mb-1">Inicio Sessão</p>
                <p className="text-sm">{voluntario.dataInicio}</p>
              </div>
              <div>
                <p className="text-xs mb-1">Aréa</p>
                <p className="text-sm">{voluntario.area}</p>
              </div>
              <ModalEditar id={voluntario.id} voluntarios={voluntarios} editarVoluntario={editarVoluntario} />
            </div>
          </div>
        ))
      ) : (
        <div className="flex justify-center mb-4 p-2 h-16 items-center bg-slate-800 rounded-md">
          Sem voluntários cadastrados, clique no botão adicionar para cadastrar
          um novo voluntário.
        </div>
      )}
    </>
  );
}

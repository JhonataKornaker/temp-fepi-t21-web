import { Handshake, Trash2 } from "lucide-react";
import { ModalAdicionar } from "./modal-voluntarios";

interface Voluntario {
  id: number;
  nome: string;
  dataInicio: string;
  area: string;
}

const dateVoluntarios: Voluntario[] = [
  {
    id: 1,
    nome: "Jhonata Kornaker",
    dataInicio: "31/05/24",
    area: "Psycologia",
  },
  {
    id: 2,
    nome: "TesteNome2",
    dataInicio: "10/05/24",
    area: "Psycologia",
  },
];

export function Voluntarios() {
  return (
    <>
      <div className="flex items-center gap-3">
        <Handshake />
        <h3 className="text-xl">Voluntários</h3>
      </div>
      <div className="flex justify-between mt-8 mb-4">
        <p className="text-base font-bold">Voluntários ativos</p>
        <ModalAdicionar/>
      </div>
      {dateVoluntarios.length > 0 ? (
        dateVoluntarios.map((voluntario) => (
          <div key={voluntario.id} className="mb-4 p-5 bg-slate-800 rounded-md">
            <div className="flex justify-between">
              <p className="text-base">{voluntario.nome}</p>
              <button>
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
              <button className="ml-auto w-16 h-6 bg-slate-800 rounded-md mr-5 self-center text-xs">
                Editar
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="flex justify-center mb-4 p-2 h-16 items-center bg-slate-800 rounded-md">
          Sem voluntários cadastrados, clique no botão adicionar para cadastrar um novo
          voluntário.
        </div>
      )}
    </>
  );
}

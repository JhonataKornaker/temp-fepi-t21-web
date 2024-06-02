import { zodResolver } from "@hookform/resolvers/zod";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  id: z.number(),
  name: z.string(),
  area: z.string(),
});

interface Voluntario {
  id: number;
  name: string;
  area: string;
  dataInicio: string;
}

interface ModalEditarProps {
  id: number;
  voluntarios: Voluntario[];
  editarVoluntario: (voluntario: Voluntario) => void;
}

export function ModalEditar({
  id,
  voluntarios,
  editarVoluntario,
}: ModalEditarProps) {
  const [isOpen, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Voluntario>({ resolver: zodResolver(schema) });

  useEffect(() => {
    if (id && isOpen) {
      const voluntario = voluntarios.find((voluntario) => voluntario.id === id);
      reset(voluntario);
    }
  }, [id, isOpen, reset, voluntarios]);

  const onSubmit = (data: Voluntario) => {
    const voluntarioExistente = voluntarios.find((v) => v.id === data.id);
    if (voluntarioExistente) {
      const voluntarioAtualizado = {
        ...data,
        dataInicio: voluntarioExistente.dataInicio, // Mantém a data de início
      };
      editarVoluntario(voluntarioAtualizado);
    }
    setOpen(false);
    /*try {
      const response = await fetch(`https://. . .${data.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const updatedVolunteer = await response.json();
        editarVoluntario(updatedVolunteer);
        setOpen(false);
        console.log('Volunteer updated successfully', updatedVolunteer);

      } else {
        console.error('Error updating volunteer:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating volunteer:', error);
    }*/
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button className="ml-auto w-16 h-6 bg-slate-800 rounded-md mr-5 self-center text-xs">
          Editar
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] h-[398px] w-[584px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-customBackground shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className="flex justify-between items-center text-xl h-[80px] ps-8 pe-8">
            Editar Voluntário
            <Dialog.Close asChild>
              <X className="size-6" />
            </Dialog.Close>
          </Dialog.Title>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col border-t-2 border-t-slate-600"
          >
            <div className="flex flex-col pt-8 pb-8 pr-6 pl-6">
              <label htmlFor="Nome">Nome</label>
              <input
                className="w-[536px] h-[48px] mt-2 mb-4 bg-slate-900 rounded-md pt-3 pb-3 ps-4"
                type="text"
                placeholder="Nome da organização"
                id="name"
                {...register("name", { required: true })}
              />
              <label htmlFor="Nome">Área</label>
              <input
                className="w-[536px] h-[48px] mt-2 bg-slate-900 rounded-md pt-3 pb-3 ps-4"
                type="text"
                placeholder="Seleciona uma área"
                id="area"
                {...register("area", { required: true })}
              />
            </div>
            <div className="flex justify-end items-center h-[76px] w-full pe-8 gap-8 border-t-2 border-t-slate-600">
              <Dialog.Close>
                <button>Cancelar</button>
              </Dialog.Close>
              <button
                type="submit"
                className="text-black bg-customText w-[97px] h-[44px] rounded-md font-bold mt-4 mb-4"
              >
                Salvar
              </button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

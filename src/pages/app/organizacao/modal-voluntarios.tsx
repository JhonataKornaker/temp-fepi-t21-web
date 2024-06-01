import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { useState } from "react";
import { useForm, } from "react-hook-form";

export function ModalAdicionar() {

  const [isOpen, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
    setOpen(false);
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button className="border-solid bg-customText text-black font-bold w-28 h-8 rounded-md text-sm">
          Adicionar
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] h-[398px] w-[584px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-customBackground shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className="flex justify-between items-center text-xl h-[80px] ps-8 pe-8">
            Adicionar Voluntário
            <Dialog.Close>
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
                id="nome"
                {...register("nome", { required: true })}
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

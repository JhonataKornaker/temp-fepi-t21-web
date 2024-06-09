import { zodResolver } from '@hookform/resolvers/zod'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { z } from 'zod'

// Esquema de validação do zod
const schema = z.object({
  name: z.string().min(1, 'Nome é obrigatorio'),
  area: z.string().min(1, 'Area é obrigatorio'),
})

// Tipo de dados para Voluntaios
type Voluntario = {
  name: string
  area: string
}

interface ModalAdicionarProps {
  adicionarVoluntarios: (
    voluntario: Omit<Voluntario, 'id' | 'dataInicio'>,
  ) => void
  //id?: number;
  //ComponetButton: React.ComponentType;
}

export function ModalAdicionar({ adicionarVoluntarios }: ModalAdicionarProps) {
  const [isOpen, setOpen] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    const dados: Voluntario = { name: data.name, area: data.area };

    //Requisição POST
    /* try {
      const response = await fetch('https: . . .', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ dados }),
      });
      const result = await response.json();
      console.log('User created:', result);
    } catch (error) {
      console.error('Error creating user:', error);
    }*/

    adicionarVoluntarios(dados)

    reset()
    setOpen(false)
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
        <Dialog.Content
          className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] h-[280px] w-[400px] 
        xl:h-[398px] xl:w-[584px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] 
        bg-customBackground shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none"
        >
          <Dialog.Title className="flex justify-between items-center text-base xl:text-xl h-[60px] xl:h-[80px] ps-8 pe-8">
            Adicionar Voluntário
            <Dialog.Close asChild>
              <X className="size-5 xl:size-6" />
            </Dialog.Close>
          </Dialog.Title>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col border-t-2 border-t-slate-600"
          >
            <div className="flex flex-col pt-4 pb-4 xl:pt-8 xl:pb-8 pr-6 pl-6">
              <label htmlFor="Nome">Nome</label>
              <input
                className="xl:w-[536px] xl:h-[48px] mt-2 mb-4 bg-slate-900 rounded-md pt-1 pb-1 ps-2 xl:pt-3 xl:pb-3 xl:ps-4"
                type="text"
                placeholder="Nome da organização"
                id="name"
                {...register('name')}
              />
              <label htmlFor="Nome">Área</label>
              <input
                className="xl:w-[536px] xl:h-[48px] mt-2 bg-slate-900 rounded-md pt-1 pb-1 ps-2 xl:pt-3 xl:pb-3 xl:ps-4"
                type="text"
                placeholder="Seleciona uma área"
                id="area"
                {...register('area')}
              />
            </div>
            <div className="flex justify-end items-center xl:h-[76px] h-full w-full pe-8 gap-8 border-t-2 border-t-slate-600">
              <Dialog.Close>
                <button>Cancelar</button>
              </Dialog.Close>
              <button
                type="submit"
                className="text-black bg-customText xl:w-[97px] xl:h-[44px] w-[67px] h-[24px] rounded-md font-bold mt-4 mb-4"
              >
                Salvar
              </button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

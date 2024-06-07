import { useForm } from 'react-hook-form'

export function AlergiasEliminacoesFisiologicas() {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data: unknown) => console.log(data)
  return (
    <section>
      <h1 className="text-2xl mb-8">Alergias e Eliminações fisiologicas</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-4 flex flex-col gap-5"
      >
        <section className="flex flex-col w-full">
          <label className="mb-2">O Atleta posui algum tipo de alergia?</label>
          <div className="flex items-center gap-8 mb-3">
            <label className="flex items-center">
              <input type="radio" value={'yes'} {...register('hasAllergy')} />
              <span className="ml-2">Sim</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value={'no'}
                {...register('hasAllergy')}
                className="bg-customText"
              />
              <span className="ml-2">Não</span>
            </label>
          </div>
          <textarea
            id="allergyDetails"
            placeholder="Observação, caso necessário..."
            {...register('allergyDetails')}
            className="rounded-md h-24 bg-slate-900 p-1 leading-tight"
          />
        </section>
        <section className="flex flex-col w-full">
          <label className="mb-2">
            O Atleta consegue ir ao banheiro sozinho?
          </label>
          <div className="flex items-center gap-8 mb-3">
            <label className="flex items-center">
              <input
                type="radio"
                value={'yes'}
                {...register('canBathroomAlone')}
              />
              <span className="ml-2">Sim</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value={'no'}
                {...register('canBathroomAlone')}
                className="bg-customText"
              />
              <span className="ml-2">Não</span>
            </label>
          </div>
          <textarea
            id="canBathroomAloneDetails"
            placeholder="Observação, caso necessário..."
            {...register('canBathroomAloneDetails')}
            className="rounded-md h-24 bg-slate-900 p-1 leading-tight"
          />
        </section>
        <section className="flex flex-col w-full">
          <label className="mb-2">
            O atleta possui incontinência urinária ou fecal?
          </label>
          <div className="flex items-center gap-8 mb-3">
            <label className="flex items-center">
              <input type="radio" value={'yes'} {...register('incontinence')} />
              <span className="ml-2">Sim</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value={'no'}
                {...register('incontinence')}
                className="bg-customText"
              />
              <span className="ml-2">Não</span>
            </label>
          </div>
          <textarea
            id="IncontinenceDetails"
            placeholder="Observação, caso necessário..."
            {...register('IncontinenceDetails')}
            className="rounded-md h-24 bg-slate-900 p-1 leading-tight"
          />
        </section>
        <section className="flex flex-col w-full">
          <label className="mb-2">O atleta faz uso de fraldas?</label>
          <div className="flex items-center gap-8 mb-3">
            <label className="flex items-center">
              <input type="radio" value={'yes'} {...register('useDiapers')} />
              <span className="ml-2">Sim</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value={'no'}
                {...register('useDiapers')}
                className="bg-customText"
              />
              <span className="ml-2">Não</span>
            </label>
          </div>
          <textarea
            id="useDiapersDetails"
            placeholder="Observação, caso necessário..."
            {...register('useDiapersDetails')}
            className="rounded-md h-24 bg-slate-900 p-1 leading-tight"
          />
        </section>
        <section className="flex flex-col w-full">
          <label className="mb-2" htmlFor="athelteRoutineDetails">
            Descreva como é a rotina de necessidades fisiológicas do atleta
            (quantas vezes vai ao banheiro, se precisa de auxílio... )
          </label>
          <textarea
            id="athelteRoutineDetails"
            placeholder="Observação, caso necessário..."
            {...register('athelteRoutineDetails')}
            className="rounded-md h-24 bg-slate-900 p-1 leading-tight"
          />
        </section>
        <button
          type="submit"
          className="w-20 h-10 bg-customText text-customBackground  rounded-md"
        >
          <span className="font-semibold">Salvar</span>
        </button>
      </form>
    </section>
  )
}

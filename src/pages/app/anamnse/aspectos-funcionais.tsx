import { useForm } from 'react-hook-form'

function AspectosFuncionais() {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data: unknown) => console.log(data)
  return (
    <section>
      <h1 className="text-2xl mb-8">Aspectos funcionais</h1>
      <form
        className="mt-4 flex flex-col gap-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <section className="flex flex-col w-full">
          <label className="mb-2">
            Cuidados pessoais (alimentação, higiene, vestir-se):{' '}
          </label>
          <div className="flex items-center gap-8 mb-3">
            <label className="flex items-center">
              <input
                type="radio"
                value={'alone'}
                {...register('personalCare')}
              />
              <span className="ml-2">Sozinho</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value={'needHelp'}
                {...register('personalCare')}
                className="bg-customText"
              />
              <span className="ml-2">Com ajuda</span>
            </label>
          </div>
          <textarea
            id="personalCareDetails"
            placeholder="Observação, caso necessário..."
            {...register('personalCareDetails')}
            className="rounded-md h-24 bg-slate-900 p-1 leading-tight"
          />
        </section>
        <section className="flex flex-col w-full">
          <label className="mb-2">
            Locomoção (andar sozinho pela rua, sair sozinho de casa, andar de
            bicicleta/triciclo/patinete):{' '}
          </label>
          <div className="flex items-center gap-8 mb-3">
            <label className="flex items-center">
              <input
                type="radio"
                value={'alone'}
                {...register('athleteLocomotion')}
              />
              <span className="ml-2">Sozinho</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value={'needHelp'}
                {...register('athleteLocomotion')}
                className="bg-customText"
              />
              <span className="ml-2">Com ajuda</span>
            </label>
          </div>
          <textarea
            id="athleteLocomotionDetails"
            placeholder="Observação, caso necessário..."
            {...register('athleteLocomotionDetails')}
            className="rounded-md h-24 bg-slate-900 p-1 leading-tight"
          />
        </section>
        <section className="flex flex-col w-full">
          <label className="mb-2">Administração do dinheiro: </label>
          <div className="flex items-center gap-8 mb-3">
            <label className="flex items-center">
              <input
                type="radio"
                value={'alone'}
                {...register('moneyManagement')}
              />
              <span className="ml-2">Sozinho</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value={'needHelp'}
                {...register('moneyManagement')}
                className="bg-customText"
              />
              <span className="ml-2">Com ajuda</span>
            </label>
          </div>
          <textarea
            id="moneyManagementDetails"
            placeholder="Observação, caso necessário..."
            {...register('moneyManagementDetails')}
            className="rounded-md h-24 bg-slate-900 p-1 leading-tight"
          />
        </section>
        <section className="flex flex-col w-full">
          <label className="mb-2">
            Tratamento medico (controle de medicações, dietas, compreensão e
            registro de orientações):{' '}
          </label>
          <div className="flex items-center gap-8 mb-3">
            <label className="flex items-center">
              <input
                type="radio"
                value={'alone'}
                {...register('medicalTreatment')}
              />
              <span className="ml-2">Sozinho</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value={'needHelp'}
                {...register('medicalTreatment')}
                className="bg-customText"
              />
              <span className="ml-2">Com ajuda</span>
            </label>
          </div>
          <textarea
            id="medicalTreatmentDetails"
            placeholder="Observação, caso necessário..."
            {...register('medicalTreatmentDetails')}
            className="rounded-md h-24 bg-slate-900 p-1 leading-tight"
          />
        </section>
        <section className="flex flex-col w-full">
          <label className="mb-2">
            Condução das atividades de trabalho e ocupacionais:{' '}
          </label>
          <div className="flex items-center gap-8 mb-3">
            <label className="flex items-center">
              <input
                type="radio"
                value={'alone'}
                {...register('workActivities')}
              />
              <span className="ml-2">Sozinho</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value={'needHelp'}
                {...register('workActivities')}
                className="bg-customText"
              />
              <span className="ml-2">Com ajuda</span>
            </label>
          </div>
          <textarea
            id="workActivitiesDetails"
            placeholder="Observação, caso necessário..."
            {...register('workActivitiesDetails')}
            className="rounded-md h-24 bg-slate-900 p-1 leading-tight"
          />
        </section>
        <section className="flex flex-col w-full">
          <label className="mb-2">Possui Problemas conjugais? </label>
          <div className="flex items-center gap-8 mb-3">
            <label className="flex items-center">
              <input
                type="radio"
                value={'yes'}
                {...register('maritalProblems')}
              />
              <span className="ml-2">sim</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value={'no'}
                {...register('maritalProblems')}
                className="bg-customText"
              />
              <span className="ml-2">Não</span>
            </label>
          </div>
          <textarea
            id="maritalProblemsDetails"
            placeholder="Observação, caso necessário..."
            {...register('maritalProblemsDetails')}
            className="rounded-md h-24 bg-slate-900 p-1 leading-tight"
          />
        </section>
        <section className="flex flex-col w-full">
          <label className="mb-2">
            Problemas problemas auditivos ou visuais?{' '}
          </label>
          <div className="flex items-center gap-8 mb-3">
            <label className="flex items-center">
              <input
                type="radio"
                value={'yes'}
                {...register('hearingOrvisionProblems')}
              />
              <span className="ml-2">sim</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value={'no'}
                {...register('hearingOrvisionProblems')}
                className="bg-customText"
              />
              <span className="ml-2">Não</span>
            </label>
          </div>
          <textarea
            id="hearingOrvisionProblemsDetails"
            placeholder="Observação, caso necessário..."
            {...register('hearingOrvisionProblemsDetails')}
            className="rounded-md h-24 bg-slate-900 p-1 leading-tight"
          />
        </section>
        <section className="flex flex-col w-full">
          <label className="mb-2">Como está o sono do Atleta? </label>
          <div className="flex items-center gap-8 mb-3">
            <label className="flex items-center">
              <input
                type="radio"
                value={'altered'}
                {...register('athleteSleep')}
              />
              <span className="ml-2">Alterado</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value={'normal'}
                {...register('athleteSleep')}
                className="bg-customText"
              />
              <span className="ml-2">Normal</span>
            </label>
          </div>
          <textarea
            id="athleteSleepDetails"
            placeholder="Observação, caso necessário..."
            {...register('athleteSleepDetails')}
            className="rounded-md h-24 bg-slate-900 p-1 leading-tight"
          />
        </section>
        <section className="flex flex-col w-full">
          <label className="mb-2">
            Descreva se o atleta apresenta dificuldades motoras
          </label>
          <textarea
            id="motorDificultesDetails"
            placeholder="Ex: para andar, usar as mãos, escrever, vestir-se sozinho, para manter o equilíbrio, etc..."
            {...register('motorDificultesDetails')}
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

export default AspectosFuncionais

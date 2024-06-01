import { useForm } from "react-hook-form"

export function DadosAthetas () {

    const {register, handleSubmit, formState:{errors} } = useForm();

    const onSubmit = (data) => {
        //Logica para enviar dados pro back-end
        console.log('Dados back-end: ', data)
    }

    return (
        <>
            <p>Dados do Atleta</p>
            <form 
            onSubmit={handleSubmit(onSubmit)}
            className="mt-4 flex flex-col">
                <section className="flex items-center justify-between">
                    <div className="flex flex-col w-full pr-4">
                        <label htmlFor="local-nascimento" className="text-sm tracking-tight">
                            Local de Nascimento
                        </label>
                        <input 
                            type="text" 
                            id="local-nascimento"
                            {...register('localNascimento', {required: true})} 
                            className="rounded-md h-8 bg-slate-900 pl-1"/>
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="local-procedencia" className="text-sm tracking-tight">
                            Local de Procedencia
                        </label>
                        <input 
                            type="text" 
                            id="local-nascimento" 
                            {...register('localProcedencia', {required: true})}
                            className="rounded-md h-8 bg-slate-900 pl-1" />
                    </div>
                </section>
                <section className="flex flex-col items-center justify-between mt-8 gap-8">
                    <div className="flex flex-col w-full">
                    <label htmlFor="origem" className="text-sm tracking-tight">
                            Já morou em outra cidade? Se sim, quais foram e por quanto tempo?
                        </label>
                        <textarea 
                            //type="text" 
                            id="origem" 
                            {...register('origem', {required: true})}
                            className="rounded-md h-24 bg-slate-900 p-1" />
                    </div>
                    <div className="flex flex-col w-full">
                    <label htmlFor="vida-social" className="text-sm tracking-tight">
                            Descreva como esta a vida social do atleta no presente momento:
                        </label>
                        <textarea 
                            //type="text" 
                            id="vida-social" 
                            {...register('vidaSocial', {required: true})}
                            className="rounded-md h-24 bg-slate-900 p-1" />
                    </div>
                    <div className="flex flex-col w-full">
                    <label htmlFor="padrao-humor" className="text-sm tracking-tight">
                            Descreva o padrão de humor do atleta (ansioso, depressivo, irritável, raivosos, medroso, estavél, instável) e se ocorrem mudanças neste padrão e desde quando:
                        </label>
                        <textarea 
                            //type="text" 
                            id="padrao-humor" 
                            {...register('padraoHumor', {required: true})}
                            className="rounded-md h-24 bg-slate-900 p-1" />
                    </div>
                    <div className="flex flex-col w-full">
                    <label htmlFor="rotina" className="text-sm tracking-tight">
                            Descreva como é a rotina atual do atleta (descrever um dia tipico do começo ao fim, com as atividades de rotina em casa, outras atividades, retorno a casa, atividades realizadas em casa, periodo do sono, aulas ou curso realizados, etc.)
                    </label>
                        <textarea 
                            //type="text" 
                            id="rotina" 
                            {...register('rotina', {required: true})}
                            className="rounded-md h-24 bg-slate-900 p-1 leading-tight" />
                    </div>
                </section>
                <button 
                type="submit"
                className="rounded-md px-2 py-2 mt-4 bg-slate-900">
                    Salvar
                </button>
            </form>
        </>
    )
}
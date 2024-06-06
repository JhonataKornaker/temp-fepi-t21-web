import { Helmet } from 'react-helmet-async'
import * as Tabs from '@radix-ui/react-tabs'
import { VisaoGeral } from './visao-geral'
import { DadosAthetas } from './dados-atheta'
import { Fingerprint, LayoutDashboard, User, Stethoscope } from 'lucide-react'
import { DadosPessoais } from './dados-pessoais'
import { AlergiasEliminacoesFisiologicas } from './alergias-eliminacoes-fisiologicas'

export function Anamnse() {
  return (
    <>
      <Helmet title="Anamnse" />

      <div className="space-y-2 mb-3">
        <h1 className="text-3xl font-bold tracking-tight">Anamnse</h1>
        <p className="text-base text-slate-400">
          Visualize as informações da anamnse do atleta.
        </p>
      </div>

      <Tabs.Root defaultValue="tab1" className="flex items-start">
        <Tabs.List className="flex flex-col bg-slate-800 p-2 mr-6 w-80 rounded-md">
          <Tabs.Trigger value="tab1" className="flex items-center p-3">
            <div className="flex gap-4 items-center">
              <LayoutDashboard className="h-4 w-4" />
              Visão Geral
            </div>
          </Tabs.Trigger>
          <Tabs.Trigger value="tab2" className="flex items-center p-3">
            <div className="flex gap-4 items-center">
              <User className="h-4 w-4" />
              Dados Pessoais
            </div>
          </Tabs.Trigger>
          <Tabs.Trigger value="tab3" className="flex items-center p-3">
            <div className="flex gap-4 items-center">
              <Fingerprint className="h-4 w-4" />
              Dados Atleta
            </div>
          </Tabs.Trigger>
          <Tabs.Trigger value="tab4" className="flex items-center p-3">
            <div className="flex gap-4 items-center">
              <Stethoscope className="h-4 w-4" />
              Sáude do atleta
            </div>
          </Tabs.Trigger>
        </Tabs.List>
        <div className="bg-slate-800 w-full flex flex-col rounded-md p-5">
          <Tabs.Content value="tab1">
            <VisaoGeral />
          </Tabs.Content>
          <Tabs.Content value="tab2">
            <DadosPessoais />
          </Tabs.Content>
          <Tabs.Content value="tab3">
            <DadosAthetas />
          </Tabs.Content>
          <Tabs.Content value="tab4">
            <AlergiasEliminacoesFisiologicas />
          </Tabs.Content>
        </div>
      </Tabs.Root>
    </>
  )
}

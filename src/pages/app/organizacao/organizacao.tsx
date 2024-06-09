import * as Tabs from '@radix-ui/react-tabs'
import {
  ChevronRight,
  Handshake,
  LayoutDashboard,
  Settings,
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { Voluntarios } from './voluntarios'
import { DadosOrganizacao } from './dados-organization'
import { VisaoGeral } from './visao-geral'

export function Organizacao() {
  return (
    <>
      <Helmet title="Organização" />

      <div className="flex flex-col xl:ml-44 xl:mr-28 xl:space-y-2 xl:mb-3 ps-8 pt-8 xl:pt-8 xl:ps-0">
        <h1 className="text-3xl font-bold tracking-tight">Minha Organização</h1>
        <p className="text-base text-slate-400 ">
          Gerencie as informações da organização e voluntários.
        </p>
      </div>

      <Tabs.Root
        defaultValue="tab1"
        className="flex flex-col xl:flex-row xl:items-start xl:ml-44 xl:mr-28 w-full"
      >
        <Tabs.List className="flex flex-row xl:flex-col xl:border-solid xl:border-2 border-slate-700 p-2 xl:pt-4 xl:pb-4 xl:mr-5 w-full xl:w-96 xl:rounded-md ">
          <Tabs.Trigger
            value="tab1"
            className="flex items-center justify-center xl:justify-between p-3 w-full xl:w-auto xl:hover:bg-slate-700 xl:data-[state=active]:bg-slate-700 data-[state=active]:text-customText data-[state=active]:border-b-customText border-b-2 border-b-slate-600 xl:border-b-0"
          >
            <div className="flex gap-4 items-center justify-center">
              <LayoutDashboard className="h-6 w-6 xl:h-4 xl:w-4" />
              <span className="hidden xl:block md:block lg:block">
                Visão Geral
              </span>
            </div>
            <div>
              <ChevronRight className="hidden xl:block md:block lg:block" />
            </div>
          </Tabs.Trigger>
          <Tabs.Trigger
            value="tab2"
            className="flex items-center justify-center xl:justify-between p-3 w-full xl:w-auto xl:hover:bg-slate-700 xl:data-[state=active]:bg-slate-700 data-[state=active]:text-customText data-[state=active]:border-b-customText border-b-2 border-b-slate-600 xl:border-b-0"
          >
            <div className="flex gap-4 items-center justify-center xl:justify-start">
              <Handshake className="h-6 w-6 xl:h-4 xl:w-4" />
              <span className="hidden xl:block md:block lg:block">
                Voluntários
              </span>
            </div>
            <div>
              <ChevronRight className="hidden xl:block md:block lg:block" />
            </div>
          </Tabs.Trigger>
          <Tabs.Trigger
            value="tab3"
            className="flex items-center justify-center xl:justify-between p-3 w-full xl:w-auto xl:hover:bg-slate-700 xl:data-[state=active]:bg-slate-700 data-[state=active]:text-customText data-[state=active]:border-b-customText border-b-2 border-b-slate-600 xl:border-b-0"
          >
            <div className="flex gap-4 items-center justify-center xl:justify-start">
              <Settings className="h-6 w-6 xl:h-4 xl:w-4" />
              <span className="hidden xl:block md:block lg:block">
                Dados da organização
              </span>
            </div>
            <div>
              <ChevronRight className="hidden xl:block md:block lg:block" />
            </div>
          </Tabs.Trigger>
        </Tabs.List>
        <div className="flex flex-col ms-8 me-8 mt-7 xl:w-[780px]">
          <Tabs.Content value="tab1">
            <VisaoGeral />
          </Tabs.Content>
          <Tabs.Content value="tab2">
            <Voluntarios />
          </Tabs.Content>
          <Tabs.Content value="tab3">
            <DadosOrganizacao />
          </Tabs.Content>
        </div>
      </Tabs.Root>
    </>
  )
}

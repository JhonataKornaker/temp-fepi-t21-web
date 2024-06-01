import * as Tabs  from "@radix-ui/react-tabs";
import { ChevronRight, Handshake, LayoutDashboard, Settings } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { VisaoGeralOrganization } from "./visao-geral-organization";
import { Voluntarios } from "./voluntarios";
import { DadosOrganizacao } from "./dados-organization";

export function Organizacao() {
  return (
    <>
      <Helmet title="Organização" />

      <div className="flex flex-col ml-44 mr-28 space-y-2 mb-3">
        <h1 className="text-3xl font-bold tracking-tight">Minha Organização</h1>
        <p className="text-base text-slate-400">
          Gerencie as informações da organização e voluntários.
        </p>
      </div>

      <Tabs.Root defaultValue="tab1" className="flex items-start ml-44 mr-28">
                    <Tabs.List className="flex flex-col border-solid border-2 border-slate-700 pt-4 pb-4 mr-5 w-96 rounded-md">
                        <Tabs.Trigger value="tab1" className="flex items-center justify-between p-3  hover:bg-slate-700 data-[state=active]:bg-slate-700 data-[state=active]:text-customText">
                            <div className="flex gap-4 items-center">
                                <LayoutDashboard className="h-4 w-4"/>
                                Visão Geral
                            </div>
                            <div>
                                <ChevronRight />
                            </div>
                        </Tabs.Trigger>
                        <Tabs.Trigger value="tab2" className="flex items-center justify-between p-3 hover:bg-slate-700 data-[state=active]:bg-slate-700 data-[state=active]:text-customText">
                            <div className="flex gap-4 items-center">
                                <Handshake className="h-4 w-4"/>
                                Voluntários
                            </div>
                            <div>
                                <ChevronRight />
                            </div>
                        </Tabs.Trigger>
                        <Tabs.Trigger value="tab3" className="flex items-center justify-between p-3 hover:bg-slate-700 data-[state=active]:bg-slate-700 data-[state=active]:text-customText">
                            <div className="flex gap-4 items-center">
                                <Settings className="h-4 w-4"/>
                                Dados da organização
                            </div>
                            <div>
                                <ChevronRight />
                            </div>
                        </Tabs.Trigger>
                    </Tabs.List>
                    <div className="w-full flex flex-col">
                    <Tabs.Content value="tab1"> <VisaoGeralOrganization /> </Tabs.Content>
                    <Tabs.Content value="tab2"> <Voluntarios /> </Tabs.Content>
                    <Tabs.Content value="tab3"> <DadosOrganizacao /> </Tabs.Content>
                    </div>
                </Tabs.Root>
    </>
  );
}

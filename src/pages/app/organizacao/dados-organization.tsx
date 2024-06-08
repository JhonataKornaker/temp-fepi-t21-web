import { Settings, Eye, EyeOff } from "lucide-react";
import * as Tabs from '@radix-ui/react-tabs';
import { useState } from 'react';
import { Modal } from "./modal-organization";

export function DadosOrganizacao () {
    const [showPassword, setShowPassword] = useState(false);
    const [dadosGerais, setDadosGerais] = useState({
        nome: '',
        dominio: '',
        dono: '',
        senha: ''
    });
    const [endereco, setEndereco] = useState({
        cep: '',
        rua: '',
        numero: '',
        complemento: '',
        bairro: '',
        cidade: '',
        uf: ''
    });
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleSalvarClick = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        setIsModalVisible(true);
    };

    const handleSave = () => {
        // Aqui você pode enviar os dados para onde precisar
        console.log('Dados:', { dadosGerais, endereco });


        setDadosGerais({
            nome: '',
            dominio: '',
            dono: '',
            senha: ''
        });

        setEndereco({
            cep: '',
            rua: '',
            numero: '',
            complemento: '',
            bairro: '',
            cidade: '',
            uf: ''
        });

        // Ocultar o modal
        setIsModalVisible(false);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleInputChange = (event: { target: { id: any; value: any; }; }) => {
        const { id, value } = event.target;
        setDadosGerais((prevDadosGerais) => ({
            ...prevDadosGerais,
            [id]: value
        }));
    };

    const handleCepChange = (event: { target: { value: any; }; }) => {
        let value = event.target.value;
        value = value.replace(/\D/g, '');
        if (value.length > 5) {
            value = value.replace(/^(\d{5})(\d{1,3})$/, '$1-$2');
        }
        setEndereco({ ...endereco, cep: value });
    };

    const handleUfChange = (event: { target: { value: any; }; }) => {
        const { value } = event.target;
        const newValue = value.toUpperCase().replace(/[^A-Z]/g, ''); // Converter para maiúsculas e remover caracteres não alfabéticos
        setEndereco((prevEndereco) => ({
            ...prevEndereco,
            uf: newValue
        }));
    };

    

    return (
    <>
    {/*TITULOS E SUBTILO */}
        <div className="flex items-center gap-3">
            <Settings/>
            <h3 className="text-xl">Dados Organização</h3>
        </div>
        <div className="flex justify-between mt-8 mb-4">
            <p className="text-base font-bold">Dados Gerais</p>
        </div>

        {/*COMEÇO DO PRIMEIRO QUADRADO DO FORMS */}

        <form onSubmit={handleSalvarClick}>
            <Tabs.Root className="flex flex-col w-97 shadow-md" defaultValue="tab1">
                <Tabs.Content className="flex-grow p-5 bg-slate-800 rounded-lg" value="tab1">

                    {/*DIV PRIMEIRA LINHA */}

                    <div className="flex flex-wrap">
                        <fieldset className="mb-4 mr-20  flex-grow-0 flex-shrink w-1/2">
                            <label className="block text-xs mb-2" htmlFor="nome">
                                Nome
                            </label>
                            <input className="w-full h-9 p-3 rounded-md text-white-800 bg-customBackground" 
                            id="nome" 
                            placeholder="Nome" 
                            required
                            value={dadosGerais.nome} 
                            onChange={handleInputChange}
                            />
                        </fieldset>

                        <fieldset className="mb-4 flex-grow-0 flex-shrink w-2/2">
                            <div className="relative">
                                <label className="block text-xs mb-2" htmlFor="senha">
                                    Senha
                                </label>
                                <input className="w-full h-9 p-3 pr-10 rounded-md text-white-800 bg-customBackground" 
                                id="senha" 
                                placeholder="Senha" 
                                type={showPassword ? 'text' : 'password'} 
                                value={dadosGerais.senha} 
                                onChange={handleInputChange}  
                                required/>
                                <button type="button" className="absolute inset-y-0 right-0 px-3 py-3 transform -translate-y-1/2 top-1/2" onClick={togglePasswordVisibility}>
                                    {showPassword ? <Eye/> : <EyeOff/>}
                                </button>
                            </div> 
                        </fieldset>
                    </div>

                    {/*FIM PRIMEIRA LINHA */}

                    {/*COMEÇO SEGUNDA LINHA */}

                    <div className="flex flex-wrap">
                        <fieldset className="mb-4 mr-20  flex-grow-0 flex-shrink w-1/2">
                            <label className="block text-xs mb-2" htmlFor="dominio">
                                Dominio
                            </label>
                            <input className="w-full h-9  p-3 rounded-md text-white-800 bg-customBackground" 
                            id="dominio" 
                            placeholder="Digite o Domínio" 
                            required
                            value={dadosGerais.dominio}
                            onChange={handleInputChange}/>
                        </fieldset>

                        <fieldset className="mb-4 flex-grow-0 flex-shrink w-2/2">
                            <div className="relative">
                                <label className="block text-xs mb-2" htmlFor="dono">
                                    Dono
                                </label>
                                <select className="w-full h-9 pr-32 rounded-md text-white-800 bg-customBackground" 
                                id="dono"
                                value={dadosGerais.dono}
                                required
                                onChange={handleInputChange}>
                                    <option value="" disabled>Selecione o Dono</option>
                                    <option value="brasil">Brasil</option>
                                    <option value="portugal">Portugal</option>
                                    <option value="eua">Estados Unidos</option>
                                    <option value="canada">Canadá</option>
                                </select>
                            </div> 
                        </fieldset>
                        {/*FIM SEGUNDA LINHA */}

                    </div>
                </Tabs.Content>

                {/*FIM DO PRIMEIRO QUADRADO DO FORMS */}

                <div className="flex justify-between mt-8 mb-4">
                    <p className="text-base font-bold">Endereço</p>
                </div>
                <Tabs.Content className="flex-grow p-5 bg-slate-800 rounded-md" value="tab1">
                    <div className="flex flex-wrap">
                        <fieldset className="mb-4 mr-20  flex-grow-0 flex-shrink w-1/2">
                            <label className="block text-xs mb-2" htmlFor="cep">
                                CEP
                            </label>
                            <input type="text" maxLength={8} 
                            className="w-full h-9 p-3 rounded-md text-white-800 bg-customBackground" 
                            id="cep" placeholder="______-__" 
                            value={endereco.cep} 
                            onChange={handleCepChange} 
                            required
                            />
                        </fieldset>

                        <fieldset className="mb-4 flex-grow-0 flex-shrink w-2/2">
                            <div className="relative">
                                <label className="block text-xs mb-2" htmlFor="rua">
                                    Rua
                                </label>
                                <input className="w-full h-9 p-3 pr-10 rounded-md text-white-800 bg-customBackground" 
                                id="rua" 
                                placeholder="Nome da Rua" 
                                required
                                value={endereco.rua}
                                onChange={(e) => setEndereco({ ...endereco, rua: e.target.value })} />
                            </div> 
                        </fieldset>

                    </div>
                    <div className="flex flex-wrap">
                        <fieldset className="mb-4 mr-20  flex-grow-0 flex-shrink w-1/2">
                            <label className="block text-xs mb-2" htmlFor="numero">
                                Numero
                            </label>
                            <input type="number" className="w-full h-9  p-3 rounded-md text-white-800 bg-customBackground" 
                            id="numero" 
                            placeholder="Numero" 
                            required
                            value={endereco.numero}
                            onChange={(e) => setEndereco({ ...endereco, numero: e.target.value })} />
                        </fieldset>

                        <fieldset className="mb-4 flex-grow-0 flex-shrink w-2/2">
                            <div className="relative">
                                <label className="block text-xs mb-2" htmlFor="complemento">
                                    Complemento
                                </label>
                                <input className="w-full h-9  p-3 rounded-md text-white-800 bg-customBackground" 
                                id="complemento" 
                                placeholder="Casa, Ap etc" 
                                value={endereco.complemento}
                                onChange={(e) => setEndereco({ ...endereco, complemento: e.target.value })}/>
                            </div> 
                        </fieldset>

                    </div>
                    <div className="flex flex-wrap">
                        <fieldset className="mb-4 pr-4  flex-grow-0 ">
                            <div className="relative w-96">
                                <label className="block text-xs mb-2" htmlFor="bairro">
                                    Bairro
                                </label>
                                <input className="w-full h-9  p-3 rounded-md text-white-800 bg-customBackground" 
                                id="bairro" 
                                placeholder="Nome do Bairro" 
                                required
                                value={endereco.bairro}
                                onChange={(e) => setEndereco({ ...endereco, bairro: e.target.value })}/>
                            </div>
                        </fieldset>

                        <fieldset className=" mb-4 pr-4 flex-grow-0 flex-shrink ">
                            <div className="relative">
                                <label className="block text-xs mb-2" htmlFor="cidade">
                                    Cidade
                                </label>
                                <input className="w-full h-9  p-3 rounded-md text-white-800 bg-customBackground" 
                                id="cidade" 
                                placeholder="Nome da Cidade" 
                                required
                                value={endereco.cidade}
                                onChange={(e) => setEndereco({ ...endereco, cidade: e.target.value })}/>
                            </div> 
                        </fieldset>

                        <fieldset className="mb-4 flex-grow-0 flex-shrink">
                            <div className="relative">
                                <label className="block text-xs mb-2" htmlFor="uf">
                                    UF
                                </label>
                                <input maxLength={2} className="h-9 w-20  p-3 rounded-md text-white-800 bg-customBackground" 
                                id="uf" placeholder="XX" 
                                required
                                value={endereco.uf}
                                onChange={handleUfChange}/>
                            </div> 
                        </fieldset>
                        
                    </div>
                </Tabs.Content>
            </Tabs.Root>
            <div className="flex mt-10 justify-end">
                <button type="submit" className="Button bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                    Salvar
                </button>
            </div>
        </form>
        <Modal 
                isVisible={isModalVisible}
                onClose={() => setIsModalVisible(false)}
                onSave={handleSave}
                dadosGerais={dadosGerais}
                endereco={endereco}  />
    </>
    );
}

import { useEffect } from 'react';

interface DadosGerais {
    nome: string;
    dominio: string;
    dono: string;
    senha: string;
}

interface Endereco {
    cep: string;
    rua: string;
    numero: string;
    complemento: string;
    bairro: string;
    cidade: string;
    uf: string;
}

interface ModalProps {
    isVisible: boolean;
    onClose: () => void;
    onSave: () => void;
    dadosGerais: DadosGerais;
    endereco: Endereco;
}

export function Modal({ isVisible, onClose, onSave, dadosGerais, endereco }: ModalProps) {
    useEffect(() => {
        const handleEsc = (event: { key: string; }) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    if (!isVisible) {
        return null;
    }

    const handleSave = async () => {
        onSave();
        onClose();
    /* const payload = { dadosGerais, endereco };

        try {
            const response = await fetch('/api/salvar-dados', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                console.log('Dados salvos com sucesso!');
                onSave();  // Chama a função onSave para qualquer lógica adicional
                onClose();
            } else {
                console.error('Erro ao salvar dados');
            }
        } catch (error) {
            console.error('Erro na requisição', error);
        }*/
    };

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
                <h2 className="text-lg font-bold mb-4">Salvar Dados</h2>
                <p className="mb-4">Você deseja salvar os dados?</p>
                <div className="flex justify-end">
                    <button className="mr-4 px-4 py-2 bg-red-500 text-white rounded" onClick={onClose}>Cancelar</button>
                    <button className="px-4 py-2 bg-green-500 text-white rounded" onClick={handleSave}>Salvar</button>
                </div>
            </div>
        </div>
    );
}

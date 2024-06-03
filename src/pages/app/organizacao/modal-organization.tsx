import { useEffect } from 'react';

export function Modal({ isVisible, onClose, onSave, dadosGerais, endereco, password }) {
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

    const handleSave = () => {
        onSave();
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
        <div className=" bg-slate-800 p-6 rounded-lg shadow-lg">
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
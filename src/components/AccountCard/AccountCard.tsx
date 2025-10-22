import { Wallet } from 'lucide-react';

interface Props {
    onClick?: () => void;
}

export function AccountCard({ onClick }: Props) {
    return (
        <div
            className="w-full border border-gray-100 p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg hover:opacity-50 transition-shadow"
            onClick={onClick}>
            <div className="flex items-center gap-4">
                <Wallet size={20} />
                <h2>Banco Falabella</h2>
            </div>
            <div className='mt-2'>
                <p className="text-gray-500">Cuenta Corriente</p>
                <p className="text-lg font-semibold">$1,250,000</p>
            </div>
            <div className='mt-2'>
                <p className="text-gray-500">Crédito Disponible</p>
                <p className="text-lg font-semibold">$500,000</p>
            </div>
        </div>
    );
}
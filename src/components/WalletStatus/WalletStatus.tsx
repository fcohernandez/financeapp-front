import { Progress } from "../ui/progress";

export function WalletStatus() {
    return (
        <div className="w-full p-4">
            <h3 className="text-lg font-semibold mb-4">Estado de la Cartera</h3>
            <div className="space-y-2">
                <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Dinero utilizado</span>
                    <span className="font-medium">70%</span>
                </div>
                <Progress value={70} className="w-full" />
                <div className="flex text-sm gap-1">
                    <span className="text-gray-500">Disponible </span>
                    <span className="font-medium">$200.000</span>
                </div>
            </div>
            <div className="space-y-2 mt-4">
                <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Credito utilizado</span>
                    <span className="font-medium">90%</span>
                </div>
                <Progress value={90} className="w-full" />
                <div className="flex text-sm gap-1">
                    <span className="text-gray-500">Disponible </span>
                    <span className="font-medium">$120.000</span>
                </div>
            </div>
        </div>
    );
}
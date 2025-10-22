import { AccountCard } from "@/components/AccountCard/AccountCard";
import { WalletStatus } from "@/components/WalletStatus/WalletStatus";
import { useNavigate } from "react-router";

export function HomeScreen() {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate("/account");
    }
    return (
        <div className="flex flex-col justify-center items-center h-full pt-5 gap-6">
            <h1>Cuentas</h1>
            <h2>Estado general</h2>
            <div className="w-120">
                <WalletStatus />
            </div>
            <div className="w-80">
                <AccountCard onClick={handleNavigation} />
            </div>
        </div>
    );
}
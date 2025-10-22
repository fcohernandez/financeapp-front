import { AccountScreen } from "@/screens/Account/AccountScreen";
import { HomeScreen } from "@/screens/Home/HomeScreen";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";

let router = createBrowserRouter([
    {
        path: "/",
        Component: HomeScreen,
        loader: () => <div>Loading...</div>,
    },
    {
        path: "/account",
        Component: AccountScreen,
        loader: () => <div>Loading...</div>,
    }
]);

export function AppRouter() {
    return <RouterProvider router={router} />;
}
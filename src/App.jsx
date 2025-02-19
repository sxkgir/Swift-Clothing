import { Link, Outlet } from "react-router-dom";
import { Header } from "./Components/Header/Header.jsx";
import { SwiftShopProvider } from "./SwiftProvider/SwiftShopContext.tsx";
export function App() {
    return(
        <SwiftShopProvider>
            <Header />
            <Outlet />
        </SwiftShopProvider>
    )
}
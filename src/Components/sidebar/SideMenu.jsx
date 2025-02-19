import { useContext, useState,useEffect, useRef } from "react";
import expandLess from "../../Icon/expand-less.png"
import expandMore from "../../Icon/expand-more.png";
import { Link } from "react-router-dom";
import { SwiftShopContext } from "../../SwiftProvider/SwiftShopContext.tsx";
import "./SideMenu.css"
export function Sidemenu() {
    
    const {setSidebarOpen,isSidebarOpen} = useContext(SwiftShopContext);

    const [isDisplayShop,setDisplayShop] = useState(false);

    const sidemenuRef = useRef(null);
    
    
    const handleShopClick = () => {
        setDisplayShop(prev => !prev);
    };

    useEffect(() => {
        if (isSidebarOpen && sidemenuRef.current) {
            window.scrollTo(0, 0); // Reset scroll for Sidemenu only
        }
    }, [isSidebarOpen]);

    if (!isSidebarOpen) return null;


    
      return (
        <div className="Sidemenu-options" ref={sidemenuRef}>
            <button 
            className="Shop"
            onClick={handleShopClick}
            style={isDisplayShop ? {borderBottom:"none",paddingBottom:"0px"}:{}}
            >
                SHOP
                <img src={isDisplayShop ? expandLess : expandMore} alt="" /> 
            </button>
            {isDisplayShop &&(
            <ul className="shop-choices">
                <li>
                    <Link 
                    to="/new-releases" 
                    onClick={() => setSidebarOpen(false)}
                    >
                        <span>NEW RELEASES</span>
                    </Link>
                </li>
                <li>
                    <Link 
                    to="/classics" 
                    onClick={() => setSidebarOpen(false)}
                    >
                        <span>CLASSICS</span>
                    </Link>
                </li>
                <li>
                    <Link 
                    to="/sale"
                    onClick={() => setSidebarOpen(false)}
                    >
                        <span>SALE</span>
                    </Link>
                </li>
            </ul>
            )}
            <button className="Account">
                ACCOUNT
            </button>
            <button className="Orders">
                ORDERS
            </button>
            <button className="Support">
                Support
            </button>
        </div>


    )

}
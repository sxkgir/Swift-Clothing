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
            className="Shop sideShop"
            onClick={handleShopClick}
            style={isDisplayShop ? {borderBottom:"none",paddingBottom:"0px"}:{}}
            >
                SHOP
                <img className="expand-img" src={isDisplayShop ? expandLess : expandMore} alt="" /> 
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
            <button className="Account side" >
                ACCOUNT
            </button>
            <Link
             to="/checkout"    
             onClick={() => setSidebarOpen(false)}

            
            >
                <button className="Orders side">
                    ORDERS
                </button>
            </Link>
            <Link to="/about-us"
             onClick={() => setSidebarOpen(false)}
            >
                <button className="About side">
                    ABOUT US
                </button>
            </Link>
            <Link
             to="/contact-us"    
             onClick={() => setSidebarOpen(false)}
            >
                <button className="Contact side">
                    CONTACT US
                </button>
            </Link>

            <button className="Support side">
                Support
            </button>
        </div>


    )

}
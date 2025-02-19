import { useState } from "react";
import logoName from "../../Icon/LogoName.png"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { SwiftShopContext  } from "../../SwiftProvider/SwiftShopContext.tsx";
import "./header.css"
export function Header() {
    const { toggleSidebar, setSidebarOpen, isSidebarOpen,cartItem } = useContext(SwiftShopContext);
        return(
        <>
            <header className={`header-section ${isSidebarOpen  ? "non-sticky" : "sticky"}`}>
                <div className="site-logo-container">
                    <Link to="/" onClick={ () => setSidebarOpen(false) }>
                        <img className="site-logoName" src={logoName} alt=""></img>
                    </Link>
                </div>
                <div className="nav-section-collection-container">
                    <ul className="nav-section-collection">
                        <li>
                            <Link to="/new-releases">
                                <span>NEW RELEASES</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/classics">
                                <span>CLASSICS</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/sale">
                                <span>SALE</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="navigation-cart-container">
                    <button className="navigation-button">
                    <svg 
                        className="icon search"
                        xmlns="http://www.w3.org/2000/svg" 
                        x="0px" 
                        y="0px" 
                        width="100" 
                        height="100" 
                        viewBox="0 0 50 50"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="4"  /* Adjust this value for thicker lines */
                    >
                        <circle cx="21" cy="20" r="15" stroke="white" strokeWidth="4" fill="none"/> 
                        <line x1="30" y1="30" x2="44" y2="44" stroke="white" strokeWidth="4" strokeLinecap="round"/>  
                    </svg>

                    </button>
                    <button className="navigation-button cart-button">
                        <svg
                        className="icon cart"
                        width="70"    // increased width
                        height="70"   // increased height
                        viewBox="0 0 24 24"
                        fill="none"
                        >
                        <path stroke="currentColor" strokeWidth="1.5" d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"></path>
                        </svg>
                        <span className="cart-header-count">{cartItem.length}</span>
                    </button>
                    <button 
                        className="navigation-button sidebar-button" 
                        style={{display: "none"}}
                        onClick={toggleSidebar}
                    >            
                        <svg className="icon sidebar" width="50" height="50" viewBox="0 0 124 124">
                        <path d="M112,12H12C5.4,12,0,14.5,0,17s5.4,5,12,5h100c6.6,0,12-2.5,12-5S118.6,12,112,12z"></path>
                        <path d="M112,54H12C5.4,54,0,56.5,0,59s5.4,5,12,5h100c6.6,0,12-2.5,12-5S118.6,54,112,54z"></path>
                        <path d="M112,96H12c-6.6,0-12,2.5-12,5s5.4,5,12,5h100c6.6,0,12-2.5,12-5S118.6,96,112,96z"></path>
                        </svg>    
                    </button>
                </div>
            </header>
            
        </>
    )
}
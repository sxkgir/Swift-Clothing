import { useContext } from "react";
import { SwiftShopContext } from "../../SwiftProvider/SwiftShopContext.tsx";
import { Sidemenu } from "../../Components/sidebar/SideMenu.jsx";
import fullLogo from "../../Icon/Logo.png"
import { Link } from "react-router-dom";
import classicImg from "../../Icon/CLassics.png";
import saleImg from "../../Icon/sale.jpg";
import arrivalImg from "../../Icon/New_Arrivals.jpeg";
import "./Home.css"
export function Home() {

    const { isSidebarOpen }  = useContext(SwiftShopContext);
    
    if (isSidebarOpen){
        return <Sidemenu />
    }
    return(
        <div>
            <div className="club-information">
                <div className="club-learn-more">
                    <span className="learn-more-title">SWIFT SPORTS CLOTHING CLUB</span>
                    <span className="learn-more-description">
                        Join the Swift Club now and achieve your goals faster than before
                    </span>
                    <div className="club-button">
                        <Link to="/about-us" className="about-us-direct">
                            <button className="btn-link-direct">
                                About Us    
                            </button>
                        </Link>
                        <Link to="/contact-us" className="about-us-direct">
                            <button className="btn-link-direct">
                                Join Now
                            </button>
                        </Link>
                    </div>
                </div>
                <img src={fullLogo} alt="" />
            </div>
            <div className="categories-link">
                <div className="categories-content">
                    <img src={classicImg} alt="" />
                    <Link to="/classics" className="btn-link">
                        Classics
                    </Link>               
                </div>
                <div className="categories-content">
                    <img src={arrivalImg} alt="" />
                    <Link to="/new-releases" className="btn-link">
                        New Releases
                    </Link>
                </div>

                <div className="categories-content">
                    <img src={saleImg} alt="" />
                    <Link to="/sale" className="btn-link">
                        Sales       
                    </Link>               
                 </div>
            </div>
        </div>




    )

}
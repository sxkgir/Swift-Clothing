import { Header } from "../../Components/Header/Header.jsx"
import React, { useContext } from "react"
import teenFashion from "/TeenFashion.jpg"
import SustainabilityImg from "/SustainabilityImg.jpg"
import { Link } from "react-router-dom"
import { SwiftShopContext } from "../../SwiftProvider/SwiftShopContext.js"
import { Sidemenu } from "../../Components/sidebar/SideMenu.jsx"
export function AboutUs() {

    const {isSidebarOpen} = useContext(SwiftShopContext);
    if (isSidebarOpen) {
        return <Sidemenu />
    }
    
    return(
        <>
            <div className="flex flex-col items-center">

                <div className="flex mx-[7vw] items-center my-[5vh] justify-between max-sm:flex-col">
                <div className="flex flex-col max-w-[42%] text-white gap-[14px] max-sm:max-w-[100%]">
                <div className="font-bold text-[18px]">FASHION 2000's</div>
                        <div className="italic font-semibold text-[28px]">Fashion for those with young spirits</div>
                        <p>Born in the 2000s, raised in an era of digital expression, and fueled by bold individuality—our fashion is for those who embrace the now while redefining the future. We celebrate the style of a generation that grew up with Y2K nostalgia, streetwear evolution, and a fearless mix of trends that break the rules.
                        </p>
                        <p>
                            At Swift, we design for those with young spirits—whether you were born in the 2000s or simply carry that energy with you. Our pieces blend retro influences with modern aesthetics, empowering you to express yourself without limits.

                            This is more than fashion—it’s a movement. Join us in shaping the next era of style.

                        </p>
                    </div>
                    <img src={teenFashion} className="w-1/2 h-[65vh] max-sm:order-first max-sm:w-[100%] max-sm:h-[30vh]" />
                </div>

                <div className="flex mx-[7vw] items-center my-[5vh] gap-x-[7vw] max-sm:flex-col">
                    <img src={SustainabilityImg} className="max-w-38/100 h-[55vh] max-sm:max-w-[100%] max-sm:max-h-[30vh]" />

                    <div className="flex flex-col max-w-42/100 text-white gap-[14px] max-sm:max-w-[100%]">
                        <div className="font-bold text-[18px]">FASHION 2000's</div>
                        <div className="italic font-semibold text-[28px]">Fashion for those with young spirits</div>
                        <p>Born in the 2000s, raised in an era of digital expression, and fueled by bold individuality—our fashion is for those who embrace the now while redefining the future. We celebrate the style of a generation that grew up with Y2K nostalgia, streetwear evolution, and a fearless mix of trends that break the rules.
                        </p>
                        <p>
                            At Swift, we design for those with young spirits—whether you were born in the 2000s or simply carry that energy with you. Our pieces blend retro influences with modern aesthetics, empowering you to express yourself without limits.

                            This is more than fashion—it’s a movement. Join us in shaping the next era of style.

                        </p>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-y-[6vh] my-[7vh]">
                    <h1 className="text-white font-bold text-[18px]">Have more questions ?</h1>
                    <Link to="/contact-us" className="border-solid border-white border-[1px] py-[1vh] px-[2vw] text-white rounded-[16px] bg-[#747474]">
                        Contact Us
                    </Link>
                </div>  
            </div>


        </>
    )
}
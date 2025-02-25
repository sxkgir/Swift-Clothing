
import { SwiftShopContext } from "../../SwiftProvider/SwiftShopContext"
import { useContext, useEffect } from "react"
import { Sidemenu } from "../../Components/sidebar/SideMenu";
export function Checkout() {

    const {cartItem, cartTotal, removeItem, doCalc, isSidebarOpen}  = useContext(SwiftShopContext);

    if (isSidebarOpen) {
        return <Sidemenu />
    }
        

    return (
        <>
            <div className="flex mt-[5vh] gap-x-[10vw] pb-[5vh] max-sm:flex-col max-sm:items-center">
                <div className="ml-[10vw] max-sm:flex max-sm:flex-col max-sm:ml-0 max-sm:w-[90%]">
                    <span className="text-white font-bold text-[22px] max-sm:text-center">Order</span>
                    <div className="pt-[4%] pl-[3vw] mt-[1vh] pb-[4%] bg-[#e6e6e6] border-solid border-1 border-white rounded-[20px] w-[40vw] max-sm:w-[100%] ">
                        <ul className="flex gap-y-[3vh] flex-col">
                            {cartItem.map((clothes) => (
                                <li key={clothes.id} className="max-w-[95%]">
                                    <div className="flex justify-between items-center">
                                        <img src={clothes.image} alt="" className="max-w-[40%] max-sm:max-w-[30%]"/>
                                        <p className="max-sm:max-w-[30%]">{clothes.name}</p>
                                        <span>${clothes.price}</span> 
                                        <button onClick={() => removeItem(clothes)  }>
                                            <svg className="blockw-full max-w-[1.5vw] max-sm:max-w-[26px]" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                                                <path d="M 21 0 C 19.354545 0 18 1.3545455 18 3 L 18 5 L 10.15625 5 A 1.0001 1.0001 0 0 0 9.8378906 5 L 8 5 A 1.0001 1.0001 0 1 0 8 7 L 9.0859375 7 L 12.705078 47.5 L 12.707031 47.509766 C 12.857262 48.862232 13.981872 50 15.400391 50 L 34.599609 50 C 36.018128 50 37.142691 48.862266 37.292969 47.509766 L 37.294922 47.5 L 40.914062 7 L 42 7 A 1.0001 1.0001 0 1 0 42 5 L 40.173828 5 A 1.0001 1.0001 0 0 0 39.841797 5 L 32 5 L 32 3 C 32 1.3545455 30.645455 0 29 0 L 21 0 z M 21 2 L 29 2 C 29.554545 2 30 2.4454545 30 3 L 30 5 L 20 5 L 20 3 C 20 2.4454545 20.445455 2 21 2 z M 11.09375 7 L 18.832031 7 A 1.0001 1.0001 0 0 0 19.158203 7 L 30.832031 7 A 1.0001 1.0001 0 0 0 31.158203 7 L 38.90625 7 L 35.306641 47.289062 C 35.256918 47.736563 34.981091 48 34.599609 48 L 15.400391 48 C 15.018909 48 14.743082 47.736563 14.693359 47.289062 L 11.09375 7 z M 18.984375 9.9863281 A 1.0001 1.0001 0 0 0 18 11 L 18 44 A 1.0001 1.0001 0 1 0 20 44 L 20 11 A 1.0001 1.0001 0 0 0 18.984375 9.9863281 z M 24.984375 9.9863281 A 1.0001 1.0001 0 0 0 24 11 L 24 44 A 1.0001 1.0001 0 1 0 26 44 L 26 11 A 1.0001 1.0001 0 0 0 24.984375 9.9863281 z M 30.984375 9.9863281 A 1.0001 1.0001 0 0 0 30 11 L 30 44 A 1.0001 1.0001 0 1 0 32 44 L 32 11 A 1.0001 1.0001 0 0 0 30.984375 9.9863281 z"></path>
                                            </svg>        

                                        </button>
                                    </div>
                                </li>
                            ))}

                        </ul>
                    </div>

                </div>
                
                <div className="flex flex-col max-sm:mt-[5vh] max-sm:w-[90%]">
                    <div className="text-white font-bold text-[22px] text-center">Payment Summary</div>
                    
                    <div className="flex flex-col gap-y-[2vh] w-[25vw] px-[3vw] py-[4vh] mt-[1vh] bg-[#e6e6e6] border-solid border-1 border-white rounded-[20px] max-sm:w-[100%]">
                        <form action="">
                            <label for="couponCode"></label>
                            <input className="w-full py-[1vh] px-[1vw] border-1 rounded-[4px]" type="text" id="couponCode" name="couponCode" placeholder="Gift card or discount code"></input>
                        </form>

                        <span className="flex justify-between">
                            Subtotal: 
                            <span className="font-bold">
                               ${cartTotal}
                            </span>
                        </span>
                        <span className="flex justify-between">
                            State Tax:
                            <span className="font-bold">
                                ${doCalc().totalTax}
                            </span>
                        </span>    
                        <span className="flex justify-between">
                            Total:
                            <span className="font-bold">
                                ${doCalc().totalPrice}
                            </span>
                        </span>    
                        
                    </div>
                </div>



            </div>
        </>

    )
}
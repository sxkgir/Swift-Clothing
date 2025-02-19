import { useContext } from "react";
import { SwiftShopContext } from "../../SwiftProvider/SwiftShopContext.tsx";
import "./CartModal.css"
export function Cart() {

    const { currentProduct,cartItem, cartTotal, closeCartModal} = useContext(SwiftShopContext);

    

    return(
        <>
            <div className="modal-cart-container">
                <div className="modal-cart">   
                    <div className="modal-header">
                        <div className="cart-added-item-notifcation">
                            <svg
                                id="Layer_1"
                                style={{ enableBackground: "new 0 0 512 512" }}
                                version="1.1"
                                viewBox="0 0 512 512"
                                xmlSpace="preserve"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                >
                                <style type="text/css">{`
                                    .st0 { fill: #2BB673; }
                                    .st1 { fill: none; stroke: #FFFFFF; stroke-width: 30; stroke-miterlimit: 10; }
                                `}</style>
                                <path
                                    className="st0"
                                    d="M489,255.9c0-0.2,0-0.5,0-0.7c0-1.6,0-3.2-0.1-4.7c0-0.9-0.1-1.8-0.1-2.8c0-0.9-0.1-1.8-0.1-2.7  
                                    c-0.1-1.1-0.1-2.2-0.2-3.3c0-0.7-0.1-1.4-0.1-2.1c-0.1-1.2-0.2-2.4-0.3-3.6c0-0.5-0.1-1.1-0.1-1.6c-0.1-1.3-0.3-2.6-0.4-4  
                                    c0-0.3-0.1-0.7-0.1-1C474.3,113.2,375.7,22.9,256,22.9S37.7,113.2,24.5,229.5c0,0.3-0.1,0.7-0.1,1c-0.1,1.3-0.3,2.6-0.4,4  
                                    c-0.1,0.5-0.1,1.1-0.1,1.6c-0.1,1.2-0.2,2.4-0.3,3.6c0,0.7-0.1,1.4-0.1,2.1c-0.1,1.1-0.1,2.2-0.2,3.3c0,0.9-0.1,1.8-0.1,2.7  
                                    c0,0.9-0.1,1.8-0.1,2.8c0,1.6-0.1,3.2-0.1,4.7c0,0.2,0,0.5,0,0.7c0,0,0,0,0,0.1s0,0,0,0.1c0,0.2,0,0.5,0,0.7c0,1.6,0,3.2,0.1,4.7  
                                    c0,0.9,0.1,1.8,0.1,2.8c0,0.9,0.1,1.8,0.1,2.7c0.1,1.1,0.1,2.2,0.2,3.3c0,0.7,0.1,1.4,0.1,2.1c0.1,1.2,0.2,2.4,0.3,3.6  
                                    c0,0.5,0.1,1.1,0.1,1.6c0.1,1.3,0.3,2.6,0.4,4c0,0.3,0.1,0.7,0.1,1C37.7,398.8,136.3,489.1,256,489.1s218.3-90.3,231.5-206.5  
                                    c0-0.3,0.1-0.7,0.1-1c0.1-1.3,0.3-2.6,0.4-4c0.1-0.5,0.1-1.1,0.1-1.6c0.1-1.2,0.2-2.4,0.3-3.6c0-0.7,0.1-1.4,0.1-2.1  
                                    c0.1-1.1,0.1-2.2,0.2-3.3c0-0.9,0.1-1.8,0.1-2.7c0-0.9,0.1-1.8,0.1-2.8c0-1.6,0.1-3.2,0.1-4.7c0-0.2,0-0.5,0-0.7  
                                    C489,256,489,256,489,255.9C489,256,489,256,489,255.9z"
                                />
                                <g>
                                    <line className="st1" x1="213.6" x2="369.7" y1="344.2" y2="188.2" />
                                    <line className="st1" x1="233.8" x2="154.7" y1="345.2" y2="266.1" />
                                </g>
                            </svg>
                            Added to Bag
                        </div>
                        <button className="close-modal" onClick={ () => closeCartModal()}>
                            X
                        </button>

                    </div> 
                    <div className="product-added">
                        <img className="product-image" src={currentProduct.image} alt=""/>
                        {currentProduct.name}

                        <span>${currentProduct.price}</span>
                    </div>
                    <div className="cart-price-information-view">
                        Total Cart Price: ${cartTotal}
                        <button className="view-cart-button">
                            View Bag ({cartItem.length})
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}


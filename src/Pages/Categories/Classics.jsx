import { useContext, useEffect } from "react";
import { SwiftShopContext } from "../../SwiftProvider/SwiftShopContext.js";
import { Sidemenu } from "../../Components/sidebar/SideMenu.jsx";
import ClothingData from "../../ClothingData/ClotheData.json"
import expandMore from "../../Icon/expand-more.png"
import { Cart } from "../../Components/Cart/CartModal.jsx";
import "./Categories.css"

function createNewProduct(id,name,price,image) {
    return {
      id, // Simple unique id generation
      name,
      price,
      image,
    };
}

export function Classics() {


    const { isSidebarOpen, addProduct, cartItem,isCartModalOpen, toggleCartModal}  = useContext(SwiftShopContext);
    if (isSidebarOpen) {
        return <Sidemenu />
    }

    const handleAddProduct = (id,name,price,image) => {
        const newProduct = createNewProduct(id,name,price,image);
        addProduct(newProduct);
    }


    
    return(
        <div className="collection-flex">
            {isCartModalOpen && <Cart />}
            <div className="filter-collection-container">
                <div className="filter-search">
            <svg 
                className="icon search"
                xmlns="http://www.w3.org/2000/svg" 
                x="0px" 
                y="0px" 
                width="100" 
                height="100" 
                viewBox="0 0 50 50"
                fill="black"
                stroke="currentColor"
                strokeWidth="4"  /* Adjust this value for thicker lines */
            >
                <circle cx="21" cy="20" r="15" stroke="black" strokeWidth="4" fill="none"/> 
                <line x1="30" y1="30" x2="44" y2="44" stroke="black" strokeWidth="4" strokeLinecap="round"/>  
            </svg>
                    <form action="" method="get" id="filter-search-clothes">
                        <label htmlFor="filter-clothes"></label>
                        <input type="text" className="filter-clothes" id="filter-clothes" placeholder="SEARCH HERE" />
                    </form>
                </div>
                <div className="filter-list">
                        <div className="filter-gender ">
                            Gender
                            <img src={expandMore} alt="" />
                        </div>
                        <div className="filter-age ">
                            Age
                            <img src={expandMore} alt="" />
                        </div>
                        <div className="filter-price ">
                            Shop by Price
                            <img src={expandMore} alt="" />
                        </div>
                        <div className="filter-size ">
                            Size
                            <img src={expandMore} alt="" />
                        </div>
                        <div className="filter-color ">
                            Color
                            <img src={expandMore} alt="" />
                        </div>
                        <div className="filter-price ">
                            Shop by Price
                            <img src={expandMore} alt="" />
                    </div>

                </div>


            </div>
            <div className="collection-container">
                <ul className="collection-container-list">
                    {ClothingData.map((clothes) => (
                        <li key={clothes.id} className="collection-container-item">
                            <div className="product-card">
                                <button className="clothing-link-placeholder">
                                    <img className={`clothing-image ${clothes.title}`} src={clothes.image } alt="" />
                                </button>
                                <div className="product-card-info">
                                    <div>
                                        <span className="product-card-title">
                                            {clothes.title}
                                        </span>
                                        <span>
                                            ${clothes.price}
                                        </span>
                                    </div>
                                    <button className="add-to-cart" onClick={ () => {
                                        handleAddProduct(clothes.id,clothes.title,clothes.price,clothes.image);
                                        toggleCartModal();
                                    }}>
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
            
    )
}
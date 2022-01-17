import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import Loader from './Loader';

function Shop() {

    useEffect(()=>{
        fetchItems();
    }, [])
    // state
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)
    // fetch data from api
    const fetchItems = async () => {
        try {
            const data = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get');
            const items = await data.json();
            setItems(items.data)
        } catch (error) {
            setError(true)
        }
        setIsLoading(false)
    }

    return (    
        <div className="shop-container">
            <p className="shop-title">All products</p>
            { isLoading && <Loader />}
            { error && <h3>  we cannot get the items, try later..</h3>}
            <div id="Shop">
           {
               items.map(item => (
                   <div id="shopItem">
                       <img src={item.item.images.information} alt=""/>
                       <div className="shop-item-description">
                            <h1 key={item.itemId}>
                            <Link to={`/Shop/${item.itemId}`} className="shop-item-name">
                                {item.item.name} 
                            </Link>
                            </h1>
                    <p className="shop-item-text">{item.item.description}</p>
                    <Link to={`/Shop/${item.itemId}`} className="shop-item-name">
                        <button className="btn">More details</button>
                    </Link>
                       </div>
                   </div>
               ))
           }
        </div>
        </div>
    );
}

export default Shop;

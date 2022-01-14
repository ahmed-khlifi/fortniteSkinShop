import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import DiscoverMore from './DiscoverMore';
 
function Item({match}) {

    useEffect(()=>{
        fetchItem();
    }, [])
    // state
    const [item, setItem] = useState({
        images: {},
        ratings: {}
    })
    
    // fetch data from api
    const fetchItem = async () => {
          const data = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.itemId}`);
          const item = await data.json();
          setItem(item.data.item)
          
          console.log(item.data.item.ratings.numberVotes)
    }
    //rating function
   /*  const StarRating = async () => c = await [...Array(item.ratings.avgStars)].map((star , i) => {
         <FontAwesomeIcon icon={faStar} key={i} />
    }) */
    return (
        <>
            <div className="item-details-card">
            <img src={item.images.information} alt=""/>
            <div className="item-details-description">
                <div className="item-details-name">
                    <span className="item-highlight">{item.rarity}</span>
                    <h1>Item name : {item.name}</h1>
                </div>
                <div className="item-details-rating">
                    <div className="star-rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    <span> - {item.ratings.numberVotes} votes</span>
                    </div>
                </div>
                <p>Points - <strong>{item.ratings.totalPoints}</strong></p>
                <p>Points - <strong>{item.type}</strong></p>
                <button className="btn">Add to cart</button>
            </div>
        </div>
        <DiscoverMore />
        </>
        
    );
}

export default Item;

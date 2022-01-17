import React from 'react'
import { Link } from 'react-router-dom'
import {db, collection, getDocs} from '../firebase'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire } from '@fortawesome/free-solid-svg-icons'


class DiscoverMore extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            itemList : []
        }
    }

    componentDidMount(){
        const getItems = async () => {
            const data = await getDocs(collection(db, 'items'))
            let items = data.docs.map(e => {return e.data()})
            
            this.setState({
                itemList : items,
            })
        }
        getItems();
    }

    render() {

        return (
            <div className="discover-more" id="Shop">
                {
                    this.state.itemList.map(item => 
                    <div id="shopItem">
                        <img src={item.image}  alt=""/>
                        <div className="shop-item-description">
                        <h1>
                        <p  className="shop-item-name">{item.name}</p>
                        </h1>
                        <p className="shop-item-text">{item.description}</p>
                          <div className="btn btn-soon"><FontAwesomeIcon icon={faFire} style={{fontWeight: 500}} /> Soon !</div>
                    </div>
                    </div>
                    )
                }
            </div>
        )
    }
}

export default DiscoverMore;
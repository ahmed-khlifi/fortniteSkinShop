import React from 'react'
import { Link } from 'react-router-dom'
import HeaderAvatar from '../assets/homeavatar.png'
import shape from '../assets/shape1.png'
import shape2 from '../assets/shape2.png'
import DiscoverMore from './DiscoverMore'
export default function Home() {
    return (
        <>
        {/* header */}
        <div className="header">
            <div>
                <small>Welcome to</small>
                <h1>Fortnite shop</h1>
                <p>In publishing and graphic design, Lorem ipsum is a placeholder 
                text commonly used to demonstrate the visual form of a 
                document or a typeface without relying on meaningful content.
                In publishing and graphic design, Lorem ipsum is a placeholder 
                text commonly used to demonstrate the visual form of a 
                document or a typeface without relying on meaningful content.</p>
                <Link to="/shop">
                    <button className="btn">Go to shop</button>
                </Link>
            </div>
            <img src={HeaderAvatar} alt="header avatar" className="float" />
            <img src={shape} alt="just a shape :D " className="shape1" />
        </div>
        {/* header */}
        {/* featured item */}
        <div className="featured">
            <div className="featured-card">
                <img src="https://dropin-bucket.mativecdn.com/cosmetics/br/cid_a_318_athena_commando_m_kittywarrior/icon.png" />
             
                <div className="featured-description">
                    <div className="featured-title">
                        <strong>Azuki</strong>
                        <small>rare</small>
                    </div>
                    <p>Wandering warrior destined to end the Whiskeria Wars.</p>
                    <p>Point : <strong>132</strong></p>
                    <Link to={`/Shop/b786e54e-fee4-4dd1-883e-05dda3a50186`} className="shop-item-name">
                        <button className="btn">More details</button>
                    </Link>
                </div>
            </div>
            <h1>This week's <br/>favourite</h1>
            <div className="dashed-circle"></div>
            <img src={shape2} alt="just a shape :D " className="shape2" />
        </div>
        {/* featured item */}
        {/* discover more */}
        <DiscoverMore />
        </>
    )
}

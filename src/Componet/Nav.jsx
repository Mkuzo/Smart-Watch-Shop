import { useNavigate } from "react-router-dom"
import me from '../assets/me.png'
import { useEffect, useState } from "react"
import logo from '../assets/logo.png'
import { useLocation } from "react-router-dom"
export default function Nav(){
    const navigate = useNavigate()
    const location = useLocation()
    const [showNav,setShowNav] = useState(false)
    const [activate,setActivate] = useState()
    function handleHome(){
        navigate('/')
    }
    function handleProduct(){
        navigate('/Product')
    }
    function handleContact(){
        navigate('/ContactUs')
    }
    function handleAbout(){
        navigate('/About')
    }
    function handleCart(){
        navigate('/Cart')
    }
    function change(){
        if(showNav === true){
            setShowNav(false)
        }else{
            setShowNav(true)
        }
    }
    useEffect(function(){
        const {pathname} = location
        setActivate(pathname)
    },[location])
    return(
        <div>
            <div className="navigation">
                <div className="nav">
                    <div className="nav-image">
                        <img src={logo} alt="" />
                    </div>
                    <ul>
                        <li onClick={handleHome} className={activate === '/' ? "active" : ""}>Home</li>
                        <li onClick={handleAbout} className={activate === '/About' ? "active" : ""}>About</li>
                        <li onClick={handleProduct} className={activate === '/Product' ? "active" : ""}>Product</li>
                        <li onClick={handleCart} className={activate === '/Cart' ? "active" : ""}>Cart</li>
                        <li onClick={handleContact} className={activate === '/ContactUs' ? "active" : ""}>Contact Us</li>
                        <img src={me} alt="" />
                    </ul>
                </div>
            </div>
            <div className="smaller-device">
                <div className="smaller-text">
                    <img src={logo} alt="" />
                </div>
                <div className="smaller-img">
                    <div className="icon">
                        {/* <p onClick={change}>Show</p> */}
                        <i className="fa fa-bars" aria-hidden="true" onClick={change}></i>
                            {showNav === true ?   
                                <div className="drop-down">
                                    <ul>
                                        
                                        <li onClick={handleHome}>Home</li>
                                        <li onClick={handleAbout}>About</li>
                                        <li onClick={handleProduct}>Product</li>
                                        <li onClick={handleCart}>Cart</li>
                                        <li onClick={handleContact}>Contact Us</li>
                                        {/* <img src={me} alt="" />     */}
                                    </ul>
                            </div>
                            :
                                ""
                            }
                        {/* </div> */}
                    </div>
                    <div className="icon-image">
                        <img src={me} alt="" /> 
                    </div>
                </div>
            </div>
        </div>
    )
}
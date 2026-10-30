import { useNavigate } from "react-router-dom"
import me from '../assets/me.png'
export default function Nav(){
    const navigate = useNavigate()
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
    return(
        <div>
            <div className="navigation">
                <div className="nav">
                    <h1>Timups</h1>
                    <ul>
                        <li onClick={handleHome}>Home</li>
                        <li onClick={handleAbout}>About</li>
                        <li onClick={handleProduct}>Product</li>
                        <li onClick={handleCart}>Cart</li>
                        <li onClick={handleContact}>Contact Us</li>
                        <img src={me} alt="" />
                    </ul>
                </div>
            </div>
        </div>
    )
}
import image2 from '../assets/image2.jpg'
import { useNavigate } from 'react-router-dom'
export default function Home(){
    const navigate = useNavigate()
    function handleContact(){
        navigate('/ContactUs')
    }
    return(
        <div>
            <div className="banner">
                <div className="card">
                    <div className="text">
                        <h1>Smart Watches</h1>
                        <p>Displays time, date, and alerts for calls, messages, emails, and app updates and Monitors heart rate, steps, sleep patterns, calories burned, and other wellness metrics.</p>
                        <button onClick={handleContact}>Contact Us</button>
                    </div>
                    <div className="image">
                        <img src={image2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
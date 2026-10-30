import image1 from '../assets/image1.jpg'
export default function About(){
    return(
        <div>
            <div className="about-container">
                <div className="about">
                    <div className="about-image">
                        <img src={image1} alt="" />
                    </div>
                    <div className="about-text">
                        <h1>About</h1>
                        <p>We make Smartwatches computers that mimic the functions of a traditional watch while adding advanced features. They can perform tasks like fitness tracking, notifications, music control, and even make calls. Smartwatches are more than just accessories; they serve as personal assistants, fitness coaches,</p>
                        <button>Read More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
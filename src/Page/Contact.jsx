import myImage from '../assets/me.png'
export default function Contact(){
    return(
        <div>
            <div className="contact-container">
                {/* <p>hello</p> */}
                <div className="contact">
                    <div className="contact-image">
                        <img src={myImage} alt="" />
                    </div>
                    <div className="contact-text">
                        <h2>Email: </h2>
                        <p><a href="">lohayvalentino@gmail.com</a></p>
                        <h2>Phone Number: </h2>
                        <p>+255 713 622 800</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
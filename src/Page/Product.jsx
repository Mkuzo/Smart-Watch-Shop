import image3 from '../assets/image3.jpg'
import image4 from '../assets/image4.jpg'
import image5 from '../assets/image5.jpg'
import image7 from '../assets/image7.jpg'
import image6 from '../assets/image6.jpg'
import image1 from '../assets/image1.jpg'
import { useContext } from 'react'
import { context } from '../App'
export default function Product(){
    const {store,setStore} = useContext(context)
    const data = [{
        id:1,
        image: image1,
        text: "Smart Watch",
        price: 300
    },{
        id:2,
        image: image3,
        text: "Smart Watch",
        price: 600
        },{
        id:3,
        image: image4,
        text: "Smart Watch",
        price: 700
    },{
        id:4,
        image: image5,
        text: "Smart Watch",
        price: 400
    },{
        id:5,
        image: image6,
        text: "Smart Watch",
        price: 500
    },{
        id:6,
        image: image7,
        text: "Smart Watch",
        price: 700
    }]
    function buy(e){
        // alert("hello")
        if(store.length > 0){
            store.map(function(res){
                if(res.id !== e.id){
                    setStore(function(res){
                        return(
                            [...res,e]
                        )
                    })
                }else{
                    alert("Allready Exits")
                }
            }) 
            console.log('cart',e)
        }else{
            setStore([e])
        }
    }
        console.log(store,'store')
    return(
        <div>
            <h1>Latest Watches</h1>
            <div className="wrapper">
                {data.map(function(res){
                    return(
                        <div className="card-container" key={res.id}>
                            <div className="image-container">
                                <img src={res.image} alt="" />
                            </div>
                            <div className="text-container">
                                <div className="p">
                                    <p>{res.text}</p>
                                    <p>${res.price}</p>
                                </div>
                                <button onClick={function(){
                                    buy(res)
                                }}>Buy</button>
                            </div>
                         </div> 
                    )   
                })}
            </div>
        </div>
    )
}
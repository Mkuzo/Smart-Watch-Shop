import { useContext, useEffect } from "react"
import { useState } from "react"
import { context } from "../App"
export default function Cart(){
    const {store,setStore} = useContext(context)
    const [total,setTotal] = useState()
    const [show,setShow] = useState([])
    function remove(e){
        if(store.length > 0){
            const item = store.filter(function(pre){
                return(
                    e.id !== pre.id
                )
            })
            setStore(item)
            controll()
        }else{
            localStorage.removeItem('storing')
            setShow([])
            alert("Empty")
            // controll()
        }
    }
    function add(){
        let sum = 0
        if(show.length > 0){
            show.map(function(res){
                sum += res.price
            })
            setTotal(sum)
        }else{
            setTotal(0)
        }
    }
    console.log(total ,'total')
    function controll(){
        const getting = JSON.parse(localStorage.getItem('storing'))
        console.log(getting, 'getting value')
        setShow(getting)
    }
    useEffect(function(){
        add()
    },[show])
    useEffect(function(){
        controll()
    },[])
    return(
        <div>
            <div className="wrapper">
                {show.map(function(res){
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
                                    remove(res)
                                }}>Remove</button>
                            </div>
                         </div> 
                    )   
                })}
            </div>
            <p className="p">Total: {total}</p>
        </div>
    )
}
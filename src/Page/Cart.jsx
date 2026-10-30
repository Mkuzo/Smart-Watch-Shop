import { useContext, useEffect } from "react"
import { useState } from "react"
import { context } from "../App"
export default function Cart(){
    const {store,setStore} = useContext(context)
    const [total,setTotal] = useState()
    function remove(e){
        if(store.length > 0){
            const item = store.filter(function(pre){
                return(
                    e.id !== pre.id
                )
            })
            setStore(item)
        }else{
            alert("Empty")
        }
    }
    function add(){
        let sum = 0
        if(store.length > 0){
            store.map(function(res){
                sum += res.price
            })
            setTotal(sum)
        }else{
            setTotal(0)
        }
    }
    console.log(total ,'total')
    useEffect(function(){
        add()
    },[store])
    return(
        <div>
            <div className="wrapper">
                {store.map(function(res){
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
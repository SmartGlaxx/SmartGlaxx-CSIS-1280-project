import "./style.css"
import {useRef} from 'react'
import { CellData } from "./cells"

export const CompClass = ()=>{
    const element = useRef()
    const showRefValue =()=>{
        console.log(element.current.getBoundingClientRect())
    }
    CellData.map((item) =>{
        console.log(item)
            return<div style={{color:"white"}}>
                ire
            </div>    
        // for(let i = 0; i<= 36; i++){
        //     return <div ref={element} onClick={showRefValue} className='cellBoard'>{item.background}srb</div>
        // }
        
    })
}
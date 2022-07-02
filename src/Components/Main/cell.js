import "./style.css"
import {useEffect, useState} from 'react' 
import { UseAppContext } from "../../context"


export const CellData = ({id})=>{
    const {options1Value1,setOptions1Value1, 
        token1XPos, token1YPos, token2XPos, token2YPos, 
        token3XPos, token3YPos, token4XPos, token4YPos, 
       AToB, AToC, AToD, BToC, BToD, CToD, moveXBy1, moveYBy1, 
       checkDistanceAToB, checkDistanceAToC, checkDistanceAToD, 
       checkDistanceBToC, checkDistanceBToD, checkDistanceCToD,
       start} = UseAppContext()
    const [elementXData, setElementXData] = useState(0);
    const [elementYData, setElementYData] = useState(0);
    const [elementBackground, setElementBackground] = useState("none")

    const checkDist=(elementId)=>{
        const item = document.querySelector(`#${elementId}`);
        if(item != null){
            const itemXBoundingClient = item.getBoundingClientRect().x
            const itemYBoundingClient = item.getBoundingClientRect().y
            setElementXData(itemXBoundingClient)
            setElementYData(itemYBoundingClient)
        }
    }

    const calcDist = ()=>{
        const XfromA = Math.abs(token1XPos - elementXData)
        const YfromA = Math.abs(token1YPos - elementYData)
        const totalFromA = Math.sqrt(Math.pow(XfromA, 2) + Math.pow(YfromA, 2))
        const XfromB = Math.abs(token2XPos - elementXData)
        const YfromB = Math.abs(token2YPos - elementYData)
        const totalFromB = Math.sqrt(Math.pow(XfromB, 2) + Math.pow(YfromB, 2))
        const XfromC = Math.abs(token3XPos - elementXData)
        const YfromC = Math.abs(token3YPos - elementYData)
        const totalFromC = Math.sqrt(Math.pow(XfromC, 2) + Math.pow(YfromC, 2))
        const XfromD = Math.abs(token4XPos - elementXData)
        const YfromD = Math.abs(token4YPos - elementYData)
        const totalFromD = Math.sqrt(Math.pow(XfromD, 2) + Math.pow(YfromD, 2))

        const totalValue = Math.min(totalFromA, totalFromB, totalFromC, totalFromD)
        switch(totalValue){
            case totalFromA:
                setElementBackground("white")
                break
            case totalFromB:
                setElementBackground("yellow")
                break
            case totalFromC:
                setElementBackground("blue")
                break
            case totalFromD:
                setElementBackground("red")
                break
        }
    }
    useEffect(()=>{
        calcDist()
        checkDist((`elem-${id}`))
    }, [AToB, AToC, AToD, BToC, BToD, CToD])
    
    return <div id={`elem-${id}`} 
        style={{background: start && elementBackground, color:"transparent", opacity:"0.07"}}
        > 
        -     
    </div>
}

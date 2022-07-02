import { useEffect, useState } from "react";
import "./style.css"
import { CellList } from "./cells";
import { CellData } from "./cell";
import { UseAppContext } from "../../context";

const CellBlock = ()=>{
    const {checkDistanceAToB, checkDistanceAToC, checkDistanceAToD, checkDistanceBToC, 
        checkDistanceBToD, checkDistanceCToD,
        moveXBy1,  setMoveXBy1, setMoveYBy1, setMoveXBy2, setMoveYBy2, 
        setMoveXBy3, setMoveYBy3, setMoveXBy4, setMoveYBy4,
        setSideBoard} = UseAppContext()

  

    const showRefValue =(value)=>{
        checkDistanceAToB()
        checkDistanceAToC()
        checkDistanceAToD()
        checkDistanceBToC()
        checkDistanceBToD()
        checkDistanceCToD()
        
        const selected = document.querySelector(`#${value}`);
        
        setMoveXBy1(selected)
        setMoveYBy1(selected)

        setMoveXBy2(selected)
        setMoveYBy2(selected)

        setMoveXBy3(selected)
        setMoveYBy3(selected)

        setMoveXBy4(selected)
        setMoveYBy4(selected)

        setSideBoard(false)
           
}

  
    return <>
     <div className="background">
        CSIS-1280
    </div>
    <div className='cellBoard'>
    {
        CellList.map((item,i) =>{
            return <div key={i + 1} id= {`word-${i}`} className='cellBoard-inner'
            style={{background: item.background}}
            onClick={()=>showRefValue(`word-${i}`)}
            ><CellData id={`word-${i}`}/>
            </div>
        })
    }
    
    </div>
    </>
}

export default CellBlock
import { useEffect, useState } from "react";
import "./style.css"
import { CellData } from "./cells";
import { UseAppContext } from "../../context";

const CellBlock = ()=>{
    const {checkDistanceAToB, checkDistanceAToC, checkDistanceAToD, checkDistanceBToC, 
        token1XPos, token1YPos, token2XPos, token2YPos, token3XPos, token3YPos, token4XPos, token4YPos,
        checkDistanceBToD, checkDistanceCToD,
        moveXBy1,  setMoveXBy1, setMoveYBy1, setMoveXBy2, setMoveYBy2, 
        setMoveXBy3, setMoveYBy3, setMoveXBy4, setMoveYBy4,
        setSideBoard, started2, started4, start} = UseAppContext()

  

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
        CellData.map((item,i) =>{
            return <div key={i + 1} id= {`word-${i}`} className='cellBoard-inner'
            style={{background: item.background}}
            onClick={()=>showRefValue(`word-${i}`)}
            >
                {start &&<>
                {/* intersection A and B */}
                {
                    (Math.abs(token1XPos - document.querySelector(`#word-${i}`).getBoundingClientRect().x) < 200 &&
                    Math.abs(token1YPos - document.querySelector(`#word-${i}`).getBoundingClientRect().y) < 200) 
                    &&
                    (Math.abs(token2XPos - document.querySelector(`#word-${i}`).getBoundingClientRect().x) < 200 &&
                    Math.abs(token2YPos - document.querySelector(`#word-${i}`).getBoundingClientRect().y) < 200 )
                    &&  <div style={{background:"rgba(34,34,34,0.9)"}} className="innerCells"></div>
                }
                {/* intersection A and C */}
                {
                    (Math.abs(token1XPos - document.querySelector(`#word-${i}`).getBoundingClientRect().x) < 200 &&
                    Math.abs(token1YPos - document.querySelector(`#word-${i}`).getBoundingClientRect().y) < 200) 
                    &&
                    (Math.abs(token3XPos - document.querySelector(`#word-${i}`).getBoundingClientRect().x) < 200 &&
                    Math.abs(token3YPos - document.querySelector(`#word-${i}`).getBoundingClientRect().y) < 200 )
                    &&  <div style={{background:"rgba(34,34,34,0.9)"}} className="innerCells"></div>
                }
                {/* intersection A and D */}
                {
                    (Math.abs(token1XPos - document.querySelector(`#word-${i}`).getBoundingClientRect().x) < 200 &&
                    Math.abs(token1YPos - document.querySelector(`#word-${i}`).getBoundingClientRect().y) < 200) 
                    &&
                    (Math.abs(token4XPos - document.querySelector(`#word-${i}`).getBoundingClientRect().x) < 200 &&
                    Math.abs(token4YPos - document.querySelector(`#word-${i}`).getBoundingClientRect().y) < 200 )
                    &&  <div style={{background:"rgba(34,34,34,0.9)"}} className="innerCells"></div>
                }

                {/* intersection B and C */}
                {
                    (Math.abs(token2XPos - document.querySelector(`#word-${i}`).getBoundingClientRect().x) < 200 &&
                    Math.abs(token2YPos - document.querySelector(`#word-${i}`).getBoundingClientRect().y) < 200) 
                    &&
                    (Math.abs(token3XPos - document.querySelector(`#word-${i}`).getBoundingClientRect().x) < 200 &&
                    Math.abs(token3YPos - document.querySelector(`#word-${i}`).getBoundingClientRect().y) < 200 )
                    &&  <div style={{background:"rgba(34,34,34,0.9)"}} className="innerCells"></div>
                }
                {/* intersection B and D */}
                {
                    (Math.abs(token2XPos - document.querySelector(`#word-${i}`).getBoundingClientRect().x) < 200 &&
                    Math.abs(token2YPos - document.querySelector(`#word-${i}`).getBoundingClientRect().y) < 200) 
                    &&
                    (Math.abs(token4XPos - document.querySelector(`#word-${i}`).getBoundingClientRect().x) < 200 &&
                    Math.abs(token4YPos - document.querySelector(`#word-${i}`).getBoundingClientRect().y) < 200 )
                    &&  <div style={{background:"rgba(34,34,34,0.9)"}} className="innerCells"></div>
                }
                {/* intersection C and D */}
                {
                    (Math.abs(token3XPos - document.querySelector(`#word-${i}`).getBoundingClientRect().x) < 200 &&
                    Math.abs(token3YPos - document.querySelector(`#word-${i}`).getBoundingClientRect().y) < 200) 
                    &&
                    (Math.abs(token4XPos - document.querySelector(`#word-${i}`).getBoundingClientRect().x) < 200 &&
                    Math.abs(token4YPos - document.querySelector(`#word-${i}`).getBoundingClientRect().y) < 200 )
                    &&  <div style={{background:"rgba(34,34,34,0.9)"}} className="innerCells"></div>
                }



                {/* Region A */}
                {
                    Math.abs(token1XPos - document.querySelector(`#word-${i}`).getBoundingClientRect().x) < 200 &&
                    Math.abs(token1YPos - document.querySelector(`#word-${i}`).getBoundingClientRect().y) < 200 
                    && <div style={{background:"rgba(100,100,100,0.5)"}} className="innerCells"></div>
                }
                {/* Region B */}
                {
                    Math.abs(token2XPos - document.querySelector(`#word-${i}`).getBoundingClientRect().x) < 200 &&
                    Math.abs(token2YPos - document.querySelector(`#word-${i}`).getBoundingClientRect().y) < 200 
                    &&  <div style={{background:"rgba(100,100,0,0.5)"}} className="innerCells"></div> 
                } 
                {/* Region C */}
                {
                    Math.abs(token3XPos - document.querySelector(`#word-${i}`).getBoundingClientRect().x) < 200 &&
                    Math.abs(token3YPos - document.querySelector(`#word-${i}`).getBoundingClientRect().y) < 200 
                    && <div style={{background:"rgba(0,0,200,0.5)"}} className="innerCells"></div>
                }
                {/* Region D */}
                {
                    Math.abs(token4XPos - document.querySelector(`#word-${i}`).getBoundingClientRect().x) < 200 &&
                    Math.abs(token4YPos - document.querySelector(`#word-${i}`).getBoundingClientRect().y) < 200 
                    &&  <div style={{background:"rgba(100,0,0,0.5)"}} className="innerCells"></div>
                }
                </>}
            </div>
        })
    }
    
    </div>
    </>
}

export default CellBlock
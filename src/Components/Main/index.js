import "./style.css"
import { CellData } from "./cells"
import {useEffect, useRef, useState} from 'react' 
import Token1 from '../../assets/token_1.png'
import Token2 from '../../assets/token_2.png'

const visible = {
    display:"block"
}
const Main = ()=>{
    const element = useRef()
    const [moveXBy, setMoveXBy] = useState(0);
    const [moveYBy, setMoveYBy] = useState(0);
    const [objMoveXBy, setObjMoveXBy] = useState(0);
    const [objMoveYBy, setObjMoveYBy] = useState(0);
    const [options1Value1, setOptions1Value1] = useState(false)
    const [boxOptionsValue, setBoxOptionsValue] = useState(false)

    const[moveAction, setMoveAction] = useState(false)
    const[disableBtn, setDisableBtn] = useState(false)
    const [moveToken, setMoveToken] = useState(false)
    const [noDrop, setNoDrop] = useState(false)
    const setDropAction=(value)=>{
        setDisableBtn(false)
        setNoDrop(true)
        setObjMoveXBy(moveXBy)
        setObjMoveYBy(moveYBy)

        setMoveToken(true) // object to be dropped
    }

    const setMotionObject = (objectID)=>{
        setMoveAction(true)
        setNoDrop(false)
        // setMoveParam(true)
        setDisableBtn(true)
        const moveObjectElement = document.querySelector(`#${objectID}`);
        // moveObjectElement
    }
    const setCancelAction =()=>{
        setOptions1Value1(false)
        
    }
    const showRefValue =(i)=>{
        const selected = document.querySelector(`#${i}`);
        const tokenValue = document.querySelector("#token2");
        
        // console.log(selected.getBoundingClientRect().x,"selected")
        setMoveXBy(Math.round(selected.getBoundingClientRect().x))
        setMoveYBy(Math.round(selected.getBoundingClientRect().y))
        // tokenValue.getBoundingClientRect().x = selected.getBoundingClientRect().x
        // console.log(tokenValue.getBoundingClientRect().x,"tokenValue")
        const boardOptions = document.querySelector("#board-options").classList
        
        // boardOptions.add("myStyle");
        boardOptions.add(visible)
        // document.querySelector("#token2").x = moveYBy
        
        setBoxOptionsValue(true) // set option funtion for box selected
    }
    const showOptions1 =()=>{
        setOptions1Value1(!options1Value1)
    }
    // useEffect(()=>{
    //     console.log(moveXBy, "moveXBy or moveYBy")
    // },[moveXBy, moveYBy])

    return<section className='cellBoard'>
        {
            CellData.map((item,i) =>{
                
                for(let i = 0; i<= 36; i++){
                    return <><div id= {item.idValue} style={{background: item.background}} 
                    onClick={()=>showRefValue(item.idValue)}
                    
                    >
                        </div>
                        {/* click to select an option */}
                        <div className="token1" id="token1" onClick={showOptions1}
                          style={!moveToken || !moveAction ? null : {transform :`translate(${objMoveXBy}px, ${objMoveYBy}px)`} }
                        // style={!moveAction && {display:"block"} }
                         
                        > 
                            
                            <img src={Token1} id="token1" alt="token1" className="token-pic-1"
                            // style={{transform:`translate(${moveXBy}px, ${moveYBy}px)`}}
                            
                            />
                            {/* when clicked show this list of object 1 obtions */}
                        { options1Value1 && <div className="select-option" > 
                            <button onClick={()=>setMotionObject("token1")} disabled={disableBtn}>Move</button>
                            <button onClick={()=>setCancelAction(true)} >Cancel</button>
                        </div>
                        }
                        </div>
                        {/* <img src={Token2} id="token2" alt="token2" className="token2"
                        style={{transform:`translate(-${moveXBy}px, ${moveYBy}px)`}}
                        /> */}
                        </>
                }
                
            })
        }
    {<div className="board-options" 
    // show box options nesr cursor when moveAction id true
    style={moveAction && !noDrop ? {transform:`translate(${moveXBy}px, ${moveYBy}px)`, zIndex:"10"} : 
    {transform :`translate(${moveXBy}px, ${moveYBy}px)`, zIndex:"-10"}}  >

        <button onClick={()=>setDropAction(true)} disabled={!moveAction}>Drop</button>
        
    </div>}
    </section>
}

export default Main
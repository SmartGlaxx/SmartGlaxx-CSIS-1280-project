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
    const [moveXBy1, setMoveXBy1] = useState(0);
    const [moveYBy1, setMoveYBy1] = useState(0);
    const [moveXBy2, setMoveXBy2] = useState(0);
    const [moveYBy2, setMoveYBy2] = useState(0);
    const [objMoveXBy1, setObjMoveXBy1] = useState(0);
    const [objMoveYBy1, setObjMoveYBy1] = useState(0);
    const [objMoveXBy2, setObjMoveXBy2] = useState(0);
    const [objMoveYBy2, setObjMoveYBy2] = useState(0);
    const [options1Value1, setOptions1Value1] = useState(false)
    const [options1Value2, setOptions1Value2] = useState(false)
    const [boxOptionsValue1, setBoxOptionsValue1] = useState(false)
    const [boxOptionsValue2, setBoxOptionsValue2] = useState(false)
    const[moveAction1, setMoveAction1] = useState(false)
    const[moveAction2, setMoveAction2] = useState(false)
    const[disableBtn1, setDisableBtn1] = useState(false)
    const[disableBtn2, setDisableBtn2] = useState(false)
    const [moveToken1, setMoveToken1] = useState(false)
    const [moveToken2, setMoveToken2] = useState(false)
    const [noDrop1, setNoDrop1] = useState(false)
    const [noDrop2, setNoDrop2] = useState(false)
    const [started, setStarted] = useState(false)
    const setDropAction1=(value)=>{
        setDisableBtn1(false)
        setNoDrop1(true)
        setObjMoveXBy1(moveXBy1)
        setObjMoveYBy1(moveYBy1)

        setMoveToken1(true) // object to be dropped
    }
    const setDropAction2=(value)=>{
        setDisableBtn2(false)
        setNoDrop2(true)
        setObjMoveXBy2(moveXBy2)
        setObjMoveYBy2(moveYBy2)

        setMoveToken2(true) // object to be dropped
        setStarted(true)
        document.querySelector("#token2").classList.add("newClass")
    }
    const setMotionObject1 = (objectID)=>{
        setMoveAction1(true)
        setNoDrop1(false)
        setDisableBtn1(true)
        // const moveObjectElement = document.querySelector(`#${objectID}`);
    }
    const setMotionObject2 = (objectID)=>{
        setMoveAction2(true)
        setNoDrop2(false)
        setDisableBtn2(true)
        // const moveObjectElement = document.querySelector(`#${objectID}`);
    }
    const setCancelAction1 =()=>{
        setOptions1Value1(false)   
    }
    const setCancelAction2 =()=>{
        setOptions1Value2(false)   
    }
    const showRefValue =(i)=>{
        const selected1 = document.querySelector(`#${i}`);
        // const tokenValue = document.querySelector("#token2");
        setMoveXBy1(Math.round(selected1.getBoundingClientRect().x))
        setMoveYBy1(Math.round(selected1.getBoundingClientRect().y))
        // const boardOptions1 = document.querySelector("#board-options").classList
        // boardOptions1.add(visible)
        // setBoxOptionsValue1(true) // set option funtion for box selected

        // const selected2 = document.querySelector(`#${i}`);
        // // const tokenValue = document.querySelector("#token2");
        setMoveXBy2(Math.round(selected1.getBoundingClientRect().x))
        setMoveYBy2(Math.round(selected1.getBoundingClientRect().y))
        // const boardOptions1 = document.querySelector("#board-options").classList
        // boardOptions1.add(visible)
        setBoxOptionsValue2(true) // set option funtion for box selected

        console.log(selected1, "selected1")
        // console.log(selected2, "selected2")
    }
    // console.log(moveXBy2, "moveXBy2")
    // console.log(moveXBy1, "moveXBy1")
    // const showRefValue2 =(i)=>{
    //     const selected2 = document.querySelector(`#${i}`);
    //     // const tokenValue = document.querySelector("#token2");
    //     setMoveXBy(Math.round(selected2.getBoundingClientRect().x))
    //     setMoveYBy(Math.round(selected2.getBoundingClientRect().y))
    //     const boardOptions2 = document.querySelector("#board-options").classList
    //     boardOptions2.add(visible)
    //     setBoxOptionsValue2(true) // set option funtion for box selected
    // }
    const showOptions1 =()=>{
        setOptions1Value1(!options1Value1)
    }
    const showOptions2 =()=>{
        setOptions1Value2(!options1Value2)
    }
   

    return<section className='cellBoard'>
        {
            CellData.map((item,i) =>{
                
                for(let i = 0; i<= 36; i++){
                    return <><div id= {item.idValue} style={{background: item.background}} 
                    onClick={()=>showRefValue(item.idValue)}
                    
                    >
                        </div>
                        {/* start token 1 */}
                        {/* click to select an option */}
                        <div className="token1" id="token1" onClick={showOptions1}
                          style={!moveToken1 || !moveAction1 ? null : {transform :`translate(${objMoveXBy1}px, ${objMoveYBy1}px)`} }
                        // style={!moveAction && {display:"block"} }
                         
                        > 
                            
                            <img src={Token1} alt="token1" className="token-pic-1"
                            // style={{transform:`translate(${moveXBy}px, ${moveYBy}px)`}}
                            
                            />
                            {/* when clicked show this list of object 1 obtions */}
                        { options1Value1 && <div className="select-option" > 
                            <button onClick={()=>setMotionObject1("token1")} disabled={disableBtn1}>Move</button>
                            <button onClick={()=>setCancelAction1(true)} >Cancel</button>
                        </div>
                        }
                        </div>
                        {/* end token 1 */}
                        {/* start token 2 */}

                        <div className={!started ? `token2 defaultClass` : `token2 rightClass`} id="token2" onClick={showOptions2}
                          style={!moveToken2 || !moveAction2 ? null : {transform :`translate(${objMoveXBy2}px, ${objMoveYBy2}px)`} }
                        // style={!moveAction && {display:"block"} }
                         
                        > 
                            <img src={Token2} id="token2" alt="token2" className="token-pic-2"
                            // style={{transform:`translate(${moveXBy}px, ${moveYBy}px)`}}
                            
                            />
                            {/* when clicked show this list of object 1 obtions */}
                        { options1Value2 && <div className="select-option" > 
                            <button onClick={()=>setMotionObject2("token2")} disabled={disableBtn2}>Move</button>
                            <button onClick={()=>setCancelAction2(true)} >Cancel</button>
                        </div>
                        }
                        </div>

                        {/* end token 2 */}
                        </>
                }
                
            })
        }
        
    {<div className="board-options1" 
    // show box options nesr cursor when moveAction id true
    style={moveAction1 && !noDrop1 ? {transform:`translate(${moveXBy1}px, ${moveYBy1}px)`, zIndex:"10"} : 
    {transform :`translate(${moveXBy1}px, ${moveYBy1}px)`, zIndex:"-10"}}  >

        <button onClick={()=>setDropAction1(true)} disabled={!moveAction1}>Drop</button>
        
    </div>}
    {<div className="board-options2" 
    // show box options nesr cursor when moveAction id true
    style={moveAction2 && !noDrop2 ? {transform:`translate(${moveXBy2}px, ${moveYBy2}px)`, zIndex:"10"} : 
    {transform :`translate(${moveXBy2}px, ${moveYBy2}px)`, zIndex:"-10"}} 
    >

        <button onClick={()=>setDropAction2(true)} disabled={!moveAction2}>Drop</button>
        
    </div>}
    </section>
}

export default Main
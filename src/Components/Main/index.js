import "./style.css"
import { CellData } from "./cells"
import {useEffect, useRef, useState} from 'react' 
import Token1 from '../../assets/token_1.png'
import Token2 from '../../assets/token_2.png'
import Token3 from '../../assets/token_3.png'
import Token4 from '../../assets/token_4.png'
import { UseAppContext } from "../../context"

const visible = {
    display:"block"
}
const Main = ()=>{
    const element = useRef()
    const {background} = UseAppContext()
    const [moveXBy1, setMoveXBy1] = useState(0);
    const [moveYBy1, setMoveYBy1] = useState(0);
    const [moveXBy2, setMoveXBy2] = useState(0);
    const [moveYBy2, setMoveYBy2] = useState(0);
    const [moveXBy3, setMoveXBy3] = useState(0);
    const [moveYBy3, setMoveYBy3] = useState(0);
    const [moveXBy4, setMoveXBy4] = useState(0);
    const [moveYBy4, setMoveYBy4] = useState(0);
    const [objMoveXBy1, setObjMoveXBy1] = useState(0);
    const [objMoveYBy1, setObjMoveYBy1] = useState(0);
    const [objMoveXBy2, setObjMoveXBy2] = useState(0);
    const [objMoveYBy2, setObjMoveYBy2] = useState(0);
    const [objMoveXBy3, setObjMoveXBy3] = useState(0);
    const [objMoveYBy3, setObjMoveYBy3] = useState(0);
    const [objMoveXBy4, setObjMoveXBy4] = useState(0);
    const [objMoveYBy4, setObjMoveYBy4] = useState(0);
    const [options1Value1, setOptions1Value1] = useState(false)
    const [options1Value2, setOptions1Value2] = useState(false)
    const [options1Value3, setOptions1Value3] = useState(false)
    const [options1Value4, setOptions1Value4] = useState(false)
    // const [boxOptionsValue1, setBoxOptionsValue1] = useState(false)
    // const [boxOptionsValue2, setBoxOptionsValue2] = useState(false)
    // const [boxOptionsValue3, setBoxOptionsValue3] = useState(false)
    const[moveAction1, setMoveAction1] = useState(false)
    const[moveAction2, setMoveAction2] = useState(false)
    const[moveAction3, setMoveAction3] = useState(false)
    const[moveAction4, setMoveAction4] = useState(false)
    const[disableBtn1, setDisableBtn1] = useState(false)
    const[disableBtn2, setDisableBtn2] = useState(false)
    const[disableBtn3, setDisableBtn3] = useState(false)
    const[disableBtn4, setDisableBtn4] = useState(false)
    const [moveToken1, setMoveToken1] = useState(false)
    const [moveToken2, setMoveToken2] = useState(false)
    const [moveToken3, setMoveToken3] = useState(false)
    const [moveToken4, setMoveToken4] = useState(false)
    const [noDrop1, setNoDrop1] = useState(false)
    const [noDrop2, setNoDrop2] = useState(false)
    const [noDrop3, setNoDrop3] = useState(false)
    const [noDrop4, setNoDrop4] = useState(false)
    const [started2, setStarted2] = useState(false)
    const [started3, setStarted3] = useState(false)
    const [started4, setStarted4] = useState(false)
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
        setStarted2(true)
    }
    const setDropAction3=(value)=>{
        setDisableBtn3(false)
        setNoDrop3(true)
        setObjMoveXBy3(moveXBy2)
        setObjMoveYBy3(moveYBy2)
        setMoveToken3(true) // object to be dropped
        setStarted3(true)
    }
    const setDropAction4=(value)=>{
        setDisableBtn4(false)
        setNoDrop4(true)
        setObjMoveXBy4(moveXBy2)
        setObjMoveYBy4(moveYBy2)
        setMoveToken4(true) // object to be dropped
        setStarted4(true)
    }
    const setMotionObject1 = (objectID)=>{
        setMoveAction1(true)
        setNoDrop1(false)
        setDisableBtn1(true)
    }
    const setMotionObject2 = (objectID)=>{
        setMoveAction2(true)
        setNoDrop2(false)
        setDisableBtn2(true)
    }
    const setMotionObject3 = (objectID)=>{
        setMoveAction3(true)
        setNoDrop3(false)
        setDisableBtn3(true)
    }
    const setMotionObject4 = (objectID)=>{
        setMoveAction4(true)
        setNoDrop4(false)
        setDisableBtn4(true)
    }
    const setCancelAction1 =()=>{
        setOptions1Value1(false)   
    }
    const setCancelAction2 =()=>{
        setOptions1Value2(false)   
    }
    const setCancelAction3 =()=>{
        setOptions1Value3(false)   
    }
    const setCancelAction4 =()=>{
        setOptions1Value4(false)   
    }
    const showRefValue =(i)=>{
        const selected = document.querySelector(`#${i}`);
        
        setMoveXBy1(Math.round(selected.getBoundingClientRect().x))
        setMoveYBy1(Math.round(selected.getBoundingClientRect().y))
       
        setMoveXBy2(Math.round(selected.getBoundingClientRect().x))
        setMoveYBy2(Math.round(selected.getBoundingClientRect().y))

        setMoveXBy3(Math.round(selected.getBoundingClientRect().x))
        setMoveYBy3(Math.round(selected.getBoundingClientRect().y))

        setMoveXBy4(Math.round(selected.getBoundingClientRect().x))
        setMoveYBy4(Math.round(selected.getBoundingClientRect().y))
    }

    const showOptions1 =()=>{
        setOptions1Value1(!options1Value1)
    }
    const showOptions2 =()=>{
        setOptions1Value2(!options1Value2)
    }
    const showOptions3 =()=>{
        setOptions1Value3(!options1Value3)
    }
    const showOptions4 =()=>{
        setOptions1Value4(!options1Value4)
    }
   
console.log(background)
    return<section className='cellBoard'>
        {
            CellData.map((item,i) =>{
                
                for(let i = 0; i<= 36; i++){
                    return <><div id= {item.idValue} style={{background: "#ddd"}} 
                    onClick={()=>showRefValue(item.idValue)}
                    
                    >
                        </div>
                        {/* start token 1 */}
                        {/* click to select an option */}
                        <div className="token1" id="token1" onClick={showOptions1}
                          style={!moveToken1 || !moveAction1 ? null : {transform :`translate(${objMoveXBy1}px, ${objMoveYBy1}px)`}}> 
                            <img src={Token1} alt="token1" className="token-pic-1"/>
                            {/* when clicked show this list of object 1 obtions */}
                        { options1Value1 && <div className="select-option" > 
                            <button onClick={()=>setMotionObject1("token1")} disabled={disableBtn1} className="move-btn">Move</button>
                            <button onClick={()=>setCancelAction1(true)} className="cancel-btn">Cancel</button>
                        </div>
                        }
                        </div>
                        {/* end token 1 */}
                        {/* start token 2 */}
                        <div className={!started2 ? `token2 defaultClass2` : `token2`} id="token2" onClick={showOptions2}
                          style={!moveToken2 || !moveAction2 ? null : {transform :`translate(${objMoveXBy2}px, ${objMoveYBy2}px)`}}> 
                            <img src={Token2} id="token2" alt="token2" className="token-pic-2"/>
                            {/* when clicked show this list of object 1 obtions */}
                        { options1Value2 && <div className="select-option" > 
                            <button onClick={()=>setMotionObject2("token2")} disabled={disableBtn2} className="move-btn">Move</button>
                            <button onClick={()=>setCancelAction2(true)} className="cancel-btn">Cancel</button>
                        </div>
                        }
                        </div>
                        {/* end token 2 */}
                        {/* start token 3 */}
                        <div className={!started3 ? `token3 defaultClass3` : `token3`} id="token3" onClick={showOptions3}
                          style={!moveToken3 || !moveAction3 ? null : {transform :`translate(${objMoveXBy3}px, ${objMoveYBy3}px)`}}> 
                            <img src={Token3} id="token3" alt="token3" className="token-pic-3"/>
                            {/* when clicked show this list of object 1 obtions */}
                        { options1Value3 && <div className="select-option" > 
                            <button onClick={()=>setMotionObject3("token3")} disabled={disableBtn3} className="move-btn">Move</button>
                            <button onClick={()=>setCancelAction3(true)}  className="cancel-btn">Cancel</button>
                        </div>
                        }
                        </div>
                        {/* end token 3 */}
                        {/* start token 4 */}
                        <div className={!started4 ? `token4 defaultClass4` : `token4`} id="token4" onClick={showOptions4}
                          style={!moveToken4 || !moveAction4 ? null : {transform :`translate(${objMoveXBy4}px, ${objMoveYBy4}px)`}}> 
                            <img src={Token4} id="token4" alt="token4" className="token-pic-4"/>
                            {/* when clicked show this list of object 1 obtions */}
                        { options1Value4 && <div className="select-option" > 
                            <button onClick={()=>setMotionObject4("token4")} disabled={disableBtn4} className="move-btn">Move</button>
                            <button onClick={()=>setCancelAction4(true)} className="cancel-btn">Cancel</button>
                        </div>
                        }
                        </div>
                        {/* end token 4 */}
                        </>
                }
                
            })
        }
        
    {<div className="board-options1" 
    // show box options nesr cursor when moveAction id true
    style={moveAction1 && !noDrop1 ? {transform:`translate(${moveXBy1}px, ${moveYBy1}px)`, zIndex:"10"} : 
    {transform :`translate(${moveXBy1}px, ${moveYBy1}px)`, zIndex:"-10"}}  >
        <button onClick={()=>setDropAction1(true)} disabled={!moveAction1} className="drop-btn">Drop</button>
    </div>}
    {<div className="board-options2" 
    // show box options nesr cursor when moveAction id true
    style={moveAction2 && !noDrop2 ? {transform:`translate(${moveXBy2}px, ${moveYBy2}px)`, zIndex:"10"} : 
    {transform :`translate(${moveXBy2}px, ${moveYBy2}px)`, zIndex:"-10"}} 
    >
        <button onClick={()=>setDropAction2(true)} disabled={!moveAction2} className="drop-btn">Drop</button> 
    </div>}
    {<div className="board-options3" 
    // show box options nesr cursor when moveAction id true
    style={moveAction3 && !noDrop3 ? {transform:`translate(${moveXBy3}px, ${moveYBy3}px)`, zIndex:"10"} : 
    {transform :`translate(${moveXBy3}px, ${moveYBy3}px)`, zIndex:"-10"}} 
    >
        <button onClick={()=>setDropAction3(true)} disabled={!moveAction3} className="drop-btn">Drop</button> 
    </div>}
    {<div className="board-options4" 
    // show box options nesr cursor when moveAction id true
    style={moveAction4 && !noDrop4 ? {transform:`translate(${moveXBy4}px, ${moveYBy4}px)`, zIndex:"10"} : 
    {transform :`translate(${moveXBy4}px, ${moveYBy4}px)`, zIndex:"-10"}} 
    >
        <button onClick={()=>setDropAction4(true)} disabled={!moveAction4} className="drop-btn">Drop</button> 
    </div>}
    <div className="sidebar">
        <div className="sidebar-text">Item_Distance_Measure</div>
        <input type="color" id="favcolor" name="favcolor" value="#ff0000"/>
    </div>
    </section>
}

export default Main
import { UseAppContext } from "../../context"
const SideBar = ()=>{
    const {changeColor} = UseAppContext()
    return <div className="sidebar">
        <div className="sidebar-text">Item_Distance_Measure</div>
        <input type="color" id="favcolor" name="favcolor" value={background} onChange={changeColor}/>
    </div>
}

export default SideBar
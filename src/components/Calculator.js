import react,{useState} from "react"
import Button from "./Button"
import "../css/Button.css"

import btns from "../misc/buttons.json"

function Calculator(){
    const [current,setCurrent]=useState("")
    const [leftHand,setLeftHand]=useState("")   ///right hand operand will be the current
    const [operator,setOperator]=useState("")

    function handleClick(e){
        e.target.value === "=" ? evaluate() : updateCurrent(e.target)
    }
    function updateCurrent(target){

        if(target.name==="operator"){
            if(current!=="" && leftHand===""){
                setOperator(target.value)
                setLeftHand(current)
                setCurrent("")
            }
            else if(current==="" && leftHand!==""){
                setOperator(target.value)
            }
            else if(operator!==""){
                console.info("SECOND OPERAND VIOLATION")
            }
        }
        else if(target.name==="number"){
            setCurrent((prev)=>prev+target.value)
        }
    }
    function evaluate(){
        switch(operator){
            case "+":{
                updateResult(parseFloat(leftHand)+parseFloat(current)); 
            }break;
            case "-":{
                updateResult(parseFloat(leftHand)-parseFloat(current));
            }break;
            case "*":{
                updateResult(parseFloat(leftHand)*parseFloat(current));
            }break;
            case "/":{
                updateResult(parseFloat(leftHand)/parseFloat(current));
            }break;
        }
    }
    function updateResult(result){
        setLeftHand(result)
        setOperator("")
        setCurrent("")
    }
    function loadButtons(){
        const buttons=btns.map((attribs)=>{
            return <Button handleClick={handleClick} attribs={attribs} key={attribs.key}></Button>
        })
        return buttons
    }
    return(
        <div>
            
            <p>Current: {leftHand+operator+current}</p>
            <div className="Calculator">
                {
                    loadButtons()
                }
            </div>
            
        </div>
    )
}
export default Calculator
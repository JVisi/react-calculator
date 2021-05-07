import react from "react"

function Button(props){
    console.log(props)
    return(
        <div className={props.attribs.sign==="=" ? "longTile" : ""}>
            <button  className={props.attribs.name} name={props.attribs.name} value={props.attribs.sign} onClick={(e)=>props.handleClick(e)}>{props.attribs.sign}</button>
        </div>
    )
}

export default Button
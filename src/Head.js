import "./Head.css"
let Head=(props)=>{
    let data=props.data
    return(
        <div className="headimage">
            <div><img src={data.img}/></div>
        </div>

    )
}
export default Head;
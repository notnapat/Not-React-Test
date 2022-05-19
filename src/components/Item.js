import './Item.css'
const Item =()=>{
    const name = "พักโรงแรม"
    const amount = 500


    return(
        <li className="item">{name}<span>-{amount}</span></li>
        
    )
    // return(
    //     <li>พักโรงแรม <span>-500</span></li>
    // )
}

export default Item
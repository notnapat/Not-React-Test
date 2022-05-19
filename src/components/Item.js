import './Item.css'

//Type 3 props
const Item =(/*T4 props3*/{title,amount})=>{
    return(
        <li className="item">{/*T4 props4*/title}<span>-{amount}</span></li>
        
    )

// //Type 3 props
// const Item =(/*T3 props3*/props)=>{
//     /*T3 props4*/ const {title,amount} = props
//     return(
//         <li className="item">{/*T3 props5*/title}<span>-{amount}</span></li>
        
//     )

// Type 1 ,Type2  props
// const Item =(/*T.1props2   ,    T2 props3*/props)=>{
//     return(
//         <li className="item">{/*T1.props3  , T2 props4*/props.title}<span>-{props.amount}</span></li>
        
//     )


    // const name = "พักโรงแรม"
    // const amount = 500

// const Item =()=>{
    // return(
    //     <li className="item">{name}<span>-{amount}</span></li>
        
    // )
    // return(
    //     <li>พักโรงแรม <span>-500</span></li>
    // )
}

export default Item
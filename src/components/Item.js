import './Item.css'
import PropTypes from 'prop-types'

// Css +expense , -income
const Item =(props)=>{
    const {title,amount} = props
    const status =amount <0 ? "expense":"income"  // Css + -  1 ถ้าน้อยกว่า0 ให้ จริง ถ้ามากกว่า 0 ให้ผิด
    const symbol = amount<0 ? "-":"+"  // Css + -  2 ถ้าน้อยกว่า0 ให้ - ถ้ามากกว่า 0 ให้ +
    return(
        <li className={status}>{title}<span>{symbol}{Math.abs(amount)}</span></li> // Css +- 3 +item.css , 'Math.abs' คือทำให้เครื่องหมาย+-ตอนระบุในinput แสดงออกมาตัวเดียว
        
    )
    }
// PropTypes
    Item.propTypes = {
        title:PropTypes.string.isRequired,
        amount:PropTypes.number.isRequired
    }
   //Type 4 props const Item =(/*T4 props3*/{title,amount})=>{
    // return(
    //     <li className="item">{/*T4 props4*/title}<span>{amount}</span></li>
        
    // )
    // }
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
// }

export default Item
import './Transaction.css'
import Item from "./Item"

const Transaction = () => {


//Type .2 props , Type.3 , Type.4
    const data = [
        
         /* T2 props 1  ,  T3 p1 ,T4 p1 */   { title : "ค่าพยาบาล",amount:"2000"},
            { title : "เงินเดือน",amount:"20000"},
            { title : "ค่าเดินทาง",amount:"600"}
        ]
    

return (
    <ul className="item-list">
        < /*T.2props5 , T3 p6   , T4 p5*/   Item  /*T.2props2  , T3 p2  ,  T4 p2*/title={data[0].title}  amount={data[0].amount} />
        <Item title={data[1].title}  amount={data[1].amount} />
        <Item title={data[2].title}  amount={data[2].amount} />
    </ul>
)
}


// Type.1 props
//     return(
//         <ul className="item-list">
//             < /*T.1props4*/ Item     /*T.1props1*/ title = "ค่าพยาบาล" amount="2000"/>
//             <Item title = "เงินเดือน" amount="20000"/>
//             <Item title = "ค่าเดินทาง" amount="600"/>
//         </ul>
//     )
// }

export default Transaction
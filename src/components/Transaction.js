import './Transaction.css'
import Item from "./Item"


const Transaction = (props) => { // App.js P , P 3 ตั้งเพื่อจะดึงค่า (props)  

      const { items } = props  //App.js P , P 4  รับค่า - ดึงค่า มาจากApp.js { items } = props
      return (
            <ul className="item-list">
                  {items.map((element) => {           // App.js P , P 5 map ค่า items
                        return <Item {...element} key={element.id} />  // App.js P , P 6 เปลี่ยน key เป็น .id
                  })}
            </ul>
      )
}
//       // loop  '.map'  and 'unique key'  and 'uuid' สุ่ม key and  Item.js 'PropsTypes' เตือนการระบุค่าข้อมูลให้ถูก และ ค่าว่าง
//       const data = [

//             { /*ตั้ง id or key เอง = > id: 1,*/  title: "ค่าพยาบาล", amount: 2000 },
//             { title: "เงินเดือน", amount: 20000},
//             { title: "ค่าเดินทาง", amount: 600 },
//             { title: "ค่ากิน", amount:200 }
//       ]


//       return (
//             <ul className="item-list">
//                   {data.map((element) => {
//              /* แบบเต็ม */       return <Item title={element.title} amount={element.amount} /*แบบตั้ง id or key เอง key={element.id}*/ key = {uuidv4()} />
//                         // /*แบบย่อ*/        return <Item {...element} /*แบบตั้ง id or key เอง key={element.id}*/  key = {uuidv4()}/>
//                   })}
//             </ul>
//       )
// }

// //Type .2 props , Type.3 , Type.4
//     const data = [

//          /* T2 props 1  ,  T3 p1 ,T4 p1 */   { title : "ค่าพยาบาล",amount:"2000"},
//             { title : "เงินเดือน",amount:"20000"},
//             { title : "ค่าเดินทาง",amount:"600"}
//         ]


// return (
//     <ul className="item-list">
//         < /*T.2props5 , T3 p6   , T4 p5*/   Item  /*T.2props2  , T3 p2  ,  T4 p2*/title={data[0].title}  amount={data[0].amount} />
//         <Item title={data[1].title}  amount={data[1].amount} />
//         <Item title={data[2].title}  amount={data[2].amount} />
//     </ul>
// )
// }


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
//ใช้ร่วมกับ <React.Fragment></React.Fragment> import Reac from "react";
import Transaction from "./components/Transaction"
import './App.css'
import FormComponent from "./components/FormComponent"
import { useState} from "react"  // App.js P , P 13  
function App() {
      const design = {color:"red" , textAlign:"center" , fontSize:'1.5rem'}

      // App.js  Pull Push 1-16 รับส่งข้อมูลระหว้าง component ลูก ผ่าน  App.js (compo แม่) 
                                                                                            
      const initdata = [                                                         // App.js P , P 1่
            {id:1,title: "ค่าพยาบาล" ,amount:2000},                 //1
            {id:2,title: "ค่ากิน" ,amount:400},                            //1
            {id:3,title: "ค่าเดินทาง" ,amount:500}                        //1
      ]

      const [items,setItems] = useState(initdata ) //App.js P , P 14 ข้อมูลใหม่ + usestate ข้อมูลเก่า 
      const onAddNewItem = (newItem) =>{    // App.js P , P 12  ข้อมูลจาก FormComponent.js (itemData) พร้อมใช้งาน
            setItems((prevItem)=>{                        // App.js P , P  15 รวมข้อมูลใหม่ และเก่า ไว้ใน usestate เตรียมไปใช้งานต่อ
                  return [newItem,...prevItem]           //App.js P , P  15
            })
      }
return (
      <div className="container">
            <h1 style={design}>แอพบัญชีรายรับ-รายจ่าย</h1> 
            <FormComponent onAddItem = {onAddNewItem}/> { //App.js P , P 11 รับค่ามาจาก FormComponent.js 'onAddItem'
            /* Transaction items = initdata/  //  App.js P , P 2  ข้อมุลเก่า   ส่ง props ตัวแปล initData กลับไป Transaction.js */}
            <Transaction items = {items}/>  { /*//  App.js P  , P 16 , 2  ทั้งแสดงใหม่ใน input  และ ส่ง props ตัวแปล initData กลับไป Transaction.js */}
      </div>
)
}

// ค่า props   (การดึง รีบ ส่ง ข้อมูล)

 //  Type .3 Transa.js  >  1 , 2 , 5   ;   Item.js >  3, 4 ,;

//  Type .3 Transa.js  >  1 , 2 , 6   ;   Item.js >  3, 4 ,5;

//  Type .2 Transa.js  >  1 , 2 , 5   ;   Item.js >  3, 4;

//     Type1  Transa.js     // 3.แสดงผลลับ <Item        //1.ข้อมูล   title = "ค่าพยาบาล" amount="2000"/>
//              Item.js  ดึงข้อมูลจาก 1.  มาเป็น props 2  > นำ  props2 มาใช้งาน ที่ 3 แล้วส่งกลับไป 4
  

//Add className (Css)
     //App.css  >  App.js
     //Transaction.css  >  Tranasction

// Css Style
// Type1 เขียนใน Componentนั่นเลย
// Type2 สร้างเป็นตัวแปล แล้วเอาตัวแปลไปแทรก
//Type3  สร้างไฟล์ไหม่ แล้ว importเข้ามา เป็น ClassName
       //3.1  Item.css >  Item.js
       //3.2 Transaction.css > Transaction.js


// function App(){
//     /*Type2 Css =*/  const design = {color:"red",textAlign:"center",fontSize:'1.5rem'}
//       return (
//             <div>
//                   <h1 /*Type2 Css=>*/ style={design} /*Type1 .Css  = style={{color:"red",textAlign:"center",fontSize:'1.5rem'}}*/>แอพบัญชีรายรับ - รายจ่าย</h1>
//                   <FormComponent/>
//                   <Transaction/>
                  
//             </div>
//       )
// }


// // สร้างComponent และนำมาใช้งาน
// //แบบที่ 1 สร้างไว้ในไฟล์เดียว 
// //แบบที่ 2 สร้างแยกไฟล์ แล้ว import เข้ามา
//       //2.1 Component แม่ (Transaction.js)
//       //2.2 Component ลูก (Item.js)

// const Title =()=> <h1>บัญชีรายรับ-รายจ่าย</h1>
// const Description =()=> <p>บัญชีในแต่ละวัน</p>

// // // const Item =()=> <li>ค่าเดินทาง <span>-200</span></li>
// // // const Transaction =()=>{
// // //       return(
// // //             <ul>
// // //                   <Item/>
// // //             </ul>
// // //       )
// // // }
// //       const Transaction =()=>{
// //       return (
            
// //                   <ul>
// //                         <li>เงินเดือน <span>+20,000</span></li>
// //                         <li>ค่าอาหาร <span>-500</span></li>
// //                   </ul>
// //       )
// // }
// function App() {
// return(
// <div>
//       <Title/>
//       <Description/>
//       <Transaction/>
// </div>
// )
//       //tag in JSX return

//       //ถ้ามีคำสั่งเดียว
//       // return <h1>ถ้ามีคำสั่งเดียว</h1> 

//       //ถ้ามีหลายคำสั่ง หรือ หลายบรรทัด ต้องมี วงเล็บ( ,Tag )ครอบ

//       // type<div></div>
//       // return (
//       //       <div>
//       //             <h1>บัญชีรายรับ-รายจ่าย</h1>
//       //             <p>บัญชีในแต่ละวัน</p>
//       //             <ul>
//       //                   <li>ค่าเดินทาง <span>-200</span></li>
//       //                   <li>เงินเดือน <span>+20,000</span></li>
//       //                   <li>ค่าอาหาร <span>-500</span></li>
//       //             </ul>
//       //       </div>
//       // )
//       // type <section> <article> </article></section>
//       // return (
//       //       <section>
//       //             <article>
//       //                   <h1></h1>
//       //                   <p></p>
//       //             </article>
//       //       </section>
//       // )

//         // type <React.Fragment> <article> </article></React.Fragment>
//       // return (
//       //       <React.Fragment>
//       //             <article>
//       //                   <h1></h1>
//       //                   <p></p>
//       //             </article>
//       //       </React.Fragment>
//       // )

//             // type <> <article> </article></>
//       // return (
//       //       <>
//       //             <article>
//       //                   <h1></h1>
//       //                   <p></p>
//       //             </article>
//       //       </>
//       // )
// }
export default App

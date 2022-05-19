//ใช้ร่วมกับ <React.Fragment></React.Fragment> import Reac from "react";
import Transaction from "./components/Transaction"
import './App.css'

//Add className (Css)
     //App.css  >  App.js
     //Transaction.css  >  Tranasction

// Css Style
// Type1 เขียนใน Componentนั่นเลย
// Type2 สร้างเป็นตัวแปล แล้วเอาตัวแปลไปแทรก
//Type3  สร้างไฟล์ไหม่ แล้ว importเข้ามา เป็น ClassName
       //3.1  Item.css >  Item.js
       //3.2 Transaction.css > Transaction.js


function App(){
    /*Type2 Css =*/  const design = {color:"red",textAlign:"center",fontSize:'1.5rem'}
      return (
            <div>
                  <h1 /*Type2 Css=>*/ style={design} /*Type1 .Css  = style={{color:"red",textAlign:"center",fontSize:'1.5rem'}}*/>แอพบัญชีรายรับ - รายจ่าย</h1>
                  <Transaction/>
            </div>
      )
}


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

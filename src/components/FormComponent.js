import './FormComponent.css'
import {useState} from 'react'
import { v4 as uuidv4 } from 'uuid'    // App.js P , P 7


const FormComponent = (props) => {   // App.js P , P 9  สร้าง    (props) เพื่อจะส่งข้อมูลกลับไป App.js

// Hook and state     ดึงค่าใน input มาใช้งานต่อ และ แสดงผล  1-6 
      const [/* title ใช่แสดงข้อมูล*/  title,     /*setTitleใช้ดึงข้อมูล*/   setTitle] = useState('')  // H and S  1 เก็บค่าที่พิมพ์  จาก inputTitle 
      const [amount,setAmount] = useState('')   //  H and  S 1 เก็บค่าที่พิมพ์ จาก inputAmount

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// (F) FormComponent  and  Css 
// (E) Event

const inputTitle =(event)=>{     // (E)ดักจับ event 
      setTitle(event.target.value)  // H and S  2 เก็บที่พิมพ์ เข้า usestate
      //console.log(event.target.value)  // (E) (event.taeget.value) แสดงข้อมูลตามที่เราพิมพ์
}
const inputAmount =(event)=>{
     setAmount(event.target.value)  // H and S 2
     // console.log(event.target.value)
}

const saveItem =(event)=>{
      event.preventDefault()  // ค้างการแสดง console ไว้ ไม่ให้รี
      // console.log("save complete")
      const itemData = {             //  H and S 3 รวมค่าพร้อมแสดง
            id:uuidv4(),                              //App.js P , P 8 
            title:title,
            amount:Number(amount)
      }
// console.log (itemData) //  H  and  S   4    // แสดงค่าของ usestate  ที่รับค่ามาแล้ว
props.onAddItem(itemData) // App.js P , P 10 ส่งข้อมูล กลับไป App.js  (onAppItem)
setTitle('')  // H and S 5 เปลี่ยนค่าที่แสดง หลังจาก แสดง usestate ,ตกลง , บันทึก 
setAmount(0)
}      
      return (

            <div >
                  <form onSubmit={saveItem}>
                        <div className="form-control">
                              <label>ชื่อรายการ</label>
                              <input type="text" placeholder="ระบุชื่อรายการ" onChange={inputTitle} /* H and S 6เปลี่ยนเป็นค่าเดิม ของ usestate*/ value={title}/>
                        </div>
                        <div className="form-control">
                              <label>จำนวนเงิน</label>
                              <input type="number" placeholder="(+ รายรับ , - รายจ่าย)" onChange={inputAmount} value={amount} />
                        </div>
                        <div >
                              <button type="submit" className="btn">เพิ่มข้อมูล</button>
                        </div>
                  </form>
            </div>
      )
}

export default FormComponent
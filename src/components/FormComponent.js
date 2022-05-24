import './FormComponent.css'
import {useState,useEffect} from 'react'   // useEf 1 (useEffect)
import { v4 as uuidv4 } from 'uuid'    // App.js P , P 7


const FormComponent = (props) => {   // App.js P , P 9  สร้าง    (props) เพื่อจะส่งข้อมูลกลับไป App.js

// Hook and state     ดึงค่าใน input มาใช้งานต่อ และ แสดงผล  1-6 
      const [/* title ใช่แสดงข้อมูล*/  title,     /*setTitleใช้ดึงข้อมูล*/   setTitle] = useState('')  // H and S  1 เก็บค่าที่พิมพ์  จาก inputTitle 
      const [amount,setAmount] = useState('')   //  H and  S 1 เก็บค่าที่พิมพ์ จาก inputAmount

// UseEffect  ดักข้ามูลใน input มาตั่งเงื้อนไข  1-7   (ในกรณีนี้  ต้อ่งระบุ ค่าในinput ให้ครบ จำนวนเงินไม่เท่ากับ0 )
      const [formValid,setFormValid] = useState(false)  // useEf 2
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
setAmount('')
}     

useEffect(()=>{         // useEf 3 ดักข้อมูลที่ป้อนใน input แล้วมาตั่งเงื่อนไข
      const checkData = title.trim().length>0 && amount!==0 && amount!=='' // useEf 4 เงือ่นไข
     setFormValid(checkData)   // useEf 5 ส่งค่ากลับไป useEf 2 ว่า ถ้าเงื่อนไขตรง ให้สลับค่า useState
},[title,amount])  //useEf 6  ตัวที่จะดักข้อมูล   ไม่ใส่ก็น่าจะได้  มั่งนะ
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
                              <button type="submit" className="btn" disabled={!formValid /* useEf 7  ดึงค่ามาจาก useEf 2 ไม่ให้กดปุ่มได้ จนกว่า จะเข้าเงือนไข*/}>เพิ่มข้อมูล</button>
                        </div>
                  </form>
            </div>
      )
}

export default FormComponent
import './FormComponent.css'

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// (F) FormComponent  and  Css 
// (E) Event

const inputTitle =(event)=>{     // (E)ดักจับ event 
      console.log(event.target.value)  // (E) (event.taeget.value) แสดงข้อมูลตามที่เราพิมพ์
}
const inputAmount =(event)=>{
      console.log(event.target.value)
}

const saveItem =(event)=>{
      event.preventDefault()  // ค้างการแสดง console ไว้ ไม่ให้รี
      console.log("save complete")
}
const FormComponent = () => {
      return (
            <div >
                  <form onSubmit={saveItem}>
                        <div className="form-control">
                              <label>ชื่อรายการ</label>
                              <input type="text" placeholder="ระบุชื่อรายการ" onChange={inputTitle}/>
                        </div>
                        <div className="form-control">
                              <label>จำนวนเงิน</label>
                              <input type="number" placeholder="(+ รายรับ , - รายจ่าย)" />
                        </div>
                        <div >
                              <button type="submit" className="btn">เพิ่มข้อมูล</button>
                        </div>
                  </form>
            </div>
      )
}


export default FormComponent
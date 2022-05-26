
import Transaction from "./components/Transaction"
import './App.css'
import FormComponent from "./components/FormComponent"
import { useEffect, useReducer, useState } from "react"
import DataContext from "./components/data/DataContext"
import ReportComponent from "./components/ReportComponent"



function App() {
      const design = { color: "red", textAlign: "center", fontSize: '1.5rem' }

      const initdata = [
            { id: 1, title: "ค่าพยาบาล", amount: 2000 },
            { id: 2, title: "ค่ากิน", amount: 400 },
            { id: 3, title: "ค่าเดินทาง", amount: 500 }
      ]
      // ผลรวมยอดคงเหลือ รายรับ - รายจ่าย   1-1  , 2-2 ,3   +ReportComponent.css
      //ผลรวมยอดคงเหลือ 1 ตั่งแต่ตรงนี้  ถึง--
      const [items, setItems] = useState(initdata)
      const [reportIncome, setReportIncome] = useState(0)
      const [reportExpense, setReportExpense] = useState(0)
      const onAddNewItem = (newItem) => {
            setItems((prevItem) => {
                  return [newItem, ...prevItem]
            })
      }
      useEffect(() => {
            const amount = items.map(items => items.amount)
            const income = amount.filter(element => element > 0).reduce((total, element) => total += element, 0)
            const expense = (amount.filter(element => element < 0).reduce((total, element) => total += element, 0)) * -1
            setReportIncome(income)
            setReportExpense(expense)

      }, [items, reportIncome, reportExpense])
      //ผลรวมยอดคงเหลือ  1  ถึงตรงนี้

      //useReducer  แสดง - ซ่อน หน้ารวมจำนวนเงิน 1-1 , 2-2
      //useReducer  1 ---
      const [showReport, setShowReport] = useState(false)
      const reduce = (state, action) => {
            switch (action.type) {
                  case "SHOW":
                        return setShowReport(true)
                  case "HIDE":
                        return setShowReport(false)
           
            }
      }
      const [result, dispatch] = useReducer(reduce, showReport)
      //useReducer 1
      return (

            //ผลรวมยอดคงเหลือ 2 ตั้งแต่ตรงนี้ถึง--
            // DataContext and useContext  2 + object    1-2  and 1-3
            <DataContext.Provider value={        // 1 DataContext and useContext  2 + object    
                  {
                        income: reportIncome,
                        expense: reportExpense
                  }
            }>       {/* 1 DataContext and useContext  2 + object*/}
                  {/*ผลรวมยอดคงเหลือ 2 ถึงตรงนี้*/}
                  {/*useReducer  2----*/}
                  <button onClick={() => dispatch({ type: "SHOW", })}>แสดง</button> 
                  <button onClick={() => dispatch({ type: "HIDE",  })}>ซ่อน</button>
                  {/*useReducer 2 */}
                  <div className="container">
                        <h1 style={design}>แอพบัญชีรายรับ-รายจ่าย</h1>
                        {showReport && <ReportComponent />}
                        <FormComponent onAddItem={onAddNewItem} />
                        <Transaction items={items} />
                  </div>
            </DataContext.Provider>

      )
}
//       // reducer state เพิ่มลบ object ต้นแบบ  1-1
//       // reducer state เพิ่มลบ object ต้นแบบ  1 ตั้วแต่ตรงนี้ถึงง 
//       const [count, setCount] = useState(0)
//       const reduce = (state, action) => {
//             switch (action.type) {
//                   case "ADD":
//                         return state +action.payload
//                   case "SUB":
//                         return state -action.payload
//                   case "CLEAR":
//                         return 0
//             }
//       }
//       const [result,dispatch] = useReducer(reduce,count)
//       return (
//             <div>
//                   <h1>{result}</h1>

//                   <button onClick={()=>dispatch({type:"ADD",payload:10})}>เพิ่ม</button>
//                   <button onClick={()=>dispatch({type:"SUB",payload:5})}>ลด</button>
//                   <button onClick={()=>dispatch({type:"CLEAR"})}>ล้าง</button>
//             </div>  //reducer state เพิ่มลบ object ต้นแบบ 1 ถึงตรงนี้
//       )
// }


export default App

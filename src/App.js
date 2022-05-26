
import Transaction from "./components/Transaction"
import './App.css'
import FormComponent from "./components/FormComponent"
import { useEffect, useState } from "react"  
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
      const [reportIncome,setReportIncome] = useState(0)
      const [reportExpense,setReportExpense] = useState(0)
      const onAddNewItem = (newItem) => {    
            setItems((prevItem) => {                       
                  return [newItem, ...prevItem]         
            })
      }
      useEffect(()=>{
            const amount = items.map(items=>items.amount)
            const income = amount.filter(element=>element>0).reduce((total,element)=>total+=element,0)
            const expense = (amount.filter(element=>element<0).reduce((total,element)=>total+=element,0))*-1 
            setReportIncome(income)
            setReportExpense(expense)

      } , [items,reportIncome,reportExpense])
      //ผลรวมยอดคงเหลือ  1  ถึงตรงนี้
      return (
            //ผลรวมยอดคงเหลือ 2 ตั้งแต่ตรงนี้ถึง--
            // DataContext and useContext  2 + object    1-2  and 1-3
            <DataContext.Provider value={        // 1 DataContext and useContext  2 + object    
                  {
                        income : reportIncome,
                        expense : reportExpense
                  }
            }>       {/* 1 DataContext and useContext  2 + object*/}    
                   {/*ผลรวมยอดคงเหลือ 2 ถึงตรงนี้*/}
                  <div className="container">
                        <h1 style={design}>แอพบัญชีรายรับ-รายจ่าย</h1>
                        <ReportComponent/>
                        <FormComponent onAddItem={onAddNewItem} /> 
                        <Transaction items={items} />  
                  </div>
            </DataContext.Provider>  

      )
}

export default App

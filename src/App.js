
import Transaction from "./components/Transaction"
import './App.css'
import FormComponent from "./components/FormComponent"
import { useState } from "react"  
import DataContext from "./components/data/DataContext"  
import ReportComponent from "./components/ReportComponent"


function App() {
      const design = { color: "red", textAlign: "center", fontSize: '1.5rem' }

      const initdata = [                                                        
            { id: 1, title: "ค่าพยาบาล", amount: 2000 },                 
            { id: 2, title: "ค่ากิน", amount: 400 },                            
            { id: 3, title: "ค่าเดินทาง", amount: 500 }                  
      ]

      const [items, setItems] = useState(initdata) 
      const onAddNewItem = (newItem) => {    
            setItems((prevItem) => {                       
                  return [newItem, ...prevItem]         
            })
      }
      return (
            // DataContext and useContext  2 + object    1-2  and 1-3
            <DataContext.Provider value={        // 1 DataContext and useContext  2 + object    
                  {
                        income : 50000,
                        expense : 8000
                  }
            }>       {/* 1 DataContext and useContext  2 + object*/}    
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

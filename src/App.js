
import Transaction from "./components/Transaction"
import './App.css'
import FormComponent from "./components/FormComponent"
import { useState, useEffect } from "react"
import DataContext from "./components/data/DataContext"
import ReportComponent from "./components/ReportComponent"
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom"  // React Router 2


function App() {
      const design = { color: "red", textAlign: "center", fontSize: '1.5rem' }

      const initdata = [
            { id: 1, title: "ค่าพยาบาล", amount: 2000 },
            { id: 2, title: "ค่ากิน", amount: 400 },
            { id: 3, title: "ค่าเดินทาง", amount: 500 }
      ]

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
            setReportIncome(income.toFixed(2))
            setReportExpense(expense.toFixed(2))

      }, [items, reportIncome, reportExpense])

      // React Router  สร้าง ใช้ ควบคุม ลิงก์   1-4
      // React Router 1 install npm 
      
      return (


            <DataContext.Provider value={{ income: reportIncome, expense: reportExpense }}>


                  <div className="container">
                        <h1 style={design}>แอพบัญชีรายรับ-รายจ่าย</h1>
                      {/* React Router 3 */}
                        <Router>
                              <div>
                                    <ul className="horizontal-menu">
                                          <li>
                                                <Link to="/" >บันทึกบัญชี</Link>
                                          </li>
                                          <li>
                                                <Link to="/insert" >เพิ่มข้อมูล</Link>
                                          </li>
                                    </ul>
                                    <Routes>

                                          {/*React Router 4 */}
                                          <Route path="/" element={<ReportComponent />}>
                                          </Route>
                                          <Route path="/insert" element={
                                                <div>
                                                      <FormComponent onAddItem={onAddNewItem} />
                                                      <Transaction items={items} />
                                                </div>
                                          }>
                                          </Route>
                                    </Routes>
                              </div>
                        </Router>
                  </div>
            </DataContext.Provider>

      )
}



export default App

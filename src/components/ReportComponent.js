import { useContext } from "react";
import DataContext from "./data/DataContext";
import './ReportComeponent.css'

const ReportComponent = () => {
  //ผลรวมยอดคงเหลือ 3
    const { income, expense } = useContext(DataContext)
    return (
        <div>
            <h4>ยอดคงเหลือ</h4>
            <h1>{income-expense}</h1>
            <div className="report-container">
                <div>
                    <h4>ยอดรายรับ</h4>
                    <p className="report plus">{income}</p>
                </div>
                <div>
                    <h4>ยอดรายจ่าย</h4>
                    <p className="report minus">{expense}</p>
                </div>
            </div>

        </div>
    )
    // const { income, expense } = useContext(DataContext)  //2 useContext 2+ object



    // /* 2 DataContext 2+ object  in return*/
    // /* 3 useContext 2+ object  in return*/
    // return (
    //     <div>
    //         <div>
    //             <DataContext.Consumer>  
    //                 {context => <p>รายรับ : {context.income} รายจ่าย : {context.expense}</p>}
    //             </DataContext.Consumer>
    //         </div>

    //         <div>

    //             <p>รายรับ : {income}</p> 
    //             <p>รายจ่าย : {expense}</p>
    //         </div>
    //     </div>

    // )
}
export default ReportComponent
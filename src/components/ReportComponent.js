import { useContext } from "react";
import DataContext from "./data/DataContext";
import './ReportComeponent.css'

const ReportComponent = () => {
  //ผลรวมยอดคงเหลือ 3
    const { income, expense } = useContext(DataContext)

      //  0,000 คอมม่า จำนวนเลข 1----
    const formatNumber=(num)=> {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}       //  0,000 คอมม่า จำนวนเลข 1
    return (
        <div>
            <h4>ยอดคงเหลือ</h4>
            <h1>{formatNumber((income-expense).toFixed(2))}</h1>   
            <div className="report-container">
                <div>
                    <h4>ยอดรายรับ</h4>
                    <p className="report plus">{formatNumber(income)}</p>  {/* 0,000 คอมม่า จำนวนเลข 2 formatNumber*/}
                </div>
                <div>
                    <h4>ยอดรายจ่าย</h4>
                    <p className="report minus">{formatNumber(expense)}</p> {/*  0,000 คอมม่า จำนวนเลข 3 formatNumber */}
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
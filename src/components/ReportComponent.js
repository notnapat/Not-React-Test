import { useContext } from "react";
import DataContext from "./data/DataContext";

const ReportComponent = () => {
    const { income, expense } = useContext(DataContext)  //2 useContext 2+ object

    /* 2 DataContext 2+ object  in return*/
    /* 3 useContext 2+ object  in return*/
    return (
        <div>
            <div>
                <DataContext.Consumer>  
                    {context => <p>รายรับ : {context.income} รายจ่าย : {context.expense}</p>}
                </DataContext.Consumer>
            </div>
            
            <div>
                
                <p>รายรับ : {income}</p> 
                <p>รายจ่าย : {expense}</p>
            </div>
        </div>

    )
}
export default ReportComponent
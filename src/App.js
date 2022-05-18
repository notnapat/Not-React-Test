//ใช้ร่วมกับ <React.Fragment></React.Fragment> import Reac from "react";
function App() {

      //tag in JSX return

      //ถ้ามีคำสั่งเดียว
      // return <h1>ถ้ามีคำสั่งเดียว</h1> 

      //ถ้ามีหลายคำสั่ง หรือ หลายบรรทัด ต้องมี วงเล็บ( ,Tag )ครอบ

      // type<div></div>
      return (
            <div>
                  <h1>บัญชีรายรับ-รายจ่าย</h1>
                  <p>บัญชีในแต่ละวัน</p>
                  <ul>
                        <li>ค่าเดินทาง <span>-200</span></li>
                        <li>เงินเดือน <span>+20,000</span></li>
                        <li>ค่าอาหาร <span>-500</span></li>
                  </ul>
            </div>
      )
      // type <section> <article> </article></section>
      // return (
      //       <section>
      //             <article>
      //                   <h1></h1>
      //                   <p></p>
      //             </article>
      //       </section>
      // )

        // type <React.Fragment> <article> </article></React.Fragment>
      // return (
      //       <React.Fragment>
      //             <article>
      //                   <h1></h1>
      //                   <p></p>
      //             </article>
      //       </React.Fragment>
      // )

            // type <> <article> </article></>
      // return (
      //       <>
      //             <article>
      //                   <h1></h1>
      //                   <p></p>
      //             </article>
      //       </>
      // )
}
export default App;

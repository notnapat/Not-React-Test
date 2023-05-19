import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';


// // การสร้าง Compoment
// function HelloCompoment(){
//   return <h1>สวัสดี Compoment</h1>
// }


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
  
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const data  =(
  <h1>heallo</h1>
)

ReactDOM.render(<h1>gg</h1>,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

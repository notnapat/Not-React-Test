import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// /*import ExternalComnent.js*/import HelloComponent from './components/ExternalComponent';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      // <HelloComponent />
      <React.StrictMode>
            <App />
      </React.StrictMode>
);


// //การสร้าง Component
// function HelloComponent() {
//       return <h1>HelloComponent</h1>
// }

//การสร้าง Class Component
// class HelloComponent extends React.Component{
//       render(){
//             return <h1>Class Component</h1>
//       }
// }



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

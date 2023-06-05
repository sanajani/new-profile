
import { RouterProvider } from 'react-router-dom'

import {router} from './router/Index'


const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App




























// -------------------------------- SECOND --------------------------------------------------------

// import {router} from './routerDom/router/Index';
// import {RouterProvider} from 'react-router-dom'

// const App = () => {
//   return (
//     <div>
//       <RouterProvider router={router}/>
//     </div>
//   )
// }

// export default App

// // -------------------------------- THIRD --------------------------------------------------------
// import FormInput from "./forms/FormInput";
// import './App.css';

// import { useState } from "react";

// const App = () => {

//   const [values,setValues] = useState({
//     username:"",
//     email:"",
//     birthday:"",
//     password:"",
//     confirmPassword:"",
//   });

//   const inputs = [
//     {
//       id:1,
//       name:"username",
//       type:"text",
//       placeholder:"User Name",
//       errormessage:"username should be 3-16 characters and shouldn't include any special character",
//       label:"UserName",
//       required:true
//     },
//     {
//       id:2,
//       name:"email",
//       type:"email",
//       placeholder:"Email",
//       errormessage:"it should be a valid email address",
//       label:"email",
//       required:true
//     },
//     {
//       id:3,
//       name:"birthday",
//       type:"date",
//       placeholder:"Birth Day",
//       label:"Birth Day",
//       // required:true
//     },
//     {
//       id:4,
//       name:"password",
//       type:"text",
//       placeholder:"Password",
//       errormessage:"password should be 8-20 characters and include at least 1 latter, 1 number and 1 speacial character",
//       label:"Password",
//       required:true
//     },
//     {
//       id:5,
//       name:"confirmPassword",
//       type:"text",
//       placeholder:"Confirm Password",
//       errormessage:"password don't match",
//       label:"Confirm Password",
//       required:true
//     },
//   ]

//   const handleSubmit = (e) => {
//     e.preventDefault();
//   }

//   const onChange = (e) => {
//     setValues({...values,[e.target.name]:e.target.value})
//   }

//   console.log(values);

//   return (
//     <div className='app'>
//       <form onSubmit={handleSubmit}>
//         <h1>Registration</h1>
//         {
//           inputs.map((input) => {
//            return <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
//           })
//         }
//         <button onChange={onChange}>Submit</button>
//       </form>
//     </div>
//   )
// }

// export default App

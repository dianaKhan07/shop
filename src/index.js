import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/login/Login';
import Registration from './pages/registration/Registration';
import MainPage from './pages/main-page/MainPage';
import { AuthProvider } from './context/AuthContext';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path:'/',
        element: <MainPage/>
      },
      {
        path: '/login',
        element: <Login/>,
      },
      {
        path: '/registration',
        element: <Registration/>,
      },
  
    ]
  },
  {
    path: "/pricing",
    element: <div>page prising</div>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>  
    <AuthProvider>
      <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

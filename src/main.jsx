import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import RouteTable from './Routes/RouteTable.jsx'
import { AppProvider } from './StateManagement/Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

    <AppProvider>
    <RouteTable />
    </AppProvider>
  ,
)

// import React from 'react'
import Dashboard from "./components/Dashboard"
import Sidebar from "./components/SideBar"
import styles from './styles/app.module.scss';

const App = () => {
  return (
    <div className={styles.screen}>
      <Sidebar />
      <Dashboard />
    </div>
  )
}

export default App

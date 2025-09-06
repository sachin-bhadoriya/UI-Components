import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import InputField from './components/InputField';
import DataTable from './components/DataTable';
import Navbar from './components/Navbar';
import Home from './components/Home';
import 'rsuite/dist/rsuite.min.css';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inputField" element={<InputField />} />
        <Route path="/dataTable" element={<DataTable />} />
      </Routes>
    </>
  )
}

export default App
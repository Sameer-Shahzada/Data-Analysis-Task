import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FlavanoidsTable from './FlavanoidsTable'
import GammaTable from './GammaTable'
import ErrorPage from './ErrorPage'


const RouterSwitcher = () => {
    return (
        <Routes>
            <Route path="*" element={<ErrorPage />} />
            <Route path="/flavanoids_table" element={<FlavanoidsTable/>} />
            <Route path="/gamma_table" element={<GammaTable/>} />
        </Routes>
    )
}
export default RouterSwitcher
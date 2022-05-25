import { useEffect, } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard_General from '../Dashboard_General';
import MainLayout from '../layouts/MainLayout'
import Dashboard_General_prueba from '../Dashboard_General_prueba';


function Navigator() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainLayout>
                    <Dashboard_General />
                </MainLayout>} />
                <Route path='/general_prueba' element={<MainLayout>
                    <Dashboard_General_prueba />
                </MainLayout>} />
            </Routes>
        </BrowserRouter>
    )
}
export default Navigator
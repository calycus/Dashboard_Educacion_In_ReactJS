import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Dashboard_General from '../Dasboard_General/Dashboard_General';
import Dashboard_General_prueba from '../Dashboard_General_prueba';


function SwitchDrawer() {
    return (
            <Routes>
                <Route path='/' element={
                    <Dashboard_General />
                } />
                <Route path='/general_prueba' element={
                    <Dashboard_General_prueba />
                } />
            </Routes>
    )
}
export default SwitchDrawer
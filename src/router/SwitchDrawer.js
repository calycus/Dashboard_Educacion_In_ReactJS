import { Route, Routes } from 'react-router-dom';
import EleccionMalla from '../EleccionMalla';

//DashCard Components
import Dashboard_General from '../Dashboard_Page/DsGeneral/Dashboard_General';
import Dashboard_Tasa_Retencion from '../Dashboard_Page/DsRetencion/Dashboard_Retencion';
import Dashboard_Tasa_Repitencia from '../Dashboard_Page/DsRepitencia/TasaDeRepitencia/Dashboard_Repitencia';
import Dashboard_Tasa_Desercion from '../Dashboard_Page/DsDesercion/TasaDeDesercion/Dashboard_Desercion';

function SwitchDrawer() {
    return (
            <Routes>
                <Route path='/' element={
                    <EleccionMalla />
                }/> 
                <Route path='/general' element={
                    <Dashboard_General />
                } />
                <Route path='/tasa_retencion' element={
                    <Dashboard_Tasa_Retencion />
                } />
                <Route path='/tasa_repitencia' element={
                    <Dashboard_Tasa_Repitencia />
                } />
                <Route path='/tasa_desercion' element={
                    <Dashboard_Tasa_Desercion />
                } />
            </Routes>
    )
}
export default SwitchDrawer
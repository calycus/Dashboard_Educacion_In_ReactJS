import { Route, Routes } from 'react-router-dom';
import EleccionMalla from '../EleccionMalla';

//DashCard Components
import Dashboard_General from '../Dashboard_Page/DsGeneral/Dashboard_General';
//Tasa de Retencion
import Dashboard_Tasa_Retencion from '../Dashboard_Page/DsRetencion/Dashboard_Retencion';
//Tasa de Repitencia
import Dashboard_Tasa_Repitencia from '../Dashboard_Page/DsRepitencia/TasaDeRepitencia/Dashboard_Repitencia';
import Dashboard_Tasa_Repitencia_MetaData from '../Dashboard_Page/DsRepitencia/Metadata/Metadata_Repitencia';
//Tasa de Desercion
import Dashboard_Tasa_Desercion from '../Dashboard_Page/DsDesercion/TasaDeDesercion/Dashboard_Desercion';
import Dashboard_Tasa_Desercion_MetaData from '../Dashboard_Page/DsDesercion/Metadata/Metadata_Desercion';

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
                <Route path='/tasa_repitencia_metadata' element={
                    <Dashboard_Tasa_Repitencia_MetaData />
                } />
                <Route path='/tasa_desercion' element={
                    <Dashboard_Tasa_Desercion />
                } />
                <Route path='/tasa_desercion_metadata' element={
                    <Dashboard_Tasa_Desercion_MetaData />
                } />
                
            </Routes>
    )
}
export default SwitchDrawer
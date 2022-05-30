import { Route, Routes, BrowserRouter } from 'react-router-dom';
import EleccionMalla from '../EleccionMalla';
import Navigator from '../layouts/Navigator';


function Switch() {
    return (
            <Routes>
                <Route path='/' element={
                    <EleccionMalla />
                } />
                <Route path='/index' element={
                    <Navigator />
                } />
            </Routes>
    )
}
export default Switch
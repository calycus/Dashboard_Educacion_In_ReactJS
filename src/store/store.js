import { configureStore } from '@reduxjs/toolkit'
import ArrayMallasReducer from './MallaStore/Mallas'
import ArrayFacultadesReducer from './MallaStore/EleccionMallaStore'
import HighchartLineGeneral from './DashGeneralStore/HighchartStore/HighchartStoreGeneral'

export default configureStore({
  reducer: {
    arrayMallas: ArrayMallasReducer,
    arrayFacultades: ArrayFacultadesReducer,
    
    //store Highchart DS General
    HighchartLineGeneral: HighchartLineGeneral,
  },
})
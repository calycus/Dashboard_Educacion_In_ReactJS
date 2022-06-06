import { configureStore } from '@reduxjs/toolkit'
import ArrayMallasReducer from './MallaStore/Mallas'
import ArrayFacultadesReducer from './MallaStore/EleccionMallaStore'
import HighchartLineGeneral from './HighchartStore/DashboardGeneral/HighchartStoreGeneral'
import PieFenomenosGeneral from './HighchartStore/DashboardGeneral/HighchartFenomenos'
import HighchartRetencion from './HighchartStore/DashboardRetencion/HighchartStoreRetencion'
import HighchartDesercionGeneral from './HighchartStore/DashboardDesercion/TasaDeDesercion/HighchartDesercionGeneral'
import HighchartDesercionGenerosEdadEmbarazo from './HighchartStore/DashboardDesercion/TasaDeDesercion/HighchartDesercionGenerosEdadEmbarazo'

export default configureStore({
  reducer: {
    arrayMallas: ArrayMallasReducer,
    arrayFacultades: ArrayFacultadesReducer,

    //store Highchart DS General
    HighchartLineGeneral: HighchartLineGeneral,
    PieFenomenosGeneral: PieFenomenosGeneral,

    //store Highchart DS Retencion
    HighchartRetencion: HighchartRetencion,

    //store Highchart DS Repitencia
    ////store Highchart DS Repitencia => Repitencia Por Materia
    ////store Highchart DS Repitencia => Metadata

    //store Highchart DS Desercion
    HighchartDesercionGeneral: HighchartDesercionGeneral,
    HighchartDesercionGenerosEdadEmbarazo: HighchartDesercionGenerosEdadEmbarazo
    ////store Highchart DS Desercion => Prediccion
    ////store Highchart DS Desercion => Metadata
  },
})
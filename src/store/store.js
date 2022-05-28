import { configureStore } from '@reduxjs/toolkit'
import ArrayMallasReducer from './MallaStore/Mallas'
import ArrayFacultadesReducer from './EleccionMallaStore'

export default configureStore({
  reducer: {
      arrayMallas: ArrayMallasReducer,
      arrayFacultades: ArrayFacultadesReducer
  },
})
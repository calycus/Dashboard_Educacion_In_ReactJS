import { configureStore } from '@reduxjs/toolkit'
import ArrayMallasReducer from './MallaStore/Mallas'

export default configureStore({
  reducer: {
      arrayMallas: ArrayMallasReducer
  },
})
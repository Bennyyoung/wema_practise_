import { configureStore } from "@reduxjs/toolkit"
import storage from "redux-persist/lib/storage"
import { persistStore, persistReducer } from "redux-persist"
import authReducer from "@/redux/reducers/authSlice"

const persistConfig = {
 key: 'root',
 storage
}

export type RootState = ReturnType<typeof authReducer>

const persistedReducer = persistReducer<RootState>(persistConfig, authReducer)

const store = configureStore({
 reducer: persistedReducer,
 middleware: (getDefaultMiddleware) => getDefaultMiddleware({
  serializableCheck: false
 })
})

export const persistor = persistStore(store)

export default store
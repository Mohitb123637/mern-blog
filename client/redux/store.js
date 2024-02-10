import { configureStore, combineReducers } from '@reduxjs/toolkit';
import themeReducer from "./theme/themeSlice.js"
import userReducer from "./user/userSlice";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import persistStore from 'redux-persist/es/persistStore';

const rootReducer = combineReducers({
  user: userReducer,
  theme: themeReducer,

});

const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer); 

export const store = configureStore({
  reducer: persistedReducer, 
  middleware: (getDefaultMiddlewear)=>
  getDefaultMiddlewear({serializableCheck: false})
});


export const persistor = persistStore(store)
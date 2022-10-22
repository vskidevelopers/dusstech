
import { configureStore } from "@reduxjs/toolkit";
import {userReducer}  from "./Auth-Slice";
import { cartReducer } from "./Cart-Slice";
import storage from 'redux-persist/lib/storage';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
const persistConfig = {
    key: 'root',
    storage,
}
const reducedCart = persistReducer(persistConfig, cartReducer);
const reducedUser = persistReducer(persistConfig, userReducer)

export const store = configureStore({
    reducer: {
        user:reducedUser,
        cart:reducedCart
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});
export const persistor = persistStore(store)
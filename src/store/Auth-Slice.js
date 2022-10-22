import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios'

    
const getUser = createAsyncThunk('users/me', async (__, thunkAPI) => {
    const Token = localStorage.getItem("Token");

    try {
            await axios.get('http://127.0.0.1:8000/api/auth/me/', {
                headers: {
                    Authorization:'Token '+Token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            }).then((res)=>{
                console.log( "user ",res.data);
                localStorage.setItem('user',JSON.stringify(res.data));

                // const { dispatch } = thunkAPI;
                // dispatch({ type: 'users/me/fulfilled', payload: res.data.id, })
                return res.data

            }, (error) => {
                console.log(error);
                return thunkAPI.rejectWithValue(error);
            })
    }
    catch (err) {
        return thunkAPI.rejectWithValue(err.response.data);
    }
});


export const register = createAsyncThunk('auth/register', async ({username, email, password}, thunkAPI) => {

    try {
            await axios.post('http://127.0.0.1:8000/api/auth/register/',{
                username,
                email,
                password,
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then((res)=>{
                console.log( "data ",res.data);
                return res.data

            }, (error) => {
                console.log(error);
                return thunkAPI.rejectWithValue(error);
            })
        }
    catch (err) {
        return thunkAPI.rejectWithValue(err.response.data);
    }
});

export const login = createAsyncThunk('auth/login', async ({ email, password }, thunkAPI) => {

            await axios.post('http://127.0.0.1:8000/api/dj-rest-auth/login/', {
                email,
                password,
                headers: {
                            'Content-Type': 'application/json',
                        }
                }).then((res)=>{
                    
                    const { dispatch } = thunkAPI;
                    localStorage.setItem('Token',res.data.key);
                    dispatch(getUser());
                    
                    console.log( "res.data.key > ",res.data.key);
                    console.log( "res.data > ",res.data);
                    return res.data.key

                }, (error) => {
                    console.log(error);
                    return thunkAPI.rejectWithValue(error);
                })
    }
);

export const logout =createAsyncThunk('auth/logout/', async (_,thunkAPI) => {
        await axios.get('http://127.0.0.1:8000/api/dj-rest-auth/logout/', {
            
            headers: {
                        'Content-Type': 'application/json',
                    }
            }).then((res)=>{
                localStorage.removeItem("Token");
                localStorage.removeItem("user");
                localStorage.clear();
                console.log( "data ",res.data);
                return res.data

            }, (error) => {
                console.log(error);
                return thunkAPI.rejectWithValue(error);
            })
})

const initialState = {
    isAuthenticated: false,
    user: null,
    loading: false,
    registered: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        resetRegistered:(state)=>{
            state.registered=false
        }
    },
    extraReducers:{
        [register.pending]: (state) =>{
            state.loading =true
        },
        [register.fulfilled]:(state) =>{
            state.registered=true
            state.loading=false
        },
        [register.rejected]:(state)=>{
            state.loading=false
        },
        [login.pending]:(state)=>{
            state.loading =true
        },
        [login.rejected]:(state)=>{
            state.loading=false
            state.isAuthenticated=false
        },
        [login.fulfilled]:(state)=>{
            state.isAuthenticated=true
            state.loading=false
            state.registered=true
        },
        [getUser.pending]:(state)=>{
            state.loading=true
        },
        [getUser.fulfilled]:(state)=>{
            state.loading = false;
            state.user =JSON.parse(localStorage.getItem("user"))
            console.log('state.user >', state.user)
        },
        [getUser.rejected]:(state)=>{
            state.loading =false
        },
        [logout.pending]:(state)=>{
            state.loading =true
        },
        [logout.fulfilled]:(state)=>{
            state.isAuthenticated =false
            state.user =null
            state.loading=false
            state.registered=false
        },
        [logout.rejected]:(state)=>{
            state.loading=false
        }
    }
});

export const {resetRegistered} =userSlice.actions
export const userReducer = userSlice.reducer;
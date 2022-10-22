import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchCart = createAsyncThunk('shop/cart', async(__, thunkAPI)=>{
    const Token = localStorage.getItem('Token');
    console.log("current state >",thunkAPI.getState().cart.cart.cart.user)
    const id =thunkAPI.getState().cart.cart.cart.user
    
    try {
        await axios.get(`http://127.0.0.1:8000/api/cart/${id}/`,{
            headers:{
                Authorization:'Token '+Token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
            }
        }).then((res)=>{
            localStorage.setItem('cart',JSON.stringify(res.data));
            console.log('cart res > ',res.data)
            console.log('cart res > ',res.data.cart)
            return res.data
        })
    } catch (error) {
        console.log("Error >",error)
    }
})

const initialState = {
    isAuthenticated:localStorage.getItem('Token')?true:false,
    user: null,
    loading: false,
    cart:[]
};

const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart: (state, action) => {
            console.log("cart from slice > ",state.cart)
            // state.cart=JSON.parse(localStorage.getItem("cart"))
            if (state.cart !== "null") {
                console.log("Item in Cart > ",true);
                const itemInCart = state.cart.cart.cart_items.find((item) => item.item.id === action.payload);
                console.log("Item in cart currently > ",itemInCart);

                
            } else {
                console.log("New Item in cart");
                console.log("action in add to cart> ",action);
                localStorage.setItem('payload',action.payload)
                // console.log("Location >",state.cart.cart.cart_items)
                // state.cart.cart.cat_items.push({ ...action.payload, quantity: 1 });
            }
            },
            incrementQuantity: (state, action) => {
                state.cart=JSON.parse(localStorage.getItem("cart"))
                const itemInCart = state.cart.cart.cart_items.find((item) => item.item.id === action.payload);
                // eslint-disable-next-line no-unused-vars
                let itemTotal = 0

                
                console.log('itemInCart from the store >',itemInCart)
                console.log('item id from payload>',action.payload)
                
                itemInCart.quantity +=1;
                if(itemInCart.item.discount_price){
                    itemInCart.final_price= itemInCart.quantity*itemInCart.item.discount_price

                }else{
                    itemInCart.final_price= itemInCart.quantity*itemInCart.item.price
                }

                const allCartItems=state.cart.cart.cart_items
                state.cart.cart.total= allCartItems.map((item)=>itemTotal =+item.final_price).reduce((a,b)=>b+a)
                console.log('sum >',state.cart.cart.total);
                localStorage.setItem("cart",JSON.stringify(state.cart))
            },
            decrementQuantity: (state, action) => {
                state.cart=JSON.parse(localStorage.getItem("cart"))
                // eslint-disable-next-line no-unused-vars
                let itemTotal = 0
                const itemInCart = state.cart.cart.cart_items.find((item) => item.item.id === action.payload);
                console.log('itemInCart from the store >',itemInCart)
                console.log('item id from payload>',action.payload)
                if(itemInCart.quantity <=1){
                    itemInCart.quantity =1;
                }else{
                    itemInCart.quantity -=1;
                }
                if(itemInCart.item.discount_price){
                    itemInCart.final_price= itemInCart.quantity*itemInCart.item.discount_price
                }else{
                    itemInCart.final_price= itemInCart.quantity*itemInCart.item.price
                }
                const allCartItems=state.cart.cart.cart_items
                state.cart.cart.total= allCartItems.map((item)=>itemTotal =+item.final_price).reduce((a,b)=>b+a)
                console.log('sum >',state.cart.cart.total);
                localStorage.setItem("cart",JSON.stringify(state.cart))
            },
            removeItem: (state, action) => {
                state.cart=JSON.parse(localStorage.getItem("cart"))
                const removeItem = state.cart.cart.cart_items.find((item) => item.id !== action.payload);
                state.cart.cart.cart_items= removeItem;
                // localStorage.setItem("cart",JSON.stringify(state.cart))
            },
    },
    extraReducers:{
        [fetchCart.pending]: (state) =>{
            state.loading =true
        },
        [fetchCart.fulfilled]: (state) =>{
            state.isAuthenticated=true
            state.loading =false
            state.cart =JSON.parse(localStorage.getItem("cart"))
            console.log('state.cart >', state.cart)
        },
        [fetchCart.rejected]: (state) =>{
            state.loading =false
        },
    }
})

export const {
    addToCart,
    incrementQuantity,
    decrementQuantity,
    removeItem
}=cartSlice.actions
export const cartReducer =cartSlice.reducer
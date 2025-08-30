import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';
const initialState = {
    isAunthenticated : false,
    user: null,
    isLoading: false,
}
export const registerUser = craeteAsyncThunk('auth/registerUser',
    async (formData, thunkAPI) => {
        const response = await axios.post("http://localhost:5000/api/auth/register" ,formData {

        withCredentials: true
    })
    return.response.data;
} 
)

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setuser: (state, action) => {
            state.user = action.payload;
            state.isAunthenticated = true;
        }, 
     }
    extraReducers: (builder) => {
        builder
        .addCase(registerUser.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(registerUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
            state.isAunthenticated = false;
        })
        .addCase(registerUser.rejected, (state) => {
            state.isLoading = false;
            state.user = action.payload;
            state.isAunthenticated = false;
        })
    });
    export const {setuser} = authSlice.actions;
    export default authSlice.reducer;
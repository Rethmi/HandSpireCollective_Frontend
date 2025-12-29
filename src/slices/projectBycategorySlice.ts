import {createAsyncThunk, createSlice, type PayloadAction} from '@reduxjs/toolkit';
import { backendApi } from '../api'; // Use your configured axios instance

export const fetchProjectsByCategory = createAsyncThunk(
    'project/getProjectByCategory',
    async (category: string, { rejectWithValue }) => {
        try {
            // Ensure this matches the Backend Route added above
            const response = await backendApi.get(`/project/category/${category}`);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data?.message || "Failed to fetch");
        }
    }
);

interface Project {
    id: string;
    title: string;
    description: string;
    materials: string;
    steps: string;
    image: string;
    createdAt: string;
    category: string;
    author: string;
    uploadedUserEmail: string;
}

interface CategoryProjectState {
    projects: Project[];
    loading: boolean;
    error: string | null;
}

const initialState: CategoryProjectState = {
    projects: [],
    loading: false,
    error: null,
};

const projectByCategorySlice = createSlice({
    name: 'projectsByCategory', // This name is used in the store
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProjectsByCategory.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProjectsByCategory.fulfilled, (state, action: PayloadAction<Project[]>) => {
                state.loading = false;
                state.projects = action.payload;
            })
            .addCase(fetchProjectsByCategory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string || 'Something went wrong';
            });
    },
});

export default projectByCategorySlice.reducer;
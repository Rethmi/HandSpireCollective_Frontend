import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProjectById = createAsyncThunk(
    'project/getProjectById',
    async (id: string) => {
        const response = await axios.get(`/api/project/${id}`);
        return response.data;
    }
);

export const deleteProjectById = createAsyncThunk(
  'singleProject/deleteProjectById',
  async (id: string, { rejectWithValue }) => {
    try {
      // Get the token from localStorage
      const token = localStorage.getItem("token"); 

      const response = await axios.delete(
        `http://localhost:5000/api/project/delete/${id}`,
        {
          headers: {
            // Attach the token here
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.error || 'Failed to delete project');
    }
  }
);

interface Project {
    id: string;
    title: string;
    description: string;
    materials: string;
    steps: string;
    imageUrl: string;
    createdAt: string;
    category: string;
    author: string;
    uploadedUserEmail: string;
}

interface SingleProjectState {
    project: Project | null;
    loading: boolean;
    error: string | null;
    deleteLoading: boolean;
    deleteError: string | null;
    isDeleted: boolean;
}

const initialState: SingleProjectState = {
    project: null,
    loading: false,
    error: null,
    deleteLoading: false,
    deleteError: null,
    isDeleted: false,
};

const singleProjectSlice = createSlice({
    name: 'singleProject',
    initialState,
    reducers: {
        clearDeleteState: (state) => {
            state.deleteLoading = false;
            state.deleteError = null;
            state.isDeleted = false;
        },
        resetProjectState: (state) => {
            state.project = null;
            state.loading = false;
            state.error = null;
            state.deleteLoading = false;
            state.deleteError = null;
            state.isDeleted = false;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProjectById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            // singleProjectSlice.ts ඇතුළත
.addCase(fetchProjectById.fulfilled, (state, action: PayloadAction<any>) => {
    state.loading = false;
    // ඔබේ backend එක { data: {...} } ලෙස එවන්නේ නම් action.payload.data ලෙස භාවිතා කරන්න
    state.project = action.payload; 
})
            .addCase(fetchProjectById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'Something went wrong';
            })
            .addCase(deleteProjectById.pending, (state) => {
                state.deleteLoading = true;
                state.deleteError = null;
            })
            .addCase(deleteProjectById.fulfilled, (state) => {
                state.deleteLoading = false;
                state.isDeleted = true;
                state.project = null; // Clear project after successful deletion
            })
            .addCase(deleteProjectById.rejected, (state, action) => {
                state.deleteLoading = false;
                state.deleteError = action.error.message ?? 'Failed to delete project';
            });
    },
});

export const { clearDeleteState } = singleProjectSlice.actions;
export default singleProjectSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

import initialState from './initailState';
import { fetchMessage, fetchNFTs, verify } from './thunk';

const accountSlice = createSlice({
	name: 'account',
	initialState,
	reducers: {
		setError: (state, { payload }) => {
			state.error = payload;
		},
		setAccount: (state, { payload }) => {
			state.address = payload;
		},
		setSignature: (state, { payload }) => {
			state.signature = payload;
		},
		setAccountImage: (state, { payload }) => {
			state.avatar = payload;
		},
		disconnect: (state) => {
			state.token = '';
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchMessage.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchMessage.fulfilled, (state, { payload }) => {
				state.message = payload;
				state.error = '';
			})
			.addCase(fetchMessage.rejected, (state, { payload }) => {
				state.loading = false;
				state.error = payload;
			})
			.addCase(verify.pending, (state) => {
				state.loading = true;
			})
			.addCase(verify.fulfilled, (state, { payload }) => {
				state.loading = false;
				state.token = payload;
				state.error = '';
			})
			.addCase(verify.rejected, (state, { payload }) => {
				state.loading = false;
				state.error = payload;
			})
			.addCase(fetchNFTs.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchNFTs.fulfilled, (state, { payload }) => {
				state.loading = false;
				state.nfts = payload;
				state.error = '';
			})
			.addCase(fetchNFTs.rejected, (state, { payload }) => {
				state.loading = false;
				state.error = payload;
			});
	},
});

export const { setAccount, setError, setSignature, setAccountImage, disconnect } =
	accountSlice.actions;
export default accountSlice.reducer;

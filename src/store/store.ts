import { configureStore } from '@reduxjs/toolkit';

import accountSlice from './account/accountSlice';

const store = configureStore({
	reducer: {
		account: accountSlice,
	},
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

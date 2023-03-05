import { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { IUser } from './Core/Interface/Auth/IUser';
import './scss/null.scss';
// import $api from './http';

import Store from './store/index';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

export const store = new Store();
let user: IUser = {
	Name: 'i3asqb0Z7j',
	Token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiSFFvZ1U4aUF4biIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiMiIsImV4cCI6MTY3Nzk4NTc0MCwiaXNzIjoiTWUiLCJhdWQiOiJNZSJ9.-LoST-LhoSMlC8TMpGbbSpm-ne9_3Xtbfzzs3gEFWiE',
};

store.setUser(user);
export const Context = createContext(store);

root.render(
	<Context.Provider value={store}>
		<App />
	</Context.Provider>,
);

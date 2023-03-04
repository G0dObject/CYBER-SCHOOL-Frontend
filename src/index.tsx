import { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './scss/null.scss';
import { IUser } from './Core/Interface/Auth/IUser';
// import $api from './http';

import Store from './store/index';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

export const store = new Store();
let user: IUser = {
	Name: 'i3asqb0Z7j',
	Token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiaTNhc3FiMFo3aiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwiZXhwIjoxNjc3OTM3OTQyLCJpc3MiOiJNZSIsImF1ZCI6Ik1lIn0.oWevnaKefAc6s0G-MdItiZleVQRxUG8pUdHhUJvf7GI',
};

store.setUser(user);
export const Context = createContext(store);
// $api.get('/Login', {}).then((res) => console.log(res));

root.render(
	<Context.Provider value={store}>
		<App />
	</Context.Provider>,
);

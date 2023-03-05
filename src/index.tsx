import { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { IUser } from './Core/Interface/Auth/IUser';
import './scss/null.scss';
import VacancyService from './Services/VacancyService';
// import $api from './http';

import Store from './store/index';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

export const store = new Store();

// let user: ICreateUser = {
// 	Email: 'string1@gmail.com',
// 	FirstName: 'string',
// 	LastName: 'string',
// 	SurName: 'string',
// 	DayOfBird: '2023-03-04T15:13:03.119Z',
// 	City: 'string',
// 	Direction: Directions.MobileDeveloper,
// 	Adress: 'string',
// 	Education: Education.Middle,
// 	Maried: true,
// 	HaveChild: true,
// 	DesiredRegion: Region.Moscow,
// };
export const Context = createContext(store);

let user: IUser = {
	Name: 'i3asqb0Z7j',
	Token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiUUMwTlZwRDNoeCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiMiIsImV4cCI6MTY3ODAyMDQ2NiwiaXNzIjoiTWUiLCJhdWQiOiJNZSJ9.SOkeXgAxlcQ7tH0BDaxbQKjS9D1GgDtOEuuNjTJ9JI4',
};

store.setUser(user);

//store.registration(user);
VacancyService.get().then((res) => console.log(res));
root.render(
	<Context.Provider value={store}>
		<App />
	</Context.Provider>,
);

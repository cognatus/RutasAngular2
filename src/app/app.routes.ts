import { Ruta2Component } from './ruta2/ruta2.component';
import { Ruta1Component } from './ruta1/ruta1.component';

export const APP_ROUTES = [

	{
		path: '',
		component: Ruta1Component 
	},
	{
		path: 'ruta2',
		component: Ruta2Component 
	}

]
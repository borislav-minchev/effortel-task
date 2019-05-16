Ext.define('MyApp.store.UsersStore', {
	extend: 'Ext.data.Store',
	alias: 'store.users',
	storeId: 'users-store',
	model: 'MyApp.model.UserModel',

	proxy: {
		type: 'rest',
		url: 'https://node-users-api.herokuapp.com/api/users',
		reader: {
			type: 'json'
		}
	}
});
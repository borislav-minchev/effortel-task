Ext.define('MyApp.store.UsersStore', {
	extend: 'Ext.data.Store',
	alias: 'store.users',
	storeId: 'users-store',
	model: 'MyApp.model.UserModel'
});
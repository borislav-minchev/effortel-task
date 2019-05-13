Ext.define('MyApp.store.UsersStore', {
	extend: 'Ext.data.Store',
    alias: 'store.users',
    storeId: 'mystore',

	model: 'MyApp.model.UserModel',

	proxy: {
		type: 'ajax',
        url: 'http://jsonplaceholder.typicode.com/users'
	}
});

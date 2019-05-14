Ext.define('MyApp.model.UserModel', {
	extend: 'Ext.data.Model',

	fields: [{
		firstName: 'firstName',
		email: 'email',
		address: 'address'
	}],

	proxy: {
		type: 'rest',
		url: 'https://node-users-api.herokuapp.com/api/users'
	}
});
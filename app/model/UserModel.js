Ext.define('MyApp.model.UserModel', {
	extend: 'Ext.data.Model',

	fields: [
		{
			name: 'firstName',
			type: 'string'
		},
		{
			name: 'email',
			type: 'string'
		},
		{
			name: 'address',
			type: 'string'
		}
],

	proxy: {
		type: 'rest',
		url: 'https://node-users-api.herokuapp.com/api/users',
		reader: {
			type: 'json'
		},
		writer: {
			writeRecordId: false,
			writeAllFields: true
		}
	}
});
Ext.define('MyApp.view.users.UsersViewModel', {
	extend: 'Ext.app.ViewModel',

	alias: 'viewmodel.usersViewModel',

	requires: [
        'MyApp.store.UsersStore'
    ],

	stores: {
		users: {
			type: 'users',
            autoLoad: false,
            listeners: {
                load: 'onGetUsers'
            }
		}
	}
});

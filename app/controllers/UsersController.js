Ext.define('MyApp.controllers.UsersController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.users-controller',

	requires: ['MyApp.view.users.AddNewUserDialog'],

	onRefreshClick: function() {
		const store = Ext.getStore('users-store');
		store.load();
	},

	onOpenNewUserDialog: function() {
		const dialog = Ext.create({
			xtype: 'addNewUserDialog'
		});

		dialog.show();
	},

	onGetUsers: function(success, result) {
		if (result) {
			//debugger;
		} else {
			Ext.Msg.alert('Error', 'There was an error retrieving the weather.');
		}
	},

	onCellEditUser: function(btn) {
		const cell = btn.up();
		const record = cell.up().getRecord();

		debugger;
	},

	onCellDeleteUser: function(btn) {
		Ext.Msg.confirm(
			'Confirmation',
			'Are you sure you want to do that?',
			function(answer) {
                debugger;
                if (answer == 'yes') {

                }
			}
		);
	}
});

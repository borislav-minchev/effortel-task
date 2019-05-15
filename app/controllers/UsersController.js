Ext.define('MyApp.controllers.UsersController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.users-controller',

	requires: ['MyApp.view.users.AddNewUserDialog'],

	onRefreshClick: function () {
		const store = Ext.getStore('users-store');
		store.load();
	},

	onOpenNewUserDialog: function () {
		const dialog = Ext.create({
			xtype: 'addNewUserDialog'
		});

		dialog.show();
	},

	onGetUsers: function (success, result) {
		if (result) {
			//debugger;
		} else {
			Ext.Msg.alert('Error', 'There was an error retrieving the weather.');
		}
	},

	onCellEditUser: function (btn) {
		const cell = btn.up();
		const record = cell.up().getRecord();

		const dialog = Ext.create({
			xtype: 'editUserDialog'
		});

		const form = dialog.down('formpanel');
		form.setValues(record.data);

		dialog.show();
	},

	onCellDeleteUser: function (btn) {
		const cell = btn.up();
		const record = cell.up().getRecord();

		Ext.Msg.confirm(
			'Delete user',
			'Are you sure you want to delete this user?',
			function (answer) {
				if (answer == 'yes') {
					const user = Ext.create('MyApp.model.UserModel', record);

					user.erase({
						success: function () {
							const store = Ext.getStore('users-store');
							store.load();
						}
					});
				}
			}
		);
	}
});
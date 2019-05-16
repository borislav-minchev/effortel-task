Ext.define('MyApp.controllers.UsersController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.users-controller',

	requires: ['MyApp.view.users.AddNewUserDialog'],

	onRefreshClick: () => {
		const store = Ext.getStore('users-store');
		store.load();
	},

	onOpenNewUserDialog: () => {
		const dialog = Ext.create({
			xtype: 'addNewUserDialog'
		});

		dialog.show();
	},

	onGetUsers: (success, result) => {
		if (!result) {
			Ext.Msg.alert('Error', 'There was an error retrieving the weather.');
		}
	},

	onCellEditUser: (btn) => {
		const cell = btn.up();
		const record = cell.up().getRecord();

		const dialog = Ext.create({
			xtype: 'editUserDialog',
			record: record
		});

		const form = dialog.down('formpanel');
		form.setValues(record.data);

		dialog.show();
	},

	onCellDeleteUser: (btn) => {
		const cell = btn.up();
		const record = cell.up().getRecord();

		Ext.Msg.confirm(
			'Delete user',
			'Are you sure you want to delete this user?',
			(answer) => {
				if (answer == 'yes') {
					record.erase({
						success: () => {
							const store = Ext.getStore('users-store');
							store.load();
						}
					});
				}
			}
		);
	}
});
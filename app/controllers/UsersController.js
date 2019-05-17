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
			Ext.toast('There was an error retrieving the data.', 2000);
		}
	},

	onCellEditUser: (btn) => {
		const menu = btn.up();
		const cell = menu.up();
		const record = cell.up().getRecord();

		const dialog = Ext.create({
			xtype: 'editUserDialog',
			record: record
		});

		const form = dialog.down('formpanel');
		form.setValues(record.data);

		menu.hide();
		dialog.show();
	},

	onCellDeleteUser: (btn) => {
		const cell = btn.up().up();
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
							Ext.toast('User deleted successfully', 2000);
						}
					});
				}
			}
		);
	},

	onUserRowClick: function (grid, record, index, eOpts) {
		const tabPanel = grid.up('tabpanel');
		const userData = record[0].getData();
		const id = 'user' + userData.id.replace(/-/g, '');
		const tabs = tabPanel.getItems();
		let matchingTab;

		matchingTab = Ext.getCmp(id);

		if (!matchingTab) {
			tabPanel.add({
				title: userData.firstName,
				id: id,
				tpl: '<div><b>Name: </b>{firstName}</div>',
				data: userData,
				closable: true
			});
			matchingTab = tabs.indexMap[id] - 1;
		}

		tabPanel.setActiveItem(matchingTab);
	}
});
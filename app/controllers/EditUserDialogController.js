Ext.define('MyApp.controllers.EditUserDialogController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.edit-user-controller',

	requires: [
		'MyApp.view.users.EditUserDialog'
	],

	onEditUser: function () {
		const dialog = this.getView();
		const form = dialog.down('formpanel');
		const data = form.getValues();
		const model = dialog.getRecord();

		model.set(data);
		model.save({
			success: () => {
				this.onCloseEditUser();
			}
		});
	},

	onCloseEditUser: function () {
		const dialog = this.getView();

		dialog.destroy();
	}
});
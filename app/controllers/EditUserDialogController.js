Ext.define('MyApp.controllers.EditUserDialogController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.edit-user-controller',

	requires: [
		'MyApp.view.users.EditUserDialog'
	],

	onEditUser: function (btn) {
		const dialog = this.getView();
		const form = dialog.down('formpanel');
		const data = form.getValues();
		const user = Ext.create('MyApp.model.UserModel', data);

		user.set();
	},

	onCloseEditUser: function (btn) {
		const dialog = this.getView();

		dialog.hide();
	}
});
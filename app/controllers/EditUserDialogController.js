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
		debugger;
		const model = dialog.model;
		// tuka trqbva da se vzeme modela, a ne da se pravi nov

		model.set(data);
	},

	onCloseEditUser: function (btn) {
		const dialog = this.getView();

		dialog.hide();
	}
});
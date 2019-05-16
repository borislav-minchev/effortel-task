Ext.define('MyApp.controllers.AddNewUserDialogController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.new-user-controller',

	requires: [
		'MyApp.view.users.AddNewUserDialog'
	],

	onAddUser: function () {
		const dialog = this.getView();
		const form = dialog.down('formpanel');
		const values = form.getValues();

		const user = Ext.create('MyApp.model.UserModel', values);
		delete user.data.id;
		delete user.id;

		user.save({
			success: () => {
				const store = Ext.getStore('users-store');
				store.load();

				const dialog = this.getView();
				dialog.close();
			}
		});
	}
});
Ext.define('MyApp.view.users.EditUserDialog', {
	extend: 'Ext.Dialog',
	xtype: 'editUserDialog',
	title: 'Edit user',
	closable: true,
	draggable: false,
	controller: 'edit-user-controller',

	requires: [
		'Ext.field.Text',
		'Ext.field.Email',
		'Ext.form.Panel'
	],

	items: [{
			xtype: 'formpanel',

			items: [{
					xtype: 'textfield',
					label: 'Name',
					name: 'firstName'
				},
				{
					xtype: 'emailfield',
					label: 'Email',
					name: 'email',
					allowBlank: false,
					required: true,
					validators: 'email'
				},
				{
					xtype: 'textfield',
					label: 'Street',
					name: 'address'
				}
			]
		}
	],

	buttons: {
		add: {
			text: 'Edit',
			handler: 'onEditUser'
		},
		close: {
			text: 'Cancel',
			handler: 'onCloseEditUser'
		}
	}
});
Ext.define('MyApp.view.users.AddNewUserDialog', {
	extend: 'Ext.Dialog',
	xtype: 'addNewUserDialog',
	title: 'Add new user',
	closable: true,
	draggable: false,
	controller: 'new-users-controller',
	defaultType: 'textfield',

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
			text: 'Add',
			handler: 'onAddUser'
		}
	}
});
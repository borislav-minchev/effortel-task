Ext.define('MyApp.view.users.Users', {
	extend: 'Ext.Panel',
	xtype: 'users',
	controller: 'users-controller',

	requires: [
		'Ext.grid.Grid',
		'Ext.grid.column.Date',
		'Ext.layout.Fit',
		'Ext.layout.VBox',
		'MyApp.view.users.UsersViewModel'
	],

	viewModel: 'usersViewModel',

	layout: 'vbox',

	items: [
		{
			xtype: 'panel',
			title: 'Users',
			tools: [
				{
					iconCls: 'x-fa fa-sync',
					handler: 'onRefreshClick'
				},
				{
					iconCls: 'x-fa fa-plus',
					handler: 'onOpenNewUserDialog'
				}
			]
		},
		{
			xtype: 'grid',
			height: '100%',

			bind: {
				store: '{users}'
			},

			columns: [
				{
					text: 'ID',
					dataIndex: 'id',
				},
				{
					text: 'Name',
					dataIndex: 'firstName',
					flex: 1
				},
				{
					text: 'Email',
					dataIndex: 'email',
					flex: 1
				},
				{
					text: 'Address',
					dataIndex: 'address',
					flex: 1
				}
			]
		}
	]
});

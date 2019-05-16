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

	items: [{
			xtype: 'panel',
			height: '10%',
			title: 'Users',
			tools: [{
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
			height: '90%',

			bind: {
				store: '{users}'
			},

			columns: [{
					text: 'ID',
					dataIndex: 'id'
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
				},
				{
					cell: {
						xtype: 'widgetcell',
						widget: {
							xtype: 'button',
							iconCls: 'x-fa fa-ellipsis-v',
							arrowVisible: false,
							menu: {
								defaults: {
									xtype: 'button',
									margin: '0'
								},
								items: [{
									iconCls: 'x-fa fa-edit',
									text: 'Edit',
									bind: {
										tooltip: 'Edit user'
									},
									handler: 'onCellEditUser'
								}, {
									iconCls: 'x-fa fa-times-circle',
									text: 'Delete',
									bind: {
										tooltip: 'Delete user'
									},
									handler: 'onCellDeleteUser'
								}]
							}
						}
					}
				}
			]
		}
	]
});
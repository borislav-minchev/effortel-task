Ext.define('MyApp.view.main.Main', {
	extend: 'Ext.tab.Panel',

	requires: [
		'MyApp.view.users.Users',
		'MyApp.view.photos.Photos',
		'MyApp.view.main.DataView'
	],

	items: [{
			title: 'Users',
			xtype: 'users',
			iconCls: 'x-fa fa-users'
		},
		{
			title: 'Photos',
			xtype: 'photos',
			iconCls: 'x-fa fa-images'
		},
		{
			title: 'Data',
			xtype: 'data-view',
			iconCls: 'x-fa fa-images'
		}
	]
});
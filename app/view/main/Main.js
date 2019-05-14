Ext.define('MyApp.view.main.Main', {
	extend: 'Ext.tab.Panel',
	controller: 'main',

	requires: [
		'MyApp.view.users.Users',
		'MyApp.view.photos.Photos'
	],

	items: [
		{
			title: 'Users',
			xtype: 'users',
			iconCls: 'x-fa fa-users'
		},
		{
			title: 'Photos',
			xtype: 'photos',
			iconCls: 'x-fa fa-images'
		}
	]
});

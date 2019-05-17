Ext.define('MyApp.view.users.UserTab', {
	extend: 'Ext.Panel',
	xtype: 'user-panel',
	controller: '',
	closable: true,
	layout: 'vbox',

	items: [{
		xtype: 'panel',
		shadow: 'true',
		title: 'Built in Tools',
		html: 'LE TEXTICLES',
		height: '50%',
		tools: [{
				type: 'minimize'
			},
			{
				type: 'refresh'
			},
			{
				type: 'search'
			},
			{
				type: 'save'
			},
			{
				type: 'menu'
			}
		]
	},
	{
		xtype: 'panel',
		shadow: 'true',
		title: 'Built in Tools',
		html: 'LE TEXTICLES',
		height: '50%',
		tools: [{
				type: 'minimize'
			},
			{
				type: 'refresh'
			},
			{
				type: 'search'
			},
			{
				type: 'save'
			},
			{
				type: 'menu'
			}
		]
	}
]
});
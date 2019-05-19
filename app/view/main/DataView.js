Ext.define('MyApp.view.main.DataView', {
	extend: 'Ext.tab.Panel',
	xtype: 'data-view',
	viewModel: 'data-view-model',

	requires: ['MyApp.view.main.DataViewModel'],

	items: [
		{
      xtype: 'panel',
      bind: {
        title: '{ime}'
      },
      iconCls: 'user'
    },
    {
      xtype: 'panel',
      bind: {
        title: '{ime}'
      },
      iconCls: 'user'
		}
	]
});

Ext.define('MyApp.view.photos.Photos', {
	extend: 'Ext.Panel',
	xtype: 'photos',

	requires: [
		'Ext.grid.Grid',
		'Ext.grid.column.Date',
		'Ext.layout.Fit',
		'Ext.dataview.DataView',
		'MyApp.view.photos.PhotosViewModel'
	],

	viewModel: 'photosViewModel',

	layout: 'fit',

	items: [{
        xtype: 'dataview',
        ui: 'default',
        reference: 'dataview',
        itemTpl: '<div><img src="{thumbnailUrl}" /><h3>{title}</h3></div>',
        store: {
            autoLoad: true,
            sortOnLoad: true,
            fields: ['thumbnailUrl', 'title'],
            proxy: {
                type: 'ajax',
                url : 'http://jsonplaceholder.typicode.com/photos'
            }
        }
    }]
});
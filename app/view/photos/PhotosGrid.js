Ext.define('MyApp.view.photos.PhotosGrid', {
	extend: 'Ext.dataview.List',
	xtype: 'photos-grid',
	indexBar: true,
	grouped: true,
	pinHeaders: false,
	scrollable: true,
	fullscreen: true,
	itemTpl: '<div class="photo-row"><img src="{thumbnailUrl}" /><h3>{title}</h3></div>',

	requires: [
		'MyApp.view.photos.PhotosViewModel',
		'Ext.dataview.plugin.ListPaging'
	],

	plugins: {
		listpaging: true
	},

	viewModel: 'photosViewModel',

	bind: {
		store: '{photos}'
	}
});
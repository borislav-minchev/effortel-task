Ext.define('MyApp.view.photos.PhotosGrid', {
	extend: 'Ext.dataview.List',
	xtype: 'photos-grid',
	indexBar: true,
    grouped: true,
    pinHeaders: false,
	itemTpl: '<div class="photo-row"><img src="{thumbnailUrl}" /><h3>{title}</h3></div>',

	scrollable: true,

	fullscreen: true,

	requires: [
		'MyApp.view.photos.PhotosViewModel'
	],

	viewModel: 'photosViewModel',

	bind: {
		store: '{photos}'
	}
});
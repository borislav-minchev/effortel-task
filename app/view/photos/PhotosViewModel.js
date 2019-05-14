Ext.define('MyApp.view.photos.PhotosViewModel', {
	extend: 'Ext.app.ViewModel',

	alias: 'viewmodel.photosViewModel',

	requires: [
		'MyApp.store.PhotosStore'
	],

	stores: {
		photos: {
			type: 'photos',
			autoLoad: true
		}
	}
});
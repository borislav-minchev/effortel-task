Ext.define('MyApp.store.PhotosStore', {
	extend: 'Ext.data.Store',
	alias: 'store.photos',
	autoLoad: true,
	sortOnLoad: true,
	fields: ['thumbnailUrl', 'title'],
	pageSize: 16,

	grouper: {
		groupFn: (record) => {
			return record.get('albumId');
		}
	},

	proxy: {
		type: 'rest',
		url: 'http://jsonplaceholder.typicode.com/photos'
	}
});
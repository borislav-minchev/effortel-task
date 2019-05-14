Ext.define('MyApp.store.PhotosStore', {
	extend: 'Ext.data.Store',
	alias: 'store.photos',
	autoLoad: true,
	sortOnLoad: true,
	fields: ['thumbnailUrl', 'title'],

	grouper: {
        groupFn: function(record) {
            return record.get('albumId');
        }
	},

	proxy: {
		type: 'rest',
		url: 'http://jsonplaceholder.typicode.com/photos'
	}
});
Ext.define('MyApp.store.PhotosStore', {
	extend: 'Ext.data.Store',
	alias: 'store.photos',
	autoLoad: true,
	fields: ['thumbnailUrl', 'title'],
	pageSize: null,
	page: 1,

	grouper: {
		groupFn: (record) => {
			return record.get('albumId');
		}
	},

	proxy: {
		type: 'rest',
		url: 'http://jsonplaceholder.typicode.com/photos',
		reader: {
			type: 'json',
			implicitIncludes: false
		},
		pageParam: '_page',
		limitParam: '_limit',
		extraParams: {
			'_limit': 20,
			'_page': this.page
		}
	},

	listeners: {
		beforeload: function () {
			this.page++;
		}
	}
});
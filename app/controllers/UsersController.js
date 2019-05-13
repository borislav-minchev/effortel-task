Ext.define('MyApp.controllers.UsersController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.users-controller',

    onRefreshClick: function () {
        const store = Ext.getStore('mystore');
        store.load();
    },

    onOpenNewUserDialog: function () {
        var dialog = Ext.create({
            xtype: 'dialog',
            title: 'Add new user',
            closable: true,
            defaultType: 'textfield',

            items: [{
                    xtype: 'textfield',
                    label: 'Name',
                    name: 'name'
                }, {
                    xtype: 'emailfield',
                    label: 'Email',
                    name: 'email',
                    allowBlank: false,
                    required: true,
                    validators: 'email'
                }, {
                    xtype: 'textfield',
                    label: 'Street',
                    name: 'street'
                }
            ],

            buttons: {
                add: {
                    text: 'Add',
                    handler: this.onAddUser
                }
            }
        });

        dialog.show();
    },

    onAddUser: function() {
        debugger;
    },

    onGetUsers: function (success, result) {
        if (result) {
            debugger;
        } else {
            Ext.Msg.alert('Error', 'There was an error retrieving the weather.');
        }
    }
});
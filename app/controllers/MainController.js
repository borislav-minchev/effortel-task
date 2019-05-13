Ext.define('MyApp.controllers.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    requires: [
        'Ext.MessageBox'
    ],

    onGo: function () {
        Ext.Msg.alert('Go', 'From main view controller', this.onClose);
    },

    onClose: function() {
        debugger;
        // 3rd parameter of alert
    }
});
var app = app || {};

app.TestModel = Backbone.Model.extend({
    //url: '/data/' + this.id    
    
    url: function () {
        return '/model/' + (this.id ? this.id : 0);
    }
});
var app = app || {};

app.AppView = Backbone.View.extend({
    
    el: '#app',
    
    events: {
        'click #save-button': 'saveButtonHandler'
    },
    
    testCollection: new app.TestCollection(),
    
    initialize: function () {
        this.listenTo(this.testCollection, "update", this.render);
        this.listenTo(this.testCollection, "update", function () {
            console.log(this.testCollection);
            console.log(this.testCollection.toJSON());
        });
        this.testCollection.fetch();
        this.render();
    },
    
    render: function () {
        console.log('render');
        this.$el.html('I\'m alive! <button id="save-button">Save</button>');
    },
    
    saveButtonHandler: function () {
        //this.testCollection.sync('create', _.first(this.testCollection.models));
        console.log('handler start');
        console.log(this.testCollection.get(2));
        console.log(this.testCollection.at(2));
        this.testCollection.push({test: 'test4'});
    }
});
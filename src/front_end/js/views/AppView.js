var app = app || {};

app.AppView = Backbone.View.extend({
    
    el: '#app',
    
    events: {
        'click #add-button': 'addButtonHandler',
        'click #sync-button': 'applySync',
        'click #edit-button': 'editButtonHandler',
        'click #delete-button': 'deleteButtonHandler'
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
        var template = _.template($('#app-template').html());
        this.$el.html(template({}));
    },
    
    addButtonHandler: function () {
        //this.testCollection.sync('create', _.first(this.testCollection.models));
        console.log('handler start');
        // getting element by id, id == 2
        console.log(this.testCollection.get(2));
        // getting element by index, collection [2] -> third element
        console.log(this.testCollection.at(2));
        // adding new item to collection
        this.testCollection.push({test: 'test4'});
    },
    
    editButtonHandler: function () {
        console.log('================================ editButtonHandler start ================================ ');
        var item = this.testCollection.get(2);
        item.set('test', 'test2 edited');
        console.log(this.testCollection.models);
        console.log('================================ editButtonHandler end ================================ ');
    },
    
    deleteButtonHandler: function () {
        console.log('================================ deleteButtonHandler start ================================ ');
        console.log(this.testCollection.models);
        var elementToDelete = this.testCollection.get(3);
        // bad way here
        //this.testCollection.remove(elementToDelete);
        console.log(this.testCollection.models);
        
        // good way
        elementToDelete.set('isValid', false);
        console.log('================================ deleteButtonHandler end ================================ ');
    },
    
    applySync: function () {     
        console.log('================================ applySync start ================================ ');
        console.log(this.testCollection);
        var itemsToSync = this.testCollection.filter(function (item) {
           return !item.id || (_.size(_.keys(item.changed)) > 0) || (item.has('isValid') && !item.get('isValid'));
        });
        console.log(itemsToSync);
        _.each(itemsToSync, function (item) {
            if (item.has('isValid') && !item.get('isValid')) {
                item.destroy();
            } else {
                item.save();             
            }            
        });
        console.log(this.testCollection.models);
        console.log('================================ applySync end ================================ ');
    }
});
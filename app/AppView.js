	FbApp.AppView = Backbone.View.extend({
	events:{
		'change #byName' : 'sortByName'
	},
	initialize : function(){
		this.collection.on('reset', this.render , this);
		this.$friendList = this.$el.find('.friend-list');
	},

	sortByName: function(){
		this.collection.sortByName();
	},

	render: function(collection){
		this.$friendList.empty();  // Reset la FriendList
		var $container = $('<div/>');  // On charge le contenaire puis on l'insert à la fin pour éviter d'injecter dans le Dom peu à peu
		collection.forEach(function(friend){
			var view = new FbApp.FriendView({model:friend});
			$container.append(view.render().$el);
		},this);
		this.$friendList.append($container);
	}
});
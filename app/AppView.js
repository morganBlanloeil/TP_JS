	FbApp.AppView = Backbone.View.extend({
	coll : null,
	initialize : function(friends){
		this.coll = friends;
		this.coll.on('reset', this.render , this);
	}

	render: function(){

		this.coll.forEach(function(friend){
			new FbApp.FriendView({model:friend});
			view.render();
			view.render().$el;
		});

	}
})
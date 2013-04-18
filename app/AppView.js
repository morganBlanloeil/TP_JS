	FbApp.AppView = Backbone.View.extend({
	coll : null,
	initialize : function(friends){
		this.coll = friends;
	}
})
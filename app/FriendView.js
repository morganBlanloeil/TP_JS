FbApp.FriendView = Backbone.View.extend({
	tmpl:_.template($('#friendTmpl').html()),

	initialize: function(){

	},
	render : function(){
		this.$el.html(this.tmpl(this.model.toJSON()));
		return this;
	}
});


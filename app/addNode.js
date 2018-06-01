(function(nx){

	nx.define('addNode',nx.ui.Component,{

		view: {
			content: [
				{
					tag: "button",
					content: "Reload",
					props: {
						style: "margin-left:300px"	},					
					events: {
						click: "{#fetch}"
					}
				}
			]
		},

methods:  {
		'fetch': function(){
			
		location.reload();

				}
	}
		
});
})(nx);

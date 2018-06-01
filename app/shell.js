(function(nx){

var app = new nx.ui.Application();

var tcontainer = new topoContainer();

var topology = tcontainer.topology();

var nodeadd = new addNode();

app.container(document.getElementById("topo-container"));

topology.data(topodata);

nodeadd.attach(app);

topology.attach(app);

 

})(nx);

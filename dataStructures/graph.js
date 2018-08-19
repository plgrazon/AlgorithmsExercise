const util = require('util');
const options = {depth: null, colors: true}

// Use this function to print the output on node repl
const printThis = (object) => console.log(
  util.inspect(object, options)
)

class Graph {
  constructor() {
    this.vertices = {};
  }

  addNode(value) {
    this.vertices[value] = {edges: {}};
  }

  contains(value) {
    return this.vertices[value] !== undefined;
  }

  addEdge(startNode, endNode) {
    let start = this.contains(startNode);
    let end = this.contains(endNode);

    if (!start || !end) {
      console.log('Nodes must exists');
      return;
    }

    this.vertices[startNode].edges[endNode] = true;
    this.vertices[endNode].edges[startNode] = true;
  }

  hasEdge(startNode, endNode) {
    let start = this.vertices[startNode].edges[endNode] === true;
    let end = this.vertices[endNode].edges[startNode] === true;

    return start === end;
  }

  removeEdge(startNode, endNode) {
    let start = this.contains(startNode);
    let end = this.contains(endNode);

    if (!start || !end) {
      console.log('Nodes must exists');
      return;
    }

    delete this.vertices[startNode].edges[endNode];
    delete this.vertices[endNode].edges[startNode];
  }

  removeVertex(node) {
    for (let key in this.vertices) {
      delete this.vertices[key].edges[node];
    }
    delete this.vertices[node];
  }
}

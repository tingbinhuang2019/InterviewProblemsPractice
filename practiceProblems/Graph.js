
// Basic Graph data structor in Javascript.

class Graph {
  constructor() {
    this.ajacencyList = {};
  }

  addVertex(key) {
    this.ajacencyList[key] = [];
  }

  addEdge(vertex1, vertex2) {
    this.ajacencyList[vertex1].push(vertex2);
    this.ajacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.ajacencyList[vertex1] = this.ajacencyList[vertex1].filter(vertex => vertex !== vertex2);
    this.ajacencyList[vertex2] = this.ajacencyList[vertex2].filter(vertex => vertex !== vertex1);
  }

  removeVertex(v) {
    while (this.ajacencyList[v].length) {
      let tempVertex = this.ajacencyList[v].pop();
      this.removeEdge(v, tempVertex);
    }
    delete this.ajacencyList[v];
  }
}

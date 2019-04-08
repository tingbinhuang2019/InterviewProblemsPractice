
/*
  This is a class for directed graph.
*/
class Graph {
  constructor() {
    this.ajacencyList = {};
  }

  addVertex(val) {
    this.ajacencyList[val] = [];
  }

  /*
    Add edge for directed graph.
  */
  addEdge(v1, v2) {
    this.ajacencyList[v1].push(v2);
  }

  printPath(arr) {
    let result = "";
    for (let i = 0; i < arr.length; i++) {

      if (i !== arr.length - 1) {

        result += arr[i] + " -> ";
      } else {
        result += arr[i];
      }
    }
    return result;
  }

  topologicalSort(start) {
    let visitedSet = {};
    let stack = [];

    let sortUtil = (val) => {
      if (!visitedSet[val]) {
        visitedSet[val] = true;
        for (let i = 0; i < this.ajacencyList[val].length; i++) {
          let node = this.ajacencyList[val][i];
          sortUtil(node);
        }
        stack.push(val);
      }
      return;
    }
    sortUtil(start);
    return this.printPath(stack.reverse());
  }
}

var graph = new Graph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addVertex("G");
graph.addVertex("H");
graph.addVertex("I");
graph.addVertex("J");

graph.addEdge("A", "B");
graph.addEdge("A", "F");
graph.addEdge("B", "H");
graph.addEdge("D", "E");
graph.addEdge("D", "C");
graph.addEdge("D", "I");
graph.addEdge("D", "H");
graph.addEdge("E", "I");
graph.addEdge("J", "E");
graph.addEdge("I", "C");
graph.addEdge("G", "A");
graph.addEdge("G", "B");
graph.addEdge("G", "C");

console.log(graph.topologicalSort("A"));
// A -> F -> B -> H
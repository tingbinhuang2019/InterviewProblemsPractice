class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  };
  dequeue() {
    return this.values.shift();
  };
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  };
}

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  dijkstra(start, finish) {
    let queue = new PriorityQueue();
    let distance = {};
    let pre = {};
    let path = [];
    let smallest;

    for (let v in this.adjacencyList) {
      if (v === start) {
        distance[v] = 0;
        queue.enqueue(v, 0);
      } else {
        distance[v] = Infinity;
        queue.enqueue(v, Infinity);
      }
      pre[v] = null;
    }

    while (queue.values.length) {
      smallest = queue.dequeue().val;
      let nextNode = this.adjacencyList[smallest];
      if (smallest === finish) {
        while (pre[smallest]) {
          path.push(smallest);
          smallest = pre[smallest];
        }
        break;
      }
      else {
        for (let n in nextNode) {
          let tempNode = nextNode[n];
          let sumDistance = distance[smallest] + tempNode.weight;
          let node = tempNode.node;
          if (sumDistance < distance[node]) {
            distance[node] = sumDistance;
            pre[node] = smallest;
            queue.enqueue(node, sumDistance);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
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

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);
graph.addEdge("F", "G", 4);
graph.addEdge("E", "G", 1);

console.log(graph.dijkstra("A", "G"));
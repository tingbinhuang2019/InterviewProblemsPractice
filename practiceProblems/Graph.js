
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

  // dfs recursive version
  dfsRecursive(start) {
    let data = [];
    let visited = {};
    let dfs = (start) => {
      data.push(start);
      visited[start] = true;
      for (let i = 0; i < this.ajacencyList[start].length; i++) {
        let vertex = this.ajacencyList[start][i];
        if (!visited[vertex]) {
          dfs(vertex);
        }
      }
    }
    dfs(start);
    return data;
  }

  // dfs iterative version
  dfsIterative(start) {
    let data = [];
    let visited = {};
    let stack = [];
    stack.push(start);
    while (stack.length) {
      let item = stack.pop();
      if (!visited[item]) {
        visited[item] = true;
        data.push(item);
        for (let i = 0; i < this.ajacencyList[item].length; i++) {
          let vertex = this.ajacencyList[item][i];
          stack.push(vertex);
        }
      }
    }
    return data;
  }

  // bfs recursive version
  bfsRecursive(start) {
    let data = [];
    let visited = {};
    let queue = [];
    let bfs = (start) => {
      visited[start] = true;
      data.push(start);
      for (let i = 0; i < this.ajacencyList[start].length; i++) {
        let vertex = this.ajacencyList[start][i];
        if (!visited[vertex]) {
          bfs(vertex);
        }
      }
    }
    bfs(start);
    return data;
  }

  // bfs iterative version
  bfsIterative(start) {
    let data = [];
    let visited = {};
    let queue = [];
    queue.push(start);
    while (queue.length) {
      let item = queue.shift();
      if (!visited[item]) {
        visited[item] = true;
        data.push(item);
        for (let i = 0; i < this.ajacencyList[item].length; i++) {
          queue.push(this.ajacencyList[item][i]);
        }
      }
    }
    return data;
  }
}

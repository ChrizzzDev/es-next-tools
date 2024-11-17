export class Graph {
  private adjacencyList: Map<string, string[]> = new Map();

  /**
   * Adds a vertex to the graph.
   * @param {string} vertex - The vertex to add.
   */
  addVertex(vertex: string): void {
    this.adjacencyList.set(vertex, []);
  }

  /**
   * Adds an edge between two vertices.
   * @param {string} vertex1 - The first vertex.
   * @param {string} vertex2 - The second vertex.
   */
  addEdge(vertex1: string, vertex2: string): void {
    this.adjacencyList.get(vertex1)?.push(vertex2);
    this.adjacencyList.get(vertex2)?.push(vertex1); // For undirected graph
  }

  getNeighbors(vertex: string): string[] | undefined {
    return this.adjacencyList.get(vertex);
  }

  /**
   * Performs a depth-first search (DFS).
   * @param {string} start - The starting vertex.
   * @returns {string[]} The vertices visited in DFS order.
   */
  dfs(start: string): string[] {
    const visited: Set<string> = new Set();
    const result: string[] = [];

    const dfsHelper = (vertex: string) => {
      visited.add(vertex);
      result.push(vertex);
      this.adjacencyList.get(vertex)?.forEach(neighbor => {
        if (!visited.has(neighbor)) {
          dfsHelper(neighbor);
        }
      });
    };

    dfsHelper(start);
    return result;
  }

  /**
   * Performs a breadth-first search (BFS).
   * @param {string} start - The starting vertex.
   * @returns {string[]} The vertices visited in BFS order.
   */
  bfs(start: string): string[] {
    const visited: Set<string> = new Set();
    const queue: string[] = [start];
    const result: string[] = [];

    while (queue.length > 0) {
      const vertex = queue.shift()!;
      if (!visited.has(vertex)) {
        visited.add(vertex);
        result.push(vertex);
        queue.push(...this.adjacencyList.get(vertex)!);
      }
    }

    return result;
  }
}
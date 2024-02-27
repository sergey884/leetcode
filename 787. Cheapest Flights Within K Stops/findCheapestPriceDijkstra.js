/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
const findCheapestPrice = (n, flights, src, dst, k) => {
  const graph = {};

  for(let i = 0; i < flights.length; i++) {
    const [source, destination, price] = flights[i];

    if (!graph[source]) {
      graph[source] = {};
    }

    graph[source][destination] = price;
  }

  const minCost = Array(n).fill(Infinity);
  const stops = Array(n).fill(Infinity);

  const queue = [[0, src, 0]];

  while(queue.length) {
    const [cost, node, currentStops] = queue.shift();

    if (cost > minCost[node]) {
      continue;
    }
    
    minCost[node] = cost;
    stops[node] = currentStops;
    console.log('node: ', node, dst, node === dst);
    if (parseInt(node) === dst) {
      return cost;
    }

    if (currentStops > k) {
      continue;
    }

    const nodeItems = Object.entries(graph[node]);
    for(let i = 0; i < nodeItems.length; i++) {
      const [neighbor, price] = nodeItems[i];
      queue.push([cost + price, neighbor, stops + 1]);
    }
  }


  console.log('G: ', graph)
  return -1;
};

const n = 3;
// const n = 4;
const flights = [[0,1,100],[1,2,100],[0,2,500]];
// const flights = [[0, 1, 100], [1, 2, 100], [2, 0, 100], [1, 3, 600], [2, 3, 200]];
const src = 0;
// const src = 0;
const dst = 2;
// const dst = 3;
const k = 1;
// const k = 1;

console.log('findCheapestPrice: ', findCheapestPrice(n, flights, src, dst, k));
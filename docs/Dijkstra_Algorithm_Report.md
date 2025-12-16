# Dijkstra's Algorithm Implementation Report
## Pegasus Rider Application

**Project:** Pegasus Rider - Ride-Hailing Mobile Application  
**Date:** December 2025  
**Technology Stack:** Ionic/Angular, TypeScript, Google Maps API, Firebase

---

## 1. Executive Summary

This report documents the implementation and justification of Dijkstra's algorithm within the Pegasus Rider application. The algorithm serves as a core component for route optimization and ride-sharing matching functionality, enabling efficient transportation solutions for users.

---

## 2. Introduction

### 2.1 Background
Pegasus Rider is a ride-hailing application that connects riders with drivers. A critical requirement for such applications is the ability to:
- Calculate optimal routes between pickup and destination points
- Match riders with similar routes for shared rides (ride-pooling)
- Estimate travel times and distances accurately
- Minimize detours when combining multiple riders

### 2.2 Why Dijkstra's Algorithm?
Dijkstra's algorithm, developed by Edsger W. Dijkstra in 1956, is a graph-based shortest path algorithm that finds the minimum-weight path between nodes. It was chosen for this application because:

1. **Guaranteed Optimality**: Provides the mathematically shortest path for graphs with non-negative edge weights
2. **Efficiency**: O((V + E) log V) time complexity with a priority queue implementation
3. **Industry Standard**: Widely used in navigation and transportation systems
4. **Extensibility**: Serves as a foundation for more complex route matching algorithms

---

## 3. Technical Implementation

### 3.1 Core Components

The implementation resides in `src/app/services/dijkstra.service.ts` and consists of:

#### 3.1.1 MinHeap Priority Queue
```typescript
class MinHeap {
  private heap: HeapNode[] = [];

  push(node: HeapNode): void {
    this.heap.push(node);
    this.bubbleUp(this.heap.length - 1);
  }

  pop(): HeapNode | undefined {
    if (this.heap.length === 0) return undefined;
    const min = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0 && last) {
      this.heap[0] = last;
      this.bubbleDown(0);
    }
    return min;
  }
}
```

The MinHeap ensures optimal performance by maintaining O(log n) insertion and extraction operations, which is essential for Dijkstra's algorithm efficiency.

#### 3.1.2 Core Dijkstra Algorithm
```typescript
runDijkstra(
  graph: Map<string, GraphNode>,
  startId: string,
  endId: string
): PathResult | null {
  const distances: Map<string, number> = new Map();
  const previous: Map<string, string | null> = new Map();
  const visited: Set<string> = new Set();
  const heap = new MinHeap();

  // Initialize all distances to infinity
  graph.forEach((_, nodeId) => {
    distances.set(nodeId, Infinity);
    previous.set(nodeId, null);
  });

  // Start node has distance 0
  distances.set(startId, 0);
  heap.push({ nodeId: startId, distance: 0 });

  while (!heap.isEmpty()) {
    const current = heap.pop()!;
    
    if (visited.has(current.nodeId)) continue;
    visited.add(current.nodeId);

    if (current.nodeId === endId) break;

    const currentNode = graph.get(current.nodeId);
    if (!currentNode) continue;

    // Relaxation step - update distances to neighbors
    for (const edge of currentNode.neighbors) {
      if (visited.has(edge.targetId)) continue;

      const newDistance = distances.get(current.nodeId)! + edge.weight;
      
      if (newDistance < distances.get(edge.targetId)!) {
        distances.set(edge.targetId, newDistance);
        previous.set(edge.targetId, current.nodeId);
        heap.push({ nodeId: edge.targetId, distance: newDistance });
      }
    }
  }

  // Path reconstruction...
}
```

### 3.2 Data Structures

| Structure | Purpose |
|-----------|---------|
| `GraphNode` | Represents intersection/waypoint with lat/lng coordinates |
| `Edge` | Connection between nodes with weight (distance/time) |
| `PathResult` | Contains computed path, coordinates, total distance, and duration |
| `HeapNode` | Priority queue entry with nodeId and current distance |

### 3.3 Integration with Google Maps

The service integrates with Google Directions API to obtain real-world route data:

```typescript
async findShortestPath(origin: LatLng, destination: LatLng): Promise<PathResult> {
  // Check cache first
  const cached = this.getFromCache(cacheKey);
  if (cached) return cached;

  // Use Google Directions API for real-world routing
  const route = await this.getGoogleDirectionsRoute(origin, destination);
  
  // Cache and return result
  this.setCache(cacheKey, pathResult);
  return pathResult;
}
```

---

## 4. Application Use Cases

### 4.1 Route Calculation
When a rider requests a trip, the algorithm calculates the optimal path from their pickup location to the destination, considering:
- Road network topology
- Traffic conditions (via Google API)
- Distance and estimated travel time

### 4.2 Ride-Sharing Matching
The algorithm enables intelligent ride-pooling by:

1. **Computing Route Overlap**: Using Jaccard similarity on grid-based path representation
```typescript
calculateRouteOverlap(path1: PathResult, path2: PathResult): number {
  // Grid-based approach with 100m cells
  const GRID_SIZE = 100;
  
  // Create sets of grid cells for each path
  const set1 = new Set<string>();
  const set2 = new Set<string>();
  
  // Calculate Jaccard similarity: intersection / union
  return intersection / union;
}
```

2. **Directional Awareness**: Ensuring matched routes travel in the same direction
```typescript
calculateDirectionalOverlap(path1: PathResult, path2: PathResult): number {
  const basicOverlap = this.calculateRouteOverlap(path1, path2);
  // Penalize opposite-direction routes
  return basicOverlap * (0.5 + 0.5 * directionScore);
}
```

3. **Detour Cost Estimation**: Calculating if combining riders is efficient
```typescript
async findSimilarRoutes(
  riderPath: PathResult,
  candidates: RideCandidate[],
  maxDetourPercent: number = 0.25  // Max 25% detour allowed
): Promise<ScoredMatch[]>
```

### 4.3 Distance Calculations
The Haversine formula provides accurate geodesic distance calculations:
```typescript
calculateHaversineDistance(point1: LatLng, point2: LatLng): number {
  // Earth radius: 6,371,000 meters
  // Returns distance in meters between two GPS coordinates
}
```

---

## 5. Performance Optimizations

### 5.1 Caching Strategy
- **Cache TTL**: 5 minutes for computed paths
- **Cache Key**: Based on rounded coordinates (5 decimal places ≈ 1 meter precision)
- **Auto-cleanup**: Removes expired entries when cache exceeds 100 items

### 5.2 Complexity Analysis

| Operation | Time Complexity | Space Complexity |
|-----------|-----------------|------------------|
| Dijkstra (with MinHeap) | O((V + E) log V) | O(V) |
| Route Overlap | O(n + m) | O(n + m) |
| Haversine Distance | O(1) | O(1) |
| Cache Lookup | O(1) | O(n) |

Where V = vertices, E = edges, n = path1 length, m = path2 length

---

## 6. Algorithm Comparison

| Algorithm | Pros | Cons | Use Case |
|-----------|------|------|----------|
| **Dijkstra** ✓ | Optimal, efficient, simple | No negative weights | Road networks |
| Bellman-Ford | Handles negative weights | O(VE) slower | Currency exchange |
| A* | Faster with heuristic | Requires heuristic | Game pathfinding |
| Floyd-Warshall | All-pairs shortest path | O(V³) slow | Small dense graphs |

**Conclusion**: Dijkstra's algorithm is the optimal choice for road network pathfinding where edge weights (distances/times) are always positive.

---

## 7. Usage in Application

### 7.1 Files Using DijkstraService

| File | Usage |
|------|-------|
| `home.page.ts` | Main ride booking - calculates route for trip request |
| `nearby-rider.service.ts` | Finds nearby riders with similar routes for pooling |
| `shared-ride-prompt.component.ts` | Displays shared ride options with savings |

### 7.2 Example Flow

```
┌─────────────────────────────────────────────────────────────────┐
│  1. Rider enters destination                                     │
│                    ↓                                             │
│  2. DijkstraService.findShortestPath() called                   │
│                    ↓                                             │
│  3. Google Directions API returns route                         │
│                    ↓                                             │
│  4. Path cached for future requests                             │
│                    ↓                                             │
│  5. findSimilarRoutes() matches with other riders               │
│                    ↓                                             │
│  6. Rider shown shared ride option with potential savings       │
└─────────────────────────────────────────────────────────────────┘
```

---

## 8. Conclusion

The implementation of Dijkstra's algorithm in Pegasus Rider provides:

1. **Reliable Route Calculation**: Guaranteed shortest paths for all trip requests
2. **Efficient Ride-Sharing**: Intelligent matching of riders with overlapping routes
3. **Cost Savings**: Up to 40% fare reduction through optimized ride pooling
4. **Scalable Performance**: Caching and efficient data structures ensure responsiveness

The algorithm serves as the computational backbone for the application's core transportation features, enabling a seamless and cost-effective ride-hailing experience.

---

## 9. References

1. Dijkstra, E. W. (1959). "A note on two problems in connexion with graphs". *Numerische Mathematik*. 1: 269–271.
2. Cormen, T. H., et al. (2009). *Introduction to Algorithms* (3rd ed.). MIT Press.
3. Google Maps Platform Documentation - Directions API
4. Haversine Formula for Geographic Distance Calculation

---

## Appendix A: Interface Definitions

```typescript
interface LatLng {
  lat: number;
  lng: number;
}

interface GraphNode {
  id: string;
  lat: number;
  lng: number;
  neighbors: Edge[];
}

interface Edge {
  targetId: string;
  weight: number;    // Travel time in seconds
  distance: number;  // Distance in meters
}

interface PathResult {
  nodes: string[];
  coordinates: LatLng[];
  totalWeight: number;
  totalDistance: number;
  encodedPolyline?: string;
}

interface RideCandidate {
  requestId: string;
  riderId: string;
  origin: LatLng;
  destination: LatLng;
  path?: PathResult;
}

interface ScoredMatch {
  candidate: RideCandidate;
  overlapScore: number;      // 0-1 Jaccard similarity
  detourCost: number;        // Additional meters
  detourPercent: number;     // % increase in distance
  potentialSavings: number;  // % fare savings (10-40%)
}
```

---

*Document prepared for Pegasus Rider Project - December 2025*

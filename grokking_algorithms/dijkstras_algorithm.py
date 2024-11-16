import math 

graph = {}
costs = {}
parents = {}

# Set up graph
graph["start"] = {}
graph["start"]["a"] = 6
graph["start"]["b"] = 2

graph["a"] = {}
graph["a"]["fin"] = 1

graph["b"] = {}
graph["b"]["a"] = 3
graph["b"]["fin"] = 5

graph["fin"] = {}

# print(list(graph["start"].keys()))

# print(graph["start"]["a"])
# print(graph["start"]["b"])

# Set up costs
infinity = math.inf
costs["a"] = 6
costs["b"] = 2
costs["fin"] = infinity

# Set up parents
parents["a"] = "start"
parents["b"] = "start"
parents["fin"] = None

# Prevent node reprocessing
processed = set()

def dijkstras_algorithm(graph, costs, parents):

    def find_lowest_cost_node(costs):
        lowest_cost = math.inf
        lowest_cost_node = None
        for node in costs:
            cost = costs[node]
            if cost < lowest_cost and node not in processed:
                lowest_cost = cost
                lowest_cost_node = node
        return lowest_cost_node

    node = find_lowest_cost_node(costs)
    while node is not None:
        cost = costs[node]
        neighbors = graph[node]
        
        for n in neighbors.keys():
            new_cost = cost + neighbors[n]
            if costs[n] > new_cost:
                costs[n] = new_cost
                parents[n] = node
        processed.add(node)
        node = find_lowest_cost_node(costs)
    
    return {"costs": costs, "parents": parents}

# print(dijkstras_algorithm(graph["start"], costs, parents))


graph_a = {"start": {"a": 5, "b": 2}, "a": {"c": 4, "d": 2}, "b": {"a": 8, "d": 7}, "c": {"fin": 3, "d": 6}, "d": {"fin": 1}, "fin": {}}
costs_a = {"a": 5, "b": 2, "c": math.inf, "d": math.inf, "fin": math.inf}
parents_a = {"a": "start", "b": "start", "c": None, "d": None, "fin": None}


# weight of shortest path is 8
# print(dijkstras_algorithm(graph_a, costs_a, parents_a))

graph_b = {"start": {"a": 10}, "a": {"c": 20}, "b": {"a": 1}, "c": {"b": 1, "fin": 30}, "fin": {}}
costs_b = {"a": 10, "b": math.inf, "c": math.inf, "fin": math.inf}
parents_b = {"a": "start", "b": None, "c": None, "fin": None}

# weight of shortest path is 60
# print(dijkstras_algorithm(graph_b, costs_b, parents_b))

graph_c = {"start": {"a": 2, "b": 2}, "a": {"c": 2, "fin": 2}, "b": {"a": 2}, "c": {"b": -1, "fin": 2}, "fin": {}}
costs_c = {"a": 2, "b": 2, "c": math.inf, "fin": math.inf}
parents_c = {"a": "start", "b": "start", "c": None, "fin": None}

print(dijkstras_algorithm(graph_c, costs_c, parents_c))



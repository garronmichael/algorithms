# 10.1 Pack the largest box until none fit. It is likely not optimal because there will be a lot leftover space.

# 10.2 See the things with the highest point totals until I run out of time. It is likely to give me the optimal solution because I see the things I want to the most

arr = [1, 2, 3, 3, 3, 3]
# print(set(arr))

fruits = set(["avocado", "tomato", "banana"])
vegetables = set(["beets", "carrots", "tomato"])

# print(fruits | vegetables)
# print(fruits & vegetables)
# print(fruits - vegetables)
# print(vegetables - fruits)

states_needed = set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"])
stations = {
    "kone": set(["id", "nv", "ut"]),
    "ktwo": set(["wa", "id", "mt"]),
    "kthree": set(["or", "nv", "ca"]),
    "kfour": set(["nv", "ut"]),
    "kfive": set(["ca", "az"])
}
final_stations = set()

while states_needed:
    best_station = None
    states_covered = set()
    for station, states_for_station in stations.items():
        covered = states_needed & states_for_station
        if len(covered) > len(states_covered):
            best_station = station
            states_covered = covered
    final_stations.add(best_station)
    states_needed -= states_covered

print(final_stations)




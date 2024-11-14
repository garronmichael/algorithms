from os import listdir
from os.path import isfile, join
from collections import deque

# bfs
# def printnames(start_dir):
#     search_queue = deque()
#     search_queue.append(start_dir)
#     while search_queue:
#         dir = search_queue.popleft()
#         for file in sorted(listdir(dir)):
#             fullpath = join(dir, file)
#             if isfile(fullpath):
#                 print(file)
#             else:
#                 search_queue.append(fullpath)

# printnames("pics")

# dfs
def printnames(dir):
    for file in sorted(listdir(dir)):
        fullpath = join(dir, file)
        if isfile(fullpath):
            print(file)
        else:
            printnames(fullpath)

printnames("pics")


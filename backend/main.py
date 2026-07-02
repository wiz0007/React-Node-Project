from fastapi import FastAPI
from pydantic import BaseModel
from typing import List, Dict
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "https://react-node-project-lm7m.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Node(BaseModel):
    id: str

class Edge(BaseModel):
    source: str
    target: str

class Pipeline(BaseModel):
    nodes: List[Node]
    edges: List[Edge]


def is_dag(nodes: List[Node], edges: List[Edge]) -> bool:
    # Build adjacency list
    adj: Dict[str, List[str]] = {node.id: [] for node in nodes}
    for edge in edges:
        adj[edge.source].append(edge.target)

    visited = set()
    recursion_stack = set()

    def dfs(node):
        if node in recursion_stack:
            return False
        if node in visited:
            return True

        visited.add(node)
        recursion_stack.add(node)

        for neighbor in adj.get(node, []):
            if not dfs(neighbor):
                return False

        recursion_stack.remove(node)
        return True

    for node in adj:
        if node not in visited:
            if not dfs(node):
                return False

    return True


@app.post("/pipelines/parse")
def parse_pipeline(pipeline: Pipeline):
    num_nodes = len(pipeline.nodes)
    num_edges = len(pipeline.edges)

    dag = is_dag(pipeline.nodes, pipeline.edges)

    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": dag,
    }

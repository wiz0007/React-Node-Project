import { useStore } from './store';
import { API_BASE_URL } from './config';

export const SubmitButton = () => {
  const { nodes, edges } = useStore((state) => ({
    nodes: state.nodes,
    edges: state.edges,
  }));

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/pipelines/parse`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nodes: nodes.map((n) => ({ id: n.id })),
            edges: edges.map((e) => ({
              source: e.source,
              target: e.target,
            })),
          }),
        }
      );

      const result = await response.json();

      alert(
        `Pipeline Analysis:\n\n` +
        `Nodes: ${result.num_nodes}\n` +
        `Edges: ${result.num_edges}\n` +
        `Is DAG: ${result.is_dag ? 'Yes' : 'No'}`
      );
    } catch (error) {
      alert('Failed to submit pipeline');
      console.error(error);
    }
  };

  return (
    <button
      onClick={handleSubmit}
      style={{
        margin: '12px',
        padding: '8px 16px',
        borderRadius: '8px',
        background: '#2563eb',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
      }}
    >
      Submit
    </button>
  );
};

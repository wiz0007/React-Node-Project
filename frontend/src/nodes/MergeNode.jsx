import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const MergeNode = ({ id }) => {
  return (
    <BaseNode
      title="Merge"
      handles={[
        { type: 'target', position: Position.Left, id: `${id}-left`, style: { top: '35%' } },
        { type: 'target', position: Position.Left, id: `${id}-right`, style: { top: '65%' } },
        { type: 'source', position: Position.Right, id: `${id}-out` },
      ]}
    >
      <span>Merges inputs</span>
    </BaseNode>
  );
};

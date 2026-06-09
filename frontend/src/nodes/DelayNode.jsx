import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const DelayNode = ({ id }) => {
  return (
    <BaseNode
      title="Delay"
      handles={[
        { type: 'target', position: Position.Left, id: `${id}-in` },
        { type: 'source', position: Position.Right, id: `${id}-out` },
      ]}
    >
      <span>Waits before continuing</span>
    </BaseNode>
  );
};

import { Handle } from 'reactflow';
import styles from './BaseNode.module.css';

// This is a base node component that can be used to create different types of nodes in the pipeline. It accepts a title, an array of handles, and children components to render inside the node.

export const BaseNode = ({ title, handles = [], children }) => {
  return (
    <div className={styles.node}>
      <div className={styles.title}>{title}</div>

      <div className={styles.body}>
        {children}
      </div>

      {handles.map((handle) => (
        <Handle
          key={handle.id}
          type={handle.type}
          position={handle.position}
          id={handle.id}
          style={handle.style}
        />
      ))}
    </div>
  );
};

import { Handle } from 'reactflow';
import styles from './BaseNode.module.css';

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

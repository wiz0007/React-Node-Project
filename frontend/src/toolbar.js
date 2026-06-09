// toolbar.js

import { DraggableNode } from "./draggableNode";
import styles from "./toolbar.module.css";

export const PipelineToolbar = () => {
  return (
    <div className={styles.toolbar}>
      <div className={styles.nodes}>
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="customOutput" label="Output" />
        <DraggableNode type="text" label="Text" />
        <DraggableNode type="delay" label="Delay" />
        <DraggableNode type="logger" label="Logger" />
        <DraggableNode type="math" label="Math" />
        <DraggableNode type="condition" label="Condition" />
        <DraggableNode type="merge" label="Merge" />
      </div>
    </div>
  );
};

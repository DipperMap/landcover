/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Tree } from "antd";
import styles from "./index.module.less";
import { DataNode } from "rc-tree/lib/interface";

const treeData: DataNode[] = [];

export const DataPanel = () => {
  const onSelect = (keys: any, info: any) => {
    console.log("key", keys, info);
  };

  return (
    <div className={styles.dataPanel}>
      <div className={styles.dataSelect}>
        <div style={{ marginBottom: 8 }}>数据选择:</div>
        <Tree
          showLine
          showIcon
          defaultExpandedKeys={["0-0-0"]}
          onSelect={onSelect}
          checkStrictly={false}
          treeData={treeData}
        />
      </div>
      <div style={{ marginTop: 16 }}>
        <div style={{ marginBottom: 8 }}>下载数据:</div>
        <Button type="primary">数据下载</Button>
      </div>
    </div>
  );
};

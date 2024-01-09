/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Radio, RadioChangeEvent, Spin, Tree, message } from "antd"
import styles from "./index.module.less"
import { mockTree } from "./mock-tree"
import { useState } from "react"
import { getEnv, setFetchHeader } from "../../../utils"
import { TileData } from "../../../typing"
import dayjs from "dayjs"

type DataPanelProps = {
  setSelectDataTile: (value: TileData | undefined) => void;
  cityInfo: { path: string, code: string } | undefined
}

const bytesPerDataType: Record<string, number> = {
  'byte': 1,
  'int16': 2,
  'uint16': 2,
  'int32': 4,
  'uint32': 4,
  'float32': 4,
  'float64': 8,
  'cint16': 4,
  'cint32': 8,
  'cfloat32': 8,
  'cfloat64': 16
};

const PUBLIC_PATH = "/www/wwwroot/landcover100/public"

export const DataPanel = (props: DataPanelProps) => {
  const { setSelectDataTile, cityInfo } = props
  const [value, setValue] = useState<string>("")
  const [loading, setLoading] = useState(false)

  const onSelect = (keys: any) => {
    if (keys.length === 0) {
      setSelectDataTile(undefined)
      return
    }
    const [key] = keys
    fetch(
      getEnv('/getResourceTree'),
      setFetchHeader({ id: key })
    )
      .then((res) => res.json())
      .then((res) => {
        setSelectDataTile(res)
      }).catch((err) => {
        message.error(err)
        setSelectDataTile(undefined)
      })
  }

  const onRadioChange = (e: RadioChangeEvent) => {
    const newValue = e.target.value
    setValue(newValue)
  }

  const onDownLoadData = async () => {
    if (!value) {
      message.info("请选择数据源")
      return
    }
    if (!cityInfo?.path) {
      message.info("请选择下载区域")
      return
    }
    const vectorDataFilePath = `${PUBLIC_PATH}${cityInfo.path}`
    const newValue = value.includes("#") ? value.replace("#", '') : value
    setLoading(true)
    const [alculateArea, getResourceTree] = await Promise.all([
      fetch(getEnv('/calculate_area'), setFetchHeader({ vectorDataFilePath })).then((res) => res.json()),
      fetch(getEnv('/getResourceTree'), setFetchHeader({ id: newValue })).then((res) => res.json())
    ])
    const { dataType, resolution, zip_level, resPath } = getResourceTree || {}

    const totalPixels = (+alculateArea.area) * (1000 / +resolution) ** 2;
    const fileSizeBytes = totalPixels * bytesPerDataType[dataType];
    const maxSize = fileSizeBytes / (+zip_level * 1024 ** 2);
    if (maxSize > 100) {
      message.info("预计文件超过100M，本网站是非盈利网站，超出网站的服务范围，请缩小面积")
      return
    }
    const fileExt = cityInfo.path.split('/').pop();
    const rasterFilename = fileExt!.split('.').shift() + "_" + newValue;
    const newTime = `${rasterFilename}_${dayjs().format("YYYYMMDDHHmmss")}`
    const outputRasterPath = `${PUBLIC_PATH}/${newTime}.tif`

    const params = {
      vectorDataFilePath,
      outputRasterPath,
      inputRasterPath: resPath
    };
    const result = await fetch(getEnv("/clip_raster"), setFetchHeader(params))
    const { outputPath } = await result.json()
    if (outputPath) {
      const last = outputPath.split('/').pop()
      const link = document.createElement('a');
      link.href = `https://www.landcover100.com/download_raster?filePath=${last}`;
      link.download = ".tif";
      link.target = '_blank';
      link.click();
    }
    setLoading(false)
  }


  const titleRender = (nodeData: any) => {
    const hasChildren = nodeData.children
    return (
      <div>{
        hasChildren
          ? nodeData.title
          : <Radio.Group onChange={onRadioChange} value={value}>
            <Radio value={nodeData.key}>
              <div onClick={() => {
                setValue("")
              }}>{nodeData.title}</div>
            </Radio>
          </Radio.Group>}
      </div>
    )
  }

  return (
    <div className={styles.dataPanel}>
      <Spin spinning={loading} tip="请稍等，正在处理...">
        <div className={styles.dataSelect}>
          <div style={{ marginBottom: 8 }}>数据选择:</div>
          <Tree
            showLine
            showIcon
            selectable={false}
            checkable={false}
            onSelect={onSelect}
            defaultExpandedKeys={['TDFG', "DEM"]}
            checkStrictly={false}
            treeData={mockTree}
            titleRender={titleRender}
          />
        </div>
      </Spin>
      <div style={{ marginTop: 16 }}>
        <div style={{ marginBottom: 8 }}>下载数据:</div>
        <Button type="primary" style={{ width: 250 }} onClick={() => onDownLoadData()}>数据下载</Button>
      </div>
    </div>
  )
}

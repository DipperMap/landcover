/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChoroplethLayer, CustomControl, LineLayer, PointLayer, useScene } from "@antv/larkmap"
import { Select, Cascader, Upload, message } from "antd"
import { SingleValueType } from "rc-cascader/lib/Cascader"
import { useEffect, useMemo, useState } from "react"
import { CITY_LIST, CoordType, ICON, layerOptions, lineOptions, optionSelect, pointOptions, queryRegionData } from "./constants"
import { InboxOutlined } from "@ant-design/icons"
import * as turf from "@turf/turf"
import { DrawControlLand } from "./draw"
import styles from "./index.module.less"
import { getEnv } from "../../../utils"

const { Dragger } = Upload;


export const LocationSelect = () => {
  const scene = useScene()
  const [coordType, setCoordType] = useState<keyof typeof CoordType>()
  const [select, setSelect] = useState("admin")
  const [regionData, setRegionData] = useState<any>()
  const [options, setOptions] = useState<any[]>([]);

  useEffect(() => {
    fetch(CITY_LIST)
      .then((res) => res.json())
      .then((result) => {
        setOptions(result)
      })
  }, [])

  const onChange = (value: string) => {

    setSelect(value)
  }

  const onCityChange = async (value: SingleValueType) => {
    const code = value[value.length - 1] as string
    const featureData: any = await queryRegionData(code)
    const firstFeature = featureData.features[0]
    setCoordType((turf as any).getType(firstFeature))
    setRegionData(featureData)
  }

  // 自定义上传逻辑
  const customRequest = async (options: any) => {
    const formData = new FormData()
    formData.append('file', options.file)
    const response = await fetch(getEnv("/uploadvector"), {
      method: 'POST',
      body: formData

    });
    const result = await response.json();
    if (response.ok) {
      fetch(getEnv(`/${result.fileUrl}`))
        .then((res) => res.json())
        .then((res) => {
          const firstFeature = res.features[0]
          setCoordType((turf as any).getType(firstFeature))
          setRegionData(res)
        })
    } else {
      message.error('Upload failed:', result.message);
    }
  }


  // 区域选择控件
  const CascaderControl = () => {
    if (options.length === 0) return null
    return (
      <Cascader
        style={{ width: 200, marginLeft: 8 }}
        showSearch
        options={options}
        expandTrigger="hover"
        placeholder="请选择区域"
        fieldNames={{ label: "name", value: "code" }}
        onChange={onCityChange}
        changeOnSelect
      />
    )
  }

  // 上传控件
  const UploadControl = () => {
    return (
      <Dragger
        accept="shp,geojson,kml"
        showUploadList={false}
        style={{ width: 200, background: "#fff", marginTop: 8 }}
        customRequest={customRequest}
      >
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-hint">请上传矢量文件（支持上传shp、geojson和kml格式）</p>
      </Dragger>
    )
  }

  const controlRender = useMemo(() => {
    if (select === "admin") return <CascaderControl />
    if (select === "upload") return <UploadControl />
    // 绘制控件  https://l7draw.antv.vision/
    return <DrawControlLand />
  }, [select, options])

  // 对上传的数据类型进行处理,不同的形状用不同的图层
  const layerRender = useMemo(() => {
    if (!regionData && !coordType) return null

    if (coordType === "MultiPolygon" || coordType === "Polygon") {
      return <ChoroplethLayer {...layerOptions} source={{ data: regionData }} />
    }
    if (coordType === "Point") {
      scene?.addImage("img", ICON)
      return <PointLayer {...pointOptions} source={{ data: regionData }} />
    }
    if (coordType === "LineString" || coordType === "MultiLineString") {
      return <LineLayer {...lineOptions} source={{ data: regionData }} />
    }
  }, [regionData, coordType, scene])

  return (
    <div className={styles.region}>
      <CustomControl position="lefttop">
        <Select
          defaultValue={select}
          style={{ width: select === "upload" ? 200 : 180, transition: 'width 0.2s 0.3s ease-in' }}
          options={optionSelect}
          onChange={onChange}
        />
        {controlRender}
      </CustomControl>
      {layerRender}
    </div>

  )
}
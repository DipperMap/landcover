/* eslint-disable @typescript-eslint/no-explicit-any */
import { getSingleColorStyle } from "@antv/l7-draw";
import { ChoroplethLayerProps, LineLayerProps, PointLayerProps } from "@antv/larkmap";
import { message } from "antd";
import { getEnv } from "../../../utils";


export const enum CoordType {
  Point = "Point",
  LineString = "LineString",
  Polygon = "Polygon",
  MultiPolygon = "MultiPolygon",
  MultiLineString = "MultiLineString"
}

export const CITY_LIST = "https://mdn.alipayobjects.com/afts/file/A*1t_pTZauqCIAAAAAAAAAAAAADrd2AQ/city.json"

export const ICON = "https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*CHCXT7F_3YkAAAAAAAAAAAAADmJ7AQ/original"

export const layerOptions: Omit<ChoroplethLayerProps, 'source'> = {
  autoFit: true,
  fillColor: "#1677ff",
  opacity: 0.3,
  strokeColor: '#000',
  lineWidth: 2,
  zIndex: 2,
  label: {
    field: '省',
    visible: true,
    style: { fill: '#fff', fontSize: 12, stroke: '#000', strokeWidth: 2 },
  },
};

export const pointOptions: Omit<PointLayerProps, 'source'> = {
  autoFit: true,
  shape: 'img',
  size: 12,
  zIndex: 3,
};

export const lineOptions: Omit<LineLayerProps, 'source'> = {
  autoFit: true,
  shape: 'line' as const,
  size: 1.5,
  color: "#1677ff",
  style: {
    opacity: 1,
    lineType: 'solid' as const,
  },
  zIndex: 4,
};


export const queryRegionData = (code: string) => {
  const newCode = code.length === 9 ? `${code}000` : code
  return new Promise<any>((resolve, reject) => {
    const header = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ code: newCode })
    }
    fetch(getEnv("/getGsonDB"), header)
      .then(response => response.json())
      .then(data => {
        if (data.status === 'success') {
          fetch(getEnv(`${data.filepath}`)).then((res) => res.json()).then((res) => resolve({ path: data.filepath, res }))
        } else {
          reject()
          message.error(data.message)
        }
      })
      .catch(() => {
        message.info("暂无数据")
      });
  })
}

export const optionSelect = [
  { label: "行政区划", value: "admin" },
  { label: "本地上传", value: "upload" },
  { label: "绘制", value: "draw" }
]

export const getDrawStyle = (color: string, LayerZIndex: number) => {
  const style: any = getSingleColorStyle(color);
  Object.keys(style).forEach((key) => {
    style[key].options = {
      ...style[key].options,
      zIndex: LayerZIndex,
    };
  });
  return style;
};
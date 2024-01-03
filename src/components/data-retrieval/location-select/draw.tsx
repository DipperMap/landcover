import { useEffect, useRef } from "react";
import { ControlEvent, DrawControl } from '@antv/l7-draw';
import { useScene } from "@antv/larkmap";
import { FeatureCollection } from "geojson";
import * as turf from "@turf/turf"
import { getDrawStyle } from "./constants";
import { getEnv } from "../../../utils";

export const DrawControlLand = () => {
  const scene = useScene()
  const drawRef = useRef<DrawControl>()

  const parserDrawData = (polygonList: Record<string, FeatureCollection['features']>) => {
    const newList = []
    for (const key in polygonList) {
      if (Object.prototype.hasOwnProperty.call(polygonList, key)) {
        const list = polygonList[key];
        if (list.length !== 0) {
          newList.push(...list)
        }
      }
    }
    const featureCollection = turf.featureCollection(newList)
    const header = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(featureCollection)
    }
    if (newList.length !== 0) {
      fetch(getEnv("/savegeojson"), header)
        .then((res) => res.json())
        .then((res) => console.log(res))
    }
  }

  useEffect(() => {
    if (drawRef.current && !scene) return
    drawRef.current = new DrawControl(scene, {
      commonDrawOptions: {
        style: getDrawStyle("#1677ff", 7),
      }
    });
    // 将 Control 添加至地图中
    scene.addControl(drawRef.current);

    // 监听绘制数据改变
    drawRef.current.on(ControlEvent.DataChange, parserDrawData)

    return () => {
      scene.removeControl(drawRef.current as DrawControl)
      drawRef.current = undefined
    }
  }, [scene, drawRef])


  return null
}
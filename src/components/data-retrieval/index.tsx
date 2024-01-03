/* eslint-disable @typescript-eslint/no-explicit-any */
import { IMapConfig } from "@antv/l7"
import { LarkMap, MapThemeControl, ScaleControl, ZoomControl } from "@antv/larkmap"
import styles from './index.module.less'
import { MapLayer } from "./map-layer"
import { DataPanel } from "./data-panel"
import { LocationSelect } from "./location-select"
import { RasterLayerRender } from "./layer/rasterLayer"
import { useState } from "react"

const mapOptions: Partial<IMapConfig> = {
  zoom: 9,
  center: [120.3234, 30.1224],
  style: "normal",
  token: '15cd8a57710d40c9b7c0e3cc120f1200',
}


export const DataRetrieval = () => {
  const [selectTileData, setSelectDataTile] = useState<any>()
  const [cityInfo, setCityInfo] = useState<{ path: string, code: string }>()
  return (
    <div className={styles.dataRetrieval}>
      <LarkMap
        className={styles.larkMapContainer}
        mapOptions={mapOptions}
      >
        <MapThemeControl />
        <ZoomControl />
        <ScaleControl />
        <MapLayer />
        <LocationSelect setCityInfo={setCityInfo} />
        <RasterLayerRender tileData={selectTileData} />
      </LarkMap>
      <DataPanel setSelectDataTile={setSelectDataTile} cityInfo={cityInfo} />
    </div>

  )
}
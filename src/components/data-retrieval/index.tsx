import { IMapConfig } from "@antv/l7"
import { LarkMap, ScaleControl, ZoomControl } from "@antv/larkmap"
import styles from './index.module.less'
import { MapLayer } from "./map-layer"
import { DataPanel } from "./data-panel"

const mapOptions: Partial<IMapConfig> = {
  zoom: 9,
  center: [120.3234, 30.1224],
  style: "light",
  token: 'f0230f884bbd54e2913c890cdf45aa7e',
}


export const DataRetrieval = () => {
  return (
    <div className={styles.dataRetrieval}>
      <DataPanel />
      <LarkMap mapType="GaodeV2" className={styles.larkMapContainer} mapOptions={mapOptions}>
        <ZoomControl />
        <ScaleControl />
        <MapLayer />
      </LarkMap>
    </div>

  )
}
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import { RasterLayer, useScene } from "@antv/larkmap"
import { TileData } from "../../../typing"
import { useEffect, useMemo } from "react"
import React from "react"
import { removeRasterLayer } from "../../../utils"

type RasterLayerRenderProps = {
  tileData: TileData
}

export const RasterLayerRender = React.memo((props: RasterLayerRenderProps) => {
  const { tileData } = props
  const scene = useScene()
  const newUrl = useMemo(() => {
    if (!tileData) return null
    const params = new URL(decodeURIComponent(tileData.wmts))
    const search = params.searchParams
    const search1 = new URLSearchParams()
    let tileXyz = ""
    search.forEach((value, key) => {
      if (key === "TileMatrix" || key === "TileCol" || key === "TileRow") {
        tileXyz += `&${key}=${value}`
      } else {
        search1.set(key, value)
      }
    });
    return {
      tilePath: `/tile/${params.pathname}?${decodeURIComponent(search1.toString())}`,
      params: tileXyz
    }
  }, [tileData])

  useEffect(() => {
    if (!newUrl && scene) {
      removeRasterLayer(scene, "tileData")
    }
  }, [scene, newUrl])

  const getCustomData = ({ x, y, z }: Record<string, number>, cb: Function) => {
    if (newUrl) {
      const xyzConn = `${newUrl.tilePath}&TileCol=${x}&TileRow=${y}&TileMatrix=${z}`
      fetch(xyzConn).then((res) => res.arrayBuffer()).then(res => cb(null, res))
    }
  }


  return newUrl && <RasterLayer
    id="tileData"
    zIndex={9}
    source={{
      data: newUrl?.tilePath + newUrl?.params,
      parser: {
        type: 'rasterTile',
        dataType: "customImage",
        tileSize: 256,
        zoomOffset: 0,
        getCustomData: getCustomData
      }
    }}
  />


}, () => false)


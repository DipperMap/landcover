/* eslint-disable @typescript-eslint/no-explicit-any */
import { Scene } from "@antv/l7";

export const getEnv = (url: string) => process.env.NODE_ENV === 'development' ? `/api${url}` : url;


export const removeRasterLayer = (scene: Scene, layerId: string) => {
  const layer = scene.getLayers().filter((item) => item.type === "RasterLayer")
  layer.forEach((item) => {
    if (!(item as any).rawConfig.id) return
    const id = (item as any).rawConfig.id
    if (id === layerId) {
      const targetLayer = scene.getLayer(item.id)
      if (targetLayer) {
        scene.removeLayer(targetLayer)
      }
    }
  })
  window.requestAnimationFrame(() => scene?.render())
}


export const setFetchHeader = (bodyParams: Record<string, any>) => {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bodyParams)
  }
}
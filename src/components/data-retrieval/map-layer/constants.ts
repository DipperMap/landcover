export const GOOGLE_TILE_MAP_URL =
  'https://gac-geo.googlecnapps.cn/maps/vt?lyrs=s&gl=CN&x={x}&y={y}&z={z}';

export const GOOGLE_TILE_MAP_ROUTER_URL =
  'https://gac-geo.googlecnapps.cn/maps/vt?lyrs=h&gl=CN&x={x}&y={y}&z={z}';

export const GEO_VIS_EARTH = "https://tiles{1-3}.geovisearth.com/base/v1/img/{z}/{x}/{y}?format=webp&tmsIds=w&token=b2a0cfc132cd60b61391b9dd63c15711eadb9b38a9943e3f98160d5710aef788"

export enum OfficeLayerEnum {
  GoogleSatellite = 'googleSatellite',
  VectorMap = 'vectorMap',
  GeoVisEarth = 'geoVisEarth'
}


export const BASE_LAYER_GROUP = [
  {
    type: OfficeLayerEnum.VectorMap,
    title: "矢量地图",
    image:
      'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*qdFDSbvIalgAAAAAAAAAAAAADmJ7AQ/original',
    layers: undefined,
  },
  {
    type: OfficeLayerEnum.GoogleSatellite,
    title: "谷歌遥感地图",
    image:
      'https://mdn.alipayobjects.com/huamei_k6sfo0/afts/img/A*zi2jSqqZ2-8AAAAAAAAAAAAADjWqAQ/original',
    layers: [GOOGLE_TILE_MAP_URL, GOOGLE_TILE_MAP_ROUTER_URL],
  },
  {
    type: OfficeLayerEnum.GeoVisEarth,
    title: "星图地图",
    image:
      'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*Gg87TbHRYNcAAAAAAAAAAAAADmJ7AQ/original',
    layers: [GEO_VIS_EARTH],
  },
];
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  CaretRightOutlined
} from '@ant-design/icons';
import { CustomControl, RasterLayer, useScene } from '@antv/larkmap';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { BASE_LAYER_GROUP, OfficeLayerEnum } from './constants';
import styles from './index.module.less';

export function MapLayer() {
  const scene = useScene()
  const [layerType, setLayerType] = useState<string[]>([]);

  const [radioValue, setRadioValue] = useState<string>(
    layerType.length ? layerType[0] : OfficeLayerEnum.VectorMap,
  );
  const [hideOfficeLayer, setHideOfficeLayer] = useState(false)

  const onItemClick = (item: {
    type: string;
    image: string;
    title: string;
    layers: string[];
  }) => {
    setRadioValue(item.type);
    setLayerType(
      item.type === OfficeLayerEnum.VectorMap ? [] : ([item.type] as string[]),
    );
  };

  const rasterLayer = () => {
    if (layerType.length) {
      const findItem = BASE_LAYER_GROUP.find(
        (item) => item.type === layerType[0],
      );
      if (!findItem?.layers) return null
      return findItem.layers.map((item, index) => {
        return (
          <RasterLayer
            zIndex={0}
            id={`googleTile_${index}`}
            source={{
              data: item,
              parser: { type: 'rasterTile', tileSize: 256, zoomOffset: 0 },
            }}
          />
        );
      });
    }
    return null;
  };

  useEffect(() => {
    const layer = scene.getLayers().filter((item) => item.type === "RasterLayer")
    if (radioValue === "vectorMap") {
      layer.forEach((item) => {
        const [id] = (item as any).rawConfig.id.split("_")
        if (id === "googleTile") {
          const targetLayer = scene.getLayer(item.id)
          if (targetLayer) {
            scene.removeLayer(targetLayer)
          }
        }
      })
      window.requestAnimationFrame(() => scene?.render())
    }
  }, [scene, layerType, radioValue])

  return (
    <CustomControl position="bottomleft">
      <div className={styles.mapTab}>
        <div
          className={styles.hideOfficeLayerBtn}
          onClick={() => {
            setHideOfficeLayer(!hideOfficeLayer);
          }}
        >
          <CaretRightOutlined
            style={{
              transform: hideOfficeLayer ? 'rotate(-180deg)' : undefined,
            }}
          />
        </div>
        {hideOfficeLayer && (
          <div className={styles.amapInfo}>
            {BASE_LAYER_GROUP.map((item, index) => {
              return (
                <div
                  key={item.type}
                  className={classNames([
                    styles.amapInfoItem,
                    item.type === radioValue
                      ? styles.itemBorderActive
                      : styles.itemBorder,
                    index === BASE_LAYER_GROUP.length - 1 ? 'item-hover' : '',
                  ])}
                  onClick={() => {
                    onItemClick(item as any);
                  }}
                >
                  <img src={item.image} className={styles.amapInfoItemImage} />
                  <div className={styles.amapInfoItemTitle}>
                    {item.title}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div>{rasterLayer()}</div>
    </CustomControl>
  );
}

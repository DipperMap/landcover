import {
  CaretRightOutlined,
} from '@ant-design/icons';
import { CustomControl, RasterLayer } from '@antv/larkmap';
import classNames from 'classnames';
import { useMemo, useState } from 'react';
import { OfficeLayerEnum, BASE_LAYER_GROUP } from './constants';
import styles from "./index.module.less"


export const MapLayer = () => {
  const [hideOfficeLayer, setHideOfficeLayer] = useState(false)
  const [radioValue, setRadioValue] = useState<string>(OfficeLayerEnum.VectorMap);
  const [layerType, setLayerType] = useState<string[]>([]);

  const onItemClick = (item: {
    type: OfficeLayerEnum;
    image: string;
    title: string;
    layers: string[];
  }) => {
    setRadioValue(item.type);
    setLayerType(item.layers)
  };


  const rasterLayer = useMemo(() => {
    if (layerType.length === 0) return null
    return layerType.map((item, index) => {
      return (
        <RasterLayer
          key={index}
          zIndex={1}
          id={item}
          source={{
            data: item,
            parser: { type: 'rasterTile', tileSize: 256, zoomOffset: 0 },
          }}
        />
      );
    });
  }, [layerType]);

  return (
    <>
      <CustomControl position="bottomleft">
        <div className={styles.mapTab} id="l7-editor-aMap">
          <div
            className={styles.hideOfficeLayerBtn}
            onClick={() => {
              setHideOfficeLayer(!hideOfficeLayer);
            }}
            style={{ height: !hideOfficeLayer ? 28 : 127 }}
          >
            <CaretRightOutlined
              style={{
                transform: hideOfficeLayer ? 'rotate(-180deg)' : undefined,
              }}
            />
          </div>
          {hideOfficeLayer && (
            <div className={styles.amapInfo}>
              {BASE_LAYER_GROUP.map((item) => {
                return (
                  <div key={item.type}
                    className={classNames([
                      styles.amapInfoItem,
                      item.type === radioValue
                        ? styles.itemBorderActive
                        : styles.itemBorder,
                    ])}
                    onClick={() => onItemClick(item)}
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
      </CustomControl>
      {rasterLayer}
    </>
  );
}


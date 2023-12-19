import { useEffect, useState } from 'react'
import { LarkMap, PointLayer, PointLayerProps } from "@antv/larkmap"
import './App.css'

const layerOptions: Omit<PointLayerProps, 'source'> = {
  autoFit: true,
  shape: 'circle',
  size: {
    field: 'temperature',
    value: ({ temperature }) => temperature,
  },
  color: {
    field: 'temperature',
    value: ['#0f9960', '#33a02c', '#377eb8'],
  },
  state: {
    active: true,
  },
  style: {
    opacity: 0.8,
  },
};

function App() {
  const [source, setSource] = useState({
    data: [],
    parser: { type: 'json', x: 'lng', y: 'lat' },
  });

  useEffect(() => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/Lx96%24Pnwhw/city-weather.json')
      .then((response) => response.json())
      .then((data) => {
        setSource((prevState) => ({ ...prevState, data }));
      });
  }, []);

  return (
    <LarkMap mapType="GaodeV2" style={{ height: '100vh', width: "100vw" }} mapOptions={{
      zoom: 12,
      center: [120.3234, 30.1224],
      style: 'dark',
      token: 'f0230f884bbd54e2913c890cdf45aa7e',
    }}>
      <PointLayer {...layerOptions} source={source} />
    </LarkMap>
  )
}

export default App

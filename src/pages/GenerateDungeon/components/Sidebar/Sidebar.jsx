import React from 'react';
import styled from 'styled-components';
import {InputNumber} from 'primereact/inputnumber';
import {InputText} from 'primereact/inputtext';
import {Checkbox} from 'primereact/checkbox';
import {Button} from 'primereact/button';
import {InputSwitch} from 'primereact/inputswitch';

import {useStore} from 'state/store';
import FileInput from 'components/FileInput';

export default function Sidebar({onGenerate, onDownload, onLoad, onClear}) {
  const isManualSeed = useStore(state => state.isManualSeed);
  const setIsManualSeed = useStore(state => state.setIsManualSeed);
  const seed = useStore(state => state.seed);
  const setSeed = useStore(state => state.setSeed);
  const mapWidth = useStore(state => state.mapWidth);
  const setMapWidth = useStore(state => state.setMapWidth);
  const mapHeight = useStore(state => state.mapHeight);
  const setMapHeight = useStore(state => state.setMapHeight);
  const mapGutterWidth = useStore(state => state.mapGutterWidth);
  const setMapGutterWidth = useStore(state => state.setMapGutterWidth);
  const iterations = useStore(state => state.iterations);
  const setIterations = useStore(state => state.setIterations);
  const containerMinimumSize = useStore(state => state.containerMinimumSize);
  const setContainerMinimumSize = useStore(state => state.setContainerMinimumSize);
  const containerSplitRetries = useStore(state => state.containerSplitRetries);
  const setContainerSplitRetries = useStore(state => state.setContainerSplitRetries);
  const containerMinimumRatio = useStore(state => state.containerMinimumRatio);
  const setContainerMinimumRatio = useStore(state => state.setContainerMinimumRatio);
  const corridorWidth = useStore(state => state.corridorWidth);
  const setCorridorWidth = useStore(state => state.setCorridorWidth);
  const tileWidth = useStore(state => state.tileWidth);
  const setTileWidth = useStore(state => state.setTileWidth);
  const isThree = useStore(state => state.isThree);
  const setIsThree = useStore(state => state.setIsThree);
  const debug = useStore(state => state.debug);
  const setDebug = useStore(state => state.setDebug);

  return (
    <Holder className="formgrid grid">
      <div className="field col-12">
        <Button className="w-full" label="Generate" aria-label="Generate" onClick={onGenerate} />
      </div>
      <div className="field col-12">
        <FileInput className="w-full" onChange={onLoad} placeholder="Load" />
      </div>
      <div className="field col-12">
        <Button className="w-full" label="Clear" aria-label="Clear" onClick={onClear} />
      </div>
      <div className="field col-12">
        <Button
          className="w-full"
          label="Export to json"
          aria-label="Export to json"
          onClick={onDownload}
        />
      </div>
      <div className="mt-4 field-checkbox col-12">
        <Checkbox
          id="manualSeed"
          checked={isManualSeed}
          onChange={e => setIsManualSeed(e.checked)}
        />
        <label htmlFor="manualSeed">Manual Seed</label>
      </div>
      <div className="field col-12">
        <label htmlFor="seed">Seed</label>
        <InputText
          id="seed"
          className="w-full p-inputtext-sm"
          value={seed}
          onChange={e => setSeed(e.target.value)}
          disabled={!isManualSeed}
        />
      </div>
      <div className="field col-12">
        <label htmlFor="map_width">Map width</label>
        <InputNumber
          id="map_width"
          className="w-full p-inputtext-sm"
          value={mapWidth}
          onValueChange={e => setMapWidth(e.value)}
        />
      </div>
      <div className="field col-12">
        <label htmlFor="map_height">Map height</label>
        <InputNumber
          id="map_height"
          className="w-full p-inputtext-sm"
          value={mapHeight}
          onValueChange={e => setMapHeight(e.value)}
        />
      </div>
      <div className="field col-12">
        <label htmlFor="map_gutter">Map gutter</label>
        <InputNumber
          id="map_gutter"
          className="w-full p-inputtext-sm"
          value={mapGutterWidth}
          onValueChange={e => setMapGutterWidth(e.value)}
          disabled
        />
      </div>
      <div className="field col-12">
        <label htmlFor="iterations">Iterations</label>
        <InputNumber
          id="iterations"
          className="w-full p-inputtext-sm"
          value={iterations}
          onValueChange={e => setIterations(e.value)}
        />
      </div>
      <div className="field col-12">
        <label htmlFor="con_split_retries">Container split retries</label>
        <InputNumber
          id="con_split_retries"
          className="w-full p-inputtext-sm"
          value={containerSplitRetries}
          onValueChange={e => setContainerSplitRetries(e.value)}
        />
      </div>
      <div className="field col-12">
        <label htmlFor="con_size_ratio">Container size ratio</label>
        <InputNumber
          id="con_size_ratio"
          className="w-full p-inputtext-sm"
          value={containerMinimumRatio}
          onValueChange={e => setContainerMinimumRatio(e.value)}
          mode="decimal"
          minFractionDigits={2}
          maxFractionDigits={2}
        />
      </div>
      <div className="field col-12">
        <label htmlFor="con_min_size">Container min size</label>
        <InputNumber
          id="con_min_size"
          className="w-full p-inputtext-sm"
          value={containerMinimumSize}
          onValueChange={e => setContainerMinimumSize(e.value)}
        />
      </div>
      <div className="field col-12">
        <label htmlFor="corridor_width">Corridor width</label>
        <InputNumber
          id="corridor_width"
          className="w-full p-inputtext-sm"
          value={corridorWidth}
          onValueChange={e => setCorridorWidth(e.value)}
        />
      </div>
      <div className="field col-12">
        <label htmlFor="tile_width">Tile width</label>
        <InputNumber
          id="tile_width"
          className="w-full p-inputtext-sm"
          value={tileWidth}
          onValueChange={e => setTileWidth(e.value)}
          disabled={isThree}
        />
      </div>
      <div className="field col-12 flex gap-3">
        <InputSwitch checked={isThree} onChange={e => setIsThree(e.value)} />
        <label>{isThree ? '3D Renderer' : '2D Renderer'}</label>
      </div>
      <div className="field-checkbox col-12">
        <Checkbox
          id="debug"
          checked={debug}
          onChange={e => setDebug(e.checked)}
          disabled={isThree}
        />
        <label htmlFor="debug">Debug</label>
      </div>
    </Holder>
  );
}

const Holder = styled.div``;

import { useState, useMemo } from 'react';
import { DatalistSelect } from '~/components/DatalistSelect';
import Pedals from './pedals';

const mappedPedals = Pedals.map(pedal => ({
  ...pedal,
  pedal: pedal.name,
  name: [pedal.brand, pedal.name].join(' ')
}))

const DEFAULT_VOLTAGE = 9;

export const PedalSelect = ({ onSubmit, voltage }) => {
  const [selectedPedal, selectPedal] = useState();

  const voltagePedals = useMemo(() => mappedPedals.filter(pedal => Array.isArray(pedal.voltage) ? pedal.voltage.some(volts => volts >= voltage) : (pedal.voltage || DEFAULT_VOLTAGE) >= voltage), [voltage]);

  function onSubmitInterceptor(event) {
    event.preventDefault();

    if (onSubmit) {
      onSubmit(event, {...selectedPedal})
    }
  }

  function onInputHandler(event, pedal) {
    selectPedal(pedal);
  }

  return (<form onSubmit={onSubmitInterceptor}>
    <DatalistSelect
      items={voltagePedals}
      label="Select a pedal"
      id="power-pedal-choice"
      name="power-pedal-choice"
      datalistId="power-pedal-options"
      onInput={onInputHandler}
    />
    <button type="submit" disabled={!selectedPedal}>Choose this</button>
  </form>)
}

PedalSelect.defaultProps = {
  voltage: 9,
}

import { useState } from 'react';
import { DatalistSelect } from '~/components/DatalistSelect';
import Pedals from './pedals';

const mappedPedals = Pedals.map(pedal => ({
  ...pedal,
  pedal: pedal.name,
  name: [pedal.brand, pedal.name].join(' ')
}))

export const PedalSelect = ({ onSubmit }) => {
  const [selectedPedal, selectPedal] = useState();

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
      items={mappedPedals}
      label="Select a pedal"
      id="power-pedal-choice"
      name="power-pedal-choice"
      datalistId="power-pedal-options"
      onInput={onInputHandler}
    />
    <button type="submit" disabled={!selectedPedal}>Choose this</button>
  </form>)
}

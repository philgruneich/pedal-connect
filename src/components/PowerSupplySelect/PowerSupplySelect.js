import { useState } from 'react';
import { DatalistSelect } from '~/components/DatalistSelect';
import PowerSupplies from './power-supplies';

export const PowerSupplySelect = ({ onSubmit }) => {
  const [selectedPowerSupply, selectPowerSupply] = useState();

  function onSubmitInterceptor(event) {
    event.preventDefault();

    if (onSubmit) {
      onSubmit(event, {...selectedPowerSupply})
    }
  }

  function onInputHandler(event, supply) {
    selectPowerSupply(supply);
  }

  return (<form onSubmit={onSubmitInterceptor}>
    <DatalistSelect
      items={PowerSupplies}
      label="Select a power supply"
      id="power-supply-choice"
      name="power-supply-choice"
      datalistId="power-supply-options"
      onInput={onInputHandler}
    />
    <button type="submit" disabled={!selectedPowerSupply}>Choose this</button>
  </form>)
}

import { useState } from 'react';
import { PedalSelect } from '~/components/PedalSelect';
import { Pedal } from '~/components/Pedal';
import { VoltageSwitch } from '~/components/VoltageSwitch';
import { AmperageMeter } from '~/components/AmperageMeter';

export const Output = props => {
  const [voltage, setVoltage] = useState(isNaN(props.voltage) ? Math.min(...props.voltage) : props.voltage)
  const [pedals, setPedals] = useState([]);

  function onPedalSelect(event, pedal) {
    setPedals([...pedals, pedal]);
  }

  function onPedalUpdate(index, event, $pedal) {
    const newPedals = [...pedals];
    newPedals[index] = $pedal

    setPedals(newPedals);
  }

  return (
    <section>
      <header>
        <VoltageSwitch voltages={props.voltage} sag={props.sag} defaultValue={voltage} onChange={event => setVoltage(event.target.value)} />
        <AmperageMeter voltage={voltage} pedals={pedals} mah={props.mah} />
      </header>
      {pedals.map((pedal, index) => <Pedal key={index} {...pedal} onChange={(event, pedal) => onPedalUpdate(index, event, pedal)}/>)}
      <footer>
        <PedalSelect onSubmit={onPedalSelect} voltage={voltage} />
      </footer>
    </section>
  )
}

Output.defaultProps = {
  voltage: 9,
}

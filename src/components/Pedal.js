import { useState } from 'react';
import { VoltageSwitch } from "~/components/VoltageSwitch";

export const Pedal = props => {
  const [voltage, setVoltage] = useState(isNaN(props.voltage) ? Math.min(...props.voltage) : props.voltage);

  return <article>
    <header>
      <h2>{props.pedal}</h2>
      <h3>{props.brand}</h3>
    </header>
    <div>
      <VoltageSwitch voltages={props.voltage} defaultValue={voltage} onChange={event => setVoltage(event.target.value)} />
    </div>
    <footer>Consumes: {props.draw} mAh</footer>
  </article>
}

Pedal.defaultProps = {
  voltage: 9,
}

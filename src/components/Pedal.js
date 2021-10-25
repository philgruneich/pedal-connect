import { useState, useRef, useEffect } from 'react';
import { VoltageSwitch } from "~/components/VoltageSwitch";

export const Pedal = props => {
  const [voltage, setVoltage] = useState(isNaN(props.voltage) ? Math.min(...props.voltage) : props.voltage);
  const mahRef = useRef();

  useEffect(() => {
    if (Array.isArray(props.draw) && props.draw.find(v => v[0] === +voltage)) {
      mahRef.current.value = props.draw.find(v => v[0] === +voltage)[1];
    }
  }, [voltage]);

  function onChangeHandler(event) {
    if (props.onChange) {
      props.onChange(event, {
        ...props,
        draw: +event.target.value,
      });
    }
  }

  return <article>
    <header>
      <h2>{props.pedal}</h2>
      <h3>{props.brand}</h3>
    </header>
    <div>
      <VoltageSwitch voltages={props.voltage} defaultValue={voltage} onChange={event => setVoltage(event.target.value)} />
    </div>
    <footer>Consumes: <input ref={mahRef} type="number" defaultValue={props.draw} onChange={onChangeHandler} /> mAh</footer>
  </article>
}

Pedal.defaultProps = {
  voltage: 9,
}

import { useState } from 'react';

export const VoltageSwitch = ({voltages, sag, ...props}) => {
  const [currentVoltage, setCurrentVoltage] = useState(props.defaultValue);

  function onChangeInterceptor(event) {
    setCurrentVoltage(+event.target.value);

    if (props.onChange) {
      props.onChange(event);
    }
  }

  if (Array.isArray(voltages)) {
    if (sag) {
      return (<div>
        <label>
          Voltage:
          <input
            step="0.1"
            {...props}
            min={Math.min(...voltages)}
            max={Math.max(...voltages)}
            onChange={onChangeInterceptor}
            type="range"
          />
          <output htmlFor={props.id}>{currentVoltage}</output>
        </label>
      </div>)
    } else {
      return (<div>
        <label>
          Voltage:
          <select {...props} readOnly={voltages.length === 1} disabled={!voltages.length}>
            {voltages.map(voltage => <option key={voltage} value={voltage}>{voltage}v</option>)}
          </select>
        </label>
      </div>)
    }
  } else {
    return <div>Voltage: {voltages}v</div>
  }
}

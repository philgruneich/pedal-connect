import { useMemo } from 'react';

export const AmperageMeter = ({ pedals, voltage, mah }) => {
  const maxAmperage = useMemo(() => isNaN(mah) ? mah.find(a => a[0] == voltage)[1] ?? 0 : mah, [voltage]);
  const amperage = useMemo(() => pedals.reduce((sum, pedal) => sum + (pedal.draw || 0), 0), [pedals]);

  return (
    <label>
      <meter
        min="0"
        max={maxAmperage}
        low={Math.round(maxAmperage * 0.25)}
        optimum={Math.round(maxAmperage * 0.5)}
        high={Math.round(maxAmperage * 0.75)}
        value={amperage}
      >
        at {amperage}/{maxAmperage}
      </meter> {amperage}/{maxAmperage} mAh
    </label>
  )
}

AmperageMeter.defaultProps = {
  pedals: [],
  voltage: 9,
  mah: 0
}

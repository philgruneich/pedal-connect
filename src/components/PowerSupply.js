import { useMemo } from 'react';
import { Output } from '~/components/Output';

export const PowerSupply = ({ name, outputs }) => {
  const processedOutputs = useMemo(() => outputs.reduce((collection, config) => {
    const { quantity, ...rest } = config;
    return [...collection, ...Array(quantity).fill(rest)];
  }, []), [outputs]);

  return (
    <article>
      <h1>{name}</h1>
      <ul>
        {processedOutputs.map((output, index) => (<li key={index}><Output {...output} /></li>))}
      </ul>
    </article>
  )
}

PowerSupply.defaultProps = {
  outputs: [],
  name: ''
}

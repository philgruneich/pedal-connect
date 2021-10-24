import Head from "next/head";
import { useState } from 'react';
import { PowerSupply } from '~/components/PowerSupply';
import { PowerSupplySelect } from '~/components/PowerSupplySelect';

export default function Home() {
  const [powerSupplies, setPowerSupplies] = useState([]);

  function onSelectPowerSupply(event, supply) {
    event.preventDefault();
    setPowerSupplies([...powerSupplies, supply])
  }

  return (
    <>
      <Head>
        <title>Pedal Connect</title>
      </Head>
      <div>
        <ul>
        {powerSupplies.map((supply, index) => (<li key={index}>
          <PowerSupply {...supply} />
        </li>))}
        </ul>
        <footer>
          <PowerSupplySelect onSubmit={onSelectPowerSupply} />
        </footer>
      </div>
    </>
  );}

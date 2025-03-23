import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { type Container, type ISourceOptions } from '@tsparticles/engine';

import { loadSlim } from '@tsparticles/slim';
import particlesConfig from '../profile.json';

const Profile = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options = particlesConfig as unknown as ISourceOptions;

  if (init) {
    return <Particles id='tsparticles' particlesLoaded={particlesLoaded} options={options} />;
  }

  return <></>;
};

export default Profile;

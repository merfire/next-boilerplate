import type { NextPage } from 'next';

import { Button } from '../components/Button';

const Home: NextPage = () => (
  <div>
    <p>Hello world</p>
    <Button count={2} />
  </div>
);

export default Home;

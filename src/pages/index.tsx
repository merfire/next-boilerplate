import type { NextPage } from 'next';

import { Button } from '../components/Button';

const Home: NextPage = () => (
  <div>
    {/* eslint-disable-next-line no-nested-ternary */}
    {false ? 1 : true ? 2 : 3}
    <p>Hello world test</p>
    <Button count={2} />
  </div>
);

export default Home;

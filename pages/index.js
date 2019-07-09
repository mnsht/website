import { Heading } from '@rebass/emotion';

import Page from '../components/page';

import content from '../content/homepage';

const { name } = content;

export default () => {
  return (
    <Page>
      <Heading as="h1" fontSize={[4, 5]} mb={[2, 3]}>
        {name}
      </Heading>
    </Page>
  );
};

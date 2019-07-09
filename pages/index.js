import { Heading, Flex } from '@rebass/emotion';

import Page from '../components/page';
import Hero from '../components/hero';
import Typed from '../components/typed';

import content from '../content/homepage';

const { hero } = content;

export default () => {
  return (
    <Page>
      <Hero style={{ height: 300 }}>
        <Flex p={[3, 4]} alignItems="center" style={{ height: '100%' }}>
          <Heading as="h1" color="white" fontSize={[4, 5, null, 7]}>
            {hero.tagline} <Typed options={hero.options} />
          </Heading>
        </Flex>
      </Hero>
    </Page>
  );
};

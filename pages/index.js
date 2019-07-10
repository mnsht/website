import { useState } from 'react';
import { Heading, Flex, Image, Box } from 'rebass';

import Page from '../components/page';
import Hero from '../components/hero';
import Typed from '../components/typed';

import content from '../content/homepage';

const { logo, logoText, name, hero } = content;

export default () => {
  const [typedFinished, setTypedFinished] = useState(false);

  return (
    <Page>
      <Hero height={typedFinished ? [200, 500] : '100vh'}>
        <Flex
          p={[3, 4]}
          flexDirection="column"
          justifyContent="center"
          height="100%"
        >
          <Flex width="100%">
            <Image src={logo} alt={name} maxHeight={48} mr={3} />
            {typedFinished && (
              <Image src={logoText} alt={name} maxHeight={48} />
            )}
          </Flex>
          <Heading
            as="h1"
            color="white"
            lineHeight="tall"
            fontSize={[4, 5, null, 7]}
            pt={3}
          >
            {!typedFinished && (
              <Typed
                strings={hero}
                onComplete={typed => {
                  setTimeout(() => {
                    typed.destroy();

                    setTypedFinished(true);
                  }, 750);
                }}
              />
            )}
            {typedFinished && <span>{hero[hero.length - 1]}</span>}
          </Heading>
        </Flex>
      </Hero>
    </Page>
  );
};

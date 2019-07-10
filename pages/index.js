import { Flex, Image } from 'rebass';

import Page from '../components/page';
import Hero from '../components/hero';
import ExternalLink from '../components/external-link';
import Icon from '../components/icon';

import content from '../content/homepage';

const { logo, links, name } = content;

export default () => {
  return (
    <Page>
      <Hero height="100vh">
        <Flex
          p={[3, 4]}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          height="100%"
        >
          <Image src={logo} alt={name} width={128} />
          <Flex style={{ transform: 'translate(-25px, -10px) rotate(14deg)' }}>
            {links.map(({ type, link }) => (
              <ExternalLink to={link} m={2}>
                <Icon type={type} size={32} />
              </ExternalLink>
            ))}
          </Flex>
        </Flex>
      </Hero>
    </Page>
  );
};

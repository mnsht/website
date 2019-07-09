import { useState } from 'react';
import { Flex, Box, Heading, Text } from '@rebass/emotion';
import Bungee from 'react-bungee';

import Page from '../components/page';
import Project from '../components/project';
import ExternalLink from '../components/external-link';
import Icon from '../components/icon';
import Avatar from '../components/avatar';
import LearnMore from '../components/learn-more';

import content from '../content/homepage';

const { name, avatar, social, tagline, bio, opinions, projects } = content;

export default () => {
  const [showBio, setShowBio] = useState(false);
  const [showOpinions, setShowOpinions] = useState(false);

  const onClickBio = () => {
    if (showBio) {
      if (showOpinions) {
        setShowOpinions(false);

        setTimeout(() => setShowBio(false), 500);
      } else {
        setShowBio(false);
      }
    } else {
      setShowBio(true);
    }
  };

  const onClickOpinions = () => setShowOpinions(!showOpinions);

  const paragraphProps = {
    fontSize: 3,
    color: 'darkGray',
    lineHeight: 'tall'
  };

  const bungeeTransition = { transition: 'opacity 0.25s linear 0.5s' };

  return (
    <Page>
      <Box p={[3, 4]} width={[1, null, 2 / 3, 1 / 2]}>
        <Flex alignItems="center" mb={3}>
          <Avatar src={avatar} alt={name} />
          <Box>
            <Heading as="h1" fontSize={[4, 5]} mb={[2, 3]}>
              {name}
            </Heading>
            {social.map(({ type, link }) => (
              <ExternalLink key={link} to={link} mr={3}>
                <Icon type={type} />
              </ExternalLink>
            ))}
          </Box>
        </Flex>
        <Box>
          <Text {...paragraphProps}>{tagline}</Text>
          <LearnMore onClick={onClickBio}>
            {showBio ? 'Close' : 'Learn more'}
          </LearnMore>
        </Box>
        <Bungee
          style={{ ...bungeeTransition, opacity: showBio ? 1 : 0 }}
          height={showBio ? 'auto' : 0}
        >
          <Text {...paragraphProps}>{bio}</Text>
          <LearnMore onClick={onClickOpinions}>
            {showOpinions ? 'Close' : 'Show opinions'}
          </LearnMore>
        </Bungee>
        <Bungee
          style={{ ...bungeeTransition, opacity: showOpinions ? 1 : 0 }}
          height={showOpinions ? 'auto' : 0}
        >
          <Text {...paragraphProps}>{opinions}</Text>
        </Bungee>
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </Box>
    </Page>
  );
};

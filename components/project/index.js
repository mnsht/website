import { Flex, Box, Heading, Text } from '@rebass/emotion';

import ListItem from '../list-item';
import ExternalLink from '../external-link';
import Icon from '../icon';

const paragraphProps = {
  color: 'mediumGray',
  lineHeight: 'normal'
};

export default ({ title, description, roles, links }) => (
  <Box mt={4}>
    <Box>
      <Heading as="h3" mb={[2, 3]}>
        {title}
      </Heading>
      <Text {...paragraphProps} mb={[2, 3]}>
        {description}
      </Text>
      {roles.map(role => (
        <ListItem key={role} lineHeight="normal" color="darkGray">
          {role}
        </ListItem>
      ))}
      <Flex mt={3}>
        {links.map(({ type, link }) => (
          <ExternalLink key={link} to={link} mr={3}>
            <Icon type={type} />
          </ExternalLink>
        ))}
      </Flex>
    </Box>
  </Box>
);

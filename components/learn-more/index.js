import { Button, Text } from '@rebass/emotion';

export default ({ onClick, children }) => (
  <Button variant="learnMore" width={['100%', 'auto']} my={2} onClick={onClick}>
    <Text as="span">{children}</Text>
  </Button>
);

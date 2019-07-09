import { Flex, Text } from '@rebass/emotion';

export default ({ children, ...props }) => (
  <Flex mt={2}>
    <Text fontWeight="bold" color="black" {...props} mt="-1px">
      ›
    </Text>
    <Text color="mediumGray" {...props} pl={3}>
      {children}
    </Text>
  </Flex>
);

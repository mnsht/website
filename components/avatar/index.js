import styled from '@emotion/styled';
import { Box, Image } from '@rebass/emotion';

// TODO: The height on the image container doesn't work until Rebass upgrades to styled-system v5: https://github.com/rebassjs/rebass/pull/591

const ImageContainer = styled(Box)({
  position: 'relative',
  '&:after': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    boxShadow: 'inset 0px 0px 0px 8px rgba(255, 255, 255, 0.5)',
    content: '""'
  }
});

const size = {
  width: [72, 96],
  height: [72, 96]
};

export default ({ src, alt }) => (
  <ImageContainer {...size} mr={3}>
    <Image src={src} alt={alt} borderRadius={2} {...size} />
  </ImageContainer>
);

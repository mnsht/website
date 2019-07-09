import {
  FaGithub,
  FaLinkedinIn,
  FaMediumM,
  FaStackOverflow,
  FaLink,
  FaTwitter,
  FaFacebookSquare,
  FaInstagram
} from 'react-icons/fa';

export default ({ type, ...props }) => {
  props.size = props.size ? props.size : 24;

  if (type === 'github') return <FaGithub {...props} />;
  if (type === 'linkedin') return <FaLinkedinIn {...props} />;
  if (type === 'medium') return <FaMediumM {...props} />;
  if (type === 'stack-overflow') return <FaStackOverflow {...props} />;
  if (type === 'website') return <FaLink {...props} />;
  if (type === 'twitter') return <FaTwitter {...props} />;
  if (type === 'facebook') return <FaFacebookSquare {...props} />;
  if (type === 'instagram') return <FaInstagram {...props} />;

  return type;
};

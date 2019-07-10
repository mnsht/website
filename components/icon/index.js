import { FaGithub, FaEnvelope } from 'react-icons/fa';

export default ({ type, ...props }) => {
  props.size = props.size ? props.size : 24;

  if (type === 'github') return <FaGithub {...props} />;
  if (type === 'email') return <FaEnvelope {...props} />;

  return type;
};

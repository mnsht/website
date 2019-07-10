import { Link } from 'rebass';

export default ({ to, children, ...props }) => (
  <Link {...props} target="_blank" href={to} rel="noreferrer noopener">
    {children}
  </Link>
);

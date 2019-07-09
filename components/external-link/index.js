import { Link } from '@rebass/emotion';

export default ({ to, children, ...props }) => (
  <Link {...props} target="_blank" href={to} rel="noreferrer noopener">
    {children}
  </Link>
);

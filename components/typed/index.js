import { useRef, useEffect } from 'react';
import Typed from 'typed.js';

export default ({ strings, ...props }) => {
  const typedRef = useRef(null);

  useEffect(() => {
    new Typed(typedRef.current, {
      strings,
      typeSpeed: 20,
      backSpeed: 15,
      backDelay: 1000,
      ...props
    });
  }, [typedRef.current]);

  return <span ref={typedRef} />;
};

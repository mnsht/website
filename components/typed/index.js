import { useRef, useEffect } from 'react';
import Typed from 'typed.js';

export default ({ options }) => {
  const typedRef = useRef(null);

  useEffect(() => {
    new Typed(typedRef.current, {
      strings: options,
      typeSpeed: 30,
      backSpeed: 15,
      backDelay: 1000,
      smartBackspace: false,
      loop: true
    });
  }, [typedRef.current]);

  return <span ref={typedRef} />;
};

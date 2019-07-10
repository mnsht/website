import { useRef, useEffect } from 'react';
import Typed from 'typed.js';

export default ({ strings, onComplete }) => {
  const typedRef = useRef(null);

  useEffect(() => {
    new Typed(typedRef.current, {
      strings,
      typeSpeed: 20,
      backSpeed: 15,
      backDelay: 1000,
      onComplete
    });
  }, [typedRef.current]);

  return <span ref={typedRef} />;
};

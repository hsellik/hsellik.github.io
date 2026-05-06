import { useEffect, useMemo, useState } from 'react';

const useIsMobile = (breakpoint = '(max-width: 639px)') => {
  const mql = useMemo(() => window.matchMedia(breakpoint), [breakpoint]);
  const [isMobile, setIsMobile] = useState(mql.matches);

  useEffect(() => {
    const handler = (e) => setIsMobile(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, [mql]);

  return isMobile;
};

export default useIsMobile;

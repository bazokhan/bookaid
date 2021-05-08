import { useEffect, useState } from 'react';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from 'tailwind.config';

const getDeviceConfig = (theme, width) => {
  if (width < Number(theme.screens.md.replace('px', ''))) {
    return 'sm';
    // eslint-disable-next-line no-else-return
  } else if (width < Number(theme.screens.lg.replace('px', ''))) {
    return 'md';
  } else if (width < Number(theme.screens.xl.replace('px', ''))) {
    return 'lg';
  } else {
    return 'xl';
  }
};

// get current breakPoint on resizing
const useBreakPoint = (): string => {
  const { theme } = resolveConfig(tailwindConfig);
  const [currentBreakPoint, setCurrentBreakPoint] = useState(() =>
    typeof window !== 'undefined'
      ? getDeviceConfig(theme, window.innerWidth)
      : 'sm'
  );

  useEffect(() => {
    const calcInnerWidth = () =>
      setCurrentBreakPoint(() => getDeviceConfig(theme, window.innerWidth));

    window.addEventListener('resize', calcInnerWidth);
    return () => window.removeEventListener('resize', calcInnerWidth);
  }, [theme]);

  return currentBreakPoint;
};

export default useBreakPoint;

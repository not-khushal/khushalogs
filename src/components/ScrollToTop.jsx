import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // accessing the current path (e.g., /blog/1)
  const { pathname } = useLocation();

  // This effect runs every time the 'pathname' changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
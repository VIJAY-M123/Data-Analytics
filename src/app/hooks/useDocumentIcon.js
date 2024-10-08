import { useEffect } from 'react';

const useDocumentIcon = (icon) => {
  useEffect(() => {
    let link = document.querySelector("link[rel~='icon']");

    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);
    }

    link.href = icon;
  }, [icon]);
};

export default useDocumentIcon;

import { useEffect } from 'react';

import TagManager from 'react-gtm-module';

const GTM_ID = 'GTM-NDQPZSR8';

const GoogleTagManager = () => {
  useEffect(() => {
    TagManager.initialize({
      gtmId: GTM_ID,
    });
  }, []);

  return <></>;
};

export default GoogleTagManager;

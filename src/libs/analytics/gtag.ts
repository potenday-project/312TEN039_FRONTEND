import ReactGA from 'react-ga4';
import { Location } from 'react-router-dom';

export const GA_TRACKING_ID = 'G-QGZ4WBGCFJ';

export const pageViewTrigger = (router: Location) => {
  ReactGA.send({
    hitType: 'pageview',
    page: router.pathname,
  });
};

export const eventTrigger = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label: string;
  value: number;
}) => {
  ReactGA.event({
    action,
    category,
    label,
    value,
  });
};

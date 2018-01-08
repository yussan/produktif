/**
 *
 * Asynchronously loads the component for Helmet
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});

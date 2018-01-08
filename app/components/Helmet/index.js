/**
*
* Helmet
*
*/

import React from 'react';
import ReactHelmet from 'react-helmet';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

const Helmet = (props) => {
  const { title, description, url, image, type, script, link } = props

  return (
    <ReactHelmet
      title={title + ' - Produktif'}
      meta={[
        {'name': 'description', 'content': description},
        {'property': 'og:type', 'content': type || 'article'},
        {'property': 'og:title', 'content': title + ' - Produktif'},
        {'property': 'og:url', 'content': url},
        {'property': 'og:image', 'content': image},
        {'property': 'og:description', 'content': description},
        {'property': 'twitter:card', 'content': type || 'summarry'},
        {'property': 'twitter:site', 'content': '@produktif'},
        {'property': 'twitter:title', 'content': title},
        {'property': 'twitter:description', 'content': description},
        {'property': 'twitter:image', 'content': image}
      ]}
      script={script}
      link={link}
    />
  );
}

Helmet.defaultProps = {
  description: 'Aku Produktif',
  title: 'Aku Produktif'
};

Helmet.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  script: PropTypes.array,
  link: PropTypes.array,
  url: PropTypes.string,
  image: PropTypes.string,
  type: PropTypes.string
};

export default Helmet;

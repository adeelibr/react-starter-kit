import React from 'react';
import PropTypes from 'prop-types';

const PageLoader = props => {
  const { error, pastDelay, retry } = props;
  if (error) {
    return (
      <div>
        Error!{' '}
        <button type="button" onClick={retry}>
          Retry
        </button>
      </div>
    );
  }
  if (pastDelay) {
    return <div>Loading...</div>;
  }
  return null;
};

PageLoader.propTypes = {
  error: PropTypes.any,
  pastDelay: PropTypes.any,
  retry: PropTypes.any,
};

export default PageLoader;

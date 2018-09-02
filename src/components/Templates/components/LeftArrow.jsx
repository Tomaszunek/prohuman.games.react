import React from 'react';
import PropTypes from 'prop-types';

const LeftArrow = (props) => {
    return (
        <div className="backArrow" onClick={props.goToPrevSlide}>
            <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
        </div>
    );
};

LeftArrow.propTypes = {
    goToPrevSlide: PropTypes.func,
};

export default LeftArrow;
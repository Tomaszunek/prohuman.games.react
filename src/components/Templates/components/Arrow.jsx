import React from 'react';
import PropTypes from 'prop-types';

const Arrow = ({ direction, clickFunction, glyph }) => (
    <div
        className={ `slide-arrow ${direction}` }
        onClick={ clickFunction }>
        { glyph }
    </div>
);

Arrow.propTypes = {
    direction: PropTypes.string,
    clickFunction: PropTypes.func,
    glyph: PropTypes.string,
};

export default Arrow;
import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';

const styles = StyleSheet.create({
  max: {
    fontWeight : 'bold',
    fontSize: '13px',
    float: 'right',
  },

  min: {
    fontWeight : 'bold',
    fontSize: '13px'
  },
});

const LinearGradient = props => {
  const { data } = props;
  const boxStyle = {
    width: 180,
    margin: 'auto'
  };
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${data.fromColor} , ${data.toColor})`,
    height: 20
  };
  return (
    <div>
      <div style={boxStyle} className="display-flex">
        <span className={css(styles.min)}>{data.min}</span>
        <span className="fill"></span>
        <span className={css(styles.max)}>{data.max}</span>
      </div>
      <div style={{ ...boxStyle, ...gradientStyle }} className="mt8"></div>
    </div>
  );
};

LinearGradient.propTypes = {
  data: PropTypes.object.isRequired
};

export default LinearGradient;
import React from 'react';

import { FaPlus } from 'react-icons/fa';

// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import './Form.css';

export default function Form({ handleChange, handleSubmit, novaTarefa }) {
  return (
    <form action="#" className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleChange}
        value={novaTarefa}
      />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';

MenuToggler.propTypes = {
	name: PropTypes.string.isRequired,
	function: PropTypes.any.isRequired,
};



export default function MenuToggler(props) {
	function handleClick() {
		props.function();
	}

	return <div style={{ textDecoration: 'none', color: 'white' }} onClick={handleClick} >{props.name}</div>;
}

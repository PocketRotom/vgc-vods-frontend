import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

MenuItems.propTypes = {
	name: PropTypes.string.isRequired,
	path: PropTypes.string.isRequired,
};

export default function MenuItems(props) {
	return <Link style={{ textDecoration: 'none', color: 'white', paddingLeft: '10px', paddingRight: '10px' }} to={props.path}>{props.name}</Link>;
}

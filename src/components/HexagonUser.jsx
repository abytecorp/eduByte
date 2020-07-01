import React from 'react';
import '../assets/styles/components/HexagonUser.css';
import avatar from '../assets/img/avatar/01.jpg';

const HexagonUser = () => (
	<div className="hexagon">
		<div className="img-avatar-container">
			<img className="img-avatar" src={avatar}></img>
		</div>
	</div>
);

export default HexagonUser;
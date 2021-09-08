import React from 'react';
import { SvgIcon} from '@material-ui/core';
import './Skills.css';
import { Container } from 'react-bootstrap';
import Title from '../Title/Title';

import skillList from '../../utils/skill-list';

export default function Skill({ ...props }) {
	console.log(props)
	return (
		<section id="hero1">
      <Container>
        <Title title="Skills" />
			<div className='skill-container'>
				{skillList.map((skill, i) => (
					<div className='skill-img' key={i}>
						<SvgIcon
							titleAccess={skill.name}
							style={{ width: 'auto', height: '100%' }}
							className='svg-icon'
							viewBox='0 0 24 24'
							color='primary'
						>
							<path d={skill.svgPath} />
						</SvgIcon>
					</div>
				))}
			</div>
            </Container>
    </section>
	);
}

import React, { FC } from 'react';

import { iconMap } from './data';
import {Container} from './styles';
import { IconProps } from './types';

/**
 * SVG icon.
 */
const Icon: FC<IconProps> = ({ type, ...svgProps }) => (
	<Container as={iconMap[type]} {...svgProps} />
);

export default Icon;

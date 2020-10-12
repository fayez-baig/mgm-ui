import React from 'react';
import { TbodyProps } from './types';

const Tbody: React.SFC<TbodyProps> = ({ children }) => {
	return <tbody>{children}</tbody>;
};

export default Tbody;

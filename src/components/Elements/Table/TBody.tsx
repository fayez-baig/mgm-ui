import React from 'react';
import { TBodyProps } from './types';

const TBody: React.FC<TBodyProps> = ({ children }) => {
	return <tbody>{children}</tbody>;
};

export default TBody;

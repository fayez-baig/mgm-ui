import React from 'react';
import { getStyles } from '../../styles/getStyles';
import { SelectProps, defaultProps } from './types';
import LoadingWrapper from '../LoadingWrapper/LoadingWrapper';

const Select: React.FC<SelectProps> = ({
	color,
	isFocused,
	isRounded,
	size,
	isLoading,
	multipleSelect,
	numberOfOptions,
	value,
	listItems,
	...selectProps
}) => {
	let selectClassesStr = 'select,';
	color !== 'default' && (selectClassesStr += `is-${color},`);
	size !== 'default' && (selectClassesStr += `is-${size},`);
	isRounded && (selectClassesStr += 'is-rounded,');
	isFocused && (selectClassesStr += 'is-focused,');
	isLoading && (selectClassesStr += 'is-loading');
	multipleSelect && (selectClassesStr += 'is-multiple');
	const classes = getStyles(selectClassesStr.split(','));

	const selectComponent = (
		<div className={classes}>
			<select {...selectProps} multiple={multipleSelect} size={numberOfOptions}>
				{listItems?.map(listItem => (
					<option key={listItem.value} value={listItem.value}>
						{listItem.name}
					</option>
				))}
			</select>
		</div>
	);

	return isLoading ? (
		<LoadingWrapper>{selectComponent}</LoadingWrapper>
	) : (
		selectComponent
	);
};

Select.defaultProps = defaultProps;

export default Select;

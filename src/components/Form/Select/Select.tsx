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
	multiple,
	optionSize,
	value,
	options,
	...selectProps
}) => {
	let selectClassesStr = 'select,';
	color !== 'default' && (selectClassesStr += `is-${color},`);
	size !== 'default' && (selectClassesStr += `is-${size},`);
	isRounded && (selectClassesStr += 'is-rounded,');
	isFocused && (selectClassesStr += 'is-focused,');
	isLoading && (selectClassesStr += 'is-loading');
	multiple && (selectClassesStr += 'is-multiple');
	const classes = getStyles(selectClassesStr.split(','));

	const selectComponent = (
		<div className={classes}>
			<select {...selectProps} size={optionSize} multiple={multiple}>
				{options?.map(option => (
					<option key={option.value} value={option.value}>
						{option.name}
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

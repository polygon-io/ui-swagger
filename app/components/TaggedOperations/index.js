import React from 'react';
import { ApiEndpoints } from './ApiEndpoints';

export const TaggedOperations = ({ orderedOperations, ...props }) => {
	return orderedOperations.map((taggedOperations, i) => (
		<ApiEndpoints
			key={i}
			tag={taggedOperations.tag}
			taggedOperations={taggedOperations}
			{...props}
		/>
	));
};

/**
 * External dependencies
 */
import { render } from '@testing-library/react';

/**
 * Internal dependencies
 */
import { ActivateGcb } from '../';

global.blockLabMigration = {
	activateUrl: 'https://example.com',
};

test( 'activate gcb migration step', async () => {
	const props = {
		isStepActive: true,
		isStepComplete: false,
		stepIndex: 5,
	};
	const { getByText } = render( <ActivateGcb { ...props } /> );

	expect( getByText( props.stepIndex.toString() ) ).toBeInTheDocument();
} );

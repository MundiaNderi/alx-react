import React from 'react';
import { render } from '@testing-library/react'; // Corrected import statement
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

test('renders BodySectionWithMarginBottom component with correct props and CSS applied', () => {
    const { getByText, getByTestId } = render(
        <BodySectionWithMarginBottom title="test title">
            <p>test children node</p>
        </BodySectionWithMarginBottom>
    );

    const titleElement = getByText('test title');
    const childrenElement = getByText('test children node');
    const wrapperElement = getByTestId('bodySectionWithMarginTestId');

    expect(titleElement).toBeInTheDocument();
    expect(childrenElement).toBeInTheDocument();
    expect(wrapperElement).toHaveStyle('margin-bottom: 40px');
});

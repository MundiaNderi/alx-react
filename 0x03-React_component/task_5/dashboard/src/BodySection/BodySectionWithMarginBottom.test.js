import React from 'react';
import { render } from 'testing-library/react';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

test('renders BodySectionWithMarginBottom component with correct props and CSS applied', () => {
    const { getBytext, getByTestId } = render(
        <BodySectionWithMarginBottom title="test title">
            <p>test children node</p>
        </BodySectionWithMarginBottom>
    );

    const titleElement = getBytext('test title');
    const childrenElement = getBytext('test children node');
    const wrapperElement = getByTestId('bodySectionWithMarginTestId');

    expect(titleElement).toBeInTheDocument();
    expect(childrenElement).toBeInTheDocument();
    expect(wrapperElement).toHaveStyle('margin-botton: 40px')
});

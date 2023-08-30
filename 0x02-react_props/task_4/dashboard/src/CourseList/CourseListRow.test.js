import React from 'react';
import { render } from '@testing-library/react';
import CourseListRow from './CourseListRow';

describe('CourseListRow Component', () => {
  it('should render one cell with colspan = 2 when isHeader is true and textSecondCell does not exist', () => {
    const { container } = render(
      <table>
        <tbody>
          <CourseListRow isHeader={true} textFirstCell="Header" />
        </tbody>
      </table>
    );
    const cell = container.querySelector('td');
    expect(cell).toBeInTheDocument();
    expect(cell.getAttribute('colspan')).toBe('2');
  });

  it('should render two cells when isHeader is true and textSecondCell is present', () => {
    const { container } = render(
      <table>
        <tbody>
          <CourseListRow isHeader={true} textFirstCell="Header" textSecondCell="Subheader" />
        </tbody>
      </table>
    );
    const cells = container.querySelectorAll('td');
    expect(cells.length).toBe(2);
  });

  it('should render correctly two td elements within a tr element when isHeader is false', () => {
    const { container } = render(
      <table>
        <tbody>
          <CourseListRow isHeader={false} textFirstCell="Course 1" textSecondCell="Credit" />
        </tbody>
      </table>
    );
    const row = container.querySelector('tr');
    const cells = container.querySelectorAll('td');
    
    expect(row).toBeInTheDocument();
    expect(cells.length).toBe(2);
  });
});

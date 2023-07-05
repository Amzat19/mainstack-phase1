import { render, screen } from '@testing-library/react';
import Sidebar from '../components/SideBar';
import '@testing-library/jest-dom';

jest.mock('../assets/mainstack-logo.svg', () => {
  return {
    ReactComponent: () => <svg>Mocked Info SVG</svg>,
  };
});

jest.mock('../assets/dashboard.svg', () => {
  return {
    ReactComponent: () => <svg>Mocked Info SVG</svg>,
  };
});

jest.mock('../assets/edit.svg', () => {
  return {
    ReactComponent: () => <svg>Mocked Info SVG</svg>,
  };
});

jest.mock('../assets/hourglass_empty.svg', () => {
  return {
    ReactComponent: () => <svg>Mocked Info SVG</svg>,
  };
});

jest.mock('../assets/add_a_photo.svg', () => {
  return {
    ReactComponent: () => <svg>Mocked Info SVG</svg>,
  };
});
jest.mock('../assets/delete.svg', () => {
  return {
    ReactComponent: () => <svg>Mocked Info SVG</svg>,
  };
});
jest.mock('../assets/subscriptions.svg', () => {
  return {
    ReactComponent: () => <svg>Mocked Info SVG</svg>,
  };
});
jest.mock('../assets/file_present.svg', () => {
  return {
    ReactComponent: () => <svg>Mocked Info SVG</svg>,
  };
});

jest.mock('../assets/alarm.svg', () => {
  return {
    ReactComponent: () => <svg>Mocked Info SVG</svg>,
  };
});

jest.mock('../assets/more_horiz.svg', () => {
  return {
    ReactComponent: () => <svg>Mocked Info SVG</svg>,
  };
});



describe('SideBar component', () => {
  test('renders without errors', () => {
    render(<Sidebar />);
  });

  test('matches snapshot', () => {
    const { asFragment } = render(<Sidebar />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('displays the dashboard icon and label', () => {
     render(<Sidebar />);
    const dashboardHeaderText = screen.getByText('Dashboard');
    expect(dashboardHeaderText).toBeInTheDocument();
    expect(dashboardHeaderText.tagName.toLowerCase()).toBe('p');
    // Add more assertions as needed
  });

  test('displays the item icons and labels', () => {
    const { getByText } = render(<Sidebar />);
    const item1Icon = getByText('Item 1');
    const item2Icon = getByText('Item 2');
    const item3Icon = getByText('Item 3');

    expect(item1Icon).toBeInTheDocument();
    expect(item2Icon).toBeInTheDocument();
    expect(item3Icon).toBeInTheDocument();
    // Add more assertions as needed
  });

});
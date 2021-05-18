import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import NavBar from '../components/NavBar';

afterEach(() => {
    cleanup();
})

test('should render NavBar component', () => {
    render(
        <Router>
            <NavBar exact={true} />
        </Router>
    );
    const linkElement = screen.getByTestId('link-1');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent('Home');
})

test('matches snapshot', () => {
    const tree = renderer.create(
        <Router>
            <NavBar exact={true} />
        </Router>).toJSON();

    expect(tree).toMatchSnapshot();
})
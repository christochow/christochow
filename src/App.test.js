import React from 'react';
import { render, waitForElement} from '@testing-library/react';
import { isDOMComponent } from 'react-dom/test-utils';
import App from './App';


const observe = jest.fn();
const unobserve = jest.fn();

window.IntersectionObserver = jest.fn(function () {
  this.observe = observe;
  this.unobserve = unobserve;
});

jest.mock('react-transition-group', () => {
  const FakeCSSTransition = jest.fn(props => {
    return props.in ? <div>{props.children}</div> : null
  }
  )
  return { CSSTransition: FakeCSSTransition }
})

test('renders Loading first and then About page', async () => {
  const element = render(<App />);
  const linkElement = element.getByText(/Loading/i);
  expect(linkElement).toBeInTheDocument();
  const el = await waitForElement(() => {
    return element.getByText(/Hi,/i);
  })
  expect(el).toBeInTheDocument();
  expect(linkElement).not.toBeInTheDocument();
  expect(isDOMComponent(el)).toBe(true)
  expect(el.nodeName).toBe('H1')
});

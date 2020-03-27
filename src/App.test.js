import React from 'react';
import { render, waitForElement} from '@testing-library/react';
import { isDOMComponent } from 'react-dom/test-utils';
import Loading from './pages/Loading/LoadingComponent'
import App from './App';


jest.mock('react-transition-group', () => {
  const FakeCSSTransition = jest.fn(props => {
    return props.in ? <div>{props.children}</div> : null
  }
  )
  return { CSSTransition: FakeCSSTransition }
});

jest.mock('./pages/Loading/LoadingComponent');
Loading.mockImplementation(()=><div>Loading...</div>)

jest.mock('react-router-dom', ()=>{
  return {
    Switch: jest.fn().mockImplementation(()=>{
      return <div><h1>Hi,</h1></div>
    }),
    Redirect: jest.fn().mockImplementation(()=>{
      return <div></div>
    }),
    Route: jest.fn().mockImplementation(()=>{
      return <div></div>
    }),
    NavLink: jest.fn().mockImplementation(()=>{
      return <div></div>
    }),
    useHistory:jest.fn().mockImplementation(()=>{
    return {
      listen:jest.fn().mockImplementation(()=>jest.fn())
    }
    })
}});

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

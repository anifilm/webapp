// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom

//import '@testing-library/jest-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16.3';

configure({ adapter: new Adapter() });

afterEach(() => {
  console.error.mockClear();
});

beforeEach(() => {
  jest.spyOn(console, 'error').mockImplementation((e) => {
    throw new Error(e);
  });
});

import handers from '../handlers';

test('home page renders', () => {
  const req = {};
  const res = { render: jest.fn() };
  handers.home(req, res);
  expect(res.render.mock.calls.length).toBe(1);
  expect(res.render.mock.calls[0][0]).toBe('home');
});

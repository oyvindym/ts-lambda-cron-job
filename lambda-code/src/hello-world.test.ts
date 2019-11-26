import { handler as helloWorldHandler } from './hello-world';

describe('hello-world', () => {
  test('should work correctly', () => {
    expect(helloWorldHandler()).toEqual('Hello World');
  });
});

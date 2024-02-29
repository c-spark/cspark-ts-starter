import { SparkError } from '../src';

describe('SparkError', () => {
  it('should create an instance with error message', () => {
    const error = new SparkError({ message: 'sample error message' });
    expect(error.name).toEqual('SparkError');
    expect(error.message).toContain('sample error message');
    expect(error.origin).toBeUndefined();
  });

  it('should create an instance with overridden name', () => {
    const error = new SparkError({ name: 'BaseError', message: 'with message' });
    expect(error.name).toEqual('BaseError');
    expect(error.message).toContain('with message');
    expect(error.origin).toBeUndefined();
  });

  it('should create an instance with original errors', () => {
    const error = new SparkError({ message: '', origin: new Error('other error') });
    expect(error.name).toEqual('SparkError');
    expect(error.origin).toBeDefined();
    expect(error.origin?.message).toEqual('other error');
  });
});

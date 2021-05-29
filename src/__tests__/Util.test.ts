import { safePromise } from '../index';
describe('Utility Tests', () => {
  test('Safe Promise Test', async () => {
    const resolvePromise = Promise.resolve('Resolved');
    const rejectPromise = Promise.reject('Reject');
    const [resolveError, resolveResult] = await safePromise(resolvePromise);
    const [rejectError, rejectResult] = await safePromise(rejectPromise);
    expect(resolveError).toBe(undefined);
    expect(resolveResult).toEqual('Resolved');
    expect(rejectError).toEqual('Reject');
    expect(rejectResult).toBe(undefined);
  });
});

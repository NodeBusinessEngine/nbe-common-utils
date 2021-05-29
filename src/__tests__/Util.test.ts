import { safePromise } from '../index';
import { logInfo } from '../logger';
describe('Utility Tests', () => {
  test('Safe Promise Test', async () => {
    logInfo('Starting Test');
    const resolvePromise = Promise.resolve('Resolved');
    const rejectPromise = Promise.reject('Reject');
    const [resolveError, resolveResult] = await safePromise(resolvePromise);
    const [rejectError, rejectResult] = await safePromise(rejectPromise);
    expect(resolveError).toBe(undefined);
    expect(resolveResult).toEqual('Resolved');
    expect(rejectError).toEqual('Reject');
    expect(rejectResult).toBe(undefined);
    logInfo('End Testing');
  });
});

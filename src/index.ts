export function safePromise(promise: Promise<any>) {
  return promise.then((result) => [undefined, result]).catch((error) => [error, undefined]);
}

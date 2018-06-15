export const promisify = (f: any) => (...args: any[]) =>
    Promise.resolve(f(...args));

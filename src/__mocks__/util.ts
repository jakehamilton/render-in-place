export const promisify = jest
    .fn()
    .mockReturnValue(() => Promise.resolve('promisified-value'));

jest.mock('util', () => ({
    promisify: jest.fn().mockReturnValue(() => Promise.resolve('promisify')),
}));

let render;

describe('index', () => {
    beforeEach(() => {
        render = require('..').default;
    });

    it('should not throw errors', async done => {
        expect(async () => {
            await render('file.txt');

            done();
        }).not.toThrow();
    });

    it('should write overwrite a file', async done => {
        const name = 'file.txt';

        await render(name);

        done();
    });
});

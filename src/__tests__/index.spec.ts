jest.mock('fs');
jest.mock('util');

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

    it('should overwrite a file', async done => {
        expect(async () => {
            const name = 'file.txt';

            await render(name);

            done();
        }).not.toThrow();
    });

    it('should accept custom data', async done => {
        expect(async () => {
            const name = 'file.txt';

            const data = {};

            await render(name, data);

            done();
        }).not.toThrow();
    });

    it('should accept empty configuration', async done => {
        expect(async () => {
            const name = 'file.txt';

            const data = {};

            const config = {};

            await render(name, data, config);

            done();
        }).not.toThrow();
    });

    it('should accept ejs configuration', async done => {
        expect(async () => {
            const name = 'file.txt';

            const data = {};

            const config = {
                read: {},
            };

            await render(name, data, config);

            done();
        }).not.toThrow();
    });

    it('should accept fs configuration', async done => {
        expect(async () => {
            const name = 'file.txt';

            const data = {};

            const config = {
                write: {},
            };

            await render(name, data, config);

            done();
        }).not.toThrow();
    });

    it('should accept both ejs and fs configuration', async done => {
        expect(async () => {
            const name = 'file.txt';

            const data = {};

            const config = {
                read: {},
                write: {},
            };

            await render(name, data, config);

            done();
        }).not.toThrow();
    });
});

import * as fs from 'fs';
import * as ejs from 'ejs';
import { promisify } from 'util';

const write = promisify(fs.writeFile);
const render = promisify(ejs.renderFile);

export interface IOptions {
    read?: object;
    write?: object;
}

export default async (
    path: string,
    data: object = {},
    options: IOptions = {},
) => {
    if (!options.read) {
        options.read = {};
    }

    if (!options.write) {
        options.write = {
            encoding: 'utf8',
        };
    }

    const compiled = await render(path, data, options.read);

    await write(path, compiled, options.write);
};

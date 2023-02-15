import {JsonAsyncParameters} from '../../../dist/read/json-async.js';
import CurrentDir from "../../../dist/string/current-dir.js";


it('enable console log', () => {spyOn(console, 'log').and.callThrough();});

describe('as',  function () {

    it('enable console log',  async () => {

        const data = await JsonAsyncParameters(CurrentDir(import.meta) + '../../../file/real.json');
        expect(data).toEqual({
            number : 1,
            string : 'real',
            boolean : true
        });
    });
});

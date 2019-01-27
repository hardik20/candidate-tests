import ask from './Api';

/*
*
* Missing tests
* -------------------------------------
* - 'it should call YesNo API'
* -------------------------------------
*
* Please add any other test that you think could be missing
*
* */


describe('API Caller', () => {
  	test ('it should call YesNo API', async() => {
		const result = await ask();
			expect(result.answer).toBeDefined();
			expect(result.image).toBeDefined();
			expect(result.forced).toBeDefined();
		});


});

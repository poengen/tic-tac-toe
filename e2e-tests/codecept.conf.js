exports.config = {
	tests: './scripts/*_test.js',
	output: './output',
	helpers: {
		Puppeteer: {
			url: 'http://poengen.github.io/tictactoe',
			//url: 'http://localhost:3000',
			//show: true
		}
	},
	include: {
		I: './steps_file.js'
	},
	bootstrap: null,
	mocha: {},
	name: 'e2e-tests'
};

module.exports = function (grunt) {
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-mocha-test');

	grunt.registerTask('default', ['jshint', 'mochaTest']);

	grunt.initConfig({
		watch: {
			scripts: {
				files: ['*.js', 'lib/*.js', 'test/*.js'],
				tasks: ['default'],
				options: {spawn: false}
			}
		},
		jshint: {
			all: ['*.js', 'lib/*.js', 'test/*.js']
		},
		mochaTest: {
			test: {
				options: {
					reporter: 'spec',
				},
				src: ['test/*.js']
			}
		}
	});
};


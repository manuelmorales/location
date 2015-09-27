module.exports = function (grunt) {
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.registerTask('default', ['jshint']);
	grunt.initConfig({
		jshint: {
			all: ['Gruntfile.js', '*.js', 'test/*.js']
		}
	});
};

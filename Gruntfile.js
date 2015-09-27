module.exports = function (grunt) {
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['jshint']);
	grunt.initConfig({
		jshint: {
			all: ['Gruntfile.js', '*.js', 'test/*.js']
		},
		watch: {
			scripts: {
				files: ['Gruntfile.js', '*.js', 'test/*.js'],
				tasks: ['jshint'],
				options: {spawn: false}
			}
		}
	});
};

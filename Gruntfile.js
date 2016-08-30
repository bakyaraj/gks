module.exports = function (grunt) {
	grunt.initConfig({
		uglify: {
			dist: {
				files: {
					'App/app.min.js': [
										'js/angular-1.3.14/angular.js', 'js/angular-1.3.14/angular-route.min.js',
										'js/angular-1.3.14/angular-translate.min.js', 'js/angular-1.3.14/ui-bootstrap-tpls-0.12.1.min.js',
										 'App/app.js','App/directives/custome_directives.js',
										 'App/controllers/controller_angular.js'
									 ]
				},
				options: {
    				banner: '/*!<%= grunt.template.today("dd-mm-yyyy") %> */\n',
    				mangle: false
  				}
			},
		},
		ngdocs:{
			all:['App/*.js','App/controllers/*.js']
		},
		watch: {
			files: ['App/*.js'],
			tasks: ['uglify:dist']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-ngdocs');

	grunt.registerTask('default', [
		'uglify','ngdocs'
	]);
};
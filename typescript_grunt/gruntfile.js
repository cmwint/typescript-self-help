module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-ts');

    // grunt involves a pattern of objects and nested objects
    grunt.initConfig({
        // each property of this object corresponds to a task grunt can run
        ts: {
            // will be a package of different configurations
            main: {
                // many tasks take an src argument
                // an array of typescript files to turn into js file
                src: ['typescript/*.ts'],
                // where you send the newly created js files
                // dest: 'javascript/',
                // acts like out flag in tsc command line
                out: 'javascript/main.js'

            }
        }
    });

    grunt.registerTask('default', ['ts']);
}
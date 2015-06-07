module.exports = function() {
	var base = './app/';
	
	var config = {
		app:base,
		index:'./'+'index.html',
		styles: base + 'styles/',
		css:base+'styles/styles.css',
		less: base + 'styles/styles.less',
		js:[
			base + '**/*.module.js',
			base + '**/*.js',
			'!' + base + '**/*.spec.js'
		],
		
		bower: {
			json: require('./bower.json'),
			directory: './bower_components/',
			ignorePath:'../..'
		},
		
		build:'./build'
	};
	
	config.getWiredepDefaultOptions = function(){
        var options = {
            bowerJson: config.bower.json,
            directory: config.bower.directory,
            ignorePath: config.bower.ignorePath
        };

        return options;
    };
	
	return config;
}
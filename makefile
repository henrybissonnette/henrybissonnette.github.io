

bundle.js: main.js package.json ./assets/js/* ./assets/js/**/*
	./node_modules/.bin/browserify main.js > bundle.js
# Como instalar #

Para poder correr este proyecto se necesitan algunas dependencias como bower, gulp y obviamente node.

### Instalar node con brew ###
Yo recomiendo usar [NVM](https://github.com/creationix/nvm) para el manejo de node.
```
#!
$ brew install node
$ node -v
 v0.10.26
$ npm -v 1.4.3
```
### Gulp y Bower ###
Bower es para controlar las dependencias y gulp para automatizar algunos procesos.
```
#!
￼￼$ npm install -g gulp
$ npm install -g bower
```
Con eso instalado solo basta correr 
```
#!

$ gulp
```
deberia devolver algo así:

* Using gulpfile ~/......./Gulpfile.js
* Starting 'server'...
* Server started http://localhost:8080
* LiveReload started on port 35729
* Finished 'server' after 43 ms
* Starting 'inject'...
* Starting 'wiredep'...
* Finished 'wiredep' after 4.27 ms
* Starting 'watch'...
* Finished 'watch' after 106 ms
* Finished 'inject' after 141 ms
* Starting 'default'...
* Finished 'default' after 6.89 μs
* Starting 'html'...
* Finished 'html' after 3.46 ms

Si van a http://localhost:8080 debería verse la aplicación.
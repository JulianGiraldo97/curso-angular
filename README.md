ANGULAR CLI GENERATE	

// genera una clase en Angular
ng generate class nombre
// genera un componente en Angular
ng generate component nombre
// genera un enum en Angular
ng generate enum nombre
//genera una interfaz en Angular
ng generate interface nombre
// generar un modulo angular
ng generate module nombre
// generar un servicio Angular
ng generate service nombre
// genera una directiva Angular
ng generate directive nombre
// genera un filtro Angulas
ng generate pipe nombre
// genera un subproyecto Angular
ng generate application nombre
// generar una libreria propia Angular
ng generate library nombre

------------------------------------------------------------------------------------------------------------
ESTRUCTURA DE UN PROYECTO ANGULAR

angular.json = Configuraciones por defecto de Angular CLI
package.json = Especifica las dependencias NPM
src/ = Código fuente para la app 
node_modules/ = Provee los paquetes NPM
tsconfig.json = Configuraciones de TypeScript
tslint.json = Configuración para TSlint, conjunto de analisis estatico de buenas practicas TypeScript
app/ = contiene los archivos de componentes
assets/ = contiene imagenes y otros archivos
enviroments/ = Contiene opciones de configuración para entornos objetivo
favicon.ico = icono que usa la app
index.html = principal archivo html cuando se abre el sitio
main.ts = principal punto de entrada de la app
polyfills.ts = provee polyfill scripts para el soporte de navegadores antiguos
style.sass = provee los estilos a nivel del proyecto
test.ts = Archivo de configuración para hacer testing 

------------------------------------------------------------------------------------------------------------
DESPLIEGUE LOCAL DEL BUILD DE LA APP

//generamos la carpeta de build que contiene archivos .js necesarios para el proyecto
ng build
// este comando nos genera una carpeta dist/ 
ng build --prod
// este comando nos genera una build optimizada de producción

// HTTP-SERVER = hace algo parecido a un servidor apache pero de una manera mas simple
npm install -g http-server
// si queremos correr el servidor local usamos lo siguiente
http-server dist/nombreproyecto/index.html

-----------------------------------------------------------------------------------------------------------
COMPONENTES EN ANGULAR

// Es la combinación de varios elementos: 
// template: es donde tenemos nuestro codigo html
// CSS: estilos para el template
// Binding: comunicación de vista y componente 
// Clase: codigo fuente de typescript que tiene sus propiedades y métodos
// Metadata: propiedades y decoradores para el framework, funciones configurables con parametros

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',  // plantilla, html
  styleUrls: ['./app.component.css']    // estilos, css
})
export class AppComponent {
  title = 'curso-angular';              // clase, propiedades, metodos, lógica
}

// DE DONDE IMPORTAMOS LOS DECORADORES ?
// los podemos importar de unos paquetes que ya nos da angular, algunos de ellos son:
// @angular/core , @angular/common/http , @angular/animate, @angular/router

//CREANDO UN COMPONENTE ANGULAR
// se puede crear un archivo a mano con extension .ts y un sufijo .component.ts
// definirle una clase TypeScript , decorar la clase con @Component(metadatos)
// importar como ya habiamos dicho de @angular/core
// usar opciones de configuración(decorador)
// o simplemente generando con Angula CLI 'ng generate component nombre'

// COMO RENDERIZAR EL COMPONENTE ?
//


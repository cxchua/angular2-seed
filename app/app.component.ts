import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';

@Component({
    selector: 'my-app',
    template: '<h1>CX Angular App</h1><courses></courses><authorY></authorY>',
    directives:[CoursesComponent, AuthorsComponent]
})

// For adding metadata to the class
export class AppComponent { }

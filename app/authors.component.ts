import {Component} from 'angular2/core';
import {AuthorZZService} from './author.service';
import {AutoGrowDirective} from './auto-grow.directive';

@Component({
  selector: "authorY",
  template: `
  <h2>My favourite authors</h2>
  {{chicken}}
  <input type="text" autoGrow >
  <ol>
    <li *ngFor="#authorM of authorX">
      {{authorM}}
    </li>
  </ol>
  `,
  providers:[AuthorZZService],
  directives:[AutoGrowDirective]
})


export class AuthorsComponent {
  chicken: string = "Chicken variable authors";
  authorX;
  constructor(authorService:AuthorZZService){
    this.authorX = authorService.getbanana();
  }
}

import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: 'about.component.html'
})
export class AboutComponent { 

  private projectName: string;

  constructor() {
    this.projectName = "Some text from about page";
  }
}

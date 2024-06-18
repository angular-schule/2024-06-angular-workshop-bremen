import { NgComponentOutlet } from '@angular/common';
import { Component, ComponentFactoryResolver, ComponentRef, ElementRef, EnvironmentInjector, OnInit, ViewContainerRef, computed, inject, signal, viewChild } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import LoadMeComponent from './load-me/load-me.component';
import { LoadMe2Component } from './load-me2/load-me2.component';
import { LoadMe3Component } from './load-me3/load-me3.component';


const availableComponents = [
  { component: LoadMeComponent,  inputs: { myInput: 'foo' }},
  { component: LoadMe2Component, inputs: { myInput: 'bar' }},
  { component: LoadMe3Component, inputs: { myInput: 'foo-bar' }},
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgComponentOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dynamic-components-demo';

  currentComponentIndex = signal(0);
  currentComponent = computed(() => availableComponents[this.currentComponentIndex()]);

  // ---

  viewContainerRef = viewChild.required('viewContainerRef', { read: ViewContainerRef });

  // siehe https://v17.angular.io/api/core/createComponent
  doCreateComponent(index: number) {

    const childComponentRef = this.viewContainerRef().createComponent(availableComponents[index].component);
    childComponentRef.setInput('myInput', index + 1);
    childComponentRef.setInput('showRemoveMe', true);

    const childComponent = childComponentRef.instance;

    // auf Ereignis reagieren
    childComponent.removeMe.subscribe(() => this.removeComponent(childComponentRef))
  }

  removeComponent(childComponent: ComponentRef<unknown>) {
    const indexToRemove: number = this.viewContainerRef().indexOf(childComponent.hostView);
    this.viewContainerRef().remove(indexToRemove);
  }
}

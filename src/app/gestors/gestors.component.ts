import { Component, OnInit } from '@angular/core';
import { Gestor } from '../gestor';
import { GESTORS } from '../mock-gestors';

@Component({
  selector: 'app-gestors',
  templateUrl: './gestors.component.html',
  styleUrls: ['./gestors.component.css']
})
export class GestorsComponent implements OnInit {

  constructor() { }

  gestors = GESTORS;
  selectedGestor: Gestor;

  ngOnInit() {
  }

  onSelect(gestor: Gestor): void {
    this.selectedGestor = gestor;
  }

}

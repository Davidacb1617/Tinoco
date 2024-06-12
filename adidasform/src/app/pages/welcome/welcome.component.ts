import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdidasComponent } from '../../components/adidas/adidas.component';


@Component ({
    selector: 'app-welcome',
    standalone: true,
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.css'],
    imports: [AdidasComponent,RouterOutlet]
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit () {}

}
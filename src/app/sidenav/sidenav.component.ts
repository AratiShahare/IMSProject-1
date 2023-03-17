import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit{
  @Output() taggeledEvent: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router) {}

  ngOnInit(): void {}

  drawertoggle() {
    this.taggeledEvent.emit();
  }
}

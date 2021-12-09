import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input()
  backgroundColor = 'white'

  @Input()
  iconUrl: string;

  @Input()
  iconColor: string;

  @Output()
  clicked = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

}

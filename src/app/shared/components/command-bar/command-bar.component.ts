import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-command-bar',
  templateUrl: './command-bar.component.html',
  styleUrl: './command-bar.component.scss'
})
export class CommandBarComponent {
  @Input() buttons: { label: string; action: string }[] | undefined;
  @Output() actionEmitter = new EventEmitter();

  executeAction(data: any) {
    this.actionEmitter.emit(data);
  }
}

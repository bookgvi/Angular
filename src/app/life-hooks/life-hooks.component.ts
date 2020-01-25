import { AfterContentInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'life-hooks',
  templateUrl: './life-hooks.component.html',
  styleUrls: ['./life-hooks.component.css', '../../style/flex.classes.css']
})
export class LifeHooksComponent implements OnInit, AfterContentInit {
  @Input() val: number = 222;

  get _name(): number {
    return this.val;
  }

  ngOnInit() {
    console.log('OnInit', this._name);
  }
  ngAfterContentInit(): void {
    console.log('AfterContentInit', this._name);
  }
}

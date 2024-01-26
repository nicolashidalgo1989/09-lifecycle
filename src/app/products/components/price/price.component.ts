import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html'
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy{

  @Input()
  public price: number = 0;
  public changes: any;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('componente hijo: 1- ngOnChanges');
    console.log({ changes });
    this.changes = changes;
  }

  ngOnInit(): void {
    console.log('componente hijo: 2 - ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('componente hijo: ngOnDestroy');
  }

}

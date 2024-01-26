import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html'
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy{

  @Input()
  public price: number = 0;

  public changes: any;
  public interval$?: Subscription;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('componente hijo: 1- ngOnChanges');
    console.log({ changes });
    this.changes = changes;
  }

  ngOnInit(): void {
    console.log('componente hijo: 2 - ngOnInit');
    this.interval$ = interval(1000).subscribe(
      value => {
        console.log(`tick: ${value}`)
      }
    )
  }

  ngOnDestroy(): void {
    console.log('componente hijo: ngOnDestroy');
    this.interval$?.unsubscribe();
  }

}

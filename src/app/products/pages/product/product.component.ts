import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'products-product-page',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{

  public visible: boolean = false;
  public changePrice: number = 0;

  constructor(){
    console.log('0 - constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('1 - ngOnChanges');
    console.log({ changes });

  }

  ngOnInit(): void {
    console.log('2 - ngOnInit');
  }

  ngDoCheck(): void {
    console.log('3 - ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('4 - ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('5 - ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('6 - ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('7 - ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('8 - ngOnDestroy');
  }

  onChangePrice(): number{
    return this.changePrice++;
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Latihan';
  math : Math;
  a = 3;
  b = 5;

  hasil = Math.pow(this.a,this.b);

  gg = this.hasil % 2;

/*
Pola A
*****o
****oo
***ooo
**
*
*/

/*
Pola B
***
****
*****
******
*******
********
*/


}

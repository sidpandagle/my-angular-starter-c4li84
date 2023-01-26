import { Component, OnInit, VERSION } from '@angular/core';
import { ApiService } from './api.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  version = 'Angular: v' + VERSION.full;

  ngOnInit() {
    this.getData()
  }

  constructor(private api: ApiService) {}

  getData(){
    this.api.getDData()
    .pipe(
        switchMap(id => {
          console.log(id)
          return this.api.getJPData()
        })
    )
    .subscribe(res=>{
      console.log(res)
    })
  }

}

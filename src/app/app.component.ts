import { Component, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { CommonService } from './shared/services/common.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'library-management';
  flag : boolean = false;

  constructor(
    private _commonService : CommonService,
    private cdRef : ChangeDetectorRef
  ) {
  }

  ngAfterViewChecked() {
    this._commonService.subjectActivated$.subscribe((status:boolean) => {
      if (status) {
        this.flag = true;
        this.cdRef.detectChanges();
      } else {
        this.flag = false;
        this.cdRef.detectChanges();
      }
    });
  }

}

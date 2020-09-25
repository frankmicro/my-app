import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../shared/services/auth.service';
import { AuthGuard } from '../shared/guards/auth.guard';
import { EncrDecrService } from '../shared/services/encr-decr-service.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    AuthService,
    AuthGuard,
    [EncrDecrService],
    // {
    //   provide: HTTP_INTERCEPTORS, 
    //   useClass: HttpConfigInterceptor, multi: true
    // }
  ],
})
export class SharedModule { }

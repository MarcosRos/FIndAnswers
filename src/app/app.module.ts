import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { AppComponent } from './app.component';
import { UserService } from './services/user.service';
import { HelloComponent } from './hello.component';
import {
  HttpClient,
  HttpClientModule,
  HttpHandler,
} from '@angular/common/http';

@NgModule({
  imports: [BrowserModule, HttpClientModule, FormsModule],
  declarations: [AppComponent, HelloComponent, HeaderComponent],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}

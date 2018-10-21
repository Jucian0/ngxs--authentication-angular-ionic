import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { environment } from '../environments/environment';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './services/auth.service';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    AuthModule,
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    NgxsModule.forRoot(),
    NgxsRouterPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production
    }),
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

import {ApplicationConfig, Injectable} from '@angular/core';
import {provideRouter, RouterStateSnapshot, Routes, TitleStrategy} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {HomeComponent} from "./home/home.component";
import {Cau1Component} from "./cau1/cau1.component";
import {Cau2Component} from "./cau2/cau2.component";
import {Cau3Component} from "./cau3/cau3.component";
import {Cau4Component} from "./cau4/cau4.component";
import {Cau5Component} from "./cau5/cau5.component";
import {Cau7Component} from "./cau7/cau7.component";
import {Cau8Component} from "./cau8/cau8.component";
import {Cau6Component} from "./cau6/cau6.component";
import {Cau9Component} from "./cau9/cau9.component";
import {Cau10Component} from "./cau10/cau10.component";
import {Cau11Component} from "./cau11/cau11.component";

const routes: Routes = [
  {path: '', redirectTo: 'index.html', pathMatch: 'full'},
  {path: 'index.html', title: 'Trang chủ', component: HomeComponent},
  {path: 'Lab1_1.html', title: 'Câu 1', component: Cau1Component},
  {path: 'Lab1_2.html', title: 'Câu 2', component: Cau2Component},
  {path: 'Lab1_3.html', title: 'Câu 3', component: Cau3Component},
  {path: 'Lab1_4.html', title: 'Câu 4', component: Cau4Component},
  {path: 'Lab1_5.html', title: 'Câu 5', component: Cau5Component},
  {path: 'Lab1_6.html', title: 'Câu 6', component: Cau6Component},
  {path: 'Lab1_7.html', title: 'Câu 7', component: Cau7Component},
  {path: 'Lab1_8.html', title: 'Câu 8', component: Cau8Component},
  {path: 'Lab1_9.html', title: 'Câu 9', component: Cau9Component},
  {path: 'Lab1_10.html', title: 'Câu 10', component: Cau10Component},
  {path: 'Lab1_11.html', title: 'Câu 11', component: Cau11Component},
  {path: '**', redirectTo: ''}
];

@Injectable({providedIn: 'root'})
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(`Angular | Lab1 - ${title}`);
    }
  }
}


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    {provide: TitleStrategy, useClass: TemplatePageTitleStrategy},
  ]
};

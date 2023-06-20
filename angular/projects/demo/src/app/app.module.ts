import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AngularNgForTestComponent } from './ngFor';
import { AngularNgForCmdTestComponent } from './ngFor_cmd';
import { AngularSimpleComponent } from './simple';
import { AComponent, BComponent, CComponent } from './dummy.component';

// local testing
// import { GridstackModule } from './gridstack.module';
// import { GridstackComponent } from './gridstack.component';
import { GridstackModule, GridstackComponent } from 'gridstack/dist/angular';
import { ChangingDataProviderBugComponent } from './bug/changing-data-provider-bug/changing-data-provider-bug.component';
import { WidgetComponent } from './bug/widget/widget.component';
import { GridComponent } from 'projects/demo/src/app/bug/grid/grid.component';

@NgModule({
  imports: [
    BrowserModule,
    GridstackModule,
  ],
  declarations: [
    AngularNgForCmdTestComponent,
    AngularNgForTestComponent,
    AngularSimpleComponent,
    AppComponent,
    AComponent,
    BComponent,
    CComponent,
    ChangingDataProviderBugComponent,
    WidgetComponent,
    GridComponent,
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    // register all our dynamic components created in the grid
    GridstackComponent.addComponentToSelectorType([AComponent, BComponent, CComponent]);
  }
}

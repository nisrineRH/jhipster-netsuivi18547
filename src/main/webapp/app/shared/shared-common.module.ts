import { NgModule } from '@angular/core';

import { NetSuivi18547SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [NetSuivi18547SharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [NetSuivi18547SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class NetSuivi18547SharedCommonModule {}

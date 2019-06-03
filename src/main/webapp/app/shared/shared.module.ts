import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NetSuivi18547SharedLibsModule, NetSuivi18547SharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [NetSuivi18547SharedLibsModule, NetSuivi18547SharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [NetSuivi18547SharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NetSuivi18547SharedModule {
  static forRoot() {
    return {
      ngModule: NetSuivi18547SharedModule
    };
  }
}

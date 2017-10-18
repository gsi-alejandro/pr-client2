import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MrSService } from './mr-s.service';

@NgModule({
    imports: [ CommonModule ],
    providers: [ MrSService]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}

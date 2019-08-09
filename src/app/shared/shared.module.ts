import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule,  } from '@angular/common/http';
import { NgMaterialModule } from 'src/app/shared/modules/ng-material/ng-material.module';
import { RouterModule } from '@angular/router';
import { SharedEventEmitterBusService } from 'src/app/shared/data-bus/shared-event-emitter-bus.service';
import { SampleMessageService } from 'src/app/shared/data-bus/shared-message-services/sample-message.service';
import { SharedMessageService } from 'src/app/shared/data-bus/shared-message-services/shared-message.service';
import { NgBootstrapModule } from 'src/app/shared/modules/ng-bootstrap/ng-bootstrap.module';

@NgModule({
  imports: [CommonModule, FormsModule, HttpClientModule, RouterModule, NgMaterialModule,
    NgBootstrapModule],
  declarations: [ /* PIPES, COMPONENTS, DIRECTIVES */],
  exports: [CommonModule, FormsModule, HttpClientModule, RouterModule,
    NgMaterialModule, NgBootstrapModule /* PIPES, COMPONENTS, DIRECTIVES, MODULES */]
  /** NO PROVIDERS HERE */
})
export class SharedModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        /** PROVIDERS ARE HERE */
        SharedEventEmitterBusService,
        SampleMessageService,
        SharedMessageService
        ]
    };
  }
 }

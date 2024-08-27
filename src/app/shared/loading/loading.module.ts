import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingAppComponent } from './loading.component'; // or any other components, directives, pipes

@NgModule({
    declarations: [LoadingAppComponent], // Declare your components here
    imports: [CommonModule],          // Import required modules here
    exports: [LoadingAppComponent]       // Export if needed in other modules
})
export class LoadingAppModule { }

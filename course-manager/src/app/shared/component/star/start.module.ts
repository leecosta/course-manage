import { StarComponent } from './star.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [StarComponent],
  // exports serve para o componente poder ser utilizado em outro módulo
  exports: [StarComponent],
})
export class StarModule {}

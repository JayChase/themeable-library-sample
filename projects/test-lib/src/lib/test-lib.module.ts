import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [TestComponent],
  imports: [MatButtonModule],
  exports: [TestComponent]
})
export class TestLibModule {}

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { IBit } from '../../models/bit.model';
import { BitService } from '../../services/bit.service';

@Component({
  templateUrl: './list.component.html'
  , changeDetection: ChangeDetectionStrategy.OnPush
  , standalone: true
  , imports: [CommonModule, RouterModule,RouterLink]
})
export class BitListComponent implements OnInit {

  // TASK:02 get list of bits from a service. let the service return static json
  // Bind the list to the returned result
  // Every item in the list should have a link to the details page
  // bits!: Bit[];
   bits$:Observable<IBit[]>;
  constructor(private bitService:BitService) {
    //
  }
  ngOnInit(): void {
    this.bits$=this.bitService.getBits();
  }
}

// export class BitListComponent implements OnInit {

//   // TASK:02 get list of bits from a service. let the service return static json
//   // Bind the list to the returned result
//   // Every item in the list should have a link to the details page

//   // always start with an observable for the list
//   bits$: Observable<IBit[]>;

//   constructor(private bitService: BitService) {
//     //
//   }
//   ngOnInit(): void {
//     // don't subscribe, always use async pipe whenver possible
//     this.bits$ = this.bitService.GetBits();
//   }
// }


import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClockPipe } from '../../lib/pipes/clock.pipe';
import { ISegment } from '../../models/segment.model';
@Component({
  selector: 'dm-piece-details',
  templateUrl: './details.partial.html'
  , changeDetection: ChangeDetectionStrategy.OnPush
  , standalone: true
  , imports: [CommonModule, ClockPipe, ReactiveFormsModule]
})
export class PieceDetailsPartial implements OnInit {

  // one way to work with changing inputs:
  private _segment: ISegment;
  @Input() get segment(): ISegment {
    return this._segment;
  }
  set segment(value: ISegment) {
    this._segment = value;
    // update form here
    this.segmentForm?.patchValue(value);
  }

  @Output() onSave: EventEmitter<Partial<ISegment>> = new EventEmitter();

  // injection is okay too, as long as it appears at the top of the component
  fb: FormBuilder = inject(FormBuilder);

  segmentForm: FormGroup;

  ngOnInit(): void {

    this.segmentForm = this.fb.group({
      name: [null, [Validators.required]],
      from: [null],
      to: [null]
    });

    // populate form with segment data
    // this wont work, this is called on component initilization, and never disappars
    // this.segmentForm.patchValue(this.segment);
  }

  saveSegment() {

    // TASK:05: simple validation, style the error field to have red borders
    if (this.segmentForm.invalid) return;
    // save here or propagate to parent component?
    // propagating is better here, for trhee reasons:
    // 1. the pieceService already exists in the parent component
    // 2. we have updatePiece but no updateSegment (REST)
    // 3. the "name" also appears in the parent, so it can be updated there

    // dont do this
    // this.onSave.emit(this.segmentForm.value);

    // send an ISegment of the form. Always map properly even if it looks that the form is enough
    // make it a habit to use Partials, because sometimes not all the object need to be edited
    const segment: Partial<ISegment> = {
      name: this.segmentForm.value.name,
      from: this.segmentForm.value.from,
      to: this.segmentForm.value.to,
      // if editing, include id
      id: this.segment?.id
    };
    this.onSave.emit(segment)


  }

}

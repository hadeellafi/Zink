import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, Output } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { BehaviorSubject, Subscription } from "rxjs";
import { ISegment } from "../../models/segment.model";
import { halfDayFormat } from "../../pipes/halfday.pipe";
import { PieceService } from "../../services/piece.service";

@Component({
    selector: "dm-piece-details",
    templateUrl: "./details.partial.html",
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [halfDayFormat, ReactiveFormsModule, CommonModule]
})
export class DetailsPartialComponent implements OnChanges, OnDestroy {

    @Input() segment$: BehaviorSubject<ISegment>;
    editForm: FormGroup;
    sub: Subscription;
    @Output() doneEditing: EventEmitter<string> = new EventEmitter<string>();

    constructor(private formBuilder: FormBuilder, private pieceService: PieceService) {

    }

    ngOnChanges() {
        if (this.segment$) {
            this.initForm();
        }
        else
            console.log("else statment");
    }


    private initForm() {
        this.sub = this.segment$.subscribe(segment => {
            if (segment) {
                let name = segment.name;
                let from = segment.from;
                let to = segment.to;

                this.editForm = this.formBuilder.group({
                    'id': segment.id,
                    'name': this.formBuilder.control(name, Validators.required),
                    'from': this.formBuilder.control(from, Validators.required),
                    'to': this.formBuilder.control(to, Validators.required),
                });
            }
        });
    }

    onSubmit() {
        this.pieceService.UpdatePiece(this.editForm.value).subscribe(response => {
            console.log("req response",response);
            this.doneEditing.emit("done");
          })
    }
    ngOnDestroy(): void {
        this.sub.unsubscribe;
    }
}
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalProps } from '../../helper/type.model';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrl: './modal.component.scss'
})
export class ModalComponent implements OnInit {
    @Input() visible: boolean = true;
    @Input() title: string = '';
    @Input() isLoading: boolean = true;
    @Output() handleModal: EventEmitter<string> = new EventEmitter<string>();
    isVisibleModal: boolean = false;

    ngOnInit(): void {
        console.log('hereee modal')
    }

    handleVisibleModal(action: string) {
        this.handleModal.emit(action);
    }


}
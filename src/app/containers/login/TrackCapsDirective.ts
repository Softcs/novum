import { Output, HostListener, EventEmitter } from '@angular/core';
import { Directive } from '@angular/core';


@Directive({ selector: '[capsLock]' })
export class TrackCapsDirective {
    @Output('capsLock') capsLock = new EventEmitter<Boolean>();

    @HostListener('window:keydown', ['$event'])
    onKeyDown(event: KeyboardEvent): void {
        this.capsLock.emit(event.getModifierState && event.getModifierState('CapsLock'));
    }
    @HostListener('window:keyup', ['$event'])
    onKeyUp(event: KeyboardEvent): void {
        this.capsLock.emit(event.getModifierState && event.getModifierState('CapsLock'));
    }

}

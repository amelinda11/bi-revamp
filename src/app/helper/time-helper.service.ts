import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeHelperService {

    constructor() { }

    getCurrentTime(): string {
        const now = new Date();
        const hours = this.padZero(now.getHours());
        const minutes = this.padZero(now.getMinutes());
        const seconds = this.padZero(now.getSeconds());
        return `${hours}:${minutes}:${seconds}`;
    }

    formatDate(date: Date): string {
        const day = date.getDate();
        const month = date.toLocaleString('en-US', { month: 'short' });
        const year = date.getFullYear();
        return `${day} ${month} ${year}`;
    }
    
    private padZero(num: number): string {
        return num < 10 ? `0${num}` : `${num}`;
    }
}

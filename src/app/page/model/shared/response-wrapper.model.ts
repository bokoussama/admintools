import { Headers } from '@angular/http';

export class ResponseWrapper {
    constructor(
        public headers: Headers,
        public json: any,
        public status: number
    ) {
        headers = new Headers();
        headers.set('Access-Control-Allow-Origin', '*');
        headers.set('Access-Control-Allow-Headers', 'Content-Type');
        headers.set('Access-Control-Allow-Methods', '*');
    }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sanitizeHtml'
})
export class SanitizeHtmlPipe implements PipeTransform {
  transform(value: string): string {
    const doc = new DOMParser().parseFromString(value, 'text/html');
    return doc.body.textContent || "";
  }
}

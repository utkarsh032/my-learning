import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-style-options',
  // 6. Load more than one CSS file: styleUrls (array) instead of styleUrl (single file)
  styleUrls: ['./style-options.css', './style-options-extra.css'],
  // 5. Style written inside the component file
  styles: [
    `
      .ts-box {
        background-color: #dcfce7;
        border-color: #22c55e;
      }
    `,
  ],
  templateUrl: './style-options.html',
})
export class StyleOptions {}

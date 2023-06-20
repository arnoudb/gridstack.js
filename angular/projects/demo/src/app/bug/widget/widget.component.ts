import { Component, OnInit, Input } from '@angular/core';
import { WidgetConfig } from "projects/demo/src/app/bug/changing-data-provider-bug/changing-data-provider-bug.component";

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css'],
})
export class WidgetComponent {
  @Input() widget: WidgetConfig | null = null;
}

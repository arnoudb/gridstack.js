import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GridItem, WidgetConfig } from "projects/demo/src/app/bug/changing-data-provider-bug/changing-data-provider-bug.component";
import { GridStackOptions } from "gridstack";
import { nodesCB, elementCB, droppedCB } from "gridstack/dist/angular";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class GridComponent {

  static draggedItem:GridItem|null = null;

  readonly GRID_OPTIONS: GridStackOptions = {
    alwaysShowResizeHandle: false,
    acceptWidgets: true,
    animate: true,
    cellHeight: 20,
    column: 12,
    disableDrag: false,
    disableOneColumnMode: true,
    disableResize: false,
    draggable: { appendTo: 'body' },
    float: false,
    margin: 0,
    minRow: 10,
    staticGrid: false,
    removable: false,
    resizable: { handles: 'e, se, s, sw, w' },
  };

  @Input() gridId: number = 0;
  @Input() items:GridItem[] = [];

  @Output() updateItem = new EventEmitter<{gridId:number,gridItem:GridItem}>();

  trackWidget(_:number, gridItem:GridItem): string {
    return gridItem.id;
  }

  onRemovedCB(event: nodesCB): void {
    console.log('removed');
    const widgetId = event.nodes[0].id;
    const index = this.items.findIndex(item => item.id === widgetId)
    if (widgetId && index >= 0) {
      this.items.splice(index, 1)
    }
  }

  onAddedCB(event: nodesCB): void {
    console.log('added');
    // const sameOrigin = this.items.find((item) => item.widgetConfig.id === event.nodes[0].id);
    // if (!sameOrigin && GridComponent.draggedItem) {
    //   //this.items.push(GridComponent.draggedItem);
    //   this.updateItem.emit({gridId: this.gridId, gridItem: {...GridComponent.draggedItem}})
    //   GridComponent.draggedItem = null;
    // }
  }

  mouseClickGridItem(widgetInput: WidgetConfig) {
    console.log(JSON.stringify(widgetInput));
  }

  onDragStartCB(event: elementCB) {
    console.log('drag start');
    GridComponent.draggedItem = this.items.find((item) => item.widgetConfig.id === event.el.gridstackNode?.id) ?? null;
  }


  onDragStopCB($event: elementCB) {
    console.log('drag stop');
    GridComponent.draggedItem = null;
  }

  onDropped(event: droppedCB) {
    console.log('dropped');
    const sameOrigin = this.items.find((item) => item.widgetConfig.id === event.newNode.id);
    if (!sameOrigin && GridComponent.draggedItem) {
      //this.items.push(GridComponent.draggedItem);
      this.updateItem.emit({gridId: this.gridId, gridItem: {...GridComponent.draggedItem}})
      GridComponent.draggedItem = null;
    }
  }
}

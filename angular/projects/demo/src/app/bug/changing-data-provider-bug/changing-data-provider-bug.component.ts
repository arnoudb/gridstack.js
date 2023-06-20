import { Component, Input } from '@angular/core';

export type WidgetLayout = {
  id: string,
  x: number,
  y: number,
  w: number,
  h: number,
}

export type WidgetConfig = {
  id: string,
  type: string;
  value: string
}

export type GridItem = {
  id: string,
  widgetLayout: WidgetLayout,
  widgetConfig: WidgetConfig,
}

@Component({
  selector: 'app-changing-data-provider-bug',
  templateUrl: './changing-data-provider-bug.component.html',
  styleUrls: ['./changing-data-provider-bug.component.css'],
})
export class ChangingDataProviderBugComponent {

  @Input() gridItems1: GridItem[] = [
    {
      id: '1',
      widgetLayout: {id: '1', x: 0, y: 0, w: 2, h: 6},
      widgetConfig: {id: '1', type: 'text', value: 'widgetConfig 1'},
    },
    {
      id: '2',
      widgetLayout: {id: '2', x: 2, y: 1, w: 2, h: 6},
      widgetConfig: {id: '2', type: 'text', value: 'widgetConfig 2'},
    },
    {
      id: '3',
      widgetLayout: {id: '3', x: 4, y: 2, w: 2, h: 6},
      widgetConfig: {id: '3', type: 'text', value: 'widgetConfig 3'},
    },
    {
      id: '4',
      widgetLayout: {id: '4', x: 6, y: 3, w: 2, h: 6},
      widgetConfig: {id: '4', type: 'text', value: 'widgetConfig 4'},
    },
    {
      id: '5',
      widgetLayout: {id: '5', x: 8, y: 4, w: 2, h: 6},
      widgetConfig: {id: '5', type: 'text', value: 'widgetConfig 5'},
    },
    {
      id: '6',
      widgetLayout: {id: '6', x: 10, y: 5, w: 2, h: 6},
      widgetConfig: {id: '6', type: 'text', value: 'widgetConfig 6'},
    },
    {
      id: '7',
      widgetLayout: {id: '7', x: 0, y: 6, w: 2, h: 6},
      widgetConfig: {id: '7', type: 'text', value: 'widgetConfig 7'},
    },
  ];

  @Input() gridItems2: GridItem[] = [
    {
      id: '8',
      widgetLayout: {id: '8', x: 0, y: 6, w: 2, h: 6},
      widgetConfig: {id: '8', type: 'text', value: 'widgetConfig 8'},
    },
  ];

  moveItemDown() {
    const item = this.gridItems1.pop();
    if (item) {
      this.gridItems2.push(item);
    }
  }

  moveItemUp() {
    const item = this.gridItems2.pop();
    if (item) {
      this.gridItems1.push(item);
    }
  }

  updateItem(data: { gridId: number; gridItem: GridItem }) {
    if (data.gridId === 1) {
      console.log('via parent add to grid 1');
      this.gridItems1.push({...data.gridItem})
      //setTimeout(() => this.gridItems1.push({...data.gridItem}), 10);
    } else if (data.gridId === 2) {
      console.log('via parent add to grid 2')
      this.gridItems2.push({...data.gridItem});
    }
  }
}

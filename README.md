# Mozaïk charts widget


## Bar Chart 

![iframe](https://github.com/manv6/mozaik-ext-charts/blob/master/BarChart.png)

### Bar Chart parameters

key        | required | description
-----------|----------|----------------------------------------------------
`title`    | yes      | *Title of the widget*
`data`     | yes      | *Data of the widget*

### Bar Chart usage

```javascript
{
    type: 'charts.custom_bar_chart_widget',
    title:'Performance Metrics for Baseline',
    columns: 2, rows: 2,data: [{x: 'test1', y: 35},{x: 2, y: 45},{x: 3, y: 235},{x: 4, y: 75}],
    x: 0, y: 2
}
```

## Line Chart 

![iframe](https://github.com/manv6/mozaik-ext-charts/blob/master/LineChart.png)

### Line Chart parameters

key        | required | description
-----------|----------|----------------------------------------------------
`title`    | yes      | *Title of the widget*
`data`     | yes      | *Data of the widget*
`total`    | yes      | *Total title of the widget*
`results`  | yes      | *Data of the widget*
`min`      | no       | *Min of Y axis*
`max`      | no       | *Max of Y axis*
`tickCount`| no       | *X axis spacer*

### Line Chart usage

```javascript
{
    type: 'charts.custom_line_chart_widget',
    title:'Performance Metrics for Name Entity',
    columns: 2, rows: 2,total: 1207, results: [{date:'20160103',total:1207,last:1024},{date:'20160114',total:1207,last:978},
    {date:'20160107',total:1207,last:867},{date:'20160117',total:1207,last:1026}],
    min:0,max:1207,tickCount:30,
    x: 0, y: 0
}
```

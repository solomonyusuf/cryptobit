# cryptobit

#Table Widgets

This Vue component integrates multiple widgets to display financial data, including asset information, pricing, percentage changes, and line charts. It is designed to work within a broader financial dashboard.

## Features
- **Dynamic Data Generation**: Generates 30 random data points for chart visualization.
- **Modular Widget System**: Uses various widgets for asset details, prices, percentage changes, and charts.
- **Reusable UI Components**: Includes widgets like `AssetWidget`, `PriceWidget`, `PercentageWidget`, `LineChartWidget`, and more.

## Installation
Ensure you have Vue 3 installed in your project. Then, import the required dependencies and components.

```sh
npm install
```

## Usage
Include this component in your Vue application:

```vue
<script setup lang="ts">
import TableWidget from '../widgets/TableWidget.vue'
</script>
<template>
   <div class="bit-px-1"> 
        <TableWidget
         :tabHeader="header"
         :filters="filters"
          class="bit-mt-4"/>
    </div>
  </template>
```

## Data Structure
The component structures data into a `shared_data` array that holds multiple financial assets, each represented with various widgets:

```ts
const shared_data = [
  [
    { is: AssetWidget, props: { image: "URL", title: 'Bitcoin', symbol:"BTC" } },
    { is: PriceWidget, props: { amount: "10000", symbol:"$" } },
    { is: PercentageWidget, props: { amount: '-1000', color:"red" } },
    { is: LineChartWidget, props: { data: data, labels: labels }},
    { is: PillWidget, props: { title: "Cryptocurrency"}},
  ]
];
//header columns and content structure
const header = [
                    {
                      id: 'overview',
                      label: 'Overview',
                      header: {
                        subject: 'Assets',
                        columns: [
                          { title: 'Assets', subTitle: '' },
                          { title: 'Price', subTitle: 'Current' },
                          { title: 'Price', subTitle: '24H Change' },
                          { title: 'Price', subTitle: '7D Change' },
                          { title: 'Price', subTitle: '30D Change' },
                          { title: 'Price', subTitle: '30D TL' },
                          { title: 'Marketcap', subTitle: 'Current' },
                          { title: 'Real Volume', subTitle: '24H' },
                          { title: 'Sector', subTitle: '' },
                        ]
                       },
                       content : shared_data
                    },
                    {
                      id: 'calender',
                      label: 'Calender-Year ROI',
                      header: {
                        subject: 'Assets',
                        columns: [
                          { title: 'Assets', subTitle: '' },
                          { title: 'Price', subTitle: 'Current' },
                          { title: 'Price', subTitle: '24H Change' },
                          { title: 'Price', subTitle: '7D Change' },
                          { title: 'Price', subTitle: '30D Change' },
                          { title: 'Price', subTitle: '30D TL' },
                          { title: 'Marketcap', subTitle: 'Current' },
                          { title: 'Real Volume', subTitle: '24H' },
                          { title: 'Sector', subTitle: '' },
                        ],

                       },
                       content :shared_data

                    },
                    {
                      id: 'long-term',
                      label: 'Long-Term ROI',
                      header: {
                        subject: 'Assets',
                        columns: [
                          { title: 'Assets', subTitle: '' },
                          { title: 'Price', subTitle: 'Current' },
                          { title: 'ATH', subTitle: '' },
                          { title: '% Down from ATH', subTitle: '' },
                          { title: 'Marketcap', subTitle: 'Current' },          
                          { title: 'Price', subTitle: '90D Change' },
                          { title: 'Price', subTitle: '180D Change' },
                          { title: 'Price', subTitle: 'IY Change' },
                          { title: 'Price', subTitle: '3Y Change' },
                          { title: 'Price', subTitle: '5Y Change' },
                           
                        ]
                       },
                       content : shared_data
                    },
                     
                    
               ];
const  filters = [
        { key: 'category', label: 'Category All', options: [{ value: 1, label: 'One' }, { value: 2, label: 'Two' }, { value: 3, label: 'Three' }] },
        { key: 'sector', label: 'Sector All', options: [{ value: 1, label: 'One' }, { value: 2, label: 'Two' }, { value: 3, label: 'Three' }] },
        { key: 'tag', label: 'Tag All', options: [{ value: 1, label: 'One' }, { value: 2, label: 'Two' }, { value: 3, label: 'Three' }] },
        { key: 'exchange', label: 'Exchange All', options: [{ value: 1, label: 'One' }, { value: 2, label: 'Two' }, { value: 3, label: 'Three' }] },
        { key: 'network', label: 'Network All', options: [{ value: 1, label: 'One' }, { value: 2, label: 'Two' }, { value: 3, label: 'Three' }] },
        { key: 'marketcap', label: 'Marketcap', options: [{ value: 1, label: 'One' }, { value: 2, label: 'Two' }, { value: 3, label: 'Three' }] },
        { key: 'volume', label: '24H Volume', options: [{ value: 1, label: 'One' }, { value: 2, label: 'Two' }, { value: 3, label: 'Three' }] }
      ]
```
you can also customize table with the following props property
```vue
<script setup lang="ts">
import TableWidget from '../widgets/TableWidget.vue'


// Event handlers (can be placeholders or empty functions)
const onClick = () => { console.log('Clicked!'); };
const onGroupAsset = () => { console.log('Grouping Asset!'); };
const onDownload = () => { console.log('Downloading!'); };
const onSearch = () => { console.log('Searching!'); };
const onDropdown = () => { console.log('Dropdown Triggered!'); };
</script>

<template>
  <div class="bit-px-1">
    <TableWidget
      :total-items="10"
      :items-per-page="5"
      :total-pages="2"
      :active-tab="'overview'"
      :tab-header="tabHeader"
      :filters="filters"
      
      :title="'Assets'"
      :width="'100%'"
      :header-color="'white'"
      :table-bg-color="'#12161e'"
      :accent-bg-color="'transparent'"
      :striped-color="'#697a8d'"
      :striped-bg="'#f9fafb'"
      :active-color="'#697a8d'"
      :active-bg="'rgba(67, 89, 113, 0.1)'"
      :hover-color="'#697a8d'"
      :hover-bg="'rgba(67, 89, 113, 0.06)'"
      :border-color="'#ffffff'"
      :sub-heading-color="'gray'"
      :border="'1px solid #1D2330'"
      :font-color="'white'"
      
      :on-click="onClick"
      :on-group-asset="onGroupAsset"
      :on-download="onDownload"
      :on-search="onSearch"
      :on-dropdown="onDropdown"
      
      class="bit-mt-4"
    />
  </div>
</template>
```

## Props
Each widget receives its respective props:

- **`AssetWidget`**: `{ image: string, title: string, symbol: string }`
- **`PriceWidget`**: `{ amount: string, symbol: string }`
- **`PercentageWidget`**: `{ amount: string, color: string }`
- **`LineChartWidget`**: `{ data: number[], labels: string[] }`
- **`PillWidget`**: `{ title: string }`




 

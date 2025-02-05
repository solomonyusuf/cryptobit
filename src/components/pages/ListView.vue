<script setup lang="ts">
import TableWidget from '../widgets/TableWidget.vue'
import LineChartWidget from '../widgets/LineChartWidget.vue';
import TextWidget from './TextWidget.vue';
import AssetWidget from '../widgets/AssetWidget.vue';
import PriceWidget from '../widgets/PriceWidget.vue';
import PercentageWidget from '../widgets/PercentageWidget.vue';
import PillWidget from '../widgets/PillWidget.vue';
import { onMounted } from "vue";
import PaginationWidget from '../widgets/PaginationWidget.vue';
import RowWidget from '../widgets/RowWidget.vue';
import ColumnWidget from '../widgets/ColumnWidget.vue';

const data = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100)); // Generate 30 random data points
const labels = [
  "January", "February", "March", "April", "May", "June", "July", "August", "September", "October",
  "November", "December", "January", "February", "March", "April", "May", "June", "July", "August",
  "September", "October", "November", "December", "January", "February", "March", "April", "May", "June"
];
const shared_data = [
                           [ 
                              { is: AssetWidget, props: { image: "https://img.icons8.com/?size=100&id=63192&format=png&color=000000", title: 'Bitcoin', symbol:"BTC" } },
                              { is: PriceWidget, props: { amount: "10000", symbol:"$" } },
                              { is: PercentageWidget, props: { amount: '-1000', color:"red" } },
                              { is: PercentageWidget, props: { amount: '+1000', color:"green" } },
                              { is: PercentageWidget, props: { amount: '+4000', color:"green" } },
                              { is: PercentageWidget, props: { amount: '+4000', color:"green" } },
                              { is: LineChartWidget, props: { data: data, labels: labels, options:"{ lineColor: 'rgba(255, 99, 132, 1)', pointColor: 'rgba(255, 99, 132, 1)'}"}},
                              { is: LineChartWidget, props: { data: data, labels: labels, options:"{ lineColor: 'rgba(255, 99, 132, 1)', pointColor: 'rgba(255, 99, 132, 1)'}"}},
                              { is: PillWidget, props: { title: "Cryptocurrency"}},
                           ],
                           [ 
                              { is: AssetWidget, props: { image: "https://img.icons8.com/?size=100&id=IhWBOFHtv6vx&format=png&color=000000", title: 'Ethereum', symbol:"ETH" } },
                              { is: PriceWidget, props: { amount: "10000", symbol:"$" } },
                              { is: PercentageWidget, props: { amount: '-1000', color:"red" } },
                              { is: PercentageWidget, props: { amount: '+1000', color:"green" } },
                              { is: PercentageWidget, props: { amount: '+4000', color:"green" } },
                              { is: PercentageWidget, props: { amount: '+4000', color:"green" } },
                              { is: LineChartWidget, props: { data: data, labels: labels, options:"{ lineColor: 'rgba(255, 99, 132, 1)', pointColor: 'rgba(255, 99, 132, 1)'}"}},
                              { is: LineChartWidget, props: { data: data, labels: labels, options:"{ lineColor: 'rgba(255, 99, 132, 1)', pointColor: 'rgba(255, 99, 132, 1)'}"}},
                              { is: PillWidget, props: { title: "Cryptocurrency"}},
                           ],
                           [ 
                              { is: AssetWidget, props: { image: "https://img.icons8.com/?size=100&id=GPOyWCiTpgRr&format=png&color=000000", title: 'XRP', symbol:"XRP" } },
                              { is: PriceWidget, props: { amount: "10000", symbol:"$" } },
                              { is: PercentageWidget, props: { amount: '-1000', color:"red" } },
                              { is: PercentageWidget, props: { amount: '+1000', color:"green" } },
                              { is: PercentageWidget, props: { amount: '+4000', color:"green" } },
                              { is: PercentageWidget, props: { amount: '+4000', color:"green" } },
                              { is: LineChartWidget, props: { data: data, labels: labels, options:"{ lineColor: 'rgba(255, 99, 132, 1)', pointColor: 'rgba(255, 99, 132, 1)'}"}},
                              { is: LineChartWidget, props: { data: data, labels: labels, options:"{ lineColor: 'rgba(255, 99, 132, 1)', pointColor: 'rgba(255, 99, 132, 1)'}"}},
                              { is: PillWidget, props: { title: "Cryptocurrency"}},
                           ],
                           [ 
                              { is: AssetWidget, props: { image: "https://img.icons8.com/?size=100&id=63192&format=png&color=000000", title: 'Bitcoin', symbol:"BTC" } },
                              { is: PriceWidget, props: { amount: "10000", symbol:"$" } },
                              { is: PercentageWidget, props: { amount: '-1000', color:"red" } },
                              { is: PercentageWidget, props: { amount: '+1000', color:"green" } },
                              { is: PercentageWidget, props: { amount: '+4000', color:"green" } },
                              { is: PercentageWidget, props: { amount: '+4000', color:"green" } },
                              { is: LineChartWidget, props: { data: data, labels: labels, options:"{ lineColor: 'rgba(255, 99, 132, 1)', pointColor: 'rgba(255, 99, 132, 1)'}"}},
                              { is: LineChartWidget, props: { data: data, labels: labels, options:"{ lineColor: 'rgba(255, 99, 132, 1)', pointColor: 'rgba(255, 99, 132, 1)'}"}},
                              { is: PillWidget, props: { title: "Cryptocurrency"}},
                           ],
                           [ 
                              { is: AssetWidget, props: { image: "https://img.icons8.com/?size=100&id=IhWBOFHtv6vx&format=png&color=000000", title: 'Ethereum', symbol:"ETH" } },
                              { is: PriceWidget, props: { amount: "10000", symbol:"$" } },
                              { is: PercentageWidget, props: { amount: '-1000', color:"red" } },
                              { is: PercentageWidget, props: { amount: '+1000', color:"green" } },
                              { is: PercentageWidget, props: { amount: '+4000', color:"green" } },
                              { is: PercentageWidget, props: { amount: '+4000', color:"green" } },
                              { is: LineChartWidget, props: { data: data, labels: labels, options:"{ lineColor: 'rgba(255, 99, 132, 1)', pointColor: 'rgba(255, 99, 132, 1)'}"}},
                              { is: LineChartWidget, props: { data: data, labels: labels, options:"{ lineColor: 'rgba(255, 99, 132, 1)', pointColor: 'rgba(255, 99, 132, 1)'}"}},
                              { is: PillWidget, props: { title: "Cryptocurrency"}},
                           ],
                           [ 
                              { is: AssetWidget, props: { image: "https://img.icons8.com/?size=100&id=GPOyWCiTpgRr&format=png&color=000000", title: 'XRP', symbol:"XRP" } },
                              { is: PriceWidget, props: { amount: "10000", symbol:"$" } },
                              { is: PercentageWidget, props: { amount: '-1000', color:"red" } },
                              { is: PercentageWidget, props: { amount: '+1000', color:"green" } },
                              { is: PercentageWidget, props: { amount: '+4000', color:"green" } },
                              { is: PercentageWidget, props: { amount: '+4000', color:"green" } },
                              { is: LineChartWidget, props: { data: data, labels: labels, options:"{ lineColor: 'rgba(255, 99, 132, 1)', pointColor: 'rgba(255, 99, 132, 1)'}"}},
                              { is: LineChartWidget, props: { data: data, labels: labels, options:"{ lineColor: 'rgba(255, 99, 132, 1)', pointColor: 'rgba(255, 99, 132, 1)'}"}},
                              { is: PillWidget, props: { title: "Cryptocurrency"}},
                           ],
                           [ 
                              { is: AssetWidget, props: { image: "https://img.icons8.com/?size=100&id=63192&format=png&color=000000", title: 'Bitcoin', symbol:"BTC" } },
                              { is: PriceWidget, props: { amount: "10000", symbol:"$" } },
                              { is: PercentageWidget, props: { amount: '-1000', color:"red" } },
                              { is: PercentageWidget, props: { amount: '+1000', color:"green" } },
                              { is: PercentageWidget, props: { amount: '+4000', color:"green" } },
                              { is: PercentageWidget, props: { amount: '+4000', color:"green" } },
                              { is: LineChartWidget, props: { data: data, labels: labels, options:"{ lineColor: 'rgba(255, 99, 132, 1)', pointColor: 'rgba(255, 99, 132, 1)'}"}},
                              { is: LineChartWidget, props: { data: data, labels: labels, options:"{ lineColor: 'rgba(255, 99, 132, 1)', pointColor: 'rgba(255, 99, 132, 1)'}"}},
                              { is: PillWidget, props: { title: "Cryptocurrency"}},
                           ],
                           [ 
                              { is: AssetWidget, props: { image: "https://img.icons8.com/?size=100&id=IhWBOFHtv6vx&format=png&color=000000", title: 'Ethereum', symbol:"ETH" } },
                              { is: PriceWidget, props: { amount: "10000", symbol:"$" } },
                              { is: PercentageWidget, props: { amount: '-1000', color:"red" } },
                              { is: PercentageWidget, props: { amount: '+1000', color:"green" } },
                              { is: PercentageWidget, props: { amount: '+4000', color:"green" } },
                              { is: PercentageWidget, props: { amount: '+4000', color:"green" } },
                              { is: LineChartWidget, props: { data: data, labels: labels, options:"{ lineColor: 'rgba(255, 99, 132, 1)', pointColor: 'rgba(255, 99, 132, 1)'}"}},
                              { is: LineChartWidget, props: { data: data, labels: labels, options:"{ lineColor: 'rgba(255, 99, 132, 1)', pointColor: 'rgba(255, 99, 132, 1)'}"}},
                              { is: PillWidget, props: { title: "Cryptocurrency"}},
                           ],
                           [ 
                              { is: AssetWidget, props: { image: "https://img.icons8.com/?size=100&id=GPOyWCiTpgRr&format=png&color=000000", title: 'XRP', symbol:"XRP" } },
                              { is: PriceWidget, props: { amount: "10000", symbol:"$" } },
                              { is: PercentageWidget, props: { amount: '-1000', color:"red" } },
                              { is: PercentageWidget, props: { amount: '+1000', color:"green" } },
                              { is: PercentageWidget, props: { amount: '+4000', color:"green" } },
                              { is: PercentageWidget, props: { amount: '+4000', color:"green" } },
                              { is: LineChartWidget, props: { data: data, labels: labels, options:"{ lineColor: 'rgba(255, 99, 132, 1)', pointColor: 'rgba(255, 99, 132, 1)'}"}},
                              { is: LineChartWidget, props: { data: data, labels: labels, options:"{ lineColor: 'rgba(255, 99, 132, 1)', pointColor: 'rgba(255, 99, 132, 1)'}"}},
                              { is: PillWidget, props: { title: "Cryptocurrency"}},
                           ],
                           [ 
                              { is: AssetWidget, props: { image: "https://img.icons8.com/?size=100&id=IhWBOFHtv6vx&format=png&color=000000", title: 'Ethereum', symbol:"ETH" } },
                              { is: PriceWidget, props: { amount: "10000", symbol:"$" } },
                              { is: PercentageWidget, props: { amount: '-1000', color:"red" } },
                              { is: PercentageWidget, props: { amount: '+1000', color:"green" } },
                              { is: PercentageWidget, props: { amount: '+4000', color:"green" } },
                              { is: PercentageWidget, props: { amount: '+4000', color:"green" } },
                              { is: LineChartWidget, props: { data: data, labels: labels, options:"{ lineColor: 'rgba(255, 99, 132, 1)', pointColor: 'rgba(255, 99, 132, 1)'}"}},
                              { is: LineChartWidget, props: { data: data, labels: labels, options:"{ lineColor: 'rgba(255, 99, 132, 1)', pointColor: 'rgba(255, 99, 132, 1)'}"}},
                              { is: PillWidget, props: { title: "Cryptocurrency"}},
                           ],
                           [ 
                              { is: AssetWidget, props: { image: "https://img.icons8.com/?size=100&id=GPOyWCiTpgRr&format=png&color=000000", title: 'XRP', symbol:"XRP" } },
                              { is: PriceWidget, props: { amount: "10000", symbol:"$" } },
                              { is: PercentageWidget, props: { amount: '-1000', color:"red" } },
                              { is: PercentageWidget, props: { amount: '+1000', color:"green" } },
                              { is: PercentageWidget, props: { amount: '+4000', color:"green" } },
                              { is: PercentageWidget, props: { amount: '+4000', color:"green" } },
                              { is: LineChartWidget, props: { data: data, labels: labels, options:"{ lineColor: 'rgba(255, 99, 132, 1)', pointColor: 'rgba(255, 99, 132, 1)'}"}},
                              { is: LineChartWidget, props: { data: data, labels: labels, options:"{ lineColor: 'rgba(255, 99, 132, 1)', pointColor: 'rgba(255, 99, 132, 1)'}"}},
                              { is: PillWidget, props: { title: "Cryptocurrency"}},
                           ],
                           [ 
                              { is: AssetWidget, props: { image: "https://img.icons8.com/?size=100&id=63192&format=png&color=000000", title: 'Bitcoin', symbol:"BTC" } },
                              { is: PriceWidget, props: { amount: "10000", symbol:"$" } },
                              { is: PercentageWidget, props: { amount: '-1000', color:"red" } },
                              { is: PercentageWidget, props: { amount: '+1000', color:"green" } },
                              { is: PercentageWidget, props: { amount: '+4000', color:"green" } },
                              { is: PercentageWidget, props: { amount: '+4000', color:"green" } },
                              { is: LineChartWidget, props: { data: data, labels: labels, options:"{ lineColor: 'rgba(255, 99, 132, 1)', pointColor: 'rgba(255, 99, 132, 1)'}"}},
                              { is: LineChartWidget, props: { data: data, labels: labels, options:"{ lineColor: 'rgba(255, 99, 132, 1)', pointColor: 'rgba(255, 99, 132, 1)'}"}},
                              { is: PillWidget, props: { title: "Cryptocurrency"}},
                           ],
                           [ 
                              { is: AssetWidget, props: { image: "https://img.icons8.com/?size=100&id=IhWBOFHtv6vx&format=png&color=000000", title: 'Ethereum', symbol:"ETH" } },
                              { is: PriceWidget, props: { amount: "10000", symbol:"$" } },
                              { is: PercentageWidget, props: { amount: '-1000', color:"red" } },
                              { is: PercentageWidget, props: { amount: '+1000', color:"green" } },
                              { is: PercentageWidget, props: { amount: '+4000', color:"green" } },
                              { is: PercentageWidget, props: { amount: '+4000', color:"green" } },
                              { is: LineChartWidget, props: { data: data, labels: labels, options:"{ lineColor: 'rgba(255, 99, 132, 1)', pointColor: 'rgba(255, 99, 132, 1)'}"}},
                              { is: LineChartWidget, props: { data: data, labels: labels, options:"{ lineColor: 'rgba(255, 99, 132, 1)', pointColor: 'rgba(255, 99, 132, 1)'}"}},
                              { is: PillWidget, props: { title: "Cryptocurrency"}},
                           ],
                           [ 
                              { is: AssetWidget, props: { image: "https://img.icons8.com/?size=100&id=GPOyWCiTpgRr&format=png&color=000000", title: 'XRP', symbol:"XRP" } },
                              { is: PriceWidget, props: { amount: "10000", symbol:"$" } },
                              { is: PercentageWidget, props: { amount: '-1000', color:"red" } },
                              { is: PercentageWidget, props: { amount: '+1000', color:"green" } },
                              { is: PercentageWidget, props: { amount: '+4000', color:"green" } },
                              { is: PercentageWidget, props: { amount: '+4000', color:"green" } },
                              { is: LineChartWidget, props: { data: data, labels: labels, options:"{ lineColor: 'rgba(255, 99, 132, 1)', pointColor: 'rgba(255, 99, 132, 1)'}"}},
                              { is: LineChartWidget, props: { data: data, labels: labels, options:"{ lineColor: 'rgba(255, 99, 132, 1)', pointColor: 'rgba(255, 99, 132, 1)'}"}},
                              { is: PillWidget, props: { title: "Cryptocurrency"}},
                           ],
                    ];
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

</script>

<template>
   <div class="bit-px-1"> 
        <TableWidget
         :tabHeader="header"
         :filters="filters"
          class="bit-mt-4"/>
    </div>
  </template>

  <style lang="scss">
  @import url('../../assets/base.scss');
</style>

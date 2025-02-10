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
const student_data = [
    [ 
        { is: AssetWidget, props: { image: "https://img.icons8.com/?size=100&id=23309&format=png&color=000000", title: 'Pelumi Olabode Isreal', symbol:"" } },
        { is: PriceWidget, props: { amount: "45,320", symbol:"$" } },
        { is: PercentageWidget, props: { amount: '-2.5', color:"red" } },
        { is: PercentageWidget, props: { amount: '+5.1', color:"green" } },
        { is: PriceWidget, props: { amount: "860B", symbol:"$" } },
        { is: PriceWidget, props: { amount: "30B", symbol:"$" } },
        { is: PriceWidget, props: { amount: "31B", symbol:"$" } },
    ],
    [ 
        { is: AssetWidget, props: { image: "https://img.icons8.com/?size=100&id=23309&format=png&color=000000", title: 'Akin Akinpelu', symbol:"" } },
        { is: PriceWidget, props: { amount: "45,320", symbol:"$" } },
        { is: PercentageWidget, props: { amount: '-2.5', color:"red" } },
        { is: PercentageWidget, props: { amount: '+5.1', color:"green" } },
        { is: PriceWidget, props: { amount: "860B", symbol:"$" } },
        { is: PriceWidget, props: { amount: "30B", symbol:"$" } },
        { is: PriceWidget, props: { amount: "31B", symbol:"$" } },
    ],
    [ 
        { is: AssetWidget, props: { image: "https://img.icons8.com/?size=100&id=23309&format=png&color=000000", title: 'Oluwala Olabode', symbol:"" } },
        { is: PriceWidget, props: { amount: "45,320", symbol:"$" } },
        { is: PercentageWidget, props: { amount: '-2.5', color:"red" } },
        { is: PercentageWidget, props: { amount: '+5.1', color:"green" } },
        { is: PriceWidget, props: { amount: "860B", symbol:"$" } },
        { is: PriceWidget, props: { amount: "30B", symbol:"$" } },
        { is: PriceWidget, props: { amount: "31B", symbol:"$" } },
    ],
                     ];
    
const shared_data = [
    [ 
        { is: AssetWidget, props: { image: "https://img.icons8.com/?size=100&id=63192&format=png&color=000000", image2:"https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", title: 'Bitcoin', symbol:"BTC" } },
        { is: PriceWidget, props: { amount: "45,320", symbol:"$" } },
        { is: PercentageWidget, props: { amount: '-2.5', color:"red" } },
        { is: PercentageWidget, props: { amount: '+5.1', color:"green" } },
        { is: PriceWidget, props: { amount: "860B", symbol:"$" } },
        { is: PriceWidget, props: { amount: "30B", symbol:"$" } },
        { is: PriceWidget, props: { amount: "30B", symbol:"$" } },
        { is: LineChartWidget, props: { data, labels, options: "{ lineColor: 'rgba(255, 215, 0, 1)', pointColor: 'rgba(255, 215, 0, 1)'}" } },
        { is: PillWidget, props: { title: "Cryptocurrency" } },
    ],
    [ 
        { is: AssetWidget, props: { image: "https://img.icons8.com/?size=100&id=IhWBOFHtv6vx&format=png&color=000000",image2:"https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", title: 'Ethereum', symbol:"ETH" } },
        { is: PriceWidget, props: { amount: "3,210", symbol:"$" } },
        { is: PercentageWidget, props: { amount: '-1.2', color:"red" } },
        { is: PercentageWidget, props: { amount: '+6.3', color:"green" } },
        { is: PriceWidget, props: { amount: "450B", symbol:"$" } },
        { is: PriceWidget, props: { amount: "18B", symbol:"$" } },
        { is: PriceWidget, props: { amount: "18B", symbol:"$" } },
        { is: PriceWidget, props: { amount: "18B", symbol:"$" } },
        { is: PillWidget, props: { title: "DeFi" } },
    ],
    [ 
        { is: AssetWidget, props: { image: "https://img.icons8.com/?size=100&id=GPOyWCiTpgRr&format=png&color=000000", image2:"https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000",title: 'XRP', symbol:"XRP" } },
        { is: PriceWidget, props: { amount: "0.67", symbol:"$" } },
        { is: PercentageWidget, props: { amount: '+3.5', color:"green" } },
        { is: PercentageWidget, props: { amount: '-0.8', color:"red" } },
        { is: PriceWidget, props: { amount: "35B", symbol:"$" } },
        { is: PriceWidget, props: { amount: "5B", symbol:"$" } },
        { is: PriceWidget, props: { amount: "5B", symbol:"$" } },
        { is: LineChartWidget, props: { data, labels,options: "{ lineColor: 'rgba(0, 0, 255, 1)', pointColor: 'rgba(0, 0, 255, 1)'}" } },
        { is: PillWidget, props: { title: "Payments" } },
    ],
    [ 
        { is: AssetWidget, props: { image: "https://img.icons8.com/?size=100&id=12345&format=png&color=000000",image2:"https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", title: 'Solana', symbol:"SOL" } },
        { is: PriceWidget, props: { amount: "145.20", symbol:"$" } },
        { is: PercentageWidget, props: { amount: '+12.8', color:"green" } },
        { is: PriceWidget, props: { amount: "60B", symbol:"$" } },
        { is: PriceWidget, props: { amount: "8B", symbol:"$" } },
        { is: PriceWidget, props: { amount: "5B", symbol:"$" } },
        { is: PriceWidget, props: { amount: "5B", symbol:"$" } },
        { is: PriceWidget, props: { amount: "2B", symbol:"$" } },
        { is: PillWidget, props: { title: "NFTs" } },
    ],
    [ 
        { is: AssetWidget, props: { image: "https://img.icons8.com/?size=100&id=54321&format=png&color=000000",image2:"https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", title: 'Dogecoin', symbol:"DOGE" } },
        { is: PriceWidget, props: { amount: "0.089", symbol:"$" } },
        { is: PercentageWidget, props: { amount: '+6.5', color:"green" } },
        { is: PriceWidget, props: { amount: "12B", symbol:"$" } },
        { is: PriceWidget, props: { amount: "3B", symbol:"$" } },
        { is: PercentageWidget, props: { amount: '+4.3', color:"green" } },
        { is: PercentageWidget, props: { amount: '+4.3', color:"green" } },
        { is: LineChartWidget, props: { data, labels, options: "{ lineColor: 'rgba(255, 165, 0, 1)', pointColor: 'rgba(255, 165, 0, 1)'}" } },
        { is: PillWidget, props: { title: "Meme Coins" } },
    ],
    [ 
        { is: AssetWidget, props: { image: "https://img.icons8.com/?size=100&id=axJ7sXBmQS2g&format=png&color=000000", image2:"https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", title: 'Binance Coin', symbol:"BNB" } },
        { is: PriceWidget, props: { amount: "370.50", symbol:"$" } },
        { is: PercentageWidget, props: { amount: '-1.7', color:"red" } },
        { is: PercentageWidget, props: { amount: '+1.7', color:"green" } },
        { is: PriceWidget, props: { amount: "80B", symbol:"$" } },
        { is: PriceWidget, props: { amount: "4B", symbol:"$" } },
        { is: PriceWidget, props: { amount: "1B", symbol:"$" } },
        { is: PriceWidget, props: { amount: "1B", symbol:"$" } },
        { is: PillWidget, props: { title: "Exchange Token" } },
    ],
    [ 
        { is: AssetWidget, props: { image: "https://img.icons8.com/?size=100&id=i9bqSOXbRDgV&format=png&color=000000", image2:"https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", title: 'Cardano', symbol:"ADA" } },
        { is: PriceWidget, props: { amount: "1.25", symbol:"$" } },
        { is: PercentageWidget, props: { amount: '+4.3', color:"green" } },
        { is: PriceWidget, props: { amount: "50B", symbol:"$" } },
        { is: PriceWidget, props: { amount: "2B", symbol:"$" } },
        { is: PercentageWidget, props: { amount: '-4.3', color:"red" } },
        { is: PercentageWidget, props: { amount: '-4.3', color:"red" } },
        { is: LineChartWidget, props: { data, labels, options: "{ lineColor: 'rgba(0, 128, 255, 1)', pointColor: 'rgba(0, 128, 255, 1)'}" } },
        { is: PillWidget, props: { title: "Smart Contracts" } },
    ]
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
                      id: 'student',
                      label: 'Student ROI',
                      header: {
                        subject: 'Students',
                        columns: [
                          { title: 'Students', subTitle: '' },
                          { title: 'Debt', subTitle: '' },
                          { title: 'Fees', subTitle: '' },
                          { title: 'Credit', subTitle: '' },
                          { title: 'Debit', subTitle: '' },
                          { title: 'Loss', subTitle: '' },
                          { title: 'Profit', subTitle: '' },
                        ],

                       },
                       content :student_data

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

const handleSearch = (event: any) => {
  console.log("Search input:", event.target.value);
  alert(event.target.value);
};

const handleDownload = (event:any) => {
  console.log("Download button clicked");
  alert("Download button clicked");
};


const handleGroup = (event:any) => {
  console.log("Group button clicked");
  alert("Group Toggle clicked");
};

const handleDropdown = (event:any, filter:any) => {
  console.log("Dropdown clicked");
  alert("Dropdown clicked");
};

</script>

<template>
   <div class="bit-px-1"> 
        <TableWidget
         :tabHeader="header"
         :filters="filters"
         :onSearch="handleSearch"
         :onDownload="handleDownload"
         :onGroupAsset="handleGroup"
         :onDropdown="handleDropdown"
          />
    </div>
  </template>

  <style lang="scss">
  @import url('../../assets/base.scss');
</style>

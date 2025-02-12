<script setup lang="ts">
import TableWidget from '../widgets/TableWidget.vue'
import LineChartWidget from '../widgets/LineChartWidget.vue';
import AssetWidget from '../widgets/AssetWidget.vue';
import PriceWidget from '../widgets/PriceWidget.vue';
import PercentageWidget from '../widgets/PercentageWidget.vue';
import PillWidget from '../widgets/PillWidget.vue';
import { onMounted } from "vue";
import PaginationWidget from '../widgets/PaginationWidget.vue';
import RowWidget from '../widgets/RowWidget.vue';
import ColumnWidget from '../widgets/ColumnWidget.vue';
import ImageWidget from '../widgets/ImageWidget.vue';
import TimeWidget from '../widgets/TimeWidget.vue';
import SpeedWidget from '../widgets/SpeedWidget.vue';
import FireWidget from '../widgets/FireWidget.vue';
import TextWidget from '../widgets/TextWidget.vue';
import VerticalLineWidget from '../widgets/VerticalLineWidget.vue';
import ButtonWidget from '../widgets/ButtonWidget.vue';
import LinkWidget from '../widgets/LinkWidget.vue';
import ClickIconWidget from '../widgets/ClickIconWidget.vue';
import TableHeaderWidget from '../widgets/TableHeaderWidget.vue';
import ImageClusterWidget from '../widgets/ImageClusterWidget.vue';
import StockAssetWidget from '../widgets/StockAssetWidget.vue';
import PriceStackWidget from '../widgets/PriceStackWidget.vue';

const data = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100)); // Generate 30 random data points
const labels = [
  "January", "February", "March", "April", "May", "June", "July", "August", "September", "October",
  "November", "December", "January", "February", "March", "April", "May", "June", "July", "August",
  "September", "October", "November", "December", "January", "February", "March", "April", "May", "June"
];
 

    
const stocks = [
[ 
    [
      { is: StockAssetWidget, props: { image: "https://img.icons8.com/?size=100&id=93873&format=png&color=FA5252", 
        imageHeight:"10px", 
        title: 'AMD', 
        subTitle:"Advanced Micro Devices (AMD)",
        margin:"0 0 0 10px" }
        }, 
    ],
    [
      { is: PriceWidget, props: { amount: "102.34", symbol: "$" } },   
    ],
    [
      { is: PriceStackWidget, props: { amounts: ["+3.21", "+3.24%"], firstColor: 'red', lastColor:"green" } },   
    ],
  ],
  [ 
    [
      { is: StockAssetWidget, props: { image: "https://img.icons8.com/?size=100&id=gYittkwFSVsn&format=png&color=40C057", 
        imageHeight:"10px", 
        title: 'PYPL', 
        subTitle:"PayPal Holdings (PYPL)",
        margin:"0 0 0 10px" }
        }, 
    ],
    [
      { is: PriceWidget, props: { amount: "58.12", symbol: "$" } },   
    ],
    [
      { is: PriceStackWidget, props: { amounts: ["-0.87", "-1.47%"], firstColor: 'green', lastColor:"red" } },   
    ],
  ],
   [
    [
      { is: StockAssetWidget, props: { image: "https://img.icons8.com/?size=100&id=93873&format=png&color=FA5252", 
        imageHeight:"10px", 
        title: 'TIVC', 
        subTitle:"Tivic Health Systems (TIVC)",
        margin:"0 0 0 10px" }
        }, 
    ],
    [
      { is: PriceWidget, props: { amount: "0.4999", symbol: "$" } },   
    ],
    [
      { is: PriceStackWidget, props: { amounts: ["+15.34", "+4.7428%"], firstColor: 'red', lastColor:"green" } },   
    ],
  ],
  [ 
    [
      { is: StockAssetWidget, props: { image: "https://img.icons8.com/?size=100&id=93873&format=png&color=FA5252", 
        imageHeight:"10px", 
        title: 'TIVC', 
        subTitle:"Tivic Health Systems (TIVC)",
        margin:"0 0 0 10px" }
        }, 
    ],
    [
      { is: PriceWidget, props: { amount: "0.4999", symbol: "$" } },   
    ],
    [
      { is: PriceStackWidget, props: { amounts: ["+15.34", "+4.7428%"], firstColor: 'red', lastColor:"green" } },   
    ],
  ],
  [ 
    [
      { is: StockAssetWidget, props: { image: "https://img.icons8.com/?size=100&id=gYittkwFSVsn&format=png&color=40C057", 
        imageHeight:"10px", 
        title: 'AAPL', 
        subTitle:"Apple Inc. (AAPL)",
        margin:"0 0 0 10px" }
        }, 
    ],
    [
      { is: PriceWidget, props: { amount: "178.59", symbol: "$" } },   
    ],
    [
      { is: PriceStackWidget, props: { amounts: ["-1.23", "-0.69%"], firstColor: 'green', lastColor:"red" } },   
    ],
  ],
  [ 
    [
      { is: StockAssetWidget, props: { image: "https://img.icons8.com/?size=100&id=93873&format=png&color=FA5252", 
        imageHeight:"10px", 
        title: 'TSLA', 
        subTitle:"Tesla Inc. (TSLA)",
        margin:"0 0 0 10px" }
        }, 
    ],
    [
      { is: PriceWidget, props: { amount: "230.02", symbol: "$" } },   
    ],
    [
      { is: PriceStackWidget, props: { amounts: ["+2.45", "+1.08%"], firstColor: 'red', lastColor:"green" } },   
    ],
  ],
  [ 
    [
      { is: StockAssetWidget, props: { image: "https://img.icons8.com/?size=100&id=gYittkwFSVsn&format=png&color=40C057", 
        imageHeight:"10px", 
        title: 'MSFT', 
        subTitle:"Microsoft Corporation (MSFT)",
        margin:"0 0 0 10px" }
        }, 
    ],
    [
      { is: PriceWidget, props: { amount: "332.88", symbol: "$" } },   
    ],
    [
      { is: PriceStackWidget, props: { amounts: ["-4.17", "-1.24%"], firstColor: 'green', lastColor:"red" } },   
    ],
  ],
  [ 
    [
      { is: StockAssetWidget, props: { image: "https://img.icons8.com/?size=100&id=93873&format=png&color=FA5252", 
        imageHeight:"10px", 
        title: 'AMZN', 
        subTitle:"Amazon.com Inc. (AMZN)",
        margin:"0 0 0 10px" }
        }, 
    ],
    [
      { is: PriceWidget, props: { amount: "133.22", symbol: "$" } },   
    ],
    [
      { is: PriceStackWidget, props: { amounts: ["+1.80", "+1.37%"], firstColor: 'red', lastColor:"green" } },   
    ],
  ],
  [ 
    [
      { is: StockAssetWidget, props: { image: "https://img.icons8.com/?size=100&id=93873&format=png&color=FA5252", 
        imageHeight:"10px", 
        title: 'GOOGL', 
        subTitle:"Alphabet Inc. (GOOGL)",
        margin:"0 0 0 10px" }
        }, 
    ],
    [
      { is: PriceWidget, props: { amount: "132.04", symbol: "$" } },   
    ],
    [
      { is: PriceStackWidget, props: { amounts: ["-2.12", "-1.58%"], firstColor: 'green', lastColor:"red" } },   
    ],
  ],
  [ 
    [
      { is: StockAssetWidget, props: { image: "https://img.icons8.com/?size=100&id=93873&format=png&color=FA5252", 
        imageHeight:"10px", 
        title: 'NVDA', 
        subTitle:"NVIDIA Corporation (NVDA)",
        margin:"0 0 0 10px" }
        }, 
    ],
    [
      { is: PriceWidget, props: { amount: "431.04", symbol: "$" } },   
    ],
    [
      { is: PriceStackWidget, props: { amounts: ["+7.45", "+1.76%"], firstColor: 'red', lastColor:"green" } },   
    ],
  ],
  [ 
    [
      { is: StockAssetWidget, props: { image: "https://img.icons8.com/?size=100&id=93873&format=png&color=FA5252", 
        imageHeight:"10px", 
        title: 'NFLX', 
        subTitle:"Netflix Inc. (NFLX)",
        margin:"0 0 0 10px" }
        }, 
    ],
    [
      { is: PriceWidget, props: { amount: "388.50", symbol: "$" } },   
    ],
    [
      { is: PriceStackWidget, props: { amounts: ["-6.80", "-1.72%"], firstColor: 'green', lastColor:"red" } },   
    ],
  ],
  [ 
    [
      { is: StockAssetWidget, props: { image: "https://img.icons8.com/?size=100&id=93873&format=png&color=FA5252", 
        imageHeight:"10px", 
        title: 'META', 
        subTitle:"Meta Platforms Inc. (META)",
        margin:"0 0 0 10px" }
        }, 
    ],
    [
      { is: PriceWidget, props: { amount: "310.55", symbol: "$" } },   
    ],
    [
      { is: PriceStackWidget, props: { amounts: ["+5.20", "+1.71%"], firstColor: 'red', lastColor:"green" } },   
    ],
  ],
  [ 
    [
      { is: StockAssetWidget, props: { image: "https://img.icons8.com/?size=100&id=93873&format=png&color=FA5252", 
        imageHeight:"10px", 
        title: 'BABA', 
        subTitle:"Alibaba Group (BABA)",
        margin:"0 0 0 10px" }
        }, 
    ],
    [
      { is: PriceWidget, props: { amount: "86.72", symbol: "$" } },   
    ],
    [
      { is: PriceStackWidget, props: { amounts: ["-1.50", "-1.70%"], firstColor: 'green', lastColor:"red" } },   
    ],
  ],

];



const header = [
                    
                    {
                      id: 'stocks',
                      label: 'Stocks',
                      header: {
                        subject: '',
                        columns: [
                          { title: { is: TableHeaderWidget, props: { image: "https://img.icons8.com/?size=100&id=OfULsxLTqVmm&format=png&color=000000", 
                            image2:"", 
                            title: 'Symbol', 
                            symbol:"",
                            subTitle:"",
                            margin:"0 0 0 10px" }
                            }},

                          { title: { is: TableHeaderWidget, 
                            props: { image: "https://img.icons8.com/?size=100&id=faXHmzlIKEVi&format=png&color=000000", 
                            image2:"", 
                            title: 'Last', 
                            symbol:"",
                            subTitle:"",
                            margin:"0 0 0 10px" }
                            } },
                            
                          { title: { is: TableHeaderWidget, props: { image: "https://img.icons8.com/?size=100&id=xDBlwMuXqAn0&format=png&color=000000", 
                            image2:"", 
                            title: 'Change', 
                            symbol:"",
                            subTitle: '',
                            margin:"0 0 0 10px" }
                            }},
                            
                          
                        ],
                        minColumnWidth: "100px",
                        maxColumnWidth: "150px"
                       },
                       content : stocks
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
      ];

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
         :showTableNumbering="true"
         :showTableBorder="false"
         :showRowBorder="false"
         :showColumnBorder="false"
         :activeTab="'stocks'"
         :showFilter ="false"
         :title="'Stock Prices'"
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

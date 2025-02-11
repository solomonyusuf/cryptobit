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
      [
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        { is: AssetWidget, props: { image: "https://img.icons8.com/?size=100&id=63192&format=png&color=000000", image2:"", title: 'Bitcoin', symbol:"BTC" } }, 
        { is: TimeWidget, props: { content: "5h" } },
       
       
      ],
      [
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        { is: TimeWidget, props: { content: "5h" } },
        { is: SpeedWidget, props: { content: "500" } },
        { is: FireWidget, props: { content: "# 3" } },
        { is: VerticalLineWidget },
        { is: TextWidget, props: { title: "Central Africa Republic", variation:"p" } },
        
      ],
      [
      { is: LineChartWidget, props: { data, labels, options: "{ lineColor: 'rgba(255, 165, 0, 1)', pointColor: 'rgba(255, 165, 0, 1)'}" } },
        
      ],
      [
       { is: PercentageWidget, props: { amount: '-2.5', color:"red" } },  
      ],
      [
        { is: PercentageWidget, props: { amount: '+5.1', color:"green" } },
      ],
      [
        { is: PriceWidget, props: { amount: "860B", symbol:"$" } },
      ],
      [
        { is: PriceWidget, props: { amount: "30B", symbol:"$" } },
      ],
      [
        { is: PriceWidget, props: { amount: "30B", symbol:"$" } },
      ],
      [
        { is: PillWidget, props: { title: "Cryptocurrency" } },
      ],
       [
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        { is: AssetWidget, props: { image: "https://img.icons8.com/?size=100&id=63192&format=png&color=000000", image2:"", title: 'Bitcoin', symbol:"BTC" } }, 
        { is: TimeWidget, props: { content: "5h" } },
       
       
      ],
      [
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        { is: TimeWidget, props: { content: "5h" } },
        { is: SpeedWidget, props: { content: "500" } },
        { is: FireWidget, props: { content: "# 3" } },
        { is: VerticalLineWidget },
        { is: TextWidget, props: { title: "Central Africa Republic", variation:"p" } },
        
      ],
      [
      { is: LineChartWidget, props: { data, labels, options: "{ lineColor: 'rgba(255, 165, 0, 1)', pointColor: 'rgba(255, 165, 0, 1)'}" } },
        
      ],
      [
       { is: PercentageWidget, props: { amount: '-2.5', color:"red" } },  
      ],
      [
        { is: PercentageWidget, props: { amount: '+5.1', color:"green" } },
      ],
      [
        { is: PriceWidget, props: { amount: "860B", symbol:"$" } },
      ],
      [
        { is: PriceWidget, props: { amount: "30B", symbol:"$" } },
      ],
      [
        { is: PriceWidget, props: { amount: "30B", symbol:"$" } },
      ],
      [
        { is: PillWidget, props: { title: "Cryptocurrency" } },
      ]
    ],
    [ 
      [
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        { is: AssetWidget, props: { image: "https://img.icons8.com/?size=100&id=IhWBOFHtv6vx&format=png&color=000000",image2:"https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", title: 'Ethereum', symbol:"ETH" } }, 
        { is: TimeWidget, props: { content: "5h" } },
       
       
      ],
      [
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        { is: TimeWidget, props: { content: "5454h" } },
        { is: SpeedWidget, props: { content: "500000" } },
        { is: FireWidget, props: { content: "# 3" } },
    
      ],
      [
        
      { is: ButtonWidget, props: { title: "Test Button", } },
      { is: ButtonWidget, props: { title: "Another Button", } },
        
      ],
      [
       { is: PercentageWidget, props: { amount: '-2.5', color:"red" } },  
      ],
      [
        { is: PercentageWidget, props: { amount: '+5.1', color:"green" } },
      ],
      [
        { is: PriceWidget, props: { amount: "860B", symbol:"$" } },
      ],
      [
        { is: PriceWidget, props: { amount: "30B", symbol:"$" } },
      ],
      [
        { is: PriceWidget, props: { amount: "30B", symbol:"$" } },
      ],
      [
        { is: PillWidget, props: { title: "Cryptocurrency" } },
      ]
    ],
    [ 
      [
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        { is: AssetWidget, props: { image: "https://img.icons8.com/?size=100&id=63192&format=png&color=000000", image2:"", title: 'Bitcoin', symbol:"BTC" } }, 
        { is: FireWidget, props: { content: "# 55" } },
       
       
      ],
      [
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        
      ],
      [
        { is: FireWidget, props: { content: "# 105" } },

        { is: FireWidget, props: { content: "# 550" } },
        { is: FireWidget, props: { content: "# 250" } },
        { is: FireWidget, props: { content: "# 50050" } },
        { is: FireWidget, props: { content: "# 55000" } },
        { is: FireWidget, props: { content: "# 550000" } },
        { is: FireWidget, props: { content: "# 55000" } },
       
        
      ],
      [
       { is: PercentageWidget, props: { amount: '-2.5', color:"red" } },  
      ],
      [
        { is: PercentageWidget, props: { amount: '+5.1', color:"green" } },
      ],
      [
        { is: PriceWidget, props: { amount: "86000000000000000000", symbol:"$" } },
      ],
      [
        { is: PriceWidget, props: { amount: "3000000000000000000000B", symbol:"$" } },
      ],
      [
        { is: PriceWidget, props: { amount: "300000000000000000B", symbol:"$" } },
      ],
      [
        { is: PillWidget, props: { title: "Crypto" } },
      ]
    ],
    [ 
      [
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        { is: AssetWidget, props: { image: "https://img.icons8.com/?size=100&id=63192&format=png&color=000000", image2:"", title: 'Bitcoin', symbol:"BTC" } }, 
        { is: TimeWidget, props: { content: "5h" } },
       
       
      ],
      [
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        { is: TimeWidget, props: { content: "5h" } },
        { is: SpeedWidget, props: { content: "500" } },
        { is: FireWidget, props: { content: "# 3" } },
        { is: TimeWidget, props: { content: "5454h", color:"gold" } },
        
      ],
      [
        { is: LinkWidget, props: { link:"google.com", title:" test link 1" }},
        { is: SpeedWidget, props: { content: "500000000" } },
        
      ],
      [
       { is: PercentageWidget, props: { amount: '-2.5', color:"red" } },  
      ],
      [
        { is: PercentageWidget, props: { amount: '+5.1', color:"green" } },
      ],
      [
        { is: PriceWidget, props: { amount: "860B", symbol:"$" } },
      ],
      [
        { is: PriceWidget, props: { amount: "30B", symbol:"$" } },
      ],
      [
        { is: PriceWidget, props: { amount: "30B", symbol:"$" } },
      ],
      [
        { is: PillWidget, props: { title: "Cryptocurrency" } },
      ]
    ],
    [
      [
        { is: SpeedWidget, props: { content: "500" } },
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        { is: AssetWidget, props: { image: "https://img.icons8.com/?size=100&id=63192&format=png&color=000000", image2:"", title: 'Bitcoin', symbol:"BTC" } }, 
        { is: TimeWidget, props: { content: "5h" } },
       
       
      ],
      [
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        { is: TimeWidget, props: { content: "500000h" } },
        { is: SpeedWidget, props: { content: "5000000000000" } },
        
      ],
      [
       { is: TextWidget, props: { variation: "h4", title:"Show Test Now Now Now Length", margin:"4px" } },
        
      ],
      [
       { is: PercentageWidget, props: { amount: '-2.5', color:"red" } },  
      ],
      [
        { is: PercentageWidget, props: { amount: '+5.1', color:"green" } },
      ],
      [
        { is: PriceWidget, props: { amount: "860B", symbol:"$" } },
      ],
      [
        { is: TextWidget, props: { title: "Show Text", symbol:"$" } },
      ],
      [
        { is: PriceWidget, props: { amount: "30B", symbol:"$" } },
      ],
      [
        { is: PillWidget, props: { title: "Cryptocurrency" } },
      ]
    ],
    [ 
      [
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        { is: AssetWidget, props: { image: "https://img.icons8.com/?size=100&id=63192&format=png&color=000000", image2:"", title: 'Bitcoin', symbol:"BTC" } }, 
        { is: TimeWidget, props: { content: "5h" } },
       
       
      ],
      [
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        { is: TimeWidget, props: { content: "5h" } },
        { is: SpeedWidget, props: { content: "500" } },
        { is: FireWidget, props: { content: "# 3" } },
        { is: VerticalLineWidget },
        { is: TextWidget, props: { title: "Central Africa Republic", variation:"p" } },
        
      ],
      [
      { is: LineChartWidget, props: { data, labels, options: "{ lineColor: 'rgba(255, 165, 0, 1)', pointColor: 'rgba(255, 165, 0, 1)'}" } },
        
      ],
      [
       { is: PercentageWidget, props: { amount: '-2.5', color:"red" } },  
      ],
      [
        { is: PercentageWidget, props: { amount: '+5.1', color:"green" } },
      ],
      [
        { is: PriceWidget, props: { amount: "860B", symbol:"$" } },
      ],
      [
        { is: PriceWidget, props: { amount: "30B", symbol:"$" } },
      ],
      [
        { is: PriceWidget, props: { amount: "30B", symbol:"$" } },
      ],
      [
        { is: PillWidget, props: { title: "Cryptocurrency" } },
      ]
    ],
    [ 
      [
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        { is: AssetWidget, props: { image: "https://img.icons8.com/?size=100&id=IhWBOFHtv6vx&format=png&color=000000",image2:"https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", title: 'Ethereum', symbol:"ETH" } }, 
        { is: TimeWidget, props: { content: "5h" } },
       
       
      ],
      [
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        { is: TimeWidget, props: { content: "5454h" } },
        { is: SpeedWidget, props: { content: "500000" } },
        { is: FireWidget, props: { content: "# 3" } },
    
      ],
      [
        
      { is: ButtonWidget, props: { title: "Test Button", } },
      { is: ButtonWidget, props: { title: "Another Button", } },
        
      ],
      [
       { is: PercentageWidget, props: { amount: '-2.5', color:"red" } },  
      ],
      [
        { is: PercentageWidget, props: { amount: '+5.1', color:"green" } },
      ],
      [
        { is: PriceWidget, props: { amount: "860B", symbol:"$" } },
      ],
      [
        { is: PriceWidget, props: { amount: "30B", symbol:"$" } },
      ],
      [
        { is: PriceWidget, props: { amount: "30B", symbol:"$" } },
      ],
      [
        { is: PillWidget, props: { title: "Cryptocurrency" } },
      ]
    ],
    [ 
      [
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        { is: AssetWidget, props: { image: "https://img.icons8.com/?size=100&id=63192&format=png&color=000000", image2:"", title: 'Bitcoin', symbol:"BTC" } }, 
        { is: FireWidget, props: { content: "# 55" } },
       
       
      ],
      [
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        
      ],
      [
        { is: FireWidget, props: { content: "# 105" } },

        { is: FireWidget, props: { content: "# 550" } },
        { is: FireWidget, props: { content: "# 250" } },
        { is: FireWidget, props: { content: "# 50050" } },
        { is: FireWidget, props: { content: "# 55000" } },
        { is: FireWidget, props: { content: "# 550000" } },
        { is: FireWidget, props: { content: "# 55000" } },
       
        
      ],
      [
       { is: PercentageWidget, props: { amount: '-2.5', color:"red" } },  
      ],
      [
        { is: PercentageWidget, props: { amount: '+5.1', color:"green" } },
      ],
      [
        { is: PriceWidget, props: { amount: "86000000000000000000", symbol:"$" } },
      ],
      [
        { is: PriceWidget, props: { amount: "3000000000000000000000B", symbol:"$" } },
      ],
      [
        { is: PriceWidget, props: { amount: "300000000000000000B", symbol:"$" } },
      ],
      [
        { is: PillWidget, props: { title: "Crypto" } },
      ]
    ],
    [ 
      [
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        { is: AssetWidget, props: { image: "https://img.icons8.com/?size=100&id=63192&format=png&color=000000", image2:"", title: 'Bitcoin', symbol:"BTC" } }, 
        { is: TimeWidget, props: { content: "5h" } },
       
       
      ],
      [
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        { is: TimeWidget, props: { content: "5h" } },
        { is: SpeedWidget, props: { content: "500" } },
        { is: FireWidget, props: { content: "# 3" } },
        { is: TimeWidget, props: { content: "5454h", color:"gold" } },
        
      ],
      [
        { is: LinkWidget, props: { link:"google.com", title:" test link 1" }},
        { is: SpeedWidget, props: { content: "500000000" } },
        
      ],
      [
       { is: PercentageWidget, props: { amount: '-2.5', color:"red" } },  
      ],
      [
        { is: PercentageWidget, props: { amount: '+5.1', color:"green" } },
      ],
      [
        { is: PriceWidget, props: { amount: "860B", symbol:"$" } },
      ],
      [
        { is: PriceWidget, props: { amount: "30B", symbol:"$" } },
      ],
      [
        { is: PriceWidget, props: { amount: "30B", symbol:"$" } },
      ],
      [
        { is: PillWidget, props: { title: "Cryptocurrency" } },
      ]
    ],
    [
      [
        { is: SpeedWidget, props: { content: "500" } },
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        { is: AssetWidget, props: { image: "https://img.icons8.com/?size=100&id=63192&format=png&color=000000", image2:"", title: 'Bitcoin', symbol:"BTC" } }, 
        { is: TimeWidget, props: { content: "5h" } },
       
       
      ],
      [
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        { is: TimeWidget, props: { content: "500000h" } },
        { is: SpeedWidget, props: { content: "5000000000000" } },
        
      ],
      [
       { is: TextWidget, props: { variation: "h4", title:"Show Test Now Now Now Length", margin:"4px" } },
        
      ],
      [
       { is: PercentageWidget, props: { amount: '-2.5', color:"red" } },  
      ],
      [
        { is: PercentageWidget, props: { amount: '+5.1', color:"green" } },
      ],
      [
        { is: PriceWidget, props: { amount: "860B", symbol:"$" } },
      ],
      [
        { is: TextWidget, props: { title: "Show Text", symbol:"$" } },
      ],
      [
        { is: PriceWidget, props: { amount: "30B", symbol:"$" } },
      ],
      [
        { is: PillWidget, props: { title: "Cryptocurrency" } },
      ]
    ],
    [ 
      [
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        { is: AssetWidget, props: { image: "https://img.icons8.com/?size=100&id=63192&format=png&color=000000", image2:"", title: 'Bitcoin', symbol:"BTC" } }, 
        { is: TimeWidget, props: { content: "5h" } },
       
       
      ],
      [
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        { is: TimeWidget, props: { content: "5h" } },
        { is: SpeedWidget, props: { content: "500" } },
        { is: FireWidget, props: { content: "# 3" } },
        { is: VerticalLineWidget },
        { is: TextWidget, props: { title: "Central Africa Republic", variation:"p" } },
        
      ],
      [
      { is: LineChartWidget, props: { data, labels, options: "{ lineColor: 'rgba(255, 165, 0, 1)', pointColor: 'rgba(255, 165, 0, 1)'}" } },
        
      ],
      [
       { is: PercentageWidget, props: { amount: '-2.5', color:"red" } },  
      ],
      [
        { is: PercentageWidget, props: { amount: '+5.1', color:"green" } },
      ],
      [
        { is: PriceWidget, props: { amount: "860B", symbol:"$" } },
      ],
      [
        { is: PriceWidget, props: { amount: "30B", symbol:"$" } },
      ],
      [
        { is: PriceWidget, props: { amount: "30B", symbol:"$" } },
      ],
      [
        { is: PillWidget, props: { title: "Cryptocurrency" } },
      ]
    ],
    [ 
      [
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        { is: AssetWidget, props: { image: "https://img.icons8.com/?size=100&id=IhWBOFHtv6vx&format=png&color=000000",image2:"https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", title: 'Ethereum', symbol:"ETH" } }, 
        { is: TimeWidget, props: { content: "5h" } },
       
       
      ],
      [
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        { is: TimeWidget, props: { content: "5454h" } },
        { is: SpeedWidget, props: { content: "500000" } },
        { is: FireWidget, props: { content: "# 3" } },
    
      ],
      [
        
      { is: ButtonWidget, props: { title: "Test Button", } },
      { is: ButtonWidget, props: { title: "Another Button", } },
        
      ],
      [
       { is: PercentageWidget, props: { amount: '-2.5', color:"red" } },  
      ],
      [
        { is: PercentageWidget, props: { amount: '+5.1', color:"green" } },
      ],
      [
        { is: PriceWidget, props: { amount: "860B", symbol:"$" } },
      ],
      [
        { is: PriceWidget, props: { amount: "30B", symbol:"$" } },
      ],
      [
        { is: PriceWidget, props: { amount: "30B", symbol:"$" } },
      ],
      [
        { is: PillWidget, props: { title: "Cryptocurrency" } },
      ]
    ],
    [ 
      [
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        { is: AssetWidget, props: { image: "https://img.icons8.com/?size=100&id=63192&format=png&color=000000", image2:"", title: 'Bitcoin', symbol:"BTC" } }, 
        { is: FireWidget, props: { content: "# 55" } },
       
       
      ],
      [
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        
      ],
      [
        { is: FireWidget, props: { content: "# 105" } },

        { is: FireWidget, props: { content: "# 550" } },
        { is: FireWidget, props: { content: "# 250" } },
        { is: FireWidget, props: { content: "# 50050" } },
        { is: FireWidget, props: { content: "# 55000" } },
        { is: FireWidget, props: { content: "# 550000" } },
        { is: FireWidget, props: { content: "# 55000" } },
       
        
      ],
      [
       { is: PercentageWidget, props: { amount: '-2.5', color:"red" } },  
      ],
      [
        { is: PercentageWidget, props: { amount: '+5.1', color:"green" } },
      ],
      [
        { is: PriceWidget, props: { amount: "86000000000000000000", symbol:"$" } },
      ],
      [
        { is: PriceWidget, props: { amount: "3000000000000000000000B", symbol:"$" } },
      ],
      [
        { is: PriceWidget, props: { amount: "300000000000000000B", symbol:"$" } },
      ],
      [
        { is: PillWidget, props: { title: "Crypto" } },
      ]
    ],
    [ 
      [
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        { is: AssetWidget, props: { image: "https://img.icons8.com/?size=100&id=63192&format=png&color=000000", image2:"", title: 'Bitcoin', symbol:"BTC" } }, 
        { is: TimeWidget, props: { content: "5h" } },
       
       
      ],
      [
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        { is: TimeWidget, props: { content: "5h" } },
        { is: SpeedWidget, props: { content: "500" } },
        { is: FireWidget, props: { content: "# 3" } },
        { is: TimeWidget, props: { content: "5454h", color:"gold" } },
        
      ],
      [
        { is: LinkWidget, props: { link:"google.com", title:" test link 1" }},
        { is: SpeedWidget, props: { content: "500000000" } },
        
      ],
      [
       { is: PercentageWidget, props: { amount: '-2.5', color:"red" } },  
      ],
      [
        { is: PercentageWidget, props: { amount: '+5.1', color:"green" } },
      ],
      [
        { is: PriceWidget, props: { amount: "860B", symbol:"$" } },
      ],
      [
        { is: PriceWidget, props: { amount: "30B", symbol:"$" } },
      ],
      [
        { is: PriceWidget, props: { amount: "30B", symbol:"$" } },
      ],
      [
        { is: PillWidget, props: { title: "Cryptocurrency" } },
      ]
    ],
    [
      [
        { is: SpeedWidget, props: { content: "500" } },
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        { is: AssetWidget, props: { image: "https://img.icons8.com/?size=100&id=63192&format=png&color=000000", image2:"", title: 'Bitcoin', symbol:"BTC" } }, 
        { is: TimeWidget, props: { content: "5h" } },
       
       
      ],
      [
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        { is: TimeWidget, props: { content: "500000h" } },
        { is: SpeedWidget, props: { content: "5000000000000" } },
        
      ],
      [
       { is: TextWidget, props: { variation: "h4", title:"Show Test Now Now Now Length", margin:"4px" } },
        
      ],
      [
       { is: PercentageWidget, props: { amount: '-2.5', color:"red" } },  
      ],
      [
        { is: PercentageWidget, props: { amount: '+5.1', color:"green" } },
      ],
      [
        { is: PriceWidget, props: { amount: "860B", symbol:"$" } },
      ],
      [
        { is: TextWidget, props: { title: "Show Text", symbol:"$" } },
      ],
      [
        { is: PriceWidget, props: { amount: "30B", symbol:"$" } },
      ],
      [
        { is: PillWidget, props: { title: "Cryptocurrency" } },
      ]
    ],
    [ 
      [
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        { is: AssetWidget, props: { image: "https://img.icons8.com/?size=100&id=63192&format=png&color=000000", image2:"", title: 'Bitcoin', symbol:"BTC" } }, 
        { is: TimeWidget, props: { content: "5h" } },
       
       
      ],
      [
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        { is: TimeWidget, props: { content: "5h" } },
        { is: SpeedWidget, props: { content: "500" } },
        { is: FireWidget, props: { content: "# 3" } },
        { is: VerticalLineWidget },
        { is: TextWidget, props: { title: "Central Africa Republic", variation:"p" } },
        
      ],
      [
      { is: LineChartWidget, props: { data, labels, options: "{ lineColor: 'rgba(255, 165, 0, 1)', pointColor: 'rgba(255, 165, 0, 1)'}" } },
        
      ],
      [
       { is: PercentageWidget, props: { amount: '-2.5', color:"red" } },  
      ],
      [
        { is: PercentageWidget, props: { amount: '+5.1', color:"green" } },
      ],
      [
        { is: PriceWidget, props: { amount: "860B", symbol:"$" } },
      ],
      [
        { is: PriceWidget, props: { amount: "30B", symbol:"$" } },
      ],
      [
        { is: PriceWidget, props: { amount: "30B", symbol:"$" } },
      ],
      [
        { is: PillWidget, props: { title: "Cryptocurrency" } },
      ]
    ],
    [ 
      [
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        { is: AssetWidget, props: { image: "https://img.icons8.com/?size=100&id=IhWBOFHtv6vx&format=png&color=000000",image2:"https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", title: 'Ethereum', symbol:"ETH" } }, 
        { is: TimeWidget, props: { content: "5h" } },
       
       
      ],
      [
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        { is: TimeWidget, props: { content: "5454h" } },
        { is: SpeedWidget, props: { content: "500000" } },
        { is: FireWidget, props: { content: "# 3" } },
    
      ],
      [
        
      { is: ButtonWidget, props: { title: "Test Button", } },
      { is: ButtonWidget, props: { title: "Another Button", } },
        
      ],
      [
       { is: PercentageWidget, props: { amount: '-2.5', color:"red" } },  
      ],
      [
        { is: PercentageWidget, props: { amount: '+5.1', color:"green" } },
      ],
      [
        { is: PriceWidget, props: { amount: "860B", symbol:"$" } },
      ],
      [
        { is: PriceWidget, props: { amount: "30B", symbol:"$" } },
      ],
      [
        { is: PriceWidget, props: { amount: "30B", symbol:"$" } },
      ],
      [
        { is: PillWidget, props: { title: "Cryptocurrency" } },
      ]
    ],
    [ 
      [
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        { is: AssetWidget, props: { image: "https://img.icons8.com/?size=100&id=63192&format=png&color=000000", image2:"", title: 'Bitcoin', symbol:"BTC" } }, 
        { is: FireWidget, props: { content: "# 55" } },
       
       
      ],
      [
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        
      ],
      [
        { is: FireWidget, props: { content: "# 105" } },

        { is: FireWidget, props: { content: "# 550" } },
        { is: FireWidget, props: { content: "# 250" } },
        { is: FireWidget, props: { content: "# 50050" } },
        { is: FireWidget, props: { content: "# 55000" } },
        { is: FireWidget, props: { content: "# 550000" } },
        { is: FireWidget, props: { content: "# 55000" } },
       
        
      ],
      [
       { is: PercentageWidget, props: { amount: '-2.5', color:"red" } },  
      ],
      [
        { is: PercentageWidget, props: { amount: '+5.1', color:"green" } },
      ],
      [
        { is: PriceWidget, props: { amount: "86000000000000000000", symbol:"$" } },
      ],
      [
        { is: PriceWidget, props: { amount: "3000000000000000000000B", symbol:"$" } },
      ],
      [
        { is: PriceWidget, props: { amount: "300000000000000000B", symbol:"$" } },
      ],
      [
        { is: PillWidget, props: { title: "Crypto" } },
      ]
    ],
    [ 
      [
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        { is: AssetWidget, props: { image: "https://img.icons8.com/?size=100&id=63192&format=png&color=000000", image2:"", title: 'Bitcoin', symbol:"BTC" } }, 
        { is: TimeWidget, props: { content: "5h" } },
       
       
      ],
      [
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        { is: TimeWidget, props: { content: "5h" } },
        { is: SpeedWidget, props: { content: "500" } },
        { is: FireWidget, props: { content: "# 3" } },
        { is: TimeWidget, props: { content: "5454h", color:"gold" } },
        
      ],
      [
        { is: LinkWidget, props: { link:"google.com", title:" test link 1" }},
        { is: SpeedWidget, props: { content: "500000000" } },
        
      ],
      [
       { is: PercentageWidget, props: { amount: '-2.5', color:"red" } },  
      ],
      [
        { is: PercentageWidget, props: { amount: '+5.1', color:"green" } },
      ],
      [
        { is: PriceWidget, props: { amount: "860B", symbol:"$" } },
      ],
      [
        { is: PriceWidget, props: { amount: "30B", symbol:"$" } },
      ],
      [
        { is: PriceWidget, props: { amount: "30B", symbol:"$" } },
      ],
      [
        { is: PillWidget, props: { title: "Cryptocurrency" } },
      ]
    ],
    [
      [
        { is: SpeedWidget, props: { content: "500" } },
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        { is: AssetWidget, props: { image: "https://img.icons8.com/?size=100&id=63192&format=png&color=000000", image2:"", title: 'Bitcoin', symbol:"BTC" } }, 
        { is: TimeWidget, props: { content: "5h" } },
       
       
      ],
      [
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        { is: TimeWidget, props: { content: "500000h" } },
        { is: SpeedWidget, props: { content: "5000000000000" } },
        
      ],
      [
       { is: TextWidget, props: { variation: "h4", title:"Show Test Now Now Now Length", margin:"4px" } },
        
      ],
      [
       { is: PercentageWidget, props: { amount: '-2.5', color:"red" } },  
      ],
      [
        { is: PercentageWidget, props: { amount: '+5.1', color:"green" } },
      ],
      [
        { is: PriceWidget, props: { amount: "860B", symbol:"$" } },
      ],
      [
        { is: TextWidget, props: { title: "Show Text", symbol:"$" } },
      ],
      [
        { is: PriceWidget, props: { amount: "30B", symbol:"$" } },
      ],
      [
        { is: PillWidget, props: { title: "Cryptocurrency" } },
      ]
    ],
    [ 
      [
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        { is: AssetWidget, props: { image: "https://img.icons8.com/?size=100&id=63192&format=png&color=000000", image2:"", title: 'Bitcoin', symbol:"BTC" } }, 
        { is: TimeWidget, props: { content: "5h" } },
       
       
      ],
      [
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        { is: TimeWidget, props: { content: "5h" } },
        { is: SpeedWidget, props: { content: "500" } },
        { is: FireWidget, props: { content: "# 3" } },
        { is: VerticalLineWidget },
        { is: TextWidget, props: { title: "Central Africa Republic", variation:"p" } },
        
      ],
      [
      { is: LineChartWidget, props: { data, labels, options: "{ lineColor: 'rgba(255, 165, 0, 1)', pointColor: 'rgba(255, 165, 0, 1)'}" } },
        
      ],
      [
       { is: PercentageWidget, props: { amount: '-2.5', color:"red" } },  
      ],
      [
        { is: PercentageWidget, props: { amount: '+5.1', color:"green" } },
      ],
      [
        { is: PriceWidget, props: { amount: "860B", symbol:"$" } },
      ],
      [
        { is: PriceWidget, props: { amount: "30B", symbol:"$" } },
      ],
      [
        { is: PriceWidget, props: { amount: "30B", symbol:"$" } },
      ],
      [
        { is: PillWidget, props: { title: "Cryptocurrency" } },
      ]
    ],
    [ 
      [
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        { is: AssetWidget, props: { image: "https://img.icons8.com/?size=100&id=IhWBOFHtv6vx&format=png&color=000000",image2:"https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", title: 'Ethereum', symbol:"ETH" } }, 
        { is: TimeWidget, props: { content: "5h" } },
       
       
      ],
      [
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        { is: TimeWidget, props: { content: "5454h" } },
        { is: SpeedWidget, props: { content: "500000" } },
        { is: FireWidget, props: { content: "# 3" } },
    
      ],
      [
        
      { is: ButtonWidget, props: { title: "Test Button", } },
      { is: ButtonWidget, props: { title: "Another Button", } },
        
      ],
      [
       { is: PercentageWidget, props: { amount: '-2.5', color:"red" } },  
      ],
      [
        { is: PercentageWidget, props: { amount: '+5.1', color:"green" } },
      ],
      [
        { is: PriceWidget, props: { amount: "860B", symbol:"$" } },
      ],
      [
        { is: PriceWidget, props: { amount: "30B", symbol:"$" } },
      ],
      [
        { is: PriceWidget, props: { amount: "30B", symbol:"$" } },
      ],
      [
        { is: PillWidget, props: { title: "Cryptocurrency" } },
      ]
    ],
    [ 
      [
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        { is: AssetWidget, props: { image: "https://img.icons8.com/?size=100&id=63192&format=png&color=000000", image2:"", title: 'Bitcoin', symbol:"BTC" } }, 
        { is: FireWidget, props: { content: "# 55" } },
       
       
      ],
      [
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        
      ],
      [
        { is: FireWidget, props: { content: "# 105" } },

        { is: FireWidget, props: { content: "# 550" } },
        { is: FireWidget, props: { content: "# 250" } },
        { is: FireWidget, props: { content: "# 50050" } },
        { is: FireWidget, props: { content: "# 55000" } },
        { is: FireWidget, props: { content: "# 550000" } },
        { is: FireWidget, props: { content: "# 55000" } },
       
        
      ],
      [
       { is: PercentageWidget, props: { amount: '-2.5', color:"red" } },  
      ],
      [
        { is: PercentageWidget, props: { amount: '+5.1', color:"green" } },
      ],
      [
        { is: PriceWidget, props: { amount: "86000000000000000000", symbol:"$" } },
      ],
      [
        { is: PriceWidget, props: { amount: "3000000000000000000000B", symbol:"$" } },
      ],
      [
        { is: PriceWidget, props: { amount: "300000000000000000B", symbol:"$" } },
      ],
      [
        { is: PillWidget, props: { title: "Crypto" } },
      ]
    ],
    [ 
      [
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        { is: AssetWidget, props: { image: "https://img.icons8.com/?size=100&id=63192&format=png&color=000000", image2:"", title: 'Bitcoin', symbol:"BTC" } }, 
        { is: TimeWidget, props: { content: "5h" } },
       
       
      ],
      [
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        { is: TimeWidget, props: { content: "5h" } },
        { is: SpeedWidget, props: { content: "500" } },
        { is: FireWidget, props: { content: "# 3" } },
        { is: TimeWidget, props: { content: "5454h", color:"gold" } },
        
      ],
      [
        { is: LinkWidget, props: { link:"google.com", title:" test link 1" }},
        { is: SpeedWidget, props: { content: "500000000" } },
        
      ],
      [
       { is: PercentageWidget, props: { amount: '-2.5', color:"red" } },  
      ],
      [
        { is: PercentageWidget, props: { amount: '+5.1', color:"green" } },
      ],
      [
        { is: PriceWidget, props: { amount: "860B", symbol:"$" } },
      ],
      [
        { is: PriceWidget, props: { amount: "30B", symbol:"$" } },
      ],
      [
        { is: PriceWidget, props: { amount: "30B", symbol:"$" } },
      ],
      [
        { is: PillWidget, props: { title: "Cryptocurrency" } },
      ]
    ],
    [
      [
        { is: SpeedWidget, props: { content: "500" } },
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        { is: AssetWidget, props: { image: "https://img.icons8.com/?size=100&id=63192&format=png&color=000000", image2:"", title: 'Bitcoin', symbol:"BTC" } }, 
        { is: TimeWidget, props: { content: "5h" } },
       
       
      ],
      [
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        { is: TimeWidget, props: { content: "500000h" } },
        { is: SpeedWidget, props: { content: "5000000000000" } },
        
      ],
      [
       { is: TextWidget, props: { variation: "h4", title:"Show Test Now Now Now Length", margin:"4px" } },
        
      ],
      [
       { is: PercentageWidget, props: { amount: '-2.5', color:"red" } },  
      ],
      [
        { is: PercentageWidget, props: { amount: '+5.1', color:"green" } },
      ],
      [
        { is: PriceWidget, props: { amount: "860B", symbol:"$" } },
      ],
      [
        { is: TextWidget, props: { title: "Show Text", symbol:"$" } },
      ],
      [
        { is: PriceWidget, props: { amount: "30B", symbol:"$" } },
      ],
      [
        { is: PillWidget, props: { title: "Cryptocurrency" } },
      ]
    ],
    [ 
      [
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        { is: AssetWidget, props: { image: "https://img.icons8.com/?size=100&id=63192&format=png&color=000000", image2:"", title: 'Bitcoin', symbol:"BTC" } }, 
        { is: TimeWidget, props: { content: "5h" } },
       
       
      ],
      [
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        { is: TimeWidget, props: { content: "5h" } },
        { is: SpeedWidget, props: { content: "500" } },
        { is: FireWidget, props: { content: "# 3" } },
        { is: VerticalLineWidget },
        { is: TextWidget, props: { title: "Central Africa Republic", variation:"p" } },
        
      ],
      [
      { is: LineChartWidget, props: { data, labels, options: "{ lineColor: 'rgba(255, 165, 0, 1)', pointColor: 'rgba(255, 165, 0, 1)'}" } },
        
      ],
      [
       { is: PercentageWidget, props: { amount: '-2.5', color:"red" } },  
      ],
      [
        { is: PercentageWidget, props: { amount: '+5.1', color:"green" } },
      ],
      [
        { is: PriceWidget, props: { amount: "860B", symbol:"$" } },
      ],
      [
        { is: PriceWidget, props: { amount: "30B", symbol:"$" } },
      ],
      [
        { is: PriceWidget, props: { amount: "30B", symbol:"$" } },
      ],
      [
        { is: PillWidget, props: { title: "Cryptocurrency" } },
      ]
    ],
    [ 
      [
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        { is: AssetWidget, props: { image: "https://img.icons8.com/?size=100&id=IhWBOFHtv6vx&format=png&color=000000",image2:"https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", title: 'Ethereum', symbol:"ETH" } }, 
        { is: TimeWidget, props: { content: "5h" } },
       
       
      ],
      [
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        { is: TimeWidget, props: { content: "5454h" } },
        { is: SpeedWidget, props: { content: "500000" } },
        { is: FireWidget, props: { content: "# 3" } },
    
      ],
      [
        
      { is: ButtonWidget, props: { title: "Test Button", } },
      { is: ButtonWidget, props: { title: "Another Button", } },
        
      ],
      [
       { is: PercentageWidget, props: { amount: '-2.5', color:"red" } },  
      ],
      [
        { is: PercentageWidget, props: { amount: '+5.1', color:"green" } },
      ],
      [
        { is: PriceWidget, props: { amount: "860B", symbol:"$" } },
      ],
      [
        { is: PriceWidget, props: { amount: "30B", symbol:"$" } },
      ],
      [
        { is: PriceWidget, props: { amount: "30B", symbol:"$" } },
      ],
      [
        { is: PillWidget, props: { title: "Cryptocurrency" } },
      ]
    ],
    [ 
      [
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        { is: AssetWidget, props: { image: "https://img.icons8.com/?size=100&id=63192&format=png&color=000000", image2:"", title: 'Bitcoin', symbol:"BTC" } }, 
        { is: FireWidget, props: { content: "# 55" } },
       
       
      ],
      [
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        
      ],
      [
        { is: FireWidget, props: { content: "# 105" } },

        { is: FireWidget, props: { content: "# 550" } },
        { is: FireWidget, props: { content: "# 250" } },
        { is: FireWidget, props: { content: "# 50050" } },
        { is: FireWidget, props: { content: "# 55000" } },
        { is: FireWidget, props: { content: "# 550000" } },
        { is: FireWidget, props: { content: "# 55000" } },
       
        
      ],
      [
       { is: PercentageWidget, props: { amount: '-2.5', color:"red" } },  
      ],
      [
        { is: PercentageWidget, props: { amount: '+5.1', color:"green" } },
      ],
      [
        { is: PriceWidget, props: { amount: "86000000000000000000", symbol:"$" } },
      ],
      [
        { is: PriceWidget, props: { amount: "3000000000000000000000B", symbol:"$" } },
      ],
      [
        { is: PriceWidget, props: { amount: "300000000000000000B", symbol:"$" } },
      ],
      [
        { is: PillWidget, props: { title: "Crypto" } },
      ]
    ],
    [ 
      [
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        { is: AssetWidget, props: { image: "https://img.icons8.com/?size=100&id=63192&format=png&color=000000", image2:"", title: 'Bitcoin', symbol:"BTC" } }, 
        { is: TimeWidget, props: { content: "5h" } },
       
       
      ],
      [
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        { is: TimeWidget, props: { content: "5h" } },
        { is: SpeedWidget, props: { content: "500" } },
        { is: FireWidget, props: { content: "# 3" } },
        { is: TimeWidget, props: { content: "5454h", color:"gold" } },
        
      ],
      [
        { is: LinkWidget, props: { link:"google.com", title:" test link 1" }},
        { is: SpeedWidget, props: { content: "500000000" } },
        
      ],
      [
       { is: PercentageWidget, props: { amount: '-2.5', color:"red" } },  
      ],
      [
        { is: PercentageWidget, props: { amount: '+5.1', color:"green" } },
      ],
      [
        { is: PriceWidget, props: { amount: "860B", symbol:"$" } },
      ],
      [
        { is: PriceWidget, props: { amount: "30B", symbol:"$" } },
      ],
      [
        { is: PriceWidget, props: { amount: "30B", symbol:"$" } },
      ],
      [
        { is: PillWidget, props: { title: "Cryptocurrency" } },
      ]
    ],
    [
      [
        { is: SpeedWidget, props: { content: "500" } },
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        { is: AssetWidget, props: { image: "https://img.icons8.com/?size=100&id=63192&format=png&color=000000", image2:"", title: 'Bitcoin', symbol:"BTC" } }, 
        { is: TimeWidget, props: { content: "5h" } },
       
       
      ],
      [
        {is: ImageWidget, props:{ src: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000", width:"30px", height:"30px", margin: "2px" }},
        { is: TimeWidget, props: { content: "500000h" } },
        { is: SpeedWidget, props: { content: "5000000000000" } },
        
      ],
      [
       { is: TextWidget, props: { variation: "h4", title:"Show Test Now Now Now Length", margin:"4px" } },
        
      ],
      [
       { is: PercentageWidget, props: { amount: '-2.5', color:"red" } },  
      ],
      [
        { is: PercentageWidget, props: { amount: '+5.1', color:"green" } },
      ],
      [
        { is: PriceWidget, props: { amount: "860B", symbol:"$" } },
      ],
      [
        { is: TextWidget, props: { title: "Show Text", symbol:"$" } },
      ],
      [
        { is: PriceWidget, props: { amount: "30B", symbol:"$" } },
      ],
      [
        { is: PillWidget, props: { title: "Cryptocurrency" } },
      ]
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
                          { title: 'Time', subTitle: 'Current' },
                          { title: 'Price', subTitle: '24H Change' },
                          { title: 'Price', subTitle: '7D Change' },
                          { title: 'Price', subTitle: '30D Change' },
                          { title: 'Price', subTitle: '30D TL' },
                          { title: 'Marketcap', subTitle: 'Current' },
                          { title: 'Real Volume', subTitle: '24H' },
                          { title: 'Sector', subTitle: '' },
                          { title: 'Asset2', subTitle: '' },
                          { title: 'Time', subTitle: 'Current' },
                          { title: 'Price', subTitle: '24H Change' },
                          { title: 'Price', subTitle: '7D Change' },
                          { title: 'Price', subTitle: '30D Change' },
                          { title: 'Price', subTitle: '30D TL' },
                          { title: 'Marketcap', subTitle: 'Current' },
                          { title: 'Real Volume', subTitle: '24H' },
                          { title: 'Sector', subTitle: '' },
                        ],
                        minColumnWidth: "300px",
                        maxColumnWidth: "400px"
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
                         minColumnWidth: "300px",
                        maxColumnWidth: "400px"

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
                           
                        ],
                        minColumnWidth: "300px",
                        maxColumnWidth: "400px"
                       },
                       content : shared_data
                    },
                    {
                      id: 'header1',
                      label: 'Header 1',
                      header: {
                        subject: 'First',
                        columns: [
                          { title: 'First', subTitle: '' },
                          { title: 'Scond', subTitle: 'Current' },
                          { title: 'Third', subTitle: '' },
                          
                        ],
                        minColumnWidth: "300px",
                        maxColumnWidth: "400px"
                       },
                       content : []
                    },
                    {
                      id: 'header2',
                      label: 'Header2',
                      header: {
                        subject: 'First',
                        columns: [
                          { title: 'First', subTitle: '' },
                          { title: 'Scond', subTitle: 'Current' },
                          { title: 'Third', subTitle: '' },
                          
                        ],
                        minColumnWidth: "300px",
                        maxColumnWidth: "400px"
                       },
                       content : []
                    },
                    {
                      id: 'header3',
                      label: 'Header3',
                      header: {
                        subject: 'First',
                        columns: [
                          { title: 'First', subTitle: '' },
                          { title: 'Scond', subTitle: 'Current' },
                          { title: 'Third', subTitle: '' },
                          
                        ],
                        minColumnWidth: "300px",
                        maxColumnWidth: "400px"
                       },
                       content : []
                    },
                    {
                      id: 'header4',
                      label: 'Header4',
                      header: {
                        subject: 'First',
                        columns: [
                          { title: 'First', subTitle: '' },
                          { title: 'Scond', subTitle: 'Current' },
                          { title: 'Third', subTitle: '' },
                          
                        ],
                        minColumnWidth: "300px",
                        maxColumnWidth: "400px"
                       },
                       content : []
                    },
                    {
                      id: 'header5',
                      label: 'Header5',
                      header: {
                        subject: 'First',
                        columns: [
                          { title: 'First', subTitle: '' },
                          { title: 'Scond', subTitle: 'Current' },
                          { title: 'Third', subTitle: '' },
                          
                        ],
                        minColumnWidth: "300px",
                        maxColumnWidth: "400px"
                       },
                       content : []
                    },
                    {
                      id: 'header6',
                      label: 'Header6',
                      header: {
                        subject: 'First',
                        columns: [
                          { title: 'First', subTitle: '' },
                          { title: 'Scond', subTitle: 'Current' },
                          { title: 'Third', subTitle: '' },
                          
                        ],
                        minColumnWidth: "300px",
                        maxColumnWidth: "400px"
                       },
                       content : []
                    },
                     {
                      id: 'header8',
                      label: 'Header8',
                      header: {
                        subject: 'First',
                        columns: [
                          { title: 'First', subTitle: '' },
                          { title: 'Scond', subTitle: 'Current' },
                          { title: 'Third', subTitle: '' },
                          
                        ],
                        minColumnWidth: "300px",
                        maxColumnWidth: "400px"
                       },
                       content : []
                    },
                    {
                      id: 'header9',
                      label: 'Header9',
                      header: {
                        subject: 'First',
                        columns: [
                          { title: 'First', subTitle: '' },
                          { title: 'Scond', subTitle: 'Current' },
                          { title: 'Third', subTitle: '' },
                          
                        ],
                        minColumnWidth: "300px",
                        maxColumnWidth: "400px"
                       },
                       content : []
                    },
                    {
                      id: 'header10',
                      label: 'Header10',
                      header: {
                        subject: 'First',
                        columns: [
                          { title: 'First', subTitle: '' },
                          { title: 'Scond', subTitle: 'Current' },
                          { title: 'Third', subTitle: '' },
                          
                        ],
                        minColumnWidth: "300px",
                        maxColumnWidth: "400px"
                       },
                       content : []
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

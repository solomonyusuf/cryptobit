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

const data = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100)); // Generate 30 random data points
const labels = [
  "January", "February", "March", "April", "May", "June", "July", "August", "September", "October",
  "November", "December", "January", "February", "March", "April", "May", "June", "July", "August",
  "September", "October", "November", "December", "January", "February", "March", "April", "May", "June"
];
 

    
const crypto = [
  
    [ 
      [
        { is: ClickIconWidget, props: { iconStyle:"height:18px;"  }}, 
        { is: AssetWidget, props: { image: "https://mainnet-metadata-service-logos.s3.ap-northeast-1.amazonaws.com/TAIKO.png", 
         image2:"", 
         title: 'Takio', 
         symbol:"",
         subTitle:"",
         margin:"0 0 0 10px" }
         }, 
        { is: PillWidget, props: { title: "5x", rounded:false } },
       
       
      ],
      [
      { is: LineChartWidget, props: { } },
       
      ],
     
    ],
    [
      [
        { is: ClickIconWidget, props: { iconStyle:"height:18px;"  }}, 
        { is: AssetWidget, props: { image: "https://mainnet-metadata-service-logos.s3.ap-northeast-1.amazonaws.com/ZK.png", 
         image2:"", 
         title: 'ZKsync', 
         symbol:"",
         margin:"0 0 0 10px" }
         }, 
        { is: PillWidget, props: { title: "6x", rounded:false } },
       
       
      ],
      [
      { is: LineChartWidget, props: { data, labels } },
       
      ],
    ],
    [
      [
        { is: ClickIconWidget, props: { iconStyle:"height:18px;"  }}, 
        { is: AssetWidget, props: { image: "https://mainnet-metadata-service-logos.s3.ap-northeast-1.amazonaws.com/STRK.png", 
         image2:"", 
         title: 'Starknet', 
         symbol:"",
         margin:"0 0 0 10px" }
         }, 
        { is: PillWidget, props: { title: "6x", rounded:false } },
       
       
      ],
      [
      { is: LineChartWidget, props: {  } },
       
      ],
    ],
    [
      [
        { is: ClickIconWidget, props: { iconStyle:"height:18px;"  }}, 
        { is: AssetWidget, props: { image: "https://mainnet-metadata-service-logos.s3.ap-northeast-1.amazonaws.com/SKL.png", 
         image2:"", 
         title: 'SKALE', 
         symbol:"",
         margin:"0 0 0 10px" }
         }, 
        { is: SpeedWidget, props: { content: "500"} },
       
       
      ],
      [
      { is: LineChartWidget, props: { data, labels } },
       
      ],
    ],
    [
      [
        { is: ClickIconWidget, props: { iconStyle:"height:18px;"  }}, 
        { is: AssetWidget, props: { image: "https://mainnet-metadata-service-logos.s3.ap-northeast-1.amazonaws.com/SCR.png", 
         image2:"", 
         title: 'Scroll', 
         symbol:"",
         margin:"0 0 0 10px" }
         }, 
        { is: FireWidget, props: { content: "# 20"} },
        { is: PillWidget, props: { title:"launchable" } },
       
       
      ],
      [
       { is: LineChartWidget, props: { data, labels } },
       
      ],
    ],
    [ 
      [
        { is: ClickIconWidget, props: { iconStyle:"height:18px;"  }}, 
        { is: AssetWidget, props: { image: "https://mainnet-metadata-service-logos.s3.ap-northeast-1.amazonaws.com/TAIKO.png", 
         image2:"", 
         title: 'Takio', 
         symbol:"",
         margin:"0 0 0 10px" }
         }, 
        { is: PillWidget, props: { title: "5x", rounded:false } },
       
       
      ],
      [
      { is: LineChartWidget, props: { } },
       
      ],
     
    ],
    [
      [
        { is: ClickIconWidget, props: { iconStyle:"height:18px;"  }}, 
        { is: AssetWidget, props: { image: "https://mainnet-metadata-service-logos.s3.ap-northeast-1.amazonaws.com/ZK.png", 
         image2:"", 
         title: 'ZKsync', 
         symbol:"",
         margin:"0 0 0 10px" }
         }, 
        { is: PillWidget, props: { title: "6x", rounded:false } },
       
       
      ],
      [
      { is: LineChartWidget, props: { data, labels } },
       
      ],
    ],
    [
      [
        { is: ClickIconWidget, props: { iconStyle:"height:18px;"  }}, 
        { is: AssetWidget, props: { image: "https://mainnet-metadata-service-logos.s3.ap-northeast-1.amazonaws.com/STRK.png", 
         image2:"", 
         title: 'Starknet', 
         symbol:"",
         margin:"0 0 0 10px" }
         }, 
        { is: PillWidget, props: { title: "6x", rounded:false } },
       
       
      ],
      [
      { is: LineChartWidget, props: {  } },
       
      ],
    ],
    [
      [
        { is: ClickIconWidget, props: { iconStyle:"height:18px;"  }}, 
        { is: AssetWidget, props: { image: "https://mainnet-metadata-service-logos.s3.ap-northeast-1.amazonaws.com/SKL.png", 
         image2:"", 
         title: 'SKALE', 
         symbol:"",
         margin:"0 0 0 10px" }
         }, 
        { is: SpeedWidget, props: { content: "500"} },
       
       
      ],
      [
      { is: LineChartWidget, props: { data, labels } },
       
      ],
    ],
    [
      [
        { is: ClickIconWidget, props: { iconStyle:"height:18px;"  }}, 
        { is: AssetWidget, props: { image: "https://mainnet-metadata-service-logos.s3.ap-northeast-1.amazonaws.com/SCR.png", 
         image2:"", 
         title: 'Scroll', 
         symbol:"",
         margin:"0 0 0 10px" }
         }, 
        { is: FireWidget, props: { content: "# 20"} },
        { is: PillWidget, props: { title:"launchable" } },
       
       
      ],
      [
       { is: LineChartWidget, props: { data, labels } },
       
      ],
    ],
     [
      [
        { is: ClickIconWidget, props: { iconStyle:"height:18px;"  }}, 
        { is: AssetWidget, props: { image: "https://mainnet-metadata-service-logos.s3.ap-northeast-1.amazonaws.com/ZK.png", 
         image2:"", 
         title: 'ZKsync', 
         symbol:"",
         margin:"0 0 0 10px" }
         }, 
        { is: PillWidget, props: { title: "6x", rounded:false } },
       
       
      ],
      [
      { is: LineChartWidget, props: { data, labels } },
       
      ],
    ],
    [
      [
        { is: ClickIconWidget, props: { iconStyle:"height:18px;"  }}, 
        { is: AssetWidget, props: { image: "https://mainnet-metadata-service-logos.s3.ap-northeast-1.amazonaws.com/STRK.png", 
         image2:"", 
         title: 'Starknet', 
         symbol:"",
         margin:"0 0 0 10px" }
         }, 
        { is: PillWidget, props: { title: "6x", rounded:false } },
       
       
      ],
      [
      { is: LineChartWidget, props: {  } },
       
      ],
    ],
    [
      [
        { is: ClickIconWidget, props: { iconStyle:"height:18px;"  }}, 
        { is: AssetWidget, props: { image: "https://mainnet-metadata-service-logos.s3.ap-northeast-1.amazonaws.com/SKL.png", 
         image2:"", 
         title: 'SKALE', 
         symbol:"",
         margin:"0 0 0 10px" }
         }, 
        { is: SpeedWidget, props: { content: "500"} },
       
       
      ],
      [
      { is: LineChartWidget, props: { data, labels } },
       
      ],
    ],
    [
      [
        { is: ClickIconWidget, props: { iconStyle:"height:18px;"  }}, 
        { is: AssetWidget, props: { image: "https://mainnet-metadata-service-logos.s3.ap-northeast-1.amazonaws.com/SCR.png", 
         image2:"", 
         title: 'Scroll', 
         symbol:"",
         margin:"0 0 0 10px" }
         }, 
        { is: FireWidget, props: { content: "# 20"} },
        { is: PillWidget, props: { title:"launchable" } },
       
       
      ],
      [
       { is: LineChartWidget, props: { data, labels } },
       
      ],
    ],
    
  
    
  ];
const stocks = [
  [ 
    [
      { is: ClickIconWidget, props: { iconStyle:"height:18px;"  }}, 
      { is: AssetWidget, props: { image: "https://img.icons8.com/?size=100&id=8Z6hZva0O5wS&format=png&color=DBC239", 
        image2:"", 
        title: 'Gold', 
        symbol:"",
        margin:"0 0 0 10px" }
        }, 
      { is: FireWidget, props: { content: "24" } },
      
      
    ],
    [
  { is: PriceWidget, props: { amount: "250", symbol: "$" } },   
],
[
  { is: PriceWidget, props: { amount: "670", symbol: "$" } },   
],
[
  { is: PriceWidget, props: { amount: "320", symbol: "$" } },   
],
[
  { is: PriceWidget, props: { amount: "890", symbol: "$" } },   
],
[
  { is: PriceWidget, props: { amount: "145", symbol: "$" } },   
],
[
  { is: PercentageWidget, props: { amount: "+44.2", } },   
],
[
  { is: PercentageWidget, props: { amount: "-4.1", color:"red" } },   
],
[
  { is: TimeWidget, props: { content: "980H" } },   
],

    
  ],
  [
    [
      { is: ClickIconWidget, props: { iconStyle:"height:18px;"  }}, 
      { is: AssetWidget, props: { image: "https://img.icons8.com/?size=100&id=bJmWB87nB4hG&format=png&color=2E3AA4", 
        image2:"", 
        title: 'Meta', 
        symbol:"",
        margin:"0 0 0 10px" }
        }, 
      { is: PillWidget, props: { title: "meme", rounded:false } },
      
      
    ],
    [
      { is: PriceWidget, props: { amount: "30", symbol: "$" } },   
    ],
    [
      { is: PriceWidget, props: { amount: "530", symbol: "$" } },   
    ],
    [
      { is: PriceWidget, props: { amount: "275", symbol: "$" } },   
    ],
    [
      { is: PriceWidget, props: { amount: "640", symbol: "$" } },   
    ],
    [
      { is: PriceWidget, props: { amount: "150", symbol: "$" } },   
    ],
    
    [
      { is: PercentageWidget, props: { amount: "+1.2", } },   
    ],
    [
      { is: PercentageWidget, props: { amount: "-2.1", color:"red" } },   
    ],
    [
      { is: TimeWidget, props: { content: "90H" } },   
    ],

  ],
  [
    [
      { is: ClickIconWidget, props: { iconStyle:"height:18px;"  }}, 
      { is: AssetWidget, props: { image: "https://img.icons8.com/?size=100&id=zGw8EhFNSor9&format=png&color=000000", 
        image2:"", 
        title: 'Google', 
        symbol:"",
        margin:"0 0 0 10px" }
        }, 
      { is: PillWidget, props: { title: "trending", rounded:false } },
      
      
    ],
    [
        { is: PriceWidget, props: { amount: "45", symbol: "$" } },   
      ],
      [
        { is: PriceWidget, props: { amount: "620", symbol: "$" } },   
      ],
      [
        { is: PriceWidget, props: { amount: "310", symbol: "$" } },   
      ],
      [
        { is: PriceWidget, props: { amount: "725", symbol: "$" } },   
      ],
      [
        { is: PriceWidget, props: { amount: "190", symbol: "$" } },   
      ],

      [
        { is: PercentageWidget, props: { amount: "+0.8" } },   
      ],
      [
        { is: PercentageWidget, props: { amount: "-1.7", color: "red" } },   
      ],
      [
        { is: TimeWidget, props: { content: "72H" } },   
      ],

  ],
  [
    [
      { is: ClickIconWidget, props: { iconStyle:"height:18px;"  }}, 
      { is: AssetWidget, props: { image: "https://img.icons8.com/?size=100&id=aTi1yYs3Jt5n&format=png&color=DB3939", 
        image2:"", 
        title: 'Tesla', 
        symbol:"",
        margin:"0 0 0 10px" }
        }, 
      { is: SpeedWidget, props: { content: "500"} },
      
      
    ],
    [
      { is: PriceWidget, props: { amount: "55", symbol: "$" } },   
    ],
    [
      { is: PriceWidget, props: { amount: "480", symbol: "$" } },   
    ],
    [
      { is: PriceWidget, props: { amount: "290", symbol: "$" } },   
    ],
    [
      { is: PriceWidget, props: { amount: "815", symbol: "$" } },   
    ],
    [
      { is: PriceWidget, props: { amount: "135", symbol: "$" } },   
    ],

    [
      { is: PercentageWidget, props: { amount: "+2.4" } },   
    ],
    [
      { is: PercentageWidget, props: { amount: "-3.6", color: "red" } },   
    ],
    [
      { is: TimeWidget, props: { content: "48H" } },   
    ],

  ],
  [
    [
      { is: ClickIconWidget, props: { iconStyle:"height:18px;"  }}, 
      { is: AssetWidget, props: { image: "https://img.icons8.com/?size=100&id=csi4YwizX7If&format=png&color=F10101", 
        image2:"", 
        title: 'Netflix', 
        symbol:"",
        margin:"0 0 0 10px" }
        }, 

      
    ],
    [
      { is: PriceWidget, props: { amount: "75", symbol: "$" } },   
    ],
    [
      { is: PriceWidget, props: { amount: "510", symbol: "$" } },   
    ],
    [
      { is: PriceWidget, props: { amount: "320", symbol: "$" } },   
    ],
    [
      { is: PriceWidget, props: { amount: "720", symbol: "$" } },   
    ],
    [
      { is: PriceWidget, props: { amount: "190", symbol: "$" } },   
    ],

    [
      { is: PercentageWidget, props: { amount: "+3.1" } },   
    ],
    [
      { is: PercentageWidget, props: { amount: "-1.8", color: "red" } },   
    ],
    [
      { is: TimeWidget, props: { content: "72H" } },   
    ],

  ],
  [ 
    [
      { is: ClickIconWidget, props: { iconStyle:"height:18px;"  }}, 
      { is: AssetWidget, props: { image: "https://img.icons8.com/?size=100&id=8Z6hZva0O5wS&format=png&color=DBC239", 
        image2:"", 
        title: 'Gold', 
        symbol:"",
        margin:"0 0 0 10px" }
        }, 
      { is: FireWidget, props: { content: "24" } },
      
      
    ],
    [
  { is: PriceWidget, props: { amount: "250", symbol: "$" } },   
],
[
  { is: PriceWidget, props: { amount: "670", symbol: "$" } },   
],
[
  { is: PriceWidget, props: { amount: "320", symbol: "$" } },   
],
[
  { is: PriceWidget, props: { amount: "890", symbol: "$" } },   
],
[
  { is: PriceWidget, props: { amount: "145", symbol: "$" } },   
],
[
  { is: PercentageWidget, props: { amount: "+44.2", } },   
],
[
  { is: PercentageWidget, props: { amount: "-4.1", color:"red" } },   
],
[
  { is: TimeWidget, props: { content: "980H" } },   
],

    
  ],
  [
    [
      { is: ClickIconWidget, props: { iconStyle:"height:18px;"  }}, 
      { is: AssetWidget, props: { image: "https://img.icons8.com/?size=100&id=bJmWB87nB4hG&format=png&color=2E3AA4", 
        image2:"", 
        title: 'Meta', 
        symbol:"",
        margin:"0 0 0 10px" }
        }, 
      { is: PillWidget, props: { title: "meme", rounded:false } },
      
      
    ],
    [
      { is: PriceWidget, props: { amount: "30", symbol: "$" } },   
    ],
    [
      { is: PriceWidget, props: { amount: "530", symbol: "$" } },   
    ],
    [
      { is: PriceWidget, props: { amount: "275", symbol: "$" } },   
    ],
    [
      { is: PriceWidget, props: { amount: "640", symbol: "$" } },   
    ],
    [
      { is: PriceWidget, props: { amount: "150", symbol: "$" } },   
    ],
    
    [
      { is: PercentageWidget, props: { amount: "+1.2", } },   
    ],
    [
      { is: PercentageWidget, props: { amount: "-2.1", color:"red" } },   
    ],
    [
      { is: TimeWidget, props: { content: "90H" } },   
    ],

  ],
  [
    [
      { is: ClickIconWidget, props: { iconStyle:"height:18px;"  }}, 
      { is: AssetWidget, props: { image: "https://img.icons8.com/?size=100&id=zGw8EhFNSor9&format=png&color=000000", 
        image2:"", 
        title: 'Google', 
        symbol:"",
        margin:"0 0 0 10px" }
        }, 
      { is: PillWidget, props: { title: "trending", rounded:false } },
      
      
    ],
    [
        { is: PriceWidget, props: { amount: "45", symbol: "$" } },   
      ],
      [
        { is: PriceWidget, props: { amount: "620", symbol: "$" } },   
      ],
      [
        { is: PriceWidget, props: { amount: "310", symbol: "$" } },   
      ],
      [
        { is: PriceWidget, props: { amount: "725", symbol: "$" } },   
      ],
      [
        { is: PriceWidget, props: { amount: "190", symbol: "$" } },   
      ],

      [
        { is: PercentageWidget, props: { amount: "+0.8" } },   
      ],
      [
        { is: PercentageWidget, props: { amount: "-1.7", color: "red" } },   
      ],
      [
        { is: TimeWidget, props: { content: "72H" } },   
      ],

  ],
  [
    [
      { is: ClickIconWidget, props: { iconStyle:"height:18px;"  }}, 
      { is: AssetWidget, props: { image: "https://img.icons8.com/?size=100&id=aTi1yYs3Jt5n&format=png&color=DB3939", 
        image2:"", 
        title: 'Tesla', 
        symbol:"",
        margin:"0 0 0 10px" }
        }, 
      { is: SpeedWidget, props: { content: "500"} },
      
      
    ],
    [
      { is: PriceWidget, props: { amount: "55", symbol: "$" } },   
    ],
    [
      { is: PriceWidget, props: { amount: "480", symbol: "$" } },   
    ],
    [
      { is: PriceWidget, props: { amount: "290", symbol: "$" } },   
    ],
    [
      { is: PriceWidget, props: { amount: "815", symbol: "$" } },   
    ],
    [
      { is: PriceWidget, props: { amount: "135", symbol: "$" } },   
    ],

    [
      { is: PercentageWidget, props: { amount: "+2.4" } },   
    ],
    [
      { is: PercentageWidget, props: { amount: "-3.6", color: "red" } },   
    ],
    [
      { is: TimeWidget, props: { content: "48H" } },   
    ],

  ],
  [
    [
      { is: ClickIconWidget, props: { iconStyle:"height:18px;"  }}, 
      { is: AssetWidget, props: { image: "https://img.icons8.com/?size=100&id=csi4YwizX7If&format=png&color=F10101", 
        image2:"", 
        title: 'Netflix', 
        symbol:"",
        margin:"0 0 0 10px" }
        }, 

      
    ],
    [
      { is: PriceWidget, props: { amount: "75", symbol: "$" } },   
    ],
    [
      { is: PriceWidget, props: { amount: "510", symbol: "$" } },   
    ],
    [
      { is: PriceWidget, props: { amount: "320", symbol: "$" } },   
    ],
    [
      { is: PriceWidget, props: { amount: "720", symbol: "$" } },   
    ],
    [
      { is: PriceWidget, props: { amount: "190", symbol: "$" } },   
    ],

    [
      { is: PercentageWidget, props: { amount: "+3.1" } },   
    ],
    [
      { is: PercentageWidget, props: { amount: "-1.8", color: "red" } },   
    ],
    [
      { is: TimeWidget, props: { content: "72H" } },   
    ],

  ],

];
const memecoin = [
  [ 
    [
      { is: ClickIconWidget, props: { iconStyle:"height:18px;"  }}, 
      { is: AssetWidget, props: { image: "https://messari.io/_next/image?url=https%3A%2F%2Fasset-images.messari.io%2Fimages%2F7d793fa7-5fc6-432a-b26b-d1b10769d42e%2F64.png%3Fv%3D2&w=32&q=100&dpl=dpl_BKSbNFT6cAjT1m5YCoMSxx9B1b98", 
        image2:"", 
        title: 'Dogecoin', 
        symbol:"DOGE",
        margin:"0 0 0 10px" }
        }, 
      { is: FireWidget, props: { content: "24" } },
      
      
    ],
    [
       { is: ImageClusterWidget, props: { images:["https://messari.io/_next/image?url=https%3A%2F%2Fasset-images.messari.io%2Fimages%2F99b6a5f4-2200-4098-82fd-53d091bdee70%2F64.png%3Fv%3D2&w=32&q=100&dpl=dpl_3iih4gtnh5BjR2cga2myenZrTNyh",
                                                   "https://messari.io/_next/image?url=https%3A%2F%2Fasset-images.messari.io%2Fimages%2F4b8836f5-95e3-4e55-a1d5-72d65530e26c%2F64.png%3Fv%3D2&w=32&q=100&dpl=dpl_3iih4gtnh5BjR2cga2myenZrTNyh",
                                                   "https://messari.io/_next/image?url=https%3A%2F%2Fasset-images.messari.io%2Fimages%2F1d51479d-68f6-4886-8644-2a55ea9007bf%2F64.png%3Fv%3D2&w=32&q=100&dpl=dpl_3iih4gtnh5BjR2cga2myenZrTNyh",
                                                   "https://messari.io/_next/image?url=https%3A%2F%2Fasset-images.messari.io%2Fimages%2Fa2c56dda-f408-4905-b8c0-0acc1ea29616%2F64.png%3Fv%3D2&w=32&q=100&dpl=dpl_3iih4gtnh5BjR2cga2myenZrTNyh",
                                                   "https://messari.io/_next/image?url=https%3A%2F%2Fasset-images.messari.io%2Fimages%2F9adede5a-bb01-4c87-b44b-a15b92528d0b%2F64.png%3Fv%3D2&w=32&q=100&dpl=dpl_3iih4gtnh5BjR2cga2myenZrTNyh",
                                                   "https://messari.io/_next/image?url=https%3A%2F%2Fasset-images.messari.io%2Fimages%2Ffd41189f-48ce-417b-97a4-3da221dfa5d8%2F64.png%3Fv%3D2&w=32&q=100&dpl=dpl_3iih4gtnh5BjR2cga2myenZrTNyh",
                                                    "https://messari.io/_next/image?url=https%3A%2F%2Fasset-images.messari.io%2Fimages%2F147192a4-adcc-4211-be3a-f346241e83b4%2F64.png%3Fv%3D2&w=32&q=100&dpl=dpl_3iih4gtnh5BjR2cga2myenZrTNyh"
                                                  ]} },   
    ],
    [
      { is: PriceWidget, props: { amount: "670", symbol: "$" } },   
    ],
    [
      { is: FireWidget, props: { content: "# 33" } },   
    ],
    [
      { is: SpeedWidget, props: { content: "400" } },   
    ],
    [
      { is: PriceWidget, props: { amount: "145", symbol: "$" } },   
    ], 
  ],
  [ 
    [
      { is: ClickIconWidget, props: { iconStyle:"height:18px;"  }}, 
      { is: AssetWidget, props: { image: "https://messari.io/_next/image?url=https%3A%2F%2Fasset-images.messari.io%2Fimages%2F8c4f84a7-6484-4074-8c17-fe363a243e7f%2F64.png%3Fv%3D2&w=32&q=100&dpl=dpl_BKSbNFT6cAjT1m5YCoMSxx9B1b98", 
        image2:"", 
        title: 'Shiba inu', 
        symbol:"SHIB",
        margin:"0 0 0 10px" }
        }, 
      { is: FireWidget, props: { content: "114" } },
      
      
    ],
    [
       { is: ImageClusterWidget, props: { images:["https://messari.io/_next/image?url=https%3A%2F%2Fasset-images.messari.io%2Fimages%2F99b6a5f4-2200-4098-82fd-53d091bdee70%2F64.png%3Fv%3D2&w=32&q=100&dpl=dpl_3iih4gtnh5BjR2cga2myenZrTNyh",
                                                   "https://messari.io/_next/image?url=https%3A%2F%2Fasset-images.messari.io%2Fimages%2F4b8836f5-95e3-4e55-a1d5-72d65530e26c%2F64.png%3Fv%3D2&w=32&q=100&dpl=dpl_3iih4gtnh5BjR2cga2myenZrTNyh",
                                                   "https://messari.io/_next/image?url=https%3A%2F%2Fasset-images.messari.io%2Fimages%2F1d51479d-68f6-4886-8644-2a55ea9007bf%2F64.png%3Fv%3D2&w=32&q=100&dpl=dpl_3iih4gtnh5BjR2cga2myenZrTNyh",
                                                   "https://messari.io/_next/image?url=https%3A%2F%2Fasset-images.messari.io%2Fimages%2Fa2c56dda-f408-4905-b8c0-0acc1ea29616%2F64.png%3Fv%3D2&w=32&q=100&dpl=dpl_3iih4gtnh5BjR2cga2myenZrTNyh",
                                                   "https://messari.io/_next/image?url=https%3A%2F%2Fasset-images.messari.io%2Fimages%2F9adede5a-bb01-4c87-b44b-a15b92528d0b%2F64.png%3Fv%3D2&w=32&q=100&dpl=dpl_3iih4gtnh5BjR2cga2myenZrTNyh",
                                                   "https://messari.io/_next/image?url=https%3A%2F%2Fasset-images.messari.io%2Fimages%2Ffd41189f-48ce-417b-97a4-3da221dfa5d8%2F64.png%3Fv%3D2&w=32&q=100&dpl=dpl_3iih4gtnh5BjR2cga2myenZrTNyh",
                                                    "https://messari.io/_next/image?url=https%3A%2F%2Fasset-images.messari.io%2Fimages%2F147192a4-adcc-4211-be3a-f346241e83b4%2F64.png%3Fv%3D2&w=32&q=100&dpl=dpl_3iih4gtnh5BjR2cga2myenZrTNyh"
                                                  ]} },   
    ],
    [
      { is: PriceWidget, props: { amount: "670", symbol: "$" } },   
    ],
    [
      { is: FireWidget, props: { content: "# 31" } },   
    ],
    [
      { is: SpeedWidget, props: { content: "120" } },   
    ],
    [
      { is: PriceWidget, props: { amount: "155", symbol: "$" } },   
    ], 
  ],
  [ 
    [
      { is: ClickIconWidget, props: { iconStyle:"height:18px;"  }}, 
      { is: AssetWidget, props: { image: "https://messari.io/_next/image?url=https%3A%2F%2Fasset-images.messari.io%2Fimages%2F02e9c2cc-2e3b-45fe-b7bb-508cb23a3a39%2F64.png%3Fv%3D2&w=32&q=100&dpl=dpl_BKSbNFT6cAjT1m5YCoMSxx9B1b98", 
        image2:"", 
        title: 'Pepe', 
        symbol:"PEPE",
        margin:"0 0 0 10px" }
        }, 
      { is: FireWidget, props: { content: "22" } },
      
      
    ],
    [
       { is: ImageClusterWidget, props: { images:["https://messari.io/_next/image?url=https%3A%2F%2Fasset-images.messari.io%2Fimages%2F99b6a5f4-2200-4098-82fd-53d091bdee70%2F64.png%3Fv%3D2&w=32&q=100&dpl=dpl_3iih4gtnh5BjR2cga2myenZrTNyh",
                                                   "https://messari.io/_next/image?url=https%3A%2F%2Fasset-images.messari.io%2Fimages%2F4b8836f5-95e3-4e55-a1d5-72d65530e26c%2F64.png%3Fv%3D2&w=32&q=100&dpl=dpl_3iih4gtnh5BjR2cga2myenZrTNyh",
                                                   "https://messari.io/_next/image?url=https%3A%2F%2Fasset-images.messari.io%2Fimages%2F1d51479d-68f6-4886-8644-2a55ea9007bf%2F64.png%3Fv%3D2&w=32&q=100&dpl=dpl_3iih4gtnh5BjR2cga2myenZrTNyh",
                                                   "https://messari.io/_next/image?url=https%3A%2F%2Fasset-images.messari.io%2Fimages%2Fa2c56dda-f408-4905-b8c0-0acc1ea29616%2F64.png%3Fv%3D2&w=32&q=100&dpl=dpl_3iih4gtnh5BjR2cga2myenZrTNyh",
                                                   "https://messari.io/_next/image?url=https%3A%2F%2Fasset-images.messari.io%2Fimages%2F9adede5a-bb01-4c87-b44b-a15b92528d0b%2F64.png%3Fv%3D2&w=32&q=100&dpl=dpl_3iih4gtnh5BjR2cga2myenZrTNyh",
                                                   "https://messari.io/_next/image?url=https%3A%2F%2Fasset-images.messari.io%2Fimages%2Ffd41189f-48ce-417b-97a4-3da221dfa5d8%2F64.png%3Fv%3D2&w=32&q=100&dpl=dpl_3iih4gtnh5BjR2cga2myenZrTNyh",
                                                    "https://messari.io/_next/image?url=https%3A%2F%2Fasset-images.messari.io%2Fimages%2F147192a4-adcc-4211-be3a-f346241e83b4%2F64.png%3Fv%3D2&w=32&q=100&dpl=dpl_3iih4gtnh5BjR2cga2myenZrTNyh"
                                                  ]} },   
    ],
    [
      { is: PriceWidget, props: { amount: "270", symbol: "$" } },   
    ],
    [
      { is: FireWidget, props: { content: "# 133" } },   
    ],
    [
      { is: SpeedWidget, props: { content: "140" } },   
    ],
    [
      { is: PriceWidget, props: { amount: "145", symbol: "$" } },   
    ], 
  ],
  [ 
    [
      { is: ClickIconWidget, props: { iconStyle:"height:18px;"  }}, 
      { is: AssetWidget, props: { image: "https://messari.io/_next/image?url=https%3A%2F%2Fasset-images.messari.io%2Fimages%2Fe7f6fb5c-b7e6-45b4-b9ed-3f3c761f280e%2F64.png%3Fv%3D2&w=32&q=100&dpl=dpl_BKSbNFT6cAjT1m5YCoMSxx9B1b98", 
        image2:"", 
        title: 'Bonk', 
        symbol:"BONK",
        margin:"0 0 0 10px" }
        }, 
      { is: FireWidget, props: { content: "12" } },
      
      
    ],
    [
       { is: ImageClusterWidget, props: { images:["https://messari.io/_next/image?url=https%3A%2F%2Fasset-images.messari.io%2Fimages%2F99b6a5f4-2200-4098-82fd-53d091bdee70%2F64.png%3Fv%3D2&w=32&q=100&dpl=dpl_3iih4gtnh5BjR2cga2myenZrTNyh",
                                                   "https://messari.io/_next/image?url=https%3A%2F%2Fasset-images.messari.io%2Fimages%2F4b8836f5-95e3-4e55-a1d5-72d65530e26c%2F64.png%3Fv%3D2&w=32&q=100&dpl=dpl_3iih4gtnh5BjR2cga2myenZrTNyh",
                                                   "https://messari.io/_next/image?url=https%3A%2F%2Fasset-images.messari.io%2Fimages%2F1d51479d-68f6-4886-8644-2a55ea9007bf%2F64.png%3Fv%3D2&w=32&q=100&dpl=dpl_3iih4gtnh5BjR2cga2myenZrTNyh",
                                                   "https://messari.io/_next/image?url=https%3A%2F%2Fasset-images.messari.io%2Fimages%2Fa2c56dda-f408-4905-b8c0-0acc1ea29616%2F64.png%3Fv%3D2&w=32&q=100&dpl=dpl_3iih4gtnh5BjR2cga2myenZrTNyh",
                                                   "https://messari.io/_next/image?url=https%3A%2F%2Fasset-images.messari.io%2Fimages%2F9adede5a-bb01-4c87-b44b-a15b92528d0b%2F64.png%3Fv%3D2&w=32&q=100&dpl=dpl_3iih4gtnh5BjR2cga2myenZrTNyh",
                                                   "https://messari.io/_next/image?url=https%3A%2F%2Fasset-images.messari.io%2Fimages%2Ffd41189f-48ce-417b-97a4-3da221dfa5d8%2F64.png%3Fv%3D2&w=32&q=100&dpl=dpl_3iih4gtnh5BjR2cga2myenZrTNyh",
                                                    "https://messari.io/_next/image?url=https%3A%2F%2Fasset-images.messari.io%2Fimages%2F147192a4-adcc-4211-be3a-f346241e83b4%2F64.png%3Fv%3D2&w=32&q=100&dpl=dpl_3iih4gtnh5BjR2cga2myenZrTNyh"
                                                  ]} },   
    ],
    [
      { is: PriceWidget, props: { amount: "70", symbol: "$" } },   
    ],
    [
      { is: FireWidget, props: { content: "# 313" } },   
    ],
    [
      { is: SpeedWidget, props: { content: "600" } },   
    ],
    [
      { is: PriceWidget, props: { amount: "145", symbol: "$" } },   
    ], 
  ],
  [ 
    [
      { is: ClickIconWidget, props: { iconStyle:"height:18px;"  }}, 
      { is: AssetWidget, props: { image: "https://messari.io/_next/image?url=https%3A%2F%2Fasset-images.messari.io%2Fimages%2F50424862-8a20-443d-bd79-7a05cdeea6ec%2F64.png%3Fv%3D2&w=32&q=100&dpl=dpl_BKSbNFT6cAjT1m5YCoMSxx9B1b98", 
        image2:"", 
        title: 'Brett', 
        symbol:"BRETT",
        margin:"0 0 0 10px" }
        }, 
      { is: FireWidget, props: { content: "14" } },
      
      
    ],
    [
       { is: ImageClusterWidget, props: { images:["https://messari.io/_next/image?url=https%3A%2F%2Fasset-images.messari.io%2Fimages%2F99b6a5f4-2200-4098-82fd-53d091bdee70%2F64.png%3Fv%3D2&w=32&q=100&dpl=dpl_3iih4gtnh5BjR2cga2myenZrTNyh",
                                                   "https://messari.io/_next/image?url=https%3A%2F%2Fasset-images.messari.io%2Fimages%2F4b8836f5-95e3-4e55-a1d5-72d65530e26c%2F64.png%3Fv%3D2&w=32&q=100&dpl=dpl_3iih4gtnh5BjR2cga2myenZrTNyh",
                                                   "https://messari.io/_next/image?url=https%3A%2F%2Fasset-images.messari.io%2Fimages%2F1d51479d-68f6-4886-8644-2a55ea9007bf%2F64.png%3Fv%3D2&w=32&q=100&dpl=dpl_3iih4gtnh5BjR2cga2myenZrTNyh",
                                                   "https://messari.io/_next/image?url=https%3A%2F%2Fasset-images.messari.io%2Fimages%2Fa2c56dda-f408-4905-b8c0-0acc1ea29616%2F64.png%3Fv%3D2&w=32&q=100&dpl=dpl_3iih4gtnh5BjR2cga2myenZrTNyh",
                                                   "https://messari.io/_next/image?url=https%3A%2F%2Fasset-images.messari.io%2Fimages%2F9adede5a-bb01-4c87-b44b-a15b92528d0b%2F64.png%3Fv%3D2&w=32&q=100&dpl=dpl_3iih4gtnh5BjR2cga2myenZrTNyh",
                                                   "https://messari.io/_next/image?url=https%3A%2F%2Fasset-images.messari.io%2Fimages%2Ffd41189f-48ce-417b-97a4-3da221dfa5d8%2F64.png%3Fv%3D2&w=32&q=100&dpl=dpl_3iih4gtnh5BjR2cga2myenZrTNyh",
                                                    "https://messari.io/_next/image?url=https%3A%2F%2Fasset-images.messari.io%2Fimages%2F147192a4-adcc-4211-be3a-f346241e83b4%2F64.png%3Fv%3D2&w=32&q=100&dpl=dpl_3iih4gtnh5BjR2cga2myenZrTNyh"
                                                  ]} },   
    ],
    [
      { is: PriceWidget, props: { amount: "670", symbol: "$" } },   
    ],
    [
      { is: FireWidget, props: { content: "# 13" } },   
    ],
    [
      { is: SpeedWidget, props: { content: "100" } },   
    ],
    [
      { is: PriceWidget, props: { amount: "125", symbol: "$" } },   
    ], 
  ],
  

];

const header = [
                    {
                      id: 'crypto',
                      label: 'Crypto',
                      header: {
                        subject: '',
                        columns: [
                          { title: { is: TableHeaderWidget, 
                            props: { image: "https://img.icons8.com/?size=100&id=XrEFnp33pJYw&format=png&color=000000", 
                            image2:"", 
                            title: 'Market', 
                            symbol:"",
                            margin:"0 0 0 10px" }
                            }, subTitle: '',  },
                          { title: { is: TableHeaderWidget, props: { image: "https://img.icons8.com/?size=100&id=D0A1Afld5jac&format=png&color=000000", 
                            image2:"", 
                            title: 'Price Chart', 
                            symbol:"",
                            margin:"0 0 0 10px" }
                            }, subTitle: '' },
                          
                        ],
                        minColumnWidth: "100px",
                        maxColumnWidth: "150px"
                       },
                       content : crypto
                    },
                    {
                      id: 'stocks',
                      label: 'Stocks',
                      header: {
                        subject: 'Capital',
                        columns: [
                          { title: { is: TableHeaderWidget, props: { image: "https://img.icons8.com/?size=100&id=DAoPjn2XoTUN&format=png&color=000000", 
                            image2:"", 
                            title: 'Capital', 
                            symbol:"",
                            subTitle:"",
                            margin:"0 0 0 10px" }
                            }},

                          { title: { is: TableHeaderWidget, 
                            props: { image: "", 
                            image2:"", 
                            title: 'Price', 
                            symbol:"",
                            subTitle:"current",
                            margin:"0 0 0 10px" }
                            } },
                            
                          { title: { is: TableHeaderWidget, props: { image: "", 
                            image2:"", 
                            title: 'Market Cap', 
                            symbol:"",
                            subTitle: 'profit',
                            margin:"0 0 0 10px" }
                            }},
                            
                          { title: { is: TableHeaderWidget, props: { image: "", 
                            image2:"", 
                            title: 'Spot Volume', 
                            subTitle:'Cap',
                            symbol:"",
                            margin:"0 0 0 10px" }
                            }},
                          
                          { title: { is: TableHeaderWidget, props: { image: "", 
                            image2:"", 
                            title: 'Open Intrest', 
                            symbol:"",
                            subTitle:"",
                            margin:"0 0 0 10px" }
                            }},
                          
                          { title: { is: TableHeaderWidget, props: { image: "", 
                            image2:"", 
                            title: '1h Funding', 
                            symbol:"",
                            subTitle:"",
                            margin:"0 0 0 10px" }
                            }},
                          
                          { title: { is: TableHeaderWidget, props: { image: "", 
                            image2:"", 
                            title: 'Trades', 
                            symbol:"",
                            subTitle:"",
                            margin:"0 0 0 10px" }
                            }},
                        
                            { title: { is: TableHeaderWidget, props: { image: "", 
                            image2:"", 
                            title: '24H Change', 
                            symbol:"",
                            subTitle:"",
                            margin:"0 0 0 10px" }
                            }},
                            
                          { title: { is: TableHeaderWidget, props: { image: "", 
                            image2:"", 
                            title: 'Time Interval', 
                            symbol:"",
                            subTitle:"",
                            margin:"0 0 0 10px" }
                            }},
                          
                        ],
                        minColumnWidth: "100px",
                        maxColumnWidth: "150px"
                       },
                       content : stocks
                    },
                    {
                      id: 'memecoin',
                      label: 'Memecoin',
                      header: {
                        subject: 'Assets',
                        columns: [
                          { title: { is: TableHeaderWidget, 
                            props: { image: "https://img.icons8.com/?size=100&id=D0A1Afld5jac&format=png&color=000000", 
                            image2:"", 
                            title: 'Assets', 
                            symbol:"",
                            subTitle:"",
                            margin:"0 0 0 10px" }
                            }},

                            { title: { is: TableHeaderWidget,
                               props: { image: "https://img.icons8.com/?size=100&id=ZuLBkjDczTqY&format=png&color=000000", 
                            image2:"", 
                            title: 'Exchanges', 
                            symbol:"",
                            subTitle:"",
                            margin:"0 0 0 10px" }
                            } },
                            
                          { title: { is: TableHeaderWidget, props: { image: "", 
                            image2:"", 
                            title: 'Price', 
                            symbol:"",
                            subTitle: '24H Change',
                            margin:"0 0 0 10px" }
                            }},
                            
                          { title: { is: TableHeaderWidget, props: { image: "", 
                            image2:"", 
                            title: 'Price', 
                            subTitle:'7D Change',
                            symbol:"",
                            margin:"0 0 0 10px" }
                            }},
                          
                          { title: { is: TableHeaderWidget, props: { image: "", 
                            image2:"", 
                            title: 'Price', 
                            symbol:"",
                            subTitle:"30D Change",
                            margin:"0 0 0 10px" }
                            }},
                          
                          { title: { is: TableHeaderWidget, props: { image: "", 
                            image2:"", 
                            title: 'Price', 
                            symbol:"",
                            subTitle:"30D TL",
                            margin:"0 0 0 10px" }
                            }},
                          
                        ],
                        minColumnWidth: "100px",
                        maxColumnWidth: "150px"
                       },
                       content : memecoin
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
         :showColumnBorder="true"
         :activeTab="'crypto'"
         :title="'Exchange Asset'"
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

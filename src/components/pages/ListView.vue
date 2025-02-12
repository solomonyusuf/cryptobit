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

const header = [
                    {
                      id: 'crypto',
                      label: 'Crypto',
                      header: {
                        subject: '',
                        columns: [
                          { title: { is: TableHeaderWidget, props: { image: "https://img.icons8.com/?size=100&id=7163&format=png&color=FFFFFF", 
                            image2:"", 
                            title: 'Market', 
                            symbol:"",
                            margin:"0 0 0 10px" }
                            }, subTitle: '',  },
                          { title: { is: TableHeaderWidget, props: { image: "https://img.icons8.com/?size=100&id=BbKPvnE-fBDV&format=png&color=FFFFFF", 
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
                          { title: { is: TableHeaderWidget, props: { image: "https://img.icons8.com/?size=100&id=7163&format=png&color=FFFFFF", 
                            image2:"", 
                            title: 'Capital', 
                            symbol:"",
                            subTitle:"",
                            margin:"0 0 0 10px" }
                            }},

                          { title: { is: TableHeaderWidget, props: { image: "https://img.icons8.com/?size=100&id=BbKPvnE-fBDV&format=png&color=FFFFFF", 
                            image2:"", 
                            title: 'Price', 
                            symbol:"",
                            subTitle:"",
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
                            props: { image: "", 
                            image2:"", 
                            title: 'Assets', 
                            symbol:"",
                            subTitle:"",
                            margin:"0 0 0 10px" }
                            }},

                          { title: { is: TableHeaderWidget, props: { image: "", 
                            image2:"", 
                            title: 'Price', 
                            symbol:"",
                            subTitle:"",
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
                            symbol:"",
                            subTitle:"",
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

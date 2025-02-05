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

const overview_list = [
              [
                "https://img.icons8.com/?size=100&id=63192&format=png&color=000000",
                "Bitcoin",
                "BTC",
                "100,328.99",
                "-0.89",
                "-5.39",
                "+7.54",
                "2.01T",
                "28.96B",
                "Cryptocurrency"
              ], 
              [
                "https://img.icons8.com/?size=100&id=IhWBOFHtv6vx&format=png&color=000000",
                "Etherum",
                "Eth",
                "100,328.99",
                "-0.89",
                "-5.39",
                "+7.54",
                "2.01T",
                "28.96B",
                "Cryptocurrency"
              ],
              [
                "https://img.icons8.com/?size=100&id=GPOyWCiTpgRr&format=png&color=000000",
                "XRP",
                "XRP",
                "100,328.99",
                "-0.89",
                "-5.39",
                "+7.54",
                "2.01T",
                "28.96B",
                "Cryptocurrency"
              ],
              [
                "https://img.icons8.com/?size=100&id=63192&format=png&color=000000",
                "Bitcoin",
                "BTC",
                "100,328.99",
                "-0.89",
                "-5.39",
                "+7.54",
                "2.01T",
                "28.96B",
                "Cryptocurrency"
              ], 
              [
                "https://img.icons8.com/?size=100&id=IhWBOFHtv6vx&format=png&color=000000",
                "Etherum",
                "Eth",
                "100,328.99",
                "-0.89",
                "-5.39",
                "+7.54",
                "2.01T",
                "28.96B",
                "Cryptocurrency"
              ],
              [
                "https://img.icons8.com/?size=100&id=GPOyWCiTpgRr&format=png&color=000000",
                "XRP",
                "XRP",
                "100,328.99",
                "-0.89",
                "-5.39",
                "+7.54",
                "2.01T",
                "28.96B",
                "Cryptocurrency"
              ],
              [
                "https://img.icons8.com/?size=100&id=IhWBOFHtv6vx&format=png&color=000000",
                "Etherum",
                "Eth",
                "100,328.99",
                "-0.89",
                "-5.39",
                "+7.54",
                "2.01T",
                "28.96B",
                "Cryptocurrency"
              ],
              [
                "https://img.icons8.com/?size=100&id=GPOyWCiTpgRr&format=png&color=000000",
                "XRP",
                "XRP",
                "100,328.99",
                "-0.89",
                "-5.39",
                "+7.54",
                "2.01T",
                "28.96B",
                "Cryptocurrency"
              ],
              
                
          ];
const header = [
                    {
                      id: 'overview',
                      label: 'Overview',
                      content: {
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
                    },
                    {
                      id: 'calender',
                      label: 'Calender-Year ROI',
                      content: {
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
                    },
                    {
                      id: 'long-term',
                      label: 'Long-Term ROI',
                      content: {
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
                    },
                     
                    
                  ];

</script>

<template>
    <div class="bit-px-1"> 
        <TableWidget
         :tabHeader="header"
          class="bit-mt-4">
          <template #overview>
            <RowWidget v-for="(row, index) in overview_list" :key="index">
              <ColumnWidget>{{ index + 1 }}</ColumnWidget>
              <ColumnWidget class="sticky-column">
                <AssetWidget 
                  :image="row[0]"
                  :title="row[1]"
                  :symbol="row[2]"
                />
              </ColumnWidget>
              <ColumnWidget><PriceWidget :amount="row[3]" symbol="$"/></ColumnWidget>
              <ColumnWidget><PercentageWidget :amount="row[4]" color="red"/></ColumnWidget>
              <ColumnWidget><PercentageWidget :amount="row[5]" color="red"/></ColumnWidget>
              <ColumnWidget><PercentageWidget :amount="row[6]" color="green"/></ColumnWidget>
              <ColumnWidget> 
                <LineChartWidget 
                  :data="data" 
                  :labels="labels"
                  :options="{ lineColor: 'rgba(255, 99, 132, 1)', pointColor: 'rgba(255, 99, 132, 1)' }" 
                />
              </ColumnWidget>
              <ColumnWidget><PriceWidget :amount="row[7]" symbol="$"/></ColumnWidget>
              <ColumnWidget><PillWidget :title="row[9]"/></ColumnWidget>
            </RowWidget>
          </template>

          <template #calender>
            <RowWidget v-for="(row, index) in overview_list" :key="index">
              <ColumnWidget>{{ index + 1 }}</ColumnWidget>
              <ColumnWidget class="sticky-column">
                <AssetWidget 
                  :image="row[0]"
                  :title="row[1]"
                  :symbol="row[2]"
                />
              </ColumnWidget>
              <ColumnWidget><PercentageWidget :amount="row[4]" color="green"/></ColumnWidget>
              <ColumnWidget><PriceWidget :amount="row[3]" symbol="$"/></ColumnWidget>
              <ColumnWidget><PercentageWidget :amount="row[4]" color="red"/></ColumnWidget>
              <ColumnWidget><PercentageWidget :amount="row[5]" color="red"/></ColumnWidget>
              <ColumnWidget><PercentageWidget :amount="row[6]" color="green"/></ColumnWidget>
              <ColumnWidget><PercentageWidget :amount="row[6]" color="green"/>
              </ColumnWidget>
              <ColumnWidget><PriceWidget :amount="row[7]" symbol="$"/></ColumnWidget>
              <ColumnWidget><PriceWidget :amount="row[8]" symbol="$"/></ColumnWidget>
              <ColumnWidget><PriceWidget :amount="row[8]" symbol="$"/></ColumnWidget>
            </RowWidget>
          </template>

          <template #long-term>
            <RowWidget v-for="(row, index) in overview_list" :key="index">
              <ColumnWidget>{{ index + 1 }}</ColumnWidget>
              <ColumnWidget class="sticky-column">
                <AssetWidget 
                  :image="row[0]"
                  :title="row[1]"
                  :symbol="row[2]"
                />
              </ColumnWidget>
              <ColumnWidget><PercentageWidget :amount="row[4]" color="green"/></ColumnWidget>
              <ColumnWidget><PriceWidget :amount="row[3]" symbol="$"/></ColumnWidget>
              <ColumnWidget><PercentageWidget :amount="row[4]" color="red"/></ColumnWidget>
              <ColumnWidget><PercentageWidget :amount="row[5]" color="red"/></ColumnWidget>
              <ColumnWidget><PercentageWidget :amount="row[6]" color="green"/></ColumnWidget>
              <ColumnWidget><PercentageWidget :amount="row[6]" color="green"/>
              </ColumnWidget>
              <ColumnWidget><PriceWidget :amount="row[7]" symbol="$"/></ColumnWidget>
              <ColumnWidget><PriceWidget :amount="row[8]" symbol="$"/></ColumnWidget>
              <ColumnWidget><PriceWidget :amount="row[8]" symbol="$"/></ColumnWidget>
            </RowWidget>
          </template>
          
        </TableWidget>

    </div>
  </template>

  <style lang="scss">
  @import url('../../assets/base.scss');
</style>

<!--  -->
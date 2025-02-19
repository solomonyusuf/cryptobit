<script setup>
import { ref } from 'vue';

const isfOpen = ref(true);
const issOpen = ref(true);
const isdOpen = ref(false);
const tab = ref('supply');

const toggleAccordion = (type) => {
  if(type === 'first')
  isfOpen.value = !isfOpen.value;
  if(type === 'second')
  issOpen.value = !issOpen.value;
  if(type === 'dropdown')
   isdOpen.value = !isdOpen.value;
};
 
const toggleElement = (param) => {
  const element = document.querySelector(".css-bf0ye5"); 
  const targetDiv = document.querySelector(".css-1wbia9h"); 

  tab.value = param;

  if (element && targetDiv) {
    if(param === 'supply')
    {
      element.style.display = "block";
      targetDiv.style.display = "none";
    }
    else
    {
      element.style.display = "none";
      targetDiv.style.display = "block";
    }
  
    // if (element.style.display === "none") {
    //   element.style.display = "block";
    //   targetDiv.style.display = "none";
    // } else {
    //   element.style.display = "none";
    //   targetDiv.style.display = "block";
    // }
  }
};


</script>
<template>
<div class="MuiBox-root css-b95f0i">
   <div class=" css-1e6kcma">
      <div class="MuiContainer-root MuiContainer-maxWidthLg css-ycl373">
         <div class="MuiBox-root css-nkvznt">
            <div class="MuiBox-root css-70qvj9">
               <div class="MuiBox-root css-1czjwln">
                  <div class="MuiBox-root css-gr0tg3">
                     <div class="MuiFormControl-root MuiTextField-root css-1s2gcw8" aria-label="select market" data-cy="marketSelector">
                        <div class="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-formControl MarketSwitcher__select css-1ypy5va">
                           <div tabindex="0" role="combobox" aria-expanded="false" aria-haspopup="listbox"  class="MuiSelect-select MuiSelect-outlined MuiInputBase-input MuiOutlinedInput-input css-1dyf9qo">
                              <div class="MuiBox-root css-0">
                                 <div class="MuiBox-root css-70qvj9">
                                    <div class="MuiBox-root css-hjllk8"><img src="https://app.aave.com/icons/networks/ethereum.svg" alt="" width="100%" height="100%"></div>
                                    <div class="MuiBox-root css-171onha">
                                       <h1 class="MuiTypography-root MuiTypography-display1 css-15vg6gj">Core Instance</h1>
                                       <div class="MuiBox-root css-70qvj9">
                                          <div class="MuiBox-root css-1tgkox5">
                                             <p class="MuiTypography-root MuiTypography-subheader2 css-my2x37">V3</p>
                                          </div>
                                          <svg  @click="toggleAccordion('dropdown')" class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-fo7h32" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path>
                                             </svg>
                                          </svg>
                                          <div v-if="isdOpen" class="dropdown-menu" style="background:#383d51;border:0;">
                                          <ul @click="toggleAccordion('dropdown')" class="MuiList-root MuiList-padding MuiMenu-list css-rl9mto" role="listbox" tabindex="-1" style="padding-right: 0px; width: calc(100% + 0px);">
                        <div class="MuiBox-root css-0" aria-selected="false" role="option">
                          <p class="MuiTypography-root MuiTypography-subheader2 css-itcqc2">Select Market</p>
                        </div>
                        
                        <li class="MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters MuiMenuItem-root MuiMenuItem-gutters css-1437ts5" tabindex="-1" role="option" data-cy="marketSelector_proto_mainnet_v3" aria-selected="false" data-value="proto_mainnet_v3">
                          <div class="MuiBox-root css-hjllk8"><img src="https://app.aave.com/icons/networks/ethereum.svg" alt="" width="100%" height="100%"></div>
                          <div class="MuiListItemText-root css-3vef5u"><span class="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-12sut97">Core </span></div>
                          <div class="MuiListItemText-root css-ib15t8">
                              <p class="MuiTypography-root MuiTypography-description css-joe7qy"></p>
                          </div>
                          <span class="MuiTouchRipple-root css-w0pj6f"></span>
                        </li>
                        <li class="MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters MuiMenuItem-root MuiMenuItem-gutters css-1437ts5" tabindex="-1" role="option" data-cy="marketSelector_proto_lido_v3" aria-selected="false" data-value="proto_lido_v3">
                          <div class="MuiBox-root css-hjllk8"><img src="https://app.aave.com/icons/markets/lido.svg" alt="" width="100%" height="100%"></div>
                          <div class="MuiListItemText-root css-3vef5u"><span class="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-12sut97">Prime </span></div>
                          <div class="MuiListItemText-root css-ib15t8">
                              <p class="MuiTypography-root MuiTypography-description css-joe7qy"></p>
                          </div>
                          <span class="MuiTouchRipple-root css-w0pj6f"></span>
                        </li>
                        <li class="MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters MuiMenuItem-root MuiMenuItem-gutters css-1437ts5" tabindex="-1" role="option" data-cy="marketSelector_proto_etherfi_v3" aria-selected="false" data-value="proto_etherfi_v3">
                          <div class="MuiBox-root css-hjllk8"><img src="https://app.aave.com/icons/markets/etherfi.svg" alt="" width="100%" height="100%"></div>
                          <div class="MuiListItemText-root css-3vef5u"><span class="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-12sut97">EtherFi </span></div>
                          <div class="MuiListItemText-root css-ib15t8">
                              <p class="MuiTypography-root MuiTypography-description css-joe7qy"></p>
                          </div>
                          <span class="MuiTouchRipple-root css-w0pj6f"></span>
                        </li>
                      
                        <li class="MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters MuiMenuItem-root MuiMenuItem-gutters css-1437ts5" tabindex="-1" role="option" data-cy="marketSelector_proto_base_v3" aria-selected="false" data-value="proto_base_v3">
                          <div class="MuiBox-root css-hjllk8"><img src="https://app.aave.com/icons/networks/base.svg" alt="" width="100%" height="100%"></div>
                          <div class="MuiListItemText-root css-3vef5u"><span class="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-12sut97">Base </span></div>
                          <div class="MuiListItemText-root css-ib15t8">
                              <p class="MuiTypography-root MuiTypography-description css-joe7qy"></p>
                          </div>
                          <span class="MuiTouchRipple-root css-w0pj6f"></span>
                        </li>
                        <li class="MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters MuiMenuItem-root MuiMenuItem-gutters css-1437ts5" tabindex="-1" role="option" data-cy="marketSelector_proto_arbitrum_v3" aria-selected="false" data-value="proto_arbitrum_v3">
                          <div class="MuiBox-root css-hjllk8"><img src="https://app.aave.com/icons/networks/arbitrum.svg" alt="" width="100%" height="100%"></div>
                          <div class="MuiListItemText-root css-3vef5u"><span class="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-12sut97">Arbitrum </span></div>
                          <div class="MuiListItemText-root css-ib15t8">
                              <p class="MuiTypography-root MuiTypography-description css-joe7qy"></p>
                          </div>
                          <span class="MuiTouchRipple-root css-w0pj6f"></span>
                        </li>
                        <li class="MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters MuiMenuItem-root MuiMenuItem-gutters css-1437ts5" tabindex="-1" role="option" data-cy="marketSelector_proto_avalanche_v3" aria-selected="false" data-value="proto_avalanche_v3">
                          <div class="MuiBox-root css-hjllk8"><img src="https://app.aave.com/icons/networks/avalanche.svg" alt="" width="100%" height="100%"></div>
                          <div class="MuiListItemText-root css-3vef5u"><span class="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-12sut97">Avalanche </span></div>
                          <div class="MuiListItemText-root css-ib15t8">
                              <p class="MuiTypography-root MuiTypography-description css-joe7qy"></p>
                          </div>
                          <span class="MuiTouchRipple-root css-w0pj6f"></span>
                        </li>
                        <li class="MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters MuiMenuItem-root MuiMenuItem-gutters css-1437ts5" tabindex="-1" role="option" data-cy="marketSelector_proto_optimism_v3" aria-selected="false" data-value="proto_optimism_v3">
                          <div class="MuiBox-root css-hjllk8"><img src="https://app.aave.com/icons/networks/optimism.svg" alt="" width="100%" height="100%"></div>
                          <div class="MuiListItemText-root css-3vef5u"><span class="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-12sut97">OP </span></div>
                          <div class="MuiListItemText-root css-ib15t8">
                              <p class="MuiTypography-root MuiTypography-description css-joe7qy"></p>
                          </div>
                          <span class="MuiTouchRipple-root css-w0pj6f"></span>
                        </li>
                        <li class="MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters MuiMenuItem-root MuiMenuItem-gutters css-1437ts5" tabindex="-1" role="option" data-cy="marketSelector_proto_polygon_v3" aria-selected="false" data-value="proto_polygon_v3">
                          <div class="MuiBox-root css-hjllk8"><img src="https://app.aave.com/icons/networks/polygon.svg" alt="" width="100%" height="100%"></div>
                          <div class="MuiListItemText-root css-3vef5u"><span class="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-12sut97">Polygon </span></div>
                          <div class="MuiListItemText-root css-ib15t8">
                              <p class="MuiTypography-root MuiTypography-description css-joe7qy"></p>
                          </div>
                          <span class="MuiTouchRipple-root css-w0pj6f"></span>
                        </li>
                        <li class="MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters MuiMenuItem-root MuiMenuItem-gutters css-1437ts5" tabindex="-1" role="option" data-cy="marketSelector_proto_metis_v3" aria-selected="false" data-value="proto_metis_v3">
                          <div class="MuiBox-root css-hjllk8"><img src="https://app.aave.com/icons/networks/metis.svg" alt="" width="100%" height="100%"></div>
                          <div class="MuiListItemText-root css-3vef5u"><span class="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-12sut97">Metis </span></div>
                          <div class="MuiListItemText-root css-ib15t8">
                              <p class="MuiTypography-root MuiTypography-description css-joe7qy"></p>
                          </div>
                          <span class="MuiTouchRipple-root css-w0pj6f"></span>
                        </li>
                        <li class="MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters MuiMenuItem-root MuiMenuItem-gutters css-1437ts5" tabindex="-1" role="option" data-cy="marketSelector_proto_gnosis_v3" aria-selected="false" data-value="proto_gnosis_v3">
                          <div class="MuiBox-root css-hjllk8"><img src="https://app.aave.com/icons/networks/gnosis.svg" alt="" width="100%" height="100%"></div>
                          <div class="MuiListItemText-root css-3vef5u"><span class="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-12sut97">Gnosis </span></div>
                          <div class="MuiListItemText-root css-ib15t8">
                              <p class="MuiTypography-root MuiTypography-description css-joe7qy"></p>
                          </div>
                          <span class="MuiTouchRipple-root css-w0pj6f"></span>
                        </li>
                        <li class="MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters Mui-selected MuiMenuItem-root MuiMenuItem-gutters Mui-selected css-1437ts5" tabindex="0" role="option" data-cy="marketSelector_proto_bnb_v3" aria-selected="true" data-value="proto_bnb_v3">
                          <div class="MuiBox-root css-hjllk8"><img src="https://app.aave.com/icons/networks/binance.svg" alt="" width="100%" height="100%"></div>
                          <div class="MuiListItemText-root css-3vef5u"><span class="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-12sut97">BNB Chain </span></div>
                          <div class="MuiListItemText-root css-ib15t8">
                              <p class="MuiTypography-root MuiTypography-description css-joe7qy"></p>
                          </div>
                          <span class="MuiTouchRipple-root css-w0pj6f"></span>
                        </li>
                        <li class="MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters MuiMenuItem-root MuiMenuItem-gutters css-1437ts5" tabindex="-1" role="option" data-cy="marketSelector_proto_scroll_v3" aria-selected="false" data-value="proto_scroll_v3">
                          <div class="MuiBox-root css-hjllk8"><img src="https://app.aave.com/icons/networks/scroll.svg" alt="" width="100%" height="100%"></div>
                          <div class="MuiListItemText-root css-3vef5u"><span class="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-12sut97">Scroll </span></div>
                          <div class="MuiListItemText-root css-ib15t8">
                              <p class="MuiTypography-root MuiTypography-description css-joe7qy"></p>
                          </div>
                          <span class="MuiTouchRipple-root css-w0pj6f"></span>
                        </li>
                        <li class="MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters MuiMenuItem-root MuiMenuItem-gutters css-1437ts5" tabindex="-1" role="option" data-cy="marketSelector_proto_zksync_v3" aria-selected="false" data-value="proto_zksync_v3">
                          <div class="MuiBox-root css-hjllk8"><img src="https://app.aave.com/icons/networks/zksync.svg" alt="" width="100%" height="100%"></div>
                          <div class="MuiListItemText-root css-3vef5u"><span class="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-12sut97">ZKsync </span></div>
                          <div class="MuiListItemText-root css-ib15t8">
                              <p class="MuiTypography-root MuiTypography-description css-joe7qy"></p>
                          </div>
                          <span class="MuiTouchRipple-root css-w0pj6f"></span>
                        </li>
                        <li class="MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters MuiMenuItem-root MuiMenuItem-gutters css-1437ts5" tabindex="-1" role="option" data-cy="marketSelector_proto_linea_v3" aria-selected="false" data-value="proto_linea_v3">
                          <div class="MuiBox-root css-hjllk8"><img src="https://app.aave.com/icons/networks/linea.svg" alt="" width="100%" height="100%"></div>
                          <div class="MuiListItemText-root css-3vef5u"><span class="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-12sut97">Linea </span></div>
                          <div class="MuiListItemText-root css-ib15t8">
                              <p class="MuiTypography-root MuiTypography-description css-joe7qy"></p>
                          </div>
                          <span class="MuiTouchRipple-root css-w0pj6f"></span>
                        </li>
                                          </ul>

                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <p class="MuiTypography-root MuiTypography-description css-10qjsex">Main Ethereum market with the largest selection of assets and yield options</p>
                              </div>
                           </div>
                           <input aria-invalid="false" aria-hidden="true" tabindex="-1" class="MuiSelect-nativeInput css-1k3x8v3" value="proto_mainnet_v3">
                           <fieldset aria-hidden="true" class="MuiOutlinedInput-notchedOutline css-nqlg3w">
                              <legend class="css-ihdtdm"><span class="notranslate">​</span></legend>
                           </fieldset>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="MuiBox-root css-k7vncv">
               <div class="MuiBox-root css-ltjh6b">
                  <div class="MuiBox-root css-j7qwjs">
                     <div class="MuiBox-root css-18biwo">
                        <div class="MuiTypography-root MuiTypography-description css-1t8x1s2">Net worth</div>
                     </div>
                     <p class="MuiTypography-root MuiTypography-main21 MuiTypography-noWrap css-1x4zjhu"><span class="MuiTypography-root MuiTypography-secondary21 css-vj5di1">$</span>0</p>
                  </div>
               </div>
               <div class="MuiBox-root css-ltjh6b">
                  <div class="MuiBox-root css-j7qwjs">
                     <div class="MuiBox-root css-18biwo">
                        <div class="MuiTypography-root MuiTypography-description css-1t8x1s2">
                           <div style="display: flex;">
                              Net APY
                              <div class="MuiBox-root css-70qvj9">
                                 <div class="MuiBox-root css-ulme3a">
                                    <button class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1osfq0k" tabindex="0" type="button">
                                       <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-jmow5f" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                                             <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                          </svg>
                                       </svg>
                                       <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                    </button>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <p class="MuiTypography-root MuiTypography-secondary21 css-1fgc1cp">—</p>
                  </div>
               </div>
            </div>
            <div class="MuiBox-root css-k7vncv">
              <a class="MuiButtonBase-root MuiButton-root MuiButton-surface MuiButton-surfacePrimary MuiButton-sizeSmall MuiButton-surfaceSizeSmall MuiButton-colorPrimary MuiButton-disableElevation MuiButton-root MuiButton-surface MuiButton-surfacePrimary MuiButton-sizeSmall MuiButton-surfaceSizeSmall MuiButton-colorPrimary MuiButton-disableElevation css-kw8qku show-on-mobile" tabindex="0" role="button" style="margin-top:10px;">View Transactions<span class="MuiTouchRipple-root css-w0pj6f"></span></a> 
            </div>
         </div>
         <div class="MuiBox-root css-duo07e" style="margin-top:10px;">
                 
            <div role="group" class="MuiToggleButtonGroup-root css-mehr4l">
                <button @click="toggleElement('supply')" :class="{'Mui-selected': tab == 'supply'}" class="MuiButtonBase-root MuiToggleButtonGroup-grouped MuiToggleButtonGroup-groupedHorizontal MuiToggleButton-root  MuiToggleButton-sizeMedium MuiToggleButton-primary MuiToggleButtonGroup-firstButton css-la5cf0" tabindex="-1" type="button" value="supply" aria-pressed="true">
                  <p class="MuiTypography-root MuiTypography-subheader1 css-fu4g2f">Supply</p>
                </button>
                <button @click="toggleElement('borrow')"  :class="{'Mui-selected': tab == 'borrow'}" class="MuiButtonBase-root MuiToggleButtonGroup-grouped MuiToggleButtonGroup-groupedHorizontal MuiToggleButton-root MuiToggleButton-sizeMedium MuiToggleButton-primary MuiToggleButtonGroup-lastButton css-la5cf0" tabindex="0" type="button" value="borrow" aria-pressed="false">
                  <p class="MuiTypography-root MuiTypography-subheader1 css-fu4g2f">Borrow</p>
                  <span class="MuiTouchRipple-root css-w0pj6f"></span>
                </button>
            </div>
          </div>
      </div>
   </div>
   <div class="MuiBox-root css-159pi92" style="background: #1b2030;"> 
      <div class="MuiContainer-root MuiContainer-maxWidthLg css-1a8qn2o css-1jdos5u">
         <div class="MuiBox-root css-1jdos5u">
          <div class="MuiBox-root css-0">
              <div class="MuiBox-root css-1qdyvok">
                <div class="MuiBox-root css-bf0ye5">
                    <div class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 css-133srx4">
                      <div class="MuiBox-root css-19zr2gl">
                          <div class="MuiBox-root css-iwds49">
                            <div class="MuiTypography-root MuiTypography-h3 css-upncnh">Your supplies</div>
                          </div>
                      </div>
                      <div class="MuiBox-root css-1dm56o2"></div>
                      <div class="MuiBox-root css-13o7eu2 show-on-desktop">
                            <div class="MuiBox-root css-1wsmwia">
                                <div class="MuiBox-root css-15czs8k">
                                  <div class="MuiTypography-root MuiTypography-subheader2 MuiTypography-noWrap css-18phtf6">
                                      Assets
                                      <div class="MuiBox-root css-14dkifd"><span class="MuiBox-root css-1hf8ilx"></span><span class="MuiBox-root css-1ojixww"></span></div>
                                  </div>
                                </div>
                                <div class="MuiBox-root css-11udp8r">
                                  <div class="MuiTypography-root MuiTypography-subheader2 MuiTypography-noWrap css-18phtf6">
                                      Balance
                                      <div class="MuiBox-root css-14dkifd"><span class="MuiBox-root css-1hf8ilx"></span><span class="MuiBox-root css-1ojixww"></span></div>
                                  </div>
                                </div>
                                <div class="MuiBox-root css-11udp8r">
                                  <div class="MuiTypography-root MuiTypography-subheader2 MuiTypography-noWrap css-18phtf6">
                                      APY
                                      <div class="MuiBox-root css-14dkifd"><span class="MuiBox-root css-1hf8ilx"></span><span class="MuiBox-root css-1ojixww"></span></div>
                                  </div>
                                </div>
                                <div class="MuiBox-root css-11udp8r">
                                  <div class="MuiTypography-root MuiTypography-subheader2 MuiTypography-noWrap css-18phtf6">
                                      Collateral
                                      <div class="MuiBox-root css-14dkifd"><span class="MuiBox-root css-1hf8ilx"></span><span class="MuiBox-root css-1ojixww"></span></div>
                                  </div>
                                </div>
                                <div class="MuiBox-root css-1xwkwbj"></div>
                            </div>
                            <div class="MuiBox-root css-1qm0evb" data-cy="dashboardSupplyListItem_1INCH">
                                <div class="MuiBox-root css-15czs8k">
                                  <a class="MuiTypography-root MuiTypography-description MuiTypography-noWrap MuiLink-root MuiLink-underlineNone css-17910yg" href="/reserve-overview/?underlyingAsset=0x111111111117dc0aa78b770fa6a738034120c302&amp;marketName=proto_mainnet_v3">
                                      <span class="material-icons notranslate MuiIcon-root MuiIcon-fontSizeLarge css-1ux336h" aria-hidden="true"><img src="https://app.aave.com/icons/tokens/1inch.svg" width="100%" height="100%" alt="1INCH icon"></span>
                                      <p class="MuiTypography-root MuiTypography-subheader1 MuiTypography-noWrap css-mgqwsh" data-cy="assetName" aria-label="1inch Network (1INCH)">1INCH</p>
                                  </a>
                                </div>
                                <div class="MuiBox-root css-11udp8r">
                                  <div class="MuiBox-root css-u6v8er">
                                      <div class="MuiBox-root css-70qvj9">
                                        <p class="MuiTypography-root MuiTypography-secondary14 MuiTypography-noWrap css-1r4ptf4" data-cy="nativeAmount">0</p>
                                      </div>
                                  </div>
                                </div>
                                <div class="MuiBox-root css-11udp8r">
                                  <div class="MuiBox-root css-1241y0n">
                                      <div class="MuiBox-root css-19el3v">
                                        <div class="MuiBox-root css-k008qs">
                                            <p class="MuiTypography-root MuiTypography-secondary14 MuiTypography-noWrap css-uefm4v" data-cy="apy">0.57<span class="MuiTypography-root MuiTypography-secondary14 css-d8aql2">%</span></p>
                                        </div>
                                        <div class="MuiBox-root css-1yxnkj0"></div>
                                      </div>
                                  </div>
                                </div>
                                <div class="MuiBox-root css-11udp8r">
                                  <div class="MuiBox-root css-gmuwbf">
                                      <div class="MuiBox-root css-1rzcn8q">
                                        <div class="MuiBox-root css-5wpzg3">
                                            <div class="MuiBox-root css-1do422x">
                                              <p class="MuiTypography-root MuiTypography-secondary12 css-1yhzaxq">Isolated</p>
                                              <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-nqvctb" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                  </svg>
                                              </svg>
                                            </div>
                                        </div>
                                      </div>
                                  </div>
                                </div>
                                <div class="MuiBox-root css-1xwkwbj"><button class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation Mui-disabled MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation css-moyn3y" tabindex="-1" type="button" >Supply</button><button class="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation css-uhikff" tabindex="0" type="button" id="supply-extra-button" aria-haspopup="true">...<span class="MuiTouchRipple-root css-w0pj6f"></span></button></div>
                            </div>
                            
                      </div>
                      <div class="MuiBox-root css-13o7eu2 show-on-mobile">
                          <div class="MuiBox-root css-0">
                              <hr class="MuiDivider-root MuiDivider-fullWidth css-1301pmg">
                              <div class="MuiBox-root css-1qo1gdh">
                                <div class="MuiBox-root css-111boms">
                                    <a class="MuiTypography-root MuiTypography-description MuiLink-root MuiLink-underlineNone css-ekhp5c" href="/reserve-overview/?underlyingAsset=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82&amp;marketName=proto_bnb_v3">
                                      <span class="material-icons notranslate MuiIcon-root MuiIcon-fontSizeMedium css-188b5or" aria-hidden="true"><img src="https://app.aave.com/icons/tokens/cake.svg" width="100%" height="100%" alt="CAKE icon"></span>
                                      <div class="MuiBox-root css-1isemmb">
                                          <h4 class="MuiTypography-root MuiTypography-h4 css-cg4wfg">PancakeSwap Token</h4>
                                          <div class="MuiBox-root css-70qvj9">
                                            <p class="MuiTypography-root MuiTypography-subheader2 css-mtelhg">Cake</p>
                                          </div>
                                      </div>
                                    </a>
                                </div>
                                <div class="MuiBox-root css-xrt28o">
                                    <div class="MuiTypography-root MuiTypography-description css-181zdd">Supply balance</div>
                                    <div class="MuiBox-root css-qfdd9t">
                                      <div class="MuiBox-root css-17m7cz6">
                                          <p class="MuiTypography-root MuiTypography-secondary14 MuiTypography-noWrap css-dlrh6v">0</p>
                                      </div>
                                    </div>
                                </div>
                                <div class="MuiBox-root css-xrt28o">
                                    <div class="MuiTypography-root MuiTypography-description css-181zdd">Supply APY</div>
                                    <div class="MuiBox-root css-19el3v">
                                      <div class="MuiBox-root css-k008qs">
                                          <p class="MuiTypography-root MuiTypography-secondary14 MuiTypography-noWrap css-uefm4v" data-cy="apy">0.38<span class="MuiTypography-root MuiTypography-secondary14 css-d8aql2">%</span></p>
                                      </div>
                                      <div class="MuiBox-root css-rnjm1y"></div>
                                    </div>
                                </div>
                                <div class="MuiBox-root css-xrt28o">
                                    <div class="MuiTypography-root MuiTypography-description css-181zdd">Can be collateral</div>
                                    <div class="MuiBox-root css-gmuwbf">
                                      <div class="MuiBox-root css-1rzcn8q">
                                          <div class="MuiBox-root css-5wpzg3">
                                            <div class="MuiBox-root css-1do422x">
                                                <p class="MuiTypography-root MuiTypography-secondary12 css-1yhzaxq">Isolated</p>
                                                <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-nqvctb" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                                                      <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                  </svg>
                                                </svg>
                                            </div>
                                          </div>
                                      </div>
                                    </div>
                                </div>
                                <div class="MuiBox-root css-16rgc74"><button class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth Mui-disabled MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth css-23aapr" tabindex="-1" type="button" disabled="">Supply</button><a class="MuiTypography-root MuiTypography-description MuiLink-root MuiLink-underlineNone MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth css-1haiorh" tabindex="0" href="/reserve-overview/?underlyingAsset=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82&amp;marketName=proto_bnb_v3">Details<span class="MuiTouchRipple-root css-w0pj6f"></span></a></div>
                              </div>
                          </div>
                      </div>
                      
                    </div>
                    <div class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 css-7l9tvd">
                      <div class="MuiBox-root css-19zr2gl">
                          <div class="MuiBox-root css-iwds49">
                            <div class="MuiTypography-root MuiTypography-h3 css-upncnh">Assets to supply</div>
                          </div>
                          <div class="MuiBox-root css-l9ry6i" @click="toggleAccordion('first')">
                            <p class="MuiTypography-root MuiTypography-buttonM css-1p541t6">Hide</p>
                            <span></span>
                          </div>
                      </div>
                      <div class="MuiBox-root css-35dwn7" v-if="isfOpen">
                          <div class="MuiBox-root css-t0051x">
                            <div class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiAlert-root MuiAlert-colorInfo MuiAlert-standardInfo MuiAlert-standard css-1lh2l3q" role="alert">
                                <div class="MuiAlert-icon css-1l54tgj">
                                  <svg class="MuiSvgIcon-root MuiSvgIcon-colorInfo MuiSvgIcon-fontSizeMedium css-115dves" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                      </svg>
                                  </svg>
                                </div>
                                <div class="MuiAlert-message css-1xsto0d">Your Ethereum wallet is empty. Purchase or transfer assets.</div>
                            </div>
                          </div>
                      </div>
                      <div class="MuiBox-root css-13o7eu2 show-on-desktop"  v-show="isfOpen">
                            <div class="MuiBox-root css-1wsmwia">
                                <div class="MuiBox-root css-15czs8k">
                                  <div class="MuiTypography-root MuiTypography-subheader2 MuiTypography-noWrap css-18phtf6">
                                      Assets
                                      <div class="MuiBox-root css-14dkifd"><span class="MuiBox-root css-1hf8ilx"></span><span class="MuiBox-root css-1ojixww"></span></div>
                                  </div>
                                </div>
                                <div class="MuiBox-root css-11udp8r">
                                  <div class="MuiTypography-root MuiTypography-subheader2 MuiTypography-noWrap css-18phtf6">
                                      Wallet balance
                                      <div class="MuiBox-root css-14dkifd"><span class="MuiBox-root css-1hf8ilx"></span><span class="MuiBox-root css-1ojixww"></span></div>
                                  </div>
                                </div>
                                <div class="MuiBox-root css-11udp8r">
                                  <div class="MuiTypography-root MuiTypography-subheader2 MuiTypography-noWrap css-18phtf6">
                                      APY
                                      <div class="MuiBox-root css-14dkifd"><span class="MuiBox-root css-1hf8ilx"></span><span class="MuiBox-root css-1ojixww"></span></div>
                                  </div>
                                </div>
                                <div class="MuiBox-root css-11udp8r">
                                  <div class="MuiTypography-root MuiTypography-subheader2 MuiTypography-noWrap css-18phtf6">
                                      Can be collateral
                                      <div class="MuiBox-root css-14dkifd"><span class="MuiBox-root css-1hf8ilx"></span><span class="MuiBox-root css-1ojixww"></span></div>
                                  </div>
                                </div>
                                <div class="MuiBox-root css-1xwkwbj"></div>
                            </div>
                            <div class="MuiBox-root css-1qm0evb" data-cy="dashboardSupplyListItem_1INCH">
                                <div class="MuiBox-root css-15czs8k">
                                  <a class="MuiTypography-root MuiTypography-description MuiTypography-noWrap MuiLink-root MuiLink-underlineNone css-17910yg" href="/reserve-overview/?underlyingAsset=0x111111111117dc0aa78b770fa6a738034120c302&amp;marketName=proto_mainnet_v3">
                                      <span class="material-icons notranslate MuiIcon-root MuiIcon-fontSizeLarge css-1ux336h" aria-hidden="true"><img src="https://app.aave.com/icons/tokens/1inch.svg" width="100%" height="100%" alt="1INCH icon"></span>
                                      <p class="MuiTypography-root MuiTypography-subheader1 MuiTypography-noWrap css-mgqwsh" data-cy="assetName" aria-label="1inch Network (1INCH)">1INCH</p>
                                  </a>
                                </div>
                                <div class="MuiBox-root css-11udp8r">
                                  <div class="MuiBox-root css-u6v8er">
                                      <div class="MuiBox-root css-70qvj9">
                                        <p class="MuiTypography-root MuiTypography-secondary14 MuiTypography-noWrap css-1r4ptf4" data-cy="nativeAmount">0</p>
                                      </div>
                                  </div>
                                </div>
                                <div class="MuiBox-root css-11udp8r">
                                  <div class="MuiBox-root css-1241y0n">
                                      <div class="MuiBox-root css-19el3v">
                                        <div class="MuiBox-root css-k008qs">
                                            <p class="MuiTypography-root MuiTypography-secondary14 MuiTypography-noWrap css-uefm4v" data-cy="apy">0.57<span class="MuiTypography-root MuiTypography-secondary14 css-d8aql2">%</span></p>
                                        </div>
                                        <div class="MuiBox-root css-1yxnkj0"></div>
                                      </div>
                                  </div>
                                </div>
                                <div class="MuiBox-root css-11udp8r">
                                  <div class="MuiBox-root css-gmuwbf">
                                      <div class="MuiBox-root css-1rzcn8q">
                                        <div class="MuiBox-root css-5wpzg3">
                                            <div class="MuiBox-root css-1do422x">
                                              <p class="MuiTypography-root MuiTypography-secondary12 css-1yhzaxq">Isolated</p>
                                              <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-nqvctb" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                  </svg>
                                              </svg>
                                            </div>
                                        </div>
                                      </div>
                                  </div>
                                </div>
                                <div class="MuiBox-root css-1xwkwbj"><button class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation Mui-disabled MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation css-moyn3y" tabindex="-1" type="button" >Supply</button><button class="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation css-uhikff" tabindex="0" type="button" id="supply-extra-button" aria-haspopup="true">...<span class="MuiTouchRipple-root css-w0pj6f"></span></button></div>
                            </div>
                            <div class="MuiBox-root css-1qm0evb" data-cy="dashboardSupplyListItem_FRAX">
                                <div class="MuiBox-root css-15czs8k">
                                  <a class="MuiTypography-root MuiTypography-description MuiTypography-noWrap MuiLink-root MuiLink-underlineNone css-17910yg" href="/reserve-overview/?underlyingAsset=0x853d955acef822db058eb8505911ed77f175b99e&amp;marketName=proto_mainnet_v3">
                                      <span class="material-icons notranslate MuiIcon-root MuiIcon-fontSizeLarge css-1ux336h" aria-hidden="true"><img src="https://app.aave.com/icons/tokens/frax.svg" width="100%" height="100%" alt="FRAX icon"></span>
                                      <p class="MuiTypography-root MuiTypography-subheader1 MuiTypography-noWrap css-mgqwsh" data-cy="assetName" aria-label="Frax (FRAX)">FRAX</p>
                                  </a>
                                </div>
                                <div class="MuiBox-root css-11udp8r">
                                  <div class="MuiBox-root css-u6v8er">
                                      <div class="MuiBox-root css-70qvj9">
                                        <p class="MuiTypography-root MuiTypography-secondary14 MuiTypography-noWrap css-1r4ptf4" data-cy="nativeAmount">0</p>
                                      </div>
                                  </div>
                                </div>
                                <div class="MuiBox-root css-11udp8r">
                                  <div class="MuiBox-root css-1241y0n">
                                      <div class="MuiBox-root css-19el3v">
                                        <div class="MuiBox-root css-k008qs">
                                            <p class="MuiTypography-root MuiTypography-secondary14 MuiTypography-noWrap css-uefm4v" data-cy="apy">4.98<span class="MuiTypography-root MuiTypography-secondary14 css-d8aql2">%</span></p>
                                        </div>
                                        <div class="MuiBox-root css-1yxnkj0"></div>
                                      </div>
                                  </div>
                                </div>
                                <div class="MuiBox-root css-11udp8r">
                                  <div class="MuiBox-root css-gmuwbf">
                                      <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-hqkm93" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                      </svg>
                                  </div>
                                </div>
                                <div class="MuiBox-root css-1xwkwbj"><button class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation Mui-disabled MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation css-moyn3y" tabindex="-1" type="button" >Supply</button><button class="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation css-uhikff" tabindex="0" type="button" id="supply-extra-button" aria-haspopup="true">...<span class="MuiTouchRipple-root css-w0pj6f"></span></button></div>
                            </div>
                            <div class="MuiBox-root css-1qm0evb" data-cy="dashboardSupplyListItem_SNX">
                                <div class="MuiBox-root css-15czs8k">
                                  <a class="MuiTypography-root MuiTypography-description MuiTypography-noWrap MuiLink-root MuiLink-underlineNone css-17910yg" href="/reserve-overview/?underlyingAsset=0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f&amp;marketName=proto_mainnet_v3">
                                      <span class="material-icons notranslate MuiIcon-root MuiIcon-fontSizeLarge css-1ux336h" aria-hidden="true"><img src="https://app.aave.com/icons/tokens/snx.svg" width="100%" height="100%" alt="SNX icon"></span>
                                      <p class="MuiTypography-root MuiTypography-subheader1 MuiTypography-noWrap css-mgqwsh" data-cy="assetName" aria-label="Synthetix Network Token (SNX)">SNX</p>
                                  </a>
                                </div>
                                <div class="MuiBox-root css-11udp8r">
                                  <div class="MuiBox-root css-u6v8er">
                                      <div class="MuiBox-root css-70qvj9">
                                        <p class="MuiTypography-root MuiTypography-secondary14 MuiTypography-noWrap css-1r4ptf4" data-cy="nativeAmount">0</p>
                                      </div>
                                  </div>
                                </div>
                                <div class="MuiBox-root css-11udp8r">
                                  <div class="MuiBox-root css-1241y0n">
                                      <div class="MuiBox-root css-19el3v">
                                        <div class="MuiBox-root css-k008qs">
                                            <p class="MuiTypography-root MuiTypography-secondary14 MuiTypography-noWrap css-uefm4v" data-cy="apy">0.87<span class="MuiTypography-root MuiTypography-secondary14 css-d8aql2">%</span></p>
                                        </div>
                                        <div class="MuiBox-root css-1yxnkj0"></div>
                                      </div>
                                  </div>
                                </div>
                                <div class="MuiBox-root css-11udp8r">
                                  <div class="MuiBox-root css-gmuwbf">
                                      <div class="MuiBox-root css-1rzcn8q">
                                        <div class="MuiBox-root css-5wpzg3">
                                            <div class="MuiBox-root css-1do422x">
                                              <p class="MuiTypography-root MuiTypography-secondary12 css-1yhzaxq">Isolated</p>
                                              <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-nqvctb" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                  </svg>
                                              </svg>
                                            </div>
                                        </div>
                                      </div>
                                  </div>
                                </div>
                                <div class="MuiBox-root css-1xwkwbj"><button class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation Mui-disabled MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation css-moyn3y" tabindex="-1" type="button" >Supply</button><button class="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation css-uhikff" tabindex="0" type="button" id="supply-extra-button" aria-haspopup="true">...<span class="MuiTouchRipple-root css-w0pj6f"></span></button></div>
                            </div>
                            <div class="MuiBox-root css-1qm0evb" data-cy="dashboardSupplyListItem_CRVUSD">
                                <div class="MuiBox-root css-15czs8k">
                                  <a class="MuiTypography-root MuiTypography-description MuiTypography-noWrap MuiLink-root MuiLink-underlineNone css-17910yg" href="/reserve-overview/?underlyingAsset=0xf939e0a03fb07f59a73314e73794be0e57ac1b4e&amp;marketName=proto_mainnet_v3">
                                      <span class="material-icons notranslate MuiIcon-root MuiIcon-fontSizeLarge css-1ux336h" aria-hidden="true"><img src="https://app.aave.com/icons/tokens/crvusd.svg" width="100%" height="100%" alt="CRVUSD icon"></span>
                                      <p class="MuiTypography-root MuiTypography-subheader1 MuiTypography-noWrap css-mgqwsh" data-cy="assetName" aria-label="Curve.Fi USD Stablecoin (crvUSD)">crvUSD</p>
                                  </a>
                                </div>
                                <div class="MuiBox-root css-11udp8r">
                                  <div class="MuiBox-root css-u6v8er">
                                      <div class="MuiBox-root css-70qvj9">
                                        <p class="MuiTypography-root MuiTypography-secondary14 MuiTypography-noWrap css-1r4ptf4" data-cy="nativeAmount">0</p>
                                      </div>
                                  </div>
                                </div>
                                <div class="MuiBox-root css-11udp8r">
                                  <div class="MuiBox-root css-1241y0n">
                                      <div class="MuiBox-root css-19el3v">
                                        <div class="MuiBox-root css-k008qs">
                                            <p class="MuiTypography-root MuiTypography-secondary14 MuiTypography-noWrap css-uefm4v" data-cy="apy">3.75<span class="MuiTypography-root MuiTypography-secondary14 css-d8aql2">%</span></p>
                                        </div>
                                        <div class="MuiBox-root css-1yxnkj0"></div>
                                      </div>
                                  </div>
                                </div>
                                <div class="MuiBox-root css-11udp8r">
                                  <div class="MuiBox-root css-gmuwbf">
                                      <p class="MuiTypography-root MuiTypography-main14 css-zj82os">—</p>
                                  </div>
                                </div>
                                <div class="MuiBox-root css-1xwkwbj"><button class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation Mui-disabled MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation css-moyn3y" tabindex="-1" type="button" >Supply</button><button class="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation css-uhikff" tabindex="0" type="button" id="supply-extra-button" aria-haspopup="true">...<span class="MuiTouchRipple-root css-w0pj6f"></span></button></div>
                            </div>
                            <div class="MuiBox-root css-1qm0evb" data-cy="dashboardSupplyListItem_LDO">
                                <div class="MuiBox-root css-15czs8k">
                                  <a class="MuiTypography-root MuiTypography-description MuiTypography-noWrap MuiLink-root MuiLink-underlineNone css-17910yg" href="/reserve-overview/?underlyingAsset=0x5a98fcbea516cf06857215779fd812ca3bef1b32&amp;marketName=proto_mainnet_v3">
                                      <span class="material-icons notranslate MuiIcon-root MuiIcon-fontSizeLarge css-1ux336h" aria-hidden="true"><img src="https://app.aave.com/icons/tokens/ldo.svg" width="100%" height="100%" alt="LDO icon"></span>
                                      <p class="MuiTypography-root MuiTypography-subheader1 MuiTypography-noWrap css-mgqwsh" data-cy="assetName" aria-label="Lido DAO Token (LDO)">LDO</p>
                                  </a>
                                </div>
                                <div class="MuiBox-root css-11udp8r">
                                  <div class="MuiBox-root css-u6v8er">
                                      <div class="MuiBox-root css-70qvj9">
                                        <p class="MuiTypography-root MuiTypography-secondary14 MuiTypography-noWrap css-1r4ptf4" data-cy="nativeAmount">0</p>
                                      </div>
                                  </div>
                                </div>
                                <div class="MuiBox-root css-11udp8r">
                                  <div class="MuiBox-root css-1241y0n">
                                      <div class="MuiBox-root css-19el3v">
                                        <div class="MuiBox-root css-k008qs">
                                            <p class="MuiTypography-root MuiTypography-secondary14 MuiTypography-noWrap css-uefm4v" data-cy="apy"><span class="MuiTypography-root MuiTypography-secondary14 css-1th707o">&lt;</span>0.01<span class="MuiTypography-root MuiTypography-secondary14 css-d8aql2">%</span></p>
                                        </div>
                                        <div class="MuiBox-root css-1yxnkj0"></div>
                                      </div>
                                  </div>
                                </div>
                                <div class="MuiBox-root css-11udp8r">
                                  <div class="MuiBox-root css-gmuwbf">
                                      <div class="MuiBox-root css-1rzcn8q">
                                        <div class="MuiBox-root css-5wpzg3">
                                            <div class="MuiBox-root css-1do422x">
                                              <p class="MuiTypography-root MuiTypography-secondary12 css-1yhzaxq">Isolated</p>
                                              <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-nqvctb" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                  </svg>
                                              </svg>
                                            </div>
                                        </div>
                                      </div>
                                  </div>
                                </div>
                                <div class="MuiBox-root css-1xwkwbj"><button class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation Mui-disabled MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation css-moyn3y" tabindex="-1" type="button" >Supply</button><button class="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation css-uhikff" tabindex="0" type="button" id="supply-extra-button" aria-haspopup="true">...<span class="MuiTouchRipple-root css-w0pj6f"></span></button></div>
                            </div>
                            <div class="MuiBox-root css-1qm0evb" data-cy="dashboardSupplyListItem_RPL">
                                <div class="MuiBox-root css-15czs8k">
                                  <a class="MuiTypography-root MuiTypography-description MuiTypography-noWrap MuiLink-root MuiLink-underlineNone css-17910yg" href="/reserve-overview/?underlyingAsset=0xd33526068d116ce69f19a9ee46f0bd304f21a51f&amp;marketName=proto_mainnet_v3">
                                      <span class="material-icons notranslate MuiIcon-root MuiIcon-fontSizeLarge css-1ux336h" aria-hidden="true"><img src="https://app.aave.com/icons/tokens/rpl.svg" width="100%" height="100%" alt="RPL icon"></span>
                                      <p class="MuiTypography-root MuiTypography-subheader1 MuiTypography-noWrap css-mgqwsh" data-cy="assetName" aria-label="Rocket Pool Protocol (RPL)">RPL</p>
                                  </a>
                                </div>
                                <div class="MuiBox-root css-11udp8r">
                                  <div class="MuiBox-root css-u6v8er">
                                      <div class="MuiBox-root css-70qvj9">
                                        <p class="MuiTypography-root MuiTypography-secondary14 MuiTypography-noWrap css-1r4ptf4" data-cy="nativeAmount">0</p>
                                      </div>
                                  </div>
                                </div>
                                <div class="MuiBox-root css-11udp8r">
                                  <div class="MuiBox-root css-1241y0n">
                                      <div class="MuiBox-root css-19el3v">
                                        <div class="MuiBox-root css-k008qs">
                                            <p class="MuiTypography-root MuiTypography-secondary14 MuiTypography-noWrap css-uefm4v" data-cy="apy">1.24<span class="MuiTypography-root MuiTypography-secondary14 css-d8aql2">%</span></p>
                                        </div>
                                        <div class="MuiBox-root css-1yxnkj0"></div>
                                      </div>
                                  </div>
                                </div>
                                <div class="MuiBox-root css-11udp8r">
                                  <div class="MuiBox-root css-gmuwbf">
                                      <p class="MuiTypography-root MuiTypography-main14 css-zj82os">—</p>
                                  </div>
                                </div>
                                <div class="MuiBox-root css-1xwkwbj"><button class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation Mui-disabled MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation css-moyn3y" tabindex="-1" type="button" >Supply</button><button class="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation css-uhikff" tabindex="0" type="button" id="supply-extra-button" aria-haspopup="true">...<span class="MuiTouchRipple-root css-w0pj6f"></span></button></div>
                            </div>
                            <div class="MuiBox-root css-1qm0evb" data-cy="dashboardSupplyListItem_LUSD">
                                <div class="MuiBox-root css-15czs8k">
                                  <a class="MuiTypography-root MuiTypography-description MuiTypography-noWrap MuiLink-root MuiLink-underlineNone css-17910yg" href="/reserve-overview/?underlyingAsset=0x5f98805a4e8be255a32880fdec7f6728c6568ba0&amp;marketName=proto_mainnet_v3">
                                      <span class="material-icons notranslate MuiIcon-root MuiIcon-fontSizeLarge css-1ux336h" aria-hidden="true"><img src="https://app.aave.com/icons/tokens/lusd.svg" width="100%" height="100%" alt="LUSD icon"></span>
                                      <p class="MuiTypography-root MuiTypography-subheader1 MuiTypography-noWrap css-mgqwsh" data-cy="assetName" aria-label="LUSD Stablecoin (LUSD)">LUSD</p>
                                  </a>
                                </div>
                                <div class="MuiBox-root css-11udp8r">
                                  <div class="MuiBox-root css-u6v8er">
                                      <div class="MuiBox-root css-70qvj9">
                                        <p class="MuiTypography-root MuiTypography-secondary14 MuiTypography-noWrap css-1r4ptf4" data-cy="nativeAmount">0</p>
                                      </div>
                                  </div>
                                </div>
                                <div class="MuiBox-root css-11udp8r">
                                  <div class="MuiBox-root css-1241y0n">
                                      <div class="MuiBox-root css-19el3v">
                                        <div class="MuiBox-root css-k008qs">
                                            <p class="MuiTypography-root MuiTypography-secondary14 MuiTypography-noWrap css-uefm4v" data-cy="apy">3.49<span class="MuiTypography-root MuiTypography-secondary14 css-d8aql2">%</span></p>
                                        </div>
                                        <div class="MuiBox-root css-1yxnkj0"></div>
                                      </div>
                                  </div>
                                </div>
                                <div class="MuiBox-root css-11udp8r">
                                  <div class="MuiBox-root css-gmuwbf">
                                      <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-hqkm93" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                      </svg>
                                  </div>
                                </div>
                                <div class="MuiBox-root css-1xwkwbj"><button class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation Mui-disabled MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation css-moyn3y" tabindex="-1" type="button" >Supply</button><button class="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation css-uhikff" tabindex="0" type="button" id="supply-extra-button" aria-haspopup="true">...<span class="MuiTouchRipple-root css-w0pj6f"></span></button></div>
                            </div>
                            <div class="MuiBox-root css-1qm0evb" data-cy="dashboardSupplyListItem_SDAI">
                                <div class="MuiBox-root css-15czs8k">
                                  <a class="MuiTypography-root MuiTypography-description MuiTypography-noWrap MuiLink-root MuiLink-underlineNone css-17910yg" href="/reserve-overview/?underlyingAsset=0x83f20f44975d03b1b09e64809b757c47f942beea&amp;marketName=proto_mainnet_v3">
                                      <span class="material-icons notranslate MuiIcon-root MuiIcon-fontSizeLarge css-1ux336h" aria-hidden="true"><img src="https://app.aave.com/icons/tokens/sdai.svg" width="100%" height="100%" alt="SDAI icon"></span>
                                      <p class="MuiTypography-root MuiTypography-subheader1 MuiTypography-noWrap css-mgqwsh" data-cy="assetName" aria-label="Savings Dai (sDAI)">sDAI</p>
                                  </a>
                                </div>
                                <div class="MuiBox-root css-11udp8r">
                                  <div class="MuiBox-root css-u6v8er">
                                      <div class="MuiBox-root css-70qvj9">
                                        <p class="MuiTypography-root MuiTypography-secondary14 MuiTypography-noWrap css-1r4ptf4" data-cy="nativeAmount">0</p>
                                      </div>
                                  </div>
                                </div>
                                <div class="MuiBox-root css-11udp8r">
                                  <div class="MuiBox-root css-1241y0n">
                                      <div class="MuiBox-root css-19el3v">
                                        <div class="MuiBox-root css-k008qs">
                                            <p class="MuiTypography-root MuiTypography-secondary14 MuiTypography-noWrap css-uefm4v" data-cy="apy">0<span class="MuiTypography-root MuiTypography-secondary14 css-d8aql2">%</span></p>
                                        </div>
                                        <div class="MuiBox-root css-1yxnkj0"></div>
                                      </div>
                                  </div>
                                </div>
                                <div class="MuiBox-root css-11udp8r">
                                  <div class="MuiBox-root css-gmuwbf">
                                      <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-hqkm93" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                      </svg>
                                  </div>
                                </div>
                                <div class="MuiBox-root css-1xwkwbj"><button class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation Mui-disabled MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation css-moyn3y" tabindex="-1" type="button" >Supply</button><button class="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation css-uhikff" tabindex="0" type="button" id="supply-extra-button" aria-haspopup="true">...<span class="MuiTouchRipple-root css-w0pj6f"></span></button></div>
                            </div>
    

                      </div>
                      <div class="MuiBox-root css-13o7eu2 show-on-mobile" v-show="isfOpen">
   <div class="MuiBox-root css-0">
      <hr class="MuiDivider-root MuiDivider-fullWidth css-1301pmg">
      <div class="MuiBox-root css-1qo1gdh">
         <div class="MuiBox-root css-111boms">
            <a class="MuiTypography-root MuiTypography-description MuiLink-root MuiLink-underlineNone css-ekhp5c" href="/reserve-overview/?underlyingAsset=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82&amp;marketName=proto_bnb_v3">
               <span class="material-icons notranslate MuiIcon-root MuiIcon-fontSizeMedium css-188b5or" aria-hidden="true"><img src="https://app.aave.com/icons/tokens/cake.svg" width="100%" height="100%" alt="CAKE icon"></span>
               <div class="MuiBox-root css-1isemmb">
                  <h4 class="MuiTypography-root MuiTypography-h4 css-cg4wfg">PancakeSwap Token</h4>
                  <div class="MuiBox-root css-70qvj9">
                     <p class="MuiTypography-root MuiTypography-subheader2 css-mtelhg">Cake</p>
                  </div>
               </div>
            </a>
         </div>
         <div class="MuiBox-root css-xrt28o">
            <div class="MuiTypography-root MuiTypography-description css-181zdd">Supply balance</div>
            <div class="MuiBox-root css-qfdd9t">
               <div class="MuiBox-root css-17m7cz6">
                  <p class="MuiTypography-root MuiTypography-secondary14 MuiTypography-noWrap css-dlrh6v">0</p>
               </div>
            </div>
         </div>
         <div class="MuiBox-root css-xrt28o">
            <div class="MuiTypography-root MuiTypography-description css-181zdd">Supply APY</div>
            <div class="MuiBox-root css-19el3v">
               <div class="MuiBox-root css-k008qs">
                  <p class="MuiTypography-root MuiTypography-secondary14 MuiTypography-noWrap css-uefm4v" data-cy="apy">0.38<span class="MuiTypography-root MuiTypography-secondary14 css-d8aql2">%</span></p>
               </div>
               <div class="MuiBox-root css-rnjm1y"></div>
            </div>
         </div>
         <div class="MuiBox-root css-xrt28o">
            <div class="MuiTypography-root MuiTypography-description css-181zdd">Can be collateral</div>
            <div class="MuiBox-root css-gmuwbf">
               <div class="MuiBox-root css-1rzcn8q">
                  <div class="MuiBox-root css-5wpzg3">
                     <div class="MuiBox-root css-1do422x">
                        <p class="MuiTypography-root MuiTypography-secondary12 css-1yhzaxq">Isolated</p>
                        <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-nqvctb" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                           </svg>
                        </svg>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="MuiBox-root css-16rgc74"><button class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth Mui-disabled MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth css-23aapr" tabindex="-1" type="button" disabled="">Supply</button><a class="MuiTypography-root MuiTypography-description MuiLink-root MuiLink-underlineNone MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth css-1haiorh" tabindex="0" href="/reserve-overview/?underlyingAsset=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82&amp;marketName=proto_bnb_v3">Details<span class="MuiTouchRipple-root css-w0pj6f"></span></a></div>
      </div>
   </div>
   <div class="MuiBox-root css-0">
      <hr class="MuiDivider-root MuiDivider-fullWidth css-1301pmg">
      <div class="MuiBox-root css-1qo1gdh">
         <div class="MuiBox-root css-111boms">
            <a class="MuiTypography-root MuiTypography-description MuiLink-root MuiLink-underlineNone css-ekhp5c" href="/reserve-overview/?underlyingAsset=0x26c5e01524d2e6280a48f2c50ff6de7e52e9611c&amp;marketName=proto_bnb_v3">
               <span class="material-icons notranslate MuiIcon-root MuiIcon-fontSizeMedium css-188b5or" aria-hidden="true"><img src="https://app.aave.com/icons/tokens/wsteth.svg" width="100%" height="100%" alt="WSTETH icon"></span>
               <div class="MuiBox-root css-1isemmb">
                  <h4 class="MuiTypography-root MuiTypography-h4 css-cg4wfg">Wrapped liquid staked Ether 2.0</h4>
                  <div class="MuiBox-root css-70qvj9">
                     <p class="MuiTypography-root MuiTypography-subheader2 css-mtelhg">wstETH</p>
                  </div>
               </div>
            </a>
         </div>
         <div class="MuiBox-root css-xrt28o">
            <div class="MuiTypography-root MuiTypography-description css-181zdd">Supply balance</div>
            <div class="MuiBox-root css-qfdd9t">
               <div class="MuiBox-root css-17m7cz6">
                  <p class="MuiTypography-root MuiTypography-secondary14 MuiTypography-noWrap css-dlrh6v">0</p>
               </div>
            </div>
         </div>
         <div class="MuiBox-root css-xrt28o">
            <div class="MuiTypography-root MuiTypography-description css-181zdd">Supply APY</div>
            <div class="MuiBox-root css-19el3v">
               <div class="MuiBox-root css-k008qs">
                  <p class="MuiTypography-root MuiTypography-secondary14 MuiTypography-noWrap css-uefm4v" data-cy="apy">0.03<span class="MuiTypography-root MuiTypography-secondary14 css-d8aql2">%</span></p>
               </div>
               <div class="MuiBox-root css-rnjm1y"></div>
            </div>
         </div>
         <div class="MuiBox-root css-xrt28o">
            <div class="MuiTypography-root MuiTypography-description css-181zdd">Can be collateral</div>
            <div class="MuiBox-root css-gmuwbf">
               <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-hqkm93" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path>
                  </svg>
               </svg>
            </div>
         </div>
         <div class="MuiBox-root css-16rgc74"><button class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth Mui-disabled MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth css-23aapr" tabindex="-1" type="button" disabled="">Supply</button><a class="MuiTypography-root MuiTypography-description MuiLink-root MuiLink-underlineNone MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth css-1haiorh" tabindex="0" href="/reserve-overview/?underlyingAsset=0x26c5e01524d2e6280a48f2c50ff6de7e52e9611c&amp;marketName=proto_bnb_v3">Details<span class="MuiTouchRipple-root css-w0pj6f"></span></a></div>
      </div>
   </div>
   <div class="MuiBox-root css-0">
      <hr class="MuiDivider-root MuiDivider-fullWidth css-1301pmg">
      <div class="MuiBox-root css-1qo1gdh">
         <div class="MuiBox-root css-111boms">
            <a class="MuiTypography-root MuiTypography-description MuiLink-root MuiLink-underlineNone css-ekhp5c" href="/reserve-overview/?underlyingAsset=0xc5f0f7b66764f6ec8c8dff7ba683102295e16409&amp;marketName=proto_bnb_v3">
               <span class="material-icons notranslate MuiIcon-root MuiIcon-fontSizeMedium css-188b5or" aria-hidden="true"><img src="https://app.aave.com/icons/tokens/fdusd.svg" width="100%" height="100%" alt="FDUSD icon"></span>
               <div class="MuiBox-root css-1isemmb">
                  <h4 class="MuiTypography-root MuiTypography-h4 css-cg4wfg">First Digital USD</h4>
                  <div class="MuiBox-root css-70qvj9">
                     <p class="MuiTypography-root MuiTypography-subheader2 css-mtelhg">FDUSD</p>
                  </div>
               </div>
            </a>
         </div>
         <div class="MuiBox-root css-xrt28o">
            <div class="MuiTypography-root MuiTypography-description css-181zdd">Supply balance</div>
            <div class="MuiBox-root css-qfdd9t">
               <div class="MuiBox-root css-17m7cz6">
                  <p class="MuiTypography-root MuiTypography-secondary14 MuiTypography-noWrap css-dlrh6v">0</p>
               </div>
            </div>
         </div>
         <div class="MuiBox-root css-xrt28o">
            <div class="MuiTypography-root MuiTypography-description css-181zdd">Supply APY</div>
            <div class="MuiBox-root css-19el3v">
               <div class="MuiBox-root css-k008qs">
                  <p class="MuiTypography-root MuiTypography-secondary14 MuiTypography-noWrap css-uefm4v" data-cy="apy">3.44<span class="MuiTypography-root MuiTypography-secondary14 css-d8aql2">%</span></p>
               </div>
               <div class="MuiBox-root css-rnjm1y"></div>
            </div>
         </div>
         <div class="MuiBox-root css-xrt28o">
            <div class="MuiTypography-root MuiTypography-description css-181zdd">Can be collateral</div>
            <div class="MuiBox-root css-gmuwbf">
               <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-hqkm93" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path>
                  </svg>
               </svg>
            </div>
         </div>
         <div class="MuiBox-root css-16rgc74"><button class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth Mui-disabled MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth css-23aapr" tabindex="-1" type="button" disabled="">Supply</button><a class="MuiTypography-root MuiTypography-description MuiLink-root MuiLink-underlineNone MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth css-1haiorh" tabindex="0" href="/reserve-overview/?underlyingAsset=0xc5f0f7b66764f6ec8c8dff7ba683102295e16409&amp;marketName=proto_bnb_v3">Details<span class="MuiTouchRipple-root css-w0pj6f"></span></a></div>
      </div>
   </div>
   <div class="MuiBox-root css-0">
      <hr class="MuiDivider-root MuiDivider-fullWidth css-1301pmg">
      <div class="MuiBox-root css-1qo1gdh">
         <div class="MuiBox-root css-111boms">
            <a class="MuiTypography-root MuiTypography-description MuiLink-root MuiLink-underlineNone css-ekhp5c" href="/reserve-overview/?underlyingAsset=0x2170ed0880ac9a755fd29b2688956bd959f933f8&amp;marketName=proto_bnb_v3">
               <span class="material-icons notranslate MuiIcon-root MuiIcon-fontSizeMedium css-188b5or" aria-hidden="true"><img src="https://app.aave.com/icons/tokens/eth.svg" width="100%" height="100%" alt="ETH icon"></span>
               <div class="MuiBox-root css-1isemmb">
                  <h4 class="MuiTypography-root MuiTypography-h4 css-cg4wfg">Ethereum</h4>
                  <div class="MuiBox-root css-70qvj9">
                     <p class="MuiTypography-root MuiTypography-subheader2 css-mtelhg">ETH</p>
                  </div>
               </div>
            </a>
         </div>
         <div class="MuiBox-root css-xrt28o">
            <div class="MuiTypography-root MuiTypography-description css-181zdd">Supply balance</div>
            <div class="MuiBox-root css-qfdd9t">
               <div class="MuiBox-root css-17m7cz6">
                  <p class="MuiTypography-root MuiTypography-secondary14 MuiTypography-noWrap css-dlrh6v">0</p>
               </div>
            </div>
         </div>
         <div class="MuiBox-root css-xrt28o">
            <div class="MuiTypography-root MuiTypography-description css-181zdd">Supply APY</div>
            <div class="MuiBox-root css-19el3v">
               <div class="MuiBox-root css-k008qs">
                  <p class="MuiTypography-root MuiTypography-secondary14 MuiTypography-noWrap css-uefm4v" data-cy="apy">0.31<span class="MuiTypography-root MuiTypography-secondary14 css-d8aql2">%</span></p>
               </div>
               <div class="MuiBox-root css-rnjm1y"></div>
            </div>
         </div>
         <div class="MuiBox-root css-xrt28o">
            <div class="MuiTypography-root MuiTypography-description css-181zdd">Can be collateral</div>
            <div class="MuiBox-root css-gmuwbf">
               <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-hqkm93" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path>
                  </svg>
               </svg>
            </div>
         </div>
         <div class="MuiBox-root css-16rgc74"><button class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth Mui-disabled MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth css-23aapr" tabindex="-1" type="button" disabled="">Supply</button><a class="MuiTypography-root MuiTypography-description MuiLink-root MuiLink-underlineNone MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth css-1haiorh" tabindex="0" href="/reserve-overview/?underlyingAsset=0x2170ed0880ac9a755fd29b2688956bd959f933f8&amp;marketName=proto_bnb_v3">Details<span class="MuiTouchRipple-root css-w0pj6f"></span></a></div>
      </div>
   </div>
   <div class="MuiBox-root css-0">
      <hr class="MuiDivider-root MuiDivider-fullWidth css-1301pmg">
      <div class="MuiBox-root css-1qo1gdh">
         <div class="MuiBox-root css-111boms">
            <a class="MuiTypography-root MuiTypography-description MuiLink-root MuiLink-underlineNone css-ekhp5c" href="/reserve-overview/?underlyingAsset=0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d&amp;marketName=proto_bnb_v3">
               <span class="material-icons notranslate MuiIcon-root MuiIcon-fontSizeMedium css-188b5or" aria-hidden="true"><img src="https://app.aave.com/icons/tokens/usdc.svg" width="100%" height="100%" alt="USDC icon"></span>
               <div class="MuiBox-root css-1isemmb">
                  <h4 class="MuiTypography-root MuiTypography-h4 css-cg4wfg">USD Coin</h4>
                  <div class="MuiBox-root css-70qvj9">
                     <p class="MuiTypography-root MuiTypography-subheader2 css-mtelhg">USDC</p>
                  </div>
               </div>
            </a>
         </div>
         <div class="MuiBox-root css-xrt28o">
            <div class="MuiTypography-root MuiTypography-description css-181zdd">Supply balance</div>
            <div class="MuiBox-root css-qfdd9t">
               <div class="MuiBox-root css-17m7cz6">
                  <p class="MuiTypography-root MuiTypography-secondary14 MuiTypography-noWrap css-dlrh6v">0</p>
               </div>
            </div>
         </div>
         <div class="MuiBox-root css-xrt28o">
            <div class="MuiTypography-root MuiTypography-description css-181zdd">Supply APY</div>
            <div class="MuiBox-root css-19el3v">
               <div class="MuiBox-root css-k008qs">
                  <p class="MuiTypography-root MuiTypography-secondary14 MuiTypography-noWrap css-uefm4v" data-cy="apy">4.17<span class="MuiTypography-root MuiTypography-secondary14 css-d8aql2">%</span></p>
               </div>
               <div class="MuiBox-root css-rnjm1y"></div>
            </div>
         </div>
         <div class="MuiBox-root css-xrt28o">
            <div class="MuiTypography-root MuiTypography-description css-181zdd">Can be collateral</div>
            <div class="MuiBox-root css-gmuwbf">
               <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-hqkm93" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path>
                  </svg>
               </svg>
            </div>
         </div>
         <div class="MuiBox-root css-16rgc74"><button class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth Mui-disabled MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth css-23aapr" tabindex="-1" type="button" disabled="">Supply</button><a class="MuiTypography-root MuiTypography-description MuiLink-root MuiLink-underlineNone MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth css-1haiorh" tabindex="0" href="/reserve-overview/?underlyingAsset=0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d&amp;marketName=proto_bnb_v3">Details<span class="MuiTouchRipple-root css-w0pj6f"></span></a></div>
      </div>
   </div>
   <div class="MuiBox-root css-0">
      <hr class="MuiDivider-root MuiDivider-fullWidth css-1301pmg">
      <div class="MuiBox-root css-1qo1gdh">
         <div class="MuiBox-root css-111boms">
            <a class="MuiTypography-root MuiTypography-description MuiLink-root MuiLink-underlineNone css-ekhp5c" href="/reserve-overview/?underlyingAsset=0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c&amp;marketName=proto_bnb_v3">
               <span class="material-icons notranslate MuiIcon-root MuiIcon-fontSizeMedium css-188b5or" aria-hidden="true"><img src="https://app.aave.com/icons/tokens/wbnb.svg" width="100%" height="100%" alt="WBNB icon"></span>
               <div class="MuiBox-root css-1isemmb">
                  <h4 class="MuiTypography-root MuiTypography-h4 css-cg4wfg">Wrapped BNB</h4>
                  <div class="MuiBox-root css-70qvj9">
                     <p class="MuiTypography-root MuiTypography-subheader2 css-mtelhg">WBNB</p>
                  </div>
               </div>
            </a>
         </div>
         <div class="MuiBox-root css-xrt28o">
            <div class="MuiTypography-root MuiTypography-description css-181zdd">Supply balance</div>
            <div class="MuiBox-root css-qfdd9t">
               <div class="MuiBox-root css-17m7cz6">
                  <p class="MuiTypography-root MuiTypography-secondary14 MuiTypography-noWrap css-dlrh6v">0</p>
                  <div class="MuiBox-root css-d4400k">
                     <div class="MuiBox-root css-ulme3a">
                        <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-17zttyw" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                           </svg>
                        </svg>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="MuiBox-root css-xrt28o">
            <div class="MuiTypography-root MuiTypography-description css-181zdd">Supply APY</div>
            <div class="MuiBox-root css-19el3v">
               <div class="MuiBox-root css-k008qs">
                  <p class="MuiTypography-root MuiTypography-secondary14 MuiTypography-noWrap css-uefm4v" data-cy="apy">0.24<span class="MuiTypography-root MuiTypography-secondary14 css-d8aql2">%</span></p>
               </div>
               <div class="MuiBox-root css-rnjm1y"></div>
            </div>
         </div>
         <div class="MuiBox-root css-xrt28o">
            <div class="MuiTypography-root MuiTypography-description css-181zdd">Can be collateral</div>
            <div class="MuiBox-root css-gmuwbf">
               <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-hqkm93" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path>
                  </svg>
               </svg>
            </div>
         </div>
         <div class="MuiBox-root css-16rgc74"><button class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth Mui-disabled MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth css-23aapr" tabindex="-1" type="button" disabled="">Supply</button><a class="MuiTypography-root MuiTypography-description MuiLink-root MuiLink-underlineNone MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth css-1haiorh" tabindex="0" href="/reserve-overview/?underlyingAsset=0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c&amp;marketName=proto_bnb_v3">Details<span class="MuiTouchRipple-root css-w0pj6f"></span></a></div>
      </div>
   </div>
   <div class="MuiBox-root css-0">
      <hr class="MuiDivider-root MuiDivider-fullWidth css-1301pmg">
      <div class="MuiBox-root css-1qo1gdh">
         <div class="MuiBox-root css-111boms">
            <a class="MuiTypography-root MuiTypography-description MuiLink-root MuiLink-underlineNone css-ekhp5c" href="/reserve-overview/?underlyingAsset=0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee&amp;marketName=proto_bnb_v3">
               <span class="material-icons notranslate MuiIcon-root MuiIcon-fontSizeMedium css-188b5or" aria-hidden="true"><img src="https://app.aave.com/icons/tokens/bnb.svg" width="100%" height="100%" alt="BNB icon"></span>
               <div class="MuiBox-root css-1isemmb">
                  <h4 class="MuiTypography-root MuiTypography-h4 css-cg4wfg">BNB</h4>
                  <div class="MuiBox-root css-70qvj9">
                     <p class="MuiTypography-root MuiTypography-subheader2 css-mtelhg">BNB</p>
                  </div>
               </div>
            </a>
         </div>
         <div class="MuiBox-root css-xrt28o">
            <div class="MuiTypography-root MuiTypography-description css-181zdd">Supply balance</div>
            <div class="MuiBox-root css-qfdd9t">
               <div class="MuiBox-root css-17m7cz6">
                  <p class="MuiTypography-root MuiTypography-secondary14 MuiTypography-noWrap css-dlrh6v">0</p>
                  <div class="MuiBox-root css-d4400k">
                     <div class="MuiBox-root css-ulme3a">
                        <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-17zttyw" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                           </svg>
                        </svg>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="MuiBox-root css-xrt28o">
            <div class="MuiTypography-root MuiTypography-description css-181zdd">Supply APY</div>
            <div class="MuiBox-root css-19el3v">
               <div class="MuiBox-root css-k008qs">
                  <p class="MuiTypography-root MuiTypography-secondary14 MuiTypography-noWrap css-uefm4v" data-cy="apy">0.24<span class="MuiTypography-root MuiTypography-secondary14 css-d8aql2">%</span></p>
               </div>
               <div class="MuiBox-root css-rnjm1y"></div>
            </div>
         </div>
         <div class="MuiBox-root css-xrt28o">
            <div class="MuiTypography-root MuiTypography-description css-181zdd">Can be collateral</div>
            <div class="MuiBox-root css-gmuwbf">
               <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-hqkm93" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path>
                  </svg>
               </svg>
            </div>
         </div>
         <div class="MuiBox-root css-16rgc74"><button class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth Mui-disabled MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth css-23aapr" tabindex="-1" type="button" disabled="">Supply</button><a class="MuiTypography-root MuiTypography-description MuiLink-root MuiLink-underlineNone MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth css-1haiorh" tabindex="0" href="/reserve-overview/?underlyingAsset=0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c&amp;marketName=proto_bnb_v3">Details<span class="MuiTouchRipple-root css-w0pj6f"></span></a></div>
      </div>
   </div>
   <div class="MuiBox-root css-0">
      <hr class="MuiDivider-root MuiDivider-fullWidth css-1301pmg">
      <div class="MuiBox-root css-1qo1gdh">
         <div class="MuiBox-root css-111boms">
            <a class="MuiTypography-root MuiTypography-description MuiLink-root MuiLink-underlineNone css-ekhp5c" href="/reserve-overview/?underlyingAsset=0x55d398326f99059ff775485246999027b3197955&amp;marketName=proto_bnb_v3">
               <span class="material-icons notranslate MuiIcon-root MuiIcon-fontSizeMedium css-188b5or" aria-hidden="true"><img src="https://app.aave.com/icons/tokens/usdt.svg" width="100%" height="100%" alt="USDT icon"></span>
               <div class="MuiBox-root css-1isemmb">
                  <h4 class="MuiTypography-root MuiTypography-h4 css-cg4wfg">Tether</h4>
                  <div class="MuiBox-root css-70qvj9">
                     <p class="MuiTypography-root MuiTypography-subheader2 css-mtelhg">USDT</p>
                  </div>
               </div>
            </a>
         </div>
         <div class="MuiBox-root css-xrt28o">
            <div class="MuiTypography-root MuiTypography-description css-181zdd">Supply balance</div>
            <div class="MuiBox-root css-qfdd9t">
               <div class="MuiBox-root css-17m7cz6">
                  <p class="MuiTypography-root MuiTypography-secondary14 MuiTypography-noWrap css-dlrh6v">0</p>
               </div>
            </div>
         </div>
         <div class="MuiBox-root css-xrt28o">
            <div class="MuiTypography-root MuiTypography-description css-181zdd">Supply APY</div>
            <div class="MuiBox-root css-19el3v">
               <div class="MuiBox-root css-k008qs">
                  <p class="MuiTypography-root MuiTypography-secondary14 MuiTypography-noWrap css-uefm4v" data-cy="apy">4.10<span class="MuiTypography-root MuiTypography-secondary14 css-d8aql2">%</span></p>
               </div>
               <div class="MuiBox-root css-rnjm1y"></div>
            </div>
         </div>
         <div class="MuiBox-root css-xrt28o">
            <div class="MuiTypography-root MuiTypography-description css-181zdd">Can be collateral</div>
            <div class="MuiBox-root css-gmuwbf">
               <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-hqkm93" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path>
                  </svg>
               </svg>
            </div>
         </div>
         <div class="MuiBox-root css-16rgc74"><button class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth Mui-disabled MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth css-23aapr" tabindex="-1" type="button" disabled="">Supply</button><a class="MuiTypography-root MuiTypography-description MuiLink-root MuiLink-underlineNone MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth css-1haiorh" tabindex="0" href="/reserve-overview/?underlyingAsset=0x55d398326f99059ff775485246999027b3197955&amp;marketName=proto_bnb_v3">Details<span class="MuiTouchRipple-root css-w0pj6f"></span></a></div>
      </div>
   </div>
   <div class="MuiBox-root css-0">
      <hr class="MuiDivider-root MuiDivider-fullWidth css-1301pmg">
      <div class="MuiBox-root css-1qo1gdh">
         <div class="MuiBox-root css-111boms">
            <a class="MuiTypography-root MuiTypography-description MuiLink-root MuiLink-underlineNone css-ekhp5c" href="/reserve-overview/?underlyingAsset=0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c&amp;marketName=proto_bnb_v3">
               <span class="material-icons notranslate MuiIcon-root MuiIcon-fontSizeMedium css-188b5or" aria-hidden="true"><img src="https://app.aave.com/icons/tokens/btc.svg" width="100%" height="100%" alt="btc icon"></span>
               <div class="MuiBox-root css-1isemmb">
                  <h4 class="MuiTypography-root MuiTypography-h4 css-cg4wfg">BTCB Token</h4>
                  <div class="MuiBox-root css-70qvj9">
                     <p class="MuiTypography-root MuiTypography-subheader2 css-mtelhg">BTCB</p>
                  </div>
               </div>
            </a>
         </div>
         <div class="MuiBox-root css-xrt28o">
            <div class="MuiTypography-root MuiTypography-description css-181zdd">Supply balance</div>
            <div class="MuiBox-root css-qfdd9t">
               <div class="MuiBox-root css-17m7cz6">
                  <p class="MuiTypography-root MuiTypography-secondary14 MuiTypography-noWrap css-dlrh6v">0</p>
               </div>
            </div>
         </div>
         <div class="MuiBox-root css-xrt28o">
            <div class="MuiTypography-root MuiTypography-description css-181zdd">Supply APY</div>
            <div class="MuiBox-root css-19el3v">
               <div class="MuiBox-root css-k008qs">
                  <p class="MuiTypography-root MuiTypography-secondary14 MuiTypography-noWrap css-uefm4v" data-cy="apy"><span class="MuiTypography-root MuiTypography-secondary14 css-1th707o">&lt;</span>0.01<span class="MuiTypography-root MuiTypography-secondary14 css-d8aql2">%</span></p>
               </div>
               <div class="MuiBox-root css-rnjm1y"></div>
            </div>
         </div>
         <div class="MuiBox-root css-xrt28o">
            <div class="MuiTypography-root MuiTypography-description css-181zdd">Can be collateral</div>
            <div class="MuiBox-root css-gmuwbf">
               <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-hqkm93" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path>
                  </svg>
               </svg>
            </div>
         </div>
         <div class="MuiBox-root css-16rgc74"><button class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth Mui-disabled MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth css-23aapr" tabindex="-1" type="button" disabled="">Supply</button><a class="MuiTypography-root MuiTypography-description MuiLink-root MuiLink-underlineNone MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth css-1haiorh" tabindex="0" href="/reserve-overview/?underlyingAsset=0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c&amp;marketName=proto_bnb_v3">Details<span class="MuiTouchRipple-root css-w0pj6f"></span></a></div>
      </div>
   </div>
</div>


                    </div>
                </div>

                <div class="MuiBox-root css-1wbia9h">
                  
                <div class="MuiBox-root css-mddclq">
                    <a class="MuiButtonBase-root MuiButton-root MuiButton-surface MuiButton-surfacePrimary MuiButton-sizeSmall MuiButton-surfaceSizeSmall MuiButton-colorPrimary MuiButton-disableElevation MuiButton-root MuiButton-surface MuiButton-surfacePrimary MuiButton-sizeSmall MuiButton-surfaceSizeSmall MuiButton-colorPrimary MuiButton-disableElevation css-kw8qku show-on-desktop" tabindex="0" role="button">View Transactions<span class="MuiTouchRipple-root css-w0pj6f"></span></a></div>
                      
                      <div class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 css-133srx4">
                          <div class="MuiBox-root css-19zr2gl">
                            <div class="MuiBox-root css-iwds49">
                                <div class="MuiTypography-root MuiTypography-h3 css-upncnh">Your borrows</div>
                                <div class="MuiBox-root css-18biwo">
                                  <p class="MuiTypography-root MuiTypography-description css-ykfiyn">E-Mode</p>
                                  <button class="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeSmall MuiButton-outlinedSizeSmall MuiButton-colorPrimary MuiButton-disableElevation MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeSmall MuiButton-outlinedSizeSmall MuiButton-colorPrimary MuiButton-disableElevation css-1tyyx5" tabindex="0" type="button" data-cy="emode-open">
                                      <div class="MuiBox-root css-k6v5ma">
                                        <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1vxbxc4" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                              <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path>
                                            </svg>
                                        </svg>
                                        <p class="MuiTypography-root MuiTypography-buttonS css-5bxqbt">Disabled</p>
                                        <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1mwg2jh" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                              <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path>
                                            </svg>
                                        </svg>
                                      </div>
                                      <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                  </button>
                                </div>
                            </div>
                          </div>
                          <div class="MuiBox-root css-1dm56o2"></div>
                          <div class="MuiBox-root css-13o7eu2">
                            <div class="MuiBox-root css-1xifpgy">
                              <div class="MuiBox-root css-13o7eu2 show-on-desktop">
                                  <div class="MuiBox-root css-1wsmwia">
                                      <div class="MuiBox-root css-15czs8k">
                                        <div class="MuiTypography-root MuiTypography-subheader2 MuiTypography-noWrap css-18phtf6">
                                            Assets
                                            <div class="MuiBox-root css-14dkifd"><span class="MuiBox-root css-1hf8ilx"></span><span class="MuiBox-root css-1ojixww"></span></div>
                                        </div>
                                      </div>
                                      <div class="MuiBox-root css-11udp8r">
                                        <div class="MuiTypography-root MuiTypography-subheader2 MuiTypography-noWrap css-18phtf6">
                                            Debt
                                            <div class="MuiBox-root css-14dkifd"><span class="MuiBox-root css-1hf8ilx"></span><span class="MuiBox-root css-1ojixww"></span></div>
                                        </div>
                                      </div>
                                      <div class="MuiBox-root css-11udp8r">
                                        <div class="MuiTypography-root MuiTypography-subheader2 MuiTypography-noWrap css-18phtf6">
                                            APY
                                            <div class="MuiBox-root css-14dkifd"><span class="MuiBox-root css-1hf8ilx"></span><span class="MuiBox-root css-1ojixww"></span></div>
                                        </div>
                                      </div>
                                      
                                      <div class="MuiBox-root css-1xwkwbj"></div>
                                  </div>
                                  <div class="MuiBox-root css-1qm0evb" data-cy="dashboardSupplyListItem_1INCH">
                                      <div class="MuiBox-root css-15czs8k">
                                        <a class="MuiTypography-root MuiTypography-description MuiTypography-noWrap MuiLink-root MuiLink-underlineNone css-17910yg" href="/reserve-overview/?underlyingAsset=0x111111111117dc0aa78b770fa6a738034120c302&amp;marketName=proto_mainnet_v3">
                                            <span class="material-icons notranslate MuiIcon-root MuiIcon-fontSizeLarge css-1ux336h" aria-hidden="true"><img src="https://app.aave.com/icons/tokens/1inch.svg" width="100%" height="100%" alt="1INCH icon"></span>
                                            <p class="MuiTypography-root MuiTypography-subheader1 MuiTypography-noWrap css-mgqwsh" data-cy="assetName" aria-label="1inch Network (1INCH)">1INCH</p>
                                        </a>
                                      </div>
                                      
                                      <div class="MuiBox-root css-11udp8r">
                                        <div class="MuiBox-root css-1241y0n">
                                            <div class="MuiBox-root css-19el3v">
                                              <div class="MuiBox-root css-k008qs">
                                                  <p class="MuiTypography-root MuiTypography-secondary14 MuiTypography-noWrap css-uefm4v" data-cy="apy">10<span class="MuiTypography-root MuiTypography-secondary14 css-d8aql2">%</span></p>
                                              </div>
                                              <div class="MuiBox-root css-1yxnkj0"></div>
                                            </div>
                                        </div>
                                      </div>
                                      <div class="MuiBox-root css-11udp8r">
                                        <div class="MuiBox-root css-1241y0n">
                                            <div class="MuiBox-root css-19el3v">
                                              <div class="MuiBox-root css-k008qs">
                                                  <p class="MuiTypography-root MuiTypography-secondary14 MuiTypography-noWrap css-uefm4v" data-cy="apy">0.57<span class="MuiTypography-root MuiTypography-secondary14 css-d8aql2">%</span></p>
                                              </div>
                                              <div class="MuiBox-root css-1yxnkj0"></div>
                                            </div>
                                        </div>
                                      </div>
                                      
                                      <div class="MuiBox-root css-1xwkwbj"><button class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation Mui-disabled MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation css-moyn3y" tabindex="-1" type="button" >Supply</button><button class="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation css-uhikff" tabindex="0" type="button" id="supply-extra-button" aria-haspopup="true">...<span class="MuiTouchRipple-root css-w0pj6f"></span></button></div>
                                  </div>
                              </div>
                              <div class="MuiBox-root css-13o7eu2 show-on-mobile">
                                      <div class="MuiBox-root css-0">
                                          <hr class="MuiDivider-root MuiDivider-fullWidth css-1301pmg">
                                          <div class="MuiBox-root css-1qo1gdh">
                                            <div class="MuiBox-root css-111boms">
                                                <a class="MuiTypography-root MuiTypography-description MuiLink-root MuiLink-underlineNone css-ekhp5c" href="/reserve-overview/?underlyingAsset=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82&amp;marketName=proto_bnb_v3">
                                                  <span class="material-icons notranslate MuiIcon-root MuiIcon-fontSizeMedium css-188b5or" aria-hidden="true"><img src="https://app.aave.com/icons/tokens/cake.svg" width="100%" height="100%" alt="CAKE icon"></span>
                                                  <div class="MuiBox-root css-1isemmb">
                                                      <h4 class="MuiTypography-root MuiTypography-h4 css-cg4wfg">PancakeSwap Token</h4>
                                                      <div class="MuiBox-root css-70qvj9">
                                                        <p class="MuiTypography-root MuiTypography-subheader2 css-mtelhg">Cake</p>
                                                      </div>
                                                  </div>
                                                </a>
                                            </div>
                                            <div class="MuiBox-root css-xrt28o">
                                                <div class="MuiTypography-root MuiTypography-description css-181zdd">Supply balance</div>
                                                <div class="MuiBox-root css-qfdd9t">
                                                  <div class="MuiBox-root css-17m7cz6">
                                                      <p class="MuiTypography-root MuiTypography-secondary14 MuiTypography-noWrap css-dlrh6v">0</p>
                                                  </div>
                                                </div>
                                            </div>
                                            <div class="MuiBox-root css-xrt28o">
                                                <div class="MuiTypography-root MuiTypography-description css-181zdd">Supply APY</div>
                                                <div class="MuiBox-root css-19el3v">
                                                  <div class="MuiBox-root css-k008qs">
                                                      <p class="MuiTypography-root MuiTypography-secondary14 MuiTypography-noWrap css-uefm4v" data-cy="apy">0.38<span class="MuiTypography-root MuiTypography-secondary14 css-d8aql2">%</span></p>
                                                  </div>
                                                  <div class="MuiBox-root css-rnjm1y"></div>
                                                </div>
                                            </div>
                                            <div class="MuiBox-root css-xrt28o">
                                                <div class="MuiTypography-root MuiTypography-description css-181zdd">Can be collateral</div>
                                                <div class="MuiBox-root css-gmuwbf">
                                                  <div class="MuiBox-root css-1rzcn8q">
                                                      <div class="MuiBox-root css-5wpzg3">
                                                        <div class="MuiBox-root css-1do422x">
                                                            <p class="MuiTypography-root MuiTypography-secondary12 css-1yhzaxq">Isolated</p>
                                                            <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-nqvctb" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                                                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                                                                  <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                              </svg>
                                                            </svg>
                                                        </div>
                                                      </div>
                                                  </div>
                                                </div>
                                            </div>
                                            <div class="MuiBox-root css-16rgc74"><button class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth Mui-disabled MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth css-23aapr" tabindex="-1" type="button" disabled="">Supply</button><a class="MuiTypography-root MuiTypography-description MuiLink-root MuiLink-underlineNone MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth css-1haiorh" tabindex="0" href="/reserve-overview/?underlyingAsset=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82&amp;marketName=proto_bnb_v3">Details<span class="MuiTouchRipple-root css-w0pj6f"></span></a></div>
                                          </div>
                                      </div>
                                  </div>
                            </div>
                          </div>
                      </div>
                      <div class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 css-7l9tvd">
                            <div class="MuiBox-root css-19zr2gl">
                                <div class="MuiBox-root css-iwds49">
                                  <div class="MuiTypography-root MuiTypography-h3 css-upncnh">Assets to borrow</div>
                                </div>
                                <div class="MuiBox-root css-l9ry6i" @click="toggleAccordion('second')">
                                  <p class="MuiTypography-root MuiTypography-buttonM css-1p541t6">Hide</p>
                                  <span></span>
                                </div>
                            </div>
                            <div class="MuiBox-root css-35dwn7 show-on-desktop" v-show="issOpen">
                                <div class="MuiBox-root css-186lrzm">
                                  <div class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiAlert-root MuiAlert-colorInfo MuiAlert-standardInfo MuiAlert-standard css-1lh2l3q" role="alert">
                                      <div class="MuiAlert-icon css-1l54tgj">
                                        <svg class="MuiSvgIcon-root MuiSvgIcon-colorInfo MuiSvgIcon-fontSizeMedium css-115dves" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                                              <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                        </svg>
                                      </div>
                                      <div class="MuiAlert-message css-1xsto0d">To borrow you need to supply any asset to be used as collateral.</div>
                                  </div>
                                </div>
                                <div class="MuiBox-root css-u35d3s" data-cy="dashboardBorrowListItem_GHO">
                                  <div class="MuiBox-root css-15czs8k">
                                      <a class="MuiTypography-root MuiTypography-description MuiTypography-noWrap MuiLink-root MuiLink-underlineNone css-17910yg" href="/reserve-overview/?underlyingAsset=0x40d16fc0246ad3160ccc09b8d0d3a2cd28ae6c2f&amp;marketName=proto_mainnet_v3">
                                        <span class="material-icons notranslate MuiIcon-root MuiIcon-fontSizeLarge css-1ux336h" aria-hidden="true"><img src="https://app.aave.com/icons/tokens/gho.svg" width="100%" height="100%" alt="GHO icon"></span>
                                        <p class="MuiTypography-root MuiTypography-subheader1 MuiTypography-noWrap css-mgqwsh" data-cy="assetName" aria-label="Gho Token (GHO)">GHO</p>
                                      </a>
                                  </div>
                                  <div class="MuiBox-root css-11udp8r">
                                      <div class="MuiBox-root css-j7qwjs">
                                        <div class="MuiBox-root css-70qvj9">
                                            <p class="MuiTypography-root MuiTypography-subheader2 css-15z4zan">Available</p>
                                            <div class="MuiBox-root css-ulme3a">
                                              <button class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1osfq0k" tabindex="0" type="button">
                                                  <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-jmow5f" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                    </svg>
                                                  </svg>
                                                  <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                              </button>
                                            </div>
                                        </div>
                                        <div class="MuiBox-root css-mjvr3">
                                            <div class="MuiBox-root css-u6v8er">
                                              <div class="MuiBox-root css-70qvj9">
                                                  <p class="MuiTypography-root MuiTypography-secondary14 MuiTypography-noWrap css-1r4ptf4" data-cy="nativeAmount">0</p>
                                              </div>
                                            </div>
                                        </div>
                                      </div>
                                  </div>
                                  <div class="MuiBox-root css-11udp8r">
                                      <div class="MuiBox-root css-70qvj9">
                                        <p class="MuiTypography-root MuiTypography-subheader2 css-my2x37">APY, borrow rate</p>
                                        <div class="MuiBox-root css-ulme3a">
                                            <button class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1osfq0k" tabindex="0" type="button">
                                              <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-jmow5f" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                  </svg>
                                              </svg>
                                              <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                            </button>
                                        </div>
                                      </div>
                                      <div class="MuiBox-root css-1bwr8lm">
                                        <div class="MuiBox-root css-70qvj9">
                                            <div class="MuiBox-root css-gmuwbf">
                                              <p class="MuiTypography-root MuiTypography-secondary14 MuiTypography-noWrap css-uefm4v" data-cy="apy-gho-from">4.89</p>
                                              <p class="MuiTypography-root MuiTypography-secondary14 css-cr32lm">-</p>
                                              <p class="MuiTypography-root MuiTypography-secondary14 MuiTypography-noWrap css-uefm4v" data-cy="apy-gho-till">6.98<span class="MuiTypography-root MuiTypography-secondary14 css-d8aql2">%</span></p>
                                            </div>
                                        </div>
                                      </div>
                                  </div>
                                  <div class="MuiBox-root css-1xwkwbj"><button class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation Mui-disabled MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation css-moyn3y" tabindex="-1" type="button" >Borrow</button><a class="MuiTypography-root MuiTypography-description MuiLink-root MuiLink-underlineNone MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation css-10ybyyq" tabindex="0" href="/reserve-overview/?underlyingAsset=0x40d16fc0246ad3160ccc09b8d0d3a2cd28ae6c2f&amp;marketName=proto_mainnet_v3">Details<span class="MuiTouchRipple-root css-w0pj6f"></span></a></div>
                                </div>
                            </div>
                            <div class="MuiBox-root css-13o7eu2 show-on-desktop" v-show="issOpen">
                                <div class="MuiBox-root css-1wsmwia">
                                  <div class="MuiBox-root css-15czs8k">
                                      <div class="MuiTypography-root MuiTypography-subheader2 MuiTypography-noWrap css-18phtf6">
                                        Asset
                                        <div class="MuiBox-root css-14dkifd"><span class="MuiBox-root css-1hf8ilx"></span><span class="MuiBox-root css-1ojixww"></span></div>
                                      </div>
                                  </div>
                                  <div class="MuiBox-root css-11udp8r">
                                      <div class="MuiTypography-root MuiTypography-subheader2 MuiTypography-noWrap css-18phtf6">
                                        <div class="MuiBox-root css-70qvj9">
                                            <p class="MuiTypography-root MuiTypography-subheader2 css-my2x37">Available</p>
                                            <div class="MuiBox-root css-ulme3a">
                                              <button class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1osfq0k" tabindex="0" type="button">
                                                  <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-jmow5f" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                    </svg>
                                                  </svg>
                                                  <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                              </button>
                                            </div>
                                        </div>
                                        <div class="MuiBox-root css-14dkifd"><span class="MuiBox-root css-1hf8ilx"></span><span class="MuiBox-root css-1ojixww"></span></div>
                                      </div>
                                  </div>
                                  <div class="MuiBox-root css-11udp8r">
                                      <div class="MuiTypography-root MuiTypography-subheader2 MuiTypography-noWrap css-18phtf6">
                                        <div class="MuiBox-root css-70qvj9">
                                            <p class="MuiTypography-root MuiTypography-subheader2 css-my2x37">APY, variable</p>
                                            <div class="MuiBox-root css-ulme3a">
                                              <button class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1osfq0k" tabindex="0" type="button">
                                                  <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-jmow5f" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                    </svg>
                                                  </svg>
                                                  <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                              </button>
                                            </div>
                                        </div>
                                        <div class="MuiBox-root css-14dkifd"><span class="MuiBox-root css-1hf8ilx"></span><span class="MuiBox-root css-1ojixww"></span></div>
                                      </div>
                                  </div>
                                  <div class="MuiBox-root css-1xwkwbj"></div>
                                </div>
                                <div class="MuiBox-root css-1qm0evb" data-cy="dashboardBorrowListItem_ETH">
                                  <div class="MuiBox-root css-15czs8k">
                                      <a class="MuiTypography-root MuiTypography-description MuiTypography-noWrap MuiLink-root MuiLink-underlineNone css-17910yg" href="/reserve-overview/?underlyingAsset=0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2&amp;marketName=proto_mainnet_v3">
                                        <span class="material-icons notranslate MuiIcon-root MuiIcon-fontSizeLarge css-1ux336h" aria-hidden="true"><img src="https://app.aave.com/icons/tokens/eth.svg" width="100%" height="100%" alt="ETH icon"></span>
                                        <p class="MuiTypography-root MuiTypography-subheader1 MuiTypography-noWrap css-mgqwsh" data-cy="assetName" aria-label="Ethereum (ETH)">ETH</p>
                                      </a>
                                  </div>
                                  <div class="MuiBox-root css-11udp8r">
                                      <div class="MuiBox-root css-70qvj9">
                                        <p class="MuiTypography-root MuiTypography-secondary14 MuiTypography-noWrap css-1r4ptf4" data-cy="nativeAmount">0</p>
                                      </div>
                                  </div>
                                  <div class="MuiBox-root css-11udp8r">
                                      <div class="MuiBox-root css-1241y0n">
                                        <div class="MuiBox-root css-19el3v">
                                            <div class="MuiBox-root css-k008qs">
                                              <p class="MuiTypography-root MuiTypography-secondary14 MuiTypography-noWrap css-uefm4v" data-cy="apy">2.51<span class="MuiTypography-root MuiTypography-secondary14 css-d8aql2">%</span></p>
                                            </div>
                                            <div class="MuiBox-root css-1yxnkj0"></div>
                                        </div>
                                      </div>
                                  </div>
                                  <div class="MuiBox-root css-1xwkwbj"><button class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation Mui-disabled MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation css-moyn3y" tabindex="-1" type="button" >Borrow</button><a class="MuiTypography-root MuiTypography-description MuiLink-root MuiLink-underlineNone MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation css-10ybyyq" tabindex="0" href="/reserve-overview/?underlyingAsset=0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2&amp;marketName=proto_mainnet_v3">Details<span class="MuiTouchRipple-root css-w0pj6f"></span></a></div>
                                </div>
                                <div class="MuiBox-root css-1qm0evb" data-cy="dashboardBorrowListItem_USDT">
                                  <div class="MuiBox-root css-15czs8k">
                                      <a class="MuiTypography-root MuiTypography-description MuiTypography-noWrap MuiLink-root MuiLink-underlineNone css-17910yg" href="/reserve-overview/?underlyingAsset=0xdac17f958d2ee523a2206206994597c13d831ec7&amp;marketName=proto_mainnet_v3">
                                        <span class="material-icons notranslate MuiIcon-root MuiIcon-fontSizeLarge css-1ux336h" aria-hidden="true"><img src="https://app.aave.com/icons/tokens/usdt.svg" width="100%" height="100%" alt="USDT icon"></span>
                                        <p class="MuiTypography-root MuiTypography-subheader1 MuiTypography-noWrap css-mgqwsh" data-cy="assetName" aria-label="Tether (USDT)">USDT</p>
                                      </a>
                                  </div>
                                  <div class="MuiBox-root css-11udp8r">
                                      <div class="MuiBox-root css-70qvj9">
                                        <p class="MuiTypography-root MuiTypography-secondary14 MuiTypography-noWrap css-1r4ptf4" data-cy="nativeAmount">0</p>
                                      </div>
                                  </div>
                                  <div class="MuiBox-root css-11udp8r">
                                      <div class="MuiBox-root css-1241y0n">
                                        <div class="MuiBox-root css-19el3v">
                                            <div class="MuiBox-root css-k008qs">
                                              <p class="MuiTypography-root MuiTypography-secondary14 MuiTypography-noWrap css-uefm4v" data-cy="apy">6.79<span class="MuiTypography-root MuiTypography-secondary14 css-d8aql2">%</span></p>
                                            </div>
                                            <div class="MuiBox-root css-1yxnkj0"></div>
                                        </div>
                                      </div>
                                  </div>
                                  <div class="MuiBox-root css-1xwkwbj"><button class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation Mui-disabled MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation css-moyn3y" tabindex="-1" type="button" >Borrow</button><a class="MuiTypography-root MuiTypography-description MuiLink-root MuiLink-underlineNone MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation css-10ybyyq" tabindex="0" href="/reserve-overview/?underlyingAsset=0xdac17f958d2ee523a2206206994597c13d831ec7&amp;marketName=proto_mainnet_v3">Details<span class="MuiTouchRipple-root css-w0pj6f"></span></a></div>
                                </div>
                                <div class="MuiBox-root css-1qm0evb" data-cy="dashboardBorrowListItem_WBTC">
                                  <div class="MuiBox-root css-15czs8k">
                                      <a class="MuiTypography-root MuiTypography-description MuiTypography-noWrap MuiLink-root MuiLink-underlineNone css-17910yg" href="/reserve-overview/?underlyingAsset=0x2260fac5e5542a773aa44fbcfedf7c193bc2c599&amp;marketName=proto_mainnet_v3">
                                        <span class="material-icons notranslate MuiIcon-root MuiIcon-fontSizeLarge css-1ux336h" aria-hidden="true"><img src="https://app.aave.com/icons/tokens/wbtc.svg" width="100%" height="100%" alt="WBTC icon"></span>
                                        <p class="MuiTypography-root MuiTypography-subheader1 MuiTypography-noWrap css-mgqwsh" data-cy="assetName" aria-label="Wrapped BTC (WBTC)">WBTC</p>
                                      </a>
                                  </div>
                                  <div class="MuiBox-root css-11udp8r">
                                      <div class="MuiBox-root css-70qvj9">
                                        <p class="MuiTypography-root MuiTypography-secondary14 MuiTypography-noWrap css-1r4ptf4" data-cy="nativeAmount">0</p>
                                      </div>
                                  </div>
                                  <div class="MuiBox-root css-11udp8r">
                                      <div class="MuiBox-root css-1241y0n">
                                        <div class="MuiBox-root css-19el3v">
                                            <div class="MuiBox-root css-k008qs">
                                              <p class="MuiTypography-root MuiTypography-secondary14 MuiTypography-noWrap css-uefm4v" data-cy="apy">0.42<span class="MuiTypography-root MuiTypography-secondary14 css-d8aql2">%</span></p>
                                            </div>
                                            <div class="MuiBox-root css-1yxnkj0"></div>
                                        </div>
                                      </div>
                                  </div>
                                  <div class="MuiBox-root css-1xwkwbj"><button class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation Mui-disabled MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation css-moyn3y" tabindex="-1" type="button" >Borrow</button><a class="MuiTypography-root MuiTypography-description MuiLink-root MuiLink-underlineNone MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation css-10ybyyq" tabindex="0" href="/reserve-overview/?underlyingAsset=0x2260fac5e5542a773aa44fbcfedf7c193bc2c599&amp;marketName=proto_mainnet_v3">Details<span class="MuiTouchRipple-root css-w0pj6f"></span></a></div>
                                </div>
                            
                            </div>
                            <div class="MuiBox-root css-13o7eu2 show-on-mobile" v-show="issOpen">
                                  <div class="MuiBox-root css-0">
                                      <hr class="MuiDivider-root MuiDivider-fullWidth css-1301pmg">
                                      <div class="MuiBox-root css-1qo1gdh">
                                        <div class="MuiBox-root css-111boms">
                                            <a class="MuiTypography-root MuiTypography-description MuiLink-root MuiLink-underlineNone css-ekhp5c" href="/reserve-overview/?underlyingAsset=0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c&amp;marketName=proto_bnb_v3">
                                              <span class="material-icons notranslate MuiIcon-root MuiIcon-fontSizeMedium css-188b5or" aria-hidden="true"><img src="https://app.aave.com/icons/tokens/btc.svg" width="100%" height="100%" alt="btc icon"></span>
                                              <div class="MuiBox-root css-1isemmb">
                                                  <h4 class="MuiTypography-root MuiTypography-h4 css-cg4wfg">BTCB Token</h4>
                                                  <div class="MuiBox-root css-70qvj9">
                                                    <p class="MuiTypography-root MuiTypography-subheader2 css-mtelhg">BTCB</p>
                                                  </div>
                                              </div>
                                            </a>
                                        </div>
                                        <div class="MuiBox-root css-xrt28o">
                                            <div class="MuiTypography-root MuiTypography-description css-181zdd">Available to borrow</div>
                                            <div class="MuiBox-root css-qfdd9t">
                                              <div class="MuiBox-root css-17m7cz6">
                                                  <p class="MuiTypography-root MuiTypography-secondary14 MuiTypography-noWrap css-dlrh6v">0</p>
                                              </div>
                                            </div>
                                        </div>
                                        <div class="MuiBox-root css-xrt28o">
                                            <div class="MuiTypography-root MuiTypography-description css-181zdd">
                                              <div class="MuiBox-root css-70qvj9">
                                                  <p class="MuiTypography-root MuiTypography-description css-1nkijli">APY, variable</p>
                                                  <div class="MuiBox-root css-ulme3a">
                                                    <button class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1osfq0k" tabindex="0" type="button">
                                                        <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-jmow5f" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                                                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                                                              <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                          </svg>
                                                        </svg>
                                                        <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                                    </button>
                                                  </div>
                                              </div>
                                            </div>
                                            <div class="MuiBox-root css-19el3v">
                                              <div class="MuiBox-root css-k008qs">
                                                  <p class="MuiTypography-root MuiTypography-secondary14 MuiTypography-noWrap css-uefm4v" data-cy="apy">0.26<span class="MuiTypography-root MuiTypography-secondary14 css-d8aql2">%</span></p>
                                              </div>
                                              <div class="MuiBox-root css-rnjm1y"></div>
                                            </div>
                                        </div>
                                        <div class="MuiBox-root css-16rgc74"><button class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth Mui-disabled MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth css-23aapr" tabindex="-1" type="button" disabled="">Borrow</button><a class="MuiTypography-root MuiTypography-description MuiLink-root MuiLink-underlineNone MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth css-1haiorh" tabindex="0" href="/reserve-overview/?underlyingAsset=0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c&amp;marketName=proto_bnb_v3">Details<span class="MuiTouchRipple-root css-w0pj6f"></span></a></div>
                                      </div>
                                  </div>
                                  <div class="MuiBox-root css-0">
                                      <hr class="MuiDivider-root MuiDivider-fullWidth css-1301pmg">
                                      <div class="MuiBox-root css-1qo1gdh">
                                        <div class="MuiBox-root css-111boms">
                                            <a class="MuiTypography-root MuiTypography-description MuiLink-root MuiLink-underlineNone css-ekhp5c" href="/reserve-overview/?underlyingAsset=0x55d398326f99059ff775485246999027b3197955&amp;marketName=proto_bnb_v3">
                                              <span class="material-icons notranslate MuiIcon-root MuiIcon-fontSizeMedium css-188b5or" aria-hidden="true"><img src="https://app.aave.com/icons/tokens/usdt.svg" width="100%" height="100%" alt="USDT icon"></span>
                                              <div class="MuiBox-root css-1isemmb">
                                                  <h4 class="MuiTypography-root MuiTypography-h4 css-cg4wfg">Tether</h4>
                                                  <div class="MuiBox-root css-70qvj9">
                                                    <p class="MuiTypography-root MuiTypography-subheader2 css-mtelhg">USDT</p>
                                                  </div>
                                              </div>
                                            </a>
                                        </div>
                                        <div class="MuiBox-root css-xrt28o">
                                            <div class="MuiTypography-root MuiTypography-description css-181zdd">Available to borrow</div>
                                            <div class="MuiBox-root css-qfdd9t">
                                              <div class="MuiBox-root css-17m7cz6">
                                                  <p class="MuiTypography-root MuiTypography-secondary14 MuiTypography-noWrap css-dlrh6v">0</p>
                                              </div>
                                            </div>
                                        </div>
                                        <div class="MuiBox-root css-xrt28o">
                                            <div class="MuiTypography-root MuiTypography-description css-181zdd">
                                              <div class="MuiBox-root css-70qvj9">
                                                  <p class="MuiTypography-root MuiTypography-description css-1nkijli">APY, variable</p>
                                                  <div class="MuiBox-root css-ulme3a">
                                                    <button class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1osfq0k" tabindex="0" type="button">
                                                        <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-jmow5f" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                                                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                                                              <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                          </svg>
                                                        </svg>
                                                        <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                                    </button>
                                                  </div>
                                              </div>
                                            </div>
                                            <div class="MuiBox-root css-19el3v">
                                              <div class="MuiBox-root css-k008qs">
                                                  <p class="MuiTypography-root MuiTypography-secondary14 MuiTypography-noWrap css-uefm4v" data-cy="apy">7.11<span class="MuiTypography-root MuiTypography-secondary14 css-d8aql2">%</span></p>
                                              </div>
                                              <div class="MuiBox-root css-rnjm1y"></div>
                                            </div>
                                        </div>
                                        <div class="MuiBox-root css-16rgc74"><button class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth Mui-disabled MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth css-23aapr" tabindex="-1" type="button" disabled="">Borrow</button><a class="MuiTypography-root MuiTypography-description MuiLink-root MuiLink-underlineNone MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth css-1haiorh" tabindex="0" href="/reserve-overview/?underlyingAsset=0x55d398326f99059ff775485246999027b3197955&amp;marketName=proto_bnb_v3">Details<span class="MuiTouchRipple-root css-w0pj6f"></span></a></div>
                                      </div>
                                  </div>
                                  <div class="MuiBox-root css-0">
                                      <hr class="MuiDivider-root MuiDivider-fullWidth css-1301pmg">
                                      <div class="MuiBox-root css-1qo1gdh">
                                        <div class="MuiBox-root css-111boms">
                                            <a class="MuiTypography-root MuiTypography-description MuiLink-root MuiLink-underlineNone css-ekhp5c" href="/reserve-overview/?underlyingAsset=0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c&amp;marketName=proto_bnb_v3">
                                              <span class="material-icons notranslate MuiIcon-root MuiIcon-fontSizeMedium css-188b5or" aria-hidden="true"><img src="https://app.aave.com/icons/tokens/bnb.svg" width="100%" height="100%" alt="BNB icon"></span>
                                              <div class="MuiBox-root css-1isemmb">
                                                  <h4 class="MuiTypography-root MuiTypography-h4 css-cg4wfg">BNB</h4>
                                                  <div class="MuiBox-root css-70qvj9">
                                                    <p class="MuiTypography-root MuiTypography-subheader2 css-mtelhg">BNB</p>
                                                  </div>
                                              </div>
                                            </a>
                                        </div>
                                        <div class="MuiBox-root css-xrt28o">
                                            <div class="MuiTypography-root MuiTypography-description css-181zdd">Available to borrow</div>
                                            <div class="MuiBox-root css-qfdd9t">
                                              <div class="MuiBox-root css-17m7cz6">
                                                  <p class="MuiTypography-root MuiTypography-secondary14 MuiTypography-noWrap css-dlrh6v">0</p>
                                              </div>
                                            </div>
                                        </div>
                                        <div class="MuiBox-root css-xrt28o">
                                            <div class="MuiTypography-root MuiTypography-description css-181zdd">
                                              <div class="MuiBox-root css-70qvj9">
                                                  <p class="MuiTypography-root MuiTypography-description css-1nkijli">APY, variable</p>
                                                  <div class="MuiBox-root css-ulme3a">
                                                    <button class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1osfq0k" tabindex="0" type="button">
                                                        <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-jmow5f" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                                                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                                                              <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                          </svg>
                                                        </svg>
                                                        <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                                    </button>
                                                  </div>
                                              </div>
                                            </div>
                                            <div class="MuiBox-root css-19el3v">
                                              <div class="MuiBox-root css-k008qs">
                                                  <p class="MuiTypography-root MuiTypography-secondary14 MuiTypography-noWrap css-uefm4v" data-cy="apy">2.18<span class="MuiTypography-root MuiTypography-secondary14 css-d8aql2">%</span></p>
                                              </div>
                                              <div class="MuiBox-root css-rnjm1y"></div>
                                            </div>
                                        </div>
                                        <div class="MuiBox-root css-16rgc74"><button class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth Mui-disabled MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth css-23aapr" tabindex="-1" type="button" disabled="">Borrow</button><a class="MuiTypography-root MuiTypography-description MuiLink-root MuiLink-underlineNone MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth css-1haiorh" tabindex="0" href="/reserve-overview/?underlyingAsset=0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c&amp;marketName=proto_bnb_v3">Details<span class="MuiTouchRipple-root css-w0pj6f"></span></a></div>
                                      </div>
                                  </div>
                                  <div class="MuiBox-root css-0">
                                      <hr class="MuiDivider-root MuiDivider-fullWidth css-1301pmg">
                                      <div class="MuiBox-root css-1qo1gdh">
                                        <div class="MuiBox-root css-111boms">
                                            <a class="MuiTypography-root MuiTypography-description MuiLink-root MuiLink-underlineNone css-ekhp5c" href="/reserve-overview/?underlyingAsset=0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d&amp;marketName=proto_bnb_v3">
                                              <span class="material-icons notranslate MuiIcon-root MuiIcon-fontSizeMedium css-188b5or" aria-hidden="true"><img src="https://app.aave.com/icons/tokens/usdc.svg" width="100%" height="100%" alt="USDC icon"></span>
                                              <div class="MuiBox-root css-1isemmb">
                                                  <h4 class="MuiTypography-root MuiTypography-h4 css-cg4wfg">USD Coin</h4>
                                                  <div class="MuiBox-root css-70qvj9">
                                                    <p class="MuiTypography-root MuiTypography-subheader2 css-mtelhg">USDC</p>
                                                  </div>
                                              </div>
                                            </a>
                                        </div>
                                        <div class="MuiBox-root css-xrt28o">
                                            <div class="MuiTypography-root MuiTypography-description css-181zdd">Available to borrow</div>
                                            <div class="MuiBox-root css-qfdd9t">
                                              <div class="MuiBox-root css-17m7cz6">
                                                  <p class="MuiTypography-root MuiTypography-secondary14 MuiTypography-noWrap css-dlrh6v">0</p>
                                              </div>
                                            </div>
                                        </div>
                                        <div class="MuiBox-root css-xrt28o">
                                            <div class="MuiTypography-root MuiTypography-description css-181zdd">
                                              <div class="MuiBox-root css-70qvj9">
                                                  <p class="MuiTypography-root MuiTypography-description css-1nkijli">APY, variable</p>
                                                  <div class="MuiBox-root css-ulme3a">
                                                    <button class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1osfq0k" tabindex="0" type="button">
                                                        <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-jmow5f" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                                                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                                                              <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                          </svg>
                                                        </svg>
                                                        <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                                    </button>
                                                  </div>
                                              </div>
                                            </div>
                                            <div class="MuiBox-root css-19el3v">
                                              <div class="MuiBox-root css-k008qs">
                                                  <p class="MuiTypography-root MuiTypography-secondary14 MuiTypography-noWrap css-uefm4v" data-cy="apy">7.16<span class="MuiTypography-root MuiTypography-secondary14 css-d8aql2">%</span></p>
                                              </div>
                                              <div class="MuiBox-root css-rnjm1y"></div>
                                            </div>
                                        </div>
                                        <div class="MuiBox-root css-16rgc74"><button class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth Mui-disabled MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth css-23aapr" tabindex="-1" type="button" disabled="">Borrow</button><a class="MuiTypography-root MuiTypography-description MuiLink-root MuiLink-underlineNone MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth css-1haiorh" tabindex="0" href="/reserve-overview/?underlyingAsset=0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d&amp;marketName=proto_bnb_v3">Details<span class="MuiTouchRipple-root css-w0pj6f"></span></a></div>
                                      </div>
                                  </div>
                                  <div class="MuiBox-root css-0">
                                      <hr class="MuiDivider-root MuiDivider-fullWidth css-1301pmg">
                                      <div class="MuiBox-root css-1qo1gdh">
                                        <div class="MuiBox-root css-111boms">
                                            <a class="MuiTypography-root MuiTypography-description MuiLink-root MuiLink-underlineNone css-ekhp5c" href="/reserve-overview/?underlyingAsset=0x2170ed0880ac9a755fd29b2688956bd959f933f8&amp;marketName=proto_bnb_v3">
                                              <span class="material-icons notranslate MuiIcon-root MuiIcon-fontSizeMedium css-188b5or" aria-hidden="true"><img src="https://app.aave.com/icons/tokens/eth.svg" width="100%" height="100%" alt="ETH icon"></span>
                                              <div class="MuiBox-root css-1isemmb">
                                                  <h4 class="MuiTypography-root MuiTypography-h4 css-cg4wfg">Ethereum</h4>
                                                  <div class="MuiBox-root css-70qvj9">
                                                    <p class="MuiTypography-root MuiTypography-subheader2 css-mtelhg">ETH</p>
                                                  </div>
                                              </div>
                                            </a>
                                        </div>
                                        <div class="MuiBox-root css-xrt28o">
                                            <div class="MuiTypography-root MuiTypography-description css-181zdd">Available to borrow</div>
                                            <div class="MuiBox-root css-qfdd9t">
                                              <div class="MuiBox-root css-17m7cz6">
                                                  <p class="MuiTypography-root MuiTypography-secondary14 MuiTypography-noWrap css-dlrh6v">0</p>
                                              </div>
                                            </div>
                                        </div>
                                        <div class="MuiBox-root css-xrt28o">
                                            <div class="MuiTypography-root MuiTypography-description css-181zdd">
                                              <div class="MuiBox-root css-70qvj9">
                                                  <p class="MuiTypography-root MuiTypography-description css-1nkijli">APY, variable</p>
                                                  <div class="MuiBox-root css-ulme3a">
                                                    <button class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1osfq0k" tabindex="0" type="button">
                                                        <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-jmow5f" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                                                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                                                              <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                          </svg>
                                                        </svg>
                                                        <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                                    </button>
                                                  </div>
                                              </div>
                                            </div>
                                            <div class="MuiBox-root css-19el3v">
                                              <div class="MuiBox-root css-k008qs">
                                                  <p class="MuiTypography-root MuiTypography-secondary14 MuiTypography-noWrap css-uefm4v" data-cy="apy">1.11<span class="MuiTypography-root MuiTypography-secondary14 css-d8aql2">%</span></p>
                                              </div>
                                              <div class="MuiBox-root css-rnjm1y"></div>
                                            </div>
                                        </div>
                                        <div class="MuiBox-root css-16rgc74"><button class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth Mui-disabled MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth css-23aapr" tabindex="-1" type="button" disabled="">Borrow</button><a class="MuiTypography-root MuiTypography-description MuiLink-root MuiLink-underlineNone MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth css-1haiorh" tabindex="0" href="/reserve-overview/?underlyingAsset=0x2170ed0880ac9a755fd29b2688956bd959f933f8&amp;marketName=proto_bnb_v3">Details<span class="MuiTouchRipple-root css-w0pj6f"></span></a></div>
                                      </div>
                                  </div>
                                  <div class="MuiBox-root css-0">
                                      <hr class="MuiDivider-root MuiDivider-fullWidth css-1301pmg">
                                      <div class="MuiBox-root css-1qo1gdh">
                                        <div class="MuiBox-root css-111boms">
                                            <a class="MuiTypography-root MuiTypography-description MuiLink-root MuiLink-underlineNone css-ekhp5c" href="/reserve-overview/?underlyingAsset=0xc5f0f7b66764f6ec8c8dff7ba683102295e16409&amp;marketName=proto_bnb_v3">
                                              <span class="material-icons notranslate MuiIcon-root MuiIcon-fontSizeMedium css-188b5or" aria-hidden="true"><img src="https://app.aave.com/icons/tokens/fdusd.svg" width="100%" height="100%" alt="FDUSD icon"></span>
                                              <div class="MuiBox-root css-1isemmb">
                                                  <h4 class="MuiTypography-root MuiTypography-h4 css-cg4wfg">First Digital USD</h4>
                                                  <div class="MuiBox-root css-70qvj9">
                                                    <p class="MuiTypography-root MuiTypography-subheader2 css-mtelhg">FDUSD</p>
                                                  </div>
                                              </div>
                                            </a>
                                        </div>
                                        <div class="MuiBox-root css-xrt28o">
                                            <div class="MuiTypography-root MuiTypography-description css-181zdd">Available to borrow</div>
                                            <div class="MuiBox-root css-qfdd9t">
                                              <div class="MuiBox-root css-17m7cz6">
                                                  <p class="MuiTypography-root MuiTypography-secondary14 MuiTypography-noWrap css-dlrh6v">0</p>
                                              </div>
                                            </div>
                                        </div>
                                        <div class="MuiBox-root css-xrt28o">
                                            <div class="MuiTypography-root MuiTypography-description css-181zdd">
                                              <div class="MuiBox-root css-70qvj9">
                                                  <p class="MuiTypography-root MuiTypography-description css-1nkijli">APY, variable</p>
                                                  <div class="MuiBox-root css-ulme3a">
                                                    <button class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1osfq0k" tabindex="0" type="button">
                                                        <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-jmow5f" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                                                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                                                              <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                          </svg>
                                                        </svg>
                                                        <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                                    </button>
                                                  </div>
                                              </div>
                                            </div>
                                            <div class="MuiBox-root css-19el3v">
                                              <div class="MuiBox-root css-k008qs">
                                                  <p class="MuiTypography-root MuiTypography-secondary14 MuiTypography-noWrap css-uefm4v" data-cy="apy">6.91<span class="MuiTypography-root MuiTypography-secondary14 css-d8aql2">%</span></p>
                                              </div>
                                              <div class="MuiBox-root css-rnjm1y"></div>
                                            </div>
                                        </div>
                                        <div class="MuiBox-root css-16rgc74"><button class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth Mui-disabled MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth css-23aapr" tabindex="-1" type="button" disabled="">Borrow</button><a class="MuiTypography-root MuiTypography-description MuiLink-root MuiLink-underlineNone MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth css-1haiorh" tabindex="0" href="/reserve-overview/?underlyingAsset=0xc5f0f7b66764f6ec8c8dff7ba683102295e16409&amp;marketName=proto_bnb_v3">Details<span class="MuiTouchRipple-root css-w0pj6f"></span></a></div>
                                      </div>
                                  </div>
                                  <div class="MuiBox-root css-0">
                                      <hr class="MuiDivider-root MuiDivider-fullWidth css-1301pmg">
                                      <div class="MuiBox-root css-1qo1gdh">
                                        <div class="MuiBox-root css-111boms">
                                            <a class="MuiTypography-root MuiTypography-description MuiLink-root MuiLink-underlineNone css-ekhp5c" href="/reserve-overview/?underlyingAsset=0x26c5e01524d2e6280a48f2c50ff6de7e52e9611c&amp;marketName=proto_bnb_v3">
                                              <span class="material-icons notranslate MuiIcon-root MuiIcon-fontSizeMedium css-188b5or" aria-hidden="true"><img src="https://app.aave.com/icons/tokens/wsteth.svg" width="100%" height="100%" alt="WSTETH icon"></span>
                                              <div class="MuiBox-root css-1isemmb">
                                                  <h4 class="MuiTypography-root MuiTypography-h4 css-cg4wfg">Wrapped liquid staked Ether 2.0</h4>
                                                  <div class="MuiBox-root css-70qvj9">
                                                    <p class="MuiTypography-root MuiTypography-subheader2 css-mtelhg">wstETH</p>
                                                  </div>
                                              </div>
                                            </a>
                                        </div>
                                        <div class="MuiBox-root css-xrt28o">
                                            <div class="MuiTypography-root MuiTypography-description css-181zdd">Available to borrow</div>
                                            <div class="MuiBox-root css-qfdd9t">
                                              <div class="MuiBox-root css-17m7cz6">
                                                  <p class="MuiTypography-root MuiTypography-secondary14 MuiTypography-noWrap css-dlrh6v">0</p>
                                              </div>
                                            </div>
                                        </div>
                                        <div class="MuiBox-root css-xrt28o">
                                            <div class="MuiTypography-root MuiTypography-description css-181zdd">
                                              <div class="MuiBox-root css-70qvj9">
                                                  <p class="MuiTypography-root MuiTypography-description css-1nkijli">APY, variable</p>
                                                  <div class="MuiBox-root css-ulme3a">
                                                    <button class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1osfq0k" tabindex="0" type="button">
                                                        <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-jmow5f" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                                                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                                                              <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                          </svg>
                                                        </svg>
                                                        <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                                    </button>
                                                  </div>
                                              </div>
                                            </div>
                                            <div class="MuiBox-root css-19el3v">
                                              <div class="MuiBox-root css-k008qs">
                                                  <p class="MuiTypography-root MuiTypography-secondary14 MuiTypography-noWrap css-uefm4v" data-cy="apy">0.76<span class="MuiTypography-root MuiTypography-secondary14 css-d8aql2">%</span></p>
                                              </div>
                                              <div class="MuiBox-root css-rnjm1y"></div>
                                            </div>
                                        </div>
                                        <div class="MuiBox-root css-16rgc74"><button class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth Mui-disabled MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth css-23aapr" tabindex="-1" type="button" disabled="">Borrow</button><a class="MuiTypography-root MuiTypography-description MuiLink-root MuiLink-underlineNone MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth css-1haiorh" tabindex="0" href="/reserve-overview/?underlyingAsset=0x26c5e01524d2e6280a48f2c50ff6de7e52e9611c&amp;marketName=proto_bnb_v3">Details<span class="MuiTouchRipple-root css-w0pj6f"></span></a></div>
                                      </div>
                                  </div>
                                  <div class="MuiBox-root css-0">
                                      <hr class="MuiDivider-root MuiDivider-fullWidth css-1301pmg">
                                      <div class="MuiBox-root css-1qo1gdh">
                                        <div class="MuiBox-root css-111boms">
                                            <a class="MuiTypography-root MuiTypography-description MuiLink-root MuiLink-underlineNone css-ekhp5c" href="/reserve-overview/?underlyingAsset=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82&amp;marketName=proto_bnb_v3">
                                              <span class="material-icons notranslate MuiIcon-root MuiIcon-fontSizeMedium css-188b5or" aria-hidden="true"><img src="https://app.aave.com/icons/tokens/cake.svg" width="100%" height="100%" alt="CAKE icon"></span>
                                              <div class="MuiBox-root css-1isemmb">
                                                  <h4 class="MuiTypography-root MuiTypography-h4 css-cg4wfg">PancakeSwap Token</h4>
                                                  <div class="MuiBox-root css-70qvj9">
                                                    <p class="MuiTypography-root MuiTypography-subheader2 css-mtelhg">Cake</p>
                                                  </div>
                                              </div>
                                            </a>
                                        </div>
                                        <div class="MuiBox-root css-xrt28o">
                                            <div class="MuiTypography-root MuiTypography-description css-181zdd">Available to borrow</div>
                                            <div class="MuiBox-root css-qfdd9t">
                                              <div class="MuiBox-root css-17m7cz6">
                                                  <p class="MuiTypography-root MuiTypography-secondary14 MuiTypography-noWrap css-dlrh6v">0</p>
                                              </div>
                                            </div>
                                        </div>
                                        <div class="MuiBox-root css-xrt28o">
                                            <div class="MuiTypography-root MuiTypography-description css-181zdd">
                                              <div class="MuiBox-root css-70qvj9">
                                                  <p class="MuiTypography-root MuiTypography-description css-1nkijli">APY, variable</p>
                                                  <div class="MuiBox-root css-ulme3a">
                                                    <button class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1osfq0k" tabindex="0" type="button">
                                                        <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-jmow5f" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                                                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                                                              <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                          </svg>
                                                        </svg>
                                                        <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                                    </button>
                                                  </div>
                                              </div>
                                            </div>
                                            <div class="MuiBox-root css-19el3v">
                                              <div class="MuiBox-root css-k008qs">
                                                  <p class="MuiTypography-root MuiTypography-secondary14 MuiTypography-noWrap css-uefm4v" data-cy="apy">2.74<span class="MuiTypography-root MuiTypography-secondary14 css-d8aql2">%</span></p>
                                              </div>
                                              <div class="MuiBox-root css-rnjm1y"></div>
                                            </div>
                                        </div>
                                        <div class="MuiBox-root css-16rgc74"><button class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth Mui-disabled MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth css-23aapr" tabindex="-1" type="button" disabled="">Borrow</button><a class="MuiTypography-root MuiTypography-description MuiLink-root MuiLink-underlineNone MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth css-1haiorh" tabindex="0" href="/reserve-overview/?underlyingAsset=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82&amp;marketName=proto_bnb_v3">Details<span class="MuiTouchRipple-root css-w0pj6f"></span></a></div>
                                      </div>
                                  </div>
                            </div>

                      </div>

                </div>

              </div>
          </div>
         </div>
      </div>
   </div>
</div>

 
 </template>
 
 <style lang="scss" scoped>
 html { box-sizing: border-box; }
*, ::before, ::after { box-sizing: inherit; }
strong, b { font-weight: 700; }
body { margin: 0px; color: rgb(241, 241, 243); background: rgb(27, 32, 48); }
@media print {
  body { background-color: rgb(255, 255, 255); }
}
body::backdrop { background-color: rgb(27, 32, 48); }
body { font-family: Inter, Arial; font-weight: 400; font-size: 0.875rem; min-width: 375px; }
body > div:first-of-type { min-height: 100vh; display: flex; flex-direction: column; }

@media (min-width: 720px) {
  .show-on-mobile {
    display: none !important;
  }
}

@media (max-width: 719px) { /* Adjusted max-width to avoid overlap */
  .show-on-desktop {
    display: none !important;
  }
}
@media (min-width: 0px) {
  .css-1jdos5u {
    display: block;
  }
}
.css-1jdos5u {
  position: relative;
  width: 100%;
}
@media (min-width: 0px) {
  .css-19zr2gl {
    padding: 14px 16px;
  }
}

@media (min-width: 0px) {
  .css-1dm56o2 {
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 8px;
  }
}
@media (min-width: 0px) {
  .css-ycl373 {
    padding-left: 8px;
    padding-right: 8px;
  }
}
@media (min-width: 0px) {
  .css-mehr4l {
    width: 100%;
  }
}
.css-mehr4l {
  display: inline-flex;
  border-radius: 4px;
  background-color: rgb(56, 61, 81);
  border: 1px solid rgba(235, 235, 237, 0.12);
  padding: 4px;
  height: 44px;
}
.dropdown-container {
  position: relative;
  display: inline-block;
  @media (min-width: 0px) {
  .css-duo07e {
    display: flex;
    -moz-box-pack: center;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 12px;

  }
}

}
.css-1437ts5:hover {
  background-color: #292e41 !important;
}

.dropdown-menu {
  position: absolute;
  top: 30px;
  //left: 0;
  background: white;
  border: 1px solid #ddd;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  min-width: 240px;
  max-height:300px;
  overflow-y:auto;
  padding: 10px;
  border-radius: 5px;
  z-index: 1000;
}
@media (min-width: 0px) {
  .dropdown-menu {
    left: 10px; 
  }
}

.dropdown-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.dropdown-list li {
  padding: 10px;
  cursor: pointer;
}

.dropdown-list li:hover {
  background-color: #f0f0f0;
}
.css-itcqc2 {
  margin: 0px;
  font-family: Inter, Arial;
  font-weight: 500;
  letter-spacing: 0.00625rem;
  line-height: 1rem;
  font-size: 0.75rem;
  color: rgb(165, 168, 182);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}
@media (min-width: 760px) {
  .css-1437ts5 {
    min-height: auto;
  }
}
.css-1437ts5 {
  background-color: transparent;
  outline: 0px;
  border: 0px;
  margin: 0px;
  border-radius: 0px;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  appearance: none;
  color: inherit;
  -moz-box-pack: start;
  justify-content: flex-start;
  -moz-box-align: center;
  align-items: center;
  position: relative;
  text-decoration: none;
  min-height: 48px;
  box-sizing: border-box;
  white-space: nowrap;
  padding: 12px 16px;
  display: flex;
}
.css-hjllk8 {
  margin-right: 8px;
  width: 32px;
  height: 32px;
  position: relative;
}
.css-1437ts5 .MuiListItemText-root {
  margin-top: 0px;
  margin-bottom: 0px;
}
.css-3vef5u {
  flex: 1 1 auto;
  min-width: 0px;
  margin-top: 4px;
  margin-bottom: 4px;
  font-family: Inter, Arial;
  font-weight: 600;
  letter-spacing: 0.009375rem;
  line-height: 1.25rem;
  font-size: 0.875rem;
  margin-right: 0px;
}
.css-12sut97 {
  margin: 0px;
  display: block;
}
// .css-35dwn7 {
//   max-height: 0;
//   overflow: hidden;
//   transition: max-height 0.3s ease-in-out;
// }

// .css-35dwn7[v-show] {
//   max-height: 700px; /* Adjust this height based on content */
// }
// .css-13o7eu2[v-show] {
//   max-height: 700px; /* Adjust this height based on content */
// }
.css-kw8qku {
  display: inline-flex;
  -moz-box-align: center;
  align-items: center;
  -moz-box-pack: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  outline: 0px;
  margin: 0px;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  appearance: none;
  text-decoration: none;
  min-width: 64px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: none;
  border-radius: 4px;
  font-family: Inter, Arial;
  font-weight: 600;
  letter-spacing: 0.02875rem;
  line-height: 1.25rem;
  text-transform: uppercase;
  font-size: 0.625rem;
  padding: 0px 6px;
  color: rgb(255, 255, 255);
  border: 1px solid rgba(235, 235, 237, 0.12);
  background-color: rgb(56, 61, 81);
}
@keyframes mui-auto-fill {
0% { display: block; }
}
@keyframes mui-auto-fill {
0% { display: block; }
}
@keyframes mui-auto-fill-cancel {
0% { display: block; }
}
@keyframes mui-auto-fill-cancel {
0% { display: block; }
}
.css-kp1w4j { height: 48px; position: sticky; top: 0px; transition: top 300ms cubic-bezier(0.4, 0, 0.2, 1); z-index: 1100; background-color: rgb(27, 32, 48); display: flex; -moz-box-align: center; align-items: center; box-shadow: rgba(242, 243, 247, 0.16) 0px -1px 0px inset; }
@media (min-width: 0px) {
  .css-kp1w4j { padding: 8px 8px 8px 20px; }
}
@media (min-width: 640px) {
  .css-kp1w4j { padding: 8px 20px; }
}
.css-142agrv { line-height: 0; margin-right: 12px; transition: 0.3s; }
.css-142agrv:hover { opacity: 0.7; }
.css-1p8it9z { text-decoration: none; line-height: 0; margin-right: 12px; transition: 0.3s; }
.css-1p8it9z:hover { opacity: 0.7; }
.css-1ajeowl { margin: 0px 12px 0px 0px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; font-size: 0.875rem; color: rgb(234, 235, 239); text-decoration: none; line-height: 0; transition: 0.3s; }
.css-1ajeowl:hover { opacity: 0.7; }
.css-1gux690 { margin: 0px 12px 0px 0px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; font-size: 0.875rem; color: rgb(234, 235, 239); text-decoration: none; line-height: 0; transition: 0.3s; }
.css-1gux690:hover { opacity: 0.7; }
.css-5hicrt { margin-right: 12px; }
@media (min-width: 0px) {
  .css-1me2gch { display: none; }
}
@media (min-width: 960px) {
  .css-1me2gch { display: block; }
}
.css-1dvha5n { list-style: none; margin: 0px; padding: 0px; position: relative; display: flex; }
.css-1dvha5n .MuiMenuItem-root + .MuiDivider-root, .css-1dvha5n .MuiDivider-root { margin-top: 4px; margin-bottom: 4px; }
@media (min-width: 0px) {
  .css-1dvha5n { align-items: flex-start; flex-direction: column; }
}
@media (min-width: 960px) {
  .css-1dvha5n { -moz-box-align: center; align-items: center; flex-direction: row; }
}
.css-yewinh { display: flex; -moz-box-pack: start; justify-content: flex-start; -moz-box-align: center; align-items: center; position: relative; text-decoration: none; width: 100%; box-sizing: border-box; text-align: left; }
.css-yewinh.Mui-focusVisible { background-color: rgba(235, 235, 239, 0.12); }
.css-yewinh.Mui-selected { background-color: rgba(234, 235, 239, 0.16); }
.css-yewinh.Mui-selected.Mui-focusVisible { background-color: rgba(234, 235, 239, 0.28); }
.css-yewinh.Mui-disabled { opacity: 0.38; }
@media (min-width: 0px) {
  .css-yewinh { width: 100%; margin-right: 0px; }
}
@media (min-width: 960px) {
  .css-yewinh { width: unset; margin-right: 8px; }
}
.css-o1kmt6 { min-width: 64px; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 500; line-height: 1.5rem; font-size: 0.875rem; color: rgb(241, 241, 243); padding: 6px 8px; position: relative; }
.css-o1kmt6:hover { text-decoration: none; background-color: rgba(234, 235, 239, 0.08); }
@media (hover: none) {
  .css-o1kmt6:hover { background-color: transparent; }
}
.css-o1kmt6.Mui-disabled { color: rgba(235, 235, 239, 0.3); }
.css-o1kmt6:hover { box-shadow: none; }
.css-o1kmt6.Mui-focusVisible { box-shadow: none; }
.css-o1kmt6:active { box-shadow: none; }
.css-o1kmt6.Mui-disabled { box-shadow: none; }
.active.css-o1kmt6::after, .css-o1kmt6:hover.css-o1kmt6::after { transform: scaleX(1); transform-origin: left bottom 0px; }
.css-o1kmt6::after { content: ""; position: absolute; width: 100%; transform: scaleX(0); height: 2px; bottom: -6px; left: 0px; background: linear-gradient(248.86deg, rgb(182, 80, 158) 10.51%, rgb(46, 186, 198) 93.41%); transform-origin: right bottom 0px; transition: transform 0.25s ease-out; }
.css-g5yq6m { display: inline-flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; box-sizing: border-box; background-color: transparent; outline: 0px; border: 0px; margin: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; text-decoration: none; min-width: 64px; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 500; line-height: 1.5rem; font-size: 0.875rem; color: rgb(241, 241, 243); padding: 6px 8px; position: relative; }
.css-g5yq6m::-moz-focus-inner { border-style: none; }
.css-g5yq6m.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-g5yq6m { print-color-adjust: exact; }
}
.css-g5yq6m:hover { text-decoration: none; background-color: rgba(234, 235, 239, 0.08); }
@media (hover: none) {
  .css-g5yq6m:hover { background-color: transparent; }
}
.css-g5yq6m.Mui-disabled { color: rgba(235, 235, 239, 0.3); }
.css-g5yq6m:hover { box-shadow: none; }
.css-g5yq6m.Mui-focusVisible { box-shadow: none; }
.css-g5yq6m:active { box-shadow: none; }
.css-g5yq6m.Mui-disabled { box-shadow: none; }
.active.css-g5yq6m::after, .css-g5yq6m:hover.css-g5yq6m::after { transform: scaleX(1); transform-origin: left bottom 0px; }
.css-g5yq6m::after { content: ""; position: absolute; width: 100%; transform: scaleX(0); height: 2px; bottom: -6px; left: 0px; background: linear-gradient(248.86deg, rgb(182, 80, 158) 10.51%, rgb(46, 186, 198) 93.41%); transform-origin: right bottom 0px; transition: transform 0.25s ease-out; }
.css-16gsiog { display: inline-flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; box-sizing: border-box; background-color: transparent; outline: 0px; border: 0px; margin: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; text-decoration: none; min-width: 64px; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 500; line-height: 1.5rem; font-size: 0.875rem; color: rgb(241, 241, 243); padding: 6px 8px; position: relative; }
.css-16gsiog::-moz-focus-inner { border-style: none; }
.css-16gsiog.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-16gsiog { print-color-adjust: exact; }
}
.css-16gsiog:hover { text-decoration: none; background-color: rgba(234, 235, 239, 0.08); }
@media (hover: none) {
  .css-16gsiog:hover { background-color: transparent; }
}
.css-16gsiog.Mui-disabled { color: rgba(235, 235, 239, 0.3); }
.css-16gsiog:hover { box-shadow: none; }
.css-16gsiog.Mui-focusVisible { box-shadow: none; }
.css-16gsiog:active { box-shadow: none; }
.css-16gsiog.Mui-disabled { box-shadow: none; }
.active.css-16gsiog::after, .css-16gsiog:hover.css-16gsiog::after { transform: scaleX(1); transform-origin: left bottom 0px; }
.css-16gsiog::after { content: ""; position: absolute; width: 100%; transform: scaleX(0); height: 2px; bottom: -6px; left: 0px; background: linear-gradient(248.86deg, rgb(182, 80, 158) 10.51%, rgb(46, 186, 198) 93.41%); transform-origin: right bottom 0px; transition: transform 0.25s ease-out; }
.css-1rwvv0s { letter-spacing: 0.009375rem; display: inline-flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; box-sizing: border-box; background-color: transparent; outline: 0px; border: 0px; margin: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; text-decoration: none; min-width: 64px; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 500; line-height: 1.5rem; font-size: 0.875rem; color: rgb(241, 241, 243); padding: 6px 8px; position: relative; }
.css-1rwvv0s::-moz-focus-inner { border-style: none; }
.css-1rwvv0s.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-1rwvv0s { print-color-adjust: exact; }
}
.css-1rwvv0s:hover { text-decoration: none; background-color: rgba(234, 235, 239, 0.08); }
@media (hover: none) {
  .css-1rwvv0s:hover { background-color: transparent; }
}
.css-1rwvv0s.Mui-disabled { color: rgba(235, 235, 239, 0.3); }
.css-1rwvv0s:hover { box-shadow: none; }
.css-1rwvv0s.Mui-focusVisible { box-shadow: none; }
.css-1rwvv0s:active { box-shadow: none; }
.css-1rwvv0s.Mui-disabled { box-shadow: none; }
.active.css-1rwvv0s::after, .css-1rwvv0s:hover.css-1rwvv0s::after { transform: scaleX(1); transform-origin: left bottom 0px; }
.css-1rwvv0s::after { content: ""; position: absolute; width: 100%; transform: scaleX(0); height: 2px; bottom: -6px; left: 0px; background: linear-gradient(248.86deg, rgb(182, 80, 158) 10.51%, rgb(46, 186, 198) 93.41%); transform-origin: right bottom 0px; transition: transform 0.25s ease-out; }
.css-3y5xw2 { letter-spacing: 0.009375rem; display: inline-flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; box-sizing: border-box; background-color: transparent; outline: 0px; border: 0px; margin: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; text-decoration: none; min-width: 64px; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 500; line-height: 1.5rem; font-size: 0.875rem; color: rgb(241, 241, 243); padding: 6px 8px; position: relative; }
.css-3y5xw2::-moz-focus-inner { border-style: none; }
.css-3y5xw2.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-3y5xw2 { print-color-adjust: exact; }
}
.css-3y5xw2:hover { text-decoration: none; background-color: rgba(234, 235, 239, 0.08); }
@media (hover: none) {
  .css-3y5xw2:hover { background-color: transparent; }
}
.css-3y5xw2.Mui-disabled { color: rgba(235, 235, 239, 0.3); }
.css-3y5xw2:hover { box-shadow: none; }
.css-3y5xw2.Mui-focusVisible { box-shadow: none; }
.css-3y5xw2:active { box-shadow: none; }
.css-3y5xw2.Mui-disabled { box-shadow: none; }
.active.css-3y5xw2::after, .css-3y5xw2:hover.css-3y5xw2::after { transform: scaleX(1); transform-origin: left bottom 0px; }
.css-3y5xw2::after { content: ""; position: absolute; width: 100%; transform: scaleX(0); height: 2px; bottom: -6px; left: 0px; background: linear-gradient(248.86deg, rgb(182, 80, 158) 10.51%, rgb(46, 186, 198) 93.41%); transform-origin: right bottom 0px; transition: transform 0.25s ease-out; }
.css-8gmvqi { display: flex; -moz-box-pack: start; justify-content: flex-start; -moz-box-align: center; align-items: center; position: relative; text-decoration: none; box-sizing: border-box; text-align: left; width: unset; }
.css-8gmvqi.Mui-focusVisible { background-color: rgba(235, 235, 239, 0.12); }
.css-8gmvqi.Mui-selected { background-color: rgba(234, 235, 239, 0.16); }
.css-8gmvqi.Mui-selected.Mui-focusVisible { background-color: rgba(234, 235, 239, 0.28); }
.css-8gmvqi.Mui-disabled { opacity: 0.38; }
@media (min-width: 0px) {
  .css-8gmvqi { display: none; }
}
@media (min-width: 960px) {
  .css-8gmvqi { display: flex; }
}
.css-1rq4b5v { transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 500; line-height: 1.5rem; font-size: 0.875rem; color: rgb(241, 241, 243); min-width: unset; padding: 6px 8px; }
.css-1rq4b5v:hover { text-decoration: none; background-color: rgba(234, 235, 239, 0.08); }
@media (hover: none) {
  .css-1rq4b5v:hover { background-color: transparent; }
}
.css-1rq4b5v.Mui-disabled { color: rgba(235, 235, 239, 0.3); }
.css-1rq4b5v:hover { box-shadow: none; }
.css-1rq4b5v.Mui-focusVisible { box-shadow: none; }
.css-1rq4b5v:active { box-shadow: none; }
.css-1rq4b5v.Mui-disabled { box-shadow: none; }
.css-1rq4b5v:hover { background-color: rgba(250, 251, 252, 0.08); }
.css-enszjw { display: inline-flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; position: relative; box-sizing: border-box; background-color: transparent; outline: 0px; border: 0px; margin: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; text-decoration: none; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 500; line-height: 1.5rem; font-size: 0.875rem; color: rgb(241, 241, 243); min-width: unset; padding: 6px 8px; }
.css-enszjw::-moz-focus-inner { border-style: none; }
.css-enszjw.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-enszjw { print-color-adjust: exact; }
}
.css-enszjw:hover { text-decoration: none; background-color: rgba(234, 235, 239, 0.08); }
@media (hover: none) {
  .css-enszjw:hover { background-color: transparent; }
}
.css-enszjw.Mui-disabled { color: rgba(235, 235, 239, 0.3); }
.css-enszjw:hover { box-shadow: none; }
.css-enszjw.Mui-focusVisible { box-shadow: none; }
.css-enszjw:active { box-shadow: none; }
.css-enszjw.Mui-disabled { box-shadow: none; }
.css-enszjw:hover { background-color: rgba(250, 251, 252, 0.08); }
.css-y0zxrm { user-select: none; width: 1em; height: 1em; display: inline-block; fill: currentcolor; flex-shrink: 0; transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1); font-size: 1.5rem; margin-left: 4px; }
.css-i9gxme { -moz-box-flex: 1; flex-grow: 1; }
.css-bk9pr5 { transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 500; line-height: 1.5rem; font-size: 0.875rem; color: rgb(255, 255, 255); border: 1px solid rgba(235, 235, 237, 0.12); background-color: rgb(56, 61, 81); padding: 7px 8px; min-width: unset; margin-left: 8px; }
.css-bk9pr5:hover { text-decoration: none; background-color: rgba(241, 241, 243, 0.08); }
@media (hover: none) {
  .css-bk9pr5:hover { background-color: transparent; }
}
.css-bk9pr5.Mui-disabled { color: rgba(235, 235, 239, 0.3); }
.css-bk9pr5:hover { box-shadow: none; }
.css-bk9pr5.Mui-focusVisible { box-shadow: none; }
.css-bk9pr5:active { box-shadow: none; }
.css-bk9pr5.Mui-disabled { box-shadow: none; }
.css-bk9pr5:hover, .css-bk9pr5.Mui-focusVisible { background-color: rgb(27, 32, 48); }
.css-17sgboj { display: inline-flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; position: relative; box-sizing: border-box; outline: 0px; margin: 0px 0px 0px 8px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; text-decoration: none; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 500; line-height: 1.5rem; font-size: 0.875rem; color: rgb(255, 255, 255); border: 1px solid rgba(235, 235, 237, 0.12); background-color: rgb(56, 61, 81); padding: 7px 8px; min-width: unset; }
.css-17sgboj::-moz-focus-inner { border-style: none; }
.css-17sgboj.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-17sgboj { print-color-adjust: exact; }
}
.css-17sgboj:hover { text-decoration: none; background-color: rgba(241, 241, 243, 0.08); }
@media (hover: none) {
  .css-17sgboj:hover { background-color: transparent; }
}
.css-17sgboj.Mui-disabled { color: rgba(235, 235, 239, 0.3); }
.css-17sgboj:hover { box-shadow: none; }
.css-17sgboj.Mui-focusVisible { box-shadow: none; }
.css-17sgboj:active { box-shadow: none; }
.css-17sgboj.Mui-disabled { box-shadow: none; }
.css-17sgboj:hover, .css-17sgboj.Mui-focusVisible { background-color: rgb(27, 32, 48); }
.css-q5q60p { user-select: none; width: 1em; height: 1em; display: inline-block; fill: currentcolor; flex-shrink: 0; transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1); font-size: 1.25rem; color: rgb(241, 241, 243); }
.css-1tu4aee .MuiMenuItem-root.Mui-disabled { opacity: 1; }
.css-18dvzhc .MuiMenuItem-root.Mui-disabled { opacity: 1; }
@media (min-width: 0px) {
  .css-1100lx1 { display: flex; }
}
@media (min-width: 960px) {
  .css-1100lx1 { display: none; }
}
.css-1m2o9l0 { z-index: 1200; top: 48px; }
.css-b95f0i { display: flex; flex-direction: column; flex: 1 1 0%; }
.css-1e6kcma { background-color: rgb(27, 32, 48); color: rgb(241, 241, 243); }
@media (min-width: 0px) {
  .css-1e6kcma { padding-top: 40px; padding-bottom: 72px; }
}
@media (min-width: 960px) {
  .css-1e6kcma { padding-top: 48px; padding-bottom: 80px; }
}
@media (min-width: 1280px) {
  .css-1e6kcma { padding-bottom: 94px; }
}
@media (min-width: 1575px) {
  .css-1e6kcma { padding-bottom: 92px; }
}
@media (min-width: 1800px) {
  .css-1e6kcma { padding-bottom: 96px; }
}
.css-ycl373 { width: 100%; margin-left: auto; box-sizing: border-box; margin-right: auto; padding-left: 8px; padding-right: 8px; display: flex; flex-direction: column; flex: 1 1 0%; padding-bottom: 0px; }
@media (min-width: 760px) {
  .css-ycl373 { padding-left: 12px; padding-right: 12px; }
}
@media (min-width: 1280px) {
  .css-ycl373 { max-width: 1280px; }
}
@media (min-width: 0px) {
  .css-ycl373 { padding-left: 8px; padding-right: 8px; }
}
@media (min-width: 640px) {
  .css-ycl373 { padding-left: 20px; padding-right: 20px; }
}
@media (min-width: 760px) {
  .css-ycl373 { padding-left: 48px; padding-right: 48px; }
}
@media (min-width: 960px) {
  .css-ycl373 { padding-left: 96px; padding-right: 96px; }
}
@media (min-width: 1280px) {
  .css-ycl373 { padding-left: 20px; padding-right: 20px; }
}
@media (min-width: 1575px) {
  .css-ycl373 { max-width: unset; padding-left: 96px; padding-right: 96px; }
}
@media (min-width: 1800px) {
  .css-ycl373 { padding-left: 0px; padding-right: 0px; max-width: 1440px; }
}
@media (min-width: 0px) {
  .css-nkvznt { padding-left: 16px; padding-right: 16px; }
}
@media (min-width: 640px) {
  .css-nkvznt { padding-left: 24px; padding-right: 24px; }
}
.css-1qm1lh { margin-bottom: 16px; }
.css-1coeexk { display: flex; -moz-box-align: center; align-items: center; margin-bottom: 16px; }
.css-1vfaaju { margin: 0px 8px 0px 0px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.00625rem; line-height: 1rem; font-size: 0.75rem; color: rgb(192, 203, 246); }
.css-1570kgy { height: 16px; width: 16px; }
.css-fodyq8 { margin: 0px 0px 0px 4px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.00625rem; line-height: 1rem; font-size: 0.75rem; color: rgb(192, 203, 246); }
.css-16489wl { margin: 0px 12px 0px 8px; font-family: Inter, Arial; font-weight: 700; letter-spacing: 0.015625rem; line-height: 123.5%; font-size: 2rem; }
.css-mg5q4r { margin: 0px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 143%; font-size: 0.875rem; color: rgb(142, 146, 163); max-width: 824px; }
.css-1t7a0z4 { text-decoration: underline; color: rgb(142, 146, 163); }
.css-1qtstx3 { margin: 0px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 143%; font-size: 0.875rem; text-decoration: underline; color: rgb(142, 146, 163); }
.css-k7vncv { display: flex; align-items: flex-start; flex-wrap: wrap; width: 100%; }
@media (min-width: 0px) {
  .css-k7vncv { gap: 12px; }
}
@media (min-width: 640px) {
  .css-k7vncv { gap: 32px; }
}
.css-gc7fdh { display: flex; -moz-box-align: center; align-items: center; gap: 16px; flex-wrap: wrap; max-width: 760px; }
.css-1c8qlxq { transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.02875rem; line-height: 1.25rem; text-transform: uppercase; font-size: 0.625rem; padding: 0px 6px; color: rgb(255, 255, 255); border: 1px solid rgba(235, 235, 237, 0.12); background-color: rgb(56, 61, 81); min-width: unset; }
.css-1c8qlxq:hover { text-decoration: none; background-color: rgba(241, 241, 243, 0.08); }
@media (hover: none) {
  .css-1c8qlxq:hover { background-color: transparent; }
}
.css-1c8qlxq.Mui-disabled { color: rgba(235, 235, 239, 0.3); }
.css-1c8qlxq:hover { box-shadow: none; }
.css-1c8qlxq.Mui-focusVisible { box-shadow: none; }
.css-1c8qlxq:active { box-shadow: none; }
.css-1c8qlxq.Mui-disabled { box-shadow: none; }
.css-1c8qlxq:hover, .css-1c8qlxq.Mui-focusVisible { background-color: rgb(27, 32, 48); }
.css-1x7geuk { display: inline-flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; position: relative; box-sizing: border-box; outline: 0px; margin: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; text-decoration: none; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.02875rem; line-height: 1.25rem; text-transform: uppercase; font-size: 0.625rem; padding: 0px 6px; color: rgb(255, 255, 255); border: 1px solid rgba(235, 235, 237, 0.12); background-color: rgb(56, 61, 81); min-width: unset; }
.css-1x7geuk::-moz-focus-inner { border-style: none; }
.css-1x7geuk.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-1x7geuk { print-color-adjust: exact; }
}
.css-1x7geuk:hover { text-decoration: none; background-color: rgba(241, 241, 243, 0.08); }
@media (hover: none) {
  .css-1x7geuk:hover { background-color: transparent; }
}
.css-1x7geuk.Mui-disabled { color: rgba(235, 235, 239, 0.3); }
.css-1x7geuk:hover { box-shadow: none; }
.css-1x7geuk.Mui-focusVisible { box-shadow: none; }
.css-1x7geuk:active { box-shadow: none; }
.css-1x7geuk.Mui-disabled { box-shadow: none; }
.css-1x7geuk:hover, .css-1x7geuk.Mui-focusVisible { background-color: rgb(27, 32, 48); }
.css-1fflchg { display: inline-flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; position: relative; box-sizing: border-box; outline: 0px; margin: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; text-decoration: none; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.02875rem; line-height: 1.25rem; text-transform: uppercase; font-size: 0.625rem; padding: 0px 6px; color: rgb(255, 255, 255); border: 1px solid rgba(235, 235, 237, 0.12); background-color: rgb(56, 61, 81); min-width: unset; }
.css-1fflchg::-moz-focus-inner { border-style: none; }
.css-1fflchg.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-1fflchg { print-color-adjust: exact; }
}
.css-1fflchg:hover { text-decoration: none; background-color: rgba(241, 241, 243, 0.08); }
@media (hover: none) {
  .css-1fflchg:hover { background-color: transparent; }
}
.css-1fflchg.Mui-disabled { color: rgba(235, 235, 239, 0.3); }
.css-1fflchg:hover { box-shadow: none; }
.css-1fflchg.Mui-focusVisible { box-shadow: none; }
.css-1fflchg:active { box-shadow: none; }
.css-1fflchg.Mui-disabled { box-shadow: none; }
.css-1fflchg:hover, .css-1fflchg.Mui-focusVisible { background-color: rgb(27, 32, 48); }
.css-1qyv9ui { display: inline-flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; position: relative; box-sizing: border-box; outline: 0px; margin: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; text-decoration: none; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.02875rem; line-height: 1.25rem; text-transform: uppercase; font-size: 0.625rem; padding: 0px 6px; color: rgb(255, 255, 255); border: 1px solid rgba(235, 235, 237, 0.12); background-color: rgb(56, 61, 81); min-width: unset; }
.css-1qyv9ui::-moz-focus-inner { border-style: none; }
.css-1qyv9ui.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-1qyv9ui { print-color-adjust: exact; }
}
.css-1qyv9ui:hover { text-decoration: none; background-color: rgba(241, 241, 243, 0.08); }
@media (hover: none) {
  .css-1qyv9ui:hover { background-color: transparent; }
}
.css-1qyv9ui.Mui-disabled { color: rgba(235, 235, 239, 0.3); }
.css-1qyv9ui:hover { box-shadow: none; }
.css-1qyv9ui.Mui-focusVisible { box-shadow: none; }
.css-1qyv9ui:active { box-shadow: none; }
.css-1qyv9ui.Mui-disabled { box-shadow: none; }
.css-1qyv9ui:hover, .css-1qyv9ui.Mui-focusVisible { background-color: rgb(27, 32, 48); }
.css-70qvj9 { display: flex; -moz-box-align: center; align-items: center; }
.css-1ej2kgu { user-select: none; width: 1em; height: 1em; display: inline-block; fill: currentcolor; flex-shrink: 0; transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1); margin-left: 4px; font-size: 14px; }
.css-159pi92 { display: flex; flex-direction: column; flex: 1 1 0%; }
@media (min-width: 0px) {
  .css-159pi92 { margin-top: -32px; }
}
@media (min-width: 1280px) {
  .css-159pi92 { margin-top: -46px; }
}
@media (min-width: 1575px) {
  .css-159pi92 { margin-top: -44px; }
}
@media (min-width: 1800px) {
  .css-159pi92 { margin-top: -48px; }
}
.css-1a8qn2o { width: 100%; margin-left: auto; box-sizing: border-box; margin-right: auto; padding-left: 8px; padding-right: 8px; display: flex; flex-direction: column; flex: 1 1 0%; padding-bottom: 39px; }
@media (min-width: 760px) {
  .css-1a8qn2o { padding-left: 12px; padding-right: 12px; }
}
@media (min-width: 1280px) {
  .css-1a8qn2o { max-width: 1280px; }
}
@media (min-width: 0px) {
  .css-1a8qn2o { padding-left: 8px; padding-right: 8px; }
}
@media (min-width: 640px) {
  .css-1a8qn2o { padding-left: 20px; padding-right: 20px; }
}
@media (min-width: 760px) {
  .css-1a8qn2o { padding-left: 48px; padding-right: 48px; }
}
@media (min-width: 960px) {
  .css-1a8qn2o { padding-left: 96px; padding-right: 96px; }
}
@media (min-width: 1280px) {
  .css-1a8qn2o { padding-left: 20px; padding-right: 20px; }
}
@media (min-width: 1575px) {
  .css-1a8qn2o { max-width: unset; padding-left: 96px; padding-right: 96px; }
}
@media (min-width: 1800px) {
  .css-1a8qn2o { padding-left: 0px; padding-right: 0px; max-width: 1440px; }
}
.css-1pt9rie { background-color: rgb(56, 61, 81); border: 1px solid rgba(235, 235, 237, 0.12); padding: 4px; height: 44px; margin-bottom: 16px; }
@media (min-width: 0px) {
  .css-1pt9rie { width: 100%; display: flex; }
}
@media (min-width: 640px) {
  .css-1pt9rie { width: 359px; }
}
@media (min-width: 1280px) {
  .css-1pt9rie { display: none; }
}
.css-k33mgu { display: inline-flex; border-radius: 4px; background-color: rgb(56, 61, 81); border: 1px solid rgba(235, 235, 237, 0.12); padding: 4px; height: 44px; margin-bottom: 16px; }
.css-k33mgu .MuiToggleButtonGroup-grouped.Mui-selected + .MuiToggleButtonGroup-grouped.Mui-selected { border-left: 0px; margin-left: 0px; }
.css-k33mgu .MuiToggleButtonGroup-firstButton, .css-k33mgu .MuiToggleButtonGroup-middleButton { border-top-right-radius: 0px; border-bottom-right-radius: 0px; }
.css-k33mgu .MuiToggleButtonGroup-lastButton, .css-k33mgu .MuiToggleButtonGroup-middleButton { margin-left: -1px; border-left: 1px solid transparent; border-top-left-radius: 0px; border-bottom-left-radius: 0px; }
.css-k33mgu .MuiToggleButtonGroup-lastButton.Mui-disabled, .css-k33mgu .MuiToggleButtonGroup-middleButton.Mui-disabled { border-left: 1px solid transparent; }
@media (min-width: 0px) {
  .css-k33mgu { width: 100%; display: flex; }
}
@media (min-width: 640px) {
  .css-k33mgu { width: 359px; }
}
@media (min-width: 1280px) {
  .css-k33mgu { display: none; }
}
.css-1my42hl { border: 0px; flex: 1 1 0%; background-color: rgb(56, 61, 81); border-radius: 4px; }
.css-1my42hl.Mui-selected, .css-1my42hl.Mui-selected:hover { background-color: rgb(255, 255, 255); border-radius: 4px !important; }
.css-1my42hl.Mui-selected, .css-1my42hl.Mui-disabled { z-index: 100; height: 100%; display: flex; -moz-box-pack: center; justify-content: center; }
.css-1my42hl.Mui-selected .MuiTypography-subheader1, .css-1my42hl.Mui-disabled .MuiTypography-subheader1 { background: linear-gradient(248.86deg, rgb(182, 80, 158) 10.51%, rgb(46, 186, 198) 93.41%) padding-box text; -webkit-text-fill-color: transparent; }
.css-1my42hl.Mui-selected .MuiTypography-secondary14, .css-1my42hl.Mui-disabled .MuiTypography-secondary14 { background: linear-gradient(248.86deg, rgb(182, 80, 158) 10.51%, rgb(46, 186, 198) 93.41%) padding-box text; -webkit-text-fill-color: transparent; }
.css-1h4fsi7 { padding: 11px; color: rgba(235, 235, 239, 0.56); border: 0px; flex: 1 1 0%; background-color: rgb(56, 61, 81); border-radius: 4px; }
.css-1h4fsi7.Mui-disabled { color: rgba(235, 235, 239, 0.3); border: 1px solid rgba(235, 235, 239, 0.12); }
.css-1h4fsi7:hover { text-decoration: none; background-color: rgba(241, 241, 243, 0.08); }
@media (hover: none) {
  .css-1h4fsi7:hover { background-color: transparent; }
}
.css-1h4fsi7.Mui-selected { color: rgb(234, 235, 239); background-color: rgba(234, 235, 239, 0.16); }
.css-1h4fsi7.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.24); }
@media (hover: none) {
  .css-1h4fsi7.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.16); }
}
.css-1h4fsi7.Mui-selected, .css-1h4fsi7.Mui-selected:hover { background-color: rgb(255, 255, 255); border-radius: 4px !important; }
.css-1h4fsi7.Mui-selected, .css-1h4fsi7.Mui-disabled { z-index: 100; height: 100%; display: flex; -moz-box-pack: center; justify-content: center; }
.css-1h4fsi7.Mui-selected .MuiTypography-subheader1, .css-1h4fsi7.Mui-disabled .MuiTypography-subheader1 { background: linear-gradient(248.86deg, rgb(182, 80, 158) 10.51%, rgb(46, 186, 198) 93.41%) padding-box text; -webkit-text-fill-color: transparent; }
.css-1h4fsi7.Mui-selected .MuiTypography-secondary14, .css-1h4fsi7.Mui-disabled .MuiTypography-secondary14 { background: linear-gradient(248.86deg, rgb(182, 80, 158) 10.51%, rgb(46, 186, 198) 93.41%) padding-box text; -webkit-text-fill-color: transparent; }
.css-la5cf0 { display: inline-flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; position: relative; box-sizing: border-box; outline: 0px; margin: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; text-decoration: none; padding: 11px; color: rgba(235, 235, 239, 0.56); border: 0px; flex: 1 1 0%; background-color: rgb(56, 61, 81); border-radius: 4px; }
.css-la5cf0::-moz-focus-inner { border-style: none; }
.css-la5cf0.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-la5cf0 { print-color-adjust: exact; }
}
.css-la5cf0.Mui-disabled { color: rgba(235, 235, 239, 0.3); border: 1px solid rgba(235, 235, 239, 0.12); }
.css-la5cf0:hover { text-decoration: none; background-color: rgba(241, 241, 243, 0.08); }
@media (hover: none) {
  .css-la5cf0:hover { background-color: transparent; }
}
.css-la5cf0.Mui-selected { color: rgb(234, 235, 239); background-color: rgba(234, 235, 239, 0.16); }
.css-la5cf0.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.24); }
@media (hover: none) {
  .css-la5cf0.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.16); }
}
.css-la5cf0.Mui-selected, .css-la5cf0.Mui-selected:hover { background-color: rgb(255, 255, 255); border-radius: 4px !important; }
.css-la5cf0.Mui-selected, .css-la5cf0.Mui-disabled { z-index: 100; height: 100%; display: flex; -moz-box-pack: center; justify-content: center; }
.css-la5cf0.Mui-selected .MuiTypography-subheader1, .css-la5cf0.Mui-disabled .MuiTypography-subheader1 { background: linear-gradient(248.86deg, rgb(182, 80, 158) 10.51%, rgb(46, 186, 198) 93.41%) padding-box text; -webkit-text-fill-color: transparent; }
.css-la5cf0.Mui-selected .MuiTypography-secondary14, .css-la5cf0.Mui-disabled .MuiTypography-secondary14 { background: linear-gradient(248.86deg, rgb(182, 80, 158) 10.51%, rgb(46, 186, 198) 93.41%) padding-box text; -webkit-text-fill-color: transparent; }
.css-fu4g2f { margin: 0px; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.009375rem; line-height: 1.25rem; font-size: 0.875rem; }
.css-isbt42 { box-sizing: border-box; display: flex; flex-flow: wrap; margin-top: -16px; width: calc(100% + 16px); margin-left: -16px; }
.css-isbt42 > .MuiGrid-item { padding-top: 16px; }
.css-isbt42 > .MuiGrid-item { padding-left: 16px; }
.css-3nwm7d { box-sizing: border-box; margin: 0px; flex-direction: row; }
@media (min-width: 960px) {
  .css-3nwm7d { flex-basis: 66.6667%; -moz-box-flex: 0; flex-grow: 0; max-width: 66.6667%; }
}
@media (min-width: 1280px) {
  .css-3nwm7d { flex-basis: 66.6667%; -moz-box-flex: 0; flex-grow: 0; max-width: 66.6667%; }
}
@media (min-width: 1575px) {
  .css-3nwm7d { flex-basis: 66.6667%; -moz-box-flex: 0; flex-grow: 0; max-width: 66.6667%; }
}
@media (min-width: 1800px) {
  .css-3nwm7d { flex-basis: 66.6667%; -moz-box-flex: 0; flex-grow: 0; max-width: 66.6667%; }
}
.css-1gl5nn9 { background-color: rgb(41, 46, 65); color: rgb(241, 241, 243); transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1); border-radius: 4px; box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 1px, rgba(0, 0, 0, 0.25) 0px 0px 1px; background-image: none; }
.css-1j98xai { padding: 16px 24px; display: flex; gap: 12px; border-bottom: 1px solid rgba(235, 235, 239, 0.08); border-color: rgba(235, 235, 239, 0.08); }
@media (min-width: 0px) {
  .css-1j98xai { flex-direction: column; align-items: flex-start; }
}
@media (min-width: 960px) {
  .css-1j98xai { flex-direction: row; -moz-box-align: center; align-items: center; }
}
.css-1kwyw2c { margin: 0px; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.009375rem; line-height: 160%; font-size: 1.125rem; -moz-box-flex: 1; flex-grow: 1; }
.css-1nkijli { margin: 0px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 143%; font-size: 0.875rem; }
.css-1470kbw { min-width: 140px; }
.css-1l0z8s3 { color: rgb(241, 241, 243); line-height: 1.4375em; box-sizing: border-box; cursor: text; display: inline-flex; -moz-box-align: center; align-items: center; position: relative; border-radius: 6px; border-color: rgba(235, 235, 239, 0.08); min-width: 140px; }
.css-1l0z8s3.Mui-disabled { color: rgb(98, 103, 123); cursor: default; }
.css-1l0z8s3:hover .MuiOutlinedInput-notchedOutline { border-color: rgb(241, 241, 243); }
@media (hover: none) {
  .css-1l0z8s3:hover .MuiOutlinedInput-notchedOutline { border-color: rgba(255, 255, 255, 0.23); }
}
.css-1l0z8s3.Mui-focused .MuiOutlinedInput-notchedOutline { border-color: rgb(234, 235, 239); border-width: 2px; }
.css-1l0z8s3.Mui-error .MuiOutlinedInput-notchedOutline { border-color: rgb(244, 67, 54); }
.css-1l0z8s3.Mui-disabled .MuiOutlinedInput-notchedOutline { border-color: rgba(235, 235, 239, 0.3); }
.css-1l0z8s3:hover .MuiOutlinedInput-notchedOutline { border-color: rgb(203, 205, 216); }
.css-1l0z8s3.Mui-focused .MuiOutlinedInput-notchedOutline { border-color: rgb(203, 205, 216); }
.css-wvdg9f { font: inherit; letter-spacing: inherit; color: currentcolor; border: 0px; box-sizing: content-box; background: none; height: 1.4375em; margin: 0px; display: block; min-width: 0px; width: 100%; animation-name: mui-auto-fill-cancel; animation-duration: 10ms; padding: 16.5px 14px; }
.css-wvdg9f::-webkit-input-placeholder { color: currentcolor; opacity: 0.5; transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1); }
.css-wvdg9f::placeholder { color: currentcolor; opacity: 0.5; transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1); }
.css-wvdg9f:focus { outline: 0px; }
.css-wvdg9f:invalid { box-shadow: none; }
.css-wvdg9f::-webkit-search-decoration { appearance: none; }
label[data-shrink="false"] + .MuiInputBase-formControl .css-wvdg9f::-webkit-input-placeholder { opacity: 0 !important; }
label[data-shrink="false"] + .MuiInputBase-formControl .css-wvdg9f::placeholder { opacity: 0 !important; }
label[data-shrink="false"] + .MuiInputBase-formControl .css-wvdg9f:focus::-webkit-input-placeholder { opacity: 0.5; }
label[data-shrink="false"] + .MuiInputBase-formControl .css-wvdg9f:focus::placeholder { opacity: 0.5; }
.css-wvdg9f.Mui-disabled { opacity: 1; -webkit-text-fill-color: rgb(98, 103, 123); }
.css-wvdg9f:autofill { animation-duration: 5000s; animation-name: mui-auto-fill; }
.css-wvdg9f:autofill { box-shadow: rgb(38, 103, 152) 0px 0px 0px 100px inset; -webkit-text-fill-color: rgb(255, 255, 255); caret-color: rgb(255, 255, 255); border-radius: inherit; }
.css-1dyf9qo { appearance: none; user-select: none; border-radius: 4px; cursor: pointer; font: inherit; letter-spacing: inherit; color: currentcolor; border: 0px; box-sizing: content-box; background: none; height: 1.4375em; margin: 0px; display: block; min-width: 0px; width: 100%; animation-name: mui-auto-fill-cancel; animation-duration: 10ms; padding: 16.5px 14px; }
.css-1dyf9qo:focus { border-radius: 4px; }
.css-1dyf9qo.Mui-disabled { cursor: default; }
.css-1dyf9qo[multiple] { height: auto; }
.css-1dyf9qo:not([multiple]) option, .css-1dyf9qo:not([multiple]) optgroup { background-color: rgb(41, 46, 65); }
.css-1dyf9qo.css-1dyf9qo.css-1dyf9qo { padding-right: 32px; }
.css-1dyf9qo.MuiSelect-select { height: auto; min-height: 1.4375em; text-overflow: ellipsis; white-space: nowrap; overflow: hidden; }
.css-1dyf9qo.MuiSelect-select { background-color: rgb(56, 61, 81); font-family: Inter, Arial; font-weight: 500; line-height: 1.5rem; font-size: 0.875rem; padding: 6px 12px; color: rgb(241, 241, 243); }
.css-1dyf9qo::-webkit-input-placeholder { color: currentcolor; opacity: 0.5; transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1); }
.css-1dyf9qo::placeholder { color: currentcolor; opacity: 0.5; transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1); }
.css-1dyf9qo:focus { outline: 0px; }
.css-1dyf9qo:invalid { box-shadow: none; }
.css-1dyf9qo::-webkit-search-decoration { appearance: none; }
label[data-shrink="false"] + .MuiInputBase-formControl .css-1dyf9qo::-webkit-input-placeholder { opacity: 0 !important; }
label[data-shrink="false"] + .MuiInputBase-formControl .css-1dyf9qo::placeholder { opacity: 0 !important; }
label[data-shrink="false"] + .MuiInputBase-formControl .css-1dyf9qo:focus::-webkit-input-placeholder { opacity: 0.5; }
label[data-shrink="false"] + .MuiInputBase-formControl .css-1dyf9qo:focus::placeholder { opacity: 0.5; }
.css-1dyf9qo.Mui-disabled { opacity: 1; -webkit-text-fill-color: rgb(98, 103, 123); }
.css-1dyf9qo:autofill { animation-duration: 5000s; animation-name: mui-auto-fill; }
.css-1dyf9qo:autofill { box-shadow: rgb(38, 103, 152) 0px 0px 0px 100px inset; -webkit-text-fill-color: rgb(255, 255, 255); caret-color: rgb(255, 255, 255); border-radius: inherit; }
.css-1k3x8v3 { bottom: 0px; left: 0px; position: absolute; opacity: 0; pointer-events: none; width: 100%; box-sizing: border-box; }
.css-dzdoo0 { position: absolute; right: 7px; top: calc(50% - 0.5em); pointer-events: none; color: rgba(235, 235, 239, 0.56); }
.css-dzdoo0.Mui-disabled { color: rgba(235, 235, 239, 0.3); }
.css-1tif1u7 { user-select: none; width: 1em; height: 1em; display: inline-block; fill: currentcolor; flex-shrink: 0; transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1); font-size: 16px; position: absolute; right: 7px; top: calc(50% - 0.5em); pointer-events: none; color: rgba(235, 235, 239, 0.56); }
.css-1tif1u7.Mui-disabled { color: rgba(235, 235, 239, 0.3); }
.css-7z4qiw { border-color: rgba(255, 255, 255, 0.23); }
.css-nqlg3w { text-align: left; position: absolute; inset: -5px 0px 0px; margin: 0px; padding: 0px 8px; pointer-events: none; border-radius: inherit; border-style: solid; border-width: 1px; overflow: hidden; min-width: 0%; border-color: rgba(255, 255, 255, 0.23); }
.css-ihdtdm { float: unset; width: auto; overflow: hidden; padding: 0px; line-height: 11px; transition: width 150ms cubic-bezier(0, 0, 0.2, 1); }
.css-c6rw7y { display: flex; -moz-box-align: center; align-items: center; gap: 8px; border: 1px solid rgba(235, 235, 239, 0.08); border-radius: 6px; height: 36px; width: 280px; }
.css-14aub4a { margin-left: 8px; margin-top: 4px; }
.css-bhhpxe { color: rgb(241, 241, 243); line-height: 1.4375em; box-sizing: border-box; position: relative; cursor: text; display: inline-flex; -moz-box-align: center; align-items: center; width: 100%; }
.css-bhhpxe.Mui-disabled { color: rgb(98, 103, 123); cursor: default; }
@media (min-width: 0px) {
  .css-bhhpxe { font-size: 16px; }
}
@media (min-width: 760px) {
  .css-bhhpxe { font-size: 14px; }
}
.css-8crlfm { font: inherit; letter-spacing: inherit; color: currentcolor; padding: 4px 0px 5px; border: 0px; box-sizing: content-box; background: none; height: 1.4375em; margin: 0px; display: block; min-width: 0px; width: 100%; animation-name: mui-auto-fill-cancel; animation-duration: 10ms; }
.css-8crlfm::-webkit-input-placeholder { color: currentcolor; opacity: 0.5; transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1); }
.css-8crlfm::placeholder { color: currentcolor; opacity: 0.5; transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1); }
.css-8crlfm:focus { outline: 0px; }
.css-8crlfm:invalid { box-shadow: none; }
.css-8crlfm::-webkit-search-decoration { appearance: none; }
label[data-shrink="false"] + .MuiInputBase-formControl .css-8crlfm::-webkit-input-placeholder { opacity: 0 !important; }
label[data-shrink="false"] + .MuiInputBase-formControl .css-8crlfm::placeholder { opacity: 0 !important; }
label[data-shrink="false"] + .MuiInputBase-formControl .css-8crlfm:focus::-webkit-input-placeholder { opacity: 0.5; }
label[data-shrink="false"] + .MuiInputBase-formControl .css-8crlfm:focus::placeholder { opacity: 0.5; }
.css-8crlfm.Mui-disabled { opacity: 1; -webkit-text-fill-color: rgb(98, 103, 123); }
.css-8crlfm:autofill { animation-duration: 5000s; animation-name: mui-auto-fill; }
.css-zbr2pe { text-align: center; flex: 0 0 auto; font-size: 1.5rem; border-radius: 50%; overflow: visible; color: rgba(235, 235, 239, 0.56); transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1); padding: 0px; margin-right: 8px; visibility: hidden; }
.css-zbr2pe:hover { background-color: rgba(235, 235, 239, 0.08); }
@media (hover: none) {
  .css-zbr2pe:hover { background-color: transparent; }
}
.css-zbr2pe.Mui-disabled { background-color: transparent; color: rgba(235, 235, 239, 0.3); }
.css-1iwk9i3 { display: inline-flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; position: relative; box-sizing: border-box; background-color: transparent; outline: 0px; border: 0px; margin: 0px 8px 0px 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; text-decoration: none; text-align: center; flex: 0 0 auto; font-size: 1.5rem; border-radius: 50%; overflow: visible; color: rgba(235, 235, 239, 0.56); transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1); padding: 0px; visibility: hidden; }
.css-1iwk9i3::-moz-focus-inner { border-style: none; }
.css-1iwk9i3.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-1iwk9i3 { print-color-adjust: exact; }
}
.css-1iwk9i3:hover { background-color: rgba(235, 235, 239, 0.08); }
@media (hover: none) {
  .css-1iwk9i3:hover { background-color: transparent; }
}
.css-1iwk9i3.Mui-disabled { background-color: transparent; color: rgba(235, 235, 239, 0.3); }
.css-11oqd2y { padding: 24px; display: flex; flex-wrap: wrap; -moz-box-pack: justify; justify-content: space-between; border-bottom: 1px solid rgba(235, 235, 239, 0.08); }
.css-17apsd8 { display: flex; flex-direction: column; -moz-box-pack: justify; justify-content: space-between; }
@media (min-width: 0px) {
  .css-17apsd8 { width: 100%; padding-right: 0px; }
}
@media (min-width: 1280px) {
  .css-17apsd8 { width: 70%; padding-right: 32px; }
}
.css-132hyst { display: flex; flex-direction: column; }
@media (min-width: 0px) {
  .css-132hyst { width: 100%; padding-right: 0px; gap: 12px; }
}
@media (min-width: 1280px) {
  .css-132hyst { width: 70%; padding-right: 32px; gap: 24px; }
}
.css-n94y4 { display: block; background-color: rgba(241, 241, 243, 0.13); height: 1.2em; animation: 2s ease-in-out 0.5s infinite animation-c7515d; transform: unset; }
@keyframes animation-c7515d {
0% { opacity: 1; }
50% { opacity: 0.4; }
100% { opacity: 1; }
}
@keyframes animation-c7515d {
0% { opacity: 1; }
50% { opacity: 0.4; }
100% { opacity: 1; }
}
.css-1jvvlbg { display: flex; flex-direction: column; -moz-box-flex: 1; flex-grow: 1; -moz-box-pack: center; justify-content: center; }
@media (min-width: 0px) {
  .css-1jvvlbg { padding-left: 0px; margin-top: 28px; }
}
@media (min-width: 1280px) {
  .css-1jvvlbg { padding-left: 72px; margin-top: 0px; }
}
.css-k008qs { display: flex; }
.css-181zdd { margin: 0px 8px 0px 0px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 143%; font-size: 0.875rem; }
.css-1jeg5k1 { margin: 0px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; font-size: 0.875rem; -moz-box-flex: 1; flex-grow: 1; line-height: 1rem; }
.css-1f9djdl { display: block; background-color: rgba(241, 241, 243, 0.13); height: auto; margin-top: 0px; margin-bottom: 0px; transform-origin: 0px 55% 0px; border-radius: 4px / 6.7px; animation: 2s ease-in-out 0.5s infinite animation-c7515d; transform: unset; }
.css-1f9djdl:empty::before { content: " "; }
@keyframes animation-c7515d {
0% { opacity: 1; }
50% { opacity: 0.4; }
100% { opacity: 1; }
}
@keyframes animation-c7515d {
0% { opacity: 1; }
50% { opacity: 0.4; }
100% { opacity: 1; }
}
.css-1o62gjw { margin: 0px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; }
.css-107rh76 { display: block; background-color: rgba(241, 241, 243, 0.13); height: 1.2em; animation: 2s ease-in-out 0.5s infinite animation-c7515d; transform: unset; border-radius: 6px; }
@keyframes animation-c7515d {
0% { opacity: 1; }
50% { opacity: 0.4; }
100% { opacity: 1; }
}
@keyframes animation-c7515d {
0% { opacity: 1; }
50% { opacity: 0.4; }
100% { opacity: 1; }
}
.css-emkqy0 { box-sizing: border-box; margin: 0px; flex-direction: row; }
@media (min-width: 960px) {
  .css-emkqy0 { flex-basis: 33.3333%; -moz-box-flex: 0; flex-grow: 0; max-width: 33.3333%; }
}
@media (min-width: 1280px) {
  .css-emkqy0 { flex-basis: 33.3333%; -moz-box-flex: 0; flex-grow: 0; max-width: 33.3333%; }
}
@media (min-width: 1575px) {
  .css-emkqy0 { flex-basis: 33.3333%; -moz-box-flex: 0; flex-grow: 0; max-width: 33.3333%; }
}
@media (min-width: 1800px) {
  .css-emkqy0 { flex-basis: 33.3333%; -moz-box-flex: 0; flex-grow: 0; max-width: 33.3333%; }
}
.css-jfz5gy { background-color: rgb(41, 46, 65); color: rgb(241, 241, 243); transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1); border-radius: 4px; box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 1px, rgba(0, 0, 0, 0.25) 0px 0px 1px; background-image: none; padding: 24px; }
.css-zezzla { margin: 0px; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.009375rem; line-height: 160%; font-size: 1.125rem; }
@media (min-width: 0px) {
  .css-zezzla { margin-bottom: 24px; }
}
@media (min-width: 640px) {
  .css-zezzla { margin-bottom: 40px; }
}
.css-1p4wjs1 { margin: 0px 0px 24px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 143%; font-size: 0.875rem; color: rgb(165, 168, 182); }
.css-103kn7e { display: flex; width: 100%; -moz-box-pack: justify; justify-content: space-between; -moz-box-align: center; align-items: center; gap: 22px; box-shadow: rgba(255, 255, 255, 0.12) 0px 1px 0px inset; }
@media (min-width: 0px) {
  .css-103kn7e { padding: 22px 0px 40px; flex-direction: column; }
}
@media (min-width: 640px) {
  .css-103kn7e { padding: 0px 22px 0px 40px; flex-direction: column; }
}
@media (min-width: 760px) {
  .css-103kn7e { padding: 20px 22px; flex-direction: row; }
}
.css-15zum9u { display: flex; gap: 10px; -moz-box-align: center; align-items: center; }
.css-43mqje { color: rgb(142, 146, 163); display: flex; -moz-box-align: center; align-items: center; }
.css-43mqje:hover { color: rgb(241, 241, 243); }
.css-gdpe9y { text-decoration: none; color: rgb(142, 146, 163); display: flex; -moz-box-align: center; align-items: center; }
.css-gdpe9y:hover { color: rgb(241, 241, 243); }
.css-tgjpic { margin: 0px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 143%; font-size: 0.875rem; text-decoration: none; color: rgb(142, 146, 163); display: flex; -moz-box-align: center; align-items: center; }
.css-tgjpic:hover { color: rgb(241, 241, 243); }
.css-1poxqjx { margin: 0px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 143%; font-size: 0.875rem; text-decoration: none; color: rgb(142, 146, 163); display: flex; -moz-box-align: center; align-items: center; }
.css-1poxqjx:hover { color: rgb(241, 241, 243); }
.css-qe1uop { user-select: none; width: 1em; height: 1em; display: inline-block; fill: currentcolor; flex-shrink: 0; transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1); font-size: 1.5rem; }
@media (min-width: 0px) {
  .css-qe1uop { font-size: 24px; }
}
@media (min-width: 640px) {
  .css-qe1uop { font-size: 24px; }
}
@media (min-width: 760px) {
  .css-qe1uop { font-size: 20px; }
}
.css-10dohqv { user-select: none; width: 1em; height: 1em; display: inline-block; fill: currentcolor; flex-shrink: 0; transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1); font-size: 1.5rem; }
.css-xuzscv { position: fixed; z-index: 1300; inset: 0px; visibility: hidden; }
.css-1mbdz04 { z-index: -1; }
.css-esi9ax { position: fixed; display: flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; inset: 0px; background-color: transparent; z-index: -1; }
.css-uoqd8g { position: absolute; overflow: hidden auto; min-width: 16px; min-height: 16px; max-width: calc(100% - 32px); outline: 0px; max-height: calc(100% - 96px); }
.css-1tiw2lk { color: rgb(241, 241, 243); transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1); border-radius: 4px; border: 1px solid rgba(235, 235, 239, 0.08); box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 2px, rgba(0, 0, 0, 0.1) 0px 2px 10px; background: rgb(56, 61, 81); position: absolute; overflow: hidden auto; min-width: 16px; min-height: 16px; max-width: calc(100% - 32px); outline: 0px; max-height: calc(100% - 96px); }
.css-1jj07fx { outline: 0px; }
.css-rl9mto { list-style: none; margin: 0px; padding: 4px 0px; position: relative; outline: 0px; }
.css-rl9mto .MuiMenuItem-root + .MuiDivider-root, .css-rl9mto .MuiDivider-root { margin-top: 4px; margin-bottom: 4px; }
.css-19aijy8 { display: flex; -moz-box-pack: start; justify-content: flex-start; -moz-box-align: center; align-items: center; position: relative; text-decoration: none; min-height: 48px; box-sizing: border-box; white-space: nowrap; border-bottom: 1px solid rgba(235, 235, 239, 0.08); background-clip: padding-box; padding: 12px 16px; }
.css-19aijy8:hover { text-decoration: none; background-color: rgba(235, 235, 239, 0.08); }
@media (hover: none) {
  .css-19aijy8:hover { background-color: transparent; }
}
.css-19aijy8.Mui-selected { background-color: rgba(234, 235, 239, 0.16); }
.css-19aijy8.Mui-selected.Mui-focusVisible { background-color: rgba(234, 235, 239, 0.28); }
.css-19aijy8.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.24); }
@media (hover: none) {
  .css-19aijy8.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.16); }
}
.css-19aijy8.Mui-focusVisible { background-color: rgba(235, 235, 239, 0.12); }
.css-19aijy8.Mui-disabled { opacity: 0.38; }
.css-19aijy8 + .MuiDivider-root { margin-top: 4px; margin-bottom: 4px; }
.css-19aijy8 + .MuiDivider-inset { margin-left: 52px; }
.css-19aijy8 .MuiListItemText-root { margin-top: 0px; margin-bottom: 0px; }
.css-19aijy8 .MuiListItemText-inset { padding-left: 36px; }
.css-19aijy8 .MuiListItemIcon-root { min-width: 36px; }
@media (min-width: 760px) {
  .css-19aijy8 { min-height: auto; }
}
.css-1gn43q6 { background-color: transparent; outline: 0px; border-width: 0px 0px 1px; border-style: none none solid; border-color: currentcolor currentcolor rgba(235, 235, 239, 0.08); border-image: none; margin: 0px; border-radius: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; color: inherit; display: flex; -moz-box-pack: start; justify-content: flex-start; -moz-box-align: center; align-items: center; position: relative; text-decoration: none; min-height: 48px; box-sizing: border-box; white-space: nowrap; background-clip: padding-box; padding: 12px 16px; }
.css-1gn43q6::-moz-focus-inner { border-style: none; }
.css-1gn43q6.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-1gn43q6 { print-color-adjust: exact; }
}
.css-1gn43q6:hover { text-decoration: none; background-color: rgba(235, 235, 239, 0.08); }
@media (hover: none) {
  .css-1gn43q6:hover { background-color: transparent; }
}
.css-1gn43q6.Mui-selected { background-color: rgba(234, 235, 239, 0.16); }
.css-1gn43q6.Mui-selected.Mui-focusVisible { background-color: rgba(234, 235, 239, 0.28); }
.css-1gn43q6.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.24); }
@media (hover: none) {
  .css-1gn43q6.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.16); }
}
.css-1gn43q6.Mui-focusVisible { background-color: rgba(235, 235, 239, 0.12); }
.css-1gn43q6.Mui-disabled { opacity: 0.38; }
.css-1gn43q6 + .MuiDivider-root { margin-top: 4px; margin-bottom: 4px; }
.css-1gn43q6 + .MuiDivider-inset { margin-left: 52px; }
.css-1gn43q6 .MuiListItemText-root { margin-top: 0px; margin-bottom: 0px; }
.css-1gn43q6 .MuiListItemText-inset { padding-left: 36px; }
.css-1gn43q6 .MuiListItemIcon-root { min-width: 36px; }
@media (min-width: 760px) {
  .css-1gn43q6 { min-height: auto; }
}
.css-1n8qupu { background-color: transparent; outline: 0px; border-width: 0px 0px 1px; border-style: none none solid; border-color: currentcolor currentcolor rgba(235, 235, 239, 0.08); border-image: none; margin: 0px; border-radius: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; color: inherit; display: flex; -moz-box-pack: start; justify-content: flex-start; -moz-box-align: center; align-items: center; position: relative; text-decoration: none; min-height: 48px; box-sizing: border-box; white-space: nowrap; background-clip: padding-box; padding: 12px 16px; }
.css-1n8qupu::-moz-focus-inner { border-style: none; }
.css-1n8qupu.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-1n8qupu { print-color-adjust: exact; }
}
.css-1n8qupu:hover { text-decoration: none; background-color: rgba(235, 235, 239, 0.08); }
@media (hover: none) {
  .css-1n8qupu:hover { background-color: transparent; }
}
.css-1n8qupu.Mui-selected { background-color: rgba(234, 235, 239, 0.16); }
.css-1n8qupu.Mui-selected.Mui-focusVisible { background-color: rgba(234, 235, 239, 0.28); }
.css-1n8qupu.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.24); }
@media (hover: none) {
  .css-1n8qupu.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.16); }
}
.css-1n8qupu.Mui-focusVisible { background-color: rgba(235, 235, 239, 0.12); }
.css-1n8qupu.Mui-disabled { opacity: 0.38; }
.css-1n8qupu + .MuiDivider-root { margin-top: 4px; margin-bottom: 4px; }
.css-1n8qupu + .MuiDivider-inset { margin-left: 52px; }
.css-1n8qupu .MuiListItemText-root { margin-top: 0px; margin-bottom: 0px; }
.css-1n8qupu .MuiListItemText-inset { padding-left: 36px; }
.css-1n8qupu .MuiListItemIcon-root { min-width: 36px; }
@media (min-width: 760px) {
  .css-1n8qupu { min-height: auto; }
}
.css-p7lbea { font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 143%; font-size: 0.875rem; background-color: transparent; outline: 0px; border-width: 0px 0px 1px; border-style: none none solid; border-color: currentcolor currentcolor rgba(235, 235, 239, 0.08); border-image: none; margin: 0px; border-radius: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; color: inherit; display: flex; -moz-box-pack: start; justify-content: flex-start; -moz-box-align: center; align-items: center; position: relative; text-decoration: none; min-height: 48px; box-sizing: border-box; white-space: nowrap; background-clip: padding-box; padding: 12px 16px; }
.css-p7lbea::-moz-focus-inner { border-style: none; }
.css-p7lbea.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-p7lbea { print-color-adjust: exact; }
}
.css-p7lbea:hover { text-decoration: none; background-color: rgba(235, 235, 239, 0.08); }
@media (hover: none) {
  .css-p7lbea:hover { background-color: transparent; }
}
.css-p7lbea.Mui-selected { background-color: rgba(234, 235, 239, 0.16); }
.css-p7lbea.Mui-selected.Mui-focusVisible { background-color: rgba(234, 235, 239, 0.28); }
.css-p7lbea.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.24); }
@media (hover: none) {
  .css-p7lbea.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.16); }
}
.css-p7lbea.Mui-focusVisible { background-color: rgba(235, 235, 239, 0.12); }
.css-p7lbea.Mui-disabled { opacity: 0.38; }
.css-p7lbea + .MuiDivider-root { margin-top: 4px; margin-bottom: 4px; }
.css-p7lbea + .MuiDivider-inset { margin-left: 52px; }
.css-p7lbea .MuiListItemText-root { margin-top: 0px; margin-bottom: 0px; }
.css-p7lbea .MuiListItemText-inset { padding-left: 36px; }
.css-p7lbea .MuiListItemIcon-root { min-width: 36px; }
@media (min-width: 760px) {
  .css-p7lbea { min-height: auto; }
}
.css-14d7i0e { font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 143%; font-size: 0.875rem; background-color: transparent; outline: 0px; border-width: 0px 0px 1px; border-style: none none solid; border-color: currentcolor currentcolor rgba(235, 235, 239, 0.08); border-image: none; margin: 0px; border-radius: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; color: inherit; display: flex; -moz-box-pack: start; justify-content: flex-start; -moz-box-align: center; align-items: center; position: relative; text-decoration: none; min-height: 48px; box-sizing: border-box; white-space: nowrap; background-clip: padding-box; padding: 12px 16px; }
.css-14d7i0e::-moz-focus-inner { border-style: none; }
.css-14d7i0e.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-14d7i0e { print-color-adjust: exact; }
}
.css-14d7i0e:hover { text-decoration: none; background-color: rgba(235, 235, 239, 0.08); }
@media (hover: none) {
  .css-14d7i0e:hover { background-color: transparent; }
}
.css-14d7i0e.Mui-selected { background-color: rgba(234, 235, 239, 0.16); }
.css-14d7i0e.Mui-selected.Mui-focusVisible { background-color: rgba(234, 235, 239, 0.28); }
.css-14d7i0e.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.24); }
@media (hover: none) {
  .css-14d7i0e.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.16); }
}
.css-14d7i0e.Mui-focusVisible { background-color: rgba(235, 235, 239, 0.12); }
.css-14d7i0e.Mui-disabled { opacity: 0.38; }
.css-14d7i0e + .MuiDivider-root { margin-top: 4px; margin-bottom: 4px; }
.css-14d7i0e + .MuiDivider-inset { margin-left: 52px; }
.css-14d7i0e .MuiListItemText-root { margin-top: 0px; margin-bottom: 0px; }
.css-14d7i0e .MuiListItemText-inset { padding-left: 36px; }
.css-14d7i0e .MuiListItemIcon-root { min-width: 36px; }
@media (min-width: 760px) {
  .css-14d7i0e { min-height: auto; }
}
.css-1qvb7oz { display: flex; -moz-box-pack: start; justify-content: flex-start; -moz-box-align: center; align-items: center; position: relative; text-decoration: none; min-height: 48px; box-sizing: border-box; white-space: nowrap; padding: 12px 16px; }
.css-1qvb7oz:hover { text-decoration: none; background-color: rgba(235, 235, 239, 0.08); }
@media (hover: none) {
  .css-1qvb7oz:hover { background-color: transparent; }
}
.css-1qvb7oz.Mui-selected { background-color: rgba(234, 235, 239, 0.16); }
.css-1qvb7oz.Mui-selected.Mui-focusVisible { background-color: rgba(234, 235, 239, 0.28); }
.css-1qvb7oz.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.24); }
@media (hover: none) {
  .css-1qvb7oz.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.16); }
}
.css-1qvb7oz.Mui-focusVisible { background-color: rgba(235, 235, 239, 0.12); }
.css-1qvb7oz.Mui-disabled { opacity: 0.38; }
.css-1qvb7oz + .MuiDivider-root { margin-top: 4px; margin-bottom: 4px; }
.css-1qvb7oz + .MuiDivider-inset { margin-left: 52px; }
.css-1qvb7oz .MuiListItemText-root { margin-top: 0px; margin-bottom: 0px; }
.css-1qvb7oz .MuiListItemText-inset { padding-left: 36px; }
.css-1qvb7oz .MuiListItemIcon-root { min-width: 36px; }
@media (min-width: 760px) {
  .css-1qvb7oz { min-height: auto; }
}
.css-1hn3osy { background-color: transparent; outline: 0px; border: 0px; margin: 0px; border-radius: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; color: inherit; display: flex; -moz-box-pack: start; justify-content: flex-start; -moz-box-align: center; align-items: center; position: relative; text-decoration: none; min-height: 48px; box-sizing: border-box; white-space: nowrap; padding: 12px 16px; }
.css-1hn3osy::-moz-focus-inner { border-style: none; }
.css-1hn3osy.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-1hn3osy { print-color-adjust: exact; }
}
.css-1hn3osy:hover { text-decoration: none; background-color: rgba(235, 235, 239, 0.08); }
@media (hover: none) {
  .css-1hn3osy:hover { background-color: transparent; }
}
.css-1hn3osy.Mui-selected { background-color: rgba(234, 235, 239, 0.16); }
.css-1hn3osy.Mui-selected.Mui-focusVisible { background-color: rgba(234, 235, 239, 0.28); }
.css-1hn3osy.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.24); }
@media (hover: none) {
  .css-1hn3osy.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.16); }
}
.css-1hn3osy.Mui-focusVisible { background-color: rgba(235, 235, 239, 0.12); }
.css-1hn3osy.Mui-disabled { opacity: 0.38; }
.css-1hn3osy + .MuiDivider-root { margin-top: 4px; margin-bottom: 4px; }
.css-1hn3osy + .MuiDivider-inset { margin-left: 52px; }
.css-1hn3osy .MuiListItemText-root { margin-top: 0px; margin-bottom: 0px; }
.css-1hn3osy .MuiListItemText-inset { padding-left: 36px; }
.css-1hn3osy .MuiListItemIcon-root { min-width: 36px; }
@media (min-width: 760px) {
  .css-1hn3osy { min-height: auto; }
}
.css-1ew4sfn { background-color: transparent; outline: 0px; border: 0px; margin: 0px; border-radius: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; color: inherit; display: flex; -moz-box-pack: start; justify-content: flex-start; -moz-box-align: center; align-items: center; position: relative; text-decoration: none; min-height: 48px; box-sizing: border-box; white-space: nowrap; padding: 12px 16px; }
.css-1ew4sfn::-moz-focus-inner { border-style: none; }
.css-1ew4sfn.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-1ew4sfn { print-color-adjust: exact; }
}
.css-1ew4sfn:hover { text-decoration: none; background-color: rgba(235, 235, 239, 0.08); }
@media (hover: none) {
  .css-1ew4sfn:hover { background-color: transparent; }
}
.css-1ew4sfn.Mui-selected { background-color: rgba(234, 235, 239, 0.16); }
.css-1ew4sfn.Mui-selected.Mui-focusVisible { background-color: rgba(234, 235, 239, 0.28); }
.css-1ew4sfn.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.24); }
@media (hover: none) {
  .css-1ew4sfn.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.16); }
}
.css-1ew4sfn.Mui-focusVisible { background-color: rgba(235, 235, 239, 0.12); }
.css-1ew4sfn.Mui-disabled { opacity: 0.38; }
.css-1ew4sfn + .MuiDivider-root { margin-top: 4px; margin-bottom: 4px; }
.css-1ew4sfn + .MuiDivider-inset { margin-left: 52px; }
.css-1ew4sfn .MuiListItemText-root { margin-top: 0px; margin-bottom: 0px; }
.css-1ew4sfn .MuiListItemText-inset { padding-left: 36px; }
.css-1ew4sfn .MuiListItemIcon-root { min-width: 36px; }
@media (min-width: 760px) {
  .css-1ew4sfn { min-height: auto; }
}
.css-1wkhg8r { font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 143%; font-size: 0.875rem; background-color: transparent; outline: 0px; border: 0px; margin: 0px; border-radius: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; color: inherit; display: flex; -moz-box-pack: start; justify-content: flex-start; -moz-box-align: center; align-items: center; position: relative; text-decoration: none; min-height: 48px; box-sizing: border-box; white-space: nowrap; padding: 12px 16px; }
.css-1wkhg8r::-moz-focus-inner { border-style: none; }
.css-1wkhg8r.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-1wkhg8r { print-color-adjust: exact; }
}
.css-1wkhg8r:hover { text-decoration: none; background-color: rgba(235, 235, 239, 0.08); }
@media (hover: none) {
  .css-1wkhg8r:hover { background-color: transparent; }
}
.css-1wkhg8r.Mui-selected { background-color: rgba(234, 235, 239, 0.16); }
.css-1wkhg8r.Mui-selected.Mui-focusVisible { background-color: rgba(234, 235, 239, 0.28); }
.css-1wkhg8r.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.24); }
@media (hover: none) {
  .css-1wkhg8r.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.16); }
}
.css-1wkhg8r.Mui-focusVisible { background-color: rgba(235, 235, 239, 0.12); }
.css-1wkhg8r.Mui-disabled { opacity: 0.38; }
.css-1wkhg8r + .MuiDivider-root { margin-top: 4px; margin-bottom: 4px; }
.css-1wkhg8r + .MuiDivider-inset { margin-left: 52px; }
.css-1wkhg8r .MuiListItemText-root { margin-top: 0px; margin-bottom: 0px; }
.css-1wkhg8r .MuiListItemText-inset { padding-left: 36px; }
.css-1wkhg8r .MuiListItemIcon-root { min-width: 36px; }
@media (min-width: 760px) {
  .css-1wkhg8r { min-height: auto; }
}
.css-o79a0b { flex-shrink: 0; display: inline-flex; color: rgb(241, 241, 243); min-width: unset !important; margin-right: 12px; }
.css-1i92f6e { user-select: none; width: 1em; height: 1em; display: inline-block; fill: currentcolor; flex-shrink: 0; transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1); font-size: 20px; }
.css-1bff9c9 { flex: 1 1 auto; min-width: 0px; margin-top: 4px; margin-bottom: 4px; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.009375rem; line-height: 1.25rem; font-size: 0.875rem; }
.css-12sut97 { margin: 0px; display: block; }
.css-1x6ok7 { margin-right: 8px; }
.css-1x6ok7 .MuiBadge-badge { top: 2px; right: 2px; border-radius: 20px; width: 10px; height: 10px; background-color: rgb(244, 143, 177); color: rgb(244, 143, 177); }
.css-1x6ok7 .MuiBadge-badge::after { position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; border-radius: 50%; animation: 1.2s ease-in-out infinite ripple; border: 1px solid; content: ""; }
@keyframes ripple {
0% { transform: scale(0.8); opacity: 1; }
100% { transform: scale(2.4); opacity: 0; }
}
@keyframes ripple {
0% { transform: scale(0.8); opacity: 1; }
100% { transform: scale(2.4); opacity: 0; }
}
.css-4cuzhb { position: relative; display: inline-flex; vertical-align: middle; flex-shrink: 0; margin-right: 8px; }
.css-4cuzhb .MuiBadge-badge { top: 2px; right: 2px; border-radius: 20px; width: 10px; height: 10px; background-color: rgb(244, 143, 177); color: rgb(244, 143, 177); }
.css-4cuzhb .MuiBadge-badge::after { position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; border-radius: 50%; animation: 1.2s ease-in-out infinite ripple; border: 1px solid; content: ""; }
@keyframes ripple {
0% { transform: scale(0.8); opacity: 1; }
100% { transform: scale(2.4); opacity: 0; }
}
@keyframes ripple {
0% { transform: scale(0.8); opacity: 1; }
100% { transform: scale(2.4); opacity: 0; }
}
.css-1i86deq { transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 500; line-height: 1.5rem; font-size: 0.875rem; color: rgb(255, 255, 255); border: 1px solid rgba(235, 235, 237, 0.12); background-color: rgb(56, 61, 81); padding: 7px 8px; min-width: unset; gap: 8px; -moz-box-align: center; align-items: center; }
.css-1i86deq:hover { text-decoration: none; background-color: rgba(241, 241, 243, 0.08); }
@media (hover: none) {
  .css-1i86deq:hover { background-color: transparent; }
}
.css-1i86deq.Mui-disabled { color: rgba(235, 235, 239, 0.3); }
.css-1i86deq:hover { box-shadow: none; }
.css-1i86deq.Mui-focusVisible { box-shadow: none; }
.css-1i86deq:active { box-shadow: none; }
.css-1i86deq.Mui-disabled { box-shadow: none; }
.css-1i86deq:hover, .css-1i86deq.Mui-focusVisible { background-color: rgb(27, 32, 48); }
.css-sp2i6c { display: inline-flex; -moz-box-pack: center; justify-content: center; position: relative; box-sizing: border-box; outline: 0px; margin: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; text-decoration: none; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 500; line-height: 1.5rem; font-size: 0.875rem; color: rgb(255, 255, 255); border: 1px solid rgba(235, 235, 237, 0.12); background-color: rgb(56, 61, 81); padding: 7px 8px; min-width: unset; gap: 8px; -moz-box-align: center; align-items: center; }
.css-sp2i6c::-moz-focus-inner { border-style: none; }
.css-sp2i6c.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-sp2i6c { print-color-adjust: exact; }
}
.css-sp2i6c:hover { text-decoration: none; background-color: rgba(241, 241, 243, 0.08); }
@media (hover: none) {
  .css-sp2i6c:hover { background-color: transparent; }
}
.css-sp2i6c.Mui-disabled { color: rgba(235, 235, 239, 0.3); }
.css-sp2i6c:hover { box-shadow: none; }
.css-sp2i6c.Mui-focusVisible { box-shadow: none; }
.css-sp2i6c:active { box-shadow: none; }
.css-sp2i6c.Mui-disabled { box-shadow: none; }
.css-sp2i6c:hover, .css-sp2i6c.Mui-focusVisible { background-color: rgb(27, 32, 48); }
.css-sw696k { margin: 0px; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.009375rem; line-height: 1.25rem; font-size: 0.875rem; }
.css-g7go18 { user-select: none; width: 1em; height: 1em; display: inline-block; fill: currentcolor; flex-shrink: 0; transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1); font-size: 1.25rem; }
.css-10ut6yj { display: flex; flex-flow: wrap; -moz-box-pack: center; place-content: center; -moz-box-align: center; align-items: center; position: absolute; box-sizing: border-box; font-family: Inter, Arial; font-weight: 500; font-size: 0.75rem; line-height: 1; z-index: 1; transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1); background-color: rgb(244, 143, 177); color: rgba(0, 0, 0, 0.87); border-radius: 4px; height: 8px; min-width: 8px; padding: 0px; top: 0px; right: 0px; transform: scale(1) translate(50%, -50%); transform-origin: 100% 0% 0px; }
.css-10ut6yj.MuiBadge-invisible { transform: scale(0) translate(50%, -50%); }
.css-1197euy { display: flex; flex-flow: wrap; -moz-box-pack: center; place-content: center; -moz-box-align: center; align-items: center; position: absolute; box-sizing: border-box; font-family: Inter, Arial; font-weight: 500; font-size: 0.75rem; line-height: 1; z-index: 1; background-color: rgb(244, 143, 177); color: rgba(0, 0, 0, 0.87); border-radius: 4px; height: 8px; min-width: 8px; padding: 0px; top: 0px; right: 0px; transform: scale(1) translate(50%, -50%); transform-origin: 100% 0% 0px; transition: transform 195ms cubic-bezier(0.4, 0, 0.2, 1); }
.css-1197euy.MuiBadge-invisible { transform: scale(0) translate(50%, -50%); }
.css-ykkv87 { position: fixed; z-index: 1300; inset: 0px; visibility: hidden; }
.css-ykkv87 .MuiMenuItem-root.Mui-disabled { opacity: 1; }
.css-14sw753 { display: flex; -moz-box-pack: start; justify-content: flex-start; -moz-box-align: center; align-items: center; position: relative; text-decoration: none; min-height: 48px; box-sizing: border-box; white-space: nowrap; padding: 12px 16px; margin-bottom: 4px; }
.css-14sw753:hover { text-decoration: none; background-color: rgba(235, 235, 239, 0.08); }
@media (hover: none) {
  .css-14sw753:hover { background-color: transparent; }
}
.css-14sw753.Mui-selected { background-color: rgba(234, 235, 239, 0.16); }
.css-14sw753.Mui-selected.Mui-focusVisible { background-color: rgba(234, 235, 239, 0.28); }
.css-14sw753.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.24); }
@media (hover: none) {
  .css-14sw753.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.16); }
}
.css-14sw753.Mui-focusVisible { background-color: rgba(235, 235, 239, 0.12); }
.css-14sw753.Mui-disabled { opacity: 0.38; }
.css-14sw753 + .MuiDivider-root { margin-top: 4px; margin-bottom: 4px; }
.css-14sw753 + .MuiDivider-inset { margin-left: 52px; }
.css-14sw753 .MuiListItemText-root { margin-top: 0px; margin-bottom: 0px; }
.css-14sw753 .MuiListItemText-inset { padding-left: 36px; }
.css-14sw753 .MuiListItemIcon-root { min-width: 36px; }
@media (min-width: 760px) {
  .css-14sw753 { min-height: auto; }
}
.css-1mbm7em { background-color: transparent; outline: 0px; border: 0px; margin: 0px 0px 4px; border-radius: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; color: inherit; display: flex; -moz-box-pack: start; justify-content: flex-start; -moz-box-align: center; align-items: center; position: relative; text-decoration: none; min-height: 48px; box-sizing: border-box; white-space: nowrap; padding: 12px 16px; }
.css-1mbm7em::-moz-focus-inner { border-style: none; }
.css-1mbm7em.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-1mbm7em { print-color-adjust: exact; }
}
.css-1mbm7em:hover { text-decoration: none; background-color: rgba(235, 235, 239, 0.08); }
@media (hover: none) {
  .css-1mbm7em:hover { background-color: transparent; }
}
.css-1mbm7em.Mui-selected { background-color: rgba(234, 235, 239, 0.16); }
.css-1mbm7em.Mui-selected.Mui-focusVisible { background-color: rgba(234, 235, 239, 0.28); }
.css-1mbm7em.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.24); }
@media (hover: none) {
  .css-1mbm7em.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.16); }
}
.css-1mbm7em.Mui-focusVisible { background-color: rgba(235, 235, 239, 0.12); }
.css-1mbm7em.Mui-disabled { opacity: 0.38; }
.css-1mbm7em + .MuiDivider-root { margin-top: 4px; margin-bottom: 4px; }
.css-1mbm7em + .MuiDivider-inset { margin-left: 52px; }
.css-1mbm7em .MuiListItemText-root { margin-top: 0px; margin-bottom: 0px; }
.css-1mbm7em .MuiListItemText-inset { padding-left: 36px; }
.css-1mbm7em .MuiListItemIcon-root { min-width: 36px; }
@media (min-width: 760px) {
  .css-1mbm7em { min-height: auto; }
}
.css-1ihr2wc { margin: 0px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.00625rem; line-height: 1rem; font-size: 0.75rem; color: rgb(165, 168, 182); }
@media (min-width: 0px) {
  .css-weea65 { color: rgb(241, 241, 243); padding-top: 6px; padding-bottom: 6px; }
}
@media (min-width: 960px) {
  .css-weea65 { color: rgb(241, 241, 243); padding-top: 8px; padding-bottom: 8px; }
}
.css-1104vpx { display: flex; -moz-box-pack: start; justify-content: flex-start; -moz-box-align: center; align-items: center; position: relative; text-decoration: none; min-height: 48px; box-sizing: border-box; white-space: nowrap; padding: 12px 16px; }
.css-1104vpx:hover { text-decoration: none; background-color: rgba(235, 235, 239, 0.08); }
@media (hover: none) {
  .css-1104vpx:hover { background-color: transparent; }
}
.css-1104vpx.Mui-selected { background-color: rgba(234, 235, 239, 0.16); }
.css-1104vpx.Mui-selected.Mui-focusVisible { background-color: rgba(234, 235, 239, 0.28); }
.css-1104vpx.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.24); }
@media (hover: none) {
  .css-1104vpx.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.16); }
}
.css-1104vpx.Mui-focusVisible { background-color: rgba(235, 235, 239, 0.12); }
.css-1104vpx.Mui-disabled { opacity: 0.38; }
.css-1104vpx + .MuiDivider-root { margin-top: 4px; margin-bottom: 4px; }
.css-1104vpx + .MuiDivider-inset { margin-left: 52px; }
.css-1104vpx .MuiListItemText-root { margin-top: 0px; margin-bottom: 0px; }
.css-1104vpx .MuiListItemText-inset { padding-left: 36px; }
.css-1104vpx .MuiListItemIcon-root { min-width: 36px; }
@media (min-width: 760px) {
  .css-1104vpx { min-height: auto; }
}
@media (min-width: 0px) {
  .css-1104vpx { color: rgb(241, 241, 243); padding-top: 6px; padding-bottom: 6px; }
}
@media (min-width: 960px) {
  .css-1104vpx { color: rgb(241, 241, 243); padding-top: 8px; padding-bottom: 8px; }
}
.css-1bvwjcp { background-color: transparent; outline: 0px; border: 0px; margin: 0px; border-radius: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; color: inherit; display: flex; -moz-box-pack: start; justify-content: flex-start; -moz-box-align: center; align-items: center; position: relative; text-decoration: none; min-height: 48px; box-sizing: border-box; white-space: nowrap; padding: 12px 16px; }
.css-1bvwjcp::-moz-focus-inner { border-style: none; }
.css-1bvwjcp.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-1bvwjcp { print-color-adjust: exact; }
}
.css-1bvwjcp:hover { text-decoration: none; background-color: rgba(235, 235, 239, 0.08); }
@media (hover: none) {
  .css-1bvwjcp:hover { background-color: transparent; }
}
.css-1bvwjcp.Mui-selected { background-color: rgba(234, 235, 239, 0.16); }
.css-1bvwjcp.Mui-selected.Mui-focusVisible { background-color: rgba(234, 235, 239, 0.28); }
.css-1bvwjcp.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.24); }
@media (hover: none) {
  .css-1bvwjcp.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.16); }
}
.css-1bvwjcp.Mui-focusVisible { background-color: rgba(235, 235, 239, 0.12); }
.css-1bvwjcp.Mui-disabled { opacity: 0.38; }
.css-1bvwjcp + .MuiDivider-root { margin-top: 4px; margin-bottom: 4px; }
.css-1bvwjcp + .MuiDivider-inset { margin-left: 52px; }
.css-1bvwjcp .MuiListItemText-root { margin-top: 0px; margin-bottom: 0px; }
.css-1bvwjcp .MuiListItemText-inset { padding-left: 36px; }
.css-1bvwjcp .MuiListItemIcon-root { min-width: 36px; }
@media (min-width: 760px) {
  .css-1bvwjcp { min-height: auto; }
}
@media (min-width: 0px) {
  .css-1bvwjcp { color: rgb(241, 241, 243); padding-top: 6px; padding-bottom: 6px; }
}
@media (min-width: 960px) {
  .css-1bvwjcp { color: rgb(241, 241, 243); padding-top: 8px; padding-bottom: 8px; }
}
.css-17jn1ih { display: inline-flex; -moz-box-align: center; align-items: center; cursor: pointer; vertical-align: middle; margin-left: 16px; flex-direction: row-reverse; margin-right: 0px; }
.css-17jn1ih.Mui-disabled { cursor: default; }
.css-17jn1ih .MuiFormControlLabel-label.Mui-disabled { color: rgb(98, 103, 123); }
.css-cybp3x { display: inline-flex; overflow: hidden; box-sizing: border-box; position: relative; flex-shrink: 0; z-index: 0; vertical-align: middle; height: 32px; width: 46px; padding: 6px; }
@media print {
  .css-cybp3x { print-color-adjust: exact; }
}
@media (min-width: 0px) {
  .css-cybp3x .MuiSwitch-track { background-color: rgba(255, 255, 255, 0.12); }
}
@media (min-width: 960px) {
  .css-cybp3x .MuiSwitch-track { background-color: rgb(241, 241, 243); }
}
.css-134l925 { position: absolute; top: 0px; left: 0px; z-index: 1; color: rgb(224, 224, 224); transition: left 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1); padding: 8px; }
.css-134l925.Mui-checked { transform: translateX(20px); }
.css-134l925.Mui-disabled { color: rgb(117, 117, 117); }
.css-134l925.Mui-checked + .MuiSwitch-track { opacity: 0.5; }
.css-134l925.Mui-disabled + .MuiSwitch-track { opacity: 0.2; }
.css-134l925 .MuiSwitch-input { left: -100%; width: 300%; }
.css-134l925:hover { background-color: rgba(235, 235, 239, 0.08); }
@media (hover: none) {
  .css-134l925:hover { background-color: transparent; }
}
.css-134l925.Mui-checked { color: rgb(234, 235, 239); }
.css-134l925.Mui-checked:hover { background-color: rgba(234, 235, 239, 0.08); }
@media (hover: none) {
  .css-134l925.Mui-checked:hover { background-color: transparent; }
}
.css-134l925.Mui-checked.Mui-disabled { color: rgb(105, 105, 107); }
.css-134l925.Mui-checked + .MuiSwitch-track { background-color: rgb(234, 235, 239); }
.css-134l925.Mui-checked { transform: translateX(14px); }
.css-134l925.Mui-checked + .MuiSwitch-track { background-color: rgb(102, 187, 106); opacity: 1; }
.css-134l925.Mui-disabled { opacity: 0.3; }
.css-1ov3i1j { border-radius: 50%; position: absolute; top: 0px; left: 0px; z-index: 1; color: rgb(224, 224, 224); transition: left 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1); padding: 8px; }
.css-1ov3i1j.Mui-checked { transform: translateX(20px); }
.css-1ov3i1j.Mui-disabled { color: rgb(117, 117, 117); }
.css-1ov3i1j.Mui-checked + .MuiSwitch-track { opacity: 0.5; }
.css-1ov3i1j.Mui-disabled + .MuiSwitch-track { opacity: 0.2; }
.css-1ov3i1j .MuiSwitch-input { left: -100%; width: 300%; }
.css-1ov3i1j:hover { background-color: rgba(235, 235, 239, 0.08); }
@media (hover: none) {
  .css-1ov3i1j:hover { background-color: transparent; }
}
.css-1ov3i1j.Mui-checked { color: rgb(234, 235, 239); }
.css-1ov3i1j.Mui-checked:hover { background-color: rgba(234, 235, 239, 0.08); }
@media (hover: none) {
  .css-1ov3i1j.Mui-checked:hover { background-color: transparent; }
}
.css-1ov3i1j.Mui-checked.Mui-disabled { color: rgb(105, 105, 107); }
.css-1ov3i1j.Mui-checked + .MuiSwitch-track { background-color: rgb(234, 235, 239); }
.css-1ov3i1j.Mui-checked { transform: translateX(14px); }
.css-1ov3i1j.Mui-checked + .MuiSwitch-track { background-color: rgb(102, 187, 106); opacity: 1; }
.css-1ov3i1j.Mui-disabled { opacity: 0.3; }
.css-vn8sp { display: inline-flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; box-sizing: border-box; background-color: transparent; outline: 0px; border: 0px; margin: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; text-decoration: none; border-radius: 50%; position: absolute; top: 0px; left: 0px; z-index: 1; color: rgb(224, 224, 224); transition: left 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1); padding: 8px; }
.css-vn8sp::-moz-focus-inner { border-style: none; }
.css-vn8sp.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-vn8sp { print-color-adjust: exact; }
}
.css-vn8sp.Mui-checked { transform: translateX(20px); }
.css-vn8sp.Mui-disabled { color: rgb(117, 117, 117); }
.css-vn8sp.Mui-checked + .MuiSwitch-track { opacity: 0.5; }
.css-vn8sp.Mui-disabled + .MuiSwitch-track { opacity: 0.2; }
.css-vn8sp .MuiSwitch-input { left: -100%; width: 300%; }
.css-vn8sp:hover { background-color: rgba(235, 235, 239, 0.08); }
@media (hover: none) {
  .css-vn8sp:hover { background-color: transparent; }
}
.css-vn8sp.Mui-checked { color: rgb(234, 235, 239); }
.css-vn8sp.Mui-checked:hover { background-color: rgba(234, 235, 239, 0.08); }
@media (hover: none) {
  .css-vn8sp.Mui-checked:hover { background-color: transparent; }
}
.css-vn8sp.Mui-checked.Mui-disabled { color: rgb(105, 105, 107); }
.css-vn8sp.Mui-checked + .MuiSwitch-track { background-color: rgb(234, 235, 239); }
.css-vn8sp.Mui-checked { transform: translateX(14px); }
.css-vn8sp.Mui-checked + .MuiSwitch-track { background-color: rgb(102, 187, 106); opacity: 1; }
.css-vn8sp.Mui-disabled { opacity: 0.3; }
.css-1m9pwf3 { cursor: inherit; position: absolute; opacity: 0; width: 100%; height: 100%; top: 0px; left: 0px; margin: 0px; padding: 0px; z-index: 1; }
.css-uz25m2 { background-color: currentcolor; color: rgb(255, 255, 255); border-radius: 6px; width: 16px; height: 16px; box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 1px; }
.css-5w2f18 { height: 100%; width: 100%; z-index: -1; transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1), background-color 150ms cubic-bezier(0.4, 0, 0.2, 1); opacity: 1; background-color: rgba(235, 235, 239, 0.56); border-radius: 8px; }
.css-9bat2v { cursor: pointer; }
@media (min-width: 0px) {
  .css-9bat2v { color: rgb(241, 241, 243); padding-top: 6px; padding-bottom: 6px; }
}
@media (min-width: 960px) {
  .css-9bat2v { color: rgb(241, 241, 243); padding-top: 8px; padding-bottom: 8px; }
}
.css-jgdezg { display: flex; -moz-box-pack: start; justify-content: flex-start; -moz-box-align: center; align-items: center; position: relative; text-decoration: none; width: 100%; box-sizing: border-box; text-align: left; padding: 8px 16px; cursor: pointer; }
.css-jgdezg.Mui-focusVisible { background-color: rgba(235, 235, 239, 0.12); }
.css-jgdezg.Mui-selected { background-color: rgba(234, 235, 239, 0.16); }
.css-jgdezg.Mui-selected.Mui-focusVisible { background-color: rgba(234, 235, 239, 0.28); }
.css-jgdezg.Mui-disabled { opacity: 0.38; }
@media (min-width: 0px) {
  .css-jgdezg { color: rgb(241, 241, 243); padding-top: 6px; padding-bottom: 6px; }
}
@media (min-width: 960px) {
  .css-jgdezg { color: rgb(241, 241, 243); padding-top: 8px; padding-bottom: 8px; }
}
@media (min-width: 0px) {
  .css-1drla68 { color: rgb(241, 241, 243); }
}
@media (min-width: 960px) {
  .css-1drla68 { color: rgb(241, 241, 243); }
}
.css-1ljtpgu { display: flex; -moz-box-pack: start; justify-content: flex-start; -moz-box-align: center; align-items: center; position: relative; text-decoration: none; min-height: 48px; box-sizing: border-box; white-space: nowrap; padding: 12px 16px; }
.css-1ljtpgu:hover { text-decoration: none; background-color: rgba(235, 235, 239, 0.08); }
@media (hover: none) {
  .css-1ljtpgu:hover { background-color: transparent; }
}
.css-1ljtpgu.Mui-selected { background-color: rgba(234, 235, 239, 0.16); }
.css-1ljtpgu.Mui-selected.Mui-focusVisible { background-color: rgba(234, 235, 239, 0.28); }
.css-1ljtpgu.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.24); }
@media (hover: none) {
  .css-1ljtpgu.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.16); }
}
.css-1ljtpgu.Mui-focusVisible { background-color: rgba(235, 235, 239, 0.12); }
.css-1ljtpgu.Mui-disabled { opacity: 0.38; }
.css-1ljtpgu + .MuiDivider-root { margin-top: 4px; margin-bottom: 4px; }
.css-1ljtpgu + .MuiDivider-inset { margin-left: 52px; }
.css-1ljtpgu .MuiListItemText-root { margin-top: 0px; margin-bottom: 0px; }
.css-1ljtpgu .MuiListItemText-inset { padding-left: 36px; }
.css-1ljtpgu .MuiListItemIcon-root { min-width: 36px; }
@media (min-width: 760px) {
  .css-1ljtpgu { min-height: auto; }
}
@media (min-width: 0px) {
  .css-1ljtpgu { color: rgb(241, 241, 243); }
}
@media (min-width: 960px) {
  .css-1ljtpgu { color: rgb(241, 241, 243); }
}
.css-hhhx1n { background-color: transparent; outline: 0px; border: 0px; margin: 0px; border-radius: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; color: inherit; display: flex; -moz-box-pack: start; justify-content: flex-start; -moz-box-align: center; align-items: center; position: relative; text-decoration: none; min-height: 48px; box-sizing: border-box; white-space: nowrap; padding: 12px 16px; }
.css-hhhx1n::-moz-focus-inner { border-style: none; }
.css-hhhx1n.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-hhhx1n { print-color-adjust: exact; }
}
.css-hhhx1n:hover { text-decoration: none; background-color: rgba(235, 235, 239, 0.08); }
@media (hover: none) {
  .css-hhhx1n:hover { background-color: transparent; }
}
.css-hhhx1n.Mui-selected { background-color: rgba(234, 235, 239, 0.16); }
.css-hhhx1n.Mui-selected.Mui-focusVisible { background-color: rgba(234, 235, 239, 0.28); }
.css-hhhx1n.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.24); }
@media (hover: none) {
  .css-hhhx1n.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.16); }
}
.css-hhhx1n.Mui-focusVisible { background-color: rgba(235, 235, 239, 0.12); }
.css-hhhx1n.Mui-disabled { opacity: 0.38; }
.css-hhhx1n + .MuiDivider-root { margin-top: 4px; margin-bottom: 4px; }
.css-hhhx1n + .MuiDivider-inset { margin-left: 52px; }
.css-hhhx1n .MuiListItemText-root { margin-top: 0px; margin-bottom: 0px; }
.css-hhhx1n .MuiListItemText-inset { padding-left: 36px; }
.css-hhhx1n .MuiListItemIcon-root { min-width: 36px; }
@media (min-width: 760px) {
  .css-hhhx1n { min-height: auto; }
}
@media (min-width: 0px) {
  .css-hhhx1n { color: rgb(241, 241, 243); }
}
@media (min-width: 960px) {
  .css-hhhx1n { color: rgb(241, 241, 243); }
}
.css-10ga8kg { user-select: none; width: 1em; height: 1em; display: inline-block; fill: currentcolor; flex-shrink: 0; transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1); font-size: 1.25rem; margin-left: 4px; }
@media (min-width: 0px) {
  .css-10ga8kg { color: rgb(241, 241, 243); }
}
@media (min-width: 960px) {
  .css-10ga8kg { color: rgb(241, 241, 243); }
}
.css-14ujvxq { margin-bottom: 4px; }
@media (min-width: 0px) {
  .css-14ujvxq { color: rgb(241, 241, 243); }
}
@media (min-width: 960px) {
  .css-14ujvxq { color: rgb(241, 241, 243); }
}
.css-1eagfjq { display: flex; -moz-box-pack: start; justify-content: flex-start; -moz-box-align: center; align-items: center; position: relative; text-decoration: none; min-height: 48px; box-sizing: border-box; white-space: nowrap; padding: 12px 16px; margin-bottom: 4px; }
.css-1eagfjq:hover { text-decoration: none; background-color: rgba(235, 235, 239, 0.08); }
@media (hover: none) {
  .css-1eagfjq:hover { background-color: transparent; }
}
.css-1eagfjq.Mui-selected { background-color: rgba(234, 235, 239, 0.16); }
.css-1eagfjq.Mui-selected.Mui-focusVisible { background-color: rgba(234, 235, 239, 0.28); }
.css-1eagfjq.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.24); }
@media (hover: none) {
  .css-1eagfjq.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.16); }
}
.css-1eagfjq.Mui-focusVisible { background-color: rgba(235, 235, 239, 0.12); }
.css-1eagfjq.Mui-disabled { opacity: 0.38; }
.css-1eagfjq + .MuiDivider-root { margin-top: 4px; margin-bottom: 4px; }
.css-1eagfjq + .MuiDivider-inset { margin-left: 52px; }
.css-1eagfjq .MuiListItemText-root { margin-top: 0px; margin-bottom: 0px; }
.css-1eagfjq .MuiListItemText-inset { padding-left: 36px; }
.css-1eagfjq .MuiListItemIcon-root { min-width: 36px; }
@media (min-width: 760px) {
  .css-1eagfjq { min-height: auto; }
}
@media (min-width: 0px) {
  .css-1eagfjq { color: rgb(241, 241, 243); }
}
@media (min-width: 960px) {
  .css-1eagfjq { color: rgb(241, 241, 243); }
}
.css-1m6wsd1 { background-color: transparent; outline: 0px; border: 0px; margin: 0px 0px 4px; border-radius: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; color: inherit; display: flex; -moz-box-pack: start; justify-content: flex-start; -moz-box-align: center; align-items: center; position: relative; text-decoration: none; min-height: 48px; box-sizing: border-box; white-space: nowrap; padding: 12px 16px; }
.css-1m6wsd1::-moz-focus-inner { border-style: none; }
.css-1m6wsd1.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-1m6wsd1 { print-color-adjust: exact; }
}
.css-1m6wsd1:hover { text-decoration: none; background-color: rgba(235, 235, 239, 0.08); }
@media (hover: none) {
  .css-1m6wsd1:hover { background-color: transparent; }
}
.css-1m6wsd1.Mui-selected { background-color: rgba(234, 235, 239, 0.16); }
.css-1m6wsd1.Mui-selected.Mui-focusVisible { background-color: rgba(234, 235, 239, 0.28); }
.css-1m6wsd1.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.24); }
@media (hover: none) {
  .css-1m6wsd1.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.16); }
}
.css-1m6wsd1.Mui-focusVisible { background-color: rgba(235, 235, 239, 0.12); }
.css-1m6wsd1.Mui-disabled { opacity: 0.38; }
.css-1m6wsd1 + .MuiDivider-root { margin-top: 4px; margin-bottom: 4px; }
.css-1m6wsd1 + .MuiDivider-inset { margin-left: 52px; }
.css-1m6wsd1 .MuiListItemText-root { margin-top: 0px; margin-bottom: 0px; }
.css-1m6wsd1 .MuiListItemText-inset { padding-left: 36px; }
.css-1m6wsd1 .MuiListItemIcon-root { min-width: 36px; }
@media (min-width: 760px) {
  .css-1m6wsd1 { min-height: auto; }
}
@media (min-width: 0px) {
  .css-1m6wsd1 { color: rgb(241, 241, 243); }
}
@media (min-width: 960px) {
  .css-1m6wsd1 { color: rgb(241, 241, 243); }
}
.css-1jrnzya { flex-shrink: 0; display: inline-flex; color: rgb(241, 241, 243); min-width: unset !important; margin-right: 8px; }
@media (min-width: 0px) {
  .css-1jrnzya { color: rgb(241, 241, 243); }
}
@media (min-width: 960px) {
  .css-1jrnzya { color: rgb(241, 241, 243); }
}
.css-my2x37 { margin: 0px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.00625rem; line-height: 1rem; font-size: 0.75rem; }
@media (min-width: 0px) {
  .css-16mujtn { color: rgb(241, 241, 243); }
}
@media (min-width: 960px) {
  .css-16mujtn { color: rgb(241, 241, 243); }
}
.css-16mujtn .MuiListItemIcon-root { min-width: unset; }
.css-16mujtn .MuiMenuItemIcon-root { min-width: unset; }
.css-1uhh2s4 { display: flex; -moz-box-pack: start; justify-content: flex-start; -moz-box-align: center; align-items: center; position: relative; text-decoration: none; min-height: 48px; box-sizing: border-box; white-space: nowrap; padding: 12px 16px; }
.css-1uhh2s4:hover { text-decoration: none; background-color: rgba(235, 235, 239, 0.08); }
@media (hover: none) {
  .css-1uhh2s4:hover { background-color: transparent; }
}
.css-1uhh2s4.Mui-selected { background-color: rgba(234, 235, 239, 0.16); }
.css-1uhh2s4.Mui-selected.Mui-focusVisible { background-color: rgba(234, 235, 239, 0.28); }
.css-1uhh2s4.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.24); }
@media (hover: none) {
  .css-1uhh2s4.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.16); }
}
.css-1uhh2s4.Mui-focusVisible { background-color: rgba(235, 235, 239, 0.12); }
.css-1uhh2s4.Mui-disabled { opacity: 0.38; }
.css-1uhh2s4 + .MuiDivider-root { margin-top: 4px; margin-bottom: 4px; }
.css-1uhh2s4 + .MuiDivider-inset { margin-left: 52px; }
.css-1uhh2s4 .MuiListItemText-root { margin-top: 0px; margin-bottom: 0px; }
.css-1uhh2s4 .MuiListItemText-inset { padding-left: 36px; }
.css-1uhh2s4 .MuiListItemIcon-root { min-width: 36px; }
@media (min-width: 760px) {
  .css-1uhh2s4 { min-height: auto; }
}
@media (min-width: 0px) {
  .css-1uhh2s4 { color: rgb(241, 241, 243); }
}
@media (min-width: 960px) {
  .css-1uhh2s4 { color: rgb(241, 241, 243); }
}
.css-1uhh2s4 .MuiListItemIcon-root { min-width: unset; }
.css-1uhh2s4 .MuiMenuItemIcon-root { min-width: unset; }
.css-1ahntzt { background-color: transparent; outline: 0px; border: 0px; margin: 0px; border-radius: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; color: inherit; display: flex; -moz-box-pack: start; justify-content: flex-start; -moz-box-align: center; align-items: center; position: relative; text-decoration: none; min-height: 48px; box-sizing: border-box; white-space: nowrap; padding: 12px 16px; }
.css-1ahntzt::-moz-focus-inner { border-style: none; }
.css-1ahntzt.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-1ahntzt { print-color-adjust: exact; }
}
.css-1ahntzt:hover { text-decoration: none; background-color: rgba(235, 235, 239, 0.08); }
@media (hover: none) {
  .css-1ahntzt:hover { background-color: transparent; }
}
.css-1ahntzt.Mui-selected { background-color: rgba(234, 235, 239, 0.16); }
.css-1ahntzt.Mui-selected.Mui-focusVisible { background-color: rgba(234, 235, 239, 0.28); }
.css-1ahntzt.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.24); }
@media (hover: none) {
  .css-1ahntzt.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.16); }
}
.css-1ahntzt.Mui-focusVisible { background-color: rgba(235, 235, 239, 0.12); }
.css-1ahntzt.Mui-disabled { opacity: 0.38; }
.css-1ahntzt + .MuiDivider-root { margin-top: 4px; margin-bottom: 4px; }
.css-1ahntzt + .MuiDivider-inset { margin-left: 52px; }
.css-1ahntzt .MuiListItemText-root { margin-top: 0px; margin-bottom: 0px; }
.css-1ahntzt .MuiListItemText-inset { padding-left: 36px; }
.css-1ahntzt .MuiListItemIcon-root { min-width: 36px; }
@media (min-width: 760px) {
  .css-1ahntzt { min-height: auto; }
}
@media (min-width: 0px) {
  .css-1ahntzt { color: rgb(241, 241, 243); }
}
@media (min-width: 960px) {
  .css-1ahntzt { color: rgb(241, 241, 243); }
}
.css-1ahntzt .MuiListItemIcon-root { min-width: unset; }
.css-1ahntzt .MuiMenuItemIcon-root { min-width: unset; }
.css-2rw4ax { flex-shrink: 0; display: inline-flex; color: rgb(241, 241, 243); min-width: unset !important; margin-right: 12px; border-radius: 2px; overflow: hidden; width: 20px; height: 14px; }
.css-5rwpj6 { flex-shrink: 0; display: inline-flex; color: rgb(241, 241, 243); min-width: unset !important; margin: 0px; }
.css-1dl5zgf { user-select: none; width: 1em; height: 1em; display: inline-block; fill: currentcolor; flex-shrink: 0; transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1); font-size: 1.25rem; }
@media (min-width: 0px) {
  .css-1dl5zgf { color: rgb(241, 241, 243); }
}
@media (min-width: 960px) {
  .css-1dl5zgf { color: rgb(241, 241, 243); }
}
.css-w0pj6f { overflow: hidden; pointer-events: none; position: absolute; z-index: 0; inset: 0px; border-radius: inherit; }
.css-w851jv { min-width: 64px; box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 500; line-height: 1.5rem; font-size: 0.875rem; padding: 6px 12px; color: rgb(255, 255, 255); background: linear-gradient(248.86deg, rgb(182, 80, 158) 10.51%, rgb(46, 186, 198) 93.41%); transition: 0.2s; }
.css-w851jv:hover { text-decoration: none; background-color: rgba(241, 241, 243, 0.08); }
@media (hover: none) {
  .css-w851jv:hover { background-color: transparent; }
}
.css-w851jv.Mui-disabled { color: rgba(235, 235, 239, 0.3); }
.css-w851jv:hover { box-shadow: none; }
.css-w851jv.Mui-focusVisible { box-shadow: none; }
.css-w851jv:active { box-shadow: none; }
.css-w851jv.Mui-disabled { box-shadow: none; }
.css-w851jv:hover, .css-w851jv.Mui-focusVisible { background: linear-gradient(248.86deg, rgb(182, 80, 158) 10.51%, rgb(46, 186, 198) 93.41%); opacity: 0.9; }
.css-1y4kwyt { display: inline-flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; position: relative; box-sizing: border-box; outline: 0px; border: 0px; margin: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; text-decoration: none; min-width: 64px; box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 500; line-height: 1.5rem; font-size: 0.875rem; padding: 6px 12px; color: rgb(255, 255, 255); background: linear-gradient(248.86deg, rgb(182, 80, 158) 10.51%, rgb(46, 186, 198) 93.41%); transition: 0.2s; }
.css-1y4kwyt::-moz-focus-inner { border-style: none; }
.css-1y4kwyt.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-1y4kwyt { print-color-adjust: exact; }
}
.css-1y4kwyt:hover { text-decoration: none; background-color: rgba(241, 241, 243, 0.08); }
@media (hover: none) {
  .css-1y4kwyt:hover { background-color: transparent; }
}
.css-1y4kwyt.Mui-disabled { color: rgba(235, 235, 239, 0.3); }
.css-1y4kwyt:hover { box-shadow: none; }
.css-1y4kwyt.Mui-focusVisible { box-shadow: none; }
.css-1y4kwyt:active { box-shadow: none; }
.css-1y4kwyt.Mui-disabled { box-shadow: none; }
.css-1y4kwyt:hover, .css-1y4kwyt.Mui-focusVisible { background: linear-gradient(248.86deg, rgb(182, 80, 158) 10.51%, rgb(46, 186, 198) 93.41%); opacity: 0.9; }
.css-19ri5qq { opacity: 0; position: absolute; }
.css-19ri5qq.MuiTouchRipple-rippleVisible { opacity: 0.3; transform: scale(1); animation-name: animation-1taevns; animation-duration: 550ms; animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }
.css-19ri5qq.MuiTouchRipple-ripplePulsate { animation-duration: 200ms; }
.css-19ri5qq .MuiTouchRipple-child { opacity: 1; display: block; width: 100%; height: 100%; border-radius: 50%; background-color: currentcolor; }
.css-19ri5qq .MuiTouchRipple-childLeaving { opacity: 0; animation-name: animation-5ich1p; animation-duration: 550ms; animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }
.css-19ri5qq .MuiTouchRipple-childPulsate { position: absolute; left: 0px; top: 0px; animation-name: animation-f6tr5a; animation-duration: 2500ms; animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1); animation-iteration-count: infinite; animation-delay: 200ms; }
@keyframes animation-f6tr5a {
0% { transform: scale(1); }
50% { transform: scale(0.92); }
100% { transform: scale(1); }
}
@keyframes animation-f6tr5a {
0% { transform: scale(1); }
50% { transform: scale(0.92); }
100% { transform: scale(1); }
}
@keyframes animation-5ich1p {
0% { opacity: 1; }
100% { opacity: 0; }
}
@keyframes animation-5ich1p {
0% { opacity: 1; }
100% { opacity: 0; }
}
@keyframes animation-1taevns {
0% { transform: scale(0); opacity: 0.1; }
100% { transform: scale(1); opacity: 0.3; }
}
@keyframes animation-1taevns {
0% { transform: scale(0); opacity: 0.1; }
100% { transform: scale(1); opacity: 0.3; }
}
.css-i1lkld { min-width: 64px; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 500; line-height: 1.5rem; font-size: 0.875rem; padding: 6px 12px; color: rgb(255, 255, 255); border: 1px solid rgba(235, 235, 237, 0.12); background-color: rgb(56, 61, 81); }
.css-i1lkld:hover { text-decoration: none; background-color: rgba(241, 241, 243, 0.08); }
@media (hover: none) {
  .css-i1lkld:hover { background-color: transparent; }
}
.css-i1lkld.Mui-disabled { color: rgba(235, 235, 239, 0.3); }
.css-i1lkld:hover { box-shadow: none; }
.css-i1lkld.Mui-focusVisible { box-shadow: none; }
.css-i1lkld:active { box-shadow: none; }
.css-i1lkld.Mui-disabled { box-shadow: none; }
.css-i1lkld:hover, .css-i1lkld.Mui-focusVisible { background-color: rgb(27, 32, 48); }
.css-13ywbkq { display: inline-flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; position: relative; box-sizing: border-box; outline: 0px; margin: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; text-decoration: none; min-width: 64px; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 500; line-height: 1.5rem; font-size: 0.875rem; padding: 6px 12px; color: rgb(255, 255, 255); border: 1px solid rgba(235, 235, 237, 0.12); background-color: rgb(56, 61, 81); }
.css-13ywbkq::-moz-focus-inner { border-style: none; }
.css-13ywbkq.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-13ywbkq { print-color-adjust: exact; }
}
.css-13ywbkq:hover { text-decoration: none; background-color: rgba(241, 241, 243, 0.08); }
@media (hover: none) {
  .css-13ywbkq:hover { background-color: transparent; }
}
.css-13ywbkq.Mui-disabled { color: rgba(235, 235, 239, 0.3); }
.css-13ywbkq:hover { box-shadow: none; }
.css-13ywbkq.Mui-focusVisible { box-shadow: none; }
.css-13ywbkq:active { box-shadow: none; }
.css-13ywbkq.Mui-disabled { box-shadow: none; }
.css-13ywbkq:hover, .css-13ywbkq.Mui-focusVisible { background-color: rgb(27, 32, 48); }
.css-axw7ok { display: flex; -moz-box-align: center; align-items: center; gap: 8px; }
.css-1rzb3uu { position: relative; display: inline-flex; vertical-align: middle; flex-shrink: 0; }
.css-t6vrtd { position: relative; display: flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; flex-shrink: 0; font-family: Inter, Arial; font-size: 1.25rem; line-height: 1; border-radius: 50%; overflow: hidden; user-select: none; width: 22px; height: 22px; border: 1px solid rgba(250, 251, 252, 0.12); }
.css-1hy9t21 { width: 100%; height: 100%; text-align: center; object-fit: cover; color: transparent; text-indent: 10000px; }
.css-g2bxhl { display: flex; flex-flow: wrap; -moz-box-pack: center; place-content: center; -moz-box-align: center; align-items: center; position: absolute; box-sizing: border-box; font-family: Inter, Arial; font-weight: 500; font-size: 0.75rem; min-width: 20px; line-height: 1; padding: 0px 6px; height: 20px; border-radius: 10px; z-index: 1; bottom: 14%; right: 14%; transform: scale(1) translate(50%, 50%); transform-origin: 100% 100% 0px; transition: transform 195ms cubic-bezier(0.4, 0, 0.2, 1); }
.css-g2bxhl.MuiBadge-invisible { transform: scale(0) translate(50%, 50%); }
.css-j7qwjs { display: flex; flex-direction: column; }
.css-171onha { display: flex; -moz-box-align: center; align-items: center; gap: 4px; }
.css-1cwblkd { margin: 0px; font-family: Inter, Arial; font-weight: 500; line-height: 1.5rem; font-size: 0.875rem; }
.css-1mu7wm0 { display: block; background-color: rgba(241, 241, 243, 0.13); height: 1.2em; border-radius: 50%; animation: 2s ease-in-out 0.5s infinite animation-c7515d; transform: unset; }
@keyframes animation-c7515d {
0% { opacity: 1; }
50% { opacity: 0.4; }
100% { opacity: 1; }
}
@keyframes animation-c7515d {
0% { opacity: 1; }
50% { opacity: 0.4; }
100% { opacity: 1; }
}
.css-vlwc29 { background-color: rgb(41, 46, 65); color: rgb(241, 241, 243); transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1); border-radius: 4px; box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 1px, rgba(0, 0, 0, 0.25) 0px 0px 1px; background-image: none; padding: 16px 24px 24px; }
.css-94tddk { margin: 0px 0px 16px; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.009375rem; line-height: 160%; font-size: 1.125rem; height: 36px; display: flex; -moz-box-align: center; align-items: center; }
.css-cg4wfg { margin: 0px; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.009375rem; line-height: 1.5rem; font-size: 1rem; }
.css-1s10ee8 { text-decoration: underline rgba(234, 235, 239, 0.4); display: flex; }
.css-1s10ee8:hover { text-decoration-color: inherit; }
.css-1fxq9g4 { margin: 0px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 143%; font-size: 0.875rem; color: rgb(234, 235, 239); text-decoration: underline rgba(234, 235, 239, 0.4); display: flex; }
.css-1fxq9g4:hover { text-decoration-color: inherit; }
.css-26dwcd { user-select: none; width: 1em; height: 1em; display: inline-block; fill: currentcolor; flex-shrink: 0; transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1); font-size: 16px; }
.css-1e2dcm1 { z-index: 1500; pointer-events: none; }
.css-okvapm { z-index: 1500; pointer-events: none; }
.css-30ugv3 { background-color: rgb(41, 46, 65); color: rgb(241, 241, 243); transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1); border-radius: 4px; box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 1px, rgba(0, 0, 0, 0.25) 0px 0px 1px; background-image: none; margin-top: 8px; }
.css-1vfij0r { padding: 16px 24px 24px; }
.css-1ialerq { display: flex; flex-direction: row; -moz-box-align: center; align-items: center; -moz-box-pack: justify; justify-content: space-between; }
.css-1936jdx { margin: 0px; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.009375rem; line-height: 160%; font-size: 1.125rem; }
.css-2o0msg { min-width: 64px; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); color: rgb(234, 235, 239); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 500; line-height: 1.5rem; font-size: 0.875rem; padding: 6px 12px; }
.css-2o0msg:hover { text-decoration: none; background-color: rgba(234, 235, 239, 0.08); }
@media (hover: none) {
  .css-2o0msg:hover { background-color: transparent; }
}
.css-2o0msg.Mui-disabled { color: rgba(235, 235, 239, 0.3); }
.css-2o0msg:hover { box-shadow: none; }
.css-2o0msg.Mui-focusVisible { box-shadow: none; }
.css-2o0msg:active { box-shadow: none; }
.css-2o0msg.Mui-disabled { box-shadow: none; }
.css-19dxac3 { display: inline-flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; position: relative; box-sizing: border-box; background-color: transparent; outline: 0px; border: 0px; margin: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; text-decoration: none; min-width: 64px; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); color: rgb(234, 235, 239); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 500; line-height: 1.5rem; font-size: 0.875rem; padding: 6px 12px; }
.css-19dxac3::-moz-focus-inner { border-style: none; }
.css-19dxac3.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-19dxac3 { print-color-adjust: exact; }
}
.css-19dxac3:hover { text-decoration: none; background-color: rgba(234, 235, 239, 0.08); }
@media (hover: none) {
  .css-19dxac3:hover { background-color: transparent; }
}
.css-19dxac3.Mui-disabled { color: rgba(235, 235, 239, 0.3); }
.css-19dxac3:hover { box-shadow: none; }
.css-19dxac3.Mui-focusVisible { box-shadow: none; }
.css-19dxac3:active { box-shadow: none; }
.css-19dxac3.Mui-disabled { box-shadow: none; }
.css-bi23zc { display: flex; flex-direction: column; gap: 32px; margin-top: 8px; }
.css-1t8x1s2 { margin: 0px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 143%; font-size: 0.875rem; color: rgb(165, 168, 182); }
.css-1dvntee { display: flex; flex-direction: column; -moz-box-align: start; align-items: start; gap: 24px; }
.css-ucb7px { display: flex; flex-direction: column; gap: 16px; align-items: self-start; }
.css-8v90jo { display: flex; flex-direction: row; -moz-box-align: center; align-items: center; gap: 8px; }
.css-1r9kwv0 { display: flex; flex-direction: row; gap: 4px; -moz-box-align: center; align-items: center; }
.css-jc5wi5 { text-align: center; flex: 0 0 auto; font-size: 1.5rem; padding: 8px; border-radius: 50%; overflow: visible; color: rgba(235, 235, 239, 0.56); transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1); height: 24px; width: 24px; background: rgba(235, 235, 239, 0.08); }
.css-jc5wi5:hover { background-color: rgba(235, 235, 239, 0.08); }
@media (hover: none) {
  .css-jc5wi5:hover { background-color: transparent; }
}
.css-jc5wi5.Mui-disabled { background-color: transparent; color: rgba(235, 235, 239, 0.3); }
.css-17pel43 { display: inline-flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; position: relative; box-sizing: border-box; outline: 0px; border: 0px; margin: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; text-decoration: none; text-align: center; flex: 0 0 auto; font-size: 1.5rem; padding: 8px; border-radius: 50%; overflow: visible; color: rgba(235, 235, 239, 0.56); transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1); height: 24px; width: 24px; background: rgba(235, 235, 239, 0.08); }
.css-17pel43::-moz-focus-inner { border-style: none; }
.css-17pel43.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-17pel43 { print-color-adjust: exact; }
}
.css-17pel43:hover { background-color: rgba(235, 235, 239, 0.08); }
@media (hover: none) {
  .css-17pel43:hover { background-color: transparent; }
}
.css-17pel43.Mui-disabled { background-color: transparent; color: rgba(235, 235, 239, 0.3); }
.css-180iv8j { user-select: none; width: 1em; height: 1em; display: inline-block; fill: currentcolor; flex-shrink: 0; transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1); font-size: 1.5rem; padding: 4px; }
.css-1kqxfxi { margin: 0px; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.009375rem; line-height: 1.25rem; font-size: 0.875rem; color: rgb(142, 146, 163); }
.css-1rwr66l { display: flex; margin-top: 24px; }
.css-1ir4d68 { display: flex; flex-direction: column; margin-right: 25%; }
.css-ulme3a { display: inline-flex; cursor: pointer; transition: 0.2s; }
.css-ulme3a:hover { opacity: 0.5; }
.css-ampwg9 { text-align: center; flex: 0 0 auto; font-size: 1.5rem; overflow: visible; color: rgba(235, 235, 239, 0.56); transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1); display: flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; width: 14px; height: 14px; border-radius: 50%; padding: 0px; min-width: 0px; margin-left: 2px; }
.css-ampwg9:hover { background-color: rgba(235, 235, 239, 0.08); }
@media (hover: none) {
  .css-ampwg9:hover { background-color: transparent; }
}
.css-ampwg9.Mui-disabled { background-color: transparent; color: rgba(235, 235, 239, 0.3); }
.css-1osfq0k { position: relative; box-sizing: border-box; background-color: transparent; outline: 0px; border: 0px; margin: 0px 0px 0px 2px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; text-decoration: none; text-align: center; flex: 0 0 auto; font-size: 1.5rem; overflow: visible; color: rgba(235, 235, 239, 0.56); transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1); display: flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; width: 14px; height: 14px; border-radius: 50%; padding: 0px; min-width: 0px; }
.css-1osfq0k::-moz-focus-inner { border-style: none; }
.css-1osfq0k.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-1osfq0k { print-color-adjust: exact; }
}
.css-1osfq0k:hover { background-color: rgba(235, 235, 239, 0.08); }
@media (hover: none) {
  .css-1osfq0k:hover { background-color: transparent; }
}
.css-1osfq0k.Mui-disabled { background-color: transparent; color: rgba(235, 235, 239, 0.3); }
.css-jmow5f { user-select: none; width: 1em; height: 1em; display: inline-block; fill: currentcolor; flex-shrink: 0; transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1); font-size: 14px; color: rgb(142, 146, 163); border-radius: 50%; }
.css-jmow5f:hover { color: rgb(41, 182, 246); }
.css-s9ggwg { z-index: 1500; pointer-events: none; }
.css-s9ggwg[data-popper-placement*="bottom"] .MuiTooltip-arrow { top: 0px; margin-top: -0.71em; }
.css-s9ggwg[data-popper-placement*="bottom"] .MuiTooltip-arrow::before { transform-origin: 0px 100% 0px; }
.css-s9ggwg[data-popper-placement*="top"] .MuiTooltip-arrow { bottom: 0px; margin-bottom: -0.71em; }
.css-s9ggwg[data-popper-placement*="top"] .MuiTooltip-arrow::before { transform-origin: 100% 0px 0px; }
.css-s9ggwg[data-popper-placement*="right"] .MuiTooltip-arrow { left: 0px; margin-left: -0.71em; height: 1em; width: 0.71em; }
.css-s9ggwg[data-popper-placement*="right"] .MuiTooltip-arrow::before { transform-origin: 100% 100% 0px; }
.css-s9ggwg[data-popper-placement*="left"] .MuiTooltip-arrow { right: 0px; margin-right: -0.71em; height: 1em; width: 0.71em; }
.css-s9ggwg[data-popper-placement*="left"] .MuiTooltip-arrow::before { transform-origin: 0px 0px 0px; }
.css-l8ykd6 { z-index: 1500; pointer-events: none; }
.css-l8ykd6 .MuiTooltip-tooltip { color: rgb(241, 241, 243); background-color: rgb(41, 46, 65); padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 2px, rgba(0, 0, 0, 0.1) 0px 2px 10px; max-width: 280px; }
.css-l8ykd6 .MuiTooltip-arrow { color: rgb(41, 46, 65); }
.css-l8ykd6 .MuiTooltip-arrow::before { box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 2px, rgba(0, 0, 0, 0.1) 0px 2px 10px; }
.css-l8ykd6[data-popper-placement*="bottom"] .MuiTooltip-arrow { top: 0px; margin-top: -0.71em; }
.css-l8ykd6[data-popper-placement*="bottom"] .MuiTooltip-arrow::before { transform-origin: 0px 100% 0px; }
.css-l8ykd6[data-popper-placement*="top"] .MuiTooltip-arrow { bottom: 0px; margin-bottom: -0.71em; }
.css-l8ykd6[data-popper-placement*="top"] .MuiTooltip-arrow::before { transform-origin: 100% 0px 0px; }
.css-l8ykd6[data-popper-placement*="right"] .MuiTooltip-arrow { left: 0px; margin-left: -0.71em; height: 1em; width: 0.71em; }
.css-l8ykd6[data-popper-placement*="right"] .MuiTooltip-arrow::before { transform-origin: 100% 100% 0px; }
.css-l8ykd6[data-popper-placement*="left"] .MuiTooltip-arrow { right: 0px; margin-right: -0.71em; height: 1em; width: 0.71em; }
.css-l8ykd6[data-popper-placement*="left"] .MuiTooltip-arrow::before { transform-origin: 0px 0px 0px; }
.css-1ta9xnb { z-index: 1500; pointer-events: none; }
.css-1ta9xnb .MuiTooltip-tooltip { color: rgb(241, 241, 243); background-color: rgb(41, 46, 65); padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 2px, rgba(0, 0, 0, 0.1) 0px 2px 10px; max-width: 280px; }
.css-1ta9xnb .MuiTooltip-arrow { color: rgb(41, 46, 65); }
.css-1ta9xnb .MuiTooltip-arrow::before { box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 2px, rgba(0, 0, 0, 0.1) 0px 2px 10px; }
.css-1ta9xnb[data-popper-placement*="bottom"] .MuiTooltip-arrow { top: 0px; margin-top: -0.71em; }
.css-1ta9xnb[data-popper-placement*="bottom"] .MuiTooltip-arrow::before { transform-origin: 0px 100% 0px; }
.css-1ta9xnb[data-popper-placement*="top"] .MuiTooltip-arrow { bottom: 0px; margin-bottom: -0.71em; }
.css-1ta9xnb[data-popper-placement*="top"] .MuiTooltip-arrow::before { transform-origin: 100% 0px 0px; }
.css-1ta9xnb[data-popper-placement*="right"] .MuiTooltip-arrow { left: 0px; margin-left: -0.71em; height: 1em; width: 0.71em; }
.css-1ta9xnb[data-popper-placement*="right"] .MuiTooltip-arrow::before { transform-origin: 100% 100% 0px; }
.css-1ta9xnb[data-popper-placement*="left"] .MuiTooltip-arrow { right: 0px; margin-right: -0.71em; height: 1em; width: 0.71em; }
.css-1ta9xnb[data-popper-placement*="left"] .MuiTooltip-arrow::before { transform-origin: 0px 0px 0px; }
.css-1ab1w3v { margin: 0px; font-family: Inter, Arial; font-weight: 600; letter-spacing: unset; line-height: 133.4%; font-size: 1.3125rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; display: inline-flex; flex-direction: row; -moz-box-align: center; align-items: center; position: relative; }
.css-odk21d { margin: 4px 0px 0px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 143%; font-size: 0.875rem; color: rgb(165, 168, 182); }
.css-4pq6pi { color: rgb(165, 168, 182); text-decoration: underline; margin-left: 4px; }
.css-14dz41l { margin: 0px 0px 0px 4px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 143%; font-size: 0.875rem; color: rgb(165, 168, 182); text-decoration: underline; }
.css-1j6cneu { margin: 24px 0px 0px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 143%; font-size: 0.875rem; color: rgb(142, 146, 163); }
.css-1301pmg { margin: 0px; flex-shrink: 0; border-width: 0px 0px thin; border-style: solid; border-color: rgba(235, 235, 239, 0.08); }
.css-cyk6x5 { padding: 24px; display: flex; flex-direction: column; gap: 8px; }
.css-kmmvcs { min-width: 64px; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); color: rgba(0, 0, 0, 0.87); background-color: rgb(234, 235, 239); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.02875rem; line-height: 1.5rem; font-size: 1rem; padding: 10px 24px; width: 100%; }
.css-kmmvcs:hover { text-decoration: none; background-color: rgb(210, 212, 220); box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px; }
@media (hover: none) {
  .css-kmmvcs:hover { background-color: rgb(234, 235, 239); }
}
.css-kmmvcs:active { box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px; }
.css-kmmvcs.Mui-focusVisible { box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px; }
.css-kmmvcs.Mui-disabled { color: rgba(235, 235, 239, 0.3); box-shadow: none; background-color: rgba(235, 235, 239, 0.12); }
.css-kmmvcs:hover { box-shadow: none; }
.css-kmmvcs.Mui-focusVisible { box-shadow: none; }
.css-kmmvcs:active { box-shadow: none; }
.css-kmmvcs.Mui-disabled { box-shadow: none; }
.css-1c7ud3q { display: inline-flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; position: relative; box-sizing: border-box; outline: 0px; border: 0px; margin: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; text-decoration: none; min-width: 64px; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); color: rgba(0, 0, 0, 0.87); background-color: rgb(234, 235, 239); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.02875rem; line-height: 1.5rem; font-size: 1rem; padding: 10px 24px; width: 100%; }
.css-1c7ud3q::-moz-focus-inner { border-style: none; }
.css-1c7ud3q.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-1c7ud3q { print-color-adjust: exact; }
}
.css-1c7ud3q:hover { text-decoration: none; background-color: rgb(210, 212, 220); box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px; }
@media (hover: none) {
  .css-1c7ud3q:hover { background-color: rgb(234, 235, 239); }
}
.css-1c7ud3q:active { box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px; }
.css-1c7ud3q.Mui-focusVisible { box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px; }
.css-1c7ud3q.Mui-disabled { color: rgba(235, 235, 239, 0.3); box-shadow: none; background-color: rgba(235, 235, 239, 0.12); }
.css-1c7ud3q:hover { box-shadow: none; }
.css-1c7ud3q.Mui-focusVisible { box-shadow: none; }
.css-1c7ud3q:active { box-shadow: none; }
.css-1c7ud3q.Mui-disabled { box-shadow: none; }
.css-1gtu372 { text-decoration: none; padding: 24px; display: flex; flex-wrap: wrap; -moz-box-pack: justify; justify-content: space-between; border-bottom: 1px solid rgba(235, 235, 239, 0.08); }
.css-bufqkx { margin: 0px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 143%; font-size: 0.875rem; color: rgb(234, 235, 239); text-decoration: none; padding: 24px; display: flex; flex-wrap: wrap; -moz-box-pack: justify; justify-content: space-between; border-bottom: 1px solid rgba(235, 235, 239, 0.08); }
.css-1oiqa56 { margin: 0px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 143%; font-size: 0.875rem; color: rgb(234, 235, 239); text-decoration: none; padding: 24px; display: flex; flex-wrap: wrap; -moz-box-pack: justify; justify-content: space-between; border-bottom: 1px solid rgba(235, 235, 239, 0.08); }
.css-1gb8agv { gap: 8px; display: flex; flex-direction: column; -moz-box-pack: justify; justify-content: space-between; }
@media (min-width: 0px) {
  .css-1gb8agv { width: 100%; padding-right: 0px; }
}
@media (min-width: 1280px) {
  .css-1gb8agv { width: 70%; padding-right: 32px; }
}
.css-2j5iyq { display: flex; flex-direction: row; gap: 12px; -moz-box-align: center; align-items: center; }
.css-5ck20f { font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.00625rem; line-height: 1rem; font-size: 0.75rem; color: rgb(102, 187, 106); border: 1px solid rgba(102, 187, 106, 0.5); padding: 2px 8px; border-radius: 4px; display: inline-flex; -moz-box-align: center; align-items: center; }
.css-1a8e2hd { margin: 0px; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.009375rem; line-height: 160%; font-size: 1.125rem; overflow: hidden; text-overflow: ellipsis; }
.css-18g3jbb { margin: 0px 4px 0px 0px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1.25rem; font-size: 0.875rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; display: inline-flex; flex-direction: row; -moz-box-align: center; align-items: center; position: relative; }
.css-1wdnhoq { margin: 0px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: rgb(165, 168, 182); display: inline-flex; flex-direction: row; -moz-box-align: center; align-items: center; position: relative; }
.css-g4z180 { margin: 0px 0px 0px 2px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; color: rgb(165, 168, 182); }
.css-oi2ryi { position: relative; width: 100%; height: 8px; background-color: rgba(235, 235, 239, 0.08); display: block; border-radius: 6px; }
.css-14s30ua { position: absolute; top: 0px; left: 0px; width: 100%; max-width: 100%; height: 8px; background-color: rgb(102, 187, 106); display: block; border-radius: 6px; }
.css-1qxqp2f { position: absolute; top: 0px; left: 0px; width: 0%; max-width: 100%; height: 8px; background-color: rgb(229, 115, 115); display: block; border-radius: 6px; }
.css-1czjwln { display: flex; margin-bottom: 16px; }
@media (min-width: 0px) {
  .css-1czjwln { align-items: flex-start; flex-direction: column; }
}
@media (min-width: 640px) {
  .css-1czjwln { -moz-box-align: center; align-items: center; flex-direction: row; }
}
.css-gr0tg3 { display: flex; align-items: flex-start; flex-wrap: wrap; margin-bottom: 0px; }
.css-115cb67 { margin-right: 8px; }
.css-115cb67 .MuiOutlinedInput-notchedOutline { border: medium; }
.css-1s2gcw8 { display: inline-flex; flex-direction: column; position: relative; min-width: 0px; padding: 0px; margin: 0px 8px 0px 0px; border: 0px; vertical-align: top; }
.css-1s2gcw8 .MuiOutlinedInput-notchedOutline { border: medium; }
.css-1ypy5va { color: rgb(241, 241, 243); line-height: 1.4375em; box-sizing: border-box; cursor: text; display: inline-flex; -moz-box-align: center; align-items: center; position: relative; border-radius: 6px; border-color: rgba(235, 235, 239, 0.08); }
.css-1ypy5va.Mui-disabled { color: rgb(98, 103, 123); cursor: default; }
.css-1ypy5va:hover .MuiOutlinedInput-notchedOutline { border-color: rgb(241, 241, 243); }
@media (hover: none) {
  .css-1ypy5va:hover .MuiOutlinedInput-notchedOutline { border-color: rgba(255, 255, 255, 0.23); }
}
.css-1ypy5va.Mui-focused .MuiOutlinedInput-notchedOutline { border-color: rgb(234, 235, 239); border-width: 2px; }
.css-1ypy5va.Mui-error .MuiOutlinedInput-notchedOutline { border-color: rgb(244, 67, 54); }
.css-1ypy5va.Mui-disabled .MuiOutlinedInput-notchedOutline { border-color: rgba(235, 235, 239, 0.3); }
.css-1ypy5va:hover .MuiOutlinedInput-notchedOutline { border-color: rgb(203, 205, 216); }
.css-1ypy5va.Mui-focused .MuiOutlinedInput-notchedOutline { border-color: rgb(203, 205, 216); }
.css-1ypy5va.MarketSwitcher__select .MuiSelect-outlined { padding-left: 0px; padding-top: 0px; padding-bottom: 0px; background-color: transparent !important; }
.css-1ypy5va .MuiSelect-icon { color: rgb(241, 241, 243); }
.css-hjllk8 { margin-right: 8px; width: 32px; height: 32px; position: relative; }
.css-15vg6gj { margin: 0px 4px 0px 0px; font-family: Inter, Arial; font-weight: 700; letter-spacing: 0.015625rem; line-height: 123.5%; font-size: 2rem; color: rgb(255, 255, 255); }
.css-1tgkox5 { color: rgb(255, 255, 255); padding-left: 8px; padding-right: 8px; border-radius: 12px; background: linear-gradient(248.86deg, rgb(182, 80, 158) 10.51%, rgb(46, 186, 198) 93.41%); display: flex; -moz-box-align: center; align-items: center; }
.css-fo7h32 { user-select: none; width: 1em; height: 1em; display: inline-block; fill: currentcolor; flex-shrink: 0; transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1); font-size: 1.5rem; margin-left: 4px; color: rgb(241, 241, 243); }
.css-10qjsex { margin: 2px 0px 0px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; color: rgb(255, 255, 255); font-size: 0.85rem; overflow-wrap: break-word; white-space: normal; line-height: 1.3; max-width: 100%; }
.css-ltjh6b { display: flex; -moz-box-align: center; align-items: center; }
@media (min-width: 0px) {
  .css-ltjh6b { width: calc(50% - 12px); }
}
@media (min-width: 640px) {
  .css-ltjh6b { width: unset; }
}
.css-18biwo { display: inline-flex; -moz-box-align: center; align-items: center; }
.css-1x4zjhu { margin: 0px; font-family: Inter, Arial; font-weight: 800; line-height: 133.4%; font-size: 1.3125rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; display: inline-flex; flex-direction: row; -moz-box-align: center; align-items: center; position: relative; }
.css-vj5di1 { margin: 0px 2px 0px 0px; font-family: Inter, Arial; font-weight: 500; line-height: 133.4%; font-size: 1.3125rem; color: rgb(165, 168, 182); }
.css-1fgc1cp { margin: 0px; font-family: Inter, Arial; font-weight: 500; line-height: 133.4%; font-size: 1.3125rem; opacity: 0.7; }
@media (min-width: 0px) {
  .css-duo07e { display: flex; -moz-box-pack: center; justify-content: center; margin-bottom: 12px; }
}
@media (min-width: 640px) {
  .css-duo07e { -moz-box-pack: start; justify-content: flex-start; margin-bottom: 16px; display: none; }
}
@media (min-width: 1280px) {
  .css-duo07e { display: none; }
}
.css-epprj8 { background-color: rgb(56, 61, 81); border: 1px solid rgba(235, 235, 237, 0.12); padding: 4px; height: 44px; }
@media (min-width: 0px) {
  .css-epprj8 { width: 100%; }
}
@media (min-width: 640px) {
  .css-epprj8 { width: 359px; }
}
.css-mehr4l { display: inline-flex; border-radius: 4px; background-color: rgb(56, 61, 81); border: 1px solid rgba(235, 235, 237, 0.12); padding: 4px; height: 44px; }
.css-mehr4l .MuiToggleButtonGroup-grouped.Mui-selected + .MuiToggleButtonGroup-grouped.Mui-selected { border-left: 0px; margin-left: 0px; }
.css-mehr4l .MuiToggleButtonGroup-firstButton, .css-mehr4l .MuiToggleButtonGroup-middleButton { border-top-right-radius: 0px; border-bottom-right-radius: 0px; }
.css-mehr4l .MuiToggleButtonGroup-lastButton, .css-mehr4l .MuiToggleButtonGroup-middleButton { margin-left: -1px; border-left: 1px solid transparent; border-top-left-radius: 0px; border-bottom-left-radius: 0px; }
.css-mehr4l .MuiToggleButtonGroup-lastButton.Mui-disabled, .css-mehr4l .MuiToggleButtonGroup-middleButton.Mui-disabled { border-left: 1px solid transparent; }
@media (min-width: 0px) {
  .css-mehr4l { width: 100%; }
}
@media (min-width: 640px) {
  .css-mehr4l { width: 359px; }
}
.css-1qdyvok { display: flex; -moz-box-pack: justify; justify-content: space-between; align-items: flex-start; }
.css-bf0ye5 { position: relative; width: calc(50% - 8px); }
// @media (min-width: 0px) {
//   .css-bf0ye5 { display: block; }
// }
@media (max-width: 720px) {
  .css-bf0ye5 { display: block; width:100%;}
}
@media (min-width: 1280px) {
  .css-bf0ye5 { display: block; }
}
.css-133srx4 { background-color: rgb(41, 46, 65); color: rgb(241, 241, 243); transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1); border-radius: 4px; box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 1px, rgba(0, 0, 0, 0.25) 0px 0px 1px; background-image: none; margin-top: 0px; border: 1px solid rgba(235, 235, 239, 0.08); }
.css-19zr2gl { display: flex; -moz-box-align: center; align-items: center; -moz-box-pack: justify; justify-content: space-between; }
@media (min-width: 0px) {
  .css-19zr2gl { padding: 14px 16px; }
}
@media (min-width: 640px) {
  .css-19zr2gl { padding: 16px 24px; }
}
.css-iwds49 { width: 100%; display: flex; padding-top: 3.6px; padding-bottom: 3.6px; }
@media (min-width: 0px) {
  .css-iwds49 { align-items: flex-start; flex-direction: column; }
}
@media (min-width: 640px) {
  .css-iwds49 { -moz-box-align: center; align-items: center; flex-direction: row; }
}
.css-upncnh { margin: 0px 16px 0px 0px; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.009375rem; line-height: 160%; font-size: 1.125rem; }
.css-1dm56o2 { display: flex; -moz-box-align: center; align-items: center; overflow-x: auto; }
@media (min-width: 0px) {
  .css-1dm56o2 { padding-left: 16px; padding-right: 16px; padding-bottom: 8px; }
}
@media (min-width: 640px) {
  .css-1dm56o2 { padding-left: 24px; padding-right: 24px; padding-bottom: 0px; }
}
.css-13o7eu2 { display: block; }
.css-1xifpgy { }
@media (min-width: 0px) {
  .css-1xifpgy { padding: 14px 16px 24px; }
}
@media (min-width: 640px) {
  .css-1xifpgy { padding-left: 24px; padding-right: 24px; padding-top: 22px; }
}
.css-7l9tvd { background-color: rgb(41, 46, 65); color: rgb(241, 241, 243); transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1); border-radius: 4px; box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 1px, rgba(0, 0, 0, 0.25) 0px 0px 1px; background-image: none; margin-top: 16px; border: 1px solid rgba(235, 235, 239, 0.08); }
.css-1wsmwia { display: flex; align-items: flex-end; padding: 16px 16px 4px; position: sticky; top: 0px; z-index: 100; background-color: rgb(41, 46, 65); border-bottom: 1px solid rgba(235, 235, 239, 0.08); border-color: rgba(235, 235, 239, 0.08); }
.css-zl0cma { display: flex; flex-direction: row; -moz-box-align: center; align-items: center; -moz-box-pack: start; justify-content: flex-start; flex: 1 1 0%; min-width: 70px; overflow: visible; padding: 4px; }
.css-zmw4em { margin: 0px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.00625rem; line-height: 1rem; font-size: 0.75rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: rgb(165, 168, 182); cursor: default; display: inline-flex; -moz-box-align: center; align-items: center; }
.css-11udp8r { display: flex; flex-direction: column; -moz-box-align: center; align-items: center; -moz-box-pack: end; justify-content: flex-end; flex: 1 1 0%; min-width: 70px; overflow: visible; padding: 4px; }
.css-1xwkwbj { display: flex; -moz-box-align: center; align-items: center; -moz-box-pack: end; justify-content: flex-end; max-width: 160px; min-width: 160px; flex: 1 1 0%; }
.css-1xwkwbj .MuiButton-root { margin-left: 6px; }
.css-1qm0evb { display: flex; -moz-box-align: center; align-items: center; min-height: 71px; padding-left: 16px; padding-right: 16px; }
.css-1qm0evb:not(:last-child) { border-bottom: 1px solid rgba(235, 235, 239, 0.08); border-color: rgba(235, 235, 239, 0.08); }
.css-b3rrrh { display: flex; flex-direction: row; -moz-box-align: center; align-items: center; -moz-box-pack: start; justify-content: flex-start; flex: 1 1 0%; min-width: 70px; max-width: 160px; overflow: visible; padding: 4px; }
.css-1gk33hh { display: block; background-color: rgba(241, 241, 243, 0.13); height: auto; margin-top: 0px; margin-bottom: 0px; transform-origin: 0px 55% 0px; border-radius: 4px / 6.7px; animation: 2s ease-in-out 0.5s infinite animation-c7515d; transform: unset; margin-left: 12px; }
.css-1gk33hh:empty::before { content: " "; }
@keyframes animation-c7515d {
0% { opacity: 1; }
50% { opacity: 0.4; }
100% { opacity: 1; }
}
@keyframes animation-c7515d {
0% { opacity: 1; }
50% { opacity: 0.4; }
100% { opacity: 1; }
}
.css-7k1q6n { display: block; background-color: rgba(241, 241, 243, 0.13); height: auto; margin-top: 0px; margin-bottom: 0px; transform-origin: 0px 55% 0px; border-radius: 4px / 6.7px; animation: 2s ease-in-out 0.5s infinite animation-c7515d; transform: unset; margin-left: 6px; }
.css-7k1q6n:empty::before { content: " "; }
@keyframes animation-c7515d {
0% { opacity: 1; }
50% { opacity: 0.4; }
100% { opacity: 1; }
}
@keyframes animation-c7515d {
0% { opacity: 1; }
50% { opacity: 0.4; }
100% { opacity: 1; }
}
.css-1wbia9h { position: relative; width: calc(50% - 8px); }
// @media (min-width: 0px) {
//   .css-1wbia9h { display: none; }
// }
@media (max-width: 720px) {
  .css-1wbia9h { display: block; width:100%;}
}
@media (min-width: 720px) {
  .css-1wbia9h { display: block; }
}
@media (min-width: 1280px) {
  .css-1wbia9h { display: block; }
}
.css-mddclq { position: absolute; top: -90px; right: 0px; }
.css-28bx7w { min-width: 64px; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.02875rem; line-height: 1.25rem; text-transform: uppercase; font-size: 0.625rem; padding: 0px 6px; color: rgb(255, 255, 255); border: 1px solid rgba(235, 235, 237, 0.12); background-color: rgb(56, 61, 81); }
.css-28bx7w:hover { text-decoration: none; background-color: rgba(241, 241, 243, 0.08); }
@media (hover: none) {
  .css-28bx7w:hover { background-color: transparent; }
}
.css-28bx7w.Mui-disabled { color: rgba(235, 235, 239, 0.3); }
.css-28bx7w:hover { box-shadow: none; }
.css-28bx7w.Mui-focusVisible { box-shadow: none; }
.css-28bx7w:active { box-shadow: none; }
.css-28bx7w.Mui-disabled { box-shadow: none; }
.css-28bx7w:hover, .css-28bx7w.Mui-focusVisible { background-color: rgb(27, 32, 48); }
.css-kw8qku { display: inline-flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; position: relative; box-sizing: border-box; outline: 0px; margin: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; text-decoration: none; min-width: 64px; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.02875rem; line-height: 1.25rem; text-transform: uppercase; font-size: 0.625rem; padding: 0px 6px; color: rgb(255, 255, 255); border: 1px solid rgba(235, 235, 237, 0.12); background-color: rgb(56, 61, 81); }
.css-kw8qku::-moz-focus-inner { border-style: none; }
.css-kw8qku.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-kw8qku { print-color-adjust: exact; }
}
.css-kw8qku:hover { text-decoration: none; background-color: rgba(241, 241, 243, 0.08); }
@media (hover: none) {
  .css-kw8qku:hover { background-color: transparent; }
}
.css-kw8qku.Mui-disabled { color: rgba(235, 235, 239, 0.3); }
.css-kw8qku:hover { box-shadow: none; }
.css-kw8qku.Mui-focusVisible { box-shadow: none; }
.css-kw8qku:active { box-shadow: none; }
.css-kw8qku.Mui-disabled { box-shadow: none; }
.css-kw8qku:hover, .css-kw8qku.Mui-focusVisible { background-color: rgb(27, 32, 48); }
.css-ykfiyn { margin: 0px 4px 0px 0px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 143%; font-size: 0.875rem; color: rgb(165, 168, 182); }
.css-d34u2u { min-width: 64px; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); border: 1px solid rgba(235, 235, 239, 0.08); color: rgb(234, 235, 239); box-shadow: none; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.02875rem; line-height: 1.25rem; text-transform: uppercase; font-size: 0.625rem; background: rgb(56, 61, 81); margin-left: 4px; border-radius: 4px; padding: 0px; }
.css-d34u2u:hover { text-decoration: none; background-color: rgba(234, 235, 239, 0.08); border: 1px solid rgb(234, 235, 239); }
@media (hover: none) {
  .css-d34u2u:hover { background-color: transparent; }
}
.css-d34u2u.Mui-disabled { color: rgba(235, 235, 239, 0.3); border: 1px solid rgba(235, 235, 239, 0.12); }
.css-d34u2u:hover { box-shadow: none; }
.css-d34u2u.Mui-focusVisible { box-shadow: none; }
.css-d34u2u:active { box-shadow: none; }
.css-d34u2u.Mui-disabled { box-shadow: none; }
.css-d34u2u::after { content: ""; position: absolute; inset: -1px; background: transparent; border-radius: 4px; }
.css-1tyyx5 { display: inline-flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; position: relative; box-sizing: border-box; outline: 0px; margin: 0px 0px 0px 4px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; text-decoration: none; min-width: 64px; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); border: 1px solid rgba(235, 235, 239, 0.08); color: rgb(234, 235, 239); box-shadow: none; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.02875rem; line-height: 1.25rem; text-transform: uppercase; font-size: 0.625rem; background: rgb(56, 61, 81); border-radius: 4px; padding: 0px; }
.css-1tyyx5::-moz-focus-inner { border-style: none; }
.css-1tyyx5.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-1tyyx5 { print-color-adjust: exact; }
}
.css-1tyyx5:hover { text-decoration: none; background-color: rgba(234, 235, 239, 0.08); border: 1px solid rgb(234, 235, 239); }
@media (hover: none) {
  .css-1tyyx5:hover { background-color: transparent; }
}
.css-1tyyx5.Mui-disabled { color: rgba(235, 235, 239, 0.3); border: 1px solid rgba(235, 235, 239, 0.12); }
.css-1tyyx5:hover { box-shadow: none; }
.css-1tyyx5.Mui-focusVisible { box-shadow: none; }
.css-1tyyx5:active { box-shadow: none; }
.css-1tyyx5.Mui-disabled { box-shadow: none; }
.css-1tyyx5::after { content: ""; position: absolute; inset: -1px; background: transparent; border-radius: 4px; }
.css-k6v5ma { display: inline-flex; -moz-box-align: center; align-items: center; position: relative; z-index: 1; background-color: rgb(56, 61, 81); padding-left: 4px; padding-right: 4px; border-radius: 4px; }
.css-1vxbxc4 { user-select: none; width: 1em; height: 1em; display: inline-block; fill: currentcolor; flex-shrink: 0; transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1); font-size: 12px; margin-right: 4px; color: rgb(142, 146, 163); }
.css-5bxqbt { margin: 0px; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.02875rem; line-height: 1.25rem; text-transform: uppercase; font-size: 0.625rem; color: rgb(165, 168, 182); }
.css-1mwg2jh { user-select: none; width: 1em; height: 1em; display: inline-block; fill: currentcolor; flex-shrink: 0; transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1); font-size: 12px; margin-left: 4px; color: rgb(241, 241, 243); }
.css-y9lleg .MuiMenu-paper { max-width: 280px; }
.css-eqbdgs .MuiMenu-paper { max-width: 280px; }
.css-l9ry6i { display: flex; -moz-box-align: center; align-items: center; cursor: pointer; min-height: 28px; padding-left: 12px; }
.css-l9ry6i span { width: 14px; height: 2px; background-color: rgb(165, 168, 182); position: relative; margin-left: 4px; }
.css-l9ry6i span::after { content: ""; position: absolute; width: 14px; height: 2px; background-color: rgb(165, 168, 182); transition: 0.2s; transform: rotate(0deg); opacity: 0; }
.css-1p541t6 { margin: 0px; font-family: Inter, Arial; font-weight: 500; line-height: 1.5rem; font-size: 0.875rem; color: rgb(165, 168, 182); }
@media (min-width: 0px) {
  .css-35dwn7 { margin-bottom: 8px; }
}
@media (min-width: 640px) {
  .css-35dwn7 { margin-bottom: 0px; }
}
.css-186lrzm { padding-left: 24px; padding-right: 24px; margin-bottom: 16px; }
.css-7rafce { display: flex; box-shadow: none; border-radius: 4px; padding: 8px 12px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; color: rgb(169, 226, 251); background: rgb(7, 31, 46); margin-bottom: 24px; -moz-box-align: center; align-items: center; width: 100%; }
.css-7rafce .MuiAlert-icon { color: rgb(41, 182, 246); }
.css-7rafce .MuiAlert-message { padding: 2px 0px; }
.css-7rafce .MuiAlert-icon { padding: 0px; opacity: 1; }
.css-7rafce .MuiAlert-icon .MuiSvgIcon-root { font-size: 1.25rem; }
.css-7rafce a { font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; text-decoration: underline; }
.css-7rafce a:hover { text-decoration: none; }
.css-7rafce .MuiButton-text { font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; text-decoration: underline; padding: 0px; margin: 0px; min-width: unset; }
.css-7rafce .MuiButton-text:hover { text-decoration: none; background: transparent; }
.css-7rafce a { color: rgb(169, 226, 251); }
.css-7rafce .MuiButton-text { color: rgb(169, 226, 251); }
.css-1lh2l3q { transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1); display: flex; box-shadow: none; border-radius: 4px; padding: 8px 12px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; color: rgb(169, 226, 251); background: rgb(7, 31, 46); margin-bottom: 24px; -moz-box-align: center; align-items: center; width: 100%; }
.css-1lh2l3q .MuiAlert-icon { color: rgb(41, 182, 246); }
.css-1lh2l3q .MuiAlert-message { padding: 2px 0px; }
.css-1lh2l3q .MuiAlert-icon { padding: 0px; opacity: 1; }
.css-1lh2l3q .MuiAlert-icon .MuiSvgIcon-root { font-size: 1.25rem; }
.css-1lh2l3q a { font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; text-decoration: underline; }
.css-1lh2l3q a:hover { text-decoration: none; }
.css-1lh2l3q .MuiButton-text { font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; text-decoration: underline; padding: 0px; margin: 0px; min-width: unset; }
.css-1lh2l3q .MuiButton-text:hover { text-decoration: none; background: transparent; }
.css-1lh2l3q a { color: rgb(169, 226, 251); }
.css-1lh2l3q .MuiButton-text { color: rgb(169, 226, 251); }
.css-1l54tgj { margin-right: 12px; padding: 7px 0px; display: flex; font-size: 22px; opacity: 0.9; }
.css-115dves { user-select: none; width: 1em; height: 1em; display: inline-block; fill: currentcolor; flex-shrink: 0; transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1); font-size: 1.5rem; color: rgb(41, 182, 246); }
.css-1xsto0d { padding: 8px 0px; min-width: 0px; overflow: auto; }
.css-u35d3s { display: flex; -moz-box-align: center; align-items: center; min-height: 71px; padding-left: 16px; padding-right: 16px; border-top-width: 1px; border-top-style: solid; border-bottom: 1px solid rgba(235, 235, 239, 0.08); border-color: rgba(235, 235, 239, 0.08); margin-bottom: 8px; }
.css-u35d3s:not(:last-child) { border-bottom: 1px solid rgba(235, 235, 239, 0.08); border-color: rgba(235, 235, 239, 0.08); }
.css-15czs8k { display: flex; flex-direction: row; -moz-box-align: center; align-items: center; -moz-box-pack: start; justify-content: flex-start; flex: 1 1 0%; min-width: 70px; max-width: 130px; overflow: visible; padding: 4px; }
.css-100tx80 { text-decoration: none; display: inline-flex; -moz-box-align: center; align-items: center; }
.css-q97pgc { margin: 0px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 143%; font-size: 0.875rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: rgb(234, 235, 239); text-decoration: none; display: inline-flex; -moz-box-align: center; align-items: center; }
.css-17910yg { margin: 0px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 143%; font-size: 0.875rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: rgb(234, 235, 239); text-decoration: none; display: inline-flex; -moz-box-align: center; align-items: center; }
.css-1ux336h { user-select: none; width: 1em; height: 1em; overflow: hidden; text-align: center; flex-shrink: 0; font-size: 2rem; display: flex; position: relative; border-radius: 50%; }
.css-mgqwsh { margin: 0px 0px 0px 12px; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.009375rem; line-height: 1.25rem; font-size: 0.875rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.css-1dkatbo { z-index: 1500; pointer-events: none; }
.css-1dkatbo[data-popper-placement*="bottom"] .MuiTooltip-arrow { top: 0px; margin-top: -0.71em; }
.css-1dkatbo[data-popper-placement*="bottom"] .MuiTooltip-arrow::before { transform-origin: 0px 100% 0px; }
.css-1dkatbo[data-popper-placement*="top"] .MuiTooltip-arrow { bottom: 0px; margin-bottom: -0.71em; }
.css-1dkatbo[data-popper-placement*="top"] .MuiTooltip-arrow::before { transform-origin: 100% 0px 0px; }
.css-1dkatbo[data-popper-placement*="right"] .MuiTooltip-arrow { left: 0px; margin-left: -0.71em; height: 1em; width: 0.71em; }
.css-1dkatbo[data-popper-placement*="right"] .MuiTooltip-arrow::before { transform-origin: 100% 100% 0px; }
.css-1dkatbo[data-popper-placement*="left"] .MuiTooltip-arrow { right: 0px; margin-right: -0.71em; height: 1em; width: 0.71em; }
.css-1dkatbo[data-popper-placement*="left"] .MuiTooltip-arrow::before { transform-origin: 0px 0px 0px; }
.css-15z4zan { margin: 0px 0px 0px -4px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.00625rem; line-height: 1rem; font-size: 0.75rem; }
.css-mjvr3 { display: flex; flex-direction: column; -moz-box-align: center; align-items: center; -moz-box-pack: end; justify-content: flex-end; flex: 1 1 0%; min-width: 70px; overflow: visible; padding: 0px; }
.css-u6v8er { display: flex; flex-direction: column; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; }
.css-1r4ptf4 { margin: 0px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1.25rem; font-size: 0.875rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: rgb(98, 103, 123); display: inline-flex; flex-direction: row; -moz-box-align: center; align-items: center; position: relative; }
.css-1bwr8lm { display: flex; flex-direction: column; -moz-box-pack: center; justify-content: center; text-align: center; flex: 2 1 auto; }
@media (min-width: 0px) {
  .css-1bwr8lm { align-items: flex-end; }
}
@media (min-width: 640px) {
  .css-1bwr8lm { -moz-box-align: center; align-items: center; }
}
.css-gmuwbf { display: flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; }
.css-uefm4v { margin: 0px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1.25rem; font-size: 0.875rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; display: inline-flex; flex-direction: row; -moz-box-align: center; align-items: center; position: relative; }
.css-cr32lm { margin: 0px 2px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1.25rem; font-size: 0.875rem; color: rgb(165, 168, 182); }
.css-d8aql2 { margin: 0px 0px 0px 2px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1.25rem; font-size: 0.875rem; color: rgb(165, 168, 182); }
.css-wg21nf { min-width: 64px; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); color: rgba(0, 0, 0, 0.87); background-color: rgb(234, 235, 239); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 500; line-height: 1.5rem; font-size: 0.875rem; padding: 6px 12px; }
.css-wg21nf:hover { text-decoration: none; background-color: rgb(210, 212, 220); box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px; }
@media (hover: none) {
  .css-wg21nf:hover { background-color: rgb(234, 235, 239); }
}
.css-wg21nf:active { box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px; }
.css-wg21nf.Mui-focusVisible { box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px; }
.css-wg21nf.Mui-disabled { color: rgba(235, 235, 239, 0.3); box-shadow: none; background-color: rgba(235, 235, 239, 0.12); }
.css-wg21nf:hover { box-shadow: none; }
.css-wg21nf.Mui-focusVisible { box-shadow: none; }
.css-wg21nf:active { box-shadow: none; }
.css-wg21nf.Mui-disabled { box-shadow: none; }
.css-moyn3y { display: inline-flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; position: relative; box-sizing: border-box; outline: 0px; border: 0px; margin: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; text-decoration: none; min-width: 64px; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); color: rgba(0, 0, 0, 0.87); background-color: rgb(234, 235, 239); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 500; line-height: 1.5rem; font-size: 0.875rem; padding: 6px 12px; }
.css-moyn3y::-moz-focus-inner { border-style: none; }
.css-moyn3y.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-moyn3y { print-color-adjust: exact; }
}
.css-moyn3y:hover { text-decoration: none; background-color: rgb(210, 212, 220); box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px; }
@media (hover: none) {
  .css-moyn3y:hover { background-color: rgb(234, 235, 239); }
}
.css-moyn3y:active { box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px; }
.css-moyn3y.Mui-focusVisible { box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px; }
.css-moyn3y.Mui-disabled { color: rgba(235, 235, 239, 0.3); box-shadow: none; background-color: rgba(235, 235, 239, 0.12); }
.css-moyn3y:hover { box-shadow: none; }
.css-moyn3y.Mui-focusVisible { box-shadow: none; }
.css-moyn3y:active { box-shadow: none; }
.css-moyn3y.Mui-disabled { box-shadow: none; }
.css-zrpt14 { min-width: 64px; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); border: 1px solid rgba(235, 235, 239, 0.08); color: rgb(234, 235, 239); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 500; line-height: 1.5rem; font-size: 0.875rem; padding: 6px 12px; background: rgb(56, 61, 81); }
.css-zrpt14:hover { text-decoration: none; background-color: rgba(234, 235, 239, 0.08); border: 1px solid rgb(234, 235, 239); }
@media (hover: none) {
  .css-zrpt14:hover { background-color: transparent; }
}
.css-zrpt14.Mui-disabled { color: rgba(235, 235, 239, 0.3); border: 1px solid rgba(235, 235, 239, 0.12); }
.css-zrpt14:hover { box-shadow: none; }
.css-zrpt14.Mui-focusVisible { box-shadow: none; }
.css-zrpt14:active { box-shadow: none; }
.css-zrpt14.Mui-disabled { box-shadow: none; }
.css-18u8525 { display: inline-flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; position: relative; box-sizing: border-box; outline: 0px; margin: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; text-decoration: none; min-width: 64px; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); border: 1px solid rgba(235, 235, 239, 0.08); color: rgb(234, 235, 239); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 500; line-height: 1.5rem; font-size: 0.875rem; padding: 6px 12px; background: rgb(56, 61, 81); }
.css-18u8525::-moz-focus-inner { border-style: none; }
.css-18u8525.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-18u8525 { print-color-adjust: exact; }
}
.css-18u8525:hover { text-decoration: none; background-color: rgba(234, 235, 239, 0.08); border: 1px solid rgb(234, 235, 239); }
@media (hover: none) {
  .css-18u8525:hover { background-color: transparent; }
}
.css-18u8525.Mui-disabled { color: rgba(235, 235, 239, 0.3); border: 1px solid rgba(235, 235, 239, 0.12); }
.css-18u8525:hover { box-shadow: none; }
.css-18u8525.Mui-focusVisible { box-shadow: none; }
.css-18u8525:active { box-shadow: none; }
.css-18u8525.Mui-disabled { box-shadow: none; }
.css-1j0fgp8 { display: inline-flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; position: relative; box-sizing: border-box; outline: 0px; margin: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; text-decoration: none; min-width: 64px; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); border: 1px solid rgba(235, 235, 239, 0.08); color: rgb(234, 235, 239); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 500; line-height: 1.5rem; font-size: 0.875rem; padding: 6px 12px; background: rgb(56, 61, 81); }
.css-1j0fgp8::-moz-focus-inner { border-style: none; }
.css-1j0fgp8.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-1j0fgp8 { print-color-adjust: exact; }
}
.css-1j0fgp8:hover { text-decoration: none; background-color: rgba(234, 235, 239, 0.08); border: 1px solid rgb(234, 235, 239); }
@media (hover: none) {
  .css-1j0fgp8:hover { background-color: transparent; }
}
.css-1j0fgp8.Mui-disabled { color: rgba(235, 235, 239, 0.3); border: 1px solid rgba(235, 235, 239, 0.12); }
.css-1j0fgp8:hover { box-shadow: none; }
.css-1j0fgp8.Mui-focusVisible { box-shadow: none; }
.css-1j0fgp8:active { box-shadow: none; }
.css-1j0fgp8.Mui-disabled { box-shadow: none; }
.css-lip87m { letter-spacing: 0.009375rem; display: inline-flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; position: relative; box-sizing: border-box; outline: 0px; margin: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; text-decoration: none; min-width: 64px; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); border: 1px solid rgba(235, 235, 239, 0.08); color: rgb(234, 235, 239); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 500; line-height: 1.5rem; font-size: 0.875rem; padding: 6px 12px; background: rgb(56, 61, 81); }
.css-lip87m::-moz-focus-inner { border-style: none; }
.css-lip87m.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-lip87m { print-color-adjust: exact; }
}
.css-lip87m:hover { text-decoration: none; background-color: rgba(234, 235, 239, 0.08); border: 1px solid rgb(234, 235, 239); }
@media (hover: none) {
  .css-lip87m:hover { background-color: transparent; }
}
.css-lip87m.Mui-disabled { color: rgba(235, 235, 239, 0.3); border: 1px solid rgba(235, 235, 239, 0.12); }
.css-lip87m:hover { box-shadow: none; }
.css-lip87m.Mui-focusVisible { box-shadow: none; }
.css-lip87m:active { box-shadow: none; }
.css-lip87m.Mui-disabled { box-shadow: none; }
.css-10ybyyq { letter-spacing: 0.009375rem; display: inline-flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; position: relative; box-sizing: border-box; outline: 0px; margin: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; text-decoration: none; min-width: 64px; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); border: 1px solid rgba(235, 235, 239, 0.08); color: rgb(234, 235, 239); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 500; line-height: 1.5rem; font-size: 0.875rem; padding: 6px 12px; background: rgb(56, 61, 81); }
.css-10ybyyq::-moz-focus-inner { border-style: none; }
.css-10ybyyq.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-10ybyyq { print-color-adjust: exact; }
}
.css-10ybyyq:hover { text-decoration: none; background-color: rgba(234, 235, 239, 0.08); border: 1px solid rgb(234, 235, 239); }
@media (hover: none) {
  .css-10ybyyq:hover { background-color: transparent; }
}
.css-10ybyyq.Mui-disabled { color: rgba(235, 235, 239, 0.3); border: 1px solid rgba(235, 235, 239, 0.12); }
.css-10ybyyq:hover { box-shadow: none; }
.css-10ybyyq.Mui-focusVisible { box-shadow: none; }
.css-10ybyyq:active { box-shadow: none; }
.css-10ybyyq.Mui-disabled { box-shadow: none; }
.css-18phtf6 { margin: 0px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.00625rem; line-height: 1rem; font-size: 0.75rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: rgb(165, 168, 182); cursor: pointer; display: inline-flex; -moz-box-align: center; align-items: center; }
.css-14dkifd { display: inline-flex; flex-direction: column; margin-left: 4px; }
.css-1hf8ilx { width: 0px; height: 0px; border-style: solid; border-width: 0px 4px 4px; border-color: transparent transparent rgba(235, 235, 239, 0.08); margin-bottom: 2px; }
.css-1ojixww { width: 0px; height: 0px; border-style: solid; border-width: 4px 4px 0px; border-color: rgba(235, 235, 239, 0.08) transparent transparent; }
.css-1241y0n { }
.css-19el3v { display: flex; flex-direction: column; -moz-box-pack: center; justify-content: center; text-align: center; }
@media (min-width: 0px) {
  .css-19el3v { align-items: flex-end; }
}
@media (min-width: 640px) {
  .css-19el3v { -moz-box-align: center; align-items: center; }
}
.css-1yxnkj0 { display: flex; -moz-box-pack: center; justify-content: center; gap: 4px; flex-wrap: wrap; flex: 0 0 50%; }
.css-d4400k { display: flex; -moz-box-align: center; align-items: center; margin-left: 4px; }
.css-17zttyw { user-select: none; width: 1em; height: 1em; display: inline-block; fill: currentcolor; flex-shrink: 0; transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1); font-size: 14px; color: rgb(244, 67, 54); }
.css-1th707o { margin: 0px 2px 0px 0px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1.25rem; font-size: 0.875rem; color: rgb(165, 168, 182); }
.css-1iry5ri { position: fixed; z-index: 1300; inset: 0px; visibility: hidden; }
.css-1iry5ri .MuiMenu-paper { max-width: 280px; }
.css-1q04zbd { padding: 8px 16px 12px; }
.css-kjpz4d { margin: 0px 0px 4px; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.009375rem; line-height: 1.25rem; font-size: 0.875rem; }
.css-1pxgetv { margin: 0px 0px 16px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; color: rgb(165, 168, 182); }
.css-1mvkkzi { color: rgb(165, 168, 182); text-decoration: underline; }
.css-3p3htd { margin: 0px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; color: rgb(165, 168, 182); text-decoration: underline; }
.css-giav4h { min-width: 64px; width: 100%; box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 500; line-height: 1.5rem; font-size: 0.875rem; padding: 6px 12px; color: rgb(255, 255, 255); background: linear-gradient(248.86deg, rgb(182, 80, 158) 10.51%, rgb(46, 186, 198) 93.41%); transition: 0.2s; }
.css-giav4h:hover { text-decoration: none; background-color: rgba(241, 241, 243, 0.08); }
@media (hover: none) {
  .css-giav4h:hover { background-color: transparent; }
}
.css-giav4h.Mui-disabled { color: rgba(235, 235, 239, 0.3); }
.css-giav4h:hover { box-shadow: none; }
.css-giav4h.Mui-focusVisible { box-shadow: none; }
.css-giav4h:active { box-shadow: none; }
.css-giav4h.Mui-disabled { box-shadow: none; }
.css-giav4h:hover, .css-giav4h.Mui-focusVisible { background: linear-gradient(248.86deg, rgb(182, 80, 158) 10.51%, rgb(46, 186, 198) 93.41%); opacity: 0.9; }
.css-1g4jcti { display: inline-flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; position: relative; box-sizing: border-box; outline: 0px; border: 0px; margin: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; text-decoration: none; min-width: 64px; width: 100%; box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 500; line-height: 1.5rem; font-size: 0.875rem; padding: 6px 12px; color: rgb(255, 255, 255); background: linear-gradient(248.86deg, rgb(182, 80, 158) 10.51%, rgb(46, 186, 198) 93.41%); transition: 0.2s; }
.css-1g4jcti::-moz-focus-inner { border-style: none; }
.css-1g4jcti.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-1g4jcti { print-color-adjust: exact; }
}
.css-1g4jcti:hover { text-decoration: none; background-color: rgba(241, 241, 243, 0.08); }
@media (hover: none) {
  .css-1g4jcti:hover { background-color: transparent; }
}
.css-1g4jcti.Mui-disabled { color: rgba(235, 235, 239, 0.3); }
.css-1g4jcti:hover { box-shadow: none; }
.css-1g4jcti.Mui-focusVisible { box-shadow: none; }
.css-1g4jcti:active { box-shadow: none; }
.css-1g4jcti.Mui-disabled { box-shadow: none; }
.css-1g4jcti:hover, .css-1g4jcti.Mui-focusVisible { background: linear-gradient(248.86deg, rgb(182, 80, 158) 10.51%, rgb(46, 186, 198) 93.41%); opacity: 0.9; }
.css-t0051x { padding-left: 24px; padding-right: 24px; }
.css-1rzcn8q { display: flex; -moz-box-pack: center; justify-content: center; flex-direction: column; }
@media (min-width: 0px) {
  .css-1rzcn8q { align-items: flex-end; }
}
@media (min-width: 640px) {
  .css-1rzcn8q { -moz-box-align: center; align-items: center; }
}
.css-5wpzg3 { display: inline-flex; cursor: pointer; transition: 0.2s; }
.css-5wpzg3:hover { opacity: 1; }
.css-1do422x { border: 1px solid rgb(255, 167, 38); color: rgb(255, 167, 38); border-radius: 4px; display: inline-flex; -moz-box-align: center; align-items: center; padding: 2px; margin-top: 2px; cursor: pointer; }
.css-1do422x:hover { opacity: 0.6; }
.css-1yhzaxq { margin: 0px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.00625rem; font-size: 0.75rem; color: rgb(255, 167, 38); line-height: 0.75rem; }
.css-nqvctb { user-select: none; width: 1em; height: 1em; display: inline-block; fill: currentcolor; flex-shrink: 0; transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1); margin-left: 3px; color: rgb(255, 167, 38); font-size: 14px; }
.css-125dh6x { transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); border: 1px solid rgba(235, 235, 239, 0.08); color: rgb(234, 235, 239); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 500; line-height: 1.5rem; font-size: 0.875rem; padding: 6px 16px; background: rgb(56, 61, 81); min-width: 0px; }
.css-125dh6x:hover { text-decoration: none; background-color: rgba(234, 235, 239, 0.08); border: 1px solid rgb(234, 235, 239); }
@media (hover: none) {
  .css-125dh6x:hover { background-color: transparent; }
}
.css-125dh6x.Mui-disabled { color: rgba(235, 235, 239, 0.3); border: 1px solid rgba(235, 235, 239, 0.12); }
.css-125dh6x:hover { box-shadow: none; }
.css-125dh6x.Mui-focusVisible { box-shadow: none; }
.css-125dh6x:active { box-shadow: none; }
.css-125dh6x.Mui-disabled { box-shadow: none; }
.css-uhikff { display: inline-flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; position: relative; box-sizing: border-box; outline: 0px; margin: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; text-decoration: none; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); border: 1px solid rgba(235, 235, 239, 0.08); color: rgb(234, 235, 239); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 500; line-height: 1.5rem; font-size: 0.875rem; padding: 6px 16px; background: rgb(56, 61, 81); min-width: 0px; }
.css-uhikff::-moz-focus-inner { border-style: none; }
.css-uhikff.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-uhikff { print-color-adjust: exact; }
}
.css-uhikff:hover { text-decoration: none; background-color: rgba(234, 235, 239, 0.08); border: 1px solid rgb(234, 235, 239); }
@media (hover: none) {
  .css-uhikff:hover { background-color: transparent; }
}
.css-uhikff.Mui-disabled { color: rgba(235, 235, 239, 0.3); border: 1px solid rgba(235, 235, 239, 0.12); }
.css-uhikff:hover { box-shadow: none; }
.css-uhikff.Mui-focusVisible { box-shadow: none; }
.css-uhikff:active { box-shadow: none; }
.css-uhikff.Mui-disabled { box-shadow: none; }
.css-hqkm93 { user-select: none; width: 1em; height: 1em; display: inline-block; fill: currentcolor; flex-shrink: 0; transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1); font-size: 1.5rem; color: rgb(102, 187, 106); }
@media (min-width: 0px) {
  .css-hqkm93 { font-size: 20px; }
}
@media (min-width: 640px) {
  .css-hqkm93 { font-size: 24px; }
}
.css-zj82os { margin: 0px; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.009375rem; line-height: 1.25rem; font-size: 0.875rem; color: rgb(165, 168, 182); }
.css-1isemmb { margin-left: 8px; }
.css-1563kme { text-align: center; flex: 0 0 auto; font-size: 1.5rem; overflow: visible; color: rgba(235, 235, 239, 0.56); transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1); display: flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; width: 18px; height: 18px; border-radius: 50%; padding: 0px; min-width: 0px; margin-left: 2px; }
.css-1563kme:hover { background-color: rgba(235, 235, 239, 0.08); }
@media (hover: none) {
  .css-1563kme:hover { background-color: transparent; }
}
.css-1563kme.Mui-disabled { background-color: transparent; color: rgba(235, 235, 239, 0.3); }
.css-2pxuid { position: relative; box-sizing: border-box; background-color: transparent; outline: 0px; border: 0px; margin: 0px 0px 0px 2px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; text-decoration: none; text-align: center; flex: 0 0 auto; font-size: 1.5rem; overflow: visible; color: rgba(235, 235, 239, 0.56); transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1); display: flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; width: 18px; height: 18px; border-radius: 50%; padding: 0px; min-width: 0px; }
.css-2pxuid::-moz-focus-inner { border-style: none; }
.css-2pxuid.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-2pxuid { print-color-adjust: exact; }
}
.css-2pxuid:hover { background-color: rgba(235, 235, 239, 0.08); }
@media (hover: none) {
  .css-2pxuid:hover { background-color: transparent; }
}
.css-2pxuid.Mui-disabled { background-color: transparent; color: rgba(235, 235, 239, 0.3); }
.css-1kikjhb { user-select: none; width: 1em; height: 1em; display: inline-block; fill: currentcolor; flex-shrink: 0; transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1); font-size: 18px; color: rgb(244, 67, 54); border-radius: 50%; }
.css-1kikjhb:hover { color: rgb(244, 67, 54); }
.css-16jy9gd { margin-left: 8px; display: flex; -moz-box-align: center; align-items: center; }
.css-10alaa8 { text-align: center; flex: 0 0 auto; font-size: 1.5rem; overflow: visible; color: rgba(235, 235, 239, 0.56); transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1); display: flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; width: 20px; height: 20px; border-radius: 50%; padding: 0px; min-width: 0px; margin-left: 2px; }
.css-10alaa8:hover { background-color: rgba(235, 235, 239, 0.08); }
@media (hover: none) {
  .css-10alaa8:hover { background-color: transparent; }
}
.css-10alaa8.Mui-disabled { background-color: transparent; color: rgba(235, 235, 239, 0.3); }
.css-1h55dmz { position: relative; box-sizing: border-box; background-color: transparent; outline: 0px; border: 0px; margin: 0px 0px 0px 2px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; text-decoration: none; text-align: center; flex: 0 0 auto; font-size: 1.5rem; overflow: visible; color: rgba(235, 235, 239, 0.56); transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1); display: flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; width: 20px; height: 20px; border-radius: 50%; padding: 0px; min-width: 0px; }
.css-1h55dmz::-moz-focus-inner { border-style: none; }
.css-1h55dmz.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-1h55dmz { print-color-adjust: exact; }
}
.css-1h55dmz:hover { background-color: rgba(235, 235, 239, 0.08); }
@media (hover: none) {
  .css-1h55dmz:hover { background-color: transparent; }
}
.css-1h55dmz.Mui-disabled { background-color: transparent; color: rgba(235, 235, 239, 0.3); }
.css-eg4kr6 { user-select: none; width: 1em; height: 1em; display: inline-block; fill: currentcolor; flex-shrink: 0; transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1); font-size: 20px; color: rgb(142, 146, 163); border-radius: 50%; }
.css-eg4kr6:hover { color: rgb(41, 182, 246); }
.css-1jqr7ck { border: 1px solid rgba(235, 235, 239, 0.08); border-radius: 4px; cursor: pointer; display: flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; transition: opacity 0.2s; background-color: transparent; }
@media (min-width: 0px) {
  .css-1jqr7ck { padding: 0px 4px; }
}
@media (min-width: 640px) {
  .css-1jqr7ck { padding: 2px 4px; }
}
.css-1jqr7ck:hover { background-color: rgba(235, 235, 239, 0.08); border-color: rgba(235, 235, 239, 0.3); }
.css-12z0wuy { margin-right: 8px; }
.css-cyw6g5 { margin: 0px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.00625rem; line-height: 1rem; font-size: 0.75rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: rgb(165, 168, 182); display: inline-flex; flex-direction: row; -moz-box-align: center; align-items: center; position: relative; }
.css-1336sl3 { margin: 0px 0px 0px 2px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.00625rem; line-height: 1rem; font-size: 0.75rem; color: rgb(165, 168, 182); }
.css-vxcmzt { display: inline-flex; }
.css-1ae12c2 { user-select: none; width: 1em; height: 1em; overflow: hidden; text-align: center; flex-shrink: 0; display: flex; position: relative; border-radius: 50%; font-size: 12px; margin-left: -4px; }
.css-bx9ij6 { position: absolute; overflow: hidden auto; min-height: 16px; max-width: calc(100% - 32px); outline: 0px; max-height: calc(100% - 96px); min-width: 120px; padding-top: 0px; padding-bottom: 0px; }
.css-1hxfo15 { background-color: rgb(41, 46, 65); color: rgb(241, 241, 243); transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1); border-radius: 4px; box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 1px, rgba(0, 0, 0, 0.25) 0px 0px 1px; background-image: none; position: absolute; overflow: hidden auto; min-height: 16px; max-width: calc(100% - 32px); outline: 0px; max-height: calc(100% - 96px); min-width: 120px; padding-top: 0px; padding-bottom: 0px; }
.css-ja8aom { outline: 0px; padding-top: 0px; padding-bottom: 0px; }
.css-us9i99 { list-style: none; margin: 0px; padding: 0px; position: relative; outline: 0px; }
.css-us9i99 .MuiMenuItem-root + .MuiDivider-root, .css-us9i99 .MuiDivider-root { margin-top: 4px; margin-bottom: 4px; }
.css-1ef4tzp { display: flex; -moz-box-pack: start; justify-content: flex-start; -moz-box-align: center; align-items: center; position: relative; text-decoration: none; min-height: 48px; box-sizing: border-box; white-space: nowrap; padding: 12px 16px; gap: 8px; }
.css-1ef4tzp:hover { text-decoration: none; background-color: rgba(235, 235, 239, 0.08); }
@media (hover: none) {
  .css-1ef4tzp:hover { background-color: transparent; }
}
.css-1ef4tzp.Mui-selected { background-color: rgba(234, 235, 239, 0.16); }
.css-1ef4tzp.Mui-selected.Mui-focusVisible { background-color: rgba(234, 235, 239, 0.28); }
.css-1ef4tzp.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.24); }
@media (hover: none) {
  .css-1ef4tzp.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.16); }
}
.css-1ef4tzp.Mui-focusVisible { background-color: rgba(235, 235, 239, 0.12); }
.css-1ef4tzp.Mui-disabled { opacity: 0.38; }
.css-1ef4tzp + .MuiDivider-root { margin-top: 4px; margin-bottom: 4px; }
.css-1ef4tzp + .MuiDivider-inset { margin-left: 52px; }
.css-1ef4tzp .MuiListItemText-root { margin-top: 0px; margin-bottom: 0px; }
.css-1ef4tzp .MuiListItemText-inset { padding-left: 36px; }
.css-1ef4tzp .MuiListItemIcon-root { min-width: 36px; }
@media (min-width: 760px) {
  .css-1ef4tzp { min-height: auto; }
}
.css-1xosv7 { background-color: transparent; outline: 0px; border: 0px; margin: 0px; border-radius: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; color: inherit; display: flex; -moz-box-pack: start; justify-content: flex-start; -moz-box-align: center; align-items: center; position: relative; text-decoration: none; min-height: 48px; box-sizing: border-box; white-space: nowrap; padding: 12px 16px; gap: 8px; }
.css-1xosv7::-moz-focus-inner { border-style: none; }
.css-1xosv7.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-1xosv7 { print-color-adjust: exact; }
}
.css-1xosv7:hover { text-decoration: none; background-color: rgba(235, 235, 239, 0.08); }
@media (hover: none) {
  .css-1xosv7:hover { background-color: transparent; }
}
.css-1xosv7.Mui-selected { background-color: rgba(234, 235, 239, 0.16); }
.css-1xosv7.Mui-selected.Mui-focusVisible { background-color: rgba(234, 235, 239, 0.28); }
.css-1xosv7.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.24); }
@media (hover: none) {
  .css-1xosv7.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.16); }
}
.css-1xosv7.Mui-focusVisible { background-color: rgba(235, 235, 239, 0.12); }
.css-1xosv7.Mui-disabled { opacity: 0.38; }
.css-1xosv7 + .MuiDivider-root { margin-top: 4px; margin-bottom: 4px; }
.css-1xosv7 + .MuiDivider-inset { margin-left: 52px; }
.css-1xosv7 .MuiListItemText-root { margin-top: 0px; margin-bottom: 0px; }
.css-1xosv7 .MuiListItemText-inset { padding-left: 36px; }
.css-1xosv7 .MuiListItemIcon-root { min-width: 36px; }
@media (min-width: 760px) {
  .css-1xosv7 { min-height: auto; }
}
.css-5sz1ok { background-color: transparent; outline: 0px; border: 0px; margin: 0px; border-radius: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; color: inherit; display: flex; -moz-box-pack: start; justify-content: flex-start; -moz-box-align: center; align-items: center; position: relative; text-decoration: none; min-height: 48px; box-sizing: border-box; white-space: nowrap; padding: 12px 16px; gap: 8px; }
.css-5sz1ok::-moz-focus-inner { border-style: none; }
.css-5sz1ok.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-5sz1ok { print-color-adjust: exact; }
}
.css-5sz1ok:hover { text-decoration: none; background-color: rgba(235, 235, 239, 0.08); }
@media (hover: none) {
  .css-5sz1ok:hover { background-color: transparent; }
}
.css-5sz1ok.Mui-selected { background-color: rgba(234, 235, 239, 0.16); }
.css-5sz1ok.Mui-selected.Mui-focusVisible { background-color: rgba(234, 235, 239, 0.28); }
.css-5sz1ok.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.24); }
@media (hover: none) {
  .css-5sz1ok.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.16); }
}
.css-5sz1ok.Mui-focusVisible { background-color: rgba(235, 235, 239, 0.12); }
.css-5sz1ok.Mui-disabled { opacity: 0.38; }
.css-5sz1ok + .MuiDivider-root { margin-top: 4px; margin-bottom: 4px; }
.css-5sz1ok + .MuiDivider-inset { margin-left: 52px; }
.css-5sz1ok .MuiListItemText-root { margin-top: 0px; margin-bottom: 0px; }
.css-5sz1ok .MuiListItemText-inset { padding-left: 36px; }
.css-5sz1ok .MuiListItemIcon-root { min-width: 36px; }
@media (min-width: 760px) {
  .css-5sz1ok { min-height: auto; }
}
.css-9t827 { font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 143%; font-size: 0.875rem; background-color: transparent; outline: 0px; border: 0px; margin: 0px; border-radius: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; color: inherit; display: flex; -moz-box-pack: start; justify-content: flex-start; -moz-box-align: center; align-items: center; position: relative; text-decoration: none; min-height: 48px; box-sizing: border-box; white-space: nowrap; padding: 12px 16px; gap: 8px; }
.css-9t827::-moz-focus-inner { border-style: none; }
.css-9t827.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-9t827 { print-color-adjust: exact; }
}
.css-9t827:hover { text-decoration: none; background-color: rgba(235, 235, 239, 0.08); }
@media (hover: none) {
  .css-9t827:hover { background-color: transparent; }
}
.css-9t827.Mui-selected { background-color: rgba(234, 235, 239, 0.16); }
.css-9t827.Mui-selected.Mui-focusVisible { background-color: rgba(234, 235, 239, 0.28); }
.css-9t827.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.24); }
@media (hover: none) {
  .css-9t827.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.16); }
}
.css-9t827.Mui-focusVisible { background-color: rgba(235, 235, 239, 0.12); }
.css-9t827.Mui-disabled { opacity: 0.38; }
.css-9t827 + .MuiDivider-root { margin-top: 4px; margin-bottom: 4px; }
.css-9t827 + .MuiDivider-inset { margin-left: 52px; }
.css-9t827 .MuiListItemText-root { margin-top: 0px; margin-bottom: 0px; }
.css-9t827 .MuiListItemText-inset { padding-left: 36px; }
.css-9t827 .MuiListItemIcon-root { min-width: 36px; }
@media (min-width: 760px) {
  .css-9t827 { min-height: auto; }
}
.css-1mazm13 { font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 143%; font-size: 0.875rem; background-color: transparent; outline: 0px; border: 0px; margin: 0px; border-radius: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; color: inherit; display: flex; -moz-box-pack: start; justify-content: flex-start; -moz-box-align: center; align-items: center; position: relative; text-decoration: none; min-height: 48px; box-sizing: border-box; white-space: nowrap; padding: 12px 16px; gap: 8px; }
.css-1mazm13::-moz-focus-inner { border-style: none; }
.css-1mazm13.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-1mazm13 { print-color-adjust: exact; }
}
.css-1mazm13:hover { text-decoration: none; background-color: rgba(235, 235, 239, 0.08); }
@media (hover: none) {
  .css-1mazm13:hover { background-color: transparent; }
}
.css-1mazm13.Mui-selected { background-color: rgba(234, 235, 239, 0.16); }
.css-1mazm13.Mui-selected.Mui-focusVisible { background-color: rgba(234, 235, 239, 0.28); }
.css-1mazm13.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.24); }
@media (hover: none) {
  .css-1mazm13.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.16); }
}
.css-1mazm13.Mui-focusVisible { background-color: rgba(235, 235, 239, 0.12); }
.css-1mazm13.Mui-disabled { opacity: 0.38; }
.css-1mazm13 + .MuiDivider-root { margin-top: 4px; margin-bottom: 4px; }
.css-1mazm13 + .MuiDivider-inset { margin-left: 52px; }
.css-1mazm13 .MuiListItemText-root { margin-top: 0px; margin-bottom: 0px; }
.css-1mazm13 .MuiListItemText-inset { padding-left: 36px; }
.css-1mazm13 .MuiListItemIcon-root { min-width: 36px; }
@media (min-width: 760px) {
  .css-1mazm13 { min-height: auto; }
}
.css-6zxo4b { user-select: none; display: inline-block; fill: currentcolor; flex-shrink: 0; transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1); font-size: 1.5rem; color: rgb(255, 167, 38); width: 15px; height: 15px; border-radius: 50%; background: rgb(56, 61, 81); }
body { --wcm-z-index: 1300; }

</style>

<style lang="scss" scoped>
html { box-sizing: border-box; }
*, ::before, ::after { box-sizing: inherit; }
strong, b { font-weight: 700; }
body { margin: 0px; color: rgb(241, 241, 243); background-color: rgb(27, 32, 48); }
@media print {
  body { background-color: rgb(255, 255, 255); }
}
body::backdrop { background-color: rgb(27, 32, 48); }
body { font-family: Inter, Arial; font-weight: 400; font-size: 0.875rem; min-width: 375px; }
body > div:first-of-type { min-height: 100vh; display: flex; flex-direction: column; }
@keyframes mui-auto-fill {
0% { display: block; }
}
@keyframes mui-auto-fill {
0% { display: block; }
}
@keyframes mui-auto-fill-cancel {
0% { display: block; }
}
@keyframes mui-auto-fill-cancel {
0% { display: block; }
}
.css-kp1w4j { height: 48px; position: sticky; top: 0px; transition: top 300ms cubic-bezier(0.4, 0, 0.2, 1); z-index: 1100; background-color: rgb(27, 32, 48); display: flex; -moz-box-align: center; align-items: center; box-shadow: rgba(242, 243, 247, 0.16) 0px -1px 0px inset; }
@media (min-width: 0px) {
  .css-kp1w4j { padding: 8px 8px 8px 20px; }
}
@media (min-width: 640px) {
  .css-kp1w4j { padding: 8px 20px; }
}
.css-142agrv { line-height: 0; margin-right: 12px; transition: 0.3s; }
.css-142agrv:hover { opacity: 0.7; }
.css-1p8it9z { text-decoration: none; line-height: 0; margin-right: 12px; transition: 0.3s; }
.css-1p8it9z:hover { opacity: 0.7; }
.css-1ajeowl { margin: 0px 12px 0px 0px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; font-size: 0.875rem; color: rgb(234, 235, 239); text-decoration: none; line-height: 0; transition: 0.3s; }
.css-1ajeowl:hover { opacity: 0.7; }
.css-1gux690 { margin: 0px 12px 0px 0px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; font-size: 0.875rem; color: rgb(234, 235, 239); text-decoration: none; line-height: 0; transition: 0.3s; }
.css-1gux690:hover { opacity: 0.7; }
.css-15ro776 { margin-right: 4px; }
@media (min-width: 0px) {
  .css-1me2gch { display: none; }
}
@media (min-width: 960px) {
  .css-1me2gch { display: block; }
}
.css-1dvha5n { list-style: none; margin: 0px; padding: 0px; position: relative; display: flex; }
.css-1dvha5n .MuiMenuItem-root + .MuiDivider-root, .css-1dvha5n .MuiDivider-root { margin-top: 4px; margin-bottom: 4px; }
@media (min-width: 0px) {
  .css-1dvha5n { align-items: flex-start; flex-direction: column; }
}
@media (min-width: 960px) {
  .css-1dvha5n { -moz-box-align: center; align-items: center; flex-direction: row; }
}
.css-yewinh { display: flex; -moz-box-pack: start; justify-content: flex-start; -moz-box-align: center; align-items: center; position: relative; text-decoration: none; width: 100%; box-sizing: border-box; text-align: left; }
.css-yewinh.Mui-focusVisible { background-color: rgba(235, 235, 239, 0.12); }
.css-yewinh.Mui-selected { background-color: rgba(234, 235, 239, 0.16); }
.css-yewinh.Mui-selected.Mui-focusVisible { background-color: rgba(234, 235, 239, 0.28); }
.css-yewinh.Mui-disabled { opacity: 0.38; }
@media (min-width: 0px) {
  .css-yewinh { width: 100%; margin-right: 0px; }
}
@media (min-width: 960px) {
  .css-yewinh { width: unset; margin-right: 8px; }
}
.css-xz8vby { margin: 0px; font-family: Inter, Arial; font-weight: 600; letter-spacing: unset; line-height: 133.4%; font-size: 1.3125rem; color: rgb(241, 241, 243); width: 100%; padding: 16px; }
.css-1f44odb { text-decoration: none; margin: 0px; font-family: Inter, Arial; font-weight: 600; letter-spacing: unset; line-height: 133.4%; font-size: 1.3125rem; color: rgb(241, 241, 243); width: 100%; padding: 16px; }
.css-4w2n1c { text-decoration: none; margin: 0px; font-family: Inter, Arial; font-weight: 600; letter-spacing: unset; line-height: 133.4%; font-size: 1.3125rem; color: rgb(241, 241, 243); width: 100%; padding: 16px; }
.css-tbq01x { text-decoration: none; margin: 0px; font-family: Inter, Arial; font-weight: 600; letter-spacing: unset; line-height: 133.4%; font-size: 1.3125rem; color: rgb(241, 241, 243); width: 100%; padding: 16px; }
.css-8gmvqi { display: flex; -moz-box-pack: start; justify-content: flex-start; -moz-box-align: center; align-items: center; position: relative; text-decoration: none; box-sizing: border-box; text-align: left; width: unset; }
.css-8gmvqi.Mui-focusVisible { background-color: rgba(235, 235, 239, 0.12); }
.css-8gmvqi.Mui-selected { background-color: rgba(234, 235, 239, 0.16); }
.css-8gmvqi.Mui-selected.Mui-focusVisible { background-color: rgba(234, 235, 239, 0.28); }
.css-8gmvqi.Mui-disabled { opacity: 0.38; }
@media (min-width: 0px) {
  .css-8gmvqi { display: none; }
}
@media (min-width: 960px) {
  .css-8gmvqi { display: flex; }
}
.css-1rq4b5v { transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 500; line-height: 1.5rem; font-size: 0.875rem; color: rgb(241, 241, 243); min-width: unset; padding: 6px 8px; }
.css-1rq4b5v:hover { text-decoration: none; background-color: rgba(234, 235, 239, 0.08); }
@media (hover: none) {
  .css-1rq4b5v:hover { background-color: transparent; }
}
.css-1rq4b5v.Mui-disabled { color: rgba(235, 235, 239, 0.3); }
.css-1rq4b5v:hover { box-shadow: none; }
.css-1rq4b5v.Mui-focusVisible { box-shadow: none; }
.css-1rq4b5v:active { box-shadow: none; }
.css-1rq4b5v.Mui-disabled { box-shadow: none; }
.css-1rq4b5v:hover { background-color: rgba(250, 251, 252, 0.08); }
.css-enszjw { display: inline-flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; position: relative; box-sizing: border-box; background-color: transparent; outline: 0px; border: 0px; margin: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; text-decoration: none; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 500; line-height: 1.5rem; font-size: 0.875rem; color: rgb(241, 241, 243); min-width: unset; padding: 6px 8px; }
.css-enszjw::-moz-focus-inner { border-style: none; }
.css-enszjw.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-enszjw { print-color-adjust: exact; }
}
.css-enszjw:hover { text-decoration: none; background-color: rgba(234, 235, 239, 0.08); }
@media (hover: none) {
  .css-enszjw:hover { background-color: transparent; }
}
.css-enszjw.Mui-disabled { color: rgba(235, 235, 239, 0.3); }
.css-enszjw:hover { box-shadow: none; }
.css-enszjw.Mui-focusVisible { box-shadow: none; }
.css-enszjw:active { box-shadow: none; }
.css-enszjw.Mui-disabled { box-shadow: none; }
.css-enszjw:hover { background-color: rgba(250, 251, 252, 0.08); }
.css-y0zxrm { user-select: none; width: 1em; height: 1em; display: inline-block; fill: currentcolor; flex-shrink: 0; transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1); font-size: 1.5rem; margin-left: 4px; }
.css-i9gxme { -moz-box-flex: 1; flex-grow: 1; }
.css-bk9pr5 { transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 500; line-height: 1.5rem; font-size: 0.875rem; color: rgb(255, 255, 255); border: 1px solid rgba(235, 235, 237, 0.12); background-color: rgb(56, 61, 81); padding: 7px 8px; min-width: unset; margin-left: 8px; }
.css-bk9pr5:hover { text-decoration: none; background-color: rgba(241, 241, 243, 0.08); }
@media (hover: none) {
  .css-bk9pr5:hover { background-color: transparent; }
}
.css-bk9pr5.Mui-disabled { color: rgba(235, 235, 239, 0.3); }
.css-bk9pr5:hover { box-shadow: none; }
.css-bk9pr5.Mui-focusVisible { box-shadow: none; }
.css-bk9pr5:active { box-shadow: none; }
.css-bk9pr5.Mui-disabled { box-shadow: none; }
.css-bk9pr5:hover, .css-bk9pr5.Mui-focusVisible { background-color: rgb(27, 32, 48); }
.css-17sgboj { display: inline-flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; position: relative; box-sizing: border-box; outline: 0px; margin: 0px 0px 0px 8px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; text-decoration: none; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 500; line-height: 1.5rem; font-size: 0.875rem; color: rgb(255, 255, 255); border: 1px solid rgba(235, 235, 237, 0.12); background-color: rgb(56, 61, 81); padding: 7px 8px; min-width: unset; }
.css-17sgboj::-moz-focus-inner { border-style: none; }
.css-17sgboj.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-17sgboj { print-color-adjust: exact; }
}
.css-17sgboj:hover { text-decoration: none; background-color: rgba(241, 241, 243, 0.08); }
@media (hover: none) {
  .css-17sgboj:hover { background-color: transparent; }
}
.css-17sgboj.Mui-disabled { color: rgba(235, 235, 239, 0.3); }
.css-17sgboj:hover { box-shadow: none; }
.css-17sgboj.Mui-focusVisible { box-shadow: none; }
.css-17sgboj:active { box-shadow: none; }
.css-17sgboj.Mui-disabled { box-shadow: none; }
.css-17sgboj:hover, .css-17sgboj.Mui-focusVisible { background-color: rgb(27, 32, 48); }
.css-q5q60p { user-select: none; width: 1em; height: 1em; display: inline-block; fill: currentcolor; flex-shrink: 0; transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1); font-size: 1.25rem; color: rgb(241, 241, 243); }
.css-1tu4aee .MuiMenuItem-root.Mui-disabled { opacity: 1; }
.css-18dvzhc .MuiMenuItem-root.Mui-disabled { opacity: 1; }
@media (min-width: 0px) {
  .css-1100lx1 { display: flex; }
}
@media (min-width: 960px) {
  .css-1100lx1 { display: none; }
}
.css-1m2o9l0 { z-index: 1200; top: 48px; }
.css-b95f0i { display: flex; flex-direction: column; flex: 1 1 0%; }
.css-1e6kcma { background-color: rgb(27, 32, 48); color: rgb(241, 241, 243); }
@media (min-width: 0px) {
  .css-1e6kcma { padding-top: 40px; padding-bottom: 72px; }
}
@media (min-width: 960px) {
  .css-1e6kcma { padding-top: 48px; padding-bottom: 80px; }
}
@media (min-width: 1280px) {
  .css-1e6kcma { padding-bottom: 94px; }
}
@media (min-width: 1575px) {
  .css-1e6kcma { padding-bottom: 92px; }
}
@media (min-width: 1800px) {
  .css-1e6kcma { padding-bottom: 96px; }
}
.css-ycl373 { width: 100%; margin-left: auto; box-sizing: border-box; margin-right: auto; padding-left: 8px; padding-right: 8px; display: flex; flex-direction: column; flex: 1 1 0%; padding-bottom: 0px; }
@media (min-width: 760px) {
  .css-ycl373 { padding-left: 12px; padding-right: 12px; }
}
@media (min-width: 1280px) {
  .css-ycl373 { max-width: 1280px; }
}
@media (min-width: 0px) {
  .css-ycl373 { padding-left: 8px; padding-right: 8px; }
}
@media (min-width: 640px) {
  .css-ycl373 { padding-left: 20px; padding-right: 20px; }
}
@media (min-width: 760px) {
  .css-ycl373 { padding-left: 48px; padding-right: 48px; }
}
@media (min-width: 960px) {
  .css-ycl373 { padding-left: 96px; padding-right: 96px; }
}
@media (min-width: 1280px) {
  .css-ycl373 { padding-left: 20px; padding-right: 20px; }
}
@media (min-width: 1575px) {
  .css-ycl373 { max-width: unset; padding-left: 96px; padding-right: 96px; }
}
@media (min-width: 1800px) {
  .css-ycl373 { padding-left: 0px; padding-right: 0px; max-width: 1440px; }
}
@media (min-width: 0px) {
  .css-nkvznt { padding-left: 16px; padding-right: 16px; }
}
@media (min-width: 640px) {
  .css-nkvznt { padding-left: 24px; padding-right: 24px; }
}
.css-70qvj9 { display: flex; -moz-box-align: center; align-items: center; }
.css-1czjwln { display: flex; margin-bottom: 16px; }
@media (min-width: 0px) {
  .css-1czjwln { align-items: flex-start; flex-direction: column; }
}
@media (min-width: 640px) {
  .css-1czjwln { -moz-box-align: center; align-items: center; flex-direction: row; }
}
.css-1yp4ln { display: flex; align-items: flex-start; }
.css-1ctyq6o { margin: 0px; font-family: Inter, Arial; font-weight: 600; letter-spacing: unset; line-height: 133.4%; font-size: 1.3125rem; color: rgb(142, 146, 163); }
@media (min-width: 0px) {
  .css-1ctyq6o { margin-right: 20px; margin-bottom: 4px; }
}
@media (min-width: 640px) {
  .css-1ctyq6o { margin-right: 12px; margin-bottom: 0px; }
}
.css-gr0tg3 { display: flex; align-items: flex-start; flex-wrap: wrap; margin-bottom: 0px; }
.css-115cb67 { margin-right: 8px; }
.css-115cb67 .MuiOutlinedInput-notchedOutline { border: medium; }
.css-1s2gcw8 { display: inline-flex; flex-direction: column; position: relative; min-width: 0px; padding: 0px; margin: 0px 8px 0px 0px; border: 0px; vertical-align: top; }
.css-1s2gcw8 .MuiOutlinedInput-notchedOutline { border: medium; }
.css-1ypy5va { color: rgb(241, 241, 243); line-height: 1.4375em; box-sizing: border-box; cursor: text; display: inline-flex; -moz-box-align: center; align-items: center; position: relative; border-radius: 6px; border-color: rgba(235, 235, 239, 0.08); }
.css-1ypy5va.Mui-disabled { color: rgb(98, 103, 123); cursor: default; }
.css-1ypy5va:hover .MuiOutlinedInput-notchedOutline { border-color: rgb(241, 241, 243); }
@media (hover: none) {
  .css-1ypy5va:hover .MuiOutlinedInput-notchedOutline { border-color: rgba(255, 255, 255, 0.23); }
}
.css-1ypy5va.Mui-focused .MuiOutlinedInput-notchedOutline { border-color: rgb(234, 235, 239); border-width: 2px; }
.css-1ypy5va.Mui-error .MuiOutlinedInput-notchedOutline { border-color: rgb(244, 67, 54); }
.css-1ypy5va.Mui-disabled .MuiOutlinedInput-notchedOutline { border-color: rgba(235, 235, 239, 0.3); }
.css-1ypy5va:hover .MuiOutlinedInput-notchedOutline { border-color: rgb(203, 205, 216); }
.css-1ypy5va.Mui-focused .MuiOutlinedInput-notchedOutline { border-color: rgb(203, 205, 216); }
.css-1ypy5va.MarketSwitcher__select .MuiSelect-outlined { padding-left: 0px; padding-top: 0px; padding-bottom: 0px; background-color: transparent !important; }
.css-1ypy5va .MuiSelect-icon { color: rgb(241, 241, 243); }
.css-wvdg9f { font: inherit; letter-spacing: inherit; color: currentcolor; border: 0px; box-sizing: content-box; background: none; height: 1.4375em; margin: 0px; display: block; min-width: 0px; width: 100%; animation-name: mui-auto-fill-cancel; animation-duration: 10ms; padding: 16.5px 14px; }
.css-wvdg9f::-webkit-input-placeholder { color: currentcolor; opacity: 0.5; transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1); }
.css-wvdg9f::placeholder { color: currentcolor; opacity: 0.5; transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1); }
.css-wvdg9f:focus { outline: 0px; }
.css-wvdg9f:invalid { box-shadow: none; }
.css-wvdg9f::-webkit-search-decoration { appearance: none; }
label[data-shrink="false"] + .MuiInputBase-formControl .css-wvdg9f::-webkit-input-placeholder { opacity: 0 !important; }
label[data-shrink="false"] + .MuiInputBase-formControl .css-wvdg9f::placeholder { opacity: 0 !important; }
label[data-shrink="false"] + .MuiInputBase-formControl .css-wvdg9f:focus::-webkit-input-placeholder { opacity: 0.5; }
label[data-shrink="false"] + .MuiInputBase-formControl .css-wvdg9f:focus::placeholder { opacity: 0.5; }
.css-wvdg9f.Mui-disabled { opacity: 1; -webkit-text-fill-color: rgb(98, 103, 123); }
.css-wvdg9f:autofill { animation-duration: 5000s; animation-name: mui-auto-fill; }
.css-wvdg9f:autofill { box-shadow: rgb(38, 103, 152) 0px 0px 0px 100px inset; -webkit-text-fill-color: rgb(255, 255, 255); caret-color: rgb(255, 255, 255); border-radius: inherit; }
.css-1dyf9qo { appearance: none; user-select: none; border-radius: 4px; cursor: pointer; font: inherit; letter-spacing: inherit; color: currentcolor; border: 0px; box-sizing: content-box; background: none; height: 1.4375em; margin: 0px; display: block; min-width: 0px; width: 100%; animation-name: mui-auto-fill-cancel; animation-duration: 10ms; padding: 16.5px 14px; }
.css-1dyf9qo:focus { border-radius: 4px; }
.css-1dyf9qo.Mui-disabled { cursor: default; }
.css-1dyf9qo[multiple] { height: auto; }
.css-1dyf9qo:not([multiple]) option, .css-1dyf9qo:not([multiple]) optgroup { background-color: rgb(41, 46, 65); }
.css-1dyf9qo.css-1dyf9qo.css-1dyf9qo { padding-right: 32px; }
.css-1dyf9qo.MuiSelect-select { height: auto; min-height: 1.4375em; text-overflow: ellipsis; white-space: nowrap; overflow: hidden; }
.css-1dyf9qo.MuiSelect-select { background-color: rgb(56, 61, 81); font-family: Inter, Arial; font-weight: 500; line-height: 1.5rem; font-size: 0.875rem; padding: 6px 12px; color: rgb(241, 241, 243); }
.css-1dyf9qo::-webkit-input-placeholder { color: currentcolor; opacity: 0.5; transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1); }
.css-1dyf9qo::placeholder { color: currentcolor; opacity: 0.5; transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1); }
.css-1dyf9qo:focus { outline: 0px; }
.css-1dyf9qo:invalid { box-shadow: none; }
.css-1dyf9qo::-webkit-search-decoration { appearance: none; }
label[data-shrink="false"] + .MuiInputBase-formControl .css-1dyf9qo::-webkit-input-placeholder { opacity: 0 !important; }
label[data-shrink="false"] + .MuiInputBase-formControl .css-1dyf9qo::placeholder { opacity: 0 !important; }
label[data-shrink="false"] + .MuiInputBase-formControl .css-1dyf9qo:focus::-webkit-input-placeholder { opacity: 0.5; }
label[data-shrink="false"] + .MuiInputBase-formControl .css-1dyf9qo:focus::placeholder { opacity: 0.5; }
.css-1dyf9qo.Mui-disabled { opacity: 1; -webkit-text-fill-color: rgb(98, 103, 123); }
.css-1dyf9qo:autofill { animation-duration: 5000s; animation-name: mui-auto-fill; }
.css-1dyf9qo:autofill { box-shadow: rgb(38, 103, 152) 0px 0px 0px 100px inset; -webkit-text-fill-color: rgb(255, 255, 255); caret-color: rgb(255, 255, 255); border-radius: inherit; }
.css-1slt5fp { margin-right: 8px; width: 28px; height: 28px; position: relative; }
.css-171onha { display: flex; -moz-box-align: center; align-items: center; gap: 4px; }
.css-1qqt9wm { margin: 0px 4px 0px 0px; font-family: Inter, Arial; font-weight: 700; letter-spacing: 0.015625rem; line-height: 123.5%; color: rgb(255, 255, 255); font-size: 1.55rem; }
.css-1tgkox5 { color: rgb(255, 255, 255); padding-left: 8px; padding-right: 8px; border-radius: 12px; background: linear-gradient(248.86deg, rgb(182, 80, 158) 10.51%, rgb(46, 186, 198) 93.41%); display: flex; -moz-box-align: center; align-items: center; }
.css-my2x37 { margin: 0px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.00625rem; line-height: 1rem; font-size: 0.75rem; }
.css-fo7h32 { user-select: none; width: 1em; height: 1em; display: inline-block; fill: currentcolor; flex-shrink: 0; transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1); font-size: 1.5rem; margin-left: 4px; color: rgb(241, 241, 243); }
.css-10qjsex { margin: 2px 0px 0px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; color: rgb(255, 255, 255); font-size: 0.85rem; overflow-wrap: break-word; white-space: normal; line-height: 1.3; max-width: 100%; }
.css-1k3x8v3 { bottom: 0px; left: 0px; position: absolute; opacity: 0; pointer-events: none; width: 100%; box-sizing: border-box; }
.css-dzdoo0 { position: absolute; right: 7px; top: calc(50% - 0.5em); pointer-events: none; color: rgba(235, 235, 239, 0.56); }
.css-dzdoo0.Mui-disabled { color: rgba(235, 235, 239, 0.3); }
.css-7z4qiw { border-color: rgba(255, 255, 255, 0.23); }
.css-nqlg3w { text-align: left; position: absolute; inset: -5px 0px 0px; margin: 0px; padding: 0px 8px; pointer-events: none; border-radius: inherit; border-style: solid; border-width: 1px; overflow: hidden; min-width: 0%; border-color: rgba(255, 255, 255, 0.23); }
.css-ihdtdm { float: unset; width: auto; overflow: hidden; padding: 0px; line-height: 11px; transition: width 150ms cubic-bezier(0, 0, 0.2, 1); }
.css-k7vncv { display: flex; align-items: flex-start; flex-wrap: wrap; width: 100%; }
@media (min-width: 0px) {
  .css-k7vncv { gap: 12px; }
}
@media (min-width: 640px) {
  .css-k7vncv { gap: 32px; }
}
.css-ltjh6b { display: flex; -moz-box-align: center; align-items: center; }
@media (min-width: 0px) {
  .css-ltjh6b { width: calc(50% - 12px); }
}
@media (min-width: 640px) {
  .css-ltjh6b { width: unset; }
}
.css-j7qwjs { display: flex; flex-direction: column; }
.css-18biwo { display: inline-flex; -moz-box-align: center; align-items: center; }
.css-1fzsl0k { margin: 0px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; color: rgb(165, 168, 182); }
.css-8j6qub { display: block; height: auto; margin-top: 0px; margin-bottom: 0px; transform-origin: 0px 55% 0px; border-radius: 4px / 6.7px; animation: 2s ease-in-out 0.5s infinite animation-c7515d; transform: unset; background: rgb(56, 61, 81); }
.css-8j6qub:empty::before { content: " "; }
@keyframes animation-c7515d {
0% { opacity: 1; }
50% { opacity: 0.4; }
100% { opacity: 1; }
}
@keyframes animation-c7515d {
0% { opacity: 1; }
50% { opacity: 0.4; }
100% { opacity: 1; }
}
.css-ulme3a { display: inline-flex; cursor: pointer; transition: 0.2s; }
.css-ulme3a:hover { opacity: 0.5; }
.css-ampwg9 { text-align: center; flex: 0 0 auto; font-size: 1.5rem; overflow: visible; color: rgba(235, 235, 239, 0.56); transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1); display: flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; width: 14px; height: 14px; border-radius: 50%; padding: 0px; min-width: 0px; margin-left: 2px; }
.css-ampwg9:hover { background-color: rgba(235, 235, 239, 0.08); }
@media (hover: none) {
  .css-ampwg9:hover { background-color: transparent; }
}
.css-ampwg9.Mui-disabled { background-color: transparent; color: rgba(235, 235, 239, 0.3); }
.css-1osfq0k { position: relative; box-sizing: border-box; background-color: transparent; outline: 0px; border: 0px; margin: 0px 0px 0px 2px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; text-decoration: none; text-align: center; flex: 0 0 auto; font-size: 1.5rem; overflow: visible; color: rgba(235, 235, 239, 0.56); transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1); display: flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; width: 14px; height: 14px; border-radius: 50%; padding: 0px; min-width: 0px; }
.css-1osfq0k::-moz-focus-inner { border-style: none; }
.css-1osfq0k.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-1osfq0k { print-color-adjust: exact; }
}
.css-1osfq0k:hover { background-color: rgba(235, 235, 239, 0.08); }
@media (hover: none) {
  .css-1osfq0k:hover { background-color: transparent; }
}
.css-1osfq0k.Mui-disabled { background-color: transparent; color: rgba(235, 235, 239, 0.3); }
.css-jmow5f { user-select: none; width: 1em; height: 1em; display: inline-block; fill: currentcolor; flex-shrink: 0; transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1); font-size: 14px; color: rgb(142, 146, 163); border-radius: 50%; }
.css-jmow5f:hover { color: rgb(41, 182, 246); }
.css-s9ggwg { z-index: 1500; pointer-events: none; }
.css-s9ggwg[data-popper-placement*="bottom"] .MuiTooltip-arrow { top: 0px; margin-top: -0.71em; }
.css-s9ggwg[data-popper-placement*="bottom"] .MuiTooltip-arrow::before { transform-origin: 0px 100% 0px; }
.css-s9ggwg[data-popper-placement*="top"] .MuiTooltip-arrow { bottom: 0px; margin-bottom: -0.71em; }
.css-s9ggwg[data-popper-placement*="top"] .MuiTooltip-arrow::before { transform-origin: 100% 0px 0px; }
.css-s9ggwg[data-popper-placement*="right"] .MuiTooltip-arrow { left: 0px; margin-left: -0.71em; height: 1em; width: 0.71em; }
.css-s9ggwg[data-popper-placement*="right"] .MuiTooltip-arrow::before { transform-origin: 100% 100% 0px; }
.css-s9ggwg[data-popper-placement*="left"] .MuiTooltip-arrow { right: 0px; margin-right: -0.71em; height: 1em; width: 0.71em; }
.css-s9ggwg[data-popper-placement*="left"] .MuiTooltip-arrow::before { transform-origin: 0px 0px 0px; }
.css-l8ykd6 { z-index: 1500; pointer-events: none; }
.css-l8ykd6 .MuiTooltip-tooltip { color: rgb(241, 241, 243); background-color: rgb(41, 46, 65); padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 2px, rgba(0, 0, 0, 0.1) 0px 2px 10px; max-width: 280px; }
.css-l8ykd6 .MuiTooltip-arrow { color: rgb(41, 46, 65); }
.css-l8ykd6 .MuiTooltip-arrow::before { box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 2px, rgba(0, 0, 0, 0.1) 0px 2px 10px; }
.css-l8ykd6[data-popper-placement*="bottom"] .MuiTooltip-arrow { top: 0px; margin-top: -0.71em; }
.css-l8ykd6[data-popper-placement*="bottom"] .MuiTooltip-arrow::before { transform-origin: 0px 100% 0px; }
.css-l8ykd6[data-popper-placement*="top"] .MuiTooltip-arrow { bottom: 0px; margin-bottom: -0.71em; }
.css-l8ykd6[data-popper-placement*="top"] .MuiTooltip-arrow::before { transform-origin: 100% 0px 0px; }
.css-l8ykd6[data-popper-placement*="right"] .MuiTooltip-arrow { left: 0px; margin-left: -0.71em; height: 1em; width: 0.71em; }
.css-l8ykd6[data-popper-placement*="right"] .MuiTooltip-arrow::before { transform-origin: 100% 100% 0px; }
.css-l8ykd6[data-popper-placement*="left"] .MuiTooltip-arrow { right: 0px; margin-right: -0.71em; height: 1em; width: 0.71em; }
.css-l8ykd6[data-popper-placement*="left"] .MuiTooltip-arrow::before { transform-origin: 0px 0px 0px; }
.css-1ta9xnb { z-index: 1500; pointer-events: none; }
.css-1ta9xnb .MuiTooltip-tooltip { color: rgb(241, 241, 243); background-color: rgb(41, 46, 65); padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 2px, rgba(0, 0, 0, 0.1) 0px 2px 10px; max-width: 280px; }
.css-1ta9xnb .MuiTooltip-arrow { color: rgb(41, 46, 65); }
.css-1ta9xnb .MuiTooltip-arrow::before { box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 2px, rgba(0, 0, 0, 0.1) 0px 2px 10px; }
.css-1ta9xnb[data-popper-placement*="bottom"] .MuiTooltip-arrow { top: 0px; margin-top: -0.71em; }
.css-1ta9xnb[data-popper-placement*="bottom"] .MuiTooltip-arrow::before { transform-origin: 0px 100% 0px; }
.css-1ta9xnb[data-popper-placement*="top"] .MuiTooltip-arrow { bottom: 0px; margin-bottom: -0.71em; }
.css-1ta9xnb[data-popper-placement*="top"] .MuiTooltip-arrow::before { transform-origin: 100% 0px 0px; }
.css-1ta9xnb[data-popper-placement*="right"] .MuiTooltip-arrow { left: 0px; margin-left: -0.71em; height: 1em; width: 0.71em; }
.css-1ta9xnb[data-popper-placement*="right"] .MuiTooltip-arrow::before { transform-origin: 100% 100% 0px; }
.css-1ta9xnb[data-popper-placement*="left"] .MuiTooltip-arrow { right: 0px; margin-right: -0.71em; height: 1em; width: 0.71em; }
.css-1ta9xnb[data-popper-placement*="left"] .MuiTooltip-arrow::before { transform-origin: 0px 0px 0px; }
.css-159pi92 { display: flex; flex-direction: column; flex: 1 1 0%; }
@media (min-width: 0px) {
  .css-159pi92 { margin-top: -32px; }
}
@media (min-width: 1280px) {
  .css-159pi92 { margin-top: -46px; }
}
@media (min-width: 1575px) {
  .css-159pi92 { margin-top: -44px; }
}
@media (min-width: 1800px) {
  .css-159pi92 { margin-top: -48px; }
}
.css-1a8qn2o { width: 100%; margin-left: auto; box-sizing: border-box; margin-right: auto; padding-left: 8px; padding-right: 8px; display: flex; flex-direction: column; flex: 1 1 0%; padding-bottom: 39px; }
@media (min-width: 760px) {
  .css-1a8qn2o { padding-left: 12px; padding-right: 12px; }
}
@media (min-width: 1280px) {
  .css-1a8qn2o { max-width: 1280px; }
}
@media (min-width: 0px) {
  .css-1a8qn2o { padding-left: 8px; padding-right: 8px; }
}
@media (min-width: 640px) {
  .css-1a8qn2o { padding-left: 20px; padding-right: 20px; }
}
@media (min-width: 760px) {
  .css-1a8qn2o { padding-left: 48px; padding-right: 48px; }
}
@media (min-width: 960px) {
  .css-1a8qn2o { padding-left: 96px; padding-right: 96px; }
}
@media (min-width: 1280px) {
  .css-1a8qn2o { padding-left: 20px; padding-right: 20px; }
}
@media (min-width: 1575px) {
  .css-1a8qn2o { max-width: unset; padding-left: 96px; padding-right: 96px; }
}
@media (min-width: 1800px) {
  .css-1a8qn2o { padding-left: 0px; padding-right: 0px; max-width: 1440px; }
}
.css-17qu3ne { background-color: rgb(41, 46, 65); color: rgb(241, 241, 243); transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1); border-radius: 4px; box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 1px, rgba(0, 0, 0, 0.25) 0px 0px 1px; background-image: none; display: flex; flex-direction: column; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; text-align: center; padding: 16px; flex: 1 1 0%; }
.css-11zj654 { margin: 0px 0px 8px; font-family: Inter, Arial; font-weight: 600; letter-spacing: unset; line-height: 133.4%; font-size: 1.3125rem; }
.css-1p4wjs1 { margin: 0px 0px 24px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 143%; font-size: 0.875rem; color: rgb(165, 168, 182); }
.css-103kn7e { display: flex; width: 100%; -moz-box-pack: justify; justify-content: space-between; -moz-box-align: center; align-items: center; gap: 22px; box-shadow: rgba(255, 255, 255, 0.12) 0px 1px 0px inset; }
@media (min-width: 0px) {
  .css-103kn7e { padding: 22px 0px 40px; flex-direction: column; }
}
@media (min-width: 640px) {
  .css-103kn7e { padding: 0px 22px 0px 40px; flex-direction: column; }
}
@media (min-width: 760px) {
  .css-103kn7e { padding: 20px 22px; flex-direction: row; }
}
.css-15zum9u { display: flex; gap: 10px; -moz-box-align: center; align-items: center; }
.css-43mqje { color: rgb(142, 146, 163); display: flex; -moz-box-align: center; align-items: center; }
.css-43mqje:hover { color: rgb(241, 241, 243); }
.css-gdpe9y { text-decoration: none; color: rgb(142, 146, 163); display: flex; -moz-box-align: center; align-items: center; }
.css-gdpe9y:hover { color: rgb(241, 241, 243); }
.css-tgjpic { margin: 0px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 143%; font-size: 0.875rem; text-decoration: none; color: rgb(142, 146, 163); display: flex; -moz-box-align: center; align-items: center; }
.css-tgjpic:hover { color: rgb(241, 241, 243); }
.css-1o62gjw { margin: 0px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; }
.css-1poxqjx { margin: 0px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 143%; font-size: 0.875rem; text-decoration: none; color: rgb(142, 146, 163); display: flex; -moz-box-align: center; align-items: center; }
.css-1poxqjx:hover { color: rgb(241, 241, 243); }
.css-qe1uop { user-select: none; width: 1em; height: 1em; display: inline-block; fill: currentcolor; flex-shrink: 0; transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1); font-size: 1.5rem; }
@media (min-width: 0px) {
  .css-qe1uop { font-size: 24px; }
}
@media (min-width: 640px) {
  .css-qe1uop { font-size: 24px; }
}
@media (min-width: 760px) {
  .css-qe1uop { font-size: 20px; }
}
.css-10dohqv { user-select: none; width: 1em; height: 1em; display: inline-block; fill: currentcolor; flex-shrink: 0; transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1); font-size: 1.5rem; }
.css-xuzscv { position: fixed; z-index: 1300; inset: 0px; visibility: hidden; }
.css-1mbdz04 { z-index: -1; }
.css-esi9ax { position: fixed; display: flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; inset: 0px; background-color: transparent; z-index: -1; }
.css-uoqd8g { position: absolute; overflow: hidden auto; min-width: 16px; min-height: 16px; max-width: calc(100% - 32px); outline: 0px; max-height: calc(100% - 96px); }
.css-1tiw2lk { color: rgb(241, 241, 243); transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1); border-radius: 4px; border: 1px solid rgba(235, 235, 239, 0.08); box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 2px, rgba(0, 0, 0, 0.1) 0px 2px 10px; background: rgb(56, 61, 81); position: absolute; overflow: hidden auto; min-width: 16px; min-height: 16px; max-width: calc(100% - 32px); outline: 0px; max-height: calc(100% - 96px); }
.css-1jj07fx { outline: 0px; }
.css-rl9mto { list-style: none; margin: 0px; padding: 4px 0px; position: relative; outline: 0px; }
.css-rl9mto .MuiMenuItem-root + .MuiDivider-root, .css-rl9mto .MuiDivider-root { margin-top: 4px; margin-bottom: 4px; }
.css-19aijy8 { display: flex; -moz-box-pack: start; justify-content: flex-start; -moz-box-align: center; align-items: center; position: relative; text-decoration: none; min-height: 48px; box-sizing: border-box; white-space: nowrap; border-bottom: 1px solid rgba(235, 235, 239, 0.08); background-clip: padding-box; padding: 12px 16px; }
.css-19aijy8:hover { text-decoration: none; background-color: rgba(235, 235, 239, 0.08); }
@media (hover: none) {
  .css-19aijy8:hover { background-color: transparent; }
}
.css-19aijy8.Mui-selected { background-color: rgba(234, 235, 239, 0.16); }
.css-19aijy8.Mui-selected.Mui-focusVisible { background-color: rgba(234, 235, 239, 0.28); }
.css-19aijy8.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.24); }
@media (hover: none) {
  .css-19aijy8.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.16); }
}
.css-19aijy8.Mui-focusVisible { background-color: rgba(235, 235, 239, 0.12); }
.css-19aijy8.Mui-disabled { opacity: 0.38; }
.css-19aijy8 + .MuiDivider-root { margin-top: 4px; margin-bottom: 4px; }
.css-19aijy8 + .MuiDivider-inset { margin-left: 52px; }
.css-19aijy8 .MuiListItemText-root { margin-top: 0px; margin-bottom: 0px; }
.css-19aijy8 .MuiListItemText-inset { padding-left: 36px; }
.css-19aijy8 .MuiListItemIcon-root { min-width: 36px; }
@media (min-width: 760px) {
  .css-19aijy8 { min-height: auto; }
}
.css-1gn43q6 { background-color: transparent; outline: 0px; border-width: 0px 0px 1px; border-style: none none solid; border-color: currentcolor currentcolor rgba(235, 235, 239, 0.08); border-image: none; margin: 0px; border-radius: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; color: inherit; display: flex; -moz-box-pack: start; justify-content: flex-start; -moz-box-align: center; align-items: center; position: relative; text-decoration: none; min-height: 48px; box-sizing: border-box; white-space: nowrap; background-clip: padding-box; padding: 12px 16px; }
.css-1gn43q6::-moz-focus-inner { border-style: none; }
.css-1gn43q6.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-1gn43q6 { print-color-adjust: exact; }
}
.css-1gn43q6:hover { text-decoration: none; background-color: rgba(235, 235, 239, 0.08); }
@media (hover: none) {
  .css-1gn43q6:hover { background-color: transparent; }
}
.css-1gn43q6.Mui-selected { background-color: rgba(234, 235, 239, 0.16); }
.css-1gn43q6.Mui-selected.Mui-focusVisible { background-color: rgba(234, 235, 239, 0.28); }
.css-1gn43q6.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.24); }
@media (hover: none) {
  .css-1gn43q6.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.16); }
}
.css-1gn43q6.Mui-focusVisible { background-color: rgba(235, 235, 239, 0.12); }
.css-1gn43q6.Mui-disabled { opacity: 0.38; }
.css-1gn43q6 + .MuiDivider-root { margin-top: 4px; margin-bottom: 4px; }
.css-1gn43q6 + .MuiDivider-inset { margin-left: 52px; }
.css-1gn43q6 .MuiListItemText-root { margin-top: 0px; margin-bottom: 0px; }
.css-1gn43q6 .MuiListItemText-inset { padding-left: 36px; }
.css-1gn43q6 .MuiListItemIcon-root { min-width: 36px; }
@media (min-width: 760px) {
  .css-1gn43q6 { min-height: auto; }
}
.css-1n8qupu { background-color: transparent; outline: 0px; border-width: 0px 0px 1px; border-style: none none solid; border-color: currentcolor currentcolor rgba(235, 235, 239, 0.08); border-image: none; margin: 0px; border-radius: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; color: inherit; display: flex; -moz-box-pack: start; justify-content: flex-start; -moz-box-align: center; align-items: center; position: relative; text-decoration: none; min-height: 48px; box-sizing: border-box; white-space: nowrap; background-clip: padding-box; padding: 12px 16px; }
.css-1n8qupu::-moz-focus-inner { border-style: none; }
.css-1n8qupu.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-1n8qupu { print-color-adjust: exact; }
}
.css-1n8qupu:hover { text-decoration: none; background-color: rgba(235, 235, 239, 0.08); }
@media (hover: none) {
  .css-1n8qupu:hover { background-color: transparent; }
}
.css-1n8qupu.Mui-selected { background-color: rgba(234, 235, 239, 0.16); }
.css-1n8qupu.Mui-selected.Mui-focusVisible { background-color: rgba(234, 235, 239, 0.28); }
.css-1n8qupu.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.24); }
@media (hover: none) {
  .css-1n8qupu.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.16); }
}
.css-1n8qupu.Mui-focusVisible { background-color: rgba(235, 235, 239, 0.12); }
.css-1n8qupu.Mui-disabled { opacity: 0.38; }
.css-1n8qupu + .MuiDivider-root { margin-top: 4px; margin-bottom: 4px; }
.css-1n8qupu + .MuiDivider-inset { margin-left: 52px; }
.css-1n8qupu .MuiListItemText-root { margin-top: 0px; margin-bottom: 0px; }
.css-1n8qupu .MuiListItemText-inset { padding-left: 36px; }
.css-1n8qupu .MuiListItemIcon-root { min-width: 36px; }
@media (min-width: 760px) {
  .css-1n8qupu { min-height: auto; }
}
.css-p7lbea { font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 143%; font-size: 0.875rem; background-color: transparent; outline: 0px; border-width: 0px 0px 1px; border-style: none none solid; border-color: currentcolor currentcolor rgba(235, 235, 239, 0.08); border-image: none; margin: 0px; border-radius: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; color: inherit; display: flex; -moz-box-pack: start; justify-content: flex-start; -moz-box-align: center; align-items: center; position: relative; text-decoration: none; min-height: 48px; box-sizing: border-box; white-space: nowrap; background-clip: padding-box; padding: 12px 16px; }
.css-p7lbea::-moz-focus-inner { border-style: none; }
.css-p7lbea.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-p7lbea { print-color-adjust: exact; }
}
.css-p7lbea:hover { text-decoration: none; background-color: rgba(235, 235, 239, 0.08); }
@media (hover: none) {
  .css-p7lbea:hover { background-color: transparent; }
}
.css-p7lbea.Mui-selected { background-color: rgba(234, 235, 239, 0.16); }
.css-p7lbea.Mui-selected.Mui-focusVisible { background-color: rgba(234, 235, 239, 0.28); }
.css-p7lbea.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.24); }
@media (hover: none) {
  .css-p7lbea.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.16); }
}
.css-p7lbea.Mui-focusVisible { background-color: rgba(235, 235, 239, 0.12); }
.css-p7lbea.Mui-disabled { opacity: 0.38; }
.css-p7lbea + .MuiDivider-root { margin-top: 4px; margin-bottom: 4px; }
.css-p7lbea + .MuiDivider-inset { margin-left: 52px; }
.css-p7lbea .MuiListItemText-root { margin-top: 0px; margin-bottom: 0px; }
.css-p7lbea .MuiListItemText-inset { padding-left: 36px; }
.css-p7lbea .MuiListItemIcon-root { min-width: 36px; }
@media (min-width: 760px) {
  .css-p7lbea { min-height: auto; }
}
.css-14d7i0e { font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 143%; font-size: 0.875rem; background-color: transparent; outline: 0px; border-width: 0px 0px 1px; border-style: none none solid; border-color: currentcolor currentcolor rgba(235, 235, 239, 0.08); border-image: none; margin: 0px; border-radius: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; color: inherit; display: flex; -moz-box-pack: start; justify-content: flex-start; -moz-box-align: center; align-items: center; position: relative; text-decoration: none; min-height: 48px; box-sizing: border-box; white-space: nowrap; background-clip: padding-box; padding: 12px 16px; }
.css-14d7i0e::-moz-focus-inner { border-style: none; }
.css-14d7i0e.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-14d7i0e { print-color-adjust: exact; }
}
.css-14d7i0e:hover { text-decoration: none; background-color: rgba(235, 235, 239, 0.08); }
@media (hover: none) {
  .css-14d7i0e:hover { background-color: transparent; }
}
.css-14d7i0e.Mui-selected { background-color: rgba(234, 235, 239, 0.16); }
.css-14d7i0e.Mui-selected.Mui-focusVisible { background-color: rgba(234, 235, 239, 0.28); }
.css-14d7i0e.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.24); }
@media (hover: none) {
  .css-14d7i0e.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.16); }
}
.css-14d7i0e.Mui-focusVisible { background-color: rgba(235, 235, 239, 0.12); }
.css-14d7i0e.Mui-disabled { opacity: 0.38; }
.css-14d7i0e + .MuiDivider-root { margin-top: 4px; margin-bottom: 4px; }
.css-14d7i0e + .MuiDivider-inset { margin-left: 52px; }
.css-14d7i0e .MuiListItemText-root { margin-top: 0px; margin-bottom: 0px; }
.css-14d7i0e .MuiListItemText-inset { padding-left: 36px; }
.css-14d7i0e .MuiListItemIcon-root { min-width: 36px; }
@media (min-width: 760px) {
  .css-14d7i0e { min-height: auto; }
}
.css-fu4g2f { margin: 0px; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.009375rem; line-height: 1.25rem; font-size: 0.875rem; }
.css-1qvb7oz { display: flex; -moz-box-pack: start; justify-content: flex-start; -moz-box-align: center; align-items: center; position: relative; text-decoration: none; min-height: 48px; box-sizing: border-box; white-space: nowrap; padding: 12px 16px; }
.css-1qvb7oz:hover { text-decoration: none; background-color: rgba(235, 235, 239, 0.08); }
@media (hover: none) {
  .css-1qvb7oz:hover { background-color: transparent; }
}
.css-1qvb7oz.Mui-selected { background-color: rgba(234, 235, 239, 0.16); }
.css-1qvb7oz.Mui-selected.Mui-focusVisible { background-color: rgba(234, 235, 239, 0.28); }
.css-1qvb7oz.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.24); }
@media (hover: none) {
  .css-1qvb7oz.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.16); }
}
.css-1qvb7oz.Mui-focusVisible { background-color: rgba(235, 235, 239, 0.12); }
.css-1qvb7oz.Mui-disabled { opacity: 0.38; }
.css-1qvb7oz + .MuiDivider-root { margin-top: 4px; margin-bottom: 4px; }
.css-1qvb7oz + .MuiDivider-inset { margin-left: 52px; }
.css-1qvb7oz .MuiListItemText-root { margin-top: 0px; margin-bottom: 0px; }
.css-1qvb7oz .MuiListItemText-inset { padding-left: 36px; }
.css-1qvb7oz .MuiListItemIcon-root { min-width: 36px; }
@media (min-width: 760px) {
  .css-1qvb7oz { min-height: auto; }
}
.css-1hn3osy { background-color: transparent; outline: 0px; border: 0px; margin: 0px; border-radius: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; color: inherit; display: flex; -moz-box-pack: start; justify-content: flex-start; -moz-box-align: center; align-items: center; position: relative; text-decoration: none; min-height: 48px; box-sizing: border-box; white-space: nowrap; padding: 12px 16px; }
.css-1hn3osy::-moz-focus-inner { border-style: none; }
.css-1hn3osy.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-1hn3osy { print-color-adjust: exact; }
}
.css-1hn3osy:hover { text-decoration: none; background-color: rgba(235, 235, 239, 0.08); }
@media (hover: none) {
  .css-1hn3osy:hover { background-color: transparent; }
}
.css-1hn3osy.Mui-selected { background-color: rgba(234, 235, 239, 0.16); }
.css-1hn3osy.Mui-selected.Mui-focusVisible { background-color: rgba(234, 235, 239, 0.28); }
.css-1hn3osy.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.24); }
@media (hover: none) {
  .css-1hn3osy.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.16); }
}
.css-1hn3osy.Mui-focusVisible { background-color: rgba(235, 235, 239, 0.12); }
.css-1hn3osy.Mui-disabled { opacity: 0.38; }
.css-1hn3osy + .MuiDivider-root { margin-top: 4px; margin-bottom: 4px; }
.css-1hn3osy + .MuiDivider-inset { margin-left: 52px; }
.css-1hn3osy .MuiListItemText-root { margin-top: 0px; margin-bottom: 0px; }
.css-1hn3osy .MuiListItemText-inset { padding-left: 36px; }
.css-1hn3osy .MuiListItemIcon-root { min-width: 36px; }
@media (min-width: 760px) {
  .css-1hn3osy { min-height: auto; }
}
.css-1ew4sfn { background-color: transparent; outline: 0px; border: 0px; margin: 0px; border-radius: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; color: inherit; display: flex; -moz-box-pack: start; justify-content: flex-start; -moz-box-align: center; align-items: center; position: relative; text-decoration: none; min-height: 48px; box-sizing: border-box; white-space: nowrap; padding: 12px 16px; }
.css-1ew4sfn::-moz-focus-inner { border-style: none; }
.css-1ew4sfn.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-1ew4sfn { print-color-adjust: exact; }
}
.css-1ew4sfn:hover { text-decoration: none; background-color: rgba(235, 235, 239, 0.08); }
@media (hover: none) {
  .css-1ew4sfn:hover { background-color: transparent; }
}
.css-1ew4sfn.Mui-selected { background-color: rgba(234, 235, 239, 0.16); }
.css-1ew4sfn.Mui-selected.Mui-focusVisible { background-color: rgba(234, 235, 239, 0.28); }
.css-1ew4sfn.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.24); }
@media (hover: none) {
  .css-1ew4sfn.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.16); }
}
.css-1ew4sfn.Mui-focusVisible { background-color: rgba(235, 235, 239, 0.12); }
.css-1ew4sfn.Mui-disabled { opacity: 0.38; }
.css-1ew4sfn + .MuiDivider-root { margin-top: 4px; margin-bottom: 4px; }
.css-1ew4sfn + .MuiDivider-inset { margin-left: 52px; }
.css-1ew4sfn .MuiListItemText-root { margin-top: 0px; margin-bottom: 0px; }
.css-1ew4sfn .MuiListItemText-inset { padding-left: 36px; }
.css-1ew4sfn .MuiListItemIcon-root { min-width: 36px; }
@media (min-width: 760px) {
  .css-1ew4sfn { min-height: auto; }
}
.css-1wkhg8r { font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 143%; font-size: 0.875rem; background-color: transparent; outline: 0px; border: 0px; margin: 0px; border-radius: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; color: inherit; display: flex; -moz-box-pack: start; justify-content: flex-start; -moz-box-align: center; align-items: center; position: relative; text-decoration: none; min-height: 48px; box-sizing: border-box; white-space: nowrap; padding: 12px 16px; }
.css-1wkhg8r::-moz-focus-inner { border-style: none; }
.css-1wkhg8r.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-1wkhg8r { print-color-adjust: exact; }
}
.css-1wkhg8r:hover { text-decoration: none; background-color: rgba(235, 235, 239, 0.08); }
@media (hover: none) {
  .css-1wkhg8r:hover { background-color: transparent; }
}
.css-1wkhg8r.Mui-selected { background-color: rgba(234, 235, 239, 0.16); }
.css-1wkhg8r.Mui-selected.Mui-focusVisible { background-color: rgba(234, 235, 239, 0.28); }
.css-1wkhg8r.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.24); }
@media (hover: none) {
  .css-1wkhg8r.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.16); }
}
.css-1wkhg8r.Mui-focusVisible { background-color: rgba(235, 235, 239, 0.12); }
.css-1wkhg8r.Mui-disabled { opacity: 0.38; }
.css-1wkhg8r + .MuiDivider-root { margin-top: 4px; margin-bottom: 4px; }
.css-1wkhg8r + .MuiDivider-inset { margin-left: 52px; }
.css-1wkhg8r .MuiListItemText-root { margin-top: 0px; margin-bottom: 0px; }
.css-1wkhg8r .MuiListItemText-inset { padding-left: 36px; }
.css-1wkhg8r .MuiListItemIcon-root { min-width: 36px; }
@media (min-width: 760px) {
  .css-1wkhg8r { min-height: auto; }
}
.css-o79a0b { flex-shrink: 0; display: inline-flex; color: rgb(241, 241, 243); min-width: unset !important; margin-right: 12px; }
.css-1i92f6e { user-select: none; width: 1em; height: 1em; display: inline-block; fill: currentcolor; flex-shrink: 0; transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1); font-size: 20px; }
.css-1bff9c9 { flex: 1 1 auto; min-width: 0px; margin-top: 4px; margin-bottom: 4px; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.009375rem; line-height: 1.25rem; font-size: 0.875rem; }
.css-12sut97 { margin: 0px; display: block; }
.css-1x6ok7 { margin-right: 8px; }
.css-1x6ok7 .MuiBadge-badge { top: 2px; right: 2px; border-radius: 20px; width: 10px; height: 10px; background-color: rgb(244, 143, 177); color: rgb(244, 143, 177); }
.css-1x6ok7 .MuiBadge-badge::after { position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; border-radius: 50%; animation: 1.2s ease-in-out infinite ripple; border: 1px solid; content: ""; }
@keyframes ripple {
0% { transform: scale(0.8); opacity: 1; }
100% { transform: scale(2.4); opacity: 0; }
}
@keyframes ripple {
0% { transform: scale(0.8); opacity: 1; }
100% { transform: scale(2.4); opacity: 0; }
}
.css-4cuzhb { position: relative; display: inline-flex; vertical-align: middle; flex-shrink: 0; margin-right: 8px; }
.css-4cuzhb .MuiBadge-badge { top: 2px; right: 2px; border-radius: 20px; width: 10px; height: 10px; background-color: rgb(244, 143, 177); color: rgb(244, 143, 177); }
.css-4cuzhb .MuiBadge-badge::after { position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; border-radius: 50%; animation: 1.2s ease-in-out infinite ripple; border: 1px solid; content: ""; }
@keyframes ripple {
0% { transform: scale(0.8); opacity: 1; }
100% { transform: scale(2.4); opacity: 0; }
}
@keyframes ripple {
0% { transform: scale(0.8); opacity: 1; }
100% { transform: scale(2.4); opacity: 0; }
}
.css-1i86deq { transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 500; line-height: 1.5rem; font-size: 0.875rem; color: rgb(255, 255, 255); border: 1px solid rgba(235, 235, 237, 0.12); background-color: rgb(56, 61, 81); padding: 7px 8px; min-width: unset; gap: 8px; -moz-box-align: center; align-items: center; }
.css-1i86deq:hover { text-decoration: none; background-color: rgba(241, 241, 243, 0.08); }
@media (hover: none) {
  .css-1i86deq:hover { background-color: transparent; }
}
.css-1i86deq.Mui-disabled { color: rgba(235, 235, 239, 0.3); }
.css-1i86deq:hover { box-shadow: none; }
.css-1i86deq.Mui-focusVisible { box-shadow: none; }
.css-1i86deq:active { box-shadow: none; }
.css-1i86deq.Mui-disabled { box-shadow: none; }
.css-1i86deq:hover, .css-1i86deq.Mui-focusVisible { background-color: rgb(27, 32, 48); }
.css-sp2i6c { display: inline-flex; -moz-box-pack: center; justify-content: center; position: relative; box-sizing: border-box; outline: 0px; margin: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; text-decoration: none; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 500; line-height: 1.5rem; font-size: 0.875rem; color: rgb(255, 255, 255); border: 1px solid rgba(235, 235, 237, 0.12); background-color: rgb(56, 61, 81); padding: 7px 8px; min-width: unset; gap: 8px; -moz-box-align: center; align-items: center; }
.css-sp2i6c::-moz-focus-inner { border-style: none; }
.css-sp2i6c.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-sp2i6c { print-color-adjust: exact; }
}
.css-sp2i6c:hover { text-decoration: none; background-color: rgba(241, 241, 243, 0.08); }
@media (hover: none) {
  .css-sp2i6c:hover { background-color: transparent; }
}
.css-sp2i6c.Mui-disabled { color: rgba(235, 235, 239, 0.3); }
.css-sp2i6c:hover { box-shadow: none; }
.css-sp2i6c.Mui-focusVisible { box-shadow: none; }
.css-sp2i6c:active { box-shadow: none; }
.css-sp2i6c.Mui-disabled { box-shadow: none; }
.css-sp2i6c:hover, .css-sp2i6c.Mui-focusVisible { background-color: rgb(27, 32, 48); }
.css-g7go18 { user-select: none; width: 1em; height: 1em; display: inline-block; fill: currentcolor; flex-shrink: 0; transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1); font-size: 1.25rem; }
.css-10ut6yj { display: flex; flex-flow: wrap; -moz-box-pack: center; place-content: center; -moz-box-align: center; align-items: center; position: absolute; box-sizing: border-box; font-family: Inter, Arial; font-weight: 500; font-size: 0.75rem; line-height: 1; z-index: 1; transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1); background-color: rgb(244, 143, 177); color: rgba(0, 0, 0, 0.87); border-radius: 4px; height: 8px; min-width: 8px; padding: 0px; top: 0px; right: 0px; transform: scale(1) translate(50%, -50%); transform-origin: 100% 0% 0px; }
.css-10ut6yj.MuiBadge-invisible { transform: scale(0) translate(50%, -50%); }
.css-1197euy { display: flex; flex-flow: wrap; -moz-box-pack: center; place-content: center; -moz-box-align: center; align-items: center; position: absolute; box-sizing: border-box; font-family: Inter, Arial; font-weight: 500; font-size: 0.75rem; line-height: 1; z-index: 1; background-color: rgb(244, 143, 177); color: rgba(0, 0, 0, 0.87); border-radius: 4px; height: 8px; min-width: 8px; padding: 0px; top: 0px; right: 0px; transform: scale(1) translate(50%, -50%); transform-origin: 100% 0% 0px; transition: transform 195ms cubic-bezier(0.4, 0, 0.2, 1); }
.css-1197euy.MuiBadge-invisible { transform: scale(0) translate(50%, -50%); }
.css-ykkv87 { position: fixed; z-index: 1300; inset: 0px; visibility: hidden; }
.css-ykkv87 .MuiMenuItem-root.Mui-disabled { opacity: 1; }
.css-14sw753 { display: flex; -moz-box-pack: start; justify-content: flex-start; -moz-box-align: center; align-items: center; position: relative; text-decoration: none; min-height: 48px; box-sizing: border-box; white-space: nowrap; padding: 12px 16px; margin-bottom: 4px; }
.css-14sw753:hover { text-decoration: none; background-color: rgba(235, 235, 239, 0.08); }
@media (hover: none) {
  .css-14sw753:hover { background-color: transparent; }
}
.css-14sw753.Mui-selected { background-color: rgba(234, 235, 239, 0.16); }
.css-14sw753.Mui-selected.Mui-focusVisible { background-color: rgba(234, 235, 239, 0.28); }
.css-14sw753.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.24); }
@media (hover: none) {
  .css-14sw753.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.16); }
}
.css-14sw753.Mui-focusVisible { background-color: rgba(235, 235, 239, 0.12); }
.css-14sw753.Mui-disabled { opacity: 0.38; }
.css-14sw753 + .MuiDivider-root { margin-top: 4px; margin-bottom: 4px; }
.css-14sw753 + .MuiDivider-inset { margin-left: 52px; }
.css-14sw753 .MuiListItemText-root { margin-top: 0px; margin-bottom: 0px; }
.css-14sw753 .MuiListItemText-inset { padding-left: 36px; }
.css-14sw753 .MuiListItemIcon-root { min-width: 36px; }
@media (min-width: 760px) {
  .css-14sw753 { min-height: auto; }
}
.css-1mbm7em { background-color: transparent; outline: 0px; border: 0px; margin: 0px 0px 4px; border-radius: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; color: inherit; display: flex; -moz-box-pack: start; justify-content: flex-start; -moz-box-align: center; align-items: center; position: relative; text-decoration: none; min-height: 48px; box-sizing: border-box; white-space: nowrap; padding: 12px 16px; }
.css-1mbm7em::-moz-focus-inner { border-style: none; }
.css-1mbm7em.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-1mbm7em { print-color-adjust: exact; }
}
.css-1mbm7em:hover { text-decoration: none; background-color: rgba(235, 235, 239, 0.08); }
@media (hover: none) {
  .css-1mbm7em:hover { background-color: transparent; }
}
.css-1mbm7em.Mui-selected { background-color: rgba(234, 235, 239, 0.16); }
.css-1mbm7em.Mui-selected.Mui-focusVisible { background-color: rgba(234, 235, 239, 0.28); }
.css-1mbm7em.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.24); }
@media (hover: none) {
  .css-1mbm7em.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.16); }
}
.css-1mbm7em.Mui-focusVisible { background-color: rgba(235, 235, 239, 0.12); }
.css-1mbm7em.Mui-disabled { opacity: 0.38; }
.css-1mbm7em + .MuiDivider-root { margin-top: 4px; margin-bottom: 4px; }
.css-1mbm7em + .MuiDivider-inset { margin-left: 52px; }
.css-1mbm7em .MuiListItemText-root { margin-top: 0px; margin-bottom: 0px; }
.css-1mbm7em .MuiListItemText-inset { padding-left: 36px; }
.css-1mbm7em .MuiListItemIcon-root { min-width: 36px; }
@media (min-width: 760px) {
  .css-1mbm7em { min-height: auto; }
}
.css-1ihr2wc { margin: 0px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.00625rem; line-height: 1rem; font-size: 0.75rem; color: rgb(165, 168, 182); }
@media (min-width: 0px) {
  .css-weea65 { color: rgb(241, 241, 243); padding-top: 6px; padding-bottom: 6px; }
}
@media (min-width: 960px) {
  .css-weea65 { color: rgb(241, 241, 243); padding-top: 8px; padding-bottom: 8px; }
}
.css-1104vpx { display: flex; -moz-box-pack: start; justify-content: flex-start; -moz-box-align: center; align-items: center; position: relative; text-decoration: none; min-height: 48px; box-sizing: border-box; white-space: nowrap; padding: 12px 16px; }
.css-1104vpx:hover { text-decoration: none; background-color: rgba(235, 235, 239, 0.08); }
@media (hover: none) {
  .css-1104vpx:hover { background-color: transparent; }
}
.css-1104vpx.Mui-selected { background-color: rgba(234, 235, 239, 0.16); }
.css-1104vpx.Mui-selected.Mui-focusVisible { background-color: rgba(234, 235, 239, 0.28); }
.css-1104vpx.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.24); }
@media (hover: none) {
  .css-1104vpx.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.16); }
}
.css-1104vpx.Mui-focusVisible { background-color: rgba(235, 235, 239, 0.12); }
.css-1104vpx.Mui-disabled { opacity: 0.38; }
.css-1104vpx + .MuiDivider-root { margin-top: 4px; margin-bottom: 4px; }
.css-1104vpx + .MuiDivider-inset { margin-left: 52px; }
.css-1104vpx .MuiListItemText-root { margin-top: 0px; margin-bottom: 0px; }
.css-1104vpx .MuiListItemText-inset { padding-left: 36px; }
.css-1104vpx .MuiListItemIcon-root { min-width: 36px; }
@media (min-width: 760px) {
  .css-1104vpx { min-height: auto; }
}
@media (min-width: 0px) {
  .css-1104vpx { color: rgb(241, 241, 243); padding-top: 6px; padding-bottom: 6px; }
}
@media (min-width: 960px) {
  .css-1104vpx { color: rgb(241, 241, 243); padding-top: 8px; padding-bottom: 8px; }
}
.css-1bvwjcp { background-color: transparent; outline: 0px; border: 0px; margin: 0px; border-radius: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; color: inherit; display: flex; -moz-box-pack: start; justify-content: flex-start; -moz-box-align: center; align-items: center; position: relative; text-decoration: none; min-height: 48px; box-sizing: border-box; white-space: nowrap; padding: 12px 16px; }
.css-1bvwjcp::-moz-focus-inner { border-style: none; }
.css-1bvwjcp.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-1bvwjcp { print-color-adjust: exact; }
}
.css-1bvwjcp:hover { text-decoration: none; background-color: rgba(235, 235, 239, 0.08); }
@media (hover: none) {
  .css-1bvwjcp:hover { background-color: transparent; }
}
.css-1bvwjcp.Mui-selected { background-color: rgba(234, 235, 239, 0.16); }
.css-1bvwjcp.Mui-selected.Mui-focusVisible { background-color: rgba(234, 235, 239, 0.28); }
.css-1bvwjcp.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.24); }
@media (hover: none) {
  .css-1bvwjcp.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.16); }
}
.css-1bvwjcp.Mui-focusVisible { background-color: rgba(235, 235, 239, 0.12); }
.css-1bvwjcp.Mui-disabled { opacity: 0.38; }
.css-1bvwjcp + .MuiDivider-root { margin-top: 4px; margin-bottom: 4px; }
.css-1bvwjcp + .MuiDivider-inset { margin-left: 52px; }
.css-1bvwjcp .MuiListItemText-root { margin-top: 0px; margin-bottom: 0px; }
.css-1bvwjcp .MuiListItemText-inset { padding-left: 36px; }
.css-1bvwjcp .MuiListItemIcon-root { min-width: 36px; }
@media (min-width: 760px) {
  .css-1bvwjcp { min-height: auto; }
}
@media (min-width: 0px) {
  .css-1bvwjcp { color: rgb(241, 241, 243); padding-top: 6px; padding-bottom: 6px; }
}
@media (min-width: 960px) {
  .css-1bvwjcp { color: rgb(241, 241, 243); padding-top: 8px; padding-bottom: 8px; }
}
.css-17jn1ih { display: inline-flex; -moz-box-align: center; align-items: center; cursor: pointer; vertical-align: middle; margin-left: 16px; flex-direction: row-reverse; margin-right: 0px; }
.css-17jn1ih.Mui-disabled { cursor: default; }
.css-17jn1ih .MuiFormControlLabel-label.Mui-disabled { color: rgb(98, 103, 123); }
.css-cybp3x { display: inline-flex; overflow: hidden; box-sizing: border-box; position: relative; flex-shrink: 0; z-index: 0; vertical-align: middle; height: 32px; width: 46px; padding: 6px; }
@media print {
  .css-cybp3x { print-color-adjust: exact; }
}
@media (min-width: 0px) {
  .css-cybp3x .MuiSwitch-track { background-color: rgba(255, 255, 255, 0.12); }
}
@media (min-width: 960px) {
  .css-cybp3x .MuiSwitch-track { background-color: rgb(241, 241, 243); }
}
.css-134l925 { position: absolute; top: 0px; left: 0px; z-index: 1; color: rgb(224, 224, 224); transition: left 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1); padding: 8px; }
.css-134l925.Mui-checked { transform: translateX(20px); }
.css-134l925.Mui-disabled { color: rgb(117, 117, 117); }
.css-134l925.Mui-checked + .MuiSwitch-track { opacity: 0.5; }
.css-134l925.Mui-disabled + .MuiSwitch-track { opacity: 0.2; }
.css-134l925 .MuiSwitch-input { left: -100%; width: 300%; }
.css-134l925:hover { background-color: rgba(235, 235, 239, 0.08); }
@media (hover: none) {
  .css-134l925:hover { background-color: transparent; }
}
.css-134l925.Mui-checked { color: rgb(234, 235, 239); }
.css-134l925.Mui-checked:hover { background-color: rgba(234, 235, 239, 0.08); }
@media (hover: none) {
  .css-134l925.Mui-checked:hover { background-color: transparent; }
}
.css-134l925.Mui-checked.Mui-disabled { color: rgb(105, 105, 107); }
.css-134l925.Mui-checked + .MuiSwitch-track { background-color: rgb(234, 235, 239); }
.css-134l925.Mui-checked { transform: translateX(14px); }
.css-134l925.Mui-checked + .MuiSwitch-track { background-color: rgb(102, 187, 106); opacity: 1; }
.css-134l925.Mui-disabled { opacity: 0.3; }
.css-1ov3i1j { border-radius: 50%; position: absolute; top: 0px; left: 0px; z-index: 1; color: rgb(224, 224, 224); transition: left 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1); padding: 8px; }
.css-1ov3i1j.Mui-checked { transform: translateX(20px); }
.css-1ov3i1j.Mui-disabled { color: rgb(117, 117, 117); }
.css-1ov3i1j.Mui-checked + .MuiSwitch-track { opacity: 0.5; }
.css-1ov3i1j.Mui-disabled + .MuiSwitch-track { opacity: 0.2; }
.css-1ov3i1j .MuiSwitch-input { left: -100%; width: 300%; }
.css-1ov3i1j:hover { background-color: rgba(235, 235, 239, 0.08); }
@media (hover: none) {
  .css-1ov3i1j:hover { background-color: transparent; }
}
.css-1ov3i1j.Mui-checked { color: rgb(234, 235, 239); }
.css-1ov3i1j.Mui-checked:hover { background-color: rgba(234, 235, 239, 0.08); }
@media (hover: none) {
  .css-1ov3i1j.Mui-checked:hover { background-color: transparent; }
}
.css-1ov3i1j.Mui-checked.Mui-disabled { color: rgb(105, 105, 107); }
.css-1ov3i1j.Mui-checked + .MuiSwitch-track { background-color: rgb(234, 235, 239); }
.css-1ov3i1j.Mui-checked { transform: translateX(14px); }
.css-1ov3i1j.Mui-checked + .MuiSwitch-track { background-color: rgb(102, 187, 106); opacity: 1; }
.css-1ov3i1j.Mui-disabled { opacity: 0.3; }
.css-vn8sp { display: inline-flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; box-sizing: border-box; background-color: transparent; outline: 0px; border: 0px; margin: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; text-decoration: none; border-radius: 50%; position: absolute; top: 0px; left: 0px; z-index: 1; color: rgb(224, 224, 224); transition: left 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1); padding: 8px; }
.css-vn8sp::-moz-focus-inner { border-style: none; }
.css-vn8sp.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-vn8sp { print-color-adjust: exact; }
}
.css-vn8sp.Mui-checked { transform: translateX(20px); }
.css-vn8sp.Mui-disabled { color: rgb(117, 117, 117); }
.css-vn8sp.Mui-checked + .MuiSwitch-track { opacity: 0.5; }
.css-vn8sp.Mui-disabled + .MuiSwitch-track { opacity: 0.2; }
.css-vn8sp .MuiSwitch-input { left: -100%; width: 300%; }
.css-vn8sp:hover { background-color: rgba(235, 235, 239, 0.08); }
@media (hover: none) {
  .css-vn8sp:hover { background-color: transparent; }
}
.css-vn8sp.Mui-checked { color: rgb(234, 235, 239); }
.css-vn8sp.Mui-checked:hover { background-color: rgba(234, 235, 239, 0.08); }
@media (hover: none) {
  .css-vn8sp.Mui-checked:hover { background-color: transparent; }
}
.css-vn8sp.Mui-checked.Mui-disabled { color: rgb(105, 105, 107); }
.css-vn8sp.Mui-checked + .MuiSwitch-track { background-color: rgb(234, 235, 239); }
.css-vn8sp.Mui-checked { transform: translateX(14px); }
.css-vn8sp.Mui-checked + .MuiSwitch-track { background-color: rgb(102, 187, 106); opacity: 1; }
.css-vn8sp.Mui-disabled { opacity: 0.3; }
.css-1m9pwf3 { cursor: inherit; position: absolute; opacity: 0; width: 100%; height: 100%; top: 0px; left: 0px; margin: 0px; padding: 0px; z-index: 1; }
.css-uz25m2 { background-color: currentcolor; color: rgb(255, 255, 255); border-radius: 6px; width: 16px; height: 16px; box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 1px; }
.css-5w2f18 { height: 100%; width: 100%; z-index: -1; transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1), background-color 150ms cubic-bezier(0.4, 0, 0.2, 1); opacity: 1; background-color: rgba(235, 235, 239, 0.56); border-radius: 8px; }
.css-1nkijli { margin: 0px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 143%; font-size: 0.875rem; }
.css-9bat2v { cursor: pointer; }
@media (min-width: 0px) {
  .css-9bat2v { color: rgb(241, 241, 243); padding-top: 6px; padding-bottom: 6px; }
}
@media (min-width: 960px) {
  .css-9bat2v { color: rgb(241, 241, 243); padding-top: 8px; padding-bottom: 8px; }
}
.css-jgdezg { display: flex; -moz-box-pack: start; justify-content: flex-start; -moz-box-align: center; align-items: center; position: relative; text-decoration: none; width: 100%; box-sizing: border-box; text-align: left; padding: 8px 16px; cursor: pointer; }
.css-jgdezg.Mui-focusVisible { background-color: rgba(235, 235, 239, 0.12); }
.css-jgdezg.Mui-selected { background-color: rgba(234, 235, 239, 0.16); }
.css-jgdezg.Mui-selected.Mui-focusVisible { background-color: rgba(234, 235, 239, 0.28); }
.css-jgdezg.Mui-disabled { opacity: 0.38; }
@media (min-width: 0px) {
  .css-jgdezg { color: rgb(241, 241, 243); padding-top: 6px; padding-bottom: 6px; }
}
@media (min-width: 960px) {
  .css-jgdezg { color: rgb(241, 241, 243); padding-top: 8px; padding-bottom: 8px; }
}
@media (min-width: 0px) {
  .css-1drla68 { color: rgb(241, 241, 243); }
}
@media (min-width: 960px) {
  .css-1drla68 { color: rgb(241, 241, 243); }
}
.css-1ljtpgu { display: flex; -moz-box-pack: start; justify-content: flex-start; -moz-box-align: center; align-items: center; position: relative; text-decoration: none; min-height: 48px; box-sizing: border-box; white-space: nowrap; padding: 12px 16px; }
.css-1ljtpgu:hover { text-decoration: none; background-color: rgba(235, 235, 239, 0.08); }
@media (hover: none) {
  .css-1ljtpgu:hover { background-color: transparent; }
}
.css-1ljtpgu.Mui-selected { background-color: rgba(234, 235, 239, 0.16); }
.css-1ljtpgu.Mui-selected.Mui-focusVisible { background-color: rgba(234, 235, 239, 0.28); }
.css-1ljtpgu.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.24); }
@media (hover: none) {
  .css-1ljtpgu.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.16); }
}
.css-1ljtpgu.Mui-focusVisible { background-color: rgba(235, 235, 239, 0.12); }
.css-1ljtpgu.Mui-disabled { opacity: 0.38; }
.css-1ljtpgu + .MuiDivider-root { margin-top: 4px; margin-bottom: 4px; }
.css-1ljtpgu + .MuiDivider-inset { margin-left: 52px; }
.css-1ljtpgu .MuiListItemText-root { margin-top: 0px; margin-bottom: 0px; }
.css-1ljtpgu .MuiListItemText-inset { padding-left: 36px; }
.css-1ljtpgu .MuiListItemIcon-root { min-width: 36px; }
@media (min-width: 760px) {
  .css-1ljtpgu { min-height: auto; }
}
@media (min-width: 0px) {
  .css-1ljtpgu { color: rgb(241, 241, 243); }
}
@media (min-width: 960px) {
  .css-1ljtpgu { color: rgb(241, 241, 243); }
}
.css-hhhx1n { background-color: transparent; outline: 0px; border: 0px; margin: 0px; border-radius: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; color: inherit; display: flex; -moz-box-pack: start; justify-content: flex-start; -moz-box-align: center; align-items: center; position: relative; text-decoration: none; min-height: 48px; box-sizing: border-box; white-space: nowrap; padding: 12px 16px; }
.css-hhhx1n::-moz-focus-inner { border-style: none; }
.css-hhhx1n.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-hhhx1n { print-color-adjust: exact; }
}
.css-hhhx1n:hover { text-decoration: none; background-color: rgba(235, 235, 239, 0.08); }
@media (hover: none) {
  .css-hhhx1n:hover { background-color: transparent; }
}
.css-hhhx1n.Mui-selected { background-color: rgba(234, 235, 239, 0.16); }
.css-hhhx1n.Mui-selected.Mui-focusVisible { background-color: rgba(234, 235, 239, 0.28); }
.css-hhhx1n.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.24); }
@media (hover: none) {
  .css-hhhx1n.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.16); }
}
.css-hhhx1n.Mui-focusVisible { background-color: rgba(235, 235, 239, 0.12); }
.css-hhhx1n.Mui-disabled { opacity: 0.38; }
.css-hhhx1n + .MuiDivider-root { margin-top: 4px; margin-bottom: 4px; }
.css-hhhx1n + .MuiDivider-inset { margin-left: 52px; }
.css-hhhx1n .MuiListItemText-root { margin-top: 0px; margin-bottom: 0px; }
.css-hhhx1n .MuiListItemText-inset { padding-left: 36px; }
.css-hhhx1n .MuiListItemIcon-root { min-width: 36px; }
@media (min-width: 760px) {
  .css-hhhx1n { min-height: auto; }
}
@media (min-width: 0px) {
  .css-hhhx1n { color: rgb(241, 241, 243); }
}
@media (min-width: 960px) {
  .css-hhhx1n { color: rgb(241, 241, 243); }
}
.css-10ga8kg { user-select: none; width: 1em; height: 1em; display: inline-block; fill: currentcolor; flex-shrink: 0; transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1); font-size: 1.25rem; margin-left: 4px; }
@media (min-width: 0px) {
  .css-10ga8kg { color: rgb(241, 241, 243); }
}
@media (min-width: 960px) {
  .css-10ga8kg { color: rgb(241, 241, 243); }
}
.css-14ujvxq { margin-bottom: 4px; }
@media (min-width: 0px) {
  .css-14ujvxq { color: rgb(241, 241, 243); }
}
@media (min-width: 960px) {
  .css-14ujvxq { color: rgb(241, 241, 243); }
}
.css-1eagfjq { display: flex; -moz-box-pack: start; justify-content: flex-start; -moz-box-align: center; align-items: center; position: relative; text-decoration: none; min-height: 48px; box-sizing: border-box; white-space: nowrap; padding: 12px 16px; margin-bottom: 4px; }
.css-1eagfjq:hover { text-decoration: none; background-color: rgba(235, 235, 239, 0.08); }
@media (hover: none) {
  .css-1eagfjq:hover { background-color: transparent; }
}
.css-1eagfjq.Mui-selected { background-color: rgba(234, 235, 239, 0.16); }
.css-1eagfjq.Mui-selected.Mui-focusVisible { background-color: rgba(234, 235, 239, 0.28); }
.css-1eagfjq.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.24); }
@media (hover: none) {
  .css-1eagfjq.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.16); }
}
.css-1eagfjq.Mui-focusVisible { background-color: rgba(235, 235, 239, 0.12); }
.css-1eagfjq.Mui-disabled { opacity: 0.38; }
.css-1eagfjq + .MuiDivider-root { margin-top: 4px; margin-bottom: 4px; }
.css-1eagfjq + .MuiDivider-inset { margin-left: 52px; }
.css-1eagfjq .MuiListItemText-root { margin-top: 0px; margin-bottom: 0px; }
.css-1eagfjq .MuiListItemText-inset { padding-left: 36px; }
.css-1eagfjq .MuiListItemIcon-root { min-width: 36px; }
@media (min-width: 760px) {
  .css-1eagfjq { min-height: auto; }
}
@media (min-width: 0px) {
  .css-1eagfjq { color: rgb(241, 241, 243); }
}
@media (min-width: 960px) {
  .css-1eagfjq { color: rgb(241, 241, 243); }
}
.css-1m6wsd1 { background-color: transparent; outline: 0px; border: 0px; margin: 0px 0px 4px; border-radius: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; color: inherit; display: flex; -moz-box-pack: start; justify-content: flex-start; -moz-box-align: center; align-items: center; position: relative; text-decoration: none; min-height: 48px; box-sizing: border-box; white-space: nowrap; padding: 12px 16px; }
.css-1m6wsd1::-moz-focus-inner { border-style: none; }
.css-1m6wsd1.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-1m6wsd1 { print-color-adjust: exact; }
}
.css-1m6wsd1:hover { text-decoration: none; background-color: rgba(235, 235, 239, 0.08); }
@media (hover: none) {
  .css-1m6wsd1:hover { background-color: transparent; }
}
.css-1m6wsd1.Mui-selected { background-color: rgba(234, 235, 239, 0.16); }
.css-1m6wsd1.Mui-selected.Mui-focusVisible { background-color: rgba(234, 235, 239, 0.28); }
.css-1m6wsd1.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.24); }
@media (hover: none) {
  .css-1m6wsd1.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.16); }
}
.css-1m6wsd1.Mui-focusVisible { background-color: rgba(235, 235, 239, 0.12); }
.css-1m6wsd1.Mui-disabled { opacity: 0.38; }
.css-1m6wsd1 + .MuiDivider-root { margin-top: 4px; margin-bottom: 4px; }
.css-1m6wsd1 + .MuiDivider-inset { margin-left: 52px; }
.css-1m6wsd1 .MuiListItemText-root { margin-top: 0px; margin-bottom: 0px; }
.css-1m6wsd1 .MuiListItemText-inset { padding-left: 36px; }
.css-1m6wsd1 .MuiListItemIcon-root { min-width: 36px; }
@media (min-width: 760px) {
  .css-1m6wsd1 { min-height: auto; }
}
@media (min-width: 0px) {
  .css-1m6wsd1 { color: rgb(241, 241, 243); }
}
@media (min-width: 960px) {
  .css-1m6wsd1 { color: rgb(241, 241, 243); }
}
.css-1jrnzya { flex-shrink: 0; display: inline-flex; color: rgb(241, 241, 243); min-width: unset !important; margin-right: 8px; }
@media (min-width: 0px) {
  .css-1jrnzya { color: rgb(241, 241, 243); }
}
@media (min-width: 960px) {
  .css-1jrnzya { color: rgb(241, 241, 243); }
}
@media (min-width: 0px) {
  .css-16mujtn { color: rgb(241, 241, 243); }
}
@media (min-width: 960px) {
  .css-16mujtn { color: rgb(241, 241, 243); }
}
.css-16mujtn .MuiListItemIcon-root { min-width: unset; }
.css-16mujtn .MuiMenuItemIcon-root { min-width: unset; }
.css-1uhh2s4 { display: flex; -moz-box-pack: start; justify-content: flex-start; -moz-box-align: center; align-items: center; position: relative; text-decoration: none; min-height: 48px; box-sizing: border-box; white-space: nowrap; padding: 12px 16px; }
.css-1uhh2s4:hover { text-decoration: none; background-color: rgba(235, 235, 239, 0.08); }
@media (hover: none) {
  .css-1uhh2s4:hover { background-color: transparent; }
}
.css-1uhh2s4.Mui-selected { background-color: rgba(234, 235, 239, 0.16); }
.css-1uhh2s4.Mui-selected.Mui-focusVisible { background-color: rgba(234, 235, 239, 0.28); }
.css-1uhh2s4.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.24); }
@media (hover: none) {
  .css-1uhh2s4.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.16); }
}
.css-1uhh2s4.Mui-focusVisible { background-color: rgba(235, 235, 239, 0.12); }
.css-1uhh2s4.Mui-disabled { opacity: 0.38; }
.css-1uhh2s4 + .MuiDivider-root { margin-top: 4px; margin-bottom: 4px; }
.css-1uhh2s4 + .MuiDivider-inset { margin-left: 52px; }
.css-1uhh2s4 .MuiListItemText-root { margin-top: 0px; margin-bottom: 0px; }
.css-1uhh2s4 .MuiListItemText-inset { padding-left: 36px; }
.css-1uhh2s4 .MuiListItemIcon-root { min-width: 36px; }
@media (min-width: 760px) {
  .css-1uhh2s4 { min-height: auto; }
}
@media (min-width: 0px) {
  .css-1uhh2s4 { color: rgb(241, 241, 243); }
}
@media (min-width: 960px) {
  .css-1uhh2s4 { color: rgb(241, 241, 243); }
}
.css-1uhh2s4 .MuiListItemIcon-root { min-width: unset; }
.css-1uhh2s4 .MuiMenuItemIcon-root { min-width: unset; }
.css-1ahntzt { background-color: transparent; outline: 0px; border: 0px; margin: 0px; border-radius: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; color: inherit; display: flex; -moz-box-pack: start; justify-content: flex-start; -moz-box-align: center; align-items: center; position: relative; text-decoration: none; min-height: 48px; box-sizing: border-box; white-space: nowrap; padding: 12px 16px; }
.css-1ahntzt::-moz-focus-inner { border-style: none; }
.css-1ahntzt.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-1ahntzt { print-color-adjust: exact; }
}
.css-1ahntzt:hover { text-decoration: none; background-color: rgba(235, 235, 239, 0.08); }
@media (hover: none) {
  .css-1ahntzt:hover { background-color: transparent; }
}
.css-1ahntzt.Mui-selected { background-color: rgba(234, 235, 239, 0.16); }
.css-1ahntzt.Mui-selected.Mui-focusVisible { background-color: rgba(234, 235, 239, 0.28); }
.css-1ahntzt.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.24); }
@media (hover: none) {
  .css-1ahntzt.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.16); }
}
.css-1ahntzt.Mui-focusVisible { background-color: rgba(235, 235, 239, 0.12); }
.css-1ahntzt.Mui-disabled { opacity: 0.38; }
.css-1ahntzt + .MuiDivider-root { margin-top: 4px; margin-bottom: 4px; }
.css-1ahntzt + .MuiDivider-inset { margin-left: 52px; }
.css-1ahntzt .MuiListItemText-root { margin-top: 0px; margin-bottom: 0px; }
.css-1ahntzt .MuiListItemText-inset { padding-left: 36px; }
.css-1ahntzt .MuiListItemIcon-root { min-width: 36px; }
@media (min-width: 760px) {
  .css-1ahntzt { min-height: auto; }
}
@media (min-width: 0px) {
  .css-1ahntzt { color: rgb(241, 241, 243); }
}
@media (min-width: 960px) {
  .css-1ahntzt { color: rgb(241, 241, 243); }
}
.css-1ahntzt .MuiListItemIcon-root { min-width: unset; }
.css-1ahntzt .MuiMenuItemIcon-root { min-width: unset; }
.css-2rw4ax { flex-shrink: 0; display: inline-flex; color: rgb(241, 241, 243); min-width: unset !important; margin-right: 12px; border-radius: 2px; overflow: hidden; width: 20px; height: 14px; }
.css-5rwpj6 { flex-shrink: 0; display: inline-flex; color: rgb(241, 241, 243); min-width: unset !important; margin: 0px; }
.css-1dl5zgf { user-select: none; width: 1em; height: 1em; display: inline-block; fill: currentcolor; flex-shrink: 0; transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1); font-size: 1.25rem; }
@media (min-width: 0px) {
  .css-1dl5zgf { color: rgb(241, 241, 243); }
}
@media (min-width: 960px) {
  .css-1dl5zgf { color: rgb(241, 241, 243); }
}
.css-w0pj6f { overflow: hidden; pointer-events: none; position: absolute; z-index: 0; inset: 0px; border-radius: inherit; }
.css-w851jv { min-width: 64px; box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 500; line-height: 1.5rem; font-size: 0.875rem; padding: 6px 12px; color: rgb(255, 255, 255); background: linear-gradient(248.86deg, rgb(182, 80, 158) 10.51%, rgb(46, 186, 198) 93.41%); transition: 0.2s; }
.css-w851jv:hover { text-decoration: none; background-color: rgba(241, 241, 243, 0.08); }
@media (hover: none) {
  .css-w851jv:hover { background-color: transparent; }
}
.css-w851jv.Mui-disabled { color: rgba(235, 235, 239, 0.3); }
.css-w851jv:hover { box-shadow: none; }
.css-w851jv.Mui-focusVisible { box-shadow: none; }
.css-w851jv:active { box-shadow: none; }
.css-w851jv.Mui-disabled { box-shadow: none; }
.css-w851jv:hover, .css-w851jv.Mui-focusVisible { background: linear-gradient(248.86deg, rgb(182, 80, 158) 10.51%, rgb(46, 186, 198) 93.41%); opacity: 0.9; }
.css-1y4kwyt { display: inline-flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; position: relative; box-sizing: border-box; outline: 0px; border: 0px; margin: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; text-decoration: none; min-width: 64px; box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 500; line-height: 1.5rem; font-size: 0.875rem; padding: 6px 12px; color: rgb(255, 255, 255); background: linear-gradient(248.86deg, rgb(182, 80, 158) 10.51%, rgb(46, 186, 198) 93.41%); transition: 0.2s; }
.css-1y4kwyt::-moz-focus-inner { border-style: none; }
.css-1y4kwyt.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-1y4kwyt { print-color-adjust: exact; }
}
.css-1y4kwyt:hover { text-decoration: none; background-color: rgba(241, 241, 243, 0.08); }
@media (hover: none) {
  .css-1y4kwyt:hover { background-color: transparent; }
}
.css-1y4kwyt.Mui-disabled { color: rgba(235, 235, 239, 0.3); }
.css-1y4kwyt:hover { box-shadow: none; }
.css-1y4kwyt.Mui-focusVisible { box-shadow: none; }
.css-1y4kwyt:active { box-shadow: none; }
.css-1y4kwyt.Mui-disabled { box-shadow: none; }
.css-1y4kwyt:hover, .css-1y4kwyt.Mui-focusVisible { background: linear-gradient(248.86deg, rgb(182, 80, 158) 10.51%, rgb(46, 186, 198) 93.41%); opacity: 0.9; }
.css-18whhtg { margin: 0px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1.5rem; font-size: 1rem; opacity: 0.7; }
.css-i1lkld { min-width: 64px; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 500; line-height: 1.5rem; font-size: 0.875rem; padding: 6px 12px; color: rgb(255, 255, 255); border: 1px solid rgba(235, 235, 237, 0.12); background-color: rgb(56, 61, 81); }
.css-i1lkld:hover { text-decoration: none; background-color: rgba(241, 241, 243, 0.08); }
@media (hover: none) {
  .css-i1lkld:hover { background-color: transparent; }
}
.css-i1lkld.Mui-disabled { color: rgba(235, 235, 239, 0.3); }
.css-i1lkld:hover { box-shadow: none; }
.css-i1lkld.Mui-focusVisible { box-shadow: none; }
.css-i1lkld:active { box-shadow: none; }
.css-i1lkld.Mui-disabled { box-shadow: none; }
.css-i1lkld:hover, .css-i1lkld.Mui-focusVisible { background-color: rgb(27, 32, 48); }
.css-13ywbkq { display: inline-flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; position: relative; box-sizing: border-box; outline: 0px; margin: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; text-decoration: none; min-width: 64px; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 500; line-height: 1.5rem; font-size: 0.875rem; padding: 6px 12px; color: rgb(255, 255, 255); border: 1px solid rgba(235, 235, 237, 0.12); background-color: rgb(56, 61, 81); }
.css-13ywbkq::-moz-focus-inner { border-style: none; }
.css-13ywbkq.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-13ywbkq { print-color-adjust: exact; }
}
.css-13ywbkq:hover { text-decoration: none; background-color: rgba(241, 241, 243, 0.08); }
@media (hover: none) {
  .css-13ywbkq:hover { background-color: transparent; }
}
.css-13ywbkq.Mui-disabled { color: rgba(235, 235, 239, 0.3); }
.css-13ywbkq:hover { box-shadow: none; }
.css-13ywbkq.Mui-focusVisible { box-shadow: none; }
.css-13ywbkq:active { box-shadow: none; }
.css-13ywbkq.Mui-disabled { box-shadow: none; }
.css-13ywbkq:hover, .css-13ywbkq.Mui-focusVisible { background-color: rgb(27, 32, 48); }
.css-axw7ok { display: flex; -moz-box-align: center; align-items: center; gap: 8px; }
.css-1rzb3uu { position: relative; display: inline-flex; vertical-align: middle; flex-shrink: 0; }
.css-t6vrtd { position: relative; display: flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; flex-shrink: 0; font-family: Inter, Arial; font-size: 1.25rem; line-height: 1; border-radius: 50%; overflow: hidden; user-select: none; width: 22px; height: 22px; border: 1px solid rgba(250, 251, 252, 0.12); }
.css-1hy9t21 { width: 100%; height: 100%; text-align: center; object-fit: cover; color: transparent; text-indent: 10000px; }
.css-g2bxhl { display: flex; flex-flow: wrap; -moz-box-pack: center; place-content: center; -moz-box-align: center; align-items: center; position: absolute; box-sizing: border-box; font-family: Inter, Arial; font-weight: 500; font-size: 0.75rem; min-width: 20px; line-height: 1; padding: 0px 6px; height: 20px; border-radius: 10px; z-index: 1; bottom: 14%; right: 14%; transform: scale(1) translate(50%, 50%); transform-origin: 100% 100% 0px; transition: transform 195ms cubic-bezier(0.4, 0, 0.2, 1); }
.css-g2bxhl.MuiBadge-invisible { transform: scale(0) translate(50%, 50%); }
.css-1cwblkd { margin: 0px; font-family: Inter, Arial; font-weight: 500; line-height: 1.5rem; font-size: 0.875rem; }
@media (min-width: 0px) {
  .css-duo07e { display: flex; -moz-box-pack: center; justify-content: center; margin-bottom: 12px; }
}
@media (min-width: 640px) {
  .css-duo07e { display: none; -moz-box-pack: start; justify-content: flex-start; margin-bottom: 16px; }
}
@media (min-width: 1280px) {
  .css-duo07e { display: none; }
}
.css-epprj8 { background-color: rgb(56, 61, 81); border: 1px solid rgba(235, 235, 237, 0.12); padding: 4px; height: 44px; }
@media (min-width: 0px) {
  .css-epprj8 { width: 100%; }
}
@media (min-width: 640px) {
  .css-epprj8 { width: 359px; }
}
.css-mehr4l { display: inline-flex; border-radius: 4px; background-color: rgb(56, 61, 81); border: 1px solid rgba(235, 235, 237, 0.12); padding: 4px; height: 44px; }
.css-mehr4l .MuiToggleButtonGroup-grouped.Mui-selected + .MuiToggleButtonGroup-grouped.Mui-selected { border-left: 0px; margin-left: 0px; }
.css-mehr4l .MuiToggleButtonGroup-firstButton, .css-mehr4l .MuiToggleButtonGroup-middleButton { border-top-right-radius: 0px; border-bottom-right-radius: 0px; }
.css-mehr4l .MuiToggleButtonGroup-lastButton, .css-mehr4l .MuiToggleButtonGroup-middleButton { margin-left: -1px; border-left: 1px solid transparent; border-top-left-radius: 0px; border-bottom-left-radius: 0px; }
.css-mehr4l .MuiToggleButtonGroup-lastButton.Mui-disabled, .css-mehr4l .MuiToggleButtonGroup-middleButton.Mui-disabled { border-left: 1px solid transparent; }
@media (min-width: 0px) {
  .css-mehr4l { width: 100%; }
}
@media (min-width: 640px) {
  .css-mehr4l { width: 359px; }
}
.css-1my42hl { border: 0px; flex: 1 1 0%; background-color: rgb(56, 61, 81); border-radius: 4px; }
.css-1my42hl.Mui-selected, .css-1my42hl.Mui-selected:hover { background-color: rgb(255, 255, 255); border-radius: 4px !important; }
.css-1my42hl.Mui-selected, .css-1my42hl.Mui-disabled { z-index: 100; height: 100%; display: flex; -moz-box-pack: center; justify-content: center; }
.css-1my42hl.Mui-selected .MuiTypography-subheader1, .css-1my42hl.Mui-disabled .MuiTypography-subheader1 { background: linear-gradient(248.86deg, rgb(182, 80, 158) 10.51%, rgb(46, 186, 198) 93.41%) padding-box text; -webkit-text-fill-color: transparent; }
.css-1my42hl.Mui-selected .MuiTypography-secondary14, .css-1my42hl.Mui-disabled .MuiTypography-secondary14 { background: linear-gradient(248.86deg, rgb(182, 80, 158) 10.51%, rgb(46, 186, 198) 93.41%) padding-box text; -webkit-text-fill-color: transparent; }
.css-1h4fsi7 { padding: 11px; color: rgba(235, 235, 239, 0.56); border: 0px; flex: 1 1 0%; background-color: rgb(56, 61, 81); border-radius: 4px; }
.css-1h4fsi7.Mui-disabled { color: rgba(235, 235, 239, 0.3); border: 1px solid rgba(235, 235, 239, 0.12); }
.css-1h4fsi7:hover { text-decoration: none; background-color: rgba(241, 241, 243, 0.08); }
@media (hover: none) {
  .css-1h4fsi7:hover { background-color: transparent; }
}
.css-1h4fsi7.Mui-selected { color: rgb(234, 235, 239); background-color: rgba(234, 235, 239, 0.16); }
.css-1h4fsi7.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.24); }
@media (hover: none) {
  .css-1h4fsi7.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.16); }
}
.css-1h4fsi7.Mui-selected, .css-1h4fsi7.Mui-selected:hover { background-color: rgb(255, 255, 255); border-radius: 4px !important; }
.css-1h4fsi7.Mui-selected, .css-1h4fsi7.Mui-disabled { z-index: 100; height: 100%; display: flex; -moz-box-pack: center; justify-content: center; }
.css-1h4fsi7.Mui-selected .MuiTypography-subheader1, .css-1h4fsi7.Mui-disabled .MuiTypography-subheader1 { background: linear-gradient(248.86deg, rgb(182, 80, 158) 10.51%, rgb(46, 186, 198) 93.41%) padding-box text; -webkit-text-fill-color: transparent; }
.css-1h4fsi7.Mui-selected .MuiTypography-secondary14, .css-1h4fsi7.Mui-disabled .MuiTypography-secondary14 { background: linear-gradient(248.86deg, rgb(182, 80, 158) 10.51%, rgb(46, 186, 198) 93.41%) padding-box text; -webkit-text-fill-color: transparent; }
.css-la5cf0 { display: inline-flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; position: relative; box-sizing: border-box; outline: 0px; margin: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; text-decoration: none; padding: 11px; color: rgba(235, 235, 239, 0.56); border: 0px; flex: 1 1 0%; background-color: rgb(56, 61, 81); border-radius: 4px; }
.css-la5cf0::-moz-focus-inner { border-style: none; }
.css-la5cf0.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-la5cf0 { print-color-adjust: exact; }
}
.css-la5cf0.Mui-disabled { color: rgba(235, 235, 239, 0.3); border: 1px solid rgba(235, 235, 239, 0.12); }
.css-la5cf0:hover { text-decoration: none; background-color: rgba(241, 241, 243, 0.08); }
@media (hover: none) {
  .css-la5cf0:hover { background-color: transparent; }
}
.css-la5cf0.Mui-selected { color: rgb(234, 235, 239); background-color: rgba(234, 235, 239, 0.16); }
.css-la5cf0.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.24); }
@media (hover: none) {
  .css-la5cf0.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.16); }
}
.css-la5cf0.Mui-selected, .css-la5cf0.Mui-selected:hover { background-color: rgb(255, 255, 255); border-radius: 4px !important; }
.css-la5cf0.Mui-selected, .css-la5cf0.Mui-disabled { z-index: 100; height: 100%; display: flex; -moz-box-pack: center; justify-content: center; }
.css-la5cf0.Mui-selected .MuiTypography-subheader1, .css-la5cf0.Mui-disabled .MuiTypography-subheader1 { background: linear-gradient(248.86deg, rgb(182, 80, 158) 10.51%, rgb(46, 186, 198) 93.41%) padding-box text; -webkit-text-fill-color: transparent; }
.css-la5cf0.Mui-selected .MuiTypography-secondary14, .css-la5cf0.Mui-disabled .MuiTypography-secondary14 { background: linear-gradient(248.86deg, rgb(182, 80, 158) 10.51%, rgb(46, 186, 198) 93.41%) padding-box text; -webkit-text-fill-color: transparent; }
.css-e6xsne { display: block; -moz-box-pack: justify; justify-content: space-between; align-items: flex-start; }
.css-1jdos5u { position: relative; width: 100%; }
@media (min-width: 0px) {
  .css-1jdos5u { display: block; }
}
@media (min-width: 1280px) {
  .css-1jdos5u { display: block; }
}
.css-ppvx2n { min-width: 64px; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.02875rem; line-height: 1.25rem; text-transform: uppercase; font-size: 0.625rem; padding: 0px 6px; color: rgb(255, 255, 255); border: 1px solid rgba(235, 235, 237, 0.12); background-color: rgb(56, 61, 81); position: absolute; top: -130px; right: 0px; }
.css-ppvx2n:hover { text-decoration: none; background-color: rgba(241, 241, 243, 0.08); }
@media (hover: none) {
  .css-ppvx2n:hover { background-color: transparent; }
}
.css-ppvx2n.Mui-disabled { color: rgba(235, 235, 239, 0.3); }
.css-ppvx2n:hover { box-shadow: none; }
.css-ppvx2n.Mui-focusVisible { box-shadow: none; }
.css-ppvx2n:active { box-shadow: none; }
.css-ppvx2n.Mui-disabled { box-shadow: none; }
.css-ppvx2n:hover, .css-ppvx2n.Mui-focusVisible { background-color: rgb(27, 32, 48); }
.css-193hwnm { display: inline-flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; box-sizing: border-box; outline: 0px; margin: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; text-decoration: none; min-width: 64px; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.02875rem; line-height: 1.25rem; text-transform: uppercase; font-size: 0.625rem; padding: 0px 6px; color: rgb(255, 255, 255); border: 1px solid rgba(235, 235, 237, 0.12); background-color: rgb(56, 61, 81); position: absolute; top: -130px; right: 0px; }
.css-193hwnm::-moz-focus-inner { border-style: none; }
.css-193hwnm.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-193hwnm { print-color-adjust: exact; }
}
.css-193hwnm:hover { text-decoration: none; background-color: rgba(241, 241, 243, 0.08); }
@media (hover: none) {
  .css-193hwnm:hover { background-color: transparent; }
}
.css-193hwnm.Mui-disabled { color: rgba(235, 235, 239, 0.3); }
.css-193hwnm:hover { box-shadow: none; }
.css-193hwnm.Mui-focusVisible { box-shadow: none; }
.css-193hwnm:active { box-shadow: none; }
.css-193hwnm.Mui-disabled { box-shadow: none; }
.css-193hwnm:hover, .css-193hwnm.Mui-focusVisible { background-color: rgb(27, 32, 48); }
.css-133srx4 { background-color: rgb(41, 46, 65); color: rgb(241, 241, 243); transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1); border-radius: 4px; box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 1px, rgba(0, 0, 0, 0.25) 0px 0px 1px; background-image: none; margin-top: 0px; border: 1px solid rgba(235, 235, 239, 0.08); }
.css-19zr2gl { display: flex; -moz-box-align: center; align-items: center; -moz-box-pack: justify; justify-content: space-between; }
@media (min-width: 0px) {
  .css-19zr2gl { padding: 14px 16px; }
}
@media (min-width: 640px) {
  .css-19zr2gl { padding: 16px 24px; }
}
.css-iwds49 { width: 100%; display: flex; padding-top: 3.6px; padding-bottom: 3.6px; }
@media (min-width: 0px) {
  .css-iwds49 { align-items: flex-start; flex-direction: column; }
}
@media (min-width: 640px) {
  .css-iwds49 { -moz-box-align: center; align-items: center; flex-direction: row; }
}
.css-upncnh { margin: 0px 16px 0px 0px; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.009375rem; line-height: 160%; font-size: 1.125rem; }
.css-13o7eu2-2 { display: block; }
.css-1301pmg { margin: 0px; flex-shrink: 0; border-width: 0px 0px thin; border-style: solid; border-color: rgba(235, 235, 239, 0.08); }
.css-1qo1gdh { padding: 16px 16px 24px; }
.css-111boms { margin-bottom: 16px; display: flex; -moz-box-align: center; align-items: center; }
.css-1mu7wm0 { display: block; background-color: rgba(241, 241, 243, 0.13); height: 1.2em; border-radius: 50%; animation: 2s ease-in-out 0.5s infinite animation-c7515d; transform: unset; }
@keyframes animation-c7515d {
0% { opacity: 1; }
50% { opacity: 0.4; }
100% { opacity: 1; }
}
@keyframes animation-c7515d {
0% { opacity: 1; }
50% { opacity: 0.4; }
100% { opacity: 1; }
}
.css-1isemmb { margin-left: 8px; }
.css-1f9djdl { display: block; background-color: rgba(241, 241, 243, 0.13); height: auto; margin-top: 0px; margin-bottom: 0px; transform-origin: 0px 55% 0px; border-radius: 4px / 6.7px; animation: 2s ease-in-out 0.5s infinite animation-c7515d; transform: unset; }
.css-1f9djdl:empty::before { content: " "; }
@keyframes animation-c7515d {
0% { opacity: 1; }
50% { opacity: 0.4; }
100% { opacity: 1; }
}
@keyframes animation-c7515d {
0% { opacity: 1; }
50% { opacity: 0.4; }
100% { opacity: 1; }
}
.css-xrt28o { margin-bottom: 8px; display: flex; align-items: flex-start; -moz-box-pack: justify; justify-content: space-between; }
.css-181zdd { margin: 0px 8px 0px 0px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 143%; font-size: 0.875rem; }
.css-16rgc74 { display: flex; -moz-box-align: center; align-items: center; -moz-box-pack: justify; justify-content: space-between; margin-top: 20px; }
.css-1a7bw17 { display: block; background-color: rgba(241, 241, 243, 0.13); height: auto; margin-top: 0px; margin-bottom: 0px; transform-origin: 0px 55% 0px; border-radius: 4px / 6.7px; animation: 2s ease-in-out 0.5s infinite animation-c7515d; transform: unset; margin-right: 6px; }
.css-1a7bw17:empty::before { content: " "; }
@keyframes animation-c7515d {
0% { opacity: 1; }
50% { opacity: 0.4; }
100% { opacity: 1; }
}
@keyframes animation-c7515d {
0% { opacity: 1; }
50% { opacity: 0.4; }
100% { opacity: 1; }
}
.css-7l9tvd { background-color: rgb(41, 46, 65); color: rgb(241, 241, 243); transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1); border-radius: 4px; box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 1px, rgba(0, 0, 0, 0.25) 0px 0px 1px; background-image: none; margin-top: 16px; border: 1px solid rgba(235, 235, 239, 0.08); }
.css-1d7z5ue { position: relative; width: 100%; }
@media (min-width: 0px) {
  .css-1d7z5ue { display: none; }
}
@media (min-width: 1280px) {
  .css-1d7z5ue { display: block; }
}
.css-1h8jfb5 { position: absolute; top: -130px; right: 0px; }
.css-28bx7w { min-width: 64px; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.02875rem; line-height: 1.25rem; text-transform: uppercase; font-size: 0.625rem; padding: 0px 6px; color: rgb(255, 255, 255); border: 1px solid rgba(235, 235, 237, 0.12); background-color: rgb(56, 61, 81); }
.css-28bx7w:hover { text-decoration: none; background-color: rgba(241, 241, 243, 0.08); }
@media (hover: none) {
  .css-28bx7w:hover { background-color: transparent; }
}
.css-28bx7w.Mui-disabled { color: rgba(235, 235, 239, 0.3); }
.css-28bx7w:hover { box-shadow: none; }
.css-28bx7w.Mui-focusVisible { box-shadow: none; }
.css-28bx7w:active { box-shadow: none; }
.css-28bx7w.Mui-disabled { box-shadow: none; }
.css-28bx7w:hover, .css-28bx7w.Mui-focusVisible { background-color: rgb(27, 32, 48); }
.css-kw8qku { display: inline-flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; position: relative; box-sizing: border-box; outline: 0px; margin: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; text-decoration: none; min-width: 64px; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.02875rem; line-height: 1.25rem; text-transform: uppercase; font-size: 0.625rem; padding: 0px 6px; color: rgb(255, 255, 255); border: 1px solid rgba(235, 235, 237, 0.12); background-color: rgb(56, 61, 81); }
.css-kw8qku::-moz-focus-inner { border-style: none; }
.css-kw8qku.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-kw8qku { print-color-adjust: exact; }
}
.css-kw8qku:hover { text-decoration: none; background-color: rgba(241, 241, 243, 0.08); }
@media (hover: none) {
  .css-kw8qku:hover { background-color: transparent; }
}
.css-kw8qku.Mui-disabled { color: rgba(235, 235, 239, 0.3); }
.css-kw8qku:hover { box-shadow: none; }
.css-kw8qku.Mui-focusVisible { box-shadow: none; }
.css-kw8qku:active { box-shadow: none; }
.css-kw8qku.Mui-disabled { box-shadow: none; }
.css-kw8qku:hover, .css-kw8qku.Mui-focusVisible { background-color: rgb(27, 32, 48); }
.css-1ogi1pb { margin: 0px; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.009375rem; line-height: 1.5rem; font-size: 1rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; display: inline-flex; flex-direction: row; -moz-box-align: center; align-items: center; position: relative; }
.css-owk8ol { margin: 0px 2px 0px 0px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1.5rem; font-size: 1rem; color: rgb(165, 168, 182); }
.css-1dm56o2 { display: flex; -moz-box-align: center; align-items: center; overflow-x: auto; }
@media (min-width: 0px) {
  .css-1dm56o2 { padding-left: 16px; padding-right: 16px; padding-bottom: 8px; }
}
@media (min-width: 640px) {
  .css-1dm56o2 { padding-left: 24px; padding-right: 24px; padding-bottom: 0px; }
}
.css-1xifpgy { }
@media (min-width: 0px) {
  .css-1xifpgy { padding: 14px 16px 24px; }
}
@media (min-width: 640px) {
  .css-1xifpgy { padding-left: 24px; padding-right: 24px; padding-top: 22px; }
}
.css-1t8x1s2 { margin: 0px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 143%; font-size: 0.875rem; color: rgb(165, 168, 182); }
.css-l9ry6i { display: flex; -moz-box-align: center; align-items: center; cursor: pointer; min-height: 28px; padding-left: 12px; }
.css-l9ry6i span { width: 14px; height: 2px; background-color: rgb(165, 168, 182); position: relative; margin-left: 4px; }
.css-l9ry6i span::after { content: ""; position: absolute; width: 14px; height: 2px; background-color: rgb(165, 168, 182); transition: 0.2s; transform: rotate(0deg); opacity: 0; }
.css-1p541t6 { margin: 0px; font-family: Inter, Arial; font-weight: 500; line-height: 1.5rem; font-size: 0.875rem; color: rgb(165, 168, 182); }
@media (min-width: 0px) {
  .css-35dwn7 { margin-bottom: 8px; }
}
@media (min-width: 640px) {
  .css-35dwn7 { margin-bottom: 0px; }
}
.css-t0051x { padding-left: 24px; padding-right: 24px; }
.css-7rafce { display: flex; box-shadow: none; border-radius: 4px; padding: 8px 12px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; color: rgb(169, 226, 251); background: rgb(7, 31, 46); margin-bottom: 24px; -moz-box-align: center; align-items: center; width: 100%; }
.css-7rafce .MuiAlert-icon { color: rgb(41, 182, 246); }
.css-7rafce .MuiAlert-message { padding: 2px 0px; }
.css-7rafce .MuiAlert-icon { padding: 0px; opacity: 1; }
.css-7rafce .MuiAlert-icon .MuiSvgIcon-root { font-size: 1.25rem; }
.css-7rafce a { font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; text-decoration: underline; }
.css-7rafce a:hover { text-decoration: none; }
.css-7rafce .MuiButton-text { font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; text-decoration: underline; padding: 0px; margin: 0px; min-width: unset; }
.css-7rafce .MuiButton-text:hover { text-decoration: none; background: transparent; }
.css-7rafce a { color: rgb(169, 226, 251); }
.css-7rafce .MuiButton-text { color: rgb(169, 226, 251); }
.css-1lh2l3q { transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1); display: flex; box-shadow: none; border-radius: 4px; padding: 8px 12px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; color: rgb(169, 226, 251); background: rgb(7, 31, 46); margin-bottom: 24px; -moz-box-align: center; align-items: center; width: 100%; }
.css-1lh2l3q .MuiAlert-icon { color: rgb(41, 182, 246); }
.css-1lh2l3q .MuiAlert-message { padding: 2px 0px; }
.css-1lh2l3q .MuiAlert-icon { padding: 0px; opacity: 1; }
.css-1lh2l3q .MuiAlert-icon .MuiSvgIcon-root { font-size: 1.25rem; }
.css-1lh2l3q a { font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; text-decoration: underline; }
.css-1lh2l3q a:hover { text-decoration: none; }
.css-1lh2l3q .MuiButton-text { font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; text-decoration: underline; padding: 0px; margin: 0px; min-width: unset; }
.css-1lh2l3q .MuiButton-text:hover { text-decoration: none; background: transparent; }
.css-1lh2l3q a { color: rgb(169, 226, 251); }
.css-1lh2l3q .MuiButton-text { color: rgb(169, 226, 251); }
.css-1l54tgj { margin-right: 12px; padding: 7px 0px; display: flex; font-size: 22px; opacity: 0.9; }
.css-115dves { user-select: none; width: 1em; height: 1em; display: inline-block; fill: currentcolor; flex-shrink: 0; transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1); font-size: 1.5rem; color: rgb(41, 182, 246); }
.css-1xsto0d { padding: 8px 0px; min-width: 0px; overflow: auto; }
.css-mr86mw { text-decoration: none; }
.css-idkpuy { margin: 0px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 143%; font-size: 0.875rem; color: rgb(234, 235, 239); text-decoration: none; }
.css-100tx80 { text-decoration: none; display: inline-flex; -moz-box-align: center; align-items: center; }
.css-ffghlc { margin: 0px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 143%; font-size: 0.875rem; color: rgb(234, 235, 239); text-decoration: none; display: inline-flex; -moz-box-align: center; align-items: center; }
.css-ekhp5c { margin: 0px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 143%; font-size: 0.875rem; color: rgb(234, 235, 239); text-decoration: none; display: inline-flex; -moz-box-align: center; align-items: center; }
.css-188b5or { user-select: none; width: 1em; height: 1em; overflow: hidden; text-align: center; flex-shrink: 0; display: flex; position: relative; border-radius: 50%; font-size: 40px; }
.css-cg4wfg { margin: 0px; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.009375rem; line-height: 1.5rem; font-size: 1rem; }
.css-mtelhg { margin: 0px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.00625rem; line-height: 1rem; font-size: 0.75rem; color: rgb(142, 146, 163); }
.css-qfdd9t { display: flex; flex-direction: column; align-items: flex-end; }
.css-17m7cz6 { display: flex; -moz-box-align: center; align-items: center; margin-bottom: 2px; }
.css-dlrh6v { margin: 0px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1.25rem; font-size: 0.875rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: rgb(98, 103, 123); display: inline-flex; flex-direction: row; -moz-box-align: center; align-items: center; position: relative; }
.css-19el3v { display: flex; flex-direction: column; -moz-box-pack: center; justify-content: center; text-align: center; }
@media (min-width: 0px) {
  .css-19el3v { align-items: flex-end; }
}
@media (min-width: 640px) {
  .css-19el3v { -moz-box-align: center; align-items: center; }
}
.css-k008qs { display: flex; }
.css-uefm4v { margin: 0px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1.25rem; font-size: 0.875rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; display: inline-flex; flex-direction: row; -moz-box-align: center; align-items: center; position: relative; }
.css-d8aql2 { margin: 0px 0px 0px 2px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1.25rem; font-size: 0.875rem; color: rgb(165, 168, 182); }
.css-rnjm1y { display: flex; flex-direction: column; -moz-box-pack: center; justify-content: center; gap: 4px; }
.css-gmuwbf { display: flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; }
.css-1rzcn8q { display: flex; -moz-box-pack: center; justify-content: center; flex-direction: column; }
@media (min-width: 0px) {
  .css-1rzcn8q { align-items: flex-end; }
}
@media (min-width: 640px) {
  .css-1rzcn8q { -moz-box-align: center; align-items: center; }
}
.css-5wpzg3 { display: inline-flex; cursor: pointer; transition: 0.2s; }
.css-5wpzg3:hover { opacity: 1; }
.css-1do422x { border: 1px solid rgb(255, 167, 38); color: rgb(255, 167, 38); border-radius: 4px; display: inline-flex; -moz-box-align: center; align-items: center; padding: 2px; margin-top: 2px; cursor: pointer; }
.css-1do422x:hover { opacity: 0.6; }
.css-1yhzaxq { margin: 0px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.00625rem; font-size: 0.75rem; color: rgb(255, 167, 38); line-height: 0.75rem; }
.css-nqvctb { user-select: none; width: 1em; height: 1em; display: inline-block; fill: currentcolor; flex-shrink: 0; transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1); margin-left: 3px; color: rgb(255, 167, 38); font-size: 14px; }
.css-142npha { min-width: 64px; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); color: rgba(0, 0, 0, 0.87); background-color: rgb(234, 235, 239); width: 100%; box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 500; line-height: 1.5rem; font-size: 0.875rem; padding: 6px 12px; margin-right: 6px; }
.css-142npha:hover { text-decoration: none; background-color: rgb(210, 212, 220); box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px; }
@media (hover: none) {
  .css-142npha:hover { background-color: rgb(234, 235, 239); }
}
.css-142npha:active { box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px; }
.css-142npha.Mui-focusVisible { box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px; }
.css-142npha.Mui-disabled { color: rgba(235, 235, 239, 0.3); box-shadow: none; background-color: rgba(235, 235, 239, 0.12); }
.css-142npha:hover { box-shadow: none; }
.css-142npha.Mui-focusVisible { box-shadow: none; }
.css-142npha:active { box-shadow: none; }
.css-142npha.Mui-disabled { box-shadow: none; }
.css-23aapr { display: inline-flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; position: relative; box-sizing: border-box; outline: 0px; border: 0px; margin: 0px 6px 0px 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; text-decoration: none; min-width: 64px; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); color: rgba(0, 0, 0, 0.87); background-color: rgb(234, 235, 239); width: 100%; box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 500; line-height: 1.5rem; font-size: 0.875rem; padding: 6px 12px; }
.css-23aapr::-moz-focus-inner { border-style: none; }
.css-23aapr.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-23aapr { print-color-adjust: exact; }
}
.css-23aapr:hover { text-decoration: none; background-color: rgb(210, 212, 220); box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px; }
@media (hover: none) {
  .css-23aapr:hover { background-color: rgb(234, 235, 239); }
}
.css-23aapr:active { box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px; }
.css-23aapr.Mui-focusVisible { box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px; }
.css-23aapr.Mui-disabled { color: rgba(235, 235, 239, 0.3); box-shadow: none; background-color: rgba(235, 235, 239, 0.12); }
.css-23aapr:hover { box-shadow: none; }
.css-23aapr.Mui-focusVisible { box-shadow: none; }
.css-23aapr:active { box-shadow: none; }
.css-23aapr.Mui-disabled { box-shadow: none; }
.css-1bqudvo { min-width: 64px; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); border: 1px solid rgba(235, 235, 239, 0.08); color: rgb(234, 235, 239); width: 100%; box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 500; line-height: 1.5rem; font-size: 0.875rem; padding: 6px 12px; background: rgb(56, 61, 81); }
.css-1bqudvo:hover { text-decoration: none; background-color: rgba(234, 235, 239, 0.08); border: 1px solid rgb(234, 235, 239); }
@media (hover: none) {
  .css-1bqudvo:hover { background-color: transparent; }
}
.css-1bqudvo.Mui-disabled { color: rgba(235, 235, 239, 0.3); border: 1px solid rgba(235, 235, 239, 0.12); }
.css-1bqudvo:hover { box-shadow: none; }
.css-1bqudvo.Mui-focusVisible { box-shadow: none; }
.css-1bqudvo:active { box-shadow: none; }
.css-1bqudvo.Mui-disabled { box-shadow: none; }
.css-1tc0hv8 { display: inline-flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; position: relative; box-sizing: border-box; outline: 0px; margin: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; text-decoration: none; min-width: 64px; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); border: 1px solid rgba(235, 235, 239, 0.08); color: rgb(234, 235, 239); width: 100%; box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 500; line-height: 1.5rem; font-size: 0.875rem; padding: 6px 12px; background: rgb(56, 61, 81); }
.css-1tc0hv8::-moz-focus-inner { border-style: none; }
.css-1tc0hv8.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-1tc0hv8 { print-color-adjust: exact; }
}
.css-1tc0hv8:hover { text-decoration: none; background-color: rgba(234, 235, 239, 0.08); border: 1px solid rgb(234, 235, 239); }
@media (hover: none) {
  .css-1tc0hv8:hover { background-color: transparent; }
}
.css-1tc0hv8.Mui-disabled { color: rgba(235, 235, 239, 0.3); border: 1px solid rgba(235, 235, 239, 0.12); }
.css-1tc0hv8:hover { box-shadow: none; }
.css-1tc0hv8.Mui-focusVisible { box-shadow: none; }
.css-1tc0hv8:active { box-shadow: none; }
.css-1tc0hv8.Mui-disabled { box-shadow: none; }
.css-4zans3 { display: inline-flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; position: relative; box-sizing: border-box; outline: 0px; margin: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; text-decoration: none; min-width: 64px; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); border: 1px solid rgba(235, 235, 239, 0.08); color: rgb(234, 235, 239); width: 100%; box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 500; line-height: 1.5rem; font-size: 0.875rem; padding: 6px 12px; background: rgb(56, 61, 81); }
.css-4zans3::-moz-focus-inner { border-style: none; }
.css-4zans3.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-4zans3 { print-color-adjust: exact; }
}
.css-4zans3:hover { text-decoration: none; background-color: rgba(234, 235, 239, 0.08); border: 1px solid rgb(234, 235, 239); }
@media (hover: none) {
  .css-4zans3:hover { background-color: transparent; }
}
.css-4zans3.Mui-disabled { color: rgba(235, 235, 239, 0.3); border: 1px solid rgba(235, 235, 239, 0.12); }
.css-4zans3:hover { box-shadow: none; }
.css-4zans3.Mui-focusVisible { box-shadow: none; }
.css-4zans3:active { box-shadow: none; }
.css-4zans3.Mui-disabled { box-shadow: none; }
.css-10jibi3 { letter-spacing: 0.009375rem; display: inline-flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; position: relative; box-sizing: border-box; outline: 0px; margin: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; text-decoration: none; min-width: 64px; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); border: 1px solid rgba(235, 235, 239, 0.08); color: rgb(234, 235, 239); width: 100%; box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 500; line-height: 1.5rem; font-size: 0.875rem; padding: 6px 12px; background: rgb(56, 61, 81); }
.css-10jibi3::-moz-focus-inner { border-style: none; }
.css-10jibi3.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-10jibi3 { print-color-adjust: exact; }
}
.css-10jibi3:hover { text-decoration: none; background-color: rgba(234, 235, 239, 0.08); border: 1px solid rgb(234, 235, 239); }
@media (hover: none) {
  .css-10jibi3:hover { background-color: transparent; }
}
.css-10jibi3.Mui-disabled { color: rgba(235, 235, 239, 0.3); border: 1px solid rgba(235, 235, 239, 0.12); }
.css-10jibi3:hover { box-shadow: none; }
.css-10jibi3.Mui-focusVisible { box-shadow: none; }
.css-10jibi3:active { box-shadow: none; }
.css-10jibi3.Mui-disabled { box-shadow: none; }
.css-1haiorh { letter-spacing: 0.009375rem; display: inline-flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; position: relative; box-sizing: border-box; outline: 0px; margin: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; text-decoration: none; min-width: 64px; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); border: 1px solid rgba(235, 235, 239, 0.08); color: rgb(234, 235, 239); width: 100%; box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 500; line-height: 1.5rem; font-size: 0.875rem; padding: 6px 12px; background: rgb(56, 61, 81); }
.css-1haiorh::-moz-focus-inner { border-style: none; }
.css-1haiorh.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-1haiorh { print-color-adjust: exact; }
}
.css-1haiorh:hover { text-decoration: none; background-color: rgba(234, 235, 239, 0.08); border: 1px solid rgb(234, 235, 239); }
@media (hover: none) {
  .css-1haiorh:hover { background-color: transparent; }
}
.css-1haiorh.Mui-disabled { color: rgba(235, 235, 239, 0.3); border: 1px solid rgba(235, 235, 239, 0.12); }
.css-1haiorh:hover { box-shadow: none; }
.css-1haiorh.Mui-focusVisible { box-shadow: none; }
.css-1haiorh:active { box-shadow: none; }
.css-1haiorh.Mui-disabled { box-shadow: none; }
.css-hqkm93 { user-select: none; width: 1em; height: 1em; display: inline-block; fill: currentcolor; flex-shrink: 0; transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1); font-size: 1.5rem; color: rgb(102, 187, 106); }
@media (min-width: 0px) {
  .css-hqkm93 { font-size: 20px; }
}
@media (min-width: 640px) {
  .css-hqkm93 { font-size: 24px; }
}
.css-d4400k { display: flex; -moz-box-align: center; align-items: center; margin-left: 4px; }
.css-17zttyw { user-select: none; width: 1em; height: 1em; display: inline-block; fill: currentcolor; flex-shrink: 0; transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1); font-size: 14px; color: rgb(244, 67, 54); }
.css-1th707o { margin: 0px 2px 0px 0px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1.25rem; font-size: 0.875rem; color: rgb(165, 168, 182); }
.css-ykfiyn { margin: 0px 4px 0px 0px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 143%; font-size: 0.875rem; color: rgb(165, 168, 182); }
.css-d34u2u { min-width: 64px; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); border: 1px solid rgba(235, 235, 239, 0.08); color: rgb(234, 235, 239); box-shadow: none; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.02875rem; line-height: 1.25rem; text-transform: uppercase; font-size: 0.625rem; background: rgb(56, 61, 81); margin-left: 4px; border-radius: 4px; padding: 0px; }
.css-d34u2u:hover { text-decoration: none; background-color: rgba(234, 235, 239, 0.08); border: 1px solid rgb(234, 235, 239); }
@media (hover: none) {
  .css-d34u2u:hover { background-color: transparent; }
}
.css-d34u2u.Mui-disabled { color: rgba(235, 235, 239, 0.3); border: 1px solid rgba(235, 235, 239, 0.12); }
.css-d34u2u:hover { box-shadow: none; }
.css-d34u2u.Mui-focusVisible { box-shadow: none; }
.css-d34u2u:active { box-shadow: none; }
.css-d34u2u.Mui-disabled { box-shadow: none; }
.css-d34u2u::after { content: ""; position: absolute; inset: -1px; background: transparent; border-radius: 4px; }
.css-1tyyx5 { display: inline-flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; position: relative; box-sizing: border-box; outline: 0px; margin: 0px 0px 0px 4px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; text-decoration: none; min-width: 64px; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); border: 1px solid rgba(235, 235, 239, 0.08); color: rgb(234, 235, 239); box-shadow: none; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.02875rem; line-height: 1.25rem; text-transform: uppercase; font-size: 0.625rem; background: rgb(56, 61, 81); border-radius: 4px; padding: 0px; }
.css-1tyyx5::-moz-focus-inner { border-style: none; }
.css-1tyyx5.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-1tyyx5 { print-color-adjust: exact; }
}
.css-1tyyx5:hover { text-decoration: none; background-color: rgba(234, 235, 239, 0.08); border: 1px solid rgb(234, 235, 239); }
@media (hover: none) {
  .css-1tyyx5:hover { background-color: transparent; }
}
.css-1tyyx5.Mui-disabled { color: rgba(235, 235, 239, 0.3); border: 1px solid rgba(235, 235, 239, 0.12); }
.css-1tyyx5:hover { box-shadow: none; }
.css-1tyyx5.Mui-focusVisible { box-shadow: none; }
.css-1tyyx5:active { box-shadow: none; }
.css-1tyyx5.Mui-disabled { box-shadow: none; }
.css-1tyyx5::after { content: ""; position: absolute; inset: -1px; background: transparent; border-radius: 4px; }
.css-k6v5ma { display: inline-flex; -moz-box-align: center; align-items: center; position: relative; z-index: 1; background-color: rgb(56, 61, 81); padding-left: 4px; padding-right: 4px; border-radius: 4px; }
.css-1vxbxc4 { user-select: none; width: 1em; height: 1em; display: inline-block; fill: currentcolor; flex-shrink: 0; transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1); font-size: 12px; margin-right: 4px; color: rgb(142, 146, 163); }
.css-5bxqbt { margin: 0px; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.02875rem; line-height: 1.25rem; text-transform: uppercase; font-size: 0.625rem; color: rgb(165, 168, 182); }
.css-1mwg2jh { user-select: none; width: 1em; height: 1em; display: inline-block; fill: currentcolor; flex-shrink: 0; transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1); font-size: 12px; margin-left: 4px; color: rgb(241, 241, 243); }
.css-y9lleg .MuiMenu-paper { max-width: 280px; }
.css-eqbdgs .MuiMenu-paper { max-width: 280px; }
.css-186lrzm { padding-left: 24px; padding-right: 24px; margin-bottom: 16px; }
.css-1iry5ri { position: fixed; z-index: 1300; inset: 0px; visibility: hidden; }
.css-1iry5ri .MuiMenu-paper { max-width: 280px; }
.css-1q04zbd { padding: 8px 16px 12px; }
.css-kjpz4d { margin: 0px 0px 4px; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.009375rem; line-height: 1.25rem; font-size: 0.875rem; }
.css-1pxgetv { margin: 0px 0px 16px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; color: rgb(165, 168, 182); }
.css-1mvkkzi { color: rgb(165, 168, 182); text-decoration: underline; }
.css-3p3htd { margin: 0px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; color: rgb(165, 168, 182); text-decoration: underline; }
.css-giav4h { min-width: 64px; width: 100%; box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 500; line-height: 1.5rem; font-size: 0.875rem; padding: 6px 12px; color: rgb(255, 255, 255); background: linear-gradient(248.86deg, rgb(182, 80, 158) 10.51%, rgb(46, 186, 198) 93.41%); transition: 0.2s; }
.css-giav4h:hover { text-decoration: none; background-color: rgba(241, 241, 243, 0.08); }
@media (hover: none) {
  .css-giav4h:hover { background-color: transparent; }
}
.css-giav4h.Mui-disabled { color: rgba(235, 235, 239, 0.3); }
.css-giav4h:hover { box-shadow: none; }
.css-giav4h.Mui-focusVisible { box-shadow: none; }
.css-giav4h:active { box-shadow: none; }
.css-giav4h.Mui-disabled { box-shadow: none; }
.css-giav4h:hover, .css-giav4h.Mui-focusVisible { background: linear-gradient(248.86deg, rgb(182, 80, 158) 10.51%, rgb(46, 186, 198) 93.41%); opacity: 0.9; }
.css-1g4jcti { display: inline-flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; position: relative; box-sizing: border-box; outline: 0px; border: 0px; margin: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; text-decoration: none; min-width: 64px; width: 100%; box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 500; line-height: 1.5rem; font-size: 0.875rem; padding: 6px 12px; color: rgb(255, 255, 255); background: linear-gradient(248.86deg, rgb(182, 80, 158) 10.51%, rgb(46, 186, 198) 93.41%); transition: 0.2s; }
.css-1g4jcti::-moz-focus-inner { border-style: none; }
.css-1g4jcti.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-1g4jcti { print-color-adjust: exact; }
}
.css-1g4jcti:hover { text-decoration: none; background-color: rgba(241, 241, 243, 0.08); }
@media (hover: none) {
  .css-1g4jcti:hover { background-color: transparent; }
}
.css-1g4jcti.Mui-disabled { color: rgba(235, 235, 239, 0.3); }
.css-1g4jcti:hover { box-shadow: none; }
.css-1g4jcti.Mui-focusVisible { box-shadow: none; }
.css-1g4jcti:active { box-shadow: none; }
.css-1g4jcti.Mui-disabled { box-shadow: none; }
.css-1g4jcti:hover, .css-1g4jcti.Mui-focusVisible { background: linear-gradient(248.86deg, rgb(182, 80, 158) 10.51%, rgb(46, 186, 198) 93.41%); opacity: 0.9; }
.css-6zxo4b { user-select: none; display: inline-block; fill: currentcolor; flex-shrink: 0; transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1); font-size: 1.5rem; color: rgb(255, 167, 38); width: 15px; height: 15px; border-radius: 50%; background: rgb(56, 61, 81); }
body { --wcm-z-index: 1300; }

</style>

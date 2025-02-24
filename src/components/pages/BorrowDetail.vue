<script setup>
import {ref} from "vue";
import Navmenu from "./Navmenu.vue";
const isPopupOpen = ref(false);

const openPopup = () => {
  isPopupOpen.value = !isPopupOpen.value;
};

const tab = ref('overview');
const toggle = ref('first');

const toggleSwitch = (param) => {
  const element = document.querySelector(".first-toggle"); 
  const targetDiv = document.querySelector(".second-toggle"); 

  toggle.value = param;

  if (element && targetDiv) {
    if(param === 'first')
    {
      element.style.display = "block";
      targetDiv.style.display = "none";
    }
    else
    {
      element.style.display = "none";
      targetDiv.style.display = "block";
    }
  
  }
};

const toggleElement = (param) => {
  const element = document.querySelector(".css-14g9wgc"); 
  const targetDiv = document.querySelector(".css-1osbn5p"); 

  tab.value = param;

  if (element && targetDiv) {
    if(param === 'overview')
    {
      element.style.display = "block";
      targetDiv.style.display = "none";
    }
    else
    {
      element.style.display = "none";
      targetDiv.style.display = "block";
    }
  
  }
};

</script>
<template>
  <Navmenu/>
    <div class="MuiBox-root css-b95f0i">
   <div class="MuiBox-root css-1e6kcma">
      <div class="MuiContainer-root MuiContainer-maxWidthLg css-ycl373">
         <div class="MuiBox-root css-nkvznt">
            <div class="MuiBox-root css-0">
               <div class="MuiBox-root css-l9yetb">
                  <a href="#/dashboard" class="MuiButtonBase-root MuiButton-root MuiButton-surface MuiButton-surfacePrimary MuiButton-sizeMedium MuiButton-surfaceSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-root MuiButton-surface MuiButton-surfacePrimary MuiButton-sizeMedium MuiButton-surfaceSizeMedium MuiButton-colorPrimary MuiButton-disableElevation css-pvmlr" tabindex="0" type="button">
                     <span class="MuiButton-icon MuiButton-startIcon MuiButton-iconSizeMedium css-1l6c7y9">
                        <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1i92f6e" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                           <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-10dohqv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowBackOutlinedIcon">
                              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"></path>
                           </svg>
                        </svg>
                     </span>
                     Go Back<span class="MuiTouchRipple-root css-w0pj6f"></span>
                    </a>
                  <div class="MuiBox-root css-70qvj9">
                     <div class="MuiBox-root css-435pdq"><img src="https://app.aave.com/icons/networks/ethereum.svg" alt="" width="100%" height="100%"></div>
                     <p class="MuiTypography-root MuiTypography-subheader1 css-1ebotei">Core Market</p>
                     <div class="MuiBox-root css-wxyvle">
                        <p class="MuiTypography-root MuiTypography-subheader2 css-my2x37">Version 3</p>
                     </div>
                  </div>
               </div>
            </div>
            <div class="MuiBox-root css-k7vncv">
               <div class="MuiBox-root css-ltjh6b">
                  <div class="MuiBox-root css-90g7yj"><img src="https://app.aave.com/icons/tokens/weth.svg" width="40px" height="40px" alt=""></div>
                  <div class="MuiBox-root css-j7qwjs">
                     <div class="MuiBox-root css-18biwo">
                        <div class="MuiTypography-root MuiTypography-description css-1t8x1s2">WETH</div>
                     </div>
                     <div class="MuiBox-root css-18biwo">
                        <p class="MuiTypography-root MuiTypography-main21 css-fny9iu">Wrapped ETH</p>
                        <div class="MuiBox-root css-k008qs">
                           <div class="MuiBox-root css-0">
                              <div>
                                 <div class="MuiBox-root css-u6v8er">
                                    <div class="MuiBox-root css-x2v3lb">
                                       <div class="MuiBox-root css-1gfod4y">
                                          <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-o9s1zr" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                             </svg>
                                          </svg>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div style="visibility: hidden; height: 0px; width: 0px; overflow: hidden;"><object style="opacity: 1;" id="svg" data="/icons/tokens/gho.svg"></object></div>
                           <div class="MuiBox-root css-0">
                              <div>
                                 <div class="MuiBox-root css-u6v8er">
                                    <div class="MuiBox-root css-x2v3lb">
                                       <div class="MuiBox-root css-1ay71cc">
                                          <svg @click="openPopup" class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1oub2s6" focusable="false" aria-hidden="true" viewBox="0 0 21 19" xmlns="http://www.w3.org/2000/svg" aria-label="Wallet">
                                             <g clip-path="url(#clip0_3719_3323)" stroke-width="2">
                                                <path d="M17.3203 17.398H3.32031C2.78988 17.398 2.28117 17.1872 1.9061 16.8122C1.53103 16.4371 1.32031 15.9284 1.32031 15.3979V6.39795C1.32031 5.86752 1.53103 5.35881 1.9061 4.98374C2.28117 4.60866 2.78988 4.39795 3.32031 4.39795H17.3203C17.8507 4.39795 18.3595 4.60866 18.7345 4.98374C19.1096 5.35881 19.3203 5.86752 19.3203 6.39795V15.3979C19.3203 15.9284 19.1096 16.4371 18.7345 16.8122C18.3595 17.1872 17.8507 17.398 17.3203 17.398Z"></path>
                                                <path d="M14.8203 11.3979C14.6877 11.3979 14.5605 11.3453 14.4668 11.2515C14.373 11.1577 14.3203 11.0306 14.3203 10.8979C14.3203 10.7653 14.373 10.6382 14.4668 10.5444C14.5605 10.4506 14.6877 10.3979 14.8203 10.3979C14.9529 10.3979 15.0801 10.4506 15.1739 10.5444C15.2676 10.6382 15.3203 10.7653 15.3203 10.8979C15.3203 11.0306 15.2676 11.1577 15.1739 11.2515C15.0801 11.3453 14.9529 11.3979 14.8203 11.3979Z" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M16.3203 4.39793V2.99993C16.3202 2.69343 16.2497 2.39106 16.1142 2.11615C15.9787 1.84124 15.7818 1.60116 15.5387 1.41444C15.2956 1.22773 15.0129 1.09937 14.7124 1.03929C14.4118 0.979209 14.1015 0.989009 13.8053 1.06793L2.80531 4.00093C2.37937 4.11444 2.00285 4.36549 1.7343 4.71506C1.46575 5.06462 1.32021 5.49312 1.32031 5.93393V6.39793"></path>
                                             </g>
                                             <defs>
                                                <clipPath id="clip0_3719_3323">
                                                   <rect width="20" height="19" fill="white" transform="translate(0.320312)"></rect>
                                                </clipPath>
                                             </defs>
                                          </svg>

                                          <div v-if="isPopupOpen" @click="openPopup" class="MuiPaper-root MuiPaper-outlined MuiPaper-rounded MuiPopover-paper MuiMenu-paper MuiMenu-paper css-1tiw2lk popup" style="z-index:1;">
                                            <ul class="MuiList-root MuiList-padding MuiMenu-list css-rl9mto" role="menu" tabindex="-1" aria-labelledby="basic-button">
                                                <div class="MuiBox-root css-1jox83z" tabindex="0" autofocus="">
                                                    <p class="MuiTypography-root MuiTypography-secondary12 css-1ihr2wc">Underlying token</p>
                                                </div>
                                                <li class="MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters MuiMenuItem-divider MuiMenuItem-root MuiMenuItem-gutters MuiMenuItem-divider css-1gn43q6" tabindex="-1" role="menuitem" value="underlying">
                                                    <span class="material-icons notranslate MuiIcon-root MuiIcon-fontSizeMedium css-kna281" aria-hidden="true"><img src="https://app.aave.com/icons/tokens/gho.svg" width="100%" height="100%" alt="GHO icon"></span>
                                                    <p class="MuiTypography-root MuiTypography-subheader1 MuiTypography-noWrap css-mgqwsh" data-cy="assetName">GHO</p>
                                                    <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                                </li>
                                            </ul>
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
               <hr class="MuiDivider-root MuiDivider-fullWidth MuiDivider-vertical MuiDivider-flexItem css-x3zkb6">
               <div class="MuiBox-root css-ltjh6b">
                  <div class="MuiBox-root css-j7qwjs">
                     <div class="MuiBox-root css-18biwo">
                        <div class="MuiTypography-root MuiTypography-description css-1t8x1s2">Reserved Size</div>
                     </div>
                     <p class="MuiTypography-root MuiTypography-main21 MuiTypography-noWrap css-1x4zjhu"><span class="MuiTypography-root MuiTypography-secondary21 css-vj5di1">$</span>182.59M</p>
                  </div>
               </div>
               <div class="MuiBox-root css-ltjh6b">
                  <div class="MuiBox-root css-j7qwjs">
                     <div class="MuiBox-root css-18biwo">
                        <div class="MuiTypography-root MuiTypography-description css-1t8x1s2">Available liquidity</div>
                     </div>
                     <p class="MuiTypography-root MuiTypography-main21 MuiTypography-noWrap css-1x4zjhu"><span class="MuiTypography-root MuiTypography-secondary21 css-vj5di1">$</span>185.00M</p>
                  </div>
               </div>
               <div class="MuiBox-root css-ltjh6b">
                  <div class="MuiBox-root css-j7qwjs">
                     <div class="MuiBox-root css-18biwo">
                        <div class="MuiTypography-root MuiTypography-description css-1t8x1s2">Utilization Rate</div>
                     </div>
                     <p class="MuiTypography-root MuiTypography-main21 MuiTypography-noWrap css-1x4zjhu"><span class="MuiTypography-root MuiTypography-secondary21 css-vj5di1"></span>55.67%</p>
                  </div>
               </div>
               <div class="MuiBox-root css-ltjh6b">
              <div class="MuiBox-root css-j7qwjs">
                  <div class="MuiBox-root css-18biwo">
                    <div class="MuiTypography-root MuiTypography-description css-1t8x1s2">Oracle price</div>
                  </div>
                  <div class="MuiBox-root css-18biwo">
                    <p class="MuiTypography-root MuiTypography-main21 MuiTypography-noWrap css-1x4zjhu"><span class="MuiTypography-root MuiTypography-secondary21 css-vj5di1">$</span>2,787.83</p>
                    <div>
                        <div class="MuiBox-root css-u6v8er">
                          <div class="MuiBox-root css-x2v3lb">
                              <a class="MuiTypography-root MuiTypography-description MuiLink-root MuiLink-underlineNone css-jq9csv" href="https://etherscan.io/address/0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419" target="_blank" rel="noopener">
                                <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-o9s1zr" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                    </svg>
                                </svg>
                              </a>
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
   <div class="MuiBox-root css-159pi92" style="background:#1b2030;">
      <div class="MuiContainer-root MuiContainer-maxWidthLg css-1a8qn2o">
         <div class="MuiBox-root css-duo07e">
            <div role="group" class="MuiToggleButtonGroup-root css-mehr4l">
               <button @click="toggleElement('overview')" :class="{'Mui-selected': tab == 'overview'}" class="MuiButtonBase-root  MuiToggleButtonGroup-grouped MuiToggleButtonGroup-groupedHorizontal MuiToggleButton-root MuiToggleButton-sizeMedium MuiToggleButton-primary MuiToggleButtonGroup-firstButton css-la5cf0" tabindex="-1" type="button">
                  <p class="MuiTypography-root MuiTypography-subheader1 css-fu4g2f">Overview</p>
               </button>
               <button @click="toggleElement('info')" :class="{'Mui-selected': tab == 'info'}" class="MuiButtonBase-root MuiToggleButtonGroup-grouped MuiToggleButtonGroup-groupedHorizontal MuiToggleButton-root MuiToggleButton-sizeMedium MuiToggleButton-primary MuiToggleButtonGroup-lastButton css-la5cf0" tabindex="0" type="button">
                  <p class="MuiTypography-root MuiTypography-subheader1 css-fu4g2f">Your info</p>
                  <span class="MuiTouchRipple-root css-w0pj6f"></span>
               </button>
            </div>
         </div>
         <div class="MuiBox-root css-k008qs">
            <div class="MuiBox-root css-14g9wgc">
              <div class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 css-48h151">
                  <div class="MuiBox-root css-1xdb5ir">
                    <h3 class="MuiTypography-root MuiTypography-h3 css-2jc8ge">Reserve status &amp; configuration</h3>
                  </div>
                  <div class="MuiBox-root css-0"></div>
                  <div class="MuiBox-root css-oickpl">
                    <p class="MuiTypography-root MuiTypography-subheader1 css-ei9oq1">Supply Info</p>
                    <div class="MuiBox-root css-15z9wyn">
                        <div class="MuiBox-root css-1dtnjt5">
                          <div class="MuiBox-root css-ulme3a">
                              <div class="MuiBox-root css-dvot97">
                                <span class="MuiCircularProgress-root MuiCircularProgress-determinate MuiCircularProgress-colorPrimary css-yv5wnn" style="width: 77.5px; height: 77.5px; transform: rotate(-90deg);" role="progressbar" aria-valuenow="100">
                                    <svg class="MuiCircularProgress-svg css-13o7eu2" viewBox="22 22 44 44">
                                      <circle class="MuiCircularProgress-circle MuiCircularProgress-circleDeterminate css-nbfpn7" style="stroke-dasharray: 131.947px; stroke-dashoffset: 0px;" cx="44" cy="44" r="21" fill="none" stroke-width="2"></circle>
                                    </svg>
                                </span>
                                <span class="MuiCircularProgress-root MuiCircularProgress-determinate MuiCircularProgress-colorSuccess css-9cr6cz" style="width: 80px; height: 80px; transform: rotate(-90deg);" role="progressbar" aria-valuenow="3">
                                    <svg class="MuiCircularProgress-svg css-13o7eu2" viewBox="22 22 44 44">
                                      <circle class="MuiCircularProgress-circle MuiCircularProgress-circleDeterminate css-nbfpn7" style="stroke-dasharray: 128.805px; stroke-dashoffset: 124.769px;" cx="44" cy="44" r="20.5" fill="none" stroke-width="3"></circle>
                                    </svg>
                                </span>
                                <p class="MuiTypography-root MuiTypography-secondary14 css-r4spco">3.13%</p>
                              </div>
                          </div>
                          <div class="MuiBox-root css-ov2ylm">
                              <span class="MuiTypography-root MuiTypography-description css-1t8x1s2">
                                <div class="MuiBox-root css-70qvj9">
                                    Total supplied
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
                              </span>
                              <div class="MuiBox-root css-dtnerw">
                                <div class="MuiBox-root css-0">
                                    <p class="MuiTypography-root MuiTypography-main16 MuiTypography-noWrap css-1ogi1pb">470.04K</p>
                                    <span class="MuiTypography-root MuiTypography-secondary16 css-dyg06u">of</span>
                                    <p class="MuiTypography-root MuiTypography-main16 MuiTypography-noWrap css-1ogi1pb">15.00M</p>
                                </div>
                                <div class="MuiBox-root css-0">
                                    <div class="MuiBox-root css-1xwiwhj">
                                      <p class="MuiTypography-root MuiTypography-secondary12 MuiTypography-noWrap css-cyw6g5"><span class="MuiTypography-root MuiTypography-secondary12 css-1x1c6wp">$</span>468.59K</p>
                                    </div>
                                    <span class="MuiTypography-root MuiTypography-secondary12 css-g5g2u1">of</span>
                                    <div class="MuiBox-root css-1xwiwhj">
                                      <p class="MuiTypography-root MuiTypography-secondary12 MuiTypography-noWrap css-cyw6g5"><span class="MuiTypography-root MuiTypography-secondary12 css-1x1c6wp">$</span>14.95M</p>
                                    </div>
                                </div>
                              </div>
                          </div>
                          <div class="MuiBox-root css-ov2ylm">
                              <span class="MuiTypography-root MuiTypography-description css-1t8x1s2">APY</span>
                              <div class="MuiBox-root css-dtnerw">
                                <p class="MuiTypography-root MuiTypography-main16 MuiTypography-noWrap css-1ogi1pb">4.99<span class="MuiTypography-root MuiTypography-main16 css-2am8m">%</span></p>
                                <div class="MuiBox-root css-ro3mqx">
                                    <p class="MuiTypography-root MuiTypography-main12 css-1yw99wu">&nbsp;</p>
                                </div>
                              </div>
                          </div>
                        </div>
                        <div class="MuiBox-root css-15dm75o">
                          <div class="MuiBox-root css-mbx0dj">
                              <div class="MuiBox-root css-0">
                                <div class="MuiBox-root css-1ryj7lh">
                                    <div class="MuiBox-root css-rh5k9n"></div>
                                    <p class="MuiTypography-root MuiTypography-description css-1t8x1s2">Supply APR</p>
                                </div>
                              </div>
                              <div role="group" class="MuiToggleButtonGroup-root css-4a7r1a" aria-label="Date range">
                                <button class="MuiButtonBase-root MuiToggleButtonGroup-grouped MuiToggleButtonGroup-groupedHorizontal MuiToggleButton-root Mui-selected MuiToggleButton-sizeMedium MuiToggleButton-standard MuiToggleButtonGroup-grouped MuiToggleButtonGroup-groupedHorizontal MuiToggleButtonGroup-firstButton css-1d9xxsr" tabindex="0" type="button" value="1m" aria-pressed="true">
                                    <p class="MuiTypography-root MuiTypography-buttonM css-1cwblkd">1m</p>
                                    <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                </button>
                                <button class="MuiButtonBase-root MuiToggleButtonGroup-grouped MuiToggleButtonGroup-groupedHorizontal MuiToggleButton-root MuiToggleButton-sizeMedium MuiToggleButton-standard MuiToggleButtonGroup-grouped MuiToggleButtonGroup-groupedHorizontal MuiToggleButtonGroup-middleButton css-1d9xxsr" tabindex="0" type="button" value="6m" aria-pressed="false">
                                    <p class="MuiTypography-root MuiTypography-buttonM css-1cwblkd">6m</p>
                                    <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                </button>
                                <button class="MuiButtonBase-root MuiToggleButtonGroup-grouped MuiToggleButtonGroup-groupedHorizontal MuiToggleButton-root MuiToggleButton-sizeMedium MuiToggleButton-standard MuiToggleButtonGroup-grouped MuiToggleButtonGroup-groupedHorizontal MuiToggleButtonGroup-lastButton css-1d9xxsr" tabindex="0" type="button" value="1y" aria-pressed="false">
                                    <p class="MuiTypography-root MuiTypography-buttonM css-1cwblkd">1y</p>
                                    <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                </button>
                              </div>
                          </div>
                          <div style="width: 100%; height: 100%;">
                              <div style="position: relative; width: inherit; height: inherit;">
                                <svg width="574" height="155">
                                    <g class="visx-group" transform="translate(40, 20)">
                                      <g class="visx-group visx-rows" transform="translate(0, 0)">
                                          <line class="visx-line" x1="0" y1="115" x2="524" y2="115" fill="transparent" shape-rendering="crispEdges" stroke="#EBEBEF14" stroke-width="1" stroke-dasharray="3,3" pointer-events="none"></line>
                                          <line class="visx-line" x1="0" y1="69" x2="524" y2="69" fill="transparent" shape-rendering="crispEdges" stroke="#EBEBEF14" stroke-width="1" stroke-dasharray="3,3" pointer-events="none"></line>
                                          <line class="visx-line" x1="0" y1="22.999999999999996" x2="524" y2="22.999999999999996" fill="transparent" shape-rendering="crispEdges" stroke="#EBEBEF14" stroke-width="1" stroke-dasharray="3,3" pointer-events="none"></line>
                                      </g>
                                      <path class="visx-linepath" d="M0,82.99590043785528C1.4555555555555555,82.99590043785528,2.9111111111111105,82.99590043785528,4.366666666666666,82.99590043785528C5.822222222222222,82.99590043785528,7.277777777777777,82.99590043785528,8.733333333333333,82.99590043785528C10.188888888888888,82.99590043785528,11.644444444444446,82.99590043785528,13.100000000000001,82.99590043785528C14.555555555555555,82.99590043785528,16.01111111111111,41.274999181587596,17.466666666666665,39.082408233900395C18.92222222222222,36.889817286213194,20.377777777777776,35.79352181236959,21.833333333333332,35.79352181236959C23.288888888888888,35.79352181236959,24.744444444444447,97.9592257708545,26.200000000000003,97.9592257708545C27.65555555555556,97.9592257708545,29.11111111111111,97.9592257708545,30.566666666666666,97.9592257708545C32.02222222222222,97.9592257708545,33.477777777777774,97.9592257708545,34.93333333333333,97.9592257708545C36.388888888888886,97.9592257708545,37.84444444444444,97.9592257708545,39.3,97.9592257708545C40.75555555555555,97.9592257708545,42.21111111111111,97.99291684432112,43.666666666666664,98.06029899125434C45.12222222222222,98.12768113818757,46.577777777777776,112.63182595886934,48.03333333333333,113.5790955753216C49.48888888888889,114.52636519177386,50.94444444444445,115,52.400000000000006,115C53.85555555555556,115,55.31111111111111,115,56.766666666666666,115C58.22222222222222,115,59.67777777777778,115,61.13333333333333,115C62.58888888888889,115,64.04444444444445,115,65.5,115C66.95555555555555,115,68.41111111111111,115,69.86666666666666,115C71.32222222222222,115,72.77777777777777,23.92224718219306,74.23333333333333,23.92224718219306C75.68888888888888,23.92224718219306,77.14444444444445,115,78.6,115C80.05555555555556,115,81.5111111111111,115,82.96666666666667,115C84.42222222222222,115,85.87777777777778,115,87.33333333333333,115C88.78888888888888,115,90.24444444444444,114.16171334459263,91.69999999999999,112.4851400337779C93.15555555555555,110.80856672296316,94.6111111111111,104.94056013511161,96.06666666666666,104.94056013511161C97.52222222222223,104.94056013511161,98.97777777777777,104.94056013511161,100.43333333333334,104.94056013511161C101.8888888888889,104.94056013511161,103.34444444444445,104.94056013511161,104.80000000000001,104.94056013511161C106.25555555555556,104.94056013511161,107.71111111111112,104.94056013511161,109.16666666666667,104.94056013511161C110.62222222222222,104.94056013511161,112.07777777777778,104.94056013511161,113.53333333333333,104.94056013511161C114.9888888888889,104.94056013511161,116.44444444444444,24.83444373349518,117.9,24.83444373349518C119.35555555555555,24.83444373349518,120.81111111111112,115,122.26666666666667,115C123.72222222222223,115,125.17777777777778,115,126.63333333333334,115C128.0888888888889,115,129.54444444444445,115,131,115C132.45555555555555,115,133.91111111111113,115,135.36666666666667,115C136.82222222222222,115,138.27777777777777,115,139.73333333333332,115C141.1888888888889,115,142.64444444444445,110.76574996747519,144.10000000000002,108.73330995186325C145.55555555555557,106.70086993625134,147.01111111111112,102.80535990632846,148.46666666666667,102.80535990632846C149.92222222222222,102.80535990632846,151.3777777777778,102.80535990632846,152.83333333333334,102.80535990632846C154.2888888888889,102.80535990632846,155.74444444444444,102.80535990632846,157.2,102.80535990632846C158.65555555555554,102.80535990632846,160.11111111111111,102.80535990632846,161.56666666666666,102.80535990632846C163.0222222222222,102.80535990632846,164.4777777777778,102.80535990632846,165.93333333333334,102.80535990632846C167.38888888888889,102.80535990632846,168.84444444444446,102.80535990632846,170.3,102.80535990632846C171.75555555555556,102.80535990632846,173.2111111111111,102.80535990632846,174.66666666666666,102.80535990632846C176.1222222222222,102.80535990632846,177.57777777777778,102.80535990632846,179.03333333333333,102.80535990632846C180.48888888888888,102.80535990632846,181.94444444444443,102.80535990632846,183.39999999999998,102.80535990632846C184.85555555555555,102.80535990632846,186.3111111111111,102.80535990632846,187.76666666666668,102.80535990632846C189.22222222222223,102.80535990632846,190.67777777777778,102.80535990632846,192.13333333333333,102.80535990632846C193.58888888888887,102.80535990632846,195.04444444444445,110.76574996747516,196.5,110.76574996747516C197.95555555555555,110.76574996747516,199.41111111111113,107.51963453504922,200.86666666666667,101.02740367019736C202.32222222222222,94.53517280534554,203.77777777777777,37.613312634939234,205.23333333333332,37.613312634939234C206.6888888888889,37.613312634939234,208.14444444444445,59.44710171224891,209.60000000000002,72.06969674433984C211.05555555555557,84.69229177643061,212.51111111111112,113.07726876701332,213.96666666666667,113.34888282748422C215.42222222222222,113.62049688795511,216.8777777777778,113.75630391819057,218.33333333333334,113.75630391819057C219.7888888888889,113.75630391819057,221.24444444444444,113.75630391819057,222.7,113.75630391819057C224.15555555555554,113.75630391819057,225.61111111111111,113.75630391819057,227.06666666666666,113.75630391819057C228.5222222222222,113.75630391819057,229.9777777777778,113.75630391819057,231.43333333333334,113.75630391819057C232.88888888888889,113.75630391819057,234.34444444444446,113.75630391819057,235.8,113.75630391819057C237.25555555555556,113.75630391819057,238.7111111111111,113.75630391819057,240.16666666666666,113.75630391819057C241.6222222222222,113.75630391819057,243.07777777777778,111.93976099414554,244.53333333333333,108.3066751460555C245.98888888888888,104.67358929796548,247.44444444444443,90.67552323620673,248.89999999999998,90.67552323620673C250.35555555555555,90.67552323620673,251.8111111111111,90.67552323620673,253.26666666666668,90.67552323620673C254.72222222222223,90.67552323620673,256.1777777777778,90.67552323620673,257.6333333333333,90.67552323620673C259.0888888888889,90.67552323620673,260.5444444444444,90.67552323620673,262,90.67552323620673C263.4555555555556,90.67552323620673,264.9111111111111,99.12152211252383,266.3666666666667,103.17560157315604C267.82222222222225,107.22968103378825,269.27777777777777,115,270.73333333333335,115C272.1888888888889,115,273.64444444444445,115,275.1,115C276.55555555555554,115,278.0111111111111,115,279.46666666666664,115C280.9222222222222,115,282.37777777777774,115,283.8333333333333,115C285.2888888888889,115,286.74444444444447,115,288.20000000000005,115C289.65555555555557,115,291.11111111111114,98.65678336143367,292.56666666666666,82.31356672286768C294.02222222222224,65.97035008430147,295.47777777777776,16.940700168603016,296.93333333333334,16.940700168603016C298.38888888888886,16.940700168603016,299.84444444444443,43.893877599296914,301.29999999999995,56.21610198529916C302.75555555555553,68.53832637130174,304.2111111111111,85.27608515883949,305.6666666666667,90.87404648461734C307.12222222222226,96.47200781039511,308.5777777777778,98.83407148643079,310.03333333333336,99.270988473284C311.4888888888889,99.70790546013723,312.94444444444446,99.54207288541838,314.4,99.92636395356384C315.85555555555555,100.3106550217093,317.3111111111111,100.47648759642814,318.76666666666665,101.57673488215674C320.22222222222223,102.67698216788534,321.67777777777775,113.23705504512367,323.1333333333333,113.23705504512367C324.5888888888889,113.23705504512367,326.0444444444444,83.26699081222613,327.5,83.26699081222613C328.9555555555556,83.26699081222613,330.4111111111111,105.24113285826118,331.8666666666667,105.24113285826118C333.32222222222225,105.24113285826118,334.77777777777777,97.73944766526907,336.23333333333335,97.73944766526907C337.6888888888889,97.73944766526907,339.14444444444445,99.1502025459716,340.6,99.98716639670994C342.05555555555554,100.82413024744827,343.5111111111111,101.79930604712601,344.96666666666664,102.7612307696991C346.4222222222222,103.7231554922722,347.87777777777774,105.75871473214848,349.3333333333333,105.75871473214848C350.7888888888889,105.75871473214848,352.24444444444447,105.75871473214848,353.70000000000005,105.75871473214848C355.15555555555557,105.75871473214848,356.61111111111114,105.75871473214848,358.06666666666666,105.75871473214848C359.52222222222224,105.75871473214848,360.97777777777776,105.75871473214848,362.43333333333334,105.75871473214848C363.88888888888886,105.75871473214848,365.34444444444443,106.31327830161119,366.79999999999995,107.26395870640437C368.25555555555553,108.21463911119756,369.7111111111111,111.46279716090764,371.1666666666667,111.46279716090764C372.62222222222226,111.46279716090764,374.0777777777778,111.46279716090764,375.53333333333336,111.46279716090764C376.9888888888889,111.46279716090764,378.44444444444446,111.46279716090764,379.9,111.46279716090764C381.35555555555555,111.46279716090764,382.8111111111111,111.46279716090764,384.26666666666665,111.46279716090764C385.72222222222223,111.46279716090764,387.17777777777775,112.69099259114806,388.6333333333333,113.28052639766345C390.0888888888889,113.87006020417884,391.5444444444444,115,393,115C394.4555555555556,115,395.9111111111111,115,397.3666666666667,115C398.82222222222225,115,400.27777777777777,115,401.73333333333335,115C403.1888888888889,115,404.64444444444445,115,406.1,115C407.55555555555554,115,409.0111111111111,115,410.46666666666664,115C411.9222222222222,115,413.37777777777774,79.66563992395966,414.8333333333333,77.38600379002159C416.2888888888889,75.10636765608349,417.74444444444447,73.96654958911445,419.20000000000005,73.96654958911445C420.65555555555557,73.96654958911445,422.11111111111114,75.45697542228784,423.56666666666666,78.43782708863463C425.02222222222224,81.41867875498146,426.47777777777776,106.15974758565982,427.93333333333334,106.15974758565982C429.38888888888886,106.15974758565982,430.84444444444443,106.15974758565982,432.29999999999995,106.15974758565982C433.75555555555553,106.15974758565982,435.2111111111111,106.15974758565982,436.6666666666667,106.15974758565982C438.12222222222226,106.15974758565982,439.5777777777778,110.4570925092974,441.03333333333336,111.93046791168743C442.4888888888889,113.40384331407745,443.94444444444446,115,445.4,115C446.85555555555555,115,448.3111111111111,115,449.76666666666665,115C451.22222222222223,115,452.67777777777775,115,454.1333333333333,115C455.5888888888889,115,457.0444444444444,115,458.5,115C459.9555555555556,115,461.4111111111111,100.97744083342577,462.8666666666667,96.3032544445677C464.32222222222225,91.62906805570962,465.77777777777777,86.95488166685155,467.23333333333335,86.95488166685155C468.6888888888889,86.95488166685155,470.14444444444445,86.95488166685155,471.6,86.95488166685155C473.05555555555554,86.95488166685155,474.5111111111111,86.95488166685155,475.96666666666664,86.95488166685155C477.4222222222222,86.95488166685155,478.87777777777774,86.95488166685155,480.3333333333333,86.95488166685155C481.7888888888889,86.95488166685155,483.24444444444447,87.474235710058,484.70000000000005,88.5129437964709C486.15555555555557,89.55165188288379,487.61111111111114,114.71793412370958,489.06666666666666,114.71793412370958C490.52222222222224,114.71793412370958,491.97777777777776,114.70567038995782,493.43333333333334,114.70567038995782C494.88888888888886,114.70567038995782,496.34444444444443,114.70567038995782,497.79999999999995,114.70567038995782C499.25555555555553,114.70567038995782,500.7111111111111,114.70567038995782,502.1666666666667,114.70567038995782C503.62222222222226,114.70567038995782,505.0777777777778,91.52189045831223,506.53333333333336,90.65081213775798C507.9888888888889,89.77973381720375,509.44444444444446,89.34419465692663,510.9,89.34419465692663C512.3555555555555,89.34419465692663,513.8111111111111,107.49471228740671,515.2666666666667,107.49471228740671C516.7222222222222,107.49471228740671,518.1777777777778,86.55890972069912,519.6333333333333,86.55890972069912C521.0888888888888,86.55890972069912,522.5444444444445,86.55890972069912,524,86.55890972069912" fill="transparent" stroke-linecap="round" stroke="#2EBAC6" stroke-width="2"></path>
                                      <path class="visx-linepath" d="M0,99.8634737832044L4.366666666666666,99.8634737832044L8.733333333333333,99.8634737832044L13.100000000000001,99.8634737832044L17.466666666666665,99.8634737832044L21.833333333333332,99.8634737832044L26.200000000000003,99.8634737832044L30.566666666666666,99.8634737832044L34.93333333333333,99.8634737832044L39.3,99.8634737832044L43.666666666666664,99.8634737832044L48.03333333333333,99.8634737832044L52.400000000000006,99.8634737832044L56.766666666666666,99.8634737832044L61.13333333333333,99.8634737832044L65.5,99.8634737832044L69.86666666666666,99.8634737832044L74.23333333333333,99.8634737832044L78.6,99.8634737832044L82.96666666666667,99.8634737832044L87.33333333333333,99.8634737832044L91.69999999999999,99.8634737832044L96.06666666666666,99.8634737832044L100.43333333333334,99.8634737832044L104.80000000000001,99.8634737832044L109.16666666666667,99.8634737832044L113.53333333333333,99.8634737832044L117.9,99.8634737832044L122.26666666666667,99.8634737832044L126.63333333333334,99.8634737832044L131,99.8634737832044L135.36666666666667,99.8634737832044L139.73333333333332,99.8634737832044L144.10000000000002,99.8634737832044L148.46666666666667,99.8634737832044L152.83333333333334,99.8634737832044L157.2,99.8634737832044L161.56666666666666,99.8634737832044L165.93333333333334,99.8634737832044L170.3,99.8634737832044L174.66666666666666,99.8634737832044L179.03333333333333,99.8634737832044L183.39999999999998,99.8634737832044L187.76666666666668,99.8634737832044L192.13333333333333,99.8634737832044L196.5,99.8634737832044L200.86666666666667,99.8634737832044L205.23333333333332,99.8634737832044L209.60000000000002,99.8634737832044L213.96666666666667,99.8634737832044L218.33333333333334,99.8634737832044L222.7,99.8634737832044L227.06666666666666,99.8634737832044L231.43333333333334,99.8634737832044L235.8,99.8634737832044L240.16666666666666,99.8634737832044L244.53333333333333,99.8634737832044L248.89999999999998,99.8634737832044L253.26666666666668,99.8634737832044L257.6333333333333,99.8634737832044L262,99.8634737832044L266.3666666666667,99.8634737832044L270.73333333333335,99.8634737832044L275.1,99.8634737832044L279.46666666666664,99.8634737832044L283.8333333333333,99.8634737832044L288.20000000000005,99.8634737832044L292.56666666666666,99.8634737832044L296.93333333333334,99.8634737832044L301.29999999999995,99.8634737832044L305.6666666666667,99.8634737832044L310.03333333333336,99.8634737832044L314.4,99.8634737832044L318.76666666666665,99.8634737832044L323.1333333333333,99.8634737832044L327.5,99.8634737832044L331.8666666666667,99.8634737832044L336.23333333333335,99.8634737832044L340.6,99.8634737832044L344.96666666666664,99.8634737832044L349.3333333333333,99.8634737832044L353.70000000000005,99.8634737832044L358.06666666666666,99.8634737832044L362.43333333333334,99.8634737832044L366.79999999999995,99.8634737832044L371.1666666666667,99.8634737832044L375.53333333333336,99.8634737832044L379.9,99.8634737832044L384.26666666666665,99.8634737832044L388.6333333333333,99.8634737832044L393,99.8634737832044L397.3666666666667,99.8634737832044L401.73333333333335,99.8634737832044L406.1,99.8634737832044L410.46666666666664,99.8634737832044L414.8333333333333,99.8634737832044L419.20000000000005,99.8634737832044L423.56666666666666,99.8634737832044L427.93333333333334,99.8634737832044L432.29999999999995,99.8634737832044L436.6666666666667,99.8634737832044L441.03333333333336,99.8634737832044L445.4,99.8634737832044L449.76666666666665,99.8634737832044L454.1333333333333,99.8634737832044L458.5,99.8634737832044L462.8666666666667,99.8634737832044L467.23333333333335,99.8634737832044L471.6,99.8634737832044L475.96666666666664,99.8634737832044L480.3333333333333,99.8634737832044L484.70000000000005,99.8634737832044L489.06666666666666,99.8634737832044L493.43333333333334,99.8634737832044L497.79999999999995,99.8634737832044L502.1666666666667,99.8634737832044L506.53333333333336,99.8634737832044L510.9,99.8634737832044L515.2666666666667,99.8634737832044L519.6333333333333,99.8634737832044L524,99.8634737832044" fill="transparent" stroke-linecap="round" stroke-dasharray="3,5" stroke="#D2D4DC" stroke-width="2"></path>
                                      <g class="visx-group visx-annotationlabel" transform="translate(-15.083343505859375, 63.8634737832044)" pointer-events="none">
                                          <foreignObject width="85.08334350585938" height="28" overflow="visible">
                                            <div style="display: inline-block;">
                                                <div class="MuiStack-root css-1w9bubx">
                                                  <p class="MuiTypography-root MuiTypography-secondary12 MuiTypography-noWrap css-228kdt">Avg 6.58%</p>
                                                </div>
                                            </div>
                                          </foreignObject>
                                      </g>
                                      <g class="visx-group visx-axis visx-axis-bottom" transform="translate(0, 110)">
                                          <g class="visx-group visx-axis-tick" transform="translate(0, 0)">
                                            <line class="visx-line" x1="69.86666666666666" y1="0" x2="69.86666666666666" y2="8" fill="transparent" shape-rendering="crispEdges" stroke="#A5A8B6" stroke-width="0" stroke-linecap="square"></line>
                                            <svg x="0" y="4" font-size="10" style="overflow: visible;">
                                                <text transform="" x="69.86666666666666" y="18" fill="#8E92A3" font-size="10" text-anchor="middle">
                                                  <tspan x="69.86666666666666" dy="0em">Jan 26</tspan>
                                                </text>
                                            </svg>
                                          </g>
                                          <g class="visx-group visx-axis-tick" transform="translate(0, 0)">
                                            <line class="visx-line" x1="192.13333333333333" y1="0" x2="192.13333333333333" y2="8" fill="transparent" shape-rendering="crispEdges" stroke="#A5A8B6" stroke-width="0" stroke-linecap="square"></line>
                                            <svg x="0" y="4" font-size="10" style="overflow: visible;">
                                                <text transform="" x="192.13333333333333" y="18" fill="#8E92A3" font-size="10" text-anchor="middle">
                                                  <tspan x="192.13333333333333" dy="0em">Feb 02</tspan>
                                                </text>
                                            </svg>
                                          </g>
                                          <g class="visx-group visx-axis-tick" transform="translate(0, 0)">
                                            <line class="visx-line" x1="314.4" y1="0" x2="314.4" y2="8" fill="transparent" shape-rendering="crispEdges" stroke="#A5A8B6" stroke-width="0" stroke-linecap="square"></line>
                                            <svg x="0" y="4" font-size="10" style="overflow: visible;">
                                                <text transform="" x="314.4" y="18" fill="#8E92A3" font-size="10" text-anchor="middle">
                                                  <tspan x="314.4" dy="0em">Feb 09</tspan>
                                                </text>
                                            </svg>
                                          </g>
                                          <g class="visx-group visx-axis-tick" transform="translate(0, 0)">
                                            <line class="visx-line" x1="436.6666666666667" y1="0" x2="436.6666666666667" y2="8" fill="transparent" shape-rendering="crispEdges" stroke="#A5A8B6" stroke-width="0" stroke-linecap="square"></line>
                                            <svg x="0" y="4" font-size="10" style="overflow: visible;">
                                                <text transform="" x="436.6666666666667" y="18" fill="#8E92A3" font-size="10" text-anchor="middle">
                                                  <tspan x="436.6666666666667" dy="0em">Feb 16</tspan>
                                                </text>
                                            </svg>
                                          </g>
                                          <line class="visx-line visx-axis-line" x1="0.5" y1="0" x2="524.5" y2="0" fill="transparent" shape-rendering="crispEdges" stroke="#222" stroke-width="0"></line>
                                      </g>
                                      <g class="visx-group visx-axis visx-axis-left" transform="translate(0, 0)">
                                          <g class="visx-group visx-axis-tick" transform="translate(0, 0)">
                                            <line class="visx-line" x1="0" y1="115" x2="-8" y2="115" fill="transparent" shape-rendering="crispEdges" stroke="#222" stroke-width="0" stroke-linecap="square"></line>
                                            <svg x="-30" y="0" font-size="10" style="overflow: visible;">
                                                <text transform="" x="-8" y="115" fill="#8E92A3" font-size="10" text-anchor="start">
                                                  <tspan x="-8" dy="0em">0%</tspan>
                                                </text>
                                            </svg>
                                          </g>
                                          <g class="visx-group visx-axis-tick" transform="translate(0, 0)">
                                            <line class="visx-line" x1="0" y1="69" x2="-8" y2="69" fill="transparent" shape-rendering="crispEdges" stroke="#222" stroke-width="0" stroke-linecap="square"></line>
                                            <svg x="-30" y="0" font-size="10" style="overflow: visible;">
                                                <text transform="" x="-8" y="69" fill="#8E92A3" font-size="10" text-anchor="start">
                                                  <tspan x="-8" dy="0em">20%</tspan>
                                                </text>
                                            </svg>
                                          </g>
                                          <g class="visx-group visx-axis-tick" transform="translate(0, 0)">
                                            <line class="visx-line" x1="0" y1="22.999999999999996" x2="-8" y2="22.999999999999996" fill="transparent" shape-rendering="crispEdges" stroke="#222" stroke-width="0" stroke-linecap="square"></line>
                                            <svg x="-30" y="0" font-size="10" style="overflow: visible;">
                                                <text transform="" x="-8" y="22.999999999999996" fill="#8E92A3" font-size="10" text-anchor="start">
                                                  <tspan x="-8" dy="0em">40%</tspan>
                                                </text>
                                            </svg>
                                          </g>
                                          <line class="visx-line visx-axis-line" x1="0" y1="115.5" x2="0" y2="0.5" fill="transparent" shape-rendering="crispEdges" stroke="#222" stroke-width="0"></line>
                                      </g>
                                      <rect class="visx-bar" width="524" height="115" fill="transparent"></rect>
                                    </g>
                                </svg>
                              </div>
                          </div>
                        </div>
                        <div>
                          <div class="MuiBox-root css-y6nr1q">
                              <p class="MuiTypography-root MuiTypography-subheader1 css-11bi6rn">Collateral usage</p>
                              <svg class="MuiSvgIcon-root MuiSvgIcon-colorSuccess MuiSvgIcon-fontSizeSmall css-1sx4fe8" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckRoundedIcon">
                                <path d="M9 16.17 5.53 12.7a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71c.39-.39.39-1.02 0-1.41a.9959.9959 0 0 0-1.41 0z"></path>
                              </svg>
                              <p class="MuiTypography-root MuiTypography-subheader1 css-1hn2o0p">Can be collateral</p>
                          </div>
                        </div>
                        <div class="MuiBox-root css-1b1zfbw">
                          <div class="MuiBox-root css-1o42vu5">
                              <div class="MuiBox-root css-1ucx9m3">
                                <span class="MuiTypography-root MuiTypography-secondary14 css-1ma60wi">
                                    <div class="MuiBox-root css-70qvj9">
                                      <p class="MuiTypography-root MuiTypography-description css-1nkijli">Max LTV</p>
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
                                </span>
                                <p class="MuiTypography-root MuiTypography-secondary14 MuiTypography-noWrap css-uefm4v">0<span class="MuiTypography-root MuiTypography-secondary14 css-d8aql2">%</span></p>
                              </div>
                          </div>
                          <div class="MuiBox-root css-1o42vu5">
                              <div class="MuiBox-root css-1ucx9m3">
                                <span class="MuiTypography-root MuiTypography-secondary14 css-1ma60wi">
                                    <div class="MuiBox-root css-70qvj9">
                                      <p class="MuiTypography-root MuiTypography-description css-1nkijli">Liquidation threshold</p>
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
                                </span>
                                <p class="MuiTypography-root MuiTypography-secondary14 MuiTypography-noWrap css-uefm4v">72.00<span class="MuiTypography-root MuiTypography-secondary14 css-d8aql2">%</span></p>
                              </div>
                          </div>
                          <div class="MuiBox-root css-1o42vu5">
                              <div class="MuiBox-root css-1ucx9m3">
                                <span class="MuiTypography-root MuiTypography-secondary14 css-1ma60wi">
                                    <div class="MuiBox-root css-70qvj9">
                                      <p class="MuiTypography-root MuiTypography-description css-1nkijli">Liquidation penalty</p>
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
                                </span>
                                <p class="MuiTypography-root MuiTypography-secondary14 MuiTypography-noWrap css-uefm4v">6.00<span class="MuiTypography-root MuiTypography-secondary14 css-d8aql2">%</span></p>
                              </div>
                          </div>
                        </div>
                    </div>
                  </div>
                  <hr class="MuiDivider-root MuiDivider-fullWidth css-1r56f2y">
                  <div class="MuiBox-root css-oickpl">
                    <p class="MuiTypography-root MuiTypography-subheader1 css-ei9oq1">Borrow info</p>
                    <div class="MuiBox-root css-15z9wyn">
                        <div class="MuiBox-root css-15z9wyn">
                          <div class="MuiBox-root css-1dtnjt5">
                              <div class="MuiBox-root css-ulme3a">
                                <div class="MuiBox-root css-dvot97">
                                    <span class="MuiCircularProgress-root MuiCircularProgress-determinate MuiCircularProgress-colorPrimary css-yv5wnn" style="width: 77.5px; height: 77.5px; transform: rotate(-90deg);" role="progressbar" aria-valuenow="100">
                                      <svg class="MuiCircularProgress-svg css-13o7eu2" viewBox="22 22 44 44">
                                          <circle class="MuiCircularProgress-circle MuiCircularProgress-circleDeterminate css-nbfpn7" style="stroke-dasharray: 131.947px; stroke-dashoffset: 0px;" cx="44" cy="44" r="21" fill="none" stroke-width="2"></circle>
                                      </svg>
                                    </span>
                                    <span class="MuiCircularProgress-root MuiCircularProgress-determinate MuiCircularProgress-colorSuccess css-9cr6cz" style="width: 80px; height: 80px; transform: rotate(-90deg);" role="progressbar" aria-valuenow="3">
                                      <svg class="MuiCircularProgress-svg css-13o7eu2" viewBox="22 22 44 44">
                                          <circle class="MuiCircularProgress-circle MuiCircularProgress-circleDeterminate css-nbfpn7" style="stroke-dasharray: 128.805px; stroke-dashoffset: 124.975px;" cx="44" cy="44" r="20.5" fill="none" stroke-width="3"></circle>
                                      </svg>
                                    </span>
                                    <p class="MuiTypography-root MuiTypography-secondary14 css-r4spco">2.97%</p>
                                </div>
                              </div>
                              <div class="MuiBox-root css-ov2ylm">
                                <span class="MuiTypography-root MuiTypography-description css-1t8x1s2">
                                    <div class="MuiBox-root css-70qvj9">
                                      Reserved Size
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
                                </span>
                                <div class="MuiBox-root css-dtnerw">
                                    <div class="MuiBox-root css-0">
                                      <p class="MuiTypography-root MuiTypography-main16 MuiTypography-noWrap css-1ogi1pb">356.86K</p>
                                      <span class="MuiTypography-root MuiTypography-secondary16 css-dyg06u">of</span>
                                      <p class="MuiTypography-root MuiTypography-main16 MuiTypography-noWrap css-1ogi1pb">12.00M</p>
                                    </div>
                                    <div class="MuiBox-root css-0">
                                      <div class="MuiBox-root css-1xwiwhj">
                                          <p class="MuiTypography-root MuiTypography-secondary12 MuiTypography-noWrap css-cyw6g5"><span class="MuiTypography-root MuiTypography-secondary12 css-1x1c6wp">$</span>355.75K</p>
                                      </div>
                                      <span class="MuiTypography-root MuiTypography-secondary16 css-dyg06u">of</span>
                                      <div class="MuiBox-root css-1xwiwhj">
                                          <p class="MuiTypography-root MuiTypography-secondary12 MuiTypography-noWrap css-cyw6g5"><span class="MuiTypography-root MuiTypography-secondary12 css-1x1c6wp">$</span>11.96M</p>
                                      </div>
                                    </div>
                                </div>
                              </div>
                              <div class="MuiBox-root css-ov2ylm">
                                <span class="MuiTypography-root MuiTypography-description css-1t8x1s2">
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
                                </span>
                                <div class="MuiBox-root css-dtnerw">
                                    <p class="MuiTypography-root MuiTypography-main16 MuiTypography-noWrap css-1ogi1pb">8.34<span class="MuiTypography-root MuiTypography-main16 css-2am8m">%</span></p>
                                    <div class="MuiBox-root css-ro3mqx">
                                      <p class="MuiTypography-root MuiTypography-main12 css-1yw99wu">&nbsp;</p>
                                    </div>
                                </div>
                              </div>
                              <div class="MuiBox-root css-ov2ylm">
                                <span class="MuiTypography-root MuiTypography-description css-1t8x1s2">Borrow cap</span>
                                <div class="MuiBox-root css-dtnerw">
                                    <p class="MuiTypography-root MuiTypography-main16 MuiTypography-noWrap css-1ogi1pb">12.00M</p>
                                    <div class="MuiBox-root css-1xwiwhj">
                                      <p class="MuiTypography-root MuiTypography-secondary12 MuiTypography-noWrap css-cyw6g5"><span class="MuiTypography-root MuiTypography-secondary12 css-1x1c6wp">$</span>11.96M</p>
                                    </div>
                                </div>
                              </div>
                          </div>
                          <div class="MuiBox-root css-15dm75o">
                              <div class="MuiBox-root css-mbx0dj">
                                <div class="MuiBox-root css-0">
                                    <div class="MuiBox-root css-1ryj7lh">
                                      <div class="MuiBox-root css-1ddunyq"></div>
                                      <p class="MuiTypography-root MuiTypography-description css-1t8x1s2">Borrow APR, variable</p>
                                    </div>
                                </div>
                                <div role="group" class="MuiToggleButtonGroup-root css-4a7r1a" aria-label="Date range">
                                    <button class="MuiButtonBase-root MuiToggleButtonGroup-grouped MuiToggleButtonGroup-groupedHorizontal MuiToggleButton-root Mui-selected MuiToggleButton-sizeMedium MuiToggleButton-standard MuiToggleButtonGroup-grouped MuiToggleButtonGroup-groupedHorizontal MuiToggleButtonGroup-firstButton css-1d9xxsr" tabindex="0" type="button" value="1m" aria-pressed="true">
                                      <p class="MuiTypography-root MuiTypography-buttonM css-1cwblkd">1m</p>
                                      <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                    </button>
                                    <button class="MuiButtonBase-root MuiToggleButtonGroup-grouped MuiToggleButtonGroup-groupedHorizontal MuiToggleButton-root MuiToggleButton-sizeMedium MuiToggleButton-standard MuiToggleButtonGroup-grouped MuiToggleButtonGroup-groupedHorizontal MuiToggleButtonGroup-middleButton css-1d9xxsr" tabindex="0" type="button" value="6m" aria-pressed="false">
                                      <p class="MuiTypography-root MuiTypography-buttonM css-1cwblkd">6m</p>
                                      <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                    </button>
                                    <button class="MuiButtonBase-root MuiToggleButtonGroup-grouped MuiToggleButtonGroup-groupedHorizontal MuiToggleButton-root MuiToggleButton-sizeMedium MuiToggleButton-standard MuiToggleButtonGroup-grouped MuiToggleButtonGroup-groupedHorizontal MuiToggleButtonGroup-lastButton css-1d9xxsr" tabindex="0" type="button" value="1y" aria-pressed="false">
                                      <p class="MuiTypography-root MuiTypography-buttonM css-1cwblkd">1y</p>
                                      <span class="MuiTouchRipple-root css-w0pj6f"></span>
                                    </button>
                                </div>
                              </div>
                              <div style="width: 100%; height: 100%;">
                                <div style="position: relative; width: inherit; height: inherit;">
                                    <svg width="574" height="155">
                                      <g class="visx-group" transform="translate(40, 20)">
                                          <g class="visx-group visx-rows" transform="translate(0, 0)">
                                            <line class="visx-line" x1="0" y1="115" x2="524" y2="115" fill="transparent" shape-rendering="crispEdges" stroke="#EBEBEF14" stroke-width="1" stroke-dasharray="3,3" pointer-events="none"></line>
                                            <line class="visx-line" x1="0" y1="86.25" x2="524" y2="86.25" fill="transparent" shape-rendering="crispEdges" stroke="#EBEBEF14" stroke-width="1" stroke-dasharray="3,3" pointer-events="none"></line>
                                            <line class="visx-line" x1="0" y1="57.5" x2="524" y2="57.5" fill="transparent" shape-rendering="crispEdges" stroke="#EBEBEF14" stroke-width="1" stroke-dasharray="3,3" pointer-events="none"></line>
                                            <line class="visx-line" x1="0" y1="28.75" x2="524" y2="28.75" fill="transparent" shape-rendering="crispEdges" stroke="#EBEBEF14" stroke-width="1" stroke-dasharray="3,3" pointer-events="none"></line>
                                            <line class="visx-line" x1="0" y1="0" x2="524" y2="0" fill="transparent" shape-rendering="crispEdges" stroke="#EBEBEF14" stroke-width="1" stroke-dasharray="3,3" pointer-events="none"></line>
                                          </g>
                                          <path class="visx-linepath" d="M0,84.9211059108798C1.4555555555555555,84.9211059108798,2.9111111111111105,84.9211059108798,4.366666666666666,84.9211059108798C5.822222222222222,84.9211059108798,7.277777777777777,84.9211059108798,8.733333333333333,84.9211059108798C10.188888888888888,84.9211059108798,11.644444444444446,84.9211059108798,13.100000000000001,84.9211059108798C14.555555555555555,84.9211059108798,16.01111111111111,47.8629352255887,17.466666666666665,45.73958708534133C18.92222222222222,43.61623894509395,20.377777777777776,42.55456487497026,21.833333333333332,42.55456487497026C23.288888888888888,42.55456487497026,24.744444444444447,97.78450428150079,26.200000000000003,97.78450428150079C27.65555555555556,97.78450428150079,29.11111111111111,97.78450428150079,30.566666666666666,97.78450428150079C32.02222222222222,97.78450428150079,33.477777777777774,97.78450428150079,34.93333333333333,97.78450428150079C36.388888888888886,97.78450428150079,37.84444444444444,97.78450428150079,39.3,97.78450428150079C40.75555555555555,97.78450428150079,42.21111111111111,97.81814356429011,43.666666666666664,97.88542212986877C45.12222222222222,97.95270069544743,46.577777777777776,112.60291038185943,48.03333333333333,113.56174622911566C49.48888888888889,114.52058207637188,50.94444444444445,115,52.400000000000006,115C53.85555555555556,115,55.31111111111111,115,56.766666666666666,115C58.22222222222222,115,59.67777777777778,115,61.13333333333333,115C62.58888888888889,115,64.04444444444445,115,65.5,115C66.95555555555555,115,68.41111111111111,115,69.86666666666666,115C71.32222222222222,115,72.77777777777777,22.53449972145099,74.23333333333333,22.53449972145099C75.68888888888888,22.53449972145099,77.14444444444445,115,78.6,115C80.05555555555556,115,81.5111111111111,115,82.96666666666667,115C84.42222222222222,115,85.87777777777778,115,87.33333333333333,115C88.78888888888888,115,90.24444444444444,114.11014857683462,91.69999999999999,112.33044573050385C93.15555555555555,110.55074288417309,94.6111111111111,104.32178292201537,96.06666666666666,104.32178292201537C97.52222222222223,104.32178292201537,98.97777777777777,104.32178292201537,100.43333333333334,104.32178292201537C101.8888888888889,104.32178292201537,103.34444444444445,104.32178292201537,104.80000000000001,104.32178292201537C106.25555555555556,104.32178292201537,107.71111111111112,104.32178292201537,109.16666666666667,104.32178292201537C110.62222222222222,104.32178292201537,112.07777777777778,104.32178292201537,113.53333333333333,104.32178292201537C114.9888888888889,104.32178292201537,116.44444444444444,19.129648348868777,117.9,19.129648348868777C119.35555555555555,19.129648348868777,120.81111111111112,115,122.26666666666667,115C123.72222222222223,115,125.17777777777778,115,126.63333333333334,115C128.0888888888889,115,129.54444444444445,115,131,115C132.45555555555555,115,133.91111111111113,115,135.36666666666667,115C136.82222222222222,115,138.27777777777777,115,139.73333333333332,115C141.1888888888889,115,142.64444444444445,110.59238594758462,144.10000000000002,108.47673120242521C145.55555555555557,106.36107645726584,147.01111111111112,102.30607152904366,148.46666666666667,102.30607152904366C149.92222222222222,102.30607152904366,151.3777777777778,102.30607152904366,152.83333333333334,102.30607152904366C154.2888888888889,102.30607152904366,155.74444444444444,102.30607152904366,157.2,102.30607152904366C158.65555555555554,102.30607152904366,160.11111111111111,102.30607152904366,161.56666666666666,102.30607152904366C163.0222222222222,102.30607152904366,164.4777777777778,102.30607152904366,165.93333333333334,102.30607152904366C167.38888888888889,102.30607152904366,168.84444444444446,102.30607152904366,170.3,102.30607152904366C171.75555555555556,102.30607152904366,173.2111111111111,102.30607152904366,174.66666666666666,102.30607152904366C176.1222222222222,102.30607152904366,177.57777777777778,102.30607152904366,179.03333333333333,102.30607152904366C180.48888888888888,102.30607152904366,181.94444444444443,102.30607152904366,183.39999999999998,102.30607152904366C184.85555555555555,102.30607152904366,186.3111111111111,102.30607152904366,187.76666666666668,102.30607152904366C189.22222222222223,102.30607152904366,190.67777777777778,102.30607152904366,192.13333333333333,102.30607152904366C193.58888888888887,102.30607152904366,195.04444444444445,110.5923859475846,196.5,110.5923859475846C197.95555555555555,110.5923859475846,199.41111111111113,107.21463572908561,200.86666666666667,100.45913529208765C202.32222222222222,93.70363485508973,203.77777777777777,34.465980079254685,205.23333333333332,34.465980079254685C206.6888888888889,34.465980079254685,208.14444444444445,60.11756668115771,209.60000000000002,73.26855349339851C211.05555555555557,86.41954030563915,212.51111111111112,113.12595737568168,213.96666666666667,113.371900952699C215.42222222222222,113.61784452971631,216.8777777777778,113.74081631822496,218.33333333333334,113.74081631822496C219.7888888888889,113.74081631822496,221.24444444444444,113.74081631822496,222.7,113.74081631822496C224.15555555555554,113.74081631822496,225.61111111111111,113.74081631822496,227.06666666666666,113.74081631822496C228.5222222222222,113.74081631822496,229.9777777777778,113.74081631822496,231.43333333333334,113.74081631822496C232.88888888888889,113.74081631822496,234.34444444444446,113.74081631822496,235.8,113.74081631822496C237.25555555555556,113.74081631822496,238.7111111111111,113.74081631822496,240.16666666666666,113.74081631822496C241.6222222222222,113.74081631822496,243.07777777777778,111.95709075385327,244.53333333333333,108.38963962510987C245.98888888888888,104.8221884963665,247.44444444444443,91.0770091473846,248.89999999999998,91.0770091473846C250.35555555555555,91.0770091473846,251.8111111111111,91.0770091473846,253.26666666666668,91.0770091473846C254.72222222222223,91.0770091473846,256.1777777777778,91.0770091473846,257.6333333333333,91.0770091473846C259.0888888888889,91.0770091473846,260.5444444444444,91.0770091473846,262,91.0770091473846C263.4555555555556,91.0770091473846,264.9111111111111,99.38360319343161,266.3666666666667,103.37076833553418C267.82222222222225,107.35793347763675,269.27777777777777,115,270.73333333333335,115C272.1888888888889,115,273.64444444444445,115,275.1,115C276.55555555555554,115,278.0111111111111,115,279.46666666666664,115C280.9222222222222,115,282.37777777777774,115,283.8333333333333,115C285.2888888888889,115,286.74444444444447,115,288.20000000000005,115C289.65555555555557,115,291.11111111111114,98.92654885705316,292.56666666666666,82.85309771410668C294.02222222222224,66.77964657115999,295.47777777777776,18.559293142320044,296.93333333333334,18.559293142320044C298.38888888888886,18.559293142320044,299.84444444444443,45.28333919260742,301.29999999999995,57.48292810363244C302.75555555555553,69.68251701465778,304.2111111111111,86.27795793236511,305.6666666666667,91.756826608471C307.12222222222226,97.23569528457682,308.5777777777778,99.55777211214722,310.03333333333336,99.97512962262974C311.4888888888889,100.39248713311225,312.94444444444446,100.3106812721558,314.4,100.6011658883535C315.85555555555555,100.89165050455121,317.3111111111111,100.97345636550766,318.76666666666665,101.71803731981595C320.22222222222223,102.46261827412424,321.67777777777775,113.51342907327191,323.1333333333333,113.51342907327191C324.5888888888889,113.51342907327191,326.0444444444444,88.24172331889447,327.5,88.24172331889447C328.9555555555556,88.24172331889447,330.4111111111111,105.5566135036605,331.8666666666667,105.5566135036605C333.32222222222225,105.5566135036605,334.77777777777777,97.08239945047694,336.23333333333335,97.08239945047694C337.6888888888889,97.08239945047694,339.14444444444445,98.54576771630416,340.6,99.41429188573946C342.05555555555554,100.28281605517476,343.5111111111111,101.29477374629143,344.96666666666664,102.29354446708875C346.4222222222222,103.29231518788609,347.87777777777774,105.40691621052346,349.3333333333333,105.40691621052346C350.7888888888889,105.40691621052346,352.24444444444447,105.40691621052346,353.70000000000005,105.40691621052346C355.15555555555557,105.40691621052346,356.61111111111114,105.40691621052346,358.06666666666666,105.40691621052346C359.52222222222224,105.40691621052346,360.97777777777776,105.40691621052346,362.43333333333334,105.40691621052346C363.88888888888886,105.40691621052346,365.34444444444443,105.98263703941628,366.79999999999995,106.96958703180387C368.25555555555553,107.95653702419149,369.7111111111111,111.32861616484921,371.1666666666667,111.32861616484921C372.62222222222226,111.32861616484921,374.0777777777778,111.32861616484921,375.53333333333336,111.32861616484921C376.9888888888889,111.32861616484921,378.44444444444446,111.32861616484921,379.9,111.32861616484921C381.35555555555555,111.32861616484921,382.8111111111111,111.32861616484921,384.26666666666665,111.32861616484921C385.72222222222223,111.32861616484921,387.17777777777775,112.60340221872102,388.6333333333333,113.21529952457948C390.0888888888889,113.82719683043794,391.5444444444444,115,393,115C394.4555555555556,115,395.9111111111111,115,397.3666666666667,115C398.82222222222225,115,400.27777777777777,115,401.73333333333335,115C403.1888888888889,115,404.64444444444445,115,406.1,115C407.55555555555554,115,409.0111111111111,115,410.46666666666664,115C411.9222222222222,115,413.37777777777774,78.34405736181098,414.8333333333333,75.97915783676656C416.2888888888889,73.61425831172211,417.74444444444447,72.43180854919989,419.20000000000005,72.43180854919989C420.65555555555557,72.43180854919989,422.11111111111114,73.97901533446884,423.56666666666666,77.07342890500675C425.02222222222224,80.1678424755447,426.47777777777776,105.85147511100932,427.93333333333334,105.85147511100932C429.38888888888886,105.85147511100932,430.84444444444443,105.85147511100932,432.29999999999995,105.85147511100932C433.75555555555553,105.85147511100932,435.2111111111111,105.85147511100932,436.6666666666667,105.85147511100932C438.12222222222226,105.85147511100932,439.5777777777778,110.29867470982423,441.03333333333336,111.82342885798934C442.4888888888889,113.34818300615444,443.94444444444446,115,445.4,115C446.85555555555555,115,448.3111111111111,115,449.76666666666665,115C451.22222222222223,115,452.67777777777775,115,454.1333333333333,115C455.5888888888889,115,457.0444444444444,115,458.5,115C459.9555555555556,115,461.4111111111111,100.5559210828569,462.8666666666667,95.74122811047586C464.32222222222225,90.92653513809482,465.77777777777777,86.1118421657138,467.23333333333335,86.1118421657138C468.6888888888889,86.1118421657138,470.14444444444445,86.1118421657138,471.6,86.1118421657138C473.05555555555554,86.1118421657138,474.5111111111111,86.1118421657138,475.96666666666664,86.1118421657138C477.4222222222222,86.1118421657138,478.87777777777774,86.1118421657138,480.3333333333333,86.1118421657138C481.7888888888889,86.1118421657138,483.24444444444447,86.64680805153391,484.70000000000005,87.71673982317412C486.15555555555557,88.78667159481431,487.61111111111114,114.70889252946907,489.06666666666666,114.70889252946907C490.52222222222224,114.70889252946907,491.97777777777776,114.69623568292425,493.43333333333334,114.69623568292425C494.88888888888886,114.69623568292425,496.34444444444443,114.69623568292425,497.79999999999995,114.69623568292425C499.25555555555553,114.69623568292425,500.7111111111111,114.69623568292425,502.1666666666667,114.69623568292425C503.62222222222226,114.69623568292425,505.0777777777778,90.78621077692975,506.53333333333336,89.8879220765456C507.9888888888889,88.98963337616148,509.44444444444446,88.54048902596942,510.9,88.54048902596942C512.3555555555555,88.54048902596942,513.8111111111111,107.26771489268323,515.2666666666667,107.26771489268323C516.7222222222222,107.26771489268323,518.1777777777778,85.69870906701016,519.6333333333333,85.69870906701016C521.0888888888888,85.69870906701016,522.5444444444445,85.69870906701016,524,85.69870906701016" fill="transparent" stroke-linecap="round" stroke="#B6509E" stroke-width="2"></path>
                                          <path class="visx-linepath" d="M0,99.83897778254936L4.366666666666666,99.83897778254936L8.733333333333333,99.83897778254936L13.100000000000001,99.83897778254936L17.466666666666665,99.83897778254936L21.833333333333332,99.83897778254936L26.200000000000003,99.83897778254936L30.566666666666666,99.83897778254936L34.93333333333333,99.83897778254936L39.3,99.83897778254936L43.666666666666664,99.83897778254936L48.03333333333333,99.83897778254936L52.400000000000006,99.83897778254936L56.766666666666666,99.83897778254936L61.13333333333333,99.83897778254936L65.5,99.83897778254936L69.86666666666666,99.83897778254936L74.23333333333333,99.83897778254936L78.6,99.83897778254936L82.96666666666667,99.83897778254936L87.33333333333333,99.83897778254936L91.69999999999999,99.83897778254936L96.06666666666666,99.83897778254936L100.43333333333334,99.83897778254936L104.80000000000001,99.83897778254936L109.16666666666667,99.83897778254936L113.53333333333333,99.83897778254936L117.9,99.83897778254936L122.26666666666667,99.83897778254936L126.63333333333334,99.83897778254936L131,99.83897778254936L135.36666666666667,99.83897778254936L139.73333333333332,99.83897778254936L144.10000000000002,99.83897778254936L148.46666666666667,99.83897778254936L152.83333333333334,99.83897778254936L157.2,99.83897778254936L161.56666666666666,99.83897778254936L165.93333333333334,99.83897778254936L170.3,99.83897778254936L174.66666666666666,99.83897778254936L179.03333333333333,99.83897778254936L183.39999999999998,99.83897778254936L187.76666666666668,99.83897778254936L192.13333333333333,99.83897778254936L196.5,99.83897778254936L200.86666666666667,99.83897778254936L205.23333333333332,99.83897778254936L209.60000000000002,99.83897778254936L213.96666666666667,99.83897778254936L218.33333333333334,99.83897778254936L222.7,99.83897778254936L227.06666666666666,99.83897778254936L231.43333333333334,99.83897778254936L235.8,99.83897778254936L240.16666666666666,99.83897778254936L244.53333333333333,99.83897778254936L248.89999999999998,99.83897778254936L253.26666666666668,99.83897778254936L257.6333333333333,99.83897778254936L262,99.83897778254936L266.3666666666667,99.83897778254936L270.73333333333335,99.83897778254936L275.1,99.83897778254936L279.46666666666664,99.83897778254936L283.8333333333333,99.83897778254936L288.20000000000005,99.83897778254936L292.56666666666666,99.83897778254936L296.93333333333334,99.83897778254936L301.29999999999995,99.83897778254936L305.6666666666667,99.83897778254936L310.03333333333336,99.83897778254936L314.4,99.83897778254936L318.76666666666665,99.83897778254936L323.1333333333333,99.83897778254936L327.5,99.83897778254936L331.8666666666667,99.83897778254936L336.23333333333335,99.83897778254936L340.6,99.83897778254936L344.96666666666664,99.83897778254936L349.3333333333333,99.83897778254936L353.70000000000005,99.83897778254936L358.06666666666666,99.83897778254936L362.43333333333334,99.83897778254936L366.79999999999995,99.83897778254936L371.1666666666667,99.83897778254936L375.53333333333336,99.83897778254936L379.9,99.83897778254936L384.26666666666665,99.83897778254936L388.6333333333333,99.83897778254936L393,99.83897778254936L397.3666666666667,99.83897778254936L401.73333333333335,99.83897778254936L406.1,99.83897778254936L410.46666666666664,99.83897778254936L414.8333333333333,99.83897778254936L419.20000000000005,99.83897778254936L423.56666666666666,99.83897778254936L427.93333333333334,99.83897778254936L432.29999999999995,99.83897778254936L436.6666666666667,99.83897778254936L441.03333333333336,99.83897778254936L445.4,99.83897778254936L449.76666666666665,99.83897778254936L454.1333333333333,99.83897778254936L458.5,99.83897778254936L462.8666666666667,99.83897778254936L467.23333333333335,99.83897778254936L471.6,99.83897778254936L475.96666666666664,99.83897778254936L480.3333333333333,99.83897778254936L484.70000000000005,99.83897778254936L489.06666666666666,99.83897778254936L493.43333333333334,99.83897778254936L497.79999999999995,99.83897778254936L502.1666666666667,99.83897778254936L506.53333333333336,99.83897778254936L510.9,99.83897778254936L515.2666666666667,99.83897778254936L519.6333333333333,99.83897778254936L524,99.83897778254936" fill="transparent" stroke-linecap="round" stroke-dasharray="3,5" stroke="#D2D4DC" stroke-width="2"></path>
                                          <g class="visx-group visx-annotationlabel" transform="translate(-20.900009155273438, 63.838977782549364)" pointer-events="none">
                                            <foreignObject width="90.90000915527344" height="28" overflow="visible">
                                                <div style="display: inline-block;">
                                                  <div class="MuiStack-root css-1w9bubx">
                                                      <p class="MuiTypography-root MuiTypography-secondary12 MuiTypography-noWrap css-228kdt">Avg 10.55%</p>
                                                  </div>
                                                </div>
                                            </foreignObject>
                                          </g>
                                          <g class="visx-group visx-axis visx-axis-bottom" transform="translate(0, 110)">
                                            <g class="visx-group visx-axis-tick" transform="translate(0, 0)">
                                                <line class="visx-line" x1="69.86666666666666" y1="0" x2="69.86666666666666" y2="8" fill="transparent" shape-rendering="crispEdges" stroke="#A5A8B6" stroke-width="0" stroke-linecap="square"></line>
                                                <svg x="0" y="4" font-size="10" style="overflow: visible;">
                                                  <text transform="" x="69.86666666666666" y="18" fill="#8E92A3" font-size="10" text-anchor="middle">
                                                      <tspan x="69.86666666666666" dy="0em">Jan 26</tspan>
                                                  </text>
                                                </svg>
                                            </g>
                                            <g class="visx-group visx-axis-tick" transform="translate(0, 0)">
                                                <line class="visx-line" x1="192.13333333333333" y1="0" x2="192.13333333333333" y2="8" fill="transparent" shape-rendering="crispEdges" stroke="#A5A8B6" stroke-width="0" stroke-linecap="square"></line>
                                                <svg x="0" y="4" font-size="10" style="overflow: visible;">
                                                  <text transform="" x="192.13333333333333" y="18" fill="#8E92A3" font-size="10" text-anchor="middle">
                                                      <tspan x="192.13333333333333" dy="0em">Feb 02</tspan>
                                                  </text>
                                                </svg>
                                            </g>
                                            <g class="visx-group visx-axis-tick" transform="translate(0, 0)">
                                                <line class="visx-line" x1="314.4" y1="0" x2="314.4" y2="8" fill="transparent" shape-rendering="crispEdges" stroke="#A5A8B6" stroke-width="0" stroke-linecap="square"></line>
                                                <svg x="0" y="4" font-size="10" style="overflow: visible;">
                                                  <text transform="" x="314.4" y="18" fill="#8E92A3" font-size="10" text-anchor="middle">
                                                      <tspan x="314.4" dy="0em">Feb 09</tspan>
                                                  </text>
                                                </svg>
                                            </g>
                                            <g class="visx-group visx-axis-tick" transform="translate(0, 0)">
                                                <line class="visx-line" x1="436.6666666666667" y1="0" x2="436.6666666666667" y2="8" fill="transparent" shape-rendering="crispEdges" stroke="#A5A8B6" stroke-width="0" stroke-linecap="square"></line>
                                                <svg x="0" y="4" font-size="10" style="overflow: visible;">
                                                  <text transform="" x="436.6666666666667" y="18" fill="#8E92A3" font-size="10" text-anchor="middle">
                                                      <tspan x="436.6666666666667" dy="0em">Feb 16</tspan>
                                                  </text>
                                                </svg>
                                            </g>
                                            <line class="visx-line visx-axis-line" x1="0.5" y1="0" x2="524.5" y2="0" fill="transparent" shape-rendering="crispEdges" stroke="#222" stroke-width="0"></line>
                                          </g>
                                          <g class="visx-group visx-axis visx-axis-left" transform="translate(0, 0)">
                                            <g class="visx-group visx-axis-tick" transform="translate(0, 0)">
                                                <line class="visx-line" x1="0" y1="115" x2="-8" y2="115" fill="transparent" shape-rendering="crispEdges" stroke="#222" stroke-width="0" stroke-linecap="square"></line>
                                                <svg x="-30" y="0" font-size="10" style="overflow: visible;">
                                                  <text transform="" x="-8" y="115" fill="#8E92A3" font-size="10" text-anchor="start">
                                                      <tspan x="-8" dy="0em">0%</tspan>
                                                  </text>
                                                </svg>
                                            </g>
                                            <g class="visx-group visx-axis-tick" transform="translate(0, 0)">
                                                <line class="visx-line" x1="0" y1="86.25" x2="-8" y2="86.25" fill="transparent" shape-rendering="crispEdges" stroke="#222" stroke-width="0" stroke-linecap="square"></line>
                                                <svg x="-30" y="0" font-size="10" style="overflow: visible;">
                                                  <text transform="" x="-8" y="86.25" fill="#8E92A3" font-size="10" text-anchor="start">
                                                      <tspan x="-8" dy="0em">20%</tspan>
                                                  </text>
                                                </svg>
                                            </g>
                                            <g class="visx-group visx-axis-tick" transform="translate(0, 0)">
                                                <line class="visx-line" x1="0" y1="57.5" x2="-8" y2="57.5" fill="transparent" shape-rendering="crispEdges" stroke="#222" stroke-width="0" stroke-linecap="square"></line>
                                                <svg x="-30" y="0" font-size="10" style="overflow: visible;">
                                                  <text transform="" x="-8" y="57.5" fill="#8E92A3" font-size="10" text-anchor="start">
                                                      <tspan x="-8" dy="0em">40%</tspan>
                                                  </text>
                                                </svg>
                                            </g>
                                            <g class="visx-group visx-axis-tick" transform="translate(0, 0)">
                                                <line class="visx-line" x1="0" y1="28.75" x2="-8" y2="28.75" fill="transparent" shape-rendering="crispEdges" stroke="#222" stroke-width="0" stroke-linecap="square"></line>
                                                <svg x="-30" y="0" font-size="10" style="overflow: visible;">
                                                  <text transform="" x="-8" y="28.75" fill="#8E92A3" font-size="10" text-anchor="start">
                                                      <tspan x="-8" dy="0em">60%</tspan>
                                                  </text>
                                                </svg>
                                            </g>
                                            <g class="visx-group visx-axis-tick" transform="translate(0, 0)">
                                                <line class="visx-line" x1="0" y1="0" x2="-8" y2="0" fill="transparent" shape-rendering="crispEdges" stroke="#222" stroke-width="0" stroke-linecap="square"></line>
                                                <svg x="-30" y="0" font-size="10" style="overflow: visible;">
                                                  <text transform="" x="-8" y="0" fill="#8E92A3" font-size="10" text-anchor="start">
                                                      <tspan x="-8" dy="0em">80%</tspan>
                                                  </text>
                                                </svg>
                                            </g>
                                            <line class="visx-line visx-axis-line" x1="0" y1="115.5" x2="0" y2="0.5" fill="transparent" shape-rendering="crispEdges" stroke="#222" stroke-width="0"></line>
                                          </g>
                                          <rect class="visx-bar" width="524" height="115" fill="transparent"></rect>
                                      </g>
                                    </svg>
                                </div>
                              </div>
                          </div>
                          <div class="MuiBox-root css-y6nr1q">
                              <p class="MuiTypography-root MuiTypography-subheader1 css-11bi6rn">Collector Info</p>
                          </div>
                          <div class="MuiBox-root css-1b1zfbw">
                              <div class="MuiBox-root css-1o42vu5">
                                <div class="MuiBox-root css-1ucx9m3">
                                    <span class="MuiTypography-root MuiTypography-secondary14 css-1ma60wi">
                                      <div class="MuiBox-root css-70qvj9">
                                          <p class="MuiTypography-root MuiTypography-description css-1nkijli">Reserve factor</p>
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
                                    </span>
                                    <p class="MuiTypography-root MuiTypography-secondary14 MuiTypography-noWrap css-uefm4v">20.00<span class="MuiTypography-root MuiTypography-secondary14 css-d8aql2">%</span></p>
                                </div>
                              </div>
                              <div class="MuiBox-root css-1o42vu5">
                                <div class="MuiBox-root css-1ucx9m3">
                                    <span class="MuiTypography-root MuiTypography-secondary14 css-1ma60wi">
                                      <p class="MuiTypography-root MuiTypography-description css-1nkijli">Collector Contract</p>
                                    </span>
                                    <a class="MuiTypography-root MuiTypography-description MuiLink-root MuiLink-underlineNone css-m4txjo" href="https://etherscan.io/address/0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c" target="_blank" rel="noopener">
                                      <div class="MuiBox-root css-70qvj9">
                                          <p class="MuiTypography-root MuiTypography-description css-1t8x1s2">View contract</p>
                                          <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1ej2kgu" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                            </svg>
                                          </svg>
                                      </div>
                                    </a>
                                </div>
                              </div>
                              <div class="MuiBox-root css-pey9f5"></div>
                          </div>
                        </div>
                    </div>
                  </div>
                  <hr class="MuiDivider-root MuiDivider-fullWidth css-1r56f2y">
                  <div class="MuiBox-root css-oickpl">
                    <p class="MuiTypography-root MuiTypography-subheader1 css-ei9oq1">Interest rate model</p>
                    <div class="MuiBox-root css-15z9wyn">
                        <div class="MuiBox-root css-17i6wgu">
                          <div class="borderless MuiBox-root css-ov2ylm">
                              <span class="MuiTypography-root MuiTypography-description css-1t8x1s2">Utilization Rate</span>
                              <div class="MuiBox-root css-dtnerw">
                                <p class="MuiTypography-root MuiTypography-main16 MuiTypography-noWrap css-1ogi1pb">75.92<span class="MuiTypography-root MuiTypography-main16 css-2am8m">%</span></p>
                              </div>
                          </div>
                          <a class="MuiTypography-root MuiTypography-description MuiLink-root MuiLink-underlineNone MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeSmall MuiButton-outlinedSizeSmall MuiButton-colorPrimary MuiButton-disableElevation MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeSmall MuiButton-outlinedSizeSmall MuiButton-colorPrimary MuiButton-disableElevation css-1jwp6ou" href="https://etherscan.io/address/0x9ec6F08190DeA04A54f8Afc53Db96134e5E3FdFB" target="_blank" rel="noopener" tabindex="0">
                              Interest rate strategy
                              <span class="MuiButton-icon MuiButton-endIcon MuiButton-iconSizeSmall css-kcxyz4">
                                <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-18n8dfg" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                                    </svg>
                                </svg>
                              </span>
                              <span class="MuiTouchRipple-root css-w0pj6f"></span>
                          </a>
                        </div>
                        <div class="MuiBox-root css-1553f39">
                          <div class="MuiBox-root css-mbx0dj">
                              <div class="MuiBox-root css-0">
                                <div class="MuiBox-root css-1ryj7lh">
                                    <div class="MuiBox-root css-1ddunyq"></div>
                                    <p class="MuiTypography-root MuiTypography-description css-1t8x1s2">Borrow APR, variable</p>
                                </div>
                                <div class="MuiBox-root css-1ryj7lh">
                                    <div class="MuiBox-root css-r27nld"></div>
                                    <p class="MuiTypography-root MuiTypography-description css-1t8x1s2">Utilization Rate</p>
                                </div>
                              </div>
                          </div>
                          <div style="width: 100%; height: 100%;">
                              <div style="position: relative; width: inherit; height: inherit;">
                                <svg width="574" height="155">
                                    <g class="visx-group" transform="translate(40, 20)">
                                      <g class="visx-group visx-rows" transform="translate(0, 0)">
                                          <line class="visx-line" x1="0" y1="115" x2="524" y2="115" fill="transparent" shape-rendering="crispEdges" stroke="#EBEBEF14" stroke-width="1" stroke-dasharray="3,3" pointer-events="none"></line>
                                          <line class="visx-line" x1="0" y1="73.18181818181819" x2="524" y2="73.18181818181819" fill="transparent" shape-rendering="crispEdges" stroke="#EBEBEF14" stroke-width="1" stroke-dasharray="3,3" pointer-events="none"></line>
                                          <line class="visx-line" x1="0" y1="31.36363636363636" x2="524" y2="31.36363636363636" fill="transparent" shape-rendering="crispEdges" stroke="#EBEBEF14" stroke-width="1" stroke-dasharray="3,3" pointer-events="none"></line>
                                      </g>
                                      <path class="visx-linepath" d="M0,115C0.8733333333333334,114.96321548821548,1.7466666666666666,114.92643097643096,2.62,114.88964646464646C3.4933333333333336,114.85286195286196,4.366666666666667,114.81607744107745,5.24,114.77929292929294C6.113333333333333,114.74250841750842,6.986666666666666,114.7057239057239,7.859999999999999,114.66893939393938C8.733333333333333,114.63215488215486,9.606666666666667,114.59537037037038,10.48,114.55858585858586C11.353333333333333,114.52180134680134,12.226666666666668,114.48501683501684,13.100000000000001,114.44823232323232C13.973333333333334,114.41144781144781,14.846666666666666,114.3746632996633,15.719999999999999,114.3378787878788C16.593333333333334,114.30109427609428,17.46666666666667,114.26430976430977,18.340000000000003,114.22752525252525C19.213333333333335,114.19074074074074,20.08666666666667,114.15395622895623,20.96,114.11717171717171C21.833333333333332,114.0803872053872,22.706666666666667,114.04360269360268,23.58,114.00681818181818C24.453333333333333,113.97003367003366,25.326666666666668,113.93324915824917,26.200000000000003,113.89646464646465C27.073333333333334,113.85968013468015,27.94666666666667,113.82289562289563,28.82,113.78611111111111C29.69333333333333,113.7493265993266,30.566666666666666,113.7125420875421,31.439999999999998,113.67575757575759C32.31333333333333,113.63897306397307,33.18666666666667,113.60218855218855,34.06,113.56540404040403C34.93333333333334,113.52861952861952,35.80666666666667,113.49183501683503,36.68000000000001,113.45505050505051C37.553333333333335,113.418265993266,38.42666666666667,113.38148148148149,39.3,113.34469696969697C40.17333333333333,113.30791245791245,41.04666666666667,113.27112794612793,41.92,113.23434343434343C42.79333333333334,113.19755892255893,43.66666666666667,113.16077441077442,44.540000000000006,113.1239898989899C45.413333333333334,113.08720538720539,46.28666666666667,113.05042087542087,47.16,113.01363636363635C48.03333333333333,112.97685185185183,48.906666666666666,112.94006734006734,49.78,112.90328282828283C50.653333333333336,112.86649831649831,51.52666666666667,112.8297138047138,52.400000000000006,112.79292929292929C53.27333333333333,112.75614478114478,54.14666666666667,112.71936026936027,55.019999999999996,112.68257575757576C55.89333333333333,112.64579124579124,56.766666666666666,112.60900673400673,57.64,112.57222222222222C58.513333333333335,112.53543771043772,59.38666666666667,112.49865319865322,60.260000000000005,112.4618686868687C61.13333333333333,112.42508417508418,62.00666666666667,112.38829966329966,62.879999999999995,112.35151515151514C63.75333333333333,112.31473063973063,64.62666666666667,112.27794612794614,65.5,112.24116161616162C66.37333333333333,112.2043771043771,67.24666666666667,112.1675925925926,68.12,112.13080808080808C68.99333333333334,112.09402356902356,69.86666666666667,112.05723905723906,70.74000000000001,112.02045454545456C71.61333333333334,111.98367003367005,72.48666666666668,111.94688552188553,73.36000000000001,111.91010101010102C74.23333333333333,111.8733164983165,75.10666666666667,111.836531986532,75.97999999999999,111.79974747474748C76.85333333333332,111.76296296296296,77.72666666666666,111.72617845117846,78.6,111.68939393939394C79.47333333333333,111.65260942760942,80.34666666666666,111.6158249158249,81.22,111.5790404040404C82.09333333333333,111.5422558922559,82.96666666666667,111.50547138047139,83.84,111.46868686868687C84.71333333333334,111.43190235690236,85.58666666666667,111.39511784511785,86.46000000000001,111.35833333333333C87.33333333333334,111.32154882154882,88.20666666666668,111.28476430976431,89.08000000000001,111.2479797979798C89.95333333333333,111.21119528619528,90.82666666666667,111.17441077441076,91.69999999999999,111.13762626262626C92.57333333333332,111.10084175084174,93.44666666666666,111.06405723905723,94.32,111.02727272727273C95.19333333333333,110.99048821548823,96.06666666666666,110.9537037037037,96.94,110.91691919191919C97.81333333333333,110.88013468013469,98.68666666666667,110.84335016835018,99.56,110.80656565656567C100.43333333333334,110.76978114478115,101.30666666666667,110.73299663299663,102.18,110.69621212121211C103.05333333333334,110.6594276094276,103.92666666666668,110.6226430976431,104.80000000000001,110.58585858585859C105.67333333333333,110.54907407407408,106.54666666666667,110.51228956228955,107.41999999999999,110.47550505050505C108.29333333333332,110.43872053872053,109.16666666666666,110.40193602693603,110.03999999999999,110.36515151515152C110.91333333333333,110.32836700336702,111.78666666666666,110.2915824915825,112.66,110.25479797979798C113.53333333333333,110.21801346801347,114.40666666666667,110.18122895622896,115.28,110.14444444444445C116.15333333333334,110.10765993265993,117.02666666666667,110.07087542087542,117.9,110.0340909090909C118.77333333333334,109.99730639730639,119.64666666666668,109.96052188552189,120.52000000000001,109.92373737373737C121.39333333333333,109.88695286195286,122.26666666666667,109.85016835016835,123.13999999999999,109.81338383838384C124.01333333333332,109.77659932659932,124.88666666666666,109.73981481481482,125.75999999999999,109.7030303030303C126.63333333333333,109.66624579124579,127.50666666666666,109.62946127946128,128.38,109.59267676767676C129.25333333333333,109.55589225589225,130.12666666666667,109.51910774410774,131,109.48232323232322C131.87333333333333,109.4455387205387,132.74666666666667,109.4087542087542,133.62,109.3719696969697C134.49333333333334,109.3351851851852,135.36666666666667,109.29840067340066,136.24,109.26161616161616C137.11333333333334,109.22483164983166,137.98666666666668,109.18804713804715,138.86,109.15126262626264C139.73333333333335,109.11447811447812,140.60666666666668,109.07769360269361,141.48000000000002,109.0409090909091C142.35333333333335,109.00412457912458,143.2266666666667,108.96734006734007,144.10000000000002,108.93055555555556C144.97333333333336,108.89377104377104,145.8466666666667,108.85698653198654,146.72000000000003,108.82020202020202C147.59333333333333,108.78341750841751,148.46666666666667,108.746632996633,149.33999999999997,108.7098484848485C150.2133333333333,108.67306397306398,151.08666666666664,108.63627946127947,151.95999999999998,108.59949494949495C152.83333333333331,108.56271043771044,153.70666666666665,108.52592592592593,154.57999999999998,108.48914141414141C155.45333333333332,108.4523569023569,156.32666666666665,108.4155723905724,157.2,108.37878787878788C158.07333333333332,108.34200336700336,158.94666666666666,108.30521885521884,159.82,108.26843434343434C160.69333333333333,108.23164983164983,161.56666666666666,108.19486531986533,162.44,108.15808080808081C163.31333333333333,108.1212962962963,164.18666666666667,108.08451178451179,165.06,108.04772727272727C165.93333333333334,108.01094276094275,166.80666666666667,107.97415824915826,167.68,107.93737373737375C168.55333333333334,107.90058922558923,169.42666666666668,107.86380471380471,170.3,107.8270202020202C171.17333333333335,107.79023569023568,172.04666666666668,107.75345117845117,172.92000000000002,107.71666666666667C173.79333333333335,107.67988215488216,174.66666666666669,107.64309764309763,175.54000000000002,107.60631313131313C176.41333333333336,107.56952861952863,177.2866666666667,107.53274410774412,178.16000000000003,107.4959595959596C179.03333333333333,107.4591750841751,179.90666666666667,107.42239057239058,180.77999999999997,107.38560606060607C181.6533333333333,107.34882154882155,182.52666666666664,107.31203703703704,183.39999999999998,107.27525252525253C184.2733333333333,107.23846801346801,185.14666666666665,107.2016835016835,186.01999999999998,107.16489898989899C186.89333333333332,107.12811447811447,187.76666666666665,107.09132996632997,188.64,107.05454545454545C189.51333333333332,107.01776094276093,190.38666666666666,106.98097643097643,191.26,106.94419191919192C192.13333333333333,106.90740740740742,193.00666666666666,106.8706228956229,193.88,106.83383838383838C194.75333333333333,106.79705387205387,195.62666666666667,106.76026936026936,196.5,106.72348484848484C197.37333333333333,106.68670033670033,198.24666666666667,106.64991582491581,199.12,106.6131313131313C199.99333333333334,106.5763468013468,200.86666666666667,106.5395622895623,201.74,106.50277777777778C202.61333333333334,106.46599326599326,203.48666666666668,106.42920875420876,204.36,106.39242424242424C205.23333333333335,106.35563973063972,206.10666666666668,106.31885521885523,206.98000000000002,106.28207070707072C207.85333333333335,106.2452861952862,208.7266666666667,106.20850168350168,209.60000000000002,106.17171717171716C210.47333333333336,106.13493265993264,211.3466666666667,106.09814814814816,212.22000000000003,106.06136363636364C213.09333333333333,106.02457912457913,213.96666666666667,105.9877946127946,214.83999999999997,105.9510101010101C215.7133333333333,105.91422558922558,216.58666666666664,105.87744107744109,217.45999999999998,105.84065656565657C218.33333333333331,105.80387205387206,219.20666666666665,105.76708754208755,220.07999999999998,105.73030303030303C220.95333333333332,105.69351851851852,221.82666666666665,105.65673400673401,222.7,105.6199494949495C223.57333333333332,105.58316498316498,224.44666666666666,105.54638047138047,225.32,105.50959595959596C226.19333333333333,105.47281144781144,227.06666666666666,105.43602693602693,227.94,105.39924242424242C228.81333333333333,105.3624579124579,229.68666666666667,105.3256734006734,230.56,105.28888888888889C231.43333333333334,105.25210437710439,232.30666666666667,105.21531986531987,233.18,105.17853535353535C234.05333333333334,105.14175084175083,234.92666666666668,105.10496632996633,235.8,105.06818181818181C236.67333333333335,105.0313973063973,237.54666666666668,104.99461279461278,238.42000000000002,104.95782828282827C239.29333333333335,104.92104377104377,240.16666666666669,104.88425925925927,241.04000000000002,104.84747474747475C241.91333333333336,104.81069023569023,242.7866666666667,104.77390572390573,243.66000000000003,104.73712121212121C244.53333333333333,104.7003367003367,245.40666666666667,104.66355218855219,246.27999999999997,104.62676767676768C247.1533333333333,104.58998316498317,248.02666666666664,104.55319865319866,248.89999999999998,104.51641414141415C249.7733333333333,104.47962962962963,250.64666666666665,104.44284511784512,251.51999999999998,104.4060606060606C252.39333333333332,104.36927609427609,253.26666666666665,104.33249158249157,254.14,104.29570707070707C255.01333333333332,104.25892255892256,255.88666666666666,104.22213804713806,256.76,104.18535353535354C257.6333333333333,104.14856902356902,258.50666666666666,104.11178451178452,259.38,104.075C260.25333333333333,104.03821548821549,261.12666666666667,104.00143097643098,262,103.96464646464646C262.87333333333333,103.92786195286195,263.74666666666667,103.89107744107744,264.62,103.85429292929292C265.49333333333334,103.8175084175084,266.3666666666667,103.7807239057239,267.24,103.74393939393939C268.11333333333334,103.70715488215487,268.9866666666667,103.67037037037036,269.86,103.63358585858586C270.73333333333335,103.59680134680136,271.6066666666667,103.56001683501684,272.48,103.52323232323232C273.35333333333335,103.4864478114478,274.2266666666667,103.44966329966329,275.1,103.41287878787878C275.97333333333336,103.37609427609428,276.8466666666667,103.33930976430977,277.72,103.30252525252526C278.59333333333336,103.26574074074074,279.4666666666667,103.22895622895624,280.34000000000003,103.19217171717172C281.21333333333337,103.1553872053872,282.0866666666667,103.1186026936027,282.96000000000004,103.08181818181818C283.83333333333337,103.04503367003366,284.7066666666667,103.00824915824916,285.58000000000004,102.97146464646465C286.4533333333334,102.93468013468015,287.3266666666667,102.89789562289563,288.20000000000005,102.86111111111111C289.0733333333334,102.8243265993266,289.9466666666667,102.78754208754209,290.82000000000005,102.75075757575758C291.6933333333334,102.71397306397306,292.5666666666667,102.67718855218855,293.44000000000005,102.64040404040404C294.31333333333333,102.60361952861953,295.18666666666667,102.56683501683501,296.05999999999995,102.53005050505051C296.9333333333333,102.493265993266,297.8066666666666,102.45648148148149,298.67999999999995,102.41969696969697C299.5533333333333,102.38291245791245,300.4266666666666,102.34612794612795,301.29999999999995,102.30934343434343C302.1733333333333,102.27255892255891,303.0466666666666,102.23577441077443,303.91999999999996,102.19898989898991C304.7933333333333,102.16220538720539,305.66666666666663,102.12542087542087,306.53999999999996,102.08863636363635C307.4133333333333,102.05185185185184,308.28666666666663,102.01506734006733,309.15999999999997,101.97828282828283C310.0333333333333,101.94149831649833,310.90666666666664,101.9047138047138,311.78,101.86792929292929C312.6533333333333,101.83114478114479,313.52666666666664,101.79436026936028,314.4,101.75757575757576C315.2733333333333,101.72079124579125,316.14666666666665,101.68400673400674,317.02,101.64722222222223C317.8933333333333,101.61043771043771,318.76666666666665,101.5736531986532,319.64,101.53686868686869C320.5133333333333,101.50008417508417,321.38666666666666,101.46329966329967,322.26,101.42651515151515C323.1333333333333,101.38973063973063,324.00666666666666,101.35294612794613,324.88,101.31616161616162C325.75333333333333,101.27937710437712,326.62666666666667,101.24259259259259,327.5,101.20580808080808C328.37333333333333,101.16902356902358,329.24666666666667,101.13223905723908,330.12,101.09545454545456C330.99333333333334,101.05867003367004,331.8666666666667,101.02188552188552,332.74,100.985101010101C333.61333333333334,100.94831649831649,334.4866666666667,100.911531986532,335.36,100.87474747474748C336.23333333333335,100.83796296296296,337.1066666666667,100.80117845117846,337.98,100.76439393939394C338.85333333333335,100.72760942760942,339.7266666666667,100.69082491582492,340.6,100.6540404040404C341.47333333333336,100.61725589225588,342.3466666666667,100.5804713804714,343.22,100.54368686868688C344.09333333333336,100.50690235690236,344.9666666666667,100.47011784511784,345.84000000000003,100.43333333333332C346.71333333333337,100.3965488215488,347.5866666666667,100.3597643097643,348.46000000000004,100.3229797979798C349.33333333333337,100.2861952861953,350.2066666666667,100.24941077441076,351.08000000000004,100.21262626262626C351.9533333333334,100.17584175084176,352.8266666666667,100.13905723905725,353.70000000000005,100.10227272727273C354.5733333333334,100.06548821548822,355.4466666666667,100.02870370370371,356.32000000000005,99.9919191919192C357.1933333333334,99.95513468013468,358.0666666666667,99.91835016835017,358.94000000000005,99.88156565656566C359.81333333333333,99.84478114478114,360.68666666666667,99.80799663299662,361.55999999999995,99.77121212121212C362.4333333333333,99.7344276094276,363.3066666666666,99.6976430976431,364.17999999999995,99.66085858585859C365.0533333333333,99.62407407407409,365.9266666666666,99.58728956228956,366.79999999999995,99.55050505050505C367.6733333333333,99.51372053872055,368.5466666666666,99.47693602693604,369.41999999999996,99.44015151515153C370.2933333333333,99.40336700336701,371.16666666666663,99.36658249158249,372.03999999999996,99.32979797979797C372.9133333333333,99.29301346801346,373.78666666666663,99.25622895622897,374.65999999999997,99.21944444444445C375.5333333333333,99.18265993265993,376.40666666666664,99.14587542087543,377.28,99.10909090909091C378.1533333333333,99.07230639730639,379.02666666666664,99.03552188552189,379.9,98.99873737373737C380.7733333333333,98.96195286195285,381.64666666666665,98.92516835016836,382.52,98.88838383838385C383.3933333333333,98.85159932659933,384.26666666666665,98.81481481481481,385.14,98.77803030303029C386.0133333333333,98.74124579124577,386.88666666666666,98.70446127946127,387.76,98.66767676767677C388.6333333333333,98.63089225589226,389.50666666666666,98.59410774410773,390.38,98.55732323232323C391.25333333333333,98.52053872053872,392.12666666666667,98.48375420875422,393,98.4469696969697C393.87333333333333,98.41018518518518,394.74666666666667,98.37340067340068,395.62,98.33661616161616C396.49333333333334,98.29983164983165,397.3666666666667,98.26304713804714,398.24,98.22626262626262C399.11333333333334,98.1894781144781,399.9866666666667,98.1526936026936,400.86,98.11590909090908C401.73333333333335,98.07912457912457,402.6066666666667,98.04234006734006,403.48,98.00555555555556C404.35333333333335,97.96877104377106,405.2266666666667,97.93198653198652,406.1,97.89520202020202C406.97333333333336,97.85841750841752,407.8466666666667,97.82163299663301,408.72,97.7848484848485C409.59333333333336,97.74806397306398,410.4666666666667,97.71127946127946,411.34000000000003,97.67449494949494C412.21333333333337,97.63771043771042,413.0866666666667,97.60092592592594,413.96000000000004,97.56414141414142C414.83333333333337,97.5273569023569,415.7066666666667,97.4905723905724,416.58000000000004,97.45378787878788C417.4533333333334,97.41700336700336,418.3266666666667,97.38021885521886,419.20000000000005,97.34343434343434C420.0733333333334,97.30664983164982,420.9466666666667,97.26986531986533,421.82000000000005,97.23308080808081C422.6933333333334,97.1962962962963,423.5666666666667,97.15951178451178,424.44000000000005,97.12272727272726C425.31333333333333,97.08594276094274,426.18666666666667,97.04915824915824,427.05999999999995,97.01237373737374C427.9333333333333,96.97558922558922,428.8066666666666,96.9388047138047,429.67999999999995,96.9020202020202C430.5533333333333,96.86523569023569,431.4266666666666,96.82845117845119,432.29999999999995,96.79166666666667C433.1733333333333,96.75488215488215,434.0466666666666,96.71809764309765,434.91999999999996,96.68131313131313C435.7933333333333,96.64452861952861,436.66666666666663,96.60774410774411,437.53999999999996,96.5709595959596C438.4133333333333,96.53417508417508,439.28666666666663,96.49739057239057,440.15999999999997,96.46060606060605C441.0333333333333,96.42382154882154,441.90666666666664,96.38703703703703,442.78,96.35025252525253C443.6533333333333,96.31346801346803,444.52666666666664,96.27668350168351,445.4,96.23989898989899C446.2733333333333,96.20311447811447,447.14666666666665,96.16632996632997,448.02,96.12954545454545C448.8933333333333,96.09276094276093,449.76666666666665,96.05597643097643,450.64,96.01919191919191C451.5133333333333,95.9824074074074,452.38666666666666,95.94562289562288,453.26,95.90883838383837C454.1333333333333,95.87205387205387,455.00666666666666,95.83526936026936,455.88,95.79848484848485C456.75333333333333,95.76170033670033,457.62666666666667,95.72491582491583,458.5,95.68813131313131C459.37333333333333,95.65134680134679,460.24666666666667,95.6145622895623,461.12,95.57777777777778C461.99333333333334,95.54099326599327,462.8666666666667,95.50420875420875,463.74,95.46742424242423C464.61333333333334,95.43063973063971,465.4866666666667,95.39385521885524,466.36,95.35707070707072C467.23333333333335,95.3202861952862,468.1066666666667,95.28350168350168,468.98,95.24671717171717C469.85333333333335,95.20993265993265,470.7266666666667,95.20993265993266,471.6,95.13636363636364C472.47333333333336,95.06279461279462,473.3466666666667,92.34848484848484,474.22,90.95454545454545C475.09333333333336,89.56060606060606,475.9666666666667,88.16666666666666,476.84000000000003,86.77272727272727C477.71333333333337,85.37878787878788,478.5866666666667,83.98484848484848,479.46000000000004,82.5909090909091C480.33333333333337,81.1969696969697,481.2066666666667,79.80303030303031,482.08000000000004,78.40909090909092C482.9533333333334,77.01515151515153,483.8266666666667,75.62121212121212,484.70000000000005,74.22727272727273C485.5733333333334,72.83333333333334,486.4466666666667,71.43939393939394,487.32000000000005,70.04545454545455C488.1933333333334,68.65151515151516,489.0666666666667,67.25757575757578,489.94000000000005,65.86363636363636C490.81333333333333,64.469696969697,491.68666666666667,63.07575757575754,492.55999999999995,61.68181818181818C493.4333333333333,60.28787878787875,494.3066666666666,58.89393939393938,495.17999999999995,57.499999999999986C496.0533333333333,56.106060606060595,496.9266666666666,54.71212121212121,497.79999999999995,53.31818181818182C498.6733333333333,51.92424242424243,499.5466666666666,50.53030303030303,500.41999999999996,49.13636363636363C501.2933333333333,47.742424242424235,502.16666666666663,46.348484848484844,503.03999999999996,44.95454545454545C503.9133333333333,43.56060606060606,504.78666666666663,42.16666666666666,505.65999999999997,40.772727272727266C506.5333333333333,39.378787878787875,507.40666666666664,37.984848484848484,508.28,36.59090909090909C509.1533333333333,35.1969696969697,510.02666666666664,33.803030303030305,510.9,32.409090909090914C511.7733333333333,31.01515151515152,512.6466666666666,29.621212121212125,513.52,28.22727272727273C514.3933333333333,26.833333333333336,515.2666666666667,25.43939393939394,516.14,24.045454545454547C517.0133333333333,22.651515151515152,517.8866666666667,21.257575757575758,518.76,19.863636363636363C519.6333333333333,18.46969696969697,520.5066666666667,17.075757575757574,521.38,15.68181818181818C522.2533333333333,14.287878787878785,523.1266666666667,12.893939393939393,524,11.499999999999998" fill="transparent" stroke-linecap="round" stroke="#B6509E" stroke-width="2"></path>
                                      <g class="visx-group visx-axis visx-axis-bottom" transform="translate(0, 115)">
                                          <g class="visx-group visx-axis-tick" transform="translate(0, 0)">
                                            <line class="visx-line" x1="0" y1="0" x2="0" y2="8" fill="transparent" shape-rendering="crispEdges" stroke="#A5A8B6" stroke-width="0" stroke-linecap="square"></line>
                                            <svg x="0" y="0" font-size="10" style="overflow: visible;">
                                                <text transform="" x="0" y="18" fill="#8E92A3" font-size="10" text-anchor="middle">
                                                  <tspan x="0" dy="0em">0%</tspan>
                                                </text>
                                            </svg>
                                          </g>
                                          <g class="visx-group visx-axis-tick" transform="translate(0, 0)">
                                            <line class="visx-line" x1="131" y1="0" x2="131" y2="8" fill="transparent" shape-rendering="crispEdges" stroke="#A5A8B6" stroke-width="0" stroke-linecap="square"></line>
                                            <svg x="0" y="0" font-size="10" style="overflow: visible;">
                                                <text transform="" x="131" y="18" fill="#8E92A3" font-size="10" text-anchor="middle">
                                                  <tspan x="131" dy="0em">25%</tspan>
                                                </text>
                                            </svg>
                                          </g>
                                          <g class="visx-group visx-axis-tick" transform="translate(0, 0)">
                                            <line class="visx-line" x1="262" y1="0" x2="262" y2="8" fill="transparent" shape-rendering="crispEdges" stroke="#A5A8B6" stroke-width="0" stroke-linecap="square"></line>
                                            <svg x="0" y="0" font-size="10" style="overflow: visible;">
                                                <text transform="" x="262" y="18" fill="#8E92A3" font-size="10" text-anchor="middle">
                                                  <tspan x="262" dy="0em">50%</tspan>
                                                </text>
                                            </svg>
                                          </g>
                                          <g class="visx-group visx-axis-tick" transform="translate(0, 0)">
                                            <line class="visx-line" x1="393" y1="0" x2="393" y2="8" fill="transparent" shape-rendering="crispEdges" stroke="#A5A8B6" stroke-width="0" stroke-linecap="square"></line>
                                            <svg x="0" y="0" font-size="10" style="overflow: visible;">
                                                <text transform="" x="393" y="18" fill="#8E92A3" font-size="10" text-anchor="middle">
                                                  <tspan x="393" dy="0em">75%</tspan>
                                                </text>
                                            </svg>
                                          </g>
                                          <g class="visx-group visx-axis-tick" transform="translate(0, 0)">
                                            <line class="visx-line" x1="524" y1="0" x2="524" y2="8" fill="transparent" shape-rendering="crispEdges" stroke="#A5A8B6" stroke-width="0" stroke-linecap="square"></line>
                                            <svg x="0" y="0" font-size="10" style="overflow: visible;">
                                                <text transform="" x="524" y="18" fill="#8E92A3" font-size="10" text-anchor="middle">
                                                  <tspan x="524" dy="0em">100%</tspan>
                                                </text>
                                            </svg>
                                          </g>
                                          <line class="visx-line visx-axis-line" x1="0.5" y1="0" x2="524.5" y2="0" fill="transparent" shape-rendering="crispEdges" stroke="#222" stroke-width="0"></line>
                                      </g>
                                      <g class="visx-group visx-axis visx-axis-left" transform="translate(0, 0)">
                                          <g class="visx-group visx-axis-tick" transform="translate(0, 0)">
                                            <line class="visx-line" x1="0" y1="115" x2="-8" y2="115" fill="transparent" shape-rendering="crispEdges" stroke="#222" stroke-width="0" stroke-linecap="square"></line>
                                            <svg x="-30" y="0" font-size="8" style="overflow: visible;">
                                                <text transform="" x="-8" y="115" fill="#8E92A3" font-size="8" text-anchor="start">
                                                  <tspan x="-8" dy="0em">0%</tspan>
                                                </text>
                                            </svg>
                                          </g>
                                          <g class="visx-group visx-axis-tick" transform="translate(0, 0)">
                                            <line class="visx-line" x1="0" y1="73.18181818181819" x2="-8" y2="73.18181818181819" fill="transparent" shape-rendering="crispEdges" stroke="#222" stroke-width="0" stroke-linecap="square"></line>
                                            <svg x="-30" y="0" font-size="8" style="overflow: visible;">
                                                <text transform="" x="-8" y="73.18181818181819" fill="#8E92A3" font-size="8" text-anchor="start">
                                                  <tspan x="-8" dy="0em">20%</tspan>
                                                </text>
                                            </svg>
                                          </g>
                                          <g class="visx-group visx-axis-tick" transform="translate(0, 0)">
                                            <line class="visx-line" x1="0" y1="31.36363636363636" x2="-8" y2="31.36363636363636" fill="transparent" shape-rendering="crispEdges" stroke="#222" stroke-width="0" stroke-linecap="square"></line>
                                            <svg x="-30" y="0" font-size="8" style="overflow: visible;">
                                                <text transform="" x="-8" y="31.36363636363636" fill="#8E92A3" font-size="8" text-anchor="start">
                                                  <tspan x="-8" dy="0em">40%</tspan>
                                                </text>
                                            </svg>
                                          </g>
                                          <line class="visx-line visx-axis-line" x1="0" y1="115.5" x2="0" y2="0.5" fill="transparent" shape-rendering="crispEdges" stroke="#222" stroke-width="0"></line>
                                      </g>
                                      <rect class="visx-bar" width="524" height="115" fill="transparent"></rect>
                                      <line class="visx-line" x1="397.8227314914125" y1="44" x2="397.8227314914125" y2="115" fill="transparent" shape-rendering="crispEdges" stroke="#0062D2" stroke-width="1" pointer-events="none" stroke-dasharray="5,2"></line>
                                      <svg x="0" y="0" font-size="10px" style="overflow: visible;">
                                          <text transform="" x="397.8227314914125" y="36" font-size="10px" fill="#62677B" text-anchor="middle">
                                            <tspan x="397.8227314914125" dy="0.355em">Current 75.92%</tspan>
                                          </text>
                                      </svg>
                                      <line class="visx-line" x1="471.6" y1="28" x2="471.6" y2="115" fill="transparent" shape-rendering="crispEdges" stroke="#0062D2" stroke-width="1" pointer-events="none" stroke-dasharray="5,2"></line>
                                      <svg x="0" y="0" font-size="10px" style="overflow: visible;">
                                          <text transform="" x="471.6" y="20" font-size="10px" fill="#62677B" text-anchor="middle">
                                            <tspan x="471.6" dy="0.355em">Optimal 90%</tspan>
                                          </text>
                                      </svg>
                                    </g>
                                </svg>
                              </div>
                          </div>
                        </div>
                    </div>
                  </div>
              </div>
            </div>

        <div class="MuiBox-root css-1osbn5p">
          <div v-if="toggle =='first'" class="first-toggle MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 css-yt1g49">
              <h3 class="MuiTypography-root MuiTypography-h3 css-tuyoad">Your info</h3>
              <div class="MuiBox-root css-0">
                <div role="group" class="MuiToggleButtonGroup-root css-b0xl2r">
                    <button @click="toggleSwitch('first')" :class="{ 'Mui-selected' : toggle =='first'}" class="MuiButtonBase-root MuiToggleButtonGroup-grouped MuiToggleButtonGroup-groupedHorizontal MuiToggleButton-root  MuiToggleButton-sizeMedium MuiToggleButton-primary MuiToggleButtonGroup-firstButton css-m2q0x7" tabindex="0" type="button" value="WETH" aria-pressed="true">
                      <p class="MuiTypography-root MuiTypography-buttonM css-1cwblkd">WETH</p>
                      <span class="MuiTouchRipple-root css-w0pj6f"></span>
                    </button>
                    <button  @click="toggleSwitch('second')" :class="{ 'Mui-selected' : toggle =='second'}" class="MuiButtonBase-root MuiToggleButtonGroup-grouped MuiToggleButtonGroup-groupedHorizontal MuiToggleButton-root MuiToggleButton-sizeMedium MuiToggleButton-primary MuiToggleButtonGroup-lastButton css-m2q0x7" tabindex="0" type="button" value="ETH" aria-pressed="false">
                      <p class="MuiTypography-root MuiTypography-buttonM css-1cwblkd">ETH</p>
                      <span class="MuiTouchRipple-root css-w0pj6f"></span>
                    </button>
                </div>
              </div>
              <div class="MuiStack-root css-gojse6">
                <div class="MuiBox-root css-b1w3h1">
                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1pdoftr" focusable="false" aria-hidden="true" viewBox="0 0 21 19" xmlns="http://www.w3.org/2000/svg" aria-label="Wallet">
                      <g clip-path="url(#clip0_3719_3323)" stroke-width="2">
                          <path d="M17.3203 17.398H3.32031C2.78988 17.398 2.28117 17.1872 1.9061 16.8122C1.53103 16.4371 1.32031 15.9284 1.32031 15.3979V6.39795C1.32031 5.86752 1.53103 5.35881 1.9061 4.98374C2.28117 4.60866 2.78988 4.39795 3.32031 4.39795H17.3203C17.8507 4.39795 18.3595 4.60866 18.7345 4.98374C19.1096 5.35881 19.3203 5.86752 19.3203 6.39795V15.3979C19.3203 15.9284 19.1096 16.4371 18.7345 16.8122C18.3595 17.1872 17.8507 17.398 17.3203 17.398Z"></path>
                          <path d="M14.8203 11.3979C14.6877 11.3979 14.5605 11.3453 14.4668 11.2515C14.373 11.1577 14.3203 11.0306 14.3203 10.8979C14.3203 10.7653 14.373 10.6382 14.4668 10.5444C14.5605 10.4506 14.6877 10.3979 14.8203 10.3979C14.9529 10.3979 15.0801 10.4506 15.1739 10.5444C15.2676 10.6382 15.3203 10.7653 15.3203 10.8979C15.3203 11.0306 15.2676 11.1577 15.1739 11.2515C15.0801 11.3453 14.9529 11.3979 14.8203 11.3979Z" stroke-linecap="round" stroke-linejoin="round"></path>
                          <path d="M16.3203 4.39793V2.99993C16.3202 2.69343 16.2497 2.39106 16.1142 2.11615C15.9787 1.84124 15.7818 1.60116 15.5387 1.41444C15.2956 1.22773 15.0129 1.09937 14.7124 1.03929C14.4118 0.979209 14.1015 0.989009 13.8053 1.06793L2.80531 4.00093C2.37937 4.11444 2.00285 4.36549 1.7343 4.71506C1.46575 5.06462 1.32021 5.49312 1.32031 5.93393V6.39793"></path>
                      </g>
                      <defs>
                          <clipPath id="clip0_3719_3323">
                            <rect width="20" height="19" fill="white" transform="translate(0.320312)"></rect>
                          </clipPath>
                      </defs>
                    </svg>
                </div>
                <div class="MuiBox-root css-0">
                    <p class="MuiTypography-root MuiTypography-description css-1t8x1s2">Wallet balance</p>
                    <div class="MuiStack-root css-ct9q29">
                      <h4 class="MuiTypography-root MuiTypography-h4 MuiTypography-noWrap css-2ei3b3">0</h4>
                      <p class="MuiTypography-root MuiTypography-buttonL css-1suv5l">WETH</p>
                      <div class="MuiBox-root css-1isemmb"></div>
                    </div>
                </div>
              </div>
              <hr class="MuiDivider-root MuiDivider-fullWidth css-ocmf2r">
              <div class="MuiStack-root css-1hdbc19">
                <div class="MuiStack-root css-j7qwjs">
                    <div class="MuiBox-root css-70qvj9">
                      <p class="MuiTypography-root MuiTypography-description css-1nkijli">Available to supply</p>
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
                    <div class="MuiStack-root css-23jv9">
                      <div class="MuiBox-root css-0">
                          <div class="MuiStack-root css-ct9q29">
                            <h4 class="MuiTypography-root MuiTypography-h4 MuiTypography-noWrap css-2ei3b3">0</h4>
                            <p class="MuiTypography-root MuiTypography-buttonL css-1suv5l">WETH</p>
                          </div>
                          <p class="MuiTypography-root MuiTypography-subheader2 MuiTypography-noWrap css-1osjw6r"><span class="MuiTypography-root MuiTypography-subheader2 css-1fouq79">$</span>0</p>
                      </div>
                      <button class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation Mui-disabled MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation css-1no6dw" tabindex="-1" type="button">Supply</button>
                    </div>
                </div>
                <div class="MuiStack-root css-j7qwjs">
                    <div class="MuiBox-root css-70qvj9">
                      <p class="MuiTypography-root MuiTypography-description css-1nkijli">Available to borrow</p>
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
            <div class="MuiStack-root css-23jv9">
               <div class="MuiBox-root css-0">
                  <div class="MuiStack-root css-ct9q29">
                     <h4 class="MuiTypography-root MuiTypography-h4 MuiTypography-noWrap css-2ei3b3">0</h4>
                     <p class="MuiTypography-root MuiTypography-buttonL css-1suv5l">WETH</p>
                  </div>
                  <p class="MuiTypography-root MuiTypography-subheader2 MuiTypography-noWrap css-1osjw6r"><span class="MuiTypography-root MuiTypography-subheader2 css-1fouq79">$</span>0</p>
               </div>
               <button class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation Mui-disabled MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation css-1no6dw" tabindex="-1" type="button">Borrow</button>
            </div>
         </div>
         <div class="MuiStack-root css-1hdbc19">
            <div class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiAlert-root MuiAlert-colorInfo MuiAlert-standardInfo MuiAlert-standard css-1smjs47" role="alert">
               <div class="MuiAlert-message css-1xsto0d">Your Ethereum wallet is empty. Purchase or transfer assets.</div>
            </div>
         </div>
      </div>
          </div>
          <div v-if="toggle =='second'"  class="second-toggleMuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 css-yt1g49">
            <h3 class="MuiTypography-root MuiTypography-h3 css-tuyoad">Your info</h3>
            <div class="MuiBox-root css-0">
                <div role="group" class="MuiToggleButtonGroup-root css-b0xl2r">
                  <button @click="toggleSwitch('first')" :class="{ 'Mui-selected' : toggle =='first'}" class="MuiButtonBase-root MuiToggleButtonGroup-grouped MuiToggleButtonGroup-groupedHorizontal MuiToggleButton-root  MuiToggleButton-sizeMedium MuiToggleButton-primary MuiToggleButtonGroup-firstButton css-m2q0x7" tabindex="0" type="button" value="WETH" aria-pressed="true">
                      <p class="MuiTypography-root MuiTypography-buttonM css-1cwblkd">WETH</p>
                      <span class="MuiTouchRipple-root css-w0pj6f"></span>
                    </button>
                    <button  @click="toggleSwitch('second')" :class="{ 'Mui-selected' : toggle =='second'}" class="MuiButtonBase-root MuiToggleButtonGroup-grouped MuiToggleButtonGroup-groupedHorizontal MuiToggleButton-root MuiToggleButton-sizeMedium MuiToggleButton-primary MuiToggleButtonGroup-lastButton css-m2q0x7" tabindex="0" type="button" value="ETH" aria-pressed="false">
                      <p class="MuiTypography-root MuiTypography-buttonM css-1cwblkd">ETH</p>
                      <span class="MuiTouchRipple-root css-w0pj6f"></span>
                    </button>
                </div>
            </div>
            <div class="MuiStack-root css-gojse6">
                <div class="MuiBox-root css-b1w3h1">
                  <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1pdoftr" focusable="false" aria-hidden="true" viewBox="0 0 21 19" xmlns="http://www.w3.org/2000/svg" aria-label="Wallet">
                      <g clip-path="url(#clip0_3719_3323)" stroke-width="2">
                        <path d="M17.3203 17.398H3.32031C2.78988 17.398 2.28117 17.1872 1.9061 16.8122C1.53103 16.4371 1.32031 15.9284 1.32031 15.3979V6.39795C1.32031 5.86752 1.53103 5.35881 1.9061 4.98374C2.28117 4.60866 2.78988 4.39795 3.32031 4.39795H17.3203C17.8507 4.39795 18.3595 4.60866 18.7345 4.98374C19.1096 5.35881 19.3203 5.86752 19.3203 6.39795V15.3979C19.3203 15.9284 19.1096 16.4371 18.7345 16.8122C18.3595 17.1872 17.8507 17.398 17.3203 17.398Z"></path>
                        <path d="M14.8203 11.3979C14.6877 11.3979 14.5605 11.3453 14.4668 11.2515C14.373 11.1577 14.3203 11.0306 14.3203 10.8979C14.3203 10.7653 14.373 10.6382 14.4668 10.5444C14.5605 10.4506 14.6877 10.3979 14.8203 10.3979C14.9529 10.3979 15.0801 10.4506 15.1739 10.5444C15.2676 10.6382 15.3203 10.7653 15.3203 10.8979C15.3203 11.0306 15.2676 11.1577 15.1739 11.2515C15.0801 11.3453 14.9529 11.3979 14.8203 11.3979Z" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M16.3203 4.39793V2.99993C16.3202 2.69343 16.2497 2.39106 16.1142 2.11615C15.9787 1.84124 15.7818 1.60116 15.5387 1.41444C15.2956 1.22773 15.0129 1.09937 14.7124 1.03929C14.4118 0.979209 14.1015 0.989009 13.8053 1.06793L2.80531 4.00093C2.37937 4.11444 2.00285 4.36549 1.7343 4.71506C1.46575 5.06462 1.32021 5.49312 1.32031 5.93393V6.39793"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_3719_3323">
                            <rect width="20" height="19" fill="white" transform="translate(0.320312)"></rect>
                        </clipPath>
                      </defs>
                  </svg>
                </div>
                <div class="MuiBox-root css-0">
                  <p class="MuiTypography-root MuiTypography-description css-1t8x1s2">Wallet balance</p>
                  <div class="MuiStack-root css-ct9q29">
                      <h4 class="MuiTypography-root MuiTypography-h4 MuiTypography-noWrap css-2ei3b3">0</h4>
                      <p class="MuiTypography-root MuiTypography-buttonL css-1suv5l">ETH</p>
                      <div class="MuiBox-root css-1isemmb"></div>
                  </div>
                </div>
            </div>
            <hr class="MuiDivider-root MuiDivider-fullWidth css-ocmf2r">
            <div class="MuiStack-root css-1hdbc19">
                <div class="MuiStack-root css-j7qwjs">
                  <div class="MuiBox-root css-70qvj9">
                      <p class="MuiTypography-root MuiTypography-description css-1nkijli">Available to supply</p>
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
                  <div class="MuiStack-root css-23jv9">
                      <div class="MuiBox-root css-0">
                        <div class="MuiStack-root css-ct9q29">
                            <h4 class="MuiTypography-root MuiTypography-h4 MuiTypography-noWrap css-2ei3b3">0</h4>
                            <p class="MuiTypography-root MuiTypography-buttonL css-1suv5l">ETH</p>
                        </div>
                        <p class="MuiTypography-root MuiTypography-subheader2 MuiTypography-noWrap css-1osjw6r"><span class="MuiTypography-root MuiTypography-subheader2 css-1fouq79">$</span>0</p>
                      </div>
                      <button class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation Mui-disabled MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation css-1no6dw" tabindex="-1" type="button" disabled="" data-cy="supplyButton">Supply</button>
                  </div>
                </div>
                <div class="MuiStack-root css-j7qwjs">
                  <div class="MuiBox-root css-70qvj9">
                      <p class="MuiTypography-root MuiTypography-description css-1nkijli">Available to borrow</p>
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
                  <div class="MuiStack-root css-23jv9">
                      <div class="MuiBox-root css-0">
                        <div class="MuiStack-root css-ct9q29">
                            <h4 class="MuiTypography-root MuiTypography-h4 MuiTypography-noWrap css-2ei3b3">0</h4>
                            <p class="MuiTypography-root MuiTypography-buttonL css-1suv5l">ETH</p>
                        </div>
                        <p class="MuiTypography-root MuiTypography-subheader2 MuiTypography-noWrap css-1osjw6r"><span class="MuiTypography-root MuiTypography-subheader2 css-1fouq79">$</span>0</p>
                      </div>
                      <button class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation Mui-disabled MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation css-1no6dw" tabindex="-1" type="button" disabled="" data-cy="borrowButton">Borrow</button>
                  </div>
                </div>
                <div class="MuiStack-root css-1hdbc19">
                  <div class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiAlert-root MuiAlert-colorInfo MuiAlert-standardInfo MuiAlert-standard css-1smjs47" role="alert">
                      <div class="MuiAlert-message css-1xsto0d">Your Ethereum wallet is empty. Purchase or transfer assets.</div>
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
body { margin: 0px; color: rgb(241, 241, 243); background-color: rgb(27, 32, 48); }
@media print {
  body { background-color: rgb(255, 255, 255); }
}
body::backdrop { background-color: rgb(27, 32, 48); }
body { font-family: Inter, Arial; font-weight: 400; font-size: 0.875rem; min-width: 375px; }
body > div:first-of-type { min-height: 100vh; display: flex; flex-direction: column; }
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
.css-70qvj9 { display: flex; -moz-box-align: center; align-items: center; }
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
.css-l9yetb { display: flex; -moz-box-align: center; align-items: center; align-self: center; margin-bottom: 16px; min-height: 40px; flex-direction: row; }
.css-k10xi7 { min-width: 64px; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 500; line-height: 1.5rem; font-size: 0.875rem; padding: 6px 12px; color: rgb(255, 255, 255); border: 1px solid rgba(235, 235, 237, 0.12); background-color: rgb(56, 61, 81); margin-right: 12px; margin-bottom: 0px; }
.css-k10xi7:hover { text-decoration: none; background-color: rgba(241, 241, 243, 0.08); }
@media (hover: none) {
  .css-k10xi7:hover { background-color: transparent; }
}
.css-k10xi7.Mui-disabled { color: rgba(235, 235, 239, 0.3); }
.css-k10xi7:hover { box-shadow: none; }
.css-k10xi7.Mui-focusVisible { box-shadow: none; }
.css-k10xi7:active { box-shadow: none; }
.css-k10xi7.Mui-disabled { box-shadow: none; }
.css-k10xi7:hover, .css-k10xi7.Mui-focusVisible { background-color: rgb(27, 32, 48); }
.css-pvmlr { display: inline-flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; position: relative; box-sizing: border-box; outline: 0px; margin: 0px 12px 0px 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; text-decoration: none; min-width: 64px; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 500; line-height: 1.5rem; font-size: 0.875rem; padding: 6px 12px; color: rgb(255, 255, 255); border: 1px solid rgba(235, 235, 237, 0.12); background-color: rgb(56, 61, 81); }
.css-pvmlr::-moz-focus-inner { border-style: none; }
.css-pvmlr.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-pvmlr { print-color-adjust: exact; }
}
.css-pvmlr:hover { text-decoration: none; background-color: rgba(241, 241, 243, 0.08); }
@media (hover: none) {
  .css-pvmlr:hover { background-color: transparent; }
}
.css-pvmlr.Mui-disabled { color: rgba(235, 235, 239, 0.3); }
.css-pvmlr:hover { box-shadow: none; }
.css-pvmlr.Mui-focusVisible { box-shadow: none; }
.css-pvmlr:active { box-shadow: none; }
.css-pvmlr.Mui-disabled { box-shadow: none; }
.css-pvmlr:hover, .css-pvmlr.Mui-focusVisible { background-color: rgb(27, 32, 48); }
.css-1l6c7y9 { display: inherit; margin-right: 8px; margin-left: -4px; }
.css-1l6c7y9 > :nth-of-type(1) { font-size: 20px; }
.css-435pdq { margin-right: 8px; width: 20px; height: 20px; position: relative; }
.css-1ebotei { margin: 0px; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.009375rem; line-height: 1.25rem; font-size: 0.875rem; color: rgb(255, 255, 255); }
.css-wxyvle { color: rgb(255, 255, 255); padding-left: 8px; padding-right: 8px; margin-left: 8px; margin-right: 8px; border-radius: 12px; background: linear-gradient(248.86deg, rgb(182, 80, 158) 10.51%, rgb(46, 186, 198) 93.41%); }
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
.css-90g7yj { margin-right: 12px; display: flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; }
.css-1fn9tio { display: block; height: 1.2em; border-radius: 50%; animation: 2s ease-in-out 0.5s infinite animation-c7515d; transform: unset; background: rgb(56, 61, 81); }
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
.css-18biwo { display: inline-flex; -moz-box-align: center; align-items: center; }
.css-1t8x1s2 { margin: 0px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 143%; font-size: 0.875rem; color: rgb(165, 168, 182); }
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
.css-x3zkb6 { margin: 4px 0px; flex-shrink: 0; border-width: 0px thin 0px 0px; border-style: solid; height: auto; align-self: stretch; border-color: rgba(235, 235, 239, 0.08); }
.css-1x4zjhu { margin: 0px; font-family: Inter, Arial; font-weight: 800; line-height: 133.4%; font-size: 1.3125rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; display: inline-flex; flex-direction: row; -moz-box-align: center; align-items: center; position: relative; }
.css-vj5di1 { margin: 0px 2px 0px 0px; font-family: Inter, Arial; font-weight: 500; line-height: 133.4%; font-size: 1.3125rem; color: rgb(165, 168, 182); }
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
@media (min-width: 0px) {
  .css-duo07e { display: flex; -moz-box-pack: center; justify-content: center; margin-bottom: 12px; }
}
@media (min-width: 640px) {
  .css-duo07e { -moz-box-pack: start; justify-content: flex-start; margin-bottom: 16px; }
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
.css-k008qs { display: flex; }
@media (min-width: 0px) {
  .css-14g9wgc { display: block; width: 100%; margin-right: 0px; }
}
@media (min-width: 1280px) {
  .css-14g9wgc { display: block; width: calc(100% - 432px); margin-right: 16px; }
}
.css-48h151 { background-color: rgb(41, 46, 65); color: rgb(241, 241, 243); transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1); border-radius: 4px; box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 1px, rgba(0, 0, 0, 0.25) 0px 0px 1px; background-image: none; padding: 16px 24px 80px; }
.css-1xdb5ir { display: flex; -moz-box-align: center; align-items: center; gap: 24px; flex-wrap: wrap; margin-bottom: 36px; }
.css-2jc8ge { margin: 0px; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.009375rem; line-height: 160%; font-size: 1.125rem; }
@media (min-width: 0px) {
  .css-1osbn5p { display: none; width: 100%; }
}
@media (min-width: 1280px) {
  .css-1osbn5p { display: block; width: 416px; }
}
.css-yt1g49 { background-color: rgb(41, 46, 65); color: rgb(241, 241, 243); transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1); border-radius: 4px; box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 1px, rgba(0, 0, 0, 0.25) 0px 0px 1px; background-image: none; padding-top: 16px; }
@media (min-width: 0px) {
  .css-yt1g49 { padding-bottom: 16px; padding-left: 16px; padding-right: 16px; }
}
@media (min-width: 640px) {
  .css-yt1g49 { padding-bottom: 24px; padding-left: 24px; padding-right: 24px; }
}
.css-tuyoad { margin: 0px 0px 24px; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.009375rem; line-height: 160%; font-size: 1.125rem; }
.css-gojse6 { display: flex; flex-direction: row; gap: 12px; }
.css-14ukr51 { display: block; background-color: rgba(241, 241, 243, 0.13); height: auto; margin-top: 0px; margin-bottom: 0px; transform-origin: 0px 55% 0px; animation: 2s ease-in-out 0.5s infinite animation-c7515d; transform: unset; border-radius: 12px; }
.css-14ukr51:empty::before { content: " "; }
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
.css-16fi75 { display: block; background-color: rgba(241, 241, 243, 0.13); height: auto; transform-origin: 0px 55% 0px; border-radius: 4px / 6.7px; animation: 2s ease-in-out 0.5s infinite animation-c7515d; transform: unset; margin-top: 4px; margin-bottom: 8px; }
.css-16fi75:empty::before { content: " "; }
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
.css-ocmf2r { margin: 24px 0px; flex-shrink: 0; border-width: 0px 0px thin; border-style: solid; border-color: rgba(235, 235, 239, 0.08); }
.css-1hdbc19 { display: flex; flex-direction: column; gap: 12px; }
.css-23jv9 { display: flex; flex-direction: row; -moz-box-pack: justify; justify-content: space-between; -moz-box-align: center; align-items: center; height: 44px; }
.css-oickpl { position: relative; margin: 0px auto; }
@media (min-width: 0px) {
  .css-oickpl { display: block; }
}
@media (min-width: 960px) {
  .css-oickpl { display: flex; }
}
.css-ei9oq1 { margin: 0px 16px 0px 0px; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.009375rem; line-height: 1.25rem; font-size: 0.875rem; }
@media (min-width: 0px) {
  .css-ei9oq1 { min-width: 170px; margin-bottom: 24px; }
}
@media (min-width: 960px) {
  .css-ei9oq1 { margin-bottom: 0px; }
}
.css-132zyz9 { margin: 0px 0px 0.35em; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 143%; font-size: 0.875rem; }
.css-1dtnjt5 { display: flex; -moz-box-align: center; align-items: center; flex-wrap: wrap; }
.css-1qafrbr { transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); border: 1px solid rgba(235, 235, 239, 0.08); color: rgb(234, 235, 239); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.02875rem; line-height: 1.25rem; text-transform: uppercase; font-size: 0.625rem; background: rgb(56, 61, 81); padding: 2px 4px; margin-top: 8px; margin-right: 8px; min-width: 0px; }
.css-1qafrbr:hover { text-decoration: none; background-color: rgba(234, 235, 239, 0.08); border: 1px solid rgb(234, 235, 239); }
@media (hover: none) {
  .css-1qafrbr:hover { background-color: transparent; }
}
.css-1qafrbr.Mui-disabled { color: rgba(235, 235, 239, 0.3); border: 1px solid rgba(235, 235, 239, 0.12); }
.css-1qafrbr:hover { box-shadow: none; }
.css-1qafrbr.Mui-focusVisible { box-shadow: none; }
.css-1qafrbr:active { box-shadow: none; }
.css-1qafrbr.Mui-disabled { box-shadow: none; }
.css-d0o01l { display: inline-flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; position: relative; box-sizing: border-box; outline: 0px; margin: 8px 8px 0px 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; text-decoration: none; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); border: 1px solid rgba(235, 235, 239, 0.08); color: rgb(234, 235, 239); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.02875rem; line-height: 1.25rem; text-transform: uppercase; font-size: 0.625rem; background: rgb(56, 61, 81); padding: 2px 4px; min-width: 0px; }
.css-d0o01l::-moz-focus-inner { border-style: none; }
.css-d0o01l.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-d0o01l { print-color-adjust: exact; }
}
.css-d0o01l:hover { text-decoration: none; background-color: rgba(234, 235, 239, 0.08); border: 1px solid rgb(234, 235, 239); }
@media (hover: none) {
  .css-d0o01l:hover { background-color: transparent; }
}
.css-d0o01l.Mui-disabled { color: rgba(235, 235, 239, 0.3); border: 1px solid rgba(235, 235, 239, 0.12); }
.css-d0o01l:hover { box-shadow: none; }
.css-d0o01l.Mui-focusVisible { box-shadow: none; }
.css-d0o01l:active { box-shadow: none; }
.css-d0o01l.Mui-disabled { box-shadow: none; }
.css-uhsboa { display: inline-flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; position: relative; box-sizing: border-box; outline: 0px; margin: 8px 8px 0px 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; text-decoration: none; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); border: 1px solid rgba(235, 235, 239, 0.08); color: rgb(234, 235, 239); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.02875rem; line-height: 1.25rem; text-transform: uppercase; font-size: 0.625rem; background: rgb(56, 61, 81); padding: 2px 4px; min-width: 0px; }
.css-uhsboa::-moz-focus-inner { border-style: none; }
.css-uhsboa.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-uhsboa { print-color-adjust: exact; }
}
.css-uhsboa:hover { text-decoration: none; background-color: rgba(234, 235, 239, 0.08); border: 1px solid rgb(234, 235, 239); }
@media (hover: none) {
  .css-uhsboa:hover { background-color: transparent; }
}
.css-uhsboa.Mui-disabled { color: rgba(235, 235, 239, 0.3); border: 1px solid rgba(235, 235, 239, 0.12); }
.css-uhsboa:hover { box-shadow: none; }
.css-uhsboa.Mui-focusVisible { box-shadow: none; }
.css-uhsboa:active { box-shadow: none; }
.css-uhsboa.Mui-disabled { box-shadow: none; }
.css-1b8xk8p { display: inline-flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; position: relative; box-sizing: border-box; outline: 0px; margin: 8px 8px 0px 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; text-decoration: none; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); border: 1px solid rgba(235, 235, 239, 0.08); color: rgb(234, 235, 239); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.02875rem; line-height: 1.25rem; text-transform: uppercase; font-size: 0.625rem; background: rgb(56, 61, 81); padding: 2px 4px; min-width: 0px; }
.css-1b8xk8p::-moz-focus-inner { border-style: none; }
.css-1b8xk8p.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-1b8xk8p { print-color-adjust: exact; }
}
.css-1b8xk8p:hover { text-decoration: none; background-color: rgba(234, 235, 239, 0.08); border: 1px solid rgb(234, 235, 239); }
@media (hover: none) {
  .css-1b8xk8p:hover { background-color: transparent; }
}
.css-1b8xk8p.Mui-disabled { color: rgba(235, 235, 239, 0.3); border: 1px solid rgba(235, 235, 239, 0.12); }
.css-1b8xk8p:hover { box-shadow: none; }
.css-1b8xk8p.Mui-focusVisible { box-shadow: none; }
.css-1b8xk8p:active { box-shadow: none; }
.css-1b8xk8p.Mui-disabled { box-shadow: none; }
.css-8bhn0 { margin: 0px 4px 0px 0px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 143%; font-size: 10px; }
.css-o9s1zr { user-select: none; width: 1em; height: 1em; display: inline-block; fill: currentcolor; flex-shrink: 0; transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1); font-size: 14px; }
.css-1r56f2y { margin: 0px; flex-shrink: 0; border-width: 0px 0px thin; border-style: solid; border-color: rgba(235, 235, 239, 0.08); }
@media (min-width: 0px) {
  .css-1r56f2y { margin-top: 24px; margin-bottom: 24px; }
}
@media (min-width: 760px) {
  .css-1r56f2y { margin-top: 40px; margin-bottom: 40px; }
}
.css-15z9wyn { -moz-box-flex: 1; flex-grow: 1; min-width: 0px; max-width: 100%; width: 100%; }
.css-1xhj18k { display: flex; flex-direction: row; }
.css-dvot97 { position: relative; margin-right: 16px; }
.css-yv5wnn { display: inline-block; transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1); color: rgb(66, 66, 66); position: absolute; left: 1.25px; top: 1.25px; }
.css-13o7eu2 { display: block; }
.css-nbfpn7 { stroke: currentcolor; transition: stroke-dashoffset 300ms cubic-bezier(0.4, 0, 0.2, 1); }
.css-7qyd78 { display: inline-block; transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1); color: rgb(255, 167, 38); }
.css-7qyd78 .MuiCircularProgress-circle { stroke-linecap: round; }
.css-r4spco { margin: 0px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1.25rem; font-size: 0.875rem; position: absolute; inset: 0px; display: flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; }
.css-ov2ylm { position: relative; }
.css-ov2ylm:not(:last-child) { padding-right: 16px; margin-right: 16px; }
.css-ov2ylm:not(:last-child):not(.borderless)::after { content: ""; height: 32px; position: absolute; right: 4px; top: calc(50% - 17px); border-right: 1px solid rgba(235, 235, 239, 0.08); }
.css-dtnerw { display: flex; flex-direction: column; align-items: flex-start; -moz-box-pack: end; justify-content: flex-end; flex: 1 1 0%; overflow: hidden; padding-top: 4px; padding-bottom: 4px; }
.css-1ogi1pb { margin: 0px; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.009375rem; line-height: 1.5rem; font-size: 1rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; display: inline-flex; flex-direction: row; -moz-box-align: center; align-items: center; position: relative; }
.css-dyg06u { margin: 0px 4px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1.5rem; font-size: 1rem; color: rgb(241, 241, 243); display: inline-block; }
.css-1xwiwhj { display: inline-flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; }
@media (min-width: 0px) {
  .css-1xwiwhj { padding: 0px; }
}
@media (min-width: 640px) {
  .css-1xwiwhj { padding: 3.625px 0px; }
}
.css-cyw6g5 { margin: 0px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.00625rem; line-height: 1rem; font-size: 0.75rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: rgb(165, 168, 182); display: inline-flex; flex-direction: row; -moz-box-align: center; align-items: center; position: relative; }
.css-1x1c6wp { margin: 0px 2px 0px 0px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.00625rem; line-height: 1rem; font-size: 0.75rem; color: rgb(165, 168, 182); }
.css-g5g2u1 { margin: 0px 4px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.00625rem; line-height: 1rem; font-size: 0.75rem; color: rgb(165, 168, 182); display: inline-block; }
@media (min-width: 0px) {
  .css-ozoimy { margin-top: 24px; }
}
@media (min-width: 760px) {
  .css-ozoimy { margin-top: 0px; }
}
.css-2am8m { margin: 0px 0px 0px 2px; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.009375rem; line-height: 1.5rem; font-size: 1rem; color: rgb(165, 168, 182); }
.css-h5fkc8 { margin-top: 32px; }
.css-16hy5wk { margin: 0px 0px 0.35em; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.009375rem; line-height: 1.25rem; font-size: 0.875rem; }
.css-1pgimmy { margin: 0px 0px 24px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; color: rgb(165, 168, 182); }
.css-5kz7rn { display: flex; flex-direction: row; gap: 32px; }
.css-1spvj5p { flex-basis: 50%; }
.css-1o3exs0 { display: flex; flex-direction: column; position: relative; background: rgb(56, 61, 81); min-width: 306px; height: 320px; -moz-box-pack: justify; justify-content: space-between; -moz-box-align: center; align-items: center; border-radius: 8px; padding: 16px 24px; }
.css-r81tyl { display: flex; flex-direction: column; -moz-box-align: center; align-items: center; gap: 4px; position: absolute; top: 65px; }
.css-g77elk { margin: 0px; font-family: Inter, Arial; font-weight: 700; letter-spacing: 0.015625rem; line-height: 123.5%; font-size: 1.75rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; display: inline-flex; flex-direction: row; -moz-box-align: center; align-items: center; position: relative; }
.css-15nvsa3 { margin: 0px 0px 0px 2px; font-family: Inter, Arial; font-weight: 700; letter-spacing: 0.015625rem; line-height: 123.5%; font-size: 1.75rem; color: rgb(241, 241, 243); }
.css-kge0eu { width: 100%; overflow-x: auto; }
.css-7x70cm { display: table; width: 100%; border-collapse: collapse; border-spacing: 0px; }
.css-7x70cm caption { padding: 8px; color: rgb(165, 168, 182); text-align: left; caption-side: bottom; }
.css-1wbz3t9 { display: table-header-group; }
.css-ga7c9i { color: inherit; display: table-row; vertical-align: middle; outline: 0px; }
.css-ga7c9i.MuiTableRow-hover:hover { background-color: rgba(235, 235, 239, 0.08); }
.css-ga7c9i.Mui-selected { background-color: rgba(234, 235, 239, 0.16); }
.css-ga7c9i.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.24); }
.css-ga7c9i .MuiTableCell-root { padding-top: 8px; padding-bottom: 8px; line-height: 0; }
.css-1o8tax1 { display: table-cell; vertical-align: inherit; border-bottom: 1px solid rgba(235, 235, 239, 0.08); text-align: left; padding: 6px 16px 6px 0px; color: rgb(241, 241, 243); line-height: 1.5rem; font-weight: 500; border-color: rgba(235, 235, 239, 0.08); }
.css-1o8tax1.MuiTableCell-paddingCheckbox { width: 24px; padding: 0px 12px 0px 16px; }
.css-1o8tax1.MuiTableCell-paddingCheckbox > * { padding: 0px; }
.css-fjl3lu { margin: 0px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.025rem; line-height: 0.75rem; font-size: 0.625rem; }
.css-3wecnt { display: table-cell; vertical-align: inherit; border-bottom: 1px solid rgba(235, 235, 239, 0.08); text-align: right; padding: 6px 16px; color: rgb(241, 241, 243); line-height: 1.5rem; font-weight: 500; flex-direction: row-reverse; border-color: rgba(235, 235, 239, 0.08); }
.css-3wecnt.MuiTableCell-paddingCheckbox { width: 24px; padding: 0px 12px 0px 16px; }
.css-3wecnt.MuiTableCell-paddingCheckbox > * { padding: 0px; }
.css-1fonvkq { display: table-cell; vertical-align: inherit; border-bottom: 1px solid rgba(235, 235, 239, 0.08); text-align: right; padding: 6px 0px 6px 16px; color: rgb(241, 241, 243); line-height: 1.5rem; font-weight: 500; flex-direction: row-reverse; border-color: rgba(235, 235, 239, 0.08); }
.css-1fonvkq.MuiTableCell-paddingCheckbox { width: 24px; padding: 0px 12px 0px 16px; }
.css-1fonvkq.MuiTableCell-paddingCheckbox > * { padding: 0px; }
.css-1xnox0e { display: table-row-group; }
.css-d5epqi { color: inherit; display: table-row; vertical-align: middle; outline: 0px; padding-top: 32px; }
.css-d5epqi.MuiTableRow-hover:hover { background-color: rgba(235, 235, 239, 0.08); }
.css-d5epqi.Mui-selected { background-color: rgba(234, 235, 239, 0.16); }
.css-d5epqi.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.24); }
.css-d5epqi .MuiTableCell-root { border-bottom: medium; padding-top: 12px; padding-bottom: 8px; }
.css-1wmqnjy { display: table-cell; vertical-align: inherit; border-bottom: 1px solid rgba(235, 235, 239, 0.08); text-align: left; padding: 4px 16px 4px 0px; color: rgb(241, 241, 243); border-color: rgba(235, 235, 239, 0.08); }
.css-1wmqnjy.MuiTableCell-paddingCheckbox { width: 24px; padding: 0px 12px 0px 16px; }
.css-1wmqnjy.MuiTableCell-paddingCheckbox > * { padding: 0px; }
.css-ct9q29 { display: flex; flex-direction: row; -moz-box-align: center; align-items: center; gap: 4px; }
.css-1ranldi { background: rgb(201, 179, 249); width: 6px; height: 6px; border-radius: 50%; }
.css-afn0jl { display: table-cell; vertical-align: inherit; border-bottom: 1px solid rgba(235, 235, 239, 0.08); text-align: right; padding: 6px 16px; color: rgb(241, 241, 243); flex-direction: row-reverse; border-color: rgba(235, 235, 239, 0.08); }
.css-afn0jl.MuiTableCell-paddingCheckbox { width: 24px; padding: 0px 12px 0px 16px; }
.css-afn0jl.MuiTableCell-paddingCheckbox > * { padding: 0px; }
.css-15ov6up { margin: 0px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.00625rem; line-height: 1rem; font-size: 0.75rem; text-align: right; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; display: inline-flex; flex-direction: row; -moz-box-align: center; align-items: center; position: relative; }
.css-1w5doed { display: table-cell; vertical-align: inherit; border-bottom: 1px solid rgba(235, 235, 239, 0.08); text-align: right; padding: 6px 0px 6px 16px; color: rgb(241, 241, 243); flex-direction: row-reverse; border-color: rgba(235, 235, 239, 0.08); }
.css-1w5doed.MuiTableCell-paddingCheckbox { width: 24px; padding: 0px 12px 0px 16px; }
.css-1w5doed.MuiTableCell-paddingCheckbox > * { padding: 0px; }
.css-mnxqb1 { margin: 0px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.00625rem; line-height: 1rem; font-size: 0.75rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; display: inline-flex; flex-direction: row; -moz-box-align: center; align-items: center; position: relative; }
.css-1336sl3 { margin: 0px 0px 0px 2px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.00625rem; line-height: 1rem; font-size: 0.75rem; color: rgb(165, 168, 182); }
.css-knx2wi { color: inherit; display: table-row; vertical-align: middle; outline: 0px; }
.css-knx2wi.MuiTableRow-hover:hover { background-color: rgba(235, 235, 239, 0.08); }
.css-knx2wi.Mui-selected { background-color: rgba(234, 235, 239, 0.16); }
.css-knx2wi.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.24); }
.css-knx2wi .MuiTableCell-root { border-bottom: medium; }
.css-cni89x { display: table-cell; vertical-align: inherit; border-bottom: 1px solid rgba(235, 235, 239, 0.08); text-align: left; padding: 6px 16px 6px 0px; color: rgb(241, 241, 243); border-color: rgba(235, 235, 239, 0.08); }
.css-cni89x.MuiTableCell-paddingCheckbox { width: 24px; padding: 0px 12px 0px 16px; }
.css-cni89x.MuiTableCell-paddingCheckbox > * { padding: 0px; }
.css-1e2rh9o { background: rgb(179, 199, 249); width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; }
.css-198ug44 { display: flex; flex-direction: column; -moz-box-align: center; align-items: center; gap: 8px; flex-basis: 50%; }
.css-f6mhdk { width: 100%; margin-top: 16px; }
.css-79elbk { position: relative; }
.css-1t8bgeu { margin: 0px 0px 0.35em; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.00625rem; line-height: 1rem; font-size: 0.75rem; }
.css-da3vt5 { color: rgb(241, 241, 243); line-height: 1.4375em; box-sizing: border-box; cursor: text; display: inline-flex; -moz-box-align: center; align-items: center; width: 100%; position: relative; padding-right: 14px; border-radius: 6px; border-color: rgba(235, 235, 239, 0.08); }
.css-da3vt5.Mui-disabled { color: rgb(98, 103, 123); cursor: default; }
.css-da3vt5:hover .MuiOutlinedInput-notchedOutline { border-color: rgb(241, 241, 243); }
@media (hover: none) {
  .css-da3vt5:hover .MuiOutlinedInput-notchedOutline { border-color: rgba(255, 255, 255, 0.23); }
}
.css-da3vt5.Mui-focused .MuiOutlinedInput-notchedOutline { border-color: rgb(234, 235, 239); border-width: 2px; }
.css-da3vt5.Mui-error .MuiOutlinedInput-notchedOutline { border-color: rgb(244, 67, 54); }
.css-da3vt5.Mui-disabled .MuiOutlinedInput-notchedOutline { border-color: rgba(235, 235, 239, 0.3); }
.css-da3vt5:hover .MuiOutlinedInput-notchedOutline { border-color: rgb(203, 205, 216); }
.css-da3vt5.Mui-focused .MuiOutlinedInput-notchedOutline { border-color: rgb(203, 205, 216); }
.css-1nllntq { font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size-adjust: inherit; font-kerning: inherit; font-optical-sizing: inherit; font-language-override: inherit; font-feature-settings: inherit; font-variation-settings: inherit; letter-spacing: inherit; color: currentcolor; border: 0px; box-sizing: content-box; background: none; height: 1.4375em; margin: 0px; display: block; min-width: 0px; width: 100%; animation-name: mui-auto-fill-cancel; animation-duration: 10ms; padding: 8px 12px; font-size: 21px; }
.css-1nllntq::-webkit-input-placeholder { color: currentcolor; opacity: 0.5; transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1); }
.css-1nllntq::placeholder { color: currentcolor; opacity: 0.5; transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1); }
.css-1nllntq:focus { outline: 0px; }
.css-1nllntq:invalid { box-shadow: none; }
.css-1nllntq::-webkit-search-decoration { appearance: none; }
label[data-shrink="false"] + .MuiInputBase-formControl .css-1nllntq::-webkit-input-placeholder { opacity: 0 !important; }
label[data-shrink="false"] + .MuiInputBase-formControl .css-1nllntq::placeholder { opacity: 0 !important; }
label[data-shrink="false"] + .MuiInputBase-formControl .css-1nllntq:focus::-webkit-input-placeholder { opacity: 0.5; }
label[data-shrink="false"] + .MuiInputBase-formControl .css-1nllntq:focus::placeholder { opacity: 0.5; }
.css-1nllntq.Mui-disabled { opacity: 1; -webkit-text-fill-color: rgb(98, 103, 123); }
.css-1nllntq:autofill { animation-duration: 5000s; animation-name: mui-auto-fill; }
.css-1nllntq:autofill { box-shadow: rgb(38, 103, 152) 0px 0px 0px 100px inset; -webkit-text-fill-color: rgb(255, 255, 255); caret-color: rgb(255, 255, 255); border-radius: inherit; }
.css-x90exs { user-select: none; width: 1em; height: 1em; overflow: hidden; text-align: center; flex-shrink: 0; font-size: 1.5rem; display: flex; position: relative; border-radius: 50%; }
.css-7z4qiw { border-color: rgba(255, 255, 255, 0.23); }
.css-nqlg3w { text-align: left; position: absolute; inset: -5px 0px 0px; margin: 0px; padding: 0px 8px; pointer-events: none; border-radius: inherit; border-style: solid; border-width: 1px; overflow: hidden; min-width: 0%; border-color: rgba(255, 255, 255, 0.23); }
.css-ihdtdm { float: unset; width: auto; overflow: hidden; padding: 0px; line-height: 11px; transition: width 150ms cubic-bezier(0, 0, 0.2, 1); }
.css-gcd3fa { border-radius: 12px; box-sizing: content-box; display: inline-block; position: relative; cursor: pointer; touch-action: none; width: 100%; padding: 13px 0px; height: 2px; color: rgb(102, 154, 255); margin-bottom: 8px; }
@media print {
  .css-gcd3fa { print-color-adjust: exact; }
}
.css-gcd3fa.Mui-disabled { pointer-events: none; cursor: default; color: rgb(189, 189, 189); }
.css-gcd3fa.MuiSlider-dragging .MuiSlider-thumb, .css-gcd3fa.MuiSlider-dragging .MuiSlider-track { transition: none; }
@media (pointer: coarse) {
  .css-gcd3fa { padding: 20px 0px; }
}
.css-gcd3fa .MuiSlider-thumb { color: rgb(201, 179, 249); }
.css-gcd3fa .MuiSlider-track { color: rgb(156, 147, 179); }
.css-gcd3fa .MuiSlider-rail { color: rgb(98, 103, 123); }
.css-gcd3fa .MuiSlider-thumb { box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px, rgba(0, 0, 0, 0.12) 0px 1px 5px; }
.css-gcd3fa .MuiSlider-mark { display: none; }
.css-gcd3fa .MuiSlider-markLabel { top: 24px; font-size: 10px; color: rgb(165, 168, 182); }
.css-gcd3fa .MuiSlider-markLabel[data-index="1"] { transform: translateX(-100%); }
@media (pointer: coarse) {
  .css-gcd3fa .MuiSlider-markLabel { top: 30px; }
}
.css-3ndvyc { display: block; position: absolute; border-radius: inherit; background-color: currentcolor; opacity: 0.38; width: 100%; height: inherit; top: 50%; transform: translateY(-50%); }
.css-11ij3nk { display: block; position: absolute; border-radius: inherit; background-color: currentcolor; transition: left 150ms cubic-bezier(0.4, 0, 0.2, 1), width 150ms cubic-bezier(0.4, 0, 0.2, 1), bottom 150ms cubic-bezier(0.4, 0, 0.2, 1), height 150ms cubic-bezier(0.4, 0, 0.2, 1); border: medium; height: inherit; top: 50%; transform: translateY(-50%); }
.css-1bxflgu { position: absolute; width: 2px; height: 2px; border-radius: 1px; top: 50%; transform: translate(-1px, -50%); background-color: rgb(41, 46, 65); opacity: 0.8; }
.css-568rrp { position: absolute; white-space: nowrap; top: 30px; transform: translateX(-50%); color: rgb(241, 241, 243); }
@media (pointer: coarse) {
  .css-568rrp { top: 40px; }
}
.css-1l65e6z { position: absolute; width: 2px; height: 2px; border-radius: 1px; background-color: currentcolor; top: 50%; transform: translate(-1px, -50%); }
.css-1cqdod1 { color: rgb(165, 168, 182); position: absolute; white-space: nowrap; top: 30px; transform: translateX(-50%); }
@media (pointer: coarse) {
  .css-1cqdod1 { top: 40px; }
}
.css-17d1nkl { position: absolute; box-sizing: border-box; border-radius: 50%; outline: 0px; background-color: currentcolor; display: flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; transition: box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1), left 150ms cubic-bezier(0.4, 0, 0.2, 1), bottom 150ms cubic-bezier(0.4, 0, 0.2, 1); width: 12px; height: 12px; top: 50%; transform: translate(-50%, -50%); }
.css-17d1nkl::before { position: absolute; content: ""; border-radius: inherit; width: 100%; height: 100%; box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px; }
.css-17d1nkl::after { position: absolute; content: ""; border-radius: 50%; width: 42px; height: 42px; top: 50%; left: 50%; transform: translate(-50%, -50%); }
.css-17d1nkl.Mui-disabled:hover { box-shadow: none; }
.css-17d1nkl::before { box-shadow: none; }
.css-17d1nkl:hover, .css-17d1nkl.Mui-focusVisible { box-shadow: rgba(234, 235, 239, 0.16) 0px 0px 0px 8px; }
@media (hover: none) {
  .css-17d1nkl:hover, .css-17d1nkl.Mui-focusVisible { box-shadow: none; }
}
.css-17d1nkl.Mui-active { box-shadow: rgba(234, 235, 239, 0.16) 0px 0px 0px 14px; }
.css-jfwxvj { position: absolute; bottom: 25px; right: 0px; }
.css-1e2dcm1 { z-index: 1500; pointer-events: none; }
.css-okvapm { z-index: 1500; pointer-events: none; }
.css-8atqhb { width: 100%; }
.css-z0hss5 { display: flex; box-shadow: none; border-radius: 4px; padding: 8px 12px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; align-items: flex-start; color: rgb(169, 226, 251); background: rgb(56, 61, 81); visibility: visible; }
.css-z0hss5 .MuiAlert-icon { color: rgb(41, 182, 246); }
.css-z0hss5 .MuiAlert-message { padding: 2px 0px; }
.css-z0hss5 .MuiAlert-icon { padding: 0px; opacity: 1; }
.css-z0hss5 .MuiAlert-icon .MuiSvgIcon-root { font-size: 1.25rem; }
.css-z0hss5 a { font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; text-decoration: underline; }
.css-z0hss5 a:hover { text-decoration: none; }
.css-z0hss5 .MuiButton-text { font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; text-decoration: underline; padding: 0px; margin: 0px; min-width: unset; }
.css-z0hss5 .MuiButton-text:hover { text-decoration: none; background: transparent; }
.css-z0hss5 a { color: rgb(169, 226, 251); }
.css-z0hss5 .MuiButton-text { color: rgb(169, 226, 251); }
.css-1lm7234 { transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1); display: flex; box-shadow: none; border-radius: 4px; padding: 8px 12px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; align-items: flex-start; color: rgb(169, 226, 251); background: rgb(56, 61, 81); visibility: visible; }
.css-1lm7234 .MuiAlert-icon { color: rgb(41, 182, 246); }
.css-1lm7234 .MuiAlert-message { padding: 2px 0px; }
.css-1lm7234 .MuiAlert-icon { padding: 0px; opacity: 1; }
.css-1lm7234 .MuiAlert-icon .MuiSvgIcon-root { font-size: 1.25rem; }
.css-1lm7234 a { font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; text-decoration: underline; }
.css-1lm7234 a:hover { text-decoration: none; }
.css-1lm7234 .MuiButton-text { font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; text-decoration: underline; padding: 0px; margin: 0px; min-width: unset; }
.css-1lm7234 .MuiButton-text:hover { text-decoration: none; background: transparent; }
.css-1lm7234 a { color: rgb(169, 226, 251); }
.css-1lm7234 .MuiButton-text { color: rgb(169, 226, 251); }
.css-1l54tgj { margin-right: 12px; padding: 7px 0px; display: flex; font-size: 22px; opacity: 0.9; }
.css-6e6aj9 { user-select: none; width: 1em; height: 1em; display: inline-block; fill: currentcolor; flex-shrink: 0; transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1); font-size: 1.5rem; color: rgb(234, 235, 239); }
.css-1xsto0d { padding: 8px 0px; min-width: 0px; overflow: auto; }
.css-1fzsl0k { margin: 0px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; color: rgb(165, 168, 182); }
.css-19bb5k1 { margin: 0px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.00625rem; line-height: 1rem; font-size: 0.75rem; color: rgb(201, 179, 249); }
.css-19bb5k1:hover { text-decoration: underline; cursor: pointer; }
.css-19bb5k1:hover .MuiTypography-root { text-decoration: underline; }
.css-r7wym0 { user-select: none; width: 1em; height: 1em; display: inline-block; fill: currentcolor; flex-shrink: 0; transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1); font-size: 14px; vertical-align: middle; margin-bottom: 3px; }
.css-y1gt6f { margin-top: 40px; }
.css-1d39wwj { display: flex; flex-wrap: wrap; padding-top: 12px; column-gap: 10px; }
.css-1o42vu5 { border-radius: 6px; border: 1px solid rgba(235, 235, 239, 0.08); flex: 0 1 32%; margin-bottom: 2%; max-width: 32%; }
.css-1ucx9m3 { display: flex; flex-direction: column; height: 100%; justify-content: space-around; padding: 8px; }
.css-1ma60wi { margin: 0px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1.25rem; font-size: 0.875rem; color: rgb(165, 168, 182); }
.css-ojt0hn { margin: 0px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1.25rem; font-size: 0.875rem; display: flex; -moz-box-align: center; align-items: center; }
.css-zvdqz5 { user-select: none; width: 1em; height: 1em; overflow: hidden; text-align: center; flex-shrink: 0; display: flex; position: relative; border-radius: 50%; font-size: 14px; margin-right: 4px; }
.css-a7753a { margin: 0px 4px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1.25rem; font-size: 0.875rem; color: rgb(241, 241, 243); }
.css-1sdzf35 { margin: 0px 4px 0px 0px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1.25rem; font-size: 0.875rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: rgb(241, 241, 243); display: inline-flex; flex-direction: row; -moz-box-align: center; align-items: center; position: relative; }
.css-d8aql2 { margin: 0px 0px 0px 2px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1.25rem; font-size: 0.875rem; color: rgb(165, 168, 182); }
.css-16v0rd7 { margin: 0px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1.25rem; font-size: 0.875rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: rgb(241, 241, 243); display: inline-flex; flex-direction: row; -moz-box-align: center; align-items: center; position: relative; }
.css-u4p24i { display: flex; flex-direction: row; -moz-box-align: center; align-items: center; }
.css-1mvkkzi { color: rgb(165, 168, 182); text-decoration: underline; }
.css-3p3htd { margin: 0px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; color: rgb(165, 168, 182); text-decoration: underline; }
.css-qxq0hv { display: flex; box-shadow: none; border-radius: 4px; padding: 8px 12px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; align-items: flex-start; color: rgb(169, 226, 251); background: rgb(56, 61, 81); visibility: hidden; }
.css-qxq0hv .MuiAlert-icon { color: rgb(41, 182, 246); }
.css-qxq0hv .MuiAlert-message { padding: 2px 0px; }
.css-qxq0hv .MuiAlert-icon { padding: 0px; opacity: 1; }
.css-qxq0hv .MuiAlert-icon .MuiSvgIcon-root { font-size: 1.25rem; }
.css-qxq0hv a { font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; text-decoration: underline; }
.css-qxq0hv a:hover { text-decoration: none; }
.css-qxq0hv .MuiButton-text { font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; text-decoration: underline; padding: 0px; margin: 0px; min-width: unset; }
.css-qxq0hv .MuiButton-text:hover { text-decoration: none; background: transparent; }
.css-qxq0hv a { color: rgb(169, 226, 251); }
.css-qxq0hv .MuiButton-text { color: rgb(169, 226, 251); }
.css-1xwjl59 { transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1); display: flex; box-shadow: none; border-radius: 4px; padding: 8px 12px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; align-items: flex-start; color: rgb(169, 226, 251); background: rgb(56, 61, 81); visibility: hidden; }
.css-1xwjl59 .MuiAlert-icon { color: rgb(41, 182, 246); }
.css-1xwjl59 .MuiAlert-message { padding: 2px 0px; }
.css-1xwjl59 .MuiAlert-icon { padding: 0px; opacity: 1; }
.css-1xwjl59 .MuiAlert-icon .MuiSvgIcon-root { font-size: 1.25rem; }
.css-1xwjl59 a { font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; text-decoration: underline; }
.css-1xwjl59 a:hover { text-decoration: none; }
.css-1xwjl59 .MuiButton-text { font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; text-decoration: underline; padding: 0px; margin: 0px; min-width: unset; }
.css-1xwjl59 .MuiButton-text:hover { text-decoration: none; background: transparent; }
.css-1xwjl59 a { color: rgb(169, 226, 251); }
.css-1xwjl59 .MuiButton-text { color: rgb(169, 226, 251); }
.css-6zxo4b { user-select: none; display: inline-block; fill: currentcolor; flex-shrink: 0; transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1); font-size: 1.5rem; color: rgb(255, 167, 38); width: 15px; height: 15px; border-radius: 50%; background: rgb(56, 61, 81); }
.css-fny9iu { margin: 0px; font-family: Inter, Arial; font-weight: 800; line-height: 133.4%; font-size: 1.3125rem; }
.css-u6v8er { display: flex; flex-direction: column; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; }
.css-x2v3lb { background-color: rgb(56, 61, 81); width: 24px; height: 24px; border-radius: 50%; display: flex; -moz-box-pack: center; justify-content: center; margin-left: 8px; border: 0.5px solid rgba(235, 235, 237, 0.12); }
.css-1gfod4y { display: inline-flex; -moz-box-align: center; align-items: center; color: rgb(165, 168, 182); cursor: pointer; }
.css-1gfod4y:hover { color: rgb(241, 241, 243); }
.css-1ay71cc { display: inline-flex; -moz-box-align: center; align-items: center; cursor: pointer; }
.css-1ay71cc:hover .Wallet__icon { opacity: 0 !important; }
.css-1ay71cc:hover .Wallet__iconHover { opacity: 1 !important; }
.css-1oub2s6 { user-select: none; display: inline-block; flex-shrink: 0; transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1); font-size: 1.5rem; fill: none; stroke: rgb(165, 168, 182); width: 14px; height: 14px; }
.css-1oub2s6:hover { stroke: rgb(241, 241, 243); }
.css-b1w3h1 { width: 42px; height: 42px; background: rgb(56, 61, 81); border: 0.5px solid rgba(235, 235, 239, 0.08); border-radius: 12px; display: flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; }
.css-1pdoftr { user-select: none; width: 1em; height: 1em; display: inline-block; flex-shrink: 0; transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1); font-size: 1.5rem; fill: none; stroke: rgb(165, 168, 182); }
.css-2ei3b3 { margin: 0px; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.009375rem; line-height: 1.5rem; font-size: 1rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: rgb(241, 241, 243); display: inline-flex; flex-direction: row; -moz-box-align: center; align-items: center; position: relative; }
.css-1suv5l { margin: 0px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.02875rem; line-height: 1.5rem; font-size: 1rem; color: rgb(165, 168, 182); }
.css-1isemmb { margin-left: 8px; }
.css-1osjw6r { margin: 0px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.00625rem; line-height: 1rem; font-size: 0.75rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: rgb(142, 146, 163); display: inline-flex; flex-direction: row; -moz-box-align: center; align-items: center; position: relative; }
.css-1fouq79 { margin: 0px 2px 0px 0px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.00625rem; line-height: 1rem; font-size: 0.75rem; color: rgb(142, 146, 163); }
.css-i1r5tf { min-width: 64px; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); color: rgba(0, 0, 0, 0.87); background-color: rgb(234, 235, 239); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 500; line-height: 1.5rem; font-size: 0.875rem; padding: 6px 12px; height: 36px; width: 96px; }
.css-i1r5tf:hover { text-decoration: none; background-color: rgb(210, 212, 220); box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px; }
@media (hover: none) {
  .css-i1r5tf:hover { background-color: rgb(234, 235, 239); }
}
.css-i1r5tf:active { box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px; }
.css-i1r5tf.Mui-focusVisible { box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px; }
.css-i1r5tf.Mui-disabled { color: rgba(235, 235, 239, 0.3); box-shadow: none; background-color: rgba(235, 235, 239, 0.12); }
.css-i1r5tf:hover { box-shadow: none; }
.css-i1r5tf.Mui-focusVisible { box-shadow: none; }
.css-i1r5tf:active { box-shadow: none; }
.css-i1r5tf.Mui-disabled { box-shadow: none; }
.css-1no6dw { display: inline-flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; position: relative; box-sizing: border-box; outline: 0px; border: 0px; margin: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; text-decoration: none; min-width: 64px; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); color: rgba(0, 0, 0, 0.87); background-color: rgb(234, 235, 239); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 500; line-height: 1.5rem; font-size: 0.875rem; padding: 6px 12px; height: 36px; width: 96px; }
.css-1no6dw::-moz-focus-inner { border-style: none; }
.css-1no6dw.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-1no6dw { print-color-adjust: exact; }
}
.css-1no6dw:hover { text-decoration: none; background-color: rgb(210, 212, 220); box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px; }
@media (hover: none) {
  .css-1no6dw:hover { background-color: rgb(234, 235, 239); }
}
.css-1no6dw:active { box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px; }
.css-1no6dw.Mui-focusVisible { box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px; }
.css-1no6dw.Mui-disabled { color: rgba(235, 235, 239, 0.3); box-shadow: none; background-color: rgba(235, 235, 239, 0.12); }
.css-1no6dw:hover { box-shadow: none; }
.css-1no6dw.Mui-focusVisible { box-shadow: none; }
.css-1no6dw:active { box-shadow: none; }
.css-1no6dw.Mui-disabled { box-shadow: none; }
.css-9rqz0j { display: flex; box-shadow: none; border-radius: 4px; padding: 8px 12px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; color: rgb(169, 226, 251); background: rgb(7, 31, 46); margin-bottom: 0px; -moz-box-align: center; align-items: center; width: 100%; }
.css-9rqz0j .MuiAlert-icon { color: rgb(41, 182, 246); }
.css-9rqz0j .MuiAlert-message { padding: 2px 0px; }
.css-9rqz0j .MuiAlert-icon { padding: 0px; opacity: 1; }
.css-9rqz0j .MuiAlert-icon .MuiSvgIcon-root { font-size: 1.25rem; }
.css-9rqz0j a { font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; text-decoration: underline; }
.css-9rqz0j a:hover { text-decoration: none; }
.css-9rqz0j .MuiButton-text { font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; text-decoration: underline; padding: 0px; margin: 0px; min-width: unset; }
.css-9rqz0j .MuiButton-text:hover { text-decoration: none; background: transparent; }
.css-9rqz0j a { color: rgb(169, 226, 251); }
.css-9rqz0j .MuiButton-text { color: rgb(169, 226, 251); }
.css-1smjs47 { transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1); display: flex; box-shadow: none; border-radius: 4px; padding: 8px 12px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; color: rgb(169, 226, 251); background: rgb(7, 31, 46); margin-bottom: 0px; -moz-box-align: center; align-items: center; width: 100%; }
.css-1smjs47 .MuiAlert-icon { color: rgb(41, 182, 246); }
.css-1smjs47 .MuiAlert-message { padding: 2px 0px; }
.css-1smjs47 .MuiAlert-icon { padding: 0px; opacity: 1; }
.css-1smjs47 .MuiAlert-icon .MuiSvgIcon-root { font-size: 1.25rem; }
.css-1smjs47 a { font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; text-decoration: underline; }
.css-1smjs47 a:hover { text-decoration: none; }
.css-1smjs47 .MuiButton-text { font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; text-decoration: underline; padding: 0px; margin: 0px; min-width: unset; }
.css-1smjs47 .MuiButton-text:hover { text-decoration: none; background: transparent; }
.css-1smjs47 a { color: rgb(169, 226, 251); }
.css-1smjs47 .MuiButton-text { color: rgb(169, 226, 251); }
.css-1rcyqho { display: flex; box-shadow: none; border-radius: 4px; padding: 8px 12px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; color: rgb(255, 220, 168); background: rgb(48, 30, 4); margin-bottom: 0px; -moz-box-align: center; align-items: center; width: 100%; }
.css-1rcyqho .MuiAlert-icon { color: rgb(255, 167, 38); }
.css-1rcyqho .MuiAlert-message { padding: 2px 0px; }
.css-1rcyqho .MuiAlert-icon { padding: 0px; opacity: 1; }
.css-1rcyqho .MuiAlert-icon .MuiSvgIcon-root { font-size: 1.25rem; }
.css-1rcyqho a { font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; text-decoration: underline; }
.css-1rcyqho a:hover { text-decoration: none; }
.css-1rcyqho .MuiButton-text { font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; text-decoration: underline; padding: 0px; margin: 0px; min-width: unset; }
.css-1rcyqho .MuiButton-text:hover { text-decoration: none; background: transparent; }
.css-1rcyqho a { color: rgb(255, 220, 168); }
.css-1rcyqho .MuiButton-text { color: rgb(255, 220, 168); }
.css-1gxw2ay { transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1); display: flex; box-shadow: none; border-radius: 4px; padding: 8px 12px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; color: rgb(255, 220, 168); background: rgb(48, 30, 4); margin-bottom: 0px; -moz-box-align: center; align-items: center; width: 100%; }
.css-1gxw2ay .MuiAlert-icon { color: rgb(255, 167, 38); }
.css-1gxw2ay .MuiAlert-message { padding: 2px 0px; }
.css-1gxw2ay .MuiAlert-icon { padding: 0px; opacity: 1; }
.css-1gxw2ay .MuiAlert-icon .MuiSvgIcon-root { font-size: 1.25rem; }
.css-1gxw2ay a { font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; text-decoration: underline; }
.css-1gxw2ay a:hover { text-decoration: none; }
.css-1gxw2ay .MuiButton-text { font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; text-decoration: underline; padding: 0px; margin: 0px; min-width: unset; }
.css-1gxw2ay .MuiButton-text:hover { text-decoration: none; background: transparent; }
.css-1gxw2ay a { color: rgb(255, 220, 168); }
.css-1gxw2ay .MuiButton-text { color: rgb(255, 220, 168); }
.css-1xo217d { text-decoration: underline rgba(234, 235, 239, 0.4); }
.css-1xo217d:hover { text-decoration-color: inherit; }
.css-1oz80w { margin: 0px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 143%; font-size: 0.875rem; color: rgb(234, 235, 239); text-decoration: underline rgba(234, 235, 239, 0.4); }
.css-1oz80w:hover { text-decoration-color: inherit; }
.css-1jox83z { padding: 12px 16px 8px; }
.css-kna281 { user-select: none; width: 1em; height: 1em; overflow: hidden; text-align: center; flex-shrink: 0; display: flex; position: relative; border-radius: 50%; font-size: 20px; }
.css-mgqwsh { margin: 0px 0px 0px 12px; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.009375rem; line-height: 1.25rem; font-size: 0.875rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.css-1sucic7 { position: fixed; z-index: 1300; inset: 0px; }
.css-1s1tecw { margin: 0px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.00625rem; line-height: 1rem; font-size: 0.75rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; display: inline-flex; flex-direction: row; -moz-box-align: center; align-items: center; position: relative; }
.css-1s1tecw .MuiTypography-root { margin-left: 0px; }
.css-zkad9j { margin: 0px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; display: inline-flex; flex-direction: row; -moz-box-align: center; align-items: center; position: relative; }
.css-zkad9j .MuiTypography-root { margin-left: 0px; }
.css-g4z180 { margin: 0px 0px 0px 2px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; color: rgb(165, 168, 182); }
.css-1g4gn1i { z-index: 1500; pointer-events: auto; }
.css-naz7mp { z-index: 1500; pointer-events: auto; }
.css-1uy041r { border-radius: 4px; color: rgb(255, 255, 255); font-family: Inter, Arial; padding: 4px 8px; font-size: 0.6875rem; max-width: 300px; margin: 2px; overflow-wrap: break-word; font-weight: 500; background-color: rgba(15, 18, 29, 0.8); }
.MuiTooltip-popper[data-popper-placement*="left"] .css-1uy041r { transform-origin: right center 0px; margin-right: 14px; }
.MuiTooltip-popper[data-popper-placement*="right"] .css-1uy041r { transform-origin: left center 0px; margin-left: 14px; }
.MuiTooltip-popper[data-popper-placement*="top"] .css-1uy041r { transform-origin: center bottom 0px; margin-bottom: 14px; }
.MuiTooltip-popper[data-popper-placement*="bottom"] .css-1uy041r { transform-origin: center top 0px; margin-top: 14px; }
.css-1uy041r .MuiTooltip-arrow { color: rgba(15, 18, 29, 0.8); }
.css-1cl78xe { display: flex; flex-direction: column; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; white-space: nowrap; }
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
.css-hjllk8 { margin-right: 8px; width: 32px; height: 32px; position: relative; }
.css-15vg6gj { margin: 0px 4px 0px 0px; font-family: Inter, Arial; font-weight: 700; letter-spacing: 0.015625rem; line-height: 123.5%; font-size: 2rem; color: rgb(255, 255, 255); }
.css-1tgkox5 { color: rgb(255, 255, 255); padding-left: 8px; padding-right: 8px; border-radius: 12px; background: linear-gradient(248.86deg, rgb(182, 80, 158) 10.51%, rgb(46, 186, 198) 93.41%); display: flex; -moz-box-align: center; align-items: center; }
.css-fo7h32 { user-select: none; width: 1em; height: 1em; display: inline-block; fill: currentcolor; flex-shrink: 0; transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1); font-size: 1.5rem; margin-left: 4px; color: rgb(241, 241, 243); }
.css-10qjsex { margin: 2px 0px 0px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; color: rgb(255, 255, 255); font-size: 0.85rem; overflow-wrap: break-word; white-space: normal; line-height: 1.3; max-width: 100%; }
.css-1k3x8v3 { bottom: 0px; left: 0px; position: absolute; opacity: 0; pointer-events: none; width: 100%; box-sizing: border-box; }
.css-dzdoo0 { position: absolute; right: 7px; top: calc(50% - 0.5em); pointer-events: none; color: rgba(235, 235, 239, 0.56); }
.css-dzdoo0.Mui-disabled { color: rgba(235, 235, 239, 0.3); }
.css-1fgc1cp { margin: 0px; font-family: Inter, Arial; font-weight: 500; line-height: 133.4%; font-size: 1.3125rem; opacity: 0.7; }
.css-1qdyvok { display: flex; -moz-box-pack: justify; justify-content: space-between; align-items: flex-start; }
.css-bf0ye5 { position: relative; width: calc(50% - 8px); }
@media (min-width: 0px) {
  .css-bf0ye5 { display: block; }
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
.css-1xifpgy { }
@media (min-width: 0px) {
  .css-1xifpgy { padding: 14px 16px 24px; }
}
@media (min-width: 640px) {
  .css-1xifpgy { padding-left: 24px; padding-right: 24px; padding-top: 22px; }
}
.css-7l9tvd { background-color: rgb(41, 46, 65); color: rgb(241, 241, 243); transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1); border-radius: 4px; box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 1px, rgba(0, 0, 0, 0.25) 0px 0px 1px; background-image: none; margin-top: 16px; border: 1px solid rgba(235, 235, 239, 0.08); }
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
.css-115dves { user-select: none; width: 1em; height: 1em; display: inline-block; fill: currentcolor; flex-shrink: 0; transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1); font-size: 1.5rem; color: rgb(41, 182, 246); }
.css-1wsmwia { display: flex; align-items: flex-end; padding: 16px 16px 4px; position: sticky; top: 0px; z-index: 100; background-color: rgb(41, 46, 65); border-bottom: 1px solid rgba(235, 235, 239, 0.08); border-color: rgba(235, 235, 239, 0.08); }
.css-15czs8k { display: flex; flex-direction: row; -moz-box-align: center; align-items: center; -moz-box-pack: start; justify-content: flex-start; flex: 1 1 0%; min-width: 70px; max-width: 130px; overflow: visible; padding: 4px; }
.css-18phtf6 { margin: 0px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.00625rem; line-height: 1rem; font-size: 0.75rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: rgb(165, 168, 182); cursor: pointer; display: inline-flex; -moz-box-align: center; align-items: center; }
.css-14dkifd { display: inline-flex; flex-direction: column; margin-left: 4px; }
.css-1hf8ilx { width: 0px; height: 0px; border-style: solid; border-width: 0px 4px 4px; border-color: transparent transparent rgba(235, 235, 239, 0.08); margin-bottom: 2px; }
.css-1ojixww { width: 0px; height: 0px; border-style: solid; border-width: 4px 4px 0px; border-color: rgba(235, 235, 239, 0.08) transparent transparent; }
.css-11udp8r { display: flex; flex-direction: column; -moz-box-align: center; align-items: center; -moz-box-pack: end; justify-content: flex-end; flex: 1 1 0%; min-width: 70px; overflow: visible; padding: 4px; }
.css-1xwkwbj { display: flex; -moz-box-align: center; align-items: center; -moz-box-pack: end; justify-content: flex-end; max-width: 160px; min-width: 160px; flex: 1 1 0%; }
.css-1xwkwbj .MuiButton-root { margin-left: 6px; }
.css-1qm0evb { display: flex; -moz-box-align: center; align-items: center; min-height: 71px; padding-left: 16px; padding-right: 16px; }
.css-1qm0evb:not(:last-child) { border-bottom: 1px solid rgba(235, 235, 239, 0.08); border-color: rgba(235, 235, 239, 0.08); }
.css-100tx80 { text-decoration: none; display: inline-flex; -moz-box-align: center; align-items: center; }
.css-q97pgc { margin: 0px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 143%; font-size: 0.875rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: rgb(234, 235, 239); text-decoration: none; display: inline-flex; -moz-box-align: center; align-items: center; }
.css-17910yg { margin: 0px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 143%; font-size: 0.875rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: rgb(234, 235, 239); text-decoration: none; display: inline-flex; -moz-box-align: center; align-items: center; }
.css-1ux336h { user-select: none; width: 1em; height: 1em; overflow: hidden; text-align: center; flex-shrink: 0; font-size: 2rem; display: flex; position: relative; border-radius: 50%; }
.css-1dkatbo { z-index: 1500; pointer-events: none; }
.css-1dkatbo[data-popper-placement*="bottom"] .MuiTooltip-arrow { top: 0px; margin-top: -0.71em; }
.css-1dkatbo[data-popper-placement*="bottom"] .MuiTooltip-arrow::before { transform-origin: 0px 100% 0px; }
.css-1dkatbo[data-popper-placement*="top"] .MuiTooltip-arrow { bottom: 0px; margin-bottom: -0.71em; }
.css-1dkatbo[data-popper-placement*="top"] .MuiTooltip-arrow::before { transform-origin: 100% 0px 0px; }
.css-1dkatbo[data-popper-placement*="right"] .MuiTooltip-arrow { left: 0px; margin-left: -0.71em; height: 1em; width: 0.71em; }
.css-1dkatbo[data-popper-placement*="right"] .MuiTooltip-arrow::before { transform-origin: 100% 100% 0px; }
.css-1dkatbo[data-popper-placement*="left"] .MuiTooltip-arrow { right: 0px; margin-right: -0.71em; height: 1em; width: 0.71em; }
.css-1dkatbo[data-popper-placement*="left"] .MuiTooltip-arrow::before { transform-origin: 0px 0px 0px; }
.css-1r4ptf4 { margin: 0px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1.25rem; font-size: 0.875rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: rgb(98, 103, 123); display: inline-flex; flex-direction: row; -moz-box-align: center; align-items: center; position: relative; }
.css-1241y0n { }
.css-19el3v { display: flex; flex-direction: column; -moz-box-pack: center; justify-content: center; text-align: center; }
@media (min-width: 0px) {
  .css-19el3v { align-items: flex-end; }
}
@media (min-width: 640px) {
  .css-19el3v { -moz-box-align: center; align-items: center; }
}
.css-uefm4v { margin: 0px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1.25rem; font-size: 0.875rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; display: inline-flex; flex-direction: row; -moz-box-align: center; align-items: center; position: relative; }
.css-1yxnkj0 { display: flex; -moz-box-pack: center; justify-content: center; gap: 4px; flex-wrap: wrap; flex: 0 0 50%; }
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
.css-1th707o { margin: 0px 2px 0px 0px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1.25rem; font-size: 0.875rem; color: rgb(165, 168, 182); }
.css-1jqr7ck { border: 1px solid rgba(235, 235, 239, 0.08); border-radius: 4px; cursor: pointer; display: flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; transition: opacity 0.2s; background-color: transparent; }
@media (min-width: 0px) {
  .css-1jqr7ck { padding: 0px 4px; }
}
@media (min-width: 640px) {
  .css-1jqr7ck { padding: 2px 4px; }
}
.css-1jqr7ck:hover { background-color: rgba(235, 235, 239, 0.08); border-color: rgba(235, 235, 239, 0.3); }
.css-12z0wuy { margin-right: 8px; }
.css-vxcmzt { display: inline-flex; }
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
.css-1ae12c2 { user-select: none; width: 1em; height: 1em; overflow: hidden; text-align: center; flex-shrink: 0; display: flex; position: relative; border-radius: 50%; font-size: 12px; margin-left: -4px; }
.css-1wbia9h { position: relative; width: calc(50% - 8px); }
@media (min-width: 0px) {
  .css-1wbia9h { display: none; }
}
@media (min-width: 1280px) {
  .css-1wbia9h { display: block; }
}
@media (min-width: 0px) {
  .css-ezebxy { position: static; top: auto; right: auto; margin-bottom: 8px; }
}
@media (min-width: 960px) {
  .css-ezebxy { position: absolute; top: -90px; right: 0px; margin-bottom: 0px; }
}
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
.css-186lrzm { padding-left: 24px; padding-right: 24px; margin-bottom: 16px; }
.css-u35d3s { display: flex; -moz-box-align: center; align-items: center; min-height: 71px; padding-left: 16px; padding-right: 16px; border-top-width: 1px; border-top-style: solid; border-bottom: 1px solid rgba(235, 235, 239, 0.08); border-color: rgba(235, 235, 239, 0.08); margin-bottom: 8px; }
.css-u35d3s:not(:last-child) { border-bottom: 1px solid rgba(235, 235, 239, 0.08); border-color: rgba(235, 235, 239, 0.08); }
.css-15z4zan { margin: 0px 0px 0px -4px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.00625rem; line-height: 1rem; font-size: 0.75rem; }
.css-mjvr3 { display: flex; flex-direction: column; -moz-box-align: center; align-items: center; -moz-box-pack: end; justify-content: flex-end; flex: 1 1 0%; min-width: 70px; overflow: visible; padding: 0px; }
.css-1bwr8lm { display: flex; flex-direction: column; -moz-box-pack: center; justify-content: center; text-align: center; flex: 2 1 auto; }
@media (min-width: 0px) {
  .css-1bwr8lm { align-items: flex-end; }
}
@media (min-width: 640px) {
  .css-1bwr8lm { -moz-box-align: center; align-items: center; }
}
.css-cr32lm { margin: 0px 2px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1.25rem; font-size: 0.875rem; color: rgb(165, 168, 182); }
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
.css-d4400k { display: flex; -moz-box-align: center; align-items: center; margin-left: 4px; }
.css-17zttyw { user-select: none; width: 1em; height: 1em; display: inline-block; fill: currentcolor; flex-shrink: 0; transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1); font-size: 14px; color: rgb(244, 67, 54); }
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
.css-1iry5ri { position: fixed; z-index: 1300; inset: 0px; visibility: hidden; }
.css-1iry5ri .MuiMenu-paper { max-width: 280px; }
.css-1q04zbd { padding: 8px 16px 12px; }
.css-kjpz4d { margin: 0px 0px 4px; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.009375rem; line-height: 1.25rem; font-size: 0.875rem; }
.css-1pxgetv { margin: 0px 0px 16px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; color: rgb(165, 168, 182); }
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
.css-1qm1lh { margin-bottom: 16px; }
.css-1coeexk { display: flex; -moz-box-align: center; align-items: center; margin-bottom: 16px; }
.css-1vfaaju { margin: 0px 8px 0px 0px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.00625rem; line-height: 1rem; font-size: 0.75rem; color: rgb(192, 203, 246); }
.css-1570kgy { height: 16px; width: 16px; }
.css-fodyq8 { margin: 0px 0px 0px 4px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.00625rem; line-height: 1rem; font-size: 0.75rem; color: rgb(192, 203, 246); }
.css-16489wl { margin: 0px 12px 0px 8px; font-family: Inter, Arial; font-weight: 700; letter-spacing: 0.015625rem; line-height: 123.5%; font-size: 2rem; }
.css-mg5q4r { margin: 0px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 143%; font-size: 0.875rem; color: rgb(142, 146, 163); max-width: 824px; }
.css-1t7a0z4 { text-decoration: underline; color: rgb(142, 146, 163); }
.css-1qtstx3 { margin: 0px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 143%; font-size: 0.875rem; text-decoration: underline; color: rgb(142, 146, 163); }
.css-1ma4ywz { background-color: rgb(56, 61, 81); border: 1px solid rgba(235, 235, 237, 0.12); padding: 4px; }
@media (min-width: 0px) {
  .css-1ma4ywz { width: 100%; }
}
@media (min-width: 640px) {
  .css-1ma4ywz { width: 359px; }
}
.css-9byq7 { display: inline-flex; border-radius: 4px; background-color: rgb(56, 61, 81); border: 1px solid rgba(235, 235, 237, 0.12); padding: 4px; }
.css-9byq7 .MuiToggleButtonGroup-grouped.Mui-selected + .MuiToggleButtonGroup-grouped.Mui-selected { border-left: 0px; margin-left: 0px; }
.css-9byq7 .MuiToggleButtonGroup-firstButton, .css-9byq7 .MuiToggleButtonGroup-middleButton { border-top-right-radius: 0px; border-bottom-right-radius: 0px; }
.css-9byq7 .MuiToggleButtonGroup-lastButton, .css-9byq7 .MuiToggleButtonGroup-middleButton { margin-left: -1px; border-left: 1px solid transparent; border-top-left-radius: 0px; border-bottom-left-radius: 0px; }
.css-9byq7 .MuiToggleButtonGroup-lastButton.Mui-disabled, .css-9byq7 .MuiToggleButtonGroup-middleButton.Mui-disabled { border-left: 1px solid transparent; }
@media (min-width: 0px) {
  .css-9byq7 { width: 100%; }
}
@media (min-width: 640px) {
  .css-9byq7 { width: 359px; }
}
.css-isbt42 { box-sizing: border-box; display: flex; flex-flow: wrap; margin-top: -16px; width: calc(100% + 16px); margin-left: -16px; }
.css-isbt42 > .MuiGrid-item { padding-top: 16px; }
.css-isbt42 > .MuiGrid-item { padding-left: 16px; }
.css-10bqn9h { box-sizing: border-box; margin: 0px; flex-direction: row; flex-basis: 100%; -moz-box-flex: 0; flex-grow: 0; max-width: 100%; }
@media (min-width: 640px) {
  .css-10bqn9h { flex-basis: 100%; -moz-box-flex: 0; flex-grow: 0; max-width: 100%; }
}
@media (min-width: 760px) {
  .css-10bqn9h { flex-basis: 100%; -moz-box-flex: 0; flex-grow: 0; max-width: 100%; }
}
@media (min-width: 960px) {
  .css-10bqn9h { flex-basis: 100%; -moz-box-flex: 0; flex-grow: 0; max-width: 100%; }
}
@media (min-width: 1280px) {
  .css-10bqn9h { flex-basis: 50%; -moz-box-flex: 0; flex-grow: 0; max-width: 50%; }
}
@media (min-width: 1575px) {
  .css-10bqn9h { flex-basis: 50%; -moz-box-flex: 0; flex-grow: 0; max-width: 50%; }
}
@media (min-width: 1800px) {
  .css-10bqn9h { flex-basis: 50%; -moz-box-flex: 0; flex-grow: 0; max-width: 50%; }
}
@media (min-width: 0px) {
  .css-10bqn9h { display: block; }
}
@media (min-width: 1280px) {
  .css-10bqn9h { display: block; }
}
.css-vfhicb { background-color: rgb(41, 46, 65); color: rgb(241, 241, 243); transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1); border-radius: 4px; box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 1px, rgba(0, 0, 0, 0.25) 0px 0px 1px; background-image: none; padding-top: 16px; height: 100%; min-height: 546px; }
@media (min-width: 0px) {
  .css-vfhicb { padding: 16px; }
}
@media (min-width: 640px) {
  .css-vfhicb { padding: 24px; }
}
.css-yd8sa2 { display: flex; flex-direction: column; gap: 16px; }
.css-1h5pzom { display: block; background-color: rgba(241, 241, 243, 0.13); height: 1.2em; animation: 2s ease-in-out 0.5s infinite animation-c7515d; transform: unset; margin-bottom: 16px; }
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
.css-57u7r9 { display: block; background-color: rgba(241, 241, 243, 0.13); height: 1.2em; animation: 2s ease-in-out 0.5s infinite animation-c7515d; transform: unset; border-radius: 4px; }
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
.css-1xykc5s { display: flex; flex-direction: column; gap: 16px; }
@media (min-width: 640px) {
  .css-1xykc5s { flex-direction: column; }
}
@media (min-width: 760px) {
  .css-1xykc5s { flex-direction: row; }
}
.css-ktuhje { box-sizing: border-box; margin: 0px; flex-direction: row; flex-basis: 100%; -moz-box-flex: 0; flex-grow: 0; max-width: 100%; }
@media (min-width: 640px) {
  .css-ktuhje { flex-basis: 100%; -moz-box-flex: 0; flex-grow: 0; max-width: 100%; }
}
@media (min-width: 760px) {
  .css-ktuhje { flex-basis: 100%; -moz-box-flex: 0; flex-grow: 0; max-width: 100%; }
}
@media (min-width: 960px) {
  .css-ktuhje { flex-basis: 100%; -moz-box-flex: 0; flex-grow: 0; max-width: 100%; }
}
@media (min-width: 1280px) {
  .css-ktuhje { flex-basis: 50%; -moz-box-flex: 0; flex-grow: 0; max-width: 50%; }
}
@media (min-width: 1575px) {
  .css-ktuhje { flex-basis: 50%; -moz-box-flex: 0; flex-grow: 0; max-width: 50%; }
}
@media (min-width: 1800px) {
  .css-ktuhje { flex-basis: 50%; -moz-box-flex: 0; flex-grow: 0; max-width: 50%; }
}
@media (min-width: 0px) {
  .css-ktuhje { display: none; }
}
@media (min-width: 1280px) {
  .css-ktuhje { display: block; }
}
.css-jsj201 { margin: 0px 0px 0px 2px; font-family: Inter, Arial; font-weight: 500; line-height: 133.4%; font-size: 1.3125rem; color: rgb(165, 168, 182); }
.css-17ug2oi { background-color: rgb(41, 46, 65); color: rgb(241, 241, 243); transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1); border-radius: 4px; box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 1px, rgba(0, 0, 0, 0.25) 0px 0px 1px; background-image: none; padding-top: 16px; height: 100%; }
@media (min-width: 0px) {
  .css-17ug2oi { padding: 16px; }
}
@media (min-width: 640px) {
  .css-17ug2oi { padding: 24px; }
}
.css-tgnaop { -moz-box-align: center; align-items: center; -moz-box-pack: justify; justify-content: space-between; margin-bottom: 32px; }
@media (min-width: 0px) {
  .css-tgnaop { display: none; }
}
@media (min-width: 640px) {
  .css-tgnaop { display: flex; }
}
.css-12bsz6j { text-align: center; flex: 0 0 auto; font-size: 1.5rem; padding: 8px; border-radius: 50%; overflow: visible; color: rgba(235, 235, 239, 0.56); transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1); }
.css-12bsz6j:hover { background-color: rgba(235, 235, 239, 0.08); }
@media (hover: none) {
  .css-12bsz6j:hover { background-color: transparent; }
}
.css-12bsz6j.Mui-disabled { background-color: transparent; color: rgba(235, 235, 239, 0.3); }
.css-1yn0mme { display: inline-flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; position: relative; box-sizing: border-box; background-color: transparent; outline: 0px; border: 0px; margin: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; text-decoration: none; text-align: center; flex: 0 0 auto; font-size: 1.5rem; padding: 8px; border-radius: 50%; overflow: visible; color: rgba(235, 235, 239, 0.56); transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1); }
.css-1yn0mme::-moz-focus-inner { border-style: none; }
.css-1yn0mme.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-1yn0mme { print-color-adjust: exact; }
}
.css-1yn0mme:hover { background-color: rgba(235, 235, 239, 0.08); }
@media (hover: none) {
  .css-1yn0mme:hover { background-color: transparent; }
}
.css-1yn0mme.Mui-disabled { background-color: transparent; color: rgba(235, 235, 239, 0.3); }
.css-u35lf7 { display: inline-flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; position: relative; box-sizing: border-box; background-color: transparent; outline: 0px; border: 0px; margin: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; text-decoration: none; text-align: center; flex: 0 0 auto; font-size: 1.5rem; padding: 8px; border-radius: 50%; overflow: visible; color: rgba(235, 235, 239, 0.56); transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1); }
.css-u35lf7::-moz-focus-inner { border-style: none; }
.css-u35lf7.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-u35lf7 { print-color-adjust: exact; }
}
.css-u35lf7:hover { background-color: rgba(235, 235, 239, 0.08); }
@media (hover: none) {
  .css-u35lf7:hover { background-color: transparent; }
}
.css-u35lf7.Mui-disabled { background-color: transparent; color: rgba(235, 235, 239, 0.3); }
.css-1niwfm9 { font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 143%; display: inline-flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; position: relative; box-sizing: border-box; background-color: transparent; outline: 0px; border: 0px; margin: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; text-decoration: none; text-align: center; flex: 0 0 auto; font-size: 1.5rem; padding: 8px; border-radius: 50%; overflow: visible; color: rgba(235, 235, 239, 0.56); transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1); }
.css-1niwfm9::-moz-focus-inner { border-style: none; }
.css-1niwfm9.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-1niwfm9 { print-color-adjust: exact; }
}
.css-1niwfm9:hover { background-color: rgba(235, 235, 239, 0.08); }
@media (hover: none) {
  .css-1niwfm9:hover { background-color: transparent; }
}
.css-1niwfm9.Mui-disabled { background-color: transparent; color: rgba(235, 235, 239, 0.3); }
.css-1g4nbks { margin: 0px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; display: inline-flex; flex-direction: row; -moz-box-align: center; align-items: center; position: relative; }
.css-1eqowsx { margin: 0px 2px 0px 0px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; color: rgb(165, 168, 182); }
.css-1x1u297 { display: flex; -moz-box-pack: justify; justify-content: space-between; position: relative; }
@media (min-width: 0px) {
  .css-1x1u297 { align-items: flex-start; flex-direction: column; gap: 0px; border-radius: 0px; border: unset; padding: 0px; background: unset; }
}
@media (min-width: 640px) {
  .css-1x1u297 { -moz-box-align: center; align-items: center; flex-direction: row; gap: 8px; border-radius: 6px; border: 1px solid rgba(235, 235, 239, 0.08); padding: 16px; background: rgb(41, 46, 65); }
}
.css-1x1u297::after { content: ""; position: absolute; bottom: 0px; left: -16px; width: calc(100% + 32px); height: 1px; }
@media (min-width: 0px) {
  .css-1x1u297::after { background-color: rgba(235, 235, 239, 0.08); }
}
@media (min-width: 640px) {
  .css-1x1u297::after { background-color: transparent; }
}
.css-1ka0l5u { display: flex; -moz-box-pack: justify; justify-content: space-between; -moz-box-align: center; align-items: center; }
@media (min-width: 0px) {
  .css-1ka0l5u { width: 100%; margin-bottom: 12px; }
}
@media (min-width: 640px) {
  .css-1ka0l5u { width: unset; margin-bottom: 0px; }
}
.css-rc6o0d { user-select: none; width: 1em; height: 1em; overflow: hidden; text-align: center; flex-shrink: 0; font-size: 1.5rem; display: flex; position: relative; border-radius: 50%; }
@media (min-width: 0px) {
  .css-rc6o0d { font-size: 40px; }
}
@media (min-width: 640px) {
  .css-rc6o0d { font-size: 32px; }
}
.css-ewretx { display: flex; flex-direction: column; margin-left: 8px; -moz-box-align: start; align-items: start; -moz-box-pack: center; justify-content: center; }
@media (min-width: 640px) {
  .css-4xk1f7 { display: none; }
}
.css-1k0qfa2 { margin: 0px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; color: rgb(165, 168, 182); }
@media (min-width: 640px) {
  .css-1k0qfa2 { display: none; }
}
.css-idxunw { -moz-box-pack: justify; justify-content: space-between; -moz-box-align: center; align-items: center; }
@media (min-width: 0px) {
  .css-idxunw { display: flex; width: 100%; margin-bottom: 12px; }
}
@media (min-width: 640px) {
  .css-idxunw { display: block; width: unset; margin-bottom: 0px; }
}
.css-1krd8c3 { margin: 0px 8px 0px 0px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1.25rem; font-size: 0.875rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; display: inline-flex; flex-direction: row; -moz-box-align: center; align-items: center; position: relative; }
.css-13s3fh5 { margin: 0px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 143%; font-size: 0.875rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; display: inline-flex; flex-direction: row; -moz-box-align: center; align-items: center; position: relative; }
.css-c2y8ge { transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); color: rgba(0, 0, 0, 0.87); background-color: rgb(234, 235, 239); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 500; line-height: 1.5rem; font-size: 0.875rem; padding: 6px 12px; min-width: 96px; }
.css-c2y8ge:hover { text-decoration: none; background-color: rgb(210, 212, 220); box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px; }
@media (hover: none) {
  .css-c2y8ge:hover { background-color: rgb(234, 235, 239); }
}
.css-c2y8ge:active { box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px; }
.css-c2y8ge.Mui-focusVisible { box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px; }
.css-c2y8ge.Mui-disabled { color: rgba(235, 235, 239, 0.3); box-shadow: none; background-color: rgba(235, 235, 239, 0.12); }
.css-c2y8ge:hover { box-shadow: none; }
.css-c2y8ge.Mui-focusVisible { box-shadow: none; }
.css-c2y8ge:active { box-shadow: none; }
.css-c2y8ge.Mui-disabled { box-shadow: none; }
@media (min-width: 0px) {
  .css-c2y8ge { margin-bottom: 24px; }
}
@media (min-width: 640px) {
  .css-c2y8ge { margin-bottom: 0px; }
}
.css-a80re0 { display: inline-flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; position: relative; box-sizing: border-box; outline: 0px; border: 0px; margin: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; text-decoration: none; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); color: rgba(0, 0, 0, 0.87); background-color: rgb(234, 235, 239); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 500; line-height: 1.5rem; font-size: 0.875rem; padding: 6px 12px; min-width: 96px; }
.css-a80re0::-moz-focus-inner { border-style: none; }
.css-a80re0.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-a80re0 { print-color-adjust: exact; }
}
.css-a80re0:hover { text-decoration: none; background-color: rgb(210, 212, 220); box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px; }
@media (hover: none) {
  .css-a80re0:hover { background-color: rgb(234, 235, 239); }
}
.css-a80re0:active { box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px; }
.css-a80re0.Mui-focusVisible { box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px; }
.css-a80re0.Mui-disabled { color: rgba(235, 235, 239, 0.3); box-shadow: none; background-color: rgba(235, 235, 239, 0.12); }
.css-a80re0:hover { box-shadow: none; }
.css-a80re0.Mui-focusVisible { box-shadow: none; }
.css-a80re0:active { box-shadow: none; }
.css-a80re0.Mui-disabled { box-shadow: none; }
@media (min-width: 0px) {
  .css-a80re0 { margin-bottom: 24px; }
}
@media (min-width: 640px) {
  .css-a80re0 { margin-bottom: 0px; }
}
.css-1cedyv7 { display: flex; flex-direction: column; margin-top: 16px; }
@media (min-width: 0px) {
  .css-1cedyv7 { flex-direction: column; }
  .css-1cedyv7 > :not(style):not(style) { margin: 0px; }
  .css-1cedyv7 > :not(style) ~ :not(style) { margin-top: 16px; }
}
@media (min-width: 640px) {
  .css-1cedyv7 { flex-direction: row; }
  .css-1cedyv7 > :not(style):not(style) { margin: 0px; }
  .css-1cedyv7 > :not(style) ~ :not(style) { margin-left: 16px; }
}
@media (min-width: 640px) {
  .css-1cedyv7 { -moz-box-align: start; align-items: start; }
}
.css-e5w7o9 { flex: 1 1 0%; display: flex; border-radius: 6px; border: 1px solid rgba(235, 235, 239, 0.08); position: relative; }
.css-e5w7o9::after { content: ""; border-radius: 6px; position: absolute; inset: -1px; background: transparent; }
.css-17kibxm { flex: 1 1 0%; padding: 16px; display: flex; -moz-box-align: center; align-items: center; flex-direction: column; border-radius: 6px; background: rgb(41, 46, 65); position: relative; z-index: 2; }
.css-1ni7kpp { margin-bottom: 24px; display: flex; -moz-box-align: center; align-items: center; flex-direction: column; }
.css-1727ni8 { margin: 0px 0px 4px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 143%; font-size: 0.875rem; color: rgb(165, 168, 182); }
.css-1xsggxs { margin: 0px; font-family: Inter, Arial; font-weight: 500; line-height: 133.4%; font-size: 1.3125rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: rgb(142, 146, 163); display: inline-flex; flex-direction: row; -moz-box-align: center; align-items: center; position: relative; }
.css-lczlz3 { width: 100%; margin-bottom: 8px; }
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
.css-12d2mry { width: 100%; display: flex; -moz-box-align: center; align-items: center; -moz-box-pack: justify; justify-content: space-between; }
.css-1oedian { margin: 0px 8px 0px 0px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; color: rgb(165, 168, 182); }
.css-z5yarz { margin: 0px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1.25rem; font-size: 0.875rem; }
.css-1pa6zo6 { display: flex; -moz-box-pack: justify; justify-content: space-between; }
@media (min-width: 0px) {
  .css-1pa6zo6 { flex-direction: column; }
}
@media (min-width: 760px) {
  .css-1pa6zo6 { flex-direction: row; }
}
.css-mlx8yq { min-width: 64px; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); color: rgba(0, 0, 0, 0.87); background-color: rgb(234, 235, 239); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 500; line-height: 1.5rem; font-size: 0.875rem; padding: 6px 12px; flex: 1 1 0%; }
.css-mlx8yq:hover { text-decoration: none; background-color: rgb(210, 212, 220); box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px; }
@media (hover: none) {
  .css-mlx8yq:hover { background-color: rgb(234, 235, 239); }
}
.css-mlx8yq:active { box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px; }
.css-mlx8yq.Mui-focusVisible { box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px; }
.css-mlx8yq.Mui-disabled { color: rgba(235, 235, 239, 0.3); box-shadow: none; background-color: rgba(235, 235, 239, 0.12); }
.css-mlx8yq:hover { box-shadow: none; }
.css-mlx8yq.Mui-focusVisible { box-shadow: none; }
.css-mlx8yq:active { box-shadow: none; }
.css-mlx8yq.Mui-disabled { box-shadow: none; }
@media (min-width: 0px) {
  .css-mlx8yq { margin-bottom: 8px; margin-right: 0px; }
}
@media (min-width: 760px) {
  .css-mlx8yq { margin-bottom: 0px; margin-right: 4px; }
}
.css-1dt3sfu { display: inline-flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; position: relative; box-sizing: border-box; outline: 0px; border: 0px; margin: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; text-decoration: none; min-width: 64px; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); color: rgba(0, 0, 0, 0.87); background-color: rgb(234, 235, 239); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 500; line-height: 1.5rem; font-size: 0.875rem; padding: 6px 12px; flex: 1 1 0%; }
.css-1dt3sfu::-moz-focus-inner { border-style: none; }
.css-1dt3sfu.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-1dt3sfu { print-color-adjust: exact; }
}
.css-1dt3sfu:hover { text-decoration: none; background-color: rgb(210, 212, 220); box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px; }
@media (hover: none) {
  .css-1dt3sfu:hover { background-color: rgb(234, 235, 239); }
}
.css-1dt3sfu:active { box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px; }
.css-1dt3sfu.Mui-focusVisible { box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px; }
.css-1dt3sfu.Mui-disabled { color: rgba(235, 235, 239, 0.3); box-shadow: none; background-color: rgba(235, 235, 239, 0.12); }
.css-1dt3sfu:hover { box-shadow: none; }
.css-1dt3sfu.Mui-focusVisible { box-shadow: none; }
.css-1dt3sfu:active { box-shadow: none; }
.css-1dt3sfu.Mui-disabled { box-shadow: none; }
@media (min-width: 0px) {
  .css-1dt3sfu { margin-bottom: 8px; margin-right: 0px; }
}
@media (min-width: 760px) {
  .css-1dt3sfu { margin-bottom: 0px; margin-right: 4px; }
}
.css-dlrh6v { margin: 0px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1.25rem; font-size: 0.875rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: rgb(98, 103, 123); display: inline-flex; flex-direction: row; -moz-box-align: center; align-items: center; position: relative; }
.css-uo2xtb { width: 100%; margin-left: auto; margin-right: auto; }
@media (min-width: 0px) {
  .css-uo2xtb { margin-top: 20px; }
}
@media (min-width: 640px) {
  .css-uo2xtb { margin-top: 36px; padding-left: 24px; padding-right: 24px; }
}
.css-1qtxg2z { overflow: hidden; display: flex; }
@media (min-width: 0px) {
  .css-1qtxg2z { height: 132px; }
}
@media (min-width: 640px) {
  .css-1qtxg2z { height: 124px; }
}
.css-13b4d3g { width: 100%; margin-top: auto; padding: 16px; display: flex; flex-direction: column; background-color: rgba(156, 147, 179, 0.22); position: relative; }
@media (min-width: 0px) {
  .css-13b4d3g { border-radius: 0px; align-items: flex-start; height: 120px; }
}
@media (min-width: 640px) {
  .css-13b4d3g { border-radius: 16px; height: 104px; }
}
.css-12lkl5t { display: flex; flex-direction: column; gap: 12px; }
@media (min-width: 0px) {
  .css-12lkl5t { align-items: flex-start; }
}
.css-j2ctfd { margin: 0px; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.009375rem; line-height: 1.25rem; font-size: 0.875rem; color: rgb(241, 241, 243); }
@media (min-width: 0px) {
  .css-j2ctfd { width: 221px; text-align: left; }
}
@media (min-width: 640px) {
  .css-j2ctfd { width: 400px; }
}
.css-1r64l54 { min-width: 64px; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); color: rgba(0, 0, 0, 0.87); background-color: rgb(234, 235, 239); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.02875rem; line-height: 1.25rem; text-transform: uppercase; font-size: 0.625rem; padding: 0px 6px; -moz-box-align: center; align-items: center; display: flex; }
.css-1r64l54:hover { text-decoration: none; background-color: rgb(210, 212, 220); box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px; }
@media (hover: none) {
  .css-1r64l54:hover { background-color: rgb(234, 235, 239); }
}
.css-1r64l54:active { box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px; }
.css-1r64l54.Mui-focusVisible { box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px; }
.css-1r64l54.Mui-disabled { color: rgba(235, 235, 239, 0.3); box-shadow: none; background-color: rgba(235, 235, 239, 0.12); }
.css-1r64l54:hover { box-shadow: none; }
.css-1r64l54.Mui-focusVisible { box-shadow: none; }
.css-1r64l54:active { box-shadow: none; }
.css-1r64l54.Mui-disabled { box-shadow: none; }
@media (min-width: 0px) {
  .css-1r64l54 { gap: 8px; }
}
@media (min-width: 640px) {
  .css-1r64l54 { gap: 4px; }
}
.css-dp2mqh { -moz-box-pack: center; justify-content: center; position: relative; box-sizing: border-box; outline: 0px; border: 0px; margin: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; text-decoration: none; min-width: 64px; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); color: rgba(0, 0, 0, 0.87); background-color: rgb(234, 235, 239); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.02875rem; line-height: 1.25rem; text-transform: uppercase; font-size: 0.625rem; padding: 0px 6px; -moz-box-align: center; align-items: center; display: flex; }
.css-dp2mqh::-moz-focus-inner { border-style: none; }
.css-dp2mqh.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-dp2mqh { print-color-adjust: exact; }
}
.css-dp2mqh:hover { text-decoration: none; background-color: rgb(210, 212, 220); box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px; }
@media (hover: none) {
  .css-dp2mqh:hover { background-color: rgb(234, 235, 239); }
}
.css-dp2mqh:active { box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px; }
.css-dp2mqh.Mui-focusVisible { box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px; }
.css-dp2mqh.Mui-disabled { color: rgba(235, 235, 239, 0.3); box-shadow: none; background-color: rgba(235, 235, 239, 0.12); }
.css-dp2mqh:hover { box-shadow: none; }
.css-dp2mqh.Mui-focusVisible { box-shadow: none; }
.css-dp2mqh:active { box-shadow: none; }
.css-dp2mqh.Mui-disabled { box-shadow: none; }
@media (min-width: 0px) {
  .css-dp2mqh { gap: 8px; }
}
@media (min-width: 640px) {
  .css-dp2mqh { gap: 4px; }
}
.css-1ku3nro { -moz-box-pack: center; justify-content: center; position: relative; box-sizing: border-box; outline: 0px; border: 0px; margin: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; text-decoration: none; min-width: 64px; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); color: rgba(0, 0, 0, 0.87); background-color: rgb(234, 235, 239); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.02875rem; line-height: 1.25rem; text-transform: uppercase; font-size: 0.625rem; padding: 0px 6px; -moz-box-align: center; align-items: center; display: flex; }
.css-1ku3nro::-moz-focus-inner { border-style: none; }
.css-1ku3nro.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-1ku3nro { print-color-adjust: exact; }
}
.css-1ku3nro:hover { text-decoration: none; background-color: rgb(210, 212, 220); box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px; }
@media (hover: none) {
  .css-1ku3nro:hover { background-color: rgb(234, 235, 239); }
}
.css-1ku3nro:active { box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px; }
.css-1ku3nro.Mui-focusVisible { box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px; }
.css-1ku3nro.Mui-disabled { color: rgba(235, 235, 239, 0.3); box-shadow: none; background-color: rgba(235, 235, 239, 0.12); }
.css-1ku3nro:hover { box-shadow: none; }
.css-1ku3nro.Mui-focusVisible { box-shadow: none; }
.css-1ku3nro:active { box-shadow: none; }
.css-1ku3nro.Mui-disabled { box-shadow: none; }
@media (min-width: 0px) {
  .css-1ku3nro { gap: 8px; }
}
@media (min-width: 640px) {
  .css-1ku3nro { gap: 4px; }
}
.css-dnfcb0 { -moz-box-pack: center; justify-content: center; position: relative; box-sizing: border-box; outline: 0px; border: 0px; margin: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; text-decoration: none; min-width: 64px; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); color: rgba(0, 0, 0, 0.87); background-color: rgb(234, 235, 239); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.02875rem; line-height: 1.25rem; text-transform: uppercase; font-size: 0.625rem; padding: 0px 6px; -moz-box-align: center; align-items: center; display: flex; }
.css-dnfcb0::-moz-focus-inner { border-style: none; }
.css-dnfcb0.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-dnfcb0 { print-color-adjust: exact; }
}
.css-dnfcb0:hover { text-decoration: none; background-color: rgb(210, 212, 220); box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px; }
@media (hover: none) {
  .css-dnfcb0:hover { background-color: rgb(234, 235, 239); }
}
.css-dnfcb0:active { box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px; }
.css-dnfcb0.Mui-focusVisible { box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px; }
.css-dnfcb0.Mui-disabled { color: rgba(235, 235, 239, 0.3); box-shadow: none; background-color: rgba(235, 235, 239, 0.12); }
.css-dnfcb0:hover { box-shadow: none; }
.css-dnfcb0.Mui-focusVisible { box-shadow: none; }
.css-dnfcb0:active { box-shadow: none; }
.css-dnfcb0.Mui-disabled { box-shadow: none; }
@media (min-width: 0px) {
  .css-dnfcb0 { gap: 8px; }
}
@media (min-width: 640px) {
  .css-dnfcb0 { gap: 4px; }
}
.css-3vfh54 { -moz-box-pack: center; justify-content: center; position: relative; box-sizing: border-box; outline: 0px; border: 0px; margin: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; text-decoration: none; min-width: 64px; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); color: rgba(0, 0, 0, 0.87); background-color: rgb(234, 235, 239); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.02875rem; line-height: 1.25rem; text-transform: uppercase; font-size: 0.625rem; padding: 0px 6px; -moz-box-align: center; align-items: center; display: flex; }
.css-3vfh54::-moz-focus-inner { border-style: none; }
.css-3vfh54.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-3vfh54 { print-color-adjust: exact; }
}
.css-3vfh54:hover { text-decoration: none; background-color: rgb(210, 212, 220); box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px; }
@media (hover: none) {
  .css-3vfh54:hover { background-color: rgb(234, 235, 239); }
}
.css-3vfh54:active { box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px; }
.css-3vfh54.Mui-focusVisible { box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px; }
.css-3vfh54.Mui-disabled { color: rgba(235, 235, 239, 0.3); box-shadow: none; background-color: rgba(235, 235, 239, 0.12); }
.css-3vfh54:hover { box-shadow: none; }
.css-3vfh54.Mui-focusVisible { box-shadow: none; }
.css-3vfh54:active { box-shadow: none; }
.css-3vfh54.Mui-disabled { box-shadow: none; }
@media (min-width: 0px) {
  .css-3vfh54 { gap: 8px; }
}
@media (min-width: 640px) {
  .css-3vfh54 { gap: 4px; }
}
.css-vm5uns { width: 120px; height: 120px; position: absolute; top: -20px; right: 8px; overflow: hidden; transform: matrix(1, -0.14, 0.14, 1, 0, 0); }
@media (min-width: 640px) {
  .css-vm5uns { display: block; }
}
.css-1qhmto6 { margin-left: 12px; }
.css-yyrdxr { min-width: 64px; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); border: 1px solid rgba(235, 235, 239, 0.08); color: rgb(234, 235, 239); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.02875rem; line-height: 1.25rem; text-transform: uppercase; font-size: 0.625rem; padding: 0px 6px; background: rgb(56, 61, 81); }
.css-yyrdxr:hover { text-decoration: none; background-color: rgba(234, 235, 239, 0.08); border: 1px solid rgb(234, 235, 239); }
@media (hover: none) {
  .css-yyrdxr:hover { background-color: transparent; }
}
.css-yyrdxr.Mui-disabled { color: rgba(235, 235, 239, 0.3); border: 1px solid rgba(235, 235, 239, 0.12); }
.css-yyrdxr:hover { box-shadow: none; }
.css-yyrdxr.Mui-focusVisible { box-shadow: none; }
.css-yyrdxr:active { box-shadow: none; }
.css-yyrdxr.Mui-disabled { box-shadow: none; }
.css-13r7dc6 { display: inline-flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; position: relative; box-sizing: border-box; outline: 0px; margin: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; text-decoration: none; min-width: 64px; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); border: 1px solid rgba(235, 235, 239, 0.08); color: rgb(234, 235, 239); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.02875rem; line-height: 1.25rem; text-transform: uppercase; font-size: 0.625rem; padding: 0px 6px; background: rgb(56, 61, 81); }
.css-13r7dc6::-moz-focus-inner { border-style: none; }
.css-13r7dc6.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-13r7dc6 { print-color-adjust: exact; }
}
.css-13r7dc6:hover { text-decoration: none; background-color: rgba(234, 235, 239, 0.08); border: 1px solid rgb(234, 235, 239); }
@media (hover: none) {
  .css-13r7dc6:hover { background-color: transparent; }
}
.css-13r7dc6.Mui-disabled { color: rgba(235, 235, 239, 0.3); border: 1px solid rgba(235, 235, 239, 0.12); }
.css-13r7dc6:hover { box-shadow: none; }
.css-13r7dc6.Mui-focusVisible { box-shadow: none; }
.css-13r7dc6:active { box-shadow: none; }
.css-13r7dc6.Mui-disabled { box-shadow: none; }
.css-16rzsu1 { display: inherit; margin-right: 8px; margin-left: -2px; }
.css-16rzsu1 > :nth-of-type(1) { font-size: 18px; }
.css-110pqmc { margin-right: -4px; }
.css-2qyxsn { user-select: none; width: 1em; height: 1em; overflow: hidden; text-align: center; flex-shrink: 0; display: flex; position: relative; border-radius: 50%; font-size: 14px; }
.css-186mupc { text-align: right; -moz-box-flex: 1; flex-grow: 1; }
@media (min-width: 0px) {
  .css-186mupc { display: block; }
}
@media (min-width: 640px) {
  .css-186mupc { display: none; }
}
.css-xz8vby { margin: 0px; font-family: Inter, Arial; font-weight: 600; letter-spacing: unset; line-height: 133.4%; font-size: 1.3125rem; color: rgb(241, 241, 243); width: 100%; padding: 16px; }
.css-1f44odb { text-decoration: none; margin: 0px; font-family: Inter, Arial; font-weight: 600; letter-spacing: unset; line-height: 133.4%; font-size: 1.3125rem; color: rgb(241, 241, 243); width: 100%; padding: 16px; }
.css-4w2n1c { text-decoration: none; margin: 0px; font-family: Inter, Arial; font-weight: 600; letter-spacing: unset; line-height: 133.4%; font-size: 1.3125rem; color: rgb(241, 241, 243); width: 100%; padding: 16px; }
.css-tbq01x { text-decoration: none; margin: 0px; font-family: Inter, Arial; font-weight: 600; letter-spacing: unset; line-height: 133.4%; font-size: 1.3125rem; color: rgb(241, 241, 243); width: 100%; padding: 16px; }
.css-65pe7n { position: relative; }
.css-65pe7n:not(:last-child) { padding-right: 16px; margin-right: 16px; }
.css-15ro776 { margin-right: 4px; }
.css-18uvv3o { display: flex; align-items: flex-start; align-self: flex-start; margin-bottom: 16px; min-height: 40px; flex-direction: column; }
.css-qi6bo6 { min-width: 64px; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 500; line-height: 1.5rem; font-size: 0.875rem; padding: 6px 12px; color: rgb(255, 255, 255); border: 1px solid rgba(235, 235, 237, 0.12); background-color: rgb(56, 61, 81); margin-right: 12px; margin-bottom: 24px; }
.css-qi6bo6:hover { text-decoration: none; background-color: rgba(241, 241, 243, 0.08); }
@media (hover: none) {
  .css-qi6bo6:hover { background-color: transparent; }
}
.css-qi6bo6.Mui-disabled { color: rgba(235, 235, 239, 0.3); }
.css-qi6bo6:hover { box-shadow: none; }
.css-qi6bo6.Mui-focusVisible { box-shadow: none; }
.css-qi6bo6:active { box-shadow: none; }
.css-qi6bo6.Mui-disabled { box-shadow: none; }
.css-qi6bo6:hover, .css-qi6bo6.Mui-focusVisible { background-color: rgb(27, 32, 48); }
.css-1d1e26 { display: inline-flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; position: relative; box-sizing: border-box; outline: 0px; margin: 0px 12px 24px 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; text-decoration: none; min-width: 64px; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 500; line-height: 1.5rem; font-size: 0.875rem; padding: 6px 12px; color: rgb(255, 255, 255); border: 1px solid rgba(235, 235, 237, 0.12); background-color: rgb(56, 61, 81); }
.css-1d1e26::-moz-focus-inner { border-style: none; }
.css-1d1e26.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-1d1e26 { print-color-adjust: exact; }
}
.css-1d1e26:hover { text-decoration: none; background-color: rgba(241, 241, 243, 0.08); }
@media (hover: none) {
  .css-1d1e26:hover { background-color: transparent; }
}
.css-1d1e26.Mui-disabled { color: rgba(235, 235, 239, 0.3); }
.css-1d1e26:hover { box-shadow: none; }
.css-1d1e26.Mui-focusVisible { box-shadow: none; }
.css-1d1e26:active { box-shadow: none; }
.css-1d1e26.Mui-disabled { box-shadow: none; }
.css-1d1e26:hover, .css-1d1e26.Mui-focusVisible { background-color: rgb(27, 32, 48); }
.css-qr12fg { display: flex; -moz-box-align: center; align-items: center; margin-bottom: 24px; }
.css-cg4wfg { margin: 0px; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.009375rem; line-height: 1.5rem; font-size: 1rem; }
.css-1ykcw8k { background-color: rgb(56, 61, 81); width: 18px; height: 18px; border-radius: 50%; display: flex; -moz-box-pack: center; justify-content: center; margin-left: 8px; border: 0.5px solid rgba(235, 235, 237, 0.12); }
.css-owk8ol { margin: 0px 2px 0px 0px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1.5rem; font-size: 1rem; color: rgb(165, 168, 182); }
.css-19m8tkt { background-color: rgb(41, 46, 65); color: rgb(241, 241, 243); transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1); border-radius: 4px; box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 1px, rgba(0, 0, 0, 0.25) 0px 0px 1px; background-image: none; padding: 16px 16px 80px; }
.css-mqe2mc { display: flex; flex-direction: column; position: relative; height: 280px; background: rgb(56, 61, 81); -moz-box-align: center; align-items: center; border-radius: 8px; padding-left: 16px; padding-right: 16px; padding-top: 8px; margin-bottom: 8px; }
.css-s19e3m { display: flex; flex-direction: column; -moz-box-align: center; align-items: center; gap: 4px; position: absolute; top: 58px; }
.css-i0pzg2 { display: flex; flex-direction: column; gap: 8px; min-height: 280px; }
.css-1yuhvjn { margin-top: 16px; }
.css-33uyd { border-radius: 6px; border: 1px solid rgba(235, 235, 239, 0.08); flex: 0 1 100%; margin-bottom: 2%; max-width: 100%; }
@media (min-width: 0px) {
  .css-gld6tt { display: none; width: 100%; margin-right: 0px; }
}
@media (min-width: 1280px) {
  .css-gld6tt { display: block; width: calc(100% - 432px); margin-right: 16px; }
}
@media (min-width: 0px) {
  .css-d4mf0j { display: block; width: 100%; }
}
@media (min-width: 1280px) {
  .css-d4mf0j { display: block; width: 416px; }
}
.css-1qjoe2c { text-decoration: none; display: inline-flex; -moz-box-align: center; align-items: center; color: rgb(165, 168, 182); cursor: pointer; }
.css-1qjoe2c:hover { color: rgb(241, 241, 243); }
.css-jq9csv { margin: 0px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 143%; font-size: 0.875rem; text-decoration: none; display: inline-flex; -moz-box-align: center; align-items: center; color: rgb(165, 168, 182); cursor: pointer; }
.css-jq9csv:hover { color: rgb(241, 241, 243); }
.css-hspe1h { background-color: rgb(27, 32, 48); padding: 2px; height: 36px; width: 100%; margin-bottom: 16px; }
.css-b0xl2r { display: inline-flex; border-radius: 4px; background-color: rgb(27, 32, 48); padding: 2px; height: 36px; width: 100%; margin-bottom: 16px; }
.css-b0xl2r .MuiToggleButtonGroup-grouped.Mui-selected + .MuiToggleButtonGroup-grouped.Mui-selected { border-left: 0px; margin-left: 0px; }
.css-b0xl2r .MuiToggleButtonGroup-firstButton, .css-b0xl2r .MuiToggleButtonGroup-middleButton { border-top-right-radius: 0px; border-bottom-right-radius: 0px; }
.css-b0xl2r .MuiToggleButtonGroup-lastButton, .css-b0xl2r .MuiToggleButtonGroup-middleButton { margin-left: -1px; border-left: 1px solid transparent; border-top-left-radius: 0px; border-bottom-left-radius: 0px; }
.css-b0xl2r .MuiToggleButtonGroup-lastButton.Mui-disabled, .css-b0xl2r .MuiToggleButtonGroup-middleButton.Mui-disabled { border-left: 1px solid transparent; }
.css-1njiaxf { border: 0px; flex: 1 1 0%; color: rgb(142, 146, 163); border-radius: 4px; }
.css-1njiaxf.Mui-selected, .css-1njiaxf.Mui-selected:hover { border: 1px solid rgba(235, 235, 239, 0.42); background-color: rgb(255, 255, 255); border-radius: 4px !important; }
.css-1njiaxf.Mui-selected, .css-1njiaxf.Mui-disabled { z-index: 100; height: 100%; display: flex; -moz-box-pack: center; justify-content: center; color: rgb(27, 32, 48); }
.css-1crzwhv { padding: 11px; border: 0px; flex: 1 1 0%; color: rgb(142, 146, 163); border-radius: 4px; }
.css-1crzwhv.Mui-disabled { color: rgba(235, 235, 239, 0.3); border: 1px solid rgba(235, 235, 239, 0.12); }
.css-1crzwhv:hover { text-decoration: none; background-color: rgba(241, 241, 243, 0.08); }
@media (hover: none) {
  .css-1crzwhv:hover { background-color: transparent; }
}
.css-1crzwhv.Mui-selected { color: rgb(234, 235, 239); background-color: rgba(234, 235, 239, 0.16); }
.css-1crzwhv.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.24); }
@media (hover: none) {
  .css-1crzwhv.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.16); }
}
.css-1crzwhv.Mui-selected, .css-1crzwhv.Mui-selected:hover { border: 1px solid rgba(235, 235, 239, 0.42); background-color: rgb(255, 255, 255); border-radius: 4px !important; }
.css-1crzwhv.Mui-selected, .css-1crzwhv.Mui-disabled { z-index: 100; height: 100%; display: flex; -moz-box-pack: center; justify-content: center; color: rgb(27, 32, 48); }
.css-m2q0x7 { display: inline-flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; position: relative; box-sizing: border-box; background-color: transparent; outline: 0px; margin: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; text-decoration: none; padding: 11px; border: 0px; flex: 1 1 0%; color: rgb(142, 146, 163); border-radius: 4px; }
.css-m2q0x7::-moz-focus-inner { border-style: none; }
.css-m2q0x7.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-m2q0x7 { print-color-adjust: exact; }
}
.css-m2q0x7.Mui-disabled { color: rgba(235, 235, 239, 0.3); border: 1px solid rgba(235, 235, 239, 0.12); }
.css-m2q0x7:hover { text-decoration: none; background-color: rgba(241, 241, 243, 0.08); }
@media (hover: none) {
  .css-m2q0x7:hover { background-color: transparent; }
}
.css-m2q0x7.Mui-selected { color: rgb(234, 235, 239); background-color: rgba(234, 235, 239, 0.16); }
.css-m2q0x7.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.24); }
@media (hover: none) {
  .css-m2q0x7.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.16); }
}
.css-m2q0x7.Mui-selected, .css-m2q0x7.Mui-selected:hover { border: 1px solid rgba(235, 235, 239, 0.42); background-color: rgb(255, 255, 255); border-radius: 4px !important; }
.css-m2q0x7.Mui-selected, .css-m2q0x7.Mui-disabled { z-index: 100; height: 100%; display: flex; -moz-box-pack: center; justify-content: center; color: rgb(27, 32, 48); }
.css-9cr6cz { display: inline-block; transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1); color: rgb(102, 187, 106); }
.css-9cr6cz .MuiCircularProgress-circle { stroke-linecap: round; }
.css-ro3mqx { display: flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; }
@media (min-width: 0px) {
  .css-ro3mqx { padding: 0px 4px; }
}
@media (min-width: 640px) {
  .css-ro3mqx { padding: 3.625px 4px; }
}
.css-1yw99wu { margin: 0px; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.00625rem; line-height: 1rem; font-size: 0.75rem; color: rgb(165, 168, 182); }
.css-15dm75o { margin-top: 40px; margin-bottom: 16px; }
.css-mbx0dj { display: flex; -moz-box-align: center; align-items: center; -moz-box-pack: justify; justify-content: space-between; margin-bottom: 16px; }
.css-1ryj7lh { display: inline-flex; -moz-box-align: center; align-items: center; margin-right: 24px; }
.css-rh5k9n { width: 6px; height: 6px; background-color: rgb(46, 186, 198); margin-right: 11px; border-radius: 50%; }
.css-4a7r1a { display: inline-flex; border-radius: 4px; height: 24px; }
.css-4a7r1a .MuiToggleButtonGroup-grouped.Mui-selected + .MuiToggleButtonGroup-grouped.Mui-selected { border-left: 0px; margin-left: 0px; }
.css-4a7r1a .MuiToggleButtonGroup-firstButton, .css-4a7r1a .MuiToggleButtonGroup-middleButton { border-top-right-radius: 0px; border-bottom-right-radius: 0px; }
.css-4a7r1a .MuiToggleButtonGroup-lastButton, .css-4a7r1a .MuiToggleButtonGroup-middleButton { margin-left: -1px; border-left: 1px solid transparent; border-top-left-radius: 0px; border-bottom-left-radius: 0px; }
.css-4a7r1a .MuiToggleButtonGroup-lastButton.Mui-disabled, .css-4a7r1a .MuiToggleButtonGroup-middleButton.Mui-disabled { border-left: 1px solid transparent; }
.css-4a7r1a.MuiToggleButtonGroup-grouped { border-radius: unset; }
.css-90v95g { border-radius: 4px; padding: 11px; border: 1px solid rgba(235, 235, 239, 0.08); color: rgba(235, 235, 239, 0.56); }
.css-90v95g.Mui-disabled { color: rgba(235, 235, 239, 0.3); border: 1px solid rgba(235, 235, 239, 0.12); }
.css-90v95g:hover { text-decoration: none; background-color: rgba(241, 241, 243, 0.08); }
@media (hover: none) {
  .css-90v95g:hover { background-color: transparent; }
}
.css-90v95g.Mui-selected { color: rgb(241, 241, 243); background-color: rgba(241, 241, 243, 0.16); }
.css-90v95g.Mui-selected:hover { background-color: rgba(241, 241, 243, 0.24); }
@media (hover: none) {
  .css-90v95g.Mui-selected:hover { background-color: rgba(241, 241, 243, 0.16); }
}
.css-90v95g.MuiToggleButtonGroup-grouped:not(.Mui-selected), .css-90v95g.MuiToggleButtonGroup-grouped.css-90v95g.Mui-disabled { border: 0.5px solid transparent; background-color: rgb(56, 61, 81); color: rgba(235, 235, 239, 0.3); }
.css-90v95g.MuiToggleButtonGroup-grouped.css-90v95g.Mui-selected { border-radius: 4px; border: 0.5px solid rgba(235, 235, 239, 0.08); box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 1px, rgba(0, 0, 0, 0.25) 0px 0px 1px; background-color: rgb(41, 46, 65); }
.css-1d9xxsr { display: inline-flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; position: relative; box-sizing: border-box; background-color: transparent; outline: 0px; margin: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; text-decoration: none; border-radius: 4px; padding: 11px; border: 1px solid rgba(235, 235, 239, 0.08); color: rgba(235, 235, 239, 0.56); }
.css-1d9xxsr::-moz-focus-inner { border-style: none; }
.css-1d9xxsr.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-1d9xxsr { print-color-adjust: exact; }
}
.css-1d9xxsr.Mui-disabled { color: rgba(235, 235, 239, 0.3); border: 1px solid rgba(235, 235, 239, 0.12); }
.css-1d9xxsr:hover { text-decoration: none; background-color: rgba(241, 241, 243, 0.08); }
@media (hover: none) {
  .css-1d9xxsr:hover { background-color: transparent; }
}
.css-1d9xxsr.Mui-selected { color: rgb(241, 241, 243); background-color: rgba(241, 241, 243, 0.16); }
.css-1d9xxsr.Mui-selected:hover { background-color: rgba(241, 241, 243, 0.24); }
@media (hover: none) {
  .css-1d9xxsr.Mui-selected:hover { background-color: rgba(241, 241, 243, 0.16); }
}
.css-1d9xxsr.MuiToggleButtonGroup-grouped:not(.Mui-selected), .css-1d9xxsr.MuiToggleButtonGroup-grouped.css-1d9xxsr.Mui-disabled { border: 0.5px solid transparent; background-color: rgb(56, 61, 81); color: rgba(235, 235, 239, 0.3); }
.css-1d9xxsr.MuiToggleButtonGroup-grouped.css-1d9xxsr.Mui-selected { border-radius: 4px; border: 0.5px solid rgba(235, 235, 239, 0.08); box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 1px, rgba(0, 0, 0, 0.25) 0px 0px 1px; background-color: rgb(41, 46, 65); }
.css-nvri68 { height: 158px; width: auto; display: flex; flex-direction: column; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; }
.css-1k90dmt { display: inline-block; color: rgb(234, 235, 239); animation: 1.4s linear infinite animation-61bdi0; margin-bottom: 8px; opacity: 0.5; }
@keyframes animation-61bdi0 {
0% { transform: rotate(0deg); }
100% { transform: rotate(360deg); }
}
@keyframes animation-61bdi0 {
0% { transform: rotate(0deg); }
100% { transform: rotate(360deg); }
}
.css-14891ef { stroke: currentcolor; stroke-dasharray: 80px, 200px; stroke-dashoffset: 0px; animation: 1.4s ease-in-out infinite animation-1p2h4ri; }
@keyframes animation-1p2h4ri {
0% { stroke-dasharray: 1px, 200px; stroke-dashoffset: 0px; }
50% { stroke-dasharray: 100px, 200px; stroke-dashoffset: -15px; }
100% { stroke-dasharray: 100px, 200px; stroke-dashoffset: -125px; }
}
@keyframes animation-1p2h4ri {
0% { stroke-dasharray: 1px, 200px; stroke-dashoffset: 0px; }
50% { stroke-dasharray: 100px, 200px; stroke-dashoffset: -15px; }
100% { stroke-dasharray: 100px, 200px; stroke-dashoffset: -125px; }
}
.css-1kqxfxi { margin: 0px; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.009375rem; line-height: 1.25rem; font-size: 0.875rem; color: rgb(142, 146, 163); }
.css-y6nr1q { padding-top: 42px; display: inline-flex; -moz-box-align: center; align-items: center; padding-bottom: 12px; }
.css-11bi6rn { margin: 0px; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.009375rem; line-height: 1.25rem; font-size: 0.875rem; }
.css-1sx4fe8 { user-select: none; width: 1em; height: 1em; display: inline-block; fill: currentcolor; flex-shrink: 0; transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1); font-size: 1.25rem; color: rgb(102, 187, 106); margin-left: 8px; }
.css-1hn2o0p { margin: 0px; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.009375rem; line-height: 1.25rem; font-size: 0.875rem; color: rgb(70, 188, 75); }
.css-1b1zfbw { display: flex; flex-wrap: wrap; -moz-box-pack: justify; justify-content: space-between; }
.css-1ddunyq { width: 6px; height: 6px; background-color: rgb(182, 80, 158); margin-right: 11px; border-radius: 50%; }
.css-1mcm0rf { text-decoration: none; }
.css-m4txjo { margin: 0px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 143%; font-size: 0.875rem; color: rgb(234, 235, 239); text-decoration: none; }
.css-1ej2kgu { user-select: none; width: 1em; height: 1em; display: inline-block; fill: currentcolor; flex-shrink: 0; transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1); margin-left: 4px; font-size: 14px; }
.css-pey9f5 { flex: 0 1 32%; margin-bottom: 2%; max-width: 32%; }
@media (min-width: 960px) {
  .css-pey9f5 { height: 70px; }
}
@media (min-width: 1280px) {
  .css-pey9f5 { height: 60px; }
}
.css-1qedxvb { user-select: none; width: 1em; height: 1em; display: inline-block; fill: currentcolor; flex-shrink: 0; transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1); font-size: 14px; margin-right: 2px; margin-left: 8px; }
.css-6zbzur { display: flex; flex-wrap: wrap; -moz-box-pack: justify; justify-content: space-between; padding-top: 12px; }
.css-1oxytmf { margin: 0px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; color: rgb(165, 168, 182); padding-top: 24px; }
.css-1r9t6of { margin: 0px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; color: rgb(165, 168, 182); text-decoration: underline; }
.css-17i6wgu { display: flex; -moz-box-align: center; align-items: center; flex-wrap: wrap; -moz-box-pack: justify; justify-content: space-between; }
.css-189pa4c { min-width: 64px; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); border: 1px solid rgba(235, 235, 239, 0.08); color: rgb(234, 235, 239); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.02875rem; line-height: 1.25rem; text-transform: uppercase; font-size: 0.625rem; padding: 0px 6px; background: rgb(56, 61, 81); vertical-align: top; }
.css-189pa4c:hover { text-decoration: none; background-color: rgba(234, 235, 239, 0.08); border: 1px solid rgb(234, 235, 239); }
@media (hover: none) {
  .css-189pa4c:hover { background-color: transparent; }
}
.css-189pa4c.Mui-disabled { color: rgba(235, 235, 239, 0.3); border: 1px solid rgba(235, 235, 239, 0.12); }
.css-189pa4c:hover { box-shadow: none; }
.css-189pa4c.Mui-focusVisible { box-shadow: none; }
.css-189pa4c:active { box-shadow: none; }
.css-189pa4c.Mui-disabled { box-shadow: none; }
.css-1oroawn { display: inline-flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; position: relative; box-sizing: border-box; outline: 0px; margin: 0px; cursor: pointer; user-select: none; appearance: none; text-decoration: none; min-width: 64px; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); border: 1px solid rgba(235, 235, 239, 0.08); color: rgb(234, 235, 239); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.02875rem; line-height: 1.25rem; text-transform: uppercase; font-size: 0.625rem; padding: 0px 6px; background: rgb(56, 61, 81); vertical-align: top; }
.css-1oroawn::-moz-focus-inner { border-style: none; }
.css-1oroawn.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-1oroawn { print-color-adjust: exact; }
}
.css-1oroawn:hover { text-decoration: none; background-color: rgba(234, 235, 239, 0.08); border: 1px solid rgb(234, 235, 239); }
@media (hover: none) {
  .css-1oroawn:hover { background-color: transparent; }
}
.css-1oroawn.Mui-disabled { color: rgba(235, 235, 239, 0.3); border: 1px solid rgba(235, 235, 239, 0.12); }
.css-1oroawn:hover { box-shadow: none; }
.css-1oroawn.Mui-focusVisible { box-shadow: none; }
.css-1oroawn:active { box-shadow: none; }
.css-1oroawn.Mui-disabled { box-shadow: none; }
.css-f9araz { display: inline-flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; position: relative; box-sizing: border-box; outline: 0px; margin: 0px; cursor: pointer; user-select: none; appearance: none; text-decoration: none; min-width: 64px; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); border: 1px solid rgba(235, 235, 239, 0.08); color: rgb(234, 235, 239); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.02875rem; line-height: 1.25rem; text-transform: uppercase; font-size: 0.625rem; padding: 0px 6px; background: rgb(56, 61, 81); vertical-align: top; }
.css-f9araz::-moz-focus-inner { border-style: none; }
.css-f9araz.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-f9araz { print-color-adjust: exact; }
}
.css-f9araz:hover { text-decoration: none; background-color: rgba(234, 235, 239, 0.08); border: 1px solid rgb(234, 235, 239); }
@media (hover: none) {
  .css-f9araz:hover { background-color: transparent; }
}
.css-f9araz.Mui-disabled { color: rgba(235, 235, 239, 0.3); border: 1px solid rgba(235, 235, 239, 0.12); }
.css-f9araz:hover { box-shadow: none; }
.css-f9araz.Mui-focusVisible { box-shadow: none; }
.css-f9araz:active { box-shadow: none; }
.css-f9araz.Mui-disabled { box-shadow: none; }
.css-1jwp6ou { display: inline-flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; position: relative; box-sizing: border-box; outline: 0px; margin: 0px; cursor: pointer; user-select: none; appearance: none; text-decoration: none; min-width: 64px; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); border: 1px solid rgba(235, 235, 239, 0.08); color: rgb(234, 235, 239); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.02875rem; line-height: 1.25rem; text-transform: uppercase; font-size: 0.625rem; padding: 0px 6px; background: rgb(56, 61, 81); vertical-align: top; }
.css-1jwp6ou::-moz-focus-inner { border-style: none; }
.css-1jwp6ou.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-1jwp6ou { print-color-adjust: exact; }
}
.css-1jwp6ou:hover { text-decoration: none; background-color: rgba(234, 235, 239, 0.08); border: 1px solid rgb(234, 235, 239); }
@media (hover: none) {
  .css-1jwp6ou:hover { background-color: transparent; }
}
.css-1jwp6ou.Mui-disabled { color: rgba(235, 235, 239, 0.3); border: 1px solid rgba(235, 235, 239, 0.12); }
.css-1jwp6ou:hover { box-shadow: none; }
.css-1jwp6ou.Mui-focusVisible { box-shadow: none; }
.css-1jwp6ou:active { box-shadow: none; }
.css-1jwp6ou.Mui-disabled { box-shadow: none; }
.css-kcxyz4 { display: inherit; margin-right: -2px; margin-left: 8px; }
.css-kcxyz4 > :nth-of-type(1) { font-size: 18px; }
.css-18n8dfg { user-select: none; display: inline-block; fill: currentcolor; flex-shrink: 0; transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1); font-size: 1.5rem; width: 14px; height: 14px; }
.css-1553f39 { margin-top: 32px; margin-bottom: 40px; }
.css-r27nld { width: 6px; height: 6px; background-color: rgb(0, 98, 210); margin-right: 11px; border-radius: 50%; }
.css-1w9bubx { display: flex; flex-direction: row; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; margin: 2px 8px; font-size: 12px; background: rgba(235, 235, 239, 0.08); border-radius: 99px; }
.css-228kdt { font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.00625rem; line-height: 1rem; font-size: 0.75rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; margin: 4px; }
.css-1ggblhy { min-width: 64px; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); border: 1px solid rgba(235, 235, 239, 0.08); color: rgb(234, 235, 239); width: 100%; box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 500; line-height: 1.5rem; font-size: 0.875rem; padding: 6px 12px; background: rgb(56, 61, 81); height: 36px; }
.css-1ggblhy:hover { text-decoration: none; background-color: rgba(234, 235, 239, 0.08); border: 1px solid rgb(234, 235, 239); }
@media (hover: none) {
  .css-1ggblhy:hover { background-color: transparent; }
}
.css-1ggblhy.Mui-disabled { color: rgba(235, 235, 239, 0.3); border: 1px solid rgba(235, 235, 239, 0.12); }
.css-1ggblhy:hover { box-shadow: none; }
.css-1ggblhy.Mui-focusVisible { box-shadow: none; }
.css-1ggblhy:active { box-shadow: none; }
.css-1ggblhy.Mui-disabled { box-shadow: none; }
.css-hyopbi { display: inline-flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; position: relative; box-sizing: border-box; outline: 0px; margin: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; text-decoration: none; min-width: 64px; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); border: 1px solid rgba(235, 235, 239, 0.08); color: rgb(234, 235, 239); width: 100%; box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 500; line-height: 1.5rem; font-size: 0.875rem; padding: 6px 12px; background: rgb(56, 61, 81); height: 36px; }
.css-hyopbi::-moz-focus-inner { border-style: none; }
.css-hyopbi.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-hyopbi { print-color-adjust: exact; }
}
.css-hyopbi:hover { text-decoration: none; background-color: rgba(234, 235, 239, 0.08); border: 1px solid rgb(234, 235, 239); }
@media (hover: none) {
  .css-hyopbi:hover { background-color: transparent; }
}
.css-hyopbi.Mui-disabled { color: rgba(235, 235, 239, 0.3); border: 1px solid rgba(235, 235, 239, 0.12); }
.css-hyopbi:hover { box-shadow: none; }
.css-hyopbi.Mui-focusVisible { box-shadow: none; }
.css-hyopbi:active { box-shadow: none; }
.css-hyopbi.Mui-disabled { box-shadow: none; }
.css-3qqj7e { margin: 0px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1.25rem; font-size: 0.875rem; display: inline-flex; gap: 4px; }
.css-i16llk { display: flex; flex-direction: row; width: 100%; -moz-box-pack: justify; justify-content: space-between; padding-top: 8px; }
.css-14cvfvq { user-select: none; overflow: hidden; text-align: center; flex-shrink: 0; font-size: 1.5rem; display: flex; position: relative; border-radius: 50%; margin-right: 4px; width: 14px; height: 14px; }
.css-1swxn9o { user-select: none; width: 1em; height: 1em; display: inline-block; fill: currentcolor; flex-shrink: 0; transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1); font-size: 1.25rem; color: rgb(244, 67, 54); margin-left: 8px; }
.css-evpph0 { margin: 0px; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.009375rem; line-height: 1.25rem; font-size: 0.875rem; color: rgb(242, 78, 78); }
.css-1glnbj7 { margin: 0px 8px 8px 0px; font-family: Inter, Arial; letter-spacing: 0.00625rem; line-height: 1rem; font-size: 0.75rem; color: rgb(165, 168, 182); font-weight: 400; }
.css-69i1ev { display: flex; -moz-box-pack: justify; justify-content: space-between; -moz-box-align: center; align-items: center; }
.css-mwlzbx { margin: 0px; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.00625rem; line-height: 1rem; font-size: 0.75rem; color: rgb(241, 241, 243); }
.css-14yw1bj { padding-top: 42px; padding-bottom: 12px; }
.css-bpjh1v { display: flex; box-shadow: none; border-radius: 4px; padding: 8px 12px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; color: rgb(255, 220, 168); background: rgb(48, 30, 4); margin-bottom: 12px; -moz-box-align: center; align-items: center; width: 100%; margin-top: 12px; }
.css-bpjh1v .MuiAlert-icon { color: rgb(255, 167, 38); }
.css-bpjh1v .MuiAlert-message { padding: 2px 0px; }
.css-bpjh1v .MuiAlert-icon { padding: 0px; opacity: 1; }
.css-bpjh1v .MuiAlert-icon .MuiSvgIcon-root { font-size: 1.25rem; }
.css-bpjh1v a { font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; text-decoration: underline; }
.css-bpjh1v a:hover { text-decoration: none; }
.css-bpjh1v .MuiButton-text { font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; text-decoration: underline; padding: 0px; margin: 0px; min-width: unset; }
.css-bpjh1v .MuiButton-text:hover { text-decoration: none; background: transparent; }
.css-bpjh1v a { color: rgb(255, 220, 168); }
.css-bpjh1v .MuiButton-text { color: rgb(255, 220, 168); }
.css-1gp4s3x { transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1); display: flex; box-shadow: none; border-radius: 4px; padding: 8px 12px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; color: rgb(255, 220, 168); background: rgb(48, 30, 4); margin-bottom: 12px; -moz-box-align: center; align-items: center; width: 100%; margin-top: 12px; }
.css-1gp4s3x .MuiAlert-icon { color: rgb(255, 167, 38); }
.css-1gp4s3x .MuiAlert-message { padding: 2px 0px; }
.css-1gp4s3x .MuiAlert-icon { padding: 0px; opacity: 1; }
.css-1gp4s3x .MuiAlert-icon .MuiSvgIcon-root { font-size: 1.25rem; }
.css-1gp4s3x a { font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; text-decoration: underline; }
.css-1gp4s3x a:hover { text-decoration: none; }
.css-1gp4s3x .MuiButton-text { font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; text-decoration: underline; padding: 0px; margin: 0px; min-width: unset; }
.css-1gp4s3x .MuiButton-text:hover { text-decoration: none; background: transparent; }
.css-1gp4s3x a { color: rgb(255, 220, 168); }
.css-1gp4s3x .MuiButton-text { color: rgb(255, 220, 168); }
.css-zjsy05 { user-select: none; width: 1em; height: 1em; display: inline-block; fill: currentcolor; flex-shrink: 0; transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1); font-size: 1.5rem; color: rgb(255, 167, 38); }
.css-1537p62 { margin: 0px 12px 0px 8px; font-family: Inter, Arial; font-weight: 700; letter-spacing: 0.015625rem; line-height: 123.5%; font-size: 1.75rem; }
.css-1vssp9z { margin: 0px 0px 0px 2px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1.5rem; font-size: 1rem; color: rgb(165, 168, 182); }
.css-h9uqm5 { margin: 0px 12px 0px 8px; font-family: Inter, Arial; font-weight: 600; letter-spacing: unset; line-height: 133.4%; font-size: 1.3125rem; }
.css-icw4sk { margin: 0px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 143%; font-size: 0.875rem; color: rgb(241, 241, 243); }
.css-1vvxf65 { transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); color: rgba(0, 0, 0, 0.87); background-color: rgb(234, 235, 239); width: 100%; box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 500; line-height: 1.5rem; font-size: 0.875rem; padding: 6px 12px; min-width: 96px; }
.css-1vvxf65:hover { text-decoration: none; background-color: rgb(210, 212, 220); box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px; }
@media (hover: none) {
  .css-1vvxf65:hover { background-color: rgb(234, 235, 239); }
}
.css-1vvxf65:active { box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px; }
.css-1vvxf65.Mui-focusVisible { box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px; }
.css-1vvxf65.Mui-disabled { color: rgba(235, 235, 239, 0.3); box-shadow: none; background-color: rgba(235, 235, 239, 0.12); }
.css-1vvxf65:hover { box-shadow: none; }
.css-1vvxf65.Mui-focusVisible { box-shadow: none; }
.css-1vvxf65:active { box-shadow: none; }
.css-1vvxf65.Mui-disabled { box-shadow: none; }
@media (min-width: 0px) {
  .css-1vvxf65 { margin-bottom: 24px; }
}
@media (min-width: 640px) {
  .css-1vvxf65 { margin-bottom: 0px; }
}
.css-1j2v6fe { display: inline-flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; position: relative; box-sizing: border-box; outline: 0px; border: 0px; margin: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; text-decoration: none; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); color: rgba(0, 0, 0, 0.87); background-color: rgb(234, 235, 239); width: 100%; box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 500; line-height: 1.5rem; font-size: 0.875rem; padding: 6px 12px; min-width: 96px; }
.css-1j2v6fe::-moz-focus-inner { border-style: none; }
.css-1j2v6fe.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-1j2v6fe { print-color-adjust: exact; }
}
.css-1j2v6fe:hover { text-decoration: none; background-color: rgb(210, 212, 220); box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px; }
@media (hover: none) {
  .css-1j2v6fe:hover { background-color: rgb(234, 235, 239); }
}
.css-1j2v6fe:active { box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px; }
.css-1j2v6fe.Mui-focusVisible { box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px; }
.css-1j2v6fe.Mui-disabled { color: rgba(235, 235, 239, 0.3); box-shadow: none; background-color: rgba(235, 235, 239, 0.12); }
.css-1j2v6fe:hover { box-shadow: none; }
.css-1j2v6fe.Mui-focusVisible { box-shadow: none; }
.css-1j2v6fe:active { box-shadow: none; }
.css-1j2v6fe.Mui-disabled { box-shadow: none; }
@media (min-width: 0px) {
  .css-1j2v6fe { margin-bottom: 24px; }
}
@media (min-width: 640px) {
  .css-1j2v6fe { margin-bottom: 0px; }
}
.css-5qtwd3 { min-width: 64px; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); color: rgba(0, 0, 0, 0.87); background-color: rgb(234, 235, 239); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 500; line-height: 1.5rem; font-size: 0.875rem; padding: 6px 12px; -moz-box-align: center; align-items: center; display: flex; }
.css-5qtwd3:hover { text-decoration: none; background-color: rgb(210, 212, 220); box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px; }
@media (hover: none) {
  .css-5qtwd3:hover { background-color: rgb(234, 235, 239); }
}
.css-5qtwd3:active { box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px; }
.css-5qtwd3.Mui-focusVisible { box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px; }
.css-5qtwd3.Mui-disabled { color: rgba(235, 235, 239, 0.3); box-shadow: none; background-color: rgba(235, 235, 239, 0.12); }
.css-5qtwd3:hover { box-shadow: none; }
.css-5qtwd3.Mui-focusVisible { box-shadow: none; }
.css-5qtwd3:active { box-shadow: none; }
.css-5qtwd3.Mui-disabled { box-shadow: none; }
@media (min-width: 0px) {
  .css-5qtwd3 { gap: 8px; }
}
@media (min-width: 640px) {
  .css-5qtwd3 { gap: 4px; }
}
.css-uuxuwn { -moz-box-pack: center; justify-content: center; position: relative; box-sizing: border-box; outline: 0px; border: 0px; margin: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; text-decoration: none; min-width: 64px; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); color: rgba(0, 0, 0, 0.87); background-color: rgb(234, 235, 239); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 500; line-height: 1.5rem; font-size: 0.875rem; padding: 6px 12px; -moz-box-align: center; align-items: center; display: flex; }
.css-uuxuwn::-moz-focus-inner { border-style: none; }
.css-uuxuwn.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-uuxuwn { print-color-adjust: exact; }
}
.css-uuxuwn:hover { text-decoration: none; background-color: rgb(210, 212, 220); box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px; }
@media (hover: none) {
  .css-uuxuwn:hover { background-color: rgb(234, 235, 239); }
}
.css-uuxuwn:active { box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px; }
.css-uuxuwn.Mui-focusVisible { box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px; }
.css-uuxuwn.Mui-disabled { color: rgba(235, 235, 239, 0.3); box-shadow: none; background-color: rgba(235, 235, 239, 0.12); }
.css-uuxuwn:hover { box-shadow: none; }
.css-uuxuwn.Mui-focusVisible { box-shadow: none; }
.css-uuxuwn:active { box-shadow: none; }
.css-uuxuwn.Mui-disabled { box-shadow: none; }
@media (min-width: 0px) {
  .css-uuxuwn { gap: 8px; }
}
@media (min-width: 640px) {
  .css-uuxuwn { gap: 4px; }
}
.css-1droywf { -moz-box-pack: center; justify-content: center; position: relative; box-sizing: border-box; outline: 0px; border: 0px; margin: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; text-decoration: none; min-width: 64px; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); color: rgba(0, 0, 0, 0.87); background-color: rgb(234, 235, 239); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 500; line-height: 1.5rem; font-size: 0.875rem; padding: 6px 12px; -moz-box-align: center; align-items: center; display: flex; }
.css-1droywf::-moz-focus-inner { border-style: none; }
.css-1droywf.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-1droywf { print-color-adjust: exact; }
}
.css-1droywf:hover { text-decoration: none; background-color: rgb(210, 212, 220); box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px; }
@media (hover: none) {
  .css-1droywf:hover { background-color: rgb(234, 235, 239); }
}
.css-1droywf:active { box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px; }
.css-1droywf.Mui-focusVisible { box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px; }
.css-1droywf.Mui-disabled { color: rgba(235, 235, 239, 0.3); box-shadow: none; background-color: rgba(235, 235, 239, 0.12); }
.css-1droywf:hover { box-shadow: none; }
.css-1droywf.Mui-focusVisible { box-shadow: none; }
.css-1droywf:active { box-shadow: none; }
.css-1droywf.Mui-disabled { box-shadow: none; }
@media (min-width: 0px) {
  .css-1droywf { gap: 8px; }
}
@media (min-width: 640px) {
  .css-1droywf { gap: 4px; }
}
.css-1iveq8m { letter-spacing: 0.009375rem; -moz-box-pack: center; justify-content: center; position: relative; box-sizing: border-box; outline: 0px; border: 0px; margin: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; text-decoration: none; min-width: 64px; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); color: rgba(0, 0, 0, 0.87); background-color: rgb(234, 235, 239); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 500; line-height: 1.5rem; font-size: 0.875rem; padding: 6px 12px; -moz-box-align: center; align-items: center; display: flex; }
.css-1iveq8m::-moz-focus-inner { border-style: none; }
.css-1iveq8m.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-1iveq8m { print-color-adjust: exact; }
}
.css-1iveq8m:hover { text-decoration: none; background-color: rgb(210, 212, 220); box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px; }
@media (hover: none) {
  .css-1iveq8m:hover { background-color: rgb(234, 235, 239); }
}
.css-1iveq8m:active { box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px; }
.css-1iveq8m.Mui-focusVisible { box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px; }
.css-1iveq8m.Mui-disabled { color: rgba(235, 235, 239, 0.3); box-shadow: none; background-color: rgba(235, 235, 239, 0.12); }
.css-1iveq8m:hover { box-shadow: none; }
.css-1iveq8m.Mui-focusVisible { box-shadow: none; }
.css-1iveq8m:active { box-shadow: none; }
.css-1iveq8m.Mui-disabled { box-shadow: none; }
@media (min-width: 0px) {
  .css-1iveq8m { gap: 8px; }
}
@media (min-width: 640px) {
  .css-1iveq8m { gap: 4px; }
}
.css-178npxl { letter-spacing: 0.009375rem; -moz-box-pack: center; justify-content: center; position: relative; box-sizing: border-box; outline: 0px; border: 0px; margin: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; text-decoration: none; min-width: 64px; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); color: rgba(0, 0, 0, 0.87); background-color: rgb(234, 235, 239); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 500; line-height: 1.5rem; font-size: 0.875rem; padding: 6px 12px; -moz-box-align: center; align-items: center; display: flex; }
.css-178npxl::-moz-focus-inner { border-style: none; }
.css-178npxl.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-178npxl { print-color-adjust: exact; }
}
.css-178npxl:hover { text-decoration: none; background-color: rgb(210, 212, 220); box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px; }
@media (hover: none) {
  .css-178npxl:hover { background-color: rgb(234, 235, 239); }
}
.css-178npxl:active { box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px; }
.css-178npxl.Mui-focusVisible { box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px; }
.css-178npxl.Mui-disabled { color: rgba(235, 235, 239, 0.3); box-shadow: none; background-color: rgba(235, 235, 239, 0.12); }
.css-178npxl:hover { box-shadow: none; }
.css-178npxl.Mui-focusVisible { box-shadow: none; }
.css-178npxl:active { box-shadow: none; }
.css-178npxl.Mui-disabled { box-shadow: none; }
@media (min-width: 0px) {
  .css-178npxl { gap: 8px; }
}
@media (min-width: 640px) {
  .css-178npxl { gap: 4px; }
}


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

/* Overlay Background */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

/* Popup Box */
.popup {
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  text-align: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
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
.css-70qvj9 { display: flex; -moz-box-align: center; align-items: center; }
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
.css-l9yetb { display: flex; -moz-box-align: center; align-items: center; align-self: center; margin-bottom: 16px; min-height: 40px; flex-direction: row; }
.css-k10xi7 { min-width: 64px; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 500; line-height: 1.5rem; font-size: 0.875rem; padding: 6px 12px; color: rgb(255, 255, 255); border: 1px solid rgba(235, 235, 237, 0.12); background-color: rgb(56, 61, 81); margin-right: 12px; margin-bottom: 0px; }
.css-k10xi7:hover { text-decoration: none; background-color: rgba(241, 241, 243, 0.08); }
@media (hover: none) {
  .css-k10xi7:hover { background-color: transparent; }
}
.css-k10xi7.Mui-disabled { color: rgba(235, 235, 239, 0.3); }
.css-k10xi7:hover { box-shadow: none; }
.css-k10xi7.Mui-focusVisible { box-shadow: none; }
.css-k10xi7:active { box-shadow: none; }
.css-k10xi7.Mui-disabled { box-shadow: none; }
.css-k10xi7:hover, .css-k10xi7.Mui-focusVisible { background-color: rgb(27, 32, 48); }
.css-pvmlr { display: inline-flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; position: relative; box-sizing: border-box; outline: 0px; margin: 0px 12px 0px 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; text-decoration: none; min-width: 64px; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 500; line-height: 1.5rem; font-size: 0.875rem; padding: 6px 12px; color: rgb(255, 255, 255); border: 1px solid rgba(235, 235, 237, 0.12); background-color: rgb(56, 61, 81); }
.css-pvmlr::-moz-focus-inner { border-style: none; }
.css-pvmlr.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-pvmlr { print-color-adjust: exact; }
}
.css-pvmlr:hover { text-decoration: none; background-color: rgba(241, 241, 243, 0.08); }
@media (hover: none) {
  .css-pvmlr:hover { background-color: transparent; }
}
.css-pvmlr.Mui-disabled { color: rgba(235, 235, 239, 0.3); }
.css-pvmlr:hover { box-shadow: none; }
.css-pvmlr.Mui-focusVisible { box-shadow: none; }
.css-pvmlr:active { box-shadow: none; }
.css-pvmlr.Mui-disabled { box-shadow: none; }
.css-pvmlr:hover, .css-pvmlr.Mui-focusVisible { background-color: rgb(27, 32, 48); }
.css-1l6c7y9 { display: inherit; margin-right: 8px; margin-left: -4px; }
.css-1l6c7y9 > :nth-of-type(1) { font-size: 20px; }
.css-435pdq { margin-right: 8px; width: 20px; height: 20px; position: relative; }
.css-1ebotei { margin: 0px; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.009375rem; line-height: 1.25rem; font-size: 0.875rem; color: rgb(255, 255, 255); }
.css-wxyvle { color: rgb(255, 255, 255); padding-left: 8px; padding-right: 8px; margin-left: 8px; margin-right: 8px; border-radius: 12px; background: linear-gradient(248.86deg, rgb(182, 80, 158) 10.51%, rgb(46, 186, 198) 93.41%); }
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
.css-90g7yj { margin-right: 12px; display: flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; }
.css-1fn9tio { display: block; height: 1.2em; border-radius: 50%; animation: 2s ease-in-out 0.5s infinite animation-c7515d; transform: unset; background: rgb(56, 61, 81); }
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
.css-18biwo { display: inline-flex; -moz-box-align: center; align-items: center; }
.css-1t8x1s2 { margin: 0px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 143%; font-size: 0.875rem; color: rgb(165, 168, 182); }
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
.css-x3zkb6 { margin: 4px 0px; flex-shrink: 0; border-width: 0px thin 0px 0px; border-style: solid; height: auto; align-self: stretch; border-color: rgba(235, 235, 239, 0.08); }
.css-1x4zjhu { margin: 0px; font-family: Inter, Arial; font-weight: 800; line-height: 133.4%; font-size: 1.3125rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; display: inline-flex; flex-direction: row; -moz-box-align: center; align-items: center; position: relative; }
.css-vj5di1 { margin: 0px 2px 0px 0px; font-family: Inter, Arial; font-weight: 500; line-height: 133.4%; font-size: 1.3125rem; color: rgb(165, 168, 182); }
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
@media (min-width: 0px) {
  .css-duo07e { display: flex; -moz-box-pack: center; justify-content: center; margin-bottom: 12px; }
}
@media (min-width: 640px) {
  .css-duo07e { -moz-box-pack: start; justify-content: flex-start; margin-bottom: 16px; }
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
.css-k008qs { display: flex; }
@media (min-width: 0px) {
  .css-14g9wgc { display: block; width: 100%; margin-right: 0px; }
}
@media (min-width: 1280px) {
  .css-14g9wgc { display: block; width: calc(100% - 432px); margin-right: 16px; }
}
.css-48h151 { background-color: rgb(41, 46, 65); color: rgb(241, 241, 243); transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1); border-radius: 4px; box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 1px, rgba(0, 0, 0, 0.25) 0px 0px 1px; background-image: none; padding: 16px 24px 80px; }
.css-1xdb5ir { display: flex; -moz-box-align: center; align-items: center; gap: 24px; flex-wrap: wrap; margin-bottom: 36px; }
.css-2jc8ge { margin: 0px; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.009375rem; line-height: 160%; font-size: 1.125rem; }
@media (min-width: 0px) {
  .css-1osbn5p { display: none; width: 100%; }
}
@media (min-width: 1280px) {
  .css-1osbn5p { display: block; width: 416px; }
}
.css-yt1g49 { background-color: rgb(41, 46, 65); color: rgb(241, 241, 243); transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1); border-radius: 4px; box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 1px, rgba(0, 0, 0, 0.25) 0px 0px 1px; background-image: none; padding-top: 16px; }
@media (min-width: 0px) {
  .css-yt1g49 { padding-bottom: 16px; padding-left: 16px; padding-right: 16px; }
}
@media (min-width: 640px) {
  .css-yt1g49 { padding-bottom: 24px; padding-left: 24px; padding-right: 24px; }
}
.css-tuyoad { margin: 0px 0px 24px; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.009375rem; line-height: 160%; font-size: 1.125rem; }
.css-gojse6 { display: flex; flex-direction: row; gap: 12px; }
.css-14ukr51 { display: block; background-color: rgba(241, 241, 243, 0.13); height: auto; margin-top: 0px; margin-bottom: 0px; transform-origin: 0px 55% 0px; animation: 2s ease-in-out 0.5s infinite animation-c7515d; transform: unset; border-radius: 12px; }
.css-14ukr51:empty::before { content: " "; }
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
.css-16fi75 { display: block; background-color: rgba(241, 241, 243, 0.13); height: auto; transform-origin: 0px 55% 0px; border-radius: 4px / 6.7px; animation: 2s ease-in-out 0.5s infinite animation-c7515d; transform: unset; margin-top: 4px; margin-bottom: 8px; }
.css-16fi75:empty::before { content: " "; }
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
.css-ocmf2r { margin: 24px 0px; flex-shrink: 0; border-width: 0px 0px thin; border-style: solid; border-color: rgba(235, 235, 239, 0.08); }
.css-1hdbc19 { display: flex; flex-direction: column; gap: 12px; }
.css-23jv9 { display: flex; flex-direction: row; -moz-box-pack: justify; justify-content: space-between; -moz-box-align: center; align-items: center; height: 44px; }
.css-oickpl { position: relative; margin: 0px auto; }
@media (min-width: 0px) {
  .css-oickpl { display: block; }
}
@media (min-width: 960px) {
  .css-oickpl { display: flex; }
}
.css-ei9oq1 { margin: 0px 16px 0px 0px; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.009375rem; line-height: 1.25rem; font-size: 0.875rem; }
@media (min-width: 0px) {
  .css-ei9oq1 { min-width: 170px; margin-bottom: 24px; }
}
@media (min-width: 960px) {
  .css-ei9oq1 { margin-bottom: 0px; }
}
.css-132zyz9 { margin: 0px 0px 0.35em; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 143%; font-size: 0.875rem; }
.css-1dtnjt5 { display: flex; -moz-box-align: center; align-items: center; flex-wrap: wrap; }
.css-1qafrbr { transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); border: 1px solid rgba(235, 235, 239, 0.08); color: rgb(234, 235, 239); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.02875rem; line-height: 1.25rem; text-transform: uppercase; font-size: 0.625rem; background: rgb(56, 61, 81); padding: 2px 4px; margin-top: 8px; margin-right: 8px; min-width: 0px; }
.css-1qafrbr:hover { text-decoration: none; background-color: rgba(234, 235, 239, 0.08); border: 1px solid rgb(234, 235, 239); }
@media (hover: none) {
  .css-1qafrbr:hover { background-color: transparent; }
}
.css-1qafrbr.Mui-disabled { color: rgba(235, 235, 239, 0.3); border: 1px solid rgba(235, 235, 239, 0.12); }
.css-1qafrbr:hover { box-shadow: none; }
.css-1qafrbr.Mui-focusVisible { box-shadow: none; }
.css-1qafrbr:active { box-shadow: none; }
.css-1qafrbr.Mui-disabled { box-shadow: none; }
.css-d0o01l { display: inline-flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; position: relative; box-sizing: border-box; outline: 0px; margin: 8px 8px 0px 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; text-decoration: none; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); border: 1px solid rgba(235, 235, 239, 0.08); color: rgb(234, 235, 239); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.02875rem; line-height: 1.25rem; text-transform: uppercase; font-size: 0.625rem; background: rgb(56, 61, 81); padding: 2px 4px; min-width: 0px; }
.css-d0o01l::-moz-focus-inner { border-style: none; }
.css-d0o01l.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-d0o01l { print-color-adjust: exact; }
}
.css-d0o01l:hover { text-decoration: none; background-color: rgba(234, 235, 239, 0.08); border: 1px solid rgb(234, 235, 239); }
@media (hover: none) {
  .css-d0o01l:hover { background-color: transparent; }
}
.css-d0o01l.Mui-disabled { color: rgba(235, 235, 239, 0.3); border: 1px solid rgba(235, 235, 239, 0.12); }
.css-d0o01l:hover { box-shadow: none; }
.css-d0o01l.Mui-focusVisible { box-shadow: none; }
.css-d0o01l:active { box-shadow: none; }
.css-d0o01l.Mui-disabled { box-shadow: none; }
.css-uhsboa { display: inline-flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; position: relative; box-sizing: border-box; outline: 0px; margin: 8px 8px 0px 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; text-decoration: none; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); border: 1px solid rgba(235, 235, 239, 0.08); color: rgb(234, 235, 239); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.02875rem; line-height: 1.25rem; text-transform: uppercase; font-size: 0.625rem; background: rgb(56, 61, 81); padding: 2px 4px; min-width: 0px; }
.css-uhsboa::-moz-focus-inner { border-style: none; }
.css-uhsboa.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-uhsboa { print-color-adjust: exact; }
}
.css-uhsboa:hover { text-decoration: none; background-color: rgba(234, 235, 239, 0.08); border: 1px solid rgb(234, 235, 239); }
@media (hover: none) {
  .css-uhsboa:hover { background-color: transparent; }
}
.css-uhsboa.Mui-disabled { color: rgba(235, 235, 239, 0.3); border: 1px solid rgba(235, 235, 239, 0.12); }
.css-uhsboa:hover { box-shadow: none; }
.css-uhsboa.Mui-focusVisible { box-shadow: none; }
.css-uhsboa:active { box-shadow: none; }
.css-uhsboa.Mui-disabled { box-shadow: none; }
.css-1b8xk8p { display: inline-flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; position: relative; box-sizing: border-box; outline: 0px; margin: 8px 8px 0px 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; text-decoration: none; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); border: 1px solid rgba(235, 235, 239, 0.08); color: rgb(234, 235, 239); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.02875rem; line-height: 1.25rem; text-transform: uppercase; font-size: 0.625rem; background: rgb(56, 61, 81); padding: 2px 4px; min-width: 0px; }
.css-1b8xk8p::-moz-focus-inner { border-style: none; }
.css-1b8xk8p.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-1b8xk8p { print-color-adjust: exact; }
}
.css-1b8xk8p:hover { text-decoration: none; background-color: rgba(234, 235, 239, 0.08); border: 1px solid rgb(234, 235, 239); }
@media (hover: none) {
  .css-1b8xk8p:hover { background-color: transparent; }
}
.css-1b8xk8p.Mui-disabled { color: rgba(235, 235, 239, 0.3); border: 1px solid rgba(235, 235, 239, 0.12); }
.css-1b8xk8p:hover { box-shadow: none; }
.css-1b8xk8p.Mui-focusVisible { box-shadow: none; }
.css-1b8xk8p:active { box-shadow: none; }
.css-1b8xk8p.Mui-disabled { box-shadow: none; }
.css-8bhn0 { margin: 0px 4px 0px 0px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 143%; font-size: 10px; }
.css-o9s1zr { user-select: none; width: 1em; height: 1em; display: inline-block; fill: currentcolor; flex-shrink: 0; transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1); font-size: 14px; }
.css-1r56f2y { margin: 0px; flex-shrink: 0; border-width: 0px 0px thin; border-style: solid; border-color: rgba(235, 235, 239, 0.08); }
@media (min-width: 0px) {
  .css-1r56f2y { margin-top: 24px; margin-bottom: 24px; }
}
@media (min-width: 760px) {
  .css-1r56f2y { margin-top: 40px; margin-bottom: 40px; }
}
.css-15z9wyn { -moz-box-flex: 1; flex-grow: 1; min-width: 0px; max-width: 100%; width: 100%; }
.css-1xhj18k { display: flex; flex-direction: row; }
.css-dvot97 { position: relative; margin-right: 16px; }
.css-yv5wnn { display: inline-block; transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1); color: rgb(66, 66, 66); position: absolute; left: 1.25px; top: 1.25px; }
.css-13o7eu2 { display: block; }
.css-nbfpn7 { stroke: currentcolor; transition: stroke-dashoffset 300ms cubic-bezier(0.4, 0, 0.2, 1); }
.css-7qyd78 { display: inline-block; transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1); color: rgb(255, 167, 38); }
.css-7qyd78 .MuiCircularProgress-circle { stroke-linecap: round; }
.css-r4spco { margin: 0px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1.25rem; font-size: 0.875rem; position: absolute; inset: 0px; display: flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; }
.css-ov2ylm { position: relative; }
.css-ov2ylm:not(:last-child) { padding-right: 16px; margin-right: 16px; }
.css-ov2ylm:not(:last-child):not(.borderless)::after { content: ""; height: 32px; position: absolute; right: 4px; top: calc(50% - 17px); border-right: 1px solid rgba(235, 235, 239, 0.08); }
.css-dtnerw { display: flex; flex-direction: column; align-items: flex-start; -moz-box-pack: end; justify-content: flex-end; flex: 1 1 0%; overflow: hidden; padding-top: 4px; padding-bottom: 4px; }
.css-1ogi1pb { margin: 0px; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.009375rem; line-height: 1.5rem; font-size: 1rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; display: inline-flex; flex-direction: row; -moz-box-align: center; align-items: center; position: relative; }
.css-dyg06u { margin: 0px 4px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1.5rem; font-size: 1rem; color: rgb(241, 241, 243); display: inline-block; }
.css-1xwiwhj { display: inline-flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; }
@media (min-width: 0px) {
  .css-1xwiwhj { padding: 0px; }
}
@media (min-width: 640px) {
  .css-1xwiwhj { padding: 3.625px 0px; }
}
.css-cyw6g5 { margin: 0px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.00625rem; line-height: 1rem; font-size: 0.75rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: rgb(165, 168, 182); display: inline-flex; flex-direction: row; -moz-box-align: center; align-items: center; position: relative; }
.css-1x1c6wp { margin: 0px 2px 0px 0px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.00625rem; line-height: 1rem; font-size: 0.75rem; color: rgb(165, 168, 182); }
.css-g5g2u1 { margin: 0px 4px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.00625rem; line-height: 1rem; font-size: 0.75rem; color: rgb(165, 168, 182); display: inline-block; }
@media (min-width: 0px) {
  .css-ozoimy { margin-top: 24px; }
}
@media (min-width: 760px) {
  .css-ozoimy { margin-top: 0px; }
}
.css-2am8m { margin: 0px 0px 0px 2px; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.009375rem; line-height: 1.5rem; font-size: 1rem; color: rgb(165, 168, 182); }
.css-h5fkc8 { margin-top: 32px; }
.css-16hy5wk { margin: 0px 0px 0.35em; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.009375rem; line-height: 1.25rem; font-size: 0.875rem; }
.css-1pgimmy { margin: 0px 0px 24px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; color: rgb(165, 168, 182); }
.css-5kz7rn { display: flex; flex-direction: row; gap: 32px; }
.css-1spvj5p { flex-basis: 50%; }
.css-1o3exs0 { display: flex; flex-direction: column; position: relative; background: rgb(56, 61, 81); min-width: 306px; height: 320px; -moz-box-pack: justify; justify-content: space-between; -moz-box-align: center; align-items: center; border-radius: 8px; padding: 16px 24px; }
.css-r81tyl { display: flex; flex-direction: column; -moz-box-align: center; align-items: center; gap: 4px; position: absolute; top: 65px; }
.css-g77elk { margin: 0px; font-family: Inter, Arial; font-weight: 700; letter-spacing: 0.015625rem; line-height: 123.5%; font-size: 1.75rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; display: inline-flex; flex-direction: row; -moz-box-align: center; align-items: center; position: relative; }
.css-15nvsa3 { margin: 0px 0px 0px 2px; font-family: Inter, Arial; font-weight: 700; letter-spacing: 0.015625rem; line-height: 123.5%; font-size: 1.75rem; color: rgb(241, 241, 243); }
.css-kge0eu { width: 100%; overflow-x: auto; }
.css-7x70cm { display: table; width: 100%; border-collapse: collapse; border-spacing: 0px; }
.css-7x70cm caption { padding: 8px; color: rgb(165, 168, 182); text-align: left; caption-side: bottom; }
.css-1wbz3t9 { display: table-header-group; }
.css-ga7c9i { color: inherit; display: table-row; vertical-align: middle; outline: 0px; }
.css-ga7c9i.MuiTableRow-hover:hover { background-color: rgba(235, 235, 239, 0.08); }
.css-ga7c9i.Mui-selected { background-color: rgba(234, 235, 239, 0.16); }
.css-ga7c9i.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.24); }
.css-ga7c9i .MuiTableCell-root { padding-top: 8px; padding-bottom: 8px; line-height: 0; }
.css-1o8tax1 { display: table-cell; vertical-align: inherit; border-bottom: 1px solid rgba(235, 235, 239, 0.08); text-align: left; padding: 6px 16px 6px 0px; color: rgb(241, 241, 243); line-height: 1.5rem; font-weight: 500; border-color: rgba(235, 235, 239, 0.08); }
.css-1o8tax1.MuiTableCell-paddingCheckbox { width: 24px; padding: 0px 12px 0px 16px; }
.css-1o8tax1.MuiTableCell-paddingCheckbox > * { padding: 0px; }
.css-fjl3lu { margin: 0px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.025rem; line-height: 0.75rem; font-size: 0.625rem; }
.css-3wecnt { display: table-cell; vertical-align: inherit; border-bottom: 1px solid rgba(235, 235, 239, 0.08); text-align: right; padding: 6px 16px; color: rgb(241, 241, 243); line-height: 1.5rem; font-weight: 500; flex-direction: row-reverse; border-color: rgba(235, 235, 239, 0.08); }
.css-3wecnt.MuiTableCell-paddingCheckbox { width: 24px; padding: 0px 12px 0px 16px; }
.css-3wecnt.MuiTableCell-paddingCheckbox > * { padding: 0px; }
.css-1fonvkq { display: table-cell; vertical-align: inherit; border-bottom: 1px solid rgba(235, 235, 239, 0.08); text-align: right; padding: 6px 0px 6px 16px; color: rgb(241, 241, 243); line-height: 1.5rem; font-weight: 500; flex-direction: row-reverse; border-color: rgba(235, 235, 239, 0.08); }
.css-1fonvkq.MuiTableCell-paddingCheckbox { width: 24px; padding: 0px 12px 0px 16px; }
.css-1fonvkq.MuiTableCell-paddingCheckbox > * { padding: 0px; }
.css-1xnox0e { display: table-row-group; }
.css-d5epqi { color: inherit; display: table-row; vertical-align: middle; outline: 0px; padding-top: 32px; }
.css-d5epqi.MuiTableRow-hover:hover { background-color: rgba(235, 235, 239, 0.08); }
.css-d5epqi.Mui-selected { background-color: rgba(234, 235, 239, 0.16); }
.css-d5epqi.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.24); }
.css-d5epqi .MuiTableCell-root { border-bottom: medium; padding-top: 12px; padding-bottom: 8px; }
.css-1wmqnjy { display: table-cell; vertical-align: inherit; border-bottom: 1px solid rgba(235, 235, 239, 0.08); text-align: left; padding: 4px 16px 4px 0px; color: rgb(241, 241, 243); border-color: rgba(235, 235, 239, 0.08); }
.css-1wmqnjy.MuiTableCell-paddingCheckbox { width: 24px; padding: 0px 12px 0px 16px; }
.css-1wmqnjy.MuiTableCell-paddingCheckbox > * { padding: 0px; }
.css-ct9q29 { display: flex; flex-direction: row; -moz-box-align: center; align-items: center; gap: 4px; }
.css-1ranldi { background: rgb(201, 179, 249); width: 6px; height: 6px; border-radius: 50%; }
.css-afn0jl { display: table-cell; vertical-align: inherit; border-bottom: 1px solid rgba(235, 235, 239, 0.08); text-align: right; padding: 6px 16px; color: rgb(241, 241, 243); flex-direction: row-reverse; border-color: rgba(235, 235, 239, 0.08); }
.css-afn0jl.MuiTableCell-paddingCheckbox { width: 24px; padding: 0px 12px 0px 16px; }
.css-afn0jl.MuiTableCell-paddingCheckbox > * { padding: 0px; }
.css-15ov6up { margin: 0px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.00625rem; line-height: 1rem; font-size: 0.75rem; text-align: right; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; display: inline-flex; flex-direction: row; -moz-box-align: center; align-items: center; position: relative; }
.css-1w5doed { display: table-cell; vertical-align: inherit; border-bottom: 1px solid rgba(235, 235, 239, 0.08); text-align: right; padding: 6px 0px 6px 16px; color: rgb(241, 241, 243); flex-direction: row-reverse; border-color: rgba(235, 235, 239, 0.08); }
.css-1w5doed.MuiTableCell-paddingCheckbox { width: 24px; padding: 0px 12px 0px 16px; }
.css-1w5doed.MuiTableCell-paddingCheckbox > * { padding: 0px; }
.css-mnxqb1 { margin: 0px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.00625rem; line-height: 1rem; font-size: 0.75rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; display: inline-flex; flex-direction: row; -moz-box-align: center; align-items: center; position: relative; }
.css-1336sl3 { margin: 0px 0px 0px 2px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.00625rem; line-height: 1rem; font-size: 0.75rem; color: rgb(165, 168, 182); }
.css-knx2wi { color: inherit; display: table-row; vertical-align: middle; outline: 0px; }
.css-knx2wi.MuiTableRow-hover:hover { background-color: rgba(235, 235, 239, 0.08); }
.css-knx2wi.Mui-selected { background-color: rgba(234, 235, 239, 0.16); }
.css-knx2wi.Mui-selected:hover { background-color: rgba(234, 235, 239, 0.24); }
.css-knx2wi .MuiTableCell-root { border-bottom: medium; }
.css-cni89x { display: table-cell; vertical-align: inherit; border-bottom: 1px solid rgba(235, 235, 239, 0.08); text-align: left; padding: 6px 16px 6px 0px; color: rgb(241, 241, 243); border-color: rgba(235, 235, 239, 0.08); }
.css-cni89x.MuiTableCell-paddingCheckbox { width: 24px; padding: 0px 12px 0px 16px; }
.css-cni89x.MuiTableCell-paddingCheckbox > * { padding: 0px; }
.css-1e2rh9o { background: rgb(179, 199, 249); width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; }
.css-198ug44 { display: flex; flex-direction: column; -moz-box-align: center; align-items: center; gap: 8px; flex-basis: 50%; }
.css-f6mhdk { width: 100%; margin-top: 16px; }
.css-79elbk { position: relative; }
.css-1t8bgeu { margin: 0px 0px 0.35em; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.00625rem; line-height: 1rem; font-size: 0.75rem; }
.css-da3vt5 { color: rgb(241, 241, 243); line-height: 1.4375em; box-sizing: border-box; cursor: text; display: inline-flex; -moz-box-align: center; align-items: center; width: 100%; position: relative; padding-right: 14px; border-radius: 6px; border-color: rgba(235, 235, 239, 0.08); }
.css-da3vt5.Mui-disabled { color: rgb(98, 103, 123); cursor: default; }
.css-da3vt5:hover .MuiOutlinedInput-notchedOutline { border-color: rgb(241, 241, 243); }
@media (hover: none) {
  .css-da3vt5:hover .MuiOutlinedInput-notchedOutline { border-color: rgba(255, 255, 255, 0.23); }
}
.css-da3vt5.Mui-focused .MuiOutlinedInput-notchedOutline { border-color: rgb(234, 235, 239); border-width: 2px; }
.css-da3vt5.Mui-error .MuiOutlinedInput-notchedOutline { border-color: rgb(244, 67, 54); }
.css-da3vt5.Mui-disabled .MuiOutlinedInput-notchedOutline { border-color: rgba(235, 235, 239, 0.3); }
.css-da3vt5:hover .MuiOutlinedInput-notchedOutline { border-color: rgb(203, 205, 216); }
.css-da3vt5.Mui-focused .MuiOutlinedInput-notchedOutline { border-color: rgb(203, 205, 216); }
.css-1nllntq { font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size-adjust: inherit; font-kerning: inherit; font-optical-sizing: inherit; font-language-override: inherit; font-feature-settings: inherit; font-variation-settings: inherit; letter-spacing: inherit; color: currentcolor; border: 0px; box-sizing: content-box; background: none; height: 1.4375em; margin: 0px; display: block; min-width: 0px; width: 100%; animation-name: mui-auto-fill-cancel; animation-duration: 10ms; padding: 8px 12px; font-size: 21px; }
.css-1nllntq::-webkit-input-placeholder { color: currentcolor; opacity: 0.5; transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1); }
.css-1nllntq::placeholder { color: currentcolor; opacity: 0.5; transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1); }
.css-1nllntq:focus { outline: 0px; }
.css-1nllntq:invalid { box-shadow: none; }
.css-1nllntq::-webkit-search-decoration { appearance: none; }
label[data-shrink="false"] + .MuiInputBase-formControl .css-1nllntq::-webkit-input-placeholder { opacity: 0 !important; }
label[data-shrink="false"] + .MuiInputBase-formControl .css-1nllntq::placeholder { opacity: 0 !important; }
label[data-shrink="false"] + .MuiInputBase-formControl .css-1nllntq:focus::-webkit-input-placeholder { opacity: 0.5; }
label[data-shrink="false"] + .MuiInputBase-formControl .css-1nllntq:focus::placeholder { opacity: 0.5; }
.css-1nllntq.Mui-disabled { opacity: 1; -webkit-text-fill-color: rgb(98, 103, 123); }
.css-1nllntq:autofill { animation-duration: 5000s; animation-name: mui-auto-fill; }
.css-1nllntq:autofill { box-shadow: rgb(38, 103, 152) 0px 0px 0px 100px inset; -webkit-text-fill-color: rgb(255, 255, 255); caret-color: rgb(255, 255, 255); border-radius: inherit; }
.css-x90exs { user-select: none; width: 1em; height: 1em; overflow: hidden; text-align: center; flex-shrink: 0; font-size: 1.5rem; display: flex; position: relative; border-radius: 50%; }
.css-7z4qiw { border-color: rgba(255, 255, 255, 0.23); }
.css-nqlg3w { text-align: left; position: absolute; inset: -5px 0px 0px; margin: 0px; padding: 0px 8px; pointer-events: none; border-radius: inherit; border-style: solid; border-width: 1px; overflow: hidden; min-width: 0%; border-color: rgba(255, 255, 255, 0.23); }
.css-ihdtdm { float: unset; width: auto; overflow: hidden; padding: 0px; line-height: 11px; transition: width 150ms cubic-bezier(0, 0, 0.2, 1); }
.css-gcd3fa { border-radius: 12px; box-sizing: content-box; display: inline-block; position: relative; cursor: pointer; touch-action: none; width: 100%; padding: 13px 0px; height: 2px; color: rgb(102, 154, 255); margin-bottom: 8px; }
@media print {
  .css-gcd3fa { print-color-adjust: exact; }
}
.css-gcd3fa.Mui-disabled { pointer-events: none; cursor: default; color: rgb(189, 189, 189); }
.css-gcd3fa.MuiSlider-dragging .MuiSlider-thumb, .css-gcd3fa.MuiSlider-dragging .MuiSlider-track { transition: none; }
@media (pointer: coarse) {
  .css-gcd3fa { padding: 20px 0px; }
}
.css-gcd3fa .MuiSlider-thumb { color: rgb(201, 179, 249); }
.css-gcd3fa .MuiSlider-track { color: rgb(156, 147, 179); }
.css-gcd3fa .MuiSlider-rail { color: rgb(98, 103, 123); }
.css-gcd3fa .MuiSlider-thumb { box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px, rgba(0, 0, 0, 0.12) 0px 1px 5px; }
.css-gcd3fa .MuiSlider-mark { display: none; }
.css-gcd3fa .MuiSlider-markLabel { top: 24px; font-size: 10px; color: rgb(165, 168, 182); }
.css-gcd3fa .MuiSlider-markLabel[data-index="1"] { transform: translateX(-100%); }
@media (pointer: coarse) {
  .css-gcd3fa .MuiSlider-markLabel { top: 30px; }
}
.css-3ndvyc { display: block; position: absolute; border-radius: inherit; background-color: currentcolor; opacity: 0.38; width: 100%; height: inherit; top: 50%; transform: translateY(-50%); }
.css-11ij3nk { display: block; position: absolute; border-radius: inherit; background-color: currentcolor; transition: left 150ms cubic-bezier(0.4, 0, 0.2, 1), width 150ms cubic-bezier(0.4, 0, 0.2, 1), bottom 150ms cubic-bezier(0.4, 0, 0.2, 1), height 150ms cubic-bezier(0.4, 0, 0.2, 1); border: medium; height: inherit; top: 50%; transform: translateY(-50%); }
.css-1bxflgu { position: absolute; width: 2px; height: 2px; border-radius: 1px; top: 50%; transform: translate(-1px, -50%); background-color: rgb(41, 46, 65); opacity: 0.8; }
.css-568rrp { position: absolute; white-space: nowrap; top: 30px; transform: translateX(-50%); color: rgb(241, 241, 243); }
@media (pointer: coarse) {
  .css-568rrp { top: 40px; }
}
.css-1l65e6z { position: absolute; width: 2px; height: 2px; border-radius: 1px; background-color: currentcolor; top: 50%; transform: translate(-1px, -50%); }
.css-1cqdod1 { color: rgb(165, 168, 182); position: absolute; white-space: nowrap; top: 30px; transform: translateX(-50%); }
@media (pointer: coarse) {
  .css-1cqdod1 { top: 40px; }
}
.css-17d1nkl { position: absolute; box-sizing: border-box; border-radius: 50%; outline: 0px; background-color: currentcolor; display: flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; transition: box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1), left 150ms cubic-bezier(0.4, 0, 0.2, 1), bottom 150ms cubic-bezier(0.4, 0, 0.2, 1); width: 12px; height: 12px; top: 50%; transform: translate(-50%, -50%); }
.css-17d1nkl::before { position: absolute; content: ""; border-radius: inherit; width: 100%; height: 100%; box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px; }
.css-17d1nkl::after { position: absolute; content: ""; border-radius: 50%; width: 42px; height: 42px; top: 50%; left: 50%; transform: translate(-50%, -50%); }
.css-17d1nkl.Mui-disabled:hover { box-shadow: none; }
.css-17d1nkl::before { box-shadow: none; }
.css-17d1nkl:hover, .css-17d1nkl.Mui-focusVisible { box-shadow: rgba(234, 235, 239, 0.16) 0px 0px 0px 8px; }
@media (hover: none) {
  .css-17d1nkl:hover, .css-17d1nkl.Mui-focusVisible { box-shadow: none; }
}
.css-17d1nkl.Mui-active { box-shadow: rgba(234, 235, 239, 0.16) 0px 0px 0px 14px; }
.css-jfwxvj { position: absolute; bottom: 25px; right: 0px; }
.css-1e2dcm1 { z-index: 1500; pointer-events: none; }
.css-okvapm { z-index: 1500; pointer-events: none; }
.css-8atqhb { width: 100%; }
.css-z0hss5 { display: flex; box-shadow: none; border-radius: 4px; padding: 8px 12px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; align-items: flex-start; color: rgb(169, 226, 251); background: rgb(56, 61, 81); visibility: visible; }
.css-z0hss5 .MuiAlert-icon { color: rgb(41, 182, 246); }
.css-z0hss5 .MuiAlert-message { padding: 2px 0px; }
.css-z0hss5 .MuiAlert-icon { padding: 0px; opacity: 1; }
.css-z0hss5 .MuiAlert-icon .MuiSvgIcon-root { font-size: 1.25rem; }
.css-z0hss5 a { font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; text-decoration: underline; }
.css-z0hss5 a:hover { text-decoration: none; }
.css-z0hss5 .MuiButton-text { font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; text-decoration: underline; padding: 0px; margin: 0px; min-width: unset; }
.css-z0hss5 .MuiButton-text:hover { text-decoration: none; background: transparent; }
.css-z0hss5 a { color: rgb(169, 226, 251); }
.css-z0hss5 .MuiButton-text { color: rgb(169, 226, 251); }
.css-1lm7234 { transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1); display: flex; box-shadow: none; border-radius: 4px; padding: 8px 12px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; align-items: flex-start; color: rgb(169, 226, 251); background: rgb(56, 61, 81); visibility: visible; }
.css-1lm7234 .MuiAlert-icon { color: rgb(41, 182, 246); }
.css-1lm7234 .MuiAlert-message { padding: 2px 0px; }
.css-1lm7234 .MuiAlert-icon { padding: 0px; opacity: 1; }
.css-1lm7234 .MuiAlert-icon .MuiSvgIcon-root { font-size: 1.25rem; }
.css-1lm7234 a { font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; text-decoration: underline; }
.css-1lm7234 a:hover { text-decoration: none; }
.css-1lm7234 .MuiButton-text { font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; text-decoration: underline; padding: 0px; margin: 0px; min-width: unset; }
.css-1lm7234 .MuiButton-text:hover { text-decoration: none; background: transparent; }
.css-1lm7234 a { color: rgb(169, 226, 251); }
.css-1lm7234 .MuiButton-text { color: rgb(169, 226, 251); }
.css-1l54tgj { margin-right: 12px; padding: 7px 0px; display: flex; font-size: 22px; opacity: 0.9; }
.css-6e6aj9 { user-select: none; width: 1em; height: 1em; display: inline-block; fill: currentcolor; flex-shrink: 0; transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1); font-size: 1.5rem; color: rgb(234, 235, 239); }
.css-1xsto0d { padding: 8px 0px; min-width: 0px; overflow: auto; }
.css-1fzsl0k { margin: 0px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; color: rgb(165, 168, 182); }
.css-19bb5k1 { margin: 0px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.00625rem; line-height: 1rem; font-size: 0.75rem; color: rgb(201, 179, 249); }
.css-19bb5k1:hover { text-decoration: underline; cursor: pointer; }
.css-19bb5k1:hover .MuiTypography-root { text-decoration: underline; }
.css-r7wym0 { user-select: none; width: 1em; height: 1em; display: inline-block; fill: currentcolor; flex-shrink: 0; transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1); font-size: 14px; vertical-align: middle; margin-bottom: 3px; }
.css-y1gt6f { margin-top: 40px; }
.css-1d39wwj { display: flex; flex-wrap: wrap; padding-top: 12px; column-gap: 10px; }
.css-1o42vu5 { border-radius: 6px; border: 1px solid rgba(235, 235, 239, 0.08); flex: 0 1 32%; margin-bottom: 2%; max-width: 32%; }
.css-1ucx9m3 { display: flex; flex-direction: column; height: 100%; justify-content: space-around; padding: 8px; }
.css-1ma60wi { margin: 0px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1.25rem; font-size: 0.875rem; color: rgb(165, 168, 182); }
.css-ojt0hn { margin: 0px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1.25rem; font-size: 0.875rem; display: flex; -moz-box-align: center; align-items: center; }
.css-zvdqz5 { user-select: none; width: 1em; height: 1em; overflow: hidden; text-align: center; flex-shrink: 0; display: flex; position: relative; border-radius: 50%; font-size: 14px; margin-right: 4px; }
.css-a7753a { margin: 0px 4px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1.25rem; font-size: 0.875rem; color: rgb(241, 241, 243); }
.css-1sdzf35 { margin: 0px 4px 0px 0px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1.25rem; font-size: 0.875rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: rgb(241, 241, 243); display: inline-flex; flex-direction: row; -moz-box-align: center; align-items: center; position: relative; }
.css-d8aql2 { margin: 0px 0px 0px 2px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1.25rem; font-size: 0.875rem; color: rgb(165, 168, 182); }
.css-16v0rd7 { margin: 0px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1.25rem; font-size: 0.875rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: rgb(241, 241, 243); display: inline-flex; flex-direction: row; -moz-box-align: center; align-items: center; position: relative; }
.css-u4p24i { display: flex; flex-direction: row; -moz-box-align: center; align-items: center; }
.css-1mvkkzi { color: rgb(165, 168, 182); text-decoration: underline; }
.css-3p3htd { margin: 0px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; color: rgb(165, 168, 182); text-decoration: underline; }
.css-qxq0hv { display: flex; box-shadow: none; border-radius: 4px; padding: 8px 12px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; align-items: flex-start; color: rgb(169, 226, 251); background: rgb(56, 61, 81); visibility: hidden; }
.css-qxq0hv .MuiAlert-icon { color: rgb(41, 182, 246); }
.css-qxq0hv .MuiAlert-message { padding: 2px 0px; }
.css-qxq0hv .MuiAlert-icon { padding: 0px; opacity: 1; }
.css-qxq0hv .MuiAlert-icon .MuiSvgIcon-root { font-size: 1.25rem; }
.css-qxq0hv a { font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; text-decoration: underline; }
.css-qxq0hv a:hover { text-decoration: none; }
.css-qxq0hv .MuiButton-text { font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; text-decoration: underline; padding: 0px; margin: 0px; min-width: unset; }
.css-qxq0hv .MuiButton-text:hover { text-decoration: none; background: transparent; }
.css-qxq0hv a { color: rgb(169, 226, 251); }
.css-qxq0hv .MuiButton-text { color: rgb(169, 226, 251); }
.css-1xwjl59 { transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1); display: flex; box-shadow: none; border-radius: 4px; padding: 8px 12px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; align-items: flex-start; color: rgb(169, 226, 251); background: rgb(56, 61, 81); visibility: hidden; }
.css-1xwjl59 .MuiAlert-icon { color: rgb(41, 182, 246); }
.css-1xwjl59 .MuiAlert-message { padding: 2px 0px; }
.css-1xwjl59 .MuiAlert-icon { padding: 0px; opacity: 1; }
.css-1xwjl59 .MuiAlert-icon .MuiSvgIcon-root { font-size: 1.25rem; }
.css-1xwjl59 a { font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; text-decoration: underline; }
.css-1xwjl59 a:hover { text-decoration: none; }
.css-1xwjl59 .MuiButton-text { font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; text-decoration: underline; padding: 0px; margin: 0px; min-width: unset; }
.css-1xwjl59 .MuiButton-text:hover { text-decoration: none; background: transparent; }
.css-1xwjl59 a { color: rgb(169, 226, 251); }
.css-1xwjl59 .MuiButton-text { color: rgb(169, 226, 251); }
.css-6zxo4b { user-select: none; display: inline-block; fill: currentcolor; flex-shrink: 0; transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1); font-size: 1.5rem; color: rgb(255, 167, 38); width: 15px; height: 15px; border-radius: 50%; background: rgb(56, 61, 81); }
.css-fny9iu { margin: 0px; font-family: Inter, Arial; font-weight: 800; line-height: 133.4%; font-size: 1.3125rem; }
.css-u6v8er { display: flex; flex-direction: column; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; }
.css-x2v3lb { background-color: rgb(56, 61, 81); width: 24px; height: 24px; border-radius: 50%; display: flex; -moz-box-pack: center; justify-content: center; margin-left: 8px; border: 0.5px solid rgba(235, 235, 237, 0.12); }
.css-1gfod4y { display: inline-flex; -moz-box-align: center; align-items: center; color: rgb(165, 168, 182); cursor: pointer; }
.css-1gfod4y:hover { color: rgb(241, 241, 243); }
.css-1ay71cc { display: inline-flex; -moz-box-align: center; align-items: center; cursor: pointer; }
.css-1ay71cc:hover .Wallet__icon { opacity: 0 !important; }
.css-1ay71cc:hover .Wallet__iconHover { opacity: 1 !important; }
.css-1oub2s6 { user-select: none; display: inline-block; flex-shrink: 0; transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1); font-size: 1.5rem; fill: none; stroke: rgb(165, 168, 182); width: 14px; height: 14px; }
.css-1oub2s6:hover { stroke: rgb(241, 241, 243); }
.css-b1w3h1 { width: 42px; height: 42px; background: rgb(56, 61, 81); border: 0.5px solid rgba(235, 235, 239, 0.08); border-radius: 12px; display: flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; }
.css-1pdoftr { user-select: none; width: 1em; height: 1em; display: inline-block; flex-shrink: 0; transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1); font-size: 1.5rem; fill: none; stroke: rgb(165, 168, 182); }
.css-2ei3b3 { margin: 0px; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.009375rem; line-height: 1.5rem; font-size: 1rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: rgb(241, 241, 243); display: inline-flex; flex-direction: row; -moz-box-align: center; align-items: center; position: relative; }
.css-1suv5l { margin: 0px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.02875rem; line-height: 1.5rem; font-size: 1rem; color: rgb(165, 168, 182); }
.css-1isemmb { margin-left: 8px; }
.css-1osjw6r { margin: 0px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.00625rem; line-height: 1rem; font-size: 0.75rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: rgb(142, 146, 163); display: inline-flex; flex-direction: row; -moz-box-align: center; align-items: center; position: relative; }
.css-1fouq79 { margin: 0px 2px 0px 0px; font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.00625rem; line-height: 1rem; font-size: 0.75rem; color: rgb(142, 146, 163); }
.css-i1r5tf { min-width: 64px; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); color: rgba(0, 0, 0, 0.87); background-color: rgb(234, 235, 239); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 500; line-height: 1.5rem; font-size: 0.875rem; padding: 6px 12px; height: 36px; width: 96px; }
.css-i1r5tf:hover { text-decoration: none; background-color: rgb(210, 212, 220); box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px; }
@media (hover: none) {
  .css-i1r5tf:hover { background-color: rgb(234, 235, 239); }
}
.css-i1r5tf:active { box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px; }
.css-i1r5tf.Mui-focusVisible { box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px; }
.css-i1r5tf.Mui-disabled { color: rgba(235, 235, 239, 0.3); box-shadow: none; background-color: rgba(235, 235, 239, 0.12); }
.css-i1r5tf:hover { box-shadow: none; }
.css-i1r5tf.Mui-focusVisible { box-shadow: none; }
.css-i1r5tf:active { box-shadow: none; }
.css-i1r5tf.Mui-disabled { box-shadow: none; }
.css-1no6dw { display: inline-flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; position: relative; box-sizing: border-box; outline: 0px; border: 0px; margin: 0px; cursor: pointer; user-select: none; vertical-align: middle; appearance: none; text-decoration: none; min-width: 64px; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1); color: rgba(0, 0, 0, 0.87); background-color: rgb(234, 235, 239); box-shadow: none; border-radius: 4px; font-family: Inter, Arial; font-weight: 500; line-height: 1.5rem; font-size: 0.875rem; padding: 6px 12px; height: 36px; width: 96px; }
.css-1no6dw::-moz-focus-inner { border-style: none; }
.css-1no6dw.Mui-disabled { pointer-events: none; cursor: default; }
@media print {
  .css-1no6dw { print-color-adjust: exact; }
}
.css-1no6dw:hover { text-decoration: none; background-color: rgb(210, 212, 220); box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px; }
@media (hover: none) {
  .css-1no6dw:hover { background-color: rgb(234, 235, 239); }
}
.css-1no6dw:active { box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px; }
.css-1no6dw.Mui-focusVisible { box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px; }
.css-1no6dw.Mui-disabled { color: rgba(235, 235, 239, 0.3); box-shadow: none; background-color: rgba(235, 235, 239, 0.12); }
.css-1no6dw:hover { box-shadow: none; }
.css-1no6dw.Mui-focusVisible { box-shadow: none; }
.css-1no6dw:active { box-shadow: none; }
.css-1no6dw.Mui-disabled { box-shadow: none; }
.css-9rqz0j { display: flex; box-shadow: none; border-radius: 4px; padding: 8px 12px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; color: rgb(169, 226, 251); background: rgb(7, 31, 46); margin-bottom: 0px; -moz-box-align: center; align-items: center; width: 100%; }
.css-9rqz0j .MuiAlert-icon { color: rgb(41, 182, 246); }
.css-9rqz0j .MuiAlert-message { padding: 2px 0px; }
.css-9rqz0j .MuiAlert-icon { padding: 0px; opacity: 1; }
.css-9rqz0j .MuiAlert-icon .MuiSvgIcon-root { font-size: 1.25rem; }
.css-9rqz0j a { font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; text-decoration: underline; }
.css-9rqz0j a:hover { text-decoration: none; }
.css-9rqz0j .MuiButton-text { font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; text-decoration: underline; padding: 0px; margin: 0px; min-width: unset; }
.css-9rqz0j .MuiButton-text:hover { text-decoration: none; background: transparent; }
.css-9rqz0j a { color: rgb(169, 226, 251); }
.css-9rqz0j .MuiButton-text { color: rgb(169, 226, 251); }
.css-1smjs47 { transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1); display: flex; box-shadow: none; border-radius: 4px; padding: 8px 12px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; color: rgb(169, 226, 251); background: rgb(7, 31, 46); margin-bottom: 0px; -moz-box-align: center; align-items: center; width: 100%; }
.css-1smjs47 .MuiAlert-icon { color: rgb(41, 182, 246); }
.css-1smjs47 .MuiAlert-message { padding: 2px 0px; }
.css-1smjs47 .MuiAlert-icon { padding: 0px; opacity: 1; }
.css-1smjs47 .MuiAlert-icon .MuiSvgIcon-root { font-size: 1.25rem; }
.css-1smjs47 a { font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; text-decoration: underline; }
.css-1smjs47 a:hover { text-decoration: none; }
.css-1smjs47 .MuiButton-text { font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; text-decoration: underline; padding: 0px; margin: 0px; min-width: unset; }
.css-1smjs47 .MuiButton-text:hover { text-decoration: none; background: transparent; }
.css-1smjs47 a { color: rgb(169, 226, 251); }
.css-1smjs47 .MuiButton-text { color: rgb(169, 226, 251); }
.css-1rcyqho { display: flex; box-shadow: none; border-radius: 4px; padding: 8px 12px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; color: rgb(255, 220, 168); background: rgb(48, 30, 4); margin-bottom: 0px; -moz-box-align: center; align-items: center; width: 100%; }
.css-1rcyqho .MuiAlert-icon { color: rgb(255, 167, 38); }
.css-1rcyqho .MuiAlert-message { padding: 2px 0px; }
.css-1rcyqho .MuiAlert-icon { padding: 0px; opacity: 1; }
.css-1rcyqho .MuiAlert-icon .MuiSvgIcon-root { font-size: 1.25rem; }
.css-1rcyqho a { font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; text-decoration: underline; }
.css-1rcyqho a:hover { text-decoration: none; }
.css-1rcyqho .MuiButton-text { font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; text-decoration: underline; padding: 0px; margin: 0px; min-width: unset; }
.css-1rcyqho .MuiButton-text:hover { text-decoration: none; background: transparent; }
.css-1rcyqho a { color: rgb(255, 220, 168); }
.css-1rcyqho .MuiButton-text { color: rgb(255, 220, 168); }
.css-1gxw2ay { transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1); display: flex; box-shadow: none; border-radius: 4px; padding: 8px 12px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; color: rgb(255, 220, 168); background: rgb(48, 30, 4); margin-bottom: 0px; -moz-box-align: center; align-items: center; width: 100%; }
.css-1gxw2ay .MuiAlert-icon { color: rgb(255, 167, 38); }
.css-1gxw2ay .MuiAlert-message { padding: 2px 0px; }
.css-1gxw2ay .MuiAlert-icon { padding: 0px; opacity: 1; }
.css-1gxw2ay .MuiAlert-icon .MuiSvgIcon-root { font-size: 1.25rem; }
.css-1gxw2ay a { font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; text-decoration: underline; }
.css-1gxw2ay a:hover { text-decoration: none; }
.css-1gxw2ay .MuiButton-text { font-family: Inter, Arial; font-weight: 500; letter-spacing: 0.009375rem; line-height: 1rem; font-size: 0.75rem; text-decoration: underline; padding: 0px; margin: 0px; min-width: unset; }
.css-1gxw2ay .MuiButton-text:hover { text-decoration: none; background: transparent; }
.css-1gxw2ay a { color: rgb(255, 220, 168); }
.css-1gxw2ay .MuiButton-text { color: rgb(255, 220, 168); }
.css-1xo217d { text-decoration: underline rgba(234, 235, 239, 0.4); }
.css-1xo217d:hover { text-decoration-color: inherit; }
.css-1oz80w { margin: 0px; font-family: Inter, Arial; font-weight: 400; letter-spacing: 0.009375rem; line-height: 143%; font-size: 0.875rem; color: rgb(234, 235, 239); text-decoration: underline rgba(234, 235, 239, 0.4); }
.css-1oz80w:hover { text-decoration-color: inherit; }
.css-1jox83z { padding: 12px 16px 8px; }
.css-kna281 { user-select: none; width: 1em; height: 1em; overflow: hidden; text-align: center; flex-shrink: 0; display: flex; position: relative; border-radius: 50%; font-size: 20px; }
.css-mgqwsh { margin: 0px 0px 0px 12px; font-family: Inter, Arial; font-weight: 600; letter-spacing: 0.009375rem; line-height: 1.25rem; font-size: 0.875rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
body { --wcm-z-index: 1300; }

</style>
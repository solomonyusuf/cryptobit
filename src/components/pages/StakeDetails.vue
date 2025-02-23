<script setup>
import {ref} from "vue";
import Navmenu from './Navmenu.vue';

const isPopupOpen = ref(false);

const openPopup = () => {
  isPopupOpen.value = !isPopupOpen.value;
};

const tab = ref('overview');

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
                  <a href="#/stake" class="MuiButtonBase-root MuiButton-root MuiButton-surface MuiButton-surfacePrimary MuiButton-sizeMedium MuiButton-surfaceSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-root MuiButton-surface MuiButton-surfacePrimary MuiButton-sizeMedium MuiButton-surfaceSizeMedium MuiButton-colorPrimary MuiButton-disableElevation css-pvmlr" tabindex="0" type="button">
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
                  <div class="MuiBox-root css-90g7yj"><img src="https://app.aave.com/icons/tokens/gho.svg" width="40px" height="40px" alt=""></div>
                  <div class="MuiBox-root css-j7qwjs">
                     <div class="MuiBox-root css-18biwo">
                        <div class="MuiTypography-root MuiTypography-description css-1t8x1s2">GHO</div>
                     </div>
                     <div class="MuiBox-root css-18biwo">
                        <p class="MuiTypography-root MuiTypography-main21 css-fny9iu">Gho Token</p>
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
                        <div class="MuiTypography-root MuiTypography-description css-1t8x1s2">Total borrowed</div>
                     </div>
                     <p class="MuiTypography-root MuiTypography-main21 MuiTypography-noWrap css-1x4zjhu"><span class="MuiTypography-root MuiTypography-secondary21 css-vj5di1">$</span>182.59M</p>
                  </div>
               </div>
               <div class="MuiBox-root css-ltjh6b">
                  <div class="MuiBox-root css-j7qwjs">
                     <div class="MuiBox-root css-18biwo">
                        <div class="MuiTypography-root MuiTypography-description css-1t8x1s2">Maximum available to borrow</div>
                     </div>
                     <p class="MuiTypography-root MuiTypography-main21 MuiTypography-noWrap css-1x4zjhu"><span class="MuiTypography-root MuiTypography-secondary21 css-vj5di1">$</span>185.00M</p>
                  </div>
               </div>
               <div class="MuiBox-root css-ltjh6b">
                  <div class="MuiBox-root css-j7qwjs">
                     <div class="MuiBox-root css-18biwo">
                        <div class="MuiTypography-root MuiTypography-description css-1t8x1s2">
                           <div class="MuiBox-root css-70qvj9">
                              <p class="MuiTypography-root MuiTypography-description css-1nkijli">Price</p>
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
                     <div class="MuiBox-root css-18biwo">
                        <p class="MuiTypography-root MuiTypography-main21 MuiTypography-noWrap css-1x4zjhu"><span class="MuiTypography-root MuiTypography-secondary21 css-vj5di1">$</span>1.00</p>
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
                  <div class="MuiBox-root css-oickpl">
                     <p class="MuiTypography-root MuiTypography-subheader1 css-ei9oq1">About GHO</p>
                     <div class="MuiBox-root css-0">
                        <p class="MuiTypography-root MuiTypography-description MuiTypography-gutterBottom css-132zyz9">GHO is a native decentralized, collateral-backed digital asset pegged to USD. It is created by users via borrowing against multiple collateral. When user repays their GHO borrow position, the protocol burns that user's GHO. All the interest payments accrued by minters of GHO would be directly transferred to the AaveDAO treasury.</p>
                        <div class="MuiBox-root css-1dtnjt5">
                           <a class="MuiTypography-root MuiTypography-description MuiLink-root MuiLink-underlineNone MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeSmall MuiButton-outlinedSizeSmall MuiButton-colorPrimary MuiButton-disableElevation MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeSmall MuiButton-outlinedSizeSmall MuiButton-colorPrimary MuiButton-disableElevation css-1b8xk8p" href="https://github.com/aave/gho/blob/main/techpaper/GHO_Technical_Paper.pdf" target="_blank" rel="noopener" tabindex="0">
                              <p class="MuiTypography-root MuiTypography-description css-8bhn0">Techpaper</p>
                              <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-o9s1zr" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                                 </svg>
                              </svg>
                              <span class="MuiTouchRipple-root css-w0pj6f"></span>
                           </a>
                           <a class="MuiTypography-root MuiTypography-description MuiLink-root MuiLink-underlineNone MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeSmall MuiButton-outlinedSizeSmall MuiButton-colorPrimary MuiButton-disableElevation MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeSmall MuiButton-outlinedSizeSmall MuiButton-colorPrimary MuiButton-disableElevation css-1b8xk8p" href="https://gho.xyz" target="_blank" rel="noopener" tabindex="0">
                              <p class="MuiTypography-root MuiTypography-description css-8bhn0">Website</p>
                              <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-o9s1zr" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                                 </svg>
                              </svg>
                              <span class="MuiTouchRipple-root css-w0pj6f"></span>
                           </a>
                           <a class="MuiTypography-root MuiTypography-description MuiLink-root MuiLink-underlineNone MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeSmall MuiButton-outlinedSizeSmall MuiButton-colorPrimary MuiButton-disableElevation MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeSmall MuiButton-outlinedSizeSmall MuiButton-colorPrimary MuiButton-disableElevation css-1b8xk8p" href="https://docs.gho.xyz/concepts/faq" target="_blank" rel="noopener" tabindex="0">
                              <p class="MuiTypography-root MuiTypography-description css-8bhn0">FAQ</p>
                              <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-o9s1zr" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                                 </svg>
                              </svg>
                              <span class="MuiTouchRipple-root css-w0pj6f"></span>
                           </a>
                        </div>
                     </div>
                  </div>
                  <hr class="MuiDivider-root MuiDivider-fullWidth css-1r56f2y">
                  <div class="MuiBox-root css-oickpl">
                     <p class="MuiTypography-root MuiTypography-subheader1 css-ei9oq1">Borrow info</p>
                     <div class="MuiBox-root css-15z9wyn">
                        <div class="MuiStack-root css-1xhj18k">
                           <div class="MuiBox-root css-ulme3a">
                              <div class="MuiBox-root css-dvot97">
                                 <span class="MuiCircularProgress-root MuiCircularProgress-determinate MuiCircularProgress-colorPrimary css-yv5wnn" style="width: 77.5px; height: 77.5px; transform: rotate(-90deg);" role="progressbar" aria-valuenow="100">
                                    <svg class="MuiCircularProgress-svg css-13o7eu2" viewBox="22 22 44 44">
                                       <circle class="MuiCircularProgress-circle MuiCircularProgress-circleDeterminate css-nbfpn7" style="stroke-dasharray: 131.947px; stroke-dashoffset: 0px;" cx="44" cy="44" r="21" fill="none" stroke-width="2"></circle>
                                    </svg>
                                 </span>
                                 <span class="MuiCircularProgress-root MuiCircularProgress-determinate MuiCircularProgress-colorWarning css-7qyd78" style="width: 80px; height: 80px; transform: rotate(-90deg);" role="progressbar" aria-valuenow="99">
                                    <svg class="MuiCircularProgress-svg css-13o7eu2" viewBox="22 22 44 44">
                                       <circle class="MuiCircularProgress-circle MuiCircularProgress-circleDeterminate css-nbfpn7" style="stroke-dasharray: 128.805px; stroke-dashoffset: 1.679px;" cx="44" cy="44" r="20.5" fill="none" stroke-width="3"></circle>
                                    </svg>
                                 </span>
                                 <p class="MuiTypography-root MuiTypography-secondary14 css-r4spco">98.70%</p>
                              </div>
                           </div>
                           <div class="MuiBox-root css-ov2ylm">
                              <span class="MuiTypography-root MuiTypography-description css-1t8x1s2">
                                 <div class="MuiBox-root css-70qvj9">Total borrowed</div>
                              </span>
                              <div class="MuiBox-root css-dtnerw">
                                 <div class="MuiBox-root css-0">
                                    <p class="MuiTypography-root MuiTypography-main16 MuiTypography-noWrap css-1ogi1pb">182.59M</p>
                                    <span class="MuiTypography-root MuiTypography-secondary16 css-dyg06u">of</span>
                                    <p class="MuiTypography-root MuiTypography-main16 MuiTypography-noWrap css-1ogi1pb">185.00M</p>
                                 </div>
                                 <div class="MuiBox-root css-0">
                                    <div class="MuiBox-root css-1xwiwhj">
                                       <p class="MuiTypography-root MuiTypography-secondary12 MuiTypography-noWrap css-cyw6g5"><span class="MuiTypography-root MuiTypography-secondary12 css-1x1c6wp">$</span>182.59M</p>
                                    </div>
                                    <span class="MuiTypography-root MuiTypography-secondary12 css-g5g2u1">of</span>
                                    <div class="MuiBox-root css-1xwiwhj">
                                       <p class="MuiTypography-root MuiTypography-secondary12 MuiTypography-noWrap css-cyw6g5"><span class="MuiTypography-root MuiTypography-secondary12 css-1x1c6wp">$</span>185.00M</p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="MuiBox-root css-ozoimy">
                              <div class="MuiBox-root css-ov2ylm">
                                 <span class="MuiTypography-root MuiTypography-description css-1t8x1s2">
                                    <div class="MuiBox-root css-70qvj9">
                                       <p class="MuiTypography-root MuiTypography-description css-1nkijli">APY, borrow rate</p>
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
                                    <p class="MuiTypography-root MuiTypography-main16 MuiTypography-noWrap css-1ogi1pb">6.45<span class="MuiTypography-root MuiTypography-main16 css-2am8m">%</span></p>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="MuiBox-root css-h5fkc8">
                           <p class="MuiTypography-root MuiTypography-subheader1 MuiTypography-gutterBottom css-16hy5wk">Staking discount</p>
                           <p class="MuiTypography-root MuiTypography-caption css-1pgimmy">Users who stake AAVE in Safety Module (i.e. stkAAVE holders) receive a discount on GHO borrow interest rate. The discount applies to 100 GHO for every 1 stkAAVE held. Use the calculator below to see GHO borrow rate with the discount applied.</p>
                           <div class="MuiStack-root css-5kz7rn">
                              <div class="MuiBox-root css-1spvj5p">
                                 <div class="MuiStack-root css-1o3exs0">
                                    <div class="MuiStack-root css-r81tyl">
                                       <p class="MuiTypography-root MuiTypography-subheader2 css-my2x37">Borrow APY</p>
                                       <h1 class="MuiTypography-root MuiTypography-h1 MuiTypography-noWrap css-g77elk">4.51<span class="MuiTypography-root MuiTypography-h1 css-15nvsa3">%</span></h1>
                                    </div>
                                    <svg width="156" height="156">
                                       <g class="visx-group" transform="translate(78, 78)">
                                          <g>
                                             <path d="M4.776122516674678e-15,-78L3.67394039744206e-15,-60Z" fill="#B3C7F9"></path>
                                          </g>
                                          <g>
                                             <path d="M4.776122516674678e-15,-78A78,78,0,1,1,-4.776122516674678e-15,78A78,78,0,1,1,4.776122516674678e-15,-78M-1.1021821192326178e-14,-60A60,60,0,1,0,1.1021821192326178e-14,60A60,60,0,1,0,-1.1021821192326178e-14,-60Z" fill="#C9B3F9"></path>
                                          </g>
                                       </g>
                                    </svg>
                                    <div class="MuiBox-root css-0">
                                       <div class="MuiTableContainer-root css-kge0eu">
                                          <table class="MuiTable-root css-7x70cm">
                                             <thead class="MuiTableHead-root css-1wbz3t9">
                                                <tr class="MuiTableRow-root MuiTableRow-head css-ga7c9i">
                                                   <th class="MuiTableCell-root MuiTableCell-head MuiTableCell-alignLeft MuiTableCell-sizeSmall css-1o8tax1" scope="col"><span class="MuiTypography-root MuiTypography-helperText css-fjl3lu">Borrow balance</span></th>
                                                   <th class="MuiTableCell-root MuiTableCell-head MuiTableCell-alignRight MuiTableCell-sizeSmall css-3wecnt" scope="col"><span class="MuiTypography-root MuiTypography-helperText css-fjl3lu">Amount</span></th>
                                                   <th class="MuiTableCell-root MuiTableCell-head MuiTableCell-alignRight MuiTableCell-sizeSmall css-1fonvkq" scope="col"><span class="MuiTypography-root MuiTypography-helperText css-fjl3lu">APY</span></th>
                                                </tr>
                                             </thead>
                                             <tbody class="MuiTableBody-root css-1xnox0e">
                                                <tr class="MuiTableRow-root css-d5epqi">
                                                   <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft MuiTableCell-sizeSmall css-1wmqnjy">
                                                      <div class="MuiStack-root css-ct9q29">
                                                         <div class="MuiBox-root css-1ranldi"></div>
                                                         <p class="MuiTypography-root MuiTypography-caption css-1o62gjw">At a discount</p>
                                                      </div>
                                                   </td>
                                                   <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignRight MuiTableCell-sizeSmall css-afn0jl">
                                                      <p class="MuiTypography-root MuiTypography-subheader2 MuiTypography-alignRight MuiTypography-noWrap css-15ov6up">10,000.00</p>
                                                   </td>
                                                   <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignRight MuiTableCell-sizeSmall css-1w5doed">
                                                      <p class="MuiTypography-root MuiTypography-subheader2 MuiTypography-noWrap css-mnxqb1">4.51<span class="MuiTypography-root MuiTypography-subheader2 css-1336sl3">%</span></p>
                                                   </td>
                                                </tr>
                                                <tr class="MuiTableRow-root css-knx2wi">
                                                   <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft MuiTableCell-sizeSmall css-cni89x">
                                                      <div class="MuiStack-root css-ct9q29">
                                                         <div class="MuiBox-root css-1e2rh9o"></div>
                                                         <p class="MuiTypography-root MuiTypography-caption css-1o62gjw">Exceeds the discount</p>
                                                      </div>
                                                   </td>
                                                   <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignRight MuiTableCell-sizeSmall css-afn0jl">
                                                      <p class="MuiTypography-root MuiTypography-subheader2 MuiTypography-noWrap css-mnxqb1">0</p>
                                                   </td>
                                                   <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignRight MuiTableCell-sizeSmall css-1w5doed">
                                                      <p class="MuiTypography-root MuiTypography-subheader2 MuiTypography-noWrap css-mnxqb1">6.45<span class="MuiTypography-root MuiTypography-subheader2 css-1336sl3">%</span></p>
                                                   </td>
                                                </tr>
                                             </tbody>
                                          </table>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="MuiStack-root css-198ug44">
                                 <div class="MuiBox-root css-f6mhdk">
                                    <div class="MuiBox-root css-79elbk">
                                       <p class="MuiTypography-root MuiTypography-subheader2 MuiTypography-gutterBottom css-1t8bgeu">Borrow amount</p>
                                       <div class="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedEnd css-da3vt5">
                                          <input inputmode="numeric" placeholder="0" min="0" class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedEnd css-1nllntq" type="text" value="10,000"><span class="material-icons notranslate MuiIcon-root MuiIcon-fontSizeMedium css-x90exs" aria-hidden="true"><img src="https://app.aave.com/icons/tokens/gho.svg" width="100%" height="100%" alt="GHO icon"></span>
                                          <fieldset aria-hidden="true" class="MuiOutlinedInput-notchedOutline css-nqlg3w">
                                             <legend class="css-ihdtdm"><span class="notranslate">​</span></legend>
                                          </fieldset>
                                       </div>
                                       <span class="MuiSlider-root MuiSlider-marked MuiSlider-colorPrimary MuiSlider-sizeSmall css-gcd3fa"><span class="MuiSlider-rail css-3ndvyc"></span><span style="left: 0%; width: 9.9991%;" class="MuiSlider-track css-11ij3nk"></span><span data-index="0" class="MuiSlider-mark MuiSlider-markActive css-1bxflgu" style="left: 0%;"></span><span aria-hidden="true" data-index="0" class="MuiSlider-markLabel MuiSlider-markLabel MuiSlider-markLabelActive css-568rrp" style="left: 0%;">1</span><span data-index="1" class="MuiSlider-mark css-1l65e6z" style="left: 100%;"></span><span aria-hidden="true" data-index="1" class="MuiSlider-markLabel MuiSlider-markLabel css-1cqdod1" style="left: 100%;">100,000</span><span data-index="0" class="MuiSlider-thumb MuiSlider-thumbSizeSmall MuiSlider-thumbColorPrimary MuiSlider-thumb MuiSlider-thumbSizeSmall MuiSlider-thumbColorPrimary css-17d1nkl" style="left: 9.9991%;"><input data-index="0" aria-valuenow="10000" aria-orientation="horizontal" aria-valuemax="100000" aria-valuemin="1" type="range" min="1" max="100000" step="5" style="border: 0px; clip: rect(0px, 0px, 0px, 0px); height: 100%; margin: -1px; overflow: hidden; padding: 0px; position: absolute; white-space: nowrap; width: 100%; direction: ltr;" value="10000"></span></span>
                                       <div class="MuiBox-root css-jfwxvj"></div>
                                    </div>
                                 </div>
                                 <div class="MuiBox-root css-8atqhb">
                                    <div class="MuiBox-root css-79elbk">
                                       <p class="MuiTypography-root MuiTypography-subheader2 MuiTypography-gutterBottom css-1t8bgeu">Staked AAVE amount</p>
                                       <div class="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-adornedEnd css-da3vt5">
                                          <input inputmode="numeric" placeholder="0" min="0" class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedEnd css-1nllntq" type="text" value="100"><span class="material-icons notranslate MuiIcon-root MuiIcon-fontSizeMedium css-x90exs" aria-hidden="true"><img src="https://app.aave.com/icons/tokens/stkaave.svg" width="100%" height="100%" alt="stkAAVE icon"></span>
                                          <fieldset aria-hidden="true" class="MuiOutlinedInput-notchedOutline css-nqlg3w">
                                             <legend class="css-ihdtdm"><span class="notranslate">​</span></legend>
                                          </fieldset>
                                       </div>
                                       <span class="MuiSlider-root MuiSlider-marked MuiSlider-colorPrimary MuiSlider-sizeSmall css-gcd3fa"><span class="MuiSlider-rail css-3ndvyc"></span><span style="left: 0%; width: 10%;" class="MuiSlider-track css-11ij3nk"></span><span data-index="0" class="MuiSlider-mark MuiSlider-markActive css-1bxflgu" style="left: 0%;"></span><span aria-hidden="true" data-index="0" class="MuiSlider-markLabel MuiSlider-markLabel MuiSlider-markLabelActive css-568rrp" style="left: 0%;">0</span><span data-index="1" class="MuiSlider-mark css-1l65e6z" style="left: 100%;"></span><span aria-hidden="true" data-index="1" class="MuiSlider-markLabel MuiSlider-markLabel css-1cqdod1" style="left: 100%;">1,000</span><span data-index="0" class="MuiSlider-thumb MuiSlider-thumbSizeSmall MuiSlider-thumbColorPrimary MuiSlider-thumb MuiSlider-thumbSizeSmall MuiSlider-thumbColorPrimary css-17d1nkl" style="left: 10%;"><input data-index="0" aria-valuenow="100" aria-orientation="horizontal" aria-valuemax="1000" aria-valuemin="0" type="range" min="0" max="1000" step="5" style="border: 0px; clip: rect(0px, 0px, 0px, 0px); height: 100%; margin: -1px; overflow: hidden; padding: 0px; position: absolute; white-space: nowrap; width: 100%; direction: ltr;" value="100"></span></span>
                                       <div class="MuiBox-root css-jfwxvj"></div>
                                    </div>
                                 </div>
                                 <div class="MuiBox-root css-8atqhb">
                                    <div class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiAlert-root MuiAlert-colorInfo MuiAlert-standardInfo MuiAlert-standard css-1xwjl59" role="alert">
                                       <div class="MuiAlert-icon css-1l54tgj">
                                          <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-6e6aj9" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="InfoOutlinedIcon">
                                             <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"></path>
                                          </svg>
                                       </div>
                                       <div class="MuiAlert-message css-1xsto0d"></div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="MuiBox-root css-y1gt6f">
                              <div class="MuiBox-root css-15z9wyn">
                                 <div class="MuiBox-root css-18biwo">
                                    <p class="MuiTypography-root MuiTypography-subheader1 css-fu4g2f">Discount model parameters</p>
                                 </div>
                                 <div class="MuiBox-root css-1d39wwj">
                                    <div class="MuiBox-root css-1o42vu5">
                                       <div class="MuiBox-root css-1ucx9m3">
                                          <span class="MuiTypography-root MuiTypography-secondary14 css-1ma60wi">
                                             <p class="MuiTypography-root MuiTypography-description css-1nkijli">Discountable amount</p>
                                          </span>
                                          <p class="MuiTypography-root MuiTypography-secondary14 css-ojt0hn"><span class="material-icons notranslate MuiIcon-root MuiIcon-fontSizeMedium css-zvdqz5" aria-hidden="true"><img src="https://app.aave.com/icons/tokens/gho.svg" width="100%" height="100%" alt="GHO icon"></span>100<span class="MuiTypography-root MuiTypography-secondary14 css-a7753a">to</span> <span class="material-icons notranslate MuiIcon-root MuiIcon-fontSizeMedium css-zvdqz5" aria-hidden="true"><img src="https://app.aave.com/icons/tokens/stkaave.svg" width="100%" height="100%" alt="stkAAVE icon"></span>1</p>
                                       </div>
                                    </div>
                                    <div class="MuiBox-root css-1o42vu5">
                                       <div class="MuiBox-root css-1ucx9m3">
                                          <span class="MuiTypography-root MuiTypography-secondary14 css-1ma60wi">
                                             <p class="MuiTypography-root MuiTypography-description css-1nkijli">Discount</p>
                                          </span>
                                          <p class="MuiTypography-root MuiTypography-secondary14 MuiTypography-noWrap css-1sdzf35">30<span class="MuiTypography-root MuiTypography-secondary14 css-d8aql2">%</span></p>
                                       </div>
                                    </div>
                                    <div class="MuiBox-root css-1o42vu5">
                                       <div class="MuiBox-root css-1ucx9m3">
                                          <span class="MuiTypography-root MuiTypography-secondary14 css-1ma60wi">
                                             <p class="MuiTypography-root MuiTypography-description css-1nkijli">APY with discount applied</p>
                                          </span>
                                          <p class="MuiTypography-root MuiTypography-secondary14 MuiTypography-noWrap css-16v0rd7">4.51<span class="MuiTypography-root MuiTypography-secondary14 css-d8aql2">%</span></p>
                                       </div>
                                    </div>
                                    <div class="MuiBox-root css-1o42vu5">
                                       <div class="MuiBox-root css-1ucx9m3">
                                          <span class="MuiTypography-root MuiTypography-secondary14 css-1ma60wi">
                                             <p class="MuiTypography-root MuiTypography-description css-1nkijli">Minimum staked Aave amount</p>
                                          </span>
                                          <div class="MuiStack-root css-u4p24i">
                                             <span class="material-icons notranslate MuiIcon-root MuiIcon-fontSizeMedium css-zvdqz5" aria-hidden="true"><img src="https://app.aave.com/icons/tokens/stkaave.svg" width="100%" height="100%" alt="stkAAVE icon"></span>
                                             <p class="MuiTypography-root MuiTypography-secondary14 MuiTypography-noWrap css-16v0rd7">0.001</p>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="MuiBox-root css-1o42vu5">
                                       <div class="MuiBox-root css-1ucx9m3">
                                          <span class="MuiTypography-root MuiTypography-secondary14 css-1ma60wi">
                                             <p class="MuiTypography-root MuiTypography-description css-1nkijli">Minimum GHO borrow amount</p>
                                          </span>
                                          <div class="MuiStack-root css-u4p24i">
                                             <span class="material-icons notranslate MuiIcon-root MuiIcon-fontSizeMedium css-zvdqz5" aria-hidden="true"><img src="https://app.aave.com/icons/tokens/gho.svg" width="100%" height="100%" alt="GHO icon"></span>
                                             <p class="MuiTypography-root MuiTypography-secondary14 MuiTypography-noWrap css-16v0rd7">1.00</p>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <p class="MuiTypography-root MuiTypography-caption css-1fzsl0k">Discount parameters are decided by the Aave community and may be changed over time. Check Governance for updates and vote to participate. <a class="MuiTypography-root MuiTypography-caption MuiLink-root MuiLink-underlineNone css-3p3htd" href="https://governance.aave.com" target="_blank" rel="noopener">Learn more</a></p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="MuiBox-root css-1osbn5p">
               <div class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 css-yt1g49">
                  <h3 class="MuiTypography-root MuiTypography-h3 css-tuyoad">Your info</h3>
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
                           <p class="MuiTypography-root MuiTypography-buttonL css-1suv5l">GHO</p>
                           <div class="MuiBox-root css-1isemmb"></div>
                        </div>
                     </div>
                  </div>
                  <hr class="MuiDivider-root MuiDivider-fullWidth css-ocmf2r">
                  <div class="MuiStack-root css-1hdbc19">
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
                                 <p class="MuiTypography-root MuiTypography-buttonL css-1suv5l">GHO</p>
                              </div>
                              <p class="MuiTypography-root MuiTypography-subheader2 MuiTypography-noWrap css-1osjw6r"><span class="MuiTypography-root MuiTypography-subheader2 css-1fouq79">$</span>0</p>
                           </div>
                           <button class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation Mui-disabled MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation css-1no6dw" tabindex="-1" type="button" disabled="" data-cy="borrowButton">Borrow</button>
                        </div>
                     </div>
                     <div class="MuiStack-root css-1hdbc19">
                        <div class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiAlert-root MuiAlert-colorInfo MuiAlert-standardInfo MuiAlert-standard css-1smjs47" role="alert">
                           <div class="MuiAlert-message css-1xsto0d">To borrow you need to supply any asset to be used as collateral.</div>
                        </div>
                        <div class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiAlert-root MuiAlert-colorWarning MuiAlert-standardWarning MuiAlert-standard css-1gxw2ay" role="alert">
                           <div class="MuiAlert-message css-1xsto0d">Maximum amount available to borrow is limited because protocol borrow cap is nearly reached. <a class="MuiTypography-root MuiTypography-description MuiLink-root MuiLink-underlineAlways css-1oz80w" href="https://docs.aave.com/developers/whats-new/supply-borrow-caps" target="_blank" rel="noopener">Learn more</a></div>
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
@font-face { font-family: Inter; src: url("/_next/static/media/Inter-Thin.dafaa44d.woff2") format("woff2"), url("/_next/static/media/Inter-Thin.16325d9b.woff") format("woff"); font-style: normal; font-weight: 100; font-display: swap; }
@font-face { font-family: Inter; src: url("/_next/static/media/Inter-ThinItalic.4fc662b3.woff2") format("woff2"), url("/_next/static/media/Inter-ThinItalic.d3d89947.woff") format("woff"); font-style: italic; font-weight: 100; font-display: swap; }
@font-face { font-family: Inter; src: url("/_next/static/media/Inter-ExtraLight.6824177d.woff2") format("woff2"), url("/_next/static/media/Inter-ExtraLight.15c082a5.woff") format("woff"); font-style: normal; font-weight: 200; font-display: swap; }
@font-face { font-family: Inter; src: url("/_next/static/media/Inter-ExtraLightItalic.05138ddd.woff2") format("woff2"), url("/_next/static/media/Inter-ExtraLightItalic.3beee54f.woff") format("woff"); font-style: italic; font-weight: 200; font-display: swap; }
@font-face { font-family: Inter; src: url("/_next/static/media/Inter-Light.27083fa6.woff2") format("woff2"), url("/_next/static/media/Inter-Light.91dfddd8.woff") format("woff"); font-style: normal; font-weight: 300; font-display: swap; }
@font-face { font-family: Inter; src: url("/_next/static/media/Inter-LightItalic.0a783b89.woff2") format("woff2"), url("/_next/static/media/Inter-LightItalic.f8ccf281.woff") format("woff"); font-style: italic; font-weight: 300; font-display: swap; }
@font-face { font-family: Inter; src: url("/_next/static/media/Inter-Regular.f1f0c35b.woff2") format("woff2"), url("/_next/static/media/Inter-Regular.f356e84a.woff") format("woff"); font-style: normal; font-weight: 400; font-display: swap; }
@font-face { font-family: Inter; src: url("/_next/static/media/Inter-Italic.d593a8df.woff2") format("woff2"), url("/_next/static/media/Inter-Italic.9beab784.woff") format("woff"); font-style: italic; font-weight: 400; font-display: swap; }
@font-face { font-family: Inter; src: url("/_next/static/media/Inter-Medium.dc792b50.woff2") format("woff2"), url("/_next/static/media/Inter-Medium.ec7dd2d9.woff") format("woff"); font-style: normal; font-weight: 500; font-display: swap; }
@font-face { font-family: Inter; src: url("/_next/static/media/Inter-MediumItalic.84d3493a.woff2") format("woff2"), url("/_next/static/media/Inter-MediumItalic.17301e5b.woff") format("woff"); font-style: italic; font-weight: 500; font-display: swap; }
@font-face { font-family: Inter; src: url("/_next/static/media/Inter-SemiBold.fcb100c7.woff2") format("woff2"), url("/_next/static/media/Inter-SemiBold.55027e47.woff") format("woff"); font-style: normal; font-weight: 600; font-display: swap; }
@font-face { font-family: Inter; src: url("/_next/static/media/Inter-SemiBoldItalic.d90f295d.woff2") format("woff2"), url("/_next/static/media/Inter-SemiBoldItalic.ab9105ed.woff") format("woff"); font-style: italic; font-weight: 600; font-display: swap; }
@font-face { font-family: Inter; src: url("/_next/static/media/Inter-Bold.579e0f95.woff2") format("woff2"), url("/_next/static/media/Inter-Bold.b1234477.woff") format("woff"); font-style: normal; font-weight: 700; font-display: swap; }
@font-face { font-family: Inter; src: url("/_next/static/media/Inter-BoldItalic.828a494e.woff2") format("woff2"), url("/_next/static/media/Inter-BoldItalic.3d0d8043.woff") format("woff"); font-style: italic; font-weight: 700; font-display: swap; }
@font-face { font-family: Inter; src: url("/_next/static/media/Inter-ExtraBold.d65f0281.woff2") format("woff2"), url("/_next/static/media/Inter-ExtraBold.208a9e6c.woff") format("woff"); font-style: normal; font-weight: 800; font-display: swap; }
@font-face { font-family: Inter; src: url("/_next/static/media/Inter-ExtraBoldItalic.8c7eac5c.woff2") format("woff2"), url("/_next/static/media/Inter-ExtraBoldItalic.30429962.woff") format("woff"); font-style: italic; font-weight: 800; font-display: swap; }
@font-face { font-family: Inter; src: url("/_next/static/media/Inter-Black.796be8d8.woff2") format("woff2"), url("/_next/static/media/Inter-Black.b254104c.woff") format("woff"); font-style: normal; font-weight: 900; font-display: swap; }
@font-face { font-family: Inter; src: url("/_next/static/media/Inter-BlackItalic.752f1e0a.woff2") format("woff2"), url("/_next/static/media/Inter-BlackItalic.70306b0e.woff") format("woff"); font-style: italic; font-weight: 900; font-display: swap; }
@font-face { font-family: Inter var; src: url("/_next/static/media/Inter-roman.var.b2129c00.woff2") format("woff2"); font-style: normal; font-weight: 100 900; font-display: swap; }
@font-face { font-family: Inter var; src: url("/_next/static/media/Inter-italic.var.958a0b97.woff2") format("woff2"); font-style: italic; font-weight: 100 900; font-display: swap; }
@font-face { font-family: Inter var experimental; src: url("/_next/static/media/Inter.var.730e8169.woff2") format("woff2"); font-style: oblique 0deg 10deg; font-weight: 100 900; font-display: swap; }
body { --wcm-z-index: 1300; }

</style>
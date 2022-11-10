<template>
  <footer>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">

      <!-- Top area: Blocks -->
      <div class="grid sm:grid-cols-12 gap-8 py-8 md:py-12">

        <!-- 1st block -->
        <div class="sm:col-span-12 lg:col-span-8 lg:max-w-xs">
          <div class="mb-2">
            <!-- Logo -->
            <router-link class="inline-flex transition duration-150 ease-in-out" to="/" aria-label="Cruip">

                <svg id="mg-logo" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 293.72 81">
                    <g class="fill-blue-400">
                        <path d="M37.93,76.22H14.74C7.66,76.22,2.93,69.87,4.18,62L11.05,19c1.25-7.82,8-14.17,15.08-14.17H49.32c7.08,0,11.81,6.35,10.56,14.17L53,62C51.76,69.87,45,76.22,37.93,76.22Z"/>
                        <path d="M90.55,76.22H73.89c-7.82,0-13-6.35-11.67-14.18L69.82,19C71.2,11.13,78.66,4.78,86.49,4.78h16.65c7.83,0,13.06,6.35,11.68,14.17L107.22,62C105.84,69.87,98.38,76.22,90.55,76.22Z"/>
                        <path d="M151.87,76.22h-23.2c-7.07,0-11.8-6.35-10.55-14.18L125,19c1.25-7.82,8-14.17,15.07-14.17h23.2c7.08,0,11.81,6.35,10.56,14.17L167,62C165.7,69.87,159,76.22,151.87,76.22Z"/>
                        <path d="M289.68,17a16.29,16.29,0,0,1-5.78,10.54,16,16,0,0,1-10.25,4H229.39a7,7,0,0,0-6.65,5.65L218.3,62.33c-1.38,7.82-8.84,14.17-16.67,14.17H188.8c-7.83,0-13.06-6.35-11.68-14.17l7.7-43.66c0-.11,0-.23.07-.34,1.53-7.67,8.89-13.83,16.61-13.83h76.55C285.19,4.5,290.41,9.88,289.68,17Z"/>
                        <path d="M246.77,40.5h25.3c7.45,0,12.43,6,11.12,13.5l-1.59,9c-1.31,7.45-8.42,13.5-15.88,13.5h-25.3c-7.45,0-12.43-6-11.12-13.5l1.59-9C232.2,46.54,239.31,40.5,246.77,40.5Z"/>
                    </g>
                </svg>

            </router-link>
          </div>
          <div class="text-lg font-bold text-slate-800">Marketing for Entrepreneurs</div>
        </div>

        <!-- 2nd block -->
<!--        <div class="sm:col-span-6 md:col-span-3 lg:col-span-2">-->
<!--          <h6 class="text-sm text-slate-800 font-semibold mb-2">How it works</h6>-->
<!--          <ul class="text-sm font-medium space-y-2">-->
<!--            <li>-->
<!--              <router-link class="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out" to="#0">Overview</router-link>-->
<!--            </li>-->
<!--            <li>-->
<!--              <router-link class="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out" to="#0">Pricing</router-link>-->
<!--            </li>-->
<!--            <li>-->
<!--              <router-link class="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out" to="#0">Service Areas</router-link>-->
<!--            </li>-->
<!--          </ul>-->
<!--        </div>-->

        <!-- 3rd block -->
<!--        <div class="sm:col-span-6 md:col-span-3 lg:col-span-2">-->
<!--          <h6 class="text-sm text-slate-800 font-semibold mb-2">Resources</h6>-->
<!--          <ul class="text-sm font-medium space-y-2">-->
<!--            <li>-->
<!--              <router-link class="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out" to="#0">Customer Stories</router-link>-->
<!--            </li>-->
<!--            <li>-->
<!--              <router-link class="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out" to="#0">Knowledge Base</router-link>-->
<!--            </li>-->
<!--            <li>-->
<!--              <router-link class="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out" to="#0">Contact Us</router-link>-->
<!--            </li>-->
<!--          </ul>-->
<!--        </div>-->

        <!-- 4th block -->
        <div class="sm:col-span-6 md:col-span-3 lg:col-span-2">
          <h6 class="text-sm text-slate-800 font-semibold mb-2">Sitemap</h6>
          <ul class="text-sm font-medium space-y-2">
              <li>
                  <router-link class="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out" to="#0">The Pitch</router-link>
              </li>
            <li>
              <router-link class="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out" to="#0">Case Studies</router-link>
            </li>
            <li>
              <router-link class="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out" to="#0">About</router-link>
            </li>
          </ul>
        </div>

        <!-- 5th block -->
        <div class="sm:col-span-6 md:col-span-3 lg:col-span-2">
          <h6 class="text-sm text-slate-800 font-semibold mb-2">Info</h6>
          <ul class="text-sm font-medium space-y-2">
            <li>
              <router-link class="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out" to="#0">Cookie Policy</router-link>
            </li>
            <li>
              <router-link class="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out" to="#0">Blog</router-link>
            </li>
          </ul>
        </div>

      </div>

      <!-- Bottom area -->
      <div class="md:flex md:items-center md:justify-between py-6 md:py-8 border-t border-slate-200">

        <!-- Social links -->
        <ul class="flex space-x-6 mb-4 md:order-1 md:ml-4 md:mb-0">
            <li>
                <a href="mailto:info@mgdesignuk.co.uk" class="text-sm text-slate-500 mr-4 hover:text-blue-700 transition-all">info@mgdesignuk.co.uk</a>
            </li>
<!--          <li>-->
<!--            <router-link class="text-blue-500 hover:text-blue-600 transition duration-150 ease-in-out" to="#0" aria-label="Twitter">-->
<!--              <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">-->
<!--                <path d="M20 3.897c-.75.33-1.5.577-2.333.66A4.4 4.4 0 0 0 19.5 2.33c-.833.495-1.667.825-2.583.99a4.053 4.053 0 0 0-3-1.32c-2.25 0-4.084 1.814-4.084 4.041 0 .33 0 .66.084.907-3.5-.164-6.5-1.814-8.5-4.288C1 3.32.833 3.98.833 4.722c0 1.402.75 2.639 1.834 3.381-.667 0-1.334-.165-1.834-.495v.083c0 1.98 1.417 3.629 3.25 3.958-.333.083-.666.165-1.083.165-.25 0-.5 0-.75-.082.5 1.65 2 2.804 3.833 2.804C4.667 15.608 2.917 16.268 1 16.268c-.333 0-.667 0-1-.082C1.833 17.34 4 18 6.25 18c7.583 0 11.667-6.186 11.667-11.546v-.495c.833-.578 1.5-1.32 2.083-2.062Z" />-->
<!--              </svg>-->
<!--            </router-link>-->
<!--          </li>-->
<!--          <li>-->
<!--            <router-link class="text-blue-500 hover:text-blue-600 transition duration-150 ease-in-out" to="#0" aria-label="Facebook">-->
<!--              <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">-->
<!--                <path d="M20 10.025C20 4.491 15.52 0 10 0S0 4.491 0 10.025c0 4.852 3.44 8.892 8 9.825v-6.817H6v-3.008h2V7.52a3.508 3.508 0 0 1 3.5-3.509H14v3.008h-2c-.55 0-1 .45-1 1.002v2.005h3v3.008h-3V20c5.05-.501 9-4.772 9-9.975Z" />-->
<!--              </svg>-->
<!--            </router-link>-->
<!--          </li>-->
<!--          <li>-->
<!--            <router-link class="text-blue-500 hover:text-blue-600 transition duration-150 ease-in-out" to="#0" aria-label="Telegram">-->
<!--              <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">-->
<!--                <path d="M19.96 2.336a.421.421 0 0 0-.291-.308 1.543 1.543 0 0 0-.788.054S1.358 8.194.358 8.87c-.215.145-.288.23-.324.33-.173.485.366.694.366.694l4.517 1.428a.506.506 0 0 0 .229-.013c1.026-.63 10.332-6.335 10.873-6.527.083-.024.148 0 .131.061-.215.732-8.257 7.664-8.301 7.706a.16.16 0 0 0-.06.143l-.422 4.28s-.176 1.331 1.196 0a38.082 38.082 0 0 1 2.374-2.11c1.553 1.041 3.224 2.192 3.945 2.794.245.23.576.354.916.342.426-.05.774-.35.876-.754 0 0 3.192-12.471 3.298-14.142.011-.162.025-.268.027-.38.005-.13-.008-.26-.04-.387Z" />-->
<!--              </svg>-->
<!--            </router-link>-->
<!--          </li>-->
<!--          <li>-->
<!--            <router-link class="text-blue-500 hover:text-blue-600 transition duration-150 ease-in-out" to="#0" aria-label="Github">-->
<!--              <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">-->
<!--                <path d="M10.041 0C4.52 0 0 4.612 0 10.25c0 4.526 2.845 8.37 6.862 9.737.502.085.669-.257.669-.513v-1.708c-2.761.598-3.347-1.367-3.347-1.367-.419-1.196-1.088-1.537-1.088-1.537-1.004-.598 0-.598 0-.598 1.004.085 1.506 1.025 1.506 1.025.92 1.537 2.343 1.11 2.929.854.084-.683.335-1.11.67-1.367-2.26-.256-4.603-1.11-4.603-5.039 0-1.11.419-2.05 1.004-2.733 0-.342-.418-1.367.168-2.733 0 0 .836-.257 2.76 1.025.838-.257 1.674-.342 2.511-.342.837 0 1.674.085 2.51.342 1.925-1.367 2.762-1.025 2.762-1.025.586 1.452.167 2.477.084 2.733.669.683 1.004 1.623 1.004 2.733 0 3.93-2.343 4.783-4.603 5.04.335.341.67.939.67 1.879v2.818c0 .256.167.598.67.513 4.016-1.367 6.86-5.21 6.86-9.737C20.084 4.612 15.565 0 10.042 0Z" />-->
<!--              </svg>-->
<!--            </router-link>-->
<!--          </li>-->
        </ul>

        <!-- Copyrights note -->
        <div class="text-sm text-slate-500 mr-4">&copy; Mgdesignuk All rights reserved.</div>

      </div>

    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

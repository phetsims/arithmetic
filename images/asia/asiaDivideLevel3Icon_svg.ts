/* eslint-disable */
/* @formatter:off */

import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="Layer_5" width="300" height="300" viewBox="0 0 300 300"><defs><style>.cls-2{stroke-linejoin:round}.cls-2,.cls-3{stroke-linecap:round}.cls-2,.cls-3,.cls-4,.cls-5{fill:none}.cls-5{stroke:#fff}.cls-2,.cls-3,.cls-4{stroke:#000}.cls-3,.cls-4,.cls-5{stroke-miterlimit:10}.cls-11,.cls-12,.cls-15,.cls-6,.cls-9{stroke-width:0}.cls-9{fill:#524d52}.cls-11{fill:#1e171e}.cls-12{fill:#cb9183}.cls-15{fill:#3246ff}</style></defs><path d="M196.4 288.1v2.1s-1.2 2.9-5.8 2.8-9.7-1.2-12.1-2.1c-2.3-.9-5.4-2.9-6.1-3s-8-.1-9.5-2.5 0-2.9 0-2.9v.3c1.1.9 2.7 2.8 9.1 2.5 4.3 1.3 9.6 6.9 20.2 5.1 2.9-1.1 3.3-3 3.3-3l.8.5Z" class="cls-11"/><path d="m176.7 275.8 19 11.8s-.5 1.9-3.3 3c-10.6 1.8-16-3.8-20.2-5.1-6.3.3-8-1.7-9.1-2.5v-2c1.6-.1 3.2-.2 4.8-.4 3.5-.4 7.6-1.5 8.9-4.7Z" class="cls-11"/><path d="M186.7 151.2c0-.3.1-.6.2-.9v3.6c-.3-.4-.4-1-.4-1.5 0-.4 0-.8.1-1.2Z" style="stroke-width:0;fill:#383838"/><path d="M204.1 133.7c-.1-.2-.3-.2-.5-.2-3.7-.7-7.8.4-10.7 2.8-1.6-.6-3.3-.1-4.7.9-1 .8-1.3 1.4-1.4 2.4-.2 0-.4 0-.6.2-1.1.5-2.3 1.9-2.7 3.3-.5 1.7-.2 5 .4 6.2.6 1.1 1.7 1.9 2.9 2 0-.3.2 1.8.2 2.7.4.5 1.1.6 1.8.6s1.4 0 1.9-.3c.4-.3.6-.8.7-1.2.1-.5 0-1.3-.2-2.1.9-.3 1.6-.9 2-1.7.6.4 1.2.7 1.9.9.8.2 1.6.2 2.3-.2.6-.4 1-1.1 1.1-1.9v-.1c.5 0 1 0 1.6.1.5 0 1.1 0 1.5-.4.2-.2.3-.5.4-.8.4-.9.7-1.8 1.1-2.7.2-.5.4-1.2.2-1.7-.2-.4-.6-.6-1-.7-.4 0-.8 0-1.2.1-.3 0-.5.2-.8.3-1.1 0-2.4 0-3-.9-.4-.6-.2-1.5.2-2.1s1-1.1 1.6-1.5c1.5-1 2.9-2.1 4.4-3.1.3-.2.7-.6.5-1Z" class="cls-12"/><path d="M186.7 151.2c0 .4 0 .8-.1 1.2 0 .5 0 1.1.4 1.5-1.8 1.1-8.9.9-12-.2-.4-.2-.8-.3-1-.5-1.6-1.4-1-4.9-.9-6.2.3-2.5 1.3-4.9 3.5-7.2.9-1 2.3-1.5 3.7-1.7 1.9-.3 4 0 5.6.7.2.3.3.6.4 1-1.1.5-2.3 1.9-2.7 3.3-.5 1.7-.2 5 .4 6.2.6 1.1 1.7 1.9 2.9 2Z" class="cls-9"/><path d="M180.2 137.7v.3c-1.4.2-2.8.8-3.7 1.7-2.2 2.3-3.2 4.7-3.5 7.2-.2 1.4-.7 4.9.9 6.2.2.2.6.4 1 .5-2.1-.7-2.8-.9-3.7-2.8h-.4c-.4-7.2 2.6-15 1.1-26.8.6-3.8.5-7.8-.6-11.5-.1-.5-.3-.9-.4-1.4 1.2.5 2.1 1 2.5 1.5 2.6 3.7 4.8 17 6.8 25Z" class="cls-9"/><path d="M123 255.4h-.8c-2.2-8.1 7.3-69.2 10.6-92.4.7-4.9 1.1-8.1 1-8.8-.3-3.8-2.4-12.9-4.4-15.7.5-3.1.9-6.1 1.2-8.5.1 2.1.5 4.3 1.1 6.6 1.8 6.4 6.3 10.1 8.4 12.3-1.4-3.7 1.5-13.1 3-16.8s2.8-10.5 2.4-14.4c0-.7-.3-1.5-.7-2.4 4.1 2 8 .3 10-1.5.6-.5.8-1 1-1.6 4 5.2 5.2 12.5 5.3 19.1 0 6.6.4 13.7 4.4 18.9 2.3-4.1 2.3-5.2 3.4-8.6s-.6-7.5.9-10.7q1.5-3.3 2.1-6.9c1.5 11.7-1.4 19.6-1.1 26.8 0 1.1.2 2.2.4 3.3 9.7 43.6 10.1 102.2 8.2 103.4-.5.1-1 .2-1.6.2-7.6-.4-16.8-18.2-18.9-18.2s-4.9 17.8-36 15.8Z" style="stroke-width:0;fill:#b994c8"/><path d="M138.2 279h-.2c-2.8-.6-5.5-1.4-8.2-2.2-1.5-.5-3.1-1.1-4.5-1.9q-1.65-1.05-2.7-2.7c-1.2-2.1-.2-11.8.4-16.6 31.2 2 33.3-15.8 36-15.8s11.3 17.8 18.9 18.2c.5 6.4-.6 16.4-1.2 17.9-1.3 3.3-5.4 4.3-8.9 4.7-1.6.2-3.2.3-4.8.4-8.3.5-16.7-.1-24.8-1.9Z" class="cls-9"/><path d="m130.4 95 .5.2c2.8 2.2 4.6 4.5 5.7 6.7 1.9 2.6 6.4 9.1 8.2 13.5.4.9.6 1.7.7 2.4.4 3.9-.9 10.7-2.4 14.4s-4.4 13.1-3 16.8c-2.1-2.3-6.6-5.9-8.4-12.3-.6-2.3-1-4.5-1.1-6.6-.2-2.5 0-5 0-7.5.2-4.5-2.1-9.1-6.2-10.7h-.4c-6.8 1.3-2.1-9.2-5-12.9-11.9-15.6-5.1-41.2 11.3-46.7 8.2-2.7 20.3-.9 27.3 4.2 6.8 4.9 11.2 23 10.4 31-.5 5-1.1 10.1 0 15 .7 3 2 5.9 2.9 8.9.1.5.3.9.4 1.4 1 3.7 1.2 7.7.6 11.5q-.6 3.6-2.1 6.9c-1.5 3.2.2 7.3-.9 10.7s-1.1 4.6-3.4 8.6c-4-5.2-4.3-12.3-4.4-18.9 0-6.6-1.3-13.9-5.3-19.1.3-1.2-.2-2.6-.1-3.9.2-2.7 0-4.8.8-7.3 6.4-6.9 8-8.3 7.8-14.5-.2-9.2-4.2-8.3-3.5-15.1 0-6.7-10-18.6-19.7-16.4 1.1 7.2.5 14.1-1.3 20.1-.3-.2-.7-.3-.9-.2-.7.3-.8 1.8-.1 3.4-1.5 4-1.2 4.5-3.3 8.2-1.8 3.2-2.4 5.4-5.1 8.3Z" style="stroke-width:0;fill:#49424f"/><path d="M164.3 86.6c.2 6.1-1.4 7.6-7.8 14.5-.8 2.5-.6 4.7-.8 7.3 0 1.3.4 2.7.1 3.9-.1.5-.4 1.1-1 1.6-2.1 1.8-5.9 3.5-10 1.5-1.7-4.4-6.3-10.9-8.2-13.5-1.2-2.2-2.9-4.5-5.7-6.7l-.5-.2c2.7-3 3.3-5.2 5.1-8.3 2.2-3.7 1.8-4.2 3.3-8.2.6 1.6 1.7 2.7 2.4 2.4s.8-1.8.1-3.4c-.4-1-.9-1.8-1.5-2.2 1.8-6 2.4-12.9 1.3-20.1 9.7-2.2 19.7 9.7 19.7 16.4-.7 6.9 3.2 6 3.5 15.1Zm-6.5-11c.6-.2.6-1.6 0-3.1s-1.5-2.5-2.1-2.2c-.6.2-.6 1.6 0 3.1s1.5 2.5 2.1 2.2M152 91.7c5.5-1 5.7-4.8 5.5-5.1s-8.5 3.3-12 2.2c1.6 1.9 4.1 3.3 6.5 2.9m.7-23.6c1.5-1.2 3.2-1.4 4.9-1.8-.7-1.4-4.1-3.5-7.3 1.1-.4.6 0 1.5.5 1.6s1.5-.5 1.9-.9" class="cls-12"/><path d="M157.8 72.5c.6 1.5.5 2.8 0 3.1-.6.2-1.5-.8-2.1-2.2-.6-1.5-.6-2.8 0-3.1.6-.2 1.5.8 2.1 2.2" class="cls-6"/><path d="M157.5 86.6c.2.3 0 4.1-5.5 5.1-2.5.4-4.9-1-6.5-2.9 3.6 1.1 11.8-2.5 12-2.2" style="stroke-width:0;fill:#fff"/><path d="M157.6 66.4c-1.7.4-3.3.7-4.9 1.8-.5.4-1.4 1-1.9.9s-.9-1-.5-1.6c3.1-4.7 6.5-2.5 7.3-1.1m-16.2 11c.6 1.6.6 3.1-.1 3.4s-1.8-.8-2.4-2.4c.4-1 .7-2.1 1.1-3.2.5.4 1.1 1.2 1.5 2.2Zm-2.5-2.4c.3-.1.6 0 .9.2-.3 1.1-.7 2.2-1.1 3.2-.6-1.6-.6-3.1.1-3.4Z" class="cls-6"/><path d="M138.2 279c.4.9 0 2.2 0 2.2l-1.4 3.1s-.9 3.7-2.6 7.9c-1.8 4.2-7.1 6.7-12.8 6s-7.3-5.6-7.3-5.6l.8-4c0 1.6 2.3 5.5 6.5 6.6 9.6 2.4 13.1-7.7 16.3-15.3.1-.7.1-.4.2-.9h.2Z" class="cls-11"/><path d="M137.9 279c0 .6 0 .2-.2.9-3.2 7.6-6.7 17.8-16.3 15.3-4.2-1.1-6.4-5.1-6.5-6.6l.2-.9c.7-1.9 3.2-6 7.5-9.6 1.3-1.2 2.5-2.4 2.8-3.3 1.3.9 2.9 1.5 4.5 1.9 2.7.9 5.4 1.6 8.2 2.2Z" class="cls-11"/><path d="M124.4 111.7c4.2 1.7 6.5 6.3 6.2 10.7-.1 2.6-.2 5 0 7.5-.3 2.5-.7 5.5-1.2 8.5-1.3 8.4-2.8 17.6-2.8 20.5-.3-.9-.7-1.7-1.2-2.5s-1.2-1.5-2.1-1.8c-1.2-.5-2.6-.3-3.6-1-1.8-1.2-4.2-1.2-6.2-.5l-.3-.3 4.4-30.7c.9-3 3.2-9.6 6.3-10.5h.4Z" class="cls-9"/><path d="m115 287.7-.2.9v-.2c0-.2 0-.4.2-.7" style="stroke-width:0;fill:#f0efed"/><path d="M136.6 101.9c-1.2-2.2-2.9-4.5-5.7-6.7" class="cls-4"/><path d="M155.8 112.3c-.1.5-.4 1.1-1 1.6-2.1 1.8-5.9 3.5-10 1.5" class="cls-2"/><path d="M160.8 71.5c-.7 6.9 3.2 6 3.5 15.1.2 6.1-1.4 7.6-7.8 14.5-.8 2.5-.6 4.7-.8 7.3 0 1.3.4 2.7.1 3.9" class="cls-4"/><path d="M155.7 73.4c.6 1.5 1.5 2.5 2.1 2.2.6-.2.6-1.6 0-3.1s-1.5-2.5-2.1-2.2c-.6.2-.6 1.6 0 3.1m-16.9 5c.6 1.6 1.7 2.7 2.4 2.4s.8-1.8.1-3.4c-.4-1-.9-1.8-1.5-2.2-.3-.2-.7-.3-.9-.2-.7.3-.8 1.8-.1 3.4" class="cls-2"/><path d="M145.5 88.8c1.6 1.9 4.1 3.3 6.5 2.9 5.5-1 5.7-4.8 5.5-5.1s-8.5 3.3-12 2.2Z" class="cls-4"/><path d="M148.4 85.2c.6-1.3 2.6-2.7 4-3.1s3.4-.8 4 1M130.6 130v-.4" class="cls-2"/><path d="M126.6 159.1c0-2.9 1.5-12.2 2.8-20.5.5-3.1.9-6.1 1.2-8.5m-6.6-18.3c-3.1.9-5.5 7.5-6.3 10.5l-4.4 30.7.3.3m10.8-41.6h-.4" class="cls-4"/><path d="M170.8 111.2c1.2.5 2.1 1 2.5 1.5 2.6 3.7 4.8 17 6.8 25" class="cls-2"/><path d="M170.4 111c.2 0 .3.1.4.2m4.1 42.5c3.1 1.1 10.2 1.3 12 .2m-.7-14.2c0-.4-.2-.7-.4-1-1.6-.7-3.7-1-5.6-.7-1.4.2-2.8.8-3.7 1.7-2.2 2.3-3.2 4.7-3.5 7.2-.2 1.4-.7 4.9.9 6.2.2.2.6.4 1 .5" class="cls-4"/><path d="M174.9 153.7c-2.1-.7-2.8-.9-3.7-2.8" class="cls-4"/><path d="M179.4 257.7c-.5.1-1 .2-1.6.2-7.6-.4-16.8-18.2-18.9-18.2s-4.9 17.8-36 15.8h-.8c-2.2-8.1 7.3-69.2 10.6-92.4.7-4.9 1.1-8.1 1-8.8-.3-3.8-2.4-12.9-4.4-15.7" class="cls-3"/><path d="M171.8 124.1c1.5 11.7-1.4 19.6-1.1 26.8 0 1.1.2 2.2.4 3.3 9.7 43.6 10.1 102.2 8.2 103.4" class="cls-3"/><path d="M157.6 66.4c-.7-1.4-4.1-3.5-7.3 1.1-.4.6 0 1.5.5 1.6s1.5-.5 1.9-.9c1.5-1.2 3.2-1.4 4.9-1.8Zm29.3 74.4v-1.2c0-1 .4-1.6 1.4-2.4 1.4-1.1 3-1.6 4.7-.9 2.9-2.4 6.9-3.5 10.7-2.8.2 0 .4 0 .5.2.2.3-.1.7-.5 1-1.5 1-2.9 2.1-4.4 3.1-.6.4-1.2.9-1.6 1.5s-.6 1.5-.2 2.1c.6.9 1.9.9 3 .8m-7 2.8c.1.6.9.7 1.4.5s.9-.7 1.3-1.1 1-.7 1.5-.5c.2 0 .4.2.5.4.3.4.3.9.4 1.4 0 .7.1 1.4 0 2.1v.1c-.1.7-.5 1.5-1.1 1.9-.7.4-1.5.5-2.3.2-.7-.2-1.3-.6-1.9-.9h-.2m-6.3-9.5c-.2 0-.4 0-.6.2-1.1.5-2.3 1.9-2.7 3.3-.5 1.7-.2 5 .4 6.2.6 1.1 1.7 1.9 2.9 2h.2" class="cls-4"/><path d="M198.3 144.3c.4-.9 1.2-1.7 2.1-2.2.2-.1.5-.2.8-.3.4-.1.8-.2 1.2-.1.4 0 .8.3 1 .7.2.5 0 1.1-.2 1.7-.4.9-.7 1.8-1.1 2.7-.1.3-.2.6-.4.8-.4.4-.9.4-1.5.4-.5 0-1-.2-1.6-.1m-7.4 3c-.5-2-1.8-4.2-3.4-2.6-.4.4-.7 1-.8 1.6 0 .1 0 .3-.1.4 0 .3-.1.6-.2.9 0 .4 0 .8-.1 1.2 0 .5 0 1.1.4 1.5.4.5 1.1.6 1.8.6s1.4 0 1.9-.3c.4-.3.6-.8.7-1.2.1-.5 0-1.3-.2-2.1Z" class="cls-4"/><path d="M191.2 150.9c.9-.3 1.6-.9 2-1.7v-.1" class="cls-4"/><path d="M137.9 279c0 .6 0 .2-.2.9-3.2 7.6-6.7 17.8-16.3 15.3-4.2-1.1-6.4-5.1-6.5-6.6v-.2c0-.2 0-.4.2-.7.7-1.9 3.2-6 7.5-9.6 1.3-1.2 2.5-2.4 2.8-3.3" class="cls-2"/><path d="m115 287.7-.2.9-.8 4s1.6 4.9 7.3 5.6 11.1-1.8 12.8-6 2.6-7.9 2.6-7.9l1.4-3.1s.4-1.3 0-2.2c0-.1-.1-.3-.2-.4m25.1 2.3v2c1.1.9 2.7 2.8 9.1 2.5 4.3 1.3 9.6 6.9 20.2 5.1 2.9-1.1 3.3-3 3.3-3m-18.9-11.7 18.9 11.8" class="cls-2"/><path d="m195.6 287.6.8.5v2.1s-1.2 2.9-5.8 2.8-9.7-1.2-12.1-2.1c-2.3-.9-5.4-2.9-6.1-3s-8-.1-9.5-2.5 0-2.9 0-2.9" class="cls-2"/><path d="M125.9 98.9c2-1.5 3.4-2.8 4.4-3.9 2.7-3 3.3-5.2 5.1-8.3 2.2-3.7 1.8-4.2 3.3-8.2.4-1 .7-2.1 1.1-3.2 1.8-6 2.4-12.9 1.3-20.1 9.7-2.2 19.7 9.7 19.7 16.4" class="cls-4"/><path d="M136.6 101.9c1.9 2.6 6.4 9.1 8.2 13.5.4.9.6 1.7.7 2.4.4 3.9-.9 10.7-2.4 14.4s-4.4 13.1-3 16.8c-2.1-2.3-6.6-5.9-8.4-12.3-.6-2.3-1-4.5-1.1-6.6h0c-.2-2.5 0-5 0-7.5.2-4.5-2.1-9.1-6.2-10.7h-.4q0 0 0 0c-6.8 1.3-2.1-9.2-5-12.9-11.9-15.6-5.1-41.2 11.3-46.7 8.2-2.7 20.3-.9 27.3 4.2 6.8 4.9 11.2 23 10.4 31-.5 5-1.1 10.1 0 15 .7 3 2 5.9 2.9 8.9.1.5.3.9.4 1.4 1 3.7 1.2 7.7.6 11.5q-.6 3.6-2.1 6.9c-1.5 3.2.2 7.3-.9 10.7s-1.1 4.6-3.4 8.6" class="cls-2"/><path d="M155.8 112.3c4 5.2 5.2 12.5 5.3 19.1 0 6.6.4 13.7 4.4 18.9" class="cls-2"/><path d="M123 255.4s0 0 0 0c-.6 4.8-1.5 14.6-.4 16.6.6 1.1 1.6 2 2.7 2.7 1.3.9 2.9 1.5 4.5 1.9 2.7.9 5.4 1.6 8.2 2.2h.2c8.1 1.8 16.5 2.4 24.8 1.9 1.6 0 3.2-.2 4.8-.4 3.5-.4 7.6-1.5 8.9-4.7.6-1.5 1.6-11.5 1.2-17.9" class="cls-3"/><path d="M152.2 116.4c2.5 4.6 3.4 12.7 3.6 18.4.2 5.6.4 8.5.3 14.2-.2 9.4 1.5 18.8 2.8 28.1 2.5 18.1 1.7 43.9.8 62.2m-13.5-116.5c.9 4.6 1.7 13.5 1.3 16.8s-1 16.9-.6 23.4c.6 11.2-.2 26.5.7 37.7 1.2 15.2.3 34.6-.9 49.8m18.2-99.5c-.6 7.3 1.9 14.5 3 21.8 3.7 23.9 3.7 56.9 3.9 80.7M137 147c3.4 16.4.3 39.6-.4 56.3-.7 16.4-.5 30.5-2.1 50.9" style="stroke-linejoin:round;stroke-linecap:round;fill:none;stroke:#fff"/><path d="M185.22 40.192 202.266 24.9l15.294 17.045-17.045 15.293z" class="cls-15"/><path d="m186.157 100.615 20.547-10.11 10.11 20.547-20.546 10.11zM168.9 5.6 165 28.1l-22.5-3.9 3.9-22.5z" style="stroke-width:0;fill:#4d0099"/><path d="m112.3 159.8 1-5.7 2.5-13.4 22.5 4.1-4.1 22.5-4.4-.8c.5-.8.3-3.3-.7-4-.7-.5-1.9 1-2.6 1.9-.2 0-.4-.2-.5-.2-.2 0-.6.1-.7.2.2-.3.4-.6.5-.7.4-.6.9-2.1-.5-2.9-1.3-.7-3.6 1.3-3.8 1.6h-.1c.3-.8.2-1.6-.3-2.2-1.4-1.4-6.9 3.5-6.9 3.5l-.9-.2-1.6-.3z" class="cls-15"/><path d="M129.2 162.5c-.7-.5-1.9 1-2.6 1.9-.2 0-.4-.2-.5-.2-.2 0-.6.1-.7.2.2-.3.4-.6.5-.7.4-.6.9-2.1-.5-2.9-1.3-.7-3.6 1.3-3.8 1.6h-.1c.3-.8.2-1.6-.3-2.2-1.4-1.4-6.9 3.5-6.9 3.5l-.9-.2c-.3.9-.7 2.5-.5 3 .3.7 1.3 1 2.7 1.1.9 0 1.5-.3 2.2-.9-.1.3.7 1.4 2.3 2s2.3-.5 2.6-.6l.5-.5s1.1 1 3.1 1.2c1.9.2 3.2-1.2 3.7-2s.3-3.3-.7-4Zm-15.9-8.4-1 5.7-.3-.7s-4.8 2.5-6.3 1.5c-1.6-.9 4-6 5.4-6.3.6-.1 1.5-.2 2.2-.3Z" class="cls-12"/><path d="m104.6 42.9 5.7 22.2-22.2 5.7-5.7-22.2z" class="cls-15"/><path d="m112.3 159.8-.3-.7s-4.8 2.5-6.3 1.5c-1.6-.9 4-6 5.4-6.3.6-.1 1.5-.2 2.2-.3m-.5 12.5c-.2-.5.2-2.1.5-3" class="cls-4"/><path d="m142.5 24.2 22.5 3.9 3.9-22.5-22.5-3.9zm-12.8 142.4h.1l4.4.8 4.1-22.5-22.5-4.2-2.5 13.4-1 5.7-.6 3.4 1.5.3.9.2" class="cls-5"/><path d="M126.1 165.1s.2-.3.5-.7c.7-.9 1.9-2.4 2.6-1.9 1 .7 1.2 3.2.7 4s-1.8 2.2-3.7 2c-2-.2-3.1-1.2-3.1-1.2" class="cls-4"/><path d="M121.4 162.4c.2-.2 2.5-2.3 3.8-1.6 1.4.8.9 2.2.5 2.9 0 .1-.3.4-.5.7s-.5.7-.8 1.2c-.5.7-1 1.4-1.4 1.9-.2.3-.4.5-.5.5-.3.1-1 1.2-2.6.6-1.5-.6-2.4-1.7-2.3-1.9" class="cls-4"/><path d="M114.1 163.7s5.5-4.9 6.9-3.5q.75.9.3 2.1c-.3.8-.8 1.7-1.5 2.4l-.8.8c-.5.4-1 .8-1.4 1.2-.7.6-1.3 1-2.2.9-1.4-.1-2.3-.3-2.7-1.1m13.8-2.1c-.2 0-.4-.2-.5-.2-.2 0-.6.1-.7.2" class="cls-4"/><path d="m186.157 100.415 20.547-10.11 10.11 20.547-20.546 10.11zM110.3 65.1l-22.2 5.7-5.7-22.2 22.2-5.7zm75.003-24.726 17.072-15.264 15.263 17.072-17.071 15.263z" class="cls-5"/></svg>')}`;
export default image;
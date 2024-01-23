/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="Layer_5" width="300" height="300" viewBox="0 0 300 300"><defs><style>.cls-1{stroke:#221f1f}.cls-1,.cls-2{stroke-linecap:round;stroke-linejoin:round}.cls-1,.cls-2,.cls-3{fill:none}.cls-2,.cls-3{stroke:#000}.cls-4{fill:#4d0099;stroke:#fff;stroke-width:4.2px}.cls-3,.cls-4{stroke-miterlimit:10}.cls-10,.cls-11,.cls-12,.cls-13,.cls-15,.cls-5,.cls-6,.cls-9{stroke-width:0}.cls-6{fill:#6e327c}.cls-9{fill:#e16ed0}.cls-10{fill:#dccecf}.cls-11{fill:#c065ad}.cls-12{fill:#805530}.cls-13{fill:#7f2c8a}.cls-15{fill:#fff}</style></defs><path d="M41.8 183.7h70.4v76.5H41.8zm70.5 0h76.5v76.5h-76.5zm0-69.4h76.5v69.4h-76.5z" class="cls-4"/><path d="M188.7 183.7h69.4v76.5h-69.4zm0-69.4h69.4v69.4h-69.4zm0-74.5h69.4v74.5h-69.4z" class="cls-4"/><path d="M112.3 39.8h76.5v74.5h-76.5zm-70.5 74.5h70.4v69.4H41.8zm0-74.5h70.4v74.5H41.8z" class="cls-4"/><path d="M260.7 127.1c0-.8 0-1.4.4-1.9 1.6-2.2 6.8-1.5 9.5-2 4.6-.9 7.1-6.6 9-10.1.3-.5.6-1 .9-1.4 2.7-3.9 3.8-4.9 7.9-7.3 2.5-.4 5.1.3 7 1.8.2 4.7-4 11-7.4 13.9-3 2.5-9.2 7.1-12 9.9.9 2.5-2.4 5.7-4.5 7.2-1.5 1-8.6 3.9-7.9.3-1-.1-3-1.4-1.7-2.6-1.2-.3-2.4-1.6-1.4-3.2-3.8-1.3-2-3.2 0-4.6Z" class="cls-12"/><path d="M224.5 97c-1.4 2.3-6.2 16.8-6.4 16.5-1.9-3.5-3.4-6.8-3.6-7.3-2.3-1.1-4.8-1.6-7.4-1.4v-1.1c1.4 0 2.8-.7 4.5-1.7 4.5-2.6 6-8 3.4-11.9l7-4.1c-1.3-2-2.2-3.1-4.1-4.3.3-.5.6-.9.7-1.2 3.2-2.6 6.9-3.7 10.6-4.6 2.2-.5 4.3-1 6.4-1.7-6.3 5-8.9 12.2-6.6 20.3 3.1 11 15 17.6 26.7 14.7l-2.6-9.3c5.8-1.5 9.3-7.5 7.6-13.4-1.4-5.2-5.6-8.6-10.7-8.4 1.1-.7 2-1.5 2.6-2.6 0-.7-.1-1.6-.2-2.8 4.4.4 8 .8 12 1.7 3 .6 6.1 1.5 9.9 2.9.5.6 1.5 1.9 2.9 3.6-1.3 3.4-1 6.2.2 9.8 2.6 7.3 8.7 11.8 16.4 11.5l1.2 1.8c.3.7.5 1.4.5 2.1-1.9-1.5-4.6-2.2-7-1.7-4.1 2.2-5.2 3.3-7.9 7.2-.3.4-.6.9-.9 1.4-.4-.5-5.6-9.1-9.1-14.7-.6 2.8-.2 21.5 0 24.8-2.7.4-8-.2-9.5 2-1.8.7-3.7 3.2-4.3 5.2l-9.5-2.6c-3.2 10.7 3.8 18.4 15.1 21.5 4.9 1.3 9 1.2 13.3-.5.3.7.4 1.3.5 1.5-.9.4-1.8.8-2.8 1.2-10.6 4.3-24 5.2-34.9 4.6 2.2-3.7 2.9-8.2 1.6-12.7l-7.9 2.1c-1.1-3.7-4.3-4.9-8.4-4.9.1-.7.2-1.4.4-2.3.1-.9.2-2 .3-3.1 4-2.3 5.7-8.4 5.9-12.9s-1.4-10.3-5.3-12.9c-.1-4.6-.3-9-.6-12.4Z" class="cls-15"/><path d="M294 102.4c-7.7.3-13.9-4.2-16.4-11.5-1.3-3.7-1.5-6.4-.2-9.8 4.8 5.9 13.5 16.9 16.7 21.4Z" class="cls-9"/><path d="M284.7 276.8c.3.3.4 2.5.4 2.9-.3 2.4-2 3.2-6.3 4.5-5.5 1.6-9.9-1.5-12.3-4.3-2.8-3.3-3.9-6.5-3.9-6.9l-1.3-3v-.3c-.1-.4-.3-1.7.3-2.4 0 .4.2.8.2 1.3 1.4 3.4 3.1 6.8 5.3 9.4 2.8 3.1 6.5 4.9 11.8 3.5 4.4-1.1 5.8-3.1 5.7-4.4 0-.2 0-.4-.2-.7l.4.4Z" class="cls-10"/><path d="M282.9 273.8c.7 1.1 1.2 2 1.4 2.7 0 .3.2.5.2.7.1 1.4-1.2 3.3-5.7 4.4-5.3 1.3-9-.4-11.8-3.5 0 0 .7-6.1 7-7.3 6.1-1.2 8.8 2.9 8.9 3.1Z" class="cls-15"/><path d="M262.3 261.5c.5 2.9 2.9 4.1 3.3 3.3 0 0-1.2-5.2 5.7-5.2 0 0 2.4.2 3.4 3.9.1.6.5 1.1.9 1.6s.9 1.1 1.3 1.7c2.8 2.4 4.8 4.9 6.1 7-.1-.2-2.8-4.2-8.9-3.1-6.3 1.2-7 7.3-7 7.3-2.3-2.5-3.9-6-5.3-9.4 0-.4-.2-.9-.2-1.3-1.3-7.3.8-6.7.8-6.7v.9Zm-23.6-105.4c10.8.6 24.3-.3 34.9-4.6.2.5.4 2.2.5 4.8-5.4-.8-10.7.3-15.7 3.3l5.9 8.5c-5.4 3.3-6.7 10.5-2.9 15.9 3.2 4.7 9.1 6.6 14.1 4.9.5 16.1.9 31.3.9 31.3-1 .5-2.1 1-3.2 1.4-3.6 1.4-7.5 2.4-11.5 3 5.2-8.2 4.8-18.9-1.8-26.7l-8.9 6.8c-4.3-5.1-12.3-5.7-18-1.4s-6.9 11.9-2.6 17l-4.2 3.2c-1.3-.3-2.5-.6-3.5-1-1-.3-1.9-.7-2.6-1.1.6-3.3 1.2-16.2 1.7-29.9 11.9 2.7 22.7-4.4 25.6-15.7l-10-2.3c1.4-5.7-2.6-11.5-9-12.9-2-.5-3.6-.5-5.4-.1.1-3.5.2-6 .3-7 1.4.5 3.1.9 5.2 1.3 3 .6 6.5 1 10.4 1.2Z" class="cls-15"/><path d="M274.7 167.3c.3 6.5.6 14.2.8 21.8-5 1.6-10.9-.3-14.1-4.9-3.8-5.4-2.4-12.6 2.9-15.9 3.3-2.1 6.8-2.1 10.4-.9Z" class="cls-13"/><path d="M273.5 142.4c.8 2.3 1.7 4.8 2.3 6.4-4.3 1.7-8.4 1.8-13.3.5-11.3-3-18.3-10.8-15.1-21.5l9.5 2.6c-1.6 5.4 2 11 8 12.7 3 .8 5.6.7 8.1-.6h.4Zm.6 13.9c.2 2.8.4 6.6.6 10.9-3.6-1.2-7-1.1-10.4.9l-5.9-8.5c5-3.1 10.2-4.1 15.7-3.3" class="cls-9"/><path d="M273.5 142.4h-.4c-2.5 1.4-5.1 1.5-8.1.7-6-1.6-9.6-7.3-8-12.7.6-2 2.5-4.5 4.3-5.2-.3.5-.5 1.1-.4 1.9-2 1.5-3.8 3.3 0 4.6-1 1.6.2 2.9 1.4 3.2-1.3 1.2.7 2.5 1.7 2.6-.7 3.6 6.4.8 7.9-.3 0 0 .8 2.4 1.8 5.1Z" class="cls-6"/><path d="M273.1 221.8c2.9 13-2 24.3-1.8 37.8-6.9 0-5.7 5.2-5.7 5.2-.4.8-2.8-.4-3.3-3.3-.1-11.2-4.7-25.3-5.5-36.1l4.8-.6c4-.7 7.9-1.6 11.5-3" class="cls-12"/><path d="M268.2 27.7c3.1 9.3 3.9 24.1-7.3 31.9-1 .7-2 1.3-3.2 1.9 3.2-3.8 4.2-5.3 4.5-11.2 1 .7 1.9.6 2.8-.1 1-.8 3.1-6.3 2.9-7.5-.2-.9-.8-2.2-1.6-2.7-2.2-1.5-3.5.8-4.1 1.2-1.4-13.9-13.6-17.5-19.1-17.8-4.3-.2-11.3 1.4-15.7 6.9 4.1-9.8 17.3-12.6 23.3-12.6 4.7 0 14.1 3 17.5 9.9Z" class="cls-9"/><path d="M234 58c1.2 2.5 2.6 3.8 5.4 4.2 1.8.3 5.3-.1 7-1.3s2.4-1.6 4.4-4.8c-1 1-11.8 3.8-16.8 1.9m-9.1-5.8c-.2-1.5-.2-3-.4-4.9-.3-2.5-.3-4-.4-5.1 0-1.7.1-2.4 0-4.8.6-2.9 1.8-5.2 3.3-7.1 4.3-5.5 11.3-7.1 15.7-6.9 5.5.3 17.7 3.9 19.1 17.8.7-.4 1.9-2.7 4.1-1.2.8.5 1.5 1.8 1.6 2.7.2 1.2-1.9 6.7-2.9 7.5-1 .7-1.9.8-2.8.1-.3 5.9-1.3 7.4-4.5 11.2-1.8 2.2-3.7 3.9-5.6 5.1-5.7 3.9-11.3 3.8-16.5.7-1.3-.8-2.5-1.7-3.7-2.9-1.2-1.1-2.3-2.4-3.4-3.8-2.6-3.4-3.4-5.8-3.7-8.4Zm26.4-8.3c0-1.9-.8-3.4-1.8-3.4s-1.8 1.5-1.8 3.4.8 3.4 1.8 3.4 1.8-1.5 1.8-3.4m-19.8 0c0-1.6-.6-2.9-1.4-2.9s-1.4 1.3-1.4 2.9.6 2.9 1.4 2.9 1.4-1.3 1.4-2.9" class="cls-12"/><path d="M264.9 20.8c1.1 1.5 2.3 3.9 3.3 6.9-3.4-6.9-12.8-9.9-17.5-9.9-6 0-19.2 2.8-23.3 12.6-1.5 1.9-2.7 4.2-3.3 7.1.1 2.4 0 3.1 0 4.8h-.1c-.5-.7-1.7-.5-2.2.2-1.8-15.3.5-22.2 8.8-26.9 3-1.7 6.9-3.2 10.7-3.4 9.4-.4 18.2 1.7 23.6 8.7Z" class="cls-13"/><path d="M261.2 60.1c1.1 4.8 2.2 9.7 3.2 14.5-4-.9-7.7-1.3-12-1.7 0-2-.2-4.4-.2-6.1v-.2c1.7-1.3 3.6-3 5.4-5.1 1.2-.6 2.2-1.2 3.2-1.9l.3.4Z" style="stroke-width:0;fill:#702e80"/><path d="M259.8 198.1c6.6 7.9 7 18.5 1.8 26.7-1.6.3-3.2.5-4.8.7-6.1.6-12.4.6-18 0h-.5v-.9c3.4.3 7-.6 10-2.8 5.7-4.3 6.9-11.9 2.6-17l8.9-6.8Z" class="cls-9"/><path d="M260.7 86.6c1.7 5.9-1.8 11.9-7.6 13.4s-11.9-2.1-13.6-8.1c-1.4-5.2 0-9.7 4.6-11.9 2.1-.2 4.2-.8 5.8-1.8 5.1-.2 9.3 3.2 10.7 8.4Z" class="cls-13"/><path d="m253.1 99.9 2.6 9.3c-11.6 2.9-23.6-3.7-26.7-14.7-2.2-8 .3-15.3 6.6-20.3V76c0 3 4.2 4.3 8.5 3.9-4.5 2.2-6.1 6.8-4.6 11.9 1.7 5.9 7.7 9.5 13.6 8.1" class="cls-9"/><path d="M235.7 74.2c0-3.2-.2-6.4-.1-6.8 5.2 3.1 10.9 3.1 16.5-.8v.2c.1 1.7.2 4.1.3 6.1 0 1.1.1 2.1.2 2.8-.6 1-1.5 1.9-2.6 2.6-1.7 1-3.8 1.6-5.8 1.8-4.3.4-8.5-.9-8.5-3.9v-1.8Z" class="cls-12"/><path d="M250.9 204.8c-4.3-5.1-12.3-5.7-18-1.4s-6.9 11.9-2.6 17c2.1 2.4 5 3.9 8.2 4.2 3.4.3 6.9-.6 9.9-2.8 5.7-4.3 6.9-11.9 2.6-17Z" class="cls-13"/><path d="M249.5 40.5c1 0 1.8 1.5 1.8 3.4s-.8 3.4-1.8 3.4-1.8-1.5-1.8-3.4.8-3.4 1.8-3.4" class="cls-5"/><path d="M250.8 56.1c-2 3.2-2.7 3.6-4.4 4.8s-5.3 1.6-7 1.3c-2.9-.4-4.2-1.7-5.4-4.1 5 1.8 15.9-1 16.8-2" class="cls-15"/><path d="m237.2 173.7 10 2.3c-2.9 11.3-13.6 18.4-25.6 15.7.1-3.5.3-7 .4-10.5.4.1.5 0 .9.1 6.4 1.5 12.8-2 14.2-7.6Zm3.1-30.2c1.3 4.4.6 8.9-1.6 12.7-3.9-.2-7.4-.7-10.4-1.2 3.3-2 5.1-5.8 4-9.4l7.9-2.1Z" class="cls-9"/><path d="M226 223.6c3.3.8 7.6 1.5 12.2 1.9h.5c-.7 10.5-5 24.5-5.4 35.6v1.5l-.2.2c-.2.7-1.3 1.8-2.4 1.9s-2-.8-3.4-.4c0 0 1.8-2.5-2.7-3.7-.2 0-.4-.1-.7-.2.2-13.4-4.4-24.9-1.5-37.8 1 .3 2.2.7 3.5 1Z" class="cls-12"/><path d="M238.4 224.6v.9c-4.8-.4-9-1.1-12.3-1.9l4.2-3.2c2.1 2.4 5 3.9 8.2 4.2Z" style="stroke-width:0;fill:#c468b0"/><path d="M228.2 160.7c6.4 1.5 10.4 7.3 9 12.9-1.4 5.7-7.8 9.1-14.2 7.6-.4 0-.5 0-.9-.1.3-7.9.5-15.3.7-20.5 1.8-.4 3.4-.3 5.4.1" class="cls-13"/><path d="M235.7 67.3c0 .5 0 3.8.1 6.9-2 .7-4.2 1.1-6.4 1.7 1.5-3.2 2.4-8 2.4-11.3l.2-.2c1.2 1.1 2.4 2.1 3.7 2.9" class="cls-11"/><path d="M224.1 260.4c.3 0 .5.2.7.2 4.5 1.2 2.7 3.7 2.7 3.7 1.4-.4 2.3.5 3.4.4s2.2-1.2 2.4-1.9l.2-.2v-1.5c.5 0 1.8.1 1.5 2.3-.3 2.3-.6 7.7-.5 9.1v.4c-1.1.9-2.8 2.9-9.2 2.6-2.6.8-5.6 3.2-9.9 4.5.6-4.5-.9-8.6-4.1-10-2.3-.9-4.1-1-5.5-.7s14-5.9 14-5.9c.9-3.7 2.9-3.3 4.2-2.9Z" class="cls-15"/><path d="M234.5 272.4s1.5.5 0 2.9-8.9 2.4-9.6 2.5-3.8 2.1-6.2 3-7.6 2-12.3 2.1-5.9-2.8-5.9-2.8v-1.3c0-.6.3-1.1.8-1.4 0 0 .5 1.9 3.4 3 4.3.7 7.8.3 10.7-.6 4.3-1.4 7.3-3.7 9.9-4.5 6.4.3 8.1-1.7 9.2-2.6v-.4Z" class="cls-10"/><path d="M232.3 145.6c1 3.6-.7 7.4-4 9.4-2-.4-3.7-.8-5.2-1.3s-1.6-.6-2.2-.9c1.3-7.3 1.4-6.5 3-12.1 4.1 0 7.3 1.2 8.4 4.9" class="cls-13"/><path d="M230 40.9c.8 0 1.4 1.3 1.4 2.9s-.6 2.9-1.4 2.9-1.4-1.3-1.4-2.9.6-2.9 1.4-2.9" class="cls-5"/><path d="M225.3 109.4c3.8 2.6 5.5 8.4 5.3 12.9s-1.9 10.6-5.9 12.9c.3-3.9.5-8.8.6-13.9z" class="cls-11"/><path d="M224.6 135.3c0 1.1-.2 2.2-.3 3.1h-.2c-1.6-.4-2.5-.5-3.5-3-.7-1.9-1.2-3.6-1.9-5.5-1.6-4.4-4.9-6.9-8.6-10.5-4.1-4-8.1-8.8-7-13.7 1.3-.5 2.6-.7 3.9-.8 2.5-.2 5.1.3 7.4 1.4.2.5 1.7 3.8 3.6 7.3.9 1.7 2.1 2.9 3.4 4.4.8.9 3.1 3.2 3.1 3.4h.7c0 5.2-.3 10.1-.6 14Z" class="cls-12"/><path d="M224.5 47.3c.2 1.9.2 3.5.4 4.9-1.5 0-2.7-1.3-3.3-2.7-.6-1.5-.5-3.1-.5-4.7 0-.9 0-1.8.6-2.5s1.7-.9 2.2-.2h.1c0 1.1 0 2.5.4 5.1Z" style="stroke-width:0;fill:#805c3d"/><path d="m222 86-7 4.1c-.5-.8-.6-1.1-1.3-1.7 1.7-2.7 3.3-5.2 4.3-6.8 1.9 1.3 2.8 2.4 4.1 4.3Z" class="cls-9"/><path d="M211.2 269.9c3.2 1.4 4.8 5.5 4.1 10-2.9.9-6.3 1.4-10.7.6-2.9-1.1-3.4-3-3.4-3s-.5-7.2 4.4-8.3c1.4-.3 3.1-.2 5.5.7Z" class="cls-15"/><path d="M215 90.1c2.6 4 1.1 9.3-3.4 11.9-1.7 1-3.1 1.6-4.6 1.7-.9 0-1.9-.1-2.9-.5.2-.3.3-.5.5-.8.4-.6 5.2-7.9 9.1-14 .7.6.8.8 1.3 1.7" class="cls-13"/><path d="M207.1 104.8c-1.3 0-2.7.3-3.9.8.2-.8.5-1.6 1-2.4 1 .4 2 .6 2.9.5z" class="cls-6"/><path d="M224.1 37.4c.1 2.4 0 3.1 0 4.8 0 1.1 0 2.5.4 5.1.2 1.9.2 3.5.4 4.9.3 2.7 1 5 3.7 8.4 1.1 1.4 2.2 2.7 3.4 3.8s2.4 2.1 3.7 2.9c5.2 3.2 10.9 3.3 16.5-.7 1.9-1.3 3.7-3 5.6-5.1 3.2-3.8 4.2-5.3 4.5-11.2v-3m-35.7-9.9c1.7-2 6.3-1.9 7.9-.8m9.9-.1c2.9-2 8.9-.8 9.5.8m-29.8 56.2c.2 1 .3 2.2.4 3.5.3 3.4.5 7.7.6 12.4 0 3.9.1 7.9 0 11.9 0 5.1-.3 10-.6 13.9 0 1.1-.2 2.2-.3 3.1-.1.8-.2 1.6-.4 2.3m.1 0c-1.6 5.6-1.7 4.8-3 12.1.6.3 1.3.6 2.2.9 1.4.5 3.1.9 5.2 1.3 3 .6 6.5 1 10.4 1.2 10.8.6 24.3-.3 34.9-4.6.9-.4 1.9-.8 2.8-1.2.2 0 .3-.1.5-.2" class="cls-3"/><path d="M276.3 150.5v-.1c0-.2-.3-.8-.5-1.5-.6-1.6-1.5-4.2-2.3-6.4-1-2.7-1.8-5.1-1.8-5.1m-40.2-93.5c0 1.6-.6 2.9-1.4 2.9s-1.4-1.3-1.4-2.9.6-2.9 1.4-2.9 1.4 1.3 1.4 2.9Zm19.7 0c0 1.9-.8 3.4-1.8 3.4s-1.8-1.5-1.8-3.4.8-3.4 1.8-3.4 1.8 1.5 1.8 3.4Zm-15.1 8.5c0 2.4 4.7 1.4 6.4 1.3m-8.9 4.1c.1 0 .3.1.4.2 5 1.9 15.9-.9 16.8-1.9-2 3.2-2.7 3.6-4.4 4.8s-5.3 1.6-7 1.3c-2.9-.4-4.2-1.7-5.4-4.1" class="cls-3"/><path d="M268.2 27.7c-1-3-2.2-5.4-3.3-6.9-5.4-7-14.2-9.1-23.6-8.7-3.8.2-7.7 1.7-10.7 3.4-8.3 4.7-10.6 11.7-8.8 26.9" class="cls-1"/><path d="M257.7 61.5c1.2-.6 2.2-1.2 3.2-1.9 11.2-7.9 10.4-22.6 7.3-31.9m-40.8 2.6c4.3-5.5 11.3-7.1 15.7-6.9 5.5.3 17.7 3.9 19.1 17.8v.3m-38.1-4.1c.6-2.9 1.8-5.2 3.3-7.1" class="cls-3"/><path d="M218.7 80.5c-.2.3-.4.7-.7 1.2-1 1.5-2.5 4-4.3 6.8-3.9 6.1-8.6 13.4-9.1 14-.2.3-.4.5-.5.8-.5.8-.8 1.6-1 2.4-1.1 4.9 2.9 9.8 7 13.7 3.7 3.6 7 6.1 8.6 10.5.7 1.9 1.1 3.6 1.9 5.5 1 2.5 1.8 2.7 3.5 3" class="cls-2"/><path d="M224.5 97c-1.4 2.3-6.2 16.8-6.4 16.5" class="cls-2"/><path d="M214.5 106.2s0 0 0 0c.2.5 1.7 3.8 3.6 7.3.9 1.7 2.1 2.9 3.4 4.4.8.9 3.1 3.2 3.1 3.4s0 0 0 0m42.8-27.8c.4.4 1.7 2.4 3.3 4.9 3.5 5.7 8.7 14.2 9.1 14.7" class="cls-2"/><path d="M274.3 77.5c.5.6 1.5 1.9 2.9 3.6 4.8 5.9 13.5 16.9 16.7 21.4l1.2 1.8c.3.7.5 1.4.5 2.1.2 4.7-4 11-7.4 13.9-3 2.5-9.2 7.1-12 9.9" class="cls-2"/><path d="M270.7 123.3c4.6-.9 7.1-6.6 9-10.1.3-.5.6-1 .9-1.4 2.7-3.9 3.8-4.9 7.9-7.3 0 0 .2 0 .2-.1M263 125.5c-.4.4-1.4 1-2.2 1.6-2 1.5-3.8 3.3 0 4.6-1 1.6.2 2.9 1.4 3.2-1.3 1.2.7 2.5 1.7 2.6-.7 3.6 6.4.8 7.9-.3 2.1-1.4 5.4-4.6 4.5-7.2" class="cls-2"/><path d="M270.7 123.3c-2.7.4-8-.2-9.5 2-.3.5-.5 1.1-.4 1.9q0 0 0 0m-37.7 26.5c0 1-.2 3.5-.3 7-.2 5.2-.5 12.6-.7 20.5-.1 3.5-.3 7-.4 10.5-.5 13.7-1.2 26.6-1.7 29.9.7.4 1.5.7 2.6 1.1 1 .3 2.2.7 3.5 1 3.3.8 7.6 1.5 12.2 1.9h.5c5.6.5 11.9.5 18 0l4.8-.6c4-.7 7.9-1.6 11.5-3 1.1-.4 2.2-.9 3.2-1.4" class="cls-2"/><path d="M274.1 156.3c-.2-2.6-.4-4.3-.5-4.8" class="cls-3"/><path d="M276.3 220.3s-.4-15.2-.9-31.3c-.2-7.5-.5-15.3-.8-21.8-.2-4.4-.4-8.1-.6-10.9" class="cls-2"/><path d="M270.6 98.5c-.6 2.8-.2 21.5 0 24.8" class="cls-1"/><path d="M218.7 80.5c3.2-2.6 6.9-3.7 10.6-4.6 2.2-.5 4.3-1 6.4-1.7" class="cls-2"/><path d="M250 78.2c-1.7 1-3.8 1.6-5.8 1.8-4.3.4-8.5-.9-8.5-3.9m17-.5c-.6 1-1.5 1.9-2.6 2.6" class="cls-3"/><path d="M274.3 77.5c-3.8-1.3-6.9-2.2-9.9-2.9-4-.9-7.7-1.3-12-1.7h-.1" class="cls-2"/><path d="M252.7 75.6c0-.7-.1-1.6-.2-2.8 0-2-.2-4.4-.2-6.1m-16.6 7.5V76m-.1-8.6c0 .4 0 3.6.1 6.8m52.9 30.4c2.5-.5 5.1.2 7 1.7 0 0 .2.1.3.2m-93-.8h.2c1.3-.5 2.6-.7 3.9-.8h0c2.5-.2 5.1.3 7.4 1.4" class="cls-2"/><path d="M262.2 41.2c.7-.4 1.9-2.7 4.1-1.2.8.5 1.5 1.8 1.6 2.7.2 1.2-1.9 6.7-2.9 7.5-1 .7-1.9.8-2.8.1M224 42.2c-.5-.7-1.7-.5-2.2.2s-.6 1.6-.6 2.5c0 1.6 0 3.2.5 4.7.5 1.4 1.8 2.6 3.3 2.7h.3" class="cls-3"/><path d="M261.2 60.1c1.1 4.8 2.2 9.7 3.2 14.5v.2m-32.6-10.2c0 3.3-.9 8.2-2.4 11.3v.1" class="cls-1"/><path d="M275.9 148.8h-.1c-4.3 1.7-8.4 1.8-13.3.5-11.3-3-18.3-10.8-15.1-21.5" class="cls-3"/><path d="M261.2 125.2c-1.8.7-3.7 3.2-4.3 5.2-1.6 5.4 2 11 8 12.7 3 .8 5.6.7 8.1-.6m-16.1-12.1-9.5-2.6m8.3-18.6c-11.6 2.9-23.6-3.7-26.7-14.7-2.2-8 .3-15.3 6.6-20.3" class="cls-3"/><path d="M244.2 80c-4.5 2.2-6.1 6.7-4.6 11.9 1.7 5.9 7.7 9.5 13.6 8.1 5.8-1.5 9.3-7.5 7.6-13.4-1.4-5.2-5.6-8.6-10.7-8.4m5.6 31-2.6-9.3m-12.8 43.6c1.3 4.4.6 8.9-1.6 12.7v.1m-11-1 .6-.3c3.3-2 5.1-5.8 4-9.4-1.1-3.7-4.3-4.9-8.4-4.9m16.4 2.8-8 2.1M218 81.7c1.9 1.3 2.8 2.4 4.1 4.3m-18 17.2c1 .4 2 .6 2.9.5 1.5 0 2.9-.7 4.6-1.7 4.5-2.6 6-8 3.4-11.9-.5-.8-.6-1.1-1.3-1.7m1.3 1.7 7-4.1m72 16.4c-7.7.3-13.9-4.2-16.4-11.5-1.3-3.7-1.5-6.4-.2-9.8m-19 78.6c5-3.1 10.2-4.1 15.7-3.3m.6 10.9c-3.6-1.2-7-1.1-10.4.9-5.4 3.3-6.7 10.5-2.9 15.9 3.2 4.7 9.1 6.6 14.1 4.9m-17.1-29.3 5.9 8.5m-17.1 7.8c-2.9 11.3-13.6 18.4-25.6 15.7m.5-10.5c.4.1.5 0 .9.1 6.4 1.5 12.8-2 14.2-7.6 1.4-5.7-2.6-11.5-9-12.9-2-.5-3.6-.5-5.4-.1m24.4 15.3-10-2.3m22.6 24.4c6.6 7.9 7 18.5 1.8 26.7m-10.7-20c-4.3-5.1-12.3-5.7-18-1.4s-6.9 11.9-2.6 17c2.1 2.4 5 3.9 8.2 4.2 3.4.3 6.9-.6 9.9-2.8 5.7-4.3 6.9-11.9 2.6-17Zm8.9-6.7-8.9 6.7m-20.7 15.6-4.2 3.2-.2.2m-.5-114.4c3.8 2.6 5.5 8.4 5.3 12.9s-1.9 10.6-5.9 12.9" class="cls-3"/><path d="M227.4 30.3s0 0 0 0c4.1-9.8 17.3-12.6 23.3-12.6 4.7 0 14.1 3 17.5 9.9q0 0 0 0" class="cls-1"/><path d="M261.4 267.3c0 .4.2.8.2 1.3 1.4 3.4 3.1 6.8 5.3 9.4 2.8 3.1 6.5 4.9 11.8 3.5 4.4-1.1 5.8-3.1 5.7-4.4 0-.2 0-.4-.2-.7-.2-.7-.7-1.6-1.4-2.7-1.3-2-3.3-4.6-6.1-7-.4-.6-.9-1.2-1.3-1.7s-.7-1.1-.9-1.6m-12.3-2.8s-2.1-.5-.8 6.7" class="cls-2"/><path d="M267 278s.7-6.1 7-7.3c6.1-1.2 8.8 2.9 8.9 3.1q0 0 0 0m-17.3-9c-.4.8-2.8-.4-3.3-3.3v-.9m3.3 4.2s-1.2-5.2 5.7-5.2c0 0 2.4.2 3.4 3.9" class="cls-2"/><path d="m284.3 276.4.4.4c.3.3.4 2.5.4 2.9-.3 2.4-2 3.2-6.3 4.5-5.5 1.6-9.9-1.5-12.3-4.3-2.8-3.3-3.9-6.5-3.9-6.9l-1.3-3v-.3c-.1-.4-.3-1.7.3-2.4h0s0 0 0 0m-28.4-6.2h.2c.5 0 1.8.1 1.5 2.3-.3 2.3-.6 7.7-.5 9.1v.4c-1.1.9-2.8 2.9-9.2 2.6-2.6.8-5.6 3.2-9.9 4.5-2.9.9-6.3 1.4-10.7.6-2.9-1.1-3.4-3-3.4-3s-.5-7.2 4.4-8.3c1.4-.3 3.1-.2 5.5.7 3.2 1.4 4.8 5.5 4.1 10" class="cls-2"/><path d="M233.2 262.8c-.2.7-1.3 1.8-2.4 1.9s-2-.8-3.4-.4" class="cls-2"/><path d="M227.5 264.3s1.8-2.5-2.7-3.7c-.2 0-.4-.1-.7-.2-1.4-.4-3.3-.7-4.2 2.9m-.1 0-14 5.9m-4.5 8.3c-.5.3-.8.8-.8 1.4v1.3s1.3 3 5.9 2.8 9.9-1.2 12.3-2.1 5.5-2.9 6.2-3 8.1-.1 9.6-2.5 0-2.9 0-2.9m22.3-47.1c.8 10.8 5.3 24.9 5.5 36.1v.6m10.8-40.3c2.9 13-2 24.3-1.8 37.8m-32.5-34.1c-.7 10.5-5 24.5-5.4 35.6v1.5" class="cls-2"/><path d="M222.5 222.6c-2.8 12.9 1.7 24.4 1.5 37.8v.2" class="cls-2"/></svg>')}`;
export default image;
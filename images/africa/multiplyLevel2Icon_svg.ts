/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="Layer_5" width="300" height="300" viewBox="0 0 300 300"><defs><style>.cls-1{stroke-linecap:round;stroke-linejoin:round}.cls-1,.cls-3{fill:none;stroke:#000}.cls-11,.cls-4,.cls-5,.cls-6,.cls-7,.cls-8,.cls-9{stroke-width:0}.cls-13{fill:#3246ff}.cls-13,.cls-14{stroke:#fff;stroke-width:4.2px}.cls-13,.cls-14,.cls-3{stroke-miterlimit:10}.cls-14{fill:#4d0099}.cls-5{fill:#f8cf87}.cls-6{fill:#2e1f20}.cls-7{fill:#af9c7e}.cls-8{fill:#c05180}.cls-9{fill:#8b6f54}.cls-11{fill:#a08066}</style></defs><path d="M1.8 1h298.4v289H1.8z" style="fill:none;stroke-width:0"/><path d="M41.8 183.7h70.4v76.5H41.8zm70.5 0h76.5v76.5h-76.5z" class="cls-13"/><path d="M112.3 114.3h76.5v69.4h-76.5z" class="cls-14"/><path d="M188.7 183.7h69.4v76.5h-69.4zm0-69.4h69.4v69.4h-69.4zm0-74.5h69.4v74.5h-69.4z" class="cls-13"/><path d="M112.3 39.8h76.5v74.5h-76.5zm-70.5 74.5h70.4v69.4H41.8zm0-74.5h70.4v74.5H41.8z" class="cls-14"/><path d="M280.7 184.9c.9 3.6 1.9 7.2 2.9 10.8.3 1.1.7 2.4 1.8 2.7-.8 1.4 9.5 71.9 3.3 76-1.2.8-2.8 1.5-4.9 2.1-4.1 1.3-10 2.4-17.4 3.1-4.6.4-9.8.8-15.5.9-3.5.1-6.8 0-9.8-.4-6.7-.8-12.4-2.6-17.2-4.6-1.5-.6-2.9-1.2-4.2-1.9-1.9-8.8 1.1-43.8 4.2-74.9.6-5.8 1.2-11.4 1.8-16.7 1.9-17.7 3.6-31.7 3.9-34.7 1 3.1 2.7 6.8 3.3 8.7.8 2.9 2.6 5.7 5.3 6.9.7-15.1 2.2-36.3 5.2-51.1.9 0 1.7.3 2.2.7 18.7 13.8 26.8 5.7 33.4-10.4 6.4 4.4 13.3 19.9 13.9 37.5.2 6.3.5 10.8.9 14.6-.9.4-.8.6-1.3 1.7-.7 1.5-.5 2.3-.6 4-1.4-1.9-4.7-1.3-6 1.1s.2 5.7 2.4 6.2c-1.4 1-2.8 3-2.6 4.7s1.6 3.1 3.1 2.9 3.3-3.2 4.3-4.2c.5 1.5.7 3.4 2.2 4.1v5.6c-1.2.6-2.3 1.2-3.5 1.8-4.1 1.9-8.1 3.1-11.2 2.9Zm-24.1-52.5c3.9-.4 6.5-2.4 3.9-6.1-1.5-2-4.2-1.3-5.6-.3.3-1.6.4-1.4.5-2.9 0-1.6-1-3.2-2.5-3.5s-3.1.8-3.8 2.2-.5 2.2-.5 3.8c-1.7-1.9-5.3-1.5-6.7.7s.5 5.5 3 6.2c-1.5.9-3 2.8-2.7 4.5s2 3.1 3.7 3 3.5-2.9 4.6-3.8c.7 1.6 1.1 3.4 2.9 4.2 1.9.7 4.4.2 5.2-1.6 1.3-2.9-2-6.2-2-6.2Z" class="cls-8"/><path d="M293.8 154.3c.6 7 1.3 11.5 1.5 20.5-1.5-.7-1.7-2.6-2.2-4.1-1 1-2.7 4-4.3 4.2s-2.9-1.1-3.1-2.9c-.2-1.7 1.2-3.8 2.6-4.7-2.2-.5-3.7-3.8-2.4-6.2s4.5-2.9 6-1.1c.1-1.6 0-2.5.6-4 .5-1.1.3-1.3 1.3-1.7" class="cls-5"/><path d="M292 182.3c.5 5.1-.5 10.4-3.5 14.5-.7 1-1.9 2.1-3.1 1.7-1.1-.3-1.5-1.6-1.8-2.7-.9-3.6-1.9-7.2-2.9-10.8 3.1.2 7.1-1 11.2-2.9v.2Z" class="cls-9"/><path d="M283.7 276.6c1.4 1.7-1.2 5.1-3.1 6.3s-2.4 1.5-8.3 1.8c-2.5 0-5.5-3.2-6-5 7.4-.7 13.2-1.8 17.4-3.1" class="cls-7"/><path d="M229 92.8c-2.2-8.2-2.7-18.1-3.7-25.4-1.3-9.8 4.1-22.2 11.1-26 7.8-4.3 14-4.6 22.7-2 5.9 1.8 11.2 4.5 14.8 9.3 3.5 4.8 2.6 8.9 3.4 14.7.7 4.8.5 10-.4 15.1.9 8.7-.5 15.4 2.1 23.8-6.6 16.1-14.8 24.2-33.4 10.4-.5-.4-1.3-.6-2.2-.7-4.6-.5-13 2.5-15.3 0-.7-.8-1.3-1.4-1.7-1.9-1-1.3-1.2-2.4-1-4.7.4-3.3 1.8-9.2 3.2-12.3h.4Zm42-23.7V68c-2.7-19.4-16.4-23.8-25.3-22.8-6.1.7-10.3 3.6-13.1 7.4-.4.4-.8 1-1.3 2-.3.6-.6 1.2-.9 1.9-1.1 2.7-1.7 5.5-1.7 8.2 0 2.5.1 5.1.7 7.8 0 0-1.4 10 5.5 19.8 5.2 7.4 11.5 15.9 27.8.8 4.8-4.2 8.4-17.2 8.5-21.7 0-.8 0-1.5-.1-2.3Z" class="cls-5"/><path d="M228.7 64.7c0-2.7.6-5.6 1.7-8.2.4-.7.6-1.3.9-1.9.4-.7.8-1.4 1.3-2 1-.9 2.7-.4 7.9.3 8.6 1.2 13.7-4.1 21.1-.6 4.3 2 8.3 8.5 9.3 15.7v1.1c0 .8.1 1.5.1 2.3-.1 4.5-3.7 17.5-8.5 21.7-16.3 15.1-22.6 6.6-27.8-.8-6.9-9.8-5.5-19.8-5.5-19.8-.6-2.7-.8-5.3-.7-7.8Zm33.4 1.2c.6 0 1-.2.7-.7-.4-.7-1.8-1.4-4-1.9-1.8-.4-7.5-.5-6.7 1.5.2.4.8.8 1.5.9s2.5-.2 3.2-.2c1.9 0 3.2.2 5.3.4m-4 7.6c0-2-.9-3.6-2-3.6s-2 1.6-2 3.6.9 3.6 2 3.6 2-1.6 2-3.6m-6 17c1.9-1.2 1.8-.4 4.1-3.7-1.1 1.1-11.9 3.4-17.3 1.2 1.4 2.4 2.9 3.7 6.1 4.1 2 .3 5.2-.5 7.1-1.7Zm-13.8-24.8c.9 0 1.6-.5 1.6-1s-.7-1-1.5-1.2c-2.1-.6-4.6 0-6.1.9-.2.1-.4.3-.5.4s0 .4.1.5c.2.1.6.2.9.1.3 0 4.8.3 5.5.3m-.1 7.8c0-1.8-.7-3.2-1.7-3.2s-1.7 1.4-1.7 3.2.7 3.2 1.7 3.2 1.7-1.4 1.7-3.2" style="stroke-width:0;fill:#a17859"/><path d="M270.9 68.4v-.5z" class="cls-11"/><path d="M270.9 67.9c-1.1-7.3-5-13.7-9.3-15.7-7.5-3.4-12.5 1.8-21.1.6-5.2-.7-6.8-1.2-7.9-.3 2.7-3.8 7-6.8 13.1-7.4 8.8-1 22.6 3.4 25.3 22.8Z" class="cls-8"/><path d="M262.8 65.2c.3.4 0 .7-.7.7-2.1-.2-3.4-.3-5.3-.4-.7 0-2.5.3-3.2.2s-1.3-.5-1.5-.9c-.9-2 4.9-1.8 6.7-1.5 2.2.4 3.6 1.2 4 1.9" class="cls-6"/><path d="M260.4 126.4c2.7 3.7 0 5.7-3.9 6.1 0 0 3.3 3.4 2 6.2-.8 1.8-3.4 2.4-5.2 1.6-1.9-.7-2.2-2.6-2.9-4.2-1.1.9-2.9 3.7-4.6 3.8s-3.4-1.3-3.7-3 1.2-3.6 2.7-4.5c-2.5-.6-4.4-3.9-3-6.2s4.9-2.6 6.7-.7c0-1.6-.2-2.4.5-3.8s2.3-2.5 3.8-2.2 2.6 2 2.5 3.5c0 1.5-.2 1.3-.5 2.9 1.4-1.1 4.1-1.7 5.6.3Z" class="cls-5"/><path d="M256.1 69.9c1.1 0 2 1.6 2 3.6s-.9 3.6-2 3.6-2-1.6-2-3.6.9-3.6 2-3.6" class="cls-4"/><path d="M256.1 86.8c-2.3 3.2-2.2 2.5-4.1 3.7s-5.1 1.9-7.1 1.7c-3.2-.4-4.7-1.7-6.1-4.1 5.4 2.2 16.1-.1 17.3-1.2Z" style="stroke-width:0;fill:#fff"/><path d="M228.1 111.8c2.3 2.5 10.6-.4 15.3 0-3.1 14.8-4.5 36-5.2 51.1-2.7-1.3-4.5-4-5.3-6.9-.6-2-2.2-5.6-3.3-8.7-.5-1.5-.8-2.8-.9-3.8-.2-12.3-.1-21.6-2.3-33.7.4.6 1 1.2 1.7 1.9Z" class="cls-5"/><path d="M241 280.4c.6 1.5-13.4 4.6-15.4 4s-4-1.8-5.1-3.6 1.9-3.6 3.3-5.2c4.8 2 10.5 3.8 17.2 4.6z" class="cls-7"/><path d="M239.9 64.7c0 .5-.7 1-1.6 1-.7 0-5.2-.3-5.5-.3s-.7 0-.9-.1-.2-.3-.1-.5.3-.3.5-.4c1.5-.9 4-1.5 6.1-.9.8.2 1.5.7 1.5 1.2" class="cls-6"/><ellipse cx="236.5" cy="73.5" class="cls-4" rx="1.7" ry="3.2"/><path d="M232.5 52.6c-.5.6-.9 1.3-1.3 2 .5-1 .8-1.6 1.3-2" class="cls-11"/><path d="M231.3 54.6c-.2.5-.5 1.1-.9 1.9.3-.6.6-1.3.9-1.9" class="cls-6"/><path d="M228.7 143.6c0 1 .4 2.3.9 3.8-.3 3-2 17-3.9 34.7-1.9 0-5 0-7.7-.9-3.3-1.1-6.2-3.4-5.8-8.4h.2c.3.8.3 1.7 1.1 2.1 1.6.7 3.9 0 4.7-2 1.3-3-1.4-6.3-1.4-6.3 3.5-.6 5.9-2.8 3.7-6.5-1.2-2-4.2-1.3-5.5-.1h-.2c.9-3.8 1.7-7.5 2.2-10.3 1.4-7.8 4.6-37.5 8.6-44.5-.3 2.3 0 3.4 1 4.7 2.1 12.1 2.1 21.4 2.3 33.7Z" class="cls-8"/><path d="M225.6 182.1c-.6 5.3-1.2 11-1.8 16.8-2.5-1.5-5.3-5.1-5.9-8s-.3-6.8-.1-9.7c2.8.9 5.9.9 7.7.9Z" class="cls-9"/><path d="M220.3 160c2.2 3.7-.3 5.9-3.7 6.5 0 0 2.7 3.3 1.4 6.3-.8 2-3.1 2.6-4.7 2-.8-.3-.7-1.3-1.1-2.1h-.2c0-.5 0-1 .2-1.5.5-3.1 1.5-7.3 2.4-11.4h.2c1.3-1.1 4.3-1.9 5.5.2" class="cls-5"/><path d="M229.5 147.4c-.3 3-2 17-3.9 34.7-.6 5.3-1.2 11-1.8 16.7-3.2 31-6.1 66.1-4.2 74.9 1.3.6 2.7 1.3 4.2 1.9 4.8 2 10.5 3.8 17.2 4.6 3.1.4 6.3.5 9.8.4 5.7-.2 10.9-.5 15.5-.9 7.4-.7 13.2-1.8 17.4-3.1 2-.7 3.7-1.4 4.9-2.1 6.3-4.1-4-74.5-3.3-76" class="cls-3"/><path d="M228.7 61.4c0 1.1 0 2.2-.1 3.3 0 2.5.1 5.1.7 7.8 0 0-1.4 10 5.5 19.8 5.2 7.4 11.5 15.9 27.8.8" class="cls-1"/><ellipse cx="236.5" cy="73.5" class="cls-1" rx="1.7" ry="3.2"/><path d="M258.1 73.5c0 2-.9 3.6-2 3.6s-2-1.6-2-3.6.9-3.6 2-3.6 2 1.6 2 3.6m-17.6 6.2c-.7 4.5 2.3 4.2 5.9 4.2m-7.5 4.2c5.4 2.2 16.1-.1 17.3-1.2-2.3 3.2-2.2 2.5-4.1 3.7s-5.1 1.9-7.1 1.7c-3.2-.4-4.7-1.7-6.1-4.1ZM271 69c0 .8.1 1.5.1 2.3-.1 4.5-3.7 17.5-8.5 21.7m-30.1-40.5c1-.9 2.7-.4 7.9.3 8.6 1.2 13.7-4.1 21.1-.6 4.3 2 8.3 8.5 9.3 15.7v.5m-39.5-13.8c.5-1 .8-1.6 1.3-2m-2.2 3.9c.4-.7.6-1.3.9-1.9" class="cls-1"/><path d="M271 69.3v-1.4c-2.7-19.4-16.4-23.8-25.3-22.8-6.1.7-10.3 3.6-13.1 7.4h0c-.5.7-.9 1.3-1.3 2q0 0 0 0c-.3.6-.6 1.2-.9 1.9-1.1 2.7-1.7 5.5-1.7 8.2v1.1" class="cls-1"/><path d="M252.1 64.8c.2.4.8.8 1.5.9s2.5-.2 3.2-.2c1.9 0 3.2.2 5.3.4.6 0 1-.2.7-.7-.4-.7-1.8-1.4-4-1.9-1.8-.4-7.5-.5-6.7 1.5m-13.7-1.3c.8.2 1.5.7 1.5 1.2s-.7 1-1.6 1c-.7 0-5.2-.3-5.5-.3s-.7 0-.9-.1-.2-.3-.1-.5.3-.3.5-.4c1.5-.9 4-1.5 6.1-.9" class="cls-1"/><path d="M273 117.8c3.3 9.8 1.9 59 2.2 61.8.3 3.6 2.5 5.2 5.6 5.4s7.1-1 11.2-2.9c1.2-.5 2.3-1.1 3.5-1.8v-5.6c-.2-9-.9-13.5-1.5-20.5-.3-3.8-.7-8.3-.9-14.6-.6-17.6-7.6-33.1-13.9-37.5m-53.7 3.1c-4 7-7.2 36.7-8.6 44.5-.5 2.8-1.4 6.5-2.2 10.2-.9 4.1-1.9 8.3-2.4 11.4 0 .5-.2 1-.2 1.5-.3 5 2.5 7.3 5.8 8.4 2.8.9 5.9.9 7.7.9m51.3-103.7c-1.4 7.7-4.6 15.3-9.5 21" class="cls-3"/><path d="M231.9 100.5c-1.2-2.3-2.1-4.9-2.9-7.7-2.2-8.2-2.7-18.1-3.7-25.4-1.3-9.8 4.1-22.2 11.1-26 7.8-4.3 14-4.6 22.7-2 5.9 1.8 11.2 4.5 14.8 9.3 3.5 4.8 2.6 8.9 3.4 14.7.7 4.8.5 10-.4 15.1" class="cls-1"/><path d="M276.9 78.4c.9 8.7-.5 15.4 2.1 23.8-6.6 16.1-14.8 24.2-33.4 10.4-.5-.4-1.3-.6-2.2-.7-4.6-.5-13 2.5-15.3 0-.7-.8-1.3-1.4-1.7-1.9-1-1.3-1.2-2.4-1-4.7.4-3.3 1.8-9.2 3.2-12.3" class="cls-3"/><path d="M243.4 111.9c-3.1 14.8-4.5 36-5.2 51.1-2.7-1.3-4.5-4-5.3-6.9-.6-2-2.2-5.6-3.3-8.7-.5-1.5-.8-2.8-.9-3.8-.2-12.3-.1-21.6-2.3-33.7" class="cls-3"/><path d="M258.5 138.7c-.8 1.8-3.4 2.4-5.2 1.6-1.9-.7-2.2-2.6-2.9-4.2-1.1.9-2.9 3.7-4.6 3.8s-3.4-1.3-3.7-3 1.2-3.6 2.7-4.5c-2.5-.6-4.4-3.9-3-6.2s4.9-2.6 6.7-.7c0-1.6-.2-2.4.5-3.8s2.3-2.5 3.8-2.2 2.6 2 2.5 3.5c0 1.5-.2 1.3-.5 2.9 1.4-1.1 4.1-1.7 5.6.3 2.7 3.7 0 5.7-3.9 6.1 0 0 3.3 3.4 2 6.2Zm37 36.1h-.1c-1.5-.7-1.7-2.6-2.2-4.1-1 1-2.7 4-4.3 4.2s-2.9-1.1-3.1-2.9c-.2-1.7 1.2-3.8 2.6-4.7-2.2-.5-3.7-3.8-2.4-6.2s4.5-2.9 6-1.1c.1-1.6 0-2.5.6-4 .5-1.1.3-1.3 1.3-1.7m-79.1 5.6c1.3-1.2 4.3-1.9 5.5.1 2.2 3.7-.3 5.9-3.7 6.5 0 0 2.7 3.3 1.4 6.3-.8 2-3.1 2.6-4.7 2-.8-.3-.7-1.3-1.1-2.1" class="cls-1"/><path d="M283.7 276.6c1.4 1.7-1.2 5.1-3.1 6.3s-2.4 1.5-8.3 1.8c-2.5 0-5.5-3.2-6-5 0-.3-.1-.6 0-.8m-25.3 1.5c.6 1.5-13.4 4.6-15.4 4s-4-1.8-5.1-3.6 1.9-3.6 3.3-5.2m68.2-93.3c.5 5.1-.5 10.4-3.5 14.5-.7 1-1.9 2.1-3.1 1.7-1.1-.3-1.5-1.6-1.8-2.7-.9-3.6-1.9-7.2-2.9-10.8m-62.8-3.8c-.2 2.9-.5 6.8.1 9.7s3.4 6.5 5.9 8" class="cls-3"/></svg>')}`;
export default image;
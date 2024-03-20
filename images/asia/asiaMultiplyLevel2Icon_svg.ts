/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="Layer_5" width="300" height="300" viewBox="0 0 300 300"><defs><style>.cls-1{stroke-linecap:round;stroke-linejoin:round}.cls-1,.cls-3{fill:none;stroke:#000}.cls-4,.cls-5,.cls-6,.cls-7{stroke-width:0}.cls-10{fill:#3246ff}.cls-10,.cls-11{stroke:#fff;stroke-width:4.2px}.cls-10,.cls-11,.cls-3{stroke-miterlimit:10}.cls-11{fill:#4d0099}.cls-5{fill:#f9daf0}.cls-6{fill:#878586}.cls-7{fill:#e0bfa9}</style></defs><path d="M1.8 1h298.4v289H1.8z" style="fill:none;stroke-width:0"/><path d="M41.8 183.7h70.4v76.5H41.8zm70.5 0h76.5v76.5h-76.5z" class="cls-10"/><path d="M112.3 114.3h76.5v69.4h-76.5z" class="cls-11"/><path d="M188.7 183.7h69.4v76.5h-69.4zm0-69.4h69.4v69.4h-69.4zm0-74.5h69.4v74.5h-69.4z" class="cls-10"/><path d="M112.3 39.8h76.5v74.5h-76.5zm-70.5 74.5h70.4v69.4H41.8zm0-74.5h70.4v74.5H41.8z" class="cls-11"/><path d="M277.5 122.8c-.5 6.3-1 10.3-2 15.5-.3 1.6-.6 3.2-1.3 4.6-1 1.9-1.2 2-2.8 3.4-4.3 3.6-8.1 10.5-12.1 14.6l-.4.4c-2.6-.7-4.2-3.8-6.8-4-1.2 0-2.4.5-3.3 1.5-3.9-6.1-7.3-12.7-11.6-18.5.7-4.1-.3-12-.3-13.4v-5.6h-.7c-3.1-.7-5.5-1.2-7.2-2.1-1.1-.6-2-1.3-2.8-2.2 1-2.7 4-17.5 6.9-20.8 2.2-2.6 7.5-4.7 16.4-7.4.6 4 1.8 8 7.9 8.4 5 .3 8.6-1.9 11.2-7.9 1.4-.8 12.5 2.4 13.6 3.4 5 4.1 9.2 24.1 9.2 24.1 0 .9-.8 1.7-2.2 2.4-3.2 1.7-9 2.9-11.8 3.9Z" class="cls-5"/><path d="M290.2 274.1c.7 1.1 1.1 2 1.4 2.6 0 .3.1.5.2.6.1 1.3-1.2 3.1-5.5 4.2-5.1 1.3-8.7-.4-11.4-3.4 0 0 .7-5.9 6.8-7 5.8-1.1 8.4 2.5 8.6 2.9Z" class="cls-6"/><path d="M289.4 118.9c-1.4 10.4-2.4 18-5.8 27.6-.8 2.2-2.5 4.4-4.7 6.6-3.4 3.5-8.1 6.9-12.5 10-2.1 1.5-4.1 2.8-5.9 4.1.8-2.2.3-4.7-1-6.5 4.1-4.2 7.8-11 12.1-14.6 1.6-1.3 1.8-1.5 2.8-3.4.7-1.4 1-3 1.3-4.6 1-5.2 1.5-9.2 2-15.5 2.8-1 8.7-2.2 11.8-3.9Z" class="cls-7"/><path d="M275.7 51.3c-4.1-2.1-7.8-5-10.8-8.5.6 1.7 1.2 3.5 1.8 5.2-5.1-.9-10-3.2-14-6.6.3 1.6.6 3.3.9 4.9-5.8-.8-11.1-4.2-14.3-9.2-2.5 5.8-2.3 23-2.2 25.7 0 1.2.2 2.5.5 3.8 1 4.8 2.3 7.6 5.8 10.8 2.5 2.3 4.7 4.4 7 5.8 0 .2-.1 1.2-.3 2.3-7.7.2-15.4-1.5-22.5-4.7 10.8-2.6-.6-20.8 5.4-38.7 1.8-5.5 3.3-11.4 7.7-15s14.2-4.1 19.8-4c8.1.2 19.1 7 21.2 15 6.8 26.6-4.5 39.1 9.2 41.8-6.4 4.4-15.6 5.8-23.2 5-.3-1.7-.4-3.5-.4-4.7 1.4-1 2.8-2.2 4.4-3.6 1.8-2 5.2-4.8 6.4-9.8 0-4.5-.5-10.4-2.3-15.5Z" style="stroke-width:0;fill:#332628"/><path d="M270.1 262.5c.2 3.5 3.8 3.4 4.2 2.6 0 0-3.5-5.7 3.2-5.7 0 0 2.6-.2 4 1.3.7.7 1.1 1.9.7 3.6.7.4 1.3 1.7 1.9 2.9 0 .2.2.3.3.4 2.5 2.2 4.5 4.6 5.7 6.5-.3-.4-2.8-4-8.6-2.9-6.1 1.1-6.8 7-6.8 7-2.2-2.4-3.7-5.6-5.1-8.9v-.3c0-.4-.1-.7-.2-1.1-1.3-7 .8-6.5.8-6.5v.9Z" class="cls-6"/><path d="M283.1 222.3c.6 5.6-1.2 15.4-1.8 25.8h-.2c-3.2 2.2-7.3 3-11.1 2.2h-.3c-.4-2.9-1-5.4-1.4-7.4-1.7-7.4-2.4-15.2-3-22.7-.3-3.3 0-6-.4-9.2-.1-1.1-.3-2-.5-2.9 3.4.6 6.3.9 10.4-.1 1.2-.3 3.7-1.2 6-2.3 0 2.9-.2 5.6.1 7.5.6 3.2 1.8 5.5 2.1 9.1Z" class="cls-7"/><path d="M281.1 248.1h.2c-.2 4.2-.3 8.4.2 12.6-1.4-1.5-4-1.3-4-1.3-6.7 0-3.2 5.7-3.2 5.7-.4.8-4 .8-4.2-2.6.3-4.5 0-8.6-.5-12.2h.3c3.8.7 7.9 0 11.1-2.2Zm-2.5-86.9c-4.4 1.5-4.7 2-12.2 2 4.4-3.1 9.1-6.5 12.5-10 0 7.2-.1 5.7 0 7.1 0 .3 0 .5.1.8h-.4Z" class="cls-5"/><path d="M286.2 281.6c4.3-1.1 5.6-2.9 5.5-4.2 0-.2 0-.4-.2-.6l.4.4c.3.3.4 2.4.4 2.8-.3 2.3-1.9 3.1-6.1 4.3-5.3 1.6-9.6-1.4-11.9-4.2-2.5-3-3.6-5.9-3.8-6.5v-.2l-1.2-2.8v-.3c-.1-.4-.3-1.6.3-2.3 0 .3.1.7.2 1.1v.3c1.4 3.2 3 6.5 5.1 8.9 2.7 3 6.3 4.7 11.4 3.4Z" class="cls-6"/><path d="M267.6 84.9c.3 1.8.7 3.4 1 4.2-2.6 6-6.1 8.2-11.2 7.9-6.2-.4-7.4-4.4-7.9-8.4 0-.2.3-1.7.5-3.1.2-1.1.3-2.1.3-2.3 4.4 2.7 9 2.8 16.8-2.9 0 1.2.2 3 .4 4.7Z" class="cls-7"/><path d="M266.7 48c-.6-1.7-1.2-3.5-1.8-5.2 3 3.5 6.7 6.4 10.8 8.5 1.8 5.1 2.3 11 2.3 15.5-1.1 5-4.5 7.8-6.4 9.8-1.6 1.4-3.1 2.6-4.4 3.6-7.8 5.7-12.5 5.6-16.8 2.9-2.3-1.4-4.5-3.5-7-5.8-3.5-3.2-4.8-6-5.8-10.8-.3-1.3-.4-2.7-.5-3.8-.1-2.7-.3-19.9 2.2-25.7 3.2 5 8.6 8.4 14.3 9.2-.3-1.6-.6-3.3-.9-4.9 4 3.4 8.9 5.7 14 6.6Zm-.5 7.1c.2-1.5-.3-2.8-1.1-2.9s-1.6 1-1.8 2.5.3 2.8 1.1 2.9 1.6-1 1.8-2.5m-5.7 19.6c1.6-1.3 2.3-1.8 4.3-5.3-1 1.2-12.2 4.4-16.9 1.9l.4.3c1.2 2.7 2.5 4.1 5.3 4.6 1.7.3 5.2-.1 6.9-1.5m-15.4-16.9c.8-.1 1.3-1.4 1-2.9s-1.1-2.5-1.8-2.4c-.8.1-1.3 1.4-1 2.9s1.1 2.5 1.9 2.4Z" class="cls-7"/><path d="M265 52.2c.8.1 1.3 1.4 1.1 2.9s-1 2.6-1.8 2.5-1.3-1.4-1.1-2.9 1-2.6 1.8-2.5" class="cls-4"/><path d="M257.9 169c-1.4 1.6-3.3 2.4-5.4 2.5-2.3.2-4.7-1.1-5.6-3.4-.3-.8-.4-1.6-.4-2.4 0-.6 0-1.3.2-1.9.2-1.6.6-3.2 1.5-4.5.2-.3.4-.5.6-.7.9-.9 2.1-1.5 3.3-1.5 2.6.2 4.3 3.3 6.8 4l.4-.4c1.4 1.8 1.8 4.3 1 6.4-.9.7-1.8 1.3-2.5 1.8Zm-5.5 37.6c-.2 1.6-.4 3.2-1 4.6 1.2 7.2-.2 14.6-.8 16.7-2.7 9.3-4.8 15.1-6 22.9-3.7.9-7.7.4-11.2-1.2.3-8.1.5-19 .3-21.4-.3-4.9 0-9.7 1.6-17.6-.2-.9-.3-2.2-.3-3.5 4.7 1.5 10.4 1.8 17.4-.4Z" class="cls-7"/><path d="M241.5 161.6c-2.5-2.3-4.7-4.7-6.5-7.1-2.2-3-3.8-6-4.5-8.9-1.5-5.8-2.2-14.4-1.5-26.7 1.8.9 4.1 1.5 7.2 2.1h.7v5.6c0 1.4 1 9.3.3 13.4 4.3 5.8 7.7 12.4 11.6 18.5-.2.2-.4.5-.6.7-.9 1.3-1.3 2.9-1.5 4.5 0 .6-.2 1.3-.2 1.9-1.8-1.3-3.5-2.7-5-4.1Z" class="cls-7"/><path d="m248.3 71.6-.4-.3c4.7 2.5 15.9-.7 16.9-1.9-2 3.6-2.7 4-4.3 5.3-1.7 1.3-5.2 1.8-6.9 1.5-2.8-.5-4.1-1.9-5.3-4.6" style="stroke-width:0;fill:#fff"/><path d="M246 55c.2 1.5-.2 2.7-1 2.9-.8.1-1.6-.9-1.9-2.4s.2-2.7 1-2.9c.8-.1 1.6 1 1.8 2.4Z" class="cls-4"/><path d="M243.7 261.5c-.2.7-1.4 2.6-2.4 2.7s-1.7-1.7-3-1.3c-.2 0-.8.3-1.5.7s1.8-4.5-2.6-5.4c-.5 0-.9-.2-1.3 0 .2-1.1.4-4.6.5-8.7 3.4 1.6 7.5 2.1 11.2 1.2-.4 2.7-.7 5.7-.9 9.1v1.6Zm-8.6-106.9c1.8 2.4 4 4.8 6.5 7.1-2-.4-4.1-.2-6.4-1.6-.7-.4-.3.5-.3-5.3l.3-.2Z" class="cls-5"/><path d="M229 204.2c1.1-9.1 5.5-40.9 6.2-44.1 2.3 1.4 4.4 1.1 6.4 1.6 1.6 1.4 3.2 2.8 5 4.1 0 .8 0 1.6.4 2.4.9 2.3 3.3 3.6 5.6 3.4 2.1-.2 4-.9 5.4-2.5.8-.6 1.6-1.1 2.5-1.8 1.8-1.2 3.8-2.6 5.9-4.1 7.4 0 7.8-.5 12.2-2h.4c1.5 9.3 6.5 41.7 6.5 41.7-.8.8-2.7 1.9-4.7 2.8-2.3 1.1-4.8 2-6 2.3-4.1 1-7 .8-10.4.1-.5-.1-1.1-.2-1.7-.3-1-.2-2.1-.4-3.4-.7 0-.3-.7-11.3-1.6-19.7h-.1c-.5 6.2-2.1 12.4-3.4 18.5l-1.8.6c-7 2.3-12.6 2-17.4.4-2.2-.7-4.2-1.7-6.1-2.8Zm3.9 54.1c.4-.2.8-.1 1.3 0 4.4.8 2.6 5.4 2.6 5.4.7-.4 1.2-.6 1.5-.7 1.3-.4 2 1.4 3 1.3s2.2-2 2.4-2.7V260c.4 0 1.8 0 1.5 2.1-.3 2-.5 6.4-.5 8.1v.3c0 .3-.3.6-.5.8-1.1.9-3 2.1-7.7 1.9h-.6c-2.4.8-5.1 2.9-9 4.1.6-4.2-.8-8-3.9-9.3-2.2-.8-3.8-.9-5.1-.7s13.1-5.5 13.1-5.5c.6-2.5 1.2-3.4 1.8-3.7Z" class="cls-6"/><path d="M223.1 268.1c3 1.3 4.5 5.1 3.9 9.3-.7.2-1.5.4-2.3.6-2.2.4-4.7.5-7.6 0-.1 0-.3 0-.4-.1-1.9-.8-2.6-1.9-2.9-2.5v-.6c0-1.2.1-6.5 4.2-7.5 1.3-.3 2.9-.2 5.1.7Z" class="cls-6"/><path d="M244.8 270.5s1.4.5 0 2.7-8.3 2.2-9 2.3c-.6.1-3.6 2-5.8 2.8-1.1.4-3 .9-5.1 1.3l-.3-1.6c.8-.2 1.5-.3 2.3-.6 3.9-1.2 6.6-3.3 9-4.1h.6c4.7.2 6.6-1 7.7-1.9.3-.2.5-.5.5-.8Z" class="cls-6"/><path d="M213.1 276.5c0-.5.3-1 .7-1.3v.3c.2.5 1 1.7 2.9 2.5.1 0 .2 0 .4.1 2.9.5 5.4.4 7.6 0l.3 1.6c-2 .4-4.3.6-6.4.7-3.2 0-4.6-1.4-5.2-2.2q-.3-.45-.3-.9v-.7Z" class="cls-6"/><path d="M235 207c0 1.3.1 2.6.3 3.5-1.7 7.9-1.9 12.7-1.6 17.6.2 2.4 0 13.3-.3 21.4-.2 4.1-.3 7.6-.5 8.7h0m19.5-51.6c-.2 1.6-.4 3.2-1 4.6 1.2 7.2-.2 14.6-.8 16.7-2.7 9.3-4.8 15.1-6 22.9-.4 2.7-.7 5.7-.9 9.1v1.6m20.7-53.4c.2.8.3 1.7.5 2.9.3 3.2.1 5.9.4 9.2.6 7.5 1.3 15.3 3 22.7.5 2 1 4.6 1.4 7.5.5 3.5.8 7.6.5 12.2v.2m10.7-57.1c0 2.9-.2 5.6.1 7.5.6 3.2 1.8 5.5 2.1 9.1.6 5.6-1.2 15.4-1.8 25.8-.2 4.2-.3 8.4.2 12.6m-12.2 7.3c0 .3.1.7.2 1.1v.3c1.4 3.2 3 6.5 5.1 8.9 2.7 3 6.3 4.7 11.4 3.4 4.3-1.1 5.6-2.9 5.5-4.2 0-.2 0-.4-.2-.6-.2-.6-.7-1.5-1.4-2.6-1.2-1.9-3.1-4.2-5.7-6.5-.1-.1-.3-.3-.3-.4-.7-1.2-1.3-2.5-1.9-2.9" class="cls-1"/><path d="M270.1 261.5s-2-.5-.8 6.5m5.5 10.2s.7-5.9 6.8-7c5.8-1.1 8.4 2.5 8.6 2.9q0 0 0 0m-15.9-9c-.4.8-4 .8-4.2-2.6v-.9m4.2 3.5s-3.5-5.7 3.2-5.7c0 0 2.6-.2 4 1.3h0c.7.7 1.1 1.9.7 3.6 0 .4-.2.8-.3 1.2" class="cls-1"/><path d="m291.5 276.7.4.4c.3.3.4 2.4.4 2.8-.3 2.3-1.9 3.1-6.1 4.3-5.3 1.6-9.6-1.4-11.9-4.2-2.5-3-3.6-5.9-3.8-6.5v-.2l-1.2-2.8v-.3c-.1-.4-.3-1.6.3-2.3h0m-25.9-8s0 0 0 0c.4 0 1.8 0 1.5 2.1-.3 2-.5 6.4-.5 8.1v.3c0 .3-.3.6-.5.8-1.1.9-3 2.1-7.7 1.9h-.6c-2.4.8-5.1 2.9-9 4.1-.7.2-1.5.4-2.3.6-2.2.4-4.7.5-7.6 0-.1 0-.3 0-.4-.1-1.9-.8-2.6-1.9-2.9-2.5v-.6c0-1.2.1-6.5 4.2-7.5 1.3-.3 2.9-.2 5.1.7 3 1.3 4.5 5.1 3.9 9.3" class="cls-1"/><path d="M243.7 261.5c-.2.7-1.4 2.6-2.4 2.7s-1.7-1.7-3-1.3c-.2 0-.8.3-1.5.7s-1.6.9-2.6 1.4" class="cls-1"/><path d="M236.8 263.6s1.8-4.5-2.6-5.4c-.5 0-.9-.2-1.3 0-.6.3-1.2 1.2-1.8 3.7m0 .1-13.1 5.5m-4.2 7.7c-.5.3-.7.8-.7 1.3v.7q0 .45.3.9c.6.8 2 2.2 5.2 2.2 2.1 0 4.4-.3 6.4-.7 2.1-.4 4-.9 5.1-1.3 2.2-.8 5.1-2.7 5.8-2.8s7.6-.1 9-2.3 0-2.7 0-2.7m4.7-182c-8.9 2.7-14.1 4.8-16.4 7.4-2.9 3.3-5.9 18.1-6.9 20.8.7.9 1.6 1.6 2.8 2.2 1.8.9 4.1 1.5 7.2 2.1m32.4-31.9c1.4-.8 12.5 2.4 13.6 3.4 5 4.1 9.2 24.1 9.2 24.1 0 .9-.8 1.7-2.2 2.4-3.2 1.7-9 2.9-11.8 3.9-.2 0-.4.2-.6.2-.6-6.3-.5-7.9-1-11.4m-15.4 55.6c-.9.6-1.8 1.2-2.5 1.8-.2.1-.4.3-.5.4" class="cls-1"/><path d="M266.4 163.2c-2.1 1.5-4.1 2.8-5.9 4.1" class="cls-3"/><path d="M289.4 118.9c-1.4 10.4-2.4 18-5.8 27.6-.8 2.2-2.5 4.4-4.7 6.6-3.4 3.5-8.1 6.9-12.5 10m-37.3-44.2c-.7 12.3 0 20.9 1.5 26.7.8 2.9 2.3 5.9 4.5 8.9 1.8 2.4 4 4.8 6.5 7.1 1.6 1.4 3.2 2.8 5 4.1m30.9-42.9c-.5 6.3-1 10.3-2 15.5-.3 1.6-.6 3.2-1.3 4.6-1 1.9-1.2 2-2.8 3.4-4.3 3.6-8.1 10.5-12.1 14.6l-.4.4M237.2 140c4.3 5.8 7.7 12.4 11.6 18.5m10.6 2.3c1.4 1.7 1.8 4.3 1 6.4 0-.1 0-.3.1-.4" class="cls-1"/><path d="M237.1 62.8c0 1.2.2 2.5.5 3.8 1 4.8 2.3 7.6 5.8 10.8 2.5 2.3 4.7 4.4 7 5.8 4.4 2.7 9 2.8 16.8-2.9 1.4-1 2.8-2.2 4.4-3.6.1 0 .2-.2.4-.3" class="cls-3"/><path d="M278 66.8c-1.1 5-4.5 7.8-6.4 9.8 0 0-.1.2-.2.2m-21.8 11.7c0-.2.3-1.7.5-3.1.2-1.1.3-2.1.3-2.3m-21.9 21.6" class="cls-3"/><path d="M249.6 88.5c.6 4 1.8 8 7.9 8.4 5 .3 8.6-1.9 11.2-7.9" class="cls-1"/><path d="M234.8 154.8c0 5.9-.4 4.9.3 5.3m1.8-48.6v15.1c0 1.4 1 9.3.3 13.4m41.7 13.2c0 7.2-.1 5.7 0 7.1v.3m-29.7-96.1c1.5 3.7 5.5 3.6 8.5 1.6M246 55c.2 1.5-.2 2.7-1 2.9-.8.1-1.6-.9-1.9-2.4s.2-2.7 1-2.9c.8-.1 1.6 1 1.8 2.4Zm17.2-.3c-.2 1.5.3 2.8 1.1 2.9s1.6-1 1.8-2.5-.3-2.8-1.1-2.9-1.6 1-1.8 2.5Zm-15.3 16.7c4.7 2.5 15.9-.7 16.9-1.9-2 3.6-2.7 4-4.3 5.3-1.7 1.3-5.2 1.8-6.9 1.5-2.8-.5-4.1-1.9-5.3-4.6m0-.1-.4-.2m-5.9 90.3h-.4c-2-.4-4.1-.2-6.4-1.6m43.4 1.1c-4.4 1.5-4.7 2-12.2 2m8.9-112.9c.1.3.3.6.4 1 1.8 5.1 2.3 11 2.3 15.5m-40.9-4c-.1-2.7-.3-19.9 2.2-25.7" class="cls-3"/><path d="M227.6 80.7c10.8-2.6-.6-20.8 5.4-38.7 1.8-5.5 3.3-11.4 7.7-15s14.2-4.1 19.8-4c8.1.2 19.1 7 21.2 15 6.8 26.6-4.5 39.1 9.2 41.8" class="cls-3"/><path d="M267.2 79.9v.3c0 1.2.2 3 .4 4.7.3 1.8.7 3.4 1 4.2m-5.9 119.1.1-.4m-5.1-20.3c-.5 6.2-2.1 12.4-3.4 18.5l-1.8.6c-7 2.3-12.6 2-17.4.4-2.2-.7-4.2-1.7-6.1-2.8 1.1-9.1 5.5-40.9 6.2-44.1m24.2 47c1.2.2 2.3.4 3.4.6.6.1 1.1.2 1.7.3 3.4.6 6.3.9 10.4-.1 1.2-.3 3.7-1.2 6-2.3 2-.9 3.9-2 4.7-2.8 0 0-5-32.4-6.5-41.7 0-.3 0-.6-.1-.8v-.2" class="cls-3"/><path d="M256.8 180.9c.3 1.7.7 4 1 6.5 1 8.4 1.6 19.4 1.6 19.7m-6-29.4c1.8 1.7 2.4 2.2 3.4 3.2m34.1-101c-6.4 4.4-15.6 5.8-23.2 5h-.2m-17.3.5h-.1c-7.7.2-15.4-1.5-22.5-4.7M239.3 37c3.2 5 8.6 8.4 14.3 9.2-.3-1.6-.6-3.3-.9-4.9 4 3.4 8.9 5.7 14 6.6-.6-1.7-1.2-3.5-1.8-5.2 3 3.5 6.7 6.4 10.8 8.5 1.4.7 2.8 1.4 4.3 1.9-.4-.2-.7-.3-1.1-.5m-30.1-4c-2.1-.8-7.3-.5-9.5 0" class="cls-3"/><path d="M261.9 49.1c2-.2 4.8-1.1 8.8.8" class="cls-3"/><path d="M258.9 161.1c-2.6-.7-4.2-3.8-6.8-4-1.2 0-2.4.5-3.3 1.5-.2.2-.4.5-.6.7-.9 1.3-1.3 2.9-1.5 4.5 0 .6-.2 1.3-.2 1.9 0 .8 0 1.6.4 2.4.9 2.3 3.3 3.6 5.6 3.4 2.1-.2 4-.9 5.4-2.5m23.2 79.1c-3.2 2.2-7.3 3-11.1 2.2m-25.4.5c-3.7.9-7.7.4-11.2-1.2 0 0-.2 0-.2-.1" class="cls-1"/></svg>')}`;
export default image;
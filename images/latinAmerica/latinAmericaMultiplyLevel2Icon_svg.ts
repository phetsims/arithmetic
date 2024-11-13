/* eslint-disable */
/* @formatter:off */

import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300"><defs><style>.cls-1{stroke-linecap:round;stroke-linejoin:round}.cls-1,.cls-3{fill:none;stroke:#000}.cls-10,.cls-11,.cls-4,.cls-6,.cls-7,.cls-8,.cls-9{stroke-width:0}.cls-14{fill:#3246ff}.cls-14,.cls-15{stroke:#fff;stroke-width:4.2px}.cls-14,.cls-15,.cls-3{stroke-miterlimit:10}.cls-15{fill:#4d0099}.cls-6{fill:#38312e}.cls-7{fill:#16100d}.cls-8{fill:#ccc}.cls-9{fill:#be5fa6}.cls-10{fill:#866249}.cls-11{fill:#856149}</style></defs><g id="Layer_5"><path d="M1.8 1h298.4v289H1.8z" style="fill:none;stroke-width:0"/><path d="M41.8 183.7h70.4v76.5H41.8zm70.5 0h76.5v76.5h-76.5z" class="cls-14"/><path d="M112.3 114.3h76.5v69.4h-76.5z" class="cls-15"/><path d="M188.7 183.7h69.4v76.5h-69.4zm0-69.4h69.4v69.4h-69.4zm0-74.5h69.4v74.5h-69.4z" class="cls-14"/><path d="M112.3 39.8h76.5v74.5h-76.5zm-70.5 74.5h70.4v69.4H41.8zm0-74.5h70.4v74.5H41.8z" class="cls-15"/></g><g id="Layer_2"><path d="M295.1 276.9c.3.3.4 2.5.4 2.9-.3 2.4-2 3.2-6.3 4.5-5.4 1.6-9.9-1.5-12.2-4.3-2.6-3.1-3.7-6.1-3.9-6.7v-.2l-1.3-2.9v-.3c-.1-.4-.3-1.7.3-2.4 0 .3.1.7.2 1.1v.3c1.4 3.3 3 6.7 5.2 9.1 2.8 3.1 6.5 4.8 11.7 3.5 4.4-1.1 5.7-3 5.6-4.4 0-.2 0-.4-.2-.7l.4.4Z" class="cls-8"/><path d="M293.2 273.7c.7 1.1 1.2 2.1 1.5 2.8 0 .3.1.5.2.7.1 1.4-1.2 3.2-5.6 4.4-5.3 1.3-8.9-.4-11.7-3.5 0-.3.8-6.1 6.9-7.3 5.6-1.1 8.2 2.2 8.8 2.9Z" class="cls-8"/><path d="M285.1 263.7c.7.4 1.3 1.7 2 3 0 .2.2.3.4.4 2.6 2.3 4.5 4.7 5.7 6.6-.5-.7-3.2-4-8.8-2.9-6.1 1.2-6.9 7-6.9 7.2-2.2-2.5-3.8-5.8-5.2-9.1v-.3c0-.4-.1-.7-.2-1.1q-.3-1.35-.3-2.4c1.5 0 3 0 4.4-.1q3.15-.3 6.3-1.5c1-.4 1.9-.8 2.9-1.3 0 .4 0 .9-.1 1.4Z" class="cls-8"/><path d="M233.9 162.3c-2.6-3.2-4.4-6.4-5.2-9.5-1.6-5.8-4.4-16.7-3.6-29 1-2.6 0-26.3 13.5-32 .3-.1.7-.3 1-.4 2.4-.4 5.6 0 8.3 1.3.5 2.2 2.3 4.3 4.3 5.2 3 1.2 7.8.9 10.6-.8 1.4-.8 2.7-1.8 3.8-2.9-.2.3 2.4-1.7 4.9-2.6v.4c2.8.2 5.1 1.2 7 2.7 10.1 7.7 10.4 28.9 10.4 28.9 0 12.7-1.2 20.5-4.8 30-.6 1.6-1.8 3.3-3.3 4.9-4.3 4.8-11.5 9.5-17.6 13.5-1.1.7-2.3 1.5-3.3 2.1.8-2.2.4-4.7-1.1-6.4-.1 0-.3.2-.4.3-2.7-.7-4.4-3.8-7.1-4-1.3 0-2.5.5-3.4 1.4-.2.2-.4.5-.6.7-.9 1.3-1.3 2.9-1.6 4.5 0 .6-.2 1.2-.2 1.8h-.2c-4.5-3.2-8.4-6.7-11.3-10.3Zm30.3-48.7c.3-1.1.2-2.4-.5-3.3-1.9-2.4-4.5-.7-6.6.3-2.7 1.3-3.3-1.4-5.3-2.6-1.6-1-3.9-1.1-5.1.3s-.9 3.5-.3 5.3c1.4 4.3 3.9 8.2 7.2 11.3 3.2-2.6 6.5-5.1 9-8.4.7-.9 1.4-1.9 1.7-3Z" class="cls-9"/><path d="m259.8 49.9-1.8-1.8c-3.7-3.6-9.3-6-11.4-10.4-7.2 7.2-9.4 10.8-9.6 20.9-.5-.3-1.5 0-2.3 1.1-1.4-7.9-2.3-26.7 12.5-30.5 7.5-2 15.7-1.7 22.9 1 3.1 1.2 6.2 2.8 8.2 5.4 5.9 7.7 5.5 12.1 5.5 19.1s-3.2 15-2.4 23.7c-2.5-1.3-4.4-2.8-5.9-4.4-3.7-4-4.7-8.6-6.2-12.1-1.6-3.8-4.3-6.9-7.2-9.8-.8-.8-1.6-1.6-2.4-2.3Z" class="cls-6"/><path d="M280.9 158.6c.1 3 .3 6 .4 8.9-2.2 1-4.2 1.7-6.2 2.3-3.2 1-6.3 1.6-9.8 2-.7 0-1.4.2-2.1.2 6.1-3.9 13.3-8.7 17.6-13.5Zm-9.4-66.9c-2.5.8-5.1 2.8-4.9 2.6 1.1-1.2 1.9-2.5 1.9-3.9 0-1-.2-1.9-.2-2.8 1.1-.4 2.4-.3 3.6 0s2.3.8 3.5 1.1c.9.2 1.9.3 2.9.5s1.9.7 2.4 1.5 1.4 3-2.1 3.8c-1.9-1.4-4.2-2.3-6.9-2.6v-.4Z" class="cls-9"/><path d="M274.1 77.2c2.6 4.4 3.7 7.1 4.2 12.2-.9-.3-1.9-.3-2.9-.5-1.2-.3-2.3-.8-3.5-1.1s-2.4-.5-3.6 0c0-1.2-.2-2.5-.2-4.5 1.1-.7 3.8-2.6 5.9-6Z" class="cls-6"/><path d="M249.7 50.4c-4.1-1.3-9.4 0-10.1 1.5.9.4 1.8.4 2.9.3l4.8-.3c.7 0 1.5-.1 2.1-.4s.9-.8.4-1.1ZM238 71.2c-.2-1.2-.3-2.4-.2-3.7.2-6.9-.8-8.9-.8-8.9.2-10.2 2.4-13.8 9.6-20.9 2.1 4.4 7.7 6.8 11.4 10.4l1.8 1.8c-.7.1-1.3.3-2 .5-.1 0-.3.9.3 1.3.6.3 1.4.4 2.1.4.8 0 1.1 0 1.9.1 2.9 2.9 5.6 6 7.2 9.8 1.5 3.6 2.5 8.2 6.2 12.1q-.6 1.65-1.5 3c-2.1 3.4-4.9 5.3-5.9 6-10.2 6.2-14.5 6.2-19.7 2.6-1.5-1.1-3.1-2.5-5-4.1-3-2.6-4.9-6.4-5.5-10.4Zm9.5 4.4c1.2 2.1 2.5 3.2 5.3 3.6 1.7.2 5.2-.1 6.9-1.1 1.6-1 2.3-1.3 4.3-4-.9.9-11.6 3.2-16.4 1.6Zm17-16.3c0-1.8-.8-3.3-1.7-3.3s-1.7 1.5-1.7 3.3.8 3.3 1.7 3.3 1.7-1.5 1.7-3.3m-19.3 0c0-1.6-.6-2.9-1.4-2.9s-1.4 1.3-1.4 2.9.6 2.9 1.4 2.9 1.4-1.3 1.4-2.9" class="cls-10"/><path d="M268.3 87.7c0 .9.1 1.7.2 2.8 0 1.4-.8 2.7-1.9 3.9-1.1 1.1-2.4 2.1-3.8 2.9-2.8 1.7-7.6 2-10.6.8-2.1-.9-3.9-3-4.3-5.2-.2-1-.2-2 .2-2.9.2-.9.4-1.8.4-2.8v-1.4c5.2 3.6 9.4 3.6 19.7-2.6 0 2 0 3.4.2 4.5Z" class="cls-11"/><path d="M263.7 110.3c.7.9.8 2.2.5 3.3s-.9 2.1-1.7 3c-2.5 3.2-5.8 5.8-9 8.4-3.3-3.1-5.8-7-7.2-11.3-.6-1.8-.9-3.9.3-5.3s3.5-1.3 5.1-.3c2 1.3 2.6 4 5.3 2.6 2-1 4.7-2.7 6.6-.3Z" style="stroke-width:0;fill:#e7e7e7"/><path d="M262.8 56.1c.9 0 1.7 1.5 1.7 3.3s-.8 3.3-1.7 3.3-1.7-1.5-1.7-3.3.8-3.3 1.7-3.3" class="cls-4"/><path d="M263.9 74c-2 2.7-2.7 3.1-4.3 4-1.7 1-5.1 1.3-6.9 1.1-2.8-.4-4.1-1.5-5.3-3.5 4.9 1.5 15.5-.8 16.4-1.7Z" style="stroke-width:0;fill:#fff"/><path d="M262.2 52.2c-.8 0-1.1 0-1.9-.1-.7 0-1.5-.1-2.1-.4s-.4-1.2-.3-1.3c.6-.2 1.3-.4 2-.5.8.8 1.6 1.5 2.4 2.3Z" class="cls-7"/><path d="M259.9 174.2c-.9.7-1.8 1.3-2.6 1.8-1.5 1.6-3.4 2.3-5.6 2.5-2.4.2-5-1.1-5.9-3.4-.3-.8-.4-1.6-.4-2.4v-.1c0-.6 0-1.2.2-1.8.2-1.6.6-3.2 1.6-4.5.2-.3.4-.5.6-.7.9-.9 2.2-1.5 3.4-1.4 2.7.2 4.5 3.3 7.1 4l.4-.4c1.4 1.8 1.9 4.3 1.1 6.4Z" class="cls-10"/><path d="M249.7 50.4c.5.3.2.9-.4 1.1-.6.3-1.4.3-2.1.4l-4.8.3c-1.1 0-2.1 0-2.9-.3.7-1.4 6-2.8 10.1-1.5Z" class="cls-7"/><path d="M238.4 91.5c2.4-2.9 6.3-4.6 10.1-4.4 0 .9-.2 1.8-.4 2.8-.4.9-.4 1.9-.2 2.9-2.7-1.3-5.9-1.6-8.3-1.3-.3.1-.7.2-1 .4v-.3Z" class="cls-9"/><path d="M246.8 270s1.4.5 0 2.8-8.5 2.3-9.2 2.4-3.7 2.1-5.9 2.9c-1.1.4-3 .9-5.1 1.3l-.3-1.7c.8-.2 1.5-.4 2.2-.6 4-1.3 6.8-3.4 9.2-4.3h.6c4.9.2 6.8-1.1 7.9-2q.45-.3.6-.9Z" class="cls-8"/><path d="M246.9 266.1c0 1.4-.1 2.8-.1 3.6v.3c0 .3-.3.6-.6.9-1.1.9-3 2.1-7.9 2h-.6c-2.4.9-5.2 3-9.2 4.3.6-4.4-.9-8.3-4-9.6-2.2-.8-3.9-1-5.2-.7l9.5-4v.6c.7.8 2.7 1.4 5.2 1.8.6.1 1.3.2 1.9.3 2.1.3 4.3.4 6.4.5h4.7Z" class="cls-8"/><path d="M243.8 56.4c.8 0 1.4 1.3 1.4 2.9s-.6 2.9-1.4 2.9-1.4-1.3-1.4-2.9.6-2.9 1.4-2.9" class="cls-4"/><path d="M245.3 172.6c-.9 0-1.8-.2-2.7-.3-4.4-.6-7.5-1.5-8.7-2.3h-.6c.2-3.8.4-6.6.6-7.7 2.9 3.6 6.8 7.2 11.3 10.3Z" class="cls-9"/><path d="M237 58.7s1 2.1.8 8.9c0 1.2 0 2.5.2 3.7-1.1-.3-4.6-3.8-4.6-7.3s.5-3.2 1.2-4.1c.8-1.1 1.8-1.4 2.3-1.1Z" class="cls-11"/><path d="M286.2 252.5c-.2-3.9-.4-7.8-.6-11.5-.2-4.5-.3-8.9-.5-12.6-.2-3.4-.3-6.3-.6-8.5 0-.3 0-.7-.1-1.4-.1-2-.3-5.8-.6-10.3-.1-2.6-.3-5.5-.5-8.5-.2-3.1-.3-6.3-.5-9.5-.3-4.6-.5-9.1-.7-12.9-.3-5.2-.6-8.9-.7-9.8-2.2 1-4.2 1.7-6.2 2.3-3.2 1-6.3 1.6-9.8 2-.7 0-1.4.2-2.1.2-1.1.7-2.3 1.5-3.3 2.1-.9.6-1.8 1.2-2.6 1.7-1.5 1.6-3.4 2.3-5.6 2.5-2.4.2-5-1.1-5.9-3.4-.3-.8-.4-1.6-.4-2.4 0 0-.1 0-.2-.1-.9 0-1.8-.2-2.7-.3-4.4-.6-7.5-1.5-8.7-2.3h-.6c-.1 2.1-.3 4.6-.4 7.4-.2 3.5-.4 7.3-.5 11.3-.1 2.9-.2 5.9-.4 8.8-.1 3.1-.2 6.2-.3 9.2 0 2.7-.2 5.3-.3 7.7-.1 3.8-.2 7.2-.3 9.8v5.4c0 .8 0 2.5-.1 4.8-.1 2.4-.3 5.3-.5 8.4-.2 2.4-.4 4.9-.5 7.4-.2 2.6-.4 5-.6 7.1-.2 2.5-.4 4.6-.6 5.7v.6c.7.8 2.7 1.4 5.2 1.8.6.1 1.3.2 1.9.3 2.1.3 4.3.4 6.4.5h4.7c1.7 0 2.9-.3 3.1-.5.1-2.3.2-4.2.2-6 0-3.2.1-5.7.2-8.3 0-2 .1-4.1.3-6.6s.4-5.3.8-9c.2-1.7.4-3.5.6-5.5.1-1.2.3-2.3.4-3.5.4-3.1.7-6.3 1.1-9.4.3-2.5.7-5 1-7.4.4-3.1.8-6 1.2-8.6.6-4.3 1.1-7.7 1.5-9.9.2-1.2.3-2 .3-2.2.2 1.2.4 2.4.6 3.7.5 3.1 1.1 6.6 1.7 10.1l1.5 8.7c.6 3.3 1.1 6.5 1.6 9.4.6 3.7 1.2 7 1.5 9.4 0 .2 0 .5.1.8.3 2.4.7 7.1 1 12.2.3 4 .5 8.3.5 12.2 0 3.4 0 6.5-.1 8.7 1.9.3 3.7.5 5.5.6 1.5 0 3 0 4.4-.1q3.15-.3 6.3-1.5c1-.4 1.9-.8 2.9-1.3.6-.3 1.1-.6 1.7-.9-.3-2.8-.5-5.8-.7-8.8Z" style="stroke-width:0;fill:#53898b"/><path d="M224.5 267.6c3.1 1.3 4.6 5.2 4 9.6-.7.2-1.5.4-2.2.6-2.2.4-4.8.6-7.8 0-.1 0-.3 0-.4-.1-1.9-.8-2.7-2-2.9-2.5v-.6c0-1.3.1-6.7 4.3-7.7 1.3-.3 3-.2 5.2.7Z" class="cls-8"/><path d="m226.3 277.8.3 1.7c-2.1.4-4.5.7-6.7.7-3.2 0-4.8-1.4-5.3-2.2q-.3-.45-.3-.9v-.8c0-.6.3-1.1.8-1.4v.3c.2.6 1 1.7 2.9 2.5.1 0 .3 0 .4.1 3 .5 5.6.4 7.8 0Z" class="cls-8"/><path d="M294.6 276.5c-.2-.7-.7-1.6-1.5-2.8-1.2-1.9-3.2-4.3-5.7-6.6l-.4-.4c-.7-1.3-1.3-2.6-2-3" class="cls-1"/><path d="M277.5 278c2.8 3.1 6.5 4.8 11.7 3.5 4.4-1.1 5.7-3 5.6-4.4 0-.2 0-.4-.2-.7m-23-11.3c0 .7.2 1.5.3 2.4 0 .3.1.7.2 1.1v.3c1.4 3.3 3 6.7 5.2 9.1m.2 0c0-.3.8-6.1 6.9-7.3 5.6-1.1 8.2 2.2 8.8 2.9v.1m-8-11.4c0 .4 0 .9-.1 1.4 0 .4-.2.8-.3 1.3" class="cls-1"/><path d="m294.6 276.5.4.4c.3.3.4 2.5.4 2.9-.3 2.4-2 3.2-6.3 4.5-5.4 1.6-9.9-1.5-12.2-4.3-2.6-3.1-3.7-6.1-3.9-6.7v-.2l-1.3-2.9v-.3c-.1-.4-.3-1.7.3-2.4h0m-52.7-.6c1.3-.3 3-.2 5.2.7 3.1 1.3 4.6 5.2 4 9.6" class="cls-1"/><path d="M246.9 266.1c0 1.4-.1 2.8-.1 3.6v.3c0 .3-.3.6-.6.9-1.1.9-3 2.1-7.9 2h-.6c-2.4.9-5.2 3-9.2 4.3-.7.2-1.5.4-2.2.6-2.2.4-4.8.6-7.8 0-.1 0-.3 0-.4-.1-1.9-.8-2.7-2-2.9-2.5v-.6c0-1.3.1-6.7 4.3-7.7m9.3-4-9.5 4h0" class="cls-1"/><path d="M215 274.9c-.5.3-.8.8-.8 1.4v.8c0 .3.1.7.3.9.6.8 2.1 2.3 5.3 2.2 2.2 0 4.6-.3 6.7-.7s3.9-.9 5.1-1.3c2.3-.9 5.3-2.8 5.9-2.9.7-.1 7.8-.1 9.2-2.4s0-2.8 0-2.8" class="cls-1"/><path d="M237 58.7s1 2.1.8 8.9c0 1.2 0 2.5.2 3.7.6 4 2.4 7.7 5.5 10.4 1.9 1.6 3.5 3 5 4.1 5.2 3.6 9.4 3.6 19.7-2.6 1.1-.7 3.8-2.6 5.9-6q.9-1.35 1.5-3m-13.4-22c-.8 0-1.1 0-1.9-.1-.7 0-1.5-.1-2.1-.4s-.4-1.2-.3-1.3c.6-.2 1.3-.4 2-.5h.1" class="cls-3"/><path d="M268.5 90.4c0-1-.2-1.9-.2-2.8 0-1.2-.2-2.5-.2-4.5M248 92.8h-.2c-2.7-1.3-5.9-1.6-8.3-1.3m27.1 2.8c-.2.3 2.4-1.7 4.9-2.6.8-.3 1.6-.4 2.2-.3m-39.8 70.9c-.2 1.1-.4 3.9-.6 7.7-.1 2.2-.3 4.7-.4 7.4-.2 3.5-.4 7.3-.5 11.3-.1 2.9-.2 5.9-.4 8.8-.1 3.1-.2 6.2-.3 9.2 0 2.7-.2 5.3-.3 7.7-.1 3.8-.2 7.2-.3 9.8v5.4c0 .8 0 2.5-.1 4.8-.1 2.4-.3 5.3-.5 8.4-.2 2.4-.4 4.9-.5 7.4-.2 2.6-.4 5-.6 7.1-.2 2.5-.4 4.6-.6 5.7v.6m28.9-74.3c0 .2-.2 1-.3 2.2-.3 2.1-.9 5.6-1.5 9.9-.4 2.6-.8 5.5-1.2 8.6-.3 2.4-.7 4.9-1 7.4-.4 3.1-.8 6.2-1.1 9.4-.1 1.2-.3 2.3-.4 3.5-.2 2-.4 3.9-.6 5.5-.4 3.7-.6 6.6-.8 9-.2 2.5-.3 4.5-.3 6.6 0 2.6-.1 5-.2 8.3 0 1.7-.1 3.7-.2 6m11.3-53.9c.6 3.3 1.1 6.5 1.6 9.4.6 3.7 1.2 7 1.5 9.4 0 .2 0 .5.1.8.3 2.4.7 7.1 1 12.2.3 4 .5 8.3.5 12.2 0 3.4 0 6.5-.1 8.7m-6.1-61.4 1.5 8.7m-4.9-31.6c.1 1.9.6 5.1 1.2 9 .2 1.2.4 2.4.6 3.7.5 3.1 1.1 6.6 1.7 10.1m21.4-35.4c.2.9.4 4.6.7 9.8.2 3.8.5 8.2.7 12.9.2 3.1.3 6.4.5 9.5.2 3 .3 5.9.5 8.5.2 4.6.5 8.3.6 10.3 0 .7 0 1.1.1 1.4.2 2.2.4 5.1.6 8.5.2 3.7.3 8 .5 12.6.2 3.7.4 7.6.6 11.5.2 3 .4 6 .7 8.8M245.2 59.3c0 1.6-.6 2.9-1.4 2.9s-1.4-1.3-1.4-2.9.6-2.9 1.4-2.9 1.4 1.3 1.4 2.9Zm19.3.1c0 1.8-.8 3.3-1.7 3.3s-1.7-1.5-1.7-3.3.8-3.3 1.7-3.3 1.7 1.5 1.7 3.3Zm-16.9 9.2c0 2.3 7.3 3 9.1 2m-9.6 4.9c.1 0 .3 0 .4.1 4.9 1.6 15.5-.7 16.4-1.6-2 2.7-2.7 3.1-4.3 4-1.7 1-5.1 1.3-6.9 1.1-2.8-.4-4.1-1.5-5.3-3.5M237 58.7c-.5-.3-1.5 0-2.3 1.1-.7.9-1.2 2.2-1.2 4.1 0 3.5 3.5 7.1 4.6 7.3h.1m7.3 101.4h-.2c-.9 0-1.8-.2-2.7-.3-4.4-.6-7.5-1.5-8.7-2.3" class="cls-3"/><path d="M265.4 171.9c-.7 0-1.4.2-2.1.2" class="cls-1"/><path d="M281.4 167.6c-2.2 1-4.2 1.7-6.2 2.3-3.2 1-6.3 1.6-9.8 2m-17-86.5v1.7c0 .9-.2 1.8-.4 2.8m1.7-39.5c.5.3.2.9-.4 1.1-.6.3-1.4.3-2.1.4l-4.8.3c-1.1 0-2.1 0-2.9-.3.7-1.4 6-2.8 10.1-1.5Zm18.8 40c0 1.4-.8 2.7-1.9 3.9-1.1 1.1-2.4 2.1-3.8 2.9-2.8 1.7-7.6 2-10.6.8-2.1-.9-3.9-3-4.3-5.2-.2-1-.2-2 .2-2.9m15.6 20.4c.7.9.8 2.2.5 3.3s-.9 2.1-1.7 3c-2.5 3.2-5.8 5.8-9 8.4-3.3-3.1-5.8-7-7.2-11.3-.6-1.8-.9-3.9.3-5.3s3.5-1.3 5.1-.3c2 1.3 2.6 4 5.3 2.6 2-1 4.7-2.7 6.6-.3Zm4.4 36.9c.4 1.8.7 6.4 1.1 8.2m-25.9-12.2c-.9 7.1-2.2 12-2.2 12" class="cls-3"/><path d="M278.2 89.4c.9.3 1.9.7 2.4 1.5s1.4 3-2.1 3.8" class="cls-1"/><path d="M268.2 87.7c1.1-.4 2.4-.3 3.6 0s2.3.8 3.5 1.1c.9.2 1.9.3 2.9.5m-29.7-2.2c-3.8-.2-7.6 1.5-10.1 4.4m7.4-56.1c.1.8.4 1.6.7 2.3 2.1 4.4 7.7 6.8 11.4 10.4l1.8 1.8c.8.8 1.6 1.5 2.4 2.3 2.9 2.9 5.6 6 7.2 9.8 1.5 3.6 2.5 8.2 6.2 12.1 1.5 1.6 3.4 3.1 5.9 4.4-.9-8.7 2.3-16.7 2.4-23.7 0-7 .4-11.4-5.5-19.1m-31.8 2c-7.2 7.2-9.4 10.8-9.6 20.9" class="cls-3"/><path d="M273.9 76.9s0 .1.1.2c2.6 4.4 3.7 7.1 4.2 12.2m-43.6-29.5c-1.4-7.9-2.3-26.7 12.5-30.5 7.5-2 15.7-1.7 22.9 1 3.1 1.2 6.2 2.8 8.2 5.4m2.7 122.6v.3c.1 3 .3 6 .4 8.9v2m5.6 91.8c-.6.3-1.1.7-1.7.9-1 .5-1.9.9-2.9 1.3q-3.15 1.2-6.3 1.5c-1.4.1-2.9.2-4.4.1-1.8 0-3.6-.3-5.5-.6m-16.1 1.1c-.2.3-1.4.4-3.1.5h-4.7c-2.1 0-4.4-.2-6.4-.5-.7 0-1.3-.2-1.9-.3-2.5-.4-4.5-1-5.2-1.8" class="cls-3"/><path d="M275.2 170c0 2.6.2 5.3.2 8 .1 3.8.3 7.6.4 11.4.1 3.1.3 6.2.4 9.3.2 3.2.3 6.5.6 9.7.2 4 .5 8 .8 11.9.3 3.6.6 7.2.9 10.7q.45 5.85 1.2 11.7c.4 4.1.9 8.1 1.4 12.2.2 1.2.3 2.5.5 3.7.2 1.6.4 3.1.6 4.7m-16.8-91.2c.2 2.1.3 4.3.5 6.4l.9 11.4c.3 3.3.5 6.5.8 9.8s.6 6.6.8 9.8c.3 3.9.7 7.7 1 11.6.3 3.6.6 7.3.9 10.9.3 3.9.6 7.8 1 11.7.4 4.2.7 8.5 1 12.7.1 1.5.2 3 .4 4.5v.2c0 .5.3 3.2.3 4m-21.3-86.6v.2c-.8 3.7-1.5 7.4-2.2 11.1-.6 2.9-1.1 5.8-1.6 8.7-.6 3.1-1.1 6.3-1.6 9.4-.5 2.9-.9 5.9-1.3 8.8-.5 3.5-.9 6.9-1.2 10.4-.3 3.2-.6 6.5-.9 9.8-.2 2.7-.4 5.5-.5 8.2-.1 2.4-.2 4.8-.2 7.2v13.6m.4-93.5c-.3 1.9-.5 3.9-.8 5.9l-1.2 10.5c-.3 2.9-.6 5.9-.9 8.9-.3 3.1-.6 6.3-.9 9.4-.3 2.9-.5 5.8-.8 8.7-.3 3.5-.6 6.9-.9 10.4-.3 3.3-.5 6.7-.8 10l-.6 8.1c-.2 2.5-.4 4.9-.6 7.3-.2 2-.3 3.9-.5 5.9 0 .5 0 1.1-.1 1.6-.2 2-.3 4.1-.5 6.1" class="cls-3"/><path d="M286.7 252.1c-.2.1-.3.2-.5.3-1.5 1.1-3.2 1.9-5.1 2.5-2.8.9-5.8 1.3-8.8 1.4-2.1 0-4.1-.1-5.9-.5m19.6-15c-.1 0-.2.1-.3.1-1.8.8-3.8 1.4-5.9 1.8-2.7.5-5.6.8-8.4.9h-5.1m19-15.3s-.2 0-.2.1c-2.1 1.2-4.3 2-6.6 2.6-2.7.7-5.4 1-8.2 1-1.8 0-3.6-.3-5.3-.6m19.5-13h-.1c-2 .8-4.3 1.4-6.8 1.8-2.7.4-5.5.7-8.2.8-2.2 0-4.4.1-6.3 0m20.8-12.9h-.1c-2.1 0-4.5 0-7 .2-2.8.2-5.7.5-8.4 1.1-2.5.5-4.9 1.3-6.9 2.3m21.9-12c-2.2-.6-4.6-.9-7.1-1-2.9 0-5.9.3-8.7 1-2.9.7-5.5 1.9-7.7 3.4m22.7-12.9c-2.1-.4-4.4-.7-6.7-.9-3-.2-6.1 0-9 .5-3 .6-5.9 1.5-8.4 3.1m23.7-15.6h-.1c-2.1.2-4.4.4-6.7.6-3 .2-6.2.4-9.5.5-3.1.1-6.3.2-9.4.2h-4.8c-3.4 0-6.7-.2-9.8-.4-3.2-.2-6.2-.5-8.9-.9m24.5 14.3h-.2c-2.1-.6-4.9-1.2-7.8-1.7-2.9-.4-6-.8-8.8-1-2.9-.2-5.7-.3-7.8-.2m22.9 12.7c-2-1.4-4.8-2.3-8-2.8-2.6-.5-5.5-.7-8.2-.9-2.7-.1-5.3-.2-7.4-.2m-.3 9.1c1.7.1 4.1.3 6.9.5 2.4.2 5 .5 7.5.8 3.3.5 6.4 1.1 8.3 2 0 0 .2 0 .3.1m-1.2 7.3c-2.4 0-5.4-.2-8.6-.6-2.3-.2-4.7-.6-7-1-2.5-.4-4.8-.9-6.6-1.5m21.1 12.5h-.2c-2.4.5-5.5.7-8.7.4-2.2-.1-4.5-.5-6.6-1-2.2-.5-4.2-1.2-5.8-2.1m20.4 11.7h-.1c-2.4.8-5.5 1.2-8.6 1.2-2.2 0-4.5-.3-6.6-.8-1.8-.4-3.5-1-4.9-1.8m19.3 10.5h-.1c-2.5.4-5.4.6-8.3.4-2.3-.1-4.6-.4-6.7-.9s-3.5-.9-5-1.5m19.7 8.5c-2.5.8-5.4 1.1-8.2 1.1-2.4 0-4.9-.3-7.1-.8-1.8-.4-3.5-.9-5-1.5m20.3 9.5h-.1c-1 .2-2 .3-3 .4-.5 0-1.1 0-1.6.1h-3.5c-1.1 0-2.2-.1-3.3-.2-1.5-.2-3-.4-4.4-.8-.3 0-.6-.2-.9-.2-1.4-.4-2.8-.9-4.1-1.6" class="cls-3"/><path d="M239.5 91.5c-.3.1-.7.2-1 .4-13.5 5.6-12.5 29.3-13.5 32m52.8 6.2c-.6-6.2-.3-9.4-.8-12.8m-5.4-25.2c2.7.2 5 1.2 6.9 2.7 10.1 7.7 10.4 28.9 10.4 28.9m.1 0c0 12.7-1.2 20.5-4.8 30-.6 1.6-1.8 3.3-3.3 4.9-4.3 4.8-11.5 9.5-17.6 13.5-1.1.7-2.3 1.5-3.3 2.1-.9.6-1.8 1.2-2.6 1.7-.2.1-.4.3-.6.4m-31.7-52.5c-.8 12.2 2 23.2 3.6 29 .8 3.1 2.7 6.3 5.2 9.5 2.9 3.6 6.8 7.2 11.3 10.3 0 0 .1 0 .2.1" class="cls-1"/><path d="M277.8 130.1c-.5 6.2-1 10.2-2.1 15.4-.3 1.6-.6 3.1-1.4 4.5-1 1.9-1.3 2-2.9 3.3-.8.6-1.5 1.3-2.3 2.1-3.6 3.7-6.9 9-10.4 12.3l-.4.4m-22.7-20.9c2 2.5 3.8 5.2 5.5 8 2.2 3.5 4.3 7 6.6 10.4m11.2 2.2c1.4 1.7 1.9 4.2 1.1 6.3 0-.1 0-.2.1-.4M235 119.3c0 6.8.6 10.7.4 14.7 0 1.4 1 9.2.3 13.3m22.7 20.9c-2.7-.7-4.4-3.8-7.1-4-1.3 0-2.5.5-3.4 1.4-.2.2-.4.5-.6.7-.9 1.3-1.3 2.9-1.6 4.5 0 .6-.2 1.2-.2 1.8v.1c0 .8.1 1.6.4 2.4.9 2.2 3.5 3.5 5.9 3.4 2.2-.2 4.2-.9 5.6-2.5l.4-.4" class="cls-1"/></g></svg>')}`;
export default image;
/* eslint-disable */
/* @formatter:off */

import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="Layer_2" width="300" height="300" viewBox="0 0 300 300"><defs><style>.cls-1,.cls-3,.cls-4,.cls-5{fill:none}.cls-1,.cls-4{stroke-linecap:round}.cls-1,.cls-4,.cls-5{stroke:#000}.cls-1,.cls-4{stroke-linejoin:round}.cls-3,.cls-5{stroke-miterlimit:10}.cls-3{stroke:#fff;stroke-width:.8px}.cls-4{stroke-width:.5px}.cls-10,.cls-11,.cls-12,.cls-14,.cls-15,.cls-6,.cls-8{stroke-width:0}.cls-8{fill:#231c19}.cls-10{fill:#132340}.cls-11{fill:#cc9280}.cls-12{fill:#cb9780}.cls-14{fill:#f51968}.cls-15{fill:#fff}</style></defs><path d="m189.5 104.6 7.2 14.7-14.7 7.3-7.3-14.8z" style="stroke-width:0;fill:#4d0099"/><path d="M176.5 292.9c4 1.6 8.6 2.3 12.9 1.8.9 0 1.7-.2 2.5-.4 2-.5 4.2-1.1 4.1-3.1 1.7 1.5 1 4.3-.8 5.6s-4.3 1.5-6.6 1.3c-5.3-.4-10.4-2.2-15.2-4.5-2.1-1-4.2-2.3-5.6-4.1s-2-4.4-.8-6.3c.3 1.7 1 3.3 2.1 4.7 1.7 2.2 4.2 3.9 7.2 5.1Z" class="cls-10"/><path d="M196 291.1c.1 2-2 2.6-4.1 3.1v-.3c-1.2-2-2.4-3.9-3.5-5.9-.3-.5-.6-1-.7-1.6 0-.6.2-1.2.8-1.5v-.2c1.8.9 3.4 1.7 4.7 2.4 1.4.8 2.8 2.4 2.9 4Z" class="cls-11"/><path d="M191.8 294v.3c-.7.2-1.6.3-2.4.4-3.6-2-8.9-3-12.9-1.8-2.9-1.2-5.4-2.9-7.2-5.1 3.5 1 7.3 1.1 11 1.2 1.5 0 3.2 0 4.1-1.1.6-.8.6-1.9.2-2.8s-.9-2.3-1.6-3c1.8.8 3.8 1.8 5.5 2.7v.2h-.1c-.6.2-.8.9-.8 1.5s.4 1.1.7 1.6z" class="cls-10"/><path d="M189.4 294.7c-4.3.5-9-.2-12.9-1.8 4-1.3 9.3-.2 12.9 1.8" class="cls-11"/><path d="M167.1 282.2c-.7-7.3-6-24.6-9.2-36.9 6.9-.7 12.6-2 17.1-3.4.5 6.2.5 11.3.5 13 0 2.9.5 21.6 1.3 24.2 1.8.8 4 1.8 6.3 3 .7.8 1.3 2.2 1.6 3.1.4.9.4 2-.2 2.8-.9 1.1-2.6 1.2-4.1 1.1-3.7-.1-7.5-.3-11-1.2-1.1-1.4-1.8-3-2.1-4.7 0-.3 0-.6-.1-.9Zm35.7-141.5c-.1-.2-.3-.2-.5-.3-4-.7-8.2.4-11.3 3-1.7-.6-3.5-.1-5 1-.9.7-1.3 1.3-1.4 2v-.4c0-.6-.2-1-.5-1.4-1.7-.8-3.9-1.1-5.9-.8 0-.4-.2-.7-.3-1.1-3.9 2.2-5.9 3.2-9.5 3.3h-.6c0 1.2.1 2.3.2 3.5 0 1.5.2 3.2.3 5 0 1.1.2 2.3.3 3.5.7 1.7 1.6 1.7 3.7 2.4.1 0 .2 0 .3.1 2.1.6 5.3-.4 7.1-1.5.8-.5 1.5-.8 2.2-1.1.6.8 1.6 1.4 2.6 1.5 0 .4-.1.8-.1 1.2 0 .6 0 1.2.4 1.6.4.5 1.2.6 1.9.7.7 0 1.5 0 2.1-.3.4-.3.6-.8.7-1.3s0-1.3-.2-2.2c.9-.3 1.7-.9 2.1-1.8.7.4 1.3.8 2.1 1s1.7.2 2.4-.3c.7-.4 1.1-1.2 1.2-2v-.1c.5 0 1.1 0 1.7.1.6 0 1.2 0 1.6-.4.2-.2.4-.5.5-.8.4-1 .8-1.9 1.1-2.9.2-.6.5-1.2.2-1.8-.2-.4-.6-.7-1-.8-.4 0-.9 0-1.3.1-.3 0-.6.2-.8.3-1.2 0-2.6 0-3.2-.9-.4-.7-.2-1.6.2-2.2s1.1-1.1 1.7-1.6c1.6-1.1 3.1-2.2 4.7-3.3.3-.2.7-.7.5-1Z" class="cls-12"/><path d="M177.8 142.7c-3.9 2.2-5.9 3.2-9.5 3.3h-.6c0-.6 0-1.3-.1-1.9 0-1.1-.1-2.2-.2-3.2 4.4-.5 5.7-.2 8.9-3.2.6 1.8 1.1 3.6 1.5 5.1Z" class="cls-15"/><path d="M133.9 244.9c-6.5-.8-13.1-2-16.1-3.4-1-.5-1.6-1-1.6-1.5 0 0 8.5-44.5 9.8-52.1 4.8 2.7 10.5 2.8 16.1 3.1 2.5.1 5.4.5 7.7-.4 2.3-.8 5-5.9 5-5.9.5 0 3.7 5.1 4.9 5.6 1 .4 7.1-2 10.4-2.9.9 5.8 6.4 47.8 6.4 54-.5.2-1 .3-1.6.5-4.5 1.4-10.2 2.7-17.1 3.4-3.3.3-7 .5-10.8.5s-8-.3-13.1-1Z" class="cls-10"/><path d="M173.5 133.2c.6 1.8-4.5.4-5.2-.2-.4-.3-.6-.5-.6-.7 0-.6 1.3-.9 2-.8.8 0 3.2.7 3.6 1.3 0 .1.1.2.2.3Zm-2.4 51.2c0 .4-.2.9-.6 1-.2 0-.4-.1-.5-.2-.7-.5-1.4-1.1-2.1-1.7-.9-.7-2.2-1.9-2.5-2.2-.4-.4 0-1.5.5-1.2.9.5 3.1 2.3 4.1 3.2.3.2 1 .8 1.1 1.1m-.5-4h-.1c-.2 0-.4-.1-.5-.2-.7-.6-1.4-1.3-2.1-1.9-.9-.8-2.3-2.2-2.6-2.5-.4-.5 0-1.6.5-1.2.9.6 3.2 2.6 4.2 3.6h.4c0 .8.2 1.5.3 2.3Zm-.7-6.3c-.7-.6-1.5-1.2-2.2-1.8-.9-.8-2.4-2.2-2.7-2.5-.1-.1-.2-.3-.2-.5 0-.5.4-1 .8-.7.9.5 3.1 2.2 4.2 3.2 0 .8.2 1.6.2 2.4Z" class="cls-15"/><path d="M169 165.2c.1 1.5.3 2.9.4 4.4-2-1.4-4.5-3.8-6.5-5.2-2.1.9-8.2 6-9 5.9 0-1.6-.2-3.2-.3-4.9h.2c2.5-1.2 6.5-4.4 8.7-6.1 2.1 1.5 4.4 4.4 6.5 5.9m.1-46.9h-.2c-2 3.6-4 6.8-5.7 10.6-1.8-1.8-3.7-2.9-5.9-4.2.2-.7.4-1.3.5-2 1.4.6 2.7 1.3 3.8 2.3 1.6-3.1 3.5-6.7 5.3-9.6.3.3.6.6.9 1 .4.5.7 1.2 1.2 2Z" class="cls-15"/><path d="M168.4 157.9c0 .5 0 1.1.1 1.7-1.6-.7-6.7-5-6.7-5s-7.1 4.3-8.6 5.3c-.1-1.6-.3-3.2-.4-4.9 0 0 .1 0 .2.1 2-2.3 8.1-6 8.6-6s4.5 3.4 6.5 5.4c0 1.1.2 2.3.3 3.5Zm-1-17.2c0 1.1.1 2.1.2 3.2h-.2c-4.7-2.9-9.4-5.7-14.1-8.6 4.7-.5 9.3-1.7 13.5-3.8v.8c.2 2.8.4 5.5.5 8.4Zm-5.2 38.9c.4 0 .7.6.6 1.1 0 .3-.2.5-.4.7-.7.8-1.5 1.6-2.2 2.4-.9 1-2.5 2.5-2.9 2.9-.5.5-1.3-.4-.8-1.1.7-1.1 3.1-3.7 4.2-4.8.3-.3 1-1.2 1.4-1.2Zm.6-10.1v.2c0 .3-.3.5-.4.7-.8.9-1.6 1.7-2.4 2.6-1 1.1-2.8 2.8-3.2 3.1-.5.4-1.1 0-1.1-.7 0-.2 0-.3.2-.5.8-1.2 3.5-4 4.8-5.2.3-.3 1.2-1.3 1.6-1.3s.7.5.7 1Zm-1.4 5c.4 0 .8.6.7 1.2 0 .3-.3.5-.4.7-.8.9-1.6 1.7-2.4 2.6-1 1.1-2.8 2.8-3.2 3.1-.6.5-1.5-.4-.9-1.2.8-1.2 3.5-4 4.8-5.2.3-.3 1.2-1.3 1.6-1.3Z" class="cls-15"/><path d="M125 99.4c-.7.4-1.6.4-2.3 0-.8-.3-1.5-1-2.1-1.7-.7-.7-1.3-1.6-1.9-2.4-.4-.7-.9-1.4-1.2-2.1-.5-1-.9-2.2-.6-3.3.3-.9 1.1-1.4 1.9-1.6q1.2-.15 2.4.6c1 1.4 2.6 3 4.1 2.3.9-.4 1.3-1.5 1.3-2.4 0-1-.5-1.9-.9-2.7-1.4-2.9-2.8-5.9-4.2-8.8-1-2.1-2-4.3-1.8-6.7.2-2.2 1.5-4.1 3.1-5.5s3.6-2.4 5.6-3.2c4.9-2.1 13.3-5.9 18.7-5.5 5 .3 7.6 4.8 10.1 10 .6 2.1 1.3 4.8 1.4 5.1 2.2 3.7 4.2 8.1 3.6 16.8-.4 5.7-1.1 10.2-7.1 14.6 0 0-1.2 2.5-2 4.9-.4 1.3-.7 2.5-.7 3.3 0 .5-.1 1.1-.2 1.6-.3 2.4-.8 4.6-1.3 6.6-.7 2.7-1.4 4.9-1.8 5.8-.1.3-.2.5-.2.5s-.2-.1-.4-.3c-.7-.6-2.3-1.8-4.1-3.2-2.8-2.3-6.3-5.4-8.1-7.5-.7-.9-1.2-1.6-1.2-2.1-.2-1.1-.7-2.4-1.4-3.9-1.5-3.1-4.1-6.7-8.5-9.2zm29.6-21.3c.6-.2.7-1.7 0-3.2-.6-1.5-1.6-2.6-2.2-2.4s-.6 1.7 0 3.2c.6 1.6 1.6 2.6 2.2 2.4m0-10.8c0-.7-.2-1.2-.5-1.3-2.2-.5-6-1.3-7.8-.2-.4.2 0 3 1.3 3 1.5-1.2 4.4-1.6 7.1-1.4ZM137 83.7c.7-.3.8-1.9.1-3.6s-1.8-2.8-2.6-2.5c-.7.3-.8 1.9-.1 3.6s1.8 2.8 2.6 2.6Zm-1.5-11.9c.2-1.2-1.1-2.6-1.6-2.5-2.5.3-5.1 3.2-6.5 5-.3.4.8 1.7 1.2 1.6 1.1-1.8 4-3.3 6.9-4.1" class="cls-12"/><path d="M158.6 143.6c.9-.3 3.2-.4 2.1 1.3-.2.3-.5.5-.8.8-1.3 1-2.7 1.9-4.4 2-.6 0-1.3-.1-1.5-.6-.2-.6.3-1.2.8-1.5 1.1-.9 2.4-1.5 3.8-1.9Zm1.2-32.5c.5.5.6 1.2.6 1.9 0 .8-.4 1.7-.7 2.4-.6 1.3-.9 2.7-1.2 4.1-1.9-2.7-3.7-4.9-6.4-6.9 2.7-.8 4.9-1.2 7.7-1.6Zm-5.4 17.3c-1.5-2.8-2.5-5.8-3-8.9 2.5.5 4.5.5 7.1.1l-.6 3c-.1.7-.3 1.4-.5 2-.4 1.3-1 2.6-1.8 3.6-.2.3-.6.6-.9.6s-.5-.1-.6-.3l.4-.2Zm1.3 12.2c1.3-.2 2.4.8 1 1.8-.5.4-1.1.6-1.7.8-.4 0-.8 0-1.1-.2-1-1 1-2.3 1.8-2.4" class="cls-15"/><path d="M121.1 89c-.7-.5-1.6-.7-2.4-.6s-1.6.7-1.9 1.6c-.4 1.1 0 2.2.6 3.3l1.2 2.1c-14.2-12.4-12-30.5-9.5-34.3 5.8-8.9 27.3-14.5 33.9-14.4 6.9 0 11.4 10.1 13.6 18.1.1.4.3 1 .5 1.7-2.5-5.2-5.2-9.7-10.1-10-5.3-.4-13.7 3.4-18.7 5.5-2 .8-4 1.8-5.6 3.2s-2.9 3.4-3.1 5.5c-.2 2.3.8 4.6 1.8 6.7 1.4 2.9 2.8 5.9 4.2 8.8.4.9.8 1.8.9 2.7 0 1-.4 2-1.3 2.4-1.5.7-3.1-.9-4.1-2.3" style="stroke-width:0;fill:#1e160d"/><path d="M154.6 74.8c.6 1.6.6 3 0 3.2s-1.6-.8-2.2-2.4c-.6-1.5-.6-3 0-3.2s1.6.8 2.2 2.4" class="cls-6"/><path d="M154.1 65.9c.4 0 .6.6.5 1.3-2.7-.2-5.6.2-7.1 1.4-1.2 0-1.7-2.7-1.3-3 1.8-1.1 5.6-.3 7.8.2Z" class="cls-8"/><path d="M154.3 180.4c0 .5-.4 1.1-1 1.1q-.45 0-.9-.3c-1.1-.7-2.2-1.3-3.4-2-1.4-.8-3.6-2.3-4.1-2.7-.7-.5 0-1.7.9-1.3 1.4.6 5.1 2.7 6.7 3.8.4.3 1.7.9 1.8 1.4m-.2-5.9c0 .5-.4 1.1-1 1.1q-.45 0-.9-.3c-1.1-.7-2.3-1.3-3.4-2-1.4-.8-3.7-2.3-4.2-2.7-.7-.5 0-1.7.9-1.4 1.5.6 5.2 2.7 6.9 3.8.4.3 1.7.9 1.8 1.4Zm-.3 11.4c0 .4-.4 1-1 1-.3 0-.6-.1-.9-.2-1.1-.6-2.2-1.2-3.3-1.7-1.4-.7-3.5-2-4-2.3-.7-.4 0-1.6.9-1.3 1.4.5 5 2.4 6.5 3.3.4.2 1.6.8 1.7 1.2Z" class="cls-15"/><path d="M153.6 165.4c.1 1.7.2 3.3.3 4.9-.8-.1-9.9-5.7-10.9-5.3-1.1.5-13.1 6.7-16.4 8.4h-.4v-4.2c4.6-3.2 11.5-7.6 16.5-10 3.6 1.8 7 4.3 10.6 6.1Z" class="cls-15"/><path d="M152.8 155c.1 1.6.3 3.3.4 4.9 0 0-9.7-5.7-10.7-6 0 0-12.5 8.5-15.8 10.5 0-2.5 0-4.7.1-6.2 3.8-2.4 14-9.1 15.1-9.1s8.4 4 11 6Zm-3.1-13.1c1 1-.1 1.9-1.2 1.8-.9 0-1.8-.4-2.6-.8-.4-.2-.8-.6-.7-1 0-.5.7-.7 1.2-.7.8 0 2.6.2 3.2.8Zm-4.1 3.3c.7.2 5 1.8 3.8 3.3-.3.3-.8.2-1.2.1-1.2-.3-2.4-.7-3.4-1.4-.3-.2-.5-.4-.7-.7s-.2-.7 0-1c.3-.4.9-.4 1.4-.3Zm-7.1-18.8-1.2-.9c-.6-.4-1.1-.9-1.7-1.3v-.2h.1l8.4-1.8c.3 2.4.3 4.9.3 7.3s-.2.3-.2.3c-2-1-3.9-2.1-5.8-3.4Zm2 43.2c.6 0 1.3.7 1.1 1.3-.1.3-.4.6-.7.8-1.3 1-2.7 1.9-4 2.9-1.7 1.2-4.6 3.1-5.2 3.5-.9.6-2.3-.4-1.5-1.2 1.3-1.3 5.7-4.4 7.8-5.8.5-.4 1.9-1.5 2.5-1.4Zm-.1 12c.6 0 1.2.6 1 1.2 0 .3-.4.5-.6.7-1.2.9-2.4 1.7-3.6 2.6-1.5 1.1-4.1 2.8-4.7 3.2-.8.5-2.1-.4-1.3-1.1 1.2-1.2 5.1-4 6.9-5.3.5-.3 1.7-1.3 2.3-1.3m-1-5.5c.6 0 1.3.7 1.1 1.3 0 .4-.4.6-.7.8-1.3 1-2.7 1.9-4 2.9-1.7 1.2-4.6 3.1-5.2 3.5-.9.6-2.4-.4-1.5-1.2 1.3-1.3 5.7-4.4 7.8-5.8.5-.4 1.9-1.5 2.5-1.4Zm-13.9-40.6c7.4.8 13.3 1 20.7.3-7.2 5.5-11.8 10.2-19.7 14.6h-.3c-.1-.8-.2-1.5-.3-2.3-.2-1.4-.5-7.9-.6-10.4 0-.7.2-1.4.2-2.2" class="cls-15"/><path d="m137.3 125.5 1.2.9c-2.3 2.2-4.4 4.6-6.2 7.2-3.1-6.3-6.9-12.2-11.4-17.5v-.3c-.1 0 2.7-.9 2.7-.9 3.2 4 6.5 9.3 8.5 14.1 1.9-.7 3.7-1.9 5.1-3.4Z" class="cls-15"/><path d="M137.2 80c.7 1.7.6 3.3-.1 3.6s-1.9-.9-2.6-2.6-.6-3.3.1-3.6 1.9.8 2.6 2.5Z" class="cls-6"/><path d="M136.2 114.6c-.3 3.2-.2 6.2-.5 9.4v.2c-3.2-2.5-5.9-5.5-8.1-8.7l.3-.2c2.9-.3 5.4-.3 8.3-.7" class="cls-15"/><path d="M134 69.2c.4 0 1.8 1.4 1.6 2.5-2.9.8-5.8 2.3-6.9 4.1-.4 0-1.6-1.2-1.2-1.6 1.4-1.8 4-4.7 6.5-5" class="cls-8"/><path d="M126.5 280.4v.7c0 .2.1.4.2.6 0 .7-.3 1.4-.6 2-.4.8-1 1.4-1.7 2.1-4.7.8-9.4 1.4-14.1 1.9-.8 0-1.7.1-2.4-.2-.9-.5-1.2-1.5-1.1-2.4 0-.9.5-1.7.9-2.5 2.5-1.5 5.1-2.9 7.9-4.3 1.5-8.4 1.6-26.6 2.3-36.7 3 1.4 9.6 2.6 16.1 3.4-1.4 5-2.8 9.7-3.7 12.9-1.1 4.1-3 10.8-3.7 22.6Z" class="cls-12"/><path d="M104 295q1.35-.15 2.7-.6c3.9-1.1 7.1-2.1 10.1-3.6 2.1-1 4.2-2.3 6.4-4 .4-.3.8-.7 1.2-1 .7-.6 1.3-1.3 1.7-2.1.3-.6.6-1.3.6-2 1.3 4.5-1.3 9.4-5.3 12.2-4.2 2.9-9.6 3.9-14.8 4.3-2.4.2-5 .2-7-1-2.7-1.7-3.3-5.8-1-8.1-.6 1.2-.8 2.6-.2 3.8.3.7.9 1.2 1.6 1.5.7.4 1.4.6 2.2.7h1.8Z" class="cls-10"/><path d="M170.5 180.4c-.2 0-.4-.1-.5-.3-.7-.6-1.4-1.3-2.1-1.9-.9-.8-2.3-2.2-2.6-2.5-.4-.5 0-1.6.5-1.2.9.6 3.2 2.6 4.2 3.6h.4c-.1-1.3-.3-2.6-.4-4-.7-.6-1.5-1.2-2.2-1.8-.9-.8-2.4-2.2-2.7-2.5-.1-.1-.2-.3-.2-.5 0-.5.4-1 .8-.7.9.5 3.1 2.2 4.2 3.2 0-.7-.1-1.4-.2-2.1-2-1.4-4.5-3.8-6.5-5.2-2.1.9-8.2 6-9 5.9s-9.9-5.7-10.9-5.3c-1.1.5-13.1 6.7-16.4 8.4h-.4c-.2 3.3-.4 6.3-.8 8.1 0 .9-.4 4.8-.5 5.7.3.2.6.4 1 .6 4.8 2.7 10.5 2.8 16.1 3.1 2.5.1 5.4.5 7.7-.4 2.3-.8 5-5.9 5-5.9.5 0 3.7 5.1 4.9 5.6 1 .4 7.1-2 10.4-2.9q.9-.3 1.5-.3c-.3-1.9-.6-4.1-.9-6.7h-.1Zm-41.5 2.9c1.3-1.3 5.7-4.4 7.8-5.8.5-.4 1.9-1.5 2.5-1.4.6 0 1.3.7 1.1 1.3 0 .4-.4.6-.7.8-1.3 1-2.7 1.9-4 2.9-1.7 1.2-4.6 3.1-5.2 3.5-.9.6-2.4-.4-1.5-1.2Zm12.3-.5c0 .3-.4.5-.6.7-1.2.9-2.4 1.7-3.6 2.6-1.5 1.1-4.1 2.8-4.7 3.2-.8.5-2.1-.4-1.3-1.1 1.2-1.2 5.1-4 6.9-5.3.5-.3 1.7-1.3 2.3-1.3s1.2.6 1 1.2m.3-11.9c-.1.3-.4.6-.7.8-1.3 1-2.7 1.9-4 2.9-1.7 1.2-4.6 3.1-5.2 3.5-.9.6-2.3-.4-1.5-1.2 1.3-1.3 5.7-4.4 7.8-5.8.5-.4 1.9-1.5 2.5-1.4.6 0 1.3.7 1.1 1.3Zm14.1 4.1c.8-1.2 3.5-4 4.8-5.2.3-.3 1.2-1.3 1.6-1.3s.7.5.7 1v.2c0 .3-.3.5-.4.7-.8.9-1.6 1.7-2.4 2.6-1 1.1-2.8 2.8-3.2 3.1-.5.4-1.1 0-1.1-.7 0-.2 0-.3.2-.5Zm-10.2-5.5c1.5.6 5.2 2.7 6.9 3.8.4.3 1.7.9 1.8 1.4 0 .5-.4 1.1-1 1.1q-.45 0-.9-.3c-1.1-.7-2.3-1.3-3.4-2-1.4-.8-3.7-2.3-4.2-2.7-.7-.5 0-1.7.9-1.4Zm7.3 17.5c-.3 0-.6-.1-.9-.2-1.1-.6-2.2-1.2-3.3-1.7-1.4-.7-3.5-2-4-2.3-.7-.4 0-1.6.9-1.3 1.4.5 5 2.4 6.5 3.3.4.2 1.6.8 1.7 1.2 0 .4-.4 1-1 1Zm.5-5.4q-.45 0-.9-.3c-1.1-.7-2.2-1.3-3.4-2-1.4-.8-3.6-2.3-4.1-2.7-.7-.5 0-1.7.9-1.3 1.4.6 5.1 2.7 6.7 3.8.4.3 1.7.9 1.8 1.4 0 .5-.4 1.1-1 1.1m1.8-.6c.8-1.2 3.5-4 4.8-5.2.3-.3 1.2-1.3 1.6-1.3s.8.6.7 1.2c0 .3-.3.5-.4.7-.8.9-1.6 1.7-2.4 2.6-1 1.1-2.8 2.8-3.2 3.1-.6.5-1.5-.4-.9-1.2Zm7.3.4c-.7.8-1.5 1.6-2.2 2.4-.9 1-2.5 2.5-2.9 2.9-.5.5-1.3-.4-.8-1.1.7-1.1 3.1-3.7 4.2-4.8.3-.3 1-1.2 1.4-1.2s.7.6.6 1.1c0 .3-.2.5-.4.7Zm8.7 3c0 .4-.2.9-.6 1-.2 0-.4-.1-.5-.2-.7-.5-1.4-1.1-2.1-1.7-.9-.7-2.2-1.9-2.5-2.2-.4-.4 0-1.5.6-1.2.9.5 3.1 2.3 4.1 3.2.3.2 1 .8 1.1 1.1Z" class="cls-14"/><path d="M153.2 159.8s-9.7-5.7-10.8-6c0 0-12.5 8.5-15.8 10.5 0 1.6 0 3.3-.2 5 4.6-3.2 11.5-7.6 16.5-10 3.6 1.8 7 4.3 10.6 6.1h.2c2.5-1.2 6.5-4.4 8.7-6.1 2.1 1.5 4.4 4.4 6.5 5.9-.2-1.9-.3-3.9-.5-5.7-1.6-.7-6.7-5-6.7-5s-7.1 4.3-8.6 5.3Zm4.7-37.1c1.4.6 2.7 1.3 3.8 2.3 1.6-3.1 3.5-6.7 5.3-9.6-1.6-1.5-3.7-1.8-6.6-2.3 0 .8-.4 1.7-.7 2.4-.6 1.3-.9 2.7-1.2 4.1l-.6 3Zm.5-12.4c-2.8-1.3-2.4-1.1-5.2-2.4h-.3c-.4 1.2-.7 2.4-.7 3.2 0 .5-.1 1.1-.2 1.6 2.7-.8 4.9-1.2 7.7-1.6-.4-.4-.9-.6-1.4-.9Zm-24.7-1.7c-2.1 1.3-3.1 2-5.3 3.1-.9.4-1.8 1.2-1.6 2.2l-3.1 1c3.2 4 6.5 9.3 8.5 14.1 1.9-.7 3.7-1.9 5.1-3.4-.6-.5-1.1-.9-1.7-1.4-3.1-2.5-5.8-5.5-8-8.7l.3-.2c2.9-.3 5.4-.3 8.3-.7-.7-.9-1.2-1.6-1.2-2.1-.2-1.1-.7-2.4-1.4-3.9Z" class="cls-14"/><path d="M125.5 135.5c7.4.8 13.3 1 20.7.3-7.2 5.5-11.8 10.2-19.7 14.6h-.3c.3 2.3.6 4.7.6 7v.7c3.8-2.4 14-9.1 15.1-9.1s8.4 4 11 6c0 0 .1 0 .2.1 2-2.3 8.1-6 8.6-6s4.5 3.4 6.5 5.4c-.1-1.9-.2-3.6-.3-5 0-1.2-.1-2.3-.2-3.5 0-.7 0-1.3-.1-2h-.2c-4.7-2.9-9.4-5.7-14.1-8.6 4.7-.5 9.3-1.7 13.5-3.8v.8c.2 2.8.4 5.5.5 8.4 4.4-.5 5.7-.2 8.9-3.2l-1.5-4.8c-1.9-5.6-4-11.2-5.7-14.5h-.2c-2 3.6-4 6.8-5.7 10.6-1.8-1.8-3.7-2.9-5.9-4.2-.4 1.3-1 2.6-1.8 3.6-.2.3-.6.6-.9.6s-.5-.1-.6-.3l.4-.2c-1.5-2.8-2.5-5.8-3-8.9 2.5.5 4.5.5 7.1.1-1.9-2.7-3.7-4.9-6.4-6.9-.3 2.4-.8 4.6-1.3 6.6-.7 2.7-1.4 4.9-1.8 5.8-.1.3-.2.5-.2.5s-.2-.1-.4-.3c-.7-.6-2.3-1.8-4.1-3.2-2.8-2.3-6.3-5.4-8.1-7.5-.3 3.2-.2 6.2-.5 9.4l8.4-1.8c.3 2.4.3 4.9.3 7.3s-.2.3-.2.3c-2-1-3.9-2.1-5.8-3.4-2.3 2.2-4.4 4.6-6.2 7.2-3.1-6.3-6.9-12.2-11.4-17.5v-.3c-.1 0-3.2 1-3.2 1-3.5.4-4.9 5.3-5.9 8.6l-2 10.3c.4 1.8.8 1.5 1.9 3 .9 1.2 2.1 2.1 3.5 2.9 2.9 1.6 6.3 2.3 9.6 2.1.1-1.4.2-3.2.5-6 0-.7.2-1.4.2-2.2Zm35.2 9.4c-.2.3-.5.5-.8.8-1.3 1-2.7 1.9-4.4 2-.6 0-1.3-.1-1.5-.6-.2-.6.3-1.2.8-1.5 1.1-.9 2.4-1.5 3.8-1.9.9-.3 3.2-.4 2.1 1.3Zm-4.9-4.3c1.3-.2 2.4.8 1 1.8-.5.4-1.1.6-1.7.8-.4 0-.8 0-1.1-.2-1-1 1-2.3 1.8-2.4m14-9.1c.8 0 3.2.7 3.6 1.3 0 .1.1.2.2.3.6 1.8-4.5.4-5.2-.2-.4-.3-.6-.5-.6-.7 0-.6 1.3-.9 2-.8Zm-20.4 17c-.3.3-.8.2-1.2.1-1.2-.3-2.4-.7-3.4-1.4-.3-.2-.5-.4-.7-.7s-.2-.7 0-1c.3-.4.9-.4 1.4-.3.7.2 5 1.8 3.8 3.3Zm.3-6.6c1 1-.1 1.9-1.2 1.8-.9 0-1.8-.4-2.6-.8-.4-.2-.8-.6-.7-1 0-.5.7-.7 1.2-.7.8 0 2.6.2 3.2.8Zm-35.1-5.4c-.7-2-.6-4.2.2-6.2.4-1 1-2 1.8-2.8.4-.4 1.8-1.9 2.4-1.7.7.3.9 2.5.9 3.1 0 1.1-.2 2.1-.7 3.1-.9 2-2.7 3.5-4.6 4.6Zm6.8 2.6c-1.3.5-2.9.3-4.1-.4 1.2-1.4 3.4-3 5.4-2.7 2.7.4 0 2.7-1.3 3.1" class="cls-14"/><path d="M124.7 143.7c-.2 2.1-.4 3-1.5 4.1-2.2 1.1-3.8 1.2-5.3.9-1.3-.3-2.4-.9-3.4-1.6-1.6-1-2.8-1.7-4.3-3.2-.5-.5-1.1-1.1-1.7-1.8l1.3-6.4c.4 1.8.8 1.5 1.9 3 .9 1.2 2.1 2.1 3.5 2.9 2.9 1.6 6.3 2.3 9.6 2.1Z" class="cls-15"/><path d="M124.3 285.7c-.4.4-.8.7-1.2 1.1-2.2 1.7-4.2 3-6.4 4v-.2c-2.5 0-5 0-7.4.5-2.3.6-4.4 1.9-5.4 3.9-.6 0-1.2.1-1.8 0-.8 0-1.5-.3-2.2-.7.4-1.1 1.2-2 1.9-2.9s1.3-2 1.3-3.1c0-1-.6-2-.5-2.9 1.7-1.1 3.3-2.1 5-3.1-.4.8-.9 1.6-.9 2.5s.3 2 1.1 2.4c.7.4 1.6.3 2.4.2 4.7-.5 9.5-1.1 14.1-1.9Z" class="cls-10"/><path d="M122.7 136c2.7.4 0 2.7-1.3 3.1-1.3.5-2.9.3-4.1-.4 1.2-1.4 3.4-3 5.4-2.7m-2.8-7.2c0 1.1-.2 2.1-.7 3.1-.9 2-2.7 3.5-4.6 4.6-.7-2-.6-4.2.2-6.2.4-1 1-2 1.8-2.8.4-.4 1.8-1.9 2.4-1.7.7.3.9 2.5.9 3.1Z" class="cls-15"/><path d="M118 148.7c-1.3-.3-2.4-.9-3.4-1.6-1.6-1-2.8-1.7-4.3-3.2 0 .5-.4 1.7-.7 3.3l8.5 1.6 4.7.9c.3-1 .5-1.7.6-1.9-2.2 1.1-3.8 1.2-5.3.9Z" class="cls-12"/><path d="M116.7 290.6v.2c-3 1.5-6.1 2.5-10 3.6q-1.35.45-2.7.6c1-2 3.2-3.3 5.4-3.9 2.4-.6 4.8-.6 7.3-.5" class="cls-11"/><path d="m147.9 15.4-11.4 11.9 11.9 11.4 11.4-11.9zm-30 133.5-8.5-1.6h-.6c0-.1-2.5 13.6-2.5 13.6l-.2.8-.3 1.7.9.2 3 .6 5.2 1 2.5.5h.1l1.2.3 1.1.2h.7c0 .1 1.4.4 1.4.4l3-16.2-2.5-.5-4.7-.9Z" style="stroke-width:0;fill:#3246ff"/><path d="M125.6 169.7c-.4-.4-1-.7-1.5-.5s-.8.6-1.1 1.1c-.2.5-.4 1-.8 1.3-.4.4-1 .5-1.4.2.3-.7.5-1.3.6-2 0-.7 0-1.4-.4-1.9l-.2-.2c-.2-.5-.5-1.1-.7-1.6l-1.1-.2-1.2-.2h-.1l-2.5-.5-5.2-1-3-.6-.9-.2.3-1.7c-.9.4-1.8 1-2.6 1.6-.9.7-1.7 1.5-2.5 2.4-.3.3-.6.7-.8 1.1-.1.4 0 1 .3 1.3.4.4 1.1.2 1.7 0 1.2-.4 2.3-.7 3.5-1 .4-.1.8-.2 1.2-.4.6.5.9 1.3 1 2.1v2.2c0 1.5.2 3.4 1.6 4 1 .4 2.1 0 3.1-.8.4.9 1.4 1.5 2.5 1.6 1.1 0 2.1-.5 2.9-1.1 1.7 1.3 4.2 1.5 6 .3 1.1-.8 1.9-2 2-3.3v-.5c0-.6-.2-1.1-.6-1.6Z" class="cls-12"/><path d="M103.1 288.4c0 1.1-.6 2.2-1.3 3.1s-1.5 1.8-1.9 2.8c-.7-.4-1.2-.9-1.6-1.5-.6-1.2-.4-2.6.2-3.7 0-.2.2-.4.3-.5.9-1.3 2.2-2.2 3.5-3h.1c-.1.9.5 1.9.5 2.9Z" class="cls-11"/><path d="M135 112.5c-.2-1.1-.7-2.4-1.4-3.9-1.5-3.1-4.1-6.7-8.5-9.2m-6.5-4c-14.2-12.4-12-30.5-9.5-34.3 5.8-8.9 27.3-14.5 33.9-14.4 6.9 0 11.4 10.1 13.6 18.1.1.4.3 1 .5 1.7.6 2.1 1.3 4.8 1.4 5.1 2.2 3.7 4.2 8.1 3.6 16.8-.4 5.7-1.1 10.2-7.1 14.6 0 0-1.2 2.5-2 4.9-.4 1.3-.7 2.5-.7 3.3" class="cls-5"/><path d="M152.4 75.7c.6 1.6 1.6 2.6 2.2 2.4s.7-1.7 0-3.2c-.6-1.5-1.6-2.6-2.2-2.4s-.6 1.7 0 3.2M134.5 81c.7 1.7 1.8 2.8 2.6 2.6.7-.3.8-1.9.1-3.6s-1.8-2.8-2.6-2.5c-.7.3-.8 1.9-.1 3.6Z" class="cls-1"/><path d="M118.6 95.4c.6.9 1.2 1.7 1.9 2.4.6.7 1.3 1.3 2.1 1.7.8.3 1.6.4 2.3 0h.2c.7-.5 1.1-1.6.6-2.5" class="cls-5"/><path d="M121.1 89.1s0 0 0 0c-.7-.5-1.6-.7-2.4-.6s-1.6.7-1.9 1.6c-.4 1.1 0 2.2.6 3.3l1.2 2.1m26.5-7.9c.7-1.4 2.1-3.3 3.6-3.8 1.5-.4 3.6-.5 4.2 1.4" class="cls-1"/><path d="M135.6 71.7c-2.9.8-5.8 2.3-6.9 4.1-.4 0-1.6-1.2-1.2-1.6 1.4-1.8 4-4.7 6.5-5 .4 0 1.8 1.4 1.6 2.5Z" class="cls-5"/><path d="m126.7 113.9-3.1 1-2.8.9-3.1 1c-3.5.4-4.9 5.3-5.9 8.6l-2 10.3-1.3 6.4c.6.7 1.2 1.3 1.7 1.8 1.6 1.5 2.7 2.2 4.3 3.2 1 .6 2.1 1.3 3.4 1.6 1.4.3 3.1.2 5.3-.9 1.1-1.1 1.3-2 1.5-4.1.1-1.4.2-3.2.5-6 0-.7.2-1.4.2-2.2v-.6m35-21.8c3 .4 5 .8 6.6 2.3.3.3.6.6.9 1 .4.5.7 1.2 1.2 2 1.7 3.3 3.8 8.9 5.7 14.5.5 1.6 1.1 3.2 1.5 4.8.6 1.8 1.1 3.6 1.5 5.1 0 .4.2.7.3 1.1" class="cls-1"/><path d="M122.6 149.7c.3-1 .5-1.7.6-1.9m-13-3.8c0 .4-.4 1.7-.7 3.3m8.2-30.4c3.9 1.2 5.2 3.2 6.1 5.9 1 3.3 2.2 8 1.8 12.1m46.8 25.5c2.1.6 5.3-.4 7.1-1.5.8-.5 1.5-.8 2.2-1.1m2.8-11.4v-.4c0-.6-.2-1-.5-1.4-1.7-.8-3.9-1.1-5.9-.8-1.6.2-3 .8-4 1.9-2.3 2.4-3.3 5-3.7 7.6-.2 1.4-.8 5.1.9 6.6.2.2.5.4.8.5" class="cls-1"/><path d="M172.4 160.4c-.1 0-.2 0-.3-.1-2.1-.7-2.9-.6-3.7-2.4m-.1-12c3.6 0 5.6-1.1 9.5-3.2" class="cls-1"/><path d="M189.1 159h.1m-4.6-10.7v-1.9c.1-.7.5-1.3 1.4-2 1.5-1.1 3.2-1.6 5-1 3.1-2.6 7.4-3.7 11.3-3 .2 0 .4 0 .5.3.2.3-.2.8-.5 1-1.6 1.1-3.1 2.2-4.7 3.3-.6.4-1.3.9-1.7 1.6s-.6 1.5-.2 2.2c.6 1 2 1 3.2.9m-7.4 3c.1.6.9.8 1.5.5s.9-.7 1.4-1.1c.4-.4 1.1-.7 1.6-.5.2 0 .4.3.6.5.3.4.4 1 .4 1.5 0 .8.1 1.5 0 2.3v.1c-.2.8-.5 1.5-1.2 2s-1.6.5-2.4.3c-.7-.2-1.4-.6-2.1-1h-.2m-6.6-10.3c-1.4.2-3 2-3.5 3.7-.6 1.8-.3 5.3.4 6.5.1.2.3.4.4.6.6.8 1.6 1.4 2.6 1.5h.2" class="cls-5"/><path d="M196.6 152c.5-1 1.3-1.8 2.2-2.3.3-.1.5-.2.8-.3.4-.1.9-.2 1.3-.1.4 0 .9.4 1 .8.3.6 0 1.2-.2 1.8-.4 1-.8 1.9-1.1 2.9-.1.3-.2.6-.5.8-.4.4-1 .5-1.6.4-.5 0-1.1-.2-1.7-.1m-11.3.3c-.5.4-.7 1.1-.9 1.7-.1.5-.2 1-.3 1.4 0 .4-.1.8-.1 1.2 0 .6 0 1.2.4 1.6.4.5 1.2.6 1.9.7.7 0 1.5 0 2.1-.3.4-.3.6-.8.7-1.3s0-1.3-.2-2.2c-.5-2.1-1.9-4.4-3.6-2.8Zm3.7 2.8c.9-.3 1.7-.9 2.1-1.7v-.1m-70.6 14.5.1.1m-14.6-10.1c-.9.4-1.8 1-2.6 1.6-.9.7-1.7 1.5-2.5 2.4-.3.3-.6.7-.8 1.1s0 1 .3 1.3c.4.4 1.1.2 1.7 0 1.2-.4 2.3-.7 3.5-1 .4-.1.8-.2 1.2-.4.6.5.9 1.3 1 2.1v2.2c0 1.5.2 3.4 1.6 4 1 .4 2.1 0 3.1-.8.3-.2.6-.5.8-.7.9-1 1.7-2 2.5-3.1.3-.5.7-1 .8-1.6v-.1c0-.4 0-.9-.2-1.2 0-.2-.2-.4-.4-.5-.4-.3-.9-.3-1.4-.2-.2 0-.4 0-.6.2-.2 0-.4.2-.5.3-.5.3-1 .6-1.5 1s-1 .8-1.4 1.3m9.9-1.9c-.2-.5-.5-1.1-.7-1.6" class="cls-5"/><path d="M112.7 174.1v.2c.4.9 1.4 1.5 2.5 1.6 1.1 0 2.1-.5 2.9-1.1 1-.8 1.9-1.8 2.5-3 .3-.6.5-1.3.6-2 0-.7 0-1.4-.4-1.9l-.2-.2c-.6-.4-1.4-.4-2.1-.2-.7.3-1.3.8-1.8 1.4l-.1.1" class="cls-5"/><path d="M117.9 174.5s.2.2.3.2c1.7 1.3 4.2 1.5 6 .3 1.1-.8 1.9-2 2-3.3v-.5c0-.6-.2-1.1-.6-1.6-.4-.4-1-.7-1.5-.5s-.8.6-1.1 1.1c-.2.5-.4 1-.8 1.3-.4.4-1 .5-1.4.2" class="cls-5"/><path d="M154.6 67.2c-2.7-.2-5.6.2-7.1 1.4-1.2 0-1.7-2.7-1.3-3 1.8-1.1 5.6-.3 7.8.2.4 0 .6.6.5 1.3Z" class="cls-1"/><path d="M141.5 92.4c3.6.9 7.6.5 10.9-1.2" style="fill:none;stroke-linecap:round;stroke:#000;stroke-miterlimit:10"/><path d="M169.8 174.1h.1m-19.1-54.7.6.1m-7.1 10.3.1-.3m-17.7 28.6h.1m25.5-47.1c0 .5-.1 1.1-.2 1.6q0 0 0 0c-.3 2.4-.8 4.6-1.3 6.6-.7 2.7-1.4 4.9-1.8 5.8h0c-.1.3-.2.5-.2.5s-.2-.1-.4-.3c-.7-.6-2.3-1.8-4.1-3.2-2.8-2.3-6.3-5.4-8.1-7.5-.7-.9-1.2-1.6-1.2-2.1m31.5 15.9c0 1.1.2 2.2.3 3.3v.8c.2 2.8.4 5.5.5 8.4 0 1.1.1 2.1.2 3.2 0 .6 0 1.3.1 2 0 1.1.1 2.3.2 3.5 0 1.5.2 3.2.3 5 0 1.1.2 2.3.3 3.5 0 .5 0 1.1.1 1.7.2 1.8.3 3.8.5 5.7.1 1.5.3 2.9.4 4.4 0 .7.1 1.4.2 2.1 0 .8.2 1.6.2 2.4h0c.1 1.3.3 2.7.4 3.9 0 .8.2 1.6.3 2.3.3 2.5.6 4.8.9 6.7q-.6 0-1.5.3c-3.3.9-9.4 3.3-10.4 2.9-1.1-.5-4.4-5.6-4.9-5.6 0 0-2.7 5.1-5 5.9s-5.3.5-7.7.4c-5.5-.3-11.2-.4-16.1-3.1-.3-.2-.6-.4-1-.6m.4-50.4v.8c.2 2.5.4 8.9.6 10.4l.3 2.4c.3 2.3.6 4.6.6 7v.7h0c0 1.5 0 3.7-.1 6.2 0 1.6 0 3.3-.2 5v4.2c-.2 3.3-.4 6.3-.8 8.1" class="cls-1"/><path d="M125.1 187.3c0-.9.4-4.8.5-5.7m22.8-56.2c-1.4 1.4-2.6 3-3.3 4.9-.3-.1-.5-.2-.8-.4h0c-2-1-3.9-2.1-5.8-3.4l-1.2-.9c-.6-.4-1.1-.9-1.7-1.3-3.1-2.5-5.8-5.5-8-8.7-.2-.2-.3-.4-.4-.6s-.4-.6-.5-1c-.2-.9.7-1.7 1.6-2.2 2.2-1 3.2-1.8 5.3-3m15.2 16.9c1.8 7.9 3.1 18.9 4 29.3.1 1.6.3 3.3.4 4.9.2 1.9.3 3.8.4 5.6.1 1.7.2 3.3.3 4.9.1 1.9.2 3.6.3 5.2.3 5.6.5 9.2.5 9.2m-5.7-59.6c1.4 1.2 3.4 2.1 4.7 3.3l.2.2q.3.3.6.3c.4 0 .7-.3.9-.6.8-1 1.4-2.3 1.8-3.6.2-.7.4-1.3.5-2l.6-3c.3-1.5.6-2.9 1.2-4.1.3-.7.6-1.6.7-2.4 0-.7 0-1.4-.6-1.9-.4-.4-.9-.6-1.4-.9-2.8-1.3-2.4-1.1-5.2-2.4m-27.5 27.4c7.4.8 13.3 1 20.7.3-7.2 5.5-11.8 10.2-19.7 14.6m40.3-18.8c-4.2 2.1-8.8 3.4-13.5 3.8 4.7 2.9 9.4 5.7 14.1 8.6h0" class="cls-1"/><path d="M126.8 158.1c3.8-2.4 14-9.1 15.1-9.1s8.4 4 11 6c0 0 .1 0 .2.1 2-2.3 8.1-6 8.6-6s4.5 3.4 6.5 5.4" class="cls-1"/><path d="M126.7 164.3c3.3-2 15.8-10.5 15.8-10.5 1 .3 10.7 6 10.7 6 1.5-1 8.6-5.3 8.6-5.3s5.2 4.3 6.7 5q0 0 0 0" class="cls-1"/><path d="M126.5 169.3c4.6-3.2 11.5-7.6 16.5-10 3.6 1.8 7 4.3 10.6 6.1h.2c2.5-1.2 6.5-4.4 8.7-6.1 2.1 1.5 4.4 4.4 6.5 5.9h0" class="cls-1"/><path d="M126.7 173.5c3.3-1.7 15.2-7.9 16.4-8.4.9-.4 10.1 5.1 10.9 5.3.8.1 6.9-5 9-5.9 2 1.4 4.5 3.8 6.5 5.2q0 0 0 0" class="cls-1"/><path d="M138 171c.5-.4 1.9-1.5 2.5-1.4.6 0 1.3.7 1.1 1.3-.1.3-.4.6-.7.8-1.3 1-2.7 1.9-4 2.9-1.7 1.2-4.6 3.1-5.2 3.5-.9.6-2.3-.4-1.5-1.2 1.3-1.3 5.7-4.4 7.8-5.8Zm-1.2 6.6c.5-.4 1.9-1.5 2.5-1.4.6 0 1.3.7 1.1 1.3 0 .4-.4.6-.7.8-1.3 1-2.7 1.9-4 2.9-1.7 1.2-4.6 3.1-5.2 3.5-.9.6-2.4-.4-1.5-1.2 1.3-1.3 5.7-4.4 7.8-5.8Zm1.3 5.3c.5-.3 1.7-1.3 2.3-1.3s1.2.6 1 1.2c0 .3-.4.5-.6.7-1.2.9-2.4 1.7-3.6 2.6-1.5 1.1-4.1 2.8-4.7 3.2-.8.5-2.1-.4-1.3-1.1 1.2-1.2 5.1-4 6.9-5.3m14.2-9.7c.4.3 1.7.9 1.8 1.4 0 .5-.4 1.1-1 1.1q-.45 0-.9-.3c-1.1-.7-2.3-1.3-3.4-2-1.4-.8-3.7-2.3-4.2-2.7-.7-.5 0-1.7.9-1.4 1.5.6 5.2 2.7 6.9 3.8Zm.3 5.9c.4.3 1.7.9 1.8 1.4s-.4 1.1-1 1.1q-.45 0-.9-.3c-1.1-.7-2.2-1.3-3.4-2-1.4-.8-3.6-2.3-4.1-2.7-.7-.5 0-1.7.9-1.3 1.4.6 5.1 2.7 6.7 3.8m-.5 5.6c.4.2 1.6.8 1.7 1.2 0 .4-.4 1-1 1-.3 0-.6-.1-.9-.2-1.1-.6-2.2-1.2-3.3-1.7-1.4-.7-3.5-2-4-2.3-.7-.4 0-1.6.9-1.3 1.4.5 5 2.4 6.5 3.3Zm3.5-9.3c0-.2 0-.3.2-.5.8-1.2 3.5-4 4.8-5.2.3-.3 1.2-1.3 1.6-1.3s.7.5.7 1v.2c0 .3-.3.5-.4.7-.8.9-1.6 1.7-2.4 2.6-1 1.1-2.8 2.8-3.2 3.1-.5.4-1.1 0-1.1-.7Zm4.3.4c.3-.3 1.2-1.3 1.6-1.3s.8.6.7 1.2c0 .3-.3.5-.4.7-.8.9-1.6 1.7-2.4 2.6-1 1.1-2.8 2.8-3.2 3.1-.6.5-1.5-.4-.9-1.2.8-1.2 3.5-4 4.8-5.2Zm.9 4.9c.3-.3 1-1.2 1.4-1.2s.7.6.6 1.1c0 .3-.2.5-.4.7-.7.8-1.5 1.6-2.2 2.4-.9 1-2.5 2.5-2.9 2.9-.5.5-1.3-.4-.8-1.1.7-1.1 3.1-3.7 4.2-4.8Zm9-6.6c-.7-.6-1.5-1.2-2.2-1.8-.9-.8-2.4-2.2-2.7-2.5-.1-.1-.2-.3-.2-.5 0-.5.4-1 .8-.7.9.5 3.1 2.2 4.2 3.2h0m.8 8.6c-.2 0-.4-.1-.5-.3-.7-.6-1.4-1.3-2.1-1.9-.9-.8-2.3-2.2-2.6-2.5-.4-.5 0-1.6.5-1.2.9.6 3.2 2.6 4.2 3.6m0 5.2c.3.2 1 .8 1.1 1.1 0 .4-.2.9-.6 1-.2 0-.4-.1-.5-.2-.7-.5-1.4-1.1-2.1-1.7-.9-.7-2.2-1.9-2.5-2.2-.4-.4 0-1.5.5-1.2.9.5 3.1 2.3 4.1 3.2m-23.6-42.1c-.5 0-1.1.2-1.2.7 0 .4.3.8.7 1 .8.5 1.7.8 2.6.8 1 0 2.2-.8 1.2-1.8-.6-.6-2.4-.8-3.2-.8Zm-.8 4c-.5-.1-1.1-.2-1.4.3-.2.3-.2.7 0 1s.4.5.7.7c1 .7 2.2 1.1 3.4 1.4.4.1.9.2 1.2-.1 1.3-1.5-3.1-3.1-3.8-3.3Zm8.3-2.2c.3.3.7.3 1.1.2.6-.1 1.2-.4 1.7-.8 1.4-1 .3-2-1-1.8-.8 0-2.8 1.4-1.8 2.4m.9 2.5c-.5.4-1 .9-.8 1.5.2.5.9.7 1.5.6 1.6-.1 3.1-1.1 4.4-2 .3-.2.6-.5.8-.8 1.1-1.7-1.2-1.6-2.1-1.3-1.4.4-2.6 1.1-3.8 1.9Zm-10.6-23.3c.3 2.4.3 4.9.3 7.3h0m-.3-7.3s0 0 0 0m-16.3-6.9c2.9-.3 5.4-.3 8.3-.7-.3 3.2-.2 6.2-.5 9.4h0l8.4-1.8q0 0 0 0m10.3 6.3s0 0 0 0q0 0 0 0c-1.5-2.8-2.5-5.8-3-8.9 2.5.5 4.5.5 7.1.1-1.9-2.7-3.7-4.9-6.4-6.9q0 0 0 0h0c2.7-.8 4.9-1.2 7.7-1.6" class="cls-1"/><path d="M154.2 128.1c0 .1.1.3.2.4m-44.6 7.3c.4 1.8.8 1.5 1.9 3 .9 1.2 2.1 2.1 3.5 2.9 2.9 1.6 6.3 2.3 9.6 2.1h.2m51.4-6.3s0 0 0 0c-3.3 3-4.5 2.7-8.9 3.2q0 0 0 0m-52.7-10.4c-.8 2-.9 4.2-.2 6.2 1.9-1.1 3.7-2.6 4.6-4.6.4-1 .7-2 .7-3.1 0-.6-.2-2.8-.9-3.1-.6-.2-2 1.3-2.4 1.7-.8.8-1.4 1.8-1.8 2.8Zm2.5 8.4c1.2.7 2.7.9 4.1.4 1.2-.4 4-2.7 1.3-3.1-1.9-.3-4.2 1.3-5.4 2.7m50.4-6.4c0 .2.2.4.6.7.8.5 5.9 1.9 5.2.2 0-.1 0-.2-.2-.3-.4-.7-2.8-1.3-3.6-1.3-.7 0-2 .2-2 .8Zm-44.1-17.5s0 0 0 0c3.2 4 6.5 9.3 8.5 14.1 1.9-.7 3.7-1.9 5.1-3.4m20.7-2.8c1.4.6 2.7 1.3 3.8 2.3 1.6-3.1 3.5-6.7 5.3-9.6q0 0 0 0" class="cls-1"/><path d="M120.9 116.2c4.5 5.3 8.3 11.2 11.4 17.5 1.8-2.6 3.9-5.1 6.2-7.2h0m18.8-1.8c2.2 1.2 4.1 2.4 5.9 4.2 1.6-3.7 3.7-7 5.7-10.6" class="cls-1"/><path d="m157 66.4.6 1.2" class="cls-5"/><path d="M121 89s0 0 0 0c1 1.4 2.6 3 4.1 2.3.9-.4 1.3-1.5 1.3-2.4 0-1-.5-1.9-.9-2.7-1.4-2.9-2.8-5.9-4.2-8.8-1-2.1-2-4.3-1.8-6.7.2-2.2 1.5-4.1 3.1-5.5s3.6-2.4 5.6-3.2c4.9-2.1 13.3-5.9 18.7-5.5 5 .3 7.6 4.8 10.1 10" class="cls-1"/><path d="m136.5 27.3 11.9 11.4 11.4-11.9-11.9-11.4zm-15.8 138.8 1.4.3 3-16.2-2.5-.5-4.7-.8-8.4-1.6-.6-.1-2.5 13.7-.2.8-.3 1.7.9.2 3.1.5 5.1 1 2.5.4" class="cls-3"/><path d="m107.3 163.6 2.6.5 5.1 1 2.5.4.2.1 1.2.2 1.1.2.7.1m76-46.8-14.7 7.3-7.3-14.8 14.8-7.2z" class="cls-3"/><path d="M170.1 187.4c.9 5.7 6.4 47.7 6.4 53.9-.5.2-1 .3-1.6.5-4.5 1.4-10.2 2.7-17.1 3.4-3.3.3-7 .5-10.8.5s-8-.3-13.1-1c-6.5-.8-13.1-2-16.1-3.4-1-.5-1.6-1-1.6-1.5" class="cls-1"/><path d="M116.2 239.9s8.5-44.5 9.8-52.1q0 0 0 0m48.8 53.5v.6c.5 6.2.5 11.3.5 13m-17.6-10v.4c3.1 12.4 8.5 29.6 9.2 37v.3M134 244.5v.4c-1.4 5-2.8 9.7-3.7 12.9-1.1 4.1-3 10.8-3.7 22.6v1m-8.7-40.5v.6c-.8 10.1-.9 28.3-2.3 36.7m59.8-23.4c0 2.9.5 21.6 1.3 24.2" class="cls-1"/><path d="M189.4 294.7c-4.3.5-9-.2-12.9-1.8-2.9-1.2-5.4-2.9-7.2-5.1-1.1-1.4-1.8-3-2.1-4.7 0-.3 0-.6-.1-.9v-.4m9.6-2.8c1.8.8 4 1.8 6.3 3 1.8.9 3.8 1.9 5.5 2.8s3.3 1.7 4.6 2.4c1.4.8 2.8 2.4 2.9 4 .1 2-2 2.6-4.1 3.1q0 0 0 0c-.8.2-1.6.3-2.5.4m-63.2-15c.1.2.2.4.3.7.1.4.2.9.1 1.3 0 .7-.3 1.4-.6 2-.4.8-1 1.4-1.7 2.1h0c-.4.4-.8.7-1.2 1-2.2 1.7-4.2 3-6.4 4-3 1.5-6.2 2.5-10.1 3.6q-1.35.45-2.7.6c-.6 0-1.2.1-1.8 0-.8 0-1.5-.3-2.2-.7s-1.2-.9-1.6-1.5c-.6-1.2-.4-2.6.2-3.7 0-.2.2-.4.3-.5.9-1.3 2.2-2.2 3.5-3h.1c1.7-1.1 3.3-2.1 5-3.1 2.5-1.5 5.1-2.9 7.9-4.3" class="cls-4"/><path d="M107.7 282.3v.1c-.4.8-.9 1.6-.9 2.5s.3 2 1.1 2.4c.7.4 1.6.3 2.4.2 4.7-.5 9.5-1.1 14.1-1.9-.2 0-.5 0-.7.2m-21-.8c0 .2-.1.3-.1.5-.1.9.5 1.9.5 2.9 0 1.1-.6 2.2-1.3 3.1s-1.5 1.8-1.9 2.8m3.9 1s0-.2.1-.2c1-2 3.2-3.3 5.4-3.9 2.4-.6 4.8-.6 7.3-.5m51.9-3.1c.2 0 .5.2.8.2 3.5 1 7.3 1.1 11 1.2 1.5 0 3.2 0 4.1-1.1.6-.8.6-1.9.2-2.8s-.9-2.3-1.6-3m-7 10.9c.1 0 .3 0 .4-.1 4-1.3 9.3-.2 12.9 1.8h0m-.9-9.7c-.6.2-.8.9-.8 1.5s.4 1.1.7 1.6l3.5 5.9" class="cls-4"/><path d="M98.5 289.1c-2.2 2.3-1.7 6.4 1 8.1 2 1.3 4.6 1.2 7 1 5.2-.4 10.6-1.4 14.8-4.3 4-2.8 6.6-7.8 5.3-12.2 0-.2-.1-.4-.2-.6q0 0 0 0m40.7 2c-1.2 1.9-.6 4.5.8 6.3s3.5 3 5.6 4.1c4.7 2.4 9.8 4.2 15.2 4.5 2.3.2 4.7 0 6.6-1.3 1.8-1.3 2.5-4.2.8-5.6" class="cls-4"/></svg>')}`;
export default image;
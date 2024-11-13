/* eslint-disable */
/* @formatter:off */

import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="Layer_5" width="300" height="300" viewBox="0 0 300 300"><defs><style>.cls-1{fill:#e1c0a5}.cls-1,.cls-2,.cls-4,.cls-5,.cls-7{stroke:#000;stroke-linecap:round;stroke-linejoin:round}.cls-2{fill:#967246}.cls-4{fill:#b3282e}.cls-5{fill:#ffd204}.cls-7{fill:none}.cls-10,.cls-11{fill:#3246ff;stroke:#fff;stroke-miterlimit:10;stroke-width:4.2px}.cls-11{fill:#4d0099}</style></defs><path d="M41.8 183.7h70.4v76.5H41.8zm70.5 0h76.5v76.5h-76.5z" class="cls-10"/><path d="M112.3 114.3h76.5v69.4h-76.5z" class="cls-11"/><path d="M188.7 183.7h69.4v76.5h-69.4zm0-69.4h69.4v69.4h-69.4zm0-74.5h69.4v74.5h-69.4z" class="cls-10"/><path d="M112.3 39.8h76.5v74.5h-76.5zm-70.5 74.5h70.4v69.4H41.8zm0-74.5h70.4v74.5H41.8z" class="cls-11"/><path d="M278.5 84.4s0 0 0 0c-5.2-1.3-8.8-1.8-14.6-3.3q1.8-2.4 3-5.1c4-8.6 4.2-19.1 1-29.6v-.7c-3.5-.2-7.8-.2-12.5.2-1-3.7-2.5-8.3-.8-11.7-1.8 3.5-3.1 7.2-3.2 11.5-6.4.2-14 0-20.7 2-1.3.4-2.5.8-3.7 1.4-2.2 1-4.2 2.3-5.8 4.1 2.7-10.1 5.3-20.5 14.2-26.5 3.2-2.1 8.6-6.3 12.7-6.7 5.2-.5 4.4 4.4 12.2 1.4 8.2-.2 11.7 3.8 13.7 5.6 4.9 4.5 10.8 18.8 12 29.3 1.4 12.8-3.1 17.6-7.4 28.1Z" class="cls-2"/><path d="M281.6 204.7c-.8.8-2.8 1.9-4.9 2.9-2.4 1.1-4.9 2.1-6.2 2.4-4.3 1.1-7.3.8-10.8.1-.5 0-1.1-.2-1.7-.3-1.1-.2-2.2-.5-3.5-.7 0-.7-.7-11.8-1.7-20.3h-.1c-.5 6.4-2.2 12.8-3.5 19.1-.7.2-1.3.5-1.9.7-7.3 2.3-13 2-18 .4-2.3-.7-4.3-1.7-6.3-2.9 1.1-9.4 5.7-42.2 6.4-45.6 2.4 1.4 4.5 1.2 6.6 1.6 1.6 1.5 3.3 2.9 5.2 4.2h0c0 .9.1 1.7.4 2.5.9 2.3 3.4 3.7 5.8 3.5 2.2-.2 4.1-1 5.6-2.6 2.4-1.7 5.5-3.8 8.7-6 7.7 0 8.1-.5 12.6-2.1h.4c1.6 9.6 6.8 43 6.8 43Z" style="stroke:#000;stroke-linecap:round;stroke-linejoin:round;fill:#626365"/><path d="M286.1 125c0 1-.7 1.2-1.9 1.2-2.9 0-8.4-2.1-11.1-1.3-.5 6.4-.9 7.8-1.9 13.1-.3 1.6-.6 3.3-1.4 4.7-1 1.9-1.2 2.1-2.9 3.5-4.6 3.9-8.6 11.3-13 15.4-2.6-.7-4.3-3.9-7-4.1-1.3-.1-2.5.5-3.4 1.5-4-6.4-7.5-13.1-12-19.2.5-3.1 0-8.5-.2-11.6-3.1-.7-6-1.7-8.2-2.8-1.5-.8-2.7-1.7-3.4-2.7 1-2.8 4.5-25.3 7.4-28.7 2.3-2.7 6.8-4.1 16-6.8h.1c-.2 2.1 1 5.6 2.7 7.2 4.7 4.3 16.9 3 19.2-2.6.4-1 .7-2.8.4-4.3h0c1.4.4 11.5 3.6 12.9 4.1 6.2 2.6 8.8 21.4 7.6 33.3Z" class="cls-5"/><path d="M246.4 213.4c1.3 7.4 0 13.8-.7 15.9-3.7 13-5.5 14.9-6.2 28.2v1.6c-.2.7-1.4 2.7-2.5 2.8s-1.8-1.7-3.1-1.3c-.2 0-.8.3-1.5.7h0s1.9-4.7-2.7-5.5c-.5 0-.9-.2-1.4 0 .6-3.5.7-22.8.4-26.6-.3-5.1-.8-8.4 1-16.7-.2-1-.3-2.3-.3-3.6 4.9 1.6 10.7 1.9 18-.4-.2 1.7-.5 3.3-1 4.8Z" class="cls-1"/><path d="M266.7 260.2v.2" class="cls-7"/><path d="M278.5 258.3c-1.4-1.5-4.1-1.3-4.1-1.3-6.9 0-3.3 5.9-3.3 5.9-.4.8-4.1.9-4.3-2.7.6-8.5-.9-15.6-1.9-20.3-1.7-7.7-3.6-9.5-4.2-17.3-.2-3.4 0-6.2-.4-9.5-.1-1.2-.3-2.1-.5-3 3.5.7 6.5.9 10.8-.1 1.3-.3 3.8-1.3 6.2-2.4 0 3-.2 5.8.1 7.7.6 3.3 1.8 5.7 2.2 9.4.9 8.1-2.1 18.4-.6 33.6" class="cls-1"/><path d="M287.3 272.1c-.6-.8-3.3-3.9-8.8-2.9-6.3 1.2-7 7.3-7 7.3-2.2-2.5-3.9-5.8-5.3-9.2 0 0 0-.2-.1-.3 0-.4-.1-.7-.2-1.1-1.3-7.2.8-6.7.8-6.7v1c.2 3.6 3.9 3.5 4.3 2.7 0 0-3.6-5.9 3.3-5.9 0 0 2.7-.2 4.1 1.3.7.8 1.1 1.9.8 3.7h0c.7.4 1.3 1.7 2 3 0 .2.2.3.4.5 2.6 2.3 4.5 4.6 5.7 6.6" class="cls-4"/><path d="M283.3 280c-5.3 1.3-9-.4-11.8-3.5 0 0 .7-6.1 7-7.3 5.6-1 8.2 2.1 8.8 2.9v.1q0 0 0 0c.7 1.1 1.2 2 1.4 2.6.1.3.2.5.2.7 0 1.4-1.2 3.2-5.7 4.4Z" class="cls-4"/><path d="M279.2 262.1c0 .4-.2.8-.3 1.3" class="cls-7"/><path d="M289.7 278.2c-.3 2.4-2 3.2-6.3 4.5-5.5 1.6-9.9-1.5-12.3-4.3-2.6-3.1-3.8-6.1-3.9-6.7v-.2l-1.3-2.9v-.3c-.1-.4-.3-1.7.3-2.4 0 .3.1.7.2 1.1 0 .1 0 .2.1.3 1.4 3.3 3 6.7 5.3 9.2 2.8 3.1 6.5 4.8 11.8 3.5 4.5-1.1 5.8-3 5.7-4.4 0-.2 0-.4-.2-.7l.4.4c.3.3.4 2.5.4 2.9Z" class="cls-4"/><path d="M266 265.9h-.1" class="cls-7"/><path d="M241.1 259.7c-.3 2.1-.5 6.6-.5 8.4v.4c0 .3-.3.6-.5.9-1.1.9-3.1 2.1-8 2h-.6c-2.5.8-5.3 3-9.3 4.3h0c.6-4.4-.9-8.3-4-9.6-2.2-.8-3.9-1-5.3-.7l13.6-5.6c.6-2.6 1.2-3.5 1.9-3.8h0c.4-.2.9-.1 1.4 0 4.5.9 2.7 5.5 2.7 5.5h0c.7-.4 1.3-.6 1.5-.7 1.3-.4 2.1 1.4 3.1 1.3s2.3-2.1 2.5-2.8v-1.6c.4 0 1.9 0 1.6 2.2Z" class="cls-4"/><path d="M222.2 275.6c-2.7.9-6 1.3-10.1.6h-.4c-2-.8-2.7-2-3-2.5v-.6c0-1.3.1-6.7 4.3-7.7h0c1.3-.3 3-.2 5.3.7 3.1 1.3 4.6 5.2 4 9.6Z" class="cls-4"/><path d="M239.5 257.5s0 0 0 0m-7.1 3.9c-.7.4-1.7.9-2.7 1.4" class="cls-7"/><path d="M240.6 271.3c-1.5 2.3-8.6 2.3-9.3 2.4s-3.7 2.1-6 2.9c-2.3.9-7.4 1.9-11.9 2-3.3 0-4.8-1.4-5.4-2.2q-.3-.45-.3-.9v-.8c0-.5.3-1.1.8-1.4h0v.3c.2.5 1 1.7 3 2.5h.4c4.1.7 7.4.2 10.1-.6 4-1.3 6.9-3.4 9.3-4.3h.6c4.9.2 6.9-1.1 8-2 .3-.2.5-.5.5-.9h0s1.5.5 0 2.8Z" class="cls-4"/><path d="M231.5 128.3h-.1m40.2-17.8c.6 3.6.6 8 1.2 14.5.1 0 .2 0 .3-.1" class="cls-7"/><path d="M284.2 126.2c-1.4 10.8-1.1 10.5-4.7 20.4-.8 2.2-2.5 4.6-4.8 6.9-3.5 3.6-8.3 7.1-12.9 10.3-3.2 2.2-6.3 4.3-8.7 6-1.5 1.7-3.4 2.4-5.6 2.6-2.4.2-4.9-1.2-5.8-3.5-.3-.8-.4-1.6-.4-2.5h0c0-.7 0-1.3.2-2 .2-1.6.6-3.3 1.5-4.7.2-.3.4-.5.6-.7.9-1 2.1-1.6 3.4-1.5 2.7.2 4.4 3.4 7 4.1 4.4-4.2 8.3-11.6 13-15.4 1.6-1.4 1.9-1.5 2.9-3.5.8-1.5 1.1-3.1 1.4-4.7 1-5.3 1.4-6.7 1.9-13.1 2.7-.8 8.2 1.2 11.1 1.3Z" class="cls-1"/><path d="M253.1 169.8c-.2.1-.4.3-.6.4" class="cls-7"/><path d="M243.6 159c-.2.2-.4.5-.6.7-.9 1.3-1.3 3-1.5 4.7 0 .7-.2 1.3-.2 2-1.8-1.3-3.6-2.7-5.2-4.2-2.6-2.3-4.8-4.8-6.7-7.3-2.3-3.1-3.9-6.2-4.7-9.2-1.5-6-2.3-7.7-1.5-20.2 2.2 1.2 5 2.1 8.2 2.8.2 3.1.7 8.4.2 11.6 4.5 6 8 12.8 12 19.2Z" class="cls-1"/><path d="M236.1 162.2c-2.1-.4-4.2-.2-6.6-1.6-.8-.4-.3.6-.3-5.5l.3-.2c1.8 2.5 4.1 4.9 6.7 7.3Z" class="cls-5"/><path d="M231.4 128.3c0-1.1-.2-1.9-.1-2.2.2-4.1 0-8.6 0-15.6m43.4 50.6v-.3m-38.1 1.5h-.4m21.8 47.9v-.4" class="cls-7"/><path d="M274.8 161.6h-.4c-4.5 1.6-4.9 2.1-12.6 2.1 4.5-3.2 9.4-6.7 12.9-10.3h0c0 7.5-.2 5.8 0 7.4 0 .2 0 .5.1.8" class="cls-5"/><path d="M274.7 160.8v-.3m-21.8 28.3c-.3-2.6-.6-5-1-6.8m-3.5-3.2c1.9 1.8 2.5 2.2 3.5 3.3m1.5-12.8c-.1.1-.2.3-.4.4M264.6 28c5.9 4.1 7.9 11.2 8.5 18.1-1.5-.1-3.2-.3-5.2-.4" class="cls-7"/><path d="M243.6 81.3v.2c-5.2 1.5-14.7 2.6-19.5 0 3-4.8 6.1-24.8 3-32.1v-.2c1.1-.6 2.3-1 3.6-1.4.2 3.4 1.2 6.7 2 10.4 0 0-1.1 4.1 0 8.9 1 4.5 2.3 7.1 5.8 10 1.9 1.6 3.5 3.1 5.2 4.3Z" class="cls-2"/><path d="M267.9 46.4v-.7c-3.5-.2-7.8-.2-12.5.2-1-3.7-2.5-8.3-.8-11.7-1.8 3.5-3.1 7.2-3.2 11.5-6.4.2-14 0-20.7 2 .2 3.4 1.2 6.7 2 10.4 0 0-1.1 4.1 0 8.9 1 4.5 2.3 7.1 5.8 10 1.9 1.6 3.5 3.1 5.2 4.3.8.6 1.6 1 2.4 1.5 4.3 2.2 8.9 2 16.6-3.4 1.3-.9 2.8-2 4.3-3.3h0c4-8.6 4.2-19.1 1-29.6Zm-29.4 12.7c-.7 0-1.2-1.1-1.2-2.5s.5-2.5 1.2-2.5 1.2 1.1 1.2 2.5-.6 2.5-1.2 2.5m16.1 15.7c-1.8 1.1-5.3 1.5-7.1 1.2-2.9-.4-4.2-1.6-5.5-3.9h0c5.1 1.7 16.1-.9 17.1-1.9-2.1 3-2.8 3.4-4.5 4.5Zm4.4-15.1c-.8 0-1.5-1.3-1.5-2.8s.7-2.8 1.5-2.8 1.5 1.3 1.5 2.8-.7 2.8-1.5 2.8" class="cls-1"/><path d="M259.1 70.3c-2.1 3-2.8 3.4-4.5 4.5-1.8 1.1-5.3 1.5-7.1 1.2-2.9-.4-4.2-1.6-5.5-3.9h0c5.1 1.7 16.1-.9 17.1-1.9Z" style="stroke:#000;stroke-linecap:round;stroke-linejoin:round;fill:#fff"/><path d="M236.5 51.2c.9-2.1 2.7-1.9 3.6-.7m17.7.2c1.7-1.7 4-.9 4.4.5m.4 28.1v-.2m.5 7c0-.4 0-.8-.1-1.2m15.6-.5" class="cls-7"/><path d="M278.5 84.4c-.9 0-11.2-.7-15.8-2.1 0-.9-.1-1.9-.1-3 1.3-.9 2.8-2 4.3-3.3h0q-1.2 2.7-3 5.1c5.7 1.5 9.4 2 14.6 3.3" class="cls-2"/><path d="M262.7 82.3h-.1" class="cls-7"/><path d="M239.8 56.6c0 1.4-.6 2.5-1.2 2.5s-1.2-1.1-1.2-2.5.5-2.5 1.2-2.5 1.2 1.1 1.2 2.5m20.8.2c0 1.6-.7 2.8-1.5 2.8s-1.5-1.3-1.5-2.8.7-2.8 1.5-2.8 1.5 1.3 1.5 2.8" style="stroke:#000;stroke-linecap:round;stroke-linejoin:round"/><path d="M245.8 62.8c0 1.1-.8 1.4-1.9 1.2 0 .9.4 3.5 1.8 3.9m-3.7 4.2c-.1 0-.3 0-.4-.2" class="cls-7"/><path d="M262.7 84.9c0 .8.2 1.7.3 2.6.2 3-3.9 4.9-8 5.2-4.7.4-8.4-1.4-9.3-6.5h-.1v-.4l.5-3.1c4.3 2.2 8.9 2 16.6-3.4 0 1.1 0 2.1.1 3 0 .9.2 1.8.3 2.6h-.3Z" class="cls-1"/><path d="m245.5 86.2-.1.4m.6-4v.1m16.7 2.2c-.1-1.3-.2-2.7-.2-4.9m-16.7 6s-.2 0-.2-.1" class="cls-7"/><path d="M265.2 91.8c-2.3 5.6-14.4 6.9-19.2 2.6-1.7-1.6-2.9-5-2.7-7.2 0-1.4.8-2.2 2.2-1.4v.4q0 0 0 0c1 5.1 4.6 6.8 9.3 6.5 4.1-.3 8.3-2.2 8-5.2 0-1-.2-1.8-.3-2.6h.3c1.6 0 2.4 1.2 2.7 2.6.3 1.5 0 3.3-.4 4.3Z" class="cls-5"/><path d="m239.1 129.6 22.9-16.5-.4 21.1-10.5-2.4 6.3-10.7-9.1 10.5m3.2 2 4 1-3.1 4.8" style="fill:#fff;stroke-width:0"/></svg>')}`;
export default image;
/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300"><defs><style>.cls-1{stroke-linecap:round;stroke-linejoin:round}.cls-1,.cls-3{fill:none;stroke:#000}.cls-10,.cls-11,.cls-12,.cls-4,.cls-5,.cls-6,.cls-7,.cls-8,.cls-9{stroke-width:0}.cls-13{fill:#3246ff}.cls-13,.cls-14{stroke:#fff;stroke-width:4.2px}.cls-13,.cls-14,.cls-3{stroke-miterlimit:10}.cls-14{fill:#4d0099}.cls-5{fill:#271c0a}.cls-6{fill:#25190a}.cls-7{fill:#cb302e}.cls-8{fill:#dca16f}.cls-9{fill:#c00702}.cls-10{fill:#cdb65a}.cls-11{fill:#332921}.cls-12{fill:#fff}</style></defs><g id="Layer_5"><path d="M1.8 1h298.4v289H1.8z" style="fill:none;stroke-width:0"/><path d="M41.8 183.7h70.4v76.5H41.8zm70.5 0h76.5v76.5h-76.5z" class="cls-13"/><path d="M112.3 114.3h76.5v69.4h-76.5z" class="cls-14"/><path d="M188.7 183.7h69.4v76.5h-69.4zm0-69.4h69.4v69.4h-69.4zm0-74.5h69.4v74.5h-69.4z" class="cls-13"/><path d="M112.3 39.8h76.5v74.5h-76.5zm-70.5 74.5h70.4v69.4H41.8zm0-74.5h70.4v74.5H41.8z" class="cls-14"/></g><g id="Layer_2"><path d="m247.1 183.8-.2 2.9c-3.9-.2-7.7-.7-11.3-1.3l.4-2.9c3.5.6 7.3 1 11.1 1.3" class="cls-6"/><path d="m250.5 183.9-.2 2.9c-1.2 0-2.3 0-3.4-.2l.2-2.9c1.1 0 2.3.1 3.4.2m.8-11.4-.2 3.1c-4.8-.1-9.6-.6-14-1.3l.4-3.3c4.4.8 9.1 1.4 13.8 1.5" class="cls-6"/><path d="m264.2 140.4.2.2c-2.2 2-4.7 3.9-7.7 6-1.6-1.7-4.5-5.2-5.8-6.9 4.4.2 8.9.5 13.4.8Z" class="cls-12"/><path d="M283.5 182.4c-1.6.7-3.4 1.3-5.3 1.8l-.5-3c1.8-.5 3.5-1.1 5.1-1.7h.2c.2 1 .4 2 .6 2.9Zm-27.3-35.5c2.9-.2 5.8-.4 8.6-.9-1.3 1.5-2.5 3.2-3.8 4.9-4.6.7-8.6 1-12.5.9h-2.4c-.8 0-1.5-.1-3-.4-1-1.7-2-3.4-3-5 1.5.2 3.2.4 4.9.5 0 0 .2.1.2.2l-.2-.2c3.5.3 7.2.3 11 .1Z" class="cls-6"/><path d="M274 125.3c-.3 1.8-.7 3.6-1 5.2-1 1.5-2 2.8-2.9 4-3.6-2.9-5.5-3.9-9.5-7.7 0 0 0-.2-.1-.2 2.1-1.4 5.9-5.2 8.7-8l.2-.2c1.5 2 2.9 4.2 4.6 6.9" class="cls-12"/><path d="M281.2 171c-5 2-10.9 3.4-17.1 4.1l-.2-2.9c6-.6 11.7-1.8 16.7-3.9h.1l.6 2.7Z" class="cls-6"/><path d="M275.6 116c-.4 2.9-1 6.2-1.6 9.3-1.7-2.7-3.2-4.9-4.6-6.9-1.6-2.2-3.1-4-5-6-1.7-1.8-3.6-3.7-6-5.9 2.9.1 5.8.2 9.3 0 2.8 3.2 3.8 7.1 7.8 9.7Z" class="cls-7"/><path d="M250.5 113.4c-3.9.3-8.4 0-12.1 0 2.1-2.5 4.5-4.8 6.4-6.7 1.7 2.4 3.6 4.7 5.7 6.7" class="cls-12"/><path d="M229.1 54.4c-1.4-15.5.8-22.9 9.1-27.7 2.9-1.7 7.8-3 11.6-3.2h2.2c-3.5 1.1-7.4 6-6.2 10.9-.8 0-1.5.2-2.3.3-.6.1-1.2.2-1.8.4-4.8 1.1-7.8 3.5-9.5 6.5-.5.9-.9 1.9-1.2 2.9q-.45 1.35-.6 3c-.1 1.2-.2 2.4-.1 3.5.2 3.7-.3.9.3 3.4h-.3c-.3-.1-.8-.1-1.2.2Z" class="cls-11"/><path d="m236 182.5-.4 2.9c-2.8-.5-5.5-1.1-7.9-1.8h-.2c.1-1 .2-2 .4-2.9h.2q3.6 1.05 7.8 1.8Z" class="cls-6"/><path d="M254.6 134.1c3.6 2.1 6 4.2 9.6 6.3-4.5-.3-9-.5-13.4-.8q-.45-.6-.6-.9c1.3-1.3 2.7-2.8 4.2-4.4 0-.1.2-.2.3-.3Z" class="cls-9"/><path d="M245.8 34.3c-1.2-4.9 2.8-9.8 6.2-10.8 8.3-.2 15 1.3 19.9 7.9s6.4 11.6 4.3 22.8c-1.3-1.2-3.5-1.2-4.6.2-.5-2.8-1.1-5.2-2-7.3-.4-1-.9-2-1.4-2.9-.5-.8-1-1.5-1.5-2.2-3.3-4.3-7.6-6.2-11.5-7.1-1.5-.3-3-.5-4.3-.6-1.6-.1-3-.1-4-.1h-1.2Z" class="cls-11"/><path d="M278.7 159.1h-.4c-4.9 2.1-9.8 3.4-14.9 4l-.2-3.6c1-.7 1.9-1.4 2.9-2.1 4.7-.6 7.9-1.3 11.6-2.3.3 1.2.6 2.5.9 4Zm-40 2.8c-2.5-.5-5-1.2-7.6-1.9h-.5c.2-1.2.3-2.3.5-3.4h.3c2.3.7 3.9 1.1 6.7 1.4 1.6 1.4 3.3 2.8 5.1 4.1v.6c-1.6-.2-3.1-.5-4.5-.8" class="cls-6"/><path d="M237.9 139.2c-1.4-1.8-2.7-3.6-3.9-5.5v-.8h.1c4.1.4 7.9.7 12 1.1-2.7 1.7-5.1 3.4-7.8 5l-.3.3Z" class="cls-12"/><path d="M272.9 130.5c-.3 1.7-.6 3.2-.8 4.3-.3 1.6-.6 3.1-1.3 4.5-1 1.9-1.2 2-2.8 3.3-1.1.9-2.2 2.1-3.3 3.4-2.8.4-5.7.7-8.6.9.1 0 .3-.2.4-.3 3-2.1 5.5-4 7.7-6 2-1.8 3.9-3.8 5.7-6.1 1-1.2 1.9-2.5 2.9-4Z" class="cls-7"/><path d="m263.2 159.5.2 3.6c-2 .3-4.1.4-6.1.5 1.8-1.2 3.9-2.6 6-4.1Zm-25.7 11.4-.4 3.3c-2.8-.5-5.5-1.1-8-1.8h-.2c.1-1.1.3-2.3.4-3.4h.2c2.5.8 5.2 1.4 7.9 1.9Z" class="cls-6"/><path d="M233.7 120.4c-.4.9-.7 1.9-.8 2.8-.5-4.9-.1-7.6.3-13.7v-.1c1.4-2.1 2.6-2.8 5.1-3.1 1.7-.2 4.3-.2 7-.2l-.5.5c-1.9 1.9-4.3 4.2-6.4 6.7-1.8 2.1-3.5 4.4-4.5 6.6 0 .1-.1.3-.2.4Z" class="cls-7"/><path d="M254.3 134.4c-1.4 1.6-2.9 3.1-4.2 4.3l-.1.1c-1.3-1.4-2.7-3.1-3.9-4.9 2.7.3 5.5 0 8.2.5m21.7-21.5c-.1 1-.2 2-.4 3.1-4-2.6-5-6.5-7.8-9.7-3.5.3-6.4.2-9.3 0h-.7c-2.5-.2-5.1-.3-8.2-.2h-4.1c-2.8 0-5.4 0-7 .2-2.5.3-3.7 1-5.1 3.1.4-3 1.4-5.2 2.8-6-.8-4.9 1.1-11.8 2.5-14.8.7-.2 1.4-.3 2.1-.4-1.7 6.5-2.9 14.3-1.1 15.2 1.1.6 21 .8 26.7.3.7-7.7-.2-8.2 2.7-15.1.7.1 1.6.2 2.5.4-3.2 6.2-2.4 6-2.8 13.3 0 .7 0 1.4.3 1.9.5.7 2.2 3.2 2.7 3.8 1.7 2.5 2.3 3.6 4.2 4.9" class="cls-6"/><path d="M269 88.5c-1.2-.2-2-.3-2.1-.2-2.5-1.6-2.9-7-2.9-10.6 2-1.2 5.1-3.6 6.7-8.8h.4c2.5 7 3.7 13.7 3.6 19.7l-1.5.6c-.6-.1-1.1-.2-1.6-.3-.9-.2-1.8-.3-2.5-.4Z" class="cls-11"/><path d="M264.5 183.5c4.7-.4 9.2-1.2 13.2-2.3l.5 3c-4.1 1.1-8.7 1.8-13.5 2.3z" class="cls-6"/><path d="M233.9 120.5c2.1 2.1 4.4 3.5 7 5.1-1.8 1.4-5.8 5.8-6.8 6.5h-.2c0-1.2-.2-2.6-.5-4.3-.3-1.8-.4-3.2-.6-4.5.2-.9.4-1.9.8-2.8h.1Z" class="cls-12"/><path d="M254.9 55.1c0-1.9.8-3.5 1.8-3.5s1.8 1.5 1.8 3.5-.8 3.4-1.8 3.4-1.8-1.5-1.8-3.4" class="cls-4"/><path d="M271.8 63.2c.9 0 1.8 0 2.7-.2-1 2.3-1.7 4-3.3 6h-.4c.5-1.7.9-3.6 1-5.8" class="cls-11"/><path d="M260.4 126.5c-.9-1.5-3.1-5.2-5.2-8.1 4.4.4 8.9.4 13.3 0h.6c-2.9 2.9-6.6 6.7-8.7 8.1" class="cls-9"/><path d="M234 133.7c1.2 1.9 2.5 3.7 3.9 5.5 2.2 2.7 4.6 5.3 7.2 7.6-1.7-.1-3.3-.3-4.9-.5-2-3.3-4-6.6-6.3-9.7v-2.8Z" class="cls-7"/><path d="M256.2 146.9c-3.8.2-7.6.2-11-.1 0 0-.1-.2-.2-.2 3.1-4 3.2-4.6 4.7-6.9h1.1c1.3 1.7 4.2 5.2 5.8 6.9-.1.2-.3.2-.4.3m-15.3-21.4c-2.6-1.5-4.9-2.9-7-5.1h-.1c0-.2.1-.3.2-.5h.1c4.2-.7 8.1-1 12.3-1.8-2.6 3-5.2 6.6-5.2 7.2h-.2Z" class="cls-9"/><path d="M246.1 133.9c-2-2.9-3.8-6-5-8.3 0-.6 2.6-4.2 5.2-7.2h.3c1.2 3.1 2.4 5.9 3.8 8.7-1.3 2.3-2.8 4.5-4.4 6.3.3-.1.4.6.2.6Z" class="cls-6"/><path d="M257.6 106.8c-1.9 2.3-3.9 4.5-6.1 6.5h-1c-2.1-2.1-4-4.3-5.7-6.7l.5-.5h4.1c3.1 0 5.7 0 8.2.2v.4Z" class="cls-9"/><path d="M254.6 134.1c5 .5 10.4.4 15.4.3-1.9 2.4-3.7 4.3-5.7 6.2l-.2-.2c-3.6-2.1-6-4.2-9.6-6.3Z" class="cls-12"/><path d="M251.8 113.3c4.2-.5 8.2-.3 12.4-.8-3.1 1.8-5.7 3.7-8.7 5.6-.1 0-.3.2-.4.3-1.8-2.5-3.4-4.5-4.2-4.4.2-.3.4-.4.5-.6h.4Z" class="cls-9"/><path d="M254.9 118.7c-1.4 2.6-2.9 5.6-4.6 8.4-1.4-2.8-2.6-5.6-3.8-8.7 1.2 0 5.4.3 8.3.3Z" class="cls-12"/><path d="M250.3 127.1q1.8 3.6 3.9 7.2c-2.6-.5-5.5-.1-8.2-.5.2 0 0-.7-.2-.6 1.6-1.8 3.1-4 4.4-6.3Zm-4.1-8.8h.2v.1h-.3Z" class="cls-6"/><path d="M270 134.4c-5 0-10.4.2-15.4-.3 2.4-2.6 4.7-5.4 6-7.2 4 3.8 5.9 4.8 9.5 7.6Z" class="cls-9"/><path d="M255.6 118c3-1.9 5.6-3.8 8.7-5.6 1.8 1.9 3.4 3.8 5 5.9l-.2.2h-.6c-4.4.3-8.9.3-13.3-.1.1 0 .3-.2.4-.3Z" class="cls-12"/><path d="m251.1 175.6.2-3.1c4.2.2 8.4 0 12.6-.3l.2 2.9c-4.2.5-8.6.6-12.9.5Z" class="cls-6"/><path d="M271.8 273.7c4.1.7 8.2 1.3 12.3 1.7.7 0 1.5.1 2.1-.2.8-.4 1.1-1.3 1-2.1 0-.8-.4-1.5-.8-2.2 1.5.8 2.9 1.7 4.4 2.7 0 .8-.4 1.7-.5 2.5 0 1 .5 1.9 1.1 2.7s1.3 1.5 1.7 2.5c-.6.4-1.2.6-1.9.6h-1.6c-.9-1.7-2.8-2.9-4.7-3.4-2-.5-4.2-.5-6.3-.5v.2c-1.9-.9-3.7-2-5.6-3.5-.4-.3-.7-.6-1.1-.9Z" class="cls-5"/><path d="M250.9 113.9c.8 0 2.5 2 4.2 4.4 0 .1-.1.2-.2.3-2.9 0-7.1-.3-8.3-.3v-.1h-.1c1.9-2.3 3.8-4.2 4.5-4.3Z" class="cls-6"/><path d="m250.5 113.4.4.4v.1c-.7 0-2.6 2-4.5 4.3-3.1-1.3-5.7-3.5-8-4.8 3.7 0 8.2.3 12.1 0" class="cls-9"/><path d="M233.9 120c1-2.3 2.7-4.5 4.5-6.6 2.2 1.3 4.9 3.5 8 4.8-4.2.7-8.1 1.1-12.3 1.8h-.1Z" class="cls-12"/><path d="M225.2 272.7c0-.5-.2-1.1-.7-1.3v-.2c1.4-.8 3.1-1.6 4.7-2.4-.6.7-1.1 1.9-1.4 2.7s-.4 1.7.2 2.4c.8 1 2.3 1 3.6 1 3.2-.1 6.5-.2 9.6-1.1-1.5 1.9-3.7 3.4-6.2 4.4-3.5-1.1-8.1-.2-11.2 1.6-.7 0-1.5-.2-2.2-.4v-.3c1.1-1.7 2.1-3.4 3.1-5.1.3-.4.5-.9.6-1.4Z" class="cls-5"/><path d="m250.3 186.8.2-2.9c4.7.2 9.4 0 14-.4l.2 3c-4.7.4-9.5.5-14.3.4Z" class="cls-6"/><path d="M274.4 280.9c-3.5-2.4-5.8-6.8-4.6-10.7 0 .6.2 1.2.5 1.7q.6 1.05 1.5 1.8c.3.3.7.6 1.1.9 1.9 1.5 3.7 2.6 5.5 3.5 2.6 1.3 5.4 2.2 8.8 3.2.8.2 1.6.4 2.3.5h1.6c.7 0 1.3-.3 1.9-.6s1.1-.8 1.4-1.3c.5-1 .3-2.2-.2-3.3 1.9 2 1.5 5.5-.9 7-1.7 1.1-4 1.1-6.1.9-4.5-.4-9.2-1.2-12.9-3.7Z" class="cls-5"/><path d="M248.5 153.5h.3c2.6.2 4.2 3.3 6.8 4 1.9-1.8 3.7-4.2 5.5-6.6-4.6.7-8.6 1-12.5.9h-2.4c-.8 0-1.5-.1-3-.4.8 1.2 1.5 2.5 2.3 3.7.8-.9 1.9-1.5 3-1.5Zm-11 17.4c4.4.8 9.1 1.4 13.8 1.5 4.2.2 8.4 0 12.6-.3 6-.6 11.7-1.8 16.7-3.9h.1c-.7-3.4-1.3-6.5-1.9-9.2h-.4c-4.9 2.1-9.8 3.4-14.9 4-2 .3-4.1.4-6.1.5-.9.6-1.8 1.2-2.6 1.8-.8 1-1.8 1.6-3 2-.8.3-1.6.4-2.4.5-2.3.2-4.7-1.1-5.6-3.4-.2-.6-.3-1.2-.4-1.8-1.6-.2-3.1-.5-4.5-.8-2.5-.5-5-1.2-7.6-1.9h-.5q-.6 4.2-1.2 9h.2c2.5.8 5.2 1.4 7.9 1.9Z" class="cls-10"/><path d="M236 182.5c3.5.6 7.3 1 11.1 1.3 1.1 0 2.3.1 3.4.2 4.7.2 9.4 0 14-.4 4.7-.4 9.2-1.2 13.2-2.3 1.8-.5 3.5-1.1 5.1-1.7h.2c-.6-2.9-1.1-5.7-1.7-8.5-5 2-10.9 3.4-17.1 4.1-4.2.5-8.6.6-12.9.5-4.8-.1-9.6-.6-14-1.3-2.8-.5-5.5-1.1-8-1.8h-.1c-.3 2.7-.7 5.5-1.1 8.3h.2q3.6 1.05 7.8 1.8Z" class="cls-10"/><path d="M283.5 182.4c-1.6.7-3.4 1.3-5.3 1.8-4.1 1.1-8.7 1.8-13.5 2.3-4.7.4-9.5.5-14.3.4-1.2 0-2.3 0-3.4-.2-3.9-.2-7.7-.7-11.3-1.3-2.8-.5-5.5-1.1-7.9-1.8h-.2c-1.7 13.5-3.3 26.2-3.8 29.6 1.6.9 5.2 1.9 10 2.7 4.1.7 9.1 1.2 14.5 1.5 1 0 2 0 3 .1 4.4.1 8.9.1 13.3-.2 5.9-.4 11.6-1.2 16.6-2.5.7-.2 1.4-.4 2-.6 1.9-.6 3.7-1.4 5.3-2.2-.6-5.9-2.6-17.7-4.9-29.6ZM238.1 158q-3.6-3.45-6.3-6.9c-.2 1.6-.5 3.5-.8 5.5h.3c2.3.7 3.9 1.1 6.7 1.4Zm39.7-2.9c-.7-3.1-1.3-5.4-1.6-6.3-2.7 2.9-6.4 5.9-10.2 8.6 4.7-.6 7.9-1.3 11.6-2.3Z" class="cls-10"/><path d="M249.7 139.6c-3.8-.2-7.6-.4-11.4-.7 2.7-1.7 5.1-3.4 7.8-5 1.3 1.8 2.6 3.5 3.9 4.9l.1-.1c-.2.4-.4.6-.5.9Z" class="cls-9"/><path d="m245.2 146.8.2.2s-.2-.1-.2-.2" class="cls-6"/><path d="M258.4 106.4c2.4 2.2 4.3 4.1 6 5.9-4.2.6-8.2.4-12.4.9h-.4c2.2-2 4.3-4.2 6.1-6.5v-.4h.8Z" class="cls-12"/><path d="M234.1 132c1-.6 5.1-5 6.8-6.5h.2c1.2 2.4 3 5.4 5 8.3-4.1-.4-7.9-.7-12-1.1h-.1v-.8h.2Z" class="cls-9"/><path d="M254.3 134.4c-1.5-2.5-2.8-4.8-3.9-7.2 1.6-2.8 3.1-5.8 4.6-8.4 0-.1.1-.2.2-.3h.1c2.1 3 4.3 6.6 5.2 8.1l.2.2c-1.3 1.8-3.6 4.6-6 7.2 0 .1-.2.2-.3.3Z" class="cls-6"/><path d="M276.2 148.8c1.8-2 3.2-3.9 3.9-5.8 3.4-9.6 4.4-17.2 5.8-27.5.5-7.3-.3-21.1-5.2-24.6-.7-.4-4.2-1.2-7.5-1.7-.6-.1-1.1-.2-1.6-.3-3.2 6.2-2.4 6-2.8 13.3 0 .7 0 1.4.3 1.9.5.7 2.2 3.2 2.7 3.8 1.7 2.5 2.3 3.6 4.2 4.9-.1 1-.2 2-.4 3.1-.4 2.9-1 6.2-1.6 9.3-.3 1.8-.7 3.6-1 5.2-.3 1.7-.6 3.2-.8 4.3-.3 1.6-.6 3.1-1.3 4.5-1 1.9-1.2 2-2.8 3.3-1.1.9-2.2 2.1-3.3 3.4-1.3 1.5-2.5 3.2-3.8 4.9-1.8 2.4-3.6 4.8-5.5 6.6-2.5-.7-4.2-3.8-6.8-4h-.3c-1.1 0-2.2.6-3 1.5-.8-1.2-1.5-2.5-2.3-3.7-1-1.7-2-3.4-3-5-2-3.3-4-6.6-6.3-9.7v-4.4c0-1.2-.2-2.6-.5-4.3-.3-1.8-.4-3.2-.6-4.5-.5-4.9-.1-7.6.3-13.7v-.1c.4-3 1.4-5.2 2.8-6-.8-4.9 1.1-11.8 2.5-14.8-7.3 1.3-9.3 4.1-10.7 6.4-2.4 3.7-2.1 16.7-2 20.5-.7 12.3 0 20.8 1.5 26.6.8 2.9 2.3 6 4.6 9 1.7 2.3 3.8 4.7 6.3 6.9 1.6 1.4 3.3 2.9 5.1 4.2v.6c0 .6.2 1.3.4 1.8.9 2.2 3.3 3.5 5.6 3.4.8 0 1.7-.2 2.4-.5 1.1-.4 2.1-1.1 3-2 .8-.6 1.7-1.2 2.6-1.8 1.8-1.2 3.9-2.6 6-4.1 1-.7 1.9-1.4 2.9-2.1 3.8-2.7 7.4-5.6 10.2-8.6Zm-51 123.9c0-.5-.2-1.1-.7-1.3v-.2c-1.6.8-2.9 1.5-4.1 2.1-1.3.7-2.5 2.1-2.5 3.4 0 1.7 1.8 2.3 3.5 2.7v-.3c1.1-1.7 2.1-3.4 3.1-5.1.3-.4.5-.9.6-1.4Zm23-55.4c-5.4-.3-10.4-.8-14.5-1.5-1.7 8.1-1.4 9.3-1.1 14.3.2 3.7 2.7 32.5 2.1 36-1.6.7-3.5 1.6-5.5 2.6-.6.7-1.1 1.9-1.4 2.7s-.4 1.7.2 2.4c.8 1 2.3 1 3.6 1 3.2-.1 6.5-.2 9.6-1.1 1-1.3 1.7-2.8 1.9-4.5.6-14.5 3-26.1 6.7-39.4.6-2.1 2.6-5.1 1.4-12.5-1 0-2 0-3-.1Zm36.6 61.1c-2-.5-4.2-.5-6.3-.5v.2c2.6 1.3 5.3 2.2 8.7 3.2.8.2 1.6.4 2.3.5-.9-1.7-2.8-2.9-4.7-3.4" class="cls-8"/><path d="M232.2 63.7c.5 5.5 1.8 11 5.8 14.6 3.1 2.7 5.4 4.6 7.7 5.5.3 1.4-2.2 4.1-2.2 4.1-1 0-2 .2-2.9.3-1.7 6.5-2.9 14.3-1.1 15.2 1.1.6 21 .8 26.7.3.7-7.7-.2-8.2 2.7-15.1-1.2-.2-2-.3-2.1-.2-2.5-1.6-2.9-7-2.9-10.6 2-1.2 5.1-3.6 6.7-8.8.5-1.6.9-3.5 1-5.7.9 0 1.8 0 2.7-.2 1-.2 1.9-.6 2.5-1.4.6-.7.9-1.7 1-2.7.2-1.8-.3-3.7-1.6-4.8-1.3-1.2-3.5-1.2-4.6.2-.5-2.8-1.1-5.2-2-7.3-.4-1-.9-2-1.4-2.9-.5-.8-1-1.5-1.5-2.2-3.3-4.3-7.6-6.2-11.5-7.1-1.5-.3-3-.5-4.3-.6-1.6-.1-3-.1-4-.1h-1.2c-.8 0-1.5.2-2.3.3-.6.1-1.2.2-1.8.4-4.8 1.1-7.8 3.5-9.5 6.5-.5.9-.9 1.9-1.2 2.9q-.45 1.35-.6 3c-.1 1.2-.2 2.4-.1 3.5.2 3.7-.3.9.3 3.4h-.3c-.3-.1-.8-.1-1.2.2-.7.5-1.4 1.9-1.4 4.7s3.5 4.6 4.5 4.6Zm5.1-5.6c-.8 0-1.4-1.3-1.4-3s.6-3 1.4-3 1.4 1.3 1.4 3-.6 3-1.4 3m4.7 14.1c5 1.6 15.8-.8 16.7-1.8-2 2.8-2.7 3.2-4.4 4.2-1.7 1.1-5.2 1.4-7 1.2-2.8-.4-4.2-1.5-5.4-3.6Zm16.3-17.1c0 1.9-.8 3.4-1.8 3.4s-1.8-1.5-1.8-3.4.8-3.5 1.8-3.5 1.8 1.5 1.8 3.5m-34.6 224.7c3.7.4 7.8-.1 11.2-1.6-3.5-1.1-8.1-.2-11.2 1.6m70.5-3.1c0-.2-.2-.3-.3-.5-.8-1.1-1.9-1.9-3.1-2.6h-.1c0 .8-.4 1.7-.5 2.5 0 1 .5 1.9 1.1 2.7s1.3 1.5 1.7 2.5c.6-.2 1.1-.7 1.4-1.3.5-1 .3-2.2-.2-3.3m-8-1.6c.8-.4 1.1-1.3 1-2.1 0-.8-.4-1.5-.8-2.2-2.2-1.3-4.5-2.5-6.9-3.7-1.5-15 4.1-34.9 3.2-42.9-.4-3.7-1-6.1-1.6-9.4-4.9 1.4-10.7 2.2-16.6 2.5v.4c0 2.9-.2.9.1 4.3.6 7.7 1.3 15.6 3 23.2 1 4.5 2.9 15.1 2.4 23.5v.9c0 .2-.1.4-.2.6 0 .6.2 1.2.5 1.7q.6 1.05 1.5 1.8c4.1.7 8.2 1.2 12.3 1.6.7 0 1.5.1 2.1-.2" class="cls-8"/><path d="M237.5 278.8c-4.1 2-8.6 3.6-13.2 3.9-2 .1-4.1 0-5.7-1.1s-2.1-3.6-.7-4.9c0 1.7 1.8 2.3 3.5 2.7.7.2 1.4.3 2.2.4 3.7.4 7.8-.1 11.2-1.6 2.5-1 4.7-2.5 6.2-4.4 1-1.3 1.7-2.8 1.9-4.5v.4c1 1.7.6 3.9-.7 5.5-1.2 1.6-3.1 2.6-4.9 3.5Z" class="cls-5"/><path d="M237.4 52.1c.8 0 1.4 1.3 1.4 3s-.6 3-1.4 3-1.4-1.3-1.4-3 .6-3 1.4-3" class="cls-4"/><path d="M242.1 72.1c5 1.7 15.8-.8 16.7-1.7-2 2.8-2.7 3.2-4.4 4.2-1.7 1.1-5.2 1.4-7 1.2-2.8-.4-4.2-1.5-5.4-3.6Z" class="cls-12"/><path d="M233.2 109.5v.1z" class="cls-7"/><path d="M238.2 138.9c3.9.3 7.7.5 11.4.7-1.5 2.4-1.6 3-4.7 6.9 0 0 .1.2.2.2-2.6-2.3-5-4.9-7.2-7.6l.3-.3Z" class="cls-12"/><path d="M245.8 83.8c4.1 1.5 8.4 0 17-5.3.3-.2.7-.4 1.2-.7 2-1.2 5.1-3.6 6.7-8.8.5-1.6.9-3.5 1-5.7" class="cls-1"/><path d="M230.3 50.9c.2 3.7-.3.9.3 3.4 0 .3.2.7.3 1.1 0 0 .7 1.6 1.4 8.3.5 5.5 1.8 11 5.8 14.6 3.1 2.7 5.4 4.6 7.7 5.5M234 48.5c1.7-2 5.1-1.8 6.7-.7m12.3-.2c2.8-2.1 6.6-1.1 7.2.6m6.7 40.1c-2.5-1.6-2.9-7-2.9-10.6h0m-18.2 6.1c.3 1.4-2.2 4.1-2.2 4.1m-.1 0c-1 0-2 .2-2.9.3q-1.2.15-2.1.3c-7.3 1.4-9.3 4.1-10.7 6.4-2.4 3.7-2.1 16.7-2 20.5m41.1-27.1s.9 0 2.1.2c.7.1 1.6.2 2.5.4.5 0 1.1.2 1.6.3 3.3.6 6.8 1.3 7.5 1.7m-47.4 18.6v.1c-.5 6.1-.8 8.7-.3 13.7q.15 1.95.6 4.5c.2 1.7.4 3 .5 4.3v4.4m47.1 78.3c.7-.2 1.4-.4 2-.6 1.9-.6 3.7-1.4 5.3-2.2.1 0 .3-.1.4-.2m-57-60.7c-.2 1.6-.5 3.4-.8 5.5-.2 1.1-.3 2.2-.5 3.4-.4 2.8-.8 5.9-1.2 9.1-.1 1.1-.3 2.2-.4 3.4-.3 2.7-.7 5.5-1.1 8.3-.1 1-.2 1.9-.4 2.9-1.7 13.6-3.3 26.2-3.8 29.6 1.6.9 5.2 1.9 10 2.7 4.1.7 9.1 1.2 14.5 1.5 1 0 2 0 3 .1 4.4.1 8.9.1 13.3-.2 5.9-.4 11.6-1.2 16.6-2.5" class="cls-1"/><path d="M288.4 212.1v-.2c-.6-5.9-2.6-17.7-4.9-29.6l-.6-3c-.6-2.9-1.1-5.7-1.7-8.4-.2-.9-.4-1.8-.6-2.8-.7-3.3-1.3-6.4-1.9-9.2-.3-1.4-.6-2.8-.9-4-.7-3.1-1.3-5.4-1.6-6.3m-42.5 67.3c-1.7 8.1-1.4 9.3-1.1 14.3.2 3.7 2.7 32.5 2.1 36m16.5-48.7c1.2 7.4-.8 10.3-1.4 12.5-3.7 13.3-6 24.9-6.7 39.4v.4m21.4-52.1c0 2.9-.2.9 0 4.3.6 7.7 1.3 15.6 3 23.2 1 4.5 2.9 15.1 2.4 23.5v.9m11.2-54.8c.6 3.3 1.2 5.7 1.6 9.4.9 8-4.7 28-3.2 42.9m-40.7-212c0 1.7-.6 3-1.4 3s-1.4-1.3-1.4-3 .6-3 1.4-3 1.4 1.3 1.4 3m19.6 0c0 1.9-.8 3.4-1.8 3.4s-1.8-1.5-1.8-3.4.8-3.5 1.8-3.5 1.8 1.5 1.8 3.5m-16.1 11c1.7 1.8 5.3 1.1 7.1.9m-7.7 4.9c.1 0 .3.1.4.1 5 1.7 15.8-.8 16.7-1.7-2 2.8-2.7 3.2-4.4 4.2-1.7 1.1-5.2 1.4-7 1.2-2.8-.4-4.2-1.5-5.4-3.6" class="cls-1"/><path d="M276.3 54.2c2-11.1.5-16.2-4.3-22.8-4.9-6.6-11.6-8.1-19.9-8h-2.2c-3.8.2-8.6 1.5-11.6 3.2-8.3 4.8-10.5 12.2-9.1 27.7h0" class="cls-1"/><path d="M245.8 34.3c-1.2-4.9 2.8-9.8 6.2-10.8m-21.7 27.4c0-1.2 0-2.4.1-3.5q.15-1.5.6-3c.3-1 .7-2 1.2-2.9 1.7-3 4.7-5.3 9.5-6.5.6-.1 1.2-.3 1.8-.4.7-.1 1.5-.2 2.3-.3h1.2c1.1 0 2.4 0 4 .1 1.3 0 2.8.3 4.3.6 3.9.9 8.2 2.8 11.5 7.1.5.7 1 1.4 1.5 2.2.5.9 1 1.8 1.4 2.9.9 2.1 1.5 4.5 2 7.3m.1-.1c1.1-1.4 3.3-1.3 4.6-.2 1.3 1.2 1.7 3.1 1.6 4.8 0 1-.4 2-1 2.7-.6.8-1.5 1.2-2.5 1.4-.9.2-1.8.2-2.7.2m-41.5-9c-.3-.2-.8-.2-1.2 0-.7.5-1.4 1.9-1.4 4.7s3.5 4.6 4.5 4.6" class="cls-1"/><path d="M274.4 63.1c-1 2.3-1.7 4-3.3 6m.1-.1c2.5 6.8 3.7 13.5 3.6 19.6m-10 57.4s0 0 0 0c-2.8.4-5.7.7-8.6.9-3.8.2-7.6.2-11-.1q0 0 0 0c-1.7-.1-3.3-.3-4.9-.5m-2.2 11.7c-2.8-.3-4.4-.7-6.7-1.4m46.4-1.5c-3.7 1-7 1.7-11.6 2.3m-23 5.3c-1.6-.2-3.1-.5-4.5-.8-2.5-.5-5-1.2-7.6-1.9m47.2-.8c-4.9 2-9.8 3.3-14.9 3.9-2 .3-4.1.4-6.1.5h-.2m23.4 4.7c-5 2-10.7 3.3-16.7 3.9-4.1.4-8.4.5-12.6.3-4.7-.2-9.4-.7-13.8-1.5-2.8-.5-5.4-1.1-7.9-1.9" class="cls-1"/><path d="M281.1 171c-5 2-10.9 3.4-17.1 4-4.2.5-8.6.6-12.9.5-4.8-.1-9.6-.6-14-1.3-2.8-.5-5.5-1.1-8-1.8m53.6 7.1c-1.6.6-3.3 1.2-5.1 1.7-4 1.1-8.5 1.9-13.2 2.3-4.6.4-9.3.6-14 .4-1.1 0-2.3 0-3.4-.2-3.9-.2-7.6-.7-11.1-1.3q-4.2-.75-7.8-1.8" class="cls-1"/><path d="M283.5 182.4c-1.6.7-3.4 1.3-5.3 1.8-4.1 1.1-8.7 1.8-13.5 2.3-4.7.4-9.5.5-14.3.4-1.2 0-2.3 0-3.4-.2-3.9-.2-7.7-.7-11.3-1.3-2.8-.5-5.5-1.1-7.9-1.8m33.3-32.7s0 0 0 0c-4.6.7-8.6 1-12.5.9h-2.4c-.8 0-1.5-.1-3-.4q0 0 0 0m25.9-63.1s0 .2-.1.3c-2.9 7-2 7.4-2.7 15.1-5.7.5-25.6.3-26.7-.3-1.7-.9-.6-8.7 1.1-15.1m31.1.2c0 .2-.2.3-.2.5-3.2 6.2-2.4 6-2.8 13.3 0 .7 0 1.4.3 1.9.5.7 2.2 3.2 2.7 3.8 1.7 2.5 2.3 3.6 4.2 4.9q0 0 0 0m-37.4-24.2c-1.4 3-3.3 9.9-2.5 14.8-1.4.9-2.4 3.1-2.8 6v.1c0 .6-.1 1.2-.2 1.8m21.2 23c-1.4 1.6-2.9 3.1-4.2 4.3l-.1.1c-1.3-1.4-2.7-3.1-3.9-4.9-2-2.9-3.8-6-5-8.3q0 0 0 0c0-.6 2.6-4.2 5.2-7.2q0 0 0 0t0 0c1.9-2.3 3.8-4.2 4.5-4.3h0c.8 0 2.5 2 4.2 4.4q0 0 0 0c2.1 3 4.3 6.6 5.2 8.1 0 0 0 .2.1.2" class="cls-1"/><path d="M260.5 126.8s0 0 0 0c-1.3 1.8-3.6 4.6-6 7.2 0 .1-.2.2-.3.3m4.2-27.9c2.4 2.2 4.3 4.1 6 5.9 1.8 2 3.4 3.8 5 6 1.5 2 2.9 4.2 4.6 6.9v.2m-28.7-19.2-.5.5c-1.9 1.9-4.3 4.2-6.4 6.7-1.8 2.1-3.5 4.4-4.5 6.6 0 .1-.1.3-.2.4-.4.9-.7 1.9-.8 2.8m40 7.3c-1 1.5-2 2.8-2.9 4-1.9 2.4-3.7 4.3-5.7 6.1-2.2 2-4.7 3.9-7.7 6-.1 0-.3.2-.4.3-.2.2-.5.3-.7.5M234 133.7c1.2 1.9 2.5 3.7 3.9 5.5 2.2 2.7 4.6 5.3 7.2 7.6 0 0 .2.1.2.2l-.2-.2s-.1-.2-.2-.2" class="cls-1"/><path d="M275.7 116.1h-.1c-4-2.6-5-6.5-7.8-9.7-3.5.3-6.4.2-9.3 0h-.7c-2.5-.2-5.1-.3-8.2-.2h-4.1c-2.8 0-5.4 0-7 .2-2.5.3-3.7 1-5.1 3.1q0 0 0 0" class="cls-1"/><path d="M244.8 106.6s0 0 0 0c1.7 2.4 3.6 4.7 5.7 6.7l.4.4c.2-.2.4-.3.5-.5 2.2-2 4.3-4.2 6.1-6.5m12.5 27.7c-3.6-2.9-5.5-3.8-9.5-7.6h0l-.2-.2q0 0 0 0c2.1-1.4 5.9-5.2 8.7-8M234.1 132c1-.6 5.1-5 6.8-6.5-2.6-1.5-4.9-2.9-7-5.1m11.1 26.1c3.1-4 3.2-4.6 4.7-6.9.2-.3.3-.5.5-.8 0 .2.3.5.6.9 1.3 1.7 4.2 5.2 5.8 6.9" class="cls-1"/><path d="M268.5 118.4c-4.4.4-8.9.4-13.3 0h-.1q0 0 0 0c.1 0 .3-.2.4-.3 3-1.9 5.6-3.8 8.7-5.6-4.2.5-8.2.3-12.4.8h-1.4c-3.9.3-8.4 0-12.1 0 2.2 1.3 4.9 3.5 8 4.8h.1-.2c-4.2.7-8.1 1.1-12.3 1.8m36.1 14.5c-5 0-10.4.2-15.4-.3 3.6 2.1 6 4.2 9.6 6.3-4.5-.3-9-.5-13.4-.8h-1.1c-3.8-.2-7.6-.4-11.4-.7 2.7-1.7 5.1-3.4 7.8-5-4.1-.4-7.9-.7-12-1.1" class="cls-1"/><path d="M255.1 118.7h-.2c-2.9 0-7.1-.3-8.3-.3h-.3 0" class="cls-1"/><path d="M246.1 133.9c.2 0 0-.7-.2-.6 1.6-1.8 3.1-4 4.4-6.3 1.6-2.8 3.1-5.8 4.6-8.4 0-.1.1-.2.2-.3m-.8 16.1c-2.6-.5-5.5-.1-8.2-.5m8.2.5s0 0 0 0m0 0q0 0 0 0m-.1-.1s0 0 0 0m.1.1s0 0 0 0q0 0 0 0t0 0" class="cls-1"/><path d="M246.5 118.2v.1c1.2 3.1 2.4 5.9 3.8 8.7q1.8 3.6 3.9 7.2" class="cls-1"/><path d="m283.1 214.2-5-30-.5-3-.9-5.6m-25.1-8.2-.3 5.1-.2 3.1-.6 8.3-.2 2.9-2.1 30.5m-.8-37.8-.3 4.3-.2 2.9-2.1 25.4m-7.3-41.2-.4 3.3-1.1 8.3-.4 2.9-2.7 20.3" class="cls-3"/><path d="m238.7 161.9-1.2 9" class="cls-1"/><path d="m263.2 159.5.2 3.6.4 9 .2 3 .5 8.4.1 3 .1 1.5m-4.1 15.8.5 13.7m-4.8-6.9v6.9m-28.2-15.1-1.5 11.6" class="cls-3"/><path d="M223.7 279.8c3.7.4 7.8-.1 11.2-1.6 2.5-1 4.7-2.5 6.2-4.4 1-1.3 1.7-2.8 1.9-4.5v-.7m-8.3-2.4c-1.6.7-3.5 1.6-5.5 2.6-1.6.8-3.3 1.6-4.8 2.4s-2.8 1.5-4 2.1c-1.3.7-2.4 2.1-2.5 3.4 0 1.7 1.8 2.3 3.5 2.7q0 0 0 0c.7.2 1.4.3 2.2.4m46.5-11.4s0 .2-.1.3c-.2.5-.3 1-.2 1.5 0 .6.2 1.2.5 1.7q.6 1.05 1.5 1.8c.3.3.7.6 1.1.9 1.9 1.5 3.7 2.6 5.5 3.5 2.6 1.3 5.4 2.2 8.8 3.2.8.2 1.6.4 2.3.5h1.6c.7 0 1.3-.3 1.9-.6s1.1-.8 1.4-1.3c.5-1 .3-2.2-.2-3.3 0-.2-.2-.3-.3-.5-.8-1.1-1.9-1.9-3.1-2.6h-.1c-1.5-1-2.9-1.8-4.4-2.7-2.2-1.3-4.5-2.5-6.9-3.7" class="cls-1"/><path d="M286.3 270.7v.1c.4.7.7 1.4.8 2.2 0 .8-.2 1.7-1 2.1-.6.3-1.4.3-2.1.2-4.1-.4-8.2-1-12.3-1.7.2 0 .4 0 .6.1m18.3-.6c0 .1 0 .3.1.4 0 .8-.4 1.7-.5 2.5 0 1 .5 1.9 1.1 2.7s1.3 1.5 1.7 2.5m-3.4.8v-.2c-1-1.7-2.9-2.9-4.8-3.4-2-.5-4.2-.5-6.3-.5m-36.6-4.3c-.2 0-.4.1-.7.2-3.1.9-6.4 1-9.6 1.1-1.3 0-2.8 0-3.6-1-.5-.7-.5-1.6-.2-2.4s.8-2 1.4-2.6m6.1 9.5c-.1 0-.2 0-.4-.1-3.5-1.1-8.1-.2-11.2 1.6h0m.8-8.5c.5.2.7.8.7 1.3s-.3 1-.6 1.4l-3 5.1" class="cls-1"/><path d="M294.3 276.6c1.9 2 1.5 5.6-.9 7.1-1.7 1.1-4 1.1-6.1.9-4.5-.4-9.2-1.2-12.9-3.7-3.5-2.4-5.8-6.8-4.6-10.7 0-.2.1-.4.2-.6m-26.9.1c1 1.7.6 3.9-.7 5.5-1.2 1.6-3.1 2.6-4.9 3.5-4.1 2-8.6 3.6-13.2 3.9-2 .1-4.1 0-5.7-1.1s-2.1-3.6-.7-4.9m37.4-241.7c2.5 3.5 7 7.8 11.5 7.1h0m-20.5-7.3c2 3.8 4.7 7.4 8.6 9.7 3.5 2 9.2 4.3 14.8 2.8M246 34.7c-2.9 5.6-9.4 11.6-15.7 12.6h-.1m11.5-12.4c-1.7 2.5-6.5 5.7-9.5 6.5" class="cls-1"/><path d="M251 34.7c.6 1.6 4.4 10.4 17.2 9.7m-24.6-9.7c-4 7.9-11.8 9.4-12.6 9.6M280.7 91c5 3.5 5.7 17.2 5.2 24.6" class="cls-1"/><path d="M285.9 115.5c-1.3 10.4-2.3 18-5.8 27.5-.7 1.9-2.1 3.9-3.9 5.8-2.7 2.9-6.4 5.9-10.2 8.6-1 .7-1.9 1.4-2.9 2.1-2.1 1.5-4.1 2.8-6 4.1-.9.6-1.8 1.2-2.6 1.8-.2.1-.4.3-.5.4m-28.2-50.3c-.7 12.3 0 20.8 1.5 26.6.8 2.9 2.3 6 4.6 9 1.7 2.3 3.8 4.7 6.3 6.9 1.6 1.4 3.3 2.9 5.1 4.2m17.7-11.3c-1.8 2.4-3.6 4.8-5.5 6.6" class="cls-1"/><path d="M276.1 111.3c0 .5 0 1.1-.2 1.6-.1 1-.2 2-.4 3.1-.4 2.9-1 6.2-1.6 9.3-.3 1.8-.7 3.6-1 5.2-.3 1.7-.6 3.2-.8 4.3-.3 1.6-.6 3.1-1.3 4.5-1 1.9-1.2 2-2.8 3.3-1.1.9-2.2 2.1-3.3 3.4-1.3 1.5-2.5 3.2-3.8 4.9m-27-14.4c2.3 3.1 4.3 6.4 6.3 9.7 1 1.7 2 3.4 3 5 .8 1.2 1.5 2.5 2.3 3.7" class="cls-1"/><path d="M255.5 157.5c-2.5-.7-4.2-3.8-6.8-4h-.3c-1.1 0-2.2.6-3 1.5-.2.2-.4.5-.6.7-.9 1.3-1.3 2.9-1.5 4.5 0 .6-.2 1.3-.2 1.9v.6c0 .6.2 1.3.4 1.8.9 2.2 3.3 3.5 5.6 3.4.8 0 1.7-.2 2.4-.5 1.1-.4 2.1-1.1 3-2 .1-.1.2-.3.3-.4" class="cls-1"/></g></svg>')}`;
export default image;
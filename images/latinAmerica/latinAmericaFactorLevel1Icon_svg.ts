/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="Layer_5" width="300" height="300" viewBox="0 0 300 300"><defs><style>.cls-1{stroke-linecap:round;stroke-linejoin:round}.cls-1,.cls-2{stroke:#000}.cls-1,.cls-2,.cls-3{fill:none}.cls-2,.cls-3{stroke-miterlimit:10}.cls-3{stroke:#fff}.cls-12,.cls-4,.cls-6,.cls-8{stroke-width:0}.cls-6{fill:#4d0099}.cls-8{fill:#3f414f}.cls-12{fill:#7d574b}</style></defs><path d="M205.4 290.1s.2 2.1 0 2.2c-.2.2-6.8 2.8-13.1 2-6.3-.7-12-4.6-12-4.6V288c.1.1.2.2.2.3.6.5 1.6 1.1 3 1.7 2.3 1 5.5 1.9 9.2 1.8 5.8-.1 11.8-1.7 11.8-1.7v-.5h.2l.6.5Z" class="cls-8"/><path d="M157.8 157.6c1.1 3 3.1 3.8 6 4 4.9.2 9-4.5 8.2-4.2-3.8 1.1-10.6 2-14.1.3Zm28.9-5.4c-2.1 7.7-6.8 9.9-9.3 12.2-6.4 5.9-11.1 6.7-15 5-3.3-1.4-6.1-4.5-8.9-7.8-2.2-2.6-4-5.5-5.1-9.7-.9-3.2-1.4-7-1.5-12v-1c0-2.9.2-.4 0-4.1.4-17.8 7.9-7.4 16.7-9.9 10.8-3.1 14.7-4.4 20.2 4.5 2 3.1 1.2 10.2 1.9 11.4.4.8 1.4-.3 2.1-1.6.4-.4 1.1-.6 1.7-.6s1.2.1 1.7.3c1.5.6 1.8 1.6 1.8 3.3 0 1.8-.5 3.6-1.2 5.1-.6 1.4-1.8 3.8-2.8 4.5-.7.5-1.5.6-2.2.4Zm-12.1-10.1c0-1.7-.7-3-1.6-3s-1.6 1.4-1.6 3 .7 3.1 1.6 3.1 1.6-1.4 1.6-3.1m-19.1-.1c0-1.5-.6-2.6-1.3-2.6s-1.3 1.2-1.3 2.6.6 2.6 1.3 2.6 1.3-1.2 1.3-2.6" class="cls-12"/><path d="M146.9 134.8c.2 3.7 0 1.1 0 4.1h-1.4c0-4.8 0-8.6 1.3-15.4 1.8-9.3 6.2-12.6 18.2-13.5 8-.6 21 1.9 23.3 10.4 1.6 5.8 1.1 10.9 1.1 17.2v.9c-.6 0-1.2.2-1.7.6-.7 1.3-1.7 2.4-2.1 1.6-.7-1.2 0-8.2-1.9-11.4-5.5-8.8-9.3-7.5-20.2-4.5-8.8 2.5-16.3-7.8-16.7 9.8Z" style="stroke-width:0;fill:#1e160d"/><path d="M162.2 254.7c0-.5.2-1 .3-1.6 1.5-7 2.5-13.6 3.7-20.5v-.7c1.2-7 2.6-14.2 4.5-22.3l.3-.4c3.9 2.8 9.9 4.9 13.5 4.9h.5c-1.8 6.3-5.6 14.9-7.4 21-.4 1.5-.9 2.9-1.3 4.2-1.7 5.4-3.2 9.9-4.5 16.3-.3 1.4-.6 2.9-1 4.3-.9 3.7-2.1 7.3-3.5 10.7.6 1.5.8 3.1.8 4.6 0 2.3-.5 4.2-.7 4.6-.2.5-1 .7-1.2.7s-.2 1-.5 1.1c-.3 0-1.2.5-1.6.7-.3.1-.9 1.1-1.4 1.3s-1.7-.5-2.1-.4-.6 1.3-1.5 1.5c-.2 0-.6 0-1.2-.2-2.3-.6-6.8-2.2-6.8-2.2l-.2-.4 5.6-2.2c0-1.6-.9-3.5-2-3.8-1.3-.4-2.2 1.5-4.9 1.3-1.7-.1-2-1.5-2-2.6s.1-1.2.1-1.2 3.7-.7 4.6-1.4 1.3-1.7 2.1-3 3.1-1.9 3.1-1.9c.7-.2 1.9-1.2 2.1-1.9 1-3.5 1.4-7 2.1-10.6Z" class="cls-12"/><path d="M173 139.1c.9 0 1.6 1.4 1.6 3s-.7 3.1-1.6 3.1-1.6-1.4-1.6-3.1.7-3 1.6-3" class="cls-4"/><path d="M177.4 164.4s-7.9 15-15.6 19c-.6-1.1.4-10.4.6-13.2v-.8c3.9 1.6 8.6.9 15-5" class="cls-12"/><path d="M171.9 157.3c.8-.2-3.3 4.4-8.2 4.2-2.9-.1-4.9-1-6-3.8 3.6 1.7 10.3.7 14.1-.4Z" style="stroke-width:0;fill:#f6faf4"/><path d="M158.2 286.7s.4 1 .3 1.4c-.1.3-9.6 5.2-14.4 5.2s-9.2-.6-12.2-3l-.3-.7 3.5-1.4v.3c.6.6 4.2 1.8 8.3 1.8s14.1-3.2 14.8-3.5Z" class="cls-8"/><path d="M208.9 247.8c2.2-6.4 1.9-8.7 1-12-2-7.1-13.4-4.5-13.4-4.5-1.7.1-3.8.7-5.9 1.4-6.7 2.3-13.9 6.6-13.9 6.6-1.7 5.4-3.2 9.9-4.5 16.3-.3 1.4-.6 2.9-1 4.3v11c1.3 0 3.4-.1 5.4-.6 3.1-.7 7.6-3.6 9.5-6-.6 1.6-4.8 13.8-4.8 13.8s-1.3 6.8-.8 9.8v.3c.6.5 1.6 1.1 3 1.7 2.3 1 5.5 1.9 9.2 1.8 5.8-.1 11.8-1.7 11.8-1.7v-.5c0-1.7 0-7.8-5-8.3.4 0 .8 0 1.1-.1 1.5-4.9-1.5-4.9 1.5-15.1 2-6.9 6.7-18.3 6.7-18.3Zm-50.6 36.8c-2.3-.6-6.8-2.2-6.8-2.2l-.2-.4-4.9 1.9-11.2 4.3v.3c.6.6 4.2 1.8 8.3 1.8s14.1-3.2 14.8-3.5c.6-.3 0-1.9 0-1.9v-.2Z" style="stroke-width:0;fill:#454545"/><path d="M154.2 139.3c.7 0 1.3 1.2 1.3 2.6s-.6 2.6-1.3 2.6-1.3-1.2-1.3-2.6.6-2.6 1.3-2.6" class="cls-4"/><path d="M194.4 168.6c-2.5-1-6.2-.5-6.2-.5h-6.1c-.9-2-2.5-3.5-4.8-3.7 0 0-7.9 15-15.6 19-.6-1.1.4-10.4.6-13.2h-.3c-2.5 1.6-4.7 4.4-6.3 6.9 0 0-2 .6-2.2 1-.2.3-3.5 1-5 6.2 0 .4-.2.7-.3 1.1 0 0-5 9.2-9 18.5l7.8 1.7 1.9.4 8.5 1.9 4 .9 8.1 1.8-3.4 21.4c1.2-7 2.6-14.2 4.5-22.3l.3-.4c3.9 2.8 9.9 4.9 13.5 4.9h.5c-1.8 6.3-5.6 14.9-7.4 21-.4 1.5-.9 2.9-1.3 4.2s7.3-4.3 13.9-6.6l6.7-49.4c1.2-6.2.7-13.3-2.7-14.8Z" style="stroke-width:0;fill:#598fcd"/><path d="M148.4 151.9c-1.5.9-3.6-4.8-4-7.3-.2-1.6-1.2-5.1 1.1-5.7.4-.1.8-.1 1.4 0v1c0 5 .6 8.9 1.5 12" class="cls-12"/><path d="m139.3 203.8 7.9 1.7-.3 26.9-16.7-.2v-.2l.3-30.2zm-8.8-2.2v.2h-.3l-.1 30.2-17.2-.1.1-26.7z" class="cls-6"/><path d="m130.5 201.8-.3 30.2h-.1l.1-30.2z" class="cls-6"/><path d="M167.7 270.7c.6 1.5.8 3.1.8 4.6l2.6-.9V271l.1-11c-.9 3.7-2.1 7.3-3.5 10.7m-6.1-62-4-.9-8.5-1.9-1.9-.4-.3 26.9-16.7-.2v-.2h-17.3l.1-26.8-14.8 3-10.8 2.2v21.5l.1 19.8v21.5l10.6 4.2 14.4 5.8 17 6.8.3-30.1v-10.6c.1 0 0 10.8 0 10.8v30.2c-.1 0 1.7-.7 1.7-.7l3.5-1.4 11.2-4.3v-3 3l4.9-1.9 5.6-2.2c0-1.6-.9-3.5-2-3.8-1.3-.4-2.2 1.5-4.9 1.3-1.7-.1-2-1.5-2-2.6s.1-1.2.1-1.2 3.7-.7 4.6-1.4 1.3-1.7 2.1-3c.8-1.4 3.1-1.9 3.1-1.9.7-.2 1.9-1.2 2.1-1.9 1-3.5 1.4-7 2.1-10.6l-1.1.2 1.1-.2c0-.5.2-1 .3-1.6 1.5-7 2.5-13.6 3.7-20.5v-.7l3.4-21.4-8.1-1.8Z" style="stroke-width:0;fill:#3246ff"/><path d="M171.1 271c1.4 0 3.5-.1 5.5-.6 3.1-.7 7.6-3.6 9.5-6m-30.3-87.3s-2 .6-2.2 1c-.2.3-3.5 1-5 6.2 0 .4-.2.7-.3 1.1 0 0-5 9.2-9 18.5m12.4-19.4s0 .2-.1.5c-.5 2.4-2.4 12.4-2.5 20.9" class="cls-2"/><path d="m146.4 283.8-11.2 4.3-3.6 1.4-1.8.7.1-30.2m27 19.8-5.6 2.1-4.9 1.9.1-9.1.1-17.6 12.1-1.8m3.8-.7-.3.1-1.1.1-14.5 2.3m24.6 2.9-.1 11-.1 3.4-2.6.9" class="cls-3"/><path d="M161.1 260v-5.2l.1-22.2m.4-23.9 8.1 1.8m-3.4 22.1h-5.1m-14-27.1 1.9.4 8.5 1.9 4 .9-.4 23.9-14.3-.2" class="cls-3"/><path d="m146.9 232.4-.3 24.7-16.7 2.9.1-10.8m.5-47.4 8.8 2 7.9 1.7-.3 26.9-16.7-.2m-17.6 51 17 6.8.3-30.2m-31.7 17.6 14.4 5.8.2-26.7m-14.6-2.8 14.6 2.8m-25.3-4.8.1 21.5 10.6 4.2v-23.7" class="cls-3"/><path d="M87.5 231.9v19.8l10.7 2v-21.8m0-23.7-10.8 2.2.1 21.5h10.7m14.8-26.7-14.8 3v23.7h14.7m0 0-.1 24.6 17.1 3.3.1-10.6.2-17v-.2" class="cls-3"/><path d="m112.9 231.9 17.2.1h.1l.3-30.2v-.2l-17.5 3.6z" class="cls-3"/><path d="M177.4 164.4s-7.9 15-15.6 19c-.6-1.1.4-10.4.6-13.2v-.8" class="cls-2"/><path d="M177.4 164.4c2.3.1 3.9 1.7 4.8 3.7.8 1.9 1.1 4.1 1 5.8l-5.4-.9v6c-5.6-1.2-10.6 2.5-15.9 4.5-1.6-3.5-2.6-6.2-6-6.3 1.6-2.5 3.8-5.3 6.3-6.9m20-2.2h6m9 15.3c-.5 2.5-1.3 4.9-2.3 6.6 0 0-2.4 8.5-7.3 22.9-.3.9-1.3 1.3-2.7 1.3h-.1c-3.6 0-9.6-2.2-13.5-4.9-.5-.3-.9-.7-1.3-1 2.5-9.6 7.3-26.8 8.8-26.8m9.4-13.4s3.7-.5 6.2.5c3.4 1.4 4 8.5 2.7 14.7" class="cls-2"/><path d="m197.3 182.1-.1 1.2v.1l-6.7 49.4v.4m-24.2-1v.4c-1.2 6.9-2.3 13.5-3.7 20.5-.1.5-.2 1-.3 1.6-.7 3.5-1.1 7.1-2.1 10.6-.2.7-1.4 1.6-2.1 1.9 0 0-2.3.6-3.1 1.9s-1.2 2.3-2.1 3-4.6 1.4-4.6 1.4-.1.5-.1 1.2c0 1 .3 2.5 2 2.6 2.7.2 3.6-1.6 4.9-1.3 1.1.3 2 2.2 2 3.8v.8" class="cls-2"/><path d="M185.2 214.2c-1.8 6.3-5.6 14.9-7.4 21-.4 1.5-.9 2.9-1.3 4.2-1.7 5.4-3.2 9.9-4.5 16.3-.3 1.4-.6 2.9-1 4.3-.9 3.7-2.1 7.3-3.5 10.7.6 1.5.8 3.1.8 4.6 0 2.3-.5 4.2-.7 4.6-.2.5-1 .7-1.2.7s-.2 1-.5 1.1c-.3 0-1.2.5-1.6.7-.3.1-.9 1.1-1.4 1.3s-1.7-.5-2.1-.4-.6 1.3-1.5 1.5c-.2 0-.6 0-1.2-.2-2.3-.6-6.8-2.2-6.8-2.2" class="cls-2"/><path d="M176.6 239.4s7.3-4.3 13.9-6.6c2.1-.7 4.2-1.3 5.9-1.4 0 0 11.4-2.6 13.4 4.5 1 3.3 1.2 5.6-1 12" class="cls-2"/><path d="M195.1 244.2s-2.7 1.9-5.1 6.3-3.4 12.3-4 13.9-4.8 13.8-4.8 13.8m0 .1c.7 3 3 4.2 5.7 4.5 4 .4 9-.9 12.6-1.4.4 0 .8 0 1.1-.1 1.5-4.9-1.5-4.9 1.5-15.1 2-6.9 6.7-18.3 6.7-18.3m-21.9 35c-2.2.9-3.7 5.6-3.4 7.2" class="cls-2"/><path d="M181.2 278.3s-1.3 6.8-.8 9.8v.3c.6.5 1.6 1.1 3 1.7 2.3 1 5.5 1.9 9.2 1.8 5.8-.1 11.8-1.7 11.8-1.7v-.5c0-1.7 0-7.8-5-8.3" class="cls-2"/><path d="m204.8 289.7.6.5s.2 2.1 0 2.2c-.2.2-6.8 2.8-13.1 2-6.3-.7-12-4.6-12-4.6v-1.7m-22.1-3.3s.6 1.6 0 1.9-10.6 3.5-14.8 3.5-7.7-1.2-8.2-1.8" class="cls-2"/><path d="M158.2 286.7s.4 1 .3 1.4c-.1.3-9.6 5.2-14.4 5.2s-9.2-.6-12.2-3m29.9-106.9c-3.8 9.9-3.1 13.5-4.2 24.3" class="cls-2"/><path d="M146.9 134.8c.2 3.7 0 1.1 0 4.1v1c0 5 .6 8.9 1.5 12 1.1 4.2 2.9 7.1 5.1 9.7 2.8 3.3 5.6 6.4 8.9 7.8 3.9 1.6 8.6.9 15-5 2.5-2.2 7.2-4.5 9.3-12.1" class="cls-1"/><path d="M151.2 136.7c1-.8 5-.9 6-.4m12.8 0c1.9-.9 6.8-.3 7.2.4m-21.7 5.2c0 1.5-.6 2.6-1.3 2.6s-1.3-1.2-1.3-2.6.6-2.6 1.3-2.6 1.3 1.2 1.3 2.6m19.1.2c0 1.7-.7 3.1-1.6 3.1s-1.6-1.4-1.6-3.1.7-3 1.6-3 1.6 1.4 1.6 3m-16.8 9.3c1 2.5 6 2.7 9.8.8m-10.2 5.2c.1 0 .3.1.4.2 3.6 1.8 10.3.8 14.1-.3.8-.2-3.3 4.4-8.2 4.2-2.9-.1-4.9-1-6-3.8" class="cls-1"/><path d="M145.5 138.8c0-4.7 0-8.5 1.3-15.3 1.8-9.3 6.2-12.6 18.2-13.5 8-.6 21 1.9 23.3 10.4 1.6 5.8 1.1 10.9 1.1 17.2m-2.2 2.3c.1-.3.3-.6.5-.8.4-.4 1.1-.6 1.7-.6s1.2.1 1.7.3c1.5.6 1.8 1.6 1.8 3.3 0 1.8-.5 3.6-1.2 5.1-.6 1.4-1.8 3.8-2.8 4.5-.7.5-1.5.6-2.2.4-.4-.1-.8-.4-1.2-.8m-38.6-12.5h-1.4c-2.3.6-1.4 4.1-1.1 5.7.4 2.5 2.5 8.2 4 7.3q0 0 0 0" class="cls-1"/><path d="M188.3 137.2c0 .5-.2 1.2-.6 1.9-.7 1.3-1.7 2.4-2.1 1.6-.7-1.2 0-8.2-1.9-11.4-5.5-8.8-9.3-7.5-20.2-4.5-8.8 2.5-16.3-7.8-16.7 9.8h0v1.4" class="cls-1"/></svg>')}`;
export default image;
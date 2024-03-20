/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="Layer_5" width="300" height="300" viewBox="0 0 300 300"><defs><style>.cls-2{stroke-linecap:round;stroke-linejoin:round}.cls-2,.cls-3,.cls-4{fill:none}.cls-2,.cls-3{stroke:#000}.cls-3,.cls-4{stroke-miterlimit:10}.cls-4{stroke:#fff}.cls-11,.cls-12,.cls-5,.cls-6,.cls-9{stroke-width:0}.cls-6{fill:#f6faf4}.cls-9{fill:#42311e}.cls-11{fill:#9778b8}.cls-12{fill:#f1d16a}</style></defs><path d="M202.3 284.9c.8 1.1.5 3.9.5 3.9s-4.9 4.8-12.1 5.6-12-5.4-12-5.4l-.4-4.8.8-1.1h.1c0 .4-.1.6-.1.6s1.3 8.1 12.5 7.5c9.4-.5 10.4-4.9 10.5-6.3h.1Z" class="cls-11"/><path d="M200.3 277.9c2.7 4.8 1.9 6.6 1.9 6.6v.4c0 1.4-1.1 5.8-10.5 6.3-11.2.6-12.5-7.5-12.5-7.5s0-.2.1-.6c0-.1 0-.3.1-.5.3-.3 3.3-4.3 7.8-6.3 2.3-1.1 5.1-1.7 8.1-1 1.6.4 3.3 1.2 4.9 2.5Z" class="cls-11"/><path d="M194.6 62c-.7 1.6-1.5 3-2.4 4 0-6.8-.5-10.8-2.8-14.7-.3 6.3-.7 13.3-3.2 18.9-.5-4.6-1.7-10.1-3.6-15.2-2.1-5.7-5.2-11-9.3-14.2-12.7-2.1-18.3 10.2-18 17.9.2 3.5-.3.8.3 3.2h-.3c-.3-.1-.7-.1-1.1.1-1.3-14.8.8-21.9 8.7-26.5 2.8-1.6 7.5-2.9 11.1-3.1 8.9-.4 16.1.7 21.2 7.6 4.7 6.3 6.1 11.2 4.2 21.8-1.2-1.1-3.4-1.1-4.4.2h-.3Z" class="cls-9"/><path d="M196.2 91.7c.5.1.9.3 1.4.5-2.6 1.2-5.3 4.2-7.5 7.7-2.3 3.4-3.6 7.5-4.8 11.4-.1.7-7.6 21.1-9.7 28.3h-.1s-.7 1-1.6 2.6v-.4c.1 0 .1-1.1.1-1.1l.5-24-18.7-.5c2.4-9 8.6-19.2 8.6-19.2l5-2.1c-1.4.8-2.1 3-2.5 6.6s2.8 4.9 2.8 4.9c3.3 1.1 10-3.7 12.7-6.4 1.8-1.9 4.4-5.3 6.6-9.4 1.6 0 3.6.3 5.1.5.8.1 1.5.3 2.2.5Z" class="cls-6"/><path d="M194.4 76.2c2.4 6.6 2 9.5 1.9 15.3v.2c-.8-.2-1.5-.4-2.3-.5-1.5-.2-3.5-.4-5.1-.7-1.2-.1-2.2-.3-2.5-.3v-5c1.8-1.1 7.9-3.9 8.6-14.6 1 0 2.1 0 3-.3-.9 2.1-2.2 4-3.6 5.8Z" class="cls-9"/><path d="M194.8 270.3c2.6 3.1 4.4 5.6 5.5 7.6-1.7-1.3-3.4-2.1-4.9-2.5l-2.7-4.2s1.5-.6 1-3.1c0-.3-.1-.6-.3-.8-.3-.7-.6-1.2-1-1.6v-.8c2.2 1.7 1.9 3.7 2.5 5.5Z" class="cls-11"/><path d="m192.5 271.2 2.7 4.2c-3-.7-5.7-.1-8.1 1l-2.1-6.7c.2-3.3 4-4 4.7-4 .6 0 2.6-.2 3.4 1.4.1.3.2.5.3.8.5 2.6-1 3.1-1 3.1Z" class="cls-11"/><path d="M191.7 186.1c.7 10.1 1.3 27.6 1.3 27.6s-1.6 1.5-3.9 3c-2.4 1.6-5.5 3.2-8.6 3.6-2.1.2-4.4 0-6.4-.6-3.9-.9-7-2.6-7-2.6l-3.6-23c.7.4 1.3.7 1.7.8 2.2.8 7.8-5.1 10.4-6.4 0-3.7-1.1-6-2.2-10.2 0-.7.1-1.5.4-2.6l.7.2c3.2-.3 7.5-3.3 10-5.3 0 0 6.6 5.3 7.2 15.4Z" class="cls-12"/><path d="M192.2 265.6c.4.4.8 1 1 1.6-.8-1.6-2.8-1.4-3.4-1.4-.8 0-4.5.7-4.7 4l-.4-1.3c0-.5.1-3.2 3.6-3.8 1.8-.3 3 0 3.9.9" class="cls-11"/><path d="M188.9 134.7c2-2.9 3.9-5.7 5.5-8.4 0 0-10.3 22.7-11.1 28s3.4 14.6 3.4 14.6-.9.8-2.3 1.9c-2.6 2-6.9 5-10 5.3l-.7-.2c1.3-6 5.5-17.4 7.8-23 2.7-6.5 1.4-11 1.4-11 .2-.3.5-.7.8-1 1.4-1.5 5.2-6.2 5.2-6.2" class="cls-6"/><path d="m184.2 266.8.5 1.6.4 1.3 2.1 6.7c-4.5 2.1-7.5 6-7.8 6.3.8-3.6 3.2-14.6 3.2-15.2 0-.7 1.4-1.8 1.6-2z" class="cls-11"/><path d="M180.5 59.6c.9 0 1.7 1.5 1.7 3.3s-.8 3.3-1.7 3.3-1.7-1.5-1.7-3.3.8-3.3 1.7-3.3" class="cls-5"/><path d="M182.6 77.5c-1.9 2.7-2.6 3-4.2 4s-5 1.3-6.7 1.1c-2.7-.4-4-1.5-5.1-3.5 4.8 1.5 15.1-.8 16-1.7Z" class="cls-6"/><path d="m163.5 194.2 3.6 23c-1.2.6-2.4 1-3.6 1.4-5.5 1.6-10.4.8-14.2-.6-1.9-.7-3.5-1.5-4.8-2.3l1.6-27.4 8.1-.4v.4s6 4.1 9.3 5.9" class="cls-12"/><path d="M162 59.9c.8 0 1.4 1.3 1.4 2.9s-.6 2.9-1.4 2.9-1.4-1.3-1.4-2.9.6-2.9 1.4-2.9" class="cls-5"/><path d="M156.3 264.2q0-.9.3-1.8c.2 0 1.6.5 1.4 1.8-.2 1.5 1.3 7.9.9 9.3 0 .1-.1.3-.3.4-1.3 1.5-6.3 4-6.9 4.7s-5.2 5.2-7.8 6.9c.4-5.1-2.3-8.9-5.3-11.1 0 0 4.8-3.9 8.5-6.4.8-.5 1.5-1 2.2-1.3.8-.5 1.5-.7 1.8-.6 1.6.5 1.9 1 3.1.5.7-.3 1.6-1.6 2.1-2.5Z" class="cls-11"/><path d="M158.6 273.9c.4 1.6 0 2.9 0 2.9s-5 2.5-5.9 3.1-3.9 4.6-6.8 7.2-8.7 3.5-12.9 3.2c-4.1-.3-9.4-4.4-9.4-4.4V283l1-.8v.7c3.3 6.1 16 4.2 18.4 3.2.3-.1.6-.3.9-.5 2.7-1.7 7.2-6.2 7.8-6.9s5.6-3.2 6.9-4.7Z" class="cls-11"/><path d="M204.2 100.9c-.3-4.1-2.9-7.2-6.6-8.7-2.6 1.2-5.3 4.2-7.5 7.7-2.3 3.4-3.6 7.5-4.8 11.4-.1.7-7.6 21.1-9.7 28.3h-.1s-.7 1-1.6 2.6c-1.4 2.4-3.2 6.2-3.8 9.5-.4 2.2-1.1 6.6-1.8 11.3-1.1 6.9-2.3 14.2-3 16.3 0 0-4.4 1.9-5.1 3.2-.2.3-.6.6-1 .9-1.2.7-3 1.1-3.6.9-.8-.2-.1 2.7 1.8 3.1v.2c-.1 0-2.5.1-2.5.1h-.6v.5s6 4.1 9.3 5.9c.7.4 1.3.7 1.7.8 2.2.8 7.8-5.1 10.4-6.4 0-3.7-1.1-6-2.2-10.2 0-.7.1-1.5.4-2.6 1.3-6 5.5-17.4 7.8-23 2.7-6.5 1.4-11 1.4-11 .2-.3.5-.7.8-1 1.4-1.5 5.2-6.2 5.2-6.2 2-2.9 3.9-5.7 5.5-8.4 6.8-11.2 10.1-20.6 9.8-25.3Zm-11.9 138.4c-.8-5-2.1-7.5-3.2-11.5 0-3.3-.2-10.6 0-11-2.4 1.6-5.5 3.2-8.6 3.6-2.1.2-4.4 0-6.4-.6.4 3.5 4 9.1 4.2 11.2s-.6 8.7 0 12.2c.5 3.2 5.7 15.4 5.9 22.3v1.3l.5 1.6c0-.4.1-3.2 3.6-3.7 1.8-.3 3 0 3.9.9v-.8c-.4-5 .8-20.7 0-25.5Zm-28.8-20.7c-5.5 1.6-10.4.8-14.2-.7 0 0-1 2.7-1 4.6s1 28.2-.6 39.1c.6.3 1.1.6 1.6 1.1 1.5 1.5 0 4 0 4 .8-.4 1.5-.7 1.8-.6 1.6.5 1.9 1 3.1.5.7-.3 1.6-1.6 2.1-2.5q0-.9.3-1.8c1.3-6.7 7.5-19.8 8.1-27 .2-3.5-2.6-10-2.5-10.6.1-.7 1.4-6.1 1.4-6.1Zm-6.4-147.5c.5 5.3 1.7 10.6 5.5 14 2.6 2.3 4.6 4 6.7 4.9 0 .3.3 2.4.4 4.8l-.4.2c-1.4.8-2.1 3-2.5 6.6s2.8 4.9 2.8 4.9c3.3 1.1 10-3.7 12.7-6.4 1.8-1.9 4.4-5.3 6.6-9.4-1.2-.3-2.2-.4-2.5-.4v-5c1.8-1.1 7.9-3.9 8.6-14.6 1 0 2.1 0 3-.3.8-.2 1.4-.6 1.9-1.2.6-.7.8-1.6.9-2.6.2-1.7-.3-3.5-1.5-4.6s-3.4-1.1-4.4.2h-.3c-.7 1.4-1.5 2.8-2.4 3.9 0-6.8-.5-10.8-2.8-14.7-.3 6.3-.7 13.3-3.2 18.9-.5-4.6-1.7-10.1-3.6-15.2-2.1-5.7-5.2-11-9.3-14.2-12.7-2.1-18.3 10.2-18 17.9.2 3.5-.3.8.3 3.2h-.3c-.3-.1-.7-.1-1.1.1-.7.5-1.3 1.8-1.3 4.5s3.4 4.4 4.3 4.4Zm23.4-11.5c.9 0 1.7 1.5 1.7 3.3s-.8 3.3-1.7 3.3-1.7-1.5-1.7-3.3.8-3.3 1.7-3.3m-13.9 19.6c4.8 1.6 15.1-.7 16-1.6-1.9 2.7-2.6 3-4.2 4s-5 1.3-6.7 1.1c-2.7-.4-4-1.5-5.1-3.5M162 60c.8 0 1.4 1.3 1.4 2.9s-.6 2.9-1.4 2.9-1.4-1.3-1.4-2.9.6-2.9 1.4-2.9" style="stroke-width:0;fill:#956e3d"/><path d="M149.3 262.7c1.5 1.5 0 4 0 4-.6.4-1.4.8-2.2 1.4 2.6-3.7-.3-5.7-1.5-5.8-1 0-2.7-.1-3.5.5.6-.9 1.9-1.8 2.6-1.8.6 0 1.8 0 3.1.6.6.2 1.1.6 1.6 1.1Z" class="cls-11"/><path d="M145.6 262.3c1.2 0 4.1 2.1 1.5 5.7-3.7 2.5-8.5 6.4-8.5 6.4-1.6-1.2-3.3-1.8-4.5-1.9-.3 0-.7 0-1.1.1l9.2-6s-.7-2.2-.4-3.4c0-.2.2-.3.3-.5.8-.6 2.5-.6 3.5-.5Z" class="cls-11"/><path d="M138.6 274.4c2.9 2.1 5.7 6 5.3 11-.3.2-.6.4-.9.5-2.4 1-15.1 2.9-18.4-3.2v-.7c.4-4.6 5.1-8.7 8.4-9.4.4 0 .8-.1 1.1-.1 1.2 0 2.9.7 4.5 1.9" class="cls-11"/><path d="m134.3 115.6-20.7-.6-.1 25.6-.1 23.6 20.5-.5 21.2-.4.3-22.6.4-24.5zm-35 3.1v21.5l-.1 19.9 6.6 1.9 7.1 2.2.1-23.6.2-25.4-7.3 1.8z" style="stroke-width:0;fill:#4d0099"/><path d="m155.8 116.2-.4 24.5-.3 22.6-21.2.5-20.4.4v25.6l20.2-1 12.5-.6 8.1-.4h.6l2.4-.1v-.2c-1.9-.4-2.5-3.4-1.7-3.1.6.2 2.4-.2 3.6-.9.4-.3.8-.6 1-.9.8-1.3 5.1-3.2 5.1-3.2.8-2.1 2-9.5 3-16.3.7-4.7 1.4-9 1.8-11.3.6-3.3 2.5-7 3.8-9.5v-.4c.1 0 .1-1.1.1-1.1l.5-24-18.7-.5Zm-56.6 43.9.1-19.9v-21.5l-5.1 1.3-.1 19.9-.1 18.7v20.3l5.1 3.1 6.5 3.8 7.2 4.3.1-25.9-7.1-2.2z" style="stroke-width:0;fill:#3246ff"/><path d="m146.1 188.2-1.6 27.4c1.3.8 2.9 1.6 4.8 2.3 3.8 1.4 8.7 2.3 14.2.6 1.2-.3 2.3-.8 3.6-1.4m15.8-75.3s1.3 4.5-1.4 11c-2.3 5.6-6.6 17-7.8 23-.2 1-.3 1.9-.4 2.6 1.1 4.1 2.2 6.5 2.2 10.2-2.6 1.2-8.2 7.2-10.4 6.4-.4-.1-1-.4-1.7-.8-3.3-1.8-9.3-5.9-9.3-5.9" class="cls-3"/><path d="m133.6 188.8-20.3 1 .1-25.6m41.3 23.6h-.5l-8.1.4-12.5.6.3-25.1m21.2-.4-21.2.4m23.3 24-2.5.1.4-24.5m.3-22.6-.3 22.6 13.1-.3m5.8-21.2v-1" class="cls-4"/><path d="m155.8 116.2 18.6.6-.4 24-18.6-.1m-21.1-25.1 21.5.6-.4 24.5H134m0 0-.1 23-20.5.5.1-23.6m20.5.1-20.5-.1.1-25.6 20.7.6zm-28.4 45.1 7.2 4.3.1-25.9M99.1 182l6.5 3.8.2-23.8m-6.6-1.9 6.6 1.9M94 158.6v20.3l5.1 3.1.1-21.9m-5.1-20.2-.1 18.7 5.2 1.5.1-19.9" class="cls-4"/><path d="m99.3 118.7-5.1 1.3-.1 19.9 5.2.3m6.6-23.2-6.6 1.7v21.5l6.5.2m0 0V162l7.1 2.2.1-23.6" class="cls-4"/><path d="m105.8 140.4 7.2.2.2-25.4-7.3 1.8z" class="cls-4"/><path d="M169.8 94.8c-.1-2.3-.4-4.5-.4-4.7" class="cls-2"/><path d="M169.5 99.5c.3-1.2.3-3 .3-4.7" class="cls-3"/><path d="M188.9 90.7c-2.2 4-4.7 7.5-6.6 9.4-2.7 2.7-9.4 7.5-12.7 6.4 0 0-3.1-1.2-2.8-4.9s1.1-5.9 2.5-6.6" class="cls-3"/><path d="M186.4 90.3c.3 0 1.2.2 2.5.3 1.6.2 3.6.5 5.1.7.8.1 1.5.3 2.2.5.5.1.9.3 1.4.5 3.7 1.5 6.3 4.6 6.6 8.7.3 4.7-3 14.1-9.8 25.3-1.6 2.7-3.5 5.5-5.5 8.4m-19.1-40-.4.2-5 2.1s-6.2 10.2-8.6 19.2" class="cls-3"/><path d="M194.4 126.2s-10.3 22.7-11.1 28 3.4 14.6 3.4 14.6-.9.8-2.3 1.9c-2.6 2-6.9 5-10 5.3m14.5-41.3s-3.7 4.7-5.2 6.2c-.3.3-.6.6-.8 1-.9 1.2-1.4 2.4-1.4 2.7m-18.1 42h-.1l-2 1.5m3.9-8.8s-4.4 1.9-5.1 3.2c-.2.3-.6.6-1 .9-1.2.7-3 1.1-3.6.9-.8-.2-.1 2.7 1.8 3.1 1.9.3 5.6-.8 6-.9m22-75.2c-.1.7-7.6 21.1-9.7 28.3-.3 1-.5 1.8-.5 2.2m.3-2.2s-.7 1-1.6 2.7c-1.4 2.4-3.2 6.2-3.8 9.5-.4 2.2-1.1 6.6-1.8 11.3m21 53.6c-2.4 1.6-5.5 3.2-8.6 3.6-2.1.2-4.4 0-6.4-.6-3.9-.9-7-2.6-7-2.6l-3.6-23" class="cls-3"/><path d="M184.5 170.7s6.6 5.3 7.2 15.4c.7 10.1 1.3 27.6 1.3 27.6s-1.6 1.5-3.9 3m-32.8 47.4q0-.75.3-1.8c1.3-6.7 7.5-19.8 8.1-27 .2-3.5-2.6-10-2.5-10.6.1-.7 1.4-6.1 1.4-6.1m-14.3-.7s-1 2.7-1 4.6 1 28.2-.6 39.1" class="cls-3"/><path d="M156.6 262.3c.2 0 1.6.5 1.4 1.8-.2 1.5 1.3 7.9.9 9.3 0 .1-.1.3-.3.4-1.3 1.5-6.3 4-6.9 4.7s-5.2 5.2-7.8 6.9c-.3.2-.6.4-.9.5-2.4 1-15.1 2.9-18.4-3.2v-.7c.4-4.6 5.1-8.7 8.4-9.4.4 0 .8-.1 1.1-.1 1.2 0 2.9.7 4.5 1.9 2.9 2.1 5.7 6 5.3 11" class="cls-3"/><path d="M138.6 274.4s4.8-3.9 8.5-6.4c.8-.5 1.5-1 2.2-1.3.8-.5 1.5-.7 1.8-.6 1.6.5 1.9 1 3.1.5.7-.3 1.6-1.6 2.1-2.5.3-.5.5-.8.5-.8m-14.7-.5c.8-.6 2.5-.6 3.5-.5 1.2 0 4.1 2.1 1.5 5.7m-14.1 4.7 9.2-6s-.7-2.2-.4-3.4c0-.2.1-.4.3-.5" class="cls-3"/><path d="M149.3 266.7s1.5-2.5 0-4c-.5-.5-1-.8-1.6-1.1-1.2-.5-2.5-.5-3.1-.6-.7 0-2 .9-2.6 1.8-.1.2-.2.3-.3.5m-17.1 18.8-1 .8v2.9s5.3 4.1 9.4 4.4 9.9-.6 12.9-3.2c2.9-2.6 5.9-6.7 6.8-7.2s5.9-3.1 5.9-3.1.4-1.3 0-2.9m15.5-54.1c.4 3.5 4 9.1 4.2 11.2s-.6 8.7 0 12.2c.5 3.2 5.7 15.4 5.9 22.3v2m5-50.7c-.2.5 0 7.7 0 11 1 4 2.4 6.5 3.2 11.5.7 4.8-.5 20.4 0 25.5v.7m-5.7-40.3c0 .3 2.2 3.2 1.3 7.9m-8.8-4.7s0 3.1 1.8 4.8" class="cls-3"/><path d="M200.2 277.9c-1.1-2-2.8-4.5-5.5-7.6-.7-1.9-.3-3.8-2.5-5.5m-12.8 17.9c0 .2 0 .4-.1.5 0 .4-.1.6-.1.6s1.3 8.1 12.5 7.5c9.4-.5 10.4-4.9 10.5-6.3v-.4s.8-1.8-1.9-6.6m-16.1-12.5c-.2.1-1.7 1.3-1.6 2 0 .6-2.4 11.6-3.2 15.2" class="cls-3"/><path d="M179.4 282.7c.3-.3 3.3-4.3 7.8-6.3 2.3-1.1 5.1-1.7 8.1-1 1.6.4 3.3 1.2 4.9 2.5" class="cls-3"/><path d="m184.7 268.4.4 1.3 2.1 6.7m-3-9.6.5 1.6m8.6-1.2c-.8-1.6-2.8-1.4-3.4-1.4-.8 0-4.5.7-4.7 4m10.1 5.6-2.7-4.2s1.5-.6 1-3.1c0-.3-.1-.6-.3-.8" class="cls-3"/><path d="M184.7 268.4c0-.5.1-3.2 3.6-3.8 1.8-.3 3 0 3.9.9.4.4.8 1 1 1.6.1.3.2.5.3.8m-14.3 15.3-.8 1.1.4 4.8s4.8 6.2 12 5.4 12.1-5.6 12.1-5.6.3-2.8-.5-3.9" class="cls-3"/><path d="M155.2 58.8c.2 3.5-.3.8.3 3.2 0 .3.1.6.2 1.1 0 0 .7 1.5 1.3 8 .5 5.3 1.7 10.6 5.5 14 2.6 2.3 4.6 4 6.7 4.9h0c4.2 2 8.3.6 17.1-4.8 1.8-1.1 7.9-3.9 8.6-14.6m-36.1-14.1c1.7-2 4.9-1.7 6.5-.7m11.7-.1c1.9-1.4 4.2-1.3 5.6-.6.6.3 1.1.7 1.3 1.2m2.5 35.6v-6.7" class="cls-2"/><path d="M163.4 62.8c0 1.6-.6 2.9-1.4 2.9s-1.4-1.3-1.4-2.9.6-2.9 1.4-2.9 1.4 1.3 1.4 2.9m18.8.1c0 1.8-.8 3.3-1.7 3.3s-1.7-1.5-1.7-3.3.8-3.3 1.7-3.3 1.7 1.5 1.7 3.3m-15.8 9c0 2.3 4.7 2.4 6.4 2.2m-6.6 4.9c.1 0 .3 0 .4.1 4.8 1.6 15.1-.7 16-1.6-1.9 2.7-2.6 3-4.2 4s-5 1.3-6.7 1.1c-2.7-.4-4-1.5-5.1-3.5" class="cls-2"/><path d="M199.3 62c1.9-10.7.5-15.5-4.2-21.8-5.1-6.9-12.3-8-21.2-7.6-3.6.2-8.3 1.5-11.1 3.1-8 4.6-10.1 11.7-8.7 26.5" style="stroke:#231f20;stroke-linecap:round;stroke-linejoin:round;fill:none"/><path d="M192.2 66.1s0 0 0 0c0-6.8-.5-10.8-2.8-14.7v-.2m7 3.4c0 2.2-.7 5-1.8 7.5-.7 1.6-1.5 3-2.4 4m-37-7.3c-.3-7.7 5.3-20 18-17.9M198 70.4c-.9.3-2 .3-3 .3m0-8.5c1-1.3 3.1-1.3 4.4-.2 1.2 1.1 1.7 2.9 1.5 4.6 0 .9-.3 1.9-.9 2.6-.5.6-1.2 1-1.9 1.2m-42.8-8.3c-.3-.2-.7-.2-1.1 0-.7.5-1.3 1.8-1.3 4.5s3.4 4.4 4.3 4.4" class="cls-2"/><path d="M198.1 70.2v.2h0c-.9 2.1-2.2 4-3.6 5.8m-.1 0c2.4 6.6 2 9.5 1.9 15.3m-23.1-50.6c4.1 3.2 7.2 8.5 9.3 14.2 1.9 5.1 3.1 10.5 3.6 15.2 2.5-5.6 2.9-12.6 3.2-18.9 0-1 .1-1.9.1-2.9" class="cls-2"/><path d="M197.6 92.2c-2.6 1.2-5.3 4.2-7.5 7.7-2.3 3.4-3.6 7.5-4.8 11.4" class="cls-3"/></svg>')}`;
export default image;
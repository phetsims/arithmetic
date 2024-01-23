/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="Layer_5" width="300" height="300" viewBox="0 0 300 300"><defs><style>.cls-1{stroke-linejoin:round}.cls-1,.cls-2{stroke-linecap:round}.cls-1,.cls-2,.cls-3,.cls-4{fill:none}.cls-1,.cls-2,.cls-4{stroke:#000}.cls-2,.cls-3,.cls-4{stroke-miterlimit:10}.cls-3{stroke:#fff;stroke-width:.8px}.cls-10,.cls-13,.cls-14,.cls-5,.cls-6,.cls-8,.cls-9{stroke-width:0}.cls-6{fill:#4d0099}.cls-8{fill:#1a1a1a}.cls-9{fill:#414141}.cls-10{fill:#bdcae8}.cls-13{fill:#7d574c}.cls-14{fill:#fff}</style></defs><path d="M160.6 232.3c-6.3.5-12.7 0-18.4-.8-5.7-.9-10.7-2.3-14-3.6-2.1-.8-3.6-1.6-4.2-2.3 1.2-9.2 7.3-33.8 8.3-39 .3-1.7.5-2.5.5-2.9 0 1.3-.2 2.3-.3 3 4.6 1.4 9.3 2.2 14 2.6 2.3.2 4.9.6 7.1.2 1-.2 1.1-.8 1.7-1.6q1.05-1.35 2.4-2.4c.1-.1.3-.2.5-.2.3 0 .5.1.7.3.9.8 2.3 2.5 3.4 2.9 1 .4 2.8-.3 3.8-.6 2.9-.7 5.8-1.5 8.7-2.6v-.7c2.3 10.5 6.2 27.4 7.8 38.8-1.7 1.7-3.7 3.1-5.9 4.3-4.8 2.6-10.4 3.9-16.3 4.4Z" class="cls-10"/><path d="m181.825 104.451 17.946-8.83 8.83 17.945-17.945 8.83z" class="cls-6"/><path d="M205.3 140.9c-.1-.1-.3-.2-.5-.2-3.8-.7-7.8.4-10.7 2.8-1.6-.6-3.3-.1-4.7 1-.7.5-1 1-1.2 1.5h-.2c0-.6-.2-1-.5-1.4-1.6-.7-3.7-1-5.7-.7-1.4.2-2.8.8-3.7 1.7-1.5 1.5-2.4 3.1-2.9 4.8-.2.2-2 1.8-2.1 2.6 0 1.4.1 2.7.2 4 .7 1.7 1.1 1.8 3.1 2.6h.1c2 .6 5-.4 6.7-1.4 1-.5 1.3-.7 2.1-1 .6.8 1.5 1.4 2.5 1.4 0 .4 0 .8-.1 1.2 0 .5 0 1.1.3 1.5.4.5 1.1.6 1.8.6s1.4 0 1.9-.3c.4-.3.6-.8.7-1.2.1-.5 0-1.2-.1-2.1.8-.3 1.6-.9 2-1.7.6.4 1.2.7 1.9.9.8.2 1.6.2 2.3-.3.6-.4 1-1.1 1.1-1.9v-.1c.5 0 1 0 1.6.1.5 0 1.1 0 1.5-.4.2-.2.3-.5.4-.8.4-.9.7-1.8 1.1-2.7.2-.5.4-1.2.2-1.7-.2-.4-.6-.6-1-.7-.4 0-.8 0-1.2.1-.3 0-.5.2-.8.3-1.1 0-2.4 0-3-.9-.4-.6-.2-1.5.2-2.1s1-1.1 1.6-1.5c1.5-1 2.9-2.1 4.4-3.1.3-.2.7-.6.5-1Zm-32.2 132.6c-.8-.4-1.3-.7-1.5-.8-1.4-.4-2.1 1.4-3.2 1.3-.5 0-1.2-.6-1.6-1.3l-.6-3.3c-2.7-13.5-6.1-21.3-6.4-28.9-.2-3.5 1-8.1 1-8.1v-.2c5.8-.5 11.5-1.8 16.2-4.4 0 .4.5 2.3.5 3.4 0 1.3-.7 4.4-.7 4.4s-.6 27.8-.7 32c-4-.4-2.9 5.8-2.9 5.8Z" class="cls-13"/><path d="M197.4 285.8s.5-7.1-4.4-8.2-13.9-5.8-13.9-5.8v-.5c.3-1.2.2-2.1-.3-2.4h-.2c-1.1-.6-2-.9-2.7-1-4-.4-2.9 5.8-2.9 5.8-.8-.4-1.3-.7-1.5-.7-1.4-.4-2.1 1.4-3.2 1.3-.5 0-1.2-.6-1.6-1.3l-.6-3.3c-.8 0-2.2.4-2 2.2.3 2.3.5 7.6.5 9s-1.5.5 0 2.9 8.8 2.4 9.5 2.5 3.8 2.1 6.1 3 7.6 2 12.1 2.1 5.8-2.8 5.8-2.8v-2.2l-.8-.5Z" class="cls-9"/><path d="M151.2 71.9c2.7-1 4.7-1.4 7-1.4.2-.8-2.9-.8-5.3-.2-2.3.6-2.2 1.1-1.7 1.6m7.5 17.7c-3.8 2.9-9.5 4.6-13.7 3.1 1.1 1.4 2.8 2.6 4.4 3.4s4.9.8 6.5-.1c2.1-1.2 3-3.9 2.8-6.3Zm-2.1-10.1c.6 1.5 1.5 2.5 2.1 2.2.6-.2.6-1.6 0-3.1s-1.5-2.5-2.1-2.2c-.6.2-.6 1.6 0 3.1m-34.7 13.9c0-1 .2-2.2 1.2-2.9s3.3-.5 4.1 0c1.4-3.5-.8-11 2.7-19.9 2.6-6.8 8-11 10.3-11.8q.75-.3 1.8-.3c5.8-.1 17 5.8 19.6 12.1.1.3 1.1 3.6 1.1 5 0 1.6.4 2.6 1 3.5 1.2 1.8 3.1 3.1 3.8 8.5.9 6.5-1.5 11.2-9.8 18.7 0 0-.8 1.7-1.3 3.7-.3 1.4-.6 2.9-.4 4.2 0 2.9-2.8 14.7-2.8 14.7-.5-.5-9.8-10.1-12.5-14.5-.3-.9-.6-1.8-1-2.7-1.3-3.2-3.2-6.6-7.9-10.4-1.1.6-3.2.2-4.4-.6-1.6-1-4.2-4.2-4.9-5.5-.2-.3-.3-1-.4-1.7Zm20.6-7.9c.7-.3.8-1.8.1-3.4s-1.7-2.7-2.4-2.4-.8 1.8-.1 3.4c.6 1.6 1.7 2.7 2.4 2.4m-.7-11c.4-.5 0-1-.3-1.1-.9-.4-3.4 0-4.9 1-.8.5-3.5 2.9-3 4.1.6.5 2.3-3.3 8.2-4" class="cls-13"/><path d="M156.6 79.6c-.6-1.5-.5-2.8 0-3.1.6-.2 1.5.8 2.1 2.2.6 1.5.5 2.8 0 3.1-.6.2-1.5-.8-2.1-2.2" class="cls-5"/><path d="M158.7 89.7c.3 2.4-.6 5.2-2.8 6.3-1.6.9-4.9.9-6.5.1s-3.3-2-4.4-3.4c4.2 1.5 9.9-.2 13.7-3.1Z" class="cls-14"/><path d="M152.9 70.3c2.4-.6 5.5-.6 5.3.2-2.3 0-4.3.5-7 1.4-.5-.5-.6-1.1 1.7-1.6" class="cls-8"/><path d="M155.8 114.2c-.2-1.3 0-2.8.4-4.2h.6v.2c2.3.6 8.7 3.9 10.7 5.2l-5.2.8c1.1 1.3 2.9 2 4.2 3.2-3.5 1.1-9.7 9-13.4 9.5 0 0 2.8-11.7 2.8-14.7Z" class="cls-10"/><path d="M155.5 177.3c-.8.8-2.1.8-2.8 0s-.6-.9-.6-1.4.2-1 .6-1.4c.8-.8 2.1-.8 2.8 0 .4.4.6.9.6 1.4s-.2 1-.6 1.4m-1.5-23.4c.4.4.6.9.6 1.4s-.2 1-.6 1.4c-.8.8-2.1.8-2.8 0s-.8-2.1 0-2.8.4-.3.7-.4c.7-.3 1.6-.1 2.2.4Zm-5.9-20.5c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2" class="cls-14"/><path d="M142.6 82.1c.6 1.6.6 3.2-.1 3.4s-1.8-.8-2.4-2.4-.6-3.2.1-3.4c.7-.3 1.8.8 2.4 2.4" class="cls-5"/><path d="M141.6 73.4c.3.1.7.7.3 1.1-6 .7-7.6 4.4-8.2 4-.5-1.2 2.3-3.6 3-4.1 1.6-1 4-1.3 4.9-1" class="cls-8"/><path d="M181.8 143.4c-2-8-3.1-19-5.8-22.7-1.6-2.2-6.8-4.9-8.6-5.4l-5.2.8c1.1 1.3 2.9 2 4.2 3.2-3.5 1.1-9.7 9-13.4 9.5-1.2 0-16.6-8.6-20.4-8.6 1-1 3.4-2.7 3.4-2.9.2-.5-2.5-.3-4.2-.3s-5.6 2.3-5.6 2.3c-3.4.4-6.1 5.5-7 8.7l-4.4 23.5c.4.4.7.8 1.1 1 .7.6 1.3 1 1.9 1.3l2.7-14.5 11.1 2.1 6.1 1.1 2.4.4-1.3 7.1-2.3 12.6-3.1-.6c0 1.4.1 2.5.2 3.3v4.5c0 4.2-.4 10.1-.7 13.9 0 1.3-.2 2.3-.3 3 4.6 1.4 9.3 2.2 14 2.6 2.3.2 4.9.6 7.1.2 1-.2 1.1-.8 1.7-1.6q1.05-1.35 2.4-2.4c.1-.1.3-.2.5-.2.3 0 .5.1.7.3.9.8 2.3 2.5 3.4 2.9 1 .4 2.8-.3 3.8-.6 2.9-.7 5.8-1.5 8.7-2.6v-.7c.1-7.5-.4-12.6-1.1-20.4-.2-2.2-.3-4.8-.5-7.6 0-1.3-.1-2.6-.2-4 0-.8 1.8-2.4 2.1-2.6.5-1.7 1.4-3.3 2.9-4.8 1-1 2.3-1.5 3.7-1.7v-.3ZM154 153.8c.4.4.6.9.6 1.4s-.2 1-.6 1.4c-.8.8-2.1.8-2.8 0-.8-.8-.8-2.1 0-2.8.2-.2.4-.3.7-.4.7-.3 1.6-.1 2.2.4Zm-3.9-22.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m5.4 45.9c-.8.8-2.1.8-2.8 0-.4-.4-.6-.9-.6-1.4s.2-1 .6-1.4c.8-.8 2.1-.8 2.8 0 .4.4.6.9.6 1.4s-.2 1-.6 1.4" style="stroke-width:0;fill:#8ea3d6"/><path d="M130.4 117c1.8-2.1 6.6-4 9.1-5.4.4.9.7 1.8 1 2.7 2.8 4.4 12 13.9 12.5 14.5-1.2 0-16.6-8.6-20.4-8.6 1-1 3.4-2.7 3.4-2.9.2-.5-2.5-.3-4.2-.3z" class="cls-10"/><path d="M126.8 275.5s3.6-6-3.3-6c0 0-1.4-.1-2.7.4 1.5-4.4 2.4-21.1 2.9-26.1.6-5.2 4.5-15.9 4.5-15.9 3.3 1.3 8.3 2.6 14 3.6 0 0 .3 7.9-1.8 13.3-3.4 8.8-7.6 17.2-9.4 27-.2 1-.3 1.9-.5 2.9h.2c-.5 1.2-1.4 2.5-2 1.6-.8-1.3-1.8-.5-2-.3h-.1v-.4Z" class="cls-13"/><path d="m147.2 18.1-3.4 19.7 19.7 3.4 3.4-19.6zm-15.5 123.4-11.2-2.1-2.6 14.5-1 5.2 6 1.1 1 .2 2.5.4 6.2 1.2.8.1 3.2.6 2.3-12.6 1.3-7-2.4-.5z" style="stroke-width:0;fill:#3246ff"/><path d="M114.7 69.7c.1-.5.3-.9.4-1.3.5-1.9 1.2-3.2 3-4.1.4-.2.8-.3 1.2-.2.2 0 .4.2.5.3.5.4.8 1 1 2.2-1.4 2.5-2.3 4.3-2.8 7.7-.5.1-1 .2-1.4.2-.5 0-1 0-1.4-.4l-.3-.3.9-.2-1-3.8Z" class="cls-10"/><path d="M132.3 168.2c-.3-.4-.9-.6-1.4-.4-.5.1-.8.6-1 1s-.4.9-.8 1.2-1 .5-1.3.2c.3-.6.5-1.3.6-1.9 0-.6 0-1.3-.4-1.8l-.2-.2c-.3-.9-.7-1.7-1.2-2.5 0-.1-.1-.2-.2-.3v-2.7l-2.5-.5-1-.2-6-1.1 1-5.2c-.6-.3-1.2-.7-1.9-1.3-.3 1.5-1.2 4.6-1.1 6.1q0 .75.3 1.2v.4c-.2 0-.5.2-.7.3-.5.2-1 .5-1.5.7-1.4.9-2.6 2-3.7 3.2-.3.3-.6.7-.7 1.1s0 .9.3 1.2c.4.3 1 .2 1.6 0 1.5-.4 2.9-.9 4.4-1.3 1.1.9 1 2.6 1 4.1 0 1.4.2 3.2 1.5 3.8 1 .4 2 0 2.9-.8.3.9 1.4 1.5 2.3 1.5 1 0 2-.4 2.8-1 1.6 1.3 4 1.4 5.7.2 1.1-.8 1.9-2.1 1.9-3.4v-.2c0-.5-.2-1.1-.5-1.5Z" class="cls-13"/><path d="M166.7 57.5c-1-2.9-3.1-2.2-4.2-2.3.9-1.5.3-3.7-1.2-4.6s-3.7-.3-4.6 1.2c-.4-1.4-1.6-2.6-3.1-2.7-1.4 0-2.4 2-2.2 3.4-5.6-2.4-12.7-3.5-16.9.5-2.7-.7-10.7 1.2-13.4 5.7-.6-.9-1.9-1-2.9-.8s-1.9.9-2.7 1.6c-.1-2.9-2.6-3.7-3.9-2.1l3.1 12.2c.1-.5.3-.9.4-1.3.5-1.9 1.2-3.2 3-4.1.4-.2.8-.3 1.2-.2.2 0 .4.2.5.3.5.4.8 1 1 2.2-1.4 2.5-2.3 4.3-2.8 7.7-.5.1-1 .2-1.4.2-.5 0-1 0-1.4-.4l-.3-.3-3.3.8-4.2 1.1c.4.6.9 1.2 1.4 1.3 1 .3 2.2-1.2 2.9-2 1.1 1.6 2.2 1.9 3.2 1.6 0 2 .3 3.4.9 6.2 1 4.7 2.4 7.5 6.1 10.9 0-1 .2-2.2 1.2-2.9.7-.5 3.3-.5 4.1 0 1.4-3.5-.8-11 2.7-19.9 2.6-6.8 8-11 10.3-11.8q.75-.3 1.8-.3c5.8-.1 17 5.8 19.6 12.1.1.3 1.1 3.6 1.1 5 0 1.6.4 2.6 1 3.5.4-4.7.4-8.8-.3-12.4 0 0 3.5-2.3.1-4.3 1.9-1 4.1-1.5 3.3-5Z" style="stroke-width:0;fill:#2e2e2e"/><path d="M131.9 278.5c1.3-7.3-.8-6.8-.8-6.8-.2 1-.3 1.9-.5 2.9h.2c-.5 1.2-1.4 2.5-2 1.6-.8-1.3-1.9-.5-2-.3h-.1v-.4s3.6-6-3.3-6c0 0-1.4-.1-2.7.4-1.4.5-2.7 1.8-2.2 4.7-.7.5-1.4 1.9-2.2 3.3-2.6 2.3-4.6 4.7-5.9 6.7-.1.2-.2.3-.2.3-.7 1.1-1.2 2-1.4 2.7l-.9.9v4.1s1.6 5 7.3 5.6c5.7.7 11.1-1.8 12.9-6.1 1.7-4.2 2.7-7.9 2.7-7.9l1.4-3.2s.5-1.7-.3-2.6Z" class="cls-9"/><path d="m114.8 73.7.9-.2-1-3.8-3.1-12.2-.9-3.3-19.3 5 5 19.3 11-2.8 4.2-1.1 3.3-.8" class="cls-6"/><path d="M132.5 184.5s.4-1.4.3-.7c0 .3-.2 1.2-.5 2.9-1 5.3-7.1 29.8-8.3 39 .6.6 2 1.4 4.2 2.3 3.3 1.3 8.3 2.6 14 3.6 5.7.9 12.1 1.3 18.4.8 5.8-.5 11.5-1.8 16.3-4.4 2.2-1.2 4.1-2.6 5.9-4.3" class="cls-4"/><path d="M182.8 223.7c-1.6-11.4-5.5-28.3-7.8-38.8m-46.8 43s-3.9 10.7-4.5 15.9c-.6 5.1-1.5 21.8-2.9 26.1v.3m21.4-38.7s.3 7.9-1.8 13.3c-3.4 8.8-7.6 17.2-9.4 27-.2 1-.3 1.9-.5 2.9m46.4-46.8s0 0 0 0c0 .4.5 2.3.5 3.4 0 1.3-.7 4.4-.7 4.4s-.6 27.8-.7 32v.5m-15.3-35.7s-1.2 4.6-1 8.1c.3 7.6 3.7 15.3 6.4 28.9l.6 3.3v.5m-56.2 11.4c1.3-2 3.3-4.4 5.9-6.7.7-1.4 1.4-2.9 2.2-3.3" class="cls-2"/><path d="M131.1 271.8s2.1-.5.8 6.8c0 .4-.1.8-.2 1.3-1.4 3.3-2.8 7.1-4.8 10.1-2.6 4-6.1 6.7-11.6 5.3-4.5-1.2-6.6-5.5-6.5-6.9 0-.2 0-.4.2-.7.2-.7.7-1.6 1.4-2.7" class="cls-2"/><path d="M126.8 289.9s-.8-4.2-4.1-6.6c-.9-.7-2.1-1.2-3.5-1.5-1.3-.3-2.5-.3-3.5-.1-3 .4-4.7 2.2-5.2 2.9-.1.2-.2.3-.2.3m16.5-9h0c.2-.1 1.2-1 2 .3.5 1 1.4-.4 2-1.5.3-.6.5-1.1.5-1.3" class="cls-2"/><path d="m122.7 283.4 3.2-5.2s.5-1 .8-2.3v-.3c.3-1.8.1-3.9-2.5-4.2-4.2-.5-6 2.1-5.5 4.3 0 .2.1.4.2.7-1 1.8-3.3 5.4-3.3 5.4" class="cls-2"/><path d="M126.8 275.5s3.6-6-3.3-6c0 0-1.4-.1-2.7.4-1.4.5-2.7 1.8-2.2 4.7 0 .3.1.6.2.9s0 .2.1.4m-10 11.8-.9.9v4.1s1.6 5 7.3 5.6c5.7.7 11.1-1.8 12.9-6.1 1.7-4.2 2.7-7.9 2.7-7.9l1.4-3.2s.5-1.7-.3-2.6m53.8 1c-1.9 1.9-2.7 5.1-2.3 8.6" class="cls-2"/><path d="M166.7 269.5h-.6c-.8 0-2.2.4-2 2.2.3 2.3.5 7.6.5 9v.3c1.1.9 2.7 2.8 9.1 2.5 2.6.8 5.5 3.2 9.8 4.5 2.9.9 6.3 1.4 10.6.6 2.9-1.1 3.3-3 3.3-3s.5-7.1-4.4-8.2q-1.2-.3-3 0c-.7.1-1.5.3-2.4.7q-1.05.45-1.8 1.2" class="cls-2"/><path d="M165.8 271.2c0 .3.4 1 .9 1.6s1.1 1.2 1.6 1.3c1.1.1 1.8-1.8 3.2-1.3.3 0 .8.3 1.5.8.4.2.8.4 1.3.7 3.7 2 9.7 5.4 11.4 5.3h0m-6.8-10.8c.6.3.6 1.2.3 2.4v.5c-.2 1.6.5 1.5.5 1.5l10.3 4.3" class="cls-2"/><path d="M174.4 274.2s-.3-4.2 2.3-5.2c.9-.3 1.6-.4 2-.3" class="cls-2"/><path d="M173.1 273.5s-1.2-6.2 2.9-5.8c.7 0 1.6.4 2.7 1h.2m.2 3.1 13.9 5.8m4.4 8.2.8.5v2.2s-1.2 2.9-5.8 2.8-9.8-1.2-12.1-2.1-5.4-2.9-6.1-3-8-.1-9.5-2.5 0-2.9 0-2.9" class="cls-2"/><path d="m111.6 74.5.1.4" class="cls-1"/><path d="M153.1 128.9c-.5-.5-9.8-10.1-12.5-14.5 0 0 0-.1-.1-.2" class="cls-4"/><path d="M155.8 114.2c0 2.9-2.8 14.7-2.8 14.7m-21.3 12.6c.2-2 .3-4.1.6-6.1m-.5-18.3-5.6 2.3c-3.4.4-6.1 5.5-7 8.7l-4.4 23.5c.4.4.7.8 1.1 1 .7.6 1.3 1 1.9 1.3m49.7-38.5c1.8.5 7 3.2 8.6 5.4 2.7 3.7 3.8 14.7 5.8 22.7" class="cls-1"/><path d="M132.6 120.3c3.8 0 19.2 8.6 20.4 8.6h0c3.6-.4 9.9-8.3 13.4-9.5-1.2-1.2-3.1-1.9-4.2-3.2l5.2-.8c-2-1.3-8.4-4.6-10.7-5.2m-17.1 1.4h-.1c-2.5 1.4-7.3 3.3-9.1 5.4h1.4c1.8 0 4.4-.2 4.2.3 0 .2-2.4 1.9-3.4 2.9m44 39.3c2 .6 5-.4 6.7-1.4 1-.5 1.3-.7 2.1-1m-10.2-6.8c-.3.8-.4 1.6-.5 2.4-.2 1.4-.8 4.9.9 6.2.3.2.6.4 1 .5m11.4-13.5c0-.5-.2-.9-.5-1.4-1.6-.7-3.7-1-5.7-.7-1.4.2-2.8.8-3.7 1.7-1.5 1.5-2.4 3.1-2.9 4.8m-48.9 13.4v-2.9m-10.4-8.2c-.3 1.5-1.2 4.6-1.1 6.1q0 .75.3 1.2" class="cls-1"/><path d="M176.6 159.5h-.1c-2.1-.7-2.4-.9-3.2-2.6m1.7 28.6c-2.8 1.1-5.7 2-8.7 2.6-1 .2-2.8.9-3.8.6-1.2-.4-2.5-2.1-3.4-2.9-.2-.2-.4-.3-.7-.3-.2 0-.3.1-.5.2q-1.35 1.05-2.4 2.4c-.6.8-.8 1.4-1.7 1.6-2.2.4-4.9 0-7.1-.2-4.8-.4-9.5-1.2-14-2.6 0-.7.2-1.8.3-3 .3-3.8.6-9.7.7-13.9v-4.5c0-.8-.1-1.9-.2-3.3" class="cls-1"/><path d="M173.1 152.9c0 1.4.1 2.7.2 4q0 0 0 0c.1 2.8.3 5.4.5 7.6.7 7.8 1.2 12.9 1.1 20.4v.7m-4-56.5c.8 4.9 1.3 9.9 1.7 14.5.3 3.2.5 6.3.6 9.2" class="cls-1"/><path d="M173.1 152.9c0-.8 1.8-2.4 2.1-2.6h0m12.8-3.5c-1.3.2-2.8 1.8-3.3 3.5s-.2 5.1.4 6.2c.1.2.3.4.4.6.6.8 1.5 1.4 2.5 1.4h.2m-60.5 11.7h.1m-8.7-2.9c-.3.2-.5.5-.7.8" class="cls-1"/><path d="M127.7 166.3s0 0 0 0c-.3-.9-.7-1.7-1.2-2.5 0-.1-.1-.2-.2-.3-.5-.7-1.1-1.2-1.8-1.6-.2 0-.4-.1-.6-.2-1-.3-2.1-.2-3-.8-1.6-1.1-3.7-1.2-5.6-.6-.2 0-.5.2-.7.3-.5.2-1 .5-1.5.7-1.4.9-2.6 2-3.7 3.2-.3.3-.6.7-.7 1.1s0 .9.3 1.2c.4.3 1 .2 1.6 0 1.5-.4 2.9-.9 4.4-1.3 1.1.9 1 2.6 1 4.1 0 1.4.2 3.2 1.5 3.8 1 .4 2 0 2.9-.8.3-.2.5-.5.8-.7.9-.9 1.6-1.9 2.3-2.9.3-.5.6-1 .7-1.5v-.1c.1-.6 0-1.3-.5-1.6h-.1c-.7-.4-1.6-.1-2.3.3s-1.4.9-2 1.5" class="cls-1"/><path d="M120.1 172.4v.1c.3.9 1.4 1.5 2.3 1.5 1 0 2-.4 2.8-1q0 0 0 0c1-.7 1.8-1.7 2.3-2.8h0c.3-.6.5-1.2.6-1.9 0-.6 0-1.3-.4-1.8l-.2-.2c-.5-.4-1.3-.4-1.9-.1-.7.3-1.2.8-1.7 1.3h-.1" class="cls-1"/><path d="M125.1 172.9s.2.1.2.2c1.6 1.3 4 1.4 5.7.2 1.1-.8 1.9-2.1 1.9-3.4v-.2c0-.5-.2-1.1-.5-1.5s-.9-.6-1.4-.4c-.5.1-.8.6-1 1s-.4.9-.8 1.2-1 .5-1.3.2m73.7-20.9v.1m-1.8 5.8h.1m-.5-3.6h.1m-11.4-3.6v-1.2c0-.3 0-.6.1-.9q.3-.75 1.2-1.5c1.4-1.1 3-1.6 4.7-1 2.9-2.4 7-3.5 10.7-2.8.2 0 .4 0 .5.2.2.3-.1.8-.5 1-1.5 1-3 2.1-4.4 3.1-.6.4-1.2.9-1.6 1.5s-.6 1.4-.2 2.1c.6.9 1.9.9 3 .8m-6.9 2.9c.1.5.9.7 1.4.5s.9-.7 1.3-1c.4-.4 1-.7 1.5-.5.2 0 .4.2.5.4.3.4.4 1 .4 1.5 0 .7.1 1.4 0 2.1v.1c-.1.8-.5 1.5-1.1 1.9-.7.4-1.5.5-2.3.3-.7-.2-1.3-.6-1.9-.9h-.2" class="cls-1"/><path d="M199.5 151.6c.4-.9 1.2-1.7 2.1-2.2.3-.1.5-.2.8-.3.4-.1.8-.2 1.2-.1s.8.3 1 .7c.3.5 0 1.2-.2 1.7-.4.9-.7 1.8-1.1 2.7s-.2.6-.4.8c-.4.4-1 .4-1.5.4s-1-.2-1.6-.1m-7.4 2.9c-.5-2-1.8-4.2-3.4-2.7-.4.4-.7 1-.8 1.6-.1.4-.2.9-.3 1.4 0 .4 0 .8-.1 1.2 0 .5 0 1.1.3 1.5.4.5 1.1.6 1.8.6s1.4 0 1.9-.3c.4-.3.6-.8.7-1.2.1-.5 0-1.2-.1-2.1m0 0c.8-.2 1.6-.9 2-1.6v-.1m-75.3 10.9" class="cls-1"/><path d="M153.1 129c.8 2.7 1.4 7.5 1.9 11.9.3 3.1.6 6 .8 7.9.1 1.3.3 3.5.5 6.2.3 4.1.6 9.4 1 14.7.1 2 .3 4 .4 6 .3 3.7.5 7.2.7 9.7m.9-44.9v-1.6c.3-1.5 8.6-1.9 8.7-1.6.6 2.1.9 4.4 1.1 6.6v1c0 1.7 0 6.9-2.8 7.2-4.4.5-5.7-4.4-6-5.3-.4-1.5-.9-4.4-1.1-6.2Zm2.5 29.2v-1.6c.3-1.5 8.6-2 8.7-1.6.7 2.4 1 5 1.2 7.5v1.5c0 2.2-.6 5.4-2.8 5.7-4.4.5-5.7-4.4-6-5.3-.4-1.5-.9-4.4-1.1-6.2Zm-22.6-.2v-.3c.6-1.5 10.4-.6 10.5-.2.5 2.3.6 4.5.5 6.8v.8c-.1 1.7-.8 6.8-4.2 6.7-5.3-.2-6.2-5.2-6.4-6.2-.4-2.1-.7-6.2-.4-7.7Zm-1.4-26.9c0-1.2 0-2.1.2-2.5.6-1.5 10.4-.7 10.5-.3.5 2.5.6 5.1.5 7.7 0 1.2-.4 3.9-1.7 5.5-.6.8-1.4 1.3-2.5 1.2-3.5 0-5.1-2.4-5.8-4.2m13.1-16.6c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2Zm-.3 20c.7-.3 1.6-.1 2.2.4.4.4.6.9.6 1.4s-.2 1-.6 1.4c-.8.8-2.1.8-2.8 0s-.8-2.1 0-2.8.4-.3.7-.4Zm.3 22.5c0-.5.2-1 .6-1.4.8-.8 2.1-.8 2.8 0 .4.4.6.9.6 1.4s-.2 1-.6 1.4c-.8.8-2.1.8-2.8 0s-.6-.9-.6-1.4Z" class="cls-4"/><path d="M115.1 74.1V74" class="cls-1"/><path d="M140.5 114.5c-.3-.9-.6-1.8-1-2.7-1.3-3.2-3.2-6.6-7.9-10.4" class="cls-4"/><path d="M156.2 110c-.3 1.4-.6 2.9-.4 4.2" class="cls-1"/><path d="M161.5 70.7c.1.3 1.1 3.6 1.1 5 0 1.6.4 2.6 1 3.5 1.2 1.8 3.1 3.1 3.8 8.5.9 6.5-1.5 11.2-9.8 18.7 0 0-.8 1.7-1.3 3.7" class="cls-4"/><path d="M151.2 71.9c-.5-.5-.6-1.1 1.7-1.6 2.4-.6 5.5-.6 5.3.2-2.3 0-4.3.5-7 1.4m-9.4 2.7c.4-.5 0-1-.3-1.1-.9-.4-3.4 0-4.9 1-.8.5-3.5 2.9-3 4.1.6.5 2.3-3.3 8.2-4m14.8 5c.6 1.5 1.5 2.5 2.1 2.2.6-.2.6-1.6 0-3.1s-1.5-2.5-2.1-2.2c-.6.2-.6 1.6 0 3.1m-16.5 3.5c.6 1.6 1.7 2.7 2.4 2.4s.8-1.8.1-3.4-1.7-2.7-2.4-2.4-.8 1.8-.1 3.4m4.9 9.7c4.2 1.5 9.9-.2 13.7-3.1.3 2.4-.6 5.2-2.8 6.3-1.6.9-4.9.9-6.5.1s-3.3-2-4.4-3.4Zm-17.9-2.2c-.8-.5-3.4-.5-4.1 0s-1.2 1.9-1.2 2.9c0 .7.2 1.4.4 1.7.7 1.3 3.3 4.5 4.9 5.5 1.2.7 3.3 1.2 4.4.6.5-.3.8-.7.6-1.5m19.8-12.2c.5-1.4 1-2.2 2.4-2.8 1.5-.7 2.1-.5 3.2.9" class="cls-1"/><path d="M161.5 70.7c-2.6-6.3-13.8-12.3-19.6-12.1q-1.05 0-1.8.3c-2.3.8-7.7 5-10.3 11.8-3.4 9-1.2 16.4-2.7 19.9" class="cls-1"/><path d="M121.1 58.8c2.6-4.5 10.7-6.4 13.4-5.7 4.3-3.9 11.3-2.9 16.9-.4l2.4 1.2c4.2 2.3 6.9 5.3 8.4 9.1.5 1.2.8 2.5 1.1 3.9.7 3.5.7 7.6.3 12.4h0m-41.5 14.4s-.2-.2-.3-.2c-3.7-3.4-5.1-6.1-6.1-10.9-.6-2.8-1-4.2-.9-6.2" class="cls-1"/><path d="M134.4 53.1c3.3.8 5.4 2.5 7.4 5.3-.1 0-.3-.2-.4-.3m-34 17.5c.4.6.9 1.2 1.4 1.3 1 .3 2.2-1.2 2.9-2 1.1 1.6 2.2 1.9 3.2 1.6.8-.3 1.4-1.1 1.7-2m3.2-10.2c2.1-1.3 3.1-2.9 1.3-5.6-.6-.9-1.9-1-2.9-.8s-1.9.9-2.7 1.6c-.1-2.9-2.6-3.7-3.9-2.1" class="cls-1"/><path d="M114.7 69.7c.1-.5.3-.9.4-1.3.5-1.9 1.2-3.2 3-4.1.4-.2.8-.3 1.2-.2.2 0 .4.2.5.3.5.4.8 1 1 2.2-1.4 2.5-2.3 4.3-2.8 7.7-.5.1-1 .2-1.4.2-.5 0-1 0-1.4-.4l-.3-.3m48.4-7s3.5-2.3.1-4.3c1.9-1 4.1-1.5 3.3-5-1-2.9-3.1-2.2-4.2-2.3.9-1.5.3-3.7-1.2-4.6s-3.7-.3-4.6 1.2c-.4-1.4-1.6-2.6-3.1-2.7-1.4 0-2.4 2-2.2 3.4" class="cls-1"/><path d="m143.8 37.8 19.7 3.4 3.4-19.6-19.7-3.5zM132.6 162l.8.1 3.2.6 2.3-12.6 1.3-7-2.4-.5-6.1-1.1-11.2-2.1-2.6 14.5-1 5.2 6 1.1 1 .2 2.5.4" class="cls-3"/><path d="m119.1 159.5 3.8.7 1 .2 2.5.4 6.2 1.2m49.225-57.549 17.946-8.83 8.83 17.945-17.945 8.83zM114.7 69.7l1 3.8-.9.2-3.2.8-4.2 1.1-11 2.8-5-19.3 19.3-5 .9 3.4z" class="cls-3"/></svg>')}`;
export default image;
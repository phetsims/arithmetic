/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="Layer_5" width="300" height="300" viewBox="0 0 300 300"><defs><style>.cls-1{stroke-linecap:round;stroke-linejoin:round}.cls-1,.cls-2{stroke:#000}.cls-1,.cls-2,.cls-3{fill:none}.cls-2,.cls-3{stroke-miterlimit:10}.cls-3{stroke:#fff}.cls-4{fill:#4d0099}.cls-10,.cls-12,.cls-13,.cls-15,.cls-16,.cls-4,.cls-5,.cls-9{stroke-width:0}.cls-5{fill:#4fb22a}.cls-9{fill:#3f414f}.cls-10{fill:#1e160d}.cls-12{fill:#cda580}.cls-13{fill:#3246ff}.cls-15{fill:#f4f4f4}.cls-16{fill:#050504}</style></defs><path d="M185.9 264.5c-1.9 2.4-6.3 5.3-9.4 6-1.9.4-4 .5-5.3.6l.2-5.3h-.3c0-.2.1-.4.1-.5 2.2-5.9 6.1-15.7 9.3-26.6 1-.7 5.2-3.7 9.9-5.5 2-.8 4-1.4 5.9-1.5 0 0 11.4-2.6 13.4 4.5 1 3.3 1.2 5.6-.9 12 0 0-4.6 11.4-6.7 18.2-3 10.2 0 10.2-1.5 15-.4 0-.7 0-1.2.1-3.6.5-8.7 1.9-12.6 1.4-2.8-.3-5-1.5-5.7-4.5 0 0 4.2-12.2 4.8-13.8Z" style="stroke-width:0;fill:#122666"/><path d="M205.2 290.1s.2 2.1 0 2.2c-.2.2-6.8 2.8-13.1 2-6.3-.7-11.9-4.6-11.9-4.6V288c.1.1.2.2.2.3.6.5 1.6 1.1 3 1.7 2.3 1 5.5 1.9 9.2 1.8 5.8-.1 11.8-1.7 11.8-1.7v-.5h.2z" class="cls-9"/><path d="M199.4 281.4c5 .5 5.1 6.5 5 8.3v.5s-6 1.6-11.8 1.7c-3.7 0-6.9-.8-9.2-1.8-.3-1.6 1.2-6.3 3.4-7.2 3.9.4 9-1 12.6-1.5" class="cls-9"/><path d="m197.1 183.1-1.5 11c-.9.4-2 .5-2.9.9 1.2-2.9 1.9-4.6 1.9-4.6 1.1-1.9 1.9-4.5 2.4-7.2Z" class="cls-5"/><path d="m195.6 194.1-1.6 11.8c-1.9.7-3.8 1.5-5.7 2.2h-.1c1.7-5.4 3.4-10 4.6-13.1.9-.4 2-.5 2.9-.9Z" class="cls-15"/><path d="m194 205.9-3.7 27.2c-4.7 1.9-8.9 4.8-9.9 5.5 1.2-4.2 2.3-8.6 3.2-13 1.2-6.3 2.8-12.3 4.5-17.6h.1c1.9-.7 3.8-1.4 5.7-2.2Z" style="stroke-width:0;fill:#274a85"/><path d="M187.2 127.6c1 3.7-.6 11.6-1.2 13.5-1 3-3.1 10.6-10.1 15.5-.5-2.9-.4-6.1.5-11.5.8-.7 1.1-1.7 1.4-2.7.4-1.7.7-3.4.4-5.2-.3-1.7-1.3-3.4-2.9-4.1s-3.7-.2-4.5 1.3c-.3.4-1.3 1.6-1.8 1.5s-1.1-.4-1.5-.7c-1.7-1.2-1.4-2.9-1.6-4.7-.9-5.8-5.9-13.5-11.9-13.3-3.4 0-8-4.2-12.9-1.5-4.3 2.4-7.9 2.6-9.6 6.7-1.4 3.5-3.5 5.3-2.8 11.1 0-.2-.1-.3-.1-.3-.7-2.1-2.4-4.3-3.4-7.8-2.2-8.2 2.2-9.6 3.4-11.6.8-1.3 0-5.5 3.7-7.8 2.1-1.4 4.8-.3 6.2-1 2.8-1.3 3.2-4.6 5.9-6.1 2.3-1.2 6.1.2 7.9-.1 1.9-.4 3.9-2 5.7-2.6 3.4-1.2 4.9 3 8.5 3.5 1.6.2 6.2-.5 8.8 1.4 2 1.4 3.5 6.3 5.1 8.5 2.2 3 4.5 2.7 5 5.3.7 4.1.9 8.8 2 12.8Z" class="cls-10"/><path d="M186.8 282.8c-2.1 1-3.7 5.7-3.4 7.2-1.4-.6-2.4-1.2-3-1.7v-.3c-.5-2.9.8-9.7.8-9.7.7 3 2.9 4.2 5.7 4.5Z" class="cls-9"/><path d="M178 163.5s4.1 0 4.1 5v1.1c-4.3 5.7-12.5 14.7-20.8 14.4-1.2-.9-2-4.1-1.4-8.9 0-.9.2-1.8.4-2.8.8-2.1 1.5-3.2 1.7-3.4.2.7.3 1.3.5 2 .1.9.5 4.2 1.2 5.5 10.2-2.7 15.1-11.1 15.1-11.1-.2-.6-.4-1.1-.6-1.6Z" style="stroke-width:0;fill:#292a4c"/><path d="M141.5 158.4c1.1 3.1 3.6 4.3 7.1 3.8 6.1-.8 7.8-5.9 7.6-6.4-4.4 1.8-10.2 3.6-14.7 2.6m19.5 8.2c-4.6 2.8-9.2 4.6-12.2 4.6-7.5 0-15.3-10.9-16.6-15.3s-1.6-13-1.6-14.5c0-1.4-1.5-6.3-2-7.7-.7-5.8 1.4-7.6 2.8-11.1 1.7-4.1 5.3-4.4 9.6-6.7 5-2.7 9.6 1.5 12.9 1.5 6-.2 11 7.5 11.9 13.3.3 1.9 0 3.5 1.6 4.7.4.3.9.6 1.5.7s1.6-1.1 1.8-1.5c.8-1.5 2.9-2.1 4.5-1.3 1.6.7 2.6 2.4 2.9 4.1s0 3.5-.4 5.2c-.3 1-.6 2-1.4 2.7-.9 5.4-1 8.6-.5 11.5.4 2.2 1.1 4.3 2.1 7 .2.5.4 1.1.6 1.6 0 0-4.9 8.4-15.1 11.1-.7-1.2-1-4.6-1.2-5.5-.1-.7-.3-1.3-.5-2s-.5-1.4-.9-2.3Zm-2-32.7c.5-.2.9-.7.8-1.2-.1-.7-1.1-1-1.9-1.2-2-.4-4.1-.6-6.2-.5-2.1 0-4.2-.3-3.8 2 0 .6.4 1.2 1 1.5.8.4 1.9 0 2.8-.1 2.1-.3 2.8-.3 4.9-.3s1.8 0 2.3-.2Zm-2.9 11c1-.1 1.6-1.9 1.3-4-.2-2.1-1.2-3.7-2.2-3.6s-1.6 1.9-1.4 4 1.3 3.7 2.2 3.6Zm-18-10c2.2-4.5-4.1-1.9-5.6-.8-.4.3-.7.6-1 1s-.3.9-.1 1.3c.4.8 1.6 0 2.4-.5 1.1-.6 4-.2 4.3-1m-1.1 11c.7-.2.9-1.7.5-3.5s-1.2-3.2-1.9-3c-.7.1-.9 1.7-.5 3.5s1.2 3.2 1.9 3" class="cls-12"/><path d="M171.1 271.1v3.3c-.1 0-2.7.9-2.7.9 0-1.4-.2-3-.8-4.6.6 0 1.3-.2 2-.4.1-.9.6-2.5 1.4-4.7h.3l-.2 5.4Z" class="cls-13"/><path d="M171.1 265.3c0 .1 0 .3-.1.4-.8 2.2-1.3 3.8-1.4 4.7-.7.1-1.4.3-2 .4-4.6.9-5.1.4-9.6-3.5-.3-1.2-.4-3.2 0-5.8 3.6 3.1 8.5 4.5 13.2 3.8Z" style="stroke-width:0;fill:#292a4a"/><path d="m169.7 210.8-6.1 22c1.8-7.3 3.8-15 5.8-22z" class="cls-13"/><path d="M173.5 196.3c-1.3 4.3-2.7 9.2-4.2 14.4l-7.8-1.7-12.5-2.8c0-3.4.4-7.1.8-10.4 7.5 2.2 16.1 2.5 23.7.5" class="cls-15"/><path d="m161.5 209 7.8 1.7c-2 7.1-4 14.7-5.8 22s-2.3 0-2.3 0l.3-23.8Z" class="cls-13"/><path d="M156.9 279.8c0-1.6-.9-3.5-2-3.8-1.3-.4-2.2 1.5-4.9 1.3-1.7-.1-2-1.5-2-2.6s.1-1.2.1-1.2 3.6-.7 4.5-1.4 1.3-1.7 2.1-3c.8-1.4 3.1-1.9 3.1-1.9 4.5 3.9 5 4.4 9.6 3.5.6 1.5.8 3.2.8 4.6 0 2.3-.5 4.2-.7 4.5-.2.5-1 .7-1.2.7s-.2 1-.5 1.1c-.3 0-1.2.5-1.5.7-.3.1-.9 1.1-1.4 1.3s-1.7-.5-2.1-.4-.6 1.3-1.5 1.5c-.2 0-.6 0-1.2-.2-2.3-.6-6.8-2.2-6.8-2.2l-.2-.4 5.6-2.1Z" class="cls-12"/><path d="M161.2 232.8h2.3c-.8 3.3-1.6 6.6-2.3 9.7h-.1zm-12.1-26.6 12.4 2.8-.3 23.8-14.3-.2.3-26.8z" class="cls-13"/><path d="M161.2 232.8v9.7c-.1 0 0 0 0 0-1 4.7-1.9 9.1-2.6 12.9l-12 1.7.3-24.6 14.3.2Z" class="cls-13"/><path d="M159.9 132.7c0 .5-.3 1-.8 1.2s-1.7.2-2.3.2c-2.2 0-2.9 0-4.9.3s-2 .6-2.8.1c-.6-.3-.9-.9-1-1.5-.4-2.2 1.7-1.9 3.8-2 2.1 0 4.2.1 6.2.5.8.1 1.8.5 1.9 1.2Z" class="cls-10"/><path d="M158.2 286.7s.4 1 .3 1.4c-.1.3-9.6 5.2-14.4 5.2s-9.2-.6-12.1-3l-.3-.7 3.5-1.4v.3c.6.6 4.1 1.8 8.3 1.8s14.1-3.2 14.7-3.5Z" class="cls-9"/><path d="M158.2 284.8s.6 1.6 0 1.9-10.6 3.5-14.7 3.5-7.7-1.2-8.1-1.8v-.3c-.1 0 11-4.3 11-4.3l4.9-1.9.2.4s4.5 1.6 6.8 2.2v.2Z" class="cls-9"/><path d="M157.5 140.8c.3 2.1-.4 3.9-1.3 4s-2-1.5-2.2-3.6.4-3.9 1.4-4 2 1.5 2.2 3.6Z" class="cls-16"/><path d="M152.7 272.2c.9-.7 1.3-1.7 2.1-3 .8-1.4 3.1-1.9 3.1-1.9-.3-1.2-.4-3.2 0-5.8.1-1.7.4-3.8.8-6l-12 1.7-.2 17.5v9.1l4.8-1.9 5.6-2.1c0-1.6-.9-3.5-2-3.8-1.3-.4-2.2 1.5-4.9 1.3-1.7-.1-2-1.5-2-2.6s.1-1.2.1-1.2 3.6-.7 4.5-1.4Z" class="cls-13"/><path d="M156.2 155.8c.2.5-1.5 5.6-7.6 6.4-3.5.4-6-.7-7.1-3.7 4.5.9 10.2-.9 14.7-2.7" style="stroke-width:0;fill:#fff"/><path d="M194.3 169c-1.9-1-4.2-.9-6.2-.4h-6v1.1c-4.3 5.7-12.5 14.7-20.8 14.4-1.2-.9-2-4.1-1.4-8.9h-.2s-5.8 3-6 3.4c-.2.3-3.5 1-5 6.1 0 .4-.2.7-.3 1.1 0 0-5 9.2-8.9 18.4l7.8 1.7 1.9.4c0-3.4.4-7.1.8-10.4 7.5 2.2 16.1 2.5 23.7.5-1.3 4.3-2.7 9.2-4.2 14.4h.3l-6.1 22c-.8 3.4-1.6 6.6-2.3 9.7-1 4.7-1.9 9.1-2.6 12.9-.4 2.2-.6 4.3-.8 6 3.6 3.1 8.5 4.5 13.2 3.8 2.2-5.9 6.1-15.7 9.3-26.6 1.2-4.2 2.3-8.6 3.2-13 1.2-6.3 2.8-12.3 4.5-17.6 1.7-5.4 3.4-9.9 4.6-13.1 1.2-2.9 1.9-4.6 1.9-4.6 1.1-1.9 1.9-4.5 2.4-7.2v-.7c.9-5.7.1-11.8-2.9-13.4Z" class="cls-5"/><path d="m139.4 204.1 7.8 1.7-.3 26.8-16.7-.2v-.2l.4-30.1z" class="cls-4"/><path d="m146.9 232.6-.3 24.6-16.6 2.9.1-10.7.1-17z" class="cls-13"/><path d="m146.6 257.2-.1 17.5-.1 9.1-11.2 4.3-3.5 1.4-1.8.7.1-30.1z" class="cls-13"/><path d="M132.6 134c1.5-1.1 7.8-3.7 5.6.8-.4.8-3.2.3-4.3 1-.7.4-2 1.3-2.4.5-.2-.4-.1-.9.1-1.3s.6-.7 1-1" class="cls-10"/><path d="M137.6 142.2c.4 1.8.2 3.4-.5 3.5s-1.5-1.2-1.9-3-.2-3.4.5-3.5 1.5 1.2 1.9 3" class="cls-16"/><path d="M130.6 201.9v.2h-.3l-.1 30.1H113l.1-26.7z" class="cls-4"/><path d="m130.6 202.1-.4 30.1.1-30.1z" class="cls-4"/><path d="m130.2 232.4-.1 17zm0-.2v.2l-.1 17-.2 10.5-17-3.2.1-24.5zm-.3 27.7-.3 30.1-16.9-6.8.2-26.5zm-16.8-54.4-.1 26.7-14.6-.1v-23.6z" class="cls-13"/><path d="m113 232.2-.1 24.5-14.5-2.8v-21.8zm-.1 24.5-.2 26.5-14.4-5.7.1-23.6zm-14.5-48.2v23.6H87.7l-.1-21.4zm0 23.6v21.8l-10.6-2.1-.1-19.7z" class="cls-13"/><path d="m98.4 253.9-.1 23.6-10.5-4.2v-21.5z" class="cls-13"/><path d="M171.1 271.1c1.3 0 3.5-.2 5.3-.6 3.1-.7 7.6-3.6 9.4-6M159.6 175s-5.8 3-6 3.4c-.2.3-3.5 1-5 6.1 0 .4-.2.7-.3 1.1 0 0-5 9.2-8.9 18.4" class="cls-2"/><path d="M151.7 184.9s0 .2-.1.5c-.3 1.4-1.1 5.5-1.7 10.4-.4 3.3-.7 7-.8 10.4" class="cls-2"/><path d="m146.4 283.8-11.2 4.3-3.5 1.4-1.8.7.1-30.1m26.9 19.7-5.6 2.2-4.9 1.8.1-9.1.1-17.5m12.1-1.7-12.1 1.7m24.7 8.6-.2 5.3-.1 3.4-2.6.9m-7.3-32.9.1-9.7m.3-23.8 7.8 1.7.4.1m-6.2 22h-2.3m-14-27 1.9.4 12.4 2.8-.3 23.8-14.3-.2" class="cls-3"/><path d="m146.9 232.6-.3 24.6-16.6 2.9.1-10.7m.5-47.3 8.8 2 7.8 1.7-.3 26.8-16.7-.2m-17.5 50.8 16.9 6.8.3-30.1m-31.6 17.6 14.4 5.7.2-26.5m-14.5-2.8 14.5 2.8m-25.1-4.9v21.5l10.5 4.2.1-23.6m-10.7-21.8.1 19.7 10.6 2.1v-21.8" class="cls-3"/><path d="m98.4 208.5-10.8 2.2.1 21.4h10.7" class="cls-3"/><path d="m113.1 205.5-14.7 3v23.6l14.6.1m0 0-.1 24.5 17 3.2.2-10.5.1-17v-.2" class="cls-3"/><path d="M113 232.2h17.2l.4-30.1v-.2l-17.5 3.6z" class="cls-3"/><path d="M128.6 133.6c.4 1.4 2.1 6.4 2 7.7 0 1.6.2 10.1 1.6 14.5 1.3 4.4 9.1 15.4 16.6 15.3 3 0 7.6-1.8 12.2-4.6 2-1.3 4.1-2.7 6-4.3m-38.5-28.9s0 .1.1.3m33.3 35.2c-.2-.7-.5-1.4-.9-2.2" class="cls-2"/><path d="M178.6 165.2s-4.9 8.4-15.1 11.1c-.7-1.2-1-4.6-1.2-5.5-.1-.7-.3-1.3-.5-2" class="cls-2"/><path d="M178 163.5s4.1 0 4.1 5v1.1c-4.3 5.7-12.5 14.7-20.8 14.4-1.2-.9-2-4.1-1.4-8.9 0-.9.2-1.8.4-2.8.8-2.1 1.5-3.2 1.7-3.4m20.1-.4h6m-24.6 64.3c1.8-7.3 3.8-15 5.8-22 1.5-5.2 2.9-10.2 4.2-14.4 2.6-8.6 4.6-14.5 5.1-14.5m-19.9 73.6c.6-3.8 1.5-8.2 2.6-12.9m35.8-59.5c-.4 2.7-1.3 5.3-2.4 7.2 0 0-.8 1.7-1.9 4.6-1.3 3.2-2.9 7.7-4.6 13.1-1.7 5.3-3.3 11.4-4.5 17.6-.8 4.4-1.9 8.8-3.2 13-3.2 11-7.1 20.7-9.3 26.6 0 .1 0 .3-.1.4-.8 2.2-1.3 3.8-1.4 4.7-.7.1-1.4.3-2 .4-4.6.9-5.1.4-9.6-3.5-.3-1.2-.4-3.2 0-5.8.1-1.7.4-3.8.8-6m24.2-84.7s2.3-1.4 5-2.1c2-.5 4.3-.6 6.2.4 3 1.6 3.8 7.7 2.9 13.4m0 0v.7l-1.5 11-1.6 11.8-3.7 27.2v.3M158 267.3s-2.3.5-3.1 1.9-1.2 2.3-2.1 3-4.5 1.4-4.5 1.4-.1.5-.1 1.2c0 1 .3 2.5 2 2.6 2.7.2 3.6-1.6 4.9-1.3 1.1.3 2 2.2 2 3.8v.8" class="cls-2"/><path d="M151.5 282.4s4.5 1.6 6.8 2.2c.6.1 1 .2 1.2.2.9-.2 1.1-1.4 1.5-1.5s1.5.5 2.1.4 1.1-1.1 1.4-1.3c.3-.1 1.3-.6 1.5-.7.3 0 .3-1 .5-1.1.2 0 1-.2 1.2-.7.1-.4.6-2.2.7-4.5 0-1.4-.2-3-.8-4.6m12.6-32 .2-.2c1-.7 5.2-3.7 9.9-5.5 2-.8 4-1.4 5.9-1.5 0 0 11.4-2.6 13.4 4.5 1 3.3 1.2 5.6-.9 12m-13.8-3.7s-2.7 1.9-5.1 6.3-3.4 12.3-4 13.8c-.6 1.6-4.8 13.8-4.8 13.8m.1 0c.7 3 2.9 4.2 5.7 4.5 3.9.4 9-.9 12.6-1.4.4 0 .8 0 1.2-.1 1.5-4.8-1.5-4.8 1.5-15 2-6.9 6.7-18.2 6.7-18.2m-22 34.8c-2.1.9-3.7 5.6-3.4 7.1" class="cls-2"/><path d="M181.1 278.3s-1.3 6.8-.8 9.7v.3c.6.5 1.6 1.1 3 1.7 2.3 1 5.5 1.9 9.2 1.8 5.8-.1 11.8-1.7 11.8-1.7v-.5c0-1.7 0-7.7-5-8.3" class="cls-2"/><path d="m204.6 289.7.6.5s.2 2.1 0 2.2c-.2.2-6.8 2.8-13.1 2-6.3-.7-11.9-4.6-11.9-4.6v-1.7m-22-3.3s.6 1.6 0 1.9-10.6 3.5-14.7 3.5-7.7-1.2-8.1-1.8" class="cls-2"/><path d="M158.2 286.7s.4 1 .3 1.4c-.1.3-9.6 5.2-14.4 5.2s-9.2-.6-12.1-3m25.5-149.5c.3 2.1-.4 3.9-1.3 4s-2-1.5-2.2-3.6.4-3.9 1.4-4 2 1.5 2.2 3.6Zm-19.9 1.4c.4 1.8.2 3.4-.5 3.5s-1.5-1.2-1.9-3-.2-3.4.5-3.5 1.5 1.2 1.9 3Zm12.3 53.6c7.5 2.2 16.1 2.5 23.7.5m19.1-1.3c.9-.4 2-.5 2.9-.9m-7.4 14c1.9-.7 3.8-1.5 5.7-2.2M158 261.5c3.6 3.1 8.5 4.5 13.2 3.8m-33-130.5c-.4.8-3.2.3-4.3 1-.7.4-2 1.3-2.4.5-.2-.4-.1-.9.1-1.3s.6-.7 1-1c1.5-1.1 7.8-3.7 5.6.8Zm9.8-1.8c0 .6.4 1.2 1 1.5.8.4 1.9 0 2.8-.1 2.1-.3 2.8-.3 4.9-.3s1.8 0 2.3-.2.9-.7.8-1.2c-.1-.7-1.1-1-1.9-1.2-2-.4-4.1-.6-6.2-.5-2.1 0-4.2-.3-3.8 2Zm22.8 1.5c.8-1.5 2.9-2.1 4.5-1.3 1.6.7 2.6 2.4 2.9 4.1s0 3.5-.4 5.2c-.3 1-.6 2-1.4 2.7s-2.1.7-2.7-.1" class="cls-2"/><path d="M176.4 145.1c-.9 5.4-1 8.6-.5 11.5.4 2.2 1.1 4.3 2.1 7 .2.5.4 1.1.6 1.6m-50-31.6c-.7-5.8 1.4-7.6 2.8-11.1 1.7-4.1 5.3-4.4 9.6-6.7 5-2.7 9.6 1.5 12.9 1.5 6-.2 11 7.5 11.9 13.3.3 1.9 0 3.5 1.6 4.7.4.3.9.6 1.5.7s1.6-1.1 1.8-1.5" class="cls-2"/><path d="M128.5 133.3c-.7-2.1-2.4-4.3-3.4-7.8-2.2-8.2 2.2-9.6 3.4-11.6.8-1.3 0-5.5 3.7-7.8 2.1-1.4 4.8-.3 6.2-1 2.8-1.3 3.2-4.6 5.9-6.1 2.3-1.2 6.1.2 7.9-.1 1.9-.4 3.9-2 5.7-2.6 3.4-1.2 4.9 3 8.5 3.5 1.6.2 6.2-.5 8.8 1.4 2 1.4 3.5 6.3 5.1 8.5 2.2 3 4.5 2.7 5 5.3.7 4.1.9 8.8 2 12.8 1 3.7-.6 11.6-1.2 13.5-1 3-3.1 10.6-10.1 15.5" class="cls-2"/><path d="M141.4 149.6c-1.4 4.8 2.9 4.5 6.1 3.6m8.7 2.6c.2.5-1.5 5.6-7.6 6.4-3.5.4-6-.7-7.1-3.7" class="cls-1"/><path d="M141 158.3c.2 0 .3 0 .5.1 4.5 1 10.2-.8 14.7-2.6" class="cls-1"/></svg>')}`;
export default image;
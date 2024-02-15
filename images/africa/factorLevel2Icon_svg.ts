/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="Layer_5" width="300" height="300" viewBox="0 0 300 300"><defs><style>.cls-1,.cls-2{stroke-linecap:round;stroke-linejoin:round}.cls-1,.cls-2,.cls-3,.cls-4,.cls-5{fill:none}.cls-1,.cls-2,.cls-3,.cls-5{stroke:#000}.cls-2,.cls-5{stroke-width:.5px}.cls-3,.cls-4,.cls-5{stroke-miterlimit:10}.cls-4{stroke:#fff}.cls-6{fill:#f9d875}.cls-10,.cls-11,.cls-12,.cls-13,.cls-14,.cls-15,.cls-16,.cls-17,.cls-18,.cls-6,.cls-7,.cls-8,.cls-9{stroke-width:0}.cls-7{fill:#4d0099}.cls-8{fill:#2b2b2b}.cls-9{fill:#3e684d}.cls-10{fill:#1e1e1e}.cls-11{fill:#ce5524}.cls-12{fill:#906648}.cls-13{fill:#3246ff}.cls-14{fill:#67a522}.cls-15{fill:#fff}.cls-16{fill:#f17621}.cls-17{fill:#ecb14b}.cls-18{fill:#050504}</style></defs><path d="M204.4 284.9c.5.7.6 1.9.5 2.8 0 .7-.3 1.3-.8 1.7-1.6 1.3-5.8 4.3-11.3 4.9-5.8.7-10-3.2-11.4-4.7-.4-.4-.6-.8-.6-1.4l-.3-3.1c0-.6.1-1.2.5-1.6l.3-.3h.1v1.2c.6 1.9 3 7.3 12.3 6.8 9.4-.5 10.4-4.9 10.5-6.3h.1Zm-27.8-148.3c1-5 2.6-10.7 4.5-16.2.4-1.3.9-2.6 1.3-3.9 1.5-4.2 3-8.1 4.3-11.2.4-1 .8-1.8 1.1-2.6.4-.9.7-1.6 1-2.3.4-1 .8-1.9 1.2-2.8.6-1.2 1.1-2.3 1.6-3.3.6-1.1 1.2-2.1 1.8-2.9 3.4-4.7 6.2-5.1 7.8-4.7.6.3 1.1.5 1.4.7 3 2.6 4.2 7.2 1.3 12.9-3.3 6.5-5.7 18.2-13.3 33.7 0 0-1.6 4.7-4.3 11.2-1.7 4.2-6 12.8-8.8 19.6-3.3.5-7.2.6-10.4-.4 1.5-6.3 3.1-14.2 3.7-17.7.4-1.9 1.5-4 2.8-6.1.9-1.5 2-2.9 2.9-4.1Z" class="cls-8"/><path d="M202.4 277.9c2.7 4.8 1.9 6.6 1.9 6.6v.4c0 1.4-1.1 5.8-10.5 6.3-9.3.5-11.7-5-12.3-6.8-.1-.4-.1-.8 0-1.1 0-.2 0-.3.1-.5 0 0 3.1-4.2 7.8-6.3 2.3-1.1 5.1-1.7 8.1-.9 1.6.4 3.3 1.2 4.9 2.5Z" class="cls-8"/><path d="M201.2 86.8c-1.6-.4-4.4 0-7.8 4.7-1.5 0-3.1.2-4.8.4-.7-2.4-1.4-4.2-2.1-6.5 2.2-.6 3.9-.9 6.2-1.3 3 .8 6.3 1.8 8.4 2.7Z" class="cls-17"/><path d="M187.9 271.8c-1.3 0-2.7 0-4-.2-3.2-.2-6.1-.7-7.3-1.2-.7-.3-4.2-33.6-4.4-34.4l-4.7-25.6-4.2-23c.7.4 1.3.7 1.7.8 2.2.8 7.8-5.1 10.4-6.4 0-3.7.4-4.2-.7-8.3 0-1.1.6-3 1.5-5.4 4.8-.5 10.3-6 10.3-6s4 13.5 4.7 23.6c.6 8.9 2.8 29.4 3.3 34.9 0 .8 6.5 46.4 5.9 46.8-1.1.9-2 1.9-3.5 2.7-.5.3-1.1.6-1.9.8-.9.3-1.8.5-3 .6s-2.6.2-4.1.2Z" class="cls-10"/><path d="M197.2 270.7c2.5 2.9 4.1 5.3 5.2 7.2-1.7-1.3-3.4-2.1-4.9-2.5l-2.4-4.4c.7-.2 1.3-.5 1.9-.8 0 .2.2.4.3.5Zm-2.2.3 2.4 4.4c-3-.7-5.7-.1-8.1.9l-1.5-4.6c1.5 0 2.9 0 4.1-.2q1.8-.15 3-.6Zm.8-226.7c1.6 7.5 1.1 13.6-2.6 20.3-.8 1.3-1.5 4.7-6.1 8.6.2-1.9.4-3.8.7-5.4.3-1.5.6-2.9.9-3.9v-.2c.7-.3 1.4-1.2 1.9-2.6.7-2.3 2.7-7.7 0-8.9-2-.9-5.1 3.9-5.1 3.9-3.4-.9-4.2-12-7.9-15.5s-11.7-2.3-17.7-2.2c-7 .1-9.6 3.3-10.8 9h-.1c0-3.7 0-6.4 1.5-9.8 1.6-3.7 3.9-6.1 6.6-7.7 3-1.7 9.5-3.3 12.9-3.1 4.5.3 10.4 1.1 14.6 2.8 7.1 2.9 9.5 7.5 11.1 15Z" class="cls-8"/><path d="M193.4 91.5c-.6.8-1.2 1.8-1.8 2.9-.8 0-1.5.1-2.3.2-.2-1-.5-1.9-.7-2.7 1.7-.2 3.3-.4 4.8-.4" class="cls-16"/><path d="M191.6 94.3c-.5 1-1.1 2.1-1.6 3.3q-.3-1.65-.6-3c.8-.1 1.5-.2 2.3-.2Z" class="cls-11"/><path d="M189.4 94.6q.3 1.35.6 3c-.4.8-.8 1.8-1.2 2.8-.3.6-.6 1.4-1 2.3h-.1c-.7-3.7-1.1-5.8-1.5-7.7 1.1-.2 2.2-.3 3.2-.4" class="cls-16"/><path d="M186.5 82.4c1.3.4 3.7 1 6.3 1.7-2.4.4-4.1.7-6.2 1.3-.3-.8-.6-1.7-.8-2.7 0-.2.2-.3.2-.4.1 0 .3.1.5.2Z" class="cls-17"/><path d="m187.9 271.8 1.5 4.6c-4.7 2.2-7.8 6.3-7.8 6.3.7-3.2 2.4-10.3 2.4-11h4Z" class="cls-8"/><path d="M188.7 91.9c.2.8.5 1.7.7 2.7-1 .1-2.1.3-3.2.4-.2-.9-.4-1.7-.7-2.6 1.1-.2 2.1-.4 3.2-.5" class="cls-11"/><path d="M186.5 85.4c.7 2.3 1.4 4 2.1 6.5-1 .1-2.1.3-3.2.5-.4-1.5-1-3.3-1.9-6.1 1.1-.4 2.1-.6 2.9-.9Z" class="cls-6"/><path d="M187.7 102.6h.1c-.3.8-.7 1.7-1.1 2.7-2.2.5-4.5.9-6.8 1.5 0-1-.2-1.9-.3-2.9 2.6-.5 5.2-.9 8-1.3Z" class="cls-16"/><path d="M190.6 52c-2-.9-5.1 3.9-5.1 3.9-3.4-.9-4.2-12-7.9-15.5s-11.7-2.3-17.7-2.2c-7 .1-9.6 3.3-10.8 9h-.1v.8s-.3 3.6.4 6.1c1.6 2.4 2.4 3.9 1.3 8.7-.1 2 .2 6 1.3 8.9 3.2 8.2 7.1 16.1 9.7 15.9 2.8-.2 5.4-.7 7.6-1.5v.3c.1 0 .3.3.3 1.2v2.5c0 .7-.8 3.1 1.5 3 .8 0 2.2-.4 3.6-.8.9-.3 1.8-.6 2.6-.9q1.05-.3 1.8-.6c.6-.3 1.2-.6 1.7-1.1 1-1 1.9-2.2 2.7-3.3 1-1.5 1.7-2.8 2.1-3.6 0-.2-.1-.4-.2-.6 0 0 .2 0 .4.1.1 0 .3.1.5.2 0-2.2.3-5.8.6-9.3.2-1.9.4-3.8.7-5.4.3-1.5.6-2.9.9-3.9v-.2c.7-.3 1.4-1.2 1.9-2.6.7-2.3 2.7-7.7 0-8.9Zm-35.3 8.8c-.4 0-.8-1-.8-2.2s.4-2.2.8-2.2.8 1 .8 2.2-.4 2.2-.8 2.2m1.9-6.9c-1.6-.7-4.6-.5-6.6.5 0-2.2 1.8-3.9 3.7-4 1.9 0 3.6-.3 2.8 3.4Zm.6 22.5c-.7-.2 6.6-.4 11.5-2.5-4.5 8.2-9.1 6.4-11.5 2.5m8.4-22.9c-1.3-2.8 1.3-3.7 4.4-3.7 3.2 0 6.5 2.3 7.1 3.7-3.2-.8-8.8-.5-11.5 0m7 4.4c0 1.2-.5 2.2-1.2 2.2s-1.1-1-1.1-2.2.5-2.2 1.1-2.2 1.2 1 1.2 2.2" class="cls-12"/><path d="M186.2 95c.4 1.8.8 3.9 1.5 7.6-2.8.4-5.5.8-8 1.3-.3-2.4-.6-4.9-1.1-7.3 2.6-.7 5.1-1.3 7.6-1.6" class="cls-17"/><path d="M185.5 92.4c.3.9.5 1.8.7 2.6-2.5.4-5 .9-7.6 1.6-.2-.9-.3-1.7-.5-2.6 2.5-.7 5-1.3 7.4-1.7Z" class="cls-6"/><path d="M186.4 145.3c-.8 5.3.2 16.8.2 16.8s-5.5 5.5-10.3 6c.4-1 .8-2.1 1.3-3.3 2.8-6.8 7.1-15.4 8.8-19.6Z" class="cls-8"/><path d="M185.7 82.7c.3 1 .6 1.9.8 2.7-.9.3-1.8.5-2.9.9 1-1.5 1.7-2.8 2.1-3.6" class="cls-9"/><path d="M185.9 82.2c0 .1-.1.3-.2.4 0-.2-.1-.4-.2-.6 0 0 .2 0 .4.1Z" class="cls-17"/><path d="M183.6 86.3c.9 2.7 1.4 4.5 1.9 6.1-2.4.4-4.9 1-7.4 1.7-.2-.9-.4-1.8-.7-2.7q1.05-.3 1.8-.6c.6-.3 1.2-.6 1.7-1.1 1-1 1.9-2.2 2.7-3.3Z" class="cls-14"/><path d="M186.7 105.3c-1.3 3.1-2.8 7-4.3 11.2h-.1c-.4 0-1 .2-1.5.4-.3-3.6-.5-6.8-.8-10 2.3-.6 4.5-1 6.8-1.5Z" class="cls-16"/><path d="M182.3 116.4h.1c-.4 1.3-.9 2.6-1.3 3.9-2 .6-5.2 1.3-7.1 2.2v-4h.4c1-.3 2.3-.6 3.6-1 .9-.3 1.9-.5 2.8-.8.6-.1 1.1-.3 1.5-.4Z" class="cls-15"/><path d="M179.9 106.8c.3 3.2.5 6.5.8 10-.9.2-1.8.5-2.8.8-.4-3.8-.6-7-.8-10 .9-.3 1.9-.5 2.8-.8" class="cls-16"/><path d="M179.7 103.9c.1.9.2 1.9.3 2.9-.9.2-1.9.5-2.8.8 0-1-.1-2-.2-3 .9-.3 1.8-.4 2.8-.6Z" class="cls-11"/><path d="M178.6 96.7c.5 2.4.8 4.9 1.1 7.3-.9.2-1.8.4-2.8.6-.2-2.4-.4-4.8-.9-7.2.9-.3 1.7-.5 2.6-.7" class="cls-6"/><path d="M178 94.1c.2.9.4 1.7.5 2.6-.9.2-1.7.4-2.6.7-.2-.8-.3-1.7-.5-2.5.9-.3 1.7-.5 2.6-.8m-.1 23.4c-1.3.5-2.6.8-3.6 1.1h-.3l.2-8.5h-2.5v-.5c1.8-.8 3.5-1.4 5.3-1.9.2 3 .4 6.2.8 9.9Z" class="cls-17"/><path d="M178 94.1c-.9.3-1.7.5-2.6.8-.2-.9-.4-1.7-.7-2.6.9-.3 1.8-.6 2.6-.9.3.9.5 1.8.7 2.7" class="cls-11"/><path d="M181.1 120.4c-1.8 5.5-3.5 11.2-4.5 16.2-.9 1.2-2 2.6-2.9 4.1v-6.6c.1 0 .3-11.5.3-11.5 1.8-1 5.1-1.6 7.1-2.2" class="cls-8"/><path d="M176.9 104.6c0 1 .1 2 .2 3-1.8.5-3.6 1.1-5.3 1.9v.5h-1.6v-.4c-.1-.9-.2-1.7-.4-2.6 2.4-1 4.7-1.8 7.1-2.4" class="cls-6"/><path d="M176 97.4c.4 2.4.7 4.7.9 7.2-2.3.6-4.7 1.3-7.1 2.4-.4-2.3-.8-4.6-1.4-6.9q3.75-1.5 7.5-2.7Z" class="cls-14"/><path d="M177.5 164.9c-.5 1.1-.9 2.3-1.3 3.3-.9 2.4-1.5 4.3-1.5 5.4-3.1 1.3-6.9.9-9.7-.9.5-1.3 1.3-4.4 2.2-8.2 3.2 1.1 7.1.9 10.4.4Z" class="cls-16"/><path d="M175.5 94.9c.2.9.4 1.7.5 2.5q-3.75 1.05-7.5 2.7c-.2-.8-.4-1.6-.6-2.5 2.5-1 5.1-2 7.6-2.7" class="cls-9"/><path d="M170.6 49.9c3.2 0 6.5 2.3 7.1 3.7-3.2-.8-8.8-.5-11.5 0-1.3-2.8 1.3-3.7 4.4-3.7" class="cls-8"/><path d="m157.1 180.7 1.8-4c.4-.3.8-.6 1-.9.8-1.3 5.1-3.2 5.1-3.2 2.8 1.8 6.6 2.2 9.7.9 1.1 4.1.7 4.6.7 8.3-2.6 1.2-8.2 7.2-10.4 6.4-.4-.1-1-.4-1.7-.8-3.3-1.8-9.3-5.9-9.3-5.9v-.4h2.9c0-.1.1-.3.1-.3Z" class="cls-12"/><path d="M174.7 92.2c.3.9.5 1.8.7 2.6-2.5.8-5.1 1.7-7.6 2.7-.8-3-1.8-5.9-2.9-8.7s4.8-1.4 4.8-1.4v2.5c0 .7-.8 3.1 1.5 3 .8 0 2.2-.4 3.6-.8Z" class="cls-11"/><path d="m174.2 110.1-.1 8.5-.1 4-.2 11.5-18.6-.1.4-24.5 2.2.1 2.5.1 7.3.2h2.6v.1h1.6z" class="cls-13"/><path d="M172 55.8c.7 0 1.2 1 1.2 2.2s-.5 2.2-1.2 2.2-1.1-1-1.1-2.2.5-2.2 1.1-2.2" class="cls-18"/><path d="M169.8 106.9c.1.9.3 1.7.4 2.6v.4h-2.6v-.3c0-.5-.1-1-.2-1.5.6-.3 1.2-.6 1.9-.9l.6-.3Z" class="cls-17"/><path d="m169.8 106.9-.6.3c-.6.3-1.3.6-1.9.9-.5-3.1-.9-5.1-1.4-7 .8-.4 1.6-.8 2.5-1.1.6 2.3 1 4.6 1.4 6.9" class="cls-9"/><path d="M167.9 97.6c.2.8.4 1.6.6 2.5-.8.3-1.7.7-2.5 1.1-.2-.8-.5-1.6-.7-2.4.9-.4 1.7-.8 2.6-1.1Z" class="cls-14"/><path d="m155.2 134-.3 22.5-.4 24.5h2.4c0-.1.1-.3.1-.3-2-.4-2.6-3.4-1.8-3.1.6.2 2.4-.2 3.6-.9.4-.3.8-.6 1-.9.8-1.3 5.1-3.2 5.1-3.2.5-1.3 1.3-4.4 2.2-8.2 1.5-6.3 3.1-14.2 3.7-17.7.4-1.9 1.5-4 2.8-6.1V134h-18.5Z" class="cls-13"/><path d="M167.4 108.1c0 .5.1.9.2 1.5v.3l-7.3-.2c-.2-2-.5-3.7-.9-5.2q3.3-1.8 6.6-3.3c.5 1.8.9 3.8 1.4 7Z" class="cls-11"/><path d="m163.3 187.4 4.2 23c0 .7-.8 16.8-.9 17.4s-1.1 18.2-1.4 21.7c-.6 8-.3 12.2-.5 18-1.3.8-2.7 1.3-4 1.6-4.3 1.2-8.9 1.2-13.2 0-1.5-.4-3-.9-4.5-1.7 1.6-10.9 3.4-37.9 3.4-39.8s3.1-42.4 3.4-46.5l4.1-.2v.4s6 4.1 9.3 5.9Z" class="cls-10"/><path d="M167.9 97.6c-.9.4-1.8.7-2.6 1.1-.7-2.2-1.6-4.6-3-9s2.7-.8 2.7-.8c1.1 2.8 2.1 5.7 2.9 8.7m-2.7 1.1c.3.8.5 1.6.7 2.4-2.2 1-4.5 2.1-6.6 3.3-.2-.8-.4-1.6-.7-2.4 2.1-1.2 4.3-2.3 6.6-3.4Z" class="cls-16"/><path d="M169.2 73.9c-4.5 8.2-9.1 6.4-11.5 2.5-.7-.2 6.6-.4 11.5-2.5" class="cls-15"/><path d="M162.2 89.7c1.4 4.4 2.3 6.9 3 9-2.3 1-4.5 2.2-6.6 3.4-.7-2.1-1.6-4-2.7-5.8 2-3.3 3.8-5.6 4-5.9s2.3-.7 2.3-.7" class="cls-17"/><path d="M160.8 269.3c0 .9.8 2.8.3 4.2 0 .1-.1.3-.3.5-1.3 1.5-6.3 4-6.9 4.7s-5.2 5.2-7.8 6.9c.4-5.1-2.3-8.9-5.3-11s5.4-4.1 6.7-5.2c4.3 1.1 8.9 1.1 13.2 0Z" class="cls-8"/><path d="M160.8 273.9c.1.5.2 1 .2 1.4 0 .9-.5 1.6-1.2 2-1.5.8-4.2 2.2-4.9 2.5-.9.5-3.9 4.6-6.8 7.2s-8.7 3.5-12.9 3.2c-3-.2-6.7-2.5-8.4-3.7-.6-.4-1-1.1-1-1.9v-.7c0-.7.3-1.3.8-1.8h.2v-.1c0 .5.2 1.1.5 1.5 3.9 5.1 15.6 3.3 17.9 2.4.3-.1.6-.3.9-.5 2.7-1.7 7.2-6.2 7.8-6.9s5.5-3.2 6.9-4.7Z" class="cls-8"/><path d="M160.3 109.5c0 .1-2.5 0-2.5 0-.2-1.5-.4-2.7-.7-3.8.7-.4 1.5-.9 2.2-1.3.4 1.6.7 3.2.9 5.1Z" class="cls-16"/><path d="M159.3 104.5c-.7.4-1.5.9-2.2 1.3-.2-.8-.4-1.6-.7-2.4.7-.4 1.4-.9 2.2-1.3.3.8.5 1.6.7 2.4" class="cls-11"/><path d="m158.9 176.7-1.8 4c-2-.4-2.6-3.4-1.8-3.1.6.2 2.4-.2 3.6-.9" class="cls-12"/><path d="M157.8 109.5h-5.5v-.5c1.5-1.1 3.1-2.2 4.7-3.2.3 1.1.5 2.3.7 3.8Z" class="cls-17"/><path d="M154.3 50.5c1.9 0 3.6-.3 2.8 3.4-1.6-.7-4.6-.5-6.6.5 0-2.2 1.8-3.9 3.7-4Z" class="cls-8"/><path d="M158.6 102.1c-.7.4-1.5.8-2.2 1.3-.5-1.4-1.1-2.8-2-4.6.5-.9.9-1.7 1.4-2.5 1.1 1.9 2 3.7 2.7 5.8Z" class="cls-6"/><path d="M151.2 107c1.6-1.3 3.4-2.5 5.3-3.7.3.8.5 1.6.7 2.4-1.6 1-3.2 2.1-4.7 3.2v.4l-3.5-.1v-.4c.3-2.1.8-4 1.5-5.8.7 0 1.3-.1 2-.2h.1c-.5 1.4-1 2.7-1.3 4.1Z" class="cls-6"/><path d="M155.9 96.2c-.5.8-.9 1.6-1.4 2.5-.1.3-.3.5-.4.8-.9.2-1.4.4-2.4.6 3.2-6.3 7.8-9.5 8.2-9.7-.2.3-2 2.6-4 5.9Z" class="cls-14"/><path d="m155.6 109.5-.4 24.5h-21.3l.2-25.1 14.8.4 3.5.1z" class="cls-7"/><path d="M155.3 56.4c.4 0 .8 1 .8 2.2s-.4 2.2-.8 2.2-.8-1-.8-2.2.4-2.2.8-2.2" class="cls-18"/><path d="m155.2 134-.3 22.6-21.2.4.2-23z" class="cls-7"/><path d="m149.8 181.3-16.4.8.3-25.1 21.2-.4-.4 24.5h-.5z" class="cls-13"/><path d="M154.5 98.7c.9 1.8 1.5 3.2 2 4.6-1.9 1.1-3.6 2.4-5.3 3.7.3-1.4.8-2.7 1.3-4 .5-1.2 1-2.4 1.6-3.5.1-.3.3-.5.4-.8" class="cls-14"/><path d="M154.1 99.5c-.6 1.1-1.1 2.3-1.6 3.5h-.1c-.7 0-1.2 0-2 .1.4-1.1.8-2.1 1.3-3 .9-.2 1.4-.4 2.4-.6" class="cls-9"/><path d="M140.8 274.4c2.9 2.1 5.7 6 5.3 11-.3.2-.6.4-.9.5-2.3 1-14 2.7-17.9-2.4-.3-.4-.5-1-.5-1.5v-.2c.5-4.6 5.1-8.5 8.4-9.2.4-.1.8-.1 1.1-.1 1.2 0 2.9.7 4.5 1.9" class="cls-8"/><path d="M143.1 267.6c1.5.7 3 1.3 4.5 1.7-1.4 1.1-6.7 5.2-6.7 5.2-1.6-1.2-3.3-1.8-4.5-1.9-.3 0-.7 0-1.1.1s7.9-5.1 7.9-5.1Z" class="cls-8"/><path d="m134.1 108.9-.2 25.1-20.6-.1.1-25.6z" class="cls-7"/><path d="m133.9 134-.2 23-20.5.5.1-23.6z" class="cls-7"/><path d="m133.7 157-.3 25.1-20.2 1v-25.6z" class="cls-13"/><path d="m113 108.5-.1 25.4-7.2-.3.1-23.3zm-.1 25.4-.2 23.6-7.1-2.2.1-21.7z" class="cls-7"/><path d="m112.7 157.5-.1 25.8-7.1-4.2.1-23.8z" class="cls-13"/><path d="m105.8 110.3-.1 23.3-6.6-.1V112z" class="cls-7"/><path d="m105.7 133.6-.1 21.7-6.6-1.9.1-19.9z" class="cls-7"/><path d="m105.6 155.3-.1 23.8-6.6-3.8.1-21.9zM99.1 112v21.5l-5.2-.3.1-19.9zm0 21.5-.1 19.9-5.1-1.6v-18.6z" class="cls-13"/><path d="m99 153.4-.1 21.9-5.1-3.1.1-20.4z" class="cls-13"/><path d="M164.8 267.7c-1.3.6-2.7 1.1-4 1.5-4.3 1.2-8.9 1.2-13.2 0-1.5-.4-3-.9-4.5-1.7 1.6-10.9 3.4-37.9 3.4-39.8s3.1-42.4 3.4-46.5v-.3m40.8-46.8s-1.6 4.7-4.3 11.2c-1.7 4.2-6 12.8-8.8 19.6-.5 1.1-.9 2.3-1.3 3.3-.9 2.4-1.5 4.3-1.5 5.4 1.1 4.1.7 4.6.7 8.3-2.6 1.2-8.2 7.2-10.4 6.4-.4-.1-1-.4-1.7-.8-3.3-1.8-9.3-5.9-9.3-5.9" class="cls-3"/><path d="m133.4 182.1-20.2 1v-25.6m41.3 23.6h-.5l-4.2.2-16.4.8.3-25.1m21.2-.4-21.2.4m23.3 24-2.5.1.4-24.5m.3-22.6-.3 22.6 13.1-.3m5.7-15.6.1-6.6m-39.9-.1-.2 23-20.5.5.1-23.6m-7.8 45.2 7.1 4.2.1-25.8m-13.8 17.8 6.6 3.8.1-23.8m-6.6-1.9 6.6 1.9m-11.7-3.5-.1 20.4 5.1 3.1.1-21.9m-5.1-20.2v18.6l5.1 1.6.1-19.9m0-21.5-5.1 1.3-.1 19.9 5.2.3m6.7-23.2-6.7 1.7v21.5l6.6.1m0 0-.1 21.7 7.1 2.2.2-23.6" class="cls-4"/><path d="m105.7 133.6 7.2.3.1-25.4-7.2 1.8z" class="cls-4"/><path d="M183.1 76.4c-.6.7-4.7 6.7-13.6 9.6-2.2.8-4.8 1.3-7.6 1.5-2.6.2-6.5-7.7-9.7-15.9-1.1-2.9-1.5-6.9-1.3-8.9 1-4.8.2-6.2-1.3-8.7-.7-2.5-.4-6.1-.4-6.1M169.7 90c.1-1.1.1-2 0-2.5 0-.8-.2-1.2-.2-1.2v.1m.2 3.6c0 .7-.8 3.1 1.5 3 .8 0 2.2-.4 3.6-.8.9-.3 1.8-.6 2.6-.9q1.05-.3 1.8-.6c.6-.3 1.2-.6 1.7-1.1 1-1 1.9-2.2 2.7-3.3 1-1.5 1.7-2.8 2.1-3.6 0-.2.2-.3.2-.4 0-.2.1-.3.1-.3m16.7 5.6c3 2.5 4.2 7.2 1.3 12.8-3.3 6.5-5.7 18.2-13.3 33.7m10.6-47.3c.6.3 1.1.5 1.4.7" class="cls-3"/><path d="M185.5 82.1s.2 0 .4.1c.1 0 .3.1.5.2 1.3.4 3.7 1 6.3 1.7 3 .8 6.3 1.8 8.4 2.7" class="cls-3"/><path d="M202.7 87.6c-.2-.2-.7-.5-1.4-.8-1.6-.4-4.4 0-7.8 4.7-.6.8-1.2 1.8-1.8 2.9-.5 1-1.1 2.1-1.6 3.3-.4.8-.8 1.8-1.2 2.8m-34.4-1.8c-.1.3-.3.5-.4.8-.6 1.1-1.1 2.3-1.6 3.5-.5 1.3-1 2.7-1.3 4-.2.6-.3 1.3-.4 1.9m9.1-18.5c-.2.3-2 2.6-4 5.9-.5.8-.9 1.6-1.4 2.5m15.3-11.3h-.1l-4.7 1.4-2.8.8-2.2.6" class="cls-3"/><path d="M150.4 103.1c-.6 1.7-1.1 3.7-1.5 5.8" class="cls-1"/><path d="M160 90.3c-.4.3-5 3.4-8.2 9.7-.5.9-.9 2-1.3 3m35.9 42.3c-.8 5.3.2 16.8.2 16.8s-5.5 5.5-10.3 6m-13.1 11.8h-.1l-2 1.5m3.9-8.8s-4.4 1.9-5.1 3.2c-.2.3-.6.6-1 .9-1.2.7-3 1.1-3.6.9-.8-.2-.1 2.7 1.8 3.1 1.9.3 5.6-.8 6-.9m25.7-79.4c-.3.6-.6 1.4-1 2.3-.3.8-.7 1.7-1.1 2.6-1.3 3.1-2.8 7-4.3 11.2-.4 1.3-.9 2.6-1.3 3.9-1.8 5.5-3.5 11.2-4.5 16.2m2.7-3.1s-1.2 1.3-2.7 3.1c-.9 1.2-2 2.6-2.9 4.1-1.3 2-2.4 4.2-2.8 6.1-.6 3.5-2.3 11.4-3.7 17.7-.9 3.7-1.7 6.8-2.2 8.2m2.6 37.7-4.3-23" class="cls-3"/><path d="M186.6 162.1s4 13.5 4.7 23.6c.6 8.9 2.8 29.4 3.3 34.9 0 .8 6.5 46.4 5.9 46.8-1.1.9-2 1.9-3.5 2.7-.5.3-1.1.6-1.9.8-.9.3-1.8.5-3 .6s-2.6.2-4.1.2-2.7 0-4-.2c-3.2-.2-6.1-.7-7.3-1.2-.7-.3-4.2-33.6-4.4-34.4l-4.7-25.6m-2.9 57.3c.2-5.8 0-10.1.5-18 .3-3.5 1.3-21.1 1.4-21.7s.9-16.8.9-17.4m-6.7 58.8c0 .9.8 2.8.3 4.2 0 .1-.1.3-.3.5-1.3 1.5-6.3 4-6.9 4.7s-5.2 5.2-7.8 6.9c-.3.2-.6.4-.9.5-2.3 1-14 2.7-17.9-2.4-.3-.4-.5-1-.5-1.5v-.2c.5-4.6 5.1-8.5 8.4-9.2.4-.1.8-.1 1.1-.1 1.2 0 2.9.7 4.5 1.9 2.9 2.1 5.7 6 5.3 11" class="cls-3"/><path d="M140.8 274.4s5.4-4.1 6.7-5.2m-12.3 3.5 7.9-5.1m-16.3 14.5h-.2c-.5.6-.8 1.2-.8 1.9v.7c0 .8.4 1.5 1 1.9 1.7 1.2 5.4 3.5 8.4 3.7 4.1.3 9.9-.6 12.9-3.2s5.9-6.7 6.8-7.2c.6-.4 3.3-1.7 4.9-2.5.8-.4 1.2-1.1 1.2-2s0-.9-.2-1.4m41.6 3.9c-1.1-1.9-2.7-4.3-5.2-7.2-.1-.2-.3-.3-.3-.5 0 0 0-.2-.1-.3m-12.9 1.9c0 .6-1.6 7.8-2.4 11 0 .2 0 .4-.1.5v1.1c.6 1.9 3 7.3 12.3 6.8 9.4-.5 10.4-4.9 10.5-6.3v-.4s.8-1.8-1.9-6.6" class="cls-3"/><path d="M181.6 282.7s3.1-4.2 7.8-6.3c2.3-1.1 5.1-1.7 8.1-.9 1.6.4 3.3 1.2 4.9 2.5m-14.5-6.2 1.5 4.6m8-1L195 271m-13.7 12.2-.3.3c-.4.5-.5 1.1-.5 1.6l.3 3.1c0 .5.3 1 .6 1.4 1.4 1.5 5.6 5.4 11.4 4.7 5.5-.6 9.6-3.5 11.3-4.9.5-.4.8-1.1.8-1.7 0-.9 0-2.2-.5-2.8M173.2 58c0 1.2-.5 2.2-1.2 2.2s-1.1-1-1.1-2.2.5-2.2 1.1-2.2 1.2 1 1.2 2.2Zm-17.1.7c0 1.2-.4 2.2-.8 2.2s-.8-1-.8-2.2.4-2.2.8-2.2.8 1 .8 2.2Zm8.5 113.6c.1 0 .3.2.4.3 2.8 1.8 6.6 2.2 9.7.9m2.8-8.6c-3.3.5-7.2.6-10.4-.4-.1 0-.3 0-.4-.1" class="cls-3"/><path d="M182.3 116.4c-.4.1-1 .3-1.5.4-.9.2-1.8.5-2.8.8-1.3.4-2.6.7-3.6 1" class="cls-5"/><path d="M181.1 120.4c-2 .6-5.2 1.3-7.1 2.2" class="cls-3"/><path d="M162.2 89.7c1.4 4.4 2.3 6.9 3 9 .3.8.5 1.6.7 2.4.5 1.8.9 3.8 1.4 7 0 .5.1.9.2 1.5m8-14.7c.2.9.4 1.7.5 2.5.4 2.4.7 4.7.9 7.2 0 1 .1 2 .2 3 .2 3 .4 6.2.8 9.9" class="cls-2"/><path d="M174.7 92.2c.3.9.5 1.8.7 2.6" class="cls-5"/><path d="M185.5 92.4c.3.9.5 1.8.7 2.6.4 1.8.8 3.9 1.5 7.6" class="cls-2"/><path d="M183.6 86.3c.9 2.7 1.4 4.5 1.9 6.1" class="cls-5"/><path d="M154.5 98.7c.9 1.8 1.5 3.2 2 4.6.3.8.5 1.6.7 2.4.3 1.1.5 2.3.7 3.8" class="cls-2"/><path d="m165 109.3 2.4-1.2c.6-.3 1.2-.6 1.9-.9l.6-.3c2.4-1 4.7-1.8 7.1-2.4.9-.3 1.8-.4 2.8-.6 2.6-.5 5.2-.9 8-1.3m-36.6 4.4c1.6-1.3 3.4-2.5 5.3-3.7s1.4-.9 2.2-1.3c2.1-1.2 4.3-2.3 6.6-3.4.9-.4 1.7-.8 2.6-1.1 2.5-1 5.1-2 7.6-2.7.9-.3 1.7-.5 2.6-.8 2.5-.7 5-1.3 7.4-1.7 1.1-.2 2.1-.4 3.2-.5 1.7-.2 3.3-.4 4.8-.4" class="cls-2"/><path d="M165 88.9c1.1 2.8 2.1 5.7 2.9 8.7.2.8.4 1.6.6 2.5.6 2.3 1 4.6 1.4 6.9.1.9.3 1.7.4 2.6m7.7-15.5c.2.9.4 1.7.5 2.6.5 2.4.8 4.9 1.1 7.3.1.9.2 1.9.3 2.9.3 3.2.5 6.5.8 10" class="cls-2"/><path d="M177.3 91.4c.3.9.5 1.8.7 2.7" class="cls-5"/><path d="M185.5 82.1c0 .2.1.4.2.6.3 1 .6 1.9.8 2.7.7 2.3 1.4 4 2.1 6.5.2.8.5 1.7.7 2.7q.3 1.35.6 3m-34-1.4c1.1 1.9 2 3.8 2.7 5.9.3.8.5 1.6.7 2.4.4 1.6.7 3.2.9 5.1m11.6-.1c1.8-.8 3.5-1.4 5.3-1.9.9-.3 1.9-.5 2.8-.8 2.3-.6 4.5-1 6.8-1.5q0 0 0 0" class="cls-2"/><path d="M152.4 109c1.5-1.1 3.1-2.2 4.7-3.2.7-.4 1.5-.9 2.2-1.3q3.3-1.8 6.6-3.3c.8-.4 1.6-.8 2.5-1.1q3.75-1.5 7.5-2.7c.9-.3 1.7-.5 2.6-.7 2.6-.7 5.1-1.3 7.6-1.6 1.1-.2 2.2-.3 3.2-.4.8-.1 1.5-.2 2.3-.2h0m-5.1-9.1c2.2-.6 3.9-.9 6.2-1.3" class="cls-2"/><path d="M183.6 86.3c1.1-.4 2.1-.6 2.9-.9" class="cls-5"/><path d="M154.1 99.5c-.9.2-1.4.4-2.4.6h0m.7 2.8c-.7 0-1.2.1-2 .2h0" class="cls-2"/><path d="M157.2 68.7c0 4.2 4.9 2.7 7.3 2m-15.3-23.6c1.1-5.7 3.7-8.8 10.8-9 6-.1 14-1.3 17.7 2.2s4.5 14.6 7.9 15.5c0 0 3.1-4.7 5.1-3.9 2.8 1.2.8 6.6 0 8.9-.5 1.5-1.2 2.3-2 2.6-.6.3-1.2.3-1.7 0m-36.4-8.9c2-1 5-1.2 6.6-.5" class="cls-1"/><path d="M150.6 54.5c0-2.2 1.8-3.9 3.7-4 1.9 0 3.6-.3 2.8 3.4m12.1 20c-4.5 8.2-9.1 6.4-11.5 2.5-.7-.2 6.6-.4 11.5-2.5m8.4-20.3c-3.2-.8-8.8-.5-11.5 0" class="cls-1"/><path d="M177.6 53.6c-.6-1.4-3.9-3.7-7.1-3.7-3.1 0-5.6.8-4.4 3.7m18.8 13.6c-.9 4-.9 6.8-1.8 9.2m4-3.2c.2-1.9.4-3.8.7-5.4.3-1.5.6-2.9.9-3.9m-2.2 18.6c0-2.3.3-5.9.6-9.4" class="cls-1"/><path d="M149.1 47.9v-.8c0-3.7 0-6.4 1.5-9.8 1.6-3.7 3.9-6.1 6.6-7.7 3-1.7 9.5-3.3 12.9-3.1 4.5.3 10.4 1.1 14.6 2.8 7.1 2.9 9.5 7.5 11.1 15s1.1 13.6-2.6 20.3c-.8 1.3-1.5 4.7-6.1 8.6h0" class="cls-1"/><path d="m155.6 109.5 2.2.1 2.5.1 7.3.2h2.6v.1h1.6l2.4.1-.1 8.5-.1 4-.2 11.5-18.6-.1m-21.1-25.1 14.8.4 3.5.1 3.2.1-.4 24.5h-21.3" class="cls-4"/><path d="m133.9 134-20.6-.1.1-25.6 20.7.6z" class="cls-4"/></svg>')}`;
export default image;
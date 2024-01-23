/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="Layer_5" width="300" height="300" viewBox="0 0 300 300"><defs><style>.cls-1,.cls-2{stroke:#fff;stroke-width:1.5px;fill:none;stroke-miterlimit:10}.cls-2{stroke:#000;stroke-width:1px}.cls-10,.cls-4,.cls-5,.cls-6,.cls-7,.cls-9{stroke-width:0}.cls-4{fill:#626365}.cls-5{fill:#967246}.cls-6{fill:#e1c0a5}.cls-7{fill:#b3282e}.cls-9{fill:#ffd204}.cls-10{fill:#050504}</style></defs><path d="M179.1 38.7c1.5.2 26.4 13.3 24.7 31s-8.3 26.9-12.9 30.2c-3.2 0-6.6-.1-9.8-.2-1.5 0-2.9-.1-4.2-.2-1.6-.1-3.1-.3-4.2-.5 3.3-7.5 9.1-20.4 7.5-33.8 3.4.1 7.2.5 9.6 1.4-1.1-5.5-4-19.7-13.8-25.5-1.5.4-2.6 1-3.5 1.8 0 0-.3-1.1-.9-2.4 0 0 1.6-.5 3.3-.9 1.6-.4 3.4-.8 4.1-.7Z" class="cls-5"/><path d="M198 285.5c.7 1.1.5 3.7.5 3.7s-4.6 4.5-11.3 5.2c-6.8.8-11.3-5.1-11.3-5.1l-.4-4.5.8-1h.1c0 .4-.1.6-.1.6s1.2 7.6 11.7 7c8.8-.5 9.8-4.6 9.9-6h.1Z" class="cls-7"/><path d="M196.1 278.9c2.6 4.5 1.8 6.2 1.8 6.2v.4c0 1.4-1.1 5.5-9.9 6-10.6.6-11.7-7-11.7-7s0-.2.1-.6c0-.1 0-.3.1-.5.2-.3 3.1-4 7.3-6 2.2-1 4.8-1.6 7.6-.9 1.5.4 3.1 1.1 4.7 2.3Z" class="cls-7"/><path d="M197.3 103.4c1.8 2.5 5.6 8.8-1.5 37.9-1.3.9-3.9 2-7.1 2.5-1.1.2-2.2.2-3.3.2-3.5 0-7.2-1-10.4-3.7l-1.2-1.2c2-4.2 8.4-17.4 8.4-17.4l1.6-4.1c4.2-9.5 12.7-13.4 12.7-13.4v-.8z" class="cls-9"/><path d="M162.3 108.7v-.1l3.5-1.7h.2c-.6 1.7-1.1 3.9-1.3 6-.3 3.4 2.6 4.6 2.6 4.6 3.1 1 10-4.5 11.9-6 2-1.5 4.2-4.4 6.2-7.6 0-.2-.2-.4-.3-.7.5 0 8.2 0 11.4.2v.8s-8.5 3.9-12.7 13.4l-1.6 4.1s-6.3 13.2-8.4 17.4l1.2 1.2c-.1.6-1.6 5.1-2.3 8.4l-1.5 2.5v-.4c.1 0 .1-1 .1-1l.4-22.6-17.6-.5h-2v-.6c2.1-7.5 9.3-16.4 10-17.3Z" class="cls-9"/><path d="M191 271.7c2.5 2.9 4.1 5.3 5.1 7.2-1.6-1.2-3.2-2-4.7-2.3l-2.6-4s1.4-.5 1-3c0-.3-.1-.6-.3-.8-.2-.6-.5-1.1-1-1.5v-.7c2.1 1.6 1.8 3.4 2.4 5.2Z" class="cls-7"/><path d="m188.9 272.6 2.6 4c-2.8-.7-5.4-.1-7.6.9l-2-6.3c.2-3.1 3.7-3.8 4.4-3.7.6 0 2.4-.2 3.2 1.4.1.3.2.5.3.8.5 2.4-1 3-1 3Z" class="cls-7"/><path d="M188.1 192.5c.6 9.5 1.3 25.9 1.3 25.9s-1.5 1.4-3.7 2.9-5.2 3.1-8.1 3.4c-2 .2-4.1 0-6.1-.5-3.7-.9-6.6-2.4-6.6-2.4l-3.4-21.7c.7.4 1.2.6 1.6.8 2.1.7 7.4-4.8 9.8-6 0-3.5-1-5.7-2.1-9.6q0-.9.3-2.4l.7.2c3-.3 7-3.1 9.5-5 0 0 6.2 5 6.8 14.5Z" class="cls-4"/><path d="M188.6 267.2c.4.4.7.9 1 1.5-.8-1.5-2.6-1.3-3.2-1.4-.7 0-4.2.6-4.4 3.7l-.4-1.2c0-.5.1-3 3.4-3.6 1.7-.3 2.9 0 3.7.9Z" class="cls-7"/><path d="M181 267.2c-.2-6.5-5.1-18-5.6-21-.5-3.3.2-9.5 0-11.5s-3.6-7.3-4-10.6c1.9.5 4.1.8 6.1.5 2.9-.3 5.9-1.9 8.1-3.4-.2.4 0 7.2 0 10.4 1 3.7 2.2 6.1 3 10.8.7 4.5-.5 19.2 0 24v.7c-.8-.8-2-1.1-3.7-.8-3.3.5-3.4 3.1-3.4 3.5l-.5-1.5v-1.2Z" class="cls-6"/><path d="M176.1 41c9.8 5.8 12.8 20.1 13.8 25.5-2.4-.9-6.2-1.3-9.6-1.4-3.6-.2-6.7 0-6.7 0l-2.1-17-2.6 16.6c-9.8.5-17.6 2-24 3.8-1.1.3-2.1.7-3.1 1-4.9 1.7-8.8 3.6-11.7 5.3 3.2-29 33.4-38 38.8-38.7.6.5 1.2 1.2 1.7 2 .5.7.8 1.6 1.1 2.3.6 1.4.9 2.4.9 2.4.9-.8 2-1.4 3.5-1.8" class="cls-5"/><path d="M185.4 144c1.1 0 2.3 0 3.3-.2 0 0-7.8 13.7-8.6 18.7s3.2 13.7 3.2 13.7-.8.8-2.1 1.8c-2.4 1.9-6.5 4.7-9.5 5l-.7-.2c1.2-5.7 5.2-16.4 7.4-21.7 2.5-6.1 1.3-10.4 1.3-10.4.2-.3.5-.6.8-.9 1.3-1.4 4.9-5.8 4.9-5.8m-.3-40.9c.2.3.3.5.3.7-2 3.2-4.2 6.1-6.2 7.6-1.9 1.5-8.8 7.1-11.9 6 0 0-3-1.2-2.6-4.6.2-2.1.7-4.3 1.3-5.9.4-1 .9-1.8 1.4-2h.2v3.4c-.5.6-1.2 5.3.9 5.2 2.2-.1 7.1-5.4 7.1-5.4 3.2-2.6 5.6-7.9 5.6-7.9s1 0 2 .7c.8.5 1.6 1.4 2 2.1Z" class="cls-9"/><path d="m181 268.4.5 1.5.4 1.3 2 6.3c-4.2 2-7.1 5.7-7.3 6 .7-3.4 3-13.8 3-14.4s1.4-1.7 1.5-1.8v1.2Z" class="cls-7"/><path d="M177 99.4c-1.6-.1-3.1-.3-4.2-.5 3.3-7.5 9.1-20.4 7.5-33.8-3.6-.2-6.7 0-6.7 0l-2.1-17-2.6 16.6c-9.8.5-17.6 2-24 3.8 0 0-.2 1 0 2.9.9 2.6 1.3 8.1 1.3 8.1-.2 2-2.1 2.7-2.1 5.8.3 6.2 6.1 13.9 10.1 17.5 1.3 1.2 2.5 1.9 3.2 2 2.7.2 6.5-.7 10-1.8 0 0 0 .8.1 2v3.4c-.5.6-1.2 5.3.9 5.2 2.2-.1 7.1-5.4 7.1-5.4 3.2-2.6 5.6-7.9 5.6-7.9v-.6c-1.5 0-2.9-.1-4.2-.2Zm-27.1-20.5c-.4 0-.7-1-.7-2.3s.3-2.4.7-2.4.7 1.1.7 2.4-.3 2.3-.7 2.3m17 0c-.8 0-1.5-1.2-1.5-2.8s.7-2.8 1.5-2.8 1.5 1.3 1.5 2.8-.7 2.8-1.5 2.8" class="cls-6"/><path d="M166.9 73.3c.8 0 1.5 1.3 1.5 2.8s-.7 2.8-1.5 2.8-1.5-1.2-1.5-2.8.7-2.8 1.5-2.8" class="cls-10"/><path d="m161.5 200 3.4 21.7c-1.1.5-2.3 1-3.4 1.3-5.2 1.5-9.8.7-13.4-.6-1.8-.7-3.3-1.5-4.5-2.2l1.5-25.8 7.6-.4v.4s5.7 3.8 8.8 5.6" class="cls-4"/><path d="M155 264.2c-.1.6-.2 1.2-.2 1.7-.5.8-1.3 2.1-2 2.3-1.1.4-1.4 0-2.9-.5-.3-.1-.9.1-1.7.6s1.4-2.3 0-3.8c-.4-.5-.9-.8-1.5-1 1.5-10.3.5-35.1.5-36.9s.9-4.3.9-4.3c3.6 1.3 8.2 2.1 13.4.6s-1.2 5.1-1.3 5.8c-.1.6 2.5 6.7 2.3 10-.5 6.8-6.3 19.1-7.6 25.4ZM185.4 144c-3.5 0-7.2-1-10.4-3.7-.1.6-1.6 5.1-2.3 8.4l-1.5 2.5c-1.3 2.3-3 5.8-3.6 8.9-.4 2.1-1 6.2-1.7 10.6-1 6.5-2.1 13.4-2.9 15.4 0 0-4.1 1.8-4.8 3.1-.2.3-.5.6-.9.8-1.1.7-2.9 1-3.4.8-.7-.2-.1 2.6 1.7 2.9v.2c-.1 0-2.4.1-2.4.1h-.5v.4s5.6 3.8 8.8 5.6c.7.4 1.2.6 1.6.8 2.1.7 7.4-4.8 9.8-6 0-3.5-1-5.7-2.1-9.6q0-.9.3-2.4c1.2-5.7 5.2-16.4 7.4-21.7 2.5-6.1 1.3-10.4 1.3-10.4.2-.3.5-.6.8-.9 1.3-1.4 4.9-5.8 4.9-5.8Z" class="cls-6"/><path d="M154.8 265.9c0-.5.1-1.1.2-1.7.2 0 1.6.4 1.4 1.7-.2 1.4 1.3 7.5.8 8.8 0 .1-.1.3-.3.4-1.2 1.4-5.9 3.7-6.5 4.4s-4.9 4.9-7.4 6.5c.4-4.8-2.2-8.4-4.9-10.4 0 0 4.5-3.7 8-6 .7-.5 1.5-.9 2.1-1.3.8-.4 1.4-.7 1.7-.6 1.5.5 1.8.9 2.9.5.7-.3 1.5-1.5 2-2.3" class="cls-7"/><path d="M156.9 275.1c.4 1.5 0 2.7 0 2.7s-4.7 2.4-5.6 2.9-3.7 4.4-6.4 6.8c-2.8 2.4-8.2 3.3-12.1 3s-8.8-4.2-8.8-4.2v-2.7l.9-.8v.7c3.1 5.7 15.1 3.9 17.3 3 .3-.1.5-.3.9-.5 2.5-1.6 6.8-5.8 7.4-6.5s5.3-3.1 6.5-4.4Z" class="cls-7"/><path d="M154.2 102.7c-2.5.5-10.9.5-14-.5 3.6-8.6 1.6-32.8 1.6-32.8 1-.4 2-.7 3.1-1 0 0-.2 1 0 2.9.9 2.6 1.3 8.1 1.3 8.1-.2 2-2.1 2.7-2.1 5.8.3 6.2 6.1 13.9 10.1 17.5" class="cls-5"/><path d="M149.9 74.3c.4 0 .7 1.1.7 2.4s-.3 2.3-.7 2.3-.7-1-.7-2.3.3-2.4.7-2.4" class="cls-10"/><path d="M148.2 264.5c1.4 1.5 0 3.8 0 3.8-.6.3-1.3.8-2.1 1.3 2.4-3.5-.3-5.4-1.5-5.4-.9 0-2.6-.1-3.3.5.6-.8 1.8-1.7 2.4-1.7.5 0 1.7 0 2.9.6.5.2 1 .5 1.5 1Z" class="cls-7"/><path d="M144.7 264.2c1.1 0 3.9 2 1.5 5.4-3.5 2.3-8 6-8 6-1.5-1.1-3.1-1.7-4.2-1.8-.3 0-.7 0-1 .1l8.7-5.6s-.6-2-.4-3.2c0-.2.2-.3.3-.5.7-.6 2.4-.5 3.3-.5Z" class="cls-7"/><path d="M138.1 275.6c2.8 2 5.4 5.6 4.9 10.4-.3.2-.6.4-.9.5-2.2.9-14.2 2.7-17.3-3v-.7c.3-4.4 4.8-8.2 7.9-8.9.4 0 .7-.1 1-.1 1.1 0 2.7.7 4.2 1.8Z" class="cls-7"/><path d="M152.2 126.6 134 126l-19.5-.5-.1 24.1v22.2l19.2-.4 20-.5.3-21.2.3-23.1zm-51.1 2.4-.1 20.2v18.7l6.2 1.9 6.7 2 .1-22.2.1-23.9-6.8 1.7z" style="fill:#4d0099;stroke-width:0"/><path d="m154.2 126.6-.3 23.1-.3 21.2-20 .4-19.2.4v24.1l19-.9 11.8-.6 7.6-.4h.5l2.3-.1v-.2c-1.8-.4-2.3-3.2-1.6-2.9.6.2 2.3-.2 3.4-.8.4-.2.7-.5.9-.8.7-1.2 4.8-3.1 4.8-3.1.7-2 1.9-8.9 2.9-15.3.7-4.4 1.3-8.5 1.7-10.6.6-3.1 2.3-6.6 3.6-8.9v-.4c.1 0 .1-1 .1-1l.4-22.6-17.6-.5ZM101 167.9v-18.7l.1-20.2-4.8 1.2-.1 18.8-.1 17.5v19.2l4.8 2.9 6.2 3.6 6.7 4 .1-24.4-6.7-2z" style="stroke-width:0;fill:#3246ff"/><path d="m145.2 194.4-1.5 25.8c1.2.7 2.7 1.5 4.5 2.2 3.6 1.3 8.2 2.1 13.4.6 1.1-.3 2.2-.7 3.4-1.3m14.8-71s1.2 4.3-1.3 10.4c-2.2 5.2-6.2 16-7.4 21.7q-.3 1.5-.3 2.4c1.1 3.9 2.1 6.1 2.1 9.6-2.4 1.2-7.7 6.8-9.8 6-.4-.1-.9-.4-1.6-.8-3.1-1.7-8.8-5.6-8.8-5.6" class="cls-2"/><path d="m133.4 195-19.1.9.1-24.1m38.9 22.2-.6.1-7.5.3-11.8.6.2-23.6m20-.5-20 .5" class="cls-1"/><path d="m155.6 193.9-2.3.1.3-23.1m.3-21.2-.3 21.2 12.4-.2m5.4-20v-.9m-17.2-23.2 17.6.5-.4 22.7-17.5-.1M134 126l18.2.6h2l-.3 23.1h-20.1" class="cls-1"/><path d="m133.8 149.7-.2 21.7-19.2.4v-22.2" class="cls-1"/><path d="m133.8 149.7-19.4-.1.1-24.1 19.5.5zm-26.7 42.5 6.7 4 .1-24.4m-13 16.8 6.2 3.6.1-22.4m-6.2-1.9 6.2 1.9m-11.1-3.3v19.2l4.8 2.9.1-20.7M96.2 149l-.1 17.5 4.9 1.4v-18.7m.1-20.2-4.8 1.2-.1 18.8 4.8.2" class="cls-1"/><path d="m107.3 127.4-6.2 1.6-.1 20.2 6.2.2m0 0v20.4l6.7 2 .1-22.2m-6.8-.2 6.8.2.1-23.9-6.8 1.7z" class="cls-1"/><path d="M180.3 65.1c3.4.1 7.2.5 9.6 1.4-1.1-5.5-4-19.7-13.8-25.5-1.5.4-2.6 1-3.5 1.8 0 0-.3-1.1-.9-2.4-.3-.8-.7-1.6-1.1-2.3-.5-.8-1-1.5-1.7-2-5.4.7-35.7 9.7-38.8 38.7 3-1.7 6.8-3.6 11.7-5.3 1-.4 2-.7 3.1-1 6.3-1.9 14.2-3.4 24-3.8l2.6-16.6 2.1 17s3-.1 6.7 0Z" class="cls-2"/><path d="M170.6 38s2.5 1.1 4.4 1.4m-3.2.9s1.6-.5 3.3-.9c1.6-.4 3.4-.8 4.1-.7 1.5.2 26.4 13.3 24.7 31s-8.3 26.9-12.9 30.2c-3.2 0-6.6-.1-9.8-.2-1.5 0-2.9-.1-4.2-.2-1.6-.1-3.1-.3-4.2-.5 3.3-7.5 9.1-20.4 7.5-33.8m-38.5 4.3s2 24.2-1.6 32.8c3.1 1 11.5 1 14 .5" class="cls-2"/><path d="M177 99.4s-4.5 2-9.6 3.5c-3.5 1.1-7.3 1.9-10 1.8-.7 0-1.8-.8-3.2-2-4-3.6-9.7-11.3-10.1-17.5 0-3.2 2-3.8 2.1-5.8 0 0-.4-5.5-1.3-8.1-.2-1.9 0-2.9 0-2.9m22.3 42.5c.2-.7.3-1.6.4-2.5V105c0-1.1-.1-2-.1-2" class="cls-2"/><path d="M181.2 100.2s1 0 2 .7c.8.5 1.6 1.4 2 2.1.2.3.3.5.3.7-2 3.2-4.2 6.1-6.2 7.6-1.9 1.5-8.8 7.1-11.9 6 0 0-3-1.2-2.6-4.6.2-2.1.7-4.3 1.3-5.9.4-1 .9-1.8 1.4-2" class="cls-2"/><path d="M167.6 108.3c-.5.6-1.2 5.3.9 5.2 2.2-.1 7.1-5.4 7.1-5.4 3.2-2.6 5.6-7.9 5.6-7.9m3.9 2.9c.5 0 8.2 0 11.4.2h.8c1.8 2.5 5.6 8.8-1.5 37.9-1.3.9-3.9 2-7.1 2.5-1.1.2-2.2.2-3.3.2-3.5 0-7.2-1-10.4-3.7l-1.2-1.2c2-4.2 8.4-17.4 8.4-17.4" class="cls-2"/><path d="M196.5 104.2s-8.4 3.9-12.7 13.4m-21.5-8.9c-.6 1-5.7 9.4-7.8 17.3m11.3-19.1-3.5 1.7" class="cls-2"/><path d="M162.3 108.6v.1c-.8.9-7.9 9.8-10 17.3m36.5 17.8s-7.8 13.7-8.6 18.7 3.2 13.7 3.2 13.7-.8.8-2.1 1.8c-2.4 1.9-6.5 4.7-9.5 5m13.6-39s-3.5 4.4-4.9 5.8c-.3.3-.5.6-.8.9-.8 1.1-1.3 2.2-1.3 2.6m-17 39.6-2 1.5m3.7-8.4s-4.1 1.8-4.8 3.1c-.2.3-.5.6-.9.8-1.1.7-2.9 1-3.4.8-.7-.2-.1 2.6 1.7 2.9s5.3-.7 5.7-.8m13.6-52.5c-.1.6-1.6 5.1-2.3 8.4-.2.8-.3 1.5-.4 2.1" class="cls-2"/><path d="m172.8 148.7-1.5 2.5c-1.3 2.3-3 5.8-3.6 8.9-.4 2.1-1 6.2-1.7 10.6-1 6.5-2.1 13.4-2.9 15.4m22.6 35.2c-2.2 1.5-5.2 3-8.1 3.4-2 .2-4.1 0-6.1-.5-3.7-.9-6.6-2.4-6.6-2.4l-3.4-21.7m19.8-22.2s6.2 5 6.8 14.5 1.3 25.9 1.3 25.9-1.5 1.4-3.7 2.9m-30.9 44.7c0-.5.1-1.1.2-1.7 1.2-6.3 7.1-18.6 7.6-25.4.2-3.3-2.4-9.4-2.3-10s1.3-5.8 1.3-5.8m-13.4-.6s-.9 2.5-.9 4.3.9 26.6-.5 36.8" class="cls-2"/><path d="M155 264.2c.2 0 1.6.4 1.4 1.7-.2 1.4 1.3 7.5.8 8.8 0 .1-.1.3-.3.4-1.2 1.4-5.9 3.7-6.5 4.4s-4.9 4.9-7.4 6.5c-.3.2-.6.4-.9.5-2.2.9-14.2 2.7-17.3-3v-.7c.3-4.4 4.8-8.2 7.9-8.9.4 0 .7-.1 1-.1 1.1 0 2.7.7 4.2 1.8 2.8 2 5.4 5.6 4.9 10.4" class="cls-2"/><path d="M138.1 275.6s4.5-3.7 8-6c.7-.5 1.5-.9 2.1-1.3.8-.4 1.4-.7 1.7-.6 1.5.5 1.8.9 2.9.5.7-.3 1.5-1.5 2-2.3.3-.4.4-.8.4-.8" class="cls-2"/><path d="M141.4 264.7c.7-.6 2.4-.5 3.3-.5 1.1 0 3.9 2 1.5 5.4" class="cls-2"/><path d="m132.8 273.9 8.7-5.6s-.6-2-.4-3.2c0-.2.1-.3.3-.5" class="cls-2"/><path d="M148.2 268.3s1.4-2.3 0-3.8c-.4-.5-.9-.8-1.5-1-1.1-.5-2.3-.5-2.9-.6-.6 0-1.9.8-2.4 1.7-.1.2-.2.3-.3.5m-16.2 17.7-.9.8v2.7s4.9 3.9 8.8 4.2 9.4-.5 12.1-3c2.8-2.4 5.6-6.3 6.4-6.8s5.6-2.9 5.6-2.9.4-1.3 0-2.7m14.6-51c.4 3.3 3.8 8.6 4 10.6s-.5 8.2 0 11.5c.5 3 5.4 14.5 5.6 21v1.8m4.6-47.7c-.2.5 0 7.3 0 10.4 1 3.7 2.2 6.1 3 10.8.7 4.5-.5 19.2 0 24v.7m-5.3-38c0 .3 2.1 3 1.3 7.5m-8.4-4.6s0 2.9 1.7 4.5" class="cls-2"/><path d="M196.1 278.9c-1-1.9-2.7-4.2-5.1-7.2-.6-1.8-.3-3.6-2.4-5.2m-12.1 16.9c0 .2 0 .4-.1.5 0 .4-.1.6-.1.6s1.2 7.6 11.7 7c8.8-.5 9.8-4.6 9.9-6v-.4s.8-1.7-1.8-6.2" class="cls-2"/><path d="M181 267.2c-.2.1-1.6 1.2-1.5 1.9 0 .6-2.2 11-3 14.4" class="cls-2"/><path d="M176.5 283.4c.2-.3 3.1-4 7.3-6 2.2-1 4.8-1.6 7.6-.9 1.5.4 3.1 1.1 4.7 2.3" class="cls-2"/><path d="m181.5 269.9.4 1.2 2 6.3m-2.9-9 .5 1.5" class="cls-2"/><path d="M189.5 268.8c-.8-1.5-2.6-1.3-3.2-1.4-.7 0-4.2.6-4.4 3.7m9.6 5.4-2.6-4s1.4-.5 1-3c0-.3-.1-.6-.3-.8" class="cls-2"/><path d="M181.5 269.9c0-.5.1-3 3.4-3.6 1.7-.3 2.9 0 3.7.9.4.4.7.9 1 1.5.1.3.2.5.3.8m-13.6 14.4-.8 1 .4 4.5s4.5 5.8 11.3 5.1c6.8-.8 11.3-5.2 11.3-5.2s.3-2.6-.5-3.7M153.6 80.9c0 1.8-.4 3.4-2.5 2.6 0 1.6.3 3.2 1.7 3.7m-5.1-16.4s.9-1.5 2-1.5c1 0 2 1.5 2 1.5m13.2-2.3s.2-2.4 2.9-2 2.6 3.6 2.6 3.6M161.1 91s-1.9 2.8-5.2 2.7-4.3-2-4.3-2m16.8-15.6c0 1.6-.7 2.8-1.5 2.8s-1.5-1.2-1.5-2.8.7-2.8 1.5-2.8 1.5 1.3 1.5 2.8Zm-17.8.5c0 1.3-.3 2.3-.7 2.3s-.7-1-.7-2.3.3-2.4.7-2.4.7 1.1.7 2.4Z" class="cls-2"/></svg>')}`;
export default image;
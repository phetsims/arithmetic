/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="Layer_5" width="300" height="300" viewBox="0 0 300 300"><defs><style>.cls-1,.cls-2{stroke:#fff;fill:none;stroke-miterlimit:10;stroke-width:1px}.cls-2{stroke:#000}.cls-11,.cls-6,.cls-8{stroke-width:0}.cls-6{fill:#e1c0a5}.cls-8{fill:#3246ff}.cls-11{fill:#050504}</style></defs><path d="m193.5 101.4 7.4 15.1-15.1 7.4-7.4-15.1z" style="fill:#4d0099;stroke-width:0"/><path d="M196.8 130.2c2.5-1.6 1.7-2 1.7-2s-4.5-1.1-7.8 1.4-.8.4-.8.4-6.3 1.4-7 2.1c-.3.3-.4.8-.6 1.3 0 0-.7.3-1.5.8-2.4-.2-4.3 0-5.9.5-3.9 1.2-5.6 3.9-6.4 6.2s-.9.5-2.3.9l.9 2.9s-.1 1.8 1 2.3 5.6 3.1 7.8 2.5c2-.6 5.2-3.7 5.7-4.2.2 0 .3.1.5.1h.4c0 .6-.1.9-.1.9 0 .5 0 2 2.4 1.9 2.3 0 1.8-2.4 1.8-2.4s0-.4-.1-.9h.1c.7 0 2.3-1.5 2.3-1.5.7.4 1.6.9 2.2 1 .8.1 1.5-.2 2-1.4.2-.5.4-.9.4-1.4h.2c.4.9 3.4.3 3.3-.5s.8-2.7.8-2.7c.2-.5 1-1.8-1.2-2.1-1.1-.1-1.8.3-2.3.8h-.1c-1.5-.3-2.3-1-2.3-1l.6-2.4s2-2.1 4.5-3.8ZM159 231.3c-.4-1.5-.7-3.6-.7-3.6 3.7.9 8.3 1 12.9-1.9 0 0 .8 3 .7 4.3s-.7 4.3-.7 4.3-.6 27.2-.7 31.3c-4-.4-2.8 5.6-2.8 5.6-.7-.4-1.3-.6-1.5-.7-1.3-.4-2.1 1.4-3.1 1.3-.5 0-1.1-.6-1.5-1.1 0-1.1 0-2.2-.1-3.3-.7-10.7-3.8-19.7-4.1-27-.1-3.5 1.8-9.2 1.8-9.2Z" class="cls-6"/><path d="M148.5 204.2c-1.3 6.3-3 14.6-4.1 20.4-1.9.8-3.7 1.2-5.4 1.5-6.5 1-11.4-.9-15-3.5-2.4-1.7-4.2-3.6-5.4-5 4.4-7.6 8.2-26.1 9.2-31.2 1-5.2 2.8-10.3 2.8-10.3 6.9 4.2 16.7 6.8 21.4 6.5 4.8-.3 12.6-5.2 15.8-7.1-.1 3.2 7 28.4 9.3 44.7-1.9 2.6-4 4.4-6 5.7-4.6 2.9-9.2 2.8-12.9 1.9-2.8-.7-5.1-1.8-6.5-2.5.1-6.6-3.2-20.6-3.2-21Z" style="stroke-width:0;fill:#626365"/><path d="M149.5 101.5c0 1.4.2 3.2.5 4.9.1 1 .3 1.9.5 2.8-.4 2.1-1.8 6.6-4.9 7.6-3.4 1.2-7.7-5-9.1-7.2 0-.8-.1-1.5-.2-2.2-.1-1.4-.4-2.7-.6-3.8-.5-2.5-1.1-4-1.1-4-3.6-1-7.2-4-7.4-4.2 3.1-2.2 6.8-4 8.3-4.5-15.3-7.1-18.1-21.7-18.1-21.7l-.3-.2c1.5-2.2 5.7-6.8 6.7-7.7-.6-2.5-.6-12.8-.6-12.8s2.6 6.7 4 11.7c10.3-4 20.6-4.5 28.9-3.7.1.5 1.6 7.1 4 8.6 2.5 1.6 3.7 4.2 3.8 5.7.1 1.4 5 19.9-13.6 28-.7.2-.9 1.3-.9 2.8Zm2.2-34.9c.6-.2.6-1.3.2-2.5s-1.2-1.9-1.8-1.7-.6 1.3-.2 2.5 1.2 1.9 1.8 1.7M133 68.3c.6-.2.7-1.5.3-2.8-.5-1.3-1.4-2.2-2-2s-.7 1.5-.2 2.8 1.4 2.2 2 2Z" class="cls-6"/><path d="M163.1 21.9 151.5 34l-12.2-11.7L151 10.2z" class="cls-8"/><path d="M151.9 64.2c.4 1.2.3 2.3-.2 2.5-.6.2-1.3-.6-1.8-1.7s-.3-2.3.2-2.5c.6-.2 1.3.6 1.8 1.7" class="cls-11"/><path d="M135.7 231s2 7 0 12.2c-3.3 8.6-7.4 16.8-9.2 26.4-.2.9-.3 1.9-.4 2.8h.2c-.5 1.2-1.4 2.5-1.9 1.6-.8-1.3-1.8-.5-2-.3h-.1v-.4s3.5-5.8-3.3-5.8c0 0-1.4-.1-2.7.4 1.4-4.3 2.3-20.6 2.9-25.6.6-5.1 4.2-12.1 4.2-12.1l.6-7.6c3.6 2.5 8.5 4.5 15 3.5 0 0-1.3 2.5-3.3 4.9" class="cls-6"/><path d="M133.3 65.5c.5 1.3.4 2.6-.3 2.8s-1.5-.7-2-2-.4-2.6.2-2.8 1.5.6 2 2Z" class="cls-11"/><path d="M161.4 57.1c7.7 1.2 12.7 3.1 12.7 3.1-21.6-34.1-52.8-19.3-53.3-18.1-.2.6 0 1.5.1 2.3l-2.1 3.1s-1.6 0-2.3.5c-.2.1-.9 1.2-1.8 2.9-2.8 5.2-7.8 16.6-5.8 27.7 2.7 14.7 13.6 25.5 13.6 25.5s4.6.3 11.4-.2h.4c.5 0 .9 0 1.5-.1-.5-2.5-1.1-4-1.1-4-3.6-1-7.2-4-7.4-4.2 3.1-2.2 6.8-4 8.3-4.5-15.3-7.1-18.1-21.7-18.1-21.7l-.3-.2c1.5-2.2 5.7-6.8 6.7-7.7-.6-2.5-.6-12.8-.6-12.8s2.6 6.7 4 11.7c10.3-4 20.6-4.5 28.9-3.7.1.5 1.6 7.1 4 8.6 2.5 1.6 3.7 4.2 3.8 5.7.1 1.4 5 19.9-13.6 28-.7.2-.9 1.3-.9 2.8 10.8-2.5 22.3-7.5 29.3-17.1 0 0-13.1-5-17.4-27.3Z" style="stroke-width:0;fill:#967246"/><path d="M174.7 134c-1.8-3.9-8.9-22.7-8.9-22.7-.4-.1-.9-.3-1.5-.3-3.6-.5-10.9-.4-10.9-.4-1.2-2.2-2.9-4.1-3.4-4 .1 1 .3 1.9.5 2.8-.4 2.1-1.8 6.6-4.9 7.6-3.4 1.2-7.7-5-9.1-7.2 0-.8-.1-1.5-.2-2.2-.3 0-2.8-.3-3.5 2.8 0 0-7.5-1.5-11-1.3-.8 0-1.4.2-1.6.4-1.1 1.4-8 18.2-11.8 20.8.8 1.4 2.5 4.4 5.1 6.9 2.3 2.1 5.4 3.8 9.1 3.5.9 0 1.8-.3 2.8-.6 0 0 .2-1.2.6-2.9 2.1 2.9 5.2 21.8 5.4 26.2.1 4.4-1.1 6.1-2.7 11.8l1.8 1.2c6.9 4.2 16.7 6.8 21.4 6.5 4.8-.3 12.6-5.2 15.8-7.1.3-.2.5-.3.7-.4 0-.3-1.8-8.6-3.3-23.4 0-3.3 0-6.6-.2-9.5.4 0 .8-.2 1.1-.3 1.5-.4 2.3-1 2.3-1 .8-2.2 2.5-5 6.4-6.1l-.2-.8Z" style="stroke-width:0;fill:#ffd204"/><path d="M191.4 283.3s.5-6.9-4.3-8-13.6-5.7-13.6-5.7v-.5c.3-1.2.2-2.1-.3-2.4h-.2q-1.65-.9-2.7-.9c-4-.4-2.8 5.6-2.8 5.6-.7-.4-1.3-.6-1.5-.7-1.3-.4-2.1 1.4-3.1 1.3-.5 0-1.1-.6-1.5-1.1 0-1.1 0-2.2-.1-3.3 0 0-2.8-.4-2.5 2.2.3 2.3.5 7.4.5 8.8s-1.5.5 0 2.8 8.6 2.3 9.3 2.4 3.7 2.1 6 2.9c2.3.9 7.4 1.9 11.9 2s5.7-2.8 5.7-2.8v-2.1zm-64.8-13.7c-.2.9-.3 1.9-.4 2.8h.2c-.5 1.2-1.4 2.5-1.9 1.6-.8-1.3-1.8-.5-2-.3h-.1v-.4s3.5-5.8-3.3-5.8c0 0-1.4-.1-2.7.4-1.4.5-2.7 1.8-2.1 4.6-.7.4-1.4 1.9-2.1 3.2-2.7 2.3-4.6 4.8-5.9 6.7v.1c-.7 1.1-1.1 2-1.4 2.6l-.9.9v4s1.6 4.9 7.2 5.5 10.9-1.8 12.6-5.9 2.6-7.8 2.6-7.8l1.3-3.1s.5-1.6-.3-2.5c1.3-7.1-.8-6.6-.8-6.6" style="stroke-width:0;fill:#b3282e"/><path d="M123.3 164.3c0-.9-.3-2-.9-2.3-.7-.4-1.8.8-2.5 1.7h-.4l-.7-.2c0-.2.2-.3.2-.3.4-.6.9-2-.4-2.8s-4 1.8-4 1.8c.4-.9.4-1.8-.2-2.4-1-1-3.7.9-5.1 2l-1.3-.2 2.9-15.9c-1.3 1.3-2.6 3.7-2.9 8.1-.8 0-2.3.1-3.3.3-1.4.3-6.9 5.3-5.3 6.2s6.2-1.5 6.2-1.5l1.4 3.6s-1 2.8-.7 3.6c.3.7 1.2.9 2.6 1.1.8 0 1.4-.3 2-.8-.1.2.9 1.2 2.4 1.8s2.2-.5 2.5-.6c0 0 .2-.2.4-.5 0 0 1.1.9 3.1 1.1s3.2-1.3 3.7-2.1c.2-.3.3-.9.3-1.6Zm-2.4-17.5 1.8-6.3c-3.8.3-6.8-1.4-9.1-3.5l-1.9 8v.1l9.3 1.7Z" class="cls-6"/><path d="m120.9 146.8-9.3-1.7h-.6c0-.1-.1.6-.1.6l-2.9 15.9 1.3.2c1.4-1.1 4.1-3 5.1-2 .6.6.6 1.5.2 2.4 0 0 2.6-2.6 4-1.8 1.3.8.8 2.2.4 2.8 0 0-.1.2-.2.3h.7c0 .1.4.2.4.2.7-.9 1.8-2.2 2.5-1.7.6.4.9 1.4.9 2.3l1.3.2 3-16.5z" class="cls-8"/><path d="M139.3 22.3 151.5 34l11.6-12.1L151 10.2z" class="cls-1"/><path d="m113.6 137-1.9 8m-.7.7c-1.3 1.3-2.6 3.7-2.9 8.1m6-9.7s-1.1 0-2.4.9" class="cls-2"/><path d="M123.2 164.3h.1l1.3.3 3.1-16.6-6.8-1.2-9.2-1.7-.6-.1-.1.7-2.9 15.8 1.2.3h.2" class="cls-1"/><path d="M121.4 45.7s-.2-.6-.4-1.3-.4-1.6-.1-2.3c.4-1.2 31.7-16 53.3 18.1 0 0-5-1.9-12.7-3.1-1.6-.2-3.4-.5-5.2-.6-8.3-.7-18.6-.3-28.9 3.7-1.5-4.9-4-11.7-4-11.7s0 10.2.6 12.8c-1 .9-5.2 5.5-6.7 7.7-.2.3-.4.6-.5.8-.4-5.3.8-15.8 2.5-19" class="cls-2"/><path d="M149.2 101.6h.3c10.8-2.5 22.3-7.5 29.3-17.1 0 0-13.1-5-17.4-27.3m-27.1 46.6c.5 0 .9 0 1.5-.1h.3m-15.2-59.3-2.1 3.1s-1.6 0-2.3.5c-.2.1-.9 1.2-1.8 2.9-2.8 5.2-7.8 16.6-5.8 27.7 2.7 14.7 13.6 25.5 13.6 25.5s4.6.3 11.4-.2" class="cls-2"/><path d="M117.4 69.3s2.8 14.6 18.1 21.7c-1.5.5-5.2 2.3-8.3 4.5-3.6 2.5-6.4 5.4-4.6 7.2 2 1.4 9.5 1.2 11.3 1.1h.4m21.9-47.3c.1.5 1.6 7.1 4 8.6 2.5 1.6 3.7 4.2 3.8 5.7.1 1.4 5 19.9-13.6 28-.7.2-.9 1.3-.9 2.8 0 1.4.2 3.2.5 4.9.1 1 .3 1.9.5 2.8" class="cls-2"/><path d="M127.2 95.5c.2.2 3.8 3.2 7.4 4.2 0 0 .6 1.5 1.1 4 .2 1.1.4 2.3.6 3.8 0 .7.1 1.5.2 2.2M148 92.2s-2.2 2.5-4.8.6" class="cls-2"/><path d="M136.3 107.5c-.3 0-2.8-.3-3.5 2.8.8 2.8 7.3 13.4 13.6 13.4s7.2-11.3 6.9-13.1c-1.2-2.2-2.9-4.1-3.4-4" class="cls-2"/><path d="M136 108.9s.2.3.5.8c1.4 2.3 5.7 8.4 9.1 7.2 3.1-1.1 4.5-5.5 4.9-7.6.2-.7.2-1.2.2-1.2m-17.8 2.1s-7.5-1.5-11-1.3c-.8 0-1.4.2-1.6.4-1.1 1.4-8 18.2-11.8 20.8.8 1.4 2.5 4.4 5.1 6.9 2.3 2.1 5.4 3.8 9.1 3.5.9 0 1.8-.3 2.8-.6 0 0 .2-1.2.6-2.9.9-4.6 2.5-13.1 2.8-14.1m24.5-12.4s7.3-.1 10.9.4c.6 0 1.2.2 1.5.3 0 0 7.1 18.8 8.9 22.7m-6.8 10.3s0-1.4.6-3.2c.8-2.2 2.5-5 6.4-6.2 1.6-.5 3.5-.7 5.9-.5m-12.3 6.6s-.9.5-2.3 1c-.3.1-.7.2-1.1.3h-.3" class="cls-2"/><path d="m166.1 141.9.9 2.9s-.1 1.8 1 2.3 5.6 3.1 7.8 2.5c2-.6 5.2-3.7 5.7-4.2m.4-9.9s.2-1.1.4-2c.2-.6.4-1.1.6-1.3.7-.7 7-2.1 7-2.1s-2.5 2.1.8-.4 7.8-1.4 7.8-1.4.8.4-1.7 2-4.5 3.8-4.5 3.8l-.6 2.4s.9.7 2.3.8" class="cls-2"/><path d="M182.3 133.4s-.7.3-1.5.8c-.9.6-1.8 1.6-2.1 2.9-.6 2.5-1.1 6.9 2.7 8.2.2 0 .3.1.5.1m11.3-6.2s.2-1.1 1-1.9c.5-.5 1.2-.9 2.3-.8 2.1.2 1.4 1.6 1.2 2.1 0 0-1 2-.8 2.7.1.8-2.9 1.5-3.3.6" class="cls-2"/><path d="M189.5 141.1c0-.1.9-2.8 2.5-2.4 1.2.3 1.7 1.5 1.3 3.2 0 .4-.2.9-.4 1.4-.6 1.2-1.3 1.6-2 1.4-.6-.1-1.5-.6-2.2-1-.2-.1-.4-.2-.5-.3m.2-3.3s.7-.4 1.2-.2" class="cls-2"/><path d="M188.7 143.6s-1.5 1.4-2.3 1.5m-.1 0c0 .5.1.9.1.9s.5 2.4-1.8 2.4-2.5-1.5-2.4-1.9c0 0 0-.4.1-.9.2-1.3.8-3.5 2.1-3.1 1.2.4 1.7 1.7 1.9 2.6Zm-63.6-4.6-1.8 6.3m-1.5 17.7s.2-.3.6-.8c.7-.9 1.8-2.2 2.5-1.7.6.4.9 1.4.9 2.3 0 .6 0 1.3-.3 1.6-.5.8-1.7 2.2-3.7 2.1-2-.2-3.1-1.1-3.1-1.1m-1.7-4.8s2.6-2.6 4-1.8c1.3.8.8 2.2.4 2.8 0 0-.1.2-.2.3-.6.8-1.9 2.5-2.5 3.4-.2.3-.4.4-.4.5-.3.1-1 1.2-2.5.6s-2.5-1.6-2.4-1.8" class="cls-2"/><path d="M108.5 162.5s.3-.3.9-.7c1.4-1.1 4.1-3 5.1-2 .6.6.6 1.5.2 2.4 0 .2-.2.4-.3.5-.5.9-1.2 1.7-1.9 2.3q-.9.75-1.5 1.2c-.6.5-1.1.9-2 .8-1.4-.1-2.3-.3-2.6-1.1-.3-.7.7-3.6.7-3.6l-1.4-3.6s-4.6 2.4-6.2 1.5 3.9-5.9 5.3-6.2c1-.2 2.6-.3 3.3-.3h.4m54.5-31.2s1.5 8.1 2 19.6c.1 3 .2 6.2.2 9.5 1.5 14.8 3.2 23.1 3.3 23.4-.2.1-.4.3-.7.4-3.2 1.9-11 6.8-15.8 7.1-4.7.3-14.5-2.3-21.4-6.5l-1.8-1.2c1.6-5.7 2.8-7.4 2.7-11.8-.2-4.4-3.3-23.2-5.4-26.2m4.4 39.3s-1.8 5.1-2.8 10.3c-1 5.1-4.8 23.6-9.2 31.2 1.2 1.4 3 3.3 5.4 5 3.6 2.5 8.5 4.5 15 3.5q2.55-.45 5.4-1.5c1.1-5.8 2.8-14.1 4.1-20.4.9-4.8 1.6-8.4 1.5-8.8-.1-1.8-2-5.7-2.7-6.5m2.8 6s3.4 0 5.1-1c1.6-1.1 3.4-4.2 3.4-4.2" class="cls-2"/><path d="M148.5 204.1c0 .4 3.4 14.4 3.2 21 1.4.7 3.7 1.9 6.5 2.5 3.7.9 8.3 1 12.9-1.9 2-1.3 4-3.1 6-5.7-2.2-16.3-9.4-41.5-9.3-44.7M124 222.6l-.6 7.6s-3.6 7.1-4.2 12.1-1.5 21.3-2.9 25.6v.3m22.7-42.1s-1.3 2.5-3.3 4.9c-.3.3-.5.6-.8.9m.8-.9s2 7 0 12.2c-3.3 8.6-7.4 16.8-9.2 26.4-.2.9-.3 1.9-.4 2.8m45-46.6s.8 3 .7 4.3-.7 4.3-.7 4.3-.6 27.2-.7 31.3v.5m-12.2-38.5s.4 2.1.7 3.6.3 1.4.5 1.5" class="cls-2"/><path d="M159 231.3s-1.9 5.8-1.8 9.2c.3 7.3 3.5 16.2 4.1 27 0 1.1.1 2.2.1 3.3v.4m-55.1 11.2c1.3-2 3.2-4.4 5.9-6.7.7-1.3 1.4-2.8 2.1-3.2m12.3-2.9s2-.5.8 6.6c0 .4-.1.8-.2 1.3-1.4 3.2-2.8 6.9-4.7 9.9-2.5 3.9-6 6.5-11.3 5.2-4.4-1.1-6.5-5.4-6.4-6.7 0-.2 0-.4.2-.7.2-.6.7-1.6 1.4-2.6" class="cls-2"/><path d="M122.4 287.4s-.7-4.1-4-6.4c-.9-.7-2-1.2-3.4-1.5-1.3-.3-2.5-.3-3.5-.1-3.2.4-4.8 2.5-5.2 3v.1m16.1-8.8c.2-.1 1.2-1 2 .3.5.9 1.4-.4 1.9-1.5.3-.6.5-1.1.5-1.2" class="cls-2"/><path d="m118.4 281 3.1-5.1s.5-1 .8-2.2v-.3c.3-1.8.1-3.8-2.4-4.2-4.1-.5-5.8 2-5.4 4.2 0 .2.1.4.2.6-1 1.8-3.2 5.3-3.2 5.3" class="cls-2"/><path d="M122.3 273.3s3.5-5.8-3.3-5.8c0 0-1.4-.1-2.7.4-1.4.5-2.7 1.8-2.1 4.6 0 .3.1.6.2.9s0 .2.1.4m-9.7 11.4-.9.9v4s1.6 4.9 7.2 5.5 10.9-1.8 12.6-5.9 2.6-7.8 2.6-7.8l1.3-3.1s.5-1.6-.3-2.5m52.7.9c-1.9 1.9-2.7 5-2.2 8.5" class="cls-2"/><path d="M161.3 267.4s-2.8-.4-2.5 2.2c.3 2.3.5 7.4.5 8.8v.3c1.1.8 2.7 2.8 8.9 2.5 2.5.8 5.4 3.1 9.6 4.4 2.8.9 6.1 1.3 10.3.6 2.8-1.1 3.3-2.9 3.3-2.9s.5-6.9-4.3-8c-.8-.2-1.8-.2-2.9 0-.7.1-1.5.3-2.3.7q-1.05.45-1.8 1.2" class="cls-2"/><path d="M160.5 269.1c0 .4.4 1.1.9 1.7.4.6 1 1.1 1.5 1.1 1.1.1 1.8-1.7 3.1-1.3.2 0 .8.3 1.5.7.4.2.8.4 1.3.7 3.6 2 9.5 5.3 11.1 5.2m-6.6-10.5c.6.3.6 1.2.3 2.4v.5c-.2 1.5.5 1.5.5 1.5l10.1 4.2" class="cls-2"/><path d="M168.9 272s-.3-4.1 2.2-5.1c.9-.3 1.6-.4 2-.3" class="cls-2"/><path d="M167.6 271.3s-1.1-6 2.8-5.6c.7 0 1.6.4 2.7.9h.2m.2 3 13.6 5.7m4.3 8 .8.5v2.1s-1.2 2.9-5.7 2.8-9.6-1.2-11.9-2c-2.3-.9-5.3-2.8-6-2.9s-7.8-.1-9.3-2.4 0-2.8 0-2.8m-37.4-168.3s5.6 1.3 6.7 8.6m34.2 2s1.2-1.7 1.3-8.3m-44.3 51h-.3s-.1 0-.2.1h-.5" class="cls-2"/><path d="m200.9 116.5-15.1 7.4-7.4-15.1 15.1-7.4z" class="cls-1"/><path d="M128.6 63.5s0-1.9 1.1-2.5c1.2-.6 2.6 0 2.6 0m16.1-1.8s.7-.8 1.6-.7c.9 0 1.8.7 1.8.7m-18.5 6.3c.5 1.3.4 2.6-.3 2.8s-1.5-.7-2-2-.4-2.6.2-2.8 1.5.6 2 2Zm18.6-1.3c.4 1.2.3 2.3-.2 2.5-.6.2-1.3-.6-1.8-1.7s-.3-2.3.2-2.5c.6-.2 1.3.6 1.8 1.7Zm-8.1 3.1c.6 1.3 1.2 1.5 2.1.4.9 1.7 1.3 3.4.4 4.4m-10 5.6s1 1.6 5.6 1.3l7.2-.6s2.3-.3 2.8-1.8" class="cls-2"/><path d="m135.6 145 18.1-18.7 1.7 24.1-9.3-2.8 4.4-12.2-6.8 12m3 2.2 3.5 1.2-2.1 5.5" style="stroke-width:0;fill:#fff"/></svg>')}`;
export default image;
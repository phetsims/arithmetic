/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="Layer_5" width="300" height="300" viewBox="0 0 300 300"><defs><style>.cls-1{stroke-linecap:round;stroke-linejoin:round}.cls-1,.cls-2{stroke:#000}.cls-1,.cls-2,.cls-3{fill:none}.cls-2,.cls-3{stroke-miterlimit:10}.cls-3{stroke:#fff}.cls-10,.cls-11,.cls-4,.cls-6,.cls-7,.cls-9{stroke-width:0}.cls-6{fill:#49506b}.cls-7{fill:#402a1f}.cls-9{fill:#1f2076}.cls-10{fill:#b27f62}.cls-11{fill:#fff}</style></defs><path d="M195.4 285.2v4.1s-2.9 3.3-9.3 4.2c-6.3 1-9.6-2-9.6-2l-.3-3.1.7-.8v.5c.3.8 2.4 3.8 8.4 2.9 5.4-.8 9.8-3.3 10-5.9Z" class="cls-6"/><path d="M195.4 284.5v.7c-.2 2.6-4.6 5-10 5.9-5.9.9-8.1-2.2-8.4-2.9v-.5c0-.9.1-2.4.6-3.8s2.4-3.4 5.7-4.8c1.1-.5 2.2-.8 3.4-.7 1.4.1 2.6.5 3.7 1 2.6 1.2 4.1 3.2 4.3 3.5.2.6.4 1.1.5 1.6Z" class="cls-6"/><path d="M183.2 79.1v-.2h1.8l.7-3h-10.6v-.3h10.6V74s2.7.4 2.9 1.3c.2 1 .9 6.4.4 7.2s-2.1 2.9-2.1 2.9h-2.1c2.4 8.1 8.3 22.5 9.1 26.5.8 4.4-.3 11.2-.7 11.6s-8.7 3.6-11.2 3.1c-.6-5.5-3.6-9.2-4.7-10.3 1.3-.3 6-1.3 7.3-.5-1.3-1.3-2.4-4.1-2.6-5.7-.3-1.9-1.1-16.6-3.6-26.1 0 0-.8-4.2 1.2-4.5 1.2-.2 2.5-.4 3.7-.4Z" class="cls-10"/><path d="M191.5 274c.3 3.5 2.3 6.5 3.3 8.9-.3-.3-1.8-2.3-4.3-3.5-.3-.1-1.5-3.2-1.7-4.8.3-.3.5-.7.6-1.1 1.6-1.9 1.2-4.3-.4-5.5 0-.9-.1-1.6-.1-2.4 2 2.3 2.2 4.1 2.6 8.4" class="cls-6"/><path d="M132.4 247.3c-4.7-.1-9.5.6-14.4-.5-1.3-.3-2.6-.8-3.9-1.4-3.1-1-.4-20.2-1.2-20.7 4.6-14.6 14.5-38.4 14.5-38.4 9.3 5.3 20.9 6.5 25.5 6.6s21.9-6.4 21.9-6.4 9.7 22.7 13.2 31.5c6.2 15.9 5.2 25.8 5.3 26.1-1.3 1.8-2 3.2-2.8 4.2-1.8 2.3-3.8 2.2-14.3-.8-1.1-.3-2.2-.6-3.5-1l-3.6-12.4-16.4-30.7s-3.4-3-3.4-3.4c.3 2.3-9.2 22.4-11.3 29.3-1.9 7.2-1.3 12.2-1.3 18.4-1.4-.3-2.8-.4-4.3-.4" style="stroke-width:0;fill:#434246"/><path d="M190.5 248.3c.4 5-1.7 9.5-1.6 17.2 0 .8 0 1.6.1 2.4-.9-.6-2.1-1-3.5-.7-2.3.4-3.2 1.7-3.2 3.2-.2-1.7-.4-3.3-.8-4.8-1.5-7.2-4.1-13.4-5.4-18 10.4 2.9 12.5 3.1 14.3.8Z" class="cls-10"/><path d="M188.8 274.6c.2 1.6 1.5 4.7 1.7 4.8-1.1-.5-2.3-.9-3.7-1-1.2 0-2.4.2-3.4.7.1-.2 1.1-2.7.5-4.9-.7-2.3-.9-5.3 2.6-5.2 3 0 3.7 2.5 2.9 4.5-.1.4-.3.8-.6 1.1" class="cls-6"/><path d="M189 267.9c1.6 1.2 2 3.6.4 5.5.8-2 0-4.5-2.9-4.5-3.6 0-3.3 2.9-2.6 5.2-.9-1.1-1.5-2.5-1.5-3.8s.9-2.8 3.2-3.2c1.4-.2 2.6.1 3.5.7Z" class="cls-6"/><path d="M183.8 274.2c.7 2.2-.4 4.7-.5 4.9-3.4 1.5-5.7 4.9-5.7 4.9 0-.2.2-.4.3-.6 3.3-5.6 2.1-11.5 1.9-14-.2-2.4 1.8-3.8 1.8-3.8.3 1.6.6 3.2.8 4.8 0 1.3.6 2.7 1.5 3.8Z" class="cls-6"/><path d="M181.9 126.6c.3 2.7 0 5.8-1.3 9.2l-2.1-.3c2-6.3 0-13.8-3.8-19.1 1.2-.3 2.2-.5 2.2-.5l.4.4c1.1 1.1 4.1 4.8 4.7 10.3Z" class="cls-9"/><path d="M174.7 116.5c3.8 5.3 5.9 12.9 3.8 19.1h-2.9v-.4c.4-3.2.8-6.4.4-9.6s-1.7-6.4-4.1-8.5c.8-.2 1.9-.4 2.9-.7Z" class="cls-11"/><path d="M171.1 136.5c-1.6 7.7-2.4 22.8 3.7 50 0 0-17.3 6.6-21.9 6.4s-16.2-1.3-25.5-6.6c.7-8.2 4-34.2-.6-48.5-2.7-2.8-6.2-3.3-9.6-3.1-.9-6.2.8-12.7 4.8-17.5v-.2l2.9.8s7.3.2 10 .9c-1.7.2-3.2.4-3.2.4l4.7 2.1 2.9 1.3 6.2 6.4 1.6 1.6s3.2-3.9 7.7-7.4c.9-.7 2.1-1.3 3.1-1.7 2.5-1 4.9-1.3 5.2-1.4-.3-.6-1.7-1-3.2-1.2 2.2-.2 8.7-1.3 10.9-1.3 0 0 .5 0 1.1-.2 2.4 2.1 3.7 5.3 4.1 8.5s0 6.4-.4 9.6v.3c-1.7.1-3.3.5-4.5.9Z" style="stroke-width:0;fill:#e52e20"/><path d="M163 119.8c-.2.1-2.7.4-5.2 1.4-.5-1.6-1.7-2.8-3.2-3.1.5 0 3.1.1 5.2.5 1.5.3 2.8.7 3.2 1.2" class="cls-11"/><path d="M154.6 118.1c1.5.4 2.7 1.5 3.2 3-1.1.6-2.2 1.1-3.1 1.8-4.4 3.5-7.7 7.4-7.7 7.4l-1.6-1.6.3-.3c.2.2.4.4.5.4 1.3.4 7.3-9.1 7.3-9.1-.1-.5-.2-1.2-.2-1.8h1.2Z" class="cls-9"/><path d="M155.4 87.4c.2.4 0 1.1-.5 1.4-.4.3-1 .3-1.4.2-.5-.1-1-.3-1.5-.3h-1.3c-.4 0-.9 0-1.3-.2s-.4-1-.3-1.4c1.6-.8 5.9-.3 6.2.4Z" class="cls-7"/><path d="M153.5 116.2v1.8c0 1 0 1.2.2 1.8 0 0-6 9.5-7.3 9.1-.2 0-.3-.2-.5-.4-1.4-1.7-3.6-7.2-3.6-7.2.2-2.2 0-2.3 0-2.3 3 1.1 6.6.6 11.3-2.8Z" class="cls-10"/><path d="M152.5 91.7c.8 0 1.4 1.2 1.4 2.6s-.7 2.6-1.4 2.6-1.4-1.2-1.4-2.6.6-2.6 1.4-2.6" class="cls-4"/><path d="M151.7 108c.8-.2-3.1 4-7.8 3.9-2.8 0-4.7-.8-5.8-3.3 3.5 1.4 9.9.5 13.6-.6" class="cls-11"/><path d="m145.8 128.5-.3.3-6.2-6.4-2.9-1.3c1.1-1.2 2.5-2.2 4-2.7v-.2c.6.3 1.2.6 1.8.8s.2 0 0 2.3c0 0 2.2 5.5 3.6 7.2" class="cls-9"/><path d="M140.5 118.3v.2c-1.6.6-3 1.5-4.1 2.7s-4.7-2.1-4.7-2.1 1.5-.2 3.2-.3c2.4-.3 5.2-.6 5.4-.6.1 0 .2.1.3.2Z" class="cls-11"/><path d="M139.1 87.5c0 .5-.2.9-.7 1.1-.4.2-.9.2-1.4.2s-.9-.1-1.4 0c-.4 0-.8.2-1.1.4-.4.1-.8.2-1.2.1-.4 0-.8-.4-.8-.8s.4-1 .8-.9c.9-.7 4.3-.8 5.2-.4 0 0 .4.2.5.3Z" class="cls-7"/><ellipse cx="136.1" cy="94.2" class="cls-4" rx="1.2" ry="2.3"/><path d="M135.2 287.8c.5 2.4-.4 3.6-.4 3.6s-6.5 2.6-12.4 3.1-13.3-2.5-13.3-2.5l-.4-2.5.9-1.2v.8c.8 1.2 6.1 1.8 11.5 2.3 4.2.4 9.4-.8 12.1-1.8.8-.3 1.4-.6 1.7-.8.2-.1.3-.4.3-.8Z" class="cls-6"/><path d="M131.5 275.4c-.2-.8-.4-1.6-.5-2.5s2.5.1 2.8 1.2c.2 1 1.9 10.6 1.4 13.6 0 .4-.2.7-.3.8-.3.2-.9.5-1.7.8 0-5.2-3.4-7.6-6.4-8.8l2.5-4.5s0-.1.1-.3c0 0 1.2-.2 2.1-.5Z" class="cls-6"/><path d="M126.8 280.6c3 1.2 6.4 3.6 6.4 8.8-2.7 1-7.9 2.2-12.1 1.8-5.4-.5-10.6-1.1-11.5-2.3v-.8c0-1.7.9-4.9 4.1-6.9q1.65-1.05 4.2-1.5c1.4-.3 3-.3 4.8-.2 0 0 1.9.2 4.1 1Z" class="cls-6"/><path d="M132.4 247.3c-.3 4.3-3.3 14.8-1.4 25.6.1.8.3 1.7.5 2.5-.9.3-2.1.5-2.1.5.2-.7.8-2.4.3-3.5-.6-1.4-2.8-2.8-4.1-2.8-1 0-3.4.5-4.1 2.8h-.1c.2-8.4-3.1-21.5-3.4-25.6s0-.2 0-.2c4.8 1.1 9.7.4 14.4.5Z" class="cls-10"/><path d="M168.5 78.8c0-1.1-.2-2.1-.6-3.1-.2-.7-.6-1.4-1-2.1-1.3-2.2-3.2-3.9-5.3-5.4-4.3-3-9.7-4.5-14.4-4.7-3.5-.1-8.2.4-12.2 2.2-3 1.4-5.7 3.5-7.1 6.7-.4.9-.7 1.8-1 2.7-.3 1.2-.5 2.3-.7 3.5-.3 2.1-.3 4.2-.3 6.1 0 1.7 0 3.2.1 4.5.4-.2.9-.2 1.2-.2v-2.8c.4-2.4 1.3-5.6 3.1-7.5.3-.3.6-.6.9-.8 1.4-1 2.3 0 3.7.7.1 0 .3.1.4.2 1.6.8 3.3 1.3 5.1 1.2 1.7 0 3.3-.7 4.8-1.4 2.1-1 4.1-2.1 6.3-2.4 2.3-.3 4.1.8 5.6 2.5 1 1.1 1.8 2.4 2.6 3.6 1.7 2.7 2.8 6.6 3.4 7.6s2.4.9 2.3-.4c.4-1.1 1.4-1.6 2.3-1.3.3-4 .9-6.9.8-9.5Z" class="cls-7"/><path d="M129.7 272.4c.5 1.1 0 2.9-.3 3.5 0 .2-.1.3-.1.3l-2.5 4.5c-2.2-.9-4.1-1-4.1-1-1.9-.2-3.4 0-4.8.2s0-.1 0-.1 2.7-2.6 3.7-4.1c-.2-1-.3-1.9-.1-2.6 0-.2 0-.4.1-.5.7-2.3 3.1-2.7 4.1-2.8 1.3 0 3.5 1.4 4.1 2.8Z" class="cls-6"/><path d="M168.3 88.5c-.2-.1-.4-.2-.6-.2-.9-.2-1.9.3-2.3 1.3 0 1.2-1.8 1.4-2.3.4-.6-1-1.7-4.9-3.4-7.6-.8-1.2-1.6-2.5-2.6-3.6-1.5-1.6-3.3-2.8-5.6-2.5s-4.3 1.5-6.3 2.4c-1.5.7-3.1 1.3-4.8 1.4-1.8.1-3.5-.5-5.1-1.2-.1 0-.3-.1-.4-.2-1.4-.8-2.3-1.8-3.7-.7-.3.2-.6.5-.9.8-1.8 1.9-2.7 5.1-3.1 7.5v2.8c-.3 0-.8 0-1.2.2-.4.1-.7.3-.8.6-.3.5-.4 1.1-.5 1.6-.3 1.6-.5 3.3-.3 4.9.3 2.2 2.1 5.2 3.4 4.3h.3c1.1 5 3 8.2 5.3 10.9 2.1 2.5 4.2 5.1 6.7 6.6.1 0 .2.1.3.2.5.3 1.1.6 1.7.8 3 1.1 6.6.6 11.3-2.8.9-.7 1.9-1.5 2.9-2.4 2.2-1.9 7.4-7.3 8.4-13.8.6.1 1.3 0 1.9-.5.9-.7 1.6-1.8 2.1-3 .6-1.3 1-2.8 1-4.3s-.6-3.1-1.6-3.8Zm-32.1 8c-.6 0-1.2-1-1.2-2.3s.5-2.3 1.2-2.3 1.2 1 1.2 2.3-.5 2.3-1.2 2.3m1-7.6c-.5 0-.9-.1-1.4 0-.4 0-.8.2-1.1.4-.4.1-.8.2-1.2.1-.4 0-.8-.4-.8-.8s.4-1 .8-.9c.9-.7 4.3-.8 5.2-.4 0 0 .4.2.5.3 0 .5-.2.9-.7 1.1-.4.2-.9.2-1.4.2Zm6.9 23.1c-2.8 0-4.7-.8-5.8-3.3 3.5 1.4 9.9.5 13.6-.6.8-.2-3.1 4-7.8 3.9m8.5-14.9c-.8 0-1.4-1.2-1.4-2.6s.6-2.6 1.4-2.6 1.4 1.2 1.4 2.6-.7 2.6-1.4 2.6M155 89c-.4.3-1 .3-1.4.2-.5-.1-1-.3-1.5-.3h-1.3c-.4 0-.9 0-1.3-.2s-.4-1-.3-1.4c1.6-.8 5.9-.3 6.2.4.2.4 0 1.1-.5 1.4Z" class="cls-10"/><path d="m119.7 116.4 2.3.6v.2c-3.9 4.8-5.7 11.4-4.8 17.5-.6 0-1.2.1-1.7.2s0-.2 0-.2c-1.7-6.3 0-13.4 4.3-18.3Z" class="cls-11"/><path d="M117.9 279.7c-1.7.4-3.1 1-4.2 1.6 0 0 5.1-5 5.7-6.5.6-1.2 1.6-2.1 2-2.3v.5c-.1.7 0 1.6.1 2.6-1.1 1.5-3.7 4.1-3.7 4.1Z" class="cls-6"/><path d="M112.8 126.7c.2-7.8 4.1-10.1 5.3-10.6.2 0 .3-.1.3-.1l1.3.4c-4.3 4.9-6 12.1-4.3 18.3v.2c-.5 0-1.1.1-1.6.2-.8-3.3-1.1-6.1-1-8.4" class="cls-9"/><path d="M116.4 115.2c1.7-4.9.8-13.8 4.6-30.5l-1-5.9-2.5-.3h-7l-.4-2.9h-.2V73s-1.6 3.4-1.6 3.8V80c0 1.5 0 2.9.3 3.2.9.8 3.3.9 4.7 1.3-.4 4.7-7.4 23.7-8.1 27.5s-.9 9.9 0 10.7 5.8 3.9 7.5 3.9h.1c.1-7.8 4.1-10.1 5.3-10.6-.4-.4-1-.6-1.6-.8Z" class="cls-10"/><path d="M162.2 8.8 136 8.6l-24.3-.2-.6 22.4-.6 21.2-.5 21.1v2.6h.2l.4 2.8h15.7c.2-1.1.4-2.3.7-3.5.2-.9.6-1.9 1-2.7 1.4-3.3 4.1-5.4 7.1-6.7 4-1.8 8.7-2.3 12.2-2.2 4.7.1 10.1 1.7 14.4 4.7 2.1 1.5 3.9 3.3 5.3 5.4.5.7.8 1.4 1 2.1.4 1 .6 2 .6 3.1s7.9 0 7.9 0h8.5l.7-3V8.9l-23.5-.2Z" style="stroke-width:0;fill:#4d0099"/><path d="m135.2 52.1-.2 10.5m-24.8 13.1h-.2v-2.6l.6-21M135 65.7l.2-13.6m26.5 0h-26.5m50.5 0-.1 21.9v1.5l-10.6.1-7.1.1m-6.3-7.5.1-16.1m24-21v21h-24L162 31" class="cls-3"/><path d="m162.2 8.8 23.6.1-.1 22.2L162 31M136 8.6l26.2.2L162 31h-26.4m0 0-.4 21.1h-24.6l.5-21.2" class="cls-3"/><path d="m135.6 31-24.5-.1.6-22.4 24.3.1zm40.9 47.8h-8m6.5-3 10.6.1-.6 3h-1.8l-6.6-.1m-50.3-.2h-15.7l-.4-2.9-.1-.7 16.9.1m49.6 3.7h-.1" class="cls-3"/><path d="m120 78.9 1 5.9M185.7 74s2.7.4 2.9 1.3c.2 1 .9 6.4.4 7.2s-2.1 2.9-2.1 2.9h-1.7m-1-2.1c.2.7.4 1.4.6 2.3 2.4 8 8.3 22.4 9.1 26.4.8 4.4-.3 11.2-.7 11.6s-8.7 3.6-11.2 3.1" class="cls-2"/><path d="M184.5 115.8c.2.3.5.4.7.6M178.3 84c2.5 9.5 3.3 24.3 3.6 26.1.3 1.6 1.4 4.4 2.6 5.7m-7.3.5c1.3-.3 6-1.3 7.3-.5m-7.6.6h.4m1-32.4s-.8-4.2 1.2-4.5c1.2-.2 2.5-.4 3.7-.4s1.5.1 2 .4m-71.9 5c.5.1.8.3 1 .5M110 73.1s-1.7 3.4-1.7 3.8v3.2c0 1.5 0 2.9.3 3.2.9.8 3.3.9 4.7 1.3" class="cls-2"/><path d="M113.3 84.5c-.4 4.7-7.4 23.7-8.1 27.5s-.9 9.9 0 10.7 5.8 3.9 7.5 3.9m1.5-12.1s1.1.3 2.2.7c.6.2 1.2.5 1.6.7" class="cls-2"/><path d="M121 84.8c-3.8 16.7-2.9 25.6-4.6 30.5m25.8 3.7s.2 0 0 2.3m11.3-5.1v1.8c0 1 0 1.2.2 1.8m6.1-1.2c-2.2-.4-4.7-.5-5.2-.6h-1" class="cls-2"/><path d="M140.2 118.1c-.2 0-3.1.4-5.4.6-1.7.2-3.2.3-3.2.3l4.7 2.1 2.9 1.3 6.2 6.4 1.6 1.6s3.2-3.9 7.7-7.4c.9-.7 2.1-1.3 3.1-1.7 2.5-1 4.9-1.3 5.2-1.4-.3-.6-1.7-1-3.2-1.2" class="cls-2"/><path d="M153.6 119.8s-6 9.5-7.3 9.1c-.2 0-.3-.2-.5-.4-1.4-1.7-3.6-7.2-3.6-7.2m17.6-2.7c2.2-.2 8.7-1.3 10.9-1.3m.1 0s.5 0 1.1-.2c.8-.2 1.9-.4 2.9-.7 1.2-.3 2.2-.5 2.2-.5l.4.4c1.1 1.1 4.1 4.8 4.7 10.3.3 2.7 0 5.8-1.3 9.2l-2.1-.3c-1-.1-2 0-2.9 0-1.7.1-3.3.5-4.5.9-.8.3-1.5.7-2 1.1m-34.5-18.8c-2.7-.7-10-.9-10-.9m0 0-2.8-.8-2.3-.7-1.3-.4s-.1 0-.3.1c-1.1.5-5.1 2.8-5.3 10.6 0 2.3.2 5.1 1 8.4.5 0 1.1-.2 1.6-.2.6 0 1.2-.1 1.7-.2 3.5-.2 6.9.3 9.6 3.1l.6.6" class="cls-2"/><path d="M173.4 129.6c0 .1-1.3 2-2.3 6.9-1.6 7.7-2.4 22.8 3.7 50 0 0-17.3 6.6-21.9 6.4s-16.2-1.3-25.5-6.6c.7-8.2 4-34.2-.6-48.5-1-3-2.3-5.4-4.1-7.1m13.9 117c0-6.3-.6-11.2 1.3-18.4 2.1-6.9 11.6-27 11.3-29.3" class="cls-2"/><path d="M127.4 186.3s-9.8 23.7-14.5 38.4c.8.5-1.9 19.7 1.2 20.7m76.4 2.9c-1.8 2.3-3.8 2.1-14.3-.8-1.1-.3-2.2-.6-3.5-1l-3.6-12.4-16.4-30.7s-3.4-3-3.4-3.4m25.6-13.5s9.7 22.7 13.2 31.5c6.2 15.9 5.2 25.8 5.3 26.1-1.3 1.8-2 3.2-2.8 4.2m-76.5-2.9c1.3.6 2.6 1.1 3.9 1.4 4.8 1.1 9.7.4 14.4.5 1.4 0 2.9.2 4.3.4M118 247c.4 4 3.7 17.2 3.4 25.6v.5" class="cls-2"/><path d="M132.4 247.4c-.3 4.3-3.3 14.8-1.4 25.6.1.8.3 1.7.5 2.5v.1m44.6-28.6.2.6c1.3 4.6 3.9 10.8 5.4 18 .3 1.6.6 3.2.8 4.8m6.5-2.2v-.3c0-.9-.1-1.6-.1-2.4-.1-7.7 2-12.3 1.6-17.2" class="cls-2"/><path d="M194.8 282.9c-1-2.5-2.9-5.4-3.3-8.9-.4-4.3-.6-6.1-2.6-8.4" class="cls-2"/><path d="M181.6 265.5s-2 1.3-1.8 3.8c.2 2.4 1.4 8.4-1.9 14l-.3.6c-.5 1.3-.7 2.9-.6 3.8v.5c.3.8 2.4 3.8 8.4 2.9 5.4-.8 9.8-3.3 10-5.9v-.7c-.1-.5-.3-1.1-.5-1.6" class="cls-2"/><path d="m176.9 287.7-.7.8.3 3.1s3.2 3 9.6 2c6.3-1 9.3-4.2 9.3-4.2v-4.1M131 273s2.5.1 2.8 1.2c.2 1 1.9 10.6 1.4 13.6 0 .4-.2.7-.3.8-.3.2-.9.5-1.7.8-2.7 1-7.9 2.2-12.1 1.8-5.4-.5-10.6-1.1-11.5-2.3v-.8c0-1.7.9-4.9 4.1-6.9q1.65-1.05 4.2-1.5c1.4-.3 3-.3 4.8-.2 0 0 1.9.2 4.1 1 3 1.2 6.4 3.6 6.4 8.8" class="cls-2"/><path d="m126.8 280.6 2.5-4.5s0-.1.1-.3c.2-.7.8-2.4.3-3.5-.6-1.4-2.8-2.8-4.1-2.8-1 0-3.4.5-4.1 2.8 0 .2-.1.4-.1.5-.1.7 0 1.6.1 2.6-1.1 1.5-3.7 4.1-3.7 4.1" class="cls-2"/><path d="M121.6 272.4h-.1c-.4.3-1.4 1.1-2 2.3-.7 1.5-5.7 6.5-5.7 6.5m15.6-5.3s1.2-.2 2.1-.5c.4-.2.8-.4.9-.6m-22.8 13.4-.9 1.2.4 2.5s7.4 3 13.3 2.5 12.4-3.1 12.4-3.1.9-1.2.4-3.6m48.1-8.6c1.1-.5 2.2-.8 3.4-.7 1.4.1 2.6.5 3.7 1 2.6 1.2 4.1 3.2 4.3 3.5m-17.1 1s2.4-3.4 5.7-4.8" class="cls-2"/><path d="M183.3 279.1c.1-.3 1.1-2.7.5-4.9-.7-2.3-.9-5.3 2.6-5.2 3 0 3.7 2.5 2.9 4.5-.1.4-.3.8-.6 1.1.2 1.6 1.5 4.7 1.7 4.8" class="cls-2"/><path d="M183.8 274.2c-.9-1.1-1.5-2.5-1.5-3.8s.9-2.8 3.2-3.2c1.4-.2 2.6.1 3.5.7 1.6 1.2 2 3.6.4 5.5m-78.5-193 1-.5c.9-.4 2.3-.9 3.9-.9" class="cls-2"/><path d="M140.2 118.1c.1 0 .2.1.3.2.5.3 1.1.6 1.7.8 3 1.1 6.6.6 11.3-2.8.9-.7 1.9-1.5 2.9-2.4 2.2-1.9 7.4-7.3 8.4-13.8m-37.6-16.9v9.1c0 3.2.4 5.9.9 8.2 1.1 5 3 8.3 5.3 11 2.1 2.5 4.2 5.1 6.7 6.6m.5-17.4c-1 2.5 2.9 4.4 6.3 4.2m-9.1 3.4c.1 0 .3.1.4.2 3.5 1.5 9.9.6 13.6-.5.8-.2-3.1 4-7.8 3.9-2.8 0-4.7-.8-5.8-3.3" class="cls-1"/><path d="M119.7 116.4c-4.3 4.9-6 12-4.3 18.3" class="cls-2"/><path d="M121.9 117.2c-3.9 4.8-5.7 11.4-4.8 17.5m57.6-18.2c3.8 5.3 5.9 12.9 3.8 19.1m-6.7-18.5c2.4 2.1 3.7 5.3 4.1 8.5s0 6.4-.4 9.6m-39.1-14.1c1.1-1.2 2.5-2.1 4-2.7m14.2-.3c1.5.4 2.7 1.5 3.2 3" class="cls-2"/><path d="M138.6 87.2c-.8-.4-4.3-.3-5.2.4-.4 0-.8.5-.8.9s.4.7.8.8c.4 0 .8 0 1.2-.1s.7-.3 1.1-.4h1.4c.5 0 1 0 1.4-.2s.7-.7.7-1.1c0 0-.4-.2-.5-.3Zm16.8.2c-.3-.6-4.6-1.2-6.2-.4-.1.4 0 1.2.3 1.4.4.2.8.3 1.3.2h1.3c.5 0 1 .2 1.5.3.5 0 1 0 1.4-.2.4-.3.7-1 .5-1.4Z" class="cls-1"/><ellipse cx="136.1" cy="94.2" class="cls-1" rx="1.2" ry="2.3"/><path d="M153.9 94.3c0 1.5-.7 2.6-1.4 2.6s-1.4-1.2-1.4-2.6.6-2.6 1.4-2.6 1.4 1.2 1.4 2.6m-27.8-5.1c0-1.3 0-2.8-.1-4.5 0-1.9 0-4 .3-6.1.2-1.2.4-2.4.7-3.5.3-.9.6-1.9 1-2.7 1.4-3.3 4.1-5.4 7.1-6.7 4-1.8 8.7-2.3 12.2-2.2 4.7.1 10.1 1.7 14.4 4.7 2.1 1.5 3.9 3.3 5.3 5.4.5.7.8 1.4 1 2.1.4 1 .6 2 .6 3.1h0c.1 2.6-.5 5.5-.8 9.4" class="cls-1"/><path d="M165.4 89.8v-.2c.4-1.1 1.4-1.6 2.3-1.3.2 0 .4.1.6.2 1 .7 1.6 2.3 1.6 3.8s-.4 3-1 4.3c-.5 1.2-1.2 2.4-2.1 3-.6.4-1.3.6-1.9.4-.4 0-.8-.3-1-.7" class="cls-1"/><path d="M165.5 89.6c0 1.2-1.8 1.4-2.3.4-.6-1-1.7-4.9-3.4-7.6-.8-1.2-1.6-2.5-2.6-3.6-1.5-1.6-3.3-2.8-5.6-2.5s-4.3 1.5-6.3 2.4c-1.5.7-3.1 1.3-4.8 1.4-1.8.1-3.5-.5-5.1-1.2l-.4-.2s0 0 0 0c-1.4-.8-2.3-1.8-3.7-.7-.3.2-.6.5-.9.8-1.8 1.9-2.7 5.1-3.1 7.5v.4m0 2.3c-.3 0-.8 0-1.2.2-.4.1-.7.3-.8.6-.3.5-.4 1.1-.5 1.6-.3 1.6-.5 3.3-.3 4.9.3 2.2 2.1 5.2 3.4 4.3" class="cls-1"/></svg>')}`;
export default image;
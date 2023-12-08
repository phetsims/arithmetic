/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<?xml version="1.0" encoding="UTF-8"?><svg id="Layer_5" xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300"><defs><style>.cls-1{stroke:#fff;}.cls-1,.cls-2{fill:none;stroke-miterlimit:10;stroke-width:1px;}.cls-2{stroke:#000;}.cls-3{fill:#4d0099;}.cls-3,.cls-4,.cls-5,.cls-6,.cls-7,.cls-8,.cls-9,.cls-10,.cls-11{stroke-width:0px;}.cls-4{fill:#626365;}.cls-5{fill:#967246;}.cls-6{fill:#e1c0a5;}.cls-7{fill:#b3282e;}.cls-8{fill:#3246ff;}.cls-9{fill:#fff;}.cls-10{fill:#ffd204;}.cls-11{fill:#050504;}</style></defs><polygon class="cls-3" points="193.5 101.4 200.9 116.5 185.8 123.9 178.4 108.8 193.5 101.4"/><path class="cls-6" d="m196.8,130.2c2.5-1.6,1.7-2,1.7-2,0,0-4.5-1.1-7.8,1.4-3.3,2.5-.8.4-.8.4,0,0-6.3,1.4-7,2.1-.3.3-.4.8-.6,1.3,0,0-.7.3-1.5.8-2.4-.2-4.3,0-5.9.5-3.9,1.2-5.6,3.9-6.4,6.2h0s-.9.5-2.3.9l.9,2.9s-.1,1.8,1,2.3c1.1.5,5.6,3.1,7.8,2.5,2-.6,5.2-3.7,5.7-4.2.2,0,.3.1.5.1h.4c0,.6-.1.9-.1.9,0,.5,0,2,2.4,1.9,2.3,0,1.8-2.4,1.8-2.4,0,0,0-.4-.1-.9h.1c.7,0,2.3-1.5,2.3-1.5.7.4,1.6.9,2.2,1,.8.1,1.5-.2,2-1.4.2-.5.4-.9.4-1.4h.2c.4.9,3.4.3,3.3-.5-.1-.8.8-2.7.8-2.7.2-.5,1-1.8-1.2-2.1-1.1-.1-1.8.3-2.3.8h-.1c-1.5-.3-2.3-1-2.3-1l.6-2.4s2-2.1,4.5-3.8Z"/><path class="cls-6" d="m159,231.3c-.4-1.5-.7-3.6-.7-3.6,3.7.9,8.3,1,12.9-1.9,0,0,.8,3,.7,4.3s-.7,4.3-.7,4.3c0,0-.6,27.2-.7,31.3-4-.4-2.8,5.6-2.8,5.6h0c-.7-.4-1.3-.6-1.5-.7-1.3-.4-2.1,1.4-3.1,1.3-.5,0-1.1-.6-1.5-1.1,0-1.1,0-2.2-.1-3.3-.7-10.7-3.8-19.7-4.1-27-.1-3.5,1.8-9.2,1.8-9.2Z"/><path class="cls-4" d="m148.5,204.2c-1.3,6.3-3,14.6-4.1,20.4-1.9.8-3.7,1.2-5.4,1.5-6.5,1-11.4-.9-15-3.5-2.4-1.7-4.2-3.6-5.4-5,4.4-7.6,8.2-26.1,9.2-31.2,1-5.2,2.8-10.3,2.8-10.3,6.9,4.2,16.7,6.8,21.4,6.5,4.8-.3,12.6-5.2,15.8-7.1-.1,3.2,7,28.4,9.3,44.7-1.9,2.6-4,4.4-6,5.7-4.6,2.9-9.2,2.8-12.9,1.9-2.8-.7-5.1-1.8-6.5-2.5.1-6.6-3.2-20.6-3.2-21Z"/><path class="cls-6" d="m149.5,101.5c0,1.4.2,3.2.5,4.9.1,1,.3,1.9.5,2.8h0c-.4,2.1-1.8,6.6-4.9,7.6-3.4,1.2-7.7-5-9.1-7.2,0-.8-.1-1.5-.2-2.2-.1-1.4-.4-2.7-.6-3.8-.5-2.5-1.1-4-1.1-4-3.6-1-7.2-4-7.4-4.2,3.1-2.2,6.8-4,8.3-4.5-15.3-7.1-18.1-21.7-18.1-21.7l-.3-.2c1.5-2.2,5.7-6.8,6.7-7.7-.6-2.5-.6-12.8-.6-12.8,0,0,2.6,6.7,4,11.7,10.3-4,20.6-4.5,28.9-3.7.1.5,1.6,7.1,4,8.6,2.5,1.6,3.7,4.2,3.8,5.7.1,1.4,5,19.9-13.6,28-.7.2-.9,1.3-.9,2.8Zm2.2-34.9c.6-.2.6-1.3.2-2.5s-1.2-1.9-1.8-1.7c-.6.2-.6,1.3-.2,2.5s1.2,1.9,1.8,1.7Zm-18.7,1.7c.6-.2.7-1.5.3-2.8-.5-1.3-1.4-2.2-2-2-.6.2-.7,1.5-.2,2.8.5,1.3,1.4,2.2,2,2Z"/><polygon class="cls-8" points="163.1 21.9 151.5 34 139.3 22.3 151 10.2 163.1 21.9"/><path class="cls-11" d="m151.9,64.2c.4,1.2.3,2.3-.2,2.5-.6.2-1.3-.6-1.8-1.7s-.3-2.3.2-2.5c.6-.2,1.3.6,1.8,1.7Z"/><path class="cls-6" d="m135.7,231s2,7,0,12.2c-3.3,8.6-7.4,16.8-9.2,26.4-.2.9-.3,1.9-.4,2.8h.2c-.5,1.2-1.4,2.5-1.9,1.6-.8-1.3-1.8-.5-2-.3h-.1c0-.1,0-.3,0-.4,0,0,3.5-5.8-3.3-5.8,0,0-1.4-.1-2.7.4,1.4-4.3,2.3-20.6,2.9-25.6.6-5.1,4.2-12.1,4.2-12.1l.6-7.6c3.6,2.5,8.5,4.5,15,3.5,0,0-1.3,2.5-3.3,4.9Z"/><path class="cls-11" d="m133.3,65.5c.5,1.3.4,2.6-.3,2.8s-1.5-.7-2-2c-.5-1.3-.4-2.6.2-2.8.6-.2,1.5.6,2,2Z"/><path class="cls-5" d="m161.4,57.1c7.7,1.2,12.7,3.1,12.7,3.1-21.6-34.1-52.8-19.3-53.3-18.1-.2.6,0,1.5.1,2.3l-2.1,3.1s-1.6,0-2.3.5c-.2.1-.9,1.2-1.8,2.9-2.8,5.2-7.8,16.6-5.8,27.7,2.7,14.7,13.6,25.5,13.6,25.5,0,0,4.6.3,11.4-.2.2,0,.4,0,.4,0,.5,0,.9,0,1.5-.1-.5-2.5-1.1-4-1.1-4-3.6-1-7.2-4-7.4-4.2,3.1-2.2,6.8-4,8.3-4.5-15.3-7.1-18.1-21.7-18.1-21.7l-.3-.2c1.5-2.2,5.7-6.8,6.7-7.7-.6-2.5-.6-12.8-.6-12.8,0,0,2.6,6.7,4,11.7,10.3-4,20.6-4.5,28.9-3.7.1.5,1.6,7.1,4,8.6,2.5,1.6,3.7,4.2,3.8,5.7.1,1.4,5,19.9-13.6,28-.7.2-.9,1.3-.9,2.8,10.8-2.5,22.3-7.5,29.3-17.1,0,0-13.1-5-17.4-27.3Z"/><path class="cls-10" d="m174.7,134c-1.8-3.9-8.9-22.7-8.9-22.7-.4-.1-.9-.3-1.5-.3-3.6-.5-10.9-.4-10.9-.4-1.2-2.2-2.9-4.1-3.4-4,.1,1,.3,1.9.5,2.8h0c-.4,2.1-1.8,6.6-4.9,7.6-3.4,1.2-7.7-5-9.1-7.2,0-.8-.1-1.5-.2-2.2-.3,0-2.8-.3-3.5,2.8,0,0-7.5-1.5-11-1.3-.8,0-1.4.2-1.6.4-1.1,1.4-8,18.2-11.8,20.8.8,1.4,2.5,4.4,5.1,6.9,2.3,2.1,5.4,3.8,9.1,3.5.9,0,1.8-.3,2.8-.6,0,0,.2-1.2.6-2.9,2.1,2.9,5.2,21.8,5.4,26.2.1,4.4-1.1,6.1-2.7,11.8.6.4,1.2.8,1.8,1.2,6.9,4.2,16.7,6.8,21.4,6.5,4.8-.3,12.6-5.2,15.8-7.1.3-.2.5-.3.7-.4,0-.3-1.8-8.6-3.3-23.4,0-3.3,0-6.6-.2-9.5.4,0,.8-.2,1.1-.3,1.5-.4,2.3-1,2.3-1h0c.8-2.2,2.5-5,6.4-6.1l-.2-.8Z"/><path class="cls-7" d="m191.4,283.3s.5-6.9-4.3-8h0s-13.6-5.7-13.6-5.7c0-.2,0-.3,0-.5.3-1.2.2-2.1-.3-2.4,0,0-.1,0-.2,0-1.1-.6-2-.9-2.7-.9-4-.4-2.8,5.6-2.8,5.6h0c-.7-.4-1.3-.6-1.5-.7-1.3-.4-2.1,1.4-3.1,1.3-.5,0-1.1-.6-1.5-1.1,0-1.1,0-2.2-.1-3.3,0,0-2.8-.4-2.5,2.2.3,2.3.5,7.4.5,8.8h0s-1.5.5,0,2.8c1.5,2.3,8.6,2.3,9.3,2.4.7.1,3.7,2.1,6,2.9,2.3.9,7.4,1.9,11.9,2s5.7-2.8,5.7-2.8v-2.1l-.8-.5Z"/><path class="cls-7" d="m126.6,269.6c-.2.9-.3,1.9-.4,2.8h.2c-.5,1.2-1.4,2.5-1.9,1.6-.8-1.3-1.8-.5-2-.3h-.1c0-.1,0-.3,0-.4,0,0,3.5-5.8-3.3-5.8,0,0-1.4-.1-2.7.4-1.4.5-2.7,1.8-2.1,4.6-.7.4-1.4,1.9-2.1,3.2-2.7,2.3-4.6,4.8-5.9,6.7,0,0,0,.1,0,.1-.7,1.1-1.1,2-1.4,2.6l-.9.9v4s1.6,4.9,7.2,5.5c5.6.6,10.9-1.8,12.6-5.9,1.7-4.1,2.6-7.8,2.6-7.8l1.3-3.1s.5-1.6-.3-2.5c1.3-7.1-.8-6.6-.8-6.6Z"/><path class="cls-6" d="m123.3,164.3c0-.9-.3-2-.9-2.3-.7-.4-1.8.8-2.5,1.7h-.4c0,0-.7-.2-.7-.2,0-.2.2-.3.2-.3.4-.6.9-2-.4-2.8-1.3-.8-4,1.8-4,1.8.4-.9.4-1.8-.2-2.4-1-1-3.7.9-5.1,2l-1.3-.2,2.9-15.9c-1.3,1.3-2.6,3.7-2.9,8.1h0c-.8,0-2.3.1-3.3.3-1.4.3-6.9,5.3-5.3,6.2,1.6.9,6.2-1.5,6.2-1.5l1.4,3.6s-1,2.8-.7,3.6c.3.7,1.2.9,2.6,1.1.8,0,1.4-.3,2-.8h0c-.1.2.9,1.2,2.4,1.8,1.5.6,2.2-.5,2.5-.6,0,0,.2-.2.4-.5,0,0,1.1.9,3.1,1.1,2,.2,3.2-1.3,3.7-2.1.2-.3.3-.9.3-1.6Z"/><path class="cls-6" d="m120.9,146.8l1.8-6.3h0c-3.8.3-6.8-1.4-9.1-3.5l-1.9,8h0c0,0,0,0,0,.1l9.3,1.7Z"/><path class="cls-8" d="m120.9,146.8l-9.3-1.7h-.6c0-.1-.1.6-.1.6l-2.9,15.9,1.3.2c1.4-1.1,4.1-3,5.1-2,.6.6.6,1.5.2,2.4,0,0,2.6-2.6,4-1.8,1.3.8.8,2.2.4,2.8,0,0-.1.2-.2.3h.7c0,.1.4.2.4.2.7-.9,1.8-2.2,2.5-1.7.6.4.9,1.4.9,2.3l1.3.2,3-16.5-6.7-1.2Z"/><polygon class="cls-1" points="139.3 22.3 151.5 34 163.1 21.9 151 10.2 139.3 22.3"/><line class="cls-2" x1="113.6" y1="137" x2="111.7" y2="145"/><path class="cls-2" d="m111,145.7c-1.3,1.3-2.6,3.7-2.9,8.1"/><path class="cls-2" d="m114.1,144.1c0,0-1.1,0-2.4.9,0,0,0,0,0,0"/><polyline class="cls-1" points="123.2 164.3 123.3 164.3 124.6 164.6 127.7 148 120.9 146.8 111.7 145.1 111.1 145 111 145.7 108.1 161.5 109.3 161.8 109.5 161.8"/><path class="cls-2" d="m121.4,45.7s-.2-.6-.4-1.3c-.2-.7-.4-1.6-.1-2.3.4-1.2,31.7-16,53.3,18.1,0,0-5-1.9-12.7-3.1-1.6-.2-3.4-.5-5.2-.6-8.3-.7-18.6-.3-28.9,3.7-1.5-4.9-4-11.7-4-11.7,0,0,0,10.2.6,12.8-1,.9-5.2,5.5-6.7,7.7-.2.3-.4.6-.5.8-.4-5.3.8-15.8,2.5-19"/><path class="cls-2" d="m149.2,101.6c.1,0,.2,0,.3,0,10.8-2.5,22.3-7.5,29.3-17.1,0,0-13.1-5-17.4-27.3"/><path class="cls-2" d="m134.3,103.8c.5,0,.9,0,1.5-.1,0,0,.2,0,.3,0"/><path class="cls-2" d="m120.9,44.4l-2.1,3.1s-1.6,0-2.3.5c-.2.1-.9,1.2-1.8,2.9-2.8,5.2-7.8,16.6-5.8,27.7,2.7,14.7,13.6,25.5,13.6,25.5,0,0,4.6.3,11.4-.2"/><path class="cls-2" d="m117.4,69.3s2.8,14.6,18.1,21.7c-1.5.5-5.2,2.3-8.3,4.5-3.6,2.5-6.4,5.4-4.6,7.2,2,1.4,9.5,1.2,11.3,1.1.2,0,.4,0,.4,0"/><path class="cls-2" d="m156.2,56.5h0c.1.5,1.6,7.1,4,8.6,2.5,1.6,3.7,4.2,3.8,5.7.1,1.4,5,19.9-13.6,28-.7.2-.9,1.3-.9,2.8,0,1.4.2,3.2.5,4.9.1,1,.3,1.9.5,2.8"/><path class="cls-2" d="m127.2,95.5h0c.2.2,3.8,3.2,7.4,4.2,0,0,.6,1.5,1.1,4,.2,1.1.4,2.3.6,3.8,0,.7.1,1.5.2,2.2h0"/><path class="cls-2" d="m148,92.2s-2.2,2.5-4.8.6"/><path class="cls-2" d="m136.3,107.5h0c-.3,0-2.8-.3-3.5,2.8.8,2.8,7.3,13.4,13.6,13.4s7.2-11.3,6.9-13.1c-1.2-2.2-2.9-4.1-3.4-4"/><path class="cls-2" d="m136,108.9s.2.3.5.8c1.4,2.3,5.7,8.4,9.1,7.2,3.1-1.1,4.5-5.5,4.9-7.6.2-.7.2-1.2.2-1.2"/><path class="cls-2" d="m132.9,110.2s-7.5-1.5-11-1.3c-.8,0-1.4.2-1.6.4-1.1,1.4-8,18.2-11.8,20.8.8,1.4,2.5,4.4,5.1,6.9,2.3,2.1,5.4,3.8,9.1,3.5.9,0,1.8-.3,2.8-.6,0,0,.2-1.2.6-2.9.9-4.6,2.5-13.1,2.8-14.1"/><path class="cls-2" d="m153.4,110.5s7.3-.1,10.9.4c.6,0,1.2.2,1.5.3,0,0,7.1,18.8,8.9,22.7"/><path class="cls-2" d="m167.9,144.2s0-1.4.6-3.2c.8-2.2,2.5-5,6.4-6.2,1.6-.5,3.5-.7,5.9-.5"/><path class="cls-2" d="m168.5,140.9s-.9.5-2.3,1c-.3.1-.7.2-1.1.3h-.3"/><path class="cls-2" d="m166.1,141.9l.9,2.9s-.1,1.8,1,2.3c1.1.5,5.6,3.1,7.8,2.5,2-.6,5.2-3.7,5.7-4.2h0"/><path class="cls-2" d="m181.9,135.5s.2-1.1.4-2c.2-.6.4-1.1.6-1.3.7-.7,7-2.1,7-2.1,0,0-2.5,2.1.8-.4,3.3-2.5,7.8-1.4,7.8-1.4,0,0,.8.4-1.7,2-2.5,1.6-4.5,3.8-4.5,3.8l-.6,2.4s.9.7,2.3.8"/><path class="cls-2" d="m182.3,133.4s-.7.3-1.5.8c-.9.6-1.8,1.6-2.1,2.9-.6,2.5-1.1,6.9,2.7,8.2.2,0,.3.1.5.1"/><path class="cls-2" d="m193.2,139.2s.2-1.1,1-1.9c.5-.5,1.2-.9,2.3-.8,2.1.2,1.4,1.6,1.2,2.1,0,0-1,2-.8,2.7.1.8-2.9,1.5-3.3.6"/><path class="cls-2" d="m189.5,141.1c0-.1.9-2.8,2.5-2.4,1.2.3,1.7,1.5,1.3,3.2,0,.4-.2.9-.4,1.4-.6,1.2-1.3,1.6-2,1.4-.6-.1-1.5-.6-2.2-1-.2-.1-.4-.2-.5-.3"/><path class="cls-2" d="m188.4,140.1s.7-.4,1.2-.2"/><path class="cls-2" d="m188.7,143.6s-1.5,1.4-2.3,1.5"/><path class="cls-2" d="m186.3,145.1c0,.5.1.9.1.9,0,0,.5,2.4-1.8,2.4s-2.5-1.5-2.4-1.9c0,0,0-.4.1-.9.2-1.3.8-3.5,2.1-3.1,1.2.4,1.7,1.7,1.9,2.6Z"/><line class="cls-2" x1="122.7" y1="140.5" x2="120.9" y2="146.8"/><path class="cls-2" d="m119.4,164.5s.2-.3.6-.8c.7-.9,1.8-2.2,2.5-1.7.6.4.9,1.4.9,2.3,0,.6,0,1.3-.3,1.6-.5.8-1.7,2.2-3.7,2.1-2-.2-3.1-1.1-3.1-1.1"/><path class="cls-2" d="m114.6,162.1s2.6-2.6,4-1.8c1.3.8.8,2.2.4,2.8,0,0-.1.2-.2.3-.6.8-1.9,2.5-2.5,3.4-.2.3-.4.4-.4.5-.3.1-1,1.2-2.5.6-1.5-.6-2.5-1.6-2.4-1.8"/><path class="cls-2" d="m108.5,162.5s.3-.3.9-.7c1.4-1.1,4.1-3,5.1-2,.6.6.6,1.5.2,2.4,0,.2-.2.4-.3.5-.5.9-1.2,1.7-1.9,2.3-.6.5-1.1.9-1.5,1.2-.6.5-1.1.9-2,.8-1.4-.1-2.3-.3-2.6-1.1-.3-.7.7-3.6.7-3.6l-1.4-3.6s-4.6,2.4-6.2,1.5c-1.6-.9,3.9-5.9,5.3-6.2,1-.2,2.6-.3,3.3-.3.3,0,.4,0,.4,0"/><path class="cls-2" d="m163,122.5s1.5,8.1,2,19.6c.1,3,.2,6.2.2,9.5,1.5,14.8,3.2,23.1,3.3,23.4-.2.1-.4.3-.7.4-3.2,1.9-11,6.8-15.8,7.1-4.7.3-14.5-2.3-21.4-6.5-.6-.4-1.2-.8-1.8-1.2,1.6-5.7,2.8-7.4,2.7-11.8-.2-4.4-3.3-23.2-5.4-26.2"/><path class="cls-2" d="m130.5,176.1s-1.8,5.1-2.8,10.3c-1,5.1-4.8,23.6-9.2,31.2,1.2,1.4,3,3.3,5.4,5,3.6,2.5,8.5,4.5,15,3.5,1.7-.3,3.5-.8,5.4-1.5,1.1-5.8,2.8-14.1,4.1-20.4.9-4.8,1.6-8.4,1.5-8.8-.1-1.8-2-5.7-2.7-6.5"/><path class="cls-2" d="m150,194.9s3.4,0,5.1-1c1.6-1.1,3.4-4.2,3.4-4.2"/><path class="cls-2" d="m148.5,204.1h0c0,.4,3.4,14.4,3.2,21,1.4.7,3.7,1.9,6.5,2.5,3.7.9,8.3,1,12.9-1.9,2-1.3,4-3.1,6-5.7-2.2-16.3-9.4-41.5-9.3-44.7"/><path class="cls-2" d="m124,222.6l-.6,7.6s-3.6,7.1-4.2,12.1c-.6,5-1.5,21.3-2.9,25.6,0,0,0,.2,0,.3"/><path class="cls-2" d="m139,226.1s-1.3,2.5-3.3,4.9c-.3.3-.5.6-.8.9"/><path class="cls-2" d="m135.7,231s2,7,0,12.2c-3.3,8.6-7.4,16.8-9.2,26.4-.2.9-.3,1.9-.4,2.8"/><path class="cls-2" d="m171.1,225.8s.8,3,.7,4.3-.7,4.3-.7,4.3c0,0-.6,27.2-.7,31.3v.5"/><path class="cls-2" d="m158.2,227.7s.4,2.1.7,3.6.3,1.4.5,1.5"/><path class="cls-2" d="m159,231.3s-1.9,5.8-1.8,9.2c.3,7.3,3.5,16.2,4.1,27,0,1.1.1,2.2.1,3.3v.4"/><path class="cls-2" d="m106.3,282.4c1.3-2,3.2-4.4,5.9-6.7.7-1.3,1.4-2.8,2.1-3.2"/><path class="cls-2" d="m126.6,269.6s2-.5.8,6.6c0,.4-.1.8-.2,1.3-1.4,3.2-2.8,6.9-4.7,9.9-2.5,3.9-6,6.5-11.3,5.2-4.4-1.1-6.5-5.4-6.4-6.7,0-.2,0-.4.2-.7.2-.6.7-1.6,1.4-2.6"/><path class="cls-2" d="m122.4,287.4s-.7-4.1-4-6.4c-.9-.7-2-1.2-3.4-1.5-1.3-.3-2.5-.3-3.5-.1-3.2.4-4.8,2.5-5.2,3,0,0,0,.1,0,.1"/><path class="cls-2" d="m122.4,273.7h0c.2-.1,1.2-1,2,.3.5.9,1.4-.4,1.9-1.5.3-.6.5-1.1.5-1.2"/><path class="cls-2" d="m118.4,281l3.1-5.1s.5-1,.8-2.2c0-.1,0-.2,0-.3.3-1.8.1-3.8-2.4-4.2-4.1-.5-5.8,2-5.4,4.2,0,.2.1.4.2.6-1,1.8-3.2,5.3-3.2,5.3"/><path class="cls-2" d="m122.3,273.3s3.5-5.8-3.3-5.8c0,0-1.4-.1-2.7.4-1.4.5-2.7,1.8-2.1,4.6,0,.3.1.6.2.9s0,.2.1.4"/><path class="cls-2" d="m104.8,285.2l-.9.9v4s1.6,4.9,7.2,5.5c5.6.6,10.9-1.8,12.6-5.9,1.7-4.1,2.6-7.8,2.6-7.8l1.3-3.1s.5-1.6-.3-2.5"/><path class="cls-2" d="m180,277.2c-1.9,1.9-2.7,5-2.2,8.5"/><path class="cls-2" d="m161.3,267.4s-2.8-.4-2.5,2.2c.3,2.3.5,7.4.5,8.8,0,.2,0,.3,0,.3,1.1.8,2.7,2.8,8.9,2.5,2.5.8,5.4,3.1,9.6,4.4,2.8.9,6.1,1.3,10.3.6,2.8-1.1,3.3-2.9,3.3-2.9,0,0,.5-6.9-4.3-8-.8-.2-1.8-.2-2.9,0-.7.1-1.5.3-2.3.7-.7.3-1.3.7-1.8,1.2"/><path class="cls-2" d="m160.5,269.1c0,.4.4,1.1.9,1.7.4.6,1,1.1,1.5,1.1,1.1.1,1.8-1.7,3.1-1.3.2,0,.8.3,1.5.7.4.2.8.4,1.3.7,3.6,2,9.5,5.3,11.1,5.2h0"/><path class="cls-2" d="m173.3,266.7c.6.3.6,1.2.3,2.4,0,.2,0,.4,0,.5-.2,1.5.5,1.5.5,1.5l10.1,4.2"/><path class="cls-2" d="m168.9,272s-.3-4.1,2.2-5.1c.9-.3,1.6-.4,2-.3"/><path class="cls-2" d="m167.6,271.3s-1.1-6,2.8-5.6c.7,0,1.6.4,2.7.9,0,0,.1,0,.2,0"/><line class="cls-2" x1="173.5" y1="269.6" x2="187.1" y2="275.3"/><path class="cls-2" d="m191.4,283.3l.8.5v2.1s-1.2,2.9-5.7,2.8c-4.5-.1-9.6-1.2-11.9-2-2.3-.9-5.3-2.8-6-2.9-.7-.1-7.8-.1-9.3-2.4-1.5-2.3,0-2.8,0-2.8"/><path class="cls-2" d="m121.9,110.3s5.6,1.3,6.7,8.6"/><path class="cls-2" d="m162.8,120.9s1.2-1.7,1.3-8.3"/><path class="cls-2" d="m119.8,163.6h-.3c0,0-.1,0-.2.1-.2,0-.3,0-.5,0"/><polygon class="cls-1" points="200.9 116.5 185.8 123.9 178.4 108.8 193.5 101.4 200.9 116.5"/><path class="cls-2" d="m128.6,63.5s0-1.9,1.1-2.5c1.2-.6,2.6,0,2.6,0"/><path class="cls-2" d="m148.4,59.2s.7-.8,1.6-.7c.9,0,1.8.7,1.8.7"/><path class="cls-2" d="m133.3,65.5c.5,1.3.4,2.6-.3,2.8s-1.5-.7-2-2c-.5-1.3-.4-2.6.2-2.8.6-.2,1.5.6,2,2Z"/><path class="cls-2" d="m151.9,64.2c.4,1.2.3,2.3-.2,2.5-.6.2-1.3-.6-1.8-1.7s-.3-2.3.2-2.5c.6-.2,1.3.6,1.8,1.7Z"/><path class="cls-2" d="m143.8,67.3c.6,1.3,1.2,1.5,2.1.4.9,1.7,1.3,3.4.4,4.4"/><path class="cls-2" d="m136.3,77.7s1,1.6,5.6,1.3l7.2-.6s2.3-.3,2.8-1.8"/><polyline class="cls-9" points="135.6 145 153.7 126.3 155.4 150.4 146.1 147.6 150.5 135.4 143.7 147.4"/><polyline class="cls-9" points="146.7 149.6 150.2 150.8 148.1 156.3"/></svg>')}`;
export default image;
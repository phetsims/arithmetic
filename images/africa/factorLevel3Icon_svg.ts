/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<?xml version="1.0" encoding="UTF-8"?><svg id="Layer_5" xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300"><defs><style>.cls-1{stroke-linecap:round;stroke-linejoin:round;}.cls-1,.cls-2{stroke:#000;}.cls-1,.cls-2,.cls-3{fill:none;}.cls-2,.cls-3{stroke-miterlimit:10;}.cls-3{stroke:#fff;}.cls-4,.cls-5,.cls-6,.cls-7,.cls-8,.cls-9,.cls-10,.cls-11,.cls-12,.cls-13{stroke-width:0px;}.cls-5{fill:#f8ce96;}.cls-6{fill:#4d0099;}.cls-7{fill:#a51a35;}.cls-8{fill:#30281f;}.cls-9{fill:#d2164f;}.cls-10{fill:#8c102e;}.cls-11{fill:#90623c;}.cls-12{fill:#fff;}.cls-13{fill:#ebae52;}</style></defs><path class="cls-11" d="m185.4,123.1c-1.3-1.3-2.4-4.1-2.6-5.7-.3-1.9-.8-14.2-3.4-23.8,0,0-2.6-6.4.9-7.1,1.1-.2,2.6-.4,3.9-.4v-.2h1.8s.7-3.4.7-3.4v-3.9h.3s2.2,2.8,2.4,3.7c.2,1,.9,6.4.4,7.3-.5.8-2.1,2.9-2.1,2.9h-2.1c2.4,8.2,8.4,22.7,9.2,26.7.8,4.4-.3,11.3-.7,11.7s-9.9,3.9-12.4,3.4h0c-.2-7.6-2.3-10-3.3-10.7,1.2-.3,5.7-1.2,7-.4Z"/><path class="cls-10" d="m193.8,284.9v4.1s-3,3.3-9.3,4.3c-6.4,1-11.2-2.3-11.2-2.3l-.3-3.1.7-.8h0c0,.2,0,.4,0,.5.3.8,2.5,3.9,8.4,3,5.5-.8,11.2-3.1,11.6-5.7h0Z"/><path class="cls-11" d="m178.1,265c-2.2-7.7-6.9-14.5-8.2-19.2-1.1-4.2-1.6-10.6-1.6-10.6-1.2-1.2-3.4-5.2-4.8-8h0c-.8-1.6-1.4-2.8-1.4-2.8,2.3,0,4.7,0,7-.2.8,0,1.5-.1,2.3-.2.9-.1,1.8-.2,2.6-.4h0c2.5-.4,4.9-1,7.1-2.2,0,0,.7,1.9,1.1,8.9,1.8,2.1,2.8,3.9,3.3,9.4.4,5,.9,16.3,1.6,25.4,0,.9.1,1.8.2,2.7h-.4c-1.2-.9-2.9-1.5-4.7-1.2-2.3.4-3.2,1.7-3.2,3.2-.2-1.6-.5-3.2-.9-4.7Z"/><path class="cls-9" d="m183.7,211.8c.2.5.5,1,.7,1.6-.2,1.1-.3,2.1-.5,3.1-.6-.5-5.5-3.9-7.1-4.7-2.6.9-5.9,2.7-8.2,4.6,1,1.3,4.3,3.6,8,5.6,2.5-1.1,6.4-3.6,7.3-4.8-.3,1.8-.9,3.3-2.7,4.3-2.2,1.2-4.6,1.8-7.1,2.2h0c-1.6-1.2-4.8-3.2-6.1-3.9-2.7.8-6.5,2.6-8.9,4.4v.2c-2.3-.1-4.5-.3-6.8-.7-.5-.5-4.9-4.4-6.5-5.4-2.2.4-4.4,1.2-6.7,2.3-3.3-1-6.6-2.1-10-2.7-3.1-.5-5.2-.3-7.5.5-1.3.5-2.6,1.1-4.2,2,.3-.8.5-1.7.8-2.5,2.8-1.9,5.5-4.2,4.8-4.7-.3-.2-1.3-.7-3-1.5.3-1.1.6-2.2.9-3.2h.2c1,.6,1.8,1,3,1.6,2.9-1.6,8.4-5.2,7.6-5.8-.5-.4-6.1-3.7-7.8-4.4h-.4c2.3-8.3,4-14.8,4-14.8l4.1-15.2c12.5,4.2,27.3,2.1,38.3-1.6.5,2.5,1.1,5.3,1.9,8.8,2.6,11.9,4.2,17.4,9.5,29.2-.9.7-2.3,1.6-3,2.3.9.9,2.8,2,5.5,3.3Zm-17.4,2.5c3.1-1.2,8.9-4.3,8.1-4.9-.5-.4-5.7-4.3-7.4-5.2-2.7.8-6,2.4-8.5,4.2,1,1.4,4.1,3.8,7.7,5.9Zm-10.2,8.3c3.1-1.2,9-4.1,8.3-4.7-.5-.4-5.6-4.4-7.2-5.3-2.7.7-6.1,2.3-8.6,4,.9,1.4,4,3.9,7.5,6.1Zm-9.8-8.8c3.2-1,9.2-3.6,8.5-4.3-.5-.5-5.3-4.7-6.9-5.7-2.7.5-6.2,1.9-8.8,3.5.9,1.4,3.8,4.1,7.2,6.5Zm-12.4,5.1c3.1-1.2,9-4.1,8.3-4.7-.5-.4-5.6-4.5-7.2-5.4-2.7.7-6.1,2.3-8.6,3.9.9,1.4,4,3.9,7.5,6.1Z"/><path class="cls-13" d="m183.9,216.5c0,.2,0,.4-.1.6-.9,1.2-4.9,3.7-7.3,4.8-3.7-2-6.9-4.2-8-5.6,2.3-1.9,5.6-3.7,8.2-4.6,1.7.8,6.6,4.2,7.1,4.7Zm-7.4,1.9c1-.4,2.8-1.5,2.5-1.6-.2-.1-1.9-1.2-2.4-1.5-.8.3-1.9.8-2.6,1.4.3.4,1.4,1.1,2.5,1.7Z"/><path class="cls-13" d="m181.2,206.2c.8,1.7,1.6,3.5,2.5,5.5-2.7-1.2-4.6-2.4-5.5-3.3.7-.7,2.1-1.6,3-2.3Z"/><path class="cls-7" d="m193.7,284.2c-.1-.5-.3-1.1-.5-1.6,0,0,0,0,0,0-1-2.5-3-5.5-3.3-9-.4-4.4-.6-6.2-2.7-8.5h-.1c0,.9.1,1.8.2,2.7h-.4c-1.2-.9-2.9-1.5-4.7-1.2-2.3.4-3.2,1.7-3.2,3.2-.2-1.6-.5-3.2-.9-4.7-.5.4-1.8,1.6-1.6,3.7.2,2.5,1.4,8.5-1.9,14.1-.1.2-.2.4-.3.6-.6,1.3-.7,2.9-.6,3.8,0,.2,0,.4,0,.5.3.8,2.5,3.9,8.4,3,5.5-.8,11.2-3.1,11.6-5.7h0c0-.2,0-.5,0-.7Z"/><path class="cls-5" d="m179,216.8c.3.2-1.6,1.2-2.5,1.6-1.2-.6-2.2-1.3-2.5-1.7.7-.6,1.8-1.1,2.6-1.4.5.3,2.3,1.3,2.4,1.5Z"/><path class="cls-13" d="m170.5,111.8c0,0,.1-.1.2-.1.5-.3,2.3-.3,3.5,0t0,0c.6.2,1.1.4,1.2.8,0,.2,0,.8-.2,1.2-.2.3-.3.6-.5.6-.2,0-.5,0-.8,0-.9-.2-2.1-.3-2.8-.2-.2,0-.4-.1-.6-.2-.3-.6-.5-1.7,0-2.2Z"/><path class="cls-13" d="m173.7,117.7c-1,0-2.2,0-2.9-.2,0,0,0,0,0,0-.1-.3-.3-.9-.4-1.4,0,0,0,0,0,0,0-.4,0-.8,0-1.1,0,0,0,0,0,0,0-.3.2-.5.3-.6.1,0,.3,0,.5-.1.8.2,2,.2,2.8.2.7.2,1.3.5,1.5.9.2.4-.2,2.2-.6,2.3-.3,0-.7.1-1.2.2Z"/><path class="cls-13" d="m174.5,209.3c.8.6-5.1,3.7-8.1,4.9-3.6-2.2-6.7-4.6-7.7-5.9,2.4-1.8,5.8-3.4,8.5-4.2,1.7.9,6.8,4.7,7.4,5.2Zm-8,1.4c1-.4,2.8-1.3,2.6-1.5-.2-.1-1.8-1.3-2.4-1.6-.9.2-1.9.7-2.7,1.3.3.4,1.3,1.1,2.5,1.8Z"/><path class="cls-13" d="m174,114.3c-.9,0-2,0-2.8-.2.7-.1,1.9,0,2.8.2Z"/><path class="cls-13" d="m169.1,224.1c-2.3.2-4.7.3-7,.2-1,0-2,0-3-.1v-.2c2.4-1.8,6.2-3.6,8.9-4.4,1.3.7,4.5,2.7,6.1,3.9-.9.1-1.8.3-2.6.4-.8,0-1.5.2-2.3.2Z"/><path class="cls-13" d="m170.9,118.4c.2.4-.2,2.2-.6,2.3-.2,0-.4,0-.7,0-.8.1-1.8.2-2.6,0-.3,0-.6-.1-.9-.2-.3-.7-.7-2.6,0-3,.8-.4,4.4-.4,4.8.7Z"/><path class="cls-13" d="m167.7,113.5c1.1,0,2.4,0,2.6.7,0,.1,0,.3,0,.6s0,0,0,0c0,.2,0,.3,0,.5,0,.2,0,.4,0,.7,0,0,0,0,0,0,0,.5-.2.8-.3.8-1.1.2-2.9.3-3.9-.1-.2-.5-.5-1.6-.4-2.3,0-.3.1-.6.4-.7.3-.2.9-.3,1.6-.3Z"/><path class="cls-5" d="m169.1,209.2c.2.2-1.6,1.1-2.6,1.5-1.2-.7-2.2-1.4-2.5-1.8.8-.5,1.8-1,2.7-1.3.5.3,2.2,1.5,2.4,1.6Z"/><path class="cls-13" d="m168.7,161.2c.2,2.3.6,4.6,1,7-11,3.6-25.8,5.8-38.3,1.6.7-5.9.4-7.3.4-7.3,12.2,2.7,25.1,2.8,36.8-1.2Z"/><path class="cls-13" d="m168.3,131.9c1-.2-1.2,4.9-2.7,7.4-4,1.2-7.9,1.9-9.5,1.8.6-2.3,2-5.2,3.4-7.2,1.8-.6,8.1-1.9,8.8-2Zm-4.9,5.6c.5-.8,1.2-2.4.9-2.3-.2,0-2.2.5-2.8.7-.5.6-.9,1.5-1.1,2.3.5,0,1.7-.3,3-.6Z"/><path class="cls-13" d="m164.5,123.7c0,0-.2,0-.3,0-.6,0-1.3,0-1.7-.2-.1-.2-.2-.6-.3-.9,0-.4,0-.8,0-1.1,0,0,0-.1.2-.1.4-.2,1.5-.3,2.4-.1.6.1,1.1.3,1.2.6.1.3-.1,1.7-.4,1.7-.2,0-.6,0-.9.1,0,0-.2,0-.3,0Z"/><path class="cls-4" d="m165.4,93.3c-.3,1.4-.3,1.9-.8,2.1-.1-1.2-.3-2.3-.5-3.4.7.6,1.2,1.3,1.3,1.3Z"/><path class="cls-13" d="m164.4,217.8c.7.7-5.1,3.6-8.3,4.7-3.5-2.3-6.6-4.7-7.5-6.1,2.5-1.7,5.9-3.3,8.6-4,1.6.9,6.7,4.9,7.2,5.3Zm-8,1.2c1-.4,2.9-1.2,2.6-1.5-.2-.1-1.8-1.3-2.3-1.6-.9.2-1.9.7-2.7,1.2.3.4,1.3,1.2,2.4,1.9Z"/><path class="cls-5" d="m164.3,135.2c.3,0-.4,1.5-.9,2.3-1.3.4-2.5.6-3,.6.2-.7.7-1.6,1.1-2.3.6-.2,2.6-.6,2.8-.7Z"/><path class="cls-4" d="m162.9,91.3v-.3c.3.2.8.6,1.2,1.1.2,1.1.4,2.2.5,3.4-.4.2-1,.2-2.2.4.2-2.5.4-4.6.5-4.6Z"/><path class="cls-11" d="m145.2,94.6c-2,0-3.4,0-4.8,0h0s-.2,0-.2,0c.1-1.2.2-2.5.3-4-4.9-1.1-10.1-1.6-15.1-.3,2.7-5.8,6.5-12.7,12.6-15.6,1.2-.5,5.2-.3,5.4-2,.2-1.3-2.7-1.5-4.2-1.4,1.9,0,9.1-.7,6.2-2.7.9.4,2.2.3,1.9-.9.6.7,1.6.2,2-.4.2.7,1.6,1.1,2.3,1.2,0,.4.4.7.8,1-3.1-1.1-7-.1-2.8,2.4-7.3-1.4-3.6,3.4.9,4,6.6,2.7,11.9,9,13.7,16.1-5.4-3.7-13-2.8-19.2-1.5,0,1.5.2,2.8.3,4h0Z"/><path class="cls-4" d="m160.9,93.1c-2.3-.7-4.7-1-6.8-1.1-3.1-.2-5.7.1-7.2.5.2,3.6.5,5.8.9,8.7.1,1.2,1.1,2.1,2.4,2.2,1.3,0,2.5.1,3.8.1,1.1,0,2.2,0,3.5,0s3-1.2,3.1-2.8c0-.2,0-.5,0-.8h1.5c0,0,0,0,0,0,0,.3,0,.5,0,.8-.2,2.6-2.4,4.6-5.1,4.6-1.6,0-2.9,0-4.3,0-1,0-2,0-3-.1-.6,0-1.3-.2-1.9-.6-1-.6-1.8-1.5-1.9-2.5-.1-1.2-.2-2.4-.4-3.5-.1-1.2-.2-2.5-.4-3.9-.1-1.2-.2-2.5-.3-4l1.2-.3c5.3-1.2,10.8-1,15.9.5l.7.2v.3s-.2,2-.4,4.6h-1.6c0-1.4.1-2.4.1-2.7Z"/><path class="cls-4" d="m160.8,95.7h1.6c-.1,1.4-.2,2.9-.3,4.3h-1.5c0-1.5.2-3,.2-4.3Z"/><path class="cls-10" d="m152.2,223.5c2.2.3,4.5.6,6.7.7,1,0,2,.1,3,.1,0,0,.6,1.2,1.4,2.8-10.5,2.4-15.1,1.1-25.9.4-.3-1.1,3.1-6.6,3.1-6.6h0c.9.3,1.7.5,2.6.7,2.9.8,5.9,1.4,8.9,1.9Z"/><path class="cls-13" d="m158.5,124.3c-.2,0-.4,0-.5-.1t0,0c-.3-.5-.6-1.9-.1-2.2.1,0,.3,0,.5-.1,0,0,.2,0,.3,0,1-.1,2.6,0,2.9.6,0,.3-.1.9-.2,1.6h0c0,.1-.1.2-.2.2-.6.1-1.8.3-2.6.2Z"/><path class="cls-5" d="m159,217.6c.2.2-1.6,1.1-2.6,1.5-1.1-.7-2.1-1.5-2.4-1.9.8-.5,1.9-1,2.7-1.2.5.3,2.2,1.5,2.3,1.6Z"/><path class="cls-13" d="m154.7,209.5c.7.7-5.3,3.3-8.5,4.3-3.4-2.4-6.3-5.1-7.2-6.5,2.6-1.6,6-2.9,8.8-3.5,1.6,1,6.4,5.3,6.9,5.7Zm-8.1.8c1-.3,2.9-1.1,2.7-1.3-.2-.1-1.7-1.5-2.2-1.8-.9.2-2,.6-2.8,1,.3.4,1.2,1.2,2.3,2Z"/><path class="cls-13" d="m154.4,143.4c.8.6-5.5,3.6-8.9,4.8-3.9-2.1-7.3-4.4-8.4-5.7,2.6-1.7,6.3-3.3,9.2-4,1.8.8,7.5,4.6,8,5Zm-8.7,1.4c1.1-.4,3.1-1.3,2.8-1.5-.2-.1-2-1.3-2.6-1.5-.9.2-2.1.7-3,1.2.3.4,1.4,1.1,2.7,1.8Z"/><path class="cls-4" d="m154,94.6c.8,0,1.4,1.1,1.4,2.5s-.6,2.5-1.4,2.5-1.4-1.1-1.4-2.5.6-2.5,1.4-2.5Z"/><path class="cls-12" d="m154.2,92c-3.1-.2-5.7.1-7.2.5.2,3.6.5,5.8.9,8.7.1,1.2,1.1,2.1,2.4,2.2,1.3,0,2.5.1,3.8.1,1.1,0,2.2,0,3.5,0s3-1.2,3.1-2.8c0-.2,0-.5,0-.8,0-1.4.2-2.9.2-4.2,0-1.3.1-2.3.1-2.6-2.3-.7-4.7-1-6.8-1.1Zm-.1,7.6c-.8,0-1.4-1.1-1.4-2.5s.6-2.5,1.4-2.5,1.4,1.1,1.4,2.5-.6,2.5-1.4,2.5Z"/><path class="cls-11" d="m159,116.8c2.3-2.3,5.2-5.1,6-9,0,0,0,0,0,0,0-4,0-8.3-.4-12.4-.4.2-1,.2-2.2.4-.2,3.9,0,9.5-5.4,9.5-5.6,0-12.2.8-11.4-6.8-3.3.2-3.9.3-5.8.2.8,8-7.4,6.9-13,6.4-.6,7.9,9.3,16.4,13.3,18.2h0c0,.4,0,.7,0,1,1.1,2.2-1.9,2.4-3.4,2-.1-.2-.2-.6-.3-.9.3,2.3-1.8,1.9-1.8-.2,0,0-.1,0-.2,0-.4,3.8-3.4,3.1-3.2-1.5h-.1c0,1.3.4,2.8-.5,3.8,4.5,14.1,30.7,12.6,33.6-2.7-3.4,3.8-1.4-7.2-1.9-8.8-.1,2.9-.3,3.6-.8,6.4.1.2,0,1.2-.2,1.6,0,3.7-3.3,4.1-2.8.4-.2,0-.4,0-.5-.1-.1,1.5-.7,2.1-2,1.7-1.3,0-1.5-4.2-1.3-5.7,1.3-.9,2.8-2.1,4.3-3.4Zm-16.9-.4c-2.9-.3-3.8-2.2-5.3-4.5,3.4,2.1,14.6-.4,15.8-1.8-2.8,5.1-5.8,6.5-10.5,6.2Z"/><path class="cls-12" d="m152.6,110.3c-1.9,3.3-2.5,3.7-4.1,4.9-1.6,1.2-4.8,1.6-6.4,1.3-2.6-.4-3.8-1.8-5-4.2l-.3-.3c1.5.8,3.7.9,6,.8,4.4-.3,9.2-1.8,9.8-2.5Z"/><path class="cls-13" d="m145.8,218.1c1.6,1,6,4.9,6.5,5.4-3-.4-6-1-8.9-1.9-.9-.2-1.7-.5-2.6-.8-.5-.2-1.1-.3-1.6-.5,2.3-1.2,4.5-1.9,6.7-2.3Z"/><path class="cls-5" d="m149.4,208.9c.2.2-1.7,1-2.7,1.3-1.1-.8-2-1.6-2.3-2,.8-.5,1.9-.9,2.8-1,.5.3,2.1,1.6,2.2,1.8Z"/><path class="cls-5" d="m148.6,143.3c.3.2-1.8,1.1-2.8,1.5-1.3-.6-2.3-1.3-2.7-1.8.8-.5,2-1,3-1.2.6.3,2.4,1.4,2.6,1.5Z"/><path class="cls-4" d="m145.6,98.5h-.3c-3.3.2-3.4.2-5.1.2h-.4c.1-1.3.3-2.7.4-4.1h.2c1.5,0,2.7,0,4.7,0h.1s0,0,0,0c.1,1.4.2,2.6.4,3.9Z"/><path class="cls-13" d="m142.1,214.1c.7.7-5.1,3.6-8.3,4.7-3.5-2.3-6.6-4.8-7.5-6.1,2.5-1.7,5.9-3.3,8.6-3.9,1.6.9,6.7,4.9,7.2,5.4Zm-8,1.2c1-.4,2.9-1.2,2.6-1.4-.2-.1-1.8-1.4-2.3-1.7-.9.2-2,.7-2.7,1.2.3.4,1.3,1.2,2.4,1.9Z"/><path class="cls-11" d="m135.7,272.8c0,.8.1,1.6.2,2.4-1.2.4-3.1.6-3.1.6.2-.7.8-2.4.3-3.5-.6-1.4-2.8-2.8-4.1-2.8-1,0-3.4.5-4.1,2.8,0,0,0,0-.1,0,.2-8.7-4.8-30.4-5.2-34.5-.3-4.1,1.2-11.4,1.6-13.3,0-1.2.5-5.9.5-5.9l-.2-.4c2.3-.8,4.4-1,7.5-.5,3.4.6,6.7,1.7,10,2.7.5.2,1.1.3,1.6.5h0s-3.4,5.5-3.1,6.6c.3,1,.3,8.9,0,13.5-.3,4.3-2.9,19.6-1.9,31.8Z"/><path class="cls-4" d="m124.5,93.1c0,.7.2,4.7.4,7.6.1,1.6,1.5,2.8,3.1,2.8,2.7,0,4.8,0,7.2-.2,1.2,0,2.3-1,2.4-2.2.3-2.8.6-5.1.9-8.7-2.4-.6-9.2-.7-14,.6Zm.4,10.8c-.9-.8-1.4-1.9-1.5-3.2,0-1-.1-2-.2-3,.5-3,1.2-5.2,2.3-7.5,4-.9,8.2-1,12.2-.2l2.7.5h.2c0,1.5-.2,2.8-.3,4-.1,1.5-.2,2.8-.4,4.1-.1,1.1-.2,2.2-.4,3.3-.2,1.7-2.1,3.1-3.8,3.1-2.5.1-4.5.2-7.3.2s-1.1,0-1.6-.3c-.7-.2-1.4-.6-1.9-1.1Z"/><path class="cls-13" d="m140,124.3c0,0,.1.1.2.2.1.3-.1,1.7-.4,1.8-.8.2-2.4.4-3.1,0-.1-.2-.2-.6-.3-.9h0c0-.3,0-.6,0-.9t0,0c0-.2.1-.3.2-.3.5-.3,2.8-.4,3.5.2Z"/><path class="cls-10" d="m137.6,289.3c.8-.3,1.4-.6,1.7-.8.2-.1.3-.4.3-.8h0c.5,2.4-.4,3.6-.4,3.6,0,0-7.6,2.6-13.5,3.1-6,.5-13.4-2.5-13.4-2.5l-.4-2.5.9-1.2h0c0,.3,0,.6,0,.7.8,1.2,6.1,1.8,11.6,2.3,4.3.4,10.3-.9,13.2-1.9Z"/><path class="cls-12" d="m138.5,92.5c-.2,3.6-.6,5.8-.9,8.7-.1,1.2-1.2,2.1-2.4,2.2-2.4.1-4.5.2-7.2.2-1.6,0-3-1.2-3.1-2.8-.2-2.8-.4-6.8-.4-7.6,4.8-1.3,11.6-1.2,14-.6Zm-4,4.6c0-1.3-.6-2.4-1.4-2.4s-1.4,1.1-1.4,2.4.6,2.4,1.4,2.4,1.4-1.1,1.4-2.4Z"/><path class="cls-5" d="m136.8,213.9c.2.2-1.6,1.1-2.6,1.4-1.1-.7-2.1-1.5-2.4-1.9.8-.5,1.9-1,2.7-1.2.5.3,2.1,1.5,2.3,1.7Z"/><path class="cls-13" d="m135.5,140.4c.2.8-6.2-1-9.3-2.1-.2-.4-.3-.8-.5-1.1-1.1-2.8-1.8-5.3-1.7-6.5,2.9.5,6.5,1.6,9,2.7.7,1.4,2.3,6.5,2.4,7Zm-7-3.9c1,.4,3,1,2.9.7,0-.2-.6-1.8-.8-2.2-.8-.4-1.9-.7-2.8-.9,0,.4.3,1.4.7,2.4Z"/><path class="cls-13" d="m134.1,122.8c.5,0,.9.3,1,.5.1.3-.1,1.7-.4,1.8,0,0,0,0,0,0,0,0-.1,0-.2,0-.8.2-2.2.3-2.9,0-.1-.2-.3-.7-.3-1.1,0-.1,0-.3,0-.4,0-.3,0-.6.3-.7.4-.2,1.7-.3,2.7-.1Z"/><ellipse class="cls-4" cx="133.1" cy="97.1" rx="1.4" ry="2.4"/><path class="cls-13" d="m131.7,204.1c.8.6-4.6,4.2-7.6,5.8-1.2-.6-2-.9-3-1.5h-.2c.3-1,.6-2,.8-3h.2c.5.4,1.2.7,2,.9.9-.5,2.6-1.8,2.3-1.9-.2-.1-2-1-2.6-1.1-.6.3-.7.3-1.2.7h-.3c.4-1.6.8-3,1.2-4.4h.4c1.7.8,7.3,4.1,7.8,4.5Z"/><path class="cls-5" d="m131.5,137.2c0,.3-1.9-.3-2.9-.7-.5-1-.8-2-.7-2.4.9.2,2.1.5,2.8.9.2.5.8,2.1.8,2.2Z"/><path class="cls-13" d="m128,123.7c-.1,0-.3,0-.4-.1-.2-.5-.5-1.7-.2-2.1,0,0,0,0,.1-.1.5-.2,2.3-.3,3.2.1.2.1.4.2.5.4,0,.2,0,1-.2,1.4,0,.2-.2.3-.3.3-.5,0-1.4.2-2.2.1-.2,0-.4,0-.6,0Z"/><path class="cls-13" d="m127.8,119.1c.1,0,.2.2.2.3.1.3-.2,1.7-.5,1.7,0,0,0,0,0,0-.5,0-1.2.2-1.9.1,0,0,0,0,0,0-.4,0-.8,0-1.1-.2-.2-.5-.5-2,0-2.2.2,0,.4-.1.8-.2.7,0,1.8,0,2.4.3.1,0,.2,0,.3.2Z"/><path class="cls-5" d="m126.3,204.4c.3.2-1.4,1.4-2.3,1.9-.8-.3-1.5-.6-2-.9h-.2c.2-.6.3-1.1.4-1.6h.3c.6-.4.7-.4,1.2-.6.6.2,2.4,1,2.6,1.1Z"/><path class="cls-9" d="m181.7,134.2c-.2-7.6-2.3-10-3.3-10.7,0,0,0,0,0,0,.2-.6-8.6.3-9.1.2.3,1.9-2.1,2.4-2.3.1.1-1.4,0-1.7,0-2.8-.4,1.3-.8,6.9-1.8,5.9-.4-.2-.5-2.5-.4-3.2,0,0-.2,0-.3,0-2.1,16.3-29.4,18.2-33.9,3.8-.5.8-1.6-.1-2-3.8-.2,0-.4,0-.6,0,.7,1.5-.4,5.5-1.4,2.3-.5-2.2-.8-3.6-1.1-4.8,0,0,0,0,0,0,1.4,10.4-2.4,7.3-2.6.2,0,0-.2,0-.3,0,1.1,3.4-.9,7.2-2.7,2.2l-1.3-.4c-1.2.2-5.2,4.8-6.1,11.9,14.7,2.7,17,16.1,19.3,27.4,12.2,2.7,25.1,2.8,36.8-1.2-.8-9.8.8-16.2,2.5-19.9,1.8-1.5,4.9-2.1,10.5-4.7,0-.9,0-1.7,0-2.4Zm-55.5,4c-1.1-2.5-2.3-6.5-2.2-7.6,2.9.5,6.5,1.6,9,2.7,3.8,9.5,3.4,7.9-6.9,4.9Zm19.3,9.9c-3.9-2.1-7.3-4.4-8.4-5.7,2.6-1.7,6.3-3.3,9.2-4,9.3,5.7,11.6,4.7-.9,9.8Zm20.1-8.9c-4,1.2-7.9,1.9-9.5,1.8.6-2.3,2-5.2,3.4-7.2,8.1-1.5,12-5.5,6.1,5.4Z"/><path class="cls-4" d="m123.1,97.1c-.2-3.1-.5-5.8-.6-5.8v-.3c0,0,2.2-.6,2.2-.6l.7-.2c-1,2.3-1.7,4.5-2.3,7.5,0-.2,0-.4,0-.7Z"/><path class="cls-7" d="m138.2,274c-.2-.9-1.9-1.1-2.5-1.2,0,.8.1,1.6.2,2.4-1.2.4-3.1.6-3.1.6.2-.7.8-2.4.3-3.5-.6-1.4-2.8-2.8-4.1-2.8-1,0-3.4.5-4.1,2.8,0,.2-.1.4-.1.5,0-.2,0-.3,0-.5-.4.3-1.4,1.1-2,2.4-.7,1.5-5.8,6.5-5.8,6.5-3.2,2-4.1,5.3-4.2,7,0,.3,0,.6,0,.7.8,1.2,6.1,1.8,11.6,2.3,4.3.4,10.3-.9,13.2-1.9.8-.3,1.4-.6,1.7-.8.2-.1.3-.4.3-.8.5-3-1.2-12.8-1.4-13.7Z"/><path class="cls-13" d="m119.5,121.5c-.3,0-.5-.1-.7-.2-.3-.7-.7-2.6,0-3,.8-.4,4.4-.4,4.8.7.2.4-.2,2.2-.6,2.3h0c0,0-.2,0-.3,0-.9.1-2.2.2-3.2,0Z"/><path class="cls-13" d="m118.9,114.4c.9-.1,2.4-.1,3.3.2.4.2.7.4.8.6.2.4-.2,2.2-.6,2.3-1.1.2-3.2.4-4.2,0-.1-.3-.3-.7-.3-1.1,0-.6.2-1.1.2-1.8,0,0,0,0,0,0,.2,0,.4-.1.7-.2Z"/><path class="cls-13" d="m122.9,213c.7.4-2,2.7-4.8,4.7.6-2,1.2-4.1,1.9-6.2,1.6.8,2.7,1.3,3,1.5Z"/><path class="cls-8" d="m178,99.8c-1.6-12.7-5.7-33.5-21.7-33.6-2-3.9-11,.7-4.8,2.3,0,.4.4.7.8,1-3.1-1.1-7-.1-2.8,2.4,2.2.2,2.8.4,4.9,1.6-7.8-3.9-13.9-.5-4,2.4,6.6,2.7,11.9,9,13.7,16.1.7.6,1.2,1.3,1.3,1.3-.3,1.4-.3,1.9-.8,2.1.4,4.1.3,8.4.4,12.4,0,0,0,0,0,0-1.5,5.7-6.2,9.3-10.4,12.3-.2,1.5,0,5.8,1.3,5.7,1.3.4,1.9-.3,2-1.7t0,0c-.3-.7-.8-2.4.4-2.3.2-1,.3-2,.5-3.9,0,1.1-.1,2.5-.2,3.8,1-.1,2.6,0,2.9.6.4-2.8.6-3.5.8-6.4,0,1.8,0,3.6,0,5.5.5-.5,3.3-.5,3.8.4.1.9-.2,2-1.3,1.8.3,7.4,1.8.6,2.2-2.7,0,1.1,0,1.4,0,2.8-.1,1.5,2,2.1,2.2.9.3-1.4.2-2.4.5-3.9-1.1.1-2.5.2-3.5-.2-.3-.7-.7-2.6,0-3,.8-.4,4.4-.4,4.8.7h0c.4,1.2,1.1,2.8,1.5,3.2.5-1.2.9-2.5,1.2-4-1.1,0-2.3,0-3-.2-.1-.3-.3-.9-.4-1.4,0,1.7-3.2.9-4.2.7-.6-1.4-.8-3.5,1.6-3.3.2-1.7.4-3.1.5-4.6-.1,1.8-.3,3.1-.5,4.6,1.4,0,2.8,0,2.7,1.3.1-.5.3-.6.8-.7-.2,0-.4-.1-.6-.2-2.4-3.5,6.2-3.4,4.7-.4h.3c2.1-5.3,2.8-7.7,2.5-13.8Zm-23.5-26.3c.7.3,1.3.6,1.8,1-.7-.4-1.3-.7-1.8-1Zm11.9,15.1c-.9-3.1-2.1-5.6-3.3-7.6,1.9,2.6,2.9,5.4,3.7,8.9-.1-.5-.2-.9-.4-1.3Zm1.7,19.8c.1-5.5,0-11.9-1.3-18.1,1.4,5.7,1.6,12.7,1.3,18.1Z"/><path class="cls-8" d="m162.5,123.6c-.1-.2-.2-.6-.3-.9,0,1-.1,2.2,0,2.5.3.5.9.5,1.4.3.2,0,.4-.3.5-.6h0c0-.4,0-.7,0-1-.6,0-1.3,0-1.7-.2Z"/><path class="cls-8" d="m161.1,124.1c-.6.1-1.8.3-2.6.2,0,.2,0,.3,0,.4,0,.1,0,.3,0,.4,0,.6,0,1.3.4,1.7.5.4,1.3.2,1.7-.3.3-.3.5-1.4.6-2.4,0,.1-.1.2-.2.2Z"/><path class="cls-8" d="m149.7,66.1c.4-2.9-3.7-1.6-5-.4h0c-14.1-2.4-24.3,11.3-24.7,25.5-1.9,5-3.3,11-1.1,15.9.4-4.1.9-8.2,2.1-12,0-.3.4-1.9.9-2.8,0,0,0,0,0,0,.2-.7.5-1.3.7-1.9-.2.5-.4,1.1-.5,1.6.2-.2.3-.4.5-.4,0-.2,0-.3,0-.4.5-.1,2.5-.6,3-.7,2.7-5.8,6.5-12.7,12.6-15.6,9.5-.8,4.7-5.4-1.8-2.4,1.5-1,3.2-1.1,4.6-1,1.9.2,7.3-1.3,4.6-2.7,1.2.6,2.5,0,1.7-1.3.3,1.2,1.7.9,2.2,0,0-.4.2-.8.4-1.2Zm-24.2,18.1c-.3.6-.7,1.2-1,1.8.7-1.4,1.4-2.5,2.2-3.9-.4.7-.9,1.4-1.2,2.1Zm5.4-7.6c-1.5,1.7-2.9,3.5-4.1,5.4,1.7-2.6,3.1-4.5,5.2-6.6-.5.5-.8.9-1.2,1.2Zm1.3-1.4c1.4-1.4,2.7-2.3,3.9-2.9-1.4.8-2.9,2-3.9,2.9Zm12.2-7.1c.4.1.8.3,1,.4-.4-.1-.7-.3-1-.4Z"/><path class="cls-8" d="m131.5,125.2c-.1-.2-.3-.7-.3-1.1.2,2.2.6,3.9,1.7,3.5,1.4-.5,1.5-1.3,1.6-2.4h0c-.8.1-2.2.3-2.9,0Z"/><path class="cls-8" d="m118.9,114.4c2.4-.4,5.7.3,3.5,3.2-1.1.2-3.2.4-4.2,0-.1-.3-.3-.7-.3-1.1-.3,2.7-.7,4.7-1.2,6.2.6.3,1.3.4,1.7.8.2-.1.3-.1.3-.1l1.3.4c1.8,5.1,3.8,1.2,2.7-2.2-1.1.1-2.7.3-3.9-.1-.3-.7-.7-2.6,0-3,2.2-.7,6.7,0,4.2,3,.2,7.1,4,10.2,2.6-.2-.4,0-.8,0-1.1-.2-1.3-2.7,1.3-2.7,3.1-2.1,0-2.7-.3-4.4.2-7.5-.2,2.7-.5,5.2,0,7.7.5.3,0,1.8-.2,2-.5,0-1.3.2-2,.1.2,1.1.5,2.6,1.1,4.8,1,3.2,2.2-.9,1.4-2.3-.1,0-.3,0-.4-.1-.2-.5-.6-1.9,0-2.2.6-.2,3-.4,3.6.5.3,1.7-1,2-2.6,1.9.3,3.6,1.4,4.5,2,3.8-.1-.9.2-1.5.6-1.5,0-.8,0-1.5,0-2.3h.1c-.2-1.4,3.2-1.2,3.9-.3.1.3,0,1.8-.5,1.8.1.5.2,1.1.4,1.6.5.5,1.5,0,1.4-.8,0-.5-.2-1.1,0-1.6t0,0c.3-.8,2.9-.7,3.7-.1,0-.3,0-.6,0-1h0c-6.4-3.7-13.3-10.1-13.3-18.2-3.6-1-3.5-4.9-3.7-8-2.5-.3-1.9-.5-2-1.6-1.5,6.6-2.5,12.3-2.2,18.8Z"/><path class="cls-4" d="m122.5,91.3s.3,2.7.6,5.8c-2.5-.3-1.9-.5-2-1.6h0c.3-1.3.6-2.5,1-3.7.2-.2.3-.4.5-.4v-.2Z"/><path class="cls-10" d="m121.6,218.3l.2.4s-.5,4.7-.5,5.9c-3.1-1-3.1-3.8-3.9-4.4,1.6-.8,2.9-1.5,4.2-2Z"/><path class="cls-11" d="m117.8,85.6h2.9c-.4,7-4.9,14.6-1.8,21.5,0-.2,0-.4.1-.7-.2,2.6-.3,5.3-.2,8-.4,0-.6,0-.8.2-.6,2.2-.6,6.4-1.4,7.9.6.3,1.3.4,1.7.8-.9.6-4.1,3-5.6,10.7-1.8-.2-6.5-3.1-7.4-3.9-3.3-9.2,6.5-27.5,8.2-38.6-1.4-.3-3.8-.4-4.7-1.3-.2-1.6,0-6.9,1.5-7.6h.2l.4,2.9h6.9Zm-5.7,1.3l3.9-.9c-1.6,0-3,.5-3.9.9Z"/><path class="cls-6" d="m163.1,15c-12.7,0-38.3-.2-51-.3-.5,20.2-1.3,47.8-1.8,67.9h.2l.4,2.9c2,0,7.8,0,9.8,0,2.7-12.7,11.8-21.8,24-19.8h0c1.3-1.3,5.3-2.6,5,.3,1.5-2,5.2-1.9,6.6,0,10.9-.6,16.3,10.7,18.9,19.6,2.7,0,8.1,0,10.8,0,.5-1.8.8-5.4.7-7.3,0-18.8,0-44.6.2-63.4l-23.8-.2Z"/><path class="cls-6" d="m116,86c-1.6,0-3,.5-3.9.9l3.9-.9Z"/><polyline class="cls-3" points="110.6 82.7 110.3 82.7 111 58.7"/><line class="cls-3" x1="135.6" y1="66.5" x2="135.8" y2="58.7"/><line class="cls-3" x1="162.6" y1="58.7" x2="135.8" y2="58.7"/><polyline class="cls-3" points="186.8 58.7 186.8 78.5 186.8 82.4 175.7 82.4"/><line class="cls-3" x1="162.6" y1="67.3" x2="162.6" y2="58.7"/><polyline class="cls-3" points="186.8 37.6 186.8 58.7 162.6 58.7 162.9 37.5"/><polyline class="cls-3" points="163.1 15 186.9 15.2 186.8 37.6 162.9 37.5"/><polyline class="cls-3" points="136.6 14.9 163.1 15 162.9 37.5 136.2 37.4"/><polyline class="cls-3" points="136.2 37.4 135.8 58.7 111 58.7 111.5 37.3"/><polygon class="cls-3" points="136.2 37.4 111.5 37.3 112.1 14.7 136.6 14.9 136.2 37.4"/><polyline class="cls-3" points="186.8 82.4 186.1 85.8 184.3 85.8 177.7 85.8"/><line class="cls-3" x1="174.1" y1="82.4" x2="175.7" y2="82.4"/><polyline class="cls-3" points="120.7 85.6 117.8 85.6 110.9 85.5 110.6 82.7 110.5 81.9 121.6 82"/><line class="cls-3" x1="177.7" y1="85.8" x2="175.3" y2="85.8"/><path class="cls-2" d="m187.1,78.5s2.2,2.8,2.4,3.7c.2,1,.9,6.4.4,7.3-.5.8-2.1,2.9-2.1,2.9h-1.7"/><path class="cls-2" d="m185.1,90.3c.2.7.4,1.5.6,2.3,2.4,8.1,8.4,22.6,9.2,26.6.8,4.4-.3,11.3-.7,11.7s-9.9,3.9-12.4,3.4"/><path class="cls-2" d="m185.4,123.1c.2.3.5.4.7.6"/><path class="cls-2" d="m179.4,93.5c2.5,9.6,3,21.9,3.4,23.8.3,1.6,1.4,4.4,2.6,5.7"/><path class="cls-2" d="m178.4,123.5c1.2-.3,5.7-1.2,7-.4h0"/><path class="cls-2" d="m178.1,123.6s.1,0,.3,0"/><path class="cls-2" d="m179.4,93.5s-2.6-6.4.9-7.1c1.1-.2,2.6-.4,3.9-.4s1.8.1,2.3.4"/><path class="cls-2" d="m113.6,91.6c.5.1.8.3,1,.5"/><path class="cls-2" d="m110.3,82.7s-1,.9-1,1.4-.9,5.7-.5,6.3c.6.5,1.8.8,2.9.9.6.1,1.3.2,1.8.3"/><path class="cls-2" d="m113.6,91.5h0c0,.2,0,.5-.1.7-.9,5.6-7.4,23.3-8.1,27-.7,3.9-.9,10,0,10.8.9.8,5.6,3.8,7.4,3.9,0,0,.1,0,.2,0"/><path class="cls-2" d="m114.5,121.8s1.1.3,2.2.7c.6.2,1.2.4,1.6.7"/><path class="cls-1" d="m117.9,116.3c-.3,2.6-.7,4.7-1.2,6.2"/><path class="cls-2" d="m118.5,111.1c-.1,1.2-.3,2.4-.4,3.5,0,.6-.2,1.2-.2,1.8"/><path class="cls-2" d="m116.9,86.1c1.1,0,2.2.1,3.3.5"/><path class="cls-2" d="m169.3,123.7c.3,0,8.4-.5,8.4-.5,0,0,.3,0,.7.3,0,0,0,0,0,0,1.1.7,3.1,3.1,3.3,10.7,0,.7,0,1.5,0,2.4-5.6,2.6-8.8,3.2-10.5,4.7"/><path class="cls-2" d="m120.1,123.6h-.1s-1.3-.4-1.3-.4c0,0-.1,0-.3.1-.9.6-4.1,3-5.6,10.7,0,.3-.1.7-.2,1,6.2,2.5,8.7,2.3,12.3,6.5,0,0,0,0,.1.1"/><path class="cls-2" d="m131.5,169.8c.7-5.9.4-7.3.4-7.3-1.7-8.2-2.4-11.9-7-20.8-.6-1.1-1.2-2.2-1.9-3.5"/><path class="cls-2" d="m184.4,213.4c-.3-.5-.5-1.1-.7-1.6-.9-2-1.7-3.8-2.5-5.5-5.2-11.9-6.8-17.4-9.5-29.2-.8-3.5-1.4-6.3-1.9-8.8-.5-2.5-.8-4.7-1-7-.8-9.8.8-16.2,2.5-19.9,1.4-2.9,2.8-4.2,3-4.3"/><path class="cls-2" d="m131.5,169.8l-4.1,15.2s-1.7,6.4-4,14.6c-.4,1.4-.8,2.8-1.2,4.3-.1.5-.3,1-.4,1.5-.3,1-.5,1.9-.8,2.9-.3,1.1-.6,2.2-.9,3.2-.6,2.1-1.2,4.2-1.9,6.2-.3.9-.5,1.7-.8,2.5.8.5.8,3.3,3.9,4.4"/><path class="cls-2" d="m121.7,218.6s-.5,4.7-.5,5.9c-.4,1.9-2,9.2-1.6,13.3.4,4.1,5.4,25.7,5.2,34.5,0,.2,0,.3,0,.5"/><path class="cls-2" d="m140.7,220.9s-3.4,5.5-3.1,6.6c.3,1,.3,8.9,0,13.5-.3,4.3-2.9,19.6-1.9,31.8,0,.8.1,1.6.2,2.4,0,0,0,.1,0,.2"/><path class="cls-2" d="m181.1,221.3s.7,1.9,1.1,8.9"/><path class="cls-2" d="m163.5,227.2c1.4,2.8,3.6,6.8,4.8,8,0,0,.5,6.4,1.6,10.6,1.2,4.8,6,11.5,8.2,19.2.4,1.5.8,3.1.9,4.7"/><path class="cls-2" d="m162,224.3s.6,1.2,1.4,2.8"/><path class="cls-2" d="m187.3,267.7c0-.9-.1-1.8-.2-2.7-.6-9.1-1.1-20.3-1.6-25.4-.5-5.5-1.5-7.3-3.3-9.4"/><path class="cls-2" d="m193.1,282.6c-1-2.5-3-5.5-3.3-9-.4-4.4-.6-6.2-2.7-8.5"/><path class="cls-2" d="m178.2,264.8s0,0-.2.1c-.5.4-1.8,1.6-1.6,3.7.2,2.5,1.4,8.5-1.9,14.1-.1.2-.2.4-.3.6-.6,1.3-.7,2.9-.6,3.8,0,.2,0,.4,0,.5.3.8,2.5,3.9,8.4,3,5.5-.8,11.2-3.1,11.6-5.7h0c0-.2,0-.5,0-.7-.1-.5-.3-1.1-.5-1.6"/><path class="cls-2" d="m173.6,287.2l-.7.8.3,3.1s4.8,3.3,11.2,2.3c6.4-1,9.3-4.3,9.3-4.3v-4.1"/><path class="cls-2" d="m135.4,272.8s.1,0,.3,0c.7,0,2.3.3,2.5,1.2.2,1,1.9,10.8,1.4,13.7,0,.4-.2.7-.3.8-.3.2-.8.5-1.7.8-2.9,1-8.9,2.3-13.2,1.9-5.5-.5-10.7-1.1-11.6-2.3,0-.2,0-.4,0-.7,0-1.7.9-4.9,4.2-7,1.1-.7,2.5-1.2,4.2-1.5,1.4-.3,3-.3,4.9-.2,0,0,1.9.1,4.2.9,3.3,1.1,7.3,3.6,7.4,8.9h0"/><path class="cls-2" d="m130.2,280.5h0c0-.1,2.5-4.5,2.5-4.5,0,0,0-.1.1-.3.2-.7.8-2.4.3-3.5-.6-1.4-2.8-2.8-4.1-2.8-1,0-3.4.5-4.1,2.8,0,.2-.1.4-.1.5-.1.7,0,1.6.1,2.6-1.1,1.5-3.7,4.1-3.7,4.1"/><path class="cls-2" d="m124.9,272.2s0,0-.1,0c-.4.3-1.4,1.1-2,2.4-.7,1.5-5.8,6.5-5.8,6.5"/><path class="cls-2" d="m132.8,275.8s1.9-.2,3.1-.6c.4-.1.8-.3.9-.5"/><path class="cls-2" d="m112.9,288.2l-.9,1.2.4,2.5s7.4,3,13.4,2.5c6-.5,13.5-3.1,13.5-3.1,0,0,.9-1.2.4-3.6"/><path class="cls-2" d="m188.8,279c2.6,1.2,4.1,3.2,4.4,3.5,0,0,0,0,0,0"/><path class="cls-2" d="m174.2,283.4s2.7-2.7,6.1-4.2c1.5-.7,3.2-1.2,4.8-1.1,1.4,0,2.6.5,3.7,1"/><path class="cls-2" d="m180,278.5s1.2-2.6.5-4.9c-.7-2.4.6-5.1,4.2-5,3,0,3.8,2.5,3,4.6-.2.4-.4.8-.6,1.1.2,1.6,1.4,4.6,1.7,4.8,0,0,0,0,0,0"/><path class="cls-2" d="m180.5,273.5c-.9-1.1-1.5-2.6-1.5-3.8s.9-2.8,3.2-3.2c1.8-.3,3.5.3,4.7,1.3,1.6,1.4,2.2,3.5.8,5.2"/><path class="cls-2" d="m111.2,87.4s.4-.2,1-.5c.9-.4,2.3-.9,3.9-.9s.7,0,1,0"/><path class="cls-1" d="m183.9,216.5c.2-1,.3-2,.5-3.1"/><path class="cls-2" d="m117.4,220.2c1.6-.8,2.9-1.5,4.2-2,2.3-.8,4.4-1,7.5-.5,3.4.6,6.7,1.7,10,2.7.5.2,1.1.3,1.6.5.9.3,1.7.5,2.6.8,2.9.8,5.9,1.4,8.9,1.9,2.2.3,4.5.6,6.7.7,1,0,2,.1,3,.1,2.3,0,4.7,0,7-.2.8,0,1.5-.1,2.3-.2.9-.1,1.8-.2,2.6-.4h0c2.5-.4,4.9-1,7.1-2.2,1.8-1,2.4-2.5,2.7-4.3,0-.2,0-.4.1-.6"/><path class="cls-2" d="m164.2,124.8c0-.4,0-.7,0-1h0"/><path class="cls-2" d="m131.1,126c-.4,0-.7.6-.6,1.5.3,1.8,2.1,4.8,7.5,7.9,4.9,2.9,10.7,3.1,18.3-.9,5.9-3.1,7.7-6.6,7.9-9.8"/><path class="cls-2" d="m131.9,162.4c12.2,2.7,25.1,2.8,36.8-1.2"/><path class="cls-2" d="m131.5,169.8c12.5,4.2,27.3,2.1,38.3-1.6,0,0,0,0,.1,0"/><path class="cls-2" d="m137.6,227.5c10.8.7,15.4,2,25.9-.4h0"/><path class="cls-1" d="m126.7,104.2c0,.3,0,.6,0,.9,0,.8.2,1.7.4,2.6.3,1.3.6,2.5,1,3.6.6,1.5,1.3,2.8,2.4,4.1.6.7,1.2,1.4,2,2.1.3.2.5.5.8.7,2.4,2.1,4.5,4,6.8,5.1,3.8,1.9,8,1.6,14.6-3,1.3-.9,2.8-2.1,4.3-3.4.1-.1.3-.2.4-.3"/><path class="cls-1" d="m165,107.9c-.5,2.3-1.6,4-2.8,5.5-1.1,1.5-2.4,2.6-3.3,3.5,0,0-.1.1-.2.2"/><path class="cls-1" d="m136.2,72.2c.9-.5,1.7-.9,2.4-.9.2,0,.4,0,.6,0,1.5,0,4.4,0,4.2,1.4-.3,1.7-4.2,1.6-5.4,2-2,.8-4.7,3.1-6,4.8-1.7,2-3,3.8-4.2,6.1-.9,1.7-1.7,3.2-2.4,4.7-1,2.3-1.7,4.5-2.3,7.5-.6,3.8-.9,8.9-1,16.8"/><path class="cls-1" d="m132.2,75.2c1.1-.9,2.5-2.1,3.9-2.9"/><path class="cls-1" d="m126.8,82c1.2-1.9,2.5-3.7,4.1-5.4.1-.2.2-.3.4-.4.2-.2.5-.5.8-.8"/><path class="cls-1" d="m124.5,86c.3-.6.6-1.2,1-1.8.4-.7.8-1.4,1.2-2.1"/><path class="cls-1" d="m123.3,88.6c0-.1.1-.3.2-.4"/><path class="cls-1" d="m121.9,92.1c.2-.7.5-1.3.7-1.9"/><path class="cls-1" d="m121,95c.3-1,.6-1.9.9-2.8"/><path class="cls-1" d="m118.9,114.5h0c0-2.8,0-5.5.2-8.1.3-3.9.9-7.7,1.9-11.3"/><path class="cls-1" d="m122.6,121.1c0,.1,0,.2,0,.3,0,.6.2,1.3.3,1.9.2,1,.1,2.4-.8,2.6-.9.2-1.6-.8-1.9-1.7,0-.2-.1-.4-.2-.6-.2-.7-.4-1.4-.5-2.1,0,0,0-.2,0-.3"/><path class="cls-1" d="m164.7,123.6h0c0,.7,0,3,.4,3.2.7.4.9-.5,1.3-3.3.2-1.3.4-1.3.5-2.6"/><path class="cls-1" d="m154.4,73.5c-2.1-1.1-2.7-1.4-4.9-1.6-1.2-.1-3.9-1-4.1.8-.2,2,3.6,2.7,5,3.2,5.4,2.1,9.5,6.8,12.3,12.1.6,1.2,1,2.6,1.4,4.1.2,1.1.4,2.2.5,3.4.4,3.4.4,7,.4,10.3,0,.7,0,1.5,0,2.2,0,0,0,0,0,0,0,4.5.3,8.7-.1,13.2"/><path class="cls-1" d="m166.8,90c-.1-.5-.2-.9-.4-1.3-.9-3.1-2.1-5.6-3.3-7.6-2.2-3.4-4.7-5.4-6.8-6.5-.7-.4-1.3-.7-1.8-1"/><path class="cls-1" d="m168.2,108.4c.2-2.7.2-5.3,0-8.7-.2-3.1-.6-6.3-1.3-9.4"/><path class="cls-1" d="m167.7,113.5c.2-1.7.4-3.1.5-4.6"/><path class="cls-1" d="m144.4,68.1c.4.1.8.3,1,.4"/><path class="cls-1" d="m121.1,95.5c-.9,3.7-1.5,7.6-2,10.8,0,.2,0,.5-.1.7-2-4.4-1.1-9.7.5-14.3.2-.6.4-1.1.6-1.7,1.9-5.1,4.6-9.9,7.8-14.3,2-2.6,4.2-5,6.9-6.8,2.1-1.3,5.5-2.8,8.1-2.3.5.1.9.2,1.3.3"/><path class="cls-1" d="m145.4,68.5c2.7,1.4-2.7,2.9-4.6,2.7-.3,0-.9,0-1.6,0-.8.1-1.8.4-3,1,0,0,0,0-.1,0-1.2.6-2.6,1.5-3.9,2.9l-.2.2c-.5.5-.8.9-1.2,1.2-1.5,1.6-2.2,2.5-3.5,4.5-.2.3-.4.6-.6.9,0,0,0,0,0,0-.5.7-.9,1.4-1.2,2.1-.3.6-.7,1.2-1,1.8s-.6,1.3-1,2.1c0,.1-.1.3-.2.4-.2.5-.5,1.1-.7,1.7-.2.5-.4,1.1-.5,1.6-.4,1.2-.7,2.4-1,3.7"/><path class="cls-1" d="m169.6,120.8c-.2,1.1-.3,1.9-.4,2.8,0,.3,0,.7-.2,1-.2,1.2-2.3.5-2.2-.9.1-1.4,0-1.7,0-2.8h0"/><path class="cls-1" d="m152.4,69.5c2.8.8,6.8,2.5,8,3.3,6.3,4.3,9.3,11.6,10.6,21.2.9,6.4.6,10.9-.5,17.8h0"/><path class="cls-1" d="m167.7,113.6s0,0,0-.1c.2-1.5.4-2.7.5-4.6,0-.2,0-.4,0-.6,0-.5,0-1,0-1.6,0-4.8-.1-11-1.3-16.4,0-.1,0-.2,0-.4-.6-2.9-1.6-5.6-2.9-7.7-.2-.4-.5-.8-.8-1.2-1.9-2.5-5-5.1-6.8-6.5-.5-.4-1.1-.7-1.8-1,0,0,0,0-.1,0-2.2-.9-4.9-1.6-4.9-1.6-2-1.3-3.1-2.8.4-2.8.6,0,1.4.2,2.4.4"/><path class="cls-1" d="m147.1,67.2c-.3-.5-.7-.9-1-1-.4-.2-.8-.3-1.3-.4-1.5-.4-3.4-.4-5.3-.3-.9,0-2.3.5-3.8,1.1-2.4,1-5.1,2.5-6.3,3.4-2.3,1.9-5.7,6-7.7,12.1-.4,1.1-.7,2.3-.9,3.6-.4,1.7-.6,3.6-.7,5.5"/><path class="cls-1" d="m144.1,68c0,0,.2,0,.3,0,.3.1.7.3,1,.4h0c.4.1.9.3,1.1.2.5-.1.8-.2.9-.7,0-.1,0-.2,0-.3,0-.1-.1-.3-.2-.5"/><path class="cls-1" d="m173.7,117.6s0,0,0,.1c-.3,1.4-.7,2.8-1.2,4-.4-.4-1.1-2-1.5-3.3-.1-.4-.2-.7-.2-.9,0-.1,0-.2,0-.3"/><path class="cls-1" d="m152.8,69.8c-.2,0-.3-.2-.4-.3t0,0c-.4-.3-.8-.7-.8-1,0-.2,0-.4.2-.6.6-.6,2.5-.7,4.1-.6.3,0,.6,0,.9.1,6.2.8,11.2,6.5,13.6,12.1,2.5,5.8,4.2,12.6,4.4,19,.1,3.2,0,8.3-.5,13.3"/><path class="cls-1" d="m125.2,118.8s0,0,0,0c0-.3,0-.6,0-1-.3-2.8-.3-2.8-.4-5.7-.1-2.7-.1-5.4.2-8.1,0-.4.1-.8.2-1.1"/><path class="cls-1" d="m128,123.6s0,0,0,0c0,.2.1.5.2,1.1.3,2.2-1.1,3.4-1.6,1.2-.5-2.2-.8-3.6-1.1-4.8,0-.1,0-.2,0-.3"/><path class="cls-1" d="m127.7,111.5c-.1,1.8-.2,3.4-.3,5.1,0,.8,0,1.6,0,2.4v.2"/><path class="cls-1" d="m131.2,124.1c.2,2.2.6,3.9,1.7,3.5,1.4-.5,1.5-1.3,1.6-2.4"/><path class="cls-1" d="m140,124.5c0,0,0-.1,0-.2,0-.3,0-.6,0-1"/><path class="cls-1" d="m161.3,124c.1-.7.2-1.3.2-1.6.4-2.8.6-3.5.8-6.4"/><path class="cls-1" d="m158.5,124.7c0,.1,0,.3,0,.4,0,.6,0,1.3.4,1.7.5.4,1.3.2,1.7-.3s.5-1.4.6-2.4"/><path class="cls-1" d="m158.8,118c0,1.1-.1,2.5-.2,3.8h0"/><path class="cls-1" d="m158.9,117c0,.2,0,.3,0,.5"/><path class="cls-1" d="m130.8,121.6s0,0,0-.1c-.2-2.1-.5-4.2-.5-5.9"/><path class="cls-1" d="m128.6,123.9c.5,3.9,1.4,4.2,2,3.6.3-.3.6-1,.6-1.5,0-.8,0-1.5,0-2.3,0-.1,0-.3,0-.4"/><path class="cls-1" d="m127.7,111.5c-.4,2.1-.4,3.7-.3,5.1,0,1,.2,1.8.3,2.6h0"/><path class="cls-1" d="m122.9,121.3c0,0,0,0,0,.1.2,2.2.5,3.8,1.1,5.6.2.6.4.9.7,1,.9.3,1.8-3.4.8-6.8"/><path class="cls-1" d="m147.1,66.8c0,.1,0,.3,0,.4h0c0,.2.1.4.2.5.1.1.2.2.4.3.5.2,1,0,1.3-.4.1-.1.2-.2.3-.3.2-.3.3-.6.4-1,0,0,0-.1,0-.2,0-.5,0-1-.2-1.3-.3-.4-.9-.5-1.4-.4-1.2,0-2.4.6-3.3,1.3"/><path class="cls-1" d="m151.6,68.5h0c-.7-.2-2.1-.6-2.3-1.2,0,0,0-.1,0-.2,0-.3.2-.7.4-1,.4-.6,1.1-1.1,1.7-1.2,1.1-.2,2.3-.3,3.3,0,.7.2,1.3.7,1.7,1.2.3.4.4.8.5,1.2"/><path class="cls-1" d="m164.9,121.2c0,0,0,0,0-.1.3-2.1.5-4.5.8-6.6,0,0,0-.2,0-.2"/><path class="cls-1" d="m162.3,113.4v2.6c0,1.7,0,3.3,0,5.1,0,0,0,.2,0,.4,0,.3,0,.7,0,1.1,0,1-.1,2.2,0,2.5.3.5.9.5,1.4.3.2,0,.4-.3.5-.6h0c.1-.3.2-.7.3-1.1,0,0,0-.1,0-.2"/><path class="cls-1" d="m136.3,124.4c0-1.1.1-2.2,0-3.3"/><path class="cls-1" d="m136.3,125.3c0-.3,0-.6,0-.9"/><path class="cls-1" d="m134.5,124.9c0,0,0,.2,0,.3,0,.3.1.6.2.8,0,.3.1.5.3.8.1.2.3.2.6.2.5,0,.9-.4.8-.9,0-.2,0-.4,0-.6"/><path class="cls-1" d="m133.1,118.3c.3,1.5.6,3,1,4.5,0,0,0,0,0,0"/><path class="cls-1" d="m158.4,121.9s0,0,0,0c.2-1,.3-2,.5-3.9,0-.2,0-.3,0-.5"/><path class="cls-1" d="m154.7,120.2c-.2,1.5,0,5.8,1.3,5.7.3,0,.9.1,1.2,0,.5,0,.7-1.2.8-1.8,0,0,0-.1,0-.1"/><path class="cls-1" d="m131,123.3c.2-.4.3-1.2.2-1.4,0-.2-.2-.3-.5-.4-.9-.4-2.7-.3-3.2-.1,0,0-.1,0-.1.1-.3.4,0,1.6.2,2.1.1,0,.2,0,.4.1.2,0,.4,0,.6,0,.8,0,1.6,0,2.2-.1,0,0,.2-.1.3-.3"/><path class="cls-1" d="m122.9,121.4h0c.4,0,.8-1.9.6-2.3-.4-1.1-4-1.1-4.8-.7-.7.3-.3,2.2,0,3,.2,0,.4.1.7.2,1,.2,2.3,0,3.2,0,.1,0,.2,0,.3,0Z"/><path class="cls-1" d="m118.9,114.4c-.3,0-.5.1-.7.2,0,0,0,0,0,0-.4.3-.4,1-.2,1.8,0,.4.2.9.3,1.1,1,.4,3.1.3,4.2,0,.4,0,.8-1.9.6-2.3-.1-.3-.4-.5-.8-.6-.9-.3-2.4-.4-3.3-.2Z"/><path class="cls-1" d="m170.9,118.4c-.4-1.1-4-1.1-4.8-.7-.7.3-.3,2.2,0,3,.2.1.5.2.9.2.8.1,1.9,0,2.6,0,.2,0,.5,0,.7,0,.4,0,.8-1.9.6-2.3Z"/><path class="cls-1" d="m125.1,118.7c-.3,0-.6,0-.8.2-.5.2-.2,1.7,0,2.2.3.1.7.2,1.1.2,0,0,0,0,0,0,.7,0,1.4,0,1.9-.1,0,0,0,0,0,0,.3,0,.6-1.4.5-1.7,0-.1-.1-.2-.2-.3,0,0-.2-.1-.3-.2-.6-.3-1.6-.3-2.4-.3Z"/><path class="cls-1" d="m134.1,122.8c-.9-.2-2.3,0-2.7.1s-.3.4-.3.7c0,.1,0,.3,0,.4,0,.4.2.9.3,1.1.7.3,2,.1,2.9,0,0,0,.1,0,.2,0s0,0,0,0c.3,0,.5-1.5.4-1.8-.1-.3-.5-.4-1-.5Z"/><path class="cls-1" d="m140,124.3c-.7-.6-2.9-.5-3.5-.2-.1,0-.2.2-.2.3t0,0c0,.2,0,.6,0,.9h0c0,.4.2.8.3,1,.8.3,2.3.1,3.1,0,.3,0,.5-1.5.4-1.8,0,0,0-.1-.2-.2Z"/><path class="cls-1" d="m158.4,121.9c-.2,0-.4,0-.5.1-.5.3-.2,1.7.1,2.2t0,0c.1,0,.3,0,.5.1.8.1,2,0,2.6-.2,0,0,.1,0,.2-.2h0c.2-.4.3-1.3.2-1.6-.3-.6-1.9-.7-2.9-.6-.1,0-.2,0-.3,0Z"/><path class="cls-1" d="m164.9,121.2c-.9-.2-2.1,0-2.4.1,0,0-.1,0-.2.1-.2.2-.1.7,0,1.1,0,.4.2.7.3.9.4.2,1.1.2,1.7.2.1,0,.2,0,.3,0,.1,0,.2,0,.3,0,.3,0,.7,0,.9-.1.3,0,.6-1.4.4-1.7-.1-.3-.6-.5-1.2-.6Z"/><path class="cls-1" d="m174.3,111.7s0,0,0,0c-1.2-.3-3-.2-3.5,0,0,0-.2,0-.2.1-.5.5-.2,1.5,0,2.2.2,0,.4.1.6.2.8.2,2,.2,2.8.2.3,0,.6,0,.8,0,.2,0,.4-.3.5-.6.2-.4.3-1,.2-1.2-.1-.4-.6-.6-1.2-.8"/><path class="cls-1" d="m170.4,114.9c0,.2,0,.3,0,.5"/><path class="cls-1" d="m170.3,116.1c0,.5.3,1.1.4,1.4,0,0,0,0,0,0,.7.3,1.9.3,2.9.2.5,0,.9-.1,1.2-.2.4,0,.8-1.9.6-2.3-.2-.4-.8-.7-1.5-.9s-2.1-.3-2.8-.2c-.2,0-.4,0-.5.1-.2,0-.3.3-.3.6"/><path class="cls-1" d="m170.3,115.4c0,.2,0,.4,0,.7"/><path class="cls-1" d="m167.7,113.5c-.7,0-1.3.2-1.6.3-.2.1-.3.3-.4.7-.1.7.2,1.8.4,2.3,1,.4,2.9.3,3.9.1.2,0,.3-.4.3-.8,0,0,0,0,0,0,0-.4,0-.8,0-1.1,0,0,0,0,0,0,0-.3,0-.5,0-.6-.3-.7-1.5-.8-2.6-.7Z"/><line class="cls-1" x1="160.8" y1="95.7" x2="162.4" y2="95.8"/><line class="cls-1" x1="160.6" y1="99.9" x2="162.1" y2="100"/><line class="cls-1" x1="122.4" y1="91" x2="122.5" y2="91.3"/><line class="cls-1" x1="145.3" y1="98.5" x2="145.6" y2="98.5"/><line class="cls-1" x1="145.1" y1="94.6" x2="145.2" y2="94.6"/><line class="cls-1" x1="140.2" y1="94.6" x2="140.4" y2="94.6"/><line class="cls-1" x1="139.8" y1="98.7" x2="140.2" y2="98.7"/><line class="cls-1" x1="162.9" y1="91" x2="162.9" y2="91.3"/><line class="cls-1" x1="140.3" y1="90.5" x2="140.5" y2="90.6"/><path class="cls-1" d="m158.7,126.2c-.1-1.3-.2-1.3-.2-1.5s0-.2,0-.4v-.2"/><path class="cls-1" d="m138,105.8c.8,2.1,2.6,2.8,4.5,2.7,1.2-.1,2.4-.6,3.4-1.2"/><line class="cls-1" x1="162.7" y1="93.3" x2="163.8" y2="93.3"/><ellipse class="cls-1" cx="133.1" cy="97.1" rx="1.4" ry="2.4"/><path class="cls-1" d="m124.5,93.1c0,.7.2,4.7.4,7.6.1,1.6,1.5,2.8,3.1,2.8,2.7,0,4.8,0,7.2-.2,1.2,0,2.3-1,2.4-2.2.3-2.8.6-5.1.9-8.7-2.4-.6-9.2-.7-14,.6Z"/><path class="cls-1" d="m124.5,93.1h0"/><path class="cls-1" d="m122.5,91.4v-.2s.3,2.7.6,5.8c0,.2,0,.4,0,.7,0,1,.2,2,.2,3,0,1.2.6,2.4,1.5,3.2.5.5,1.2.9,1.9,1.1.5.2,1.1.3,1.6.3,2.8,0,4.8,0,7.3-.2,1.7,0,3.6-1.5,3.8-3.1.1-1.2.2-2.2.4-3.3.1-1.3.3-2.6.4-4.1.1-1.2.2-2.5.3-4"/><path class="cls-1" d="m122.5,91.4c-.2,0-.3.2-.5.4,0,0-.1.2-.2.3,0,0,0,0,0,0-.5,1-.8,2.6-.9,2.8,0,0,0,0,0,0,0,.2,0,.3,0,.4h0c.1,1.1-.5,1.3,2,1.6h0"/><path class="cls-1" d="m140.4,94.6h4.7"/><path class="cls-1" d="m140.2,98.7c1.7,0,1.8,0,5.1-.2"/><path class="cls-1" d="m122.4,91h0s2.3-.6,2.3-.6l.7-.2c4-.9,8.2-1,12.2-.2l2.7.5"/><path class="cls-1" d="m154,94.6c-.8,0-1.4,1.1-1.4,2.5s.6,2.5,1.4,2.5,1.4-1.1,1.4-2.5-.6-2.5-1.4-2.5Z"/><path class="cls-1" d="m160.9,93h0c0,.5,0,1.5-.1,2.7,0,1.3-.1,2.8-.2,4.2,0,.3,0,.5,0,.8-.1,1.6-1.5,2.8-3.1,2.8s-2.4,0-3.5,0c-1.3,0-2.5,0-3.8-.1-1.3,0-2.3-1-2.4-2.2-.3-2.8-.6-5.1-.9-8.7,1.6-.4,4.2-.7,7.2-.5,2.1.1,4.5.4,6.8,1.1"/><path class="cls-1" d="m162.9,91.4v-.2s-.3,2-.5,4.6c-.1,1.3-.2,2.8-.3,4.1,0,.3,0,.5,0,.8-.2,2.6-2.4,4.6-5.1,4.6-1.6,0-2.9,0-4.3,0-1,0-2,0-3-.1-.6,0-1.3-.2-1.9-.6-1-.6-1.8-1.5-1.9-2.5-.1-1.2-.2-2.4-.4-3.5-.1-1.2-.2-2.5-.4-3.9-.1-1.2-.2-2.5-.3-4"/><path class="cls-1" d="m162.9,91c.3.2.8.6,1.2,1.1.7.6,1.2,1.3,1.3,1.3-.3,1.4-.3,1.9-.8,2.1-.4.2-1,.2-2.2.4"/><path class="cls-1" d="m162.9,91l-.7-.2c-5.2-1.5-10.7-1.7-15.9-.5l-1.2.3"/><path class="cls-1" d="m136.9,112c1.5.8,3.7.9,6,.8,4.4-.3,9.2-1.8,9.8-2.5-1.9,3.3-2.5,3.7-4.1,4.9-1.6,1.2-4.8,1.6-6.4,1.3-2.6-.4-3.8-1.8-5-4.2"/><line class="cls-1" x1="137.2" y1="112.3" x2="136.9" y2="112"/><path class="cls-1" d="m156.3,66.1c2-.2,4.2.3,6.2,1.2,2,.9,3.8,2.1,5.1,3.5,2.7,2.8,4.5,6.5,5.9,10.1.2.5.4.9.5,1.4.4,1.1.8,2.2,1.2,3.4,1.5,4.6,2.5,9.2,2.8,14,.3,6.2-.4,8.5-2.5,13.9-.1.3-.2.6-.4.9"/><path class="cls-1" d="m125.8,137.1c.2.4.3.8.5,1.1,3.1,1.1,9.5,2.9,9.3,2.1-.1-.5-1.7-5.6-2.4-7-2.5-1.2-6.1-2.3-9-2.7,0,1.1.6,3.7,1.7,6.5Z"/><path class="cls-1" d="m130.6,135c-.8-.4-1.9-.7-2.8-.9,0,.4.3,1.4.7,2.4,1,.4,3,1,2.9.7,0-.2-.6-1.8-.8-2.2Z"/><path class="cls-1" d="m146.4,138.4c-2.9.7-6.6,2.3-9.2,4,1.1,1.3,4.5,3.7,8.4,5.7,3.4-1.2,9.7-4.2,8.9-4.8-.5-.4-6.2-4.1-8-5Z"/><path class="cls-1" d="m146,141.8c-.9.2-2.1.7-3,1.2.3.4,1.4,1.1,2.7,1.8,1.1-.4,3.1-1.3,2.8-1.5-.2-.1-2-1.3-2.6-1.5Z"/><path class="cls-1" d="m159.5,133.9c-1.5,2-2.8,4.9-3.4,7.2,1.6,0,5.5-.7,9.5-1.8,1.4-2.5,3.7-7.5,2.7-7.4-.7.1-7,1.4-8.8,2Z"/><path class="cls-1" d="m161.5,135.8c-.5.6-.9,1.5-1.1,2.3.5,0,1.7-.3,3-.6.5-.8,1.2-2.4.9-2.3-.2,0-2.2.5-2.8.7Z"/><path class="cls-1" d="m167.1,204.2c-2.7.8-6,2.4-8.5,4.2,1,1.4,4.1,3.8,7.7,5.9,3.1-1.2,8.9-4.3,8.1-4.9-.5-.4-5.7-4.3-7.4-5.2Z"/><path class="cls-1" d="m166.7,207.7c-.9.2-1.9.7-2.7,1.3.3.4,1.3,1.1,2.5,1.8,1-.4,2.8-1.3,2.6-1.5-.2-.1-1.8-1.3-2.4-1.6Z"/><path class="cls-1" d="m157.1,212.5c-2.7.7-6.1,2.3-8.6,4,.9,1.4,4,3.9,7.5,6.1,3.1-1.2,9-4.1,8.3-4.7-.5-.4-5.6-4.4-7.2-5.3Z"/><path class="cls-1" d="m156.7,215.9c-.9.2-1.9.7-2.7,1.2.3.4,1.3,1.2,2.4,1.9,1-.4,2.9-1.2,2.6-1.5-.2-.1-1.8-1.3-2.3-1.6Z"/><path class="cls-1" d="m147.8,203.7c-2.7.5-6.2,1.9-8.8,3.5.9,1.4,3.8,4.1,7.2,6.5,3.2-1,9.2-3.6,8.5-4.3-.5-.5-5.3-4.7-6.9-5.7Z"/><path class="cls-1" d="m147.2,207.2c-.9.2-2,.6-2.8,1,.3.4,1.2,1.2,2.3,2,1-.3,2.9-1.1,2.7-1.3-.2-.1-1.7-1.5-2.2-1.8Z"/><path class="cls-1" d="m134.9,208.7c-2.7.7-6.1,2.3-8.6,3.9.9,1.4,4,3.9,7.5,6.1,3.1-1.2,9-4.1,8.3-4.7-.5-.4-5.6-4.5-7.2-5.4Z"/><path class="cls-1" d="m134.5,212.2c-.9.2-2,.7-2.7,1.2.3.4,1.3,1.2,2.4,1.9,1-.4,2.9-1.2,2.6-1.4-.2-.1-1.8-1.4-2.3-1.7Z"/><path class="cls-1" d="m183.9,216.5c-.6-.5-5.5-3.9-7.1-4.7-2.6.9-5.9,2.7-8.2,4.6,1,1.3,4.3,3.6,8,5.6,2.5-1.1,6.4-3.6,7.3-4.8.2-.3.3-.5.1-.6h0Z"/><path class="cls-1" d="m176.5,215.3c-.8.3-1.9.8-2.6,1.4.3.4,1.4,1.1,2.5,1.7,1-.4,2.8-1.5,2.5-1.6-.2-.1-1.9-1.2-2.4-1.5Z"/><path class="cls-2" d="m118.1,217.7c2.8-1.9,5.5-4.2,4.8-4.7-.3-.2-1.3-.7-3-1.5"/><path class="cls-1" d="m118.1,217.8s0,0,0,0"/><path class="cls-1" d="m122,205.5c.5.3,1.2.6,2,.9.9-.5,2.6-1.8,2.3-1.9-.2-.1-2-1-2.6-1.1-.6.3-.7.3-1.2.7"/><path class="cls-1" d="m181.2,206.2c-.9.7-2.3,1.6-3,2.3.9.9,2.8,2,5.5,3.3"/><path class="cls-1" d="m174,223.5h0c-1.6-1.2-4.8-3.2-6.1-3.9-2.7.8-6.5,2.6-8.9,4.4"/><path class="cls-1" d="m169.1,224.1h0c-.2-.2-1-.7-1.6-1-.9.2-1.6.5-2.4,1.1"/><path class="cls-1" d="m152.3,223.5h0c-.5-.5-4.9-4.5-6.5-5.4-2.2.4-4.4,1.2-6.7,2.3,0,0,0,0,0,0"/><path class="cls-1" d="m121.1,208.4c1,.6,1.8,1,3,1.5,2.9-1.6,8.4-5.2,7.6-5.8-.5-.4-6.1-3.7-7.8-4.4"/></svg>')}`;
export default image;
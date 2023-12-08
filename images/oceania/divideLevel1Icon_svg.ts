/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<?xml version="1.0" encoding="UTF-8"?><svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300"><defs><style>.cls-1,.cls-2,.cls-3,.cls-4,.cls-5{fill:none;}.cls-1,.cls-2,.cls-4{stroke-linecap:round;}.cls-1,.cls-2,.cls-4,.cls-5{stroke:#000;}.cls-1,.cls-4{stroke-linejoin:round;}.cls-2,.cls-3,.cls-5{stroke-miterlimit:10;}.cls-3{stroke:#fff;stroke-width:.8px;}.cls-4{stroke-width:.5px;}.cls-6,.cls-7,.cls-8,.cls-9,.cls-10,.cls-11,.cls-12,.cls-13,.cls-14,.cls-15{stroke-width:0px;}.cls-7{fill:#4d0099;}.cls-8{fill:#231c19;}.cls-9{fill:#1e160d;}.cls-10{fill:#132340;}.cls-11{fill:#cc9280;}.cls-12{fill:#cb9780;}.cls-13{fill:#3246ff;}.cls-14{fill:#f51968;}.cls-15{fill:#fff;}</style></defs><polygon class="cls-7" points="189.5 104.6 196.7 119.3 182 126.6 174.7 111.8 189.5 104.6"/><path class="cls-10" d="m176.5,292.9c4,1.6,8.6,2.3,12.9,1.8h0c.9,0,1.7-.2,2.5-.4,0,0,0,0,0,0,2-.5,4.2-1.1,4.1-3.1,1.7,1.5,1,4.3-.8,5.6-1.8,1.3-4.3,1.5-6.6,1.3-5.3-.4-10.4-2.2-15.2-4.5-2.1-1-4.2-2.3-5.6-4.1-1.4-1.8-2-4.4-.8-6.3h0c.3,1.7,1,3.3,2.1,4.7,1.7,2.2,4.2,3.9,7.2,5.1Z"/><path class="cls-11" d="m196,291.1c.1,2-2,2.6-4.1,3.1,0,0,0,0,0,0v-.3c-1.2-2-2.4-3.9-3.5-5.9-.3-.5-.6-1-.7-1.6,0-.6.2-1.2.8-1.5h0v-.2c1.8.9,3.4,1.7,4.7,2.4,1.4.8,2.8,2.4,2.9,4Z"/><path class="cls-10" d="m191.8,294v.3c-.7.2-1.6.3-2.4.4h0c-3.6-2-8.9-3-12.9-1.8-2.9-1.2-5.4-2.9-7.2-5.1,3.5,1,7.3,1.1,11,1.2,1.5,0,3.2,0,4.1-1.1.6-.8.6-1.9.2-2.8-.4-.9-.9-2.3-1.6-3h0c1.8.8,3.8,1.8,5.5,2.7v.2h-.1c-.6.2-.8.9-.8,1.5,0,.6.4,1.1.7,1.6l3.5,5.9Z"/><path class="cls-11" d="m189.4,294.7c-4.3.5-9-.2-12.9-1.8,4-1.3,9.3-.2,12.9,1.8Z"/><path class="cls-12" d="m167.1,282.2h0c-.7-7.3-6-24.6-9.2-36.9,6.9-.7,12.6-2,17.1-3.4.5,6.2.5,11.3.5,13,0,2.9.5,21.6,1.3,24.2,1.8.8,4,1.8,6.3,3h0c.7.8,1.3,2.2,1.6,3.1.4.9.4,2-.2,2.8-.9,1.1-2.6,1.2-4.1,1.1-3.7-.1-7.5-.3-11-1.2-1.1-1.4-1.8-3-2.1-4.7,0-.3,0-.6-.1-.9Z"/><path class="cls-12" d="m202.8,140.7c-.1-.2-.3-.2-.5-.3-4-.7-8.2.4-11.3,3-1.7-.6-3.5-.1-5,1-.9.7-1.3,1.3-1.4,2,0-.1,0-.3,0-.4,0-.6-.2-1-.5-1.4-1.7-.8-3.9-1.1-5.9-.8,0-.4-.2-.7-.3-1.1h0c-3.9,2.2-5.9,3.2-9.5,3.3h-.6c0,1.2.1,2.3.2,3.5,0,1.5.2,3.2.3,5,0,1.1.2,2.3.3,3.5h0c.7,1.7,1.6,1.7,3.7,2.4.1,0,.2,0,.3.1,2.1.6,5.3-.4,7.1-1.5.8-.5,1.5-.8,2.2-1.1.6.8,1.6,1.4,2.6,1.5,0,.4-.1.8-.1,1.2,0,.6,0,1.2.4,1.6.4.5,1.2.6,1.9.7.7,0,1.5,0,2.1-.3.4-.3.6-.8.7-1.3.1-.5,0-1.3-.2-2.2h0c.9-.3,1.7-.9,2.1-1.8.7.4,1.3.8,2.1,1,.8.2,1.7.2,2.4-.3.7-.4,1.1-1.2,1.2-2,0,0,0,0,0-.1h0c.5,0,1.1,0,1.7.1.6,0,1.2,0,1.6-.4.2-.2.4-.5.5-.8.4-1,.8-1.9,1.1-2.9.2-.6.5-1.2.2-1.8-.2-.4-.6-.7-1-.8-.4,0-.9,0-1.3.1-.3,0-.6.2-.8.3h0c-1.2,0-2.6,0-3.2-.9-.4-.7-.2-1.6.2-2.2.4-.6,1.1-1.1,1.7-1.6,1.6-1.1,3.1-2.2,4.7-3.3.3-.2.7-.7.5-1Z"/><path class="cls-15" d="m177.8,142.7h0c-3.9,2.2-5.9,3.2-9.5,3.3h-.6c0-.6,0-1.3-.1-1.9,0-1.1-.1-2.2-.2-3.2,4.4-.5,5.7-.2,8.9-3.2.6,1.8,1.1,3.6,1.5,5.1Z"/><path class="cls-10" d="m133.9,244.9c-6.5-.8-13.1-2-16.1-3.4-1-.5-1.6-1-1.6-1.5,0,0,8.5-44.5,9.8-52.1,4.8,2.7,10.5,2.8,16.1,3.1,2.5.1,5.4.5,7.7-.4,2.3-.8,5-5.9,5-5.9.5,0,3.7,5.1,4.9,5.6,1,.4,7.1-2,10.4-2.9h0c.9,5.8,6.4,47.8,6.4,54-.5.2-1,.3-1.6.5-4.5,1.4-10.2,2.7-17.1,3.4-3.3.3-7,.5-10.8.5s-8-.3-13.1-1Z"/><path class="cls-15" d="m173.5,133.2c.6,1.8-4.5.4-5.2-.2-.4-.3-.6-.5-.6-.7,0-.6,1.3-.9,2-.8.8,0,3.2.7,3.6,1.3,0,.1.1.2.2.3Z"/><path class="cls-15" d="m171.1,184.4c0,.4-.2.9-.6,1-.2,0-.4-.1-.5-.2-.7-.5-1.4-1.1-2.1-1.7-.9-.7-2.2-1.9-2.5-2.2-.4-.4,0-1.5.5-1.2.9.5,3.1,2.3,4.1,3.2.3.2,1,.8,1.1,1.1Z"/><path class="cls-15" d="m170.6,180.4h-.1c-.2,0-.4-.1-.5-.2-.7-.6-1.4-1.3-2.1-1.9-.9-.8-2.3-2.2-2.6-2.5-.4-.5,0-1.6.5-1.2.9.6,3.2,2.6,4.2,3.6h.4c0,.8.2,1.5.3,2.3Z"/><path class="cls-15" d="m169.9,174.1h0s0,0,0,0c-.7-.6-1.5-1.2-2.2-1.8-.9-.8-2.4-2.2-2.7-2.5-.1-.1-.2-.3-.2-.5,0-.5.4-1,.8-.7.9.5,3.1,2.2,4.2,3.2,0,.8.2,1.6.2,2.4Z"/><path class="cls-15" d="m169,165.2c.1,1.5.3,2.9.4,4.4-2-1.4-4.5-3.8-6.5-5.2-2.1.9-8.2,6-9,5.9,0-1.6-.2-3.2-.3-4.9,0,0,.1,0,.2,0,2.5-1.2,6.5-4.4,8.7-6.1,2.1,1.5,4.4,4.4,6.5,5.9h0Z"/><path class="cls-15" d="m169.1,118.3h-.2c-2,3.6-4,6.8-5.7,10.6-1.8-1.8-3.7-2.9-5.9-4.2.2-.7.4-1.3.5-2h0c1.4.6,2.7,1.3,3.8,2.3,1.6-3.1,3.5-6.7,5.3-9.6.3.3.6.6.9,1,.4.5.7,1.2,1.2,2Z"/><path class="cls-15" d="m168.4,157.9c0,.5,0,1.1.1,1.7-1.6-.7-6.7-5-6.7-5,0,0-7.1,4.3-8.6,5.3-.1-1.6-.3-3.2-.4-4.9,0,0,.1,0,.2.1,2-2.3,8.1-6,8.6-6,.5,0,4.5,3.4,6.5,5.4h0c0,1.1.2,2.3.3,3.5Z"/><path class="cls-15" d="m167.4,140.7c0,1.1.1,2.1.2,3.2h-.2s0,0,0,0c-4.7-2.9-9.4-5.7-14.1-8.6,4.7-.5,9.3-1.7,13.5-3.8,0,.3,0,.5,0,.8.2,2.8.4,5.5.5,8.4Z"/><path class="cls-15" d="m162.2,179.6c.4,0,.7.6.6,1.1,0,.3-.2.5-.4.7-.7.8-1.5,1.6-2.2,2.4-.9,1-2.5,2.5-2.9,2.9-.5.5-1.3-.4-.8-1.1.7-1.1,3.1-3.7,4.2-4.8.3-.3,1-1.2,1.4-1.2Z"/><path class="cls-15" d="m162.8,169.5c0,0,0,.1,0,.2,0,.3-.3.5-.4.7-.8.9-1.6,1.7-2.4,2.6-1,1.1-2.8,2.8-3.2,3.1-.5.4-1.1,0-1.1-.7,0-.2,0-.3.2-.5.8-1.2,3.5-4,4.8-5.2.3-.3,1.2-1.3,1.6-1.3.4,0,.7.5.7,1Z"/><path class="cls-15" d="m161.4,174.5c.4,0,.8.6.7,1.2,0,.3-.3.5-.4.7-.8.9-1.6,1.7-2.4,2.6-1,1.1-2.8,2.8-3.2,3.1-.6.5-1.5-.4-.9-1.2.8-1.2,3.5-4,4.8-5.2.3-.3,1.2-1.3,1.6-1.3Z"/><path class="cls-12" d="m125,99.4c-.7.4-1.6.4-2.3,0-.8-.3-1.5-1-2.1-1.7-.7-.7-1.3-1.6-1.9-2.4-.4-.7-.9-1.4-1.2-2.1-.5-1-.9-2.2-.6-3.3.3-.9,1.1-1.4,1.9-1.6.8-.1,1.6.1,2.4.6,1,1.4,2.6,3,4.1,2.3.9-.4,1.3-1.5,1.3-2.4,0-1-.5-1.9-.9-2.7-1.4-2.9-2.8-5.9-4.2-8.8-1-2.1-2-4.3-1.8-6.7.2-2.2,1.5-4.1,3.1-5.5,1.6-1.4,3.6-2.4,5.6-3.2,4.9-2.1,13.3-5.9,18.7-5.5,5,.3,7.6,4.8,10.1,10,.6,2.1,1.3,4.8,1.4,5.1,2.2,3.7,4.2,8.1,3.6,16.8-.4,5.7-1.1,10.2-7.1,14.6,0,0-1.2,2.5-2,4.9-.4,1.3-.7,2.5-.7,3.3,0,.5-.1,1.1-.2,1.6h0s0,0,0,0c-.3,2.4-.8,4.6-1.3,6.6-.7,2.7-1.4,4.9-1.8,5.8h0c-.1.3-.2.5-.2.5,0,0-.2-.1-.4-.3-.7-.6-2.3-1.8-4.1-3.2-2.8-2.3-6.3-5.4-8.1-7.5-.7-.9-1.2-1.6-1.2-2.1-.2-1.1-.7-2.4-1.4-3.9-1.5-3.1-4.1-6.7-8.5-9.2h-.2Zm29.6-21.3c.6-.2.7-1.7,0-3.2-.6-1.5-1.6-2.6-2.2-2.4s-.6,1.7,0,3.2c.6,1.6,1.6,2.6,2.2,2.4Zm0-10.8c0-.7-.2-1.2-.5-1.3-2.2-.5-6-1.3-7.8-.2-.4.2,0,3,1.3,3,1.5-1.2,4.4-1.6,7.1-1.4Zm-17.6,16.4c.7-.3.8-1.9.1-3.6-.7-1.7-1.8-2.8-2.6-2.5-.7.3-.8,1.9-.1,3.6.7,1.7,1.8,2.8,2.6,2.6Zm-1.5-11.9c.2-1.2-1.1-2.6-1.6-2.5-2.5.3-5.1,3.2-6.5,5-.3.4.8,1.7,1.2,1.6,1.1-1.8,4-3.3,6.9-4.1Z"/><path class="cls-15" d="m158.6,143.6c.9-.3,3.2-.4,2.1,1.3-.2.3-.5.5-.8.8-1.3,1-2.7,1.9-4.4,2-.6,0-1.3-.1-1.5-.6-.2-.6.3-1.2.8-1.5,1.1-.9,2.4-1.5,3.8-1.9Z"/><path class="cls-15" d="m159.8,111.1c.5.5.6,1.2.6,1.9,0,.8-.4,1.7-.7,2.4-.6,1.3-.9,2.7-1.2,4.1-1.9-2.7-3.7-4.9-6.4-6.9,0,0,0,0,0,0,2.7-.8,4.9-1.2,7.7-1.6Z"/><path class="cls-15" d="m154.4,128.4c-1.5-2.8-2.5-5.8-3-8.9,2.5.5,4.5.5,7.1.1-.2,1-.4,2-.6,3-.1.7-.3,1.4-.5,2-.4,1.3-1,2.6-1.8,3.6-.2.3-.6.6-.9.6s-.5-.1-.6-.3l.4-.2Z"/><path class="cls-15" d="m155.7,140.6c1.3-.2,2.4.8,1,1.8-.5.4-1.1.6-1.7.8-.4,0-.8,0-1.1-.2-1-1,1-2.3,1.8-2.4Z"/><path class="cls-9" d="m121.1,89c-.7-.5-1.6-.7-2.4-.6-.8.1-1.6.7-1.9,1.6-.4,1.1,0,2.2.6,3.3.4.7.8,1.4,1.2,2.1-14.2-12.4-12-30.5-9.5-34.3,5.8-8.9,27.3-14.5,33.9-14.4,6.9,0,11.4,10.1,13.6,18.1.1.4.3,1,.5,1.7-2.5-5.2-5.2-9.7-10.1-10-5.3-.4-13.7,3.4-18.7,5.5-2,.8-4,1.8-5.6,3.2-1.6,1.4-2.9,3.4-3.1,5.5-.2,2.3.8,4.6,1.8,6.7,1.4,2.9,2.8,5.9,4.2,8.8.4.9.8,1.8.9,2.7,0,1-.4,2-1.3,2.4-1.5.7-3.1-.9-4.1-2.3Z"/><path class="cls-6" d="m154.6,74.8c.6,1.6.6,3,0,3.2-.6.2-1.6-.8-2.2-2.4-.6-1.5-.6-3,0-3.2s1.6.8,2.2,2.4Z"/><path class="cls-8" d="m154.1,65.9c.4,0,.6.6.5,1.3-2.7-.2-5.6.2-7.1,1.4-1.2,0-1.7-2.7-1.3-3,1.8-1.1,5.6-.3,7.8.2Z"/><path class="cls-15" d="m154.3,180.4c0,.5-.4,1.1-1,1.1-.3,0-.6-.1-.9-.3-1.1-.7-2.2-1.3-3.4-2-1.4-.8-3.6-2.3-4.1-2.7-.7-.5,0-1.7.9-1.3,1.4.6,5.1,2.7,6.7,3.8.4.3,1.7.9,1.8,1.4Z"/><path class="cls-15" d="m154.1,174.5c0,.5-.4,1.1-1,1.1-.3,0-.6-.1-.9-.3-1.1-.7-2.3-1.3-3.4-2-1.4-.8-3.7-2.3-4.2-2.7-.7-.5,0-1.7.9-1.4,1.5.6,5.2,2.7,6.9,3.8.4.3,1.7.9,1.8,1.4Z"/><path class="cls-15" d="m153.8,185.9c0,.4-.4,1-1,1-.3,0-.6-.1-.9-.2-1.1-.6-2.2-1.2-3.3-1.7-1.4-.7-3.5-2-4-2.3-.7-.4,0-1.6.9-1.3,1.4.5,5,2.4,6.5,3.3.4.2,1.6.8,1.7,1.2Z"/><path class="cls-15" d="m153.6,165.4c.1,1.7.2,3.3.3,4.9-.8-.1-9.9-5.7-10.9-5.3-1.1.5-13.1,6.7-16.4,8.4h-.4c0-.6,0-1.2,0-1.8,0-.8,0-1.6,0-2.4h0c4.6-3.2,11.5-7.6,16.5-10,3.6,1.8,7,4.3,10.6,6.1Z"/><path class="cls-15" d="m152.8,155c.1,1.6.3,3.3.4,4.9,0,0-9.7-5.7-10.7-6,0,0-12.5,8.5-15.8,10.5h0c0-2.5,0-4.7.1-6.2,3.8-2.4,14-9.1,15.1-9.1,1.1,0,8.4,4,11,6Z"/><path class="cls-15" d="m149.7,141.9c1,1-.1,1.9-1.2,1.8-.9,0-1.8-.4-2.6-.8-.4-.2-.8-.6-.7-1,0-.5.7-.7,1.2-.7.8,0,2.6.2,3.2.8Z"/><path class="cls-15" d="m145.6,145.2c.7.2,5,1.8,3.8,3.3-.3.3-.8.2-1.2.1-1.2-.3-2.4-.7-3.4-1.4-.3-.2-.5-.4-.7-.7s-.2-.7,0-1c.3-.4.9-.4,1.4-.3Z"/><path class="cls-15" d="m138.5,126.4c-.4-.3-.8-.6-1.2-.9-.6-.4-1.1-.9-1.7-1.3v-.2h.1c2.8-.6,5.6-1.2,8.4-1.8.3,2.4.3,4.9.3,7.3h0s-.2.3-.2.3c-2-1-3.9-2.1-5.8-3.4Z"/><path class="cls-15" d="m140.5,169.6c.6,0,1.3.7,1.1,1.3-.1.3-.4.6-.7.8-1.3,1-2.7,1.9-4,2.9-1.7,1.2-4.6,3.1-5.2,3.5-.9.6-2.3-.4-1.5-1.2,1.3-1.3,5.7-4.4,7.8-5.8.5-.4,1.9-1.5,2.5-1.4Z"/><path class="cls-15" d="m140.4,181.6c.6,0,1.2.6,1,1.2,0,.3-.4.5-.6.7-1.2.9-2.4,1.7-3.6,2.6-1.5,1.1-4.1,2.8-4.7,3.2-.8.5-2.1-.4-1.3-1.1,1.2-1.2,5.1-4,6.9-5.3.5-.3,1.7-1.3,2.3-1.3Z"/><path class="cls-15" d="m139.4,176.1c.6,0,1.3.7,1.1,1.3,0,.4-.4.6-.7.8-1.3,1-2.7,1.9-4,2.9-1.7,1.2-4.6,3.1-5.2,3.5-.9.6-2.4-.4-1.5-1.2,1.3-1.3,5.7-4.4,7.8-5.8.5-.4,1.9-1.5,2.5-1.4Z"/><path class="cls-15" d="m125.5,135.5c7.4.8,13.3,1,20.7.3-7.2,5.5-11.8,10.2-19.7,14.6h-.3c-.1-.8-.2-1.5-.3-2.3-.2-1.4-.5-7.9-.6-10.4,0-.7.2-1.4.2-2.2h0Z"/><path class="cls-15" d="m137.3,125.5c.4.3.8.6,1.2.9-2.3,2.2-4.4,4.6-6.2,7.2-3.1-6.3-6.9-12.2-11.4-17.5v-.3c-.1,0,2.7-.9,2.7-.9,3.2,4,6.5,9.3,8.5,14.1,1.9-.7,3.7-1.9,5.1-3.4h0Z"/><path class="cls-6" d="m137.2,80c.7,1.7.6,3.3-.1,3.6-.7.3-1.9-.9-2.6-2.6-.7-1.7-.6-3.3.1-3.6.7-.3,1.9.8,2.6,2.5Z"/><path class="cls-15" d="m136.2,114.6c-.3,3.2-.2,6.2-.5,9.4h0v.2c-3.2-2.5-5.9-5.5-8.1-8.7l.3-.2c2.9-.3,5.4-.3,8.3-.7Z"/><path class="cls-8" d="m134,69.2c.4,0,1.8,1.4,1.6,2.5-2.9.8-5.8,2.3-6.9,4.1-.4,0-1.6-1.2-1.2-1.6,1.4-1.8,4-4.7,6.5-5Z"/><path class="cls-12" d="m126.5,280.4c0,.2,0,.5,0,.7,0,.2.1.4.2.6,0,.7-.3,1.4-.6,2-.4.8-1,1.4-1.7,2.1h0c-4.7.8-9.4,1.4-14.1,1.9-.8,0-1.7.1-2.4-.2-.9-.5-1.2-1.5-1.1-2.4,0-.9.5-1.7.9-2.5,2.5-1.5,5.1-2.9,7.9-4.3,1.5-8.4,1.6-26.6,2.3-36.7,3,1.4,9.6,2.6,16.1,3.4-1.4,5-2.8,9.7-3.7,12.9-1.1,4.1-3,10.8-3.7,22.6Z"/><path class="cls-10" d="m104,295c.9-.1,1.8-.3,2.7-.6,3.9-1.1,7.1-2.1,10.1-3.6,2.1-1,4.2-2.3,6.4-4,.4-.3.8-.7,1.2-1h0c.7-.6,1.3-1.3,1.7-2.1.3-.6.6-1.3.6-2,1.3,4.5-1.3,9.4-5.3,12.2-4.2,2.9-9.6,3.9-14.8,4.3-2.4.2-5,.2-7-1-2.7-1.7-3.3-5.8-1-8.1h0c-.6,1.2-.8,2.6-.2,3.8.3.7.9,1.2,1.6,1.5.7.4,1.4.6,2.2.7.6,0,1.2,0,1.8,0Z"/><path class="cls-14" d="m170.5,180.4h0c-.2,0-.4-.1-.5-.3-.7-.6-1.4-1.3-2.1-1.9-.9-.8-2.3-2.2-2.6-2.5-.4-.5,0-1.6.5-1.2.9.6,3.2,2.6,4.2,3.6h.4c-.1-1.3-.3-2.6-.4-4h0s0,0,0,0c-.7-.6-1.5-1.2-2.2-1.8-.9-.8-2.4-2.2-2.7-2.5-.1-.1-.2-.3-.2-.5,0-.5.4-1,.8-.7.9.5,3.1,2.2,4.2,3.2,0-.7-.1-1.4-.2-2.1-2-1.4-4.5-3.8-6.5-5.2-2.1.9-8.2,6-9,5.9-.8-.1-9.9-5.7-10.9-5.3-1.1.5-13.1,6.7-16.4,8.4h-.4c-.2,3.3-.4,6.3-.8,8.1,0,.9-.4,4.8-.5,5.7.3.2.6.4,1,.6,4.8,2.7,10.5,2.8,16.1,3.1,2.5.1,5.4.5,7.7-.4,2.3-.8,5-5.9,5-5.9.5,0,3.7,5.1,4.9,5.6,1,.4,7.1-2,10.4-2.9.6-.2,1.1-.3,1.5-.3-.3-1.9-.6-4.1-.9-6.7h-.1Zm-41.5,2.9c1.3-1.3,5.7-4.4,7.8-5.8.5-.4,1.9-1.5,2.5-1.4.6,0,1.3.7,1.1,1.3,0,.4-.4.6-.7.8-1.3,1-2.7,1.9-4,2.9-1.7,1.2-4.6,3.1-5.2,3.5-.9.6-2.4-.4-1.5-1.2Zm12.3-.5c0,.3-.4.5-.6.7-1.2.9-2.4,1.7-3.6,2.6-1.5,1.1-4.1,2.8-4.7,3.2-.8.5-2.1-.4-1.3-1.1,1.2-1.2,5.1-4,6.9-5.3.5-.3,1.7-1.3,2.3-1.3.6,0,1.2.6,1,1.2Zm.3-11.9c-.1.3-.4.6-.7.8-1.3,1-2.7,1.9-4,2.9-1.7,1.2-4.6,3.1-5.2,3.5-.9.6-2.3-.4-1.5-1.2,1.3-1.3,5.7-4.4,7.8-5.8.5-.4,1.9-1.5,2.5-1.4.6,0,1.3.7,1.1,1.3Zm14.1,4.1c.8-1.2,3.5-4,4.8-5.2.3-.3,1.2-1.3,1.6-1.3.4,0,.7.5.7,1s0,.1,0,.2c0,.3-.3.5-.4.7-.8.9-1.6,1.7-2.4,2.6-1,1.1-2.8,2.8-3.2,3.1-.5.4-1.1,0-1.1-.7,0-.2,0-.3.2-.5Zm-10.2-5.5c1.5.6,5.2,2.7,6.9,3.8.4.3,1.7.9,1.8,1.4,0,.5-.4,1.1-1,1.1-.3,0-.6-.1-.9-.3-1.1-.7-2.3-1.3-3.4-2-1.4-.8-3.7-2.3-4.2-2.7-.7-.5,0-1.7.9-1.4Zm7.3,17.5c-.3,0-.6-.1-.9-.2-1.1-.6-2.2-1.2-3.3-1.7-1.4-.7-3.5-2-4-2.3-.7-.4,0-1.6.9-1.3,1.4.5,5,2.4,6.5,3.3.4.2,1.6.8,1.7,1.2,0,.4-.4,1-1,1Zm.5-5.4c-.3,0-.6-.1-.9-.3-1.1-.7-2.2-1.3-3.4-2-1.4-.8-3.6-2.3-4.1-2.7-.7-.5,0-1.7.9-1.3,1.4.6,5.1,2.7,6.7,3.8.4.3,1.7.9,1.8,1.4,0,.5-.4,1.1-1,1.1Zm1.8-.6c.8-1.2,3.5-4,4.8-5.2.3-.3,1.2-1.3,1.6-1.3.4,0,.8.6.7,1.2,0,.3-.3.5-.4.7-.8.9-1.6,1.7-2.4,2.6-1,1.1-2.8,2.8-3.2,3.1-.6.5-1.5-.4-.9-1.2Zm7.3.4c-.7.8-1.5,1.6-2.2,2.4-.9,1-2.5,2.5-2.9,2.9-.5.5-1.3-.4-.8-1.1.7-1.1,3.1-3.7,4.2-4.8.3-.3,1-1.2,1.4-1.2.4,0,.7.6.6,1.1,0,.3-.2.5-.4.7Zm8.7,3c0,.4-.2.9-.6,1-.2,0-.4-.1-.5-.2-.7-.5-1.4-1.1-2.1-1.7-.9-.7-2.2-1.9-2.5-2.2-.4-.4,0-1.5.6-1.2.9.5,3.1,2.3,4.1,3.2.3.2,1,.8,1.1,1.1Z"/><path class="cls-14" d="m153.2,159.8s-9.7-5.7-10.8-6c0,0-12.5,8.5-15.8,10.5h0c0,1.6,0,3.3-.2,5h0c4.6-3.2,11.5-7.6,16.5-10,3.6,1.8,7,4.3,10.6,6.1,0,0,.1,0,.2,0,2.5-1.2,6.5-4.4,8.7-6.1,2.1,1.5,4.4,4.4,6.5,5.9h0c-.2-1.9-.3-3.9-.5-5.7-1.6-.7-6.7-5-6.7-5,0,0-7.1,4.3-8.6,5.3Z"/><path class="cls-14" d="m157.9,122.7c1.4.6,2.7,1.3,3.8,2.3,1.6-3.1,3.5-6.7,5.3-9.6-1.6-1.5-3.7-1.8-6.6-2.3h0c0,.8-.4,1.7-.7,2.4-.6,1.3-.9,2.7-1.2,4.1-.2,1-.4,2-.6,3h0Z"/><path class="cls-14" d="m158.4,110.3c-2.8-1.3-2.4-1.1-5.2-2.4h-.3c-.4,1.2-.7,2.4-.7,3.2,0,.5-.1,1.1-.2,1.6,2.7-.8,4.9-1.2,7.7-1.6-.4-.4-.9-.6-1.4-.9Z"/><path class="cls-14" d="m133.7,108.6h0c-2.1,1.3-3.1,2-5.3,3.1-.9.4-1.8,1.2-1.6,2.2l-3.1,1c3.2,4,6.5,9.3,8.5,14.1,1.9-.7,3.7-1.9,5.1-3.4h0c-.6-.5-1.1-.9-1.7-1.4-3.1-2.5-5.8-5.5-8-8.7l.3-.2c2.9-.3,5.4-.3,8.3-.7-.7-.9-1.2-1.6-1.2-2.1-.2-1.1-.7-2.4-1.4-3.9Z"/><path class="cls-14" d="m125.5,135.5h0c7.4.8,13.3,1,20.7.3-7.2,5.5-11.8,10.2-19.7,14.6h-.3c.3,2.3.6,4.7.6,7,0,.2,0,.5,0,.7h0c3.8-2.4,14-9.1,15.1-9.1,1.1,0,8.4,4,11,6,0,0,.1,0,.2.1,2-2.3,8.1-6,8.6-6,.5,0,4.5,3.4,6.5,5.4h0c-.1-1.9-.2-3.6-.3-5,0-1.2-.1-2.3-.2-3.5,0-.7,0-1.3-.1-2h-.2s0,0,0,0c-4.7-2.9-9.4-5.7-14.1-8.6,4.7-.5,9.3-1.7,13.5-3.8,0,.3,0,.5,0,.8.2,2.8.4,5.5.5,8.4,4.4-.5,5.7-.2,8.9-3.2-.5-1.6-1-3.2-1.5-4.8-1.9-5.6-4-11.2-5.7-14.5h-.2c-2,3.6-4,6.8-5.7,10.6-1.8-1.8-3.7-2.9-5.9-4.2-.4,1.3-1,2.6-1.8,3.6-.2.3-.6.6-.9.6s-.5-.1-.6-.3l.4-.2c-1.5-2.8-2.5-5.8-3-8.9,2.5.5,4.5.5,7.1.1-1.9-2.7-3.7-4.9-6.4-6.9-.3,2.4-.8,4.6-1.3,6.6-.7,2.7-1.4,4.9-1.8,5.8h0c-.1.3-.2.5-.2.5,0,0-.2-.1-.4-.3-.7-.6-2.3-1.8-4.1-3.2-2.8-2.3-6.3-5.4-8.1-7.5-.3,3.2-.2,6.2-.5,9.4h0c2.8-.6,5.6-1.2,8.4-1.8.3,2.4.3,4.9.3,7.3h0s-.2.3-.2.3c-2-1-3.9-2.1-5.8-3.4-2.3,2.2-4.4,4.6-6.2,7.2-3.1-6.3-6.9-12.2-11.4-17.5v-.3c-.1,0-3.2,1-3.2,1-3.5.4-4.9,5.3-5.9,8.6l-2,10.3h0c.4,1.8.8,1.5,1.9,3,.9,1.2,2.1,2.1,3.5,2.9,2.9,1.6,6.3,2.3,9.6,2.1.1-1.4.2-3.2.5-6,0-.7.2-1.4.2-2.2Zm35.2,9.4c-.2.3-.5.5-.8.8-1.3,1-2.7,1.9-4.4,2-.6,0-1.3-.1-1.5-.6-.2-.6.3-1.2.8-1.5,1.1-.9,2.4-1.5,3.8-1.9.9-.3,3.2-.4,2.1,1.3Zm-4.9-4.3c1.3-.2,2.4.8,1,1.8-.5.4-1.1.6-1.7.8-.4,0-.8,0-1.1-.2-1-1,1-2.3,1.8-2.4Zm14-9.1c.8,0,3.2.7,3.6,1.3,0,.1.1.2.2.3.6,1.8-4.5.4-5.2-.2-.4-.3-.6-.5-.6-.7,0-.6,1.3-.9,2-.8Zm-20.4,17c-.3.3-.8.2-1.2.1-1.2-.3-2.4-.7-3.4-1.4-.3-.2-.5-.4-.7-.7-.2-.3-.2-.7,0-1,.3-.4.9-.4,1.4-.3.7.2,5,1.8,3.8,3.3Zm.3-6.6c1,1-.1,1.9-1.2,1.8-.9,0-1.8-.4-2.6-.8-.4-.2-.8-.6-.7-1,0-.5.7-.7,1.2-.7.8,0,2.6.2,3.2.8Zm-35.1-5.4c-.7-2-.6-4.2.2-6.2.4-1,1-2,1.8-2.8.4-.4,1.8-1.9,2.4-1.7.7.3.9,2.5.9,3.1,0,1.1-.2,2.1-.7,3.1-.9,2-2.7,3.5-4.6,4.6Zm6.8,2.6c-1.3.5-2.9.3-4.1-.4,1.2-1.4,3.4-3,5.4-2.7,2.7.4,0,2.7-1.3,3.1Z"/><path class="cls-15" d="m124.7,143.7c-.2,2.1-.4,3-1.5,4.1-2.2,1.1-3.8,1.2-5.3.9-1.3-.3-2.4-.9-3.4-1.6-1.6-1-2.8-1.7-4.3-3.2-.5-.5-1.1-1.1-1.7-1.8l1.3-6.4h0c.4,1.8.8,1.5,1.9,3,.9,1.2,2.1,2.1,3.5,2.9,2.9,1.6,6.3,2.3,9.6,2.1Z"/><path class="cls-10" d="m124.3,285.7h0c-.4.4-.8.7-1.2,1.1-2.2,1.7-4.2,3-6.4,4v-.2c-2.5,0-5,0-7.4.5-2.3.6-4.4,1.9-5.4,3.9-.6,0-1.2.1-1.8,0-.8,0-1.5-.3-2.2-.7h0c.4-1.1,1.2-2,1.9-2.9.7-.9,1.3-2,1.3-3.1,0-1-.6-2-.5-2.9,1.7-1.1,3.3-2.1,5-3.1-.4.8-.9,1.6-.9,2.5,0,.9.3,2,1.1,2.4.7.4,1.6.3,2.4.2,4.7-.5,9.5-1.1,14.1-1.9Z"/><path class="cls-15" d="m122.7,136c2.7.4,0,2.7-1.3,3.1-1.3.5-2.9.3-4.1-.4,1.2-1.4,3.4-3,5.4-2.7Z"/><path class="cls-15" d="m119.9,128.8c0,1.1-.2,2.1-.7,3.1-.9,2-2.7,3.5-4.6,4.6-.7-2-.6-4.2.2-6.2.4-1,1-2,1.8-2.8.4-.4,1.8-1.9,2.4-1.7.7.3.9,2.5.9,3.1Z"/><path class="cls-12" d="m118,148.7c-1.3-.3-2.4-.9-3.4-1.6-1.6-1-2.8-1.7-4.3-3.2h0c0,.5-.4,1.7-.7,3.3l8.5,1.6,4.7.9c.3-1,.5-1.7.6-1.9-2.2,1.1-3.8,1.2-5.3.9Z"/><path class="cls-11" d="m116.7,290.6v.2c-3,1.5-6.1,2.5-10,3.6-.9.3-1.8.5-2.7.6,1-2,3.2-3.3,5.4-3.9,2.4-.6,4.8-.6,7.3-.5Z"/><polygon class="cls-13" points="147.9 15.4 136.5 27.3 148.4 38.7 159.8 26.8 147.9 15.4"/><path class="cls-13" d="m117.9,148.9l-8.5-1.6h-.6c0-.1-2.5,13.6-2.5,13.6l-.2.8-.3,1.7.9.2,3,.6s0,0,0,0l5.2,1h0s2.5.5,2.5.5h.1s1.2.3,1.2.3h0l1.1.2h.7c0,.1,1.4.4,1.4.4l3-16.2-2.5-.5-4.7-.9Z"/><path class="cls-12" d="m125.6,169.7c-.4-.4-1-.7-1.5-.5-.5.2-.8.6-1.1,1.1-.2.5-.4,1-.8,1.3-.4.4-1,.5-1.4.2h0c.3-.7.5-1.3.6-2,0-.7,0-1.4-.4-1.9,0,0-.1-.1-.2-.2-.2-.5-.5-1.1-.7-1.6l-1.1-.2h0l-1.2-.2h-.1s-2.5-.5-2.5-.5h0s-5.2-1-5.2-1c0,0,0,0,0,0l-3-.6-.9-.2.3-1.7c-.9.4-1.8,1-2.6,1.6-.9.7-1.7,1.5-2.5,2.4-.3.3-.6.7-.8,1.1-.1.4,0,1,.3,1.3.4.4,1.1.2,1.7,0,1.2-.4,2.3-.7,3.5-1,.4-.1.8-.2,1.2-.4.6.5.9,1.3,1,2.1,0,.7,0,1.5,0,2.2,0,1.5.2,3.4,1.6,4,1,.4,2.1,0,3.1-.8.4.9,1.4,1.5,2.5,1.6,1.1,0,2.1-.5,2.9-1.1,1.7,1.3,4.2,1.5,6,.3,1.1-.8,1.9-2,2-3.3,0-.2,0-.3,0-.5,0-.6-.2-1.1-.6-1.6Z"/><path class="cls-11" d="m103.1,288.4c0,1.1-.6,2.2-1.3,3.1-.7.9-1.5,1.8-1.9,2.8h0s0,0,0,0c-.7-.4-1.2-.9-1.6-1.5-.6-1.2-.4-2.6.2-3.7,0-.2.2-.4.3-.5.9-1.3,2.2-2.2,3.5-3,0,0,0,0,.1,0-.1.9.5,1.9.5,2.9Z"/><path class="cls-5" d="m135,112.5c-.2-1.1-.7-2.4-1.4-3.9-1.5-3.1-4.1-6.7-8.5-9.2"/><path class="cls-5" d="m118.6,95.4c-14.2-12.4-12-30.5-9.5-34.3,5.8-8.9,27.3-14.5,33.9-14.4,6.9,0,11.4,10.1,13.6,18.1.1.4.3,1,.5,1.7.6,2.1,1.3,4.8,1.4,5.1,2.2,3.7,4.2,8.1,3.6,16.8-.4,5.7-1.1,10.2-7.1,14.6,0,0-1.2,2.5-2,4.9-.4,1.3-.7,2.5-.7,3.3"/><path class="cls-1" d="m152.4,75.7c.6,1.6,1.6,2.6,2.2,2.4.6-.2.7-1.7,0-3.2-.6-1.5-1.6-2.6-2.2-2.4s-.6,1.7,0,3.2Z"/><path class="cls-1" d="m134.5,81c.7,1.7,1.8,2.8,2.6,2.6.7-.3.8-1.9.1-3.6-.7-1.7-1.8-2.8-2.6-2.5-.7.3-.8,1.9-.1,3.6Z"/><path class="cls-5" d="m118.6,95.4c.6.9,1.2,1.7,1.9,2.4.6.7,1.3,1.3,2.1,1.7.8.3,1.6.4,2.3,0,0,0,.1,0,.2,0,.7-.5,1.1-1.6.6-2.5"/><path class="cls-1" d="m121.1,89.1s0,0,0,0c-.7-.5-1.6-.7-2.4-.6-.8.1-1.6.7-1.9,1.6-.4,1.1,0,2.2.6,3.3.4.7.8,1.4,1.2,2.1"/><path class="cls-1" d="m145.1,87.6c.7-1.4,2.1-3.3,3.6-3.8,1.5-.4,3.6-.5,4.2,1.4"/><path class="cls-5" d="m135.6,71.7c-2.9.8-5.8,2.3-6.9,4.1-.4,0-1.6-1.2-1.2-1.6,1.4-1.8,4-4.7,6.5-5,.4,0,1.8,1.4,1.6,2.5Z"/><path class="cls-1" d="m126.7,113.9l-3.1,1-2.8.9-3.1,1c-3.5.4-4.9,5.3-5.9,8.6l-2,10.3-1.3,6.4c.6.7,1.2,1.3,1.7,1.8,1.6,1.5,2.7,2.2,4.3,3.2,1,.6,2.1,1.3,3.4,1.6,1.4.3,3.1.2,5.3-.9,1.1-1.1,1.3-2,1.5-4.1.1-1.4.2-3.2.5-6,0-.7.2-1.4.2-2.2,0-.2,0-.4,0-.6"/><path class="cls-1" d="m160.4,113.1c3,.4,5,.8,6.6,2.3.3.3.6.6.9,1,.4.5.7,1.2,1.2,2,1.7,3.3,3.8,8.9,5.7,14.5.5,1.6,1.1,3.2,1.5,4.8.6,1.8,1.1,3.6,1.5,5.1,0,.4.2.7.3,1.1"/><path class="cls-1" d="m122.6,149.7c.3-1,.5-1.7.6-1.9"/><path class="cls-1" d="m110.2,144c0,.4-.4,1.7-.7,3.3"/><path class="cls-1" d="m117.7,116.9c3.9,1.2,5.2,3.2,6.1,5.9,1,3.3,2.2,8,1.8,12.1"/><path class="cls-1" d="m172.4,160.4c2.1.6,5.3-.4,7.1-1.5.8-.5,1.5-.8,2.2-1.1"/><path class="cls-1" d="m184.5,146.4c0-.1,0-.3,0-.4,0-.6-.2-1-.5-1.4-1.7-.8-3.9-1.1-5.9-.8-1.6.2-3,.8-4,1.9-2.3,2.4-3.3,5-3.7,7.6-.2,1.4-.8,5.1.9,6.6.2.2.5.4.8.5"/><path class="cls-1" d="m172.4,160.4c-.1,0-.2,0-.3-.1-2.1-.7-2.9-.6-3.7-2.4"/><path class="cls-1" d="m168.3,145.9c3.6,0,5.6-1.1,9.5-3.2"/><line class="cls-5" x1="189.1" y1="159" x2="189.2" y2="159"/><line class="cls-5" x1="184.5" y1="147" x2="184.5" y2="147"/><path class="cls-5" d="m184.6,148.3c0-.5,0-.9,0-1.3,0-.2,0-.4,0-.6.1-.7.5-1.3,1.4-2,1.5-1.1,3.2-1.6,5-1,3.1-2.6,7.4-3.7,11.3-3,.2,0,.4,0,.5.3.2.3-.2.8-.5,1-1.6,1.1-3.1,2.2-4.7,3.3-.6.4-1.3.9-1.7,1.6-.4.7-.6,1.5-.2,2.2.6,1,2,1,3.2.9"/><path class="cls-5" d="m191.5,152.7c.1.6.9.8,1.5.5s.9-.7,1.4-1.1c.4-.4,1.1-.7,1.6-.5.2,0,.4.3.6.5.3.4.4,1,.4,1.5,0,.8.1,1.5,0,2.3,0,0,0,0,0,.1-.2.8-.5,1.5-1.2,2-.7.5-1.6.5-2.4.3-.7-.2-1.4-.6-2.1-1,0,0-.1,0-.2,0"/><path class="cls-5" d="m184.5,147c-1.4.2-3,2-3.5,3.7-.6,1.8-.3,5.3.4,6.5.1.2.3.4.4.6.6.8,1.6,1.4,2.6,1.5,0,0,.1,0,.2,0"/><path class="cls-5" d="m196.6,152c.5-1,1.3-1.8,2.2-2.3.3-.1.5-.2.8-.3.4-.1.9-.2,1.3-.1.4,0,.9.4,1,.8.3.6,0,1.2-.2,1.8-.4,1-.8,1.9-1.1,2.9-.1.3-.2.6-.5.8-.4.4-1,.5-1.6.4-.5,0-1.1-.2-1.7-.1"/><path class="cls-5" d="m185.5,156.2c-.5.4-.7,1.1-.9,1.7-.1.5-.2,1-.3,1.4,0,.4-.1.8-.1,1.2,0,.6,0,1.2.4,1.6.4.5,1.2.6,1.9.7.7,0,1.5,0,2.1-.3.4-.3.6-.8.7-1.3s0-1.3-.2-2.2c-.5-2.1-1.9-4.4-3.6-2.8Z"/><path class="cls-5" d="m189.2,159c.9-.3,1.7-.9,2.1-1.7,0,0,0,0,0-.1"/><line class="cls-5" x1="120.7" y1="171.7" x2="120.8" y2="171.8"/><path class="cls-5" d="m110.9,169.5s0,0,0,0"/><path class="cls-5" d="m106.2,161.7c-.9.4-1.8,1-2.6,1.6-.9.7-1.7,1.5-2.5,2.4-.3.3-.6.7-.8,1.1s0,1,.3,1.3c.4.4,1.1.2,1.7,0,1.2-.4,2.3-.7,3.5-1,.4-.1.8-.2,1.2-.4.6.5.9,1.3,1,2.1,0,.7,0,1.5,0,2.2,0,1.5.2,3.4,1.6,4,1,.4,2.1,0,3.1-.8.3-.2.6-.5.8-.7.9-1,1.7-2,2.5-3.1.3-.5.7-1,.8-1.6,0,0,0,0,0-.1,0-.4,0-.9-.2-1.2,0-.2-.2-.4-.4-.5,0,0,0,0,0,0-.4-.3-.9-.3-1.4-.2-.2,0-.4,0-.6.2-.2,0-.4.2-.5.3-.5.3-1,.6-1.5,1-.5.4-1,.8-1.4,1.3"/><path class="cls-5" d="m120.7,167.7s0,0,0,0c-.2-.5-.5-1.1-.7-1.6"/><path class="cls-5" d="m112.7,174.1c0,0,0,.1,0,.2.4.9,1.4,1.5,2.5,1.6,1.1,0,2.1-.5,2.9-1.1,0,0,0,0,0,0,1-.8,1.9-1.8,2.5-3,.3-.6.5-1.3.6-2,0-.7,0-1.4-.4-1.9,0,0-.1-.1-.2-.2-.6-.4-1.4-.4-2.1-.2-.7.3-1.3.8-1.8,1.4,0,0,0,0-.1.1"/><path class="cls-5" d="m117.9,174.5c0,0,.2.2.3.2,1.7,1.3,4.2,1.5,6,.3,1.1-.8,1.9-2,2-3.3,0-.2,0-.3,0-.5,0-.6-.2-1.1-.6-1.6-.4-.4-1-.7-1.5-.5-.5.2-.8.6-1.1,1.1-.2.5-.4,1-.8,1.3-.4.4-1,.5-1.4.2"/><path class="cls-1" d="m154.6,67.2c-2.7-.2-5.6.2-7.1,1.4-1.2,0-1.7-2.7-1.3-3,1.8-1.1,5.6-.3,7.8.2.4,0,.6.6.5,1.3Z"/><path class="cls-2" d="m141.5,92.4c3.6.9,7.6.5,10.9-1.2"/><line class="cls-1" x1="169.8" y1="174.1" x2="169.9" y2="174.1"/><polyline class="cls-1" points="150.8 119.4 150.8 119.4 151.4 119.5"/><line class="cls-1" x1="149" y1="125.2" x2="149" y2="125.2"/><line class="cls-1" x1="144.3" y1="129.8" x2="144.4" y2="129.5"/><line class="cls-1" x1="126.7" y1="158.1" x2="126.8" y2="158.1"/><path class="cls-1" d="m152.3,111c0,.5-.1,1.1-.2,1.6,0,0,0,0,0,0-.3,2.4-.8,4.6-1.3,6.6-.7,2.7-1.4,4.9-1.8,5.8h0c-.1.3-.2.5-.2.5,0,0-.2-.1-.4-.3-.7-.6-2.3-1.8-4.1-3.2-2.8-2.3-6.3-5.4-8.1-7.5-.7-.9-1.2-1.6-1.2-2.1"/><path class="cls-1" d="m166.5,128.3c0,1.1.2,2.2.3,3.3,0,.3,0,.5,0,.8.2,2.8.4,5.5.5,8.4,0,1.1.1,2.1.2,3.2,0,.6,0,1.3.1,2,0,1.1.1,2.3.2,3.5,0,1.5.2,3.2.3,5,0,1.1.2,2.3.3,3.5,0,.5,0,1.1.1,1.7.2,1.8.3,3.8.5,5.7.1,1.5.3,2.9.4,4.4,0,.7.1,1.4.2,2.1,0,.8.2,1.6.2,2.4h0c.1,1.3.3,2.7.4,3.9,0,.8.2,1.6.3,2.3.3,2.5.6,4.8.9,6.7-.4,0-.9.1-1.5.3-3.3.9-9.4,3.3-10.4,2.9-1.1-.5-4.4-5.6-4.9-5.6,0,0-2.7,5.1-5,5.9-2.3.8-5.3.5-7.7.4-5.5-.3-11.2-.4-16.1-3.1-.3-.2-.6-.4-1-.6"/><path class="cls-1" d="m125.2,137c0,.2,0,.4,0,.8.2,2.5.4,8.9.6,10.4.1.8.2,1.6.3,2.4.3,2.3.6,4.6.6,7,0,.2,0,.5,0,.7h0c0,1.5,0,3.7-.1,6.2,0,1.6,0,3.3-.2,5,0,.8,0,1.6,0,2.4,0,.6,0,1.2,0,1.8-.2,3.3-.4,6.3-.8,8.1"/><path class="cls-1" d="m125.1,187.3c0-.9.4-4.8.5-5.7"/><path class="cls-1" d="m148.4,125.4h0c-1.4,1.4-2.6,3-3.3,4.9-.3-.1-.5-.2-.8-.4h0c-2-1-3.9-2.1-5.8-3.4-.4-.3-.8-.6-1.2-.9-.6-.4-1.1-.9-1.7-1.3-3.1-2.5-5.8-5.5-8-8.7-.2-.2-.3-.4-.4-.6s-.4-.6-.5-1c-.2-.9.7-1.7,1.6-2.2,2.2-1,3.2-1.8,5.3-3"/><path class="cls-1" d="m148.8,125.7c1.8,7.9,3.1,18.9,4,29.3.1,1.6.3,3.3.4,4.9.2,1.9.3,3.8.4,5.6.1,1.7.2,3.3.3,4.9.1,1.9.2,3.6.3,5.2.3,5.6.5,9.2.5,9.2"/><path class="cls-1" d="m149,125.2c1.4,1.2,3.4,2.1,4.7,3.3,0,0,.1.1.2.2.2.2.4.3.6.3.4,0,.7-.3.9-.6.8-1,1.4-2.3,1.8-3.6.2-.7.4-1.3.5-2,.2-1,.4-2,.6-3,.3-1.5.6-2.9,1.2-4.1.3-.7.6-1.6.7-2.4,0-.7,0-1.4-.6-1.9-.4-.4-.9-.6-1.4-.9-2.8-1.3-2.4-1.1-5.2-2.4"/><path class="cls-1" d="m125.5,135.5c7.4.8,13.3,1,20.7.3-7.2,5.5-11.8,10.2-19.7,14.6"/><path class="cls-1" d="m166.8,131.6h0c-4.2,2.1-8.8,3.4-13.5,3.8,4.7,2.9,9.4,5.7,14.1,8.6h0"/><path class="cls-1" d="m126.8,158.1c3.8-2.4,14-9.1,15.1-9.1,1.1,0,8.4,4,11,6,0,0,.1,0,.2.1,2-2.3,8.1-6,8.6-6,.5,0,4.5,3.4,6.5,5.4"/><path class="cls-1" d="m126.7,164.3c3.3-2,15.8-10.5,15.8-10.5,1,.3,10.7,6,10.7,6,1.5-1,8.6-5.3,8.6-5.3,0,0,5.2,4.3,6.7,5,0,0,0,0,0,0"/><path class="cls-1" d="m126.5,169.3c4.6-3.2,11.5-7.6,16.5-10,3.6,1.8,7,4.3,10.6,6.1,0,0,.1,0,.2,0,2.5-1.2,6.5-4.4,8.7-6.1,2.1,1.5,4.4,4.4,6.5,5.9h0"/><path class="cls-1" d="m126.7,173.5c3.3-1.7,15.2-7.9,16.4-8.4.9-.4,10.1,5.1,10.9,5.3.8.1,6.9-5,9-5.9,2,1.4,4.5,3.8,6.5,5.2,0,0,0,0,0,0"/><path class="cls-1" d="m138,171c.5-.4,1.9-1.5,2.5-1.4.6,0,1.3.7,1.1,1.3-.1.3-.4.6-.7.8-1.3,1-2.7,1.9-4,2.9-1.7,1.2-4.6,3.1-5.2,3.5-.9.6-2.3-.4-1.5-1.2,1.3-1.3,5.7-4.4,7.8-5.8Z"/><path class="cls-1" d="m136.8,177.6c.5-.4,1.9-1.5,2.5-1.4.6,0,1.3.7,1.1,1.3,0,.4-.4.6-.7.8-1.3,1-2.7,1.9-4,2.9-1.7,1.2-4.6,3.1-5.2,3.5-.9.6-2.4-.4-1.5-1.2,1.3-1.3,5.7-4.4,7.8-5.8Z"/><path class="cls-1" d="m138.1,182.9c.5-.3,1.7-1.3,2.3-1.3.6,0,1.2.6,1,1.2,0,.3-.4.5-.6.7-1.2.9-2.4,1.7-3.6,2.6-1.5,1.1-4.1,2.8-4.7,3.2-.8.5-2.1-.4-1.3-1.1,1.2-1.2,5.1-4,6.9-5.3Z"/><path class="cls-1" d="m152.3,173.2c.4.3,1.7.9,1.8,1.4,0,.5-.4,1.1-1,1.1-.3,0-.6-.1-.9-.3-1.1-.7-2.3-1.3-3.4-2-1.4-.8-3.7-2.3-4.2-2.7-.7-.5,0-1.7.9-1.4,1.5.6,5.2,2.7,6.9,3.8Z"/><path class="cls-1" d="m152.6,179.1c.4.3,1.7.9,1.8,1.4s-.4,1.1-1,1.1c-.3,0-.6-.1-.9-.3-1.1-.7-2.2-1.3-3.4-2-1.4-.8-3.6-2.3-4.1-2.7-.7-.5,0-1.7.9-1.3,1.4.6,5.1,2.7,6.7,3.8Z"/><path class="cls-1" d="m152.1,184.7c.4.2,1.6.8,1.7,1.2,0,.4-.4,1-1,1-.3,0-.6-.1-.9-.2-1.1-.6-2.2-1.2-3.3-1.7-1.4-.7-3.5-2-4-2.3-.7-.4,0-1.6.9-1.3,1.4.5,5,2.4,6.5,3.3Z"/><path class="cls-1" d="m155.6,175.4c0-.2,0-.3.2-.5.8-1.2,3.5-4,4.8-5.2.3-.3,1.2-1.3,1.6-1.3.4,0,.7.5.7,1s0,.1,0,.2c0,.3-.3.5-.4.7-.8.9-1.6,1.7-2.4,2.6-1,1.1-2.8,2.8-3.2,3.1-.5.4-1.1,0-1.1-.7Z"/><path class="cls-1" d="m159.9,175.8c.3-.3,1.2-1.3,1.6-1.3.4,0,.8.6.7,1.2,0,.3-.3.5-.4.7-.8.9-1.6,1.7-2.4,2.6-1,1.1-2.8,2.8-3.2,3.1-.6.5-1.5-.4-.9-1.2.8-1.2,3.5-4,4.8-5.2Z"/><path class="cls-1" d="m160.8,180.7c.3-.3,1-1.2,1.4-1.2.4,0,.7.6.6,1.1,0,.3-.2.5-.4.7-.7.8-1.5,1.6-2.2,2.4-.9,1-2.5,2.5-2.9,2.9-.5.5-1.3-.4-.8-1.1.7-1.1,3.1-3.7,4.2-4.8Z"/><path class="cls-1" d="m169.8,174.1h0c-.7-.6-1.5-1.2-2.2-1.8-.9-.8-2.4-2.2-2.7-2.5-.1-.1-.2-.3-.2-.5,0-.5.4-1,.8-.7.9.5,3.1,2.2,4.2,3.2h0"/><path class="cls-1" d="m170.5,180.4h0c-.2,0-.4-.1-.5-.3-.7-.6-1.4-1.3-2.1-1.9-.9-.8-2.3-2.2-2.6-2.5-.4-.5,0-1.6.5-1.2.9.6,3.2,2.6,4.2,3.6"/><path class="cls-1" d="m170,183.3c.3.2,1,.8,1.1,1.1,0,.4-.2.9-.6,1-.2,0-.4-.1-.5-.2-.7-.5-1.4-1.1-2.1-1.7-.9-.7-2.2-1.9-2.5-2.2-.4-.4,0-1.5.5-1.2.9.5,3.1,2.3,4.1,3.2Z"/><path class="cls-1" d="m146.4,141.2c-.5,0-1.1.2-1.2.7,0,.4.3.8.7,1,.8.5,1.7.8,2.6.8,1,0,2.2-.8,1.2-1.8-.6-.6-2.4-.8-3.2-.8Z"/><path class="cls-1" d="m145.6,145.2c-.5-.1-1.1-.2-1.4.3-.2.3-.2.7,0,1s.4.5.7.7c1,.7,2.2,1.1,3.4,1.4.4.1.9.2,1.2-.1,1.3-1.5-3.1-3.1-3.8-3.3Z"/><path class="cls-1" d="m153.9,143c.3.3.7.3,1.1.2.6-.1,1.2-.4,1.7-.8,1.4-1,.3-2-1-1.8-.8,0-2.8,1.4-1.8,2.4Z"/><path class="cls-1" d="m154.8,145.5c-.5.4-1,.9-.8,1.5.2.5.9.7,1.5.6,1.6-.1,3.1-1.1,4.4-2,.3-.2.6-.5.8-.8,1.1-1.7-1.2-1.6-2.1-1.3-1.4.4-2.6,1.1-3.8,1.9Z"/><path class="cls-1" d="m144.2,122.2c.3,2.4.3,4.9.3,7.3h0"/><path class="cls-1" d="m144.2,122.2h0"/><path class="cls-1" d="m144.2,122.2s0,0,0,0"/><path class="cls-1" d="m127.9,115.3c2.9-.3,5.4-.3,8.3-.7-.3,3.2-.2,6.2-.5,9.4h0c2.8-.6,5.6-1.2,8.4-1.8,0,0,0,0,0,0"/><path class="cls-1" d="m154.4,128.5s0,0,0,0c0,0,0,0,0,0-1.5-2.8-2.5-5.8-3-8.9,2.5.5,4.5.5,7.1.1-1.9-2.7-3.7-4.9-6.4-6.9,0,0,0,0,0,0h0c2.7-.8,4.9-1.2,7.7-1.6"/><path class="cls-1" d="m154.2,128.1c0,.1.1.3.2.4"/><path class="cls-1" d="m109.8,135.8c.4,1.8.8,1.5,1.9,3,.9,1.2,2.1,2.1,3.5,2.9,2.9,1.6,6.3,2.3,9.6,2.1,0,0,.2,0,.2,0"/><path class="cls-1" d="m176.4,137.5s0,0,0,0c-3.3,3-4.5,2.7-8.9,3.2,0,0,0,0,0,0"/><path class="cls-1" d="m114.8,130.3c-.8,2-.9,4.2-.2,6.2,1.9-1.1,3.7-2.6,4.6-4.6.4-1,.7-2,.7-3.1,0-.6-.2-2.8-.9-3.1-.6-.2-2,1.3-2.4,1.7-.8.8-1.4,1.8-1.8,2.8Z"/><path class="cls-1" d="m117.3,138.7c1.2.7,2.7.9,4.1.4,1.2-.4,4-2.7,1.3-3.1-1.9-.3-4.2,1.3-5.4,2.7Z"/><path class="cls-1" d="m167.7,132.3c0,.2.2.4.6.7.8.5,5.9,1.9,5.2.2,0-.1,0-.2-.2-.3-.4-.7-2.8-1.3-3.6-1.3-.7,0-2,.2-2,.8Z"/><path class="cls-1" d="m123.6,114.8s0,0,0,0c3.2,4,6.5,9.3,8.5,14.1,1.9-.7,3.7-1.9,5.1-3.4"/><path class="cls-1" d="m157.9,122.7c1.4.6,2.7,1.3,3.8,2.3,1.6-3.1,3.5-6.7,5.3-9.6,0,0,0,0,0,0"/><path class="cls-1" d="m120.9,116.2c4.5,5.3,8.3,11.2,11.4,17.5,1.8-2.6,3.9-5.1,6.2-7.2h0"/><path class="cls-1" d="m157.3,124.7h0c2.2,1.2,4.1,2.4,5.9,4.2,1.6-3.7,3.7-7,5.7-10.6"/><path class="cls-5" d="m157,66.4c.2.4.4.8.6,1.2"/><path class="cls-1" d="m121,89s0,0,0,0c1,1.4,2.6,3,4.1,2.3.9-.4,1.3-1.5,1.3-2.4,0-1-.5-1.9-.9-2.7-1.4-2.9-2.8-5.9-4.2-8.8-1-2.1-2-4.3-1.8-6.7.2-2.2,1.5-4.1,3.1-5.5,1.6-1.4,3.6-2.4,5.6-3.2,4.9-2.1,13.3-5.9,18.7-5.5,5,.3,7.6,4.8,10.1,10"/><polygon class="cls-3" points="136.5 27.3 148.4 38.7 159.8 26.8 147.9 15.4 136.5 27.3"/><polyline class="cls-3" points="120.7 166.1 122.1 166.4 125.1 150.2 122.6 149.7 117.9 148.9 109.5 147.3 108.9 147.2 106.4 160.9 106.2 161.7 105.9 163.4 106.8 163.6 109.9 164.1 115 165.1 117.5 165.5"/><polyline class="cls-3" points="107.3 163.6 109.9 164.1 115 165.1 117.5 165.5 117.7 165.6 118.9 165.8 118.9 165.8 120 166 120.7 166.1"/><polygon class="cls-3" points="196.7 119.3 182 126.6 174.7 111.8 189.5 104.6 196.7 119.3"/><path class="cls-1" d="m170.1,187.4c.9,5.7,6.4,47.7,6.4,53.9-.5.2-1,.3-1.6.5-4.5,1.4-10.2,2.7-17.1,3.4-3.3.3-7,.5-10.8.5s-8-.3-13.1-1c-6.5-.8-13.1-2-16.1-3.4-1-.5-1.6-1-1.6-1.5"/><path class="cls-1" d="m116.2,239.9s8.5-44.5,9.8-52.1c0,0,0,0,0,0"/><path class="cls-1" d="m174.8,241.3c0,.2,0,.4,0,.6.5,6.2.5,11.3.5,13"/><path class="cls-1" d="m157.7,244.9c0,.1,0,.2,0,.4,3.1,12.4,8.5,29.6,9.2,37,0,.1,0,.2,0,.3"/><path class="cls-1" d="m134,244.5c0,.1,0,.2,0,.4-1.4,5-2.8,9.7-3.7,12.9-1.1,4.1-3,10.8-3.7,22.6,0,.2,0,.5,0,.7,0,0,0,.2,0,.3"/><path class="cls-1" d="m117.9,240.9c0,.2,0,.4,0,.6-.8,10.1-.9,28.3-2.3,36.7"/><path class="cls-1" d="m175.4,254.8c0,2.9.5,21.6,1.3,24.2"/><path class="cls-4" d="m189.4,294.7c-4.3.5-9-.2-12.9-1.8-2.9-1.2-5.4-2.9-7.2-5.1-1.1-1.4-1.8-3-2.1-4.7,0-.3,0-.6-.1-.9,0-.1,0-.3,0-.4"/><path class="cls-4" d="m176.7,279c1.8.8,4,1.8,6.3,3,1.8.9,3.8,1.9,5.5,2.8,1.7.9,3.3,1.7,4.6,2.4,1.4.8,2.8,2.4,2.9,4,.1,2-2,2.6-4.1,3.1,0,0,0,0,0,0-.8.2-1.6.3-2.5.4"/><path class="cls-4" d="m126.2,279.7c.1.2.2.4.3.7.1.4.2.9.1,1.3,0,.7-.3,1.4-.6,2-.4.8-1,1.4-1.7,2.1h0c-.4.4-.8.7-1.2,1-2.2,1.7-4.2,3-6.4,4-3,1.5-6.2,2.5-10.1,3.6-.9.3-1.8.5-2.7.6-.6,0-1.2.1-1.8,0-.8,0-1.5-.3-2.2-.7-.7-.4-1.2-.9-1.6-1.5-.6-1.2-.4-2.6.2-3.7,0-.2.2-.4.3-.5.9-1.3,2.2-2.2,3.5-3,0,0,0,0,.1,0,1.7-1.1,3.3-2.1,5-3.1,2.5-1.5,5.1-2.9,7.9-4.3"/><path class="cls-4" d="m107.7,282.3s0,0,0,.1c-.4.8-.9,1.6-.9,2.5,0,.9.3,2,1.1,2.4.7.4,1.6.3,2.4.2,4.7-.5,9.5-1.1,14.1-1.9-.2,0-.5,0-.7.2"/><path class="cls-4" d="m102.7,285c0,.2-.1.3-.1.5-.1.9.5,1.9.5,2.9,0,1.1-.6,2.2-1.3,3.1-.7.9-1.5,1.8-1.9,2.8"/><path class="cls-4" d="m103.8,295.3c0,0,0-.2.1-.2,1-2,3.2-3.3,5.4-3.9,2.4-.6,4.8-.6,7.3-.5"/><path class="cls-4" d="m168.5,287.6c.2,0,.5.2.8.2,3.5,1,7.3,1.1,11,1.2,1.5,0,3.2,0,4.1-1.1.6-.8.6-1.9.2-2.8-.4-.9-.9-2.3-1.6-3"/><path class="cls-4" d="m176,293c.1,0,.3,0,.4-.1,4-1.3,9.3-.2,12.9,1.8h0"/><path class="cls-4" d="m188.4,285c-.6.2-.8.9-.8,1.5,0,.6.4,1.1.7,1.6l3.5,5.9"/><path class="cls-4" d="m98.5,289.1h0c-2.2,2.3-1.7,6.4,1,8.1,2,1.3,4.6,1.2,7,1,5.2-.4,10.6-1.4,14.8-4.3,4-2.8,6.6-7.8,5.3-12.2,0-.2-.1-.4-.2-.6,0,0,0,0,0,0"/><path class="cls-4" d="m167.1,283.1c-1.2,1.9-.6,4.5.8,6.3,1.4,1.8,3.5,3,5.6,4.1,4.7,2.4,9.8,4.2,15.2,4.5,2.3.2,4.7,0,6.6-1.3,1.8-1.3,2.5-4.2.8-5.6"/></svg>')}`;
export default image;
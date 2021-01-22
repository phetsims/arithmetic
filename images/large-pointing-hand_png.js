/* eslint-disable */
import asyncLoader from '../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = 'data:image/png;base64,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';
export default image;
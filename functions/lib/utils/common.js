"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.millisToMinutesAndSeconds = void 0;
/**
 * Helper function to convert milliseconds to mm:ss format
 */
const millisToMinutesAndSeconds = (millis) => {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ':' + (parseInt(seconds) < 10 ? '0' : '') + seconds;
};
exports.millisToMinutesAndSeconds = millisToMinutesAndSeconds;
//# sourceMappingURL=common.js.map
import * as events from "./base/event";
import * as media from "./base/export";
import * as endpoint from "./endpoint/endpoint";
import * as resolution from "./base/resolutionfind";

import * as device from "./base/device";

export const Events = events.default;
export const Media = media;
export const Endpoint = endpoint.default;
export const GetSupportCameraResolutions = resolution.default;
export const GetAllScanResolution = resolution.GetAllScanResolution;
export const isSupportResolution = resolution.isSupportResolution;
export const GetAllMediaDevice = device.GetAllMediaDevice;

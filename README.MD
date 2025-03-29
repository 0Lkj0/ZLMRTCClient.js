# zlmrtc-client
+ zlmrtc-client is javscript webrtc client sdk for  ZLMediakit 

## Install
```bash
npm install zlmrtc-client
```
## Usage
```javascript
import {Events, Endpoint} from "zlmrtc-client"

//对讲实例创建
const broadcastRtc = new Endpoint({
    debug: env,
    zlmsdpUrl: url,
    simulecast: false,
    useCamera: false,
    audioEnable: true,
    videoEnable: false,
    recvOnly: false,
});
// 不支持webrtc
broadcastRtc.on(Events.WEBRTC_NOT_SUPPORT, () => {
    console.log("不支持webrtc");
});
```
## Endpoint Options
| 属性/参数 |   类型   | 描述                                                     |
| :--: |:------:|:-------------------------------------------------------|
| element | Object | 用于显示接收到的远程媒体流的video元素                                  |
| debug |  Boolean   | 指定是否启用调试模式。启用后输出调试日志，有助于问题的排查和调试                       |
| zlmsdpUrl |  String   | 指向用于SDP（会话描述协议）消息交换的服务器的URL。在WebRTC通信中，SDP消息用于协商媒体流的参数 |
| simulcast |  Boolean   | 指定是否启用多路复用（Simulcast）。允许同时发送多个分辨率和比特率的视频流              |
| useCamera |  Boolean   | 指定是否使用摄像头作为视频源。如果为false，可能需要使用屏幕共享或其他视频源               |
| audioEnable |  Boolean   | 是否启用音频流                                                |
| videoEnable |  Boolean   | 是否启用视频流                                                |
| recvOnly |  Boolean   | 指定是否仅接收媒体流（即作为接收端）。如果为true，则不会发送本地媒体流到远端               |
| resolution |   Object   | 指定期望的视频分辨率。包含w（宽度）和h（高度）属性。如果这两个值非零，则用于设置视频流的分辨率       |
| usedatachannel |  Boolean   | 指定是否使用数据通道（DataChannel）。数据通道允许在WebRTC连接上直接发送和接收任意数据    |
| videoId |  String   | 视频id                                                   |
| audioId |  String   | 音频id                                                   |

## Events Options

| 事件 | 描述 |
| -- | --- |
| `WEBRTC_NOT_SUPPORT` | 浏览器不支持WebRTC |
| `WEBRTC_ICE_CANDIDATE_ERROR` | ICE候选收集过程中发生错误 |
| `WEBRTC_OFFER_ANSWER_EXCHANGE_FAILED` | Offer/Answer交换失败 |
| `WEBRTC_ON_REMOTE_STREAMS` | 接收到远程媒体流 |
| `WEBRTC_ON_LOCAL_STREAM` | 获取到本地媒体流 |
| `WEBRTC_ON_CONNECTION_STATE_CHANGE` | WebRTC连接状态发生变化 |
| `WEBRTC_ON_DATA_CHANNEL_OPEN` | 数据通道成功打开 |
| `WEBRTC_ON_DATA_CHANNEL_CLOSE` | 数据通道关闭 |
| `WEBRTC_ON_DATA_CHANNEL_ERR` | 数据通道发生错误 |
| `WEBRTC_ON_DATA_CHANNEL_MSG` | 接收到数据通道消息 |
| `CAPTURE_STREAM_FAILED` | 捕获媒体流失败 |

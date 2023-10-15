"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseSinkPacket = exports.SetSinkVolume = exports.GetSinkList = exports.GetSink = void 0;
const getSink_1 = require("./getSink");
exports.GetSink = getSink_1.default;
const getSinkList_1 = require("./getSinkList");
exports.GetSinkList = getSinkList_1.default;
const setSinkVolume_1 = require("./setSinkVolume");
exports.SetSinkVolume = setSinkVolume_1.default;
const parseSinkPacket = (packet, protocol) => {
    const sinks = [];
    const tags = packet.getTagsIterable();
    while (!tags.done) {
        const sink = {
            index: tags.nextValue(),
            name: tags.nextValue(),
            description: tags.nextValue(),
            sampleSpec: tags.nextValue(),
            channelMap: tags.nextValue(),
            moduleIndex: tags.nextValue(),
            channelVolume: tags.nextValue(),
            isMuted: tags.nextValue(),
            monitorSourceIndex: tags.nextValue(),
            monitorSourceName: tags.nextValue(),
            latency: tags.nextValue(),
            driverName: tags.nextValue(),
            flagsRaw: tags.nextValue(),
            properties: tags.nextValue(),
            configLatency: tags.nextValue(),
            baseVolume: tags.nextValue(),
            state: tags.nextValue(),
            volumeSteps: tags.nextValue(),
            cardIndex: tags.nextValue(),
            numberPorts: tags.nextValue()
        };
        sink.ports = [];
        for (let index = 0; index < sink.numberPorts; index++) {
            const port = {
                name: tags.nextValue(),
                description: tags.nextValue(),
                priority: tags.nextValue(),
                available: tags.nextValue()
            };
            if (protocol >= 34) {
                port.availabilityGroup = tags.nextValue();
                port.type = tags.nextValue();
            }
            sink.ports.push(port);
        }
        sink.activePortName = tags.nextValue();
        sink.formats = tags.nextValue();
        sinks.push(sink);
    }
    return sinks;
};
exports.parseSinkPacket = parseSinkPacket;
//# sourceMappingURL=index.js.map
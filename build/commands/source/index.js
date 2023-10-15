"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseSourcePacket = exports.SetSourceVolume = exports.GetSourceList = exports.GetSource = void 0;
const getSource_1 = require("./getSource");
exports.GetSource = getSource_1.default;
const getSourceList_1 = require("./getSourceList");
exports.GetSourceList = getSourceList_1.default;
const setSourceVolume_1 = require("./setSourceVolume");
exports.SetSourceVolume = setSourceVolume_1.default;
const parseSourcePacket = (packet, protocol) => {
    const sources = [];
    const tags = packet.getTagsIterable();
    while (!tags.done) {
        const source = {
            index: tags.nextValue(),
            name: tags.nextValue(),
            description: tags.nextValue(),
            sampleSpec: tags.nextValue(),
            channelMap: tags.nextValue(),
            moduleIndex: tags.nextValue(),
            channelVolume: tags.nextValue(),
            isMuted: tags.nextValue(),
            monitorSinkIndex: tags.nextValue(),
            monitorSinkName: tags.nextValue(),
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
        source.ports = [];
        for (let index = 0; index < source.numberPorts; index++) {
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
            source.ports.push(port);
        }
        source.activePortName = tags.nextValue();
        source.formats = tags.nextValue();
        sources.push(source);
    }
    return sources;
};
exports.parseSourcePacket = parseSourcePacket;
//# sourceMappingURL=index.js.map
const FanDevice = require('../FanDevice.js');
const Constants = require('../../../constants/Constants.js');
const PropFormat = require('../../../constants/PropFormat.js');
const PropUnit = require('../../../constants/PropUnit.js');
const PropAccess = require('../../../constants/PropAccess.js');


class ZhimiFanV3 extends FanDevice {
  constructor(miotDevice, name, logger) {
    super(miotDevice, name, logger);
  }


  /*----------========== DEVICE INFO ==========----------*/

  getDeviceName() {
    return 'Smartmi Standing Fan V3';
  }

  getMiotSpecUrl() {
    return 'https://miot-spec.org/miot-spec-v2/instance?type=urn:miot-spec-v2:device:fan:0000A005:zhimi-v3:1';
  }


  /*----------========== CONFIG ==========----------*/

  requiresMiCloud() {
    return true;
  }

  propertiesToMonitor() {
    return [];
  }


  /*----------========== METADATA ==========----------*/

  initDeviceServices() {
    this.createServiceByString('{"siid":2,"type":"urn:miot-spec-v2:service:fan:00007808:zhimi-v3:1","description":"Fan"}');
    this.createServiceByString('{"siid":3,"type":"urn:miot-spec-v2:service:physical-controls-locked:00007807:zhimi-v3:1","description":"Physical Control Locked"}');
    this.createServiceByString('{"siid":4,"type":"urn:miot-spec-v2:service:battery:00007805:zhimi-v3:1","description":"Battery"}');
  }

  initDeviceProperties() {
    this.addPropertyByString('fan:on', '{"siid":2,"piid":1,"type":"urn:miot-spec-v2:property:on:00000006:zhimi-v3:1","description":"Switch Status","format":"bool","access":["read","write","notify"]}');
    this.addPropertyByString('fan:fan-level', '{"siid":2,"piid":2,"type":"urn:miot-spec-v2:property:fan-level:00000016:zhimi-v3:1","description":"Fan Level","format":"uint8","access":["read","write","notify"],"valueRange":[1,4,1]}');
    this.addPropertyByString('fan:horizontal-swing', '{"siid":2,"piid":3,"type":"urn:miot-spec-v2:property:horizontal-swing:00000017:zhimi-v3:1","description":"Horizontal Swing","format":"bool","access":["read","write","notify"]}');
    this.addPropertyByString('fan:horizontal-angle', '{"siid":2,"piid":4,"type":"urn:miot-spec-v2:property:horizontal-angle:00000019:zhimi-v3:1","description":"Horizontal Angle","format":"uint16","access":["read","write"],"valueRange":[30,120,1]}');
    this.addPropertyByString('fan:mode', '{"siid":2,"piid":5,"type":"urn:miot-spec-v2:property:mode:00000008:zhimi-v3:1","description":"Mode","format":"uint8","access":["read","write"],"valueList":[{"value":0,"description":"Straight Wind"},{"value":1,"description":"Natural Wind"}]}');
    this.addPropertyByString('physical-controls-locked:physical-controls-locked', '{"siid":3,"piid":1,"type":"urn:miot-spec-v2:property:physical-controls-locked:0000001D:zhimi-v3:1","description":"Physical Control Locked","format":"bool","access":["read","write","notify"]}');
    this.addPropertyByString('battery:battery-level', '{"siid":4,"piid":1,"type":"urn:miot-spec-v2:property:battery-level:00000014:zhimi-v3:1","description":"Battery Level","format":"uint8","access":["read","notify"],"valueRange":[0,100,1]}');
    this.addPropertyByString('battery:charging-state', '{"siid":4,"piid":2,"type":"urn:miot-spec-v2:property:charging-state:00000015:zhimi-v3:1","description":"Charging State","format":"uint8","access":["read","notify"],"valueList":[{"value":1,"description":"Charging"},{"value":2,"description":"Charge Complete"}]}');
  }

  initDeviceActions() {
    this.addActionByString('fan:toggle', '{"siid":2,"aiid":1,"type":"urn:miot-spec-v2:action:toggle:00002811:zhimi-v3:1","description":"Toggle","in":[],"out":[]}');
  }

  initDeviceEvents() {
    //no events
  }


  /*----------========== CONFIG OVERRIDES ==========----------*/

  straightWindModeValue() {
    return 0;
  }

  naturalModeValue() {
    return 1;
  }


  /*----------========== PROPERTY OVERRIDES ==========----------*/


  /*----------========== ACTION OVERRIDES ==========----------*/


  /*----------========== OVERRIDES ==========----------*/


}

module.exports = ZhimiFanV3;

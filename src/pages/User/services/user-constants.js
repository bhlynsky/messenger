const ACTIONS_LABELS = {
  EDIT: 'Edit',
  CLOSE: 'Close',
  OPEN: 'Open',
  SAVE: 'Save',
};

const userConstants = {
  PAGE: 'User Page',
  USERNAME: 'Username',
  EMAIL: 'Email',
  CHANGE_NAME: 'Change User Name',
  CHANGE_IMAGE: 'Change Image',
  CHANGE_EMAIL: 'Change Email',
  ACTIONS_LABELS,
};

export { userConstants, ACTIONS_LABELS };

/*
* for several constants use next approach

const TYPES = {
    powerOn: 'power on',
    powerOff: 'power off'
};

const messageConstants = [
    {
        label: TYPES.powerOn,
        value: TYPES.powerOn
    },
    {
        label: TYPES.powerOff,
        value: TYPES.powerOff
    }
];

export {
    messageConstants,
    FIRMWARE_UPDATES_LABELS
};

* */

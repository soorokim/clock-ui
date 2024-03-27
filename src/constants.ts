type EE = {
  top: boolean;
  topLeft: boolean;
  topRight: boolean;
  middle: boolean;
  bottomLeft: boolean;
  bottomRight: boolean;
  bottom: boolean;
};

export const NUMBER_SETTING: EE[] = [
  {
    // 0
    top: true,
    topLeft: true,
    topRight: true,
    middle: false,
    bottomLeft: true,
    bottomRight: true,
    bottom: true,
  },
  {
    // 1
    top: false,
    topLeft: false,
    topRight: true,
    middle: false,
    bottomLeft: false,
    bottomRight: true,
    bottom: false,
  },
  {
    // 2
    top: true,
    topLeft: false,
    topRight: true,
    middle: true,
    bottomLeft: true,
    bottomRight: false,
    bottom: true,
  },
  {
    // 3
    top: true,
    topLeft: false,
    topRight: true,
    middle: true,
    bottomLeft: false,
    bottomRight: true,
    bottom: true,
  },
  {
    // 4
    top: false,
    topLeft: true,
    topRight: true,
    middle: true,
    bottomLeft: false,
    bottomRight: true,
    bottom: false,
  },
  {
    // 5
    top: true,
    topLeft: true,
    topRight: false,
    middle: true,
    bottomLeft: false,
    bottomRight: true,
    bottom: true,
  },
  {
    // 6
    top: true,
    topLeft: true,
    topRight: false,
    middle: true,
    bottomLeft: true,
    bottomRight: true,
    bottom: true,
  },
  {
    // 7
    top: true,
    topLeft: false,
    topRight: true,
    middle: false,
    bottomLeft: false,
    bottomRight: true,
    bottom: false,
  },
  {
    // 8
    top: true,
    topLeft: true,
    topRight: true,
    middle: true,
    bottomLeft: true,
    bottomRight: true,
    bottom: true,
  },
  {
    // 9
    top: true,
    topLeft: true,
    topRight: true,
    middle: true,
    bottomLeft: false,
    bottomRight: true,
    bottom: true,
  },
];

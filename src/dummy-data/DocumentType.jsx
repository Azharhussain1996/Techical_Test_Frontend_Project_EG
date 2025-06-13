const documentOwnerType = [
  {
    disabled: false,
    group: null,
    selected: false,
    text: "POSSESSION LETTER",
    value: 1,
  },
  {
    disabled: false,
    group: null,
    selected: false,
    text: "ALLOTMENT LETTER",
    value: 2,
  },
  {
    disabled: false,
    group: null,
    selected: false,
    text: "N.O.C FOR CONSTRUCTION",
    value: 3,
  },
  {
    disabled: false,
    group: null,
    selected: false,
    text: "OWNER VALID CNIC",
    value: 4,
  },
  {
    disabled: false,
    group: null,
    selected: false,
    text: "POWER OF ATTORNY",
    value: 5,
  },
  {
    disabled: false,
    group: null,
    selected: false,
    text: "ATTORNY’S CNIC",
    value: 6,
  },
];
const documentAttornayType = [
  {
    disabled: false,
    group: null,
    selected: false,
    text: "POSSESSION LETTER",
    value: 1,
  },
  {
    disabled: false,
    group: null,
    selected: false,
    text: "ALLOTMENT LETTER",
    value: 2,
  },
  {
    disabled: false,
    group: null,
    selected: false,
    text: "ORIGINAL N.O.C FOR CONSTRUCTION",
    value: 3,
  },
  {
    disabled: false,
    group: null,
    selected: false,
    text: "OWNER VALID CNIC",
    value: 4,
  },
  {
    disabled: false,
    group: null,
    selected: false,
    text: "ORIGINAL POWER OF ATTORNY ",
    value: 5,
  },
  {
    disabled: false,
    group: null,
    selected: false,
    text: "ATTORNY’S CNIC",
    value: 6,
  },
];

const ownerType = [
  {
    disabled: false,
    group: null,
    selected: false,
    text: "Owner",
    value: 1,
  },
  {
    disabled: false,
    group: null,
    selected: false,
    text: "Nominee",
    value: 2,
  },
];

const NatureOfConstruction = [
  {
    disabled: false,
    group: null,
    selected: false,
    Text: "Residential",
    Value: 1,
  },
  {
    disabled: false,
    group: null,
    selected: false,
    Text: "Commercial",
    Value: 2,
  },
  {
    disabled: false,
    group: null,
    selected: false,
    Text: "Apartments",
    Value: 3,
  },
  {
    disabled: false,
    group: null,
    selected: false,
    Text: "Public Building",
    Value: 4,
  },
];

const DesignProcessType = [
  {
    disabled: false,
    group: null,
    selected: false,
    Text: "In-House (Bahria)",
    Value: 1,
  },
  {
    disabled: false,
    group: null,
    selected: false,
    Text: "Out-Source",
    Value: 2,
  },
];

const DesignType = [
  {
    disabled: false,
    group: null,
    selected: false,
    Text: "New",
    Value: 1,
  },
  {
    disabled: false,
    group: null,
    selected: false,
    Text: "Revision",
    Value: 2,
  },
];

const DesignRequestFeature = [
  {
    disabled: false,
    group: null,
    selected: false,
    Text: "Basement",
    Value: 3,
  },
  {
    disabled: false,
    group: null,
    selected: false,
    Text: "Frame Structure",
    Value: 4,
  },
  {
    disabled: false,
    group: null,
    selected: false,
    Text: "Swimming Pool",
    Value: 5,
  },
];

const ResidentialDesignRequestFeature = [
  {
    disabled: false,
    group: null,
    selected: false,
    Text: "Basement",
    Value: 3,
  },
  {
    disabled: false,
    group: null,
    selected: false,
    Text: "Frame Structure",
    Value: 4,
  },
];

const PlotSize = [
  {
    disabled: false,
    group: null,
    selected: false,
    Text: "5 Marla",
    Value: 1,
  },
  {
    disabled: false,
    group: null,
    selected: false,
    Text: "8 Marla",
    Value: 2,
  },
  {
    disabled: false,
    group: null,
    selected: false,
    Text: "10 Marla",
    Value: 3,
  },
  {
    disabled: false,
    group: null,
    selected: false,
    Text: "1 kanal",
    Value: 4,
  },
  {
    disabled: false,
    group: null,
    selected: false,
    Text: "2 kanal",
    Value: 5,
  },
  {
    disabled: false,
    group: null,
    selected: false,
    Text: "4 kanal",
    Value: 5,
  },
];

const designStatus = [
  {
    disabled: false,
    group: null,
    selected: false,
    Text: "Acknowledged",
    Value: 16,
  },
  {
    disabled: false,
    group: null,
    selected: false,
    Text: "Cancel",
    Value: 12,
  },
  {
    disabled: false,
    group: null,
    selected: false,
    Text: "Reschedule",
    Value: 15,
  },
];
const IsApprovedArea = [
  { Disabled: false, Group: null, Selected: false, text: "None", value: 0 },
  {
    Disabled: false,
    Group: null,
    Selected: false,
    text: "LDA Approved",
    value: 1,
  },
  {
    Disabled: false,
    Group: null,
    Selected: false,
    text: "TMA Approved",
    value: 2,
  },
];

export {
  IsApprovedArea,
  designStatus,
  documentOwnerType,
  ownerType,
  documentAttornayType,
  NatureOfConstruction,
  DesignProcessType,
  DesignType,
  PlotSize,
  DesignRequestFeature,
  ResidentialDesignRequestFeature,
};

const GLOBAL = {
  SERVER_ERROR: "Internal Server Error",
  SOMETHING_WENT_WRONG: "Something Went wrong",
  CROSS_ORIGIN_ERROR:
    "Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource.",
  RESPONSE_ERRROR: "No response received from server",
  ACCESS_TOKEN: "DWAccessToken",
  ADMIN_ACCESS_TOKEN: "DWUserToken",
  UNAUTHORIZED: "You are unauthorized to access this application.",
  FILERECORD: "CustomerFile",
  PROFILE: "PROFILE",
  UNDERPROCESS: "Payment voucher generation under process",
  SCHEDULEUNDERPROCESS: "No meeting available",
  NOTFOUND: "Record not found",
  TERMANDCONDITION: "Agree the terms and Conditions",
  VOUCHERSLIMITS: "All vouchers must have attachments.",
  ATTACHMENTERROR: "Please attach file.",
  NEWATTACHMENTERROR: "Please attach new file.",
  MEPATTACHNMENT: "Please upload at least one file of MEP.",
  STRUCTURALATTACHNMENT: "Please upload at least one file of Structural.",
  PREPARATIONOFDOCUMENT: "LDA/TMA Approval",
  DRAWINGDUEDATE: "DrawingDueDate",
  APPORVELOFPLOT: {
    TITLE: "Approval of plot",
    MESSAGE:
      "The document for LDA/TMA approval is being prepared. You will be notified once it is ready.",
  },
  APPROVELPLOT: {
    TITLE: "Approval of plot",
    MESSAGE:
      "The document is being prepared. You will be notified once it is ready.",
  },
  ISSUANCEOFDOCUMENT: {
    TITLE: "Issuance of document",
    MESSAGE:
      "We are pleased to inform you that the drawing and other documents are ready for TMA/LDA approval. Kindly visit the Head Office to collect your copy at your earliest convenience.",
  },
  RECEIVINGOFDRAWING: {
    TITLE: "Receiving of document",
    MESSAGE:
      "We are pleased to inform you that the document are received by client.",
  },
  APPORVELOFDRAWING: {
    TITLE: "Approval of drawings",
    MESSAGE:
      "The drawings are being prepared. You will be notified once it is ready.",
  },
  COLLECTIONOFDRAWING: {
    TITLE: "Issuance of drawings",
    MESSAGE:
      "We are pleased to inform you that the drawings are ready. Kindly visit the Head Office to collect your copy at your earliest convenience.",
  },
  DRAWINGISSUED: {
    TITLE: "Receiving of drawings",
    MESSAGE:
      "We are pleased to inform you that the drawings are received by client.",
  },
  FILELIMIT:
    "Some files are invalid or exceed the 10MB size limit. Only the following types are allowed:  jpeg, jpg, png, pdf",
  DOCUMENTLIMIT:
    "Only the following types are allowed:  jpeg, jpg, png, pdf and file size should not exceed 20MB.",
  BASEMENTNONEEDED: "Basement is not needed",
  APP_Access_Keys: {
    APP_ACCESS_TOKEN: "DWAccessToken",
    ADMIN_ACCESS_TOKEN: "DWUserToken",
  },
  DEPARTMENTID: "053",
  DESIGNATIONID: "00054",
  DOCUMENT: 3,
  DWUSERTYPE: 4,
  DOCUMENTTYPE: {
    PROFILE: "1",
    CNIC: "2",
    NOC: "3",
  },
  PROFILESTATUS: {
    PENDING: 5,
    APPROVED: 6,
    REJECTED: 7,
  },
  TERMS: "1",
  SINGIN: "1",
  SIGNUP: "2",
  STATUS: {
    ALL: { KEY: "-1", VALUE: "All" },
    PENDING: { KEY: "6", VALUE: "Pending" },
    APPROVED: { KEY: "5", VALUE: "Approved" },
    REJECTED: { KEY: "7", VALUE: "Rejected" },
    OBJECTIONRAISED: { KEY: "8", VALUE: "Objection Raised" },
  },
  FILESTATUS: {
    ACTIVE: { KEY: "1", VALUE: "Active" },
  },
  PLOTSIZE: {
    FIVEMARLA: { KEY: 1 },
    EIGHTMARLA: { KEY: 2 },
    TENMARLA: { KEY: 3 },
    FOURKANAL: { KEY: 6 },
  },
  OWNERTYPE: {
    OWNER: "1",
    NOMINEE: "2",
  },
  MESSAGE: {
    SUCCESS: "success",
    ERROR: "error",
    WARNING: "warning",
  },
  DESIGNSTATUS: {
    APPROVED: { KEY: "1", VALUE: "Approved" },
    UNDERVERIFICATION: { KEY: "2", VALUE: "Under verification process" },
    AVAILABLEFORDESIGN: { KEY: "3", VALUE: "Available for design" },
    VERIFIED: { KEY: "4", VALUE: "verified" },
    REJECTED: { KEY: "5", VALUE: "Rejected" },
    PENDING: { KEY: "10", VALUE: "Pending" },
    RECEIVED: { KEY: "23", VALUE: "Received" },
    PREPAREDDRAWING: { KEY: "24", VALUE: "Drawing Preparing " },
    DRAWINGISSUANCE: { KEY: "25", VALUE: "Drawing Issuance" },
    ISSUEDDRAWING: { KEY: "26", VALUE: "Drawing Issued " },
  },
  DOCUMENTSTATUS: {
    APPROVED: { KEY: "1", VALUE: "Approved" },
    UNDERVERIFICATION: { KEY: "2", VALUE: "Under verification process" },
    AVAILABLEFORDESIGN: { KEY: "3", VALUE: "Available for design" },
    VERIFIED: { KEY: "4", VALUE: "verified" },
    REJECTED: { KEY: "5", VALUE: "Rejected" },
  },
  CNIC: {
    INVALID: "Invalid CNIC",
    REQUIRED: "CNIC is required",
    LENGTH: "CNIC must be 13 digits",
    MESSAGE: "Please attach two files for CNIC",
  },
  ATTORNY: {
    INVALID: "Invalid Attorny",
    REQUIRED: "Attorny is required",
    LENGTH: "Attorny must be 13 digits",
    MESSAGE: "Please attach two files for Attorny",
  },
  DESIGNPROCESS: {
    INHOUSE: { KEY: "InHOUSE", VALUE: 1 },
    OUTSOURCE: { KEY: "OutSource", VALUE: 2 },
  },
  STRUCTURALPROCESS: {
    STRUCTURALWORK: 1,
    MEPWORK: 2,
  },
  NATUREOFCONSTRUCTION: {
    RESIDENTIAL: { KEY: "Residential", VALUE: 1 },
    COMMERCIAL: { KEY: "Commercial", VALUE: 2 },
    APARTMENT: { KEY: "Apartment", VALUE: 3 },
    PUBLICBUILDING: { KEY: "Public Building", VALUE: 4 },
  },
  PLOTCATEGORY: {
    RESIDENTIAL: { KEY: "Residential", VALUE: 1 },
    COMMERCIAL: { KEY: "Commercial", VALUE: 2 },
    APARTMENT: { KEY: "Apartment", VALUE: 3 },
    PUBLICBUILDING: { KEY: "Public Building", VALUE: 4 },
  },
  STATUSFOR: {
    DESIGNREQUEST: "1",
    VOUCHERSTATUS: "2",
    SCHEDULESTATUS: "3",
  },
  ASSIGNTO: {
    NEW: 0,
    OWNER: 1,
    COMPANY: 2,
    VERIFIED: -1,
    CONSULTANT: 3,
  },
  DESIGNTYPE: {
    NEW: { KEY: "New", VALUE: 1 },
  },
  VOUCHERDESIGNTYPE: {
    NEW: { KEY: "New Design", DOCKEY: 15, DESIGNTYPE: 1 },
    REVISION: { KEY: "Revision", DOCKEY: 16, DESIGNTYPE: 2 },
    BASEMENT: { KEY: "Basement", DOCKEY: 17, DESIGNTYPE: 3 },
    FRAMESTRUCTURE: { KEY: "Frame Structure", DOCKEY: 18, DESIGNTYPE: 4 },
    SWIMMINGPOOL: { KEY: "Swimming Pool", DOCKEY: 19, DESIGNTYPE: 5 },
  },
  STEPNUMBER: {
    DOCUMENTMODEL: "1",
    PAYMENTMODEL: "2",
    SCHEDULEMODEL: "3",
    STRUCTURALWORK: "4",
    PLOTAPPROVAL: "5",
  },
  STATUSTITLE: {
    PAID: { KEY: "8", VALUE: "Paid" },
    UNPAID: { KEY: "9", VALUE: "Unpaid" },
    UNDERVERIFICATION: { KEY: "2", VALUE: "Under Verification" },
    OBJECTIONRAISED: { KEY: "6", VALUE: "Objection Raised" },
  },
  SCHEDULESTATUS: {
    ALL: { KEY: "-1", VALUE: "ALL" },
    PENDING: { KEY: "10", VALUE: "Pending" },
    ARRIVED: { KEY: "11", VALUE: "Arrived" },
    CANCEL: { KEY: "12", VALUE: "Cancel" },
    INPROGRESS: { KEY: "13", VALUE: "In-Progress" },
    MEETINGEND: { KEY: "14", VALUE: "Meeting End" },
    RESCHEDULE: { KEY: "15", VALUE: "Re-schedule" },
    ACKNOWLEDGED: { KEY: "16", VALUE: "Acknowledged" },
    DESIGNFINALIZED: { KEY: "17", VALUE: "Design Finalized" },
    NOTPRESENT: { KEY: "18", VALUE: "Not Present" },
    MEETINGCREATED: { KEY: "19", VALUE: "Meeting Created" },
    RECEIVED: { KEY: 23, VALUE: "Received" },
  },
  ATTACHMENTYPE: {
    STRUCTURAL: { KEY: "20", VALUE: "Structural" },
    MEP: { KEY: "21", VALUE: "MEP" },
  },
  CONSULTANTATTACHMENT: {
    STRUCTURAL: { KEY: "22", VALUE: "Structural" },
    MEP: { KEY: "23", VALUE: "MEP" },
  },
  COMPANYATTACHMENTTYPE: {
    STRUCTURAL: { KEY: "24", VALUE: "Structural" },
    MEP: { KEY: "25", VALUE: "MEP" },
  },
  STATUSFORCONSULTANT: {
    ACKNOWLEDGED: { KEY: "16", VALUE: "Acknowledged" },
    PENDING: { KEY: "10", VALUE: "Pending" },
    COMPLETED: { KEY: "20", VALUE: "Completed" },
    CONSULTANTWORKCOMPLETED: { KEY: "22", VALUE: "Consultant Work Completed" },
    INITIALDRAWING: { KEY: "21", VALUE: "Initial Drawing" },
  },
  DESIGNREQUESTFEATURE: {
    BASEMENT: { KEY: 3, VALUE: "BASEMENT" },
    FRAMESTRUCTURE: { KEY: 4, VALUE: "FRAME STRUCTURE" },
  },
  INITIALDESIGNFLOORS: {
    BASEMENT: { KEY: -1, VALUE: "BASEMENT" },
    GROUNDFLOOR: { KEY: 0, VALUE: "GROUND FLOOR" },
    MUMTY: { KEY: -2, VALUE: "MUMTY" },
  },
  APPROVALSTATUS: {
    PENDING: { KEY: "10", VALUE: "Pending" },
    RECEIVED: { KEY: "23", VALUE: "Received" },
  },
  APPROVALOFPLOT: {
    NONE: 0,
    LDA: 1,
    TMA: 2,
  },
};
export default GLOBAL;

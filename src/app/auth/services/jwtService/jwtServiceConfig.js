const jwtServiceConfig = {
  // signIn: 'api/auth/sign-in',
  // signUp: 'api/auth/sign-up',
  // accessToken: 'api/auth/access-token',
  // updateUser: 'api/auth/user/update',
  token: '/Token',
  passwordChange: 'api/EmployeeLeave/EmployeeForgotPassword',
  signIn: '/app/v1/login', // '/api/CustomerPasswordCheck/GetCustomerPasswordCheck',
  refCode: '/api/RefCode/ListRefCode',
  listUserCompany: '/api/UserCompany/ListUserCompany',
  getCompany: '/api/Company/GetCompany',
  listGeneralMaster: '/api/GeneralMaster/ListGeneralMaster',
  getCommodity: '/api/Commodity/GetCommodity', // top 50
  listCommodity: '/api/Commodity/ListCommodity',
  getCustomer: '/api/Customer/GetCustomer', // top 20
  listCustomer: '/api/Customer/ListCustomer',
  getTaxMaster: '/api/Accounts/GetTaxMaster',
  calculateTax: '/api/Accounts/CalculateTax',
  printReport: '/api/ReportAPI/PrintReport',
  getBufferFromURL: '/api/Common/GetBufferFromURL',
  uploadFile: '/api/TransportOrder/PostVendInvAttachments',
  getLoadReceipt: '/api/LoadReceipt/GetLoadReceiptList',
  listCity: '/api/City/ListCity',
  getLRNumber: '/api/LoadReceipt/GetLRNUMBER',
  getVendor: '/api/vendor/GetVendor',
  getParentCompany: '/api/Company/GetParentCompany',
  getVehicleRegisterMaster: '/api/LoadReceipt/GetVehicleRegisterMaster',
  getVRNumber: '/api/LoadReceipt/GetVRNumber', // top 50
  getLSMaster: '/api/LoadReceipt/GetLSMaster',
  getLoadSheetList: '/api/LoadReceipt/GetLoadSheetList',
  getLoadSheetSummary: '/api/LoadReceipt/GetLoadSheetSummary',
  getLRFromLS: '/api/LoadReceipt/GetLRFromLS',
  getSalesPerson: '/api/GetUserName/GetSalesPerson',
  postLSReceive: '/api/LoadReceipt/PostLSReceive',
  getLSReceiveNumber: '/api/LoadReceipt/GetLSReceiveNumber',
  getLRExpenseNumber: '/api/LoadReceipt/GetLRExpenseNumber',
  getLRExpenseInvoiceList: '/api/LoadReceipt/GetLRExpenseInvoiceList',
  getLRTaxMaster: '/api/LoadReceipt/GetLRTaxMaster',
  getAppConfig: '/api/AppConfig/GetAppConfigDetails',
  getCurrencyCode: 'api/Currency/GetCurrencyCode',
  getTruckMaster: 'api/TransportOrder/GetTruckMaster',
  getUploadConfig: 'api/UploadConfig/GetUploadConfig',
  listUploadConfig: 'api/UploadConfig/ListUploadConfig',
  port: 'api/Port/ListPort',
  salesPerson: 'api/GetUserName/GetSalesPerson',
  cargo: 'api/GeneralMaster/GetCargoMaster',
  chargeCode: 'api/Charge/GetChargeCode',
  getTariffMaster: 'api/DepotOnline/GetTariffMaster',
  getTarrifReference: 'api/RateRequest/GetTarrifReference',
  listSummary: 'api/RateRequest/ListSummary',
  listRRNumber: 'api/RateRequest/ListRRNumber',
  getCountry: 'api/Country/GetCountry',
  getState: 'api/Country/GetState',
  getSalesOwner: 'api/UserCompany/GetUserMaster',
  getProduct: 'api/CRM/GetCRMProductMasterList',
  getCRMCompany: 'api/CRM/GetCRMCompanyMasterList',
  getCRMContact: 'api/CRM/GetCRMContactMasterList',
  GetAppControlDesc: 'api/GeneralMaster/GetAppControlDesc',
  GetAppConfigDetails: 'api/AppConfig/GetAppConfigDetails',
  GetProcessAccess: 'api/Access/GetProcessAccess',
  getProgramAccess: 'api/Access/GetProgramAccess',
  getGeneralReferenceList: 'api/GeneralMaster/GetGeneralReferenceList',
  getEmployeeMasterDetail: 'api/EmployeeLeave/GetEmployeeMasterDetail',
  getEmployeeCompanyMaster: 'api/EmployeeLeave/GetEmployeeCompanyMaster',
  getCRMCompanyMasterList: 'api/CRM/GetCRMCompanyMasterList',
  getRRNumber: 'api/CRM/GetCRMDealRRNumber',
  getSales: 'api/GetSales/GetSales',
  getModuleMasterList: 'api/Master/GetModuleMasterList',
  getSubModuleMasterList: 'api/Master/GetSubModuleMasterList',
  getCity: '/api/City/GetCity',
  getPort: 'api/Port/GetPortMaster',
  getBLlist: 'api/Master/GetCOCBL',
  getTerminal: 'api/Voyage/GetTerminal',
  getDepot: 'api/Depot/GetDepot',
  getStartEndMoves: 'api/Master/GetDPContainerMoves',
  getProgramMasterList: 'api/Master/GetProgramMasterList',
  getGLMaster: 'api/Accounts/GetGLMaster',
  getDocumentType: 'api/Accounts/GetDocumentType',
  getContainerMoves: 'api/Master/GetContainerMoves',
  getCurrentMoveCode: 'api/Master/GetCurrentMoveCode',
  getFinLedgerMaster: 'api/Master/GetFinLedgerMaster',
  driverMaster: '/api/TruckMaster/GetDriverMasterDetails',
  getUOMMasterList: 'api/CHAMasters/GetUOMMasterList',
  getBank: 'api/Accounts/GetBank',
  getUserRoleList: 'api/UserCompany/GetUserRoleList',
  getExpenseTypeList: 'api/LoadReceipt/GetExpenseTypeList',
  transationFetch: 'api/Accounts/TransactionFetch',
  getProcessMaster: 'api/Master/GetProcessMaster',
  getProcessMasterList: 'api/Master/GetProcessMasterList',
  getVoyageMaster: 'api/VoyageMaster/GetVoyageMaster',
  getARControl: 'api/Accounts/GetARControl',
  getDocAllocation: 'api/Accounts/GetDocAllocation',
  getReceiptsReconcilation: 'api/Accounts/GetReceiptsReconcilation',
  getAPControl: 'api/Accounts/GetAPControl',
  crmTransactionFetch: 'api/CRM/CRMTransactionFetch',
  transactionFetch: 'api/Accounts/TransactionFetch',
  GetContainerSizeType: 'api/GeneralMaster/GetContainerSizeType',
  getGeneralMaster: 'api/GeneralMaster/GetGeneralMaster',
  getGeneralMasterList: 'api/GeneralMaster/GetGeneralMasterList',
  getCargoPackageMaster: 'api/GeneralMaster/GetCargoPackages',
  getJobNumber: 'api/RateRequest/GetJobNumber',
  getPortMaster: 'api/Master/GetPortMaster',
  getContainerNumber: 'api/BillOfLading/GetContainerMasterList',
  getArticleTypeMaster: '/api/LoadReceipt/GetArticleTypeMaster',
  getDGCargo: 'api/RateRequest/GetDGCargo',
  rrConfirmation: 'api/RateRequest/RRconfirmation',
  requoteRR: 'api/RateRequest/RequoteSocRateRequest',
  estimateProfit: 'api/RateRequest/EstimateProfit',
  getMatchBatch: 'api/Accounts/GetMatchBatch',
  getLRInvoiceList: '/api/LoadReceipt/GetLRInvoiceList',
  getBooking: 'api/Booking/GetBooking',
  getChargeGroupList: 'api/Master/GetChargeGroupList',
  getCOCBL: 'api/Master/GetCOCBL',
  listBillOfLading: 'api/BillOfLading/ListBillOfLading',
  getBankName: 'api/Master/GetBankName',
  getChargeApplicabilityAt: 'api/Master/GetChargeApplicabilityAt',
  getCategory: 'api/Accounts/GetCategory',
  getRulesTemplate: 'api/BillOfLading/GetRulesTemplate',
  getBookingContainer: 'api/GetBookingContainer/GBContainer', // SOC
  getShippingBill: 'api/BillOfLading/GetShippingBill',
  getTONumber: 'api/Tyre/GetTONumber',
  getDriverMaster: 'api/TransportOrder/GetDriverMaster',
  getAPDocumentList: 'api/Accounts/GetAPDocumentList',
  getARDocumentList: 'api/Accounts/GetARDocumentList',
  getProgramList: 'api/Master/GetProgramList',
  getLockBL: 'api/BillOfLading/GetLockBL',
  getDocParser: 'api/Invoice/GetDocParser',
  listRRTankNumber: 'api/RateRequest/ListRRTankNumber',
  getNextMoveCode: 'api/Master/GetNextMoveCode',
  getRefNumber: 'api/Master/GetRefNumber',
  getProductCode: 'api/Master/GetProductCode',
  getCarrier: 'api/Master/GetCarrier',
  getService: 'api/Voyage/GetService',
  getVesselMaster: 'api/Voyage/GetVesselMaster',
  getPackageMasterList: 'api/Master/GetPackageMasterList',
  getWarehouseActivityMaster: 'api/RateRequest/GetWarehouseActivityMaster',
  getSocContainer: 'api/BillOfLading/GetContainerMasterList',
  getComponentMaster: 'api/DepotOnline/GetComponentMaster',
  getContainerLocation: 'api/DepotOnline/GetContainerLocation',
  getDamageMaster: 'api/DepotOnline/GetDamageMaster',
  getRepairMaster: 'api/DepotOnline/GetRepairMaster',
  getComboBox: 'api/SlotContract/GetComboBox',
  listPort: 'api/GetVoySchedule/ListPort',
  getCOCContainerDetails: 'api/BillofLading/GetCOCContainerDetails',
  getContractRefList: 'api/DepotOnline/GetContractRefList',

  // CHA Masters
  GetCHACustomsHouseMasterList: 'api/CHAMasters/GetCHACustomsHouseMasterList',
  GetCHAADCodeMasterList: 'api/CHAMasters/GetCHAADCodeMasterList',
  getMotherBL: 'api/BillOfLading/ListBillOfLading',
  getPortDischarge: 'api/CHAMasters/GetCHAPortMaster',
  getExportCustomer: 'api/CHAMasters/GetCHAExportCustomerList',
  getConsingnee: 'api/CHAMasters/GetCHAConsignee',
  getICEGateID: 'api/CHAMasters/GetCHACompanyMasterList',
  getBranchSINo: 'api/CHAMasters/GetCHAExportCustomerList',
  getIECCode: 'api/CHAMasters/GetCHANonStandardIECList',
  getPMMaster: 'api/CHAMasters/GetPMMasterList',
  getCHAExchangeMasterList: 'api/CHAMasters/GetCHAExchangeMasterList',
  getRITC: 'api/CHAMasters/GetCHARitcUomMasterList',
  getEndUser: 'api/CHAMasters/GetEUMMasterList',
  getUOM: 'api/CHAMasters/GetUOMMaster',
  getDistrict: 'api/CHAMasters/GetDistrictMaster',
  getRoDTEP: 'api/CHAMasters/GetRDMMaster',
  getWMMaster: 'api/CHAMasters/GetWMMaster',
  getSCMMaster: 'api/CHAMasters/GetSCMMasterList',
  getEFMMaster: 'api/CHAMasters/GetEFMMasterList',
  getCHADrawBackMasterList: 'api/CHAMasters/GetCHADrawBackMasterList',
  getRSMMaster: 'api/CHAMasters/GetRSMMaster',
  getSBInvoiceList: 'api/CHA/GetSBInvoiceList',
  getSTMaster: 'api/CHAMasters/GetSTMasterList',
  getAdditionalDtlsList: 'api/CHA/GetAdditionalDtlsList',
  getCHMMaster: 'api/CHAMasters/GetCHMMasterList',
  getCRMMaster: 'api/CHAMasters/GetCRMMaster',
  getSDMaster: 'api/CHAMasters/GetSDMasterList',
  getSBItemDetailsList: 'api/CHA/GetSBItemDetailsList',
  getSBJobList: 'api/CHA/GetSBJobList',
  getCHACheckList: 'api/CHA/GetCHACheckList',
  getCHABranchList: 'api/CHA/GetCHABranchList',
};
export default jwtServiceConfig;

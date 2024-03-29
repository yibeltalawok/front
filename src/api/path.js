const path = {
  employee: '/employees',
  user: '/userAccounts',
  passwordReset: '/userAccounts/update-password',
  userRole: '/userRoles',
  container: '/Containers',
  laysheet: '/bcSheets',
  incentive: '/incentives',
  cutbalance: '/BCSheets/getLaysheetBalance',
  machine: '/machines',
  notifications: '/Notifications',
  ocupiedmachine: '/Machines/occupiedMachines',
  evaluationHistory: '/evaluations/evaluationHistory',
  dhuChartData: '/evaluations/dhuChartData',
  operation: '/Operations',
  getPieChartData: '/singleevaluations/getPieChartData',
  order: '/Orders',
  recentOrders: '/Orders/getRecents',
  reconciliation: '/reconciliations',
  orderStatus: '/Orderstatuses',
  sam: '/sams',
  defects: '/defects',
  gantchartdata: '/singleevaluations/chartData',
  getTotaldeffect: '/singleevaluations/getTotaldeffect',
  getDashboardWithRange: '/singleevaluations/getDashboardWithRange',
  allgantchartdata: '/singleevaluations/allChartData',
  modules: '/modules',
  localDefects: '/containers/defectImages/upload',
  timeAction: '/timeActions',
  efficiency: '/efficiencies',
  totalSoLinewise: '/efficiencies/totalSoLinewise',
  samPerOrderId: '/efficiencies/samPerOrderId',
  workindmins: '/WorkHours/workindmins',
  job: '/Jobs',
  lineEfficiency: '/Jobs/lineEfficiency',
  iot: '/iots',
  evaluations: '/evaluations',
  singleevaluations: '/singleevaluations',
  performance: '/performances',
  lostTime: '/lostTimes',
  oprBltn: '/OperationBulletins',
  line: '/Lines',
  period: '/periods',
  incentiveHistory: '/IncentiveHistories',
  slabe: '/IncentiveSlabes',
  weightage: '/Weightage',
  operationalCost: '/OperationalCosts',
  costSummary: '/CostSummaries',
  costPerSam: '/CostPerSamHistories',
  costPerMinute: '/CostPerMinutes',
  incentiveShare: '/IncentiveShares',
  attendance: '/Attendances',
  attendanceDashboardStartEndDate:
    '/Attendances/getDashboardAttendanceStartEndDate',
  workHour: '/WorkHours',
  master: '/SalaryMasteres',
  taxSlab: '/TaxSlabs',
  payroll: '/PayrollMasters',
  overtime: '/OverTimes',
  workDay: '/WorkDays',
  defectImages: '/containers/staticStyles/files',
  downloadImages: '/containers/staticStyles/download/',
  packingList: '/packingLists',
  contactUs: '/ContactUs',
  scannedOrders: '/ScannedOrderStatuses',
  packedIn: '/packedIns',
  getAttendance: '/printqrs/getAttendance',
  calculatePerformance: '/performances/calculatePerformance',
  getLaysheet: '/bcSheets/getQrCode',
  createSummary: '/Performances/createSummary',
  costPerSamList: '/CostSummaries/calculateCostPerSAM',
  incentiveCalculation: '/Incentives/calculateIncentive',
  incentiveSummary: '/IncentiveSummaries/returnIncentiveSummary',
  incentiveSummaryL: '/IncentiveSummaries',
  countEmployee: '/Employees/countEmployee',
  deleteEmployee: '/Employees/deleteEmployee',
  typeFour: '/packingLists/printTypeFour',
  payrollSummarySheet: '/PayrollMasters/summarySheet',
  financeReport: '/PayrollMasters/financeReport',
  payrollCalculation: '/PayrollMasters/payrollCalculation',
  orderStatusDailyReport: '/Orderstatuses/dailyReport',
  orderStatusWeeklyReport: '/Orderstatuses/weeklyReport',
  payrollInfo: '/TaxSlabs/payrollInfo',
  getDashboardAttendance: '/Attendances/getDashboardAttendance',
  getReasonDashboard: '/Attendances/getReasonDashboard',
  getLostimeDashboard: '/LostTimes/getLostimeDashboard',
  getLostimeDashboardByLine: '/LostTimes/getLostimeDashboardByLine',
  getCostDashboard: '/OperationalCosts/getCostDashboard',
  getCostPerMinuteDashboard: '/CostSummaries/getCostPerMinuteDashboard',
  getCostPerSamDashboard: '/CostPerSamHistories/getCostPerSamDashboard',
  category: '/Categories',
  inventory: '/Inventories',
  customer: '/Customeres',
  item: '/Items',
  purchased: '/Purchased',
  issue: '/Issues',
  issueRequst: '/Issues/issueRequst',
  getItemLists: '/Issues/getItemList',
  stateChart: '/Items/getPieChart',
  supplier: '/suppliers',
  getIssueDetail: '/Issues/getIssueDetail',
  createInventoryAndItem: '/Inventories/createInventoryAndItem',
  product: '/products',
  orderStatusVsFinished: '/ScannedOrderStatuses/orderstatusfinshed',
  loadSingleOrderStatus: '/ScannedOrderStatuses/singleOrderStausData',
  bundlesStatusInOrder: '/ScannedOrderStatuses/bundlesStatusInOrder',
  getBcSheets: '/Orders/getLaysheets',
  bundlesCountInProcess: '/Orders/bundlesCountInProcess',
  bundlesCount: 'Orders/bundlesCount',
  bundleHistory: '/BundleHistories',
  getStatBundleHistory: '/BundleHistories/getTotals',
  productionHistory: '/ProductionHistories',
  getHourlyProductionReport: '/ProductionHistories/getHourlyProductionReport',
  fetchPerformance: '/Jobs/fetchPerformance',
  garmentsByDate: '/BundleHistories/garmentsByDate',
  garmentsByLine: '/BundleHistories/garmentsByLine',
  yearlyPerformance: '/Performances/yearlyPerformance',
  jobAutoAssign: '/Jobs/jobAutoAssign',
  simpleEvaluationDistinictOrderList: '/singleevaluations/getDistinctOrderList',
  simpleEvaluationDistinictBunddleList:
    '/singleevaluations/getDistinctBunddleList',
  simpleEvaluationDistinictLineList: '/singleevaluations/getDistinctLineList',
  loadEvalutionsHistory: '/singleevaluations/loadEvalutionsHistory',
  rftanddhu: '/RTFandDHUs',
  getTodayBundleHistoryAll: '/BundleHistories/getTodayBundleHistoryAll',
  getTotalad: '/BundleHistories/getTotalad',
  getlineList: '/singleevaluations/getDistinctLineListWhole',
}
export default path

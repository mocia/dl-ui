module.exports = [
    {
        route: '/merchandiser/garment-pre-sales-contract-by-user',
        name: 'garment-pre-sales-contract-by-user',
        moduleId: './modules/merchandiser/garment-pre-sales-contract/index',
        nav: true,
        title: 'Pre Sales Contract - Garment',
        auth: true,
        settings: {
            group: "merchandiser",
            permission: { "PGA": 1, "C5": 1, "C9": 1 },
            iconClass: 'fa fa-calculator',
            byUser: true
        }
    },
    {
        route: '/merchandiser/garment-pre-sales-contract',
        name: 'garment-pre-sales-contract',
        moduleId: './modules/merchandiser/garment-pre-sales-contract/index',
        nav: true,
        title: 'Pre Sales Contract - Garment (Semua User)',
        auth: true,
        settings: {
            group: "merchandiser",
            permission: { "PGA": 1, "C5": 1, "C9": 1 },
            iconClass: 'fa fa-calculator',
            byUser: false
        }
    },
    {
        route: '/merchandiser/garment-purchase-request-master-by-user',
        name: 'purchase-request-master-by-user',
        moduleId: './modules/merchandiser/garment-purchase-request-master/index',
        nav: true,
        title: 'PR Master',
        auth: true,
        settings: {
            group: "merchandiser",
            permission: { "PGA": 1, "C9": 1 },
            iconClass: 'fa fa-calculator',
            byUser: true
        }
    },
    {
        route: '/merchandiser/garment-purchase-request-master',
        name: 'purchase-request-master',
        moduleId: './modules/merchandiser/garment-purchase-request-master/index',
        nav: true,
        title: 'PR Master (Semua User)',
        auth: true,
        settings: {
            group: "merchandiser",
            permission: { "PGA": 1, "C9": 1 },
            iconClass: 'fa fa-calculator',
            byUser: false
        }
    },
    {
        route: '/merchandiser/approve-pr-master/kabag-md',
        name: 'approve-purchase-request-master',
        moduleId: './modules/merchandiser/approve-pr-master/index',
        nav: true,
        title: 'Approval PR Master - Kabag MD',
        auth: true,
        settings: {
            group: "merchandiser",
            permission: { "PGA": 1, "C9": 1 },
            iconClass: 'fa fa-calculator',
            type: "MD1"
        }
    },
    {
        route: '/merchandiser/approve-pr-master/purchasing',
        name: 'approve-purchase-request-master',
        moduleId: './modules/merchandiser/approve-pr-master/index',
        nav: true,
        title: 'Approval PR Master - Purchasing',
        auth: true,
        settings: {
            group: "merchandiser",
            permission: { "PG": 1, "C9": 1 },
            iconClass: 'fa fa-calculator',
            type: "Purchasing"
        }
    },
    {
        route: '/merchandiser/approve-pr-master/kadiv-md',
        name: 'approve-purchase-request-master',
        moduleId: './modules/merchandiser/approve-pr-master/index',
        nav: true,
        title: 'Approval PR Master - Kadiv MD',
        auth: true,
        settings: {
            group: "merchandiser",
            permission: { "PGA": 1, "C9": 1 },
            iconClass: 'fa fa-calculator',
            type: "MD2"
        }
    },
    {
        route: '/merchandiser/cost-calculation-by-user',
        name: 'cost-calculation-by-user',
        moduleId: './modules/merchandiser/cost-calculation/index',
        nav: true,
        title: 'Cost Calculation Export Garment',
        auth: true,
        settings: {
            group: "merchandiser",
            permission: { "PGA": 1, "C5": 1, "C9": 1 },
            iconClass: 'fa fa-calculator',
            byUser: true
        }
    },
    {
        route: '/merchandiser/cost-calculation',
        name: 'cost-calculation',
        moduleId: './modules/merchandiser/cost-calculation/index',
        nav: true,
        title: 'Cost Calculation Export Garment (Semua User)',
        auth: true,
        settings: {
            group: "merchandiser",
            permission: { "PGA": 1, "C5": 1, "C9": 1 },
            iconClass: 'fa fa-calculator',
            byUser: false
        }
    },
    {
        route: '/merchandiser/cost-calculation-approval/md',
        name: 'cost-calculation-approval-md',
        moduleId: './modules/merchandiser/cost-calculation-approval/index',
        nav: true,
        title: 'Cost Calculation Approval - Kabag Md',
        auth: true,
        settings: {
            group: "merchandiser",
            permission: { "PGA": 1, "C5": 1, "C9": 1 },
            iconClass: 'fa fa-calculator',
            type: "md"
        }
    },
    {
        route: '/merchandiser/cost-calculation-approval/ie',
        name: 'cost-calculation-approval-ie',
        moduleId: './modules/merchandiser/cost-calculation-approval/index',
        nav: true,
        title: 'Cost Calculation Approval - IE',
        auth: true,
        settings: {
            group: "merchandiser",
            permission: { "IE": 1, "C5": 1, "C9": 1 },
            iconClass: 'fa fa-calculator',
            type: "ie"
        }
    },
    {
        route: '/merchandiser/budget-validation-purchasing',
        name: 'budget-validation-purchasing',
        moduleId: './modules/merchandiser/budget-validation-purchasing/index',
        nav: true,
        title: 'Validasi Budget - Purchasing',
        auth: true,
        settings: {
            group: "merchandiser",
            permission: { "PG": 1, "C5": 1, "C9": 1 },
            iconClass: 'fa fa-calculator'
        }
    },
    {
        route: '/merchandiser/cost-calculation-approval/kadivmd',
        name: 'cost-calculation-approval-kadivmd',
        moduleId: './modules/merchandiser/cost-calculation-approval/index',
        nav: true,
        title: 'Cost Calculation Approval - Kadiv Md',
        auth: true,
        settings: {
            group: "merchandiser",
            permission: { "PGA": 1, "C5": 1, "C9": 1 },
            iconClass: 'fa fa-calculator',
            type: "kadivmd"
        }
    },
    {
        route: '/merchandiser/budget-validation-process',
        name: 'budget-validation-process',
        moduleId: './modules/merchandiser/budget-validation-process/index',
        nav: true,
        title: 'Validasi Budget - PROSES',
        auth: true,
        settings: {
            group: "merchandiser",
            permission: { "PGA": 1, "C5": 1, "C9": 1 },
            iconClass: 'fa fa-calculator'
        }
    },
    {
        route: '/merchandiser/garment-sales-contract-by-user',
        name: 'garment-sales-contract-by-user',
        moduleId: './modules/merchandiser/garment-sales-contract/index',
        nav: true,
        title: 'Sales Contract Per RO',
        auth: true,
        settings: {
            group: "merchandiser",
            permission: { "PGA": 1, "C5": 1, "C9": 1 },
            iconClass: 'fa fa-calculator',
            byUser: true
        }
    },
    {
        route: '/merchandiser/garment-sales-contract',
        name: 'garment-sales-contract',
        moduleId: './modules/merchandiser/garment-sales-contract/index',
        nav: true,
        title: 'Sales Contract Per RO (Semua User)',
        auth: true,
        settings: {
            group: "merchandiser",
            permission: { "PGA": 1, "C5": 1, "C9": 1 },
            iconClass: 'fa fa-calculator',
            byUser: false
        }
    },
    {
        route: '/merchandiser/ro-garment-by-user',
        name: 'ro-garment-by-user',
        moduleId: './modules/merchandiser/ro-garment/index',
        nav: true,
        title: 'RO Export Garment',
        auth: true,
        settings: {
            group: "merchandiser",
            permission: { "PGA": 1, "C5": 1, "C9": 1 },
            iconClass: 'fa fa-calculator',
            byUser: true
        }
    },
    {
        route: '/merchandiser/ro-garment',
        name: 'ro-garment',
        moduleId: './modules/merchandiser/ro-garment/index',
        nav: true,
        title: 'RO Export Garment (Semua User)',
        auth: true,
        settings: {
            group: "merchandiser",
            permission: { "PGA": 1, "C5": 1, "C9": 1 },
            iconClass: 'fa fa-calculator',
            byUser: false
        }
    },
    {
        route: '/merchandiser/ro-validation-kabagmd',
        name: 'ro-validation-kabagmd',
        moduleId: './modules/merchandiser/ro-validation/index',
        nav: true,
        title: 'Validasi RO - Kabag MD',
        auth: true,
        settings: {
            group: "merchandiser",
            permission: { "PGA": 1, "C9": 1 },
            iconClass: 'fa fa-calculator',
            type: 'kabagmd'
        }
    },
    {
        route: '/merchandiser/ro-sample-validation',
        name: 'ro-sample-validation',
        moduleId: './modules/merchandiser/ro-validation/index',
        nav: true,
        title: 'Validasi RO Sample',
        auth: true,
        settings: {
            group: "merchandiser",
            permission: { "PGA": 1, "C9": 1 },
            iconClass: 'fa fa-calculator',
            type: 'sample'
        }
    },
    // {
    //     route: '/merchandiser/ro-validation-ppic',
    //     name: 'ro-validation-ppic',
    //     moduleId: './modules/merchandiser/ro-validation-ppic/index',
    //     nav: true,
    //     title: 'Validasi RO - PPIC',
    //     auth: true,
    //     settings: {
    //         group: "merchandiser",
    //         permission: { "PGA": 1, "C9": 1 },
    //         iconClass: 'fa fa-calculator'
    //     }
    // },
    {
        route: '/merchandiser/ro-acceptance',
        name: 'ro-acceptance',
        moduleId: './modules/merchandiser/ro-acceptance/index',
        nav: true,
        title: 'Penerimaan RO',
        auth: true,
        settings: {
            group: "merchandiser",
            permission: { "P": 1, "C9": 1 },
            iconClass: 'fa fa-calculator'
        }
    },
    {
        route: '/merchandiser/ro-available',
        name: 'ro-available',
        moduleId: './modules/merchandiser/ro-available/index',
        nav: true,
        title: 'Kesiapan RO',
        auth: true,
        settings: {
            group: "merchandiser",
            permission: { "P": 1, "C9": 1 },
            iconClass: 'fa fa-calculator'
        }
    },
    {
        route: '/merchandiser/ro-distribute',
        name: 'ro-distribute',
        moduleId: './modules/merchandiser/ro-distribute/index',
        nav: true,
        title: 'Distribusi RO',
        auth: true,
        settings: {
            group: "merchandiser",
            permission: { "P": 1, "C9": 1 },
            iconClass: 'fa fa-calculator'
        }
    },
    {
        route: '/merchandiser/cost-calculation-copy',
        name: 'cost-calculation-copy',
        moduleId: './modules/merchandiser/cost-calculation/copy/index',
        nav: true,
        title: 'Copy Cost Calculation',
        auth: true,
        settings: {
            group: "merchandiser",
            permission: { "PGA": 1, "C5": 1, "C9": 1 },
            iconClass: 'fa fa-calculator'
        }
    },
    {
        route: '/merchandiser/garment-sales-contract-copy',
        name: 'garment-sales-contract-copy',
        moduleId: './modules/merchandiser/garment-sales-contract/copy/index',
        nav: true,
        title: 'Copy Sales Contract Per RO',
        auth: true,
        settings: {
            group: "merchandiser",
            permission: { "PGA": 1, "C5": 1, "C9": 1 },
            iconClass: 'fa fa-calculator'
        }
    },
    {
        route: 'merchandiser/monitoring-ro-job-order',
        name: 'merchandiser-monitoring-ro-job-order',
        moduleId: './modules/garment-purchasing/monitoring-ro-job-order/index',
        nav: true,
        title: 'Monitoring RO Job Order',
        auth: true,
        settings: {
            group: "merchandiser",
            permission: { "PGA": 1, "PG": 1, "GU": 1, "C9": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: '/merchandiser/garment-cost-calculation-by-unit-report',
        name: 'garment-cost-calculation-by-unit-report',
        moduleId: './modules/merchandiser/report/cost-calculation-garment-by-unit-report/index',
        nav: true,
        title: 'Display Cost Calculation Garment Per Unit',
        auth: true,
        settings: {
            group: "merchandiser",
            permission: {  "PGA": 1, "C5": 1, "C9": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: '/merchandiser/garment-cost-calculation-by-section-report',
        name: 'garment-cost-calculation-by-section-report',
        moduleId: './modules/merchandiser/report/cost-calculation-garment-by-section-report/index',
        nav: true,
        title: 'Display Cost Calculation Garment Per Seksi',
        auth: true,
        settings: {
            group: "merchandiser",
            permission: {  "PGA": 1, "C5": 1, "C9": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: '/merchandiser/garment-cost-calculation-by-buyer-report',
        name: 'garment-cost-calculation-by-buyer-report',
        moduleId: './modules/merchandiser/report/cost-calculation-garment-by-buyer-report/index',
        nav: true,
        title: 'Display Cost Calculation Garment Per Buyer - Deskripsi',
        auth: true,
        settings: {
            group: "merchandiser",
            permission: {  "PGA": 1, "C5": 1, "C9": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
     {
        route: '/merchandiser/garment-cost-calculation-by-sc-report',
        name: 'garment-cost-calculation-by-sc-report',
        moduleId: './modules/merchandiser/report/cost-calculation-garment-by-sc-report/index',
        nav: true,
        title: 'Display Cost Calculation Garment Per Buyer - Sales Contract',
        auth: true,
        settings: {
            group: "merchandiser",
            permission: {  "PGA": 1, "C5": 1, "C9": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: '/merchandiser/budget-job-order-report',
        name: 'budget-job-order-report',
        moduleId: './modules/merchandiser/report/budget-job-order-report/index',
        nav: true,
        title: 'Display Budget Job Order',
        auth: true,
        settings: {
            group: "merchandiser",
            permission: { "PGA": 1, "PG": 1, "P": 1, "GU": 1, "B7": 1, "C9": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: '/merchandiser/budget-master-sample-report',
        name: 'budget-master-sample-report',
        moduleId: './modules/merchandiser/report/budget-master-sample-report/index',
        nav: true,
        title: 'Display Budget Master / Sample',
        auth: true,
        settings: {
            group: "merchandiser",
            permission: { "PGA": 1, "PG": 1, "C9": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: '/merchandiser/monitoring-unpost-cost-calculation',
        name: 'monitoring-unpost-cost-calculation',
        moduleId: './modules/merchandiser/report/monitoring-unpost-cost-calculation/index',
        nav: true,
        title: 'Monitoring Unpost Cost Calculation',
        auth: true,
        settings: {
            group: "merchandiser",
            permission: { "PGA": 1, "C9": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: '/merchandiser/production-order-report',
        name: 'production-order-report',
        moduleId: './modules/merchandiser/report/production-order-report/index',
        nav: true,
        title: 'Laporan Order Produksi',
        auth: true,
        settings: {
            group: "merchandiser",
            permission: { "PGA": 1, "B7": 1, "C9": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: '/merchandiser/accepted-ro-report',
        name: 'accepted-ro-report',
        moduleId: './modules/merchandiser/report/accepted-ro-report/index',
        nav: true,
        title: 'Laporan Penerimaan RO',
        auth: true,
        settings: {
            group: "merchandiser",
            permission: { "P": 1, "B7": 1, "C9": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: '/merchandiser/available-ro-report',
        name: 'available-ro-report',
        moduleId: './modules/merchandiser/report/available-ro-report/index',
        nav: true,
        title: 'Laporan Kesiapan RO',
        auth: true,
        settings: {
            group: "merchandiser",
            permission: { "PGA": 1, "P": 1, "C9": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
     {
        route: '/merchandiser/distribution-ro-garment-report',
        name: 'distribution-ro-garment-report',
        moduleId: './modules/merchandiser/report/distribution-ro-garment-report/index',
        nav: true,
        title: 'Laporan Distribusi RO Garment',
        auth: true,
        settings: {
            group: "merchandiser",
            permission: {  "P": 1, "C9": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },    
    {
        route: '/merchandiser/available-budget-report',
        name: 'available-budget-report',
        moduleId: './modules/merchandiser/report/available-budget-report/index',
        nav: true,
        title: 'Laporan Kesiapan Budget',
        auth: true,
        settings: {
            group: "merchandiser",
            permission: { "PGA": 1, "P": 1, "C9": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: '/merchandiser/monitoring-pre-sales-contract',
        name: 'monitoring-pre-sales-contract',
        moduleId: './modules/merchandiser/report/monitoring-pre-sales-contract/index',
        nav: true,
        title: 'Monitoring Pre Sales Contract',
        auth: true,
        settings: {
            group: "merchandiser",
            permission: { "PGA": 1, "C9": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: '/merchandiser/garment-purchasing-quality-objective-report',
        name: 'garment-purchasing-quality-objective-report',
        moduleId: './modules/merchandiser/report/garment-purchasing-quality-objective-report/index',
        nav: true,
        title: 'Laporan Sasaran Mutu Penjualan Garment',
        auth: true,
        settings: {
            group: "merchandiser",
            permission: { "PGA": 1, "C9": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: '/merchandiser/profit-garment-by-section-report',
        name: 'profit-garment-by-section-report',
        moduleId: './modules/merchandiser/report/profit-garment-by-section-report/index',
        nav: true,
        title: 'Laporan Profit Garment Per Seksi',
        auth: true,
        settings: {
            group: "merchandiser",
            permission: { "PGA": 1, "C9": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: '/merchandiser/open-po-master',
        name: 'open-po-master',
        moduleId: './modules/merchandiser/open-po-master/index',
        nav: true,
        title: 'Open PO Master',
        auth: true,
        settings: {
            group: "merchandiser",
            permission: { "C9": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: '/merchandiser/open-po-master-approval/md',
        name: 'open-po-master-approval-md',
        moduleId: './modules/merchandiser/open-po-master-approval/index',
        nav: true,
        title: 'Approval Open PO Master - Md',
        auth: true,
        settings: {
            group: "merchandiser",
            permission: { "C9": 1 },
            iconClass: 'fa fa-dashboard',
            type: "md"
        }
    },
    {
        route: '/merchandiser/open-po-master-approval/purchasing',
        name: 'open-po-master-approval-purchasing',
        moduleId: './modules/merchandiser/open-po-master-approval/index',
        nav: true,
        title: 'Approval Open PO Master - Purchasing',
        auth: true,
        settings: {
            group: "merchandiser",
            permission: { "C9": 1 },
            iconClass: 'fa fa-dashboard',
            type: "purchasing"
        }
    },
];

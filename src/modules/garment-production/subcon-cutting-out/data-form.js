import { bindable, inject, computedFrom } from "aurelia-framework";
import { Service, PurchasingService, CoreService } from "./service";

const UnitLoader = require('../../../loader/garment-units-loader');
const CuttingInLoader = require('../../../loader/garment-cutting-in-by-ro-loader');

@inject(Service, PurchasingService, CoreService)
export class DataForm {
    @bindable readOnly = false;
    @bindable isCreate = false;
    @bindable isView = false;
    @bindable title;
    @bindable data = {};
    // @bindable error = {};
    @bindable selectedCuttingIn;
    @bindable itemOptions = {};

    constructor(service, purchasingService, coreService) {
        this.service = service;
        this.purchasingService = purchasingService;
        this.coreService = coreService;
    }

    formOptions = {
        cancelText: "Kembali",
        saveText: "Simpan",
        deleteText: "Hapus",
        editText: "Ubah"
    };

    controlOptions = {
        label: {
            length: 2
        },
        control: {
            length: 5
        }
    };

    itemsInfo = {
        columns: [
            "Kode Barang",
            "Keterangan",
            "Jumlah",
            "Jumlah Plan PO"
        ]
    }

    @computedFrom("data.UnitFrom")
    get cuttingInFilter() {
        this.selectedCuttingIn = null;
        if (this.data.UnitFrom) {
            return {
                UnitId: this.data.UnitFrom.Id
            };
        } else {
            return {
                UnitId: 0
            };
        }
    }

    bind(context) {
        this.context = context;
        this.data = this.context.data;
        this.error = this.context.error;
        this.itemOptions = {
            isCreate: this.context.isCreate,
            isView: this.context.isView,
            checkedAll: this.context.isCreate == true ? false : true 
        }

        if (this.data && this.data.Items) {
            this.data.Items.forEach(
                item => {
                    item.IsSave = true;
                }
            );
        }
    }

    unitView = (unit) => {
        return `${unit.Code} - ${unit.Name}`;
    }

    comodityView = (comodity) => {
        return `${comodity.Code} - ${comodity.Name}`
    }

    ROView=(ro) => {
        return `${ro.RONo} - ${ro.PO_SerialNumber}`;
    }

    get unitLoader() {
        return UnitLoader;
    }

    // get cuttingInLoader() {
    //     return CuttingInLoader;
    // }

    async selectedCuttingInChanged(newValue, oldValue){
        if(this.context.isCreate){
            if(newValue) {
                console.log(newValue)
                if(this.data.Items.length>0){
                    this.data.Items.splice(0);
                }
                this.context.error.Items = [];
                this.data.CuttingOutType = "SUBKON";
                this.data.RONo = newValue.RONo;
                this.data.Article = newValue.Article;
                // let noResult = await this.salesService.getCostCalculationByRONo({ size: 1, filter: JSON.stringify({ RO_Number: this.data.RONo }) });
                // if(noResult.data.length>0){
                //     this.data.Comodity = noResult.data[0].Comodity;
                // }
                
    
                Promise.resolve(this.service.getCuttingIn({ filter: JSON.stringify({ RONo: this.data.RONo, UnitId: this.data.UnitFrom.Id }) }))
                    .then(result => {
                        for(var cuttingInHeader of result.data){
                            for(var cuttingInItem of cuttingInHeader.Items){
                                for(var cuttingInDetail of cuttingInItem.Details){
                                    cuttingInDetail.CuttingInId = cuttingInHeader.Id;
                                    cuttingInDetail.CuttingInDetailId = cuttingInDetail.Id;
                                    this.data.Items.push(cuttingInDetail);
                                }
                            }
                        }
                    });
            }
            else {
                this.context.selectedCuttingInViewModel.editorValue = "";
                this.data.RONo = null;
                this.data.Article = null;
                this.data.Comodity = null;
                this.data.Items.splice(0);
            }
        }
    }

    get cuttingInLoader() {
        return (keyword) => {
            var info = {
              keyword: keyword,
            };
            return this.service.getCuttingIn(info)
                .then((result) => {
                    return this.purchasingService.getGarmentEPOByRONo(info)
                    .then((epo)=>{
                        var roList=[];
                        for(var a of epo.data){
                            var dup= result.data.find(d=>d.RONo==a.RONo);
                            if(dup){
                                a.POSerialNumber=dup.PO_SerialNumber;
                                a.Items=dup.Items;
                                a.Article=dup.Article;
                                roList.push(a);
                            }
                            
                        }
                        console.log(roList)
                        return roList;
                    });
                    
                });
        }
    }
}
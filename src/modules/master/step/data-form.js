import { inject, bindable, computedFrom } from 'aurelia-framework';

export class DataForm {
    @bindable title;
    @bindable readOnly;


    formOptions = {
        cancelText: "Kembali",
        saveText: "Simpan",
        deleteText: "Hapus",
        editText: "Ubah",
    };

    controlOptions = {
        label: {
            length: 4,
        },
        control: {
            length: 4,
        },
    };

    constructor(service) {
        this.service = service;
    }

    bind(context) {
        this.context = context;
        this.data = this.context.data;
        this.error = this.context.error;

        this.cancelCallback = this.context.cancelCallback;
        this.deleteCallback = this.context.deleteCallback;
        this.editCallback = this.context.editCallback;
        this.saveCallback = this.context.saveCallback;

        this.columns = ['Indikator', 'Nilai', 'Satuan'];
    }

    info = {
        onAdd: function () {
            this.data.StepIndicators.push({ Name: "", Value: 0, Uom: "" });
        }.bind(this),
        onRemove: function () { }.bind(this)
    };


}
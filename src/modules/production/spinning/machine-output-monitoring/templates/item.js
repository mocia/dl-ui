import { inject, BindingEngine } from 'aurelia-framework';

@inject(BindingEngine)
export class Item {
    

    activate(context) {
        this.data = context.data;
        this.error = context.error;
        console.log(this.data)
        this.options = context.context.options;
        this.readOnly = context.options.readOnly;
    }

    // mockMachineLoader = (keyword, filter) => {

    //     return Promise.resolve([{ Name: "Machine 1" }, { Name: "Machine 2" }]);
    // }

    // get machineLoader() {
    //     //return ProcessLoader;
    //     return this.mockMachineLoader;
    // }
}
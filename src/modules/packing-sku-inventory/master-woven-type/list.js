import { inject } from 'aurelia-framework';
import { Service } from "./service";
import { Router } from 'aurelia-router';
import moment from 'moment';

@inject(Router, Service)
export class List {


    context = ["detail"]

    columns = [
        { field: "code", title: "Kode" },
        { field: "wovenType", title: "Jenis Anyaman" },
    ];

    loader = (info) => {
        var order = {};
        if (info.sort)
            order[info.sort] = info.order;
        var arg = {
            page: parseInt(info.offset / info.limit, 10) + 1,
            size: info.limit,
            keyword: info.search,
            order: order,
        }

        return this.service.search(arg)
            .then(result => {
                var data = {}
                data.total = result.total;
                data.data = result.data;
                
                return data;
            });
    }

    constructor(router, service) {
        this.service = service;
        this.router = router;

    }

    contextClickCallback(event) {
        var arg = event.detail;
        var data = arg.data;
        switch (arg.name) {
            case "detail":
                this.router.navigateToRoute('view', { id: data.id });
                break;
            case "print":
                this.service.getPdfById(data.id);
                break;
        }
    }

    contextShowCallback(index, name, data) {
        switch (name) {
            case "print":
                return data;
            default:
                return true;
        }
    }

    create() {
        this.router.navigateToRoute('create');
    }
}


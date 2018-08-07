import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {TabMenuModule} from 'primeng/tabmenu';

@Component({
  selector: 'app-emi-features',
  templateUrl: './emi-features.component.html',
  styleUrls: ['./emi-features.component.css']
})
export class EmiFeaturesComponent implements OnInit {

  items: MenuItem[];

    ngOnInit() {
        this.items = [
            {label: 'Amortization', icon: 'fa fa-fw fa-bar-chart'},
            {label: 'Plan your Part Payment', icon: 'fa fa-fw fa-calendar'},
            {label: 'Find low interest Loans', icon: 'fa fa-fw fa-book'},
            {label: 'Manage your Accounts', icon: 'fa fa-fw fa-support'},
            {label: 'Support', icon: 'fa fa-fw fa-support'}
        ];
    }

}

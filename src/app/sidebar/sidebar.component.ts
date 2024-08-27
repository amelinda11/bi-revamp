import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    {
        path: '/dashboard',
        title: 'Dashboard',
        icon: 'fa-dungeon',
        class: ''
    },
    {
        path: '/weekly',
        title: 'Weekly',
        icon: 'fa-calendar-days',
        class: ''
    },
    {
        path: '/comparation',
        title: 'Comparation',
        icon: 'fa-scale-balanced',
        class: ''
    },
    {
        path: '/list-store',
        title: 'List Store',
        icon: 'fa-shop',
        class: ''
    },
    {
        path: '/list-area',
        title: 'List Area',
        icon: 'fa-warehouse',
        class: ''
    },
];

@Component({
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[] | undefined;
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}

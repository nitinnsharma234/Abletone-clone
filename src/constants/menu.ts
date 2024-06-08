export class MenuItem {
    path: string;
    to: string;
    title:string;

    constructor(path: string , to: string , title:string ) {
        this.path = path;
        this.to = to;
        this.title=title
    }
}

export const MenuList: MenuItem[] = [
    new MenuItem('live', '/live', 'Live'),
    new MenuItem('push', '/push', 'Push'),
    new MenuItem('link', '/link', 'Link'),
    new MenuItem('shop', '/shop', 'Shop'),
    new MenuItem('packs', '/packs', 'Packs'),
    new MenuItem('help', '/help', 'Help'),
    new MenuItem('more', '/more', 'More'),
];
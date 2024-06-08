export class MenuItem{
    title:string;
    route:string; 
    constructor({title,route}:{title:string, route:string}){
        this.title=title; 
        this.route=route;
    }
}


// list of middle Menu Items 

export const menuItemsList: MenuItem[]=[
    new MenuItem({title:"All Posts",route:'/all-posts'}),
    new MenuItem({title:"Artists",route:'/artists'}),
    new MenuItem({title:"News",route:'/news'}),
    new MenuItem({title:"Downloads",route:'/downloads'}),
    new MenuItem({title:"Tutorials",route:'route'}),
    new MenuItem({title:"Videos",route:'/videos'}),
    new MenuItem({title:"Loop",route:'/loop'}),
    new MenuItem({title:"One Thing",route:'/one-thing'}),

];
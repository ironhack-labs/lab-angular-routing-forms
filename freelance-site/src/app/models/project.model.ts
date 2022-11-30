import { getLocaleEraNames } from "@angular/common";

export class Project {
    constructor(
        private _name: string,
        private _year: number,
        private _type: string,
        private _projectPicture: string = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzdHJhY3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        private _description: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'    
    ) {}

    get name(): string {
        return this._name;
    }
    
    set name(name: string){
        this._name = name;
    }

    get year(): number {
        return this._year;
    }
    
    set year(year: number){
        this._year = year;
    }

    get type(): string {
        return this._type;
    }
    
    set type(type: string){
        this._type = type;
    }

    get projectPicture(): string {
        return this._projectPicture;
    }
    
    set projectPicture(projectPicture: string){
        this._projectPicture = projectPicture;
    }

    get description(): string {
        return this._description;
    }
    
    set description(description: string){
        this._description = description;
    }
}

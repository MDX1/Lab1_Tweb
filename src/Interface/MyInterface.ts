import { Instance } from "mobx-state-tree";
import { ContentModel } from "../mst/models/Content.model";
import { LoginModel } from "../mst/models/Login.model";
import LoginStore from "../mst/stores/LoginStore";
import RootStore from "../mst/stores/RootStore.store";

export interface Interface1 {
    nume: string;
    prenume: string;
    varsta: number;
    inaltime: number;  

};

export interface Interface2 extends Interface1{
    email: string;
    adresaHome: string;  
    
}

export interface IRootStore extends Instance<typeof RootStore>{

}

export interface IContentModel extends Instance<typeof ContentModel>{
    
}

export interface ILoginStore extends Instance<typeof LoginStore>{
    
}
export interface ILoginModel extends Instance<typeof LoginModel>{

}
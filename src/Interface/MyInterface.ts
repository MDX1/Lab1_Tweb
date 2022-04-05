
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

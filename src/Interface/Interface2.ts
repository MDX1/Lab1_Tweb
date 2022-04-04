
import Interface1 from "./Interface1";

interface Interface2 extends Interface1{
    secondInterface:{
        email: string;
        adresaHome: string;  
    }
    
}

export default Interface2;
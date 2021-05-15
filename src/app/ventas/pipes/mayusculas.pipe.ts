import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas'
})
export class mayusculasPipe implements PipeTransform{

    transform( valor: string, enMayusculas: boolean = true ):string{
        // if (enMayusculas){
        //     return valor.toLocaleUpperCase();
            
        // }else{
        //     return valor;
        // }
        return (enMayusculas) ? valor.toLocaleUpperCase() : valor;    
    }

}
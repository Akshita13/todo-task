import { Pipe, PipeTransform } from "@angular/core";

@Pipe(
{
    name:'captalizeFirst'
})
export class CaptalizeFirstPipe implements PipeTransform
{
    transform(value:string,args: any[]):string
    {
        if(value==null)
        {
            return 'not assigned';
        }
        else{
            return value.charAt(0).toUpperCase()+value.slice(1);
        }
    }
}
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({

    name: 'quantityConvertor',
    standalone: true
})
export class QuantityConvertorPipe implements PipeTransform {
    transform(value: number, ...args: any[]): number {
        const numOfDigits = value.toString().length;//55=>2
        const divideBy = Math.pow(10, numOfDigits - 1);//10=>5.5
        return value / divideBy;
    }

}
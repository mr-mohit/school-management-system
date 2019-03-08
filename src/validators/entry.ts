import { FormControl } from '@angular/forms';

export class CheckEntry {

    static isEmpty(control: FormControl): any
    {

        if(control.value ==""){
            return {
                "not a number": true
            };
        }


        return null;
    }

}
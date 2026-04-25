import { Component } from "@angular/core";

@Component({
    selector: 'app-counter-page',
    templateUrl: './counter-page.component.html',
    styleUrl: './counter-page.component.css'
})
export class CounterPageComponent {
    counter = 0;

    increaseBy(value: number){
        this.counter += value;
    }

    decreaseBy(value: number){
        this.counter -=  value;
    }

    reset(){
        this.counter = 0;
    }
}

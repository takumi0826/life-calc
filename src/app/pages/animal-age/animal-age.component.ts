import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, map } from 'rxjs';

type Animal = {
  age: string;
  compare: string;
};

@Component({
  selector: 'app-animal-age',
  templateUrl: './animal-age.component.html',
  styleUrls: ['./animal-age.component.scss'],
})
export class AnimalAgeComponent {
  dog: Animal[] = [
    { age: '1ヶ月', compare: '1歳' },
    { age: '2ヶ月', compare: '3歳' },
    { age: '3ヶ月', compare: '5歳' },
    { age: '6ヶ月', compare: '9～10歳' },
    { age: '1歳', compare: '15～18歳' },
    { age: '2歳', compare: '22～24歳' },
    { age: '3歳', compare: '27～28歳' },
    { age: '4歳', compare: '31～33歳' },
    { age: '5歳', compare: '36～37歳' },
    { age: '6歳', compare: '41～42歳' },
    { age: '7歳', compare: '45～46歳' },
    { age: '8歳', compare: '48～51歳' },
    { age: '9歳', compare: '54～55歳' },
    { age: '10歳', compare: '56～60歳' },
    { age: '11歳', compare: '63～64歳' },
    { age: '12歳', compare: '68～69歳' },
    { age: '13歳', compare: '71～73歳' },
    { age: '14歳', compare: '77～78歳' },
    { age: '15歳', compare: '80～82歳' },
    { age: '16歳', compare: '85～87歳' },
    { age: '17歳', compare: '89～91歳' },
    { age: '18歳', compare: '93～96歳' },
    { age: '19歳', compare: '98～100歳' },
    { age: '20歳', compare: '100～105歳' },
  ];
  cat: Animal[] = [
    { age: '1ヶ月', compare: '1歳' },
    { age: '2ヶ月', compare: '3歳' },
    { age: '3ヶ月', compare: '5歳' },
    { age: '6ヶ月', compare: '8～9歳' },
    { age: '1歳', compare: '13～18歳' },
    { age: '2歳', compare: '24歳' },
    { age: '3歳', compare: '28歳' },
    { age: '4歳', compare: '32歳' },
    { age: '5歳', compare: '36歳' },
    { age: '6歳', compare: '40歳' },
    { age: '7歳', compare: '44歳' },
    { age: '8歳', compare: '48歳' },
    { age: '9歳', compare: '52歳' },
    { age: '10歳', compare: '56歳' },
    { age: '11歳', compare: '60歳' },
    { age: '12歳', compare: '64歳' },
    { age: '13歳', compare: '68歳' },
    { age: '14歳', compare: '72歳' },
    { age: '15歳', compare: '76歳' },
    { age: '16歳', compare: '80歳' },
    { age: '17歳', compare: '84歳' },
    { age: '18歳', compare: '88歳' },
    { age: '19歳', compare: '92歳' },
    { age: '20歳', compare: '96歳' },
  ];
  animalSelect$ = new BehaviorSubject<number>(1);
  animals$ = this.animalSelect$.pipe(
    distinctUntilChanged(),
    map((val) => {
      if (val === 1) return this.dog;
      return this.cat;
    })
  );
  constructor() {}
}

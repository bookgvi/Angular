import { Observer } from '../../interfaces/observer';
import { Subject } from '../../interfaces/subject';

export class InputObserver implements Observer {
  update(subject: Subject): void {
    // @ts-ignore
    console.log('ObserverService: ', subject.state);
  }
}

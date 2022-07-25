import { Component, OnDestroy, OnInit } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
     this.subject.complete(); // Closes the connection.
  }
  title = 'angular-redux-sample';

  subject = webSocket('wss://eoq4f7xpjb.execute-api.sa-east-1.amazonaws.com/producao');

  ngOnInit(): void {
    console.log('onInit');
    this.subject.subscribe((data) => console.log(data));
    

    const payload = {
      action: "sendMessage",
      message: "this message is from angular rxJs websocket!"
    }
    setTimeout(() => {
      this.subject.next(JSON.stringify(payload));
      console.log('deveria ter enviado msg....');
      console.log('hasError', this.subject.hasError);
      console.log('isStopped', this.subject.isStopped);
    }, 5000);
    

    this.subject.error({ code: 4000, reason: 'I think our app just broke!' });
  }
}

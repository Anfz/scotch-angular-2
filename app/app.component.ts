import { Component } from '@angular/core'; 

@Component({
  selector: 'my-app', 
  template: `

    <header> 
      <nav class="navbar navbar-inverse">
        <div class="navbar-header">
          <a href="/" class="navbar-brand">My Angular 2 App!</a>
        </div>
      </nav>
    </header>
    <main>
      <div class="jumbotron">
        <h1>Welcome to our App! :D</h1>
        <p>{{ message}} </p>
      </div>

      <p>The user is {{user.name}} ({{user.username}})</p>
    </main>

    <footer class="text-center">
      Chris Copied this
    </footer>
    `, 
    styles: [`
    .jumbotron {box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2); }
    `]
})

export class AppComponent{
    message = 'Hello!'; 

    user = {
      id: 31, 
      name: 'Chris', 
      username: 'chrisb'
    }
}
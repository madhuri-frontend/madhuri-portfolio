import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { About } from './pages/about/about';
import { Navbar } from './core/components/navbar/navbar';
import { Home } from './pages/home/home';
import { Experience } from './pages/experience/experience';
import { Skills } from './pages/skills/skills';
import { Projects } from './pages/projects/projects';
import { Contact } from './pages/contact/contact';
import { Footer } from './core/components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [About, Navbar, Home, Experience, Skills, Projects, Contact, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('madhuri-portfolio');
}

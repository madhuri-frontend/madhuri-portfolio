import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  name = '';
  email = '';
  subject = '';
  message = '';

  loading = false;

  sendEmail() {
    if (!this.name || !this.email || !this.subject || !this.message) {
      alert('Please fill all fields.');
      return;
    }

    this.loading = true;

    const templateParams = {
      name: this.name,
      email: this.email,
      subject: this.subject,
      message: this.message,
    };

    emailjs
      .send('service_cvkx4ta', 'template_y2wvc6h', templateParams, '8m0OdnnWKOxMCzWSI')
      .then(() => {
        alert('Message sent successfully!');

        this.name = '';
        this.email = '';
        this.subject = '';
        this.message = '';
      })
      .catch(() => {
        alert('Failed to send message.');
      })
      .finally(() => {
        this.loading = false;
      });
  }
}

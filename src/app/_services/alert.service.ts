import {Injectable} from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  success(title: string, message: string = '') {
    this.fire('success', title, message)
  }

  error(title: string, message: string = '') {
    this.fire('error', title, message)
  }

  info(title: string, message: string = '') {
    this.fire('info', title, message)
  }

  warn(title: string, message: string = '') {
    this.fire('warning', title, message)
  }

  question(title: string, message: string = '') {
    this.fire('question', title, message)
  }

  fire(icon: any, title: string, message: string = '') {
    Swal.fire({
      title: title,
      text: message,
      icon: icon,
      timer: 2000,
      timerProgressBar: true,
      showConfirmButton: false
    }).then()
  }
}

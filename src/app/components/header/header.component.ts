import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  resultado!: any;
  constructor(private us: UserService) {}

  obtenerUsuarios() {
    this.us.getUsuarios().subscribe(
      (result) => {
        this.resultado = result;
        console.log(this.resultado);
      },
      (error) => {
        console.log(error);
        alert('Error en la petición');
      }
    );
  }

  ngOnInit() {}
}

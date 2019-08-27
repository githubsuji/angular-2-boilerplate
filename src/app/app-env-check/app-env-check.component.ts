import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-app-env-check',
  templateUrl: './app-env-check.component.html',
  styleUrls: ['./app-env-check.component.css']
})
export class AppEnvCheckComponent implements OnInit {
  env = environment;

  ngOnInit() {
  }

}

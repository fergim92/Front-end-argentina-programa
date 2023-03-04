import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';
import { EducacionService } from './service/educacion.service';
import { PersonaService } from './service/persona.service';
import { SExperienciaService } from './service/s-experiencia.service';
import { SkillService } from './service/skill.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EducacionService, AuthService, PersonaService,SExperienciaService,SkillService]
})
export class AppComponent {
  name = 'proyectoFinal';
}

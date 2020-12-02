import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl, FormBuilder } from '@angular/forms'; 
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Enseignant } from '../../models/enseignant';
import { ApiEnseignantService } from '../../services/api-enseignant.service';
import { ApiEsp_deptService } from '../../services/api-esp_dept.service';

@Component({
  selector: 'app-edit-enseignant',
  templateUrl: './edit-enseignant.component.html',
  styleUrls: ['./edit-enseignant.component.css']
})
export class EditEnseignantComponent implements OnInit { 
  constructor( ) {  
    
     } 

  ngOnInit(): void { 
  }
 
}

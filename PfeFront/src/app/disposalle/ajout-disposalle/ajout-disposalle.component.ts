import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { ApiSalleService } from 'src/app/services/api-salle.service';
import {ApiDisposalleService} from "../../services/api-disposalle.service";
import {DisposalleModule} from "../disposalle.module";
import {Disposalle} from "../../models/disposalle";


@Component({
  selector: 'app-ajout-disposalle',
  templateUrl: './ajout-disposalle.component.html',
  styleUrls: ['./ajout-disposalle.component.css']
})
export class AjoutDisposalleComponent implements OnInit {
  minDate = new Date(Date.now() + 1*24*60*60*1000).toISOString();
  addDispoSal: FormGroup ;
  salles:any=[];

  constructor(
              private apiSalle:ApiSalleService,
              private apiDispoSal:ApiDisposalleService,
              private toatr: ToastrService,
              private router:Router, private fb: FormBuilder) {
    let formControls = {
      dateDebut: new FormControl('',Validators.required),
      dateFin: new FormControl('',Validators.required),
      heureDebut: new FormControl('',Validators.required) ,
      heureFin: new FormControl('', Validators.required) ,
      typeEX: new FormControl('',Validators.required)  ,
      motif: new FormControl('',Validators.required),
      salle: new FormControl('',Validators.required)

    }
    this.addDispoSal = this.fb.group(formControls);
  }

  get dateDebut() { return this.addDispoSal.get('dateDebut') }
  get dateFin() { return this.addDispoSal.get('dateFin') }
  get heureDebut() { return this.addDispoSal.get('heureDebut') }
  get heureFin() { return this.addDispoSal.get('heureFin') }
  get motif() { return this.addDispoSal.get('typeEX') }
  get salle() { return this.addDispoSal.get('salle') }


  ngOnInit(): void {
    this.apiSalle.all().subscribe(data=>{
      if(data['RESPONSE']!="ERREUR"){this.salles = data;  }
    },error=>{
      console.log("Error : "+error);
    });
  }

  save(){
    let data = this.addDispoSal.value;
    let ex = new Disposalle(null,data.dateDebut, data.dateFin, data.heureDebut, data.heureFin, data.motif, data.salle);
    this.apiDispoSal.add(ex).subscribe(data=>{
      console.log("RES : "+data);
      if(data==true){
        this.toatr.success('Disposalle ajouté avec succès', 'Succès',{timeOut: 2000});
        this.router.navigate(['/home/disposalle/all'])
      }
    }, error=>console.log("ERROR : "+error));
  }

}

import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {ApiDisposalleService} from "../../services/api-disposalle.service";
//import { ApiDisposalleService } from 'src/app/services/api-disposalle.service';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-list-disposalle',
  templateUrl: './list-disposalle.component.html',
  styleUrls: ['./list-disposalle.component.css']
})
export class ListDisposalleComponent implements OnInit {
  disposalles:any = [];
  term: string;
  constructor(private service:ApiDisposalleService, private toastr: ToastrService){
  }

  ngOnInit(): void {
    this.getAllDispoSalles();
  }

  getDayName(date){
    console.log("date IS  ====> "+date);
    let newDate = new Date(date);
    let  weekdays = new Array(7);
        weekdays[0] = "Dimanche";
        weekdays[1] = "Lundi";
        weekdays[2] = "Mardi";
        weekdays[3] = "Mercredi";
        weekdays[4] = "Jeudi";
        weekdays[5] = "Vendredi";
        weekdays[6] = "Samedi";
        let r = weekdays[newDate.getDay()];
        console.log("DAY NAME IS  ====> "+r);
        return r ;
  }


  getAllDispoSalles(){
    this.service.all().subscribe(data=>{
      if(data['RESPONSE']!="ERREUR"){this.disposalles = data;  }
    },error=>{
      console.log("Error : "+error);
    });
  }

  suppdispoSalle(id){
    this.service.delete(id).subscribe(data=>{
      console.log("RES DELETE : "+data);
      if(data==true){
        this.toastr.success('dispo supprimée avec succès', 'Succès',{timeOut: 2000});
        this.disposalles = []; this.getAllDispoSalles();
      }else {
        this.toastr.error('Erreur de suppression', 'Error',{timeOut: 2000});
      }
    }, error=>console.log("ERROR DELETE : "+error));
  }
}

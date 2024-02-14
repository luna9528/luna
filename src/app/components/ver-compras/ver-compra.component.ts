import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Compra } from '@src/app/interfaces/compra';
import { CompraService } from '@src/app/services/compra.service';

@Component({
  selector: 'app-ver-compra',
  templateUrl: './ver-compra.component.html',
  styleUrl: './ver-compra.component.css'
})
export class VerCompraComponent implements OnInit {

  id: number;
  compra!: Compra;
  loading: boolean = false;

  constructor(private _CompraSErvice: CompraService,
    private aRoute: ActivatedRoute){
      this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
    }
  ngOnInit(): void {
    this.obtenerCompra();
  }
  obtenerCompra(){
    this.loading =true;
    this._CompraSErvice.getCompra(this.id).subscribe(data =>{
      this.compra =data;
      this.loading = false;
    })
  }
}

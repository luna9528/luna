import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Compra } from '@src/app/interfaces/compra';
import { CompraService } from '@src/app/services/compra.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-agregar-editar-compra',
  templateUrl: './agregar-editar-compra.component.html',
  styleUrl: './agregar-editar-compra.component.css',
})
export class AgregarEditarCompraComponent {

  loading: boolean= false;
  form: FormGroup;
  id: number;

  operacion : string = 'Agregar';

  constructor(private fb: FormBuilder,
    private _compraService: CompraService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private aRoute: ActivatedRoute){
    this.form = this.fb.group({
      nombre:['', Validators.required],
      cantidad:['', Validators.required],
      email:['', Validators.required],
      phone:['', Validators.required, Validators.pattern('^[0-9]{8,10}$')],
      })

      this.id = Number(this.aRoute.snapshot.paramMap.get('id'))
  }

  ngOnInit(): void{
    if(this.id != 0){
      this.operacion = 'Editar';
      this.obtenerCompra(this.id);
    }
  }

  obtenerCompra(id: number){
    this._compraService.getCompra(id).subscribe(data =>{
      this.form.setValue({
        nombre: data.nombre,
        cantidad: data.cantidad,
        email: data.email,
        phone: data.phone
      })
    })
  }

  agregarEditarCompras(){
  //armado el objeto
    const compra: Compra = {
      nombre:this.form.value.nombre,
      cantidad: this.form.value.cantidad,
      email: this.form.value.correo,
      phone: this.form.value.phone
    }

    if(this.id != 0){
      compra.id = this.id;
      this.editarCompra(this.id, compra);
    }else {
      this.agregarCompra(compra);
    }
  }

editarCompra(id: number, compra: Compra){
  this._compraService.updateCompra(id, compra).subscribe(()=>{
    this.mensajeExito('actualizada');
    this.router.navigate(['/listCompras']);
  })
}

  agregarCompra(compra: Compra){
    //enviamos objeto al back-end
  this._compraService.addCompra(compra).subscribe(data =>{
    this.mensajeExito('registrada');
    this.router.navigate(['/listCompras']);
  })


  }
  mensajeExito(texto: string) {
    this._snackBar.open(`La Mascota fue ${texto} con exito`,'', {
      duration: 4000,
    });
  }
}


import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Items} from '../../models/Items';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, NgForm} from '@angular/forms';

export  class Item {
  constructor(
    public id: number,
    public marque: string,
    public libelle: string,
    public prix: number,
    public photo: string
  ) {}
}
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  item: Item[];
  closeResult: string;
  url = 'http://localhost:8080/rest_shop_war_exploded/rest/items/';
  editForm: FormGroup;
  private deleteId: number;


  constructor(
    private http: HttpClient,
    private modalService: NgbModal,
    private fb: FormBuilder
  ) { }
  ngOnInit(): void {
    this.getItems();
    this.editForm = this.fb.group({
      marque: [''],
      libelle: [''],
      prix: ['']
    });
  }

  getAll(): Observable<Array<Items>> {
    return this.http.get<Array<Items>>(this.url);
  }

  getItems(){
    this.http.get<any>('http://localhost:8080/rest_shop_war_exploded/rest/items/').subscribe(
      response => {
        console.log(response);
        this.item = response;
      }
    );
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  onSubmit(f: NgForm) {
    const url = 'http://localhost:8080/rest_shop_war_exploded/rest/items';
    this.http.post(url, f.value)
      .subscribe((result) => {
        this.ngOnInit();
      });
    this.modalService.dismissAll();
  }
  openDetails(targetModal, item: Item) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
    });
    document.getElementById('amarque').setAttribute('value', item.marque);
    document.getElementById('dlibelle').setAttribute('value', item.libelle);
    document.getElementById('pprix').setAttribute('value', String(item.prix));
  }
  openEdit(targetModal, item: Item) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
    });
    this.editForm.patchValue( {
      marque: item.marque,
      libelle: item.libelle,
      prix: item.prix
    });
  }
  onSave() {
    const editURL = 'http://localhost:5555/Articles/' + this.editForm.value.id + '/edit';
    this.http.put(editURL, this.editForm.value)
      .subscribe((results) => {
        this.ngOnInit();
        this.modalService.dismissAll();
      });
  }

  openDelete(targetModal, item: Item) {
    this.deleteId = item.id;
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });
  }

  onDelete() {
    const deleteURL = 'http://localhost:8080/rest_shop_war_exploded/rest/items/' + this.deleteId + '/delete';
    this.http.delete(deleteURL)
      .subscribe((results) => {
        this.ngOnInit();
        this.modalService.dismissAll();
      });
  }
}

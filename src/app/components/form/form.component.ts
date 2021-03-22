import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Items} from '../../models/Items';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';
import {Categories} from '../../models/Categories';

class Item {
  constructor(
    public categorieId: number,
    public categorieName: string,
    public id: number,
    public marque: string,
    public libelle: string,
    public prix: number,
    public photo: string,
    public description: string
  ) {}
}
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit{
  categories: Categories;
  constructor( private http: HttpClient, private modalService: NgbModal, private fb: FormBuilder) { }
  item: Item[];
  closeResult: string;
  marque: any;
  url = 'http://localhost:8080/rest_shop_war_exploded/rest/items/';
  editForm: FormGroup;
  addForm: FormGroup;
  private deleteId: number;
  key:string = 'prix';
  reverse:boolean = false;
  p: number=1;
  categorie: any;
  ngOnInit(): void {
    this.getItems();
    this.getCategorie();
    console.log(this.categories);
    this.editForm = this.fb.group({
      id: [''],
      marque: [''],
      libelle: [''],
      prix: [''],
      photo: [''],
      description: ['']
    });

    this.addForm = this.fb.group({
      categorieId: [''],
      marque: [''],
      libelle: [''],
      prix: [''],
      photo: [''],
      description: ['']
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
getCategorie(){
    this.http.get<any>('http://localhost:8080/rest_shop_war_exploded/rest/categories/').subscribe(
      response => {
        console.log(response);
        this.categories = response;
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
    document.getElementById('acategorieName').setAttribute('value', item.categorieName);
    document.getElementById('acategorieId').setAttribute('value', String(item.categorieId));
    document.getElementById('amarque').setAttribute('value', item.marque);
    document.getElementById('dlibelle').setAttribute('value', item.libelle);
    document.getElementById('pprix').setAttribute('value', String(item.prix));
    document.getElementById('aphoto').setAttribute('value', item.photo);
    document.getElementById('adescription').setAttribute('value', item.description);
  }
  openEdit(targetModal, item: Item) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
    });
    this.editForm.patchValue( {
      id: item.id,
      libelle: item.libelle,
      marque: item.marque,
      prix: item.prix,
      description: item.description,
      photo: item.photo
    });
  }
  onSave() {    
    const editURL = 'http://localhost:8080/rest_shop_war_exploded/rest/items';
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
    const deleteURL = 'http://localhost:8080/rest_shop_war_exploded/rest/items/' + this.deleteId;
    this.http.delete(deleteURL)
      .subscribe((results) => {
        this.ngOnInit();
        this.modalService.dismissAll();
      });
  }

  Search(){
    if (this.marque == ""){
      this.ngOnInit();
    }else{
      this.item = this.item.filter(res => {
        return res.marque.toLocaleLowerCase().match(this.marque.toLocaleLowerCase());
      });
    }
  }
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
}
import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Articles} from '../../models/Articles';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, NgForm} from '@angular/forms';

export  class Article {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public prix: number,
  ) {}
}
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  article: Article[];
  closeResult: string;
  url = 'http://localhost:5555/Articles/';
  editForm: FormGroup;
  private deleteId: number;

  constructor(
    private http: HttpClient,
    private modalService: NgbModal,
    private fb: FormBuilder
  ) { }
  ngOnInit(): void {
    this.getArticles();
    this.editForm = this.fb.group({
      name: [''],
      description: [''],
      prix: ['']
    });
  }

  getAll(): Observable<Array<Articles>> {
    return this.http.get<Array<Articles>>(this.url);
  }

  getArticles(){
    this.http.get<any>('http://localhost:5555/Articles/').subscribe(
      response => {
        console.log(response);
        this.article = response;
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
    const url = 'http://localhost:5555/Articles/addArticle';
    this.http.post(url, f.value)
      .subscribe((result) => {
        this.ngOnInit();
      });
    this.modalService.dismissAll();
  }
  openDetails(targetModal, article: Article) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
    });
    document.getElementById('aname').setAttribute('value', article.name);
    document.getElementById('ddescription').setAttribute('value', article.description);
    document.getElementById('pprix').setAttribute('value', String(article.prix));
  }
  openEdit(targetModal, article: Article) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
    });
    this.editForm.patchValue( {
      name: article.name,
      description: article.description,
      prix: article.prix
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

  openDelete(targetModal, article: Article) {
    this.deleteId = article.id;
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });
  }

  onDelete() {
    const deleteURL = 'http://localhost:8888/Articles/' + this.deleteId + '/delete';
    this.http.delete(deleteURL)
      .subscribe((results) => {
        this.ngOnInit();
        this.modalService.dismissAll();
      });
  }
}

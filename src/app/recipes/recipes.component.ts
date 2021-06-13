import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipes: any;

  constructor(private http: HttpClient) {
    this.getRecipesData();
  }

  getRecipesData() {
    this.http.get('https://deepak-docker-test.herokuapp.com/recipes.json').subscribe((res: any) => {
      this.recipes = res;
    });
  }

  ngOnInit(): void {}
}

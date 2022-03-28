import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chicken_pasta_bake-bb82ba6.jpg?quality=90&resize=500,454'),
    new Recipe('Another Test Recipe', 'This is simply a test', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chicken_pasta_bake-bb82ba6.jpg?quality=90&resize=500,454')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

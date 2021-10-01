import {Component, Inject} from '@angular/core';
import { MyCard } from '../card/my-card';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'; 

export interface DialogData {
  title: string;
  description: string;
  category: string;
}

 
@Component({
  selector: 'dialog-recipe',
  templateUrl: 'dialog-recipe.html',
  styleUrls: ['dialog-recipe.css'],
})

export class DialogRecipe {

  name: string = '';
  description: string = '';
  category: string = '';
  recipe: MyCard = new MyCard('', '', '');             
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogRecipeDialog, {
      width: '250px',
      data: {name: this.name, description: this.description, category: this.category}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result && result.name && result.description && result.category)
      this.recipe = new MyCard(result.title, result.description, result.category);
    });
  }

}



@Component({
  selector: 'dialog-recipe-dialog',
  templateUrl: 'dialog-recipe-dialog.html',
})

export class DialogRecipeDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogRecipeDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}


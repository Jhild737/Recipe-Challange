import {Component, Inject} from '@angular/core'; from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material'; 

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

  title: string;
  description: string;
  category: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogRecipeDialog, {
      width: '250px',
      data: {title: this.title, description: this.description, category: this.category}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.recipe = result;
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


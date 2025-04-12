import { Injectable, inject } from '@angular/core';
import { Note } from '../interfaces/note.interface';
import {
  Firestore,
  collectionData,
  collection,
  doc,
  onSnapshot,
} from '@angular/fire/firestore';
import { elementAt } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NoteListService {
  trashNotes: Note[] = [];
  normalNotes: Note[] = [];

  firestore: Firestore = inject(Firestore);
  items$ = collectionData(this.getNotesRef());

  items;
  unsubList;

  constructor() {
    this.unsubList = onSnapshot(this.getNotesRef(), (list) => {
      list.forEach((element) => {
        console.log(element);
      });
    });

    this.items = this.items$.subscribe((list) => {
      list.forEach((element) => {
        console.log(element);
      });
    });
  }

  ngOnDestroy() {
    this.unsubList();
    this.items.unsubscribe();
  }

  getNotesRef() {
    return collection(this.firestore, 'notes');
  }

  getTrashRef() {
    return collection(this.firestore, 'trash');
  }

  getSingleDocRef(colId: string, docId: string) {
    return doc(collection(this.firestore, colId), docId);
  }
}

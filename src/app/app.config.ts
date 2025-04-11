import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"danotes-a212d","appId":"1:632366192964:web:18c3e89338aa7903ca1f11","storageBucket":"danotes-a212d.firebasestorage.app","apiKey":"AIzaSyBMNNvxZnHVj-_4N6Xv8YXdB_KHJHcF5RE","authDomain":"danotes-a212d.firebaseapp.com","messagingSenderId":"632366192964"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};

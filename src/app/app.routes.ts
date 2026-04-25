import { Component } from '@angular/core';
import { pattern } from '@angular/forms/signals';
import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';

export const routes: Routes = [
    {
        path: '',
        component: CounterPageComponent,
    }
];


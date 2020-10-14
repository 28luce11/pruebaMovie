import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InternalComponent } from './layaouts/internal/internal.component';


const routes: Routes = [
    {
        path: 'internal',
        component: InternalComponent,
        children: [
            {
                path: 'home',
                loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
            },
            {
                path: 'movie/:id',
                loadChildren: () => import('./pages/details/details.module').then(m => m.DetailsModule),
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'internal/home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

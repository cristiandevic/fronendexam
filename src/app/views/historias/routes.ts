import { Routes } from '@angular/router';
export const routes: Routes = [
    {
        path: '',
        data: {
        title: 'Historias'
        },
        children: [
            {
              path: '',
              redirectTo: 'cards',
              pathMatch: 'full'
            },
            {
                path: 'reciente',
                loadComponent: () => import('./historia/historia.component').then(m => m.AutorComponent),
                data: {
                  title: 'reciente'
                }
            },
            {
              path: 'reporte',
              loadComponent: () => import('./reporte/reporte.component').then(m => m.ReporteComponent),
              data: {
                title: 'reporte'
              }
          }
        ]
    }
];
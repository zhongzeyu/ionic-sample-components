import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'tab4',
        loadChildren: () => import('../tab4/tab4.module').then( m => m.Tab4PageModule)
      },
      {
        path: 'tab5',
        loadChildren: () => import('../tab5/tab5.module').then( m => m.Tab5PageModule)
      },
      {
        path: 'tab6',
        loadChildren: () => import('../tab6/tab6.module').then( m => m.Tab6PageModule)
      },
      {
        path: 'tab7',
        loadChildren: () => import('../tab7/tab7.module').then( m => m.Tab7PageModule)
      },
      {
        path: 'tab8',
        loadChildren: () => import('../tab8/tab8.module').then( m => m.Tab8PageModule)
      },
      {
        path: 'tab9',
        loadChildren: () => import('../tab9/tab9.module').then( m => m.Tab9PageModule)
      },
      {
        path: 'tab10',
        loadChildren: () => import('../tab10/tab10.module').then( m => m.Tab10PageModule)
      },
      {
        path: 'tab11',
        loadChildren: () => import('../tab11/tab11.module').then( m => m.Tab11PageModule)
      },
      {
        path: 'tab12',
        loadChildren: () => import('../tab12/tab12.module').then( m => m.Tab12PageModule)
      },
      {
        path: 'tab13',
        loadChildren: () => import('../tab13/tab13.module').then( m => m.Tab13PageModule)
      },
      {
        path: 'tab14',
        loadChildren: () => import('../tab14/tab14.module').then( m => m.Tab14PageModule)
      },
      {
        path: 'tab15',
        loadChildren: () => import('../tab15/tab15.module').then( m => m.Tab15PageModule)
      },
      {
        path: 'tab16',
        loadChildren: () => import('../tab16/tab16.module').then( m => m.Tab16PageModule)
      },
      {
        path: 'tab17',
        loadChildren: () => import('../tab17/tab17.module').then( m => m.Tab17PageModule)
      },
      {
        path: 'tab18',
        loadChildren: () => import('../tab18/tab18.module').then( m => m.Tab18PageModule)
      },
      {
        path: 'tab19',
        loadChildren: () => import('../tab19/tab19.module').then( m => m.Tab19PageModule)
      },
      {
        path: 'tab20',
        loadChildren: () => import('../tab20/tab20.module').then( m => m.Tab20PageModule)
      },
      {
        path: 'tab21',
        loadChildren: () => import('../tab21/tab21.module').then( m => m.Tab21PageModule)
      },
      {
        path: 'tab22',
        loadChildren: () => import('../tab22/tab22.module').then( m => m.Tab22PageModule)
      },
      {
        path: 'tab23',
        loadChildren: () => import('../tab23/tab23.module').then( m => m.Tab23PageModule)
      },
      {
        path: 'tab24',
        loadChildren: () => import('../tab24/tab24.module').then( m => m.Tab24PageModule)
      },
      {
        path: 'tab25',
        loadChildren: () => import('../tab25/tab25.module').then( m => m.Tab25PageModule)
      },
      {
        path: 'tab26',
        loadChildren: () => import('../tab26/tab26.module').then( m => m.Tab26PageModule)
      },
      {
        path: 'tab27',
        loadChildren: () => import('../tab27/tab27.module').then( m => m.Tab27PageModule)
      },
      {
        path: 'tab28',
        loadChildren: () => import('../tab28/tab28.module').then( m => m.Tab28PageModule)
      },
      {
        path: 'tab29',
        loadChildren: () => import('../tab29/tab29.module').then( m => m.Tab29PageModule)
      },
      {
        path: 'tab30',
        loadChildren: () => import('../tab30/tab30.module').then( m => m.Tab30PageModule)
      },
      {
        path: 'tab31',
        loadChildren: () => import('../tab31/tab31.module').then( m => m.Tab31PageModule)
      },
      {
        path: 'tab32',
        loadChildren: () => import('../tab32/tab32.module').then( m => m.Tab32PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}

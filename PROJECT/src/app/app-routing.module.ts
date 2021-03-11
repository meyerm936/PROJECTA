import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'video',
    loadChildren: () => import('./video/video.module').then( m => m.VideoPageModule)
  },
  {
    path: 'programme',
    loadChildren: () => import('./programme/programme.module').then( m => m.ProgrammePageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'cc101',
    loadChildren: () => import('./cc101/cc101.module').then( m => m.CC101PageModule)
  },
  {
    path: 'ct203',
    loadChildren: () => import('./ct203/ct203.module').then( m => m.CT203PageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'petroleum',
    loadChildren: () => import('./petroleum/petroleum.module').then( m => m.PetroleumPageModule)
  },
  {
    path: 'blacklisted',
    loadChildren: () => import('./blacklisted/blacklisted.module').then( m => m.BlacklistedPageModule)
  },
  {
    path: 'view-post',
    loadChildren: () => import('./view-post/view-post.module').then( m => m.ViewPostPageModule)
  },
  {
    path: 'edit-post/:id',
    loadChildren: () => import('./edit-post/edit-post.module').then( m => m.EditPostPageModule)
   },
  {
    path: 'order',
    loadChildren: () => import('./order/order.module').then( m => m.OrderPageModule)
  },
  {
    path: 'fcocif',
    loadChildren: () => import('./fcocif/fcocif.module').then( m => m.FcocifPageModule)
  },
  {
    path: 'fco-m',
    loadChildren: () => import('./fco-m/fco-m.module').then( m => m.FcoMPageModule)
  },
  {
    path: 'dieseld2',
    loadChildren: () => import('./dieseld2/dieseld2.module').then( m => m.Dieseld2PageModule)
  },
  {
    path: 'mazut100',
    loadChildren: () => import('./mazut100/mazut100.module').then( m => m.Mazut100PageModule)
  },
  {
    path: 'gasoline',
    loadChildren: () => import('./gasoline/gasoline.module').then( m => m.GasolinePageModule)
  },
  {
    path: 'hsd',
    loadChildren: () => import('./hsd/hsd.module').then( m => m.HsdPageModule)
  },
  {
    path: 'jp54',
    loadChildren: () => import('./jp54/jp54.module').then( m => m.Jp54PageModule)
  },
  {
    path: 'jeta1',
    loadChildren: () => import('./jeta1/jeta1.module').then( m => m.Jeta1PageModule)
  },
  {
    path: 'dieselen590',
    loadChildren: () => import('./dieselen590/dieselen590.module').then( m => m.Dieselen590PageModule)
  },
  {
    path: 'dieseld6',
    loadChildren: () => import('./dieseld6/dieseld6.module').then( m => m.Dieseld6PageModule)
  },
  {
    path: 'lpg',
    loadChildren: () => import('./lpg/lpg.module').then( m => m.LpgPageModule)
  },
  {
    path: 'lng',
    loadChildren: () => import('./lng/lng.module').then( m => m.LngPageModule)
  },
  {
    path: 'urea',
    loadChildren: () => import('./urea/urea.module').then( m => m.UreaPageModule)
  },
  {
    path: 'baseoils',
    loadChildren: () => import('./baseoils/baseoils.module').then( m => m.BaseoilsPageModule)
  },
  {
    path: 'petcoke',
    loadChildren: () => import('./petcoke/petcoke.module').then( m => m.PetcokePageModule)
  },
  {
    path: 'bitumen',
    loadChildren: () => import('./bitumen/bitumen.module').then( m => m.BitumenPageModule)
  },
  {
    path: 'crudeoil',
    loadChildren: () => import('./crudeoil/crudeoil.module').then( m => m.CrudeoilPageModule)
  },
  {
    path: 'bank',
    loadChildren: () => import('./bank/bank.module').then( m => m.BankPageModule)
  },
  {
    path: 'commission',
    loadChildren: () => import('./commission/commission.module').then( m => m.CommissionPageModule)
  },
  {
    path: 'shipping',
    loadChildren: () => import('./shipping/shipping.module').then( m => m.ShippingPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: 'thank',
    loadChildren: () => import('./thank/thank.module').then( m => m.ThankPageModule)
  },
  {
    path: 'thank1',
    loadChildren: () => import('./thank1/thank1.module').then( m => m.Thank1PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

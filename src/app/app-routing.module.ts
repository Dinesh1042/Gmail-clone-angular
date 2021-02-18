import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MailComponent } from './mail/mail.component';
import { MessageComponent } from './message/message.component';
import { PrimaryComponent } from './primary/primary.component';
import { SocialComponent } from './social/social.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'mail/primary',
    pathMatch: 'full',
  },
  {
    path: 'mail',
    component: MailComponent,
    children: [
      {
        path: 'primary',
        component: PrimaryComponent,
      },
      {
        path: 'social',
        component: SocialComponent,
      },
    ],
  },
  {
    path: 'message/:id',
    component: MessageComponent,
  },
  {
    path: 'message/:**',
    redirectTo: 'mail/primary',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'mail/primary',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

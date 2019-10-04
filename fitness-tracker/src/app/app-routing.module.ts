import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthRoutingModule } from './auth/auth-routing.module';

const routes: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'training', loadChildren: './training/training.module#TrainingModule' }
];

@NgModule({
    imports: [
        AuthRoutingModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    providers: [AuthGuard]
})

export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { TrainingComponent } from './training/training.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthRoutingModule } from './auth/auth-routing.module';

const routes: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'training', component: TrainingComponent, canActivate: [AuthGuard] }
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

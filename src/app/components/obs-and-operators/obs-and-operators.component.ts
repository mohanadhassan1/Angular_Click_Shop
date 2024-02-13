import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-obs-and-operators',
  standalone: true,
  imports: [],
  templateUrl: './obs-and-operators.component.html',
  styleUrl: './obs-and-operators.component.scss'
})
export class ObsAndOperatorsComponent implements OnInit,OnDestroy {
  
  sub!: Subscription;
  
  obs = new Observable((observer) => {
    console.log("Hello World !!!");

    setTimeout(() => {
      observer.next('H')
    },1000);
    setTimeout(() => {
      observer.next('E')
    },2000);
    setTimeout(() => {
      observer.next('L')
    },3000);
    setTimeout(() => {
      observer.error('Error')
    },4000);
    setTimeout(() => {
      observer.complete()
    },5000);
    
  }); 

  constructor(){}

  ngOnInit(): void {
    this.sub = this.obs.subscribe({
      next:(data)=>{
        console.log(data);
        
      },
      error:(err)=>{
        console.log(err);
        
      },
      complete:()=>{
        console.log('Complete');
      }
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
    console.log('unsubscribe');

  }

}

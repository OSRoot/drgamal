import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ContactService } from 'src/app/_services/contact_us/contact.service';
import { HomeService } from 'src/app/_services/home/home.service';

@Component({
  selector: 'app-drgamal',
  templateUrl: './drgamal.component.html',
  styleUrls: ['./drgamal.component.scss']
})
export class DrgamalComponent {
  isImage!:boolean;
  info:any
  
  constructor(private scroll: ViewportScroller ,   private titleService:Title,private elementRef: ElementRef,
     private contactService:ContactService , private fb: FormBuilder, private toastr: ToastrService, private router: Router,private homeinfo:HomeService
    ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Dr Gamal ElKenany | Official website');
    this.homeinfo.home().subscribe(
      res=>{
        this.isImage = false;
        this.info=res;
      },
      err=>{}
    )


  }

  setActive(item:any) {

  
    // Set isActive to true for the clicked item
    item.isActive = true;
 
    if(item.label=='home'){
      // this.home.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' ,  inline: 'nearest', blockOffset: scrollOffset });
      this.scroll.scrollToPosition([0,item.offset]);
      }
      else if(item.label=='about'){
        this.scroll.scrollToPosition([0,535+item.offset]);
      }
      else if(item.label=='Founder Of'){
        this.scroll.scrollToPosition([0,1075+item.offset]);
      }
      else if(item.label=='Achievements & Awards'){
        this.scroll.scrollToPosition([0,2404+item.offset]);
        this.router.navigate(['Achievements']);
        window.scroll(0,0);
      }
      else if(item.label=='Blog'){
        this.scroll.scrollToPosition([0,2404+item.offset]);
        this.router.navigate(['Blog']);
        window.scroll(0,0);

      }
      else if(item.label=='contact'){
        this.scroll.scrollToPosition([0,3074+item.offset]);
      }
  }


}

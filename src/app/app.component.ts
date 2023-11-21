import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { ContactService } from './_services/contact_us/contact.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'drgamal';
  @ViewChild('home', { static: false, read: ElementRef }) home!: ElementRef ;
  @ViewChild('about', { static: false, read: ElementRef }) about!: ElementRef ;
  @ViewChild('history', { static: false, read: ElementRef }) history!: ElementRef ;
  @ViewChild('business', { static: false, read: ElementRef }) business!: ElementRef ;
  @ViewChild('contact', { static: false, read: ElementRef }) contact!: ElementRef ;


  navigationItems1 = [
    { label: 'home', isActive: true ,offset:0},
    { label: 'about', isActive: false ,offset:0},
    { label: 'Founder Of', isActive: false ,offset:0},
    { label: 'Achievements & Awards', isActive: false ,offset:0},
    { label: 'Blog', isActive: false ,offset:0},
    { label: 'contact', isActive: false ,offset:0},

  ];

  navigationItems2 = [
    { label: 'home', isActive: true ,offset:0},
    { label: 'about', isActive: false ,offset:0},
    { label: 'Founder Of', isActive: false ,offset:900},
    { label: 'Achievements & Awards', isActive: false ,offset:2500},
    { label: 'Blog', isActive: false ,offset:0},
    { label: 'contact', isActive: false ,offset:3500},

  ];

  public isOpen = false;
  public active:boolean=true

  contactForm!: FormGroup;
  routeurl1!:string

  message?:string;
  constructor(private scroll: ViewportScroller ,   private titleService:Title,private elementRef: ElementRef,
    private contactService:ContactService , private fb: FormBuilder, private toastr: ToastrService, private router: Router


   ) { }

 

  ngOnInit(): void {

    this.router.events.subscribe(events => {

      if (events instanceof NavigationEnd) {
        this.routeurl1 = decodeURIComponent(this.router.url);
        if(this.routeurl1 == '/Blog'){
          this.navigationItems1[4].isActive=true
          this.navigationItems1[0].isActive=false
          this.navigationItems2[4].isActive=true
          this.navigationItems2[0].isActive=false
        }else if(this.routeurl1 == '/Achievements'){
          this.navigationItems1[3].isActive=true
          this.navigationItems1[0].isActive=false
          this.navigationItems2[3].isActive=true
          this.navigationItems2[0].isActive=false
        }
      }
    });


    this.titleService.setTitle('Dr Gamal ElKenany | Official website');
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  toggleHeader() {
    let menuIcon = document.querySelector(".header-2 .menu-icon");
    let headerDpn = document.querySelector(".header-2 .dpn");

    menuIcon?.classList.toggle("active");
    headerDpn?.classList.toggle("active");
   
  }

  scrollToTarget(tab:string) {
    if(tab=='home'){
    this.home.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    else if(tab=='about'){
      this.about.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    else if(tab=='history'){
      this.history.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    else if(tab=='business'){
      this.business.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    else if(tab=='contact'){
      this.contact.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  setActive(item:any) {

    this.scroll.scrollToPosition([0,0]);
    // Reset the isActive property for all items
    this.navigationItems1.forEach(navItem => navItem.isActive = false);
    this.navigationItems2.forEach(navItem => navItem.isActive = false);

    // Set isActive to true for the clicked item
    item.isActive = true;
 
    if(item.label=='home'){
      this.router.navigate(['']);
      // this.home.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' ,  inline: 'nearest', blockOffset: scrollOffset });
      this.scroll.scrollToPosition([0,item.offset]);
      }
      else if(item.label=='about'){
        this.router.navigate(['']);
        this.scroll.scrollToPosition([0,435+item.offset]);
      }
      else if(item.label=='Founder Of'){
        this.router.navigate(['']);
        this.scroll.scrollToPosition([0,975+item.offset]);
      }
      else if(item.label=='Achievements & Awards'){
        this.scroll.scrollToPosition([0,2304+item.offset]);
        this.router.navigate(['Achievements']);
        window.scroll(0,0);
      }
      else if(item.label=='Blog'){
        this.scroll.scrollToPosition([0,2304+item.offset]);
        this.router.navigate(['Blog']);
        window.scroll(0,0);

      }
      else if(item.label=='contact'){
        this.router.navigate(['']);
        this.scroll.scrollToPosition([0,2974+item.offset]);
      }
  }

  onSubmit(): void {
    const payload: any = {
      name: this.contactForm.controls['name'].value,
      email: this.contactForm.controls['email'].value,
      message: this.contactForm.controls['message'].value,

    };
    this.contactService.sendMessage(payload).subscribe(
      (res) => {
        // this.toastr.success('Message sent successfully');
        this.message='Message sent successfully';
      },
      (err) => {
        // this.toastr.error(err.error.error);
        this.message='Error sending the message';

      }
    );
  }
}

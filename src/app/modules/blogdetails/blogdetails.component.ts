import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/_services/data/data.service';
import { NewsService } from 'src/app/_services/news/news.service';
import { NewDetails } from 'src/app/interfaces/news';

@Component({
  selector: 'app-blogdetails',
  templateUrl: './blogdetails.component.html',
  styleUrls: ['./blogdetails.component.scss']
})
export class BlogdetailsComponent {
  // blog_content!:NewDetails
  // sanitizedDescription!: SafeHtml;
  blogId:number | string=0;
  blog:any = {}
  constructor(
    // private blogDetails:NewsService,private route: ActivatedRoute,private sanitizer: DomSanitizer
    private data:DataService,
    private actRoute:ActivatedRoute
    ){}

  ngOnInit(): void {
    this.blogId = this.actRoute.snapshot.paramMap.get('id') as string|number;
    // const id = this.route.snapshot.paramMap.get('id')+'';
    // this.blogDetails.news_details(id).subscribe(
    //   res=>{
    //     this.blog_content=res
    //   },
    //   err=>{
    //   console.log('error getting news');
    // }
    // )
    this.getBlog()
  }

  // getSafeDescription(): SafeHtml {
  //   console.log(this.blogDetails);
  //   return this.sanitizer.bypassSecurityTrustHtml(this.blog_content.description);
    
  // }

  getEndPoint():string{
    let endPoint = `news/show/`;
    if (this.blogId) endPoint += this.blogId;
    return endPoint;
  }


  getBlog(){
    this.data.getData(this.getEndPoint()).subscribe(
      res=>{
        this.blog = res;
        
        // this.blog.description = this.blog.description.replace(/<[^>]*>/g, '')
        // .replace(/&rsquo;/g, "'")
        // .replace(/&nbsp;/g, " ")
        // .replace(/&ldquo;/g, '"')
        // .replace(/&rdquo;/g, '"');
        

        
        console.log("🚀 BlogdetailsComponent ~ getBlog ~ this.blog:", this.blog.description)
      },
      err=>{
        
      }
    )
  }
}

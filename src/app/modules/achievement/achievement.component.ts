import { Component, HostListener } from '@angular/core';
import { ImagePopupComponent } from '../image-popup/image-popup.component';
import { Title } from '@angular/platform-browser';
import { AchivementsService } from 'src/app/_services/achivements/achivements.service';
import { Achievements } from 'src/app/interfaces/achievements';
import { DataService } from 'src/app/_services/data/data.service';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.component.html',
  styleUrls: ['./achievement.component.scss']
})
export class AchievementComponent {
all_achievements!:Achievements;
achievements:any[]=[];
defaultImage: string|undefined;
  constructor(
    private titleService:Title,
    private data:DataService
    ) {
      titleService.setTitle('Achievements');
    }

    ngOnInit(): void {
     this.getData()
    }

    getData(){
      this.data.getData('achievements').subscribe(
        res => {
          // console.log("🚀 ~ file: achievement.component.ts:31 ~ AchievementComponent ~ getData ~ res:", res)
          this.achievements = res;
        }
        ,
        err=>{
          console.log(err);
          
        }
      )
    }

}

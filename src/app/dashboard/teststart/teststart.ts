import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RadioButtonModule } from 'primeng/radiobutton';
import {FormsModule} from '@angular/forms';
import {Master} from '../../service/master';
import {ChangeDetectorRef} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-teststart',
  imports: [RadioButtonModule,FormsModule],
  templateUrl: './teststart.html',
  styleUrl: './teststart.css'
})
export class Teststart {

  testName!: string;
  qlist:any=[]
  qcount:number=0;
  ingredient=''
  currentq=0
  answers:any=[];

  constructor(public router:Router,private route: ActivatedRoute,private master: Master,public changeDetector: ChangeDetectorRef) { }

  ngOnInit() {

    this.testName = this.route.snapshot.paramMap.get('testName')!;

    if (this.testName === 'mbti') {
      this.master.questions(1,1,60).subscribe(questions => {
        this.qcount=questions.body.questions.length;
        this.qlist=questions.body.questions
        console.log(this.qlist);
        this.changeDetector.detectChanges();
      })
    } else if (this.testName === 'gad-7') {
      this.master.questions(2, 1, 7).subscribe(questions => {
          this.qcount=questions.body.questions.length;
          this.qlist=questions.body.questions
          console.log(this.qlist);
          this.changeDetector.detectChanges();      })
    }
  }

  prevQ(){
    if(this.currentq!=0){
      this.currentq--
    }
  }


  nextQ(){
    if(this.currentq<this.qcount-1){
      this.currentq++
    }
    else{
      this.submit()
    }
  }


  submit(){

    this.master.test(this.testName,this.answers).subscribe(res=>{
      if (res.status == 200) {
        this.master.testInit(this.testName).subscribe(ress=> {
          localStorage.setItem('coin', ress.body.coin)
          this.router.navigateByUrl('/dashboard/test/result')
        })
      }
        else { alert("مشکلی وجود داشت")}
      }
    )
  }


  selectOption(key:string){
    setTimeout(()=>{
      this.nextQ()
      this.changeDetector.detectChanges();
    },300)
  }

  protected readonly localStorage = localStorage;
}

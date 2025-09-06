import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import {HttpParams} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class Master {
  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, password: string):Observable<HttpResponse<any>> {

    return this.http.post<any>('https://sang-e-saboor-production.ir/registery/login/',
      {
        "email":email,
        "password": password
      },
      {observe: 'response'}
    )
  }


  signup(username: string,email: string, password: string):Observable<HttpResponse<any>> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<any>(
      'https://sang-e-saboor-production.ir/registery/signup/',
      {
        email: email,
        password: password,
        name: username
      },
      {
        headers,
        observe: 'response'
      }
    );
  }


  buycoin(coin:number):Observable<HttpResponse<any>> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });

    return this.http.get('https://sang-e-saboor-production.ir/registery/buycoin/?coin='+coin ,
      {headers,observe: 'response'});
  }


  chathistory(num:number):Observable<HttpResponse<any>> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });

    return this.http.get('https://sang-e-saboor-production.ir/chatbot/chathistory/?number='+num,{headers,observe: 'response'});
  }

  chatbot(text:string):Observable<HttpResponse<any>> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });

    return this.http.post(
      'https://sang-e-saboor-production.ir/chatbot/CBTchatbot/',
      { input:text },
      {
        headers: headers,
        observe: 'response'
      }
    );
  }

  logout(){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`})

    localStorage.removeItem('token');
    localStorage.setItem('isLoggedIn', 'false');

    this.http.get('https://sang-e-saboor-production.ir/registery/logout/' ,
      {headers,observe: 'response'});
    this.router.navigate(['/login']);
  }






  testList():Observable<HttpResponse<any>> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json',
      })


    return this.http.get('https://sang-e-saboor-production.ir/personality_test/testlist/' ,
      {headers,observe: 'response'});
  }

  test(testName:string,answer:any):Observable<HttpResponse<any>> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.post(
      'https://sang-e-saboor-production.ir/personality_test/test/?test=' + testName,
      { answers:answer },
      {
        headers: headers,
        observe: 'response'
      }
    );
  }


  testHistory():Observable<HttpResponse<any>> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`})

    return this.http.get('https://sang-e-saboor-production.ir/personality_test/testhistory/',
      {headers,observe: 'response'});
  }

  testResult():Observable<HttpResponse<any>> {
      const headers = new HttpHeaders({ 'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`})

    return this.http.get('    https://sang-e-saboor-production.ir/personality_test/testresult/?testName=GAD-7',
      {headers,observe: 'response'});
  }


  testInit(id:string):Observable<HttpResponse<any>> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`})

    return this.http.get('https://sang-e-saboor-production.ir/personality_test/testinit/?testName=MBTI',
      {headers,observe: 'response'});
  }

  testDetail(id:number):Observable<HttpResponse<any>> {

    const headers = new HttpHeaders({ 'Content-Type': 'application/json',
    })



    return this.http.get("https://sang-e-saboor-production.ir/personality_test/testdetail/?testId=" + id
       , {headers,observe: 'response'}
    )
  }

  questions(id:number,start:number,end:number):Observable<HttpResponse<any>> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`})
    return this.http.get('https://sang-e-saboor-production.ir/personality_test/questionsdetail/?testId=' + id +'&start='+ start +'&end='+ end
       , {headers,observe: 'response'}
    )

  }
}




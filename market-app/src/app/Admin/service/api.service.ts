import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:8000'; // Ajusta la URL de tu servidor Laravel

  constructor(private http: HttpClient, private router: Router) {}

  registrarUsuario(formData: any): Observable<any> {
    const url = `${this.apiUrl}/api/register`;
    return this.http.post(url, formData).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error al registrar usuario:', error);

        // Imprime más detalles del error
        console.log('Error status:', error.status);
        console.log('Error message:', error.message);

        // Puedes decidir relanzar el error o manejarlo de otra manera
        return throwError(error);
      })
    );
  }
}

// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable, catchError } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class ApiService {
//   private apiUrl = 'http://localhost:8000'; // Ajusta la URL de tu servidor Laravel

//   constructor(private http: HttpClient) {}

//   registrarUsuario(data: any): Observable<any> {
//     const url = `${this.apiUrl}/api/register`;
//     return this.http.post(url, data).pipe(
//       catchError((error) => {
//         console.error('Error al registrar usuario:', error);
//         throw error; // Puedes decidir relanzar el error o manejarlo de otra manera
//       })
//     );
//   }
// }

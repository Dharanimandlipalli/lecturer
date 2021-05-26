import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Lecturer } from './lecturer';
import { environment } from 'src/environments/environment';
@Injectable({
    providedIn: 'root'
})
export class LecturerService {

    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) { }


    public getLecturers(): Observable<Lecturer[]> {

        return this.http.get<Lecturer[]>(`${this.apiServerUrl}/lecturer/all`);

    }

    public addLecturer(lecturer: Lecturer): Observable<Lecturer> {

        return this.http.post<Lecturer>(`${this.apiServerUrl}/lecturer/add`, lecturer);

    }


    public updateLecturer(lecturer: Lecturer): Observable<Lecturer> {

        return this.http.put<Lecturer>(`${this.apiServerUrl}/lecturer/update`, lecturer);

    }

    public deleteLecturer(lecturerId: number): Observable<void> {

        return this.http.delete<void>(`${this.apiServerUrl}/lecturer/delete/${lecturerId}`);

    }



}


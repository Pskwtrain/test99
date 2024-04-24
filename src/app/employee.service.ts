import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 private baseURL = "http://localhost:5555/api/employee";

  constructor(private httpclient:HttpClient) { }

  getEmployeelist():Observable <Employee []> {

return this.httpclient.get <Employee[]> (`${this.baseURL}`);

  }
 createEmployee(employee:Employee):Observable <object> {

  return this.httpclient.post  (`${this.baseURL}` , employee);
 }
}

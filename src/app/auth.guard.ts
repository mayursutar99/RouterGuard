import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let isValid=localStorage.getItem('isValid');
  let _router=inject(Router)
  if(!isValid){
    alert("Not authorized ");
    _router.navigate(['/login']);
    return false;
  }
  return true;
};

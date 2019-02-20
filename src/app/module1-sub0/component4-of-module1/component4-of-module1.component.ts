import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-component4-of-module1',
  templateUrl: './component4-of-module1.component.html',
  styleUrls: ['./component4-of-module1.component.scss']
})
export class Component4OfModule1Component implements OnInit {

test: Observable<boolean>;

  constructor() { }
ngOnInit() {
   this.test = of('null').pipe(
     map((value ) =>  value ? value : 'super'),
     map((value ) =>  value ? value : 'super'),
     map((value ) =>  value ? value : 'super'),
     map((value ) =>  value ? value : 'super'),
     map((value ) =>  false),
   ) ;
  }

  aMethod() {
    for (let i = 0; i < 100; i++) {

      if (i < 1000) {
        throw new Error('Testi');
      }
    }
  }

  aSecondMethod() {
    switch (true) {
      case this.aThirdMethod('s'):
        alert('super');
        break;
      case this.aThirdMethod('x'):
        alert('x');
        break;
      case this.aThirdMethod(''):
        alert('found');
        break;
      default:
        alert('not found');
    }
  }

  aThirdMethod(arguemnt) {
    return arguemnt === '';
  }

  aVeryLongAndComplexMethod(arg1, arg2, arg3, arg4, arg5, arg6) {
    if (!arg1) {
      return false;
    }

    if (arg1 && arg2 || arg3 > arg5 || (arg1 >= arg6)) {
      if (arg1 || arg3) {
        const test = arg1 + arg4 - arg6 * arg6 * arg2;
        if (test >= arg4) {
          return false;
        }
      }
    }


    for (const key of arg5) {
      if (arg1 && arg2 || arg3 > arg5 || (arg1 >= arg6)) {
        if (arg1 || arg3) {
          const test = arg1 + arg4 - arg6 * arg6 * arg2;
          if (test >= arg4) {
            return key;
          }
        }
      }
    }

    this.aVeryLongAndComplexMethod(arg1 + 1, arg2 - arg3, arg3 + arg6 * arg1, arg4, arg6 || arg1, arg3);
  }

  aVeryLongAndComplexMethod0(arg1, arg2, arg3, arg4, arg5, arg6) {
    if (!arg1) {
      return false;
    }

    if (arg1 && arg2 || arg3 > arg5 || (arg1 >= arg6)) {
      if (arg1 || arg3) {
        const test = arg1 + arg4 - arg6 * arg6 * arg2;
        if (test >= arg4) {
          return false;
        }
      }
    }


    for (const key of arg5) {
      if (arg1 && arg2 || arg3 > arg5 || (arg1 >= arg6)) {
        if (arg1 || arg3) {
          const test = arg1 + arg4 - arg6 * arg6 * arg2;
          if (test >= arg4) {
            return key;
          }
        }
      }
    }

    this.aVeryLongAndComplexMethod(arg1 + 1, arg2 - arg3, arg3 + arg6 * arg1, arg4, arg6 || arg1, arg3);
  }

  aVeryLongAndComplexMethod1(arg1, arg2, arg3, arg4, arg5, arg6) {
    if (!arg1) {
      return false;
    }

    if (arg1 && arg2 || arg3 > arg5 || (arg1 >= arg6)) {
      if (arg1 || arg3) {
        const test = arg1 + arg4 - arg6 * arg6 * arg2;
        if (test >= arg4) {
          return false;
        }
      }
    }


    for (const key of arg5) {
      if (arg1 && arg2 || arg3 > arg5 || (arg1 >= arg6)) {
        if (arg1 || arg3) {
          const test = arg1 + arg4 - arg6 * arg6 * arg2;
          if (test >= arg4) {
            return key;
          }
        }
      }
    }

    this.aVeryLongAndComplexMethod(arg1 + 1, arg2 - arg3, arg3 + arg6 * arg1, arg4, arg6 || arg1, arg3);
  }


  aVeryLongAndComplexMethod2(arg1, arg2, arg3, arg4, arg5, arg6) {
    if (!arg1) {
      return false;
    }

    if (arg1 && arg2 || arg3 > arg5 || (arg1 >= arg6)) {
      if (arg1 || arg3) {
        const test = arg1 + arg4 - arg6 * arg6 * arg2;
        if (test >= arg4) {
          return false;
        }
      }
    }


    for (const key of arg5) {
      if (arg1 && arg2 || arg3 > arg5 || (arg1 >= arg6)) {
        if (arg1 || arg3) {
          const test = arg1 + arg4 - arg6 * arg6 * arg2;
          if (test >= arg4) {
            return key;
          }
        }
      }
    }

    this.aVeryLongAndComplexMethod(arg1 + 1, arg2 - arg3, arg3 + arg6 * arg1, arg4, arg6 || arg1, arg3);
  }

  aVeryLongAndComplexMethod3(arg1, arg2, arg3, arg4, arg5, arg6) {
    if (!arg1) {
      return false;
    }

    if (arg1 && arg2 || arg3 > arg5 || (arg1 >= arg6)) {
      if (arg1 || arg3) {
        const test = arg1 + arg4 - arg6 * arg6 * arg2;
        if (test >= arg4) {
          return false;
        }
      }
    }


    for (const key of arg5) {
      if (arg1 && arg2 || arg3 > arg5 || (arg1 >= arg6)) {
        if (arg1 || arg3) {
          const test = arg1 + arg4 - arg6 * arg6 * arg2;
          if (test >= arg4) {
            return key;
          }
        }
      }
    }

    this.aVeryLongAndComplexMethod(arg1 + 1, arg2 - arg3, arg3 + arg6 * arg1, arg4, arg6 || arg1, arg3);
  }


  aVeryLongAndComplexMethod4(arg1, arg2, arg3, arg4, arg5, arg6) {
    if (!arg1) {
      return false;
    }

    if (arg1 && arg2 || arg3 > arg5 || (arg1 >= arg6)) {
      if (arg1 || arg3) {
        const test = arg1 + arg4 - arg6 * arg6 * arg2;
        if (test >= arg4) {
          return false;
        }
      }
    }


    for (const key of arg5) {
      if (arg1 && arg2 || arg3 > arg5 || (arg1 >= arg6)) {
        if (arg1 || arg3) {
          const test = arg1 + arg4 - arg6 * arg6 * arg2;
          if (test >= arg4) {
            return key;
          }
        }
      }
    }

    this.aVeryLongAndComplexMethod(arg1 + 1, arg2 - arg3, arg3 + arg6 * arg1, arg4, arg6 || arg1, arg3);
  }


  aVeryLongAndComplexMethod5(arg1, arg2, arg3, arg4, arg5, arg6) {
    if (!arg1) {
      return false;
    }

    if (arg1 && arg2 || arg3 > arg5 || (arg1 >= arg6)) {
      if (arg1 || arg3) {
        const test = arg1 + arg4 - arg6 * arg6 * arg2;
        if (test >= arg4) {
          return false;
        }
      }
    }


    for (const key of arg5) {
      if (arg1 && arg2 || arg3 > arg5 || (arg1 >= arg6)) {
        if (arg1 || arg3) {
          const test = arg1 + arg4 - arg6 * arg6 * arg2;
          if (test >= arg4) {
            return key;
          }
        }
      }
    }

    this.aVeryLongAndComplexMethod(arg1 + 1, arg2 - arg3, arg3 + arg6 * arg1, arg4, arg6 || arg1, arg3);
  }

  aVeryLongAndComplexMethod6(arg1, arg2, arg3, arg4, arg5, arg6) {
    if (!arg1) {
      return false;
    }

    if (arg1 && arg2 || arg3 > arg5 || (arg1 >= arg6)) {
      if (arg1 || arg3) {
        const test = arg1 + arg4 - arg6 * arg6 * arg2;
        if (test >= arg4) {
          return false;
        }
      }
    }


    for (const key of arg5) {
      if (arg1 && arg2 || arg3 > arg5 || (arg1 >= arg6)) {
        if (arg1 || arg3) {
          const test = arg1 + arg4 - arg6 * arg6 * arg2;
          if (test >= arg4) {
            return key;
          }
        }
      }
    }

    this.aVeryLongAndComplexMethod(arg1 + 1, arg2 - arg3, arg3 + arg6 * arg1, arg4, arg6 || arg1, arg3);
  }


  aVeryLongAndComplexMethod7(arg1, arg2, arg3, arg4, arg5, arg6) {
    if (!arg1) {
      return false;
    }

    if (arg1 && arg2 || arg3 > arg5 || (arg1 >= arg6)) {
      if (arg1 || arg3) {
        const test = arg1 + arg4 - arg6 * arg6 * arg2;
        if (test >= arg4) {
          return false;
        }
      }
    }


    for (const key of arg5) {
      if (arg1 && arg2 || arg3 > arg5 || (arg1 >= arg6)) {
        if (arg1 || arg3) {
          const test = arg1 + arg4 - arg6 * arg6 * arg2;
          if (test >= arg4) {
            return key;
          }
        }
      }
    }

    this.aVeryLongAndComplexMethod(arg1 + 1, arg2 - arg3, arg3 + arg6 * arg1, arg4, arg6 || arg1, arg3);
  }


  aVeryLongAndComplexMethod8(arg1, arg2, arg3, arg4, arg5, arg6) {
    if (!arg1) {
      return false;
    }

    if (arg1 && arg2 || arg3 > arg5 || (arg1 >= arg6)) {
      if (arg1 || arg3) {
        const test = arg1 + arg4 - arg6 * arg6 * arg2;
        if (test >= arg4) {
          return false;
        }
      }
    }


    for (const key of arg5) {
      if (arg1 && arg2 || arg3 > arg5 || (arg1 >= arg6)) {
        if (arg1 || arg3) {
          const test = arg1 + arg4 - arg6 * arg6 * arg2;
          if (test >= arg4) {
            return key;
          }
        }
      }
    }

    this.aVeryLongAndComplexMethod(arg1 + 1, arg2 - arg3, arg3 + arg6 * arg1, arg4, arg6 || arg1, arg3);
  }


  aVeryLongAndComplexMethod9(arg1, arg2, arg3, arg4, arg5, arg6) {
    if (!arg1) {
      return false;
    }

    if (arg1 && arg2 || arg3 > arg5 || (arg1 >= arg6)) {
      if (arg1 || arg3) {
        const test = arg1 + arg4 - arg6 * arg6 * arg2;
        if (test >= arg4) {
          return false;
        }
      }
    }


    for (const key of arg5) {
      if (arg1 && arg2 || arg3 > arg5 || (arg1 >= arg6)) {
        if (arg1 || arg3) {
          const test = arg1 + arg4 - arg6 * arg6 * arg2;
          if (test >= arg4) {
            return key;
          }
        }
      }
    }

    this.aVeryLongAndComplexMethod(arg1 + 1, arg2 - arg3, arg3 + arg6 * arg1, arg4, arg6 || arg1, arg3);
  }


  aVeryLongAndComplexMethod10(arg1, arg2, arg3, arg4, arg5, arg6) {
    if (!arg1) {
      return false;
    }

    if (arg1 && arg2 || arg3 > arg5 || (arg1 >= arg6)) {
      if (arg1 || arg3) {
        const test = arg1 + arg4 - arg6 * arg6 * arg2;
        if (test >= arg4) {
          return false;
        }
      }
    }


    for (const key of arg5) {
      if (arg1 && arg2 || arg3 > arg5 || (arg1 >= arg6)) {
        if (arg1 || arg3) {
          const test = arg1 + arg4 - arg6 * arg6 * arg2;
          if (test >= arg4) {
            return key;
          }
        }
      }
    }

    this.aVeryLongAndComplexMethod(arg1 + 1, arg2 - arg3, arg3 + arg6 * arg1, arg4, arg6 || arg1, arg3);
  }



}

/**
 * From https://github.com/OfficeDev/office-ui-fabric-react/blob/master/packages/utilities/src/css.ts
 */

/**
 * Concatination helper, which can merge class names together. Skips over falsey values.
 */
export function css() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
  }
  var classes = [];
  for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
      var arg = args_1[_a];
      if (arg) {
          if (typeof arg === 'string') {
              classes.push(arg);
          }
          else if ((arg.hasOwnProperty('toString') && typeof (arg.toString) === 'function')) {
              classes.push(arg.toString());
          }
          else {
              // tslint:disable-next-line:no-any
              for (var key in arg) {
                  // tslint:disable-next-line:no-any
                  if (arg[key]) {
                      classes.push(key);
                  }
              }
          }
      }
  }
  return classes.join(' ');
}

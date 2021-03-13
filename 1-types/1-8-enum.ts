{
  /**
   * Enum type
   */

  //JavaScript style
  const MAX_LENGTH = 100;
  const MONDAY = 0;
  const TUESDAY = 1;
  // or
  const JS_DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1 });
  const today = JS_DAYS_ENUM.MONDAY;

  //TypeScript style
  enum DAYS_ENUM {
    MONDAY,
    TUESDAY,
  }
  type DAYS_ENUM2 = "MONDAY" | "TUESDAY";
}

/*
    enum은 일단 쓰지 않는다. enum은 intersection type 선에서 정리가 가능하다.
 */

enum margin {
  t = "top",
  b = "bottom",
}
enum padding {
  t = "top",
  b = "bottom",
}
function doSomething(margin: margin, padding: padding) {}
doSomething(margin.t, padding.t);

type marginType = "top" | "bottom";
type paddingType = "top" | "bottom";
function doSomething2(margin: marginType, padding: paddingType) {}
doSomething2("top", "top");

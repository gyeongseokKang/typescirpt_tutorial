# Typescirpt_tutorial

\#Dream Coding \#Elle \#OOP

## 4강 객체지향

- class static keyword: class level로 선언하는 것. 같은 클래스마다 중복되는 값, 함수일 경우 class 레벨로 선언하여 관리할수 있음

  - class level로 관리됨으로 class instance 마다 생성하지 않아 메모리를 아낄수 있다.
  - ex) Math.PI. Math 객체를 선언하지 않았는데도 바로 달라붙어서 사용가능함.

- class instance를 만들수 있는 별도의 생성 메소드를 제공한 경우

  - { makeClass() { return new Class}}
  - class constructor에는 private keyword를 통해 외부에서 new Class()로 인한 생성은 막는 것이 좋다.

- 상속으로 인해 계층이 너무 깊어지면 문제가 생긴다 -> composition으로 뺀다.
  - composition이란 상속구조로 전부 만들지 말고 외부 객체를 넣어서 클래스를 구성하는 기술을 말한다.
  - 이때 외부객체는 넣는 것을 Dependency Injection(DI, 의존성 주입) 이라고 한다.
  - 하지만 외부객체를 넣어서 클래스를 만들면 객체간 밀접한 Coupling이 생기는 단점이 있다.
  - 이러한 단점을 없애기 위해 interface를 통해 객체간 연결형태를 정의하여 DeCoupling 시킨다.

## 7강 제네릭

- 세부적인 타입을 인자로 받아서 다시 추상적인 타입으로 맅넌하는 함수는 💣💣💣다.
  - 제네릭을 통해서 들어온 타입을 그대로 돌려주는 테크닉을 활용해라.

## 9강 Error Handling

- try, catch, finally는 쓰면 좋다. 하지만 이곳저곳에서 쓰는 것보다 가장 의미있는 곳에서 쓰는 것이 옳다.
  - 연속적인 호출이 이뤄지는 곳이 있으면 user에게 가장 가까운 마지막 호출단에서 error 처리를 하고 그에 따른 다른 결과물을 보여줘야한다.
  - 중간 단계에서 error handling이 되어버리면 그 후에 호출되는 부분에서도 그에 따른 후처리가 모두 필요하기 때문이다.

## 12강 컴파일러 옵션

- incremental : 컴파일하는데 이전 파일을 저장하여 속도를 높이는 기능, 용량을 더 잡아먹는데신 속도 빨라짐
- target : 원하는 자바스크립트로 컴파일 하는것
- module : 컴파일할때 원하는 import export로 바꿈
- allowJs, checkJs : 타입스크립트 개발환경에서 js를 허용하고 지원하는지 결정
- sourceMap : 디버깅을 편하기 위해 하는 기능
- composite : 이전의 빌드 정보를 저장하고 빌드를 빨리 시킴  
- 추가 팁 : 조작하고자 하는 element를 선택하고 콘솔창에서 $0 로 바로 접근가능하다.

feature -> roadmap -> must have, good to have, nice to have ->

## 실전 프로젝트
- ```document.querySelector(".document")! as HTMLElement``` 
  - 해당 코드와 같이 document가 있을것을 확실할때 type Assertion를 사용한다. 원래 querySelector는 null, HTMLElement를 반환할수 있다.
- html 창에서 ```div.test```를 입력하면 -> ```<div class="test"></div>```로 변환된다. 
- ```(div.test)*3```를 하면 3개가 나온다.
- innerHTML로 Element를 만드는 것은 좋은데, 추가적인 string를 그대로 떄려박으면 위험하다. 따라서 별도로 원하는 Element만 querySelect로 가져와서 추가작업을 진행한다.
- 배열의 마지막 요소를 가져오는 방법
  - ```array[array.length -1]``` 
  - ```array.slice(-1)[0]``` -> 이 방법의 장점은 배열의 메소드 체인으로 가능하다는 점이다.
    - 예를 들어 split를 한 경우 ```str.split("/")[str.split("/").length -1]``` 처럼 안에서 한번도 써야한다는 단점이 있다.
    - 근데 아래 방법을 사용할 경우 ```str.split("/").slice(-1)[0]``` 로 가져올 수 있다.

    
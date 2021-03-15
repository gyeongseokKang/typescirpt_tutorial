# typescirpt_tutorial

4강
* class static keyword: class level로 선언하는 것. 같은 클래스마다 중복되는 값, 함수일 경우 class 레벨로 선언하여 관리할수 있음 ( 메모리 이득. 사용적 편이성
	- class level로 관리됨으로 class instance 마다 생성하지 않아 메모리를 아낄수 있다.
	- ex) Math.PI. Math 객체를 선언하지 않았는데도 바로 달라붙어서 사용가능함.

* class instance를 만들수 있는 별도의 생성 메소드를 제공한 경우
	- { makeClass() { return new Class}} 
	- class constructor에는 private keyword를 통해 외부에서 new Class()로 인한 생성은 막는 것이 좋다.강

* 상속으로 인해 계층이 너무 깊어지면 문제가 생긴다 -> composition으로 뺀다.
	- composition이란 상속구조로 전부 만들지 말고 외부 객체를 넣어서 클래스를 구성하는 기술을 말한다.
	- 이때 외부객체는 넣는 것을 Dependency Injection(DI, 의존성 주입) 이라고 한다.
	- 하지만 외부객체를 넣어서 클래스를 만들면 객체간 밀접한 Coupling이 생기는 단점이 있다.
	- 이러한 단점을 없애기 위해 interface를 통해 객체간 연결형태를 정의하여 DeCoupling 시킨다.
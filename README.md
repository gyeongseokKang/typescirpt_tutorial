# typescirpt_tutorial

3강
* class static : class level로 선언하는 것. 같은 클래스마다 중복되는 값, 함수일 경우 class 레벨로 선언하여 관리할수 있음 ( 메모리 이득. 사용적 편이성)
    - ex) Math.PI 등이 있음. Math 객체를 선언하지 않았는데도 바로 달라붙어서 사용가능함 -> static으로 선언되었기 떼문
* 클래스를 생성할수 다른 생성 메소드를 제공한 경우, private constructor 작업을 통해 바로 new Class() 를 통한 생성은 막아놓는 것이 좋다. 제공한 메소드를 이용해 생성하도록 강제하자

interface FirstInterface {
	public void myMethod();
}

interface SecondInterface {
	public void myOtherMethod();
}

class DemoClass implements FirstInterface, SecondInterface {
	public void myMethod() {
		System.out.println("from first interface");
	}

	public void myOtherMethod() {
		System.out.println("from second interface");
	}
}

public class Main{
	public static void main(String[] args) {
		DemoClass d1 = new DemoClass();
		d1.myMethod();
		d1.myOtherMethod();
	}
}

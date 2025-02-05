public class Main {
	static void myMethod() {
		System.out.println("Got executed");
	}

	static void greet(String fname) {
		System.out.println("hello" + fname);
	}

	public static void main(String[] args) {
		myMethod();
		greet("abhay");
	}
}

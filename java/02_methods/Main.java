public class Main {
	static void myMethod() {
		System.out.println("Got executed");
	}

	static void greet(String fname) {
		System.out.println("hello" + fname);
	}

	//method overloading
	static int plusMethod(int a, int b) {
		return a+b;
	}

	static double plusMethod(double a, double b) {
		return a+b;
	}

	public static void main(String[] args) {
		myMethod();
		greet("abhay");
		int sum1 = plusMethod(6,9);
		double sum2 = plusMethod(6.9, 6.9);
		System.out.println("integer sum " +  sum1);
		System.out.println("double sum " + sum2);
	}
}

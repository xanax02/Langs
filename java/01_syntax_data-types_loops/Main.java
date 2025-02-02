public class Main {
	public static void main(String[] args) {
		System.out.println("HELLO WORLD");
		final int myNum = 15; //act as a constant
		
		float f1 = 35e3f;
		double d1 = 12e4d;

		System.out.println(f1);
		System.out.println(d1);

		char ascVal = 65;
		System.out.println(ascVal);

		// widening casting
		int anyNumber = 69;
		double anyDoubleNumber = anyNumber;
		System.out.println("int to double " + anyDoubleNumber);

		double anyDbouleNumber = 2.1d;
		int convertedIntFromDouble = (int) anyDbouleNumber;
		System.out.println("double to int" +  convertedIntFromDouble);
	}
}

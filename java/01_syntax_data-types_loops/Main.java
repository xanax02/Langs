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

		//Strings
		String txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		System.out.println("the length is " + txt.length());
		System.out.println("to lower case" + txt.toLowerCase());
	
		//switch
		int day = 2;
		switch(day) {
			case 1:
				System.out.println("Monday");
				break;
			case 2:
				System.out.println("Tuesday");
				break;
			case 3:
				System.out.println("Wednesday");
				break;
			case 4: 
				System.out.println("Thursday");
				break;
			default:
				System.out.println("Weekend");
			}

		//for each loop
		String[] cars = {"Volvo", "BMW", "Audi", "Mercedes" };
		for(String i: cars) {
			System.out.println(i);
		}

		System.out.println();

		//Arrays
		String[] cars2 = {"Volvo", "BMW", "Audi", "Mercedes" };
		System.out.println("Length" + cars2.length);

		//Multidimensional
		int[][] multiDArray = {{1,2,3}, {4,5,6}};
		System.out.println("multiD" + multiDArray[1][2]);


	}
}

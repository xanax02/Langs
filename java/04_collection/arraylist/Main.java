import java.util.ArrayList;
import java.util.Collections;

public class Main {

	public static void main(String[] args) {
		ArrayList<String> cars = new ArrayList<String>();
		cars.add("Volvo");
		cars.add("BMW");
		cars.add("Ford");
		cars.add("Mazda");
		System.out.println(cars);

		System.out.println(cars.get(0));

		cars.set(3, "Mecedes");
		cars.remove(2);

		System.out.println(cars + " " + cars.size());
		System.out.println("Sorting cars");

		Collections.sort(cars);
		System.out.println(cars);
		System.out.println();


		ArrayList<Integer> myNumbers = new ArrayList<Integer>();
		myNumbers.add(90);
		myNumbers.add(80);
		myNumbers.add(70);
		myNumbers.add(60);

		System.out.println(myNumbers);
		System.out.println("Sorting Numbers");
		Collections.sort(myNumbers);
		System.out.println(myNumbers);
		System.out.println("Reverse order");
		Collections.sort(myNumbers, Collections.reverseOrder());
		System.out.println(myNumbers);
	}
}

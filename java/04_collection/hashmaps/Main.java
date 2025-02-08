import java.util.HashMap;

public class Main {
	public static void main(String[] args) {
		HashMap<String, String> capitalCities = new HashMap<String, String>();
		capitalCities.put("England", "London");
		capitalCities.put("Germany", "Berlin");
		capitalCities.put("Norway", "Oslo");

		System.out.println(capitalCities);

		for(String i: capitalCities.keySet()) {
			System.out.println(i);
		}

		for(String i: capitalCities.values()) {
			System.out.println(i);
		}
	}
}

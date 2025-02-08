import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Main {
	public static void main(String[] args) {
		Pattern pattern = Pattern.compile("w3schools", Pattern.CASE_INSENSITIVE);
		Matcher matcher = pattern.matcher("Visit W3Schools!");
		boolean match = matcher.find();

		if(match){
			System.out.println("match found");
		}

		else {
			System.out.println("no match");
		}
	}
}

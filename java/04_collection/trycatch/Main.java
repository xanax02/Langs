public class Main {
	static void checkAge(int age) {
		if(age<18) {
			throw new ArithematicException("Access Denied");
		} else {
			System.out.println("Access Granted");
		}
	}

	public static void main(String[] args) {
		checkAge(15);
	}
}

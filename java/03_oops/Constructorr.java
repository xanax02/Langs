public class Constructorr {
	int x;

	public Constructorr(int y) {
		x = y;
	}

	public static void main(String[] args) {
		Constructorr myObj = new Constructorr(5);
		System.out.println(myObj.x);
	}
}

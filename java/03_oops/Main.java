public class Main {
	int x = 9;

	//static method
	static void myStaticMethod(){
		System.out.println("static method can be called without creating objects");
	}

	//publid method
	public void myPublicMethod() {
		System.out.println("Public methods must be called by creating objects");
	}

	public static void main(String[] args) {
		myStaticMethod();

		Main myPublicMethodObject = new Main();
		myPublicMethodObject.myPublicMethod();
	}
}

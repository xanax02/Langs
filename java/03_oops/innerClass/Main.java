class OuterClass {
	int x = 10;

	class InnerClass {
		int y = 5;
	}

	static class Inner2 {
		int z = 69;
	}
}

public class Main {
	public static void main(String[] args) {
		OuterClass.Inner2 myInner2 = new OuterClass.Inner2();
		System.out.println(myInner2.z);

		OuterClass o1 = new OuterClass();
		OuterClass.InnerClass i1 = o1.new InnerClass();
		System.out.println(o1.x + i1.y);
	}
}

public class AnotherMain implements Runnable {
	public static void main(String[] args) {
		AnotherMain  obj = new AnotherMain();
		Thread thread = new Thread(obj);
		thread.start();
		System.out.println("this is in main Thread");
	}

	public void run() {
		System.out.println("this is another thread");
	}
}

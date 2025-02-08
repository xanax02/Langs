public class Concurrency implements Runnable {
	public static int amount = 0;

	public static void main(String[] args) {
		Concurrency obj = new Concurrency();
		Thread thread = new Thread(obj);

		thread. start();

		while(thread.isAlive()) {
			System.out.println("Waiting");
		}

		System.out.println("Main: " + amount);
		amount++;
		System.out.println("Main: " + amount);
	}

	public void run() {
		amount++;
	}
}

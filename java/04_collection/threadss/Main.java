public class Main extends Thread {
	public static void main(String[] args) {
              	Main thread = new Main();
	       	thread.start();	
       	        System.out.println("this code is outside the thread");
       	 }
	

	public void run() {
		System.out.println("This code is running in a thread");
	}

	public void anotherRun() {
		System.out.println("Will this run insdie a thread");
	}
}


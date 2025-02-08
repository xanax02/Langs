class Animal {
	public void animalSound() {
		System.out.println("The animal make a sound");
	}

}

class Pig extends Animal {
	public void animalSound() { //overrides the method
		System.out.println("The pig says: wee wee");
	}
}

class Dog extends Animal {
	public void animalSound() {
		System.out.println("The dog says: bow bow");
	}
}

public class Main {
	public static void main(String[] args) {
		Animal anyAnimal = new Animal();
		Animal dog1 = new Dog();
		Animal pig1 = new Pig();

		anyAnimal.animalSound();
		dog1.animalSound();
		pig1.animalSound();
	}
}

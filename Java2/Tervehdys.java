import java.util.Scanner;

public class Tervehdys {

	public static void main(String[] args) {
		Scanner lukija = new Scanner(System.in);
		System.out.print("Mitä kello on? Anna tunnit: ");
		int tunti = lukija.nextInt();
		if (tunti >= 7 && tunti < 10) {
			System.out.println("Hyvää huomenta!");
		} else if (tunti >= 10 && tunti < 17) {
			System.out.println("Hyvää päivää!");
		} else if (tunti >= 17 && tunti < 22) {
			System.out.println("Hyvää iltaa!");
		} else {
			System.out.println("Hyvää yötä!");
		}
	}
}
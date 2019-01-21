import java.util.Scanner;

public class Ylinopeus {

	public static void main(String[] args) {
		// Kirjoita ratkaisusi tänne
		Scanner lukija = new Scanner(System.in);
		System.out.print("Kerro nopeus: ");
		int nopeus = lukija.nextInt();
		if (nopeus > 120) {
			System.out.println("Ylinopeussakko!");
		}
	}
}
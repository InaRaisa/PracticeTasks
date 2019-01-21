import java.util.Scanner;

public class Rikesakko {
	public static void main(String[] args) {
		Scanner lukija = new Scanner(System.in);

		System.out.print("Anna nopeusrajoitus: ");
		int rajoitus = lukija.nextInt();

		System.out.print("Anna nopeutesi: ");
		int nopeus = lukija.nextInt();

		int ylinopeus = nopeus - rajoitus;

		if (rajoitus >= 10 && rajoitus <= 60 && ylinopeus <= 15) {
			System.out.println("Rikesakko on 170");
		} else if (rajoitus >= 10 && rajoitus <= 60 && ylinopeus > 15 && ylinopeus <= 20) {
			System.out.println("Rikesakko on 200");
		} else if (rajoitus >= 70 && rajoitus <= 120 && ylinopeus <= 15) {
			System.out.println("Rikesakko on 140");
		} else if (rajoitus >= 70 & rajoitus <= 120 && ylinopeus > 15 && ylinopeus <= 20) {
			System.out.println("Rikesakko on 200");
		} else if (ylinopeus > 20) {
			System.out.println("Menee päiväsakoille");
		}
	}
}
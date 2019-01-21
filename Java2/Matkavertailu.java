import java.text.DecimalFormat;
import java.util.Scanner;

public class Matkavertailu {
	public static void main(String[] args) {
		Scanner lukija = new Scanner(System.in);
		DecimalFormat kaksiDesimaalia = new DecimalFormat("0.00");

		System.out.print("Montako matkaa teet kuukaudessa: ");
		int matkat = lukija.nextInt();

		System.out.print("Anna yksittäisen lipun hinta: ");
		Double yksittainenHinta = lukija.nextDouble();

		System.out.print("Anna kuukausilipun hinta: ");
		Double kuukausiHinta = lukija.nextDouble();

		Double yksittainenTotal = yksittainenHinta * matkat;

		if (kuukausiHinta < yksittainenTotal) {
			System.out.println("Kuukausilippu on " + kaksiDesimaalia.format(yksittainenTotal - kuukausiHinta)
					+ " euroa halvempi kuin yksittäinen");
		} else {
			System.out.println("Yksittäinen on " + kaksiDesimaalia.format(kuukausiHinta - yksittainenTotal)
					+ " euroa halvempi kuin kuukausilippu");
		}
	}
}
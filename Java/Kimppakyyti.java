import java.text.DecimalFormat;
import java.util.Scanner;

public class Kimppakyyti {
	public static void main(String[] args) {
	Scanner lukija = new Scanner(System.in);
	DecimalFormat kaksiDesimaalia = new DecimalFormat("0.00");

	System.out.print("Anna ajetut kilometrit: ");
	int kilometrit = lukija.nextInt();
	
	System.out.print("Anna kulutus per 100 km: ");
	Double kulutus = lukija.nextDouble();
	
	System.out.print("Anna polttoaineen litrahinta: ");
	Double litrahinta = lukija.nextDouble();
	
	System.out.print("Anna kimppakyytiläisten lukumäärä: ");
	int henkilot = lukija.nextInt();
	
	double kustannus = kilometrit * kulutus / 100.0 * litrahinta / henkilot;
	System.out.print("Bensakustannus per henkilö on " + kaksiDesimaalia.format(kustannus) + " euroa");
	
	}
}
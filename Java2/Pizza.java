import java.text.DecimalFormat;
import java.util.Scanner;

public class Pizza {
	public static void main(String[] args) {
		Scanner lukija = new Scanner(System.in);
		DecimalFormat kaksiDesimaalia = new DecimalFormat("0.00");

		System.out.print("Anna pizzojen hinnat (3): ");
		Double pizza1 = lukija.nextDouble();
		Double pizza2 = lukija.nextDouble();
		Double pizza3 = lukija.nextDouble();
		
		Double halvin;
		
		if (pizza1 < pizza2 && pizza1 < pizza3) {
			halvin = pizza1;
		} else if (pizza2 < pizza1 && pizza2 < pizza3) {
			halvin = pizza2;
		} else {
			halvin = pizza3;
		}
		
		Double yhteishinta = pizza1 + pizza2 + pizza3 - halvin;
		
		Double keskihinta = yhteishinta / 3;
		
		System.out.println("Maksettavaa: " + kaksiDesimaalia.format(yhteishinta));
		System.out.println("Yksittäisen hinta: " + kaksiDesimaalia.format(keskihinta));
	}
}
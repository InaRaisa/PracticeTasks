import java.text.DecimalFormat;
import java.util.Scanner;

public class Alennus {
	public static void main(String[] args) {
	Scanner lukija = new Scanner(System.in);
	DecimalFormat kaksiDesimaalia = new DecimalFormat("0.00");

	System.out.print("Anna alentamaton hinta: ");
	double hinta = lukija.nextDouble();
	
	System.out.print("Anna alennusprosentti: ");
	int alennusprosentti = lukija.nextInt();
	
	double alennettuHinta = hinta * (100.0 - alennusprosentti) / 100.0;
	System.out.print("Alennettu hinta on " + kaksiDesimaalia.format(alennettuHinta));
	
	}
}

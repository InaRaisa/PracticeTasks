import java.util.Scanner;

public class Tervehdys {

	public static void main(String[] args) {
		Scanner lukija = new Scanner(System.in);
		System.out.print("Mit� kello on? Anna tunnit: ");
		int tunti = lukija.nextInt();
		if (tunti >= 7 && tunti < 10) {
			System.out.println("Hyv�� huomenta!");
		} else if (tunti >= 10 && tunti < 17) {
			System.out.println("Hyv�� p�iv��!");
		} else if (tunti >= 17 && tunti < 22) {
			System.out.println("Hyv�� iltaa!");
		} else {
			System.out.println("Hyv�� y�t�!");
		}
	}
}
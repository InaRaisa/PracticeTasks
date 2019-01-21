import java.util.Scanner;

public class HeiEtunimi {

    public static void main(String[] args) {
        // Kirjoita ratkaisusi tänne
    	Scanner lukija = new Scanner(System.in);
    	System.out.print("Syötä etunimi: ");
    	String nimi = lukija.nextLine();
    	System.out.println("Hei " + nimi + " !");
    }
}
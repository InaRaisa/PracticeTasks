import java.util.Scanner;

public class HeiEtunimi {

    public static void main(String[] args) {
        // Kirjoita ratkaisusi t�nne
    	Scanner lukija = new Scanner(System.in);
    	System.out.print("Sy�t� etunimi: ");
    	String nimi = lukija.nextLine();
    	System.out.println("Hei " + nimi + " !");
    }
}
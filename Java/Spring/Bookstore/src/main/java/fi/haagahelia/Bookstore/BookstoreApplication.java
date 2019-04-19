package fi.haagahelia.Bookstore;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import fi.haagahelia.Bookstore.domain.Book;
import fi.haagahelia.Bookstore.domain.BookstoreRepository;
import fi.haagahelia.Bookstore.domain.Category;
import fi.haagahelia.Bookstore.domain.CategoryRepository;

@SpringBootApplication
public class BookstoreApplication {

	public static void main(String[] args) {
		SpringApplication.run(BookstoreApplication.class, args);
	}
	
	@Bean
	public CommandLineRunner demo(BookstoreRepository repository, CategoryRepository crepository) {
		return (args) -> {
			crepository.save(new Category("Fantasy"));
			crepository.save(new Category("Sci-Fi"));
			crepository.save(new Category("Fiction"));
			
			repository.save(new Book("The Hobbit", "J.R.R. Tolkien", "1937", "9 12345 67891", "7,90", crepository.findByName("Fantasy").get(0)));
			repository.save(new Book("The Martian", "Andy Weir", "2011", "8 12345 67891", "11,90", crepository.findByName("Sci-Fi").get(0)));
			repository.save(new Book("The Catcher In The Rye", "J.D. Salinger", "1951", "7 12345 67891", "7,90", crepository.findByName("Fiction").get(0)));
		};
	
	}

}


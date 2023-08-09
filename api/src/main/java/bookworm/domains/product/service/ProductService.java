package bookworm.domains.product.service;

import java.util.List;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;

import bookworm.domains.product.models.dto.Author;
import bookworm.domains.product.models.dto.Book;
import bookworm.domains.product.repositories.ProductQueries;


@ApplicationScoped
public class ProductService {
	@Inject
	ProductQueries queries;
	
	public List<Author> authorList() {
		return queries.getAuthors();
	}
	
	public Author author(int ID) {
		return queries.getAuthorByID(ID);
	}
	
	public List<Book> bookList() {
		return queries.getBooks();
	}
}
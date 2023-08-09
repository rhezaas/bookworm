package bookworm.domains.product;

import java.util.List;

import org.jboss.resteasy.reactive.ResponseStatus;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.enterprise.context.ApplicationScoped;

import bookworm.domains.product.models.dto.Author;
import bookworm.domains.product.models.dto.Book;
import bookworm.domains.product.service.ProductService;
import org.jboss.resteasy.reactive.RestPath;


@Path("/product")
@ApplicationScoped
public class Controller {
	@Inject
	ProductService service;
	
	@GET
	@Path("/author")
	@ResponseStatus(200)
	public List<Author> authorList() {
		return service.authorList();
	}
	
	@GET
	@Path("/author/{ID}")
	@ResponseStatus(200)
	public Author author(@RestPath int ID) {
		return service.author(ID);
	}
	
	@GET
	@Path("/book")
	@ResponseStatus(200)
	public List<Book> bookList() {
		return service.bookList();
	}
}
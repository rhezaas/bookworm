package bookworm.domains.product.repositories;

import java.util.List;

import io.quarkiverse.mybatis.runtime.meta.MapperDataSource;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.ResultMap;
import org.apache.ibatis.annotations.Select;

import bookworm.domains.product.models.dto.Author;
import bookworm.domains.product.models.dto.Book;


@Mapper
@MapperDataSource("dev")
public interface ProductQueries {
	@Select("""
		SELECT
			author.id,
			author.name
		FROM product.author author
		ORDER BY author.name""")
	List<Author> getAuthors();
	
	@Select("""
		SELECT
			author.id,
			author.name
		FROM product.author author
		WHERE author.id = #{ID}""")
	Author getAuthorByID(@Param("ID") int ID);
	
	@Select("""
		SELECT
			book.id ID,
			book.name,
			book.slug,
			book.isbn,
			book.price,
			book.stock,
			jsonb_build_object(
				'ID', author.id,
				'name', author.name
			) author
		FROM product.book book
		JOIN product.author author ON author.id = book.author_id""")
	@ResultMap("bookworm.infrastructures.database.Mapper.bookMapper")
	List<Book> getBooks();
}
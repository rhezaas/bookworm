import { PropsWithChildren } from "react";

import Pages from "components/pages";
import Body from "components/body";

import IndexMobile from "layout/index/mobile";
import IndexTablet from "layout/index/tablet";
import IndexDesktop from "layout/index/desktop";

// props
type Book = {
    id: number
    name: string
    slug: string
    author: {
        id: number
        name: string
    }
    isbn: string
    price: number
    stock: number
}

type Author = {
    id: number
    name: string
}

type Props = {
    books: Book[],
    authors: Author[],
};

// functions
const getBooks = async (): Promise<Book[]> => {
    const url = `${process.env.API_HOST}/book`;
    const options = {method: 'GET'};

    return fetch(url, options)
        .then(res => res.json())
        .then(json => json.message)
        .catch(_ => []);
}

const getAuthors = async (): Promise<Author[]> => {
    const url = `${process.env.API_HOST}/author`;
    const options = {method: 'GET'};

    return fetch(url, options)
        .then(res => res.json())
        .then(json => json.message)
        .catch(_ => []);
}

export async function getServerSideProps() {
    const books = await getBooks();
    const authors = await getAuthors();

    return {
      props: { books, authors }
    }
  }

export default function index({books, authors}: PropsWithChildren<Props>) {
    return (
        <Pages title="Bookworm">
            <Body className="has-background-white has-text-white">
                {/* mobile */}
                <IndexMobile books={books} authors={authors} />

                {/* tablet */}
                <IndexTablet books={books} authors={authors} />

                {/* desktop */}
                <IndexDesktop books={books} authors={authors} />
            </Body>
        </Pages>
    );
}
import { PropsWithChildren } from "react";

import SideBar from "bits/sidebar";
import Footer from "bits/footer";

// props
type Author = {
    id: number
    name: string
}

type Book = {
    id: number,
    name: string,
    slug: string,
    author: Author,
    isbn: string,
    price: number,
    stock: number
}

type Props = {
    books: Book[],
    authors: Author[],
};

// functions

export default function IndexDesktop({books, authors}: PropsWithChildren<Props>) {
    return (
        <div className="is-hidden-mobile is-hidden-tablet-only">
            <div className="columns is-gapless pt-5">
                {/* sidebar */}
                <div className="column is-one-fifth is-flex">
                    <SideBar authors={authors} disableLogo={true} />
                </div> {/* sidebar */}

                {/* content */}
                <div className="column">
                    <div className="mx-3">
                        {/* header */}
                        <div className="">
                            <div className="mt-5 mb-3">
                                <h1 className="is-size-1 has-text-weight-semibold has-text-black">Bookworm.id</h1>
                            </div>
                            <nav className="breadcrumb is-medium has-bullet-separator" aria-label="breadcrumbs">
                                <ul>
                                <li><a href="#"><span className="tag is-medium is-primary">Home</span></a></li>
                                </ul>
                            </nav>
                        </div> {/* header */}

                        {/* authors */}
                        <div className="mt-5">
                            <div className="has-background-grey-lighter" style={{borderRadius: "10px"}}>
                                <div className="p-3">
                                    <h1 className="is-size-3 has-text-weight-semibold has-text-black">Authors</h1>
                                </div>
                                <div className="columns mx-3 pb-5 is-gapless">
                                    {authors.slice(0, 7).map((_, index) => (
                                        <div className="column" key={index}>
                                            <figure className="image is-128x128">
                                                <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
                                            </figure>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div> 
                        {/* authors */}

                        {/* books */}
                        <div className="mt-5">
                            <div className="p-3">
                                <h1 className="is-size-3 has-text-weight-semibold has-text-black">Books</h1>
                            </div>
                            <div className="is-gapless is-flex is-flex-wrap-wrap">
                                {books.map((book, index) => (
                                    <div className="m-2" key={index} style={{width: "200px"}}>
                                        <div className="card">
                                            <div className="card-image">
                                                <figure className="image is-4by5">
                                                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
                                                </figure>
                                            </div>
                                            <div className="card-content p-2">
                                                <p>{book.name}</p>
                                                <h3 className="has-text-black has-text-weight-semibold">{`Rp. ${book.price}`}</h3>
                                            </div>
                                            <footer className="card-footer">
                                                <a href={`${process.env.WEB_HOST}/book/${book.id}`} className="card-footer-item">View</a>
                                            </footer>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div> {/* books */}
                    </div>
                </div> {/* content */}
            </div>
        
            <Footer />
        </div>
    );
}
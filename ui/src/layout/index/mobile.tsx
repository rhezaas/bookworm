import { PropsWithChildren } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenNib, faImages, faIcons, faGlobe, faGamepad, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

import BottomNavbar from "bits/bottomNavbar";

// props
type Author = {
    ID: number
    name: string
}

type Book = {
    ID: number,
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

export default function IndexMobile({books, authors}: PropsWithChildren<Props>) {
    return (
        <div className="is-hidden-tablet" style={{overflowX: "hidden"}}>
            {/* header */}
            <div className="px-3 pt-5">
                <div className="mt-5 mb-3">
                    <h1 className="is-size-2 has-text-weight-semibold has-text-black">Bookworm.id</h1>
                </div>
            </div> {/* header */}

            {/* menu stack */}
            <div className="columns mx-2 mt-2 is-variable is-1 is-mobile is-multiline">
                <div className="column is-4">
                    <a href="#">
                        <span className="icon-text box p-3 has-background-black-ter has-text-grey-light is-flex is-align-items-center">
                            <span className="icon is-normal mr-2">
                                <FontAwesomeIcon icon={faPenNib} />
                            </span>
                            <span className="is-size-6 has-text-weight-semibold">Design</span>
                        </span>
                    </a>
                </div>

                <div className="column is-4">
                    <a href="#">
                        <span className="icon-text box p-3 has-background-black-ter has-text-grey-light is-flex is-align-items-center">
                            <span className="icon is-normal mr-2">
                                <FontAwesomeIcon icon={faIcons} />
                            </span>
                            <span className="is-size-6 has-text-weight-semibold">Icon</span>
                        </span>
                    </a>
                </div>

                <div className="column is-4">
                    <a href="#">
                        <span className="icon-text box p-3 has-background-black-ter has-text-grey-light is-flex is-align-items-center">
                            <span className="icon is-normal mr-2">
                                <FontAwesomeIcon icon={faGlobe} />
                            </span>
                            <span className="is-size-6 has-text-weight-semibold">Web</span>
                        </span>
                    </a>
                </div>

                <div className="column is-4">
                    <a href="#">
                        <span className="icon-text box p-3 has-background-black-ter has-text-grey-light is-flex is-align-items-center">
                            <span className="icon is-normal mr-2">
                                <FontAwesomeIcon icon={faGamepad} />
                            </span>
                            <span className="is-size-6 has-text-weight-semibold">Game</span>
                        </span>
                    </a>
                </div>

                <div className="column is-4">
                    <a href="#">
                        <span className="icon-text box p-3 has-background-black-ter has-text-grey-light is-flex is-align-items-center">
                            <span className="icon is-normal mr-2">
                                <FontAwesomeIcon icon={faImages} />
                            </span>
                            <span className="is-size-6 has-text-weight-semibold">Image</span>
                        </span>
                    </a>
                </div>

                <div className="column is-4">
                    <a href="#">
                        <span className="icon-text box p-3 has-background-black-ter has-text-grey-light is-flex is-align-items-center">
                            <span className="icon mr-2" style={{height: 0, width: "5px"}}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </span>
                            <span className="is-size-6 has-text-weight-semibold">More...</span>
                        </span>
                    </a>
                </div>
            </div>

            {/* slider gallery */}
            <div className="px-3">
                <h1 className="is-size-3 has-text-weight-semibold has-text-black">Gallery</h1>
            </div>
            <div className="columns is-mobile mx-1 is-gapless">
                <div className="column is-4 m-2">
                    <div className="">
                        <figure className="image is-3by4" style={{borderRadius: "10px", overflow: "hidden"}}>
                            <img src="https://bulma.io/images/placeholders/600x480.png" />
                        </figure>
                        <h1 className="is-size-5 has-text-weight-semibold has-text-white">Gallery</h1>
                        <nav className="breadcrumb has-bullet-separator" aria-label="breadcrumbs">
                            <ul>
                                <li><a className="is-size-7 has-text-grey-light" href="#">Design</a></li>
                                <li><a className="is-size-7 has-text-grey-light" href="#">Icon</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className="column is-4 m-2">
                    <div className="">
                        <figure className="image is-3by4" style={{borderRadius: "10px", overflow: "hidden"}}>
                            <img src="https://bulma.io/images/placeholders/600x480.png" />
                        </figure>
                        <h1 className="is-size-5 has-text-weight-semibold has-text-white">Gallery</h1>
                        <nav className="breadcrumb has-bullet-separator" aria-label="breadcrumbs">
                            <ul>
                                <li><a className="is-size-7 has-text-grey-light" href="#">Design</a></li>
                                <li><a className="is-size-7 has-text-grey-light" href="#">Icon</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className="column is-4 m-2">
                    <div className="">
                        <figure className="image is-3by4" style={{borderRadius: "10px", overflow: "hidden"}}>
                            <img src="https://bulma.io/images/placeholders/600x480.png" />
                        </figure>
                        <h1 className="is-size-5 has-text-weight-semibold has-text-white">Gallery</h1>
                        <nav className="breadcrumb has-bullet-separator" aria-label="breadcrumbs">
                            <ul>
                                <li><a className="is-size-7 has-text-grey-light" href="#">Design</a></li>
                                <li><a className="is-size-7 has-text-grey-light" href="#">Icon</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>

            </div> {/* slider gallery */}

            {/* merchandise */}
            <div className="px-3">
                <h1 className="is-size-3 has-text-weight-semibold has-text-black">Books</h1>
            </div>
            <div className="columns is-flex-wrap-wrap is-align-content-center is-justify-content-center is-mobile mx-1 is-gapless">
                {books.map((book, index) => (
                    <div className="column is-5 m-2" key={index}>
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-3by4">
                                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
                                </figure>
                            </div>
                            <div className="card-content p-2">
                                <p>{book.name}</p>
                                <h3 className="has-text-black has-text-weight-semibold">{`Rp. ${book.price}`}</h3>
                            </div>
                        </div>
                    </div>

                ))}
            </div> {/* merchandise */}

            <div className="box"></div>
            <BottomNavbar />
        </div>
    );
}
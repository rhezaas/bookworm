import { PropsWithChildren } from 'react';

// props
type Author = {
    id: number
    name: string
}

type Props = {
    authors: Author[],
    disableLogo?: boolean
};


// pages
export default function SideBar({authors, disableLogo}: PropsWithChildren<Props>) {
    return (
        <div className="mx-3 columns is-gapless is-flex-direction-column" style={{width: "100%"}}>
            {/* SearchBar */}
            <div className="column mt-4 is-full">
                <div className="p-3 has-background-grey-lighter" style={{borderRadius: "10px"}}>
                    <div className="mb-3">
                        {!!disableLogo ? (
                            <h1 className="is-size-4 has-text-weight-semibold has-text-black">Search</h1>
                        ) : (
                            <img src="/assets/whiteLogo.png" alt="GombaStudio" style={{width: "70%", height: "auto"}} />
                        )}
                    </div>
                    <div className="mb-3">
                        <input className="input" type="text" placeholder="Search" />
                    </div>
                </div>
            </div> {/* SearchBar */}

            {/* Menu */}
            <div className="column mt-4 is-full is-flex" style={{flex: "1 1 auto"}}>
                <div className="p-3 has-background-grey-lighter" style={{borderRadius: "10px", width: "100%", flex: "1 1 auto"}}>
                    <div className="mb-3">
                        <h1 className="is-size-4 has-text-weight-semibold has-text-black">Catalog</h1>
                    </div>
                    <aside className="menu">
                        <a href="/gallery" className="has-text-black-ter"><h1 className="is-size-5 mb-2">Author</h1></a>
                        <ul className="menu-list">
                            {authors.map((author, index) => (
                                <li key={index}><a href={`${process.env.WEB_HOST}/author/${author.id}`}>{author.name}</a></li>
                            ))}
                        </ul>
                    </aside>
                </div>
            </div> {/* Menu */}
        </div>
    );
}
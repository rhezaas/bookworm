import { PropsWithChildren } from 'react';

// props
type Props = {
    className?: string,
};

// pages
export default function Body({children, className}: PropsWithChildren<Props>) {
    return (
        <div id='body'>
            <div className={className}>{children}</div>
        </div>
    );
}
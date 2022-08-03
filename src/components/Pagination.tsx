// @flow
import React from 'react';

type Props = {
    changePageHandler: (callback: Function) => void;
    page: number;
};
export const Pagination = ({changePageHandler, page}: Props) => {
    return (
        <nav>
            <ul className="pagination">
                <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous" onClick={() => changePageHandler((page: number) => page - 1)}>
                        <span aria-hidden="true">&laquo;</span>
                        <span className="sr-only">Previous</span>
                    </a>
                </li>
                <li className="page-item"><a className="page-link" href="#">{page}</a></li>
                <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next" onClick={() => changePageHandler((page: number) => page + 1)}>
                        <span aria-hidden="true">&raquo;</span>
                        <span className="sr-only">Next</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};
import React from 'react';

type Props = {
    changeFilterHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    changeSortHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
const Filter = ({changeFilterHandler, changeSortHandler}: Props) => {

    return (
        <div className="d-flex justify-content-end align-items-center mb-4 pt-2 pb-3">
            <p className="small mb-0 me-2 text-muted">Фильтр</p>
            <select className="select" onChange={(e) => changeFilterHandler(e)}>
                <option value="all">Все</option>
                <option value="completed">Завершенные</option>
                <option value="uncompleted">Незавершенные</option>
            </select>
            <p className="small mb-0 ms-4 me-2 text-muted">Сортировка</p>
            <select className="select" onChange={(e) => changeSortHandler(e)}>
                <option value="not">Нет</option>
                <option value="byDateDesc">По дате (возрастанию)</option>
                <option value="byDateAsc">По дате (убыванию)</option>
                <option value="byLengthDesc">По длине описания (возрастанию)</option>
                <option value="byLengthAsc">По длине описания (убыванию)</option>
            </select>
            <a href="#!" style={{color: '#23af89'}} data-mdb-toggle="tooltip" title="Ascending"><i
                className="fas fa-sort-amount-down-alt ms-2"></i></a>
        </div>
    );
};

export default Filter;
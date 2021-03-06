import React, { useContext } from "react";
import { CurrentPage } from "../../contexts/CurrentPage";
import "./PageListItem.css";

export default function PageListItem(props) {
    const {currentPage, setCurrentPage} = useContext(CurrentPage)
    const highlight = (props.pageIndex === currentPage) ? 'highlight' : null;

    return (
        <div className="page-list-item">
            {/* TODO:
                "Warning: Each child in a list should have a unique "key" prop."
                Component is rendering twice, I think due to React.StrictMode.
                Might not have to worry about this, as I think this only happpens in
                development???
            */}
            <li key={props.pageIndex} className={highlight}>
                <div onClick={() => setCurrentPage(props.pageIndex)}>{props.page.title}</div>
            </li>
        </div>
    )
}
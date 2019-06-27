import React, { Component } from 'react'
import { connect } from "react-redux"
import { getBooks } from "../actions"
import BookItem from "../widgetsUI/book_item"


export class HomeContainer extends Component {
    componentWillMount() {
        this.props.dispatch(getBooks(1, 0, "asc"));
    }
    renderItems = (books) => (
        books.list ? books.list.map(item => <BookItem {...item} id={item._id} />)
            : null
    )
    loadmore = () => {
        let l = this.props.books.list.length;
        this.props.dispatch(getBooks(l + 2, 0, "asc"));
    }
    render() {
        return (
            <div>
                {this.renderItems(this.props.books)}
                <div className="loadmore"
                    onClick={this.loadmore}
                >
                    Load More
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { books: state.books }
}


export default connect(mapStateToProps)(HomeContainer)

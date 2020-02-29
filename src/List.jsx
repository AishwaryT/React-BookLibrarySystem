import React, { PureComponent } from "react";
import { connect } from "react-redux";
import './listing.css';

class List extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { filter: "" };
  }

//set filter onSearch event
  handleChange = event => {
    this.setState({ filter: event.target.value });
  };

  render() {

    const { value, books } = this.props;
    // search books based on search box value 
    const { filter } = this.state;
    const lowercasedFilter = filter.toLowerCase();
    let searchBooks = books.filter(item => {
      if (item) {
        return Object.keys(item).some(key =>
          item[key]
            .toString()
            .toLowerCase()
            .includes(lowercasedFilter)
        );
      }
    });

    // Render book list based on search box 
    return (
      <div className="container">
       <div className="field">
              <label className="label" > Search Book: </label> 
            </div>
            <div className="control">
        <input
          className="input"
          placeholder="Search Book"
          onChange={this.handleChange}
          value={value}
        />
        </div>
        <table className="table is-responsive">
          <thead>
            <tr>
              <th>Books Name</th>
              <th>Books author</th>
              <th>Count</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {searchBooks &&
              searchBooks.map(
                book =>
                  book && (
                    <tr key={book.id}>
                      <td>{book.name}</td>
                      <td>{book.author}</td>
                      <td>{book.count}</td>
                      <td>{book.disc}</td>
                    </tr>
                  )
              )}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  books: (state && state.map(book => book && book.book)) || []
});

export default connect(mapStateToProps)(List);

import React, {Component} from "react";

const todoItems = [
  {
    id: 1,
    title: 'Go to the grocery store',
    description: 'Buy ingredients to prepare lunch and dinner',
    category: 2,
    priority: 3,
    completed: false,
  },
  {
    id: 2,
    title: 'Study',
    description: 'Study for your upcoming technical interviews',
    category: 1,
    priority: 2,
    completed: false,
  },
  {
    id: 3,
    title: 'Exercise',
    description: 'Play some basketball and go to the gym',
    category: 3,
    priority: 1,
    completed: false,
  },
  {
    id: 4,
    title: 'Finish work tickets',
    description: 'Complete your work assignments related to forklift AGV',
    category: 4,
    priority: 3,
    completed: false,
  },
  {
    id: 5,
    title: 'Update resume',
    description: 'Work on new projects and update your resume',
    category: 4,
    priority: 3,
    completed: false,
  },
  {
    id: 6,
    title: 'Leetcode',
    description: 'Work through the problems on Leetcode Interview 150',
    category: 4,
    priority: 3,
    completed: false,
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted: false,
      todoList: todoItems,
    };
  }

  displayCompleted = (status) => {
    if (status) {
      return this.setState({ viewCompleted: true });
    } else {
      return this.setState({ viewCompleted: false });
    }
  };

  renderTabList = () => {
    return (
      <div className="nav nav-tabs">
        <span className={this.state.viewCompleted ? "nav-link active" : "nav-link"} onClick={() => this.displayCompleted(true)}>
          Complete
        </span>
        <span className={this.state.viewCompleted ? "nav-link" : "nav-link active"} onClick={() => this.displayCompleted(false)}>\
          Incomplete
        </span>
      </div>
    );
  };

  renderItems = () => {
    const { viewCompleted } = this.state;
    const newItems = this.state.todoList.filter((item) => item.completed == viewCompleted);

    return newItems.map((item) => (
      <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
        <span className={`todo-title mr-2 ${this.state.viewCompleted ? "completed-todo" : ""}`}>
          {item.title}
        </span>
        <span>
          <button className="btn btn-secondary mr-2">
            Edit
          </button>
          <button className="btn btn-danger">
            Delete
          </button>
        </span>
      </li>
    ));
  };

  render() {
    return (
      <main className="container">
        <h1 className="text-white text-uppercase text-center my-4">Yamho's Todo List</h1>
        <div className="row">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <div className="mb-4">
                <button className="btn btn-primary">
                  Add Task
                </button>
              </div>
              {this.renderTabList()}
              <ul className="list-group list-group-flush border-top-0">
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>
      </main>
    );
  };
}

export default App;
import * as React from 'react';


export class SearchPanel extends React.Component<{},{login: string}> {
  constructor(props: any) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state = {login: ''};
  }

  render() {
    return (
      <div>
        <input value={this.state.login}
               onChange={this.handleChange} />
        <button onClick={this.handleSignUp}>
          search
        </button>
      </div>
    );
  }

  handleChange(e: any) {
    this.setState({login: e.target.value});
  }

  handleSignUp() {
    var t: string = this.state.login;
    alert(`We\`re searching for you ${t}...`);
  }
}
